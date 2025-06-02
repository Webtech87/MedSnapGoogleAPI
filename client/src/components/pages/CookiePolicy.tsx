import { useTranslation } from "react-i18next";
import bg_img from '../../assets/logo-icon-background-accent.png';
import styles from '../../styles/pages/FooterLinks.module.css'

const CookiePolicy = () => {
    const { t } = useTranslation();
  return (
    <div className={styles.terms}>
        <div className="bg">
            <img src={bg_img} alt="" />
        </div>
        <h1>{t("cookie_policy")}</h1>

      <p>{t("our_website")}</p>

      <h2>{t("what_are_cookie")}?</h2>
      <p>{t("what_are_cookie.1")}</p>

      <h2>{t("how_we_use")}</h2>
      <p>{t("how_we_use.1")}</p>

      <h2>{t("types_cookies")}</h2>
      <p><strong>{t("essential_cookies")}</strong><br/> {t("essentialcookies.1")}</p>
      <p><strong>{t("performance_cookies")}</strong><br/> {t("performance_cookies.1")}</p>
      <p><strong>{t("marketing_cookies")}</strong><br/> {t("marketing_cookies.1")}</p>

      <h2>{t("managing_cookies")}</h2>
      <p>{t("managing_cookies.1")}</p>

      <h2>{t("consent")}</h2>
      <p>{t("consent.1")}</p>
      
    </div>
  )
}

export default CookiePolicy
