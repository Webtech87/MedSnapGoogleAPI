import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.jpg'
import ptFlag from '../assets/flag-pt.png'
import gbFlag from '../assets/flag-gb.png'
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import 'react-phone-input-2/lib/style.css';
import { useEffect, useState } from 'react'

type NavbarProps = {
  openModal: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <span>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="medsnap-logo" />
            </Link>
        </span>
        <div className={styles.buttons}>
          <button className={styles.join_button} onClick={openModal}>{t("join_waitlist")}</button>
          <div className={styles.lang_buttons}>
            <button className={styles.pt_button} onClick={() => changeLanguage('pt')}>
              <span>PT </span><img src={ptFlag} alt="PT" style={{width: '25px', height: '25px', marginLeft: '5px'}} />
            </button>
          <div className={styles.separator}></div>
            <button className={styles.gb_button} onClick={() => changeLanguage('en')}>
              <span>EN </span><img src={gbFlag} alt="EN" style={{width: '25px', height: '25px', marginLeft: '5px'}} />
            </button>             
          </div>
        </div>
    </nav>
    
  )
}

export default Navbar
