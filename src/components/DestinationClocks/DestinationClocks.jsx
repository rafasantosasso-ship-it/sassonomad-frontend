import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllDestinationTimes, formatDestinationTime } from '../../utils/TimeApi';
import { TIMEZONES_CACHE_KEY } from '../../utils/constants';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { useLang } from '../../i18n/LanguageContext';
import './DestinationClocks.css';

/**
 * Faixa compacta entre seções da Home: cidade + hora atual dos destinos
 * Sasso Nomad. Compartilha a mesma chave de cache da página /fusos (pra
 * pintar algo na hora, sem esperar a rede), mas sempre busca hora fresca
 * ao montar. Puramente decorativa: sem preloader/erro visíveis aqui (isso
 * mora na página completa, que esta faixa leva até lá).
 */
function DestinationClocks() {
  const [results, setResults] = useLocalStorageState(TIMEZONES_CACHE_KEY, null);
  const { path } = useLang();

  useEffect(() => {
    // Sempre busca hora fresca ao montar (ver comentário em TimeZonesPage) —
    // o valor em cache só é usado pra render imediato, nunca fica parado.
    fetchAllDestinationTimes()
      .then((data) => setResults(data))
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!results || results.length === 0) {
    return <div className="sn-destination-clocks" aria-hidden="true" />;
  }

  return (
    <Link className="sn-destination-clocks" to={path('timezones')}>
      {results.map((entry) => (
        <span className="sn-destination-clocks__item" key={entry.destination.id}>
          <span className="sn-destination-clocks__city">{entry.destination.label}</span>
          <span className="sn-destination-clocks__time">{formatDestinationTime(entry)}</span>
        </span>
      ))}
    </Link>
  );
}

export default DestinationClocks;
