// Valores fixos (não-variáveis) usados pela funcionalidade de previsão do
// tempo — Fase 1.2, conexão com API de terceiros (Open-Meteo).

export const FORECAST_DAYS = 16;

export const PAGE_SIZE = 3;

export const ERROR_MESSAGE =
  'Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.';

export const WEATHER_LABELS = {
  0: 'Céu limpo',
  1: 'Poucas nuvens',
  2: 'Parcialmente nublado',
  3: 'Nublado',
  45: 'Neblina',
  48: 'Neblina com geada',
  51: 'Garoa fraca',
  53: 'Garoa',
  55: 'Garoa forte',
  61: 'Chuva fraca',
  63: 'Chuva',
  65: 'Chuva forte',
  71: 'Neve fraca',
  73: 'Neve',
  75: 'Neve forte',
  80: 'Pancadas de chuva',
  81: 'Pancadas de chuva',
  82: 'Pancadas fortes',
  95: 'Tempestade',
};
