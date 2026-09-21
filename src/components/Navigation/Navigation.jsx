import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onCommunityClick }) {
  return (
    <nav className="sn-nav">
      <button className="sn-nav__link sn-nav__link_accent" type="button" onClick={onCommunityClick}>
        Comunidade
      </button>
      <NavLink className="sn-nav__link" to="/guias">
        Guias
      </NavLink>
      <NavLink className="sn-nav__link" to="/fusos">
        Fusos horários
      </NavLink>
    </nav>
  );
}

export default Navigation;
