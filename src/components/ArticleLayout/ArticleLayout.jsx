import ShareButton from '../ShareButton/ShareButton';
import CommunityCta from '../CommunityCta/CommunityCta';
import './ArticleLayout.css';

function ArticleLayout({ article, children }) {
  const { tag, title, dek, image, imagePosition, path } = article;

  return (
    <article className="sn-light-article">
      <div className="sn-light-article__hero">
        <img
          className="sn-light-article__hero-img"
          src={image}
          alt={title}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <ShareButton size="hero" path={path} title={title} label={`Compartilhar ${title}`} />
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
