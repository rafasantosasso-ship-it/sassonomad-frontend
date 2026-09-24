import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({
  onCommunityClick, currentUser, onLoginClick, onLogoutClick, isOpen, onNavigate,
}) {
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
        Comunidade
      </button>
      <NavLink className="sn-nav__link" to="/guias" onClick={onNavigate}>
        Guias
      </NavLink>

      {currentUser ? (
        <>
          <NavLink className="sn-nav__link" to="/guias-salvos" onClick={onNavigate}>
            Guias salvos
          </NavLink>
          <NavLink
            className="sn-nav__user"
            to="/minha-area"
            onClick={onNavigate}
            title="Minha área"
          >
            {currentUser.name.split(' ')[0]}
          </NavLink>
          <button className="sn-nav__link" type="button" onClick={handleLogoutClick}>
            Sair
          </button>
        </>
      ) : (
        <button className="sn-nav__link" type="button" onClick={handleLoginClick}>
          Entrar
        </button>
      )}
    </nav>
  );
}

export default Navigation;
