import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { confirmSubscription, createAccount } from '../../utils/MainApi';
import AuthModalContext from '../../contexts/AuthModalContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import Seo from '../../seo/Seo';
import { useLang } from '../../i18n/LanguageContext';
import '../../styles/Modal.css';
import '../../styles/AccountPage.css';

/**
 * /bem-vindo?token=... — destino do botão "Confirmar meu e-mail" do
 * e-mail de boas-vindas. Confirma o e-mail e, se a pessoa ainda não tem
 * conta, oferece criar a senha ali mesmo (e já entra logada).
 */
function WelcomePage({ onAuthenticated }) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const navigate = useNavigate();
  const { openLogin, openCommunity } = useContext(AuthModalContext);
  const currentUser = useContext(CurrentUserContext);
  const {
    t, tx, path, errorText,
  } = useLang();
  const seo = <Seo title={t('seo.accountTitle')} routeKey="welcome" noindex />;

  const [status, setStatus] = useState('loading'); // loading | confirmed | invalid
  const [subscriber, setSubscriber] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const requested = useRef(false);

  useEffect(() => {
    // StrictMode roda o efeito duas vezes em dev; confirma uma vez só.
    if (requested.current) return;
    requested.current = true;

    if (!/^[a-f0-9]{64}$/.test(token)) {
      setStatus('invalid');
      return;
    }

    confirmSubscription(token)
      .then((data) => {
        setSubscriber(data);
        setStatus('confirmed');
      })
      .catch(() => setStatus('invalid'));
  }, [token]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isSubmitting) return;

    if (password.length < 8) {
      setFormError(t('common.passwordTooShort'));
      return;
    }
    if (password !== passwordRepeat) {
      setFormError(t('common.passwordMismatch'));
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    createAccount({ token, password })
      .then(() => onAuthenticated())
      .then(() => navigate(path('myArea'), { replace: true }))
      .catch((err) => {
        setFormError(errorText(err));
        setIsSubmitting(false);
      });
  }

  if (status === 'loading') {
    return (
      <main className="sn-account">
        {seo}
        <Preloader inline />
      </main>
    );
  }

  if (status === 'invalid') {
    return (
      <main className="sn-account">
        {seo}
        <div className="sn-account__card">
          <p className="sn-account__eyebrow">{t('common.linkExpired')}</p>
          <h1 className="sn-account__title">{t('common.linkInvalidTitle')}</h1>
          <p className="sn-account__text">{t('welcome.expiredText')}</p>
          <div className="sn-account__actions">
            <button className="sn-account__button" type="button" onClick={() => openCommunity('link-expirado')}>
              {t('welcome.newLink')}
            </button>
            <button className="sn-account__button sn-account__button--ghost" type="button" onClick={openLogin}>
              {t('welcome.haveAccount')}
            </button>
          </div>
        </div>
      </main>
    );
  }

  const firstName = subscriber.name.split(' ')[0];

  if (subscriber.hasAccount || currentUser) {
    return (
      <main className="sn-account">
        {seo}
        <div className="sn-account__card">
          <p className="sn-account__eyebrow">{t('welcome.confirmed')}</p>
          <h1 className="sn-account__title">
            {tx('welcome.allSet', { name: <span className="sn-user-name">{firstName}</span> })}
          </h1>
          <p className="sn-account__text">{t('welcome.allSetText')}</p>
          <div className="sn-account__actions">
            {currentUser ? (
              <Link className="sn-account__button" to={path('myArea')}>{t('welcome.goToMyArea')}</Link>
            ) : (
              <button className="sn-account__button" type="button" onClick={openLogin}>{t('nav.login')}</button>
            )}
            <Link className="sn-account__button sn-account__button--ghost" to={path('guides')}>{t('welcome.seeGuides')}</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="sn-account">
      {seo}
      <div className="sn-account__card">
        <p className="sn-account__eyebrow">{t('welcome.confirmed')}</p>
        <h1 className="sn-account__title">
          {tx('welcome.youreIn', { name: <span className="sn-user-name">{firstName}</span> })}
        </h1>
        <p className="sn-account__text">
          {t('welcome.createTextBefore')}
          {' '}
          <strong>{subscriber.email}</strong>
          {' '}
          {t('welcome.createTextAfter')}
        </p>

        <form className="sn-modal__form" onSubmit={handleSubmit} noValidate>
          <label className="sn-modal__field">
            {t('common.password')}
            <input
              type="password"
              name="password"
              placeholder={t('common.passwordMin')}
              autoComplete="new-password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              minLength={8}
              required
            />
          </label>
          <label className="sn-modal__field">
            {t('common.passwordRepeat')}
            <input
              type="password"
              name="passwordRepeat"
              placeholder={t('common.passwordRepeatPlaceholder')}
              autoComplete="new-password"
              value={passwordRepeat}
              onChange={(evt) => setPasswordRepeat(evt.target.value)}
              minLength={8}
              required
            />
          </label>

          {formError && <p className="sn-modal__error">{formError}</p>}

          <button className="sn-modal__submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('welcome.creating') : t('welcome.create')}
          </button>
        </form>

        <p className="sn-account__text">
          {t('welcome.onlyEmails')}
          {' '}
          <Link to={path('home')} style={{ color: 'var(--color-accent-dark)' }}>{t('welcome.closePage')}</Link>
          {t('welcome.alreadyConfirmed')}
        </p>
      </div>
    </main>
  );
}

export default WelcomePage;
