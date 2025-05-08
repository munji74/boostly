// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import WhatsappChat from "../components/WhatsappChat";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />

      {/* CTA to Features */}
      <section className="text-center bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
            Explore Boostly’s Core Features
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From smart scheduling to AI-powered content and analytics — Boostly is built to help your brand grow faster and smarter.
          </p>
          <Link
            to="/features"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-blue-800 transition duration-300 shadow-md"
          >
            View Features
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#eef3fd] py-24 px-6 text-gray-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-14">
            The Boostly Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-lg leading-loose">
            <div className="space-y-6">
              <p>
                <strong className="text-blue-700">Founded in 2020</strong>, Boostly began with a mission to empower small businesses with the tools and guidance they need to succeed online.
              </p>
              <p>
                We noticed a problem: business owners were doing everything — except growing on social media. So we built a solution that feels like an in-house marketing team.
              </p>
              <p className="italic text-blue-700 font-medium">
                Our mission: make expert-level social media support affordable and accessible to all.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                We focus on <strong>high-quality content</strong>, <strong>real engagement</strong>, and <strong>long-term brand loyalty</strong>.
              </p>
              <p>
                Our team delivers tailored strategies, performance insights, and human support to build online communities — not just likes.
              </p>
              <p>
                Whether you're just launching or scaling fast, <span className="text-blue-800 font-semibold">Boostly is your growth partner — one post at a time.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsappChat />
    </>
  );
}

export default HomePage;
