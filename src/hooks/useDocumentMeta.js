import { useEffect } from 'react';

function useDocumentMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    let metaTag = document.querySelector('meta[name="description"]');
    let created = false;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
      created = true;
    }
    const prevDescription = metaTag.getAttribute('content');
    if (description) metaTag.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (created) {
        metaTag.remove();
      } else if (prevDescription !== null) {
        metaTag.setAttribute('content', prevDescription);
      }
    };
  }, [title, description]);
}

export default useDocumentMeta;
