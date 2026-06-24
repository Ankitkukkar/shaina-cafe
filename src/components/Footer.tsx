import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-black text-white py-16 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans">
          
          {/* Brand & Mission Column */}
          <div id="footer-logo-section" className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg 
                className="h-10 w-10 text-white" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ minWidth: '2.5rem' }}
              >
                {/* Inner Circle */}
                <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="3.5" fill="none" />
                
                {/* Outer broken circles (4 arcs) */}
                <path d="M 52 32 A 83 83 0 0 1 178 72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 183 90 A 83 83 0 0 1 170 145" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 148 168 A 83 83 0 0 1 72 178" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 50 162 A 83 83 0 0 1 32 80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

                {/* Glass & Fork central artwork */}
                {/* Glass */}
                <path 
                  d="M 76 60 L 96 60 L 96 74 A 10 10 0 0 1 76 74 Z" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
                <line x1="86" y1="84" x2="86" y2="102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="77" y1="102" x2="95" y2="102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                
                {/* Fork */}
                <line x1="106" y1="60" x2="106" y2="72" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="114" y1="60" x2="114" y2="72" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="122" y1="60" x2="122" y2="72" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 106 72 A 8 8 0 0 0 122 72" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <line x1="114" y1="80" x2="114" y2="102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

                {/* "Shaina Cafe" Typography Inside Circle */}
                <text 
                  x="100" 
                  y="142" 
                  textAnchor="middle" 
                  fill="currentColor" 
                  fontSize="22" 
                  fontWeight="700" 
                  style={{ fontFamily: '"Dancing Script", cursive, Georgia, serif' }}
                >
                  Shaina Cafe
                </text>

                {/* Registered Trademark Symbol (R) */}
                <g transform="translate(172, 36)">
                  <circle cx="0" cy="0" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  <text x="0" y="3" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" style={{ fontFamily: 'sans-serif' }}>R</text>
                </g>
              </svg>
              <span className="font-display tracking-[0.25em] text-md font-bold text-white uppercase">
                Shaina Cafe
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-sm">
              Artisanal roasts and crafted gourmet dining curated in Dabwali, Haryana. Bringing together black-and-white visual honesty with luxury culinary standards.
            </p>
          </div>

          {/* Quick Links Column */}
          <div id="footer-links-section" className="space-y-4">
            <h4 className="font-display uppercase tracking-[0.2em] text-xs font-bold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'Our Story' },
                { id: 'menu', label: 'Exclusive Menu' },
                { id: 'order', label: 'Order Online' },
                { id: 'reservations', label: 'Select Reservation' },
                { id: 'reviews', label: 'Reviews & Feedback' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-left capitalize"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div id="footer-hours-section" className="space-y-4">
            <h4 className="font-display uppercase tracking-[0.2em] text-xs font-bold text-white">
              Business Hours
            </h4>
            <div className="space-y-1.5 text-xs text-white/60">
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Monday - Friday</span>
                <span className="text-white">08:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Saturday - Sunday</span>
                <span className="text-white">09:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Kitchen Closes</span>
                <span className="text-white">10:30 PM daily</span>
              </div>
            </div>
          </div>

          {/* Direct Contact Column */}
          <div id="footer-contact-section" className="space-y-4">
            <h4 className="font-display uppercase tracking-[0.2em] text-xs font-bold text-white">
              Contact Details
            </h4>
            <div className="space-y-2 text-xs text-white/60">
              <p className="leading-relaxed">
                Shaina Cafe, Main Market Road,<br />
                Mandi Dabwali - 125104,<br />
                Haryana, India
              </p>
              <p>
                Phone: <span className="text-white">+91 98765 43210</span>
              </p>
              <p>
                Email: <span className="text-white">reserve@shainacafe.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons & Bottom Area */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <a href="#instagram" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px]">Instagram</a>
            <a href="#facebook" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px]">Facebook</a>
            <a href="#twitter" className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px]">X / Twitter</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <span>&copy; {currentYear} Shaina Cafe. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
