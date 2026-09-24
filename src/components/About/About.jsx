import aboutImg from '../../images/about-cover.jpg';
import { useLang } from '../../i18n/LanguageContext';
import './About.css';

function About() {
  const { t } = useLang();

  return (
    <section className="sn-about" id="sobre">
      <div className="sn-about__image-wrap">
        <img className="sn-about__image" src={aboutImg} alt={t('about.imageAlt')} />
      </div>
      <div className="sn-about__content">
        <h2 className="sn-about__title">{t('about.title')}</h2>
        {t('about.paragraphs').map((text) => (
          <p className="sn-about__text" key={text.slice(0, 32)}>{text}</p>
        ))}
        <p className="sn-about__signature">{t('about.signature')}</p>
      </div>
    </section>
  );
}

export default About;
