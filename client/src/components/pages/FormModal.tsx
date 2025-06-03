import { useState } from 'react'
import styles from '../../styles/pages/FormModal.module.css'
import aiva_button from '../../assets/animations/avatar-animation-white.json'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import logo_modal from '../../assets/logo-div.png'
import Lottie from 'lottie-react'

type FormModalProps = {
  onClose: () => void;
};


const FormModal: React.FC<FormModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', specialty: '', phone: '', consent: false});
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    specialty: '',
    phone: '',
    consent: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const specialties = [
    { value:'Select', label: t('select')},
    { value: 'General', label: t('general') },
    { value: 'pediatrician', label: t('pediatrician') },
    { value: 'Cardiologist', label: t('cardiologist') },
    { value: 'Dermatologist', label: t('dermatologist') },
    { value: 'Neurologist', label: t('neurologist') },
    { value: 'Psychiatrist', label: t('psychiatrist') },
    { value: 'Surgeon', label: t('surgeon') },
    { value: 'Ophthalmologist', label: t('ophthalmologist') },
    { value: 'Gynecologist', label: t('gynecologist') },
    { value: 'Orthopedist', label: t('orthopedist') },
    { value: 'Radiologist', label: t('radiologist') },
    { value: 'Urologist', label: t('urologist') },
    { value: 'Oncologist', label: t('oncologist') },
    { value: 'Endocrinologist', label: t('endocrinologist') },
    { value: 'Otolaryngologist', label: t('otolaryngologist') },
    { value: 'Other', label: t('other') }
  ]

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newErrors = {
      name: formData.name ? '' : (t('required')),
      email: formData.email ? '' : (t('required')),
      specialty: formData.specialty ? '' : (t('required')),
      phone: formData.phone ? '' : (t('required')),
      consent: formData.consent ? '' : (t('required'))
    };

    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some(error => error !== '')) return;

    setSubmitStatus('sending');

    try {
      const response = await axios.post('https://medsnap-backend.onrender.com/api/v1/GS/send_data_form/', formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('Success: ', response.data);
      setErrors({ name: '', email: '', specialty: '', phone: '', consent: '' });
      setSubmitMessage(t('submit_message'))
      setSubmitStatus('sent');
      setTimeout(() => {
        onClose();
        setSubmitMessage(''); // Optional: clear message after close
        setFormData({
          name: '',
          email: '',
          specialty: '',
          phone: '',
          consent: false
        });
      }, 3000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error", error);
      }
    }
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({ ...formData, phone });
  };

  return (
    <div>
          <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
              <button className={styles.close_button} onClick={onClose}>&times;</button>
              <div className={styles.modal_header}>
                <img src={logo_modal} alt="" />
                <h1 className={styles.modal_title}>{t("something_is_coming")}</h1>
                <p>{t("be_the_first")}</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.modal_form}>
                <div className={styles.form_content}>
                  <label>{t("name")} <span className={styles.required}>*</span>{errors.name && <span className={styles.required}>{errors.name}</span>}</label>
                  <input type="text" name='name' placeholder={t("name")} value={formData.name} onChange={handleChange} />
                  <label>{t("email")} <span className={styles.required}>*</span>{errors.email && <span className={styles.required}>{errors.email}</span>}</label>
                  <input type="email" name='email' placeholder={t("email")} value={formData.email} onChange={handleChange} />
                  <label>{t("specialties")} <span className={styles.required}>*</span>{errors.specialty && <span className={styles.required}>{errors.specialty}</span>}</label>
                  <div className={styles.select_wrapper}>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      
                    >
                      {specialties.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>                  
                  <label>{t("phone_number")} <span className={styles.required}>*</span>{errors.phone && <span className={styles.required}>{errors.phone}</span>}</label>
                  <PhoneInput
                      country={'pt'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: 'phone',
                        placeholder: t('phone_number'),
                      }}
                      inputClass={styles.phone_input}
                      inputStyle={{
                        borderRadius: '50px',
                        fontSize: '13px'
                      }}
                    />
                </div>

                <div className={styles.checkbox}>
                  <input 
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} 
                    
                  />
                  <label htmlFor="consent">{t("receive_early")} <a href="/privacy">{t("privacy_policy")}</a>. {errors.consent && <span className={styles.required}>{errors.consent}</span>}</label>
                </div> 

                <button type='submit' className={styles.submit}>
                  <span className={styles.buttonContent}>
                    {submitStatus === 'sending'
                        ? t('sending')
                        : submitStatus === 'sent'
                        ? t('sent')
                        : t('join')}
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
  )
}

export default FormModal
