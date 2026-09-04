import productImage from '../../images/guide-cover.jpg';
import './FeaturedProduct.css';

function FeaturedProduct() {
  return (
    <section className="sn-product">
      <div className="sn-product__image-wrap">
        <img className="sn-product__image" src={productImage} alt="Capa do guia de nomadismo digital" />
      </div>
      <div className="sn-product__content">
        <span className="sn-product__eyebrow">Guia digital</span>
        <h2 className="sn-product__title">Guia completo de nomadismo digital</h2>
        <p className="sn-product__text">
          Um material aprofundado com checklists, ferramentas e roteiros testados para quem quer
          transformar viagem em estilo de vida — dos vistos ao orçamento mensal.
        </p>
        <span className="sn-product__price">R$ 49,90</span>
        <button className="sn-product__cta" type="button">Comprar</button>
        <p className="sn-product__note">
          * Botão ainda sem checkout real — integração de pagamento é etapa futura.
        </p>
      </div>
    </section>
  );
}

export default FeaturedProduct;
