import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location]);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`backdrop-blur-lg bg-white/70 sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Centered */}
        <Link to="/" className="flex items-center space-x-2 mx-auto">
          <img src="/logo.png" alt="Boostly Logo" className="h-10 w-auto scale-[1.65] md:scale-[2.7] transition-transform duration-300" />
        </Link>

        {/* Hamburger Toggle */}
        <button
          className="text-2xl text-blue-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-center space-x-8 py-2 font-semibold text-blue-800 text-sm uppercase tracking-wide">
        {["features", "pricing", "about", "login", "signup"].map((item, idx) =>
          item === "signup" ? (
            <Link
              key={idx}
              to={`/${item}`}
              className="hover:text-blue-700 underline font-bold"
            >
              {item.toUpperCase()}
            </Link>
          ) : item === "about" ? (
            <Link
              key={idx}
              to="/about"
              className="relative group"
            >
              <span className="hover:text-blue-600 transition">
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </span>
            </Link>
          ) : (
            <Link
              key={idx}
              to={`/${item}`}
              className="relative group"
            >
              <span className="hover:text-blue-600 transition">
                {item.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </span>
            </Link>
          )
        )}

        {/* Services Dropdown */}
        <div className="relative group" ref={dropdownRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="hover:text-blue-600 relative group"
          >
            Services ▾
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>
          {servicesOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-40">
              <Link to="/services#marketing" className="block px-4 py-2 hover:bg-blue-50">Marketing</Link>
              <Link to="/services#design" className="block px-4 py-2 hover:bg-blue-50">Design</Link>
              <Link to="/services#social" className="block px-4 py-2 hover:bg-blue-50">Social Media</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 font-medium text-blue-800">
          <Link to="/features" className="block hover:text-blue-600">Features</Link>
          <Link to="/pricing" className="block hover:text-blue-600">Pricing</Link>
          <Link to="/about" className="block hover:text-blue-600">About Us</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left hover:text-blue-600"
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
          <Link to="/login" className="block hover:text-blue-600">Login</Link>
          <Link to="/signup" className="block hover:text-blue-700 font-semibold underline">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
