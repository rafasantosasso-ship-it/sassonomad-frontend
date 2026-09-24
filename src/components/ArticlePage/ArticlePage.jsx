import ArticleLayout from '../ArticleLayout/ArticleLayout';
import Seo from '../../seo/Seo';
import { articleSchema } from '../../seo/schema';
import { useLang } from '../../i18n/LanguageContext';
import { getArticleByRoute } from '../../utils/articles';
import '../GuideCta/GuideCta.css';

/**
 * Página de artigo, igual para todos os artigos e idiomas. O texto vem de
 * src/content/articles/<artigo>/<idioma>.jsx.
 */
function ArticlePage({ routeKey }) {
  const { lang } = useLang();
  const article = getArticleByRoute(routeKey, lang);
  const { Body } = article;

  return (
    <>
      <Seo
        title={article.seoTitle}
        description={article.seoDescription}
        routeKey={routeKey}
        image={article.image}
        type="article"
        jsonLd={articleSchema(article, lang)}
      />
      <ArticleLayout article={article}>
        <Body />
      </ArticleLayout>
    </>
  );
}

export default ArticlePage;
