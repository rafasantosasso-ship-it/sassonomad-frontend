import aboutImg from '../../images/about-cover.jpg';
import './About.css';

function About() {
  return (
    <section className="sn-about">
      <div className="sn-about__image-wrap">
        <img
          className="sn-about__image"
          src={aboutImg}
          alt="Nascer do sol entre a serra e o rio, na Chapada Diamantina"
        />
      </div>
      <div className="sn-about__content">
        <h2 className="sn-about__title">Sobre o Sasso Nomad</h2>
        <p className="sn-about__text">
          Essa imagem foi tirada num amanhecer qualquer na Chapada Diamantina — sem ninguém por
          perto, só o sol nascendo entre a serra e o rio. É esse tipo de momento que fica de fora
          dos guias de turismo comuns, porque exige o que a maioria das viagens não dá: tempo
          parado, sem pressa de ir pro próximo ponto do roteiro.
        </p>
        <p className="sn-about__text">
          Sou criador de conteúdo dividido entre a Sardenha e o Brasil — literalmente entre dois
          lados do mundo que, à primeira vista, não têm nada em comum. Mas os dois me ensinaram a
          mesma coisa: o lugar que vale a pena conhecer é aquele que você tem tempo de habitar, não
          só visitar.
        </p>
        <p className="sn-about__text">
          O Sasso Nomad nasceu de uma frustração simples: cansei de conteúdo de viagem que promete
          liberdade e entrega só destino bonito e dica rasa. Quem trabalha remoto e viaja devagar de
          verdade precisa de outra coisa — rotina que funciona, orçamento real, conectividade que
          não falha na hora errada, e a coragem de ficar mais tempo num lugar em vez de colecionar
          carimbo de passaporte.
        </p>
        <p className="sn-about__text">
          É isso que você encontra aqui: rotas de viagem lenta, nomadismo digital sem enrolação, e
          os lugares que realmente merecem a demora.
        </p>
      </div>
    </section>
  );
}

export default About;
