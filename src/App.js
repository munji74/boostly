import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhatsappChat from './components/WhatsappChat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhatsappChat />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
