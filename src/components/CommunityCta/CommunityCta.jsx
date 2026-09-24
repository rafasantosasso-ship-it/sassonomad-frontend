import { useContext } from 'react';
import AuthModalContext from '../../contexts/AuthModalContext';
import { useLang } from '../../i18n/LanguageContext';
import './CommunityCta.css';

// Convite no fim de cada artigo. Abre o mesmo popup da comunidade (antes
// apontava para /comunidade, página que ainda não existe).
function CommunityCta() {
  const { openCommunity } = useContext(AuthModalContext);
  const { t } = useLang();

  return (
    <div className="sn-community-cta">
      <h3 className="sn-community-cta__title">{t('community.ctaTitle')}</h3>
      <p className="sn-community-cta__text">{t('community.ctaText')}</p>
      <button
        className="sn-community-cta__button"
        type="button"
        onClick={() => openCommunity('artigo')}
      >
        {t('community.ctaButton')}
      </button>
    </div>
  );
}

export default CommunityCta;
