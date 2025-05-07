function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg">
            At Boostly, we help small businesses become digital powerhouses through creative, consistent, and strategic social media management.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">🌟 Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower every small business with a strong, authentic, and influential online presence that drives growth and builds lasting customer relationships.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">🎯 Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Boostly is dedicated to helping small businesses thrive in the digital age by managing their social media
              presence with creativity, consistency, and strategy. We aim to turn followers into loyal customers through
              engaging content, targeted growth strategies, and personalized support.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white p-10 rounded-xl shadow-md border-l-4 border-blue-700">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">📌 Our Objectives</h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
            <li><span className="font-semibold">Grow Followers Organically:</span> Focused on meaningful, long-term audience growth.</li>
            <li><span className="font-semibold">Enhance Brand Identity:</span> Deliver consistent, on-brand creative assets.</li>
            <li><span className="font-semibold">Maximize Engagement:</span> Boost user interactions and meaningful conversations.</li>
            <li><span className="font-semibold">Drive Business Results:</span> Translate social engagement into leads and sales.</li>
            <li><span className="font-semibold">Provide Personalized Support:</span> Custom plans tailored to each client’s industry and goals.</li>
            <li><span className="font-semibold">Educate and Empower:</span> Equip businesses with knowledge through reports, resources, and coaching.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
