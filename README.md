# Sasso Nomad — Front-end

## Rodar localmente

```
npm install
npm run dev
```

## Idiomas (PT · IT · EN)

O site tem três versões, uma pasta por idioma: `/pt`, `/it` e `/en`. O PT é o idioma-fonte: tudo nasce em português e IT/EN são adaptações.

### Onde fica cada coisa

| O quê | Arquivo |
| --- | --- |
| Textos da interface (menu, rodapé, home, modais, conta) | `src/i18n/ui.js` |
| Artigos | `src/content/articles/<artigo>/{pt,it,en}.jsx` |
| Guias pagos | `src/content/guides/<guia>/{pt,it,en}.jsx` |
| FAQ | `src/content/faq/{pt,it,en}.js` |
| Política de privacidade | `src/content/privacy/{pt,it,en}.jsx` |
| URLs de cada página em cada idioma | `src/i18n/routes.js` |
| Preços, moeda e links da Hotmart | `src/i18n/checkout.js` |

Fluxo: edite o arquivo `pt`, depois atualize `it` e `en`. Chave de interface sem tradução mostra o texto em PT e avisa no console (`npm run dev`).

### Como o idioma é escolhido

- `sassonomad.com/` redireciona pelo **idioma do navegador** (não por IP): português → `/pt`, italiano → `/it`, qualquer outro → `/en`. Quem escolheu um idioma no seletor (cookie `sn_lang`) sempre volta nele.
- Links diretos (`/pt/guias/...`) **nunca** redirecionam. Se o navegador estiver em outro idioma, aparece só um aviso discreto oferecendo a versão traduzida.
- URLs antigas sem idioma (`/guias`, `/bem-vindo?token=...`, `/privacidade`) redirecionam para `/pt/...` — os e-mails já enviados continuam funcionando.

### SEO

- `npm run build` gera o app e **pré-renderiza** cada página pública nos três idiomas (`dist/pt/...`, `dist/it/...`, `dist/en/...`), já com `title`, `description`, `canonical`, `hreflang`, Open Graph e JSON-LD (`Article`, `Product`, `FAQPage`). Também gera `dist/sitemap.xml`.
- `npm run build:spa` gera só o app, sem pré-renderização (para testar rápido).
- Cada página usa o componente `<Seo>` (`src/seo/Seo.jsx`).

### Deploy (Nginx na VM)

1. `npm run build` e envie o conteúdo de `dist/` para a VM, como antes.
2. Aplique uma vez a configuração de `deploy/nginx/sassonomad-i18n.conf` (instruções no próprio arquivo) e rode `sudo nginx -t && sudo systemctl reload nginx`.
3. No Google Search Console, envie `https://sassonomad.com/sitemap.xml`.

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
