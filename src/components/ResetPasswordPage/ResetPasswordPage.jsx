import { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../utils/MainApi';
import AuthModalContext from '../../contexts/AuthModalContext';
import Seo from '../../seo/Seo';
import { useLang } from '../../i18n/LanguageContext';
import '../../styles/Modal.css';
import '../../styles/AccountPage.css';

/**
 * /redefinir-senha?token=... — destino do e-mail "Esqueci minha senha".
 */
function ResetPasswordPage({ onAuthenticated }) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const navigate = useNavigate();
  const { openLogin } = useContext(AuthModalContext);
  const { t, path, errorText } = useLang();
  const seo = <Seo title={t('seo.accountTitle')} routeKey="resetPassword" noindex />;

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpired, setIsExpired] = useState(!/^[a-f0-9]{64}$/.test(token));

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

    resetPassword({ token, password })
      .then(() => onAuthenticated())
      .then(() => navigate(path('myArea'), { replace: true }))
      .catch((err) => {
        if (err.code === 'invalidLink' || err.message.includes('expirou')) {
          setIsExpired(true);
        } else {
          setFormError(errorText(err));
        }
        setIsSubmitting(false);
      });
  }

  if (isExpired) {
    return (
      <main className="sn-account">
        {seo}
        <div className="sn-account__card">
          <p className="sn-account__eyebrow">{t('common.linkExpired')}</p>
          <h1 className="sn-account__title">{t('common.linkInvalidTitle')}</h1>
          <p className="sn-account__text">{t('reset.expiredText')}</p>
          <div className="sn-account__actions">
            <button className="sn-account__button" type="button" onClick={openLogin}>
              {t('nav.login')}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="sn-account">
      {seo}
      <div className="sn-account__card">
        <p className="sn-account__eyebrow">{t('reset.eyebrow')}</p>
        <h1 className="sn-account__title">{t('reset.title')}</h1>

        <form className="sn-modal__form" onSubmit={handleSubmit} noValidate>
          <label className="sn-modal__field">
            {t('reset.newPassword')}
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
            {t('reset.repeatNew')}
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
            {isSubmitting ? t('reset.saving') : t('reset.save')}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
