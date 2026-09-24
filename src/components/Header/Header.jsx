import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoLight from '../../images/brand/logo-lockup-light.svg';
import logoDark from '../../images/brand/logo-lockup-dark.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({
  onCommunityClick, currentUser, onLoginClick, onLogoutClick,
}) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isSolid, setIsSolid] = useState(!isHome);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsSolid(true);
      return undefined;
    }

    function handleScroll() {
      setIsSolid(window.scrollY > 60);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Fecha o menu mobile sempre que a rota muda (ex.: usuário navegou pelo
  // teclado ou o link foi ativado sem passar por handleNavigate).
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleNavigate() {
    setIsMenuOpen(false);
  }

  return (
    <header className={isSolid || isMenuOpen ? 'sn-header sn-header--solid' : 'sn-header'}>
      <div className="sn-header__inner">
        <NavLink className="sn-header__logo" to="/">
          <img className="sn-header__logo-img sn-header__logo-img--light" src={logoLight} alt="Sasso Nomad" />
          <img className="sn-header__logo-img sn-header__logo-img--dark" src={logoDark} alt="Sasso Nomad" />
        </NavLink>

        <button
          className="sn-header__menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <Navigation
          onCommunityClick={onCommunityClick}
          currentUser={currentUser}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          isOpen={isMenuOpen}
          onNavigate={handleNavigate}
        />
      </div>
    </header>
  );
}

export default Header;
