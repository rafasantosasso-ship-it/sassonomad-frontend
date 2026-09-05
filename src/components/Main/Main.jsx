import ArticlesSection from '../ArticlesSection/ArticlesSection';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import CommunitySection from '../CommunitySection/CommunitySection';
import About from '../About/About';
import './Main.css';

function Main({ onJoinClick }) {
  return (
    <main className="sn-main">
      <section className="sn-hero">
        <video
          className="sn-hero__video"
          src="/videos/hero-praia.mp4"
          poster="/videos/hero-praia-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="sn-hero__overlay" />
        <div className="sn-hero__content">
          <h1 className="sn-hero__title">Existe um mundo te esperando lá fora</h1>
          <p className="sn-hero__subtitle">
            Guias e histórias reais pra quem decidiu viver em movimento — trabalhando de
            qualquer lugar. Sem escritório fixo. Sem rotina. Sem desculpa.
          </p>
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
