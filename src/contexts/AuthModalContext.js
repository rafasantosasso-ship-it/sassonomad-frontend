import { createContext } from 'react';

// Permite que qualquer componente (ex.: o botão de salvar artigo ou o
// convite da comunidade no fim dos artigos) abra o modal de login ou o
// popup da comunidade sem receber a função via props por vários níveis.
// Provido no App.jsx.
const AuthModalContext = createContext({
  openLogin: () => {},
  openCommunity: () => {},
});

export default AuthModalContext;
