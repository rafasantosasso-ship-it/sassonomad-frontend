import {
  Fragment, createContext, useCallback, useContext, useMemo,
} from 'react';
import { useLocation } from 'react-router-dom';
import { SOURCE_LANG, detectLang, LANG_META } from './config';
import { localePath, matchRoute } from './routes';
import UI from './ui';

const LanguageContext = createContext(null);

function lookup(dict, key) {
  return key.split('.').reduce((node, part) => (node == null ? node : node[part]), dict);
}

function interpolate(text, vars) {
  if (!vars || typeof text !== 'string') return text;
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match));
}

/**
 * O idioma vem da URL (/pt, /it, /en). Fora delas (raiz, 404, URL antiga),
 * usa a mesma detecção do Nginx: cookie > navegador > inglês.
 */
export function LanguageProvider({ children }) {
  const { pathname } = useLocation();
  const match = matchRoute(pathname);
  const lang = match.lang || (typeof window === 'undefined' ? 'en' : detectLang());

  const t = useCallback((key, vars) => {
    let value = lookup(UI[lang], key);
    if (value === undefined) {
      value = lookup(UI[SOURCE_LANG], key);
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn(`[i18n] "${key}" sem tradução em "${lang}" — usando PT.`);
      }
    }
    return value === undefined ? key : interpolate(value, vars);
  }, [lang]);

  // Como t(), mas os {marcadores} podem virar elementos React:
  // tx('myArea.hello', { name: <span className="sn-user-name">Ana</span> })
  const tx = useCallback((key, nodes = {}) => {
    const text = t(key);
    if (typeof text !== 'string') return text;
    return text.split(/(\{\w+\})/g).map((part, index) => {
      const name = part.match(/^\{(\w+)\}$/);
      // eslint-disable-next-line react/no-array-index-key
      return <Fragment key={index}>{name && name[1] in nodes ? nodes[name[1]] : part}</Fragment>;
    });
  }, [t]);

  // Erro vindo da API (em PT) -> texto no idioma atual, quando conhecido.
  const errorText = useCallback(
    (err) => (err && err.code ? t(`serverErrors.${err.code}`) : (err && err.message) || t('common.error')),
    [t],
  );

  const value = useMemo(() => ({
    lang,
    routeKey: match.key,
    meta: LANG_META[lang],
    t,
    tx,
    errorText,
    path: (key, hash) => localePath(key, lang, hash),
  }), [lang, match.key, t, tx, errorText]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

// Escolhe a variante do idioma atual num objeto { pt, it, en }.
export function pick(byLang, lang) {
  return byLang[lang] ?? byLang[SOURCE_LANG];
}
