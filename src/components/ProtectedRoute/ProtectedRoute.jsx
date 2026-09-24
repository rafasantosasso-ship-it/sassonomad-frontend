import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useLang } from '../../i18n/LanguageContext';

/**
 * HOC de rota protegida (React Router v6): se não houver usuário logado,
 * redireciona pra Home. Quem monta <App> é responsável por abrir o
 * AuthModal quando isso acontece (ver App.jsx).
 */
function ProtectedRoute({ children }) {
  const currentUser = useContext(CurrentUserContext);
  const { path } = useLang();

  if (!currentUser) {
    return <Navigate to={path('home')} replace />;
  }

  return children;
}

export default ProtectedRoute;
