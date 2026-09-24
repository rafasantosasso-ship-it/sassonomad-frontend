// Valores fixos (não-variáveis) usados pela funcionalidade de fusos
// horários — Fase 1.2, conexão com API de terceiros (timeapi.io).

export const PAGE_SIZE = 3;

// Versionada: se a lista de destinos mudar, bump aqui força uma nova
// solicitação em vez de mostrar cache antigo (dados de cidades removidas).
export const TIMEZONES_CACHE_KEY = 'sn_timezones_cache_v3';

export const ERROR_MESSAGE =
  'Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.';

export const DAY_LABELS = {
  Monday: 'Segunda-feira',
  Tuesday: 'Terça-feira',
  Wednesday: 'Quarta-feira',
  Thursday: 'Quinta-feira',
  Friday: 'Sexta-feira',
  Saturday: 'Sábado',
  Sunday: 'Domingo',
};

// E-mail de contato mostrado na política de privacidade.
export const CONTACT_EMAIL = 'nomad@sassonomad.com';
