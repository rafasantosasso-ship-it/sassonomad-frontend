import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { confirmSubscription, createAccount } from '../../utils/MainApi';
import AuthModalContext from '../../contexts/AuthModalContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
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
      setFormError('A senha precisa ter pelo menos 8 caracteres.');
      return;
    }
    if (password !== passwordRepeat) {
      setFormError('As duas senhas não são iguais.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    createAccount({ token, password })
      .then(() => onAuthenticated())
      .then(() => navigate('/minha-area', { replace: true }))
      .catch((err) => {
        setFormError(err.message);
        setIsSubmitting(false);
      });
  }

  if (status === 'loading') {
    return (
      <main className="sn-account">
        <Preloader inline />
      </main>
    );
  }

  if (status === 'invalid') {
    return (
      <main className="sn-account">
        <div className="sn-account__card">
          <p className="sn-account__eyebrow">Link expirado</p>
          <h1 className="sn-account__title">Esse link não vale mais</h1>
          <p className="sn-account__text">
            Os links de confirmação valem por 48 horas e são de uso único. Cadastre-se de novo e
            a gente te manda um link novinho na hora.
          </p>
          <div className="sn-account__actions">
            <button className="sn-account__button" type="button" onClick={() => openCommunity('link-expirado')}>
              Receber um novo link
            </button>
            <button className="sn-account__button sn-account__button--ghost" type="button" onClick={openLogin}>
              Já tenho conta
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
        <div className="sn-account__card">
          <p className="sn-account__eyebrow">E-mail confirmado</p>
          <h1 className="sn-account__title">
            Tudo certo, <span className="sn-user-name">{firstName}</span>.
          </h1>
          <p className="sn-account__text">
            Seu e-mail está confirmado e você já tem uma conta. É só entrar.
          </p>
          <div className="sn-account__actions">
            {currentUser ? (
              <Link className="sn-account__button" to="/minha-area">Ir para minha área</Link>
            ) : (
              <button className="sn-account__button" type="button" onClick={openLogin}>Entrar</button>
            )}
            <Link className="sn-account__button sn-account__button--ghost" to="/guias">Ver os guias</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="sn-account">
      <div className="sn-account__card">
        <p className="sn-account__eyebrow">E-mail confirmado</p>
        <h1 className="sn-account__title">
          Você está dentro, <span className="sn-user-name">{firstName}</span>.
        </h1>
        <p className="sn-account__text">
          Seu e-mail está confirmado. Agora crie uma senha para entrar no site com
          {' '}
          <strong>{subscriber.email}</strong>
          {' '}
          e salvar os guias e artigos que quiser ler depois.
        </p>

        <form className="sn-modal__form" onSubmit={handleSubmit} noValidate>
          <label className="sn-modal__field">
            Senha
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
            Repita a senha
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
            {isSubmitting ? 'Criando...' : 'Criar minha conta'}
          </button>
        </form>

        <p className="sn-account__text">
          Prefere só receber os e-mails?
          {' '}
          <Link to="/" style={{ color: 'var(--color-accent-dark)' }}>Pode fechar esta página</Link>
          : sua inscrição já está confirmada.
        </p>
      </div>
    </main>
  );
}

export default WelcomePage;
