import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import '../../styles/AccountPage.css';

const CARDS = [
  {
    to: '/guias-salvos',
    title: 'Guias salvos',
    text: 'Os guias e artigos que você marcou para ler depois.',
  },
  {
    to: '/guias',
    title: 'Guias',
    text: 'Sardegna, Lençóis e nomadismo digital, com números reais.',
  },
  {
    to: '/fusos',
    title: 'Fusos horários',
    text: 'Que horas são agora em cada destino, pra marcar call sem erro.',
  },
  {
    to: '/perguntas-frequentes',
    title: 'Perguntas frequentes',
    text: 'Visto, custo de vida, internet: as dúvidas que mais chegam.',
  },
];

/**
 * /minha-area — primeira página depois de criar a conta. Rota protegida.
 */
function MyAreaPage() {
  const currentUser = useContext(CurrentUserContext);
  const firstName = currentUser.name.split(' ')[0];

  return (
    <main className="sn-my-area">
      <header>
        <p className="sn-account__eyebrow">Minha área</p>
        <h1 className="sn-my-area__hello">
          Olá, <span className="sn-user-name">{firstName}</span>.
        </h1>
        <p className="sn-account__text">
          Você está na lista da Sasso Nomad. Novos guias, histórias e a abertura da comunidade
          chegam primeiro no seu e-mail ({currentUser.email}).
        </p>
      </header>

      <nav className="sn-my-area__grid" aria-label="Atalhos da minha área">
        {CARDS.map((card) => (
          <Link key={card.to} className="sn-my-area__card" to={card.to}>
            <span className="sn-my-area__card-title">{card.title}</span>
            <span className="sn-my-area__card-text">{card.text}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}

export default MyAreaPage;
