import { Link } from 'react-router-dom';
import { useLang } from '../../../i18n/LanguageContext';

export const meta = {
  tag: 'Italy',
  cardTitle: 'Sardinia: stone villages and turquoise sea',
  excerpt: 'A slow route along the coast and through the interior, far from the obvious tourist trails.',
  title: 'Sardinia: Stone Villages and Turquoise Sea',
  dek: 'A slow route along the coast and through the interior, far from the obvious tourist trails.',
  seoTitle: 'Slow Travel in Sardinia: Stone Villages and Turquoise Sea in the South | Sasso Nomad',
  seoDescription: 'Far from the obvious routes: pink granite villages, towers guarding the sea and a Sardinia that only reveals itself to those who stay.',
};

function Body() {
  const { path } = useLang();

  return (
    <>
      <p>
        There&apos;s a tower at the southern tip of Sardinia that changes colour with the
        daylight. In the morning it&apos;s just pale stone against the sky. At night someone
        switches on a spotlight and it turns magenta against the deep blue of dusk — watching
        over a bay that has seen whole empires pass through without ever truly conquering it.
      </p>
      <p>
        Because before any invader, before any tourist, there was a people archaeology still
        can&apos;t fully explain. More than three thousand years ago, the Nuragic civilisation
        raised seven thousand stone towers across the island — no mortar, no writing, no record
        of what they called themselves. Only the towers remain, scattered across the interior
        like unanswered questions. Then came the Phoenicians, the Romans, the Spanish — who built
        the coastal watchtowers to spot invaders arriving by sea, the same tower that today
        becomes a meeting point at sunset. Then came luxury tourism, which turned the north of
        the island into a millionaires&apos; playground. Then mass tourism, which packed the most
        photographed beaches every July and August. And now, quietly, the digital nomads are
        arriving — the newest layer of an island that has always known how to take in newcomers
        without ceasing to be itself.
      </p>

      <h2>The Sardinia Nobody Shows You on the First Page of Google</h2>
      <p>
        The island that shows up in &ldquo;most beautiful beaches in the Mediterranean&rdquo;
        lists is real — but it&apos;s only the surface. Behind the turquoise water that has
        become a postcard cliché lies a network of stone villages, forgotten towers and a local
        life that keeps its own rhythm, indifferent to the mass-tourism calendar.
      </p>
      <p>
        And something even more interesting is happening inland: whole communities fighting
        depopulation and deciding the answer might be to welcome outsiders. A village of just
        over a thousand people in the heart of Barbagia made international headlines by selling
        abandoned houses for one euro and launching a symbolic-rent programme for remote
        workers. The result: thousands of applications from every continent — and it&apos;s no
        longer alone. It isn&apos;t charity — it&apos;s smart survival. And it&apos;s proof that,
        for some places in Sardinia, the digital nomad isn&apos;t a threat to local authenticity.
        They&apos;re the ones helping to keep it alive. Which villages exactly, and what it takes
        to join that queue as a foreigner, is another story — but it&apos;s worth knowing it
        exists.
      </p>

      <h2>The Sardinia That Stays After Sunset</h2>
      <p>
        Most visitors treat Sardinia as a photo set: arrive by day, photograph the water, leave
        before the light changes. But it&apos;s after sunset that the island shows another face.
        The Spanish watchtowers are lit up and become quiet meeting points. No crowds. Just the
        sound of the sea, a metal compass rose set into the ground pointing to the four corners
        of the horizon, and the strangely rare feeling of being somewhere beautiful without being
        processed by it.
      </p>
      <p>
        That&apos;s the hour when slow travel stops being theory. Whether you&apos;re in a van
        parked by an empty beach or in a little stone house rented for a month in an inland
        village, the effect is the same. Days stop being measured in sights ticked off a list and
        start being measured in light: the hour the sun rises behind the hills, the hour the heat
        peaks and everyone disappears indoors, the hour the temperature drops and life returns to
        the streets. That kind of moment is what separates visiting Sardinia from living it, even
        if only for a month.
      </p>

      <h2>Villages Tourism Hasn&apos;t Found Yet</h2>
      <p>
        Away from the fashionable coast, inland Sardinia holds entire villages built from pink
        and grey granite — architecture that seems to have grown straight out of the mountain
        rather than been built on it. Narrow lanes, squares just big enough for a single
        conversation, and a daily life that carries on exactly as it did before any travel guide
        mentioned the place.
      </p>
      <p>
        It&apos;s in these villages that Sardinia gives what the fashionable coast can&apos;t: time
        — and welcome. Sardinians have a reputation for being wary of outsiders, but those who
        actually stay find the opposite: a hospitality that needs no performative smile, only
        time to prove itself genuine. The baker learns your name on the second visit, not the
        first. Your neighbour offers you olive oil from their own grove without anyone asking.
        And whoever decides to stay more than a night soon finds out that here, &ldquo;doing
        nothing&rdquo; is a full-time activity.
      </p>

      <h2>Why Staying Changes Everything</h2>
      <p>
        There&apos;s a huge difference between passing through a place and living in it — even
        for just a few weeks. Visitors collect photos. Those who stay learn the right hours to
        avoid the midday sun, find out which bakery still has warm bread at seven in the
        morning, and understand why Sardinians insist on a lunch that lasts twice as long as any
        tourist is used to.
      </p>
      <p>
        Sardinia rewards those who slow down. And the south of the island — less crowded than the
        fashionable north, with villages literally inviting outsiders to stay — is exactly where
        that reward doesn&apos;t have a waiting list yet.
      </p>

      <div className="sn-guide-cta sn-guide-cta--alt">
        <h3 className="sn-guide-cta__title">What This Article Didn&apos;t Tell You</h3>
        <p className="sn-guide-cta__text">
          Which village still has one-euro houses available. Which Cagliari neighbourhood has the
          fastest fibre without tourist prices. Exactly what time the baker pulls the bread out of
          the oven in each town on this route. That kind of detail doesn&apos;t fit in an article —
          it belongs to someone who lived there long enough to know.
        </p>
        <p className="sn-guide-cta__text">
          The <strong style={{ color: 'var(--color-text-light)' }}>Living in Southern Sardinia
          </strong> guide is exactly that: the full map from someone who turned curiosity into a
          life change, with the names, prices and hours this piece only hinted at.
        </p>
        <Link className="sn-guide-cta__button" to={path('guideSardegna')}>
          See the Living in Southern Sardinia guide
        </Link>
      </div>
    </>
  );
}

export default Body;
