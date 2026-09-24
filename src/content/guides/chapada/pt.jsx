import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'LENÇÓIS',
  title: 'Viver em Lençóis: O Guia Que Nenhum Turista Tem',
  dek: 'Quanto custa, de verdade, viver em Lençóis — escrito por quem já morou lá.',
  alt: 'Orquídea silvestre nos campos rupestres da Chapada Diamantina',
  pageEyebrow: 'LENÇÓIS · GUIA DIGITAL',
  pageDek: 'Quanto custa, de verdade, viver em Lençóis? Não a estimativa de blog genérico — o número real, de quem já pagou aluguel, já errou negociação de casa histórica, já descobriu na prática o que sai caro e o que ninguém avisa antes.',
  productName: 'Guia Viver em Lençóis',
  seoTitle: 'Viver em Lençóis (Chapada Diamantina): Custo de Vida e Guia Prático | Sasso Nomad',
  seoDescription: 'Quanto custa, de verdade, morar em Lençóis, na Chapada Diamantina: aluguel, internet, rotina e o que ninguém avisa antes — escrito por quem já morou lá.',
};

function Body({ offer }) {
  return (
    <>
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

      <GuideCta
        title="O próximo passo"
        buttonLabel="Conhecer o Guia Viver em Lençóis"
        offer={offer}
        format="Formato: PDF"
      >
        O guia <strong>Viver em Lençóis</strong> é sobre isso — escrito por quem já morou lá.
      </GuideCta>
    </>
  );
}

export default Body;
