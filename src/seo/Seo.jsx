import { createContext, useContext, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import {
  LANGS, LANG_META, SITE_URL,
} from '../i18n/config';
import { absoluteUrl, localePath } from '../i18n/routes';
import defaultImage from '../images/about-cover.jpg';

// Na pré-renderização (Node), o <Seo> da página preenche este objeto e o
// script de build injeta as tags no HTML. No navegador ele fica null e as
// tags são aplicadas direto no <head>.
export const HeadCollectorContext = createContext(null);

const ATTR = 'data-sn-head';

function toAbsolute(src) {
  if (!src) return undefined;
  return /^https?:\/\//.test(src) ? src : `${SITE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
}

export function buildHead({
  lang, title, description, routeKey, image, type = 'website', noindex = false, jsonLd,
}) {
  const meta = LANG_META[lang];
  const tags = [];
  const url = routeKey ? absoluteUrl(localePath(routeKey, lang)) : undefined;
  const img = toAbsolute(image || defaultImage);

  if (description) tags.push({ tag: 'meta', attrs: { name: 'description', content: description } });
  if (noindex) tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, follow' } });

  if (url && !noindex) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
    LANGS.forEach((l) => {
      tags.push({
        tag: 'link',
        attrs: { rel: 'alternate', hreflang: l, href: absoluteUrl(localePath(routeKey, l)) },
      });
    });
    tags.push({
      tag: 'link',
      attrs: {
        rel: 'alternate',
        hreflang: 'x-default',
        href: routeKey === 'home' ? `${SITE_URL}/` : absoluteUrl(localePath(routeKey, 'en')),
      },
    });
  }

  const og = {
    'og:site_name': 'Sasso Nomad',
    'og:type': type,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:image': img,
    'og:locale': meta.ogLocale,
  };
  Object.entries(og).forEach(([property, content]) => {
    if (content) tags.push({ tag: 'meta', attrs: { property, content } });
  });
  LANGS.filter((l) => l !== lang).forEach((l) => {
    tags.push({ tag: 'meta', attrs: { property: 'og:locale:alternate', content: LANG_META[l].ogLocale } });
  });
  tags.push({ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } });

  const scripts = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);

  return {
    htmlLang: meta.htmlLang, title, tags, jsonLd: scripts,
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Usado só no build (pré-renderização).
export function headToHtml(head) {
  const parts = [`<title>${escapeHtml(head.title)}</title>`];
  head.tags.forEach(({ tag, attrs }) => {
    const attrText = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ');
    parts.push(`<${tag} ${ATTR} ${attrText}>`);
  });
  head.jsonLd.forEach((data) => {
    const json = JSON.stringify(data).replace(/</g, '\\u003c');
    parts.push(`<script type="application/ld+json" ${ATTR}>${json}</script>`);
  });
  return parts.join('\n    ');
}

function applyHead(head) {
  document.documentElement.lang = head.htmlLang;
  document.title = head.title;
  document.head.querySelectorAll(`[${ATTR}]`).forEach((node) => node.remove());

  head.tags.forEach(({ tag, attrs }) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    el.setAttribute(ATTR, '');
    document.head.appendChild(el);
  });
  head.jsonLd.forEach((data) => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(data);
    el.setAttribute(ATTR, '');
    document.head.appendChild(el);
  });
}

/**
 * <Seo> em cada página: título, description, canonical, hreflang (as três
 * versões + x-default), Open Graph e dados estruturados (JSON-LD).
 */
function Seo(props) {
  const { lang } = useLang();
  const collector = useContext(HeadCollectorContext);
  const head = buildHead({ ...props, lang });

  if (collector) collector.head = head;

  const signature = JSON.stringify(head);
  useEffect(() => {
    applyHead(JSON.parse(signature));
  }, [signature]);

  return null;
}

export default Seo;
