import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import TimeZonesPage from '../TimeZonesPage/TimeZonesPage';
import GuidesGrid from '../GuidesGrid/GuidesGrid';
import GuideChapada from '../GuideChapada/GuideChapada';
import GuideSardegna from '../GuideSardegna/GuideSardegna';
import GuideNomadismo from '../GuideNomadismo/GuideNomadismo';
import ArticleSardegna from '../ArticleSardegna/ArticleSardegna';
import ArticleChapada from '../ArticleChapada/ArticleChapada';
import ArticleNomadismo from '../ArticleNomadismo/ArticleNomadismo';
import ArticleIreland from '../ArticleIreland/ArticleIreland';
import ArticleCagliari from '../ArticleCagliari/ArticleCagliari';
import FaqPage from '../FaqPage/FaqPage';
import NotFound from '../NotFound/NotFound';
import CommunityModal from '../CommunityModal/CommunityModal';
import AuthModal from '../AuthModal/AuthModal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedGuidesPage from '../SavedGuidesPage/SavedGuidesPage';
import Preloader from '../Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthModalContext from '../../contexts/AuthModalContext';
import { getToken, clearToken, getUserInfo } from '../../utils/MainApi';
import useScrollToHash from '../../hooks/useScrollToHash';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  useScrollToHash();

  useEffect(() => {
    const minDelay = new Promise((resolve) => { setTimeout(resolve, 600); });

    const token = getToken();
    const authCheck = token
      ? getUserInfo().then(setCurrentUser).catch(() => clearToken())
      : Promise.resolve();

    Promise.all([minDelay, authCheck]).then(() => setIsLoading(false));
  }, []);

  const handleOpenCommunityModal = () => setIsCommunityModalOpen(true);
  const handleCloseCommunityModal = () => setIsCommunityModalOpen(false);

  const handleOpenLoginModal = useCallback(() => {
    setAuthModalMode('login');
    setIsAuthModalOpen(true);
  }, []);

  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  function handleLoginSuccess() {
    getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setIsAuthModalOpen(false);
      })
      .catch(() => {
        clearToken();
      });
  }

  function handleLogout() {
    clearToken();
    setCurrentUser(null);
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthModalContext.Provider value={{ openLogin: handleOpenLoginModal }}>
        <div className="sn-app">
          <Header
            onCommunityClick={handleOpenCommunityModal}
            currentUser={currentUser}
            onLoginClick={handleOpenLoginModal}
            onLogoutClick={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Main onJoinClick={handleOpenCommunityModal} />} />
            <Route path="/fusos" element={<TimeZonesPage />} />
            <Route path="/guias" element={<GuidesGrid />} />
            <Route path="/guias/chapada" element={<GuideChapada />} />
            <Route path="/guias/sardegna" element={<GuideSardegna />} />
            <Route path="/guias/nomadismo" element={<GuideNomadismo />} />
            <Route
              path="/guias-salvos"
              element={(
                <ProtectedRoute>
                  <SavedGuidesPage />
                </ProtectedRoute>
              )}
            />
            <Route path="/sardegna/vilarejos-de-pedra-e-mar-turquesa" element={<ArticleSardegna />} />
            <Route path="/chapada-diamantina/trilhas-pocos-e-lencois" element={<ArticleChapada />} />
            <Route path="/nomadismo-digital/trabalhar-de-qualquer-lugar" element={<ArticleNomadismo />} />
            <Route path="/irlanda/vida-de-nomade-alem-do-centro-caotico-de-dublin" element={<ArticleIreland />} />
            <Route path="/sardegna/cagliari-capital-que-tambem-e-riviera" element={<ArticleCagliari />} />
            <Route path="/perguntas-frequentes" element={<FaqPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer onJoinClick={handleOpenCommunityModal} />
          {isCommunityModalOpen && <CommunityModal onClose={handleCloseCommunityModal} />}
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
