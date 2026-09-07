import { Link } from 'react-router-dom';
import ShareButton from '../ShareButton/ShareButton';
import './ArticleCard.css';

function ArticleCard({ article }) {
  const { tag, title, excerpt, image, imagePosition, path } = article;
  const isPending = !path;
  const Wrapper = isPending ? 'div' : Link;
  const wrapperProps = isPending ? {} : { to: path };

  return (
    <Wrapper
      className={`sn-article-card${isPending ? ' sn-article-card_pending' : ''}`}
      {...wrapperProps}
    >
      <div className="sn-article-card__image-wrap">
        <img
          className="sn-article-card__image"
          src={image}
          alt={title}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        {isPending ? (
          <span className="sn-article-card__badge">Em breve</span>
        ) : (
          <ShareButton size="card" path={path} title={title} label={`Compartilhar ${title}`} />
        )}
        <div className="sn-article-card__overlay" />
        <div className="sn-article-card__content">
          <span className="sn-article-card__tag">{tag}</span>
          <h3 className="sn-article-card__title">{title}</h3>
          <p className="sn-article-card__excerpt">{excerpt}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default ArticleCard;
