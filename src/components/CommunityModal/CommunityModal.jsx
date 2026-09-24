import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribe } from '../../utils/MainApi';
import { useLang } from '../../i18n/LanguageContext';
import '../../styles/Modal.css';

/**
 * Popup "Participar da Comunidade". Salva o inscrito no back-end próprio,
 * que manda na hora o e-mail de boas-vindas (com o link para confirmar o
 * e-mail e criar a senha). `source` diz de onde o popup foi aberto (menu,
 * home, rodapé, artigo) — aparece nas estatísticas da lista.
 */
function CommunityModal({ onClose, source = 'site' }) {
  const {
    t, tx, lang, path, errorText,
  } = useLang();
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
        name: name.trim(), email: email.trim(), consent, source, website, lang,
      });
      setStatus('success');
    } catch (error) {
      setErrorMessage(
        error.message && !error.message.startsWith('Validation')
          ? errorText(error)
          : t('communityModal.validationError'),
      );
      setStatus('error');
    }
  }

  return (
    <div className="sn-modal-overlay" onClick={handleOverlayClick}>
      <div className="sn-modal" onClick={handleContentClick} role="dialog" aria-modal="true">
        <button className="sn-modal__close" type="button" onClick={onClose} aria-label={t('common.close')}>
          ✕
        </button>

        {status === 'success' ? (
          <div className="sn-modal__success">
            <h2 className="sn-modal__title">
              {tx('communityModal.successTitle', {
                name: <span className="sn-modal__name">{name.trim().split(' ')[0]}</span>,
              })}
            </h2>
            <p className="sn-modal__success-text">{t('communityModal.successText')}</p>
            <p className="sn-modal__success-text sn-modal__success-text--small">
              {t('communityModal.successHint')}
            </p>
            <button className="sn-modal__submit" type="button" onClick={onClose}>
              {t('communityModal.back')}
            </button>
          </div>
        ) : (
          <>
            <h2 className="sn-modal__title">{t('community.title')}</h2>
            <p className="sn-modal__intro">{t('communityModal.intro1')}</p>
            <p className="sn-modal__intro">{t('communityModal.intro2')}</p>
            <form className="sn-modal__form" onSubmit={handleSubmit}>
              <label className="sn-modal__field">
                {t('common.name')}
                <input
                  type="text"
                  name="name"
                  placeholder={t('common.namePlaceholder')}
                  autoComplete="given-name"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
              <label className="sn-modal__field">
                {t('common.email')}
                <input
                  type="email"
                  name="email"
                  placeholder={t('common.emailPlaceholder')}
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
                  {t('communityModal.consentBefore')}
                  <Link to={path('privacy')} onClick={onClose}>{t('communityModal.consentLink')}</Link>
                  {t('communityModal.consentAfter')}
                </span>
              </label>

              {status === 'error' && <p className="sn-modal__error">{errorMessage}</p>}

              <button className="sn-modal__submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? t('common.sending') : t('community.cta')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CommunityModal;
