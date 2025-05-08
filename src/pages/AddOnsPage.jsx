// src/pages/AddOnsPage.jsx
const addOns = [
    { name: "Product Photography", price: "$50–100/session" },
    { name: "Website Design", price: "$250 one-time (+ $10/month maintenance)" },
    { name: "Email Marketing + Sales Coaching", price: "$75/month" },
  ];
  
  function AddOnsPage() {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-8">
            Optional Add-Ons
          </h1>
  
          <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto">
            Boost your plan with the following optional services designed to help you scale faster.
          </p>
  
          <div className="bg-white shadow-md rounded-xl p-6 md:p-10 text-left">
            <ul className="space-y-4 text-gray-800 text-base">
              {addOns.map((addon, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b pb-2"
                >
                  <span>{addon.name}</span>
                  <span className="font-semibold text-blue-700">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
  
          <a
            href="https://wa.me/256790695985?text=Hello%20Boostly%2C%20I%27d%20like%20to%20inquire%20about%20your%20add-ons"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </section>
    );
  }
  
  export default AddOnsPage;
  