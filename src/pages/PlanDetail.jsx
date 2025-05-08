import { useParams } from "react-router-dom";
import { useState } from "react";

const planData = {
  starter: {
    name: "Starter Retail Boost",
    price: "$100–150/month",
    subtitle: "Ideal for: Small retailers just starting online",
    features: [
      "5 social posts a week",
      "2 story post templates/videos a week",
      "1 ad campaign/month (Instagram or Facebook)",
      "Monthly analytics report",
      "Google My Business setup",
      "1 sales training call/month",
    ],
  },
  growth: {
    name: "Growth Retail Kit",
    price: "$250–300/month",
    subtitle: "Ideal for: Shops with steady sales who want to grow visibility",
    features: [
      "10 branded posts a week",
      "2 Reels or TikToks/month",
      "2 ad campaigns (Facebook & Instagram)",
      "Basic SEO on website + Google location",
      "Weekly engagement strategy",
      "2 sales calls/month",
    ],
  },
  boss: {
    name: "Retail Boss Level",
    price: "$500–700/month",
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
  },
};

const addOns = [
  { name: "Product Photography", price: "$50–100/session" },
  { name: "Website Design", price: "$250 one-time (+ $10/month maintenance)" },
  { name: "Email Marketing + Sales Coaching", price: "$75/month" },
];

function PlanDetail() {
  const { slug } = useParams();
  const plan = planData[slug];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  if (!plan) {
    return <div className="text-center py-20 text-red-500 font-semibold">Plan not found.</div>;
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">{plan.name}</h1>
        <p className="italic text-gray-600 mb-2">{plan.subtitle}</p>
        <p className="text-2xl font-bold text-blue-700 mb-6">{plan.price}</p>

        {/* What's Included */}
        <div className="text-left bg-white shadow-md rounded-xl p-6 md:p-10 mb-10">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">What's Included:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Optional Add-Ons */}
        <div className="text-left bg-white shadow-md rounded-xl p-6 md:p-10 mb-10">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Optional Add-Ons</h3>
          <ul className="space-y-3 text-sm text-gray-800">
            {addOns.map((addon, idx) => (
              <li key={idx} className="flex justify-between border-b pb-2">
                <span>{addon.name}</span>
                <span className="text-blue-700 font-medium">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div id="contact" className="bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-2xl mx-auto text-left scroll-mt-32">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Contact Sales</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded px-4 py-2 h-28"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition"
              onClick={(e) => {
                e.preventDefault();
                alert("Form submitted! We’ll get back to you soon.");
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Sticky CTA Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        🚀 Book Now
      </a>
    </section>
  );
}

export default PlanDetail;
