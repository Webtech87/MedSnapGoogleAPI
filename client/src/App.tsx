import Navbar from './components/Navbar';
import ComingSoon from './components/ComingSoon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ComingSoon />} />         
      </Routes>
    </Router> 
  )
}

export default App
