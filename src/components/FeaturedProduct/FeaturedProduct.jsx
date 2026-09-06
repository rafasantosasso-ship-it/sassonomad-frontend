import productImage from '../../images/guide-cover.jpg';
import './FeaturedProduct.css';

function FeaturedProduct() {
  return (
    <section className="sn-product" id="guias">
      <div className="sn-product__image-wrap">
        <img className="sn-product__image" src={productImage} alt="Capa do guia de nomadismo digital" />
      </div>
      <div className="sn-product__content">
        <span className="sn-product__eyebrow">Guia digital</span>
        <h2 className="sn-product__title">Guia Completo de Nomadismo Digital</h2>
        <p className="sn-product__text">
          Checklists, ferramentas e roteiros testados por quem já fez a mudança de verdade. Do
          visto ao orçamento mensal, dos dois territórios da Sassonomad — Sardegna e Chapada
          Diamantina — a como sustentar rotina e produtividade trabalhando de qualquer lugar.
          Tudo num guia só, pronto pra usar desde o dia 1.
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
