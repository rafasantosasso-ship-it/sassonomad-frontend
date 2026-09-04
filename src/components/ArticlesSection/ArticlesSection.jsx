import ArticleCard from '../ArticleCard/ArticleCard';
import { ARTICLES } from '../../utils/articles';
import './ArticlesSection.css';

function ArticlesSection() {
  return (
    <section className="sn-articles">
      <div className="sn-articles__header">
        <h2 className="sn-articles__title">Últimas histórias</h2>
        <p className="sn-articles__subtitle">
          Guias e relatos sobre os lugares que moldam a vida nômade — atualizados toda semana.
        </p>
      </div>
      <div className="sn-articles__list">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
