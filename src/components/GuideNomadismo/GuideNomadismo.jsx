import GuideArticleLayout from '../GuideArticleLayout/GuideArticleLayout';
import Callout from '../Callout/Callout';
import CostTable from '../CostTable/CostTable';
import FaqList from '../FaqList/FaqList';
import GuideCta from '../GuideCta/GuideCta';
import { getGuideBySlug } from '../../data/guides';
import useFavorites from '../../hooks/useFavorites';

const guide = getGuideBySlug('nomadismo');

const faqItems = [
  {
    question: 'É mais barato viver na Sardenha ou na Chapada Diamantina?',
    answer:
      'Em termos absolutos, a Chapada costuma sair mais barata para quem ganha em euros ou dólares. Para brasileiros, a diferença de poder de compra é menor do que parece.',
  },
  {
    question: 'Qual dos dois tem melhor internet para trabalho remoto?',
    answer:
      'Sardenha, sem dúvida — especialmente em Cagliari. A Chapada exige mais planejamento e chip de dados como backup constante.',
  },
  {
    question: 'Dá pra fazer os dois destinos no mesmo ano?',
    answer:
      'Dá, e é comum entre quem pratica slow travel de verdade: a estação seca da Chapada coincide com a primavera europeia.',
  },
];

function GuideNomadismo() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <GuideArticleLayout
      guide={{
        ...guide,
        eyebrow: 'NOMADISMO DIGITAL · COMPARATIVOS',
        title: 'Sardegna ou Chapada Diamantina: Qual Destino Combina com Seu Tipo de Nômade',
        dek: 'A comparação direta, sem enrolação, entre os dois territórios da Sassonomad.',
      }}
      isSaved={isFavorite(guide.slug)}
      onToggleSave={() => toggleFavorite(guide.slug)}
    >
      <p>
        Essa é uma pergunta que só faz sentido perguntar pra quem já morou nos dois lugares. É
        exatamente por isso que ninguém mais está respondendo ela com dado real — a maioria dos
        guias de nômade digital cobre um território ou outro, nunca os dois com profundidade.
      </p>

      <Callout>
        <strong>Resposta rápida:</strong> escolha a <strong>Sardenha</strong> se você quer praia,
        internet confiável em Cagliari e trabalho estruturado em blocos de manhã. Escolha a{' '}
        <strong>Chapada Diamantina</strong> se busca desconexão de verdade, trilha e comunidade
        alternativa mais barata — mas aceite que a internet fora de Lençóis é instável.
      </Callout>

      <h2>A Comparação Direta</h2>
      <CostTable
        columns={['Critério', 'Sardegna', 'Chapada Diamantina']}
        rows={[
          ['Custo total/mês', '€1.240–€2.160', 'R$3.350–R$6.450'],
          ['Internet', 'Fibra em Cagliari ✓', 'Instável no Capão ⚠'],
          ['Praia', 'Sim — a 30 min', 'Não — território de interior'],
          ['Natureza', 'Costeira + montanha', 'Trilhas + cachoeiras'],
          ['Comunidade nômade', 'Pequena, crescendo', 'Ativa, alternativa'],
          ['Melhor época', 'Mai–jun, set–out', 'Mai–set (seca)'],
          ['Ideal para', 'Trabalho estruturado + praia', 'Foco criativo + desconexão'],
        ]}
      />

      <h2>Se Você Trabalha com Reuniões Frequentes</h2>
      <p>
        A Sardenha ganha fácil. Cagliari tem fibra óptica na maioria dos apartamentos do centro e
        dois coworkings em operação. A Chapada exige plano B sempre: chip de dados como backup e
        entregas grandes concentradas nos dias em Lençóis.
      </p>

      <h2>Se Você Está em Burnout ou Precisa de Reset Real</h2>
      <p>
        A Chapada foi desenhada — desde os anos 1970 — pra isso. O Vale do Capão é polo de turismo
        espiritual e comunidade alternativa há décadas. A Sardenha também desacelera, mas de um
        jeito mediterrâneo: almoço longo, trabalho em blocos, jantar às 20h que &quot;termina quando
        termina&quot;.
      </p>

      <h2>O Que Ninguém Te Conta: Não Precisa Escolher Só Um</h2>
      <p>
        Muitos nômades fazem 2-3 meses na Sardenha na primavera europeia e 2-3 meses na Chapada na
        seca brasileira — a estação seca da Chapada (maio–setembro) coincide com a primavera e o
        início do verão europeu. É o próprio conceito por trás da Sassonomad: dois territórios, uma
        filosofia de vida lenta.
      </p>

      <h2>Perguntas Frequentes</h2>
      <FaqList items={faqItems} />

      <GuideCta
        variant="alt"
        title="O próximo passo"
        buttonLabel="Baixar o Kit Nômade Digital"
        buttonHref="https://sassonomad.com/kit-nomade"
        price="BRL 37 · acesso imediato via Hotmart"
      >
        Antes de escolher território, comece pelo <strong>Kit Nômade Digital</strong>: orçamento
        comparado dos dois destinos, checklist de partida, roteiro do primeiro mês e guia de vistos
        — tudo num só lugar.
      </GuideCta>
    </GuideArticleLayout>
  );
}

export default GuideNomadismo;
