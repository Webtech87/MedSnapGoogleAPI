import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'
import chat_desktop_en from '../assets/AI-chat-message-div.png'
import chat_desktop_pt from '../assets/AI-chat-message-div-pt.png'
import chat_mobile_en from '../assets/ai-chat-mobile.png'
import chat_mobile_pt from '../assets/ai-chat-mobile-pt.png'
import face1 from "../assets/image-avatar-black-woman-smiling.png"
import face2 from "../assets/image-avatar-man-smiling.png"
import face3 from "../assets/image-avatar-white-woman-smiling.png"
import Lottie from 'lottie-react'
import animationData from '../assets/animations/medsnap-animation.json'
import { useTranslation } from 'react-i18next'
import { forwardRef } from 'react'

type ComingSoonProps = {
  openModal: () => void;
  cookiesAccepted: boolean;
  onCookieIconClick: () => void;
};

const ComingSoon = forwardRef<HTMLDivElement, ComingSoonProps>(
  ({ openModal, cookiesAccepted, onCookieIconClick }, ref) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
 

  return (
    <div className={styles.main_container} ref={ref}>
        <div className={styles.bg}>
            <img src={bg_img} alt="" />
        </div>
        <div className={styles.home}>
            <div className={styles.header_container}>
                <h1 className={styles.header}>{t("medsnap_coming-soon")}</h1>
                <p className={styles.description}>{t("ai_clinical_diary_description")}</p>
                <div className={styles.aiva_mobile}>
                  <Lottie animationData={animationData} loop={true} />
                </div>
                <button className={styles.join_button} onClick={openModal}>{t("join_waitlist")}</button>
                <div className={styles.faces}>
                  <div className={styles.faces_img}>
                    <img src={face1} alt="Face" className={styles.img1}/>
                    <img src={face2} alt="Face" className={styles.img2}/>
                    <img src={face3} alt="Face" className={styles.img3}/>
                  </div>                    
                  <p className={styles.join_text}>{t("waitlist_acess_perks")}</p>
                </div>
            </div>
            <div className={styles.aiva}>
                <img src={currentLang === 'pt' ? chat_desktop_pt : chat_desktop_en} alt="" className={styles.chat_desktop} />
                <img src={currentLang === 'pt' ? chat_mobile_pt : chat_mobile_en} alt="" className={styles.chat_mobile} />
                <div className={styles.aiva_desktop}>
                  <Lottie animationData={animationData} loop={true} />
                </div>
            </div>               
        </div>
        
        <div className={styles.footer}>
          <div className={styles.copyright}>
            <p>{t("rights")}</p>
          </div>
          <div className={styles.links}>
            <a href="/terms">{t("terms_use")}</a>
            <a href="/privacy">{t("privacy_policy")}</a>
            <a href="/cookies">{t("cookie_policy")}</a>
          </div>
        </div>

        {/* Persistent Cookie Icon */}
        {cookiesAccepted && (
          <button 
            className={styles.cookie_icon_button}
            onClick={onCookieIconClick}
            aria-label="Manage cookie preferences"
            title="Cookie Preferences"
          >
            <div className={styles.cookie_icon}>
              🍪
            </div>
          </button>
        )}
    </div>
  )
});

export default ComingSoon