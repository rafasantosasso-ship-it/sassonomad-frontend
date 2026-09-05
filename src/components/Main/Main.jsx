import ArticlesSection from '../ArticlesSection/ArticlesSection';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import CommunitySection from '../CommunitySection/CommunitySection';
import About from '../About/About';
import './Main.css';

function Main({ onJoinClick }) {
  return (
    <main className="sn-main">
      <section className="sn-hero">
        <img
          className="sn-hero__image"
          src="/images/hero-pegadas-areia.jpg"
          alt="Pegadas na areia da praia, textura em close-up"
        />
        <div className="sn-hero__overlay" />
        <div className="sn-hero__inner">
          <div className="sn-hero__content">
            <span className="sn-hero__eyebrow">Slow Travel · Nomadismo Digital</span>
            <h1 className="sn-hero__title">
              Vivências reais,{' '}
              <span className="sn-hero__title-accent">paisagens que viram histórias</span>
            </h1>
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
    </main>
  );
}

export default Main;
