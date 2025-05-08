import Hero from "../components/Hero";
import WhatsappChat from "../components/WhatsappChat";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />

      {/* Features CTA Section */}
      <section className="text-center bg-gradient-to-r from-[#D6EBFF] to-[#EFF8FF] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#112B6B] mb-4 tracking-tight">
            Explore Boostly’s Core Features
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            From post scheduling and content creation to analytics and automation — Boostly gives you the tools to grow with ease.
          </p>
          <Link
            to="/features"
            className="inline-block bg-[#112B6B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1A3E8A] transition shadow-md"
          >
            View Features
          </Link>
        </div>
      </section>

      {/* Boostly Journey */}
      <section className="bg-[#F1F5F9] py-24 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#112B6B] text-center mb-12">
            The Boostly Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-lg leading-loose tracking-wide">
            <div className="space-y-6">
              <p>
                <span className="font-bold text-[#2563EB]">Founded in 2020</span>, Boostly began with a vision to empower small businesses to thrive online — simply and affordably.
              </p>
              <p>
                Our team saw the struggles small business owners faced: too many responsibilities, not enough time for digital marketing. Boostly was built to fix that.
              </p>
              <p className="italic text-[#112B6B] font-medium">
                Our mission: deliver agency-level social media support at local-friendly prices.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                We believe in <strong>clarity, creativity, and consistency</strong>. Whether you're a shop, brand, or startup — your online presence should be powerful and easy to manage.
              </p>
              <p>
                Each client receives personalized strategies, on-brand visuals, and measurable growth tools.
              </p>
              <p>
                Whether you're starting or scaling, <span className="font-semibold text-[#112B6B]">Boostly helps you grow — one post at a time.</span>
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
