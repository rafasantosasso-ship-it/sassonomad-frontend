import { useEffect, useState } from 'react';
import {
  fetchAllDestinationTimes,
  formatDestinationTime,
  formatDestinationDate,
} from '../../utils/TimeApi';
import { PAGE_SIZE, TIMEZONES_CACHE_KEY } from '../../utils/constants';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import Preloader from '../Preloader/Preloader';
import Seo from '../../seo/Seo';
import { useLang } from '../../i18n/LanguageContext';
import './TimeZonesPage.css';

function TimeZonesPage() {
  const { t } = useLang();
  // Lido do localStorage ao montar — se o usuário já visitou a página antes,
  // os cartões aparecem na hora (sem preloader) enquanto uma hora fresca é
  // buscada da API em segundo plano e substitui o valor exibido.
  const [results, setResults] = useLocalStorageState(TIMEZONES_CACHE_KEY, null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    // Sempre busca a hora atual ao montar — mesmo com cache no
    // localStorage. O cache só serve pra mostrar algo na hora (sem
    // preloader) enquanto a resposta fresca não chega; se depender só do
    // cache, o horário fica parado e desatualiza (relatado na revisão).
    const hadCache = Boolean(results);
    if (!hadCache) setIsLoading(true);
    setError('');

    fetchAllDestinationTimes()
      .then((data) => setResults(data))
      .catch(() => {
        if (!hadCache) setError(t('common.error'));
      })
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
      <Seo
        title={t('seo.timezonesTitle')}
        description={t('seo.timezonesDescription')}
        routeKey="timezones"
      />
      <h1 className="sn-timezones__title">{t('timezones.title')}</h1>
      <p className="sn-timezones__subtitle">{t('timezones.subtitle')}</p>

      {isLoading && <Preloader inline />}

      {!isLoading && error && <p className="sn-timezones__status sn-timezones__status--error">{error}</p>}

      {!isLoading && !error && items.length === 0 && (
        <p className="sn-timezones__status">{t('timezones.empty')}</p>
      )}

      {!isLoading && !error && items.length > 0 && (
        <>
          <div className="sn-timezones__grid">
            {items.slice(0, visibleCount).map((entry) => (
              <div className="sn-timezones__card" key={entry.destination.id}>
                <span className="sn-timezones__city">{entry.destination.label}</span>
                <span className="sn-timezones__time">{formatDestinationTime(entry)}</span>
                <span className="sn-timezones__day">
                  {t(`days.${entry.data.dayOfWeek}`)} · {formatDestinationDate(entry)}
                </span>
              </div>
            ))}
          </div>

          {hasMore && (
            <button type="button" className="sn-timezones__more" onClick={handleShowMore}>
              {t('timezones.more')}
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default TimeZonesPage;
