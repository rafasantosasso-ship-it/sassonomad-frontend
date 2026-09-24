import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { LanguageProvider } from './i18n/LanguageContext';
import './index.css';

const container = document.getElementById('root');
// Páginas públicas chegam pré-renderizadas pelo build (SEO); nesse caso o
// app monta por cima, sem mostrar o preloader.
const prerendered = container.firstElementChild !== null;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App prerendered={prerendered} />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
