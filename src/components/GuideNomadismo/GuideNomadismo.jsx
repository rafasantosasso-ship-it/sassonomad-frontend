import GuideArticleLayout from '../GuideArticleLayout/GuideArticleLayout';
import { getGuideBySlug } from '../../data/guides';

const guide = getGuideBySlug('nomadismo');

function GuideNomadismo() {
  return (
    <GuideArticleLayout
      guide={{
        ...guide,
        eyebrow: 'GUIA DIGITAL',
        title: 'Guia Completo de Nomadismo Digital',
        dek: 'Um guia sobre o que significa, de verdade, construir uma vida com mais mobilidade — sem abrir mão da carreira, sem fórmula mágica, sem romantizar o que também tem seu preço.',
      }}
    >
      <p>
        Você vai encontrar: o que mudou de fato no mundo do trabalho remoto, com dado real em
        vez de achismo; como transformar sua profissão em algo portátil; o que ninguém conta
        sobre solidão, disciplina e fronteira digital; como escolher o lugar certo pro momento
        certo da sua vida; a lógica por trás de como Brasil, Itália e Tailândia tratam quem
        trabalha remoto; e um roteiro de quatro fases pra testar essa vida antes de virar ela
        de cabeça pra baixo.
      </p>

      <p>Não é sobre viajar o tempo todo. É sobre ter menos limitação de lugar.</p>

      <div className="sn-guide-cta sn-guide-cta--alt">
        <h3 className="sn-guide-cta__title">Garanta o seu</h3>
        <button className="sn-guide-cta__button" type="button">
          Comprar
        </button>
        <span className="sn-guide-cta__price">
          * Botão ainda sem checkout real — integração de pagamento é etapa futura.
        </span>
      </div>
    </GuideArticleLayout>
  );
}

export default GuideNomadismo;
