const MEASUREMENT_ID = 'G-YB03DHDFNM';

let loaded = false;

/**
 * Carrega o Google Analytics (gtag.js) só depois que a pessoa aceita os
 * cookies no aviso do site — nunca antes, pra respeitar o consentimento.
 */
export function loadGoogleAnalytics() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
}
