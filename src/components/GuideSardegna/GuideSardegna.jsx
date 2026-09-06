import GuideArticleLayout from '../GuideArticleLayout/GuideArticleLayout';
import Callout from '../Callout/Callout';
import CostTable from '../CostTable/CostTable';
import FaqList from '../FaqList/FaqList';
import GuideCta from '../GuideCta/GuideCta';
import { getGuideBySlug } from '../../data/guides';
import useFavorites from '../../hooks/useFavorites';

const guide = getGuideBySlug('sardegna');

const faqItems = [
  {
    question: 'Dá pra viver na Sardenha com menos de €1.000 por mês?',
    answer:
      'É apertado, mas possível fora da alta temporada — hospedagem no entroterra combinada com alimentação cozinhada em casa consegue chegar perto disso.',
  },
  {
    question: 'Qual bairro de Cagliari é mais barato?',
    answer:
      'Villanova e Marina têm preços parecidos, geralmente mais em conta que Poetto — que cobra um prêmio pela proximidade da praia.',
  },
  {
    question: 'Julho e agosto valem o preço mais alto?',
    answer:
      'Depende do que você busca. A atmosfera é mais festiva, mas os preços sobem 40–80%. Maio, junho e setembro entregam praia igualmente boa com menos gente.',
  },
  {
    question: 'Preciso de carro para viver na Sardenha?',
    answer:
      'Em Cagliari, não. Fora da capital (Costa Rei, entroterra), um carro ou moto vira necessidade, não luxo.',
  },
];

function GuideSardegna() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <GuideArticleLayout
      guide={{
        ...guide,
        eyebrow: 'SARDEGNA · GUIAS PRÁTICOS',
        title: 'Quanto Custa Viver na Sardenha em 2026',
        dek: 'Números reais de quem já foi — nada de faixa de preço genérica e otimista de blog.',
      }}
      isSaved={isFavorite(`guide:${guide.slug}`)}
      onToggleSave={() => toggleFavorite(`guide:${guide.slug}`)}
    >
      <p>
        A maioria dos blogs de nômade digital te dá uma faixa de preço genérica, otimista o
        suficiente pra parecer barato e vaga o suficiente pra nunca estar errada. Aqui não. Estes
        são os números que a gente usa nos nossos próprios guias — testados, não estimados.
      </p>

      <Callout>
        <strong>Resposta rápida:</strong> viver no sul da Sardenha custa entre{' '}
        <strong>€1.240 e €2.160 por mês</strong>, dependendo do perfil e da época do ano. Julho e
        agosto inflacionam hospedagem em 40–80%. Maio, junho e setembro são os meses de melhor
        custo-benefício.
      </Callout>

      <h2>A Tabela Completa</h2>
      <CostTable
        columns={['Categoria', 'Econômico', 'Confortável', 'Observação']}
        rows={[
          ['Hospedagem', '€600', '€900', 'Villanova ou Poetto, Airbnb de longa estadia'],
          ['Alimentação', '€350', '€550', 'Mercado San Benedetto poupa ~40%'],
          ['Transporte', '€80', '€150', 'Moto (€200/mês) compensa mais que carro na cidade'],
          ['Coworking', '€0', '€180', '€0 = café com fibra · €180 = coworking dedicado'],
          ['Chip de dados', '€30', '€30', 'TIM 50GB é suficiente para trabalho normal'],
          ['Passeios', '€80', '€200', 'Praias gratuitas · passeio de barco ~€30/pessoa'],
          ['Imprevistos', '€100', '€150', 'Farmácia, manutenção, esquecidos'],
        ]}
        totalRow={['Total', '~€1.240', '~€2.160', '']}
      />

      <h2>Onde Morar Muda Tudo no Orçamento</h2>
      <p>
        <strong>Cagliari</strong> (Villanova, Marina, Poetto) — a base mais prática. Apartamento de
        um quarto para estadia de 30+ dias: €600–1.100/mês, dependendo do bairro.
      </p>
      <p>
        <strong>Costa Rei</strong> — a 45 minutos de Cagliari. Casas de temporada saem por
        €900–1.500/mês em maio, junho e setembro — os mesmos imóveis sobem 60% em julho e agosto.
      </p>
      <p>
        <strong>Entroterra</strong> (Barumini, Dolianova, Sanluri) — preços 40 a 60% menores que a
        costa. Agriturismos com café da manhã e Wi-Fi funcional saem por €45–70 a noite.
      </p>

      <h2>O Que os Blogs Genéricos Não Te Contam</h2>
      <p>
        O Mercado di San Benedetto, em Cagliari, resolve a cesta da semana por €25–40. Quem cozinha
        em casa com frequência corta o orçamento de alimentação quase pela metade. Fora de Cagliari,
        um chip de dados 4G (~€30/mês) não é opcional — é seguro contra o dia em que o Wi-Fi da
        Costa Rei decide não funcionar.
      </p>

      <h2>Perguntas Frequentes</h2>
      <FaqList items={faqItems} />

      <GuideCta
        variant="primary"
        title="O próximo passo"
        buttonLabel="Conhecer o Guia Viver no Sul da Sardenha"
        buttonHref="https://sassonomad.com/sardegna"
        price="EUR 19 · acesso imediato via Hotmart"
      >
        O guia completo <strong>Viver no Sul da Sardenha</strong> detalha onde morar por perfil,
        como funciona o trabalho remoto com fibra confiável e o roteiro exato do seu primeiro mês na
        ilha.
      </GuideCta>
    </GuideArticleLayout>
  );
}

export default GuideSardegna;
