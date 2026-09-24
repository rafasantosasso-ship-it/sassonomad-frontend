import { LANG_META, isPortugal } from './config';

// Preços e links de compra num lugar só. Trocar um link da Hotmart = mudar
// uma linha aqui. `url: null` mostra o botão sem checkout (como hoje).
//
// Moeda: PT (Brasil) paga em BRL; PT de Portugal, IT e EN pagam em EUR.
// Se um produto não tem oferta na moeda, usa a que existir.
//
// `pdfLangs`: em quais idiomas o PDF já existe. Nas versões IT/EN, se o
// PDF ainda for só em português, a página avisa antes da compra.
export const PRODUCTS = {
  lencois: {
    pdfLangs: ['pt'],
    offers: {
      // Decisão registrada: BRL 47 / EUR 9,90 (ainda não aplicada na Hotmart).
      // O site mantém R$ 39 até a Hotmart ser atualizada.
      BRL: { amount: 39, url: null },
      EUR: { amount: 9.9, url: null },
    },
  },
  sardegna: {
    pdfLangs: ['pt'],
    offers: {
      EUR: { amount: 19, url: 'https://sassonomad.com/sardegna' },
    },
  },
  nomadismo: {
    pdfLangs: ['pt'],
    offers: {},
  },
};

export function getOffer(productId, lang) {
  const product = PRODUCTS[productId];
  if (!product) return null;
  const wanted = lang === 'pt' && !isPortugal() ? 'BRL' : 'EUR';
  const currency = product.offers[wanted] ? wanted : Object.keys(product.offers)[0];
  if (!currency) return { ...product, currency: null, amount: null, url: null, priceLabel: '' };

  const { amount, url } = product.offers[currency];
  const priceLabel = new Intl.NumberFormat(LANG_META[lang].dateLocale, {
    style: 'currency',
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);

  return {
    ...product,
    currency,
    amount,
    url,
    priceLabel,
    pdfInLang: product.pdfLangs.includes(lang),
  };
}
