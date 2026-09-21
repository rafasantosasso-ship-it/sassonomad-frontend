import { useEffect, useState } from 'react';
import {
  fetchAllDestinationTimes,
  formatDestinationTime,
  formatDestinationDay,
  formatDestinationDate,
} from '../../utils/TimeApi';
import { PAGE_SIZE, ERROR_MESSAGE, TIMEZONES_CACHE_KEY } from '../../utils/constants';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import Preloader from '../Preloader/Preloader';
import './TimeZonesPage.css';

function TimeZonesPage() {
  // Lido do localStorage ao montar — se o usuário já visitou a página antes,
  // os cartões aparecem na hora, sem nova solicitação à API.
  const [results, setResults] = useLocalStorageState(TIMEZONES_CACHE_KEY, null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    if (results) return; // já em cache: nada para buscar

    setIsLoading(true);
    setError('');

    fetchAllDestinationTimes()
      .then((data) => setResults(data))
      .catch(() => setError(ERROR_MESSAGE))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = results ?? [];
  const hasMore = visibleCount < items.length;

  function handleShowMore() {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, items.length));
  }

  return (
    <section className="sn-timezones">
      <h1 className="sn-timezones__title">Sasso Nomad pelo mundo</h1>
      <p className="sn-timezones__subtitle">
        Hora atual em cada destino — útil pra coordenar chamadas e prazos remotos.
      </p>

      {isLoading && <Preloader inline />}

      {!isLoading && error && <p className="sn-timezones__status sn-timezones__status_error">{error}</p>}

      {!isLoading && !error && items.length === 0 && (
        <p className="sn-timezones__status">Nada encontrado.</p>
      )}

      {!isLoading && !error && items.length > 0 && (
        <>
          <div className="sn-timezones__grid">
            {items.slice(0, visibleCount).map((entry) => (
              <div className="sn-timezones__card" key={entry.destination.id}>
                <span className="sn-timezones__city">{entry.destination.label}</span>
                <span className="sn-timezones__time">{formatDestinationTime(entry)}</span>
                <span className="sn-timezones__day">
                  {formatDestinationDay(entry)} · {formatDestinationDate(entry)}
                </span>
              </div>
            ))}
          </div>

          {hasMore && (
            <button type="button" className="sn-timezones__more" onClick={handleShowMore}>
              Mostrar mais
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default TimeZonesPage;
