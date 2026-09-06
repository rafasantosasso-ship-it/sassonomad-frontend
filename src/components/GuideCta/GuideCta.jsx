import './GuideCta.css';

function GuideCta({ variant = 'primary', title, buttonLabel, buttonHref, price, children }) {
  return (
    <div className={`sn-guide-cta sn-guide-cta_${variant}`}>
      <h3 className="sn-guide-cta__title">{title}</h3>
      <p className="sn-guide-cta__text">{children}</p>
      <a
        className="sn-guide-cta__button"
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonLabel}
      </a>
      <span className="sn-guide-cta__price">{price}</span>
    </div>
  );
}

export default GuideCta;
