import { useState, useEffect } from 'react';
import { CITIES, fetchWeather } from '../../utils/weatherApi';
import './WeatherPage.css';

function WeatherPage() {
  const [selectedCityId, setSelectedCityId] = useState(CITIES[0].id);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const city = CITIES.find((c) => c.id === selectedCityId);
    setIsLoading(true);
    setError('');

    fetchWeather(city)
      .then((data) => setWeather(data))
      .catch(() => setError('Não foi possível carregar a previsão do tempo agora.'))
      .finally(() => setIsLoading(false));
  }, [selectedCityId]);

  return (
    <section className="sn-weather">
      <h1 className="sn-weather__title">Previsão do tempo</h1>

      <div className="sn-weather__selector">
        {CITIES.map((city) => (
          <button
            key={city.id}
            type="button"
            className={city.id === selectedCityId ? 'sn-weather__city sn-weather__city_active' : 'sn-weather__city'}
            onClick={() => setSelectedCityId(city.id)}
          >
            {city.label}
          </button>
        ))}
      </div>

      {isLoading && <p className="sn-weather__status">Carregando...</p>}
      {error && <p className="sn-weather__status sn-weather__status_error">{error}</p>}

      {!isLoading && !error && weather && (
        <div className="sn-weather__days">
          {weather.daily.time.map((date, index) => (
            <div className="sn-weather__day" key={date}>
              <span className="sn-weather__date">
                {new Date(date).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' })}
              </span>
              <span className="sn-weather__temps">
                {Math.round(weather.daily.temperature_2m_max[index])}° / {Math.round(weather.daily.temperature_2m_min[index])}°
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WeatherPage;
