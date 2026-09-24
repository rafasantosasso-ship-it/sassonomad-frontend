import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribe } from '../../utils/MainApi';
import '../../styles/Modal.css';

/**
 * Popup "Participar da Comunidade". Salva o inscrito no back-end próprio,
 * que manda na hora o e-mail de boas-vindas (com o link para confirmar o
 * e-mail e criar a senha). `source` diz de onde o popup foi aberto (menu,
 * home, rodapé, artigo) — aparece nas estatísticas da lista.
 */
function CommunityModal({ onClose, source = 'site' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot: fica vazio
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

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

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      await subscribe({
        name: name.trim(), email: email.trim(), consent, source, website,
      });
      setStatus('success');
    } catch (error) {
      setErrorMessage(
        error.message && !error.message.startsWith('Validation')
          ? error.message
          : 'Confere o nome (só letras) e o e-mail e tenta de novo.',
      );
      setStatus('error');
    }
  }

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick} role="dialog" aria-modal="true">
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        {status === 'success' ? (
          <div className="sn-modal__success">
            <h2 className="sn-modal__title">
              Cadastro feito, <span className="sn-modal__name">{name.trim().split(' ')[0]}</span>!
            </h2>
            <p className="sn-modal__success-text">
              Acabei de te mandar um e-mail de boas-vindas. Clica no botão de confirmar e, na mesma
              página, você cria sua senha para entrar no site.
            </p>
            <p className="sn-modal__success-text sn-modal__success-text--small">
              Não chegou em 2 minutos? Dá uma olhada no spam ou na aba Promoções.
            </p>
            <button className="sn-modal__submit" type="button" onClick={onClose}>
              Voltar ao site
            </button>
          </div>
        ) : (
          <>
            <h2 className="sn-modal__title">Faça Parte da Comunidade Sasso Nomad</h2>
            <p className="sn-modal__intro">
              Deixa seu nome e e-mail aqui embaixo. Você recebe na hora um e-mail de boas-vindas
              com tudo o que já está no site e o acesso para criar sua conta.
            </p>
            <p className="sn-modal__intro">
              E relaxa: a gente não vive mandando e-mail. Só avisa quando tem algo que realmente
              vale a pena.
            </p>
            <form className="sn-modal__form" onSubmit={handleSubmit}>
              <label className="sn-modal__field">
                Nome
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  autoComplete="given-name"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
              <label className="sn-modal__field">
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  required
                />
              </label>

              {/* Honeypot: invisível pra pessoas, robôs preenchem. */}
              <input
                className="sn-modal__hp"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(evt) => setWebsite(evt.target.value)}
              />

              <label className="sn-modal__consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={consent}
                  onChange={(evt) => setConsent(evt.target.checked)}
                  required
                />
                <span>
                  Quero receber os e-mails da Sasso Nomad e li a{' '}
                  <Link to="/privacidade" onClick={onClose}>política de privacidade</Link>.
                  Dá pra cancelar a qualquer momento.
                </span>
              </label>

              {status === 'error' && <p className="sn-modal__error">{errorMessage}</p>}

              <button className="sn-modal__submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Enviando...' : 'Participar da Comunidade'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CommunityModal;
