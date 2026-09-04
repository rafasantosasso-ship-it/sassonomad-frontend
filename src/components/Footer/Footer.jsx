import './Footer.css';

function Footer() {
  return (
    <footer className="sn-footer" id="contato">
      <div className="sn-footer__contact">
        <a className="sn-footer__link" href="mailto:contato@sassonomad.com">
          <svg className="sn-footer__icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 6l10 7 10-7" />
          </svg>
          <span>contato@sassonomad.com</span>
        </a>
        <a className="sn-footer__link" href="https://instagram.com/sassonomad" target="_blank" rel="noreferrer">
          <svg className="sn-footer__icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          <span>@sassonomad</span>
        </a>
      </div>
      <p className="sn-footer__copy">© {new Date().getFullYear()} Sasso Nomad. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
