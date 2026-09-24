import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import TimeZonesPage from '../TimeZonesPage/TimeZonesPage';
import GuidesGrid from '../GuidesGrid/GuidesGrid';
import GuidePage from '../GuidePage/GuidePage';
import ArticlePage from '../ArticlePage/ArticlePage';
import FaqPage from '../FaqPage/FaqPage';
import NotFound from '../NotFound/NotFound';
import CommunityModal from '../CommunityModal/CommunityModal';
import AuthModal from '../AuthModal/AuthModal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedGuidesPage from '../SavedGuidesPage/SavedGuidesPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import ResetPasswordPage from '../ResetPasswordPage/ResetPasswordPage';
import MyAreaPage from '../MyAreaPage/MyAreaPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import Preloader from '../Preloader/Preloader';
import LanguageBanner from '../LanguageBanner/LanguageBanner';
import { RootRedirect, LegacyRedirect } from '../LangRedirect/LangRedirect';
import { LANGS } from '../../i18n/config';
import { ROUTES, localePath } from '../../i18n/routes';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthModalContext from '../../contexts/AuthModalContext';
import { getToken, clearToken, getUserInfo } from '../../utils/MainApi';
import useScrollToHash from '../../hooks/useScrollToHash';
import useScrollToTop from '../../hooks/useScrollToTop';
import './App.css';

// `prerendered`: a página já veio pronta do build (HTML estático). Nesse
// caso não mostra o preloader — o conteúdo já está na tela.
function App({ prerendered = false }) {
  const [isLoading, setIsLoading] = useState(!prerendered);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [communitySource, setCommunitySource] = useState('site');
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  useScrollToHash();
  useScrollToTop();

  useEffect(() => {
    const minDelay = new Promise((resolve) => { setTimeout(resolve, 600); });

    const token = getToken();
    const authCheck = token
      ? getUserInfo().then(setCurrentUser).catch(() => clearToken())
      : Promise.resolve();

    Promise.all([prerendered ? null : minDelay, authCheck]).then(() => setIsLoading(false));
  }, [prerendered]);

  // `source` diz de onde o popup foi aberto (menu, home, rodapé, artigo) e
  // vai junto com o cadastro para as estatísticas da lista.
  const handleOpenCommunityModal = useCallback((source) => {
    setCommunitySource(typeof source === 'string' ? source : 'site');
    setIsAuthModalOpen(false);
    setIsCommunityModalOpen(true);
  }, []);
  const handleCloseCommunityModal = () => setIsCommunityModalOpen(false);

  const handleOpenLoginModal = useCallback(() => {
    setIsCommunityModalOpen(false);
    setAuthModalMode('login');
    setIsAuthModalOpen(true);
  }, []);

  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  // Depois que um token novo foi salvo (login, conta criada pelo link do
  // e-mail, senha redefinida): carrega o usuário. Devolve a Promise pra
  // quem chamou poder navegar só depois que o usuário estiver no contexto.
  const handleAuthenticated = useCallback(() => getUserInfo()
    .then((user) => {
      setCurrentUser(user);
      setIsAuthModalOpen(false);
    })
    .catch((err) => {
      clearToken();
      return Promise.reject(err);
    }), []);

  function handleLoginSuccess() {
    handleAuthenticated().catch(() => {});
  }

  function handleLogout() {
    clearToken();
    setCurrentUser(null);
  }

  // Uma página por chave do mapa de rotas (src/i18n/routes.js). O idioma
  // vem da URL; cada página lê o texto do idioma atual.
  function renderPage(key) {
    switch (key) {
      case 'home':
        return <Main onJoinClick={() => handleOpenCommunityModal('home')} />;
      case 'guides':
        return <GuidesGrid />;
      case 'guideChapada':
      case 'guideSardegna':
      case 'guideNomadismo':
        return <GuidePage routeKey={key} />;
      case 'articleSardegna':
      case 'articleChapada':
      case 'articleNomadismo':
      case 'articleIreland':
      case 'articleCagliari':
        return <ArticlePage routeKey={key} />;
      case 'faq':
        return <FaqPage />;
      case 'timezones':
        return <TimeZonesPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'saved':
        return (
          <ProtectedRoute>
            <SavedGuidesPage />
          </ProtectedRoute>
        );
      case 'myArea':
        return (
          <ProtectedRoute>
            <MyAreaPage />
          </ProtectedRoute>
        );
      case 'welcome':
        return <WelcomePage onAuthenticated={handleAuthenticated} />;
      case 'resetPassword':
        return <ResetPasswordPage onAuthenticated={handleAuthenticated} />;
      default:
        return <NotFound />;
    }
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthModalContext.Provider
        value={{ openLogin: handleOpenLoginModal, openCommunity: handleOpenCommunityModal }}
      >
        <div className="sn-app">
          <Header
            onCommunityClick={() => handleOpenCommunityModal('menu')}
            currentUser={currentUser}
            onLoginClick={handleOpenLoginModal}
            onLogoutClick={handleLogout}
          />
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            {LANGS.map((lang) => Object.keys(ROUTES).map((key) => (
              <Route key={`${lang}-${key}`} path={localePath(key, lang)} element={renderPage(key)} />
            )))}
            {Object.keys(ROUTES).filter((key) => key !== 'home').map((key) => (
              <Route
                key={`legacy-${key}`}
                path={`/${ROUTES[key].pt}`}
                element={<LegacyRedirect to={localePath(key, 'pt')} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <LanguageBanner />
          <Footer onJoinClick={() => handleOpenCommunityModal('rodape')} />
          {isCommunityModalOpen && (
            <CommunityModal onClose={handleCloseCommunityModal} source={communitySource} />
          )}
          {isAuthModalOpen && (
            <AuthModal
              mode={authModalMode}
              onClose={handleCloseAuthModal}
              onSwitchMode={setAuthModalMode}
              onLoginSuccess={handleLoginSuccess}
            />
          )}
        </div>
      </AuthModalContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
