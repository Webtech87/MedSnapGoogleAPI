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
import axios from 'axios'

const Navbar = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
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


  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
              <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
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
          </div>
        )}        
    </nav>
  )
}

export default Navbar
