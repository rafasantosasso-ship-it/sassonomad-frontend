import { useEffect } from 'react';

function useJsonLd(id, data) {
  useEffect(() => {
    if (!data) return undefined;

    let script = document.getElementById(id);
    const created = !script;
    if (created) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      if (created && script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [id, data]);
}

export default useJsonLd;
