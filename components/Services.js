"use client";

export default function Services() {

  const handlePlanSelect = (plan) => {
  localStorage.setItem("selectedPlan", plan);

  // 🔥 trigger update event
  window.dispatchEvent(new Event("planUpdated"));

  document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div id="services" className="py-24 px-6 bg-[#0b0f1a] text-white border-t border-gray-800">

      <div className="max-w-6xl mx-auto">

        {/* ===================== */}
        {/* SERVICES HEADING */}
        {/* ===================== */}
        <div className="text-center mb-16">

          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
          bg-[#0f1f2f] text-[#5eead4] border border-[#1e3a5f] text-sm mb-4 shadow-[0_0_10px_rgba(94,234,212,0.15)]">
            ✦ Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Built for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Growth
                </span>
                . Designed for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Impact
                </span>
          </h2>

          <p className="text-gray-400 mt-4">
            We build content systems that drive growth, visibility, and brand positioning.
          </p>

        </div>

        {/* ===================== */}
        {/* SERVICES GRID */}
        {/* ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

          {/* CARD 1 */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 mb-4 rounded-full"></div>

            <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition">
              Social Media Management
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Complete handling of your social platforms with consistent posting,
              audience engagement, and growth-focused execution.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 mb-4 rounded-full"></div>

            <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition">
              Content Production
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              High-quality reels, posts, and visual storytelling designed to capture
              attention and build a strong digital presence.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 mb-4 rounded-full"></div>

            <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition">
              Branding & Positioning
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              We define how your brand is perceived and create a consistent identity
              that builds trust and long-term recognition.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 mb-4 rounded-full"></div>

            <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition">
              Growth & Performance
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Data-driven strategies, analytics, and optimization to ensure your
              digital efforts translate into measurable results.
            </p>

          </div>

        </div>

        {/* ===================== */}
        {/* PRICING SECTION */}
        {/* ===================== */}

        {/* PRICING HEADING */}
        <div className="text-center mb-16">

          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
          bg-[#0f1f2f] text-[#5eead4] border border-[#1e3a5f] text-sm mb-4 ">
            ✦ Pricing Plans
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Choose the Plan That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Fits Your Growth
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Flexible plans designed to match your content needs and growth goals.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* STARTER */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <h4 className="text-lg font-semibold mb-2">Starter</h4>

            <p className="text-3xl font-bold mb-4">
              ₹39,000 <span className="text-sm text-gray-400">/month</span>
            </p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• 15 Reels</li>
              <li>• 8 Static Posts</li>
              <li>• 1 Shoot Day</li>
              <li>• Basic Thumbnails & Captions</li>
              <li>• Consistent Content Execution</li>
            </ul>

            <button onClick={() => handlePlanSelect("Starter")}
              className="w-full bg-gray-800 py-2 rounded-lg transition hover:bg-gray-700 cursor-pointer active:scale-95">
              Get Started
            </button>
          </div>

          {/* GROWTH */}
          <div className="group relative bg-[#111827] p-7 rounded-2xl border border-blue-500 scale-[1.03]
          transition duration-300 hover:scale-[1.05] hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]">

            <span className="absolute top-4 right-4 text-xs bg-blue-500 px-2 py-1 rounded text-white">
              Most Popular
            </span>

            <h4 className="text-lg font-semibold mb-2">Growth</h4>

            <p className="text-3xl font-bold mb-4">
              ₹49,000 <span className="text-sm text-gray-400">/month</span>
            </p>

            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>• 30 Reels</li>
              <li>• 12 Static Posts</li>
              <li>• 2 Shoot Days</li>
              <li>• Strong Hooks & Thumbnails</li>
              <li>• Growth-focused Strategy</li>
              <li>• Priority Coordination</li>
            </ul>

            <button onClick={() => handlePlanSelect("Growth")}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-2 rounded-lg text-white 
              transition hover:opacity-90 cursor-pointer active:scale-95">
              Get Started
            </button>
          </div>

          {/* LEADER */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <h4 className="text-lg font-semibold mb-2">Leader</h4>

            <p className="text-3xl font-bold mb-4">
              ₹69,000 <span className="text-sm text-gray-400">/month</span>
            </p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• 45 Premium Reels</li>
              <li>• 16–20 Static Posts</li>
              <li>• Weekly Shoots</li>
              <li>• High-end Branding</li>
              <li>• Full Growth Campaigns</li>
              <li>• Dedicated Priority Support</li>
            </ul>

            <button onClick={() => handlePlanSelect("Leader")}
              className="w-full bg-gray-800 py-2 rounded-lg transition hover:bg-gray-700 cursor-pointer active:scale-95">
              Get Started
            </button>
          </div>

          {/* CUSTOM */}
          <div className="group bg-[#111827] p-6 rounded-2xl border border-gray-800 
          transition duration-300 hover:-translate-y-1 hover:border-blue-500 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">

            <h4 className="text-lg font-semibold mb-2">Custom</h4>

            <p className="text-3xl font-bold mb-4">
              Flexible
            </p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• Tailored Content Strategy</li>
              <li>• Flexible Deliverables</li>
              <li>• Custom Shoot Planning</li>
              <li>• Brand-specific Execution</li>
              <li>• Scalable Growth Support</li>
            </ul>

            <button onClick={() => handlePlanSelect("Custom")}
              className="w-full bg-gray-800 py-2 rounded-lg transition hover:bg-gray-700 cursor-pointer active:scale-95">
              Get Started
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}