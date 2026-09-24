import Seo from '../../seo/Seo';
import { useLang, pick } from '../../i18n/LanguageContext';
import PrivacyPt from '../../content/privacy/pt';
import PrivacyIt from '../../content/privacy/it';
import PrivacyEn from '../../content/privacy/en';
import '../../styles/AccountPage.css';

const BODIES = { pt: PrivacyPt, it: PrivacyIt, en: PrivacyEn };

/**
 * Política de privacidade (GDPR / LGPD). Linkada no popup da comunidade e
 * no rodapé de todos os e-mails. Texto em src/content/privacy/.
 */
function PrivacyPage() {
  const { t, lang } = useLang();
  const Body = pick(BODIES, lang);

  return (
    <main className="sn-legal">
      <Seo
        title={t('seo.privacyTitle')}
        description={t('seo.privacyDescription')}
        routeKey="privacy"
      />
      <Body />
    </main>
  );
}

export default PrivacyPage;
