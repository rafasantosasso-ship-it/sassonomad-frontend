const BASE_URL = 'https://timeapi.io/api/time/current/zone';

export const DESTINATIONS = [
  { id: 'chapada', label: 'Chapada Diamantina', timeZone: 'America/Bahia' },
  { id: 'sardegna', label: 'Sardegna', timeZone: 'Europe/Rome' },
  { id: 'chiang-mai', label: 'Chiang Mai', timeZone: 'Asia/Bangkok' },
  { id: 'dublin', label: 'Dublin', timeZone: 'Europe/Dublin' },
  { id: 'california', label: 'California', timeZone: 'America/Los_Angeles' },
];

/**
 * Busca a hora atual de um destino na timeapi.io (GET, JS vanilla / fetch).
 * Lança um Error em caso de falha de rede ou resposta não-ok — quem chama
 * decide como exibir isso ao usuário.
 */
async function fetchTimeForDestination(destination) {
  const params = new URLSearchParams({ timeZone: destination.timeZone });
  const response = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('timeapi.io respondeu com erro.');
  }

  const data = await response.json();
  return { destination, data };
}

/**
 * Trata o horário local de um destino como se fosse UTC. Como todas as
 * solicitações partem do mesmo instante real (busca em paralelo), esse
 * valor cresce exatamente na ordem do horário mais cedo pro mais tarde —
 * equivale a ordenar por fuso, sem precisar de um campo de offset
 * explícito na resposta da API.
 */
function toComparableInstant(entry) {
  const { year, month, day, hour, minute, seconds } = entry.data;
  return Date.UTC(year, month - 1, day, hour, minute, seconds);
}

/**
 * Busca a hora atual de todos os destinos em paralelo e devolve já
 * ordenado do horário mais cedo para o mais tarde. Se qualquer uma das
 * solicitações falhar, a promessa combinada rejeita — tratado como erro
 * geral da funcionalidade (mensagem única para o usuário).
 */
export function fetchAllDestinationTimes() {
  return Promise.all(DESTINATIONS.map(fetchTimeForDestination)).then((entries) =>
    [...entries].sort((a, b) => toComparableInstant(a) - toComparableInstant(b))
  );
}

// Formatadores compartilhados — usados tanto pela página /fusos quanto pela
// faixa da Home, pra não duplicar a mesma lógica nos dois componentes.
export function formatDestinationTime(entry) {
  const { hour, minute } = entry.data;
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

export function formatDestinationDate(entry) {
  const { day, month } = entry.data;
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`;
}
