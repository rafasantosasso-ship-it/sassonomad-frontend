import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_CATEGORIES } from '../../data/faq';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import useJsonLd from '../../hooks/useJsonLd';
import './FaqPage.css';

function FaqPage() {
  const [openId, setOpenId] = useState(null);

  useDocumentMeta(
    'Perguntas Frequentes | Sasso Nomad',
    'Dúvidas comuns sobre os territórios, o nomadismo digital e como funciona a Sasso Nomad — direto ao ponto, sem enrolação.'
  );

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_CATEGORIES.flatMap((category) =>
        category.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        }))
      ),
    }),
    []
  );

  useJsonLd('sn-faq-jsonld', jsonLd);

  return (
    <section className="sn-faq-page">
      <header className="sn-faq-page__header">
        <h1 className="sn-faq-page__title">Perguntas Frequentes</h1>
        <p className="sn-faq-page__intro">
          Dúvidas comuns sobre os territórios, o nomadismo digital e como funciona a Sasso Nomad —
          direto ao ponto, sem enrolação.
        </p>
      </header>

      <div className="sn-faq-page__categories">
        {FAQ_CATEGORIES.map((category) => (
          <div className="sn-faq-page__category" key={category.id}>
            <h2 className="sn-faq-page__category-title">{category.title}</h2>
            <div className="sn-faq-page__list">
              {category.items.map((item) => {
                const itemId = `${category.id}-${item.question}`;
                const isOpen = openId === itemId;
                return (
                  <div
                    className={`sn-faq-page__item${isOpen ? ' sn-faq-page__item_open' : ''}`}
                    key={itemId}
                  >
                    <button
                      type="button"
                      className="sn-faq-page__question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : itemId)}
                    >
                      <span>{item.question}</span>
                      <span className="sn-faq-page__icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="sn-faq-page__answer">
                        <p>{item.answer}</p>
                        {item.linkTo && (
                          <Link className="sn-faq-page__link" to={item.linkTo}>
                            {item.linkLabel} →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqPage;
