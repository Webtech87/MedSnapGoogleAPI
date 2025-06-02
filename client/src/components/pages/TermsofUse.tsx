
import { useTranslation } from "react-i18next";
import bg_img from '../../assets/logo-icon-background-accent.png'
import styles from '../../styles/pages/FooterLinks.module.css'


const TermsofUse = () => {
    const { t } = useTranslation();
 
  return (
    <div className={styles.terms}>
      <div className="bg">
            <img src={bg_img} alt="" />
      </div>
        <h1>{t("termsofUse")}</h1>
      
      <h2>{t("terms.1")}</h2>
      <p>{t("terms.1p")}</p>

      <h2>{t("terms.2")}</h2>
      <p>{t("terms.2p")}</p>

      <h2>{t("terms.3")}</h2>
      <p>{t("terms.3p")}</p>

      <h2>{t("terms.4")}</h2>
      <p>{t("terms.4p")}</p>

      <h2>{t("terms.5")}</h2>
      <p>{t("terms.5p")}</p>

      <h2>{t("terms.6")}</h2>
      <p>{t("terms.6p")}</p>

      <h2>{t("terms.7")}</h2>
      <p>{t("terms.7p")}</p>

      <h2>{t("terms.8")}</h2>
      <p>{t("terms.8p")}</p>

      <h2>{t("terms.9")}</h2>
      <p>{t("terms.9p")}<a href="mailto:info@med-snap.com">info@med-snap.com</a></p>
    
    
    </div>
  )
}

export default TermsofUse;
