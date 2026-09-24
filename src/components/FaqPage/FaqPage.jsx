import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFaq } from '../../data/faq';
import Seo from '../../seo/Seo';
import { faqSchema } from '../../seo/schema';
import { useLang } from '../../i18n/LanguageContext';
import './FaqPage.css';

function FaqPage() {
  const [openId, setOpenId] = useState(null);
  const { t, lang, path } = useLang();
  const categories = getFaq(lang);

  return (
    <section className="sn-faq-page">
      <Seo
        title={t('seo.faqTitle')}
        description={t('seo.faqDescription')}
        routeKey="faq"
        jsonLd={faqSchema(categories.flatMap((category) => category.items))}
      />
      <header className="sn-faq-page__header">
        <h1 className="sn-faq-page__title">{t('footer.faq')}</h1>
        <p className="sn-faq-page__intro">{t('seo.faqDescription')}</p>
      </header>

      <div className="sn-faq-page__categories">
        {categories.map((category) => (
          <div className="sn-faq-page__category" key={category.id}>
            <h2 className="sn-faq-page__category-title">{category.title}</h2>
            <div className="sn-faq-page__list">
              {category.items.map((item) => {
                const itemId = `${category.id}-${item.question}`;
                const isOpen = openId === itemId;
                return (
                  <div
                    className={`sn-faq-page__item${isOpen ? ' sn-faq-page__item--open' : ''}`}
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
                        {item.link && (
                          <Link
                            className="sn-faq-page__link"
                            to={path(item.link.route, item.link.hash)}
                          >
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
