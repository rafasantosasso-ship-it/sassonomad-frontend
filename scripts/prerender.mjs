// Pré-renderização (roda no fim do `npm run build`).
//
// Para cada página pública, em cada idioma (/pt, /it, /en), gera um HTML
// estático já com o conteúdo e o <head> certo (title, description,
// canonical, hreflang, Open Graph, JSON-LD). O Google indexa esse HTML e os
// previews de link (WhatsApp, Instagram, Pinterest) leem o título/imagem
// certos. No navegador, o React monta por cima normalmente.
//
// Também gera dist/sitemap.xml com as três versões de cada página.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const ssrEntry = fs.readdirSync(ssrDir).find((file) => /^entry-server\.m?js$/.test(file));
const {
  render, LANGS, PUBLIC_ROUTE_KEYS, localePath, SITE_URL,
} = await import(pathToFileURL(path.join(ssrDir, ssrEntry)).href);

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const HEAD_SLOT = /<title>Sasso Nomad<\/title>\s*<!--app-head-->/;
const HTML_SLOT = '<!--app-html-->';

if (!HEAD_SLOT.test(template) || !template.includes(HTML_SLOT)) {
  throw new Error('index.html sem os marcadores <!--app-head--> / <!--app-html-->.');
}

let count = 0;
const problems = [];

LANGS.forEach((lang) => {
  PUBLIC_ROUTE_KEYS.forEach((key) => {
    const url = localePath(key, lang);
    const { html, htmlLang, headHtml } = render(url);

    if (!headHtml) problems.push(`${url}: página sem <Seo>`);
    if (!html || html.length < 200) problems.push(`${url}: HTML vazio`);

    const page = template
      .replace(/<html lang="[^"]*">/, `<html lang="${htmlLang}">`)
      .replace(HEAD_SLOT, headHtml)
      .replace(HTML_SLOT, html);

    const outDir = path.join(distDir, ...url.split('/').filter(Boolean));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), page);
    count += 1;
  });
});

// index.html da raiz: casca vazia (SPA) para as páginas de conta e 404.
fs.writeFileSync(
  templatePath,
  template.replace('<!--app-head-->', '<meta name="robots" content="noindex">').replace(HTML_SLOT, ''),
);

// sitemap.xml com hreflang (as três versões de cada página + x-default).
const today = new Date().toISOString().slice(0, 10);
const urls = [];
PUBLIC_ROUTE_KEYS.forEach((key) => {
  const alternates = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localePath(key, l)}"/>`);
  const xDefault = key === 'home' ? `${SITE_URL}/` : `${SITE_URL}${localePath(key, 'en')}`;
  alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>`);
  LANGS.forEach((lang) => {
    urls.push([
      '  <url>',
      `    <loc>${SITE_URL}${localePath(key, lang)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      ...alternates,
      '  </url>',
    ].join('\n'));
  });
});

fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
);

fs.rmSync(ssrDir, { recursive: true, force: true });

if (problems.length) {
  console.error(`\nPré-renderização com problemas:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}

console.log(`\n✓ ${count} páginas pré-renderizadas (${LANGS.join(', ')}) + sitemap.xml`);
