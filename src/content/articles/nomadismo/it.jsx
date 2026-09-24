import { Link } from 'react-router-dom';
import { useLang } from '../../../i18n/LanguageContext';

export const meta = {
  tag: 'Nomadismo digitale',
  cardTitle: 'Lavorare da ovunque: la vera routine di un nomade',
  excerpt: 'Strumenti, fusi orari e come restare produttivi viaggiando a ritmo lento.',
  title: 'Lavorare da Ovunque: La Vera Routine di un Nomade Digitale',
  dek: 'Strumenti, fusi orari e come restare produttivi viaggiando a ritmo lento.',
  seoTitle: 'Lavorare da Ovunque: La Vera Routine di un Nomade Digitale | Sasso Nomad',
  seoDescription: 'Niente foto del portatile in spiaggia. La routine vera di chi lavora da remoto viaggiando lentamente: strumenti, fusi orari e quello che nessuno mostra nel feed.',
};

function Body() {
  const { path } = useLang();

  return (
    <>
      <p>
        C&apos;è un murale a Milano con un personaggio che allunga l&apos;intera città come se
        fosse un elastico — palazzi, strade, un aereo, tutto tirato da una mano sola, deformato ma
        ancora in piedi. È un&apos;immagine esagerata, quasi assurda. Eppure è la metafora più
        onesta che esista per descrivere cosa vuol dire lavorare da remoto viaggiando lentamente:
        stai allungando la tua routine per farla stare in un posto nuovo, senza farla spezzare.
      </p>
      <p>
        Internet ha venduto l&apos;idea che il nomadismo digitale sia un portatile aperto su una
        sdraio, cocco in mano, nessun orario. La realtà è molto meno fotogenica — e molto più
        interessante.
      </p>
      <p>
        Ed è anche molto meno di nicchia di quanto sembri: sono più di 43 milioni le persone che
        vivono così nel mondo, un numero che dovrebbe superare gli 80 milioni entro la fine del
        decennio. La domanda non è più &ldquo;funziona davvero?&rdquo; — funziona già, su larga
        scala. La domanda è come farla funzionare senza diventare la statistica di chi ci prova
        per sei mesi e poi molla.
      </p>

      <h2>Il Mito del Lavoro Senza Struttura</h2>
      <p>
        Chi comincia a lavorare da remoto viaggiando scopre in fretta che la libertà di luogo non
        è libertà di routine. Anzi: più cambia lo scenario, più la struttura interna deve essere
        solida. Senza un orario d&apos;ufficio a fare da ancora, è facile lavorare troppo (perché
        &ldquo;fuori è tutto così bello che devo approfittarne, quindi stasera lavoro fino a tardi
        per recuperare&rdquo;) o troppo poco (perché la spiaggia, il caffè, il sentiero vincono
        sempre sulla consegna del giorno).
      </p>
      <p>
        La routine vera di chi regge questa vita per mesi, non settimane, è fatta di blocchi fissi
        di lavoro — di solito al mattino, prima del caldo o del movimento della giornata — e di
        limiti chiari su quando il portatile si chiude davvero.
      </p>

      <h2>Il Fuso Orario è il Vero Protagonista</h2>
      <p>
        Nessuno ne parla abbastanza: la variabile che decide più di tutte se il nomadismo digitale
        funziona o no è il fuso orario del tuo cliente o del tuo team, non la bellezza della
        destinazione. Un posto perfetto con un fuso incompatibile diventa una prigione di notifiche
        che arrivano all&apos;alba. Un posto più semplice ma allineato con gli orari di chi segui
        diventa libertà vera.
      </p>
      <p>
        Prima di scegliere il prossimo posto, la domanda giusta non è &ldquo;è bello?&rdquo; — è
        &ldquo;che ore sono lì quando per il mio cliente sono le nove del mattino?&rdquo;.
      </p>

      <h2>Gli Strumenti Non Sostituiscono la Disciplina</h2>
      <p>
        Notion, Loom, un buon calendario con i blocchi di concentrazione segnati — tutto aiuta. Ma
        nessuno strumento risolve quello che risolve solo la disciplina: decidere, ogni santo
        giorno, che il lavoro viene prima della spiaggia, non dopo. Chi lavora davvero da remoto —
        e non si limita a postarci sopra — sa che la vera conquista non è dove ti trovi. È
        riuscire, da qualsiasi posto, a consegnare quello che hai promesso.
      </p>
      <p>
        È questo equilibrio — non lo scenario — a fare la differenza tra un nomade digitale che
        dura sei mesi e uno che dura sei anni.
      </p>

      <div className="sn-guide-cta sn-guide-cta--alt">
        <h3 className="sn-guide-cta__title">Quello Che Questo Articolo Non Ti Ha Detto</h3>
        <p className="sn-guide-cta__text">
          Quale strumento sostituisce quale foglio di calcolo. Come organizzare i blocchi di orario
          quando i tuoi clienti stanno su tre fusi diversi contemporaneamente. La checklist esatta
          di documenti, assicurazione e connessione di riserva prima di partire. Dettagli pratici
          così non stanno in una riflessione — stanno in un manuale.
        </p>
        <p className="sn-guide-cta__text">
          La <strong style={{ color: 'var(--color-text-light)' }}>Guida Completa al Nomadismo
          Digitale</strong> è quel manuale: cosa cambia davvero nel lavoro da remoto, come rendere
          portatile la tua professione e un percorso in quattro fasi per mettere alla prova questa
          vita prima di stravolgere la tua.
        </p>
        <Link className="sn-guide-cta__button" to={path('guideNomadismo')}>
          Scopri la Guida Completa al Nomadismo Digitale
        </Link>
      </div>
    </>
  );
}

export default Body;
