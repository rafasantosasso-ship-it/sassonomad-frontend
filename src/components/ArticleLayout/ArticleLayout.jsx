import { Link } from 'react-router-dom';
import SaveButton from '../SaveButton/SaveButton';
import CommunityCta from '../CommunityCta/CommunityCta';
import './ArticleLayout.css';

function ArticleLayout({ article, isSaved, onToggleSave, children }) {
  const { tag, title, dek, image } = article;

  return (
    <article className="sn-light-article">
      <Link className="sn-light-article__back" to="/">
        &larr; Voltar para a home
      </Link>

      <div className="sn-light-article__hero">
        <img className="sn-light-article__hero-img" src={image} alt={title} />
        <SaveButton
          size="hero"
          isSaved={isSaved}
          onToggle={onToggleSave}
          label="Salvar nos favoritos"
        />
      </div>

      <header className="sn-light-article__header">
        <p className="sn-light-article__eyebrow">{tag}</p>
        <h1 className="sn-light-article__title">{title}</h1>
        <p className="sn-light-article__lede">{dek}</p>
      </header>

      <div className="sn-light-article__body">
        {children}
        <CommunityCta />
      </div>
    </article>
  );
}

export default ArticleLayout;
