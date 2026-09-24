import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { LANGS, LANG_META, writeLangCookie } from '../../i18n/config';
import { localePath } from '../../i18n/routes';
import './LanguageSwitcher.css';

/**
 * PT · IT · EN — cada opção leva para a MESMA página no outro idioma
 * (não para a home) e grava a escolha no cookie que o Nginx também lê.
 * Sem bandeiras: bandeira é país, não idioma.
 */
function LanguageSwitcher({ onNavigate }) {
  const { lang, routeKey, t } = useLang();
  const { search, hash } = useLocation();

  return (
    <div className="sn-lang" role="group" aria-label={t('nav.language')}>
      {LANGS.map((code) => {
        const target = `${localePath(routeKey || 'home', code)}${routeKey ? search : ''}${hash}`;
        const isCurrent = code === lang;
        return (
          <Link
            key={code}
            className={`sn-lang__option${isCurrent ? ' sn-lang__option--current' : ''}`}
            to={target}
            hrefLang={code}
            lang={code}
            title={LANG_META[code].name}
            aria-label={LANG_META[code].name}
            aria-current={isCurrent ? 'true' : undefined}
            onClick={() => {
              writeLangCookie(code);
              if (onNavigate) onNavigate();
            }}
          >
            {LANG_META[code].short}
          </Link>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
