import './ArticleCard.css';

function ArticleCard({ article }) {
  const { tag, title, excerpt, image } = article;

  return (
    <a className="sn-article-card" href="#">
      <img className="sn-article-card__image" src={image} alt={title} />
      <div className="sn-article-card__body">
        <span className="sn-article-card__tag">{tag}</span>
        <h3 className="sn-article-card__title">{title}</h3>
        <p className="sn-article-card__excerpt">{excerpt}</p>
      </div>
    </a>
  );
}

export default ArticleCard;
