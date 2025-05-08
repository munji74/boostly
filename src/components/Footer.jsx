// src/components/Footer.jsx
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-100 py-6 px-4 text-center text-sm text-gray-700 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Boostly. All rights reserved.</p>

        <div className="flex items-center space-x-6 text-blue-700 text-lg">
          <a
            href="mailto:boostlyug@gmail.com"
            className="hover:text-blue-900 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/256790695985"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
