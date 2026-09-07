import GuideCard from '../GuideCard/GuideCard';
import { GUIDES } from '../../data/guides';
import './GuidesGrid.css';

function GuidesGrid() {
  return (
    <section className="sn-guides-grid">
      <h1 className="sn-guides-grid__title">Territórios</h1>
      <p className="sn-guides-grid__label">
        Slow travel entre a Sardegna e a Chapada Diamantina. Escolha um caminho pra começar.
      </p>

      <div className="sn-guides-grid__list">
        {GUIDES.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}

export default GuidesGrid;
