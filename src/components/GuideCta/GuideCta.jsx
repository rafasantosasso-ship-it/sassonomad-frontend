import { useLang } from '../../i18n/LanguageContext';
import './GuideCta.css';

/**
 * Caixa de compra no fim das páginas de guia. Preço, moeda e link vêm de
 * src/i18n/checkout.js (via `offer`). Sem link de checkout ainda, mostra o
 * botão sem ação — como antes.
 */
function GuideCta({
  variant = 'primary', title, buttonLabel, offer, format, children,
}) {
  const { t } = useLang();
  const priceParts = [offer?.priceLabel, format].filter(Boolean);

  return (
    <div className={`sn-guide-cta sn-guide-cta--${variant}`}>
      <h3 className="sn-guide-cta__title">{title}</h3>
      {children && <p className="sn-guide-cta__text">{children}</p>}
      {offer?.url ? (
        <a
          className="sn-guide-cta__button"
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonLabel}
        </a>
      ) : (
        <button className="sn-guide-cta__button" type="button">
          {buttonLabel}
        </button>
      )}
      {priceParts.length > 0 && (
        <span className="sn-guide-cta__price">{priceParts.join(' · ')}</span>
      )}
      {offer && !offer.pdfInLang && (
        <span className="sn-guide-cta__price">{t('guides.pdfInPortuguese')}</span>
      )}
      {offer && !offer.url && !offer.priceLabel && (
        <span className="sn-guide-cta__price">{t('guides.checkoutSoon')}</span>
      )}
    </div>
  );
}

export default GuideCta;
