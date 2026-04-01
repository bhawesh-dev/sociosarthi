import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#070b14] text-white border-t border-gray-800 pt-16 pb-8 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              SocioSarthi
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Next-generation social media management focused on growth,
            positioning and real digital impact.
          </p>
        </div>

        {/* PLATFORM */}
        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#get-started" className="hover:text-white transition">Contact</a></li>
            <li><a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDQ0VKJz_041xxxp3Y_CjHe_wp4LFbQxipD52YWmJilt7XMA/viewform?usp=publish-editor" 
                className="hover:text-white transition"
                target="_blank" 
                rel="noopener noreferrer"
                >
                Careers
                </a></li>
          </ul>
        </div>

        {/* SOLUTIONS (YOUR ACTUAL SERVICES) */}
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Social Media Management</li>
            <li>Content Production</li>
            <li>Branding & Positioning</li>
            <li>Growth & Performance</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
  <h4 className="font-semibold mb-4">Connect</h4>

  <div className="flex gap-3">

    <div className="flex gap-4">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/sociosarthi"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#111827] border border-gray-800 hover:border-blue-500 hover:scale-105 transition"
  >
    <FaInstagram size={18} />
  </a>

  {/* Twitter */}
  <a
    href="https://x.com/SocioSarthi"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#111827] border border-gray-800 hover:border-blue-500 hover:scale-105 transition"
  >
    <FaTwitter size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/socio-sarthi/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#111827] border border-gray-800 hover:border-blue-500 hover:scale-105 transition"
  >
    <FaLinkedin size={18} />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/people/Socio-Sarthi/pfbid02hsVLc9oGSw5ECACp11UGDUAezFPAmRu9JJJ3hWSSTherKdec1A89ZbYSNpNLaojKl/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#111827] border border-gray-800 hover:border-blue-500 hover:scale-105 transition"
  >
    <FaFacebook size={18} />
  </a>

</div>

  </div>
</div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 SocioSarthi. All rights reserved.
      </div>

    </footer>
  );
}