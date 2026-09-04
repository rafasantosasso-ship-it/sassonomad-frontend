import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="sn-nav">
      <ul className="sn-nav__list">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sn-nav__link sn-nav__link_active' : 'sn-nav__link'
            }
            to="/"
            end
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sn-nav__link sn-nav__link_active' : 'sn-nav__link'
            }
            to="/clima"
          >
            Clima
          </NavLink>
        </li>
        <li>
          <a className="sn-nav__link" href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
