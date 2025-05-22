import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.jpg'
import ptFlag from '../assets/flag-pt.png'
import gbFlag from '../assets/flag-gb.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <span>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="medsnap-logo" />
            </Link>
        </span>
        <div className={styles.buttons}>
          <button className={styles.join_button}>Join the Waitlist</button>
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
    </nav>
  )
}

export default Navbar
