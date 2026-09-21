import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllDestinationTimes, formatDestinationTime } from '../../utils/TimeApi';
import { TIMEZONES_CACHE_KEY } from '../../utils/constants';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import './DestinationClocks.css';

/**
 * Faixa compacta entre seções da Home: cidade + hora atual dos destinos
 * Sasso Nomad. Usa o mesmo cache/API da página /fusos — se os dados já
 * foram buscados ali (ou aqui antes), não solicita de novo. Puramente
 * decorativa: sem preloader/erro visíveis aqui (isso mora na página
 * completa, que esta faixa leva até lá).
 */
function DestinationClocks() {
  const [results, setResults] = useLocalStorageState(TIMEZONES_CACHE_KEY, null);

  useEffect(() => {
    if (results) return;
    fetchAllDestinationTimes()
      .then((data) => setResults(data))
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!results || results.length === 0) {
    return <div className="sn-destination-clocks" aria-hidden="true" />;
  }

  return (
    <Link className="sn-destination-clocks" to="/fusos">
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
