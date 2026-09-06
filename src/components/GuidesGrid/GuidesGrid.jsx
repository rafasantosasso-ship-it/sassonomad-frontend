import GuideCard from '../GuideCard/GuideCard';
import { GUIDES } from '../../data/guides';
import useFavorites from '../../hooks/useFavorites';
import './GuidesGrid.css';

function GuidesGrid() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section className="sn-guides-grid">
      <h1 className="sn-guides-grid__title">Territórios</h1>
      <p className="sn-guides-grid__label">
        Slow travel entre a Sardegna e a Chapada Diamantina. Escolha um caminho pra começar.
      </p>

      <div className="sn-guides-grid__list">
        {GUIDES.map((guide) => (
          <GuideCard
            key={guide.slug}
            guide={guide}
            isSaved={isFavorite(`guide:${guide.slug}`)}
            onToggleSave={() => toggleFavorite(`guide:${guide.slug}`)}
          />
        ))}
      </div>
    </section>
  );
}

export default GuidesGrid;
