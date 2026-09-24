// Domande frequenti in italiano — adattate dal PT. La domanda sul visto è
// pensata per chi parte dall'Italia verso il Brasile.
const FAQ_CATEGORIES = [
  {
    id: 'sardegna',
    title: 'Sardegna',
    items: [
      {
        question: 'Qual è il periodo migliore per andare nel sud Sardegna?',
        answer:
          'Maggio, giugno e settembre offrono il miglior rapporto qualità-prezzo: mare bello, senza il caldo estremo e i prezzi gonfiati di luglio e agosto, quando gli alloggi salgono fino all\'80%. Se cerchi vita sociale e movimento, l\'alta stagione (luglio-agosto) vale il prezzo.',
        linkLabel: 'Quanto Costa Vivere in Sardegna',
        link: { route: 'guideSardegna' },
      },
      {
        question: 'Conviene vivere in Sardegna da nomade digitale?',
        answer:
          'Sì, soprattutto nel sud dell\'isola: Cagliari ha fibra affidabile, due coworking attivi e un costo della vita tra 1.240 e 2.160 € al mese — meno della maggior parte degli hub alla moda in Europa, con il vantaggio in più di non essere ancora saturo di nomadi.',
        linkLabel: 'Sardegna: borghi di pietra e mare turchese',
        link: { route: 'articleSardegna' },
      },
      {
        question: 'Da italiano, serve un visto per lavorare da remoto in Brasile?',
        answer:
          'Per soggiorni turistici fino a 90 giorni no: i cittadini italiani entrano in Brasile senza visto. Per restare più a lungo lavorando per clienti o aziende all\'estero, il Brasile ha un visto per nomadi digitali dal 2022, con requisiti di reddito minimo — verifica sempre le condizioni aggiornate sul sito del consolato prima di partire.',
      },
    ],
  },
  {
    id: 'chapada',
    title: 'Chapada Diamantina',
    items: [
      {
        question: 'Che differenza c\'è tra Lençóis e il Vale do Capão?',
        answer:
          'Lençóis è la base più pratica, con fibra ottica, bancomat e farmacie — ideale se dipendi dalle riunioni online. Il Vale do Capão è il polo alternativo, senza segnale degli operatori mobili, ma con il Wi-Fi delle pousadas e un ritmo di vita fatto per staccare davvero.',
        linkLabel: 'Vivere a Lençóis',
        link: { route: 'guideChapada' },
      },
      {
        question: 'C\'è internet nella Chapada Diamantina per lavorare da remoto?',
        answer:
          'A Lençóis sì — fibra ottica in alcune pousadas e due coworking attivi. Nel Vale do Capão la connessione è volutamente instabile: c\'è Wi-Fi in pousadas e ristoranti, ma nessun operatore mobile ha segnale nel villaggio.',
        linkLabel: 'Vivere a Lençóis',
        link: { route: 'guideChapada' },
      },
      {
        question: 'Quanto tempo serve per conoscere la Chapada Diamantina con calma?',
        answer:
          'Un minimo di 7-10 giorni permette di alternare Lençóis e il Vale do Capão senza correre. Per chi lavora da remoto e vuole provare davvero la vita locale, 30 giorni sono l\'ideale — il tempo giusto per uscire dalla modalità turista.',
        linkLabel: 'Chapada Diamantina: sentieri, pozze e Lençóis',
        link: { route: 'articleChapada' },
      },
    ],
  },
  {
    id: 'comparativo',
    title: 'Confronto / Scegliere la Destinazione',
    items: [
      {
        question: 'Sardegna o Chapada Diamantina: quale scegliere per lavorare da remoto?',
        answer:
          'Scegli la Sardegna se la priorità è una connessione stabile, il mare e un lavoro organizzato in blocchi al mattino. Scegli la Chapada se cerchi disconnessione vera, trekking e una comunità alternativa più economica — accettando che fuori da Lençóis internet richiede un piano B.',
      },
      {
        question: 'Si può vivere da nomade digitale tra Brasile ed Europa nello stesso anno?',
        answer:
          'Sì, ed è una strategia comune tra chi pratica davvero lo slow travel: la stagione secca della Chapada (da maggio a settembre) coincide con la primavera e l\'inizio dell\'estate europea, e questo rende facile incastrare le due destinazioni nello stesso calendario.',
      },
    ],
  },
  {
    id: 'nomadismo',
    title: 'Nomadismo Digitale in Generale',
    items: [
      {
        question: 'Come si comincia a lavorare da nomade digitale partendo da zero?',
        answer:
          'Parti dalla base, non dalla destinazione: assicurati una fonte di reddito 100% da remoto, metti alla prova la tua routine di lavoro vivendo fuori casa per qualche settimana prima di impegnarti per mesi, e prepara una checklist di documenti (visto, assicurazione, connessione di riserva) prima di partire.',
        linkLabel: 'Lavorare da ovunque: la vera routine di un nomade',
        link: { route: 'articleNomadismo' },
      },
      {
        question: 'Quanto costa in media lo stile di vita da nomade digitale?',
        answer:
          'Varia enormemente a seconda della destinazione: da meno di 400 € al mese nella Chapada Diamantina a più di 2.000 € al mese in hub alla moda come Lisbona o Barcellona. Quello che conta davvero è pianificare il budget per destinazione, non una media generica.',
        linkLabel: 'Guida Completa al Nomadismo Digitale',
        link: { route: 'home', hash: 'guias' },
      },
      {
        question: 'Quali sono le migliori destinazioni per nomadi digitali nel 2026?',
        answer:
          'Le classifiche tradizionali (Lisbona, Bali, Chiang Mai) mostrano segni chiari di saturazione — affitti gonfiati, sovraffollamento, perfino reazioni dei residenti. Le destinazioni con infrastrutture in crescita ma senza quella saturazione, come il sud Sardegna, tendono a offrire un\'esperienza migliore nel 2026.',
      },
    ],
  },
  {
    id: 'territorios-novos',
    title: 'Nuovi Territori',
    items: [
      {
        question: 'Dublino è una buona città per i nomadi digitali?',
        answer:
          'Dublino concentra le sedi europee di Google, Meta, LinkedIn e Salesforce — tanto da essere chiamata "Silicon Docks" — ma nel 2026 il modello di lavoro dominante è ibrido, non completamente da remoto. Il vero vantaggio sta nel vivere fuori dal centro, in villaggi sulla costa come Howth, collegati in treno in 25-40 minuti.',
        linkLabel: 'Irlanda fuori dai soliti giri',
        link: { route: 'articleIreland' },
      },
      {
        question: 'La Thailandia è una buona destinazione per lavorare da remoto?',
        answer:
          'Sì — è uno dei paesi più frequentati dai nomadi digitali al mondo, con un costo della vita basso e una comunità internazionale già consolidata. La differenza la fa uscire dal circuito battuto (Phuket, Koh Phi Phi) ed esplorare le isole meno visitate del sud del paese.',
      },
    ],
  },
  {
    id: 'institucional',
    title: 'Sasso Nomad',
    items: [
      {
        question: 'Cos\'è Sasso Nomad?',
        answer:
          'Un progetto di contenuti su slow travel e nomadismo digitale, nato da chi vive diviso tra la Sardegna e il Brasile. Invece dei soliti consigli da blog, il focus è sulla routine vera, sul budget reale e sui luoghi che meritano davvero più tempo — non solo una visita veloce.',
        linkLabel: 'Chi è Sasso Nomad',
        link: { route: 'home', hash: 'sobre' },
      },
      {
        question: 'Come funziona la community Sasso Nomad?',
        answer:
          'È uno spazio con contenuti esclusivi, novità in anteprima e scambio di esperienze vere con altri viaggiatori e nomadi digitali — senza giri di parole da influencer, con persone che hanno deciso di vivere davvero il viaggio lento.',
        linkLabel: 'Community Sasso Nomad',
        link: { route: 'home', hash: 'comunidade' },
      },
    ],
  },
];

export default FAQ_CATEGORIES;
