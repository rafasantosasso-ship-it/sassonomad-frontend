const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

// Previsão estendida (Open-Meteo permite até 16 dias na versão gratuita,
// sem necessidade de chave de API) — dá material real para a paginação
// "Mostrar mais" pedida na Fase 1.2.
const FORECAST_DAYS = 16;

export const CITIES = [
  { id: 'lencois', label: 'Lençóis — Chapada Diamantina, BR', latitude: -12.5619, longitude: -41.3961 },
  { id: 'cagliari', label: 'Cagliari — Sardegna, IT', latitude: 39.2238, longitude: 9.1217 },
  { id: 'chiang-mai', label: 'Chiang Mai, TH', latitude: 18.7883, longitude: 98.9853 },
  { id: 'lisboa', label: 'Lisboa, PT', latitude: 38.7223, longitude: -9.1393 },
];

/**
 * Busca a previsão do tempo de uma cidade na Open-Meteo (GET, JS vanilla /
 * fetch). Lança um Error em caso de falha de rede ou resposta não-ok — quem
 * chama decide como exibir isso ao usuário.
 */
export async function fetchWeather(city) {
  const params = new URLSearchParams({
    latitude: city.latitude,
    longitude: city.longitude,
    daily: 'temperature_2m_max,temperature_2m_min,weathercode',
    forecast_days: FORECAST_DAYS,
    timezone: 'auto',
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Open-Meteo respondeu com erro.');
  }

  return response.json();
}
