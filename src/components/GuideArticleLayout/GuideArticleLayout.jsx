import { Link } from 'react-router-dom';
import SaveButton from '../SaveButton/SaveButton';
import './GuideArticleLayout.css';

function GuideArticleLayout({ guide, isSaved, onToggleSave, children }) {
  const { eyebrow, title, dek, image, alt } = guide;

  return (
    <article className="sn-guide-article">
      <Link className="sn-guide-article__back" to="/guias">
        &larr; Voltar aos territórios
      </Link>

      <div className="sn-guide-article__hero">
        <img className="sn-guide-article__hero-img" src={image} alt={alt} />
        <SaveButton
          size="hero"
          isSaved={isSaved}
          onToggle={onToggleSave}
          label="Salvar nos favoritos"
        />
      </div>

      <header className="sn-guide-article__header">
        <p className="sn-guide-article__eyebrow">{eyebrow}</p>
        <h1 className="sn-guide-article__title">{title}</h1>
        <p className="sn-guide-article__lede">{dek}</p>
      </header>

      <div className="sn-guide-article__body">{children}</div>
    </article>
  );
}

export default GuideArticleLayout;
