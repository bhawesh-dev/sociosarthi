"use client";
import { useState } from "react";

export default function About() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <div id="about" className="py-24 px-6 bg-[#0b0f1a] text-white border-t border-gray-800">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT */}
        <div className="flex-1">

          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                    bg-[#0f1f2f] text-[#5eead4] border border-[#1e3a5f] 
                    text-sm mb-4 shadow-[0_0_10px_rgba(94,234,212,0.15)]">
                    ✦ About Us
         </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Don’t Just Create Content —  
                <span className="text-blue-400"> We Build Positioning</span>
                </h2>

                <p className="text-gray-400 mb-4 text-lg">
                At SocioSarthi, we go beyond reels and posts. We combine 
                <span className="text-white font-medium"> strategy, creativity and psychology </span>
                to craft a strong and consistent digital presence.
                </p>

                <p className="text-gray-400 mb-4 text-lg">
                From institutions and schools to personal brands and businesses, we work as 
                <span className="text-white font-medium"> long-term digital partners</span> — aligning content with real goals like growth, reputation and engagement.
                </p>

                <p className="text-gray-400 text-lg">
                Our approach blends 
                <span className="text-blue-400"> branding, high-quality visuals and performance insights </span>
                to deliver results that actually matter.
                </p>

        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">

          <img
            src="/about.png"
            alt="about"
            loading="lazy"
            className="w-full max-w-md md:max-w-lg rounded-2xl"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
            />

        </div>

      </div>


      {/* TEAM SECTION */}
{/* TEAM SECTION */}
<div className="max-w-6xl mx-auto mt-20">

  {/* HEADING */}
  <div className="text-center mb-12">
    <h3 className="text-3xl md:text-4xl font-bold mb-2">
      The People Behind SocioSarthi
    </h3>
    <p className="text-gray-400">
      Meet the minds driving strategy, creativity and technology
    </p>
  </div>

  {/* TEAM GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* FOUNDER */}
<div
  onClick={() => setOpenCard(openCard === 0 ? null : 0)}
  className="group relative bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 transition duration-300 hover:scale-[1.02]"
>

  {/* IMAGE */}
  <img
    src="/person1.png"
    alt="Founder"
    loading="lazy"
    className={`w-full h-[520px] md:h-[600px] object-cover transition duration-500 ${openCard === 0 ? "scale-105 blur-sm opacity-30" : ""} md:group-hover:scale-105 md:group-hover:blur-sm md:group-hover:opacity-30`}
  />

  {/* DEFAULT NAME */}
  <div className={`absolute bottom-0 left-0 w-full p-4 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition duration-300 ${openCard === 0 ? "opacity-0" : ""} md:group-hover:opacity-0`}>

    <h4 className="text-white text-lg font-semibold">
      Divyanshu Shekhar
    </h4>

    <p className="text-blue-300 text-sm">
      Founder & CEO
    </p>

  </div>

  {/* FULL CONTENT SLIDE */}
  <div className={`absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/90 to-transparent flex flex-col justify-end p-6 transition duration-700 ${openCard === 0 ? "translate-y-0" : "translate-y-full"} md:group-hover:translate-y-0`}>

    <h4 className="text-2xl font-semibold mb-1">
      Divyanshu Shekhar
    </h4>

    <p className="text-blue-400 text-sm mb-4">
      Founder & CEO
    </p>

    <p className="text-gray-200 text-base leading-relaxed">
      Digital media strategist with 6+ years of experience in content, branding and growth systems. 
      Worked with platforms like Brut India and education brands, delivering real scale — including 
      growing audiences to 700K+. Focused on building strong digital positioning that drives trust, 
      perception and measurable growth.
    </p>

  </div>

</div>

    {/* CO-FOUNDER */}
<div
  onClick={() => setOpenCard(openCard === 1 ? null : 1)}
  className="group relative bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 transition duration-300 hover:scale-[1.02]"
>

  <img
    src="/person2.png"
    alt="Co-Founder"
    loading="lazy"
    className={`w-full h-[520px] md:h-[600px] object-cover transition duration-500 ${openCard === 1 ? "scale-105 blur-sm opacity-30" : ""} md:group-hover:scale-105 md:group-hover:blur-sm md:group-hover:opacity-30`}
  />

  <div className={`absolute bottom-0 left-0 w-full p-4 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition duration-300 ${openCard === 1 ? "opacity-0" : ""} md:group-hover:opacity-0`}>

    <h4 className="text-white text-lg font-semibold">
      Divyanshu Jha
    </h4>

    <p className="text-blue-300 text-sm">
      Co-Founder & CTO
    </p>

  </div>

  <div className={`absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/90 to-transparent flex flex-col justify-end p-6 transition duration-700 ${openCard === 1 ? "translate-y-0" : "translate-y-full"} md:group-hover:translate-y-0`}>

    <h4 className="text-2xl font-semibold mb-1">
      Divyanshu Jha
    </h4>

    <p className="text-blue-400 text-sm mb-4">
      Co-Founder & CTO
    </p>

    <p className="text-gray-200 text-base leading-relaxed">
      AI & Cybersecurity student at IIT Patna with expertise in data systems and automation. 
      Leads AI-driven content workflows, analytics and system design — ensuring every creative 
      decision is backed by intelligent, scalable and secure digital infrastructure.
    </p>

  </div>

</div>

  </div>

</div>

    </div>
  );
}