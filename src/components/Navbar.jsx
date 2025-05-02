// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2">
          <img src="/logo.png" alt="Boostly Logo" className="h-14 w-auto" />
        </Link>


        {/* Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/features" className="hover:text-blue-500 hover:underline underline-offset-4">Features</Link>
          <Link to="/pricing" className="hover:text-blue-500">Pricing</Link>
          <Link to="/about" className="hover:text-blue-500">About Us</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="hover:text-blue-500 focus:outline-none"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute mt-2 bg-white border rounded shadow-md w-40">
                <Link to="/services#marketing" className="block px-4 py-2 hover:bg-blue-50">Marketing</Link>
                <Link to="/services#design" className="block px-4 py-2 hover:bg-blue-50">Design</Link>
                <Link to="/services#social" className="block px-4 py-2 hover:bg-blue-50">Social Media</Link>
              </div>
            )}
          </div>

          <Link to="/login" className="hover:text-blue-500">Login</Link>
          <Link to="/signup" className="hover:text-blue-500 font-semibold">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
