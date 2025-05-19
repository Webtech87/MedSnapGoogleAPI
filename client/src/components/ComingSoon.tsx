import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'
import aiva from '../assets/AI-chat-avatar.png'
import chat from '../assets/AI-chat-message-div.jpg'
import face from "../assets/face.jpg"

const ComingSoon = () => {
  return (
    <div>
        <div className={styles.home}>
            <div className={styles.header_container}>
                <h1 className={styles.header}>MedSnap is Coming Soon...</h1>
                <p className={styles.description}>AI powered clinical diary revolutionizing aesthetic medicine and personalized treatments.</p>
                <button className={styles.join_button}>Join the Waitlist</button>
                <div className={styles.faces}>
                  <img src={face} alt="Face" className={styles.img1}/>
                  <img src={face} alt="Face" className={styles.img2}/>
                  <img src={face} alt="Face" className={styles.img3}/>
                  <p className={styles.join_text}>Join our waitlist and get early access + exclusive perks.</p>
                </div>
            </div>
            <div className={styles.aiva}>
                <img src={chat} alt="" className={styles.chat} />
                <img src={aiva} alt="" className={styles.aiva_img}/>
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
        <div className={styles.bg}>
            <img src={bg_img} alt="" />
        </div>

    </div>
    
  )
}

export default ComingSoon
