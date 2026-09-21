const BASE_URL = 'https://timeapi.io/api/time/current/zone';

export const DESTINATIONS = [
  { id: 'lencois', label: 'Lençóis, Bahia', timeZone: 'America/Bahia' },
  { id: 'sardegna', label: 'Sardegna', timeZone: 'Europe/Rome' },
  { id: 'california', label: 'California', timeZone: 'America/Los_Angeles' },
  { id: 'dublin', label: 'Dublin', timeZone: 'Europe/Dublin' },
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
 * Busca a hora atual de todos os destinos em paralelo. Se qualquer uma das
 * solicitações falhar, a promessa combinada rejeita — tratado como erro
 * geral da funcionalidade (mensagem única para o usuário).
 */
export function fetchAllDestinationTimes() {
  return Promise.all(DESTINATIONS.map(fetchTimeForDestination));
}
