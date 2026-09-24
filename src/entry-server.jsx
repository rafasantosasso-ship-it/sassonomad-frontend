import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './components/App/App';
import { LanguageProvider } from './i18n/LanguageContext';
import { HeadCollectorContext, headToHtml } from './seo/Seo';

export { LANGS } from './i18n/config';
export { SITE_URL } from './i18n/config';
export { ROUTES, PUBLIC_ROUTE_KEYS, localePath } from './i18n/routes';

// Usado só no build (scripts/prerender.mjs): gera o HTML de cada página
// pública, em cada idioma, com o <head> certo para o Google e para os
// previews de link (WhatsApp, Instagram, Pinterest...).
export function render(url) {
  const collector = {};
  const html = renderToString(
    <HeadCollectorContext.Provider value={collector}>
      <StaticRouter location={url}>
        <LanguageProvider>
          <App prerendered />
        </LanguageProvider>
      </StaticRouter>
    </HeadCollectorContext.Provider>,
  );
  const { head } = collector;
  return {
    html,
    htmlLang: head ? head.htmlLang : 'en',
    headHtml: head ? headToHtml(head) : '',
  };
}
