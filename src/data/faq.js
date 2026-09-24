import pt from '../content/faq/pt';
import it from '../content/faq/it';
import en from '../content/faq/en';

// Perguntas frequentes por idioma. O texto mora em src/content/faq/.
const FAQ = { pt, it, en };

export function getFaq(lang) {
  return FAQ[lang] || FAQ.pt;
}
