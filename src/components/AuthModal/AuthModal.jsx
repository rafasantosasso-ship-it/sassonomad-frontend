import { useEffect, useState } from 'react';
import { register, authorize } from '../../utils/MainApi';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import '../../styles/Modal.css';

/**
 * Modal único para cadastro e login (Fase 3 — Autorização com React).
 * `mode` controla qual formulário é exibido; `onSwitchMode` troca entre
 * eles (inclusive depois de um cadastro bem-sucedido, oferecendo login).
 */
function AuthModal({
  mode, onClose, onSwitchMode, onLoginSuccess,
}) {
  const {
    values, errors, isValid, handleChange, resetForm,
  } = useFormAndValidation();
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

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    if (!isValid || status === 'submitting') return;

    setStatus('submitting');
    setServerError('');

    register({ email: values.email, password: values.password, name: values.name })
      .then(() => setStatus('success'))
      .catch((err) => {
        setServerError(err.message);
        setStatus('error');
      });
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    if (!isValid || status === 'submitting') return;

    setStatus('submitting');
    setServerError('');

    authorize({ email: values.email, password: values.password })
      .then((token) => onLoginSuccess(token))
      .catch((err) => {
        setServerError(err.message);
        setStatus('error');
      });
  }

  function handleGoToLogin() {
    onSwitchMode('login');
  }

  const isSubmitting = status === 'submitting';

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick}>
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        {mode === 'register' && status === 'success' ? (
          <div className="sn-modal__success">
            <h2 className="sn-modal__title">Cadastro concluído!</h2>
            <p className="sn-modal__success-text">
              Sua conta foi criada. Agora é só entrar com seu e-mail e senha.
            </p>
            <button className="sn-modal__submit" type="button" onClick={handleGoToLogin}>
              Fazer login
            </button>
          </div>
        ) : (
          <>
            <h2 className="sn-modal__title">
              {mode === 'register' ? 'Inscreva-se' : 'Entrar'}
            </h2>

            <form
              className="sn-modal__form"
              noValidate
              onSubmit={mode === 'register' ? handleRegisterSubmit : handleLoginSubmit}
            >
              {mode === 'register' && (
                <label className="sn-modal__field">
                  Nome
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
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
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  value={values.email || ''}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="sn-modal__error">{errors.email}</span>}
              </label>

              <label className="sn-modal__field">
                Senha
                <input
                  type="password"
                  name="password"
                  placeholder="Sua senha"
                  value={values.password || ''}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
                {errors.password && <span className="sn-modal__error">{errors.password}</span>}
              </label>

              {status === 'error' && <p className="sn-modal__error">{serverError}</p>}

              <button className="sn-modal__submit" type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? 'Enviando...' : (mode === 'register' ? 'Inscreva-se' : 'Entrar')}
              </button>
            </form>

            <p className="sn-modal__switch">
              {mode === 'register' ? (
                <>Já tem conta? <button type="button" onClick={() => onSwitchMode('login')}>Entrar</button></>
              ) : (
                <>Ainda não tem conta? <button type="button" onClick={() => onSwitchMode('register')}>Inscreva-se</button></>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
