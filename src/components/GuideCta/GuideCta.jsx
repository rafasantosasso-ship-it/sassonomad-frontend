import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import CommunityModal from '../CommunityModal/CommunityModal';
import './GuideCta.css';

/**
 * Caixa de compra no fim das páginas de guia. Vendas ainda não estão
 * abertas: o botão sempre abre um popup de lista de espera (reaproveita o
 * CommunityModal) em vez de linkar para um checkout.
 */
function GuideCta({
  variant = 'primary', title, buttonLabel, guideName, source, children,
}) {
  const { t, tx } = useLang();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className={`sn-guide-cta sn-guide-cta--${variant}`}>
      <h3 className="sn-guide-cta__title">{title}</h3>
      {children && <p className="sn-guide-cta__text">{children}</p>}
      <button
        className="sn-guide-cta__button"
        type="button"
        onClick={() => setIsWaitlistOpen(true)}
      >
        {buttonLabel}
      </button>

      {isWaitlistOpen && (
        <CommunityModal
          onClose={() => setIsWaitlistOpen(false)}
          source={source || 'guide-waitlist'}
          title={t('guideWaitlist.title')}
          intro1={tx('guideWaitlist.intro', { guide: guideName })}
          intro2={false}
          ctaLabel={t('guideWaitlist.submit')}
        />
      )}
    </div>
  );
}

export default GuideCta;
