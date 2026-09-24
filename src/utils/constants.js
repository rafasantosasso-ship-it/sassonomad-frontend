// Valores fixos (não-variáveis) usados pela funcionalidade de fusos
// horários — Fase 1.2, conexão com API de terceiros (timeapi.io).

export const PAGE_SIZE = 3;

// Versionada: se a lista de destinos mudar, bump aqui força uma nova
// solicitação em vez de mostrar cache antigo (dados de cidades removidas).
export const TIMEZONES_CACHE_KEY = 'sn_timezones_cache_v3';

// Mensagem de erro e nomes dos dias da semana agora ficam em
// src/i18n/ui.js (common.error e days.*), nos três idiomas.

// E-mail de contato mostrado na política de privacidade.
export const CONTACT_EMAIL = 'nomad@sassonomad.com';
