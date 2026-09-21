import { useEffect, useState } from 'react';

/**
 * Estado sincronizado com o localStorage. Lê o valor salvo ao montar (se
 * existir e for JSON válido) e regrava a cada mudança — usado para que a
 * página volte a exibir os últimos dados recebidos da API caso o usuário
 * feche a aba e retorne ao site, sem precisar esperar uma nova solicitação.
 */
function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage indisponível (modo privado, quota cheia, etc.) — a
      // navegação continua funcionando normalmente, só sem cache local.
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorageState;
