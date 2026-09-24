import chapadaImg from '../images/guides/chapada.jpg';
import sardegnaImg from '../images/guides/sardegna.jpg';
import nomadismoImg from '../images/guides/nomadismo.jpg';
import { localePath } from '../i18n/routes';
import { SOURCE_LANG } from '../i18n/config';

import * as chapadaPt from '../content/guides/chapada/pt';
import * as chapadaIt from '../content/guides/chapada/it';
import * as chapadaEn from '../content/guides/chapada/en';
import * as sardegnaPt from '../content/guides/sardegna/pt';
import * as sardegnaIt from '../content/guides/sardegna/it';
import * as sardegnaEn from '../content/guides/sardegna/en';
import * as nomadismoPt from '../content/guides/nomadismo/pt';
import * as nomadismoIt from '../content/guides/nomadismo/it';
import * as nomadismoEn from '../content/guides/nomadismo/en';

// Guias pagos. Texto por idioma em src/content/guides/<guia>/<idioma>.jsx;
// preço e link de compra em src/i18n/checkout.js (`product`).
const REGISTRY = [
  {
    slug: 'chapada',
    routeKey: 'guideChapada',
    product: 'lencois',
    image: chapadaImg,
    content: { pt: chapadaPt, it: chapadaIt, en: chapadaEn },
  },
  {
    slug: 'sardegna',
    routeKey: 'guideSardegna',
    product: 'sardegna',
    image: sardegnaImg,
    content: { pt: sardegnaPt, it: sardegnaIt, en: sardegnaEn },
  },
  {
    slug: 'nomadismo',
    routeKey: 'guideNomadismo',
    product: 'nomadismo',
    image: nomadismoImg,
    content: { pt: nomadismoPt, it: nomadismoIt, en: nomadismoEn },
  },
];

function localize(entry, lang) {
  const content = entry.content[lang] || entry.content[SOURCE_LANG];
  const { meta } = content;
  return {
    ...meta,
    slug: entry.slug,
    routeKey: entry.routeKey,
    product: entry.product,
    image: entry.image,
    pageTitle: meta.pageTitle || meta.title,
    faqItems: content.faqItems || null,
    Body: content.default,
    path: localePath(entry.routeKey, lang),
  };
}

export function getGuides(lang) {
  return REGISTRY.map((entry) => localize(entry, lang));
}

export function getGuideByRoute(routeKey, lang) {
  const entry = REGISTRY.find((item) => item.routeKey === routeKey);
  return entry ? localize(entry, lang) : null;
}
