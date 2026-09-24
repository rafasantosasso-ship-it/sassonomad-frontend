import { Navigate, useLocation } from 'react-router-dom';
import { detectLang } from '../../i18n/config';
import { localePath } from '../../i18n/routes';

/**
 * Raiz "/": em produção quem redireciona é o Nginx (antes do React
 * carregar). Isto cobre o `npm run dev` e qualquer servidor sem a regra.
 * Mesma ordem: cookie > idioma do navegador > inglês.
 */
export function RootRedirect() {
  const { search, hash } = useLocation();
  return <Navigate to={`${localePath('home', detectLang())}${search}${hash}`} replace />;
}

/**
 * URLs antigas, de antes do site ter idiomas (/guias, /bem-vindo?token=...,
 * /privacidade...), continuam funcionando: vão para a versão /pt/. Os
 * e-mails já enviados apontam para essas URLs.
 */
export function LegacyRedirect({ to }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}
