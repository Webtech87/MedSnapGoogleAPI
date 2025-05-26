import Navbar from './components/Navbar';
import ComingSoon from './components/ComingSoon';
import CookiePolicy from './components/pages/CookiePolicy';
import TermsofUse from './components/pages/TermsofUse';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ComingSoon />} />         
        <Route path='/cookies' element={<CookiePolicy />} />         
        <Route path='/terms' element={<TermsofUse />} />         
        <Route path='/privacy' element={<PrivacyPolicy />} />         
      </Routes>
    </Router> 
  )
}

export default App
