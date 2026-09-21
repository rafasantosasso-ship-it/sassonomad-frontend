import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllDestinationTimes } from '../../utils/TimeApi';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import './DestinationClocks.css';

function formatTime(entry) {
  const { hour, minute } = entry.data;
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

/**
 * Faixa compacta entre seções da Home: cidade + hora atual dos destinos
 * Sasso Nomad. Usa o mesmo cache/API da página /fusos — se os dados já
 * foram buscados ali (ou aqui antes), não solicita de novo. Puramente
 * decorativa: sem preloader/erro visíveis aqui (isso mora na página
 * completa, que esta faixa leva até lá).
 */
function DestinationClocks() {
  const [results, setResults] = useLocalStorageState('sn_timezones_cache_v1', null);

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
          <span className="sn-destination-clocks__time">{formatTime(entry)}</span>
        </span>
      ))}
    </Link>
  );
}

export default DestinationClocks;
