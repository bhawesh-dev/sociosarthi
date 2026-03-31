"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {


    

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [reach, setReach] = useState(0);
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let r = 0, c = 0, e = 0, g = 0;

          const interval = setInterval(() => {
            if (r < 100000000) {
              r += 1000000;
              setReach(r);
            }

            if (c < 98) {
              c += 1;
              setClients(c);
            }

            if (e < 6) {
              e += 1;
              setExperience(e);
            }

            if (g < 300) {
              g += 5;
              setGrowth(g);
            }

            if (r >= 100000000 && c >= 98 && e >= 5 && g >= 300) {
              clearInterval(interval);
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  return (
    <div ref={statsRef} className="py-20 mt-20 relative">

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1725]/60 to-transparent pointer-events-none"></div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            {reach >= 100000000 ? "100M+" : `${Math.floor(reach / 1000000)}M`}
          </h2>
          <p className="text-gray-400 mt-2">Reach Generated</p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            {clients}%
          </h2>
          <p className="text-gray-400 mt-2">Client Satisfaction</p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            {experience}+
          </h2>
          <p className="text-gray-400 mt-2">Years of Experience</p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            {growth}%
          </h2>
          <p className="text-gray-400 mt-2">Growth Delivered</p>
        </div>

      </div>

    </div>
  );
}