import { useEffect, useState } from 'react';
import { register, authorize, requestPasswordReset } from '../../utils/MainApi';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import '../../styles/Modal.css';

const TITLES = {
  register: 'Inscreva-se',
  login: 'Entrar',
  forgot: 'Esqueci minha senha',
};

const SUBMIT_LABELS = {
  register: 'Inscreva-se',
  login: 'Entrar',
  forgot: 'Enviar link',
};

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
    setServerError(err.message);
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
      requestPasswordReset(values.email)
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
          <h2 className="sn-modal__title">Confira seu e-mail</h2>
          <p className="sn-modal__success-text">
            Se existir uma conta com esse e-mail, você vai receber um link para criar uma nova
            senha. O link vale por 1 hora.
          </p>
          <button className="sn-modal__submit" type="button" onClick={() => onSwitchMode('login')}>
            Voltar para o login
          </button>
        </div>
      );
    }

    return (
      <div className="sn-modal__success">
        <h2 className="sn-modal__title">Cadastro concluído!</h2>
        <p className="sn-modal__success-text">
          Sua conta foi criada. Agora é só entrar com seu e-mail e senha.
        </p>
        <button className="sn-modal__submit" type="button" onClick={() => onSwitchMode('login')}>
          Fazer login
        </button>
      </div>
    );
  }

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick} role="dialog" aria-modal="true">
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        {status === 'success' && mode !== 'login' ? renderSuccess() : (
          <>
            <h2 className="sn-modal__title">{TITLES[mode]}</h2>

            {mode === 'forgot' && (
              <p className="sn-modal__intro">
                Digite o e-mail da sua conta e a gente te manda um link para criar uma nova senha.
              </p>
            )}

            <form className="sn-modal__form" noValidate onSubmit={handleSubmit}>
              {mode === 'register' && (
                <label className="sn-modal__field">
                  Nome
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
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
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                  value={values.email || ''}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="sn-modal__error">{errors.email}</span>}
              </label>

              {mode !== 'forgot' && (
                <label className="sn-modal__field">
                  Senha
                  <input
                    type="password"
                    name="password"
                    placeholder="Sua senha"
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
                  Esqueci minha senha
                </button>
              )}

              {status === 'error' && <p className="sn-modal__error">{serverError}</p>}

              <button className="sn-modal__submit" type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? 'Enviando...' : SUBMIT_LABELS[mode]}
              </button>
            </form>

            <p className="sn-modal__switch">
              {mode === 'login' ? (
                <>Ainda não tem conta? <button type="button" onClick={() => onSwitchMode('register')}>Inscreva-se</button></>
              ) : (
                <>Já tem conta? <button type="button" onClick={() => onSwitchMode('login')}>Entrar</button></>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
