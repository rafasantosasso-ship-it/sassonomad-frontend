import { useState, useEffect } from 'react';
import './AuthModal.css';

function AuthModal({ onClose }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'

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

  function handleSubmit(evt) {
    evt.preventDefault();
    // TODO: ligar às rotas signup/signin do back-end quando estiverem prontas
  }

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick}>
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ✕
        </button>
        <h2 className="sn-modal__title">{mode === 'login' ? 'Entrar' : 'Criar conta'}</h2>
        <form className="sn-modal__form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label className="sn-modal__field">
              Nome
              <input type="text" name="name" placeholder="Seu nome" required />
            </label>
          )}
          <label className="sn-modal__field">
            E-mail
            <input type="email" name="email" placeholder="voce@email.com" required />
          </label>
          <label className="sn-modal__field">
            Senha
            <input type="password" name="password" placeholder="••••••••" required />
          </label>
          <button className="sn-modal__submit" type="submit">
            {mode === 'login' ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>
        {mode === 'login' ? (
          <p className="sn-modal__switch">
            Não tem conta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setMode('signup'); }}>Cadastre-se</a>
          </p>
        ) : (
          <p className="sn-modal__switch">
            Já tem conta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setMode('login'); }}>Entrar</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
