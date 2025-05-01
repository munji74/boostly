// src/components/Pricing.jsx
const plans = [
    {
      name: "Starter",
      price: "UGX 50,000",
      features: [
        "1 Social Media Profile",
        "Basic Scheduling",
        "Weekly Analytics",
        "Email Support",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      price: "UGX 120,000",
      features: [
        "Up to 5 Profiles",
        "Advanced Scheduling",
        "Daily Analytics",
        "Priority Support",
      ],
      recommended: true,
    },
    {
      name: "Agency",
      price: "UGX 300,000",
      features: [
        "Unlimited Profiles",
        "Team Collaboration",
        "Custom Reports",
        "Dedicated Manager",
      ],
      recommended: false,
    },
  ];
  
  function Pricing() {
    return (
      <section id="pricing" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Affordable Plans</h2>
          <div className="border-t border-blue-200 w-24 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg mb-12">
            Flexible pricing for individuals, businesses, and agencies in Uganda.
          </p>
  
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 transition transform duration-300 ${
                  plan.recommended
                    ? "bg-blue-600 text-white scale-105 shadow-xl border-2 border-blue-700"
                    : "bg-white text-gray-800 border border-gray-200 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-xl font-bold mb-4">{plan.price} / month</p>
                <ul className="mb-6 space-y-2 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className={`inline-block px-6 py-2 rounded-full font-semibold transition ${
                    plan.recommended
                      ? "bg-white text-blue-700 hover:bg-blue-100"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Pricing;
  