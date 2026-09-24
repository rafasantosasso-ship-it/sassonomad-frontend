import GuideCard from '../GuideCard/GuideCard';
import Seo from '../../seo/Seo';
import { getGuides } from '../../data/guides';
import { useLang } from '../../i18n/LanguageContext';
import './GuidesGrid.css';

function GuidesGrid() {
  const { t, lang } = useLang();

  return (
    <section className="sn-guides-grid">
      <Seo title={t('seo.guidesTitle')} description={t('seo.guidesDescription')} routeKey="guides" />
      <h1 className="sn-guides-grid__title">{t('guides.title')}</h1>
      <p className="sn-guides-grid__label">{t('guides.label')}</p>

      <div className="sn-guides-grid__list">
        {getGuides(lang).map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}

export default GuidesGrid;
