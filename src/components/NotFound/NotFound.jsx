import { Link } from 'react-router-dom';
import Seo from '../../seo/Seo';
import { useLang } from '../../i18n/LanguageContext';
import './NotFound.css';

function NotFound() {
  const { t, path } = useLang();

  return (
    <section className="sn-not-found">
      <Seo title={t('seo.notFoundTitle')} noindex />
      <h1 className="sn-not-found__title">404</h1>
      <p className="sn-not-found__text">{t('notFound.text')}</p>
      <Link className="sn-not-found__link" to={path('home')}>{t('notFound.back')}</Link>
    </section>
  );
}

export default NotFound;
