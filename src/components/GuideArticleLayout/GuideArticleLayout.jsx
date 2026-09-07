import { Link } from 'react-router-dom';
import ShareButton from '../ShareButton/ShareButton';
import './GuideArticleLayout.css';

function GuideArticleLayout({ guide, children }) {
  const { slug, eyebrow, title, dek, image, alt } = guide;

  return (
    <article className="sn-guide-article">
      <Link className="sn-guide-article__back" to="/guias">
        &larr; Voltar aos territórios
      </Link>

      <div className="sn-guide-article__hero">
        <img className="sn-guide-article__hero-img" src={image} alt={alt} />
        <ShareButton
          size="hero"
          path={`/guias/${slug}`}
          title={title}
          label={`Compartilhar ${title}`}
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
