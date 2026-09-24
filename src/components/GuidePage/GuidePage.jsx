import { useEffect, useState } from 'react';
import GuideArticleLayout from '../GuideArticleLayout/GuideArticleLayout';
import Seo from '../../seo/Seo';
import { productSchema, faqSchema } from '../../seo/schema';
import { useLang } from '../../i18n/LanguageContext';
import { getOffer } from '../../i18n/checkout';
import { getGuideByRoute } from '../../data/guides';

/**
 * Página de guia pago, igual para todos os guias e idiomas. Texto em
 * src/content/guides/<guia>/<idioma>.jsx; preço e link em checkout.js.
 */
function GuidePage({ routeKey }) {
  const { lang } = useLang();
  const guide = getGuideByRoute(routeKey, lang);
  const { Body } = guide;

  // A oferta (BRL x EUR) depende do navegador (pt-PT paga em EUR), então é
  // recalculada no cliente depois da primeira renderização.
  const [offer, setOffer] = useState(() => getOffer(guide.product, lang));
  useEffect(() => {
    setOffer(getOffer(guide.product, lang));
  }, [guide.product, lang]);

  const jsonLd = [productSchema(guide, getOffer(guide.product, lang), lang)];
  if (guide.faqItems) jsonLd.push(faqSchema(guide.faqItems));

  return (
    <>
      <Seo
        title={guide.seoTitle}
        description={guide.seoDescription}
        routeKey={routeKey}
        image={guide.image}
        type="product"
        jsonLd={jsonLd}
      />
      <GuideArticleLayout guide={guide}>
        <Body offer={offer} />
      </GuideArticleLayout>
    </>
  );
}

export default GuidePage;
