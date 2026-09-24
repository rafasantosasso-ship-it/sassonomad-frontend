import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'LENÇÓIS · BRASILE',
  title: 'Vivere a Lençóis: La Guida Che Nessun Turista Ha',
  dek: 'Quanto costa davvero vivere a Lençóis, nella Chapada Diamantina — scritto da chi ci ha abitato.',
  alt: 'Orchidea selvatica nei campi rupestri della Chapada Diamantina',
  pageEyebrow: 'LENÇÓIS · GUIDA DIGITALE',
  pageDek: 'Quanto costa, davvero, vivere a Lençóis? Non la stima generica da blog — il numero reale, di chi ha già pagato l\'affitto, ha già sbagliato una trattativa per una casa storica e ha scoperto sulla propria pelle cosa costa caro e cosa nessuno ti dice prima.',
  productName: 'Vivere a Lençóis',
  seoTitle: 'Vivere a Lençóis, Chapada Diamantina (Brasile): Costo della Vita e Guida Pratica | Sasso Nomad',
  seoDescription: 'Quanto costa davvero vivere a Lençóis, nella Chapada Diamantina in Brasile: affitto, internet, routine e quello che nessuno ti dice prima — scritto da chi ci ha vissuto.',
};

function Body({ offer }) {
  return (
    <>
      <p>
        Questa guida non parla dei tre giorni di itinerario. Parla di quello che succede dopo —
        quando smetti di visitare e cominci ad abitare. La ricerca di casa che nessuno posta su
        Instagram. Il momento esatto in cui il paese ti accetta come uno dei suoi. Il fiume che
        scopre solo chi resta. Internet che salta proprio nel momento sbagliato, e cosa fare
        quando succede.
      </p>

      <p>
        Scritta da chi ha vissuto ogni capitolo prima di raccontarlo — senza giri di parole,
        senza consigli generici, senza spoiler qui. Le risposte sono dentro.
      </p>

      <GuideCta
        title="Il prossimo passo"
        buttonLabel="Scopri la guida Vivere a Lençóis"
        offer={offer}
        format="Formato: PDF"
      >
        La guida <strong>Vivere a Lençóis</strong> parla proprio di questo — scritta da chi ci ha
        abitato.
      </GuideCta>
    </>
  );
}

export default Body;
