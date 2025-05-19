import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={'/'} className={styles.logo}>
        <span>MedSnap</span>
      </Link>
      <button className={styles.join_button}>Join the wishlist</button>
    </nav>
  )
}

export default Navbar
