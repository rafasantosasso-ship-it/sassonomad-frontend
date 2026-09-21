import productImage from '../../images/guide-cover.jpg';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import './GuiaNomadismoDigital.css';

function GuiaNomadismoDigital() {
  useDocumentMeta(
    'Guia Completo de Nomadismo Digital | Sasso Nomad',
    'Um guia sobre o que significa, de verdade, construir uma vida com mais mobilidade — sem abrir mão da carreira, sem fórmula mágica.'
  );

  return (
    <article className="sn-nomad-guide">
      <div className="sn-nomad-guide__hero">
        <img
          className="sn-nomad-guide__hero-img"
          src={productImage}
          alt="Capa do guia completo de nomadismo digital"
        />
      </div>

      <div className="sn-nomad-guide__content">
        <span className="sn-nomad-guide__eyebrow">Guia digital</span>
        <h1 className="sn-nomad-guide__title">Guia Completo de Nomadismo Digital</h1>

        <p className="sn-nomad-guide__text">
          Um guia sobre o que significa, de verdade, construir uma vida com mais mobilidade —
          sem abrir mão da carreira, sem fórmula mágica, sem romantizar o que também tem seu
          preço.
        </p>

        <p className="sn-nomad-guide__text">
          Você vai encontrar: o que mudou de fato no mundo do trabalho remoto, com dado real em
          vez de achismo; como transformar sua profissão em algo portátil; o que ninguém conta
          sobre solidão, disciplina e fronteira digital; como escolher o lugar certo pro momento
          certo da sua vida; a lógica por trás de como Brasil, Itália e Tailândia tratam quem
          trabalha remoto; e um roteiro de quatro fases pra testar essa vida antes de virar ela
          de cabeça pra baixo.
        </p>

        <p className="sn-nomad-guide__text">
          Não é sobre viajar o tempo todo. É sobre ter menos limitação de lugar.
        </p>

        <button className="sn-nomad-guide__cta" type="button">
          Comprar
        </button>
        <p className="sn-nomad-guide__note">
          * Botão ainda sem checkout real — integração de pagamento é etapa futura.
        </p>
      </div>
    </article>
  );
}

export default GuiaNomadismoDigital;
