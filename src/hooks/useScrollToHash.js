import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;

    const id = hash.replace('#', '');
    let attempts = 0;
    let frameId;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 40) {
        frameId = requestAnimationFrame(tryScroll);
      }
    };

    frameId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frameId);
  }, [hash, pathname]);
}

export default useScrollToHash;
