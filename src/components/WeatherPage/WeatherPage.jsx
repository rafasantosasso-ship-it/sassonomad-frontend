import { useEffect, useState } from 'react';
import { CITIES, fetchWeather } from '../../utils/OpenMeteoApi';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import Preloader from '../Preloader/Preloader';
import './WeatherPage.css';

const PAGE_SIZE = 3;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutos

const WEATHER_LABELS = {
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

function describeWeatherCode(code) {
  return WEATHER_LABELS[code] || 'Sem descrição';
}

const ERROR_MESSAGE =
  'Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.';

function WeatherPage() {
  const [selectedCityId, setSelectedCityId] = useLocalStorageState('sn_weather_last_city', CITIES[0].id);
  const [cache, setCache] = useLocalStorageState('sn_weather_cache_v1', {});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const cityEntry = cache[selectedCityId];
  const weather = cityEntry ? cityEntry.data : null;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setError('');

    const city = CITIES.find((c) => c.id === selectedCityId);
    const entry = cache[selectedCityId];
    const isStale = !entry || Date.now() - entry.fetchedAt > CACHE_TTL_MS;

    if (!isStale) return; // cache fresco (< 30 min): já está na tela, nada a buscar

    // Só mostra o preloader quando ainda não há nenhum dado em tela — uma
    // atualização silenciosa em segundo plano não deve "apagar" um resultado
    // já visível.
    setIsLoading(!entry);

    fetchWeather(city)
      .then((data) => {
        setCache((prev) => ({ ...prev, [selectedCityId]: { data, fetchedAt: Date.now() } }));
      })
      .catch(() => setError(ERROR_MESSAGE))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCityId]);

  const days = weather?.daily?.time ?? [];
  const hasMore = visibleCount < days.length;

  function handleShowMore() {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, days.length));
  }

  return (
    <section className="sn-weather">
      <h1 className="sn-weather__title">Previsão do tempo</h1>
      <p className="sn-weather__subtitle">Dados em tempo real da Open-Meteo para os destinos Sasso Nomad.</p>

      <div className="sn-weather__selector">
        {CITIES.map((city) => (
          <button
            key={city.id}
            type="button"
            className={
              city.id === selectedCityId ? 'sn-weather__city sn-weather__city_active' : 'sn-weather__city'
            }
            onClick={() => setSelectedCityId(city.id)}
          >
            {city.label}
          </button>
        ))}
      </div>

      {isLoading && <Preloader inline />}

      {!isLoading && error && <p className="sn-weather__status sn-weather__status_error">{error}</p>}

      {!isLoading && !error && days.length === 0 && (
        <p className="sn-weather__status">Nada encontrado.</p>
      )}

      {!isLoading && !error && days.length > 0 && (
        <>
          <div className="sn-weather__days">
            {days.slice(0, visibleCount).map((date, index) => (
              <div className="sn-weather__day" key={date}>
                <span className="sn-weather__date">
                  {new Date(date).toLocaleDateString('pt-BR', {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                  })}
                </span>
                <span className="sn-weather__code">{describeWeatherCode(weather.daily.weathercode[index])}</span>
                <span className="sn-weather__temps">
                  {Math.round(weather.daily.temperature_2m_max[index])}° /{' '}
                  {Math.round(weather.daily.temperature_2m_min[index])}°
                </span>
              </div>
            ))}
          </div>

          {hasMore && (
            <button type="button" className="sn-weather__more" onClick={handleShowMore}>
              Mostrar mais
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default WeatherPage;
