import React, { useState } from 'react';
import { ArrowRight, Star, Clock, Heart, Award, ShieldCheck, Search } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menu';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory: (category: string) => void;
  addToCart: (item: MenuItem) => void;
  setTrackOrderIdInput: (orderId: string) => void;
}

export default function HomeView({ 
  setCurrentPage, 
  setSelectedCategory, 
  addToCart, 
  setTrackOrderIdInput 
}: HomeViewProps) {
  const [trackingIdInput, setTrackingIdInput] = useState('');

  // Extract isFeatured items
  const featuredItems = MENU_ITEMS.filter(item => item.isFeatured).slice(0, 3);

  const categories = [
    { name: 'Coffee', count: 4, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400' },
    { name: 'Pizza', count: 2, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400' },
    { name: 'Burgers', count: 2, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
    { name: 'Desserts', count: 2, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400' },
  ];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingIdInput.trim()) {
      setTrackOrderIdInput(trackingIdInput.trim());
      setCurrentPage('track');
    }
  };

  return (
    <div id="home-view" className="bg-white">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center border-b border-black">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1600" 
            alt="Interior premium cafe" 
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-30 select-none pb-0"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white space-y-8 py-20 select-none">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] font-medium border-b border-white pb-2 inline-block">
              Dabwali, Haryana
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none uppercase">
              Welcome to <br />
              <span className="font-bold tracking-wider">Shaina Cafe</span>
            </h1>
            <p className="font-sans text-sm sm:text-lg tracking-[0.1em] font-light max-w-2xl mx-auto opacity-90">
              Where Great Food Meets Great Moments. An atmosphere designed with bold simplicity and luxurious focus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setCurrentPage('menu');
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-display font-medium text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-white border border-white transition-all duration-300"
            >
              View Menu
            </button>
            <button
              onClick={() => setCurrentPage('order')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-display font-medium text-xs uppercase tracking-[0.2em] border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Dishes */}
      <section id="featured-dishes" className="py-24 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Chef's Selection</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-widest text-black">
              Featured Luxuries
            </h2>
            <div className="w-12 h-[1px] bg-black mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div 
                key={item.id}
                className="border border-black flex flex-col group h-full bg-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-black">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                    Exclusive
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-black">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-black/60 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className="w-full py-3 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 text-[10px] uppercase tracking-[0.15em] font-medium"
                  >
                    Quick Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Shaina Cafe Intro & Why Choose Us */}
      <section id="about-intro" className="py-24 bg-black text-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 block">About Shaina Cafe</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-wider leading-tight">
              A Symphony of Taste & Silence
            </h2>
            <p className="text-white/75 text-sm leading-relaxed font-sans font-light">
              Founded under a philosophy of absolute minimalism, Shaina Cafe has blossomed into Dabwali’s finest culinary retreat. We strip away the unnecessary noise to focus strictly on raw, premium ingredients, outstanding craftsmanship, and breathtaking visual luxury. 
            </p>
            <p className="text-white/70 text-xs font-sans font-light">
              Every detail—from the selection of house espresso beans to our artisan-backed charcoal pizza bases—reflects a devotion to quality and visual honesty. We are a sanctuary for deep conversations and elegant moments.
            </p>
            <div>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold border-b border-white pb-1.5 hover:opacity-80 transition-opacity"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="border border-white/20 p-8 sm:p-12 space-y-8 bg-white/5">
            <h3 className="font-display text-xl uppercase tracking-[0.25em] text-white font-bold pb-2 border-b border-white/10">
              Why Shaina Cafe?
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Award className="h-5 w-5 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wider font-bold text-white">Artisanal Quality</h4>
                  <p className="text-white/60 text-xs font-sans font-light mt-1">Single-origin premium roasts and authentic wood-fire items roasted with elite skill.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ShieldCheck className="h-5 w-5 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wider font-bold text-white">Monochrome Ambiance</h4>
                  <p className="text-white/60 text-xs font-sans font-light mt-1">Relax within a strictly designed, pure black-and-white architectural cafe sanctuary.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wider font-bold text-white">Timeless Commitment</h4>
                  <p className="text-white/60 text-xs font-sans font-light mt-1">Always delivering exceptional guest support, custom catering, and immediate service response.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Categories */}
      <section id="popular-categories" className="py-24 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Explore Flavours</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-widest text-black">
              Popular Categories
            </h2>
            <div className="w-12 h-[1px] bg-black mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setCurrentPage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-black group cursor-pointer overflow-hidden relative aspect-[4/5] bg-black text-white"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 group-hover:scale-105 group-hover:brightness-35 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{cat.count} Exquisite Items</span>
                  <h3 className="font-display text-lg uppercase tracking-widest font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                    {cat.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Live Tracking Shortcuts */}
      <section id="tracking-shortcut" className="py-20 bg-black text-white border-b border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-display text-2xl uppercase tracking-[0.2em] font-bold">
            Track Your Order In Real-Time
          </h3>
          <p className="text-white/60 text-xs font-sans font-light max-w-xl mx-auto">
            Placed an order online? Enter your Order ID below to track its live status from received to delivered. Use ID <strong className="text-white bg-white/20 px-1.5 py-0.5 font-mono select-all">SC-DEMO</strong> for an interactive demo.
          </p>
          <form onSubmit={handleTrackSubmit} className="max-w-md mx-auto flex items-center border border-white p-1">
            <input 
              type="text" 
              placeholder="e.g. SC-DEMO"
              value={trackingIdInput}
              onChange={(e) => setTrackingIdInput(e.target.value)}
              className="bg-transparent text-white font-mono placeholder-white/30 text-xs px-4 py-3 focus:outline-none flex-1 tracking-widest uppercase"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white transition-all duration-300 text-xs uppercase tracking-widest font-bold"
            >
              Track Status
            </button>
          </form>
        </div>
      </section>

      {/* 6. Gallery Preview */}
      <section id="gallery-preview" className="py-24 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-16">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Visual Silence</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-black">
                Cafe Ambiance Grid
              </h2>
            </div>
            <button
              onClick={() => {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-black pb-1.5 hover:opacity-60 transition-opacity"
            >
              View Full Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
            ].map((url, idx) => (
              <div key={idx} className="border border-black overflow-hidden relative aspect-[4/3] group bg-black">
                <img 
                  src={url} 
                  alt="Cafe atmosphere space" 
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <section id="testimonials" className="py-24 bg-white/50 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Client Appreciations</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-widest text-black">
              Gourmet Opinions
            </h2>
            <div className="w-12 h-[1px] bg-black mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amanpreet Singh",
                role: "Coffee Aficionado",
                quote: "The Charcoal Latte in Shaina Cafe is a masterpiece. To have this level of aesthetic curation and roast precision in Dabwali is phenomenal.",
                rating: 5
              },
              {
                name: "Preeti Sharma",
                role: "Gastronomy Enthusiast",
                quote: "Stunning minimalist setup. The wild mushroom and truffle pizza is spectacular, cooked dry and rich in charcoal flavour with plenty of wild mushrooms.",
                rating: 5
              },
              {
                name: "Vikram Aditya",
                role: "Regular Guest",
                quote: "Simple, honest, premium. They stick completely to their vision. Perfect place to sit with a book, or have business alignments in peace.",
                rating: 5
              }
            ].map((test, index) => (
              <div key={index} className="border border-black p-8 bg-white flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-black fill-black" />
                    ))}
                  </div>
                  <p className="text-xs text-black/80 font-sans italic leading-relaxed font-light">
                    "{test.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-xs uppercase tracking-wider font-bold text-black">{test.name}</h4>
                  <span className="text-[10px] text-black/50 tracking-widest uppercase">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
