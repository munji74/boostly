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

function Pricing() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-2 tracking-tight">Retail Packages</h2>
        <div className="border-t border-blue-200 w-24 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Tailored for retailers and entrepreneurs. Choose a plan that suits your business.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <Link to={`/pricing/${plan.slug}`} key={idx}>
              <div
                className={`rounded-xl p-6 cursor-pointer transition transform duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${
                  plan.recommended
                    ? "bg-blue-600 text-white scale-105 border-2 border-blue-700"
                    : "bg-white text-gray-800 border"
                }`}
              >
                <h3 className="text-2xl font-bold mb-1 uppercase">{plan.name}</h3>
                <p className="text-sm italic mb-4">{plan.subtitle}</p>

                <ul className="space-y-2 text-left text-sm font-medium">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full text-center py-2 px-4 rounded-full font-semibold text-sm transition-all ${
                    plan.recommended
                      ? "bg-white text-blue-700 hover:bg-blue-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  🚀 Get Started
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-600 text-sm">
          <p className="italic">
            Want more? We offer add-ons like product photography, email campaigns, and full website support — available on each plan's page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
