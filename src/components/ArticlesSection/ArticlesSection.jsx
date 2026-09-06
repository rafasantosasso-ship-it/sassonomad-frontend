import ArticleCard from '../ArticleCard/ArticleCard';
import { ARTICLES } from '../../utils/articles';
import './ArticlesSection.css';

function chunk(list, size) {
  const groups = [];
  for (let i = 0; i < list.length; i += size) {
    groups.push(list.slice(i, i + size));
  }
  return groups;
}

function ArticlesSection() {
  const groups = chunk(ARTICLES, 3);

  return (
    <section className="sn-articles">
      <div className="sn-articles__header">
        <h2 className="sn-articles__title">Últimas histórias</h2>
        <p className="sn-articles__subtitle">
          Guias e relatos sobre os lugares que moldam a vida nômade.
        </p>
      </div>
      <div className="sn-articles__list">
        {groups.map((group) => {
          const activeIndex = group.findIndex((article) => article.path);
          const featured = group[activeIndex === -1 ? 0 : activeIndex];
          const rest = group.filter((article) => article.slug !== featured.slug);

          return (
            <div className="sn-articles__row" key={featured.slug}>
              <ArticleCard article={featured} variant="featured" />
              {rest.length > 0 && (
                <div className="sn-articles__stack">
                  {rest.map((article) => (
                    <ArticleCard key={article.slug} article={article} variant="compact" />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ArticlesSection;
