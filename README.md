# Sasso Nomad — Front-end

## Rodar localmente

```
npm install
npm run dev
```

## Integração com API de terceiros (Fase 1.2)

- **GET** — rota `/fusos`, consumindo a [timeapi.io](https://timeapi.io/) (`src/utils/TimeApi.js`). Sem chave de API. Busca a hora atual (em paralelo) em 4 destinos: Lençóis (Bahia), Sardegna, California e Dublin.
  - Preloader enquanto a resposta não chega, mensagem de erro padrão em caso de falha, "Nada encontrado" se a API não retornar dados.
  - Resultado é salvo em `localStorage` (`src/hooks/useLocalStorageState.js`) — ao reabrir a aba, os cartões aparecem na hora, sem nova solicitação.
  - Cartões organizados em fileiras de 3, com botão "Mostrar mais" revelando o restante.
  - `/fusos` não aparece no menu principal (decisão de layout) — na Home, uma faixa discreta entre seções (`DestinationClocks`, no lugar do antigo espaçador `SectionGap`) mostra cidade + hora e linka pra `/fusos`.
- **POST** — modal "Comunidade" (`src/utils/convertkit.js`), que cadastra e-mail/nome no ConvertKit via `fetch` com `method: 'POST'`.

## Pendências

- Trocar as imagens placeholder em `src/images/` pelas fotos reais (mesmos nomes de arquivo, ou ajuste os imports).
- `AuthModal` e `FeaturedProduct` ainda são só front-end — sem back-end conectado (login, cadastro e "Comprar" não enviam pra lugar nenhum ainda).
- Deploy do front-end fica pra quando o back-end entrar (Fase 2+), conforme a lição permite.
- Nomenclatura de classes usa `bloco__elemento_modificador` (underscore simples), não o BEM estrito com `--modificador` duplo — decisão consciente, não vamos reescrever agora.
