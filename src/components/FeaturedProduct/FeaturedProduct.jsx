import { Link } from 'react-router-dom';
import productImage from '../../images/guide-cover.jpg';
import { useLang } from '../../i18n/LanguageContext';
import './FeaturedProduct.css';

function FeaturedProduct() {
  const { t, path } = useLang();
  const guidePath = path('guideNomadismo');

  return (
    <section className="sn-product" id="guias">
      <div className="sn-product__inner">
        <Link className="sn-product__image-wrap" to={guidePath}>
          <img className="sn-product__image" src={productImage} alt={t('product.imageAlt')} />
        </Link>
        <div className="sn-product__content">
          <span className="sn-product__eyebrow">{t('product.eyebrow')}</span>
          <h2 className="sn-product__title">
            <Link className="sn-product__title-link" to={guidePath}>
              {t('product.title')}
            </Link>
          </h2>
          <p className="sn-product__text">{t('product.p1')}</p>
          <p className="sn-product__text">{t('product.p2')}</p>
          <p className="sn-product__text">{t('product.p3')}</p>
          <Link className="sn-product__cta" to={guidePath}>{t('product.cta')}</Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
