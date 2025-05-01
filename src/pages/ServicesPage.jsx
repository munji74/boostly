import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from '../components/Services';

function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}

export default ServicesPage;
