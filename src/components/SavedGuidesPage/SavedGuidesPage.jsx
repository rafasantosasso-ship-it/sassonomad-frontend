import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { getSavedArticles, deleteSavedArticle } from '../../utils/MainApi';
import Seo from '../../seo/Seo';
import { useLang } from '../../i18n/LanguageContext';
import Preloader from '../Preloader/Preloader';
import './SavedGuidesPage.css';

const VISIBLE_KEYWORDS = 3;
const KEYWORDS_PREVIEW = 2;

/**
 * Ordena as palavras-chave dos guias salvos por popularidade (mais
 * artigos salvos primeiro) e monta o texto da saudação — ex.: "Natureza,
 * Yellowstone e mais 2" quando há mais de três palavras-chave distintas.
 */
function buildKeywordsSummary(articles, t) {
  const counts = new Map();
  articles.forEach(({ keyword }) => {
    counts.set(keyword, (counts.get(keyword) || 0) + 1);
  });

  const sorted = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a));

  if (sorted.length <= VISIBLE_KEYWORDS) {
    return sorted.join(', ');
  }

  const remaining = sorted.length - KEYWORDS_PREVIEW;
  return `${sorted.slice(0, KEYWORDS_PREVIEW).join(', ')} ${t('saved.andMore', { count: remaining })}`;
}

function getArticlePath(link) {
  try {
    return new URL(link).pathname;
  } catch {
    return link;
  }
}

function SavedGuidesPage() {
  const currentUser = useContext(CurrentUserContext);
  const { t } = useLang();
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');

    getSavedArticles()
      .then((data) => setArticles(data))
      .catch(() => setError(t('common.error')))
      .finally(() => setIsLoading(false));
  }, []);

  function handleRemove(articleId) {
    setArticles((prev) => prev.filter((article) => article._id !== articleId));

    deleteSavedArticle(articleId).catch(() => {
      setError(t('common.error'));
      // Reverte a remoção otimista se a chamada falhar.
      getSavedArticles().then(setArticles).catch(() => {});
    });
  }

  const items = articles ?? [];

  return (
    <section className="sn-saved">
      <Seo title={t('seo.accountTitle')} routeKey="saved" noindex />
      <header className="sn-saved__header">
        <p className="sn-saved__greeting">{t('saved.hello', { name: currentUser?.name })}</p>
        <h1 className="sn-saved__title">
          {items.length} {items.length === 1 ? t('saved.one') : t('saved.many')}
        </h1>
        {items.length > 0 && (
          <p className="sn-saved__keywords">{buildKeywordsSummary(items, t)}</p>
        )}
      </header>

      {isLoading && <Preloader inline />}

      {!isLoading && error && (
        <p className="sn-saved__status sn-saved__status--error">{error}</p>
      )}

      {!isLoading && !error && items.length === 0 && (
        <p className="sn-saved__status">{t('saved.empty')}</p>
      )}

      {!isLoading && !error && items.length > 0 && (
        <div className="sn-saved__grid">
          {items.map((article) => (
            <article className="sn-saved-card" key={article._id}>
              <button
                className="sn-saved-card__remove"
                type="button"
                onClick={() => handleRemove(article._id)}
                aria-label={t('saved.remove')}
              >
                🗑
              </button>
              <Link className="sn-saved-card__image-link" to={getArticlePath(article.link)}>
                <img className="sn-saved-card__image" src={article.image} alt={article.title} />
                <span className="sn-saved-card__keyword">{article.keyword}</span>
              </Link>
              <div className="sn-saved-card__content">
                <Link className="sn-saved-card__title-link" to={getArticlePath(article.link)}>
                  <h2 className="sn-saved-card__title">{article.title}</h2>
                </Link>
                <p className="sn-saved-card__text">{article.text}</p>
                <p className="sn-saved-card__meta">{article.fonte} · {article.date}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedGuidesPage;
