import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { loadGoogleAnalytics } from '../../utils/analytics';
import './CookieConsent.css';

const CONSENT_KEY = 'sn_cookie_consent'; // 'accepted' | 'declined'

/**
 * Aviso de cookies. O Google Analytics só é carregado depois que a pessoa
 * clica em "Aceitar" — nunca antes, e nunca se ela recusar.
 */
function CookieConsent() {
  const { t, path } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      stored = null;
    }

    if (stored === 'accepted') {
      loadGoogleAnalytics();
    } else if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    try {
      window.localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // localStorage indisponível: carrega mesmo assim nesta visita.
    }
    loadGoogleAnalytics();
    setVisible(false);
  }

  function handleDecline() {
    try {
      window.localStorage.setItem(CONSENT_KEY, 'declined');
    } catch {
      // localStorage indisponível: o aviso só some nesta visita.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="sn-cookie-consent" role="region" aria-label={t('cookieConsent.title')}>
      <p className="sn-cookie-consent__text">
        {t('cookieConsent.text')}{' '}
        <Link to={path('privacy')}>{t('cookieConsent.link')}</Link>
      </p>
      <div className="sn-cookie-consent__actions">
        <button className="sn-cookie-consent__decline" type="button" onClick={handleDecline}>
          {t('cookieConsent.decline')}
        </button>
        <button className="sn-cookie-consent__accept" type="button" onClick={handleAccept}>
          {t('cookieConsent.accept')}
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
