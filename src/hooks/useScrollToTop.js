import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Rola a página para o topo sempre que a rota muda (sem hash na URL).
 * Sem isso, o React Router mantém a posição de rolagem da página anterior
 * ao navegar — o usuário chega em uma página nova já "no meio" dela.
 * Quando há um hash (ex.: #alguma-secao), quem cuida da rolagem é o
 * useScrollToHash, então este hook não interfere.
 */
function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);
}

export default useScrollToTop;
