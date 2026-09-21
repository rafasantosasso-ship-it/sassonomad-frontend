# Sasso Nomad — Front-end

## Rodar localmente

```
npm install
npm run dev
```

## Integração com API de terceiros (Fase 1.2)

- **GET** — rota `/clima`, consumindo a [Open-Meteo](https://open-meteo.com/) (`src/utils/OpenMeteoApi.js`). Sem chave de API. Busca previsão de até 16 dias para 4 cidades dos destinos Sasso Nomad.
  - Preloader enquanto a primeira resposta não chega, mensagem de erro padrão em caso de falha, "Nada encontrado" se a API não retornar dados.
  - Resultado é salvo em `localStorage` (`src/hooks/useLocalStorageState.js`) por cidade, com validade de 30 min — ao reabrir a aba, os dados aparecem na hora; se estiverem velhos, atualiza em segundo plano.
  - Cartões organizados em fileiras de 3 (2 em telas médias, 1 no mobile), com botão "Mostrar mais" revelando 3 por vez até acabar.
- **POST** — modal "Comunidade" (`src/utils/convertkit.js`), que cadastra e-mail/nome no ConvertKit via `fetch` com `method: 'POST'`.

## Pendências

- Trocar as imagens placeholder em `src/images/` pelas fotos reais (mesmos nomes de arquivo, ou ajuste os imports).
- `AuthModal` e `FeaturedProduct` ainda são só front-end — sem back-end conectado (login, cadastro e "Comprar" não enviam pra lugar nenhum ainda).
- Rota `/clima` consome a Open-Meteo direto do front (sem passar por um proxy próprio ainda).
