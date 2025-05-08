// src/components/Pricing.jsx
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Starter Retail Boost",
    subtitle: "Ideal for: Small retailers just starting online",
    features: [
      "5 social posts a week",
      "2 story post templates/videos a week",
      "1 ad campaign/month (Instagram or Facebook)",
      "Monthly analytics report",
      "Google My Business setup",
      "1 sales training call/month",
    ],
    slug: "starter",
    recommended: false,
  },
  {
    name: "Growth Retail Kit",
    subtitle: "Ideal for: Shops with steady sales who want to grow visibility",
    features: [
      "10 branded posts a week",
      "2 Reels or TikToks/month",
      "2 ad campaigns (Facebook & Instagram)",
      "Basic SEO on website + Google location",
      "Weekly engagement strategy",
      "2 sales calls/month",
    ],
    slug: "growth",
    recommended: true,
  },
  {
    name: "Retail Boss Level",
    subtitle: "Ideal for: Ambitious shops ready to dominate locally or regionally",
    features: [
      "Daily stories & posts on all platforms",
      "7 Reels and TikToks per week",
      "2 ad campaigns/week (Instagram & Meta)",
      "SEO: Google location + full website",
      "Instagram management (DMs, stories, comments)",
      "Weekly strategy & sales coaching calls",
      "In-person product photoshoot & ad creation",
      "Monthly reporting dashboard",
      "Website hosting & maintenance",
    ],
    slug: "boss",
    recommended: false,
  },
];

const addOns = [
  {
    name: "Product Photography",
    price: "$50–100/session"
  },
  {
    name: "Website Design",
    price: "$250 one-time (+ $10/month maintenance)"
  },
  {
    name: "Email Marketing + Sales Coaching",
    price: "$75/month"
  },
];

function Pricing() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-2 tracking-tight">Retail Packages</h2>
        <div className="border-t border-blue-200 w-24 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Choose a package or build your own with our flexible add-ons.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <Link to={`/pricing/${plan.slug}`} key={idx}>
              <div
                className={`rounded-2xl p-6 h-full flex flex-col justify-between transition transform hover:-translate-y-1 duration-300 shadow-lg ${
                  plan.recommended
                    ? "bg-blue-700 text-white border-4 border-blue-800 scale-105"
                    : "bg-white text-gray-800 border"
                }`}
              >
                <div>
                  <h3 className="text-xl font-extrabold uppercase mb-1">{plan.name}</h3>
                  <p className={`text-sm italic mb-4 ${plan.recommended ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>
                  <ul className={`space-y-2 text-left text-sm font-medium ${plan.recommended ? 'text-blue-100' : 'text-gray-800'}`}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span>✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 space-y-3">
                  <button
                    className={`w-full py-2 rounded-full font-semibold text-sm ${
                      plan.recommended
                        ? "bg-white text-blue-800 hover:bg-blue-100"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    🚀 Get Started
                  </button>
                  <a
                    href="https://wa.me/256790695985?text=Hello%20Boostly%2C%20I%27d%20like%20to%20inquire%20about%20your%20plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-block text-center py-2 rounded-full border ${
                      plan.recommended
                        ? "border-white text-white hover:bg-white hover:text-blue-800"
                        : "border-blue-600 text-blue-700 hover:bg-blue-50"
                    } transition duration-200 font-medium text-sm`}
                  >
                    💬 Get to Us on WhatsApp
                  </a>
                </div>
              </div>
            </Link>
          ))}

          {/* Add-Ons Card */}
          <div className="bg-white border rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-blue-800 mb-2 text-center uppercase">Optional Add-Ons</h3>
              <p className="text-sm italic text-center text-gray-600 mb-4">
                Enhance any package with these extras:
              </p>
              <ul className="space-y-3 text-sm text-gray-800">
                {addOns.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-2">
                    <span>{item.name}</span>
                    <span className="text-blue-700 font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 space-y-3">
              <button className="w-full py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm">
                🚀 Get Started
              </button>
              <a
                href="https://wa.me/256790695985?text=Hello%20Boostly%2C%20I%27d%20like%20to%20ask%20about%20the%20optional%20add-ons"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-2 rounded-full border border-blue-600 text-blue-700 hover:bg-blue-50 transition duration-200 font-medium text-sm"
              >
                💬 Ask About Add-Ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
