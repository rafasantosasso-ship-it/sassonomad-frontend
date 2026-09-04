import ArticlesSection from '../ArticlesSection/ArticlesSection';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import CommunitySection from '../CommunitySection/CommunitySection';
import About from '../About/About';
import heroImage from '../../images/hero.jpg';
import './Main.css';

function Main({ onJoinClick }) {
  return (
    <main className="sn-main">
      <section className="sn-hero">
        <img className="sn-hero__image" src={heroImage} alt="" />
        <div className="sn-hero__content">
          <h1 className="sn-hero__title">Viagem lenta, vida nômade</h1>
          <p className="sn-hero__subtitle">
            Histórias e guias entre a Chapada Diamantina e a Sardenha para quem vive e trabalha em movimento.
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
