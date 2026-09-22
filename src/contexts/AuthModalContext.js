import { createContext } from 'react';

// Permite que qualquer componente (ex.: o botão de salvar artigo) abra o
// modal de login sem precisar receber a função via props por vários
// níveis de componentes. Provido no App.jsx.
const AuthModalContext = createContext({ openLogin: () => {} });

export default AuthModalContext;
