import ArticleCard from '../ArticleCard/ArticleCard';
import { ARTICLES } from '../../utils/articles';
import './ArticlesSection.css';

const ROLE_BY_SLUG = {
  sardegna: 'lead',
  'chapada-diamantina': 'mid1',
  'nomadismo-digital': 'mid2',
  thailand: 'small1',
  ireland: 'small2',
  cagliari: 'wide',
};

function ArticlesSection() {
  return (
    <section className="sn-articles">
      <div className="sn-articles__header">
        <h2 className="sn-articles__title">O próximo destino já está te esperando</h2>
        <p className="sn-articles__subtitle">
          Relatos sobre os lugares que moldam a vida nômade.
        </p>
      </div>
      <div className="sn-articles__grid">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} role={ROLE_BY_SLUG[article.slug]} />
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
