import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <span>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="medsnap-logo" />
            </Link>
        </span>
      
        <button className={styles.join_button}>Join the wishlist</button>
    </nav>
  )
}

export default Navbar
