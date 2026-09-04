import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className="sn-not-found">
      <h1 className="sn-not-found__title">404</h1>
      <p className="sn-not-found__text">Página não encontrada.</p>
      <Link className="sn-not-found__link" to="/">Voltar para o início</Link>
    </section>
  );
}

export default NotFound;
