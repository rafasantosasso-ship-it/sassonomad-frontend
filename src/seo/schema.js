import { SITE_URL, LANG_META } from '../i18n/config';
import { absoluteUrl, localePath } from '../i18n/routes';

// Dados estruturados (schema.org) — ajudam o Google a entender o que é
// artigo, produto e FAQ, e podem gerar resultados enriquecidos.

const ORGANIZATION = {
  '@type': 'Organization',
  name: 'Sasso Nomad',
  url: SITE_URL,
  logo: `${SITE_URL}/email/logo-light.png`,
  email: 'nomad@sassonomad.com',
  sameAs: ['https://instagram.com/sassonomad', 'https://pinterest.com/sassonomad'],
};

function abs(src) {
  return /^https?:\/\//.test(src) ? src : `${SITE_URL}${src}`;
}

export function websiteSchema(lang, description) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...ORGANIZATION, '@id': `${SITE_URL}/#organization` },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: absoluteUrl(localePath('home', lang)),
        name: 'Sasso Nomad',
        description,
        inLanguage: LANG_META[lang].htmlLang,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function articleSchema(article, lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seoDescription || article.dek,
    image: [abs(article.image)],
    inLanguage: LANG_META[lang].htmlLang,
    mainEntityOfPage: absoluteUrl(article.path),
    author: { '@type': 'Organization', name: 'Sasso Nomad', url: SITE_URL },
    publisher: ORGANIZATION,
  };
}

export function productSchema(guide, offer, lang) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: guide.productName || guide.pageTitle,
    description: guide.seoDescription || guide.pageDek,
    image: [abs(guide.image)],
    brand: { '@type': 'Brand', name: 'Sasso Nomad' },
    inLanguage: LANG_META[lang].htmlLang,
    url: absoluteUrl(guide.path),
  };
  if (offer && offer.amount != null) {
    data.offers = {
      '@type': 'Offer',
      price: offer.amount.toFixed(2),
      priceCurrency: offer.currency,
      availability: 'https://schema.org/InStock',
      url: offer.url || absoluteUrl(guide.path),
    };
  }
  return data;
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
