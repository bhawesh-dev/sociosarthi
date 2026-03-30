"use client";
import { useState } from "react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const targetY =
      el.getBoundingClientRect().top + window.pageYOffset - 80;

    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 600;

    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const eased = easeInOut(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#070b14]/80 backdrop-blur-md border-b border-gray-800">
      
      <div className="w-full flex justify-between items-center px-4 md:px-8 py-3">
        
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="logo" 
            className="w-9 h-9 rounded-lg object-cover"
          />
          
          <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            SocioSarthi
          </span>
        </a>

        <div className="flex items-center gap-6">

            {/* MOBILE MENU BUTTON */}
           <button
                onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
             >
    ☰
  </button>
          
          <div className="hidden md:flex gap-6 text-gray-400">
        <a href="#about" className="hover:text-white transition active:scale-95">
          About
        </a>
        <a href="#services" className="hover:text-white transition">
          Services
        </a>
        <a href="#portfolio" className="hover:text-white transition">
          Portfolio
        </a>
      </div>

          <button
                onClick={() => scrollToSection("get-started")}
                className="hidden md:block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] active:scale-95"
                >
                Get Started
                </button>

        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0b0f1a] px-6 py-4 space-y-4 border-t border-gray-800">
          <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">Services</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">Portfolio</a>

          <button
            onClick={() => {
              scrollToSection("get-started");
              setMenuOpen(false);
            }}
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] active:scale-95"
          >
            Get Started
          </button>
        </div>
      )}

    </nav>
  );
}