import { useEffect, useState } from 'react';
import { register, authorize, requestPasswordReset } from '../../utils/MainApi';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useLang } from '../../i18n/LanguageContext';
import '../../styles/Modal.css';

/**
 * Modal único para cadastro, login e "esqueci minha senha".
 * `mode` controla qual formulário é exibido; `onSwitchMode` troca entre
 * eles (inclusive depois de um cadastro bem-sucedido, oferecendo login).
 */
function AuthModal({
  mode, onClose, onSwitchMode, onLoginSuccess,
}) {
  const {
    values, errors, isValid, handleChange, resetForm,
  } = useFormAndValidation();
  const { t, lang, errorText } = useLang();
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    resetForm();
    setStatus('idle');
    setServerError('');
  }, [mode, resetForm]);

  useEffect(() => {
    function handleKeyDown(evt) {
      if (evt.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleOverlayClick() {
    onClose();
  }

  function handleContentClick(evt) {
    evt.stopPropagation();
  }

  function handleError(err) {
    setServerError(errorText(err));
    setStatus('error');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isValid || status === 'submitting') return;

    setStatus('submitting');
    setServerError('');

    if (mode === 'register') {
      register({ email: values.email, password: values.password, name: values.name })
        .then(() => setStatus('success'))
        .catch(handleError);
    } else if (mode === 'forgot') {
      requestPasswordReset(values.email, lang)
        .then(() => setStatus('success'))
        .catch(handleError);
    } else {
      authorize({ email: values.email, password: values.password })
        .then((token) => onLoginSuccess(token))
        .catch(handleError);
    }
  }

  const isSubmitting = status === 'submitting';

  function renderSuccess() {
    if (mode === 'forgot') {
      return (
        <div className="sn-modal__success">
          <h2 className="sn-modal__title">{t('auth.forgotSuccessTitle')}</h2>
          <p className="sn-modal__success-text">{t('auth.forgotSuccessText')}</p>
          <button className="sn-modal__submit" type="button" onClick={() => onSwitchMode('login')}>
            {t('auth.backToLogin')}
          </button>
        </div>
      );
    }

    return (
      <div className="sn-modal__success">
        <h2 className="sn-modal__title">{t('auth.registerSuccessTitle')}</h2>
        <p className="sn-modal__success-text">{t('auth.registerSuccessText')}</p>
        <button className="sn-modal__submit" type="button" onClick={() => onSwitchMode('login')}>
          {t('auth.doLogin')}
        </button>
      </div>
    );
  }

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick} role="dialog" aria-modal="true">
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label={t('common.close')}>
          ✕
        </button>

        {status === 'success' && mode !== 'login' ? renderSuccess() : (
          <>
            <h2 className="sn-modal__title">{t(`auth.${mode}Title`)}</h2>

            {mode === 'forgot' && (
              <p className="sn-modal__intro">{t('auth.forgotIntro')}</p>
            )}

            <form className="sn-modal__form" noValidate onSubmit={handleSubmit}>
              {mode === 'register' && (
                <label className="sn-modal__field">
                  {t('common.name')}
                  <input
                    type="text"
                    name="name"
                    placeholder={t('common.namePlaceholder')}
                    autoComplete="given-name"
                    value={values.name || ''}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={30}
                    required
                  />
                  {errors.name && <span className="sn-modal__error">{errors.name}</span>}
                </label>
              )}

              <label className="sn-modal__field">
                {t('common.email')}
                <input
                  type="email"
                  name="email"
                  placeholder={t('common.emailPlaceholder')}
                  autoComplete="email"
                  value={values.email || ''}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="sn-modal__error">{errors.email}</span>}
              </label>

              {mode !== 'forgot' && (
                <label className="sn-modal__field">
                  {t('common.password')}
                  <input
                    type="password"
                    name="password"
                    placeholder={t('common.passwordPlaceholder')}
                    autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                    value={values.password || ''}
                    onChange={handleChange}
                    minLength={8}
                    required
                  />
                  {errors.password && <span className="sn-modal__error">{errors.password}</span>}
                </label>
              )}

              {mode === 'login' && (
                <button
                  className="sn-modal__link"
                  type="button"
                  onClick={() => onSwitchMode('forgot')}
                >
                  {t('auth.forgotLink')}
                </button>
              )}

              {status === 'error' && <p className="sn-modal__error">{serverError}</p>}

              <button className="sn-modal__submit" type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? t('common.sending') : t(`auth.${mode}Submit`)}
              </button>
            </form>

            <p className="sn-modal__switch">
              {mode === 'login' ? (
                <>
                  {t('auth.noAccount')}
                  {' '}
                  <button type="button" onClick={() => onSwitchMode('register')}>{t('auth.registerTitle')}</button>
                </>
              ) : (
                <>
                  {t('auth.hasAccount')}
                  {' '}
                  <button type="button" onClick={() => onSwitchMode('login')}>{t('auth.loginTitle')}</button>
                </>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
