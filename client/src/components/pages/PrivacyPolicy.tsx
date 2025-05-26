import { useTranslation } from "react-i18next";
import bg_img from '../../assets/logo-icon-background-accent.png';

const PrivacyPolicy = () => {
    const { t } = useTranslation();
  return (
    <div className="terms">
        <div className="bg">
            <img src={bg_img} alt="" />
        </div>
        <h1>{t("privacy_policy")}</h1>

            <p>{t("pp.respect")}</p>

            <h2>{t("data_collec")}</h2>
            <p>{t("data.collec.1")}</p>

            <h2>{t("use_data")}</h2>
            <p>{t("use_data.1")}</p>

            <h2>{t("data_sharing")}</h2>
            <p>{t("data_sharing.1")}</p>

            <h2>{t("security")}</h2>
            <p>{t("security.1")}</p>

            <h2>{t("your_rights")}</h2>
            <p>{t("your_rights.1")}</p>

            <h2>{t("contact")}</h2>
            <p>{t("contact.1")}</p>
      
    </div>
  )
}

export default PrivacyPolicy
