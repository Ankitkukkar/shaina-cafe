import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  cartCount: number;
}

export default function Navbar({ currentPage, setCurrentPage, cartCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'order', label: 'Order Online' },
    { id: 'track', label: 'Track Order' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white border-b border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div 
            id="brand-logo"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <svg 
              className="h-12 w-12 text-black" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: '3rem' }}
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
            <span className="font-display tracking-[0.25em] text-lg font-bold text-black uppercase">
              Shaina Cafe
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => setCurrentPage(item.id)}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 relative py-2 ${
                  currentPage === item.id 
                    ? 'text-black font-semibold' 
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
                )}
              </button>
            ))}
          </nav>

          {/* Cart Trigger + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              id="navbar-cart-btn"
              onClick={() => setCurrentPage('order')}
              className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-300 relative flex items-center justify-center"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white border-white text-[9px] w-5 h-5 flex items-center justify-center rounded-none font-sans font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 border border-black hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div id="mobile-menu-overlay" className="lg:hidden fixed inset-x-0 bottom-0 top-20 bg-white z-40 border-t border-black animate-none overflow-y-auto">
          <div className="px-6 py-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-[0.2em] py-3 px-4 border-b border-black/5 hover:bg-black hover:text-white transition-all duration-300 ${
                  currentPage === item.id ? 'bg-black text-white font-bold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
