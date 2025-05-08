import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };
  

  return (
    <nav
      className={`backdrop-blur-lg bg-white/70 sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 mx-auto">
          <img
            src="/logo.png"
            alt="Boostly Logo"
            className="h-12 md:h-12 w-auto scale-[2] md:scale-[2.5] transition-transform duration-300"
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="text-2xl text-blue-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-center space-x-8 py-2 font-semibold text-blue-800 text-sm uppercase tracking-wide">
        {[
          { path: "/", label: "HOME" },
          { path: "/features", label: "FEATURES" },
          { path: "/pricing", label: "PRICING" },
          { path: "/about", label: "ABOUT US" },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`relative ${
              isActive(path)
                ? "text-blue-700 underline font-bold"
                : "hover:text-blue-600"
            }`}
          >
            {label}
          </Link>
        ))}

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
          <Link to="/features" className={`block ${isActive("/features") ? "underline font-bold" : "hover:text-blue-600"}`}>Features</Link>
          <Link to="/pricing" className={`block ${isActive("/pricing") ? "underline font-bold" : "hover:text-blue-600"}`}>Pricing</Link>
          <Link to="/about" className={`block ${isActive("/about") ? "underline font-bold" : "hover:text-blue-600"}`}>About Us</Link>
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
