import aboutImg from '../../images/about-cover.jpg';
import './About.css';

function About() {
  return (
    <section className="sn-about" id="sobre">
      <div className="sn-about__image-wrap">
        <img
          className="sn-about__image"
          src={aboutImg}
          alt="Pôr do sol entre a serra e o rio, na Bahia"
        />
      </div>
      <div className="sn-about__content">
        <h2 className="sn-about__title">Sobre o Sasso Nomad</h2>
        <p className="sn-about__text">
          Essa imagem foi tirada num pôr do sol na Bahia — só o sol entre a serra e o rio. Não tem
          legenda perfeita pra esse tipo de momento. Ele foi feito pra ser vivido devagar, no
          silêncio de quem já não está mais de passagem.
        </p>
        <p className="sn-about__text">
          É esse tipo de instante que eu desejo que você encontre: sem pressa de ir pro próximo
          ponto do roteiro.
        </p>
        <p className="sn-about__text">
          Vivo entre o Brasil e a Itália — literalmente entre dois lados do mundo que, à primeira
          vista, não têm nada em comum. O mar mediterrâneo de um lado, a Chapada Diamantina do
          outro. Mas os dois me ensinaram exatamente a mesma coisa, cada um à sua maneira.
        </p>
        <p className="sn-about__text">
          O Sasso Nomad se reflete nisso: quem trabalha remoto e viaja devagar de verdade precisa
          de rotina que funciona, orçamento real, conectividade que não falha na hora errada — e a
          coragem de ficar mais tempo num lugar.
        </p>
        <p className="sn-about__text">
          É isso que você encontra aqui, sem enrolação: viagens bem aproveitadas por quem já morou
          nelas, nomadismo digital, e os lugares que realmente merecem a sua presença.
        </p>
        <p className="sn-about__text">
          O sol já nasceu uma vez sobre esse rio, sem ninguém olhando. A próxima vez pode ser você
          aí.
        </p>
        <p className="sn-about__signature">— Sasso Nomad</p>
      </div>
    </section>
  );
}

export default About;
