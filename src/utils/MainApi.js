// Requisições para o back-end próprio do Sasso Nomad (cadastro, login,
// comunidade/newsletter e artigos/guias salvos pelo usuário logado).
//
// O token JWT fica em localStorage e é anexado automaticamente pelas
// funções abaixo — quem chama getSavedArticles()/saveArticle()/etc não
// precisa se preocupar em passar o token a cada chamada.

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const TOKEN_KEY = 'sn_token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// A API responde as mensagens de erro em português. `code` identifica as
// conhecidas para o front mostrar a versão em italiano/inglês
// (src/i18n/ui.js -> serverErrors).
const SERVER_ERROR_CODES = {
  'E-mail ou senha incorretos': 'invalidCredentials',
  'Já existe um usuário cadastrado com esse e-mail': 'emailExists',
  'Esse link é inválido ou expirou': 'invalidLink',
  'Você já tem uma conta com esse e-mail. É só entrar.': 'accountExists',
  'Não foi possível enviar o e-mail agora. Tente de novo em instantes.': 'emailSendFailed',
  'Muitas solicitações vindas desse IP, tente novamente mais tarde': 'rateLimit',
  'Dados inválidos para o cadastro': 'invalidData',
  'Dados inválidos para criação do usuário': 'invalidData',
  'Ocorreu um erro no servidor': 'server',
  'Ocorreu um erro na solicitação.': 'server',
};

async function handleResponse(response) {
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = body.message || 'Ocorreu um erro na solicitação.';
    const error = new Error(message);
    error.code = SERVER_ERROR_CODES[message] || null;
    return Promise.reject(error);
  }
  return body;
}

function request(path, { method = 'GET', body, auth = true } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  return fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  }).then(handleResponse);
}

// Guarda o JWT devolvido pelas rotas que já deixam a pessoa logada.
function storeToken({ token }) {
  setToken(token);
  return token;
}

// --- Cadastro e autorização ---

export function register({ email, password, name }) {
  return request('/signup', { method: 'POST', body: { email, password, name }, auth: false });
}

export function authorize({ email, password }) {
  return request('/signin', { method: 'POST', body: { email, password }, auth: false })
    .then(storeToken);
}

export function getUserInfo() {
  return request('/users/me');
}

// --- Comunidade / newsletter ---

// Popup "Participar da Comunidade": salva o inscrito e dispara na hora o
// e-mail de boas-vindas. `website` é o honeypot anti-robô (fica vazio).
export function subscribe({
  name, email, consent, source, website = '', lang = 'pt',
}) {
  return request('/subscribe', {
    method: 'POST',
    body: {
      name, email, consent, source, website, lang,
    },
    auth: false,
  });
}

// Página /bem-vindo: confirma o e-mail pelo token do link.
export function confirmSubscription(token) {
  return request('/subscribe/confirm', { method: 'POST', body: { token }, auth: false });
}

// Página /bem-vindo: cria a conta com a senha escolhida e já entra.
export function createAccount({ token, password }) {
  return request('/subscribe/create-account', {
    method: 'POST', body: { token, password }, auth: false,
  }).then(storeToken);
}

// --- Senha ---

// `lang`: o e-mail de nova senha sai no idioma da página (pt, it, en).
export function requestPasswordReset(email, lang = 'pt') {
  return request('/password/forgot', { method: 'POST', body: { email, lang }, auth: false });
}

export function resetPassword({ token, password }) {
  return request('/password/reset', {
    method: 'POST', body: { token, password }, auth: false,
  }).then(storeToken);
}

// --- Guias/artigos salvos ---

export function getSavedArticles() {
  return request('/articles');
}

export function saveArticle(article) {
  return request('/articles', { method: 'POST', body: article });
}

export function deleteSavedArticle(articleId) {
  return request(`/articles/${articleId}`, { method: 'DELETE' });
}
