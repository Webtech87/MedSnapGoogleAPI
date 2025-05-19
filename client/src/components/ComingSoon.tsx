import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'

const ComingSoon = () => {
  return (
    <div>
        <div className={styles.home}>
            <div>
                <h1>MedSnap is Coming Soon...</h1>
                <p>AI powered clinical diary revolutionizing aesthetic medicine and personalized treatments.</p>
            </div>       
        </div>
        <div className={styles.bg}>
            <img src={bg_img} alt="" />
        </div>

    </div>
    
  )
}

export default ComingSoon
