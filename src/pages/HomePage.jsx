// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import WhatsappChat from "../components/WhatsappChat";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />

      {/* CTA to Features */}
      <section className="text-center bg-white py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          Explore Boostly's Core Features
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          From scheduling and content creation to advanced analytics—Boostly has everything you need to grow online.
        </p>
        <Link
          to="/features"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
        >
          View Features
        </Link>
      </section>

      {/* Boostly Story Section */}
      <section className="bg-blue-50 py-20 px-6 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-10">
            The Story of Boostly: Empowering Small Businesses, One Post at a Time
          </h2>
          <div className="space-y-6 text-lg md:text-[1.125rem] leading-relaxed">
            <p>
              <strong className="text-blue-700">Boostly</strong> was founded in 2020 with a simple yet powerful idea: to help small businesses take control of their online presence and thrive in the ever-evolving digital world.
            </p>
            <p>
              In its early days, Boostly was created by a small team of marketers, designers, and social media strategists who noticed a growing problem—small business owners were stretched thin.
            </p>
            <p className="italic text-blue-700 font-medium">
              From day one, our mission has been clear: to make professional-level social media management accessible to small businesses.
            </p>
            <p>
              What truly sets Boostly apart is our <span className="font-semibold text-blue-700">commitment to customer satisfaction</span>. We don’t just manage social media—we build relationships.
            </p>
            <p>
              <strong>Quality</strong> is at the core of everything we do. Each post is crafted to engage, inspire, and convert. Our strategies are backed by data and customized to our clients’ goals.
            </p>
            <p>
              Over the past four years, we’ve expanded our services to include advanced analytics, automated scheduling tools, and brand-focused strategies—without losing our human touch.
            </p>
            <p>
              Whether you're just starting your business or ready to scale, <span className="font-semibold text-blue-700">Boostly is here to help you grow—one follower, one post, one connection at a time.</span>
            </p>
          </div>
        </div>
      </section>

      <WhatsappChat />
    </>
  );
}

export default HomePage;
