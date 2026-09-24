import { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../utils/MainApi';
import AuthModalContext from '../../contexts/AuthModalContext';
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

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpired, setIsExpired] = useState(!/^[a-f0-9]{64}$/.test(token));

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isSubmitting) return;

    if (password.length < 8) {
      setFormError('A senha precisa ter pelo menos 8 caracteres.');
      return;
    }
    if (password !== passwordRepeat) {
      setFormError('As duas senhas não são iguais.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    resetPassword({ token, password })
      .then(() => onAuthenticated())
      .then(() => navigate('/minha-area', { replace: true }))
      .catch((err) => {
        if (err.message.includes('expirou')) {
          setIsExpired(true);
        } else {
          setFormError(err.message);
        }
        setIsSubmitting(false);
      });
  }

  if (isExpired) {
    return (
      <main className="sn-account">
        <div className="sn-account__card">
          <p className="sn-account__eyebrow">Link expirado</p>
          <h1 className="sn-account__title">Esse link não vale mais</h1>
          <p className="sn-account__text">
            O link para criar uma nova senha vale por 1 hora e só funciona uma vez. Peça outro
            pelo botão abaixo: em &quot;Entrar&quot;, clique em &quot;Esqueci minha senha&quot;.
          </p>
          <div className="sn-account__actions">
            <button className="sn-account__button" type="button" onClick={openLogin}>
              Entrar
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="sn-account">
      <div className="sn-account__card">
        <p className="sn-account__eyebrow">Sua conta</p>
        <h1 className="sn-account__title">Crie uma nova senha</h1>

        <form className="sn-modal__form" onSubmit={handleSubmit} noValidate>
          <label className="sn-modal__field">
            Nova senha
            <input
              type="password"
              name="password"
              placeholder="Mínimo de 8 caracteres"
              autoComplete="new-password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              minLength={8}
              required
            />
          </label>
          <label className="sn-modal__field">
            Repita a nova senha
            <input
              type="password"
              name="passwordRepeat"
              placeholder="Mesma senha de novo"
              autoComplete="new-password"
              value={passwordRepeat}
              onChange={(evt) => setPasswordRepeat(evt.target.value)}
              minLength={8}
              required
            />
          </label>

          {formError && <p className="sn-modal__error">{formError}</p>}

          <button className="sn-modal__submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar e entrar'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
