// src/components/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-center bg-blue-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-3">
        Simplify Your Social Media
      </h1>

        <p className="text-lg text-gray-700 mb-8">
          Boost your online presence with smart scheduling, stunning designs, and effortless management — all in one platform.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 font-semibold text-lg transition"
          >
            🚀 Start Free Trial
          </Link>

          <a
            href="https://wa.me/256XXXXXXXXX" // <-- Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition"
          >
            💬 Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
