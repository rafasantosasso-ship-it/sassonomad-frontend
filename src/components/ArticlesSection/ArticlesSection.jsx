import ArticleCard from '../ArticleCard/ArticleCard';
import { getArticles } from '../../utils/articles';
import { useLang } from '../../i18n/LanguageContext';
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
  const { t, lang } = useLang();

  return (
    <section className="sn-articles">
      <div className="sn-articles__header">
        <h2 className="sn-articles__title">{t('articles.title')}</h2>
        <p className="sn-articles__subtitle">{t('articles.subtitle')}</p>
      </div>
      <div className="sn-articles__grid">
        {getArticles(lang).map((article) => (
          <ArticleCard key={article.slug} article={article} role={ROLE_BY_SLUG[article.slug]} />
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
