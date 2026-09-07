import { Link } from 'react-router-dom';
import './ArticleCard.css';

const EXCERPT_ROLES = new Set(['lead', 'wide']);

function ArticleCard({ article, role }) {
  const { tag, title, excerpt, image, imagePosition, path } = article;
  const isPending = !path;
  const Wrapper = isPending ? 'div' : Link;
  const wrapperProps = isPending ? {} : { to: path };
  const showExcerpt = !role || EXCERPT_ROLES.has(role);

  return (
    <Wrapper
      className={`sn-article-card${role ? ` sn-article-card_${role}` : ''}${isPending ? ' sn-article-card_pending' : ''}`}
      {...wrapperProps}
    >
      <div className="sn-article-card__image-wrap">
        <img
          className="sn-article-card__image"
          src={image}
          alt={title}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        {isPending && <span className="sn-article-card__badge">Em breve</span>}
        <div className="sn-article-card__overlay" />
        <div className="sn-article-card__content">
          <span className="sn-article-card__tag">{tag}</span>
          <h3 className="sn-article-card__title">{title}</h3>
          {showExcerpt && <p className="sn-article-card__excerpt">{excerpt}</p>}
        </div>
      </div>
    </Wrapper>
  );
}

export default ArticleCard;
