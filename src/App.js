import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer'
import LoginPage from './Components/Login/Login';
import About from './About';
import Awards from './Awards';
import CaseStudies from './CaseStudies';
import Contact from './Contact';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsCondition'

import './App.css';

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ['/login'];

  const shouldHideheader = hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      {!shouldHideheader && <Header />}

      <Routes>
         <Route path='/login' element={<LoginPage />} />
         <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/case-studies' element={<CaseStudies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms-conditions' element={<TermsAndConditions />} />

      </Routes>

      {!shouldHideheader && <Footer />}
    </>
  );
}

export default function AppwithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
};