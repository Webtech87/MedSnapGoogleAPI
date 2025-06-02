import Navbar from './components/Navbar';
import ComingSoon from './components/ComingSoon';
import CookiePolicy from './components/pages/CookiePolicy';
import TermsofUse from './components/pages/TermsofUse';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import FormModal from './components/pages/FormModal';
import CookiesModal from './components/pages/CookiesModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function App () {

  const [showModal, setShowModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);

  const comingSoonRef = useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    setShowModal(true);
    // Scroll to ComingSoon section
    if (comingSoonRef.current) {
      comingSoonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const closeModal = () => setShowModal(false);

  const openCookieModal = () => setShowCookieModal(true);
  const closeCookieModal = () => setShowCookieModal(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Check if cookies have been handled on component mount
  useEffect(() => {
    const cookiePreferences = localStorage.getItem("cookiesAccepted");
    if (cookiePreferences) {
      setCookiesAccepted(true);
    } else {
      // Show cookie modal on first visit
      openCookieModal();
    }
  }, []);

  const handleCookieModalClose = () => {
    localStorage.setItem("cookiesAccepted", "true"); // ✅ Set flag
    setCookiesAccepted(true);
    closeCookieModal();
  };

  const handleCookieIconClick = () => {
    if (comingSoonRef && comingSoonRef.current) {
      comingSoonRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setShowCookieModal(true);
      }, 400); // 400ms delay to let scroll happen smoothly
    } else {
      setShowCookieModal(true);
    }
  };
  
  return (
    <Router>
      {showCookieModal && <CookiesModal onClose={handleCookieModalClose} />}
      <Navbar openModal={openModal}/>
      <Routes>
        <Route
          path="/"
          element={
            <ComingSoon
              openModal={openModal}
              onCookieIconClick={handleCookieIconClick}
              cookiesAccepted={cookiesAccepted}
              ref={comingSoonRef}
            />
          }
        />
        <Route path='/cookies' element={<CookiePolicy />} />         
        <Route path='/terms' element={<TermsofUse />} />         
        <Route path='/privacy' element={<PrivacyPolicy />} />         
      </Routes>
      {showModal && <FormModal onClose={closeModal} />}
    </Router> 
  )
}

export default App
