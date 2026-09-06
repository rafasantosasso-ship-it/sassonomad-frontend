import ArticlesSection from '../ArticlesSection/ArticlesSection';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import CommunitySection from '../CommunitySection/CommunitySection';
import About from '../About/About';
import FaqSection from '../FaqSection/FaqSection';
import './Main.css';

function Main({ onJoinClick }) {
  return (
    <main className="sn-main">
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
              <span className="sn-hero__eyebrow-word">Slow Travel</span>
              <span className="sn-hero__eyebrow-dot" aria-hidden="true">·</span>
              <span className="sn-hero__eyebrow-word">Nomadismo Digital</span>
            </span>
            <h1 className="sn-hero__title">Paisagens que viram História</h1>
            <p className="sn-hero__tagline">Vivências Reais</p>
            <p className="sn-hero__subtitle">
              Do mar à montanha, o mundo é seu próximo destino. Guias e histórias de uma
              comunidade que escolheu viver assim.
            </p>
          </div>
        </div>
      </section>

      <ArticlesSection />
      <FeaturedProduct />
      <CommunitySection onJoinClick={onJoinClick} />
      <About />
      <FaqSection />
    </main>
  );
}

export default Main;
