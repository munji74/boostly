// src/components/About.jsx
function About() {
    return (
        <section id="about" className="bg-blue-50 py-20 px-6 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Boostly is a Ugandan-based platform created to help individuals, businesses, and agencies
            take control of their online presence. We believe that managing your social media should be simple,
            affordable, and effective. Our team is passionate about empowering brands through smart tools, creative
            strategies, and personalized support.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 text-left">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🚀 Our Mission</h3>
              <p className="text-gray-600">
                To help brands in Uganda and beyond grow with professional-grade social media tools that are easy to use
                and accessible to everyone.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">💡 What We Offer</h3>
              <p className="text-gray-600">
                Scheduling tools, content ideas, multi-platform support, in-depth analytics, and hands-on guidance—
                all at local-friendly pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  