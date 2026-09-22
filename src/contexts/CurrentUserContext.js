import { createContext } from 'react';

// Guarda os dados do usuário logado (email, name) — null enquanto
// deslogado. Provido no componente raiz App via CurrentUserContext.Provider.
const CurrentUserContext = createContext(null);

export default CurrentUserContext;
