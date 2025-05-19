import styles from '../styles/ComingSoon.module.css'
import bg_img from '../assets/logo-icon-background-accent.png'

const ComingSoon = () => {
  return (
    <div>
        <div className={styles.home}>
            <div className={styles.header_container}>
                <h1 className={styles.header}>MedSnap is Coming Soon...</h1>
                <p className={styles.description}>AI powered clinical diary revolutionizing aesthetic medicine and personalized treatments.</p>
            </div>       
        </div>
        <div className={styles.bg}>
            <img src={bg_img} alt="" />
        </div>

    </div>
    
  )
}

export default ComingSoon
