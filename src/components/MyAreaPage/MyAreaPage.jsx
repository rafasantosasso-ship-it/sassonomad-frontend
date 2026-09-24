import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Seo from '../../seo/Seo';
import { useLang } from '../../i18n/LanguageContext';
import '../../styles/AccountPage.css';

const CARDS = [
  { route: 'saved', key: 'saved' },
  { route: 'guides', key: 'guides' },
  { route: 'timezones', key: 'timezones' },
  { route: 'faq', key: 'faq' },
];

/**
 * Minha área — primeira página depois de criar a conta. Rota protegida.
 */
function MyAreaPage() {
  const currentUser = useContext(CurrentUserContext);
  const { t, tx, path } = useLang();
  const firstName = currentUser.name.split(' ')[0];

  return (
    <main className="sn-my-area">
      <Seo title={t('seo.accountTitle')} routeKey="myArea" noindex />
      <header>
        <p className="sn-account__eyebrow">{t('myArea.eyebrow')}</p>
        <h1 className="sn-my-area__hello">
          {tx('myArea.hello', { name: <span className="sn-user-name">{firstName}</span> })}
        </h1>
        <p className="sn-account__text">{t('myArea.text', { email: currentUser.email })}</p>
      </header>

      <nav className="sn-my-area__grid" aria-label={t('myArea.shortcuts')}>
        {CARDS.map((card) => (
          <Link key={card.route} className="sn-my-area__card" to={path(card.route)}>
            <span className="sn-my-area__card-title">{t(`myArea.${card.key}Title`)}</span>
            <span className="sn-my-area__card-text">{t(`myArea.${card.key}Text`)}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}

export default MyAreaPage;
