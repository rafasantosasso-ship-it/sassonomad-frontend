import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthModalContext from '../../contexts/AuthModalContext';
import { getSavedArticles, saveArticle, deleteSavedArticle } from '../../utils/MainApi';
import { useLang } from '../../i18n/LanguageContext';
import { SITE_URL } from '../../i18n/config';
import './SaveArticleButton.css';

/**
 * Botão de "salvar guia" exibido no topo dos artigos (ArticleLayout).
 * Deslogado: clicar abre o modal de login. Logado: alterna entre salvar
 * e remover dos guias salvos (POST/DELETE em /articles).
 */
function SaveArticleButton({ article }) {
  const currentUser = useContext(CurrentUserContext);
  const { openLogin } = useContext(AuthModalContext);
  const { t, meta, lang } = useLang();
  const [savedId, setSavedId] = useState(null);
  const [isChecking, setIsChecking] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Na pré-renderização (build) não existe `window`: usa o domínio público.
  const origin = typeof window === 'undefined' ? SITE_URL : window.location.origin;
  const absoluteLink = `${origin}${article.path}`;
  const absoluteImage = article.image.startsWith('http')
    ? article.image
    : `${origin}${article.image}`;
  // Artigos salvos antes do site ter idiomas guardaram o link sem /pt/.
  const legacyLink = lang === 'pt' ? absoluteLink.replace(`${origin}/pt/`, `${origin}/`) : null;

  useEffect(() => {
    if (!currentUser) {
      setSavedId(null);
      setIsChecking(false);
      return;
    }

    setIsChecking(true);
    getSavedArticles()
      .then((articles) => {
        const match = articles.find(
          (saved) => saved.link === absoluteLink || saved.link === legacyLink,
        );
        setSavedId(match ? match._id : null);
      })
      .catch(() => setSavedId(null))
      .finally(() => setIsChecking(false));
  }, [currentUser, absoluteLink, legacyLink]);

  function handleClick() {
    if (!currentUser) {
      openLogin();
      return;
    }
    if (isSaving || isChecking) return;

    setIsSaving(true);

    if (savedId) {
      deleteSavedArticle(savedId)
        .then(() => setSavedId(null))
        .catch(() => {})
        .finally(() => setIsSaving(false));
      return;
    }

    saveArticle({
      keyword: article.tag,
      title: article.title,
      text: article.dek,
      date: new Date().toLocaleDateString(meta.dateLocale),
      fonte: 'Sasso Nomad',
      link: absoluteLink,
      image: absoluteImage,
    })
      .then((created) => setSavedId(created._id))
      .catch(() => {})
      .finally(() => setIsSaving(false));
  }

  const isActive = Boolean(savedId);

  return (
    <button
      type="button"
      className={`sn-save-btn${isActive ? ' sn-save-btn--active' : ''}`}
      onClick={handleClick}
      disabled={isChecking || isSaving}
      aria-pressed={isActive}
      aria-label={isActive ? t('save.remove') : t('save.save')}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4.2L5 21V4.5a1 1 0 0 1 1-1z" />
      </svg>
    </button>
  );
}

export default SaveArticleButton;
