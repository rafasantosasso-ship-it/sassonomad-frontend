import sardegnaImg from '../images/articles/sardegna.jpg';
import chapadaImg from '../images/articles/chapada-diamantina.jpg';
import nomadismoImg from '../images/articles/nomadismo-digital.jpg';
import thailandImg from '../images/articles/thailand.jpg';
import irelandImg from '../images/articles/ireland.jpg';

export const ARTICLES = [
  {
    slug: 'sardegna',
    tag: 'Itália',
    title: 'Sardegna: vilarejos de pedra e mar turquesa',
    excerpt: 'Um roteiro lento pela costa e pelo interior sardo, longe das rotas turísticas óbvias.',
    image: sardegnaImg,
    path: '/sardegna/vilarejos-de-pedra-e-mar-turquesa',
  },
  {
    slug: 'chapada-diamantina',
    tag: 'Bahia, Brasil',
    title: 'Chapada Diamantina: trilhas, poços e Lençóis',
    excerpt: 'O guia completo para explorar o parque com calma, de vans a hospedagens locais.',
    image: chapadaImg,
    path: '/chapada-diamantina/trilhas-pocos-e-lencois',
  },
  {
    slug: 'nomadismo-digital',
    tag: 'Nomadismo digital',
    title: 'Trabalhar de qualquer lugar: rotina real de um nômade',
    excerpt: 'Ferramentas, fusos horários e como manter produtividade viajando em ritmo lento.',
    image: nomadismoImg,
    path: '/nomadismo-digital/trabalhar-de-qualquer-lugar',
  },
  {
    slug: 'thailand',
    tag: 'Tailândia',
    title: 'Tailândia fora do óbvio: ilhas menos visitadas',
    excerpt: 'Praias tranquilas, comida de rua e como se locomover entre as ilhas do sul.',
    image: thailandImg,
    path: null,
  },
  {
    slug: 'ireland',
    tag: 'Irlanda',
    title: 'Irlanda fora do óbvio: vida de nômade além do centro caótico de Dublin',
    excerpt: 'Silicon Docks, vilarejos costeiros a 25 minutos de trem e como funciona o trabalho remoto por lá.',
    image: irelandImg,
    path: '/irlanda/vida-de-nomade-alem-do-centro-caotico-de-dublin',
  },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((article) => article.slug === slug);
}
