import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'GUIA DIGITAL',
  title: 'Guia Completo de Nomadismo Digital',
  dek: 'Como construir uma vida com mais mobilidade, sem abrir mão da carreira — sem fórmula mágica.',
  alt: 'Piolho-de-cobra enrolado em espiral, close-up macro',
  pageEyebrow: 'GUIA DIGITAL',
  pageDek: 'Um guia sobre o que significa, de verdade, construir uma vida com mais mobilidade — sem abrir mão da carreira, sem fórmula mágica, sem romantizar o que também tem seu preço.',
  productName: 'Guia Completo de Nomadismo Digital',
  seoTitle: 'Guia Completo de Nomadismo Digital: Como Começar de Verdade | Sasso Nomad',
  seoDescription: 'Como tornar sua profissão portátil, escolher o lugar certo e testar a vida de nômade digital em quatro fases — com dados reais sobre Brasil, Itália e Tailândia.',
};

function Body({ offer }) {
  return (
    <>
      <p>
        Você vai encontrar: o que mudou de fato no mundo do trabalho remoto, com dado real em
        vez de achismo; como transformar sua profissão em algo portátil; o que ninguém conta
        sobre solidão, disciplina e fronteira digital; como escolher o lugar certo pro momento
        certo da sua vida; a lógica por trás de como Brasil, Itália e Tailândia tratam quem
        trabalha remoto; e um roteiro de quatro fases pra testar essa vida antes de virar ela
        de cabeça pra baixo.
      </p>

      <p>Não é sobre viajar o tempo todo. É sobre ter menos limitação de lugar.</p>

      <GuideCta variant="alt" title="Garanta o seu" buttonLabel="Comprar" offer={offer} />
    </>
  );
}

export default Body;
