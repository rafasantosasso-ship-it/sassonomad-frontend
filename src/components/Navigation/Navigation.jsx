import { NavLink } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLang } from '../../i18n/LanguageContext';
import './Navigation.css';

function Navigation({
  onCommunityClick, currentUser, onLoginClick, onLogoutClick, isOpen, onNavigate,
}) {
  const { t, path } = useLang();

  // No mobile (menu hamburguer), cada clique num link/botão deve fechar o
  // menu — onNavigate() faz isso; no desktop o Header passa um no-op.
  function handleCommunityClick() {
    onNavigate();
    onCommunityClick();
  }

  function handleLoginClick() {
    onNavigate();
    onLoginClick();
  }

  function handleLogoutClick() {
    onNavigate();
    onLogoutClick();
  }

  return (
    <nav className={isOpen ? 'sn-nav sn-nav--open' : 'sn-nav'}>
      <button className="sn-nav__link sn-nav__link--accent" type="button" onClick={handleCommunityClick}>
        {t('nav.community')}
      </button>
      <NavLink className="sn-nav__link" to={path('guides')} onClick={onNavigate}>
        {t('nav.guides')}
      </NavLink>

      {currentUser ? (
        <>
          <NavLink className="sn-nav__link" to={path('saved')} onClick={onNavigate}>
            {t('nav.savedGuides')}
          </NavLink>
          <NavLink
            className="sn-nav__user"
            to={path('myArea')}
            onClick={onNavigate}
            title={t('nav.myArea')}
          >
            {currentUser.name.split(' ')[0]}
          </NavLink>
          <button className="sn-nav__link" type="button" onClick={handleLogoutClick}>
            {t('nav.logout')}
          </button>
        </>
      ) : (
        <button className="sn-nav__link" type="button" onClick={handleLoginClick}>
          {t('nav.login')}
        </button>
      )}

      <LanguageSwitcher onNavigate={onNavigate} />
    </nav>
  );
}

export default Navigation;
