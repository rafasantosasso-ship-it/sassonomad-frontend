// FAQ in English — adapted from PT. The visa question is written for
// non-EU travellers heading to Italy.
const FAQ_CATEGORIES = [
  {
    id: 'sardegna',
    title: 'Sardinia',
    items: [
      {
        question: 'When is the best time to visit southern Sardinia?',
        answer:
          'May, June and September offer the best value: great beaches without the extreme heat and inflated prices of July and August, when accommodation rises by up to 80%. If you want nightlife and buzz, high season (July–August) is worth the price.',
        linkLabel: 'The Cost of Living in Sardinia',
        link: { route: 'guideSardegna' },
      },
      {
        question: 'Is Sardinia a good place to live as a digital nomad?',
        answer:
          'Yes, especially in the south of the island: Cagliari has reliable fibre, two active coworking spaces and a cost of living between €1,240 and €2,160 a month — cheaper than most trendy European hubs, with the added bonus of not being saturated with nomads yet.',
        linkLabel: 'Sardinia: stone villages and turquoise sea',
        link: { route: 'articleSardegna' },
      },
      {
        question: 'Do I need a visa to work remotely from Italy?',
        answer:
          'If you\'re from a visa-exempt country (such as the US, UK, Canada or Australia), you can stay up to 90 days in any 180-day period under the standard Schengen rule. To stay longer, Italy\'s Digital Nomad Visa (a national D visa introduced in 2024) requires a minimum income of around €28,000 a year. EU citizens need no visa at all.',
      },
    ],
  },
  {
    id: 'chapada',
    title: 'Chapada Diamantina',
    items: [
      {
        question: 'What\'s the difference between Lençóis and Vale do Capão?',
        answer:
          'Lençóis is the most practical base, with fibre, ATMs and pharmacies — ideal if you depend on online meetings. Vale do Capão is the alternative hub, with no mobile signal but Wi-Fi at guesthouses and a pace of life built for truly switching off.',
        linkLabel: 'Living in Lençóis',
        link: { route: 'guideChapada' },
      },
      {
        question: 'Is there internet in Chapada Diamantina for remote work?',
        answer:
          'In Lençóis, yes — fibre at selected pousadas and two active coworking spaces. In Vale do Capão the connection is deliberately patchy: there\'s Wi-Fi at pousadas and restaurants, but no mobile carrier has signal in the village.',
        linkLabel: 'Living in Lençóis',
        link: { route: 'guideChapada' },
      },
      {
        question: 'How long do you need to explore Chapada Diamantina slowly?',
        answer:
          'At least 7 to 10 days lets you alternate between Lençóis and Vale do Capão without rushing. For remote workers who want to experience local life for real, 30 days is the sweet spot — enough time to leave tourist mode behind.',
        linkLabel: 'Chapada Diamantina: trails, pools and Lençóis',
        link: { route: 'articleChapada' },
      },
    ],
  },
  {
    id: 'comparativo',
    title: 'Comparing Destinations',
    items: [
      {
        question: 'Sardinia or Chapada Diamantina: which is better for remote work?',
        answer:
          'Choose Sardinia if you prioritise stable internet, beaches and structured morning work blocks. Choose the Chapada if you want real disconnection, hiking and a cheaper alternative community — accepting that outside Lençóis the internet needs a backup plan.',
      },
      {
        question: 'Can you live as a digital nomad between Brazil and Europe in the same year?',
        answer:
          'Yes, and it\'s a common strategy among true slow travellers: the Chapada\'s dry season (May to September) overlaps with the European spring and early summer, which makes it easy to fit both destinations into the same calendar.',
      },
    ],
  },
  {
    id: 'nomadismo',
    title: 'Digital Nomad Life in General',
    items: [
      {
        question: 'How do you start as a digital nomad from scratch?',
        answer:
          'Start with the foundation, not the destination: secure a 100% remote income, test your work routine living away from home for a few weeks before committing to months, and build a checklist of documents (visa, insurance, backup connection) before you leave.',
        linkLabel: 'Work from anywhere: a nomad\'s real routine',
        link: { route: 'articleNomadismo' },
      },
      {
        question: 'How much does the digital nomad lifestyle cost on average?',
        answer:
          'It varies enormously by destination: from under €400 a month in Chapada Diamantina to over €2,000 a month in trendy hubs like Lisbon or Barcelona. Planning your budget per destination, not a generic average, is what really matters when deciding.',
        linkLabel: 'The Complete Digital Nomad Guide',
        link: { route: 'home', hash: 'guias' },
      },
      {
        question: 'What are the best destinations for digital nomads in 2026?',
        answer:
          'The usual lists (Lisbon, Bali, Chiang Mai) show clear signs of saturation — inflated rents, overcrowding, even pushback from locals. Destinations with growing infrastructure but without that saturation, like southern Sardinia, tend to offer a better experience in 2026.',
      },
    ],
  },
  {
    id: 'territorios-novos',
    title: 'New Territories',
    items: [
      {
        question: 'Is Dublin a good city for digital nomads?',
        answer:
          'Dublin hosts the European headquarters of Google, Meta, LinkedIn and Salesforce — hence the nickname "Silicon Docks" — but the dominant work model in 2026 is hybrid, not fully remote. The real advantage is living outside the centre, in seaside villages like Howth, 25–40 minutes away by train.',
        linkLabel: 'Ireland off the beaten path',
        link: { route: 'articleIreland' },
      },
      {
        question: 'Is Thailand a good destination for remote work?',
        answer:
          'Yes — it\'s one of the most popular countries for digital nomads in the world, with a low cost of living and an established international community. The difference is getting off the beaten track (Phuket, Koh Phi Phi) and exploring the less-visited islands in the south.',
      },
    ],
  },
  {
    id: 'institucional',
    title: 'About Sasso Nomad',
    items: [
      {
        question: 'What is Sasso Nomad?',
        answer:
          'A content brand about slow travel and digital nomad life, created by someone who lives between Sardinia and Brazil. Instead of generic blog tips, the focus is on real routines, real budgets and the places that truly deserve more time — not just a quick visit.',
        linkLabel: 'About Sasso Nomad',
        link: { route: 'home', hash: 'sobre' },
      },
      {
        question: 'How does the Sasso Nomad community work?',
        answer:
          'It\'s a space for exclusive content, early news and real exchange with other travellers and digital nomads — no influencer fluff, just people who decided to truly live slow travel.',
        linkLabel: 'Sasso Nomad Community',
        link: { route: 'home', hash: 'comunidade' },
      },
    ],
  },
];

export default FAQ_CATEGORIES;
