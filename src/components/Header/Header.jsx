import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ onLoginClick }) {
  return (
    <header className="sn-header">
      <NavLink className="sn-header__logo" to="/">Sasso Nomad</NavLink>
      <div className="sn-header__right">
        <Navigation />
        <button className="sn-header__login" type="button" onClick={onLoginClick}>
          Entrar
        </button>
      </div>
    </header>
  );
}

export default Header;
