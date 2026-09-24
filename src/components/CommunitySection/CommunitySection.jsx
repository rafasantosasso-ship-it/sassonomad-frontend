import communityImg from '../../images/community-cover.jpg';
import { useLang } from '../../i18n/LanguageContext';
import './CommunitySection.css';

function CommunitySection({ onJoinClick }) {
  const { t } = useLang();

  return (
    <section className="sn-community" id="comunidade">
      <img
        className="sn-community__bg"
        src={communityImg}
        alt=""
        aria-hidden="true"
      />
      <div className="sn-community__overlay" />
      <div className="sn-community__inner">
        <h2 className="sn-community__title">{t('community.title')}</h2>
        <p className="sn-community__text">{t('community.p1')}</p>
        <p className="sn-community__text">{t('community.p2')}</p>
        <button className="sn-community__cta" type="button" onClick={onJoinClick}>
          {t('community.cta')}
        </button>
      </div>
    </section>
  );
}

export default CommunitySection;
