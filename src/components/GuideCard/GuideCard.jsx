import { Link } from 'react-router-dom';
import ShareButton from '../ShareButton/ShareButton';
import './GuideCard.css';

function GuideCard({ guide }) {
  const { slug, eyebrow, title, dek, image, alt } = guide;

  return (
    <Link className="sn-guide-card" to={`/guias/${slug}`}>
      <div className="sn-guide-card__photo">
        <img className="sn-guide-card__image" src={image} alt={alt} />
      </div>
      <ShareButton path={`/guias/${slug}`} title={title} label={`Compartilhar ${title}`} />
      <div className="sn-guide-card__body">
        <p className="sn-guide-card__eyebrow">{eyebrow}</p>
        <h2 className="sn-guide-card__title">{title}</h2>
        <p className="sn-guide-card__dek">{dek}</p>
      </div>
    </Link>
  );
}

export default GuideCard;
