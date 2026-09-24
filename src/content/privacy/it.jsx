import { CONTACT_EMAIL } from '../../utils/constants';

// Informativa sulla privacy in italiano (adattata dal PT).
function Body() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <>
      <h1>Informativa sulla privacy</h1>
      <p className="sn-legal__updated">Ultimo aggiornamento: settembre 2026</p>

      <h2>Chi tratta i tuoi dati</h2>
      <p>
        Sasso Nomad è un progetto di Rafael Sasso, con sede in Italia. Per qualsiasi questione
        sui tuoi dati, scrivi a <a href={mailto}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Cosa conserviamo</h2>
      <ul>
        <li>Nome ed email che inserisci nell&apos;iscrizione alla community;</li>
        <li>
          La data in cui hai accettato di ricevere le email e in cui hai confermato
          l&apos;indirizzo, la lingua e da quale parte del sito è arrivata l&apos;iscrizione;
        </li>
        <li>
          Se crei un account: la tua password, conservata solo in forma cifrata (nemmeno noi
          possiamo leggerla), e le guide e gli articoli che salvi.
        </li>
      </ul>
      <p>Non compriamo, vendiamo né affittiamo liste di email.</p>

      <h2>Per cosa li usiamo</h2>
      <ul>
        <li>Inviare l&apos;email di benvenuto e la newsletter di Sasso Nomad;</li>
        <li>Permetterti di accedere al sito e salvare contenuti;</li>
        <li>Inviare le email del tuo account, come il link per creare una nuova password.</li>
      </ul>
      <p>
        La base giuridica è il tuo consenso (art. 6.1.a del GDPR) per la newsletter e
        l&apos;esecuzione del servizio che hai richiesto (art. 6.1.b) per l&apos;account.
      </p>

      <h2>Chi ci aiuta a far funzionare il sito</h2>
      <p>Usiamo pochi fornitori, solo per far funzionare il sito:</p>
      <ul>
        <li>MongoDB Atlas: il database dove sono salvate le iscrizioni;</li>
        <li>Resend: l&apos;invio delle email;</li>
        <li>Google Cloud: il server dove girano il sito e l&apos;API.</li>
      </ul>
      <p>
        Alcuni di questi servizi possono trattare dati fuori dall&apos;Unione Europea, sempre con
        le garanzie previste dal GDPR (come le clausole contrattuali tipo della Commissione
        Europea).
      </p>

      <h2>Per quanto tempo</h2>
      <p>
        Finché sei iscritto o hai un account. Le iscrizioni mai confermate possono essere
        cancellate dopo alcuni mesi. Se annulli l&apos;iscrizione, smettiamo subito di inviarti
        email.
      </p>

      <h2>Cookie e archiviazione nel browser</h2>
      <p>
        Il sito non usa cookie pubblicitari. Quando accedi al tuo account, salviamo un codice di
        accesso nell&apos;archivio locale del tuo browser per mantenerti collegato. Cliccando su
        &quot;Esci&quot;, viene cancellato. Se scegli una lingua dal selettore nel menu,
        salviamo questa scelta in un cookie tecnico (sn_lang) per 12 mesi, solo per aprire il
        sito nella lingua giusta.
      </p>

      <h2>I tuoi diritti</h2>
      <p>
        Puoi, in qualsiasi momento, chiedere l&apos;accesso, la rettifica, la cancellazione o una
        copia dei tuoi dati, e revocare il consenso. Per smettere di ricevere email, usa il link
        &quot;Annulla iscrizione&quot; in fondo a qualsiasi email. Per tutto il resto, scrivi a
        {' '}
        <a href={mailto}>{CONTACT_EMAIL}</a>
        . Hai anche il diritto di proporre reclamo al Garante per la protezione dei dati
        personali (Italia) o all&apos;ANPD (Brasile).
      </p>
    </>
  );
}

export default Body;
