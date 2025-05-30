import styles from '../../styles/pages/CookiesModal.module.css'
import logo_modal from '../../assets/logo-div.png'
import { useState, useEffect } from 'react';

type CookiesModalProps = {
  onClose: () => void;
};

const CookiesModal: React.FC<CookiesModalProps> = ({ onClose }) => {
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
    const [functionalEnabled, setFunctionalEnabled] = useState(true);
    const [performanceEnabled, setPerformanceEnabled] = useState(true);
    const [announcementEnabled, setAnnouncementEnabled] = useState(true);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const savePreferences = () => {
        const preferences = {
            accepted: true,
            analytics: analyticsEnabled,
            functional: functionalEnabled,
            performance: performanceEnabled,
            announcement: announcementEnabled
        };
        localStorage.setItem("cookiesAccepted", JSON.stringify(preferences));
        onClose();
    };

    const acceptAll = () => {
        setAnalyticsEnabled(true);
        setFunctionalEnabled(true);
        setPerformanceEnabled(true);
        setAnnouncementEnabled(true);
        const preferences = {
            accepted: true,
            analytics: true,
            functional: true,
            performance: true,
            announcement: true
        };
        localStorage.setItem("cookiesAccepted", JSON.stringify(preferences));
        onClose();
    };

    const rejectAll = () => {
        setAnalyticsEnabled(false);
        setFunctionalEnabled(false);
        setPerformanceEnabled(false);
        setAnnouncementEnabled(false);
        const preferences = {
            accepted: true,
            analytics: false,
            functional: false,
            performance: false,
            announcement: false
        };
        localStorage.setItem("cookiesAccepted", JSON.stringify(preferences));
        onClose();
    };

    const cookieCategories = [
        {
            name: 'Necessary',
            enabled: true,
            disabled: true,
            description: 'These cookies are essential for the website to function properly and cannot be disabled.'
        },
        {
            name: 'Analytics',
            enabled: analyticsEnabled,
            setter: setAnalyticsEnabled,
            description: 'Help us understand how visitors interact with our website by collecting information anonymously.'
        },
        {
            name: 'Functional',
            enabled: functionalEnabled,
            setter: setFunctionalEnabled,
            description: 'Enable enhanced functionality and personalization, such as remembering your preferences.'
        },
        {
            name: 'Performance',
            enabled: performanceEnabled,
            setter: setPerformanceEnabled,
            description: 'Allow us to monitor and improve the performance and speed of our website.'
        },
        {
            name: 'Announcement',
            enabled: announcementEnabled,
            setter: setAnnouncementEnabled,
            description: 'Enable notifications about updates, features, and relevant information.'
        }
    ];

    return (
        <div className={styles.modal_overlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
            <div 
                className={styles.modal_container_cookie} 
                onClick={(e) => e.stopPropagation()}
                role="document"
            >
                <button 
                    className={styles.close_button_cookie}
                    onClick={onClose}
                    aria-label="Close cookie preferences"
                    type="button"
                >
                    ×
                </button>
                
                <div className={styles.modal_header_cookie}>
                    <div className={styles.logo_container}>
                        <img src={logo_modal} alt="Company logo" className={styles.modal_logo} />
                    </div>
                    <h1 id="cookie-modal-title" className={styles.modal_title_cookie}>
                        Customize Consent Preferences
                    </h1>
                    <p className={styles.modal_cookies_p}>
                        We use cookies to help you navigate efficiently and perform certain functions. 
                        You will find detailed information about all cookies in each consent category below.
                        <br />
                        <br />
                        Cookies categorized as "Necessary" are stored on your browser as they are essential 
                        for enabling basic functionalities of the website.
                    </p>
                </div>
                
                <div className={styles.modal_content}>
                    <form className={styles.modal_form_cookie} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.cookie_sections_container}>
                            {cookieCategories.map((category, index) => (
                                <div key={index} className={styles.cookie_section}>
                                    <div className={styles.cookie_header}>
                                        <div className={styles.cookie_info}>
                                            <span className={styles.cookie_name}>{category.name}</span>
                                            <p className={styles.cookie_description}>{category.description}</p>
                                        </div>
                                        <button
                                            type="button"
                                            className={`${styles.toggle_button} ${
                                                category.enabled ? styles.enabled_cookies : styles.disabled_cookies
                                            }`}
                                            onClick={() => category.setter && category.setter(!category.enabled)}
                                            disabled={category.disabled}
                                            aria-label={`${category.enabled ? 'Disable' : 'Enable'} ${category.name} cookies`}
                                        >
                                            {category.enabled ? '✓' : '×'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className={styles.form_btns}>
                            <button 
                                type="button" 
                                onClick={rejectAll}
                                className={styles.reject_btn}
                                aria-label="Reject all optional cookies"
                            >
                                <span className={styles.buttonContent}>Reject All</span>
                            </button>
                            <button 
                                type="button" 
                                onClick={savePreferences}
                                className={styles.save_btn}
                                aria-label="Save current cookie preferences"
                            >
                                <span className={styles.buttonContent}>Save Preferences</span>
                            </button>
                            <button 
                                type="button" 
                                onClick={acceptAll}
                                className={styles.accept_btn}
                                aria-label="Accept all cookies"
                            >
                                <span className={styles.buttonContent}>Accept All</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CookiesModal;