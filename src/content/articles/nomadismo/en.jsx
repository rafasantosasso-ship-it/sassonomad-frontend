import { Link } from 'react-router-dom';
import { useLang } from '../../../i18n/LanguageContext';

export const meta = {
  tag: 'Digital nomad life',
  cardTitle: 'Work from anywhere: a nomad\'s real routine',
  excerpt: 'Tools, time zones and how to stay productive while travelling slowly.',
  title: 'Work From Anywhere: The Real Routine of a Digital Nomad',
  dek: 'Tools, time zones and how to stay productive while travelling slowly.',
  seoTitle: 'Work From Anywhere: The Real Routine of a Digital Nomad | Sasso Nomad',
  seoDescription: 'No laptop-on-the-beach photos. The real routine of remote workers who travel slowly: tools, time zones and what nobody shows on the feed.',
};

function Body() {
  const { path } = useLang();

  return (
    <>
      <p>
        There&apos;s a mural in Milan of a figure stretching the whole city like elastic —
        buildings, streets, a plane, all pulled by a single hand, distorted but still standing.
        It&apos;s an exaggerated, almost absurd image. And yet it&apos;s the most honest metaphor
        there is for working remotely while travelling slowly: you&apos;re stretching your routine
        to fit a new place without letting it snap.
      </p>
      <p>
        The internet sold the idea that digital nomad life means a laptop open on a beach chair,
        coconut in hand, no schedule at all. The reality is far less photogenic — and far more
        interesting.
      </p>
      <p>
        It&apos;s also far less niche than it looks: more than 43 million people live this way
        worldwide, a number expected to pass 80 million by the end of the decade. The question is
        no longer &ldquo;does it really work?&rdquo; — it already does, at scale. The question is
        how to make it work without becoming another person who tries for six months and gives
        up.
      </p>

      <h2>The Myth of Work Without Structure</h2>
      <p>
        Anyone who starts working remotely while travelling quickly learns that freedom of place
        isn&apos;t freedom from routine. Quite the opposite: the more the scenery changes, the more
        solid your internal structure has to be. Without fixed office hours to anchor you,
        it&apos;s easy to either work too much (because &ldquo;it&apos;s so beautiful out there I
        have to enjoy it, so I&apos;ll work late to make up for it&rdquo;) or too little (because
        the beach, the café, the trail always beat the day&apos;s deliverables).
      </p>
      <p>
        The real routine of people who keep this up for months, not weeks, is built on fixed work
        blocks — usually in the morning, before the heat or the day gets busy — and clear limits
        on when the laptop actually closes.
      </p>

      <h2>Time Zones Are the Real Main Character</h2>
      <p>
        Nobody talks about this enough: the variable that most decides whether digital nomad life
        works is your client&apos;s or team&apos;s time zone, not how beautiful the destination is.
        A perfect place with an incompatible time zone becomes a prison of notifications arriving
        in the middle of the night. A simpler place aligned with the people you work for becomes
        real freedom.
      </p>
      <p>
        Before choosing your next place, the right question isn&apos;t &ldquo;is it
        beautiful?&rdquo; — it&apos;s &ldquo;what time is it there when it&apos;s 9 a.m. for my
        client?&rdquo;.
      </p>

      <h2>Tools Don&apos;t Replace Discipline</h2>
      <p>
        Notion, Loom, a good calendar with focus blocks marked — all of it helps. But no tool
        solves what only discipline solves: deciding, every single day, that work happens before
        the beach, not after. People who truly work remotely — not just post about it — know the
        real achievement isn&apos;t where you are. It&apos;s being able to deliver what you
        promised from anywhere.
      </p>
      <p>
        That balance — not the scenery — is what separates a digital nomad who lasts six months
        from one who lasts six years.
      </p>

      <div className="sn-guide-cta sn-guide-cta--alt">
        <h3 className="sn-guide-cta__title">What This Article Didn&apos;t Tell You</h3>
        <p className="sn-guide-cta__text">
          Which tool replaces which spreadsheet. How to plan your working hours when your clients
          are spread across three time zones at once. The exact checklist of documents, insurance
          and backup connection before you leave. That kind of practical detail doesn&apos;t fit
          in a reflection — it belongs in a manual.
        </p>
        <p className="sn-guide-cta__text">
          <strong style={{ color: 'var(--color-text-light)' }}>The Complete Digital Nomad Guide
          </strong> is that manual: what really changes in remote work, how to make your
          profession portable and a four-phase plan to test this life before turning yours upside
          down.
        </p>
        <Link className="sn-guide-cta__button" to={path('guideNomadismo')}>
          See The Complete Digital Nomad Guide
        </Link>
      </div>
    </>
  );
}

export default Body;
