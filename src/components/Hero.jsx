// src/components/Hero.jsx
function Hero() {
    return (
        <section className="bg-gradient-to-br from-white via-blue-100 to-blue-200 text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
          Simplify Your Social Media
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Boostly empowers your brand with easy-to-use social media tools, strategy, and expert support.
        </p>
        <div className="flex justify-center space-x-4">
        <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">

            Get Started
          </a>
          <a
            href="#features"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
          >
            Explore Features
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
  