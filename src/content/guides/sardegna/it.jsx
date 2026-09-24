import Callout from '../../../components/Callout/Callout';
import CostTable from '../../../components/CostTable/CostTable';
import FaqList from '../../../components/FaqList/FaqList';
import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'SARDEGNA',
  title: 'Quanto costa vivere in Sardegna',
  dek: 'Numeri reali da Cagliari, Costa Rei e dall\'entroterra nel 2026.',
  alt: 'Torre spagnola sulla costa del sud Sardegna',
  pageEyebrow: 'SARDEGNA · GUIDE PRATICHE',
  pageTitle: 'Quanto Costa Vivere in Sardegna nel 2026',
  pageDek: 'Numeri reali di chi ci è stato — niente forbici di prezzo generiche e ottimiste da blog.',
  productName: 'Vivere nel Sud della Sardegna',
  seoTitle: 'Quanto Costa Vivere in Sardegna nel 2026: la Tabella Completa | Sasso Nomad',
  seoDescription: 'Costo della vita reale nel sud Sardegna nel 2026: da 1.240 a 2.160 € al mese. Affitto, spesa, trasporti e coworking a Cagliari, Costa Rei e nell\'entroterra.',
};

export const faqItems = [
  {
    question: 'Si può vivere in Sardegna con meno di 1.000 € al mese?',
    answer:
      'È stretto, ma possibile fuori stagione — un alloggio nell\'entroterra e cucinare a casa permettono di avvicinarsi a quella cifra.',
  },
  {
    question: 'Qual è il quartiere più economico di Cagliari?',
    answer:
      'Villanova e Marina hanno prezzi simili, di solito più bassi del Poetto — che si fa pagare la vicinanza al mare.',
  },
  {
    question: 'Luglio e agosto valgono il prezzo più alto?',
    answer:
      'Dipende da cosa cerchi. L\'atmosfera è più festosa, ma i prezzi salgono del 40–80%. Maggio, giugno e settembre offrono un mare altrettanto bello con meno gente.',
  },
  {
    question: 'Serve la macchina per vivere in Sardegna?',
    answer:
      'A Cagliari no. Fuori dal capoluogo (Costa Rei, entroterra), un\'auto o uno scooter diventano una necessità, non un lusso.',
  },
];

function Body({ offer }) {
  return (
    <>
      <p>
        La maggior parte dei blog per nomadi digitali ti dà una forbice di prezzo generica,
        abbastanza ottimista da sembrare economica e abbastanza vaga da non essere mai sbagliata.
        Qui no. Questi sono i numeri che usiamo nelle nostre guide — verificati, non stimati.
      </p>

      <Callout>
        <strong>In breve:</strong> vivere nel sud Sardegna costa tra{' '}
        <strong>1.240 e 2.160 € al mese</strong>, a seconda del profilo e del periodo
        dell&apos;anno. Luglio e agosto fanno salire gli affitti del 40–80%. Maggio, giugno e
        settembre sono i mesi con il miglior rapporto qualità-prezzo.
      </Callout>

      <h2>La Tabella Completa</h2>
      <CostTable
        columns={['Categoria', 'Economico', 'Comodo', 'Note']}
        rows={[
          ['Alloggio', '600 €', '900 €', 'Villanova o Poetto, Airbnb per lunghi soggiorni'],
          ['Spesa', '350 €', '550 €', 'Il Mercato di San Benedetto fa risparmiare ~40%'],
          ['Trasporti', '80 €', '150 €', 'Lo scooter (200 €/mese) conviene più dell\'auto in città'],
          ['Coworking', '0 €', '180 €', '0 € = bar con fibra · 180 € = coworking dedicato'],
          ['SIM dati', '30 €', '30 €', 'TIM 50GB basta per un lavoro normale'],
          ['Uscite', '80 €', '200 €', 'Spiagge gratuite · gita in barca ~30 €/persona'],
          ['Imprevisti', '100 €', '150 €', 'Farmacia, manutenzione, dimenticanze'],
        ]}
        totalRow={['Totale', '~1.240 €', '~2.160 €', '']}
      />

      <h2>Dove Vivi Cambia Tutto nel Budget</h2>
      <p>
        <strong>Cagliari</strong> (Villanova, Marina, Poetto) — la base più pratica. Bilocale per
        soggiorni di 30+ giorni: 600–1.100 €/mese, a seconda del quartiere.
      </p>
      <p>
        <strong>Costa Rei</strong> — a 45 minuti da Cagliari. Le case vacanza costano 900–1.500
        €/mese a maggio, giugno e settembre — gli stessi immobili salgono del 60% a luglio e
        agosto.
      </p>
      <p>
        <strong>Entroterra</strong> (Barumini, Dolianova, Sanluri) — prezzi più bassi del 40–60%
        rispetto alla costa. Agriturismi con colazione e Wi-Fi che funziona a 45–70 € a notte.
      </p>

      <h2>Quello Che i Blog Generici Non Ti Dicono</h2>
      <p>
        Al Mercato di San Benedetto, a Cagliari, la spesa della settimana si fa con 25–40 €. Chi
        cucina spesso a casa dimezza quasi il budget per il cibo. Fuori da Cagliari, una SIM dati
        4G (~30 €/mese) non è un optional — è l&apos;assicurazione per il giorno in cui il Wi-Fi di
        Costa Rei decide di non funzionare.
      </p>

      <h2>Domande Frequenti</h2>
      <FaqList items={faqItems} />

      <GuideCta
        title="Il prossimo passo"
        buttonLabel="Scopri la guida Vivere nel Sud della Sardegna"
        offer={offer}
        format="accesso immediato via Hotmart"
      >
        La guida completa <strong>Vivere nel Sud della Sardegna</strong> spiega dove vivere in base
        al tuo profilo, come funziona il lavoro da remoto con una fibra affidabile e
        l&apos;itinerario esatto del tuo primo mese sull&apos;isola.
      </GuideCta>
    </>
  );
}

export default Body;
