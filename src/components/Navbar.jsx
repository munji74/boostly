// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // icon for toggle button

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left spacer */}
        <div className="w-8 md:hidden" />

        {/* Logo Centered */}
        <Link to="/" className="flex items-center justify-center space-x-2 mx-auto">
          <img src="/logo.png" alt="Boostly Logo" className="h-12 w-auto" />
        </Link>

        {/* Hamburger Toggle */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Links: Desktop */}
      <div className="hidden md:flex justify-center space-x-8 py-2 text-gray-700">
        <Link to="/features" className="hover:text-blue-500">Features</Link>
        <Link to="/pricing" className="hover:text-blue-500">Pricing</Link>
        <Link to="/about" className="hover:text-blue-500">About Us</Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="hover:text-blue-500"
          >
            Services ▾
          </button>
          {servicesOpen && (
            <div className="absolute bg-white border rounded shadow-md mt-2 w-40">
              <Link to="/services#marketing" className="block px-4 py-2 hover:bg-blue-50">Marketing</Link>
              <Link to="/services#design" className="block px-4 py-2 hover:bg-blue-50">Design</Link>
              <Link to="/services#social" className="block px-4 py-2 hover:bg-blue-50">Social Media</Link>
            </div>
          )}
        </div>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
        <Link to="/signup" className="hover:text-blue-500 font-semibold">Signup</Link>
      </div>

      {/* Links: Mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700">
          <Link to="/features" className="block hover:text-blue-500">Features</Link>
          <Link to="/pricing" className="block hover:text-blue-500">Pricing</Link>
          <Link to="/about" className="block hover:text-blue-500">About Us</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left hover:text-blue-500"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="bg-white border rounded shadow-md mt-2 w-full">
                <Link to="/services#marketing" className="block px-4 py-2 hover:bg-blue-50">Marketing</Link>
                <Link to="/services#design" className="block px-4 py-2 hover:bg-blue-50">Design</Link>
                <Link to="/services#social" className="block px-4 py-2 hover:bg-blue-50">Social Media</Link>
              </div>
            )}
          </div>
          <Link to="/login" className="block hover:text-blue-500">Login</Link>
          <Link to="/signup" className="block hover:text-blue-500 font-semibold">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
