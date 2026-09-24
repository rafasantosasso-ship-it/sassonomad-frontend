import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'DIGITAL GUIDE',
  title: 'The Complete Digital Nomad Guide',
  dek: 'How to build a life with more freedom of movement without giving up your career — no magic formula.',
  alt: 'Millipede coiled in a spiral, macro close-up',
  pageEyebrow: 'DIGITAL GUIDE',
  pageDek: 'A guide to what it really means to build a life with more freedom of movement — without giving up your career, without a magic formula, without romanticising what also comes at a cost.',
  productName: 'The Complete Digital Nomad Guide',
  seoTitle: 'The Complete Digital Nomad Guide: How to Actually Get Started | Sasso Nomad',
  seoDescription: 'How to make your profession portable, choose the right place and test digital nomad life in four phases — with real data on Brazil, Italy and Thailand.',
};

function Body({ offer }) {
  return (
    <>
      <p>
        Inside you&apos;ll find: what has really changed in the world of remote work, with real
        data instead of guesswork; how to make your profession portable; what nobody tells you
        about loneliness, discipline and digital borders; how to choose the right place for the
        right moment in your life; the logic behind how Brazil, Italy and Thailand treat remote
        workers; and a four-phase plan to test this life before turning yours upside down.
      </p>

      <p>It&apos;s not about travelling all the time. It&apos;s about being less tied to one place.</p>

      <GuideCta variant="alt" title="Get yours" buttonLabel="Buy now" offer={offer} />
    </>
  );
}

export default Body;
