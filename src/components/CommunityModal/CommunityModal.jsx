import { useEffect, useState } from 'react';
import { subscribeToConvertKit } from '../../utils/convertkit';
import './CommunityModal.css';

const INTEREST_OPTIONS = [
  { value: 'sardegna', label: 'Sardegna' },
  { value: 'chapada', label: 'Chapada Diamantina' },
  { value: 'nomadismo', label: 'Nomadismo digital em geral' },
  { value: 'curioso', label: 'Ainda não sei, só curioso' },
];

function CommunityModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
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
      await subscribeToConvertKit({ name, email, interest });
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
              Todo mundo naquele mirante estava vendo o mesmo pôr do sol — e ainda assim, cada um
              vivia uma viagem completamente diferente. Essa é a parte que ninguém posta: viajar
              devagar também é solitário às vezes.
            </p>
            <p className="sn-modal__intro">
              Cadastre seu e-mail e seja um dos primeiros a saber quando a newsletter e os
              espaços de troca abrirem — além de já receber, agora, os guias gratuitos sobre o
              território que mais te interessa.
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
              <label className="sn-modal__field">
                O que mais te interessa agora?
                <select
                  name="interest"
                  value={interest}
                  onChange={(evt) => setInterest(evt.target.value)}
                  required
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {INTEREST_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
