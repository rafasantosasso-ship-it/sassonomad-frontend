import sardegnaImg from '../images/articles/sardegna.jpg';
import chapadaImg from '../images/articles/chapada-diamantina.jpg';
import nomadismoImg from '../images/articles/nomadismo-digital.jpg';
import thailandImg from '../images/articles/thailand.jpg';
import irelandImg from '../images/articles/ireland.jpg';
import cagliariImg from '../images/articles/cagliari.jpg';
import { localePath } from '../i18n/routes';
import { SOURCE_LANG } from '../i18n/config';

import * as sardegnaPt from '../content/articles/sardegna/pt';
import * as sardegnaIt from '../content/articles/sardegna/it';
import * as sardegnaEn from '../content/articles/sardegna/en';
import * as chapadaPt from '../content/articles/chapada/pt';
import * as chapadaIt from '../content/articles/chapada/it';
import * as chapadaEn from '../content/articles/chapada/en';
import * as nomadismoPt from '../content/articles/nomadismo/pt';
import * as nomadismoIt from '../content/articles/nomadismo/it';
import * as nomadismoEn from '../content/articles/nomadismo/en';
import * as irelandPt from '../content/articles/ireland/pt';
import * as irelandIt from '../content/articles/ireland/it';
import * as irelandEn from '../content/articles/ireland/en';
import * as cagliariPt from '../content/articles/cagliari/pt';
import * as cagliariIt from '../content/articles/cagliari/it';
import * as cagliariEn from '../content/articles/cagliari/en';

// Artigos da home e das páginas de artigo. O texto de cada idioma mora em
// src/content/articles/<artigo>/<idioma>.jsx — é lá que você edita.
// `routeKey: null` = card "Em breve", ainda sem página.
const REGISTRY = [
  {
    slug: 'sardegna',
    routeKey: 'articleSardegna',
    image: sardegnaImg,
    imagePosition: '50% 15%',
    content: { pt: sardegnaPt, it: sardegnaIt, en: sardegnaEn },
  },
  {
    slug: 'chapada-diamantina',
    routeKey: 'articleChapada',
    image: chapadaImg,
    content: { pt: chapadaPt, it: chapadaIt, en: chapadaEn },
  },
  {
    slug: 'nomadismo-digital',
    routeKey: 'articleNomadismo',
    image: nomadismoImg,
    content: { pt: nomadismoPt, it: nomadismoIt, en: nomadismoEn },
  },
  {
    slug: 'thailand',
    routeKey: null,
    image: thailandImg,
    content: {
      pt: {
        meta: {
          tag: 'Tailândia',
          cardTitle: 'Tailândia fora do óbvio: ilhas menos visitadas',
          excerpt: 'Praias tranquilas, comida de rua e como se locomover entre as ilhas do sul.',
        },
      },
      it: {
        meta: {
          tag: 'Thailandia',
          cardTitle: 'Thailandia fuori dai soliti giri: le isole meno visitate',
          excerpt: 'Spiagge tranquille, street food e come spostarsi tra le isole del sud.',
        },
      },
      en: {
        meta: {
          tag: 'Thailand',
          cardTitle: 'Thailand off the beaten path: the less-visited islands',
          excerpt: 'Quiet beaches, street food and how to get around the southern islands.',
        },
      },
    },
  },
  {
    slug: 'ireland',
    routeKey: 'articleIreland',
    image: irelandImg,
    content: { pt: irelandPt, it: irelandIt, en: irelandEn },
  },
  {
    slug: 'cagliari',
    routeKey: 'articleCagliari',
    image: cagliariImg,
    content: { pt: cagliariPt, it: cagliariIt, en: cagliariEn },
  },
];

function localize(entry, lang) {
  const content = entry.content[lang] || entry.content[SOURCE_LANG];
  const { meta } = content;
  return {
    slug: entry.slug,
    routeKey: entry.routeKey,
    image: entry.image,
    imagePosition: entry.imagePosition,
    tag: meta.tag,
    cardTitle: meta.cardTitle,
    excerpt: meta.excerpt,
    title: meta.title || meta.cardTitle,
    dek: meta.dek || meta.excerpt,
    seoTitle: meta.seoTitle,
    seoDescription: meta.seoDescription,
    Body: content.default || null,
    path: entry.routeKey ? localePath(entry.routeKey, lang) : null,
  };
}

export function getArticles(lang) {
  return REGISTRY.map((entry) => localize(entry, lang));
}

export function getArticleByRoute(routeKey, lang) {
  const entry = REGISTRY.find((item) => item.routeKey === routeKey);
  return entry ? localize(entry, lang) : null;
}
