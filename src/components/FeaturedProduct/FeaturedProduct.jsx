import { Link } from 'react-router-dom';
import productImage from '../../images/guide-cover.jpg';
import './FeaturedProduct.css';

function FeaturedProduct() {
  return (
    <section className="sn-product" id="guias">
      <div className="sn-product__inner">
        <Link className="sn-product__image-wrap" to="/guias/nomadismo">
          <img className="sn-product__image" src={productImage} alt="Capa do guia de nomadismo digital" />
        </Link>
        <div className="sn-product__content">
          <span className="sn-product__eyebrow">Guia digital</span>
          <h2 className="sn-product__title">
            <Link className="sn-product__title-link" to="/guias/nomadismo">
              Guia Completo de Nomadismo Digital
            </Link>
          </h2>
          <p className="sn-product__text">
            O nomadismo digital é fácil de imaginar: notebook, praia, liberdade instantânea. A
            realidade é outra — tem visto, tem fuso horário, tem a pergunta que ninguém responde
            direito. Por onde começar de verdade?
          </p>
          <p className="sn-product__text">
            Este guia mostra o caminho. Dado real, o que muda de verdade entre morar em três
            países bem diferentes entre si, e um roteiro de quatro fases pra testar antes de
            virar sua vida de cabeça pra baixo.
          </p>
          <p className="sn-product__text">Sem fórmula mágica. Só o mapa que faltava.</p>
          <Link className="sn-product__cta" to="/guias/nomadismo">Comprar</Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
