import { Link } from 'react-router-dom';
import SaveButton from '../SaveButton/SaveButton';
import useFavorites from '../../hooks/useFavorites';
import './ArticleCard.css';

function ArticleCard({ article }) {
  const { slug, tag, title, excerpt, image, path } = article;
  const { isFavorite, toggleFavorite } = useFavorites();
  const isPending = !path;
  const Wrapper = isPending ? 'div' : Link;
  const wrapperProps = isPending ? {} : { to: path };

  return (
    <Wrapper
      className={`sn-article-card${isPending ? ' sn-article-card_pending' : ''}`}
      {...wrapperProps}
    >
      <div className="sn-article-card__image-wrap">
        <img className="sn-article-card__image" src={image} alt={title} />
        {isPending && <span className="sn-article-card__badge">Em breve</span>}
      </div>
      {!isPending && (
        <SaveButton
          size="card"
          isSaved={isFavorite(`article:${slug}`)}
          onToggle={() => toggleFavorite(`article:${slug}`)}
          label={`Salvar ${title} nos favoritos`}
        />
      )}
      <div className="sn-article-card__body">
        <span className="sn-article-card__tag">{tag}</span>
        <h3 className="sn-article-card__title">{title}</h3>
        <p className="sn-article-card__excerpt">{excerpt}</p>
      </div>
    </Wrapper>
  );
}

export default ArticleCard;
