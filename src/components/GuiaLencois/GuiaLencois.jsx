import guiaCoverImg from '../../images/guides/chapada.jpg';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import './GuiaLencois.css';

function GuiaLencois() {
  useDocumentMeta(
    'Viver em Lençóis: O Guia Que Nenhum Turista Tem | Sasso Nomad',
    'Quanto custa, de verdade, viver em Lençóis? Guia digital em PDF escrito por quem já morou lá — sem estimativa de blog genérico.'
  );

  return (
    <article className="sn-lencois">
      <div className="sn-lencois__hero">
        <img
          className="sn-lencois__hero-img"
          src={guiaCoverImg}
          alt="Orquídea silvestre nos campos rupestres da Chapada Diamantina, perto de Lençóis"
        />
      </div>

      <div className="sn-lencois__content">
        <span className="sn-lencois__badge">Guia digital · R$ 39 · Formato: PDF</span>

        <h1 className="sn-lencois__title">Viver em Lençóis: O Guia Que Nenhum Turista Tem</h1>

        <p className="sn-lencois__text">
          Quanto custa, de verdade, viver em Lençóis? Não a estimativa de blog genérico — o número
          real, de quem já pagou aluguel, já errou negociação de casa histórica, já descobriu na
          prática o que sai caro e o que ninguém avisa antes.
        </p>

        <p className="sn-lencois__text">
          Esse guia não é sobre os três dias de roteiro. É sobre o que acontece depois — quando
          você para de visitar e começa a morar. A busca por casa que ninguém posta no Instagram.
          O momento exato em que a cidade te aceita como um dos seus. O rio que só quem fica
          descobre. A internet que cai bem na hora errada, e o que fazer quando isso acontece.
        </p>

        <p className="sn-lencois__text">
          Escrito por quem viveu cada capítulo antes de escrever sobre ele — sem enrolação, sem
          dica genérica, sem spoiler aqui. As respostas estão lá dentro.
        </p>

        <button className="sn-lencois__cta" type="button">
          Conhecer o Guia — R$ 39
        </button>
        <p className="sn-lencois__note">* Botão ainda sem checkout real — em breve via Hotmart.</p>
      </div>
    </article>
  );
}

export default GuiaLencois;
