export const CITIES = [
  { id: 'lencois', label: 'Lençóis — Chapada Diamantina, BR', latitude: -12.5619, longitude: -41.3961 },
  { id: 'cagliari', label: 'Cagliari — Sardegna, IT', latitude: 39.2238, longitude: 9.1217 },
  { id: 'chiang-mai', label: 'Chiang Mai, TH', latitude: 18.7883, longitude: 98.9853 },
  { id: 'lisboa', label: 'Lisboa, PT', latitude: 38.7223, longitude: -9.1393 },
];

export async function fetchWeather(city) {
  const params = new URLSearchParams({
    latitude: city.latitude,
    longitude: city.longitude,
    daily: 'temperature_2m_max,temperature_2m_min,weathercode',
    timezone: 'auto',
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Não foi possível carregar a previsão do tempo.');
  }

  return response.json();
}
