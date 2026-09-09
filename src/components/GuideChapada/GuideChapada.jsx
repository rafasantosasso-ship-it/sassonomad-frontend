import GuideArticleLayout from '../GuideArticleLayout/GuideArticleLayout';
import { getGuideBySlug } from '../../data/guides';

const guide = getGuideBySlug('chapada');

function GuideChapada() {
  return (
    <GuideArticleLayout
      guide={{
        ...guide,
        eyebrow: 'LENÇÓIS · GUIA DIGITAL',
        title: 'Viver em Lençóis: O Guia Que Nenhum Turista Tem',
        dek: 'Quanto custa, de verdade, viver em Lençóis? Não a estimativa de blog genérico — o número real, de quem já pagou aluguel, já errou negociação de casa histórica, já descobriu na prática o que sai caro e o que ninguém avisa antes.',
      }}
    >
      <p>
        Esse guia não é sobre os três dias de roteiro. É sobre o que acontece depois — quando
        você para de visitar e começa a morar. A busca por casa que ninguém posta no Instagram.
        O momento exato em que a cidade te aceita como um dos seus. O rio que só quem fica
        descobre. A internet que cai bem na hora errada, e o que fazer quando isso acontece.
      </p>

      <p>
        Escrito por quem viveu cada capítulo antes de escrever sobre ele — sem enrolação, sem
        dica genérica, sem spoiler aqui. As respostas estão lá dentro.
      </p>

      <div className="sn-guide-cta sn-guide-cta_primary">
        <h3 className="sn-guide-cta__title">O próximo passo</h3>
        <p className="sn-guide-cta__text">
          O guia <strong>Viver em Lençóis</strong> é sobre isso — escrito por quem já morou lá,
          não estimado de fora.
        </p>
        <button className="sn-guide-cta__button" type="button">
          Conhecer o Guia Viver em Lençóis
        </button>
        <span className="sn-guide-cta__price">R$ 39 · Formato: PDF</span>
      </div>
    </GuideArticleLayout>
  );
}

export default GuideChapada;
