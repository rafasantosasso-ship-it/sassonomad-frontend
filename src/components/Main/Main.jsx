import ArticlesSection from '../ArticlesSection/ArticlesSection';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import DestinationClocks from '../DestinationClocks/DestinationClocks';
import CommunitySection from '../CommunitySection/CommunitySection';
import About from '../About/About';
import Seo from '../../seo/Seo';
import { websiteSchema } from '../../seo/schema';
import { useLang } from '../../i18n/LanguageContext';
import './Main.css';

function Main({ onJoinClick }) {
  const { t, lang } = useLang();

  return (
    <main className="sn-main">
      <Seo
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        routeKey="home"
        image="/videos/hero-parapente-poster.jpg"
        jsonLd={websiteSchema(lang, t('seo.homeDescription'))}
      />
      <section className="sn-hero">
        <video
          className="sn-hero__video"
          src="/videos/hero-parapente.mp4"
          poster="/videos/hero-parapente-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="sn-hero__overlay" />
        <div className="sn-hero__inner">
          <div className="sn-hero__content">
            <span className="sn-hero__eyebrow">
              <span className="sn-hero__eyebrow-word">{t('hero.eyebrow1')}</span>
              <span className="sn-hero__eyebrow-dot" aria-hidden="true">·</span>
              <span className="sn-hero__eyebrow-word">{t('hero.eyebrow2')}</span>
            </span>
            <h1 className="sn-hero__title">{t('hero.title')}</h1>
            <p className="sn-hero__tagline">{t('hero.tagline')}</p>
            <p className="sn-hero__subtitle">{t('hero.subtitle')}</p>
          </div>
        </div>
      </section>

      <ArticlesSection />
      <FeaturedProduct />
      <DestinationClocks />
      <CommunitySection onJoinClick={onJoinClick} />
      <About />
    </main>
  );
}

export default Main;
