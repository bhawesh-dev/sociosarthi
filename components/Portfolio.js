"use client";
import { useState } from "react";

export default function Portfolio() {
  const clients = [
    {
      name: "Chapter 10 Education",
      images: ["/c1.png", "/c2.png", "/c3.png"],
      short: "Launch & brand visibility",
      long: "Partnered from the ground up to establish a strong digital presence, creating awareness, building trust and positioning the institute effectively among its target audience.",
    },
    {
      name: "Ajay CTET Classes",
      images: ["/a1.png", "/a2.png", "/a3.png"],
      short: "Offline to digital expansion",
      long: "Transformed an established offline coaching brand into a strong online presence through strategic content, campaign execution and platform-focused growth initiatives.",
    },
    {
      name: "Brut India",
      images: ["/b1.png", "/b2.png", "/b3.png"],
      short: "Documentary storytelling",
      long: "Worked on impactful documentary-style video production, focusing on authentic storytelling and narrative depth, contributing to content that earned national-level recognition.",
    },
    {
      name: "Arya Go Transportec",
      images: ["/g1.png", "/g2.png", "/g3.png"],
      short: "Local brand awareness",
      long: "Executed targeted social media campaigns to build awareness and trust, helping the brand establish a strong presence and recognition within its operating market.",
    },
    {
      name: "Board Easy",
      images: ["/be1.png", "/be2.png", "/be3.png"],
      short: "Content & platform growth",
      long: "Handled end-to-end content strategy including long-form video production and social media management, improving reach, consistency and audience engagement.",
    },
  ];

  const [activeClient, setActiveClient] = useState(null);

  return (
    <div id="portfolio" className="py-24 px-6 bg-[#0b0f1a] text-white overflow-hidden border-t border-gray-800">

      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
        bg-[#0f1f2f] text-[#5eead4] border border-[#1e3a5f] text-sm mb-4 shadow-[0_0_10px_rgba(94,234,212,0.15)]">
          ✦ Our Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Results That{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Speak
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Real growth. Real clients. Real impact.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-visible">

        <div className="flex gap-6 w-max animate-scroll">

          {[...clients, ...clients].map((client, index) => (
            
            <div
              key={index}
              onClick={() => setActiveClient(client)}
              className="group relative min-w-[360px] max-w-[360px] rounded-2xl overflow-hidden border border-gray-800 bg-[#111827] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] hover:brightness-110 opacity-90 hover:opacity-100 cursor-pointer"
            >

              {/* COLLAGE */}
              <div className="grid grid-cols-3 h-[220px] overflow-hidden">

                {client.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover 
                    transition duration-500 group-hover:scale-105 group-hover:blur-[2px]"
                  />
                ))}

              </div>

              {/* DEFAULT CONTENT */}
              <div className="p-4 h-[80px] transition duration-300 group-hover:opacity-0">
                <h3 className="text-sm font-semibold">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-400">
                  {client.short}
                </p>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 
              bg-gradient-to-t from-black/90 via-black/70 to-transparent 
              opacity-0 md:group-hover:opacity-100 
              transition duration-500 p-5 flex flex-col justify-end">

                <div className="transform translate-y-6 group-hover:translate-y-0 transition duration-500">

                  <h3 className="text-lg font-semibold mb-2">
                    {client.name}
                  </h3>

                  <p className="text-sm text-gray-200 leading-relaxed">
                    {client.long}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {activeClient && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-6"
          onClick={() => setActiveClient(null)}
        >
          <div
            className={`bg-[#111827] max-w-2xl w-full rounded-2xl p-6 transform transition-all duration-500 ease-out ${activeClient ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-10"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-3 gap-2 mb-4">
              {activeClient.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-24 object-cover rounded-lg transition duration-500 hover:scale-105"
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {activeClient.name}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4 transition duration-500">
              {activeClient.long}
            </p>

            <button
              onClick={() => setActiveClient(null)}
              className="mt-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}


      {/* TESTIMONIALS */}
<div className="mt-24">

  {/* HEADING */}
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold mb-2">
      What Our Clients Say
    </h3>
    <p className="text-gray-400">
      Real feedback from people we’ve worked with
    </p>
  </div>

  {/* CARDS */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* TESTIMONIAL 1 */}
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 
    hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition duration-300">

      <p className="text-gray-300 mb-4 leading-relaxed">
        “Before working with Socio Sarthi, our presence was limited to offline. 
        They helped us bring our institute online with clarity, consistency and a clear content direction. 
        Now, our audience actually engages with what we put out.”
            </p>

      <div className="flex items-center gap-3">

            <img
                src="/ajay.png"
                alt="Ajay"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover border border-gray-700"
            />

            <div>
                <h4 className="font-semibold">Mr. Ajay</h4>
                <p className="text-sm text-gray-400">Founder, Ajay CTET Classes</p>
            </div>

            </div>

    </div>

    {/* TESTIMONIAL 2 */}
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 
    hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition duration-300">

      <p className="text-gray-300 mb-4 leading-relaxed">
        “What stood out was their ability to bring structure to our content. 
        From planning to execution, everything became more organized, and our communication with the audience improved significantly.”
      </p>

      <div className="flex items-center gap-3">

            <img
                src="/shailesh.png"
                alt="Shailesh"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover border border-gray-700"
            />

            <div>
                <h4 className="font-semibold">Mr. Shailesh</h4>
                <p className="text-sm text-gray-400">Founder, Board Easy</p>
            </div>

            </div>

    </div>

  </div>

</div>

    </div>
  );
}