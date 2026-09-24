import ShareButton from '../ShareButton/ShareButton';
import { useLang } from '../../i18n/LanguageContext';
import './GuideArticleLayout.css';

function GuideArticleLayout({ guide, children }) {
  const { t } = useLang();
  const {
    path, pageEyebrow, pageTitle, pageDek, image, alt,
  } = guide;

  return (
    <article className="sn-guide-article">
      <div className="sn-guide-article__hero">
        <img className="sn-guide-article__hero-img" src={image} alt={alt} />
        <ShareButton
          size="hero"
          path={path}
          title={pageTitle}
          label={t('share.label', { title: pageTitle })}
        />
      </div>

      <header className="sn-guide-article__header">
        <p className="sn-guide-article__eyebrow">{pageEyebrow}</p>
        <h1 className="sn-guide-article__title">{pageTitle}</h1>
        <p className="sn-guide-article__lede">{pageDek}</p>
      </header>

      <div className="sn-guide-article__body">{children}</div>
    </article>
  );
}

export default GuideArticleLayout;
