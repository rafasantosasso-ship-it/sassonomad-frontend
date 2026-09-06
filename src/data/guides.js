import chapadaImg from '../images/guides/chapada.jpg';
import sardegnaImg from '../images/guides/sardegna.jpg';
import nomadismoImg from '../images/guides/nomadismo.jpg';

export const GUIDES = [
  {
    slug: 'chapada',
    eyebrow: 'CHAPADA DIAMANTINA',
    title: 'Quanto custa viver na Chapada Diamantina',
    dek: 'Números reais de Lençóis e do Vale do Capão — não estimativa de blog.',
    image: chapadaImg,
    alt: 'Orquídea silvestre nos campos rupestres da Chapada Diamantina',
  },
  {
    slug: 'sardegna',
    eyebrow: 'SARDEGNA',
    title: 'Quanto custa viver na Sardenha',
    dek: 'Números reais de Cagliari, Costa Rei e do entroterra em 2026.',
    image: sardegnaImg,
    alt: 'Torre espanhola sobre a costa do sul da Sardegna',
  },
  {
    slug: 'nomadismo',
    eyebrow: 'NOMADISMO DIGITAL',
    title: 'Sardegna ou Chapada Diamantina?',
    dek: 'Qual destino combina com seu tipo de nômade — comparado com dado, não achismo.',
    image: nomadismoImg,
    alt: 'Piolho-de-cobra enrolado em espiral, close-up macro',
  },
];

export function getGuideBySlug(slug) {
  return GUIDES.find((guide) => guide.slug === slug);
}
