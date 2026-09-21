import { useEffect, useState } from 'react';
import { CITIES, fetchWeather } from '../../utils/OpenMeteoApi';
import { PAGE_SIZE, ERROR_MESSAGE, WEATHER_LABELS } from '../../utils/constants';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import Preloader from '../Preloader/Preloader';
import './WeatherPage.css';

function describeWeatherCode(code) {
  return WEATHER_LABELS[code] || 'Sem descrição';
}

function WeatherPage() {
  const [selectedCityId, setSelectedCityId] = useLocalStorageState('sn_weather_last_city', CITIES[0].id);
  // Cache por cidade: uma vez recebida, a previsão fica salva no localStorage
  // e é lida direto daqui ao montar o componente — sem nova solicitação —
  // caso o usuário tenha fechado a aba e voltado ao site.
  const [cache, setCache] = useLocalStorageState('sn_weather_cache_v1', {});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const weather = cache[selectedCityId] ?? null;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setError('');

    if (cache[selectedCityId]) return; // já em cache: nada para buscar

    const city = CITIES.find((c) => c.id === selectedCityId);
    setIsLoading(true);

    fetchWeather(city)
      .then((data) => {
        setCache((prev) => ({ ...prev, [selectedCityId]: data }));
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
