import { useState } from 'react'
import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'
import chat_desktop from '../assets/AI-chat-message-div.jpg'
import chat_mobile from '../assets/ai-chat-mobile.jpg'
import face1 from "../assets/image-avatar-black-woman-smiling.png"
import face2 from "../assets/image-avatar-man-smiling.png"
import face3 from "../assets/image-avatar-white-woman-smiling.png"
import Lottie from 'lottie-react'
import animationData from '../assets/animations/medsnap-animation.json'
import logo_modal from '../assets/logo-div.png'
import aiva_button from '../assets/animations/avatar-animation-white.json'

const ComingSoon = () => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  return (
    <div className={styles.main_container}>
        <div className={styles.bg}>
            <img src={bg_img} alt="" />
        </div>
        <div className={styles.home}>
            <div className={styles.header_container}>
                <h1 className={styles.header}>MedSnap is Coming Soon...</h1>
                <p className={styles.description}>AI powered clinical diary revolutionizing aesthetic medicine and personalized treatments.</p>
                <div className={styles.aiva_mobile}>
                  <Lottie animationData={animationData} loop={true} />
                </div>
                <button className={styles.join_button} onClick={openModal}>Join the Waitlist</button>
                <div className={styles.faces}>
                  <div className={styles.faces_img}>
                    <img src={face1} alt="Face" className={styles.img1}/>
                    <img src={face2} alt="Face" className={styles.img2}/>
                    <img src={face3} alt="Face" className={styles.img3}/>
                  </div>                  
                  <p className={styles.join_text}>Join our waitlist and get early access + exclusive perks.</p>
                </div>
            </div>
            <div className={styles.aiva}>
                <img src={chat_desktop} alt="" className={styles.chat_desktop} />
                <img src={chat_mobile} alt="" className={styles.chat_mobile} />
                <div className={styles.aiva_desktop}>
                  <Lottie animationData={animationData} loop={true} />
                </div>
            </div>       
        </div>
        <div className={styles.footer}>
          <div className={styles.copyright}>
            <p>© 2025 Medsnap. All rights reserved.</p>
          </div>
          <div className={styles.links}>
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookies Policy</a>
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
    </div>
    
  )
}

export default ComingSoon
