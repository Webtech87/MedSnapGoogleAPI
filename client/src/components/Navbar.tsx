import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.jpg'
import ptFlag from '../assets/flag-pt.png'
import gbFlag from '../assets/flag-gb.png'
import Lottie from 'lottie-react'
import logo_modal from '../assets/logo-div.png'
import aiva_button from '../assets/animations/avatar-animation-white.json'
import { useTranslation } from "react-i18next";
import i18n from '../i18n'; 

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
        <span>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="medsnap-logo" />
            </Link>
        </span>
        <div className={styles.buttons}>
          <button className={styles.join_button} onClick={openModal}>{t("join_waitlist")}</button>
          <div className={styles.lang_buttons}>
            <button className={styles.pt_button} onClick={() => changeLanguage('pt')}>
              PT <img src={ptFlag} alt="PT" style={{width: '25px', height: '25px', marginLeft: '5px'}} />
            </button>
          <div className={styles.separator}></div>
            <button className={styles.gb_button} onClick={() => changeLanguage('en')}>
              EN <img src={gbFlag} alt="EN" style={{width: '25px', height: '25px', marginLeft: '5px'}} />
            </button>             
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
              <form className={styles.modal_form}>
                <div  className={styles.form_content}>
                  <label htmlFor="">{t("name")} <span className={styles.required}>*</span></label>
                  <input type="text" placeholder={t("name")} required/>
                  <label htmlFor="">{t("email")} <span className={styles.required}>*</span></label>
                  <input type="email" placeholder={t("email")} required/>
                  <label htmlFor="">{t("phone_number")} <span className={styles.required}>*</span></label>
                  <input type="text" placeholder={t("phone_number")} required/>
                </div>

                <div className={styles.checkbox}>
                  <input type="checkbox" required/>
                  <label htmlFor="">{t("receive_early")} <a href="">{t("privacy_policy")}</a>.</label>
                </div> 

                <button type='submit' className={styles.submit}>
                  <span className={styles.buttonContent}>
                    {t("join")}
                    <Lottie animationData={aiva_button} className={styles.aiva_button} />
                  </span>
                </button>
                               
              </form>
            </div>
          </div>
        )}        
    </nav>
  )
}

export default Navbar
