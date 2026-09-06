import { Link } from 'react-router-dom';
import logoLight from '../../images/brand/logo-lockup-light.svg';
import './Footer.css';

function Footer({ onJoinClick }) {
  return (
    <footer className="sn-footer" id="contato">
      <div className="sn-footer__inner">
        <div className="sn-footer__col sn-footer__col_brand">
          <img className="sn-footer__logo" src={logoLight} alt="Sasso Nomad" />
          <p className="sn-footer__bio">
            Rotas de viagem lenta, nomadismo digital sem enrolação e os lugares que realmente
            merecem a demora. Sardegna, Chapada Diamantina e o que vier depois.
          </p>
        </div>

        <div className="sn-footer__col">
          <h3 className="sn-footer__heading">Explorar</h3>
          <nav className="sn-footer__nav">
            <Link className="sn-footer__nav-link" to="/guias/sardegna">Sardegna</Link>
            <Link className="sn-footer__nav-link" to="/guias/chapada">Chapada Diamantina</Link>
            <Link className="sn-footer__nav-link" to="/guias/nomadismo">Nomadismo Digital</Link>
            <Link className="sn-footer__nav-link" to="/guias">Todos os Guias</Link>
          </nav>
        </div>

        <div className="sn-footer__col">
          <h3 className="sn-footer__heading">Comunidade</h3>
          <nav className="sn-footer__nav">
            <button
              className="sn-footer__nav-link sn-footer__nav-link_button"
              type="button"
              onClick={onJoinClick}
            >
              Participar da Comunidade
            </button>
            <Link className="sn-footer__nav-link" to="/#sobre">Sobre o Sasso Nomad</Link>
            <a className="sn-footer__nav-link" href="#contato">Contato</a>
          </nav>
        </div>

        <div className="sn-footer__col">
          <h3 className="sn-footer__heading">Siga a Sassonomad</h3>
          <div className="sn-footer__social">
            <a
              className="sn-footer__link"
              href="https://instagram.com/sassonomad"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="sn-footer__icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
              </svg>
              <span>@sassonomad</span>
            </a>
            <span className="sn-footer__link sn-footer__link_soon">
              <svg
                className="sn-footer__icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="9.5" />
                <path d="M9.5 19c.6-2 1.6-6.2 1.6-6.2M12 12c-1 0-2.4-.8-2.4-2.7 0-2.1 1.7-3.9 4-3.9 2 0 3.6 1.4 3.6 3.4 0 2.4-1.2 4.7-3.1 4.7-.9 0-1.6-.7-1.4-1.6" />
              </svg>
              <span>@sassonomad</span>
              <span className="sn-footer__soon-tag">em breve</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sn-footer__bottom">
        <a className="sn-footer__email" href="mailto:contato@sassonomad.com">
          <svg
            className="sn-footer__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 6l10 7 10-7" />
          </svg>
          <span>contato@sassonomad.com</span>
        </a>
        <p className="sn-footer__copy">
          © {new Date().getFullYear()} Sasso Nomad. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
