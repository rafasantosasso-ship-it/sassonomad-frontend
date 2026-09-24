import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { browserLang, readLangCookie, writeLangCookie } from '../../i18n/config';
import { localePath } from '../../i18n/routes';
import UI from '../../i18n/ui';
import './LanguageBanner.css';

const DISMISS_KEY = 'sn_lang_banner_dismissed';

/**
 * Aviso discreto nas páginas internas: "Esta página também está em
 * português". Aparece quando o navegador está em PT/IT/EN, é diferente do
 * idioma da página e a pessoa nunca escolheu um idioma no seletor. Nunca
 * redireciona sozinho (links compartilhados abrem exatamente o que foi
 * compartilhado — e o Google vê cada versão).
 */
function LanguageBanner() {
  const { lang, routeKey } = useLang();
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      dismissed = false;
    }
    const preferred = browserLang();
    if (!routeKey || dismissed || readLangCookie() || !preferred || preferred === lang) {
      setSuggested(null);
      return;
    }
    setSuggested(preferred);
  }, [lang, routeKey]);

  if (!suggested) return null;

  const text = UI[suggested].langBanner;

  function handleDismiss() {
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // sessionStorage indisponível: o aviso só some nesta tela.
    }
    setSuggested(null);
  }

  return (
    <div className="sn-lang-banner" lang={suggested} role="region" aria-label={text.text}>
      <p className="sn-lang-banner__text">{text.text}</p>
      <Link
        className="sn-lang-banner__action"
        to={localePath(routeKey, suggested)}
        hrefLang={suggested}
        onClick={() => writeLangCookie(suggested)}
      >
        {text.action} →
      </Link>
      <button
        className="sn-lang-banner__close"
        type="button"
        aria-label={text.dismiss}
        onClick={handleDismiss}
      >
        ✕
      </button>
    </div>
  );
}

export default LanguageBanner;
