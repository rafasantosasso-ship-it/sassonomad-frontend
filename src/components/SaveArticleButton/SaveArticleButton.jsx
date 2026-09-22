import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthModalContext from '../../contexts/AuthModalContext';
import { getSavedArticles, saveArticle, deleteSavedArticle } from '../../utils/MainApi';
import './SaveArticleButton.css';

/**
 * Botão de "salvar guia" exibido no topo dos artigos (ArticleLayout).
 * Deslogado: clicar abre o modal de login. Logado: alterna entre salvar
 * e remover dos guias salvos (POST/DELETE em /articles).
 */
function SaveArticleButton({ article }) {
  const currentUser = useContext(CurrentUserContext);
  const { openLogin } = useContext(AuthModalContext);
  const [savedId, setSavedId] = useState(null);
  const [isChecking, setIsChecking] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const absoluteLink = `${window.location.origin}${article.path}`;
  const absoluteImage = article.image.startsWith('http')
    ? article.image
    : `${window.location.origin}${article.image}`;

  useEffect(() => {
    if (!currentUser) {
      setSavedId(null);
      setIsChecking(false);
      return;
    }

    setIsChecking(true);
    getSavedArticles()
      .then((articles) => {
        const match = articles.find((saved) => saved.link === absoluteLink);
        setSavedId(match ? match._id : null);
      })
      .catch(() => setSavedId(null))
      .finally(() => setIsChecking(false));
  }, [currentUser, absoluteLink]);

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
      date: new Date().toLocaleDateString('pt-BR'),
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
      aria-label={isActive ? 'Remover dos guias salvos' : 'Salvar guia'}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4.2L5 21V4.5a1 1 0 0 1 1-1z" />
      </svg>
    </button>
  );
}

export default SaveArticleButton;
