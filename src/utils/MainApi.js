// Requisições para o back-end próprio do Sasso Nomad (cadastro, login e
// artigos/guias salvos pelo usuário logado). Fase 3 — Autorização com React.
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

async function handleResponse(response) {
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = body.message || 'Ocorreu um erro na solicitação.';
    return Promise.reject(new Error(message));
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

// --- Cadastro e autorização ---

export function register({ email, password, name }) {
  return request('/signup', { method: 'POST', body: { email, password, name }, auth: false });
}

export function authorize({ email, password }) {
  return request('/signin', { method: 'POST', body: { email, password }, auth: false })
    .then(({ token }) => {
      setToken(token);
      return token;
    });
}

export function getUserInfo() {
  return request('/users/me');
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
