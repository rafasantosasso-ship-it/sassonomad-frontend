const API_BASE = 'https://api.convertkit.com/v3';

const API_KEY = import.meta.env.VITE_CONVERTKIT_API_KEY;
const FORM_ID = import.meta.env.VITE_CONVERTKIT_FORM_ID;

export async function subscribeToConvertKit({ name, email }) {
  if (!API_KEY || !FORM_ID) {
    throw new Error(
      'ConvertKit não configurado: defina VITE_CONVERTKIT_API_KEY e VITE_CONVERTKIT_FORM_ID no .env.'
    );
  }

  const response = await fetch(`${API_BASE}/forms/${FORM_ID}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: API_KEY,
      email,
      first_name: name,
    }),
  });

  if (!response.ok) {
    throw new Error('Falha ao cadastrar contato no ConvertKit.');
  }

  return response.json();
}
