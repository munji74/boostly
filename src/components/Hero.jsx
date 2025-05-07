// src/components/Hero.jsx

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-800 leading-snug mb-3">
          Simplify Your Social Media
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Boost your online presence with smart scheduling, stunning designs, and effortless management — all in one platform.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/256XXXXXXXXX" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300 transition-all duration-200 px-6 py-3 rounded-full font-semibold text-lg shadow-sm"
          >
            💬 Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
