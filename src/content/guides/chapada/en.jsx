import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'LENÇÓIS · BRAZIL',
  title: 'Living in Lençóis: The Guide No Tourist Has',
  dek: 'What it really costs to live in Lençóis, Chapada Diamantina — written by someone who lived there.',
  alt: 'Wild orchid in the rocky grasslands of Chapada Diamantina',
  pageEyebrow: 'LENÇÓIS · DIGITAL GUIDE',
  pageDek: 'What does it really cost to live in Lençóis? Not the generic blog estimate — the real number, from someone who has paid the rent, got a historic-house negotiation wrong, and learned first-hand what\'s expensive and what nobody warns you about.',
  productName: 'Living in Lençóis',
  seoTitle: 'Living in Lençóis, Chapada Diamantina (Brazil): Cost of Living and Practical Guide | Sasso Nomad',
  seoDescription: 'What it really costs to live in Lençóis, Chapada Diamantina, Brazil: rent, internet, daily routine and what nobody tells you beforehand — written by someone who lived there.',
};

function Body({ offer }) {
  return (
    <>
      <p>
        This guide isn&apos;t about the three-day itinerary. It&apos;s about what happens after —
        when you stop visiting and start living there. The house hunt nobody posts on Instagram.
        The exact moment the town accepts you as one of its own. The river only people who stay
        ever find. The internet that drops at exactly the wrong time, and what to do when it
        does.
      </p>

      <p>
        Written by someone who lived every chapter before writing about it — no fluff, no generic
        tips, no spoilers here. The answers are inside.
      </p>

      <GuideCta
        title="The next step"
        buttonLabel="See the Living in Lençóis guide"
        offer={offer}
        format="Format: PDF"
      >
        The <strong>Living in Lençóis</strong> guide is about exactly that — written by someone who
        lived there.
      </GuideCta>
    </>
  );
}

export default Body;
