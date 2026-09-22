import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({
  onCommunityClick, currentUser, onLoginClick, onLogoutClick,
}) {
  return (
    <nav className="sn-nav">
      <button className="sn-nav__link sn-nav__link--accent" type="button" onClick={onCommunityClick}>
        Comunidade
      </button>
      <NavLink className="sn-nav__link" to="/guias">
        Guias
      </NavLink>

      {currentUser ? (
        <>
          <NavLink className="sn-nav__link" to="/guias-salvos">
            Guias salvos
          </NavLink>
          <span className="sn-nav__user">{currentUser.name}</span>
          <button className="sn-nav__link" type="button" onClick={onLogoutClick}>
            Sair
          </button>
        </>
      ) : (
        <button className="sn-nav__link" type="button" onClick={onLoginClick}>
          Entrar
        </button>
      )}
    </nav>
  );
}

export default Navigation;
