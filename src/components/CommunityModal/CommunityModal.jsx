import { useEffect, useState } from 'react';
import { subscribeToConvertKit } from '../../utils/convertkit';
import './CommunityModal.css';

function CommunityModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

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

    try {
      await subscribeToConvertKit({ name, email });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick}>
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        {status === 'success' ? (
          <div className="sn-modal__success">
            <h2 className="sn-modal__title">Recebido!</h2>
            <p className="sn-modal__success-text">Confira seu e-mail em alguns minutos.</p>
          </div>
        ) : (
          <>
            <h2 className="sn-modal__title">Faça Parte da Comunidade Sasso Nomad</h2>
            <p className="sn-modal__intro">
              Deixa seu e-mail aqui embaixo e ganha de graça um artigo exclusivo sobre nomadismo
              digital. É também como você fica sabendo primeiro quando a newsletter e os espaços
              de troca abrirem.
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
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                  required
                />
              </label>
              <label className="sn-modal__field">
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  required
                />
              </label>
              {status === 'error' && (
                <p className="sn-modal__error">
                  Não foi possível concluir o cadastro agora. Tenta de novo em instantes.
                </p>
              )}
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
