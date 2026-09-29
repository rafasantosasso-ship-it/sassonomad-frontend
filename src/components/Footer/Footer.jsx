import { Link } from 'react-router-dom';
import logoLight from '../../images/brand/logo-lockup-light.svg';
import { useLang } from '../../i18n/LanguageContext';
import './Footer.css';

function Footer({ onJoinClick }) {
  const { t, path } = useLang();

  return (
    <footer className="sn-footer" id="contato">
      <div className="sn-footer__inner">
        <div className="sn-footer__col sn-footer__col--brand">
          <img className="sn-footer__logo" src={logoLight} alt="Sasso Nomad" />
          <p className="sn-footer__bio">{t('footer.bio')}</p>
        </div>

        <div className="sn-footer__col">
          <h3 className="sn-footer__heading">{t('footer.explore')}</h3>
          <nav className="sn-footer__nav">
            <Link className="sn-footer__nav-link" to={path('guideSardegna')}>{t('footer.sardegna')}</Link>
            <Link className="sn-footer__nav-link" to={path('guideChapada')}>Chapada Diamantina</Link>
            <Link className="sn-footer__nav-link" to={path('guideNomadismo')}>{t('footer.nomadismo')}</Link>
            <Link className="sn-footer__nav-link" to={path('guides')}>{t('footer.allGuides')}</Link>
          </nav>
        </div>

        <div className="sn-footer__col">
          <h3 className="sn-footer__heading">{t('footer.community')}</h3>
          <nav className="sn-footer__nav">
            <button
              className="sn-footer__nav-link"
              type="button"
              onClick={onJoinClick}
            >
              {t('footer.join')}
            </button>
            <Link className="sn-footer__nav-link" to={path('home', 'sobre')}>{t('footer.about')}</Link>
            <Link className="sn-footer__nav-link" to={path('faq')}>{t('footer.faq')}</Link>
            <a className="sn-footer__nav-link" href="#contato">{t('footer.contact')}</a>
          </nav>
        </div>

        <div className="sn-footer__col">
          <h3 className="sn-footer__heading">{t('footer.follow')}</h3>
          <div className="sn-footer__social">
            <a
              className="sn-footer__link"
              href="https://instagram.com/sassonomad"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="sn-footer__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <defs>
                  <linearGradient id="sn-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FEE411" />
                    <stop offset="15%" stopColor="#FEDA77" />
                    <stop offset="30%" stopColor="#F58529" />
                    <stop offset="50%" stopColor="#DD2A7B" />
                    <stop offset="70%" stopColor="#8134AF" />
                    <stop offset="100%" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="6" fill="url(#sn-ig-gradient)" />
                <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" fill="none" stroke="#fff" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.5" />
                <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
              </svg>
              <span>@sassonomad</span>
            </a>
            <a
              className="sn-footer__link"
              href="https://pinterest.com/sassonomad"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="sn-footer__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#E60023" />
                <path
                  d="M12.2 5.5c-3.7 0-5.6 2.6-5.6 4.8 0 1.3.5 2.5 1.6 2.9.2.1.3 0 .4-.2l.1-.6c0-.2 0-.2-.1-.4-.3-.4-.5-.9-.5-1.6 0-2.1 1.6-4 4.1-4 2.2 0 3.5 1.4 3.5 3.2 0 2.4-1.1 4.4-2.6 4.4-.9 0-1.5-.7-1.3-1.6.3-1 .8-2.1.8-2.9 0-.7-.4-1.2-1.1-1.2-.9 0-1.6.9-1.6 2.1 0 .8.3 1.3.3 1.3s-.9 3.9-1.1 4.6c-.3 1.4-.1 3 0 3.2 0 .1.1.1.2 0 .1-.1 1.2-1.5 1.6-2.9l.6-2.3c.3.6 1.2 1.1 2.1 1.1 2.8 0 4.8-2.6 4.8-5.8 0-3.1-2.5-5.4-5.8-5.4Z"
                  fill="#fff"
                />
              </svg>
              <span>Sasso Nomad</span>
            </a>
            <a
              className="sn-footer__link"
              href="https://www.facebook.com/profile.php?id=61591071345446"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="sn-footer__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <rect width="24" height="24" rx="5" fill="#1877F2" />
                <path
                  d="M16 8.5h-1.6c-.5 0-.9.4-.9.9v1.6h2.4l-.3 2.4h-2.1V19h-2.4v-5.6H9V11h1.8V9.1c0-1.8 1.1-2.8 2.7-2.8H16v2.2Z"
                  fill="#fff"
                />
              </svg>
              <span>Sasso Nomad</span>
            </a>
          </div>
        </div>
      </div>

      <div className="sn-footer__bottom">
        <a className="sn-footer__email" href="mailto:nomad@sassonomad.com">
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
          <span>nomad@sassonomad.com</span>
        </a>
        <p className="sn-footer__copy">
          © {new Date().getFullYear()} Sasso Nomad. {t('footer.rights')} ·{' '}
          <Link className="sn-footer__legal" to={path('privacy')}>{t('footer.privacy')}</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
