# Sasso Nomad — Front-end

## Rodar localmente

```
npm install
npm run dev
```

## Integração com API de terceiros (Fase 1.2)

- **GET** — rota `/fusos`, consumindo a [timeapi.io](https://timeapi.io/) (`src/utils/TimeApi.js`). Sem chave de API. Busca a hora atual (em paralelo) em 5 destinos: Chapada Diamantina, Sardegna, Chiang Mai, Dublin e California.
  - Preloader enquanto a resposta não chega, mensagem de erro padrão em caso de falha, "Nada encontrado" se a API não retornar dados.
  - Resultado é salvo em `localStorage` (`src/hooks/useLocalStorageState.js`) — ao reabrir a aba, os cartões aparecem na hora, sem nova solicitação.
  - Cartões organizados em fileiras de 3, com botão "Mostrar mais" revelando o restante.
  - `/fusos` não aparece no menu principal (decisão de layout) — na Home, uma faixa discreta entre seções (`DestinationClocks`, no lugar do antigo espaçador `SectionGap`) mostra cidade + hora e linka pra `/fusos`.
- **POST** — modal "Comunidade" (`src/utils/convertkit.js`), que cadastra e-mail/nome no ConvertKit via `fetch` com `method: 'POST'`.

## Pendências

- Trocar as imagens placeholder em `src/images/` pelas fotos reais (mesmos nomes de arquivo, ou ajuste os imports).
- `FeaturedProduct` ("Comprar") ainda é só front-end — checkout/pagamento não está implementado.
- Chaves do ConvertKit (`VITE_CONVERTKIT_API_KEY`, `VITE_CONVERTKIT_FORM_ID`) ainda não configuradas.

## Produção

- Site: **https://sassonomad.com**
- Consome a API em `https://api.sassonomad.com` (ver `VITE_API_URL`).

### Infraestrutura

- Build estático (`npm run build`) servido via **Nginx** numa VM do Google Cloud (`e2-micro`, Debian 13).
- HTTPS via **Let's Encrypt / Certbot**, com redirecionamento automático HTTP → HTTPS.
- DNS apontando `sassonomad.com`, `www.sassonomad.com` e `api.sassonomad.com` pra VM.
