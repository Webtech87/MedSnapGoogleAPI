import { useEffect, useState } from 'react'
import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'
import chat_desktop_en from '../assets/AI-chat-message-div.jpg'
import chat_desktop_pt from '../assets/AI-chat-message-div-pt.png'
import chat_mobile_en from '../assets/ai-chat-mobile.jpg'
import chat_mobile_pt from '../assets/ai-chat-mobile-pt.png'
import face1 from "../assets/image-avatar-black-woman-smiling.png"
import face2 from "../assets/image-avatar-man-smiling.png"
import face3 from "../assets/image-avatar-white-woman-smiling.png"
import Lottie from 'lottie-react'
import animationData from '../assets/animations/medsnap-animation.json'
import logo_modal from '../assets/logo-div.png'
import aiva_button from '../assets/animations/avatar-animation-white.json'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const ComingSoon = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', specialty: '', phone: ''});
  const [submitMessage, setSubmitMessage] = useState('');
  const specialties = [
    {value:'Select', label: t('select')},
    { value: 'Medicine', label: t('medicine') },
    { value: 'Dentist', label: t('dentist') },
    { value: 'Psychologist', label: t('psychologist') },
    { value: 'Educator', label: t('educator') },
    { value: 'Technician', label: t('technician') },
    { value: 'Other', label: t('other') }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const currentLang = i18n.language


  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [functionalEnabled, setFunctionalEnabled] = useState(false);
  const [performanceEnabled, setPerformanceEnabled] = useState(false);
  const [announcementEnabled, setAnnouncementEnabled] = useState(false);


  const savePreferences = () => {
    const preferences = {
      accepted: true,
      analytics: analyticsEnabled,
      functional: functionalEnabled,
      performance: performanceEnabled,
      announcement: announcementEnabled
    };
  localStorage.setItem("cookiesAccepted", JSON.stringify(preferences));
  setShowCookieModal(false);
  };

  const acceptAll = () => {
  setAnalyticsEnabled(true);
  setFunctionalEnabled(true);
  setPerformanceEnabled(true);
  setAnnouncementEnabled(true);
  savePreferences();
  };

  const rejectAll = () => {
  setAnalyticsEnabled(false);
  setFunctionalEnabled(false);
  setPerformanceEnabled(false);
  setAnnouncementEnabled(false);
  savePreferences();
  };



  useEffect (() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted){
    setShowCookieModal(true);
    }
  }, []);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/GS/send_data_form/', formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('Success: ', response.data);
      setSubmitMessage(t('submit_message'))
      closeModal();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error", error);
      }
    }
  };

  return (
    <div className={styles.main_container}>
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
        

        {showModal && (
          <div className={styles.modal_overlay} onClick={closeModal}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
              <button className={styles.close_button} onClick={closeModal}>&times;</button>
              <div className={styles.modal_header}>
                <img src={logo_modal} alt="" />
                <h1 className={styles.modal_title}>{t("something_is_coming")}</h1>
                <p>{t("be_the_first")}</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.modal_form}>
                <div  className={styles.form_content}>
                  <label>{t("name")} <span className={styles.required}>*</span></label>
                  <input type="text" name='name' placeholder={t("name")} value={formData.name} onChange={handleChange} required/>
                  <label>{t("email")} <span className={styles.required}>*</span></label>
                  <input type="email" name='email' placeholder={t("email")} value={formData.email} onChange={handleChange} required/>
                  <label>{t("specialties")} <span className={styles.required}>*</span></label>
                  <div className={styles.select_wrapper}>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                    >
                      {specialties.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>                  
                  <label>{t("phone_number")} <span className={styles.required}>*</span></label>
                  <input type="text" name='phone' placeholder={t("phone_number")} value={formData.phone} onChange={handleChange} required/>
                </div>

                <div className={styles.checkbox}>
                  <input type="checkbox" required/>
                  <label htmlFor="">{t("receive_early")} <a href="/privacy">{t("privacy_policy")}</a>.</label>
                </div> 

                <button type='submit' className={styles.submit}>
                  <span className={styles.buttonContent}>
                    {t("join")}
                    <Lottie animationData={aiva_button} className={styles.aiva_button} />
                  </span>
                </button>
                               
              </form>
              {submitMessage && (
                <p className={styles.submit_message}>{submitMessage}</p>
              )}
            </div>
          </div>
        )}

        {showCookieModal && (
          <div className={styles.modal_overlay} onClick={closeModal}>
            <div className={styles.modal_container_cookie} onClick={(e) => e.stopPropagation()}>
              <button className={styles.close_button} onClick={closeModal} aria-label='Close Button'>&times;</button>
              <div className={styles.modal_header}>
                <img src={logo_modal} alt="" />
                <h1 className={styles.modal_title}>Customize Consent Preferences</h1>
                <p className={styles.modal_cookies_p}>We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies in each  consent category below. <br />
                Cookies categorized  as "Necessary" are stored on your browser as they essential for enabling basic functionalities of the website.</p>
              </div>
              <form className={styles.modal_form}>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Necessary</span>
                  <button type="button" className={`${styles.plusToggle} ${styles.enabled}`}>
                    ✓
                  </button>
                </div>
              </div>
              
              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Analytics</span>
                  <button
                    type="button"
                    className={`${styles.plusToggle} ${analyticsEnabled ? styles.enabled : ''}`}
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  >
                    {analyticsEnabled ? '✓' : '+'}
                  </button>
         
                </div>
              </div>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Functional</span>
                  <button
                    type="button"
                    className={`${styles.plusToggle} ${functionalEnabled ? styles.enabled : ''}`}
                    onClick={() => setFunctionalEnabled(!functionalEnabled)}
                  >
                    {functionalEnabled ? '✓' : '+'}
                  </button>

                </div>
              </div>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Performance</span>
                  <button
                    type="button"
                    className={`${styles.plusToggle} ${performanceEnabled ? styles.enabled : ''}`}
                    onClick={() => setPerformanceEnabled(!performanceEnabled)}
                  >
                    {performanceEnabled ? '✓' : '+'}
                  </button>

                </div>
              </div>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Announcement</span>
                  <button
                    type="button"
                    className={`${styles.plusToggle} ${announcementEnabled ? styles.enabled : ''}`}
                    onClick={() => setAnnouncementEnabled(!announcementEnabled)}
                  >
                    {announcementEnabled ? '✓' : '+'}
                  </button>

                </div>
              </div>
                 
              <div className={styles.form_btns}>
                <button onClick={rejectAll}>
                  <span className={styles.buttonContent}>
                    Reject
                    <Lottie animationData={aiva_button} className={styles.aiva_button} />
                  </span>
                </button>
                <button onClick={savePreferences} >
                  <span className={styles.buttonContent}>
                    Save Preferences
                    <Lottie animationData={aiva_button} className={styles.aiva_button} />
                  </span>
                </button>
                <button onClick={acceptAll}>
                  <span className={styles.buttonContent}>
                    Accept All
                    <Lottie animationData={aiva_button} className={styles.aiva_button} />
                  </span>
                </button>
              </div>
                               
              </form>
            </div>
          </div>
        )}
    </div>
    
  )
}

export default ComingSoon
