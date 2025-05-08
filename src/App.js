import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsappChat from './components/WhatsappChat';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import PlanDetail from "./pages/PlanDetail";
import HomePage from './pages/HomePage';
import Features from './components/Features'; // For /features route
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/pricing/:slug" element={<PlanDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/features" element={<Features />} />
        {/* Commenting out login/signup until needed */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <WhatsappChat />
      <Footer />
    </Router>
    
  );
  
}



export default App;
