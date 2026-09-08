const API_BASE = 'https://api.convertkit.com/v3';

const API_KEY = import.meta.env.VITE_CONVERTKIT_API_KEY;

// Uma tag do ConvertKit por opção de segmentação do formulário "Participar da Comunidade".
// Cada tag deve ter, no ConvertKit, uma automação configurada para enviar o guia
// gratuito correspondente (ver PROMPT_comunidade_convertkit.md).
const TAG_IDS = {
  sardegna: import.meta.env.VITE_CONVERTKIT_TAG_SARDEGNA,
  chapada: import.meta.env.VITE_CONVERTKIT_TAG_CHAPADA,
  nomadismo: import.meta.env.VITE_CONVERTKIT_TAG_NOMADISMO,
  curioso: import.meta.env.VITE_CONVERTKIT_TAG_CURIOSO,
};

export async function subscribeToConvertKit({ name, email, interest }) {
  if (!API_KEY) {
    throw new Error('ConvertKit não configurado: defina VITE_CONVERTKIT_API_KEY no .env.');
  }

  const tagId = TAG_IDS[interest];
  if (!tagId) {
    throw new Error(`Nenhuma tag do ConvertKit configurada para o interesse "${interest}".`);
  }

  const response = await fetch(`${API_BASE}/tags/${tagId}/subscribe`, {
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
