import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_CATEGORIES } from '../../data/faq';
import useJsonLd from '../../hooks/useJsonLd';
import './FaqSection.css';

function FaqSection() {
  const [openId, setOpenId] = useState(null);

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
    <section className="sn-faq" id="perguntas-frequentes">
      <div className="sn-faq__header">
        <h2 className="sn-faq__title">Perguntas Frequentes</h2>
        <p className="sn-faq__subtitle">
          Respostas diretas sobre os territórios e o nomadismo digital, sem enrolação.
        </p>
      </div>

      <div className="sn-faq__categories">
        {FAQ_CATEGORIES.map((category) => (
          <div className="sn-faq__category" key={category.id}>
            <h3 className="sn-faq__category-title">{category.title}</h3>
            <div className="sn-faq__list">
              {category.items.map((item) => {
                const itemId = `${category.id}-${item.question}`;
                const isOpen = openId === itemId;
                return (
                  <div
                    className={`sn-faq__item${isOpen ? ' sn-faq__item_open' : ''}`}
                    key={itemId}
                  >
                    <button
                      type="button"
                      className="sn-faq__question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : itemId)}
                    >
                      <span>{item.question}</span>
                      <span className="sn-faq__icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="sn-faq__answer">
                        <p>{item.answer}</p>
                        {item.linkTo && (
                          <Link className="sn-faq__link" to={item.linkTo}>
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

export default FaqSection;
