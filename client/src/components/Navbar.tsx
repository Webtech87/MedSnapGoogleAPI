import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.jpg'
import ptFlag from '../assets/flag-pt.png'
import gbFlag from '../assets/flag-gb.png'
import Lottie from 'lottie-react'
import logo_modal from '../assets/logo-div.png'
import aiva_button from '../assets/animations/avatar-animation-white.json'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <nav className={styles.navbar}>
        <span>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="medsnap-logo" />
            </Link>
        </span>
        <div className={styles.buttons}>
          <button className={styles.join_button} onClick={openModal}>Join the Waitlist</button>
          <div className={styles.lang_buttons}>
            <button className={styles.pt_button}>
              PT <img src={ptFlag} alt="PT" style={{width: '25px', height: '25px', margin: '0 0 0 5px'}}/>
            </button>
            <div className={styles.separator}></div>
            <button className={styles.gb_button}>
              EN <img src={gbFlag} alt="GB" style={{width: '25px', height: '25px', margin: '0 0 0 5px'}}/>
            </button>            
          </div>
        </div>

        {showModal && (
          <div className={styles.modal_overlay} onClick={closeModal}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
              <button className={styles.close_button} onClick={closeModal}>&times;</button>
              <div className={styles.modal_header}>
                <img src={logo_modal} alt="" />
                <h1 className={styles.modal_title}>Something Exciting Is Coming</h1>
                <p>Be the first to know when we launch — join the waitlist and get exclusive early access.</p>
              </div>
              <form className={styles.modal_form}>
                <div  className={styles.form_content}>
                  <label htmlFor="">Name <span className={styles.required}>*</span></label>
                  <input type="text" placeholder='Name' required/>
                  <label htmlFor="">Email <span className={styles.required}>*</span></label>
                  <input type="email" placeholder='Email' required/>
                  <label htmlFor="">Phone Number <span className={styles.required}>*</span></label>
                  <input type="text" placeholder='Phone Number' required/>
                </div>

                <div className={styles.checkbox}>
                  <input type="checkbox" required/>
                  <label htmlFor="">Yes, I’d like to receive early access, updates, and exclusive offers. I’ve read and agree to the <a href="">Privacy Policy</a>.</label>
                </div> 

                <button type='submit' className={styles.submit}>
                  <span className={styles.buttonContent}>
                    Join
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
