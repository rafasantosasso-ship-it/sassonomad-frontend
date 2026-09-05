import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ onCommunityClick }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isSolid, setIsSolid] = useState(!isHome);

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

  return (
    <header className={isSolid ? 'sn-header sn-header_solid' : 'sn-header'}>
      <NavLink className="sn-header__logo" to="/">
        <svg
          className="sn-header__mark"
          width="30"
          height="30"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 6 L35 6 L15 35 Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <line x1="7" y1="18.5" x2="27" y2="18.5" stroke="var(--color-accent)" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
        <span className="sn-header__wordmark">
          <span className="sn-header__sasso">Sasso</span>
          <span className="sn-header__nomad">Nomad</span>
        </span>
      </NavLink>

      <nav className="sn-header__actions">
        <button className="sn-header__action" type="button" onClick={onCommunityClick}>
          Comunidade
        </button>
        <a className="sn-header__action sn-header__action_solid" href="#guias">
          Guias
        </a>
      </nav>
    </header>
  );
}

export default Header;
