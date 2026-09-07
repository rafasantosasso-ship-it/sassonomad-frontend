import { useEffect, useRef, useState } from 'react';
import './ShareButton.css';

function ShareButton({ path, title, size = 'card', label }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    function handleOutsideClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [open]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  function getUrl() {
    if (typeof window === 'undefined') return path;
    return `${window.location.origin}${path}`;
  }

  function handleToggle(event) {
    event.preventDefault();
    event.stopPropagation();
    setOpen((value) => !value);
  }

  function handleWhatsApp(event) {
    event.preventDefault();
    event.stopPropagation();
    const text = `${title} — ${getUrl()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  function handleEmail(event) {
    event.preventDefault();
    event.stopPropagation();
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(getUrl());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setOpen(false);
  }

  async function handleCopy(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`sn-share sn-share_${size}`} ref={containerRef}>
      <button
        type="button"
        className="sn-share__toggle"
        onClick={handleToggle}
        aria-expanded={open}
        aria-label={label}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6" cy="12" r="2.3" />
          <circle cx="17.5" cy="5.5" r="2.3" />
          <circle cx="17.5" cy="18.5" r="2.3" />
          <line x1="8.1" y1="10.8" x2="15.4" y2="6.9" />
          <line x1="8.1" y1="13.2" x2="15.4" y2="17.1" />
        </svg>
      </button>

      {open && (
        <div className="sn-share__menu" role="menu">
          <button type="button" className="sn-share__option" onClick={handleWhatsApp}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z" />
              <path d="M9 9.3c0-.4.3-.6.6-.6h.7c.3 0 .5.2.6.5l.4 1.3c.1.2 0 .5-.1.6l-.5.6c.4.9 1.1 1.6 2 2l.6-.5c.2-.2.4-.2.6-.1l1.3.4c.3.1.5.4.5.7v.6c0 .4-.3.7-.7.7-3.1 0-5.9-2.8-5.9-6z" />
            </svg>
            WhatsApp
          </button>
          <button type="button" className="sn-share__option" onClick={handleEmail}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
              <path d="M4.5 6.5l7.5 6 7.5-6" />
            </svg>
            E-mail
          </button>
          <button type="button" className="sn-share__option" onClick={handleCopy}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 14.5l5-5" />
              <path d="M8.2 16.7l-1.4 1.4a3 3 0 0 1-4.2-4.2l2.8-2.8a3 3 0 0 1 4.2 0" />
              <path d="M15.8 7.3l1.4-1.4a3 3 0 0 1 4.2 4.2l-2.8 2.8a3 3 0 0 1-4.2 0" />
            </svg>
            {copied ? 'Copiado!' : 'Copiar link'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
