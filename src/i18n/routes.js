import { LANGS, SITE_URL } from './config';

// Mapa central de rotas: uma chave por página, um slug por idioma.
// Para criar uma página nova: adicione a chave aqui, a <Route> em App.jsx
// e (se for pública) ela entra sozinha na pré-renderização e no sitemap.
//
// Os slugs em PT são os mesmos de antes do site ficar trilíngue — as URLs
// antigas sem prefixo (/guias, /bem-vindo...) redirecionam para /pt/...
export const ROUTES = {
  home: { pt: '', it: '', en: '' },
  guides: { pt: 'guias', it: 'guide', en: 'guides' },
  guideChapada: { pt: 'guias/chapada', it: 'guide/chapada', en: 'guides/chapada' },
  guideSardegna: { pt: 'guias/sardegna', it: 'guide/sardegna', en: 'guides/sardinia' },
  guideNomadismo: {
    pt: 'guias/nomadismo', it: 'guide/nomadismo-digitale', en: 'guides/digital-nomad',
  },
  articleSardegna: {
    pt: 'sardegna/vilarejos-de-pedra-e-mar-turquesa',
    it: 'sardegna/borghi-di-pietra-e-mare-turchese',
    en: 'sardinia/stone-villages-and-turquoise-sea',
  },
  articleChapada: {
    pt: 'chapada-diamantina/trilhas-pocos-e-lencois',
    it: 'chapada-diamantina/sentieri-pozze-e-lencois',
    en: 'chapada-diamantina/trails-pools-and-lencois',
  },
  articleNomadismo: {
    pt: 'nomadismo-digital/trabalhar-de-qualquer-lugar',
    it: 'nomadismo-digitale/lavorare-da-ovunque',
    en: 'digital-nomad/work-from-anywhere',
  },
  articleIreland: {
    pt: 'irlanda/vida-de-nomade-alem-do-centro-caotico-de-dublin',
    it: 'irlanda/vita-da-nomade-oltre-il-centro-caotico-di-dublino',
    en: 'ireland/nomad-life-beyond-chaotic-central-dublin',
  },
  articleCagliari: {
    pt: 'sardegna/cagliari-capital-que-tambem-e-riviera',
    it: 'sardegna/cagliari-la-capitale-che-e-anche-riviera',
    en: 'sardinia/cagliari-the-capital-that-is-also-a-riviera',
  },
  faq: { pt: 'perguntas-frequentes', it: 'domande-frequenti', en: 'faq' },
  timezones: { pt: 'fusos', it: 'fusi-orari', en: 'time-zones' },
  privacy: { pt: 'privacidade', it: 'privacy', en: 'privacy' },
  saved: { pt: 'guias-salvos', it: 'guide-salvate', en: 'saved-guides' },
  myArea: { pt: 'minha-area', it: 'la-mia-area', en: 'my-area' },
  welcome: { pt: 'bem-vindo', it: 'benvenuto', en: 'welcome' },
  resetPassword: { pt: 'redefinir-senha', it: 'reimposta-password', en: 'reset-password' },
};

// Páginas de conta: não entram no Google nem no sitemap, e não são
// pré-renderizadas (dependem de login ou de token na URL).
export const PRIVATE_ROUTES = ['saved', 'myArea', 'welcome', 'resetPassword'];

export const PUBLIC_ROUTE_KEYS = Object.keys(ROUTES).filter((key) => !PRIVATE_ROUTES.includes(key));

export function localePath(key, lang, hash = '') {
  const slug = ROUTES[key] ? ROUTES[key][lang] : '';
  const base = slug ? `/${lang}/${slug}` : `/${lang}`;
  return hash ? `${base}#${hash.replace(/^#/, '')}` : base;
}

export function absoluteUrl(path) {
  return `${SITE_URL}${path}`;
}

function trimSlashes(value) {
  return value.replace(/^\/+|\/+$/g, '');
}

// "/it/guide/sardegna" -> { lang: 'it', key: 'guideSardegna' }
export function matchRoute(pathname) {
  const parts = trimSlashes(pathname).split('/');
  const lang = parts[0];
  if (!LANGS.includes(lang)) return { lang: null, key: null };
  const slug = parts.slice(1).join('/');
  const key = Object.keys(ROUTES).find((k) => ROUTES[k][lang] === slug) || null;
  return { lang, key };
}
