// Idiomas do site. O PT é o idioma-fonte (onde o conteúdo nasce); IT e EN
// são adaptações. Quem não fala PT nem IT cai no EN.

export const LANGS = ['pt', 'it', 'en'];
export const SOURCE_LANG = 'pt';
export const FALLBACK_LANG = 'en';

// Endereço público, usado em canonical, hreflang, Open Graph e sitemap.
export const SITE_URL = 'https://sassonomad.com';

// Cookie da escolha manual (seletor de idioma). O Nginx lê o mesmo cookie
// para decidir o redirecionamento da raiz "/".
export const LANG_COOKIE = 'sn_lang';

export const LANG_META = {
  pt: {
    name: 'Português', short: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR', dateLocale: 'pt-BR',
  },
  it: {
    name: 'Italiano', short: 'IT', htmlLang: 'it', ogLocale: 'it_IT', dateLocale: 'it-IT',
  },
  en: {
    name: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB', dateLocale: 'en-GB',
  },
};

export function isLang(value) {
  return LANGS.includes(value);
}

// "pt-PT" -> "pt", "it-CH" -> "it", "de-DE" -> null
export function primaryLang(tag) {
  if (!tag) return null;
  const code = String(tag).toLowerCase().split(/[-_]/)[0];
  return isLang(code) ? code : null;
}

export function readLangCookie() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LANG_COOKIE}=(pt|it|en)(?:;|$)`));
  return match ? match[1] : null;
}

export function writeLangCookie(lang) {
  if (typeof document === 'undefined' || !isLang(lang)) return;
  document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
}

// Idioma principal do navegador (só o primeiro da lista, igual ao Nginx).
export function browserLang() {
  if (typeof navigator === 'undefined') return null;
  const first = (navigator.languages && navigator.languages[0]) || navigator.language;
  return primaryLang(first);
}

// Mesma regra do Nginx: cookie > idioma do navegador > inglês.
export function detectLang() {
  return readLangCookie() || browserLang() || FALLBACK_LANG;
}

// "pt-PT" no navegador: mostra preço em EUR mesmo na versão em português.
export function isPortugal() {
  if (typeof navigator === 'undefined') return false;
  const list = navigator.languages || [navigator.language];
  return list.some((tag) => /^pt-pt$/i.test(tag));
}
