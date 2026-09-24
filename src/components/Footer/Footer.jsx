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
            <a
              className="sn-footer__link"
              href="https://pinterest.com/sassonomad"
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
                <circle cx="12" cy="12" r="9.5" />
                <path d="M9.5 19c.6-2 1.6-6.2 1.6-6.2M12 12c-1 0-2.4-.8-2.4-2.7 0-2.1 1.7-3.9 4-3.9 2 0 3.6 1.4 3.6 3.4 0 2.4-1.2 4.7-3.1 4.7-.9 0-1.6-.7-1.4-1.6" />
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
