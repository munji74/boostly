// src/components/Hero.jsx

function Hero() {
  return (
    <section className="bg-[#112B6B] text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4 tracking-tight">
          Simplify Your Social Media
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
          Boost your online presence with smart scheduling, stunning designs, and effortless management — all in one platform.
        </p>
        <a
          href="https://wa.me/256790695985"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#112B6B] font-semibold rounded-full shadow-md hover:bg-blue-100 transition"
        >
          💬 Talk to Us on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Hero;
