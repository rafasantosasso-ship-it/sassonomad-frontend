import communityImg from '../../images/community-cover.jpg';
import './CommunitySection.css';

function CommunitySection({ onJoinClick }) {
  return (
    <section className="sn-community" id="comunidade">
      <img
        className="sn-community__bg"
        src={communityImg}
        alt=""
        aria-hidden="true"
      />
      <div className="sn-community__overlay" />
      <div className="sn-community__inner">
        <h2 className="sn-community__title">Faça Parte da Comunidade Sasso Nomad</h2>
        <p className="sn-community__text">
          Todo mundo naquele mirante estava vendo o mesmo pôr do sol — e ainda assim, cada um vivia
          uma viagem completamente diferente. Essa é a parte que ninguém posta: viajar devagar
          também é solitário às vezes. Decisão de visto, dúvida sobre onde ficar, aquela pergunta
          que só quem já passou pelo mesmo caminho sabe responder de verdade.
        </p>
        <p className="sn-community__text">
          A comunidade Sasso Nomad existe pra isso. Um espaço de gente que troca rota real por rota
          real — não dica genérica de blog, não recomendação patrocinada. Cadastre seu e-mail e
          ganhe de graça um artigo exclusivo sobre nomadismo digital — e seja um dos primeiros a
          saber quando a newsletter e os espaços de troca abrirem.
        </p>
        <button className="sn-community__cta" type="button" onClick={onJoinClick}>
          Participar da Comunidade
        </button>
      </div>
    </section>
  );
}

export default CommunitySection;
