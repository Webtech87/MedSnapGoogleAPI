import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'
import chat_desktop from '../assets/AI-chat-message-div.jpg'
import chat_mobile from '../assets/ai-chat-mobile.jpg'
import face from "../assets/face.jpg"
import Lottie from 'lottie-react'
import animationData from '../assets/animations/medsnap-animation.json'

const ComingSoon = () => {
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
                <button className={styles.join_button}>Join the Waitlist</button>
                <div className={styles.faces}>
                  <div className={styles.faces_img}>
                    <img src={face} alt="Face" className={styles.img1}/>
                    <img src={face} alt="Face" className={styles.img2}/>
                    <img src={face} alt="Face" className={styles.img3}/>
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
    </div>
    
  )
}

export default ComingSoon
