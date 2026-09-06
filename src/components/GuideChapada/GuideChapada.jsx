import GuideArticleLayout from '../GuideArticleLayout/GuideArticleLayout';
import Callout from '../Callout/Callout';
import CostTable from '../CostTable/CostTable';
import FaqList from '../FaqList/FaqList';
import GuideCta from '../GuideCta/GuideCta';
import { getGuideBySlug } from '../../data/guides';
import useFavorites from '../../hooks/useFavorites';

const guide = getGuideBySlug('chapada');

const faqItems = [
  {
    question: 'Dá pra viver na Chapada Diamantina com menos de R$3.000 por mês?',
    answer:
      'É apertado, mas possível fora de época de festival — hospedagem simples no Capão combinada com alimentação da feirinha orgânica consegue chegar perto disso.',
  },
  {
    question: 'É mais barato ficar em Lençóis ou no Vale do Capão?',
    answer:
      'Hospedagem básica costuma ser semelhante nos dois, mas o Capão compensa em alimentação enquanto Lençóis compensa em conectividade e infraestrutura.',
  },
  {
    question: 'A estrada para o Vale do Capão ainda é de terra?',
    answer:
      'Não mais. A BA-849 foi totalmente asfaltada e entregue em maio de 2025 — o trajeto de 19–23 km hoje é feito em 25–40 minutos.',
  },
  {
    question: 'A internet é boa o suficiente para trabalho remoto?',
    answer:
      'Em Lençóis centro, sim — fibra óptica em pousadas e coworkings. No Capão, há Wi-Fi em pousadas mas nenhuma operadora tem sinal na vila.',
  },
];

function GuideChapada() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <GuideArticleLayout
      guide={{
        ...guide,
        eyebrow: 'CHAPADA DIAMANTINA · GUIAS PRÁTICOS',
        title: 'Quanto Custa Viver na Chapada Diamantina em 2026',
        dek: 'Números reais de Lençóis e do Vale do Capão — nada de estimativa otimista de blog de fim de semana.',
      }}
      isSaved={isFavorite(guide.slug)}
      onToggleSave={() => toggleFavorite(guide.slug)}
    >
      <p>
        A maioria dos blogs de viagem trata a Chapada como destino de fim de semana — três dias,
        quatro trilhas, de volta pra rotina. Quase nenhum fala do que custa realmente ficar um mês.
        Aqui está a conta feita por quem já fez as duas coisas: os números que usamos nos nossos
        próprios guias, testados, não estimados.
      </p>

      <Callout>
        <strong>Resposta rápida:</strong> viver na Chapada Diamantina custa entre{' '}
        <strong>R$3.350 e R$6.450 por mês</strong>, dependendo do perfil e de onde você fica —
        Lençóis ou Vale do Capão. Convertendo pela cotação de referência (1 EUR ≈ R$5,60, jun/2026),
        um nômade europeu ou americano vive confortavelmente na região com menos de EUR 400/mês.
      </Callout>

      <h2>A Tabela Completa</h2>
      <CostTable
        columns={['Categoria', 'Econômico', 'Confortável', 'Observação']}
        rows={[
          ['Hospedagem', 'R$1.500', 'R$3.000', 'Hostel em Lençóis ou casa alugada no Capão'],
          ['Alimentação', 'R$800', 'R$1.500', 'Feira orgânica de sábado · Pix amplamente aceito'],
          ['Transporte', 'R$200', 'R$400', 'Mototáxi local · bicicleta no Capão sai R$40/dia'],
          ['Conectividade', 'R$150', 'R$250', 'Chip Claro é o de melhor cobertura na região'],
          ['Passeios', 'R$400', 'R$800', 'Guia certificado ABETA obrigatório em trilhas longas'],
          ['Imprevistos', 'R$300', 'R$500', 'Farmácia, manutenção, saques de emergência'],
        ]}
        totalRow={['Total', '~R$3.350', '~R$6.450', '']}
      />

      <h2>Lençóis ou Vale do Capão: Onde Morar Muda Tudo no Orçamento</h2>
      <p>
        <strong>Lençóis</strong> — a base mais prática. Cidade histórica tombada pelo IPHAN, com
        caixas eletrônicos, farmácias, mercado e a melhor conectividade da região: fibra óptica já
        chegou ao centro histórico. Hospedagem de qualidade sai por R$80–280/noite dependendo do
        padrão.
      </p>
      <p>
        <strong>Vale do Capão</strong> — o polo alternativo. A estrada de acesso (BA-849,
        Palmeiras–Capão) foi totalmente asfaltada e entregue em maio de 2025 — o trajeto que levava
        45–55 minutos (podendo passar de 1h30 na chuva) agora é feito em 25–40 minutos.
        Conectividade continua sem sinal de operadora na vila — apenas Wi-Fi em pousadas,
        restaurantes e casas. Aluguel de casa completa: R$1.500–3.500/mês.
      </p>
      <p>
        <strong>A lógica prática:</strong> quem depende de videochamadas frequentes fica em
        Lençóis. Quem trabalha em blocos de 3–4h por dia encontra no Capão uma experiência
        transformadora.
      </p>

      <h2>O Que os Blogs de Fim de Semana Não Te Contam</h2>
      <p>
        Caixas eletrônicos existem só em Lençóis centro — quem vai ao Capão precisa sacar dinheiro
        antes, porque lá o Pix e o dinheiro dominam. E um chip de dados Claro não é opcional fora de
        Lençóis: é seguro contra o dia em que a chuva derruba a luz e o Wi-Fi da pousada junto com
        ela.
      </p>

      <h2>Perguntas Frequentes</h2>
      <FaqList items={faqItems} />

      <GuideCta
        variant="primary"
        title="O próximo passo"
        buttonLabel="Conhecer o Guia Chapada Diamantina Profunda"
        buttonHref="https://sassonomad.com/chapada"
        price="BRL 89 · acesso imediato via Hotmart"
      >
        O guia completo <strong>Chapada Diamantina Profunda</strong> detalha onde morar por perfil,
        os melhores restaurantes de Lençóis e do Capão, as trilhas alternativas que quase ninguém
        conhece e o roteiro completo de conexão com a natureza.
      </GuideCta>
    </GuideArticleLayout>
  );
}

export default GuideChapada;
