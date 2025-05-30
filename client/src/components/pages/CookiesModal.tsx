import styles from '../../styles/pages/CookiesModal.module.css'
import logo_modal from '../../assets/logo-div.png'
import { useState } from 'react';

type CookiesModalProps = {
  onClose: () => void;
};

const CookiesModal: React.FC<CookiesModalProps> = ({ onClose }) => {
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
    const [functionalEnabled, setFunctionalEnabled] = useState(true);
    const [performanceEnabled, setPerformanceEnabled] = useState(true);
    const [announcementEnabled, setAnnouncementEnabled] = useState(true);


    const savePreferences = () => {
        const preferences = {
        accepted: true,
        analytics: analyticsEnabled,
        functional: functionalEnabled,
        performance: performanceEnabled,
        announcement: announcementEnabled
        };
    localStorage.setItem("cookiesAccepted", JSON.stringify(preferences));
    onClose();
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

  return (
    <div>
          <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_container_cookie} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modal_header_cookie}>
                <img src={logo_modal} alt="" />
                <h1 className={styles.modal_title_cookie}>Customize Consent Preferences</h1>
                <p className={styles.modal_cookies_p}>We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies in each  consent category below. <br />
                Cookies categorized  as "Necessary" are stored on your browser as they essential for enabling basic functionalities of the website.</p>
              </div>
              <form className={styles.modal_form_cookie}>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Necessary</span>
                  <button type="button" className={styles.enabled_cookies}>
                    ✓
                  </button>
                </div>
              </div>
              
              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Analytics</span>
                  <button
                    type="button"
                    className={analyticsEnabled ? styles.enabled_cookies : styles.disabled_cookies}
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  >
                    {analyticsEnabled ? '✓' : '×'}
                  </button>
         
                </div>
              </div>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Functional</span>
                  <button
                    type="button"
                    className={functionalEnabled ? styles.enabled_cookies : styles.disabled_cookies}
                    onClick={() => setFunctionalEnabled(!functionalEnabled)}
                  >
                    {functionalEnabled ? '✓' : '×'}
                  </button>

                </div>
              </div>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Performance</span>
                  <button
                    type="button"
                    className={performanceEnabled ? styles.enabled_cookies : styles.disabled_cookies}
                    onClick={() => setPerformanceEnabled(!performanceEnabled)}
                  >
                    {performanceEnabled ? '✓' : '×'}
                  </button>

                </div>
              </div>

              <div className={styles.cookie_section}>
                <div className={styles.cookie_header}>
                  <span>Announcement</span>
                  <button
                    type="button"
                    className={announcementEnabled ? styles.enabled_cookies : styles.disabled_cookies}
                    onClick={() => setAnnouncementEnabled(!announcementEnabled)}
                  >
                    {announcementEnabled ? '✓' : '×'}
                  </button>

                </div>
              </div>
                 
              <div className={styles.form_btns}>
                <button type="button" onClick={rejectAll}>
                  <span className={styles.buttonContent}>
                    Reject
                  </span>
                </button>
                <button type="button" onClick={savePreferences} >
                  <span className={styles.buttonContent}>
                    Save Preferences
                  </span>
                </button>
                <button type="button" onClick={acceptAll}>
                  <span className={styles.buttonContent}>
                    Accept All
                  </span>
                </button>
              </div>
                               
              </form>
            </div>
          </div>
    </div>
  )
}

export default CookiesModal
