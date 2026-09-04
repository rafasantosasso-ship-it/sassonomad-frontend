# Sasso Nomad — Front-end

## Rodar localmente

```
npm install
npm run dev
```

## Pendências

- Trocar as imagens placeholder em `src/images/` pelas fotos reais (mesmos nomes de arquivo, ou ajuste os imports).
- Fontes: se quiser usar Fraunces + IBM Plex Sans de verdade, baixe os `.woff2` e coloque em `src/assets/fonts/` com os nomes indicados nos `@font-face` do `src/index.css`. Sem isso, cai no fallback Georgia/system-ui automaticamente.
- `AuthModal` e `FeaturedProduct` ainda são só front-end — sem back-end conectado (login, cadastro e "Comprar" não enviam pra lugar nenhum ainda).
- Rota `/clima` consome a Open-Meteo direto do front (sem passar pelo back ainda).
