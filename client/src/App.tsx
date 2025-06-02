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

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      openCookieModal();
    }
  }, []);
  
  return (
    <Router>
      {showCookieModal && <CookiesModal onClose={closeCookieModal} />}
      <Navbar openModal={openModal}/>
      <Routes>
        <Route path='/' element={<ComingSoon openModal={openModal} ref={comingSoonRef} />} />
        <Route path='/cookies' element={<CookiePolicy />} />         
        <Route path='/terms' element={<TermsofUse />} />         
        <Route path='/privacy' element={<PrivacyPolicy />} />         
      </Routes>
      {showModal && <FormModal onClose={closeModal} />}
    </Router> 
  )
}

export default App
