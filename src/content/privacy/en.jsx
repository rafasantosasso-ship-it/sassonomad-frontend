import { CONTACT_EMAIL } from '../../utils/constants';

// Privacy policy in English (adapted from PT).
function Body() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <>
      <h1>Privacy policy</h1>
      <p className="sn-legal__updated">Last updated: September 2026</p>

      <h2>Who looks after your data</h2>
      <p>
        Sasso Nomad is a project by Rafael Sasso, based in Italy. For anything about your data,
        write to <a href={mailto}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>What we keep</h2>
      <ul>
        <li>The name and email you give us when joining the community;</li>
        <li>
          The date you agreed to receive our emails and confirmed your address, your language and
          which part of the site the sign-up came from;
        </li>
        <li>
          If you create an account: your password, stored only in encrypted form (not even we can
          read it), and the guides and articles you save.
        </li>
      </ul>
      <p>We never buy, sell or rent email lists.</p>

      <h2>What we use it for</h2>
      <ul>
        <li>Sending the welcome email and the Sasso Nomad newsletter;</li>
        <li>Letting you log in to the site and save content;</li>
        <li>Sending account emails, such as the link to create a new password.</li>
      </ul>
      <p>
        The legal basis is your consent (Art. 6(1)(a) GDPR) for the newsletter and the
        performance of the service you requested (Art. 6(1)(b)) for your account.
      </p>

      <h2>Who helps us run the site</h2>
      <p>We use only a few providers, just to keep the site running:</p>
      <ul>
        <li>MongoDB Atlas: the database where sign-ups are stored;</li>
        <li>Resend: email delivery;</li>
        <li>Google Cloud: the server where the site and the API run.</li>
      </ul>
      <p>
        Some of these services may process data outside the European Union, always with the
        safeguards required by the GDPR (such as the European Commission&apos;s standard
        contractual clauses).
      </p>

      <h2>How long we keep it</h2>
      <p>
        For as long as you&apos;re subscribed or have an account. Sign-ups that never confirmed
        their email may be deleted after a few months. If you unsubscribe, we stop sending emails
        immediately.
      </p>

      <h2>Cookies and browser storage</h2>
      <p>
        The site doesn&apos;t use advertising cookies. When you log in, we store an access code in
        your browser&apos;s local storage to keep you signed in. Clicking &quot;Log out&quot;
        deletes it. If you pick a language in the menu, we store that choice in a technical cookie
        (sn_lang) for 12 months, only to open the site in the right language.
      </p>

      <h2>Your rights</h2>
      <p>
        At any time, you can ask to access, correct, delete or get a copy of your data, and
        withdraw your consent. To stop receiving emails, use the &quot;Unsubscribe&quot; link at
        the bottom of any email. For anything else, write to
        {' '}
        <a href={mailto}>{CONTACT_EMAIL}</a>
        . You also have the right to lodge a complaint with the Italian data protection
        authority (Garante per la protezione dei dati personali) or Brazil&apos;s ANPD.
      </p>
    </>
  );
}

export default Body;
