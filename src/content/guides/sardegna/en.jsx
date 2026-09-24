import Callout from '../../../components/Callout/Callout';
import CostTable from '../../../components/CostTable/CostTable';
import FaqList from '../../../components/FaqList/FaqList';
import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'SARDINIA',
  title: 'The cost of living in Sardinia',
  dek: 'Real numbers from Cagliari, Costa Rei and the inland villages in 2026.',
  alt: 'Spanish watchtower on the southern coast of Sardinia',
  pageEyebrow: 'SARDINIA · PRACTICAL GUIDES',
  pageTitle: 'The Cost of Living in Sardinia in 2026',
  pageDek: 'Real numbers from people who have been there — no generic, optimistic blog price ranges.',
  productName: 'Living in Southern Sardinia',
  seoTitle: 'Cost of Living in Sardinia 2026: The Complete Breakdown for Digital Nomads | Sasso Nomad',
  seoDescription: 'The real cost of living in southern Sardinia in 2026: €1,240 to €2,160 a month. Rent, groceries, transport and coworking in Cagliari, Costa Rei and inland villages.',
};

export const faqItems = [
  {
    question: 'Can you live in Sardinia on less than €1,000 a month?',
    answer:
      'It\'s tight, but possible outside high season — inland accommodation combined with cooking at home can get you close.',
  },
  {
    question: 'Which Cagliari neighbourhood is cheapest?',
    answer:
      'Villanova and Marina have similar prices, usually lower than Poetto — which charges a premium for being close to the beach.',
  },
  {
    question: 'Are July and August worth the higher prices?',
    answer:
      'It depends on what you\'re after. The atmosphere is livelier, but prices rise 40–80%. May, June and September offer equally good beaches with fewer people.',
  },
  {
    question: 'Do I need a car to live in Sardinia?',
    answer:
      'In Cagliari, no. Outside the capital (Costa Rei, inland villages), a car or scooter becomes a necessity, not a luxury.',
  },
];

function Body({ offer }) {
  return (
    <>
      <p>
        Most digital nomad blogs give you a generic price range, optimistic enough to look cheap
        and vague enough to never be wrong. Not here. These are the numbers we use in our own
        guides — tested, not estimated.
      </p>

      <Callout>
        <strong>Quick answer:</strong> living in southern Sardinia costs between{' '}
        <strong>€1,240 and €2,160 a month</strong>, depending on your profile and the time of
        year. July and August push accommodation up by 40–80%. May, June and September offer the
        best value.
      </Callout>

      <h2>The Complete Breakdown</h2>
      <CostTable
        columns={['Category', 'Budget', 'Comfortable', 'Notes']}
        rows={[
          ['Accommodation', '€600', '€900', 'Villanova or Poetto, long-stay Airbnb'],
          ['Food', '€350', '€550', 'San Benedetto Market saves ~40%'],
          ['Transport', '€80', '€150', 'A scooter (€200/month) beats a car in the city'],
          ['Coworking', '€0', '€180', '€0 = café with fibre · €180 = dedicated coworking'],
          ['Data SIM', '€30', '€30', 'TIM 50GB is enough for normal work'],
          ['Outings', '€80', '€200', 'Free beaches · boat trip ~€30/person'],
          ['Contingency', '€100', '€150', 'Pharmacy, repairs, things you forgot'],
        ]}
        totalRow={['Total', '~€1,240', '~€2,160', '']}
      />

      <h2>Where You Live Changes the Whole Budget</h2>
      <p>
        <strong>Cagliari</strong> (Villanova, Marina, Poetto) — the most practical base.
        One-bedroom flat for 30+ day stays: €600–1,100/month, depending on the neighbourhood.
      </p>
      <p>
        <strong>Costa Rei</strong> — 45 minutes from Cagliari. Holiday homes go for
        €900–1,500/month in May, June and September — the same properties rise 60% in July and
        August.
      </p>
      <p>
        <strong>Inland</strong> (Barumini, Dolianova, Sanluri) — prices 40–60% lower than the
        coast. Agriturismi with breakfast and working Wi-Fi cost €45–70 a night.
      </p>

      <h2>What Generic Blogs Won&apos;t Tell You</h2>
      <p>
        San Benedetto Market in Cagliari covers a week&apos;s shopping for €25–40. If you cook at
        home often, you can cut your food budget almost in half. Outside Cagliari, a 4G data SIM
        (~€30/month) isn&apos;t optional — it&apos;s insurance for the day the Costa Rei Wi-Fi
        decides not to work.
      </p>

      <h2>FAQ</h2>
      <FaqList items={faqItems} />

      <GuideCta
        title="The next step"
        buttonLabel="See the Living in Southern Sardinia guide"
        offer={offer}
        format="instant access via Hotmart"
      >
        The full <strong>Living in Southern Sardinia</strong> guide covers where to live for your
        profile, how remote work runs on reliable fibre and the exact plan for your first month on
        the island.
      </GuideCta>
    </>
  );
}

export default Body;
