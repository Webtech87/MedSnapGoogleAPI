import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
    const { t } = useTranslation();
  return (
    <div className="terms">
        <h1>{t("cookie_policy")}</h1>

      <p>{t("our_website")}</p>

      <h2>{t("what_are_cookie")}?</h2>
      <p>{t("what_are_cookie.1")}</p>

      <h2>{t("how_we_use")}</h2>
      <p>{t("how_we_use.1")}</p>

      <h2>{t("types_cookies")}</h2>
      <ul>
        <li><strong>{t("essential_cookies")}</strong> {t("essentialcookies.1")}</li>
        <li><strong>{t("performance_cookies")}</strong>{t("performance_cookies.1")}</li>
        <li><strong>{t("marketing_cookies")}</strong> {t("marketing_cookies.1")}</li>
      </ul>

      <h2>{t("managing_cookies")}</h2>
      <p>{t("managing_cookies.1")}</p>

      <h2>{t("consent")}</h2>
      <p>{t("consent.1")}</p>
      
    </div>
  )
}

export default CookiePolicy
