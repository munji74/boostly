// src/components/Features.jsx
const features = [
    {
      title: "Post Scheduler",
      description: "Plan and schedule posts across all major platforms in advance.",
      icon: "🗓️",
    },
    {
      title: "Analytics Dashboard",
      description: "Track engagement, reach, and growth metrics in real time.",
      icon: "📊",
    },
    {
      title: "Content Suggestions",
      description: "Get AI-powered suggestions tailored to your audience.",
      icon: "💡",
    },
    {
      title: "Multi-Platform Support",
      description: "Manage Instagram, Facebook, Twitter, and LinkedIn from one place.",
      icon: "🌐",
    },
  ];
  
  function Features() {
    return (
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Powerful Features</h2>
          <p className="text-gray-600 mb-12">Boostly offers everything you need to grow and manage your brand online.</p>
  
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition hover:-translate-y-1"
            >
            
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;
  