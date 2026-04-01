"use client";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 py-20">

  {/* TAG */}
  <p className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 rounded-full 
  bg-[#0f1f2f] text-[#5eead4] border border-[#1e3a5f] 
  text-xs md:text-base mb-6 shadow-[0_0_10px_rgba(94,234,212,0.15)]">
    ✦ Next-Generation Social Media Management
  </p>

  {/* HEADING */}
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
  
  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
    Amplify Your
  </span>
  
  <br />
  
  <span className="text-white">
    Digital Impact
  </span>

</h1>

  {/* DESCRIPTION */}
  <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
    Transform your social media presence with data-driven strategies,
    cutting-edge technology and creative excellence.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-row justify-center gap-3 md:gap-6 mb-12">
  
  <button
    onClick={() => {
      document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="group bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 py-3 text-sm md:px-8 md:py-4 md:text-lg whitespace-nowrap rounded-xl transition duration-300 cursor-pointer flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95"
  >
    Launch Your Growth
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>

  <button
    onClick={() => {
      document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="border border-gray-500 text-white px-5 py-3 text-sm md:px-8 md:py-4 md:text-lg whitespace-nowrap rounded-xl transition duration-300 cursor-pointer hover:bg-gray-700 active:scale-95"
  >
    Explore Case Studies
  </button>

</div>

  {/* HERO IMAGE */}
  <img
  src="/hero.png"
  alt="hero"
  loading="lazy"
  className="w-full max-w-4xl rounded-2xl transition duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
/>

</div>
  );
}