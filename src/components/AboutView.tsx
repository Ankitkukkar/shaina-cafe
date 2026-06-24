import React from 'react';
import { Target, Heart, Eye, Award } from 'lucide-react';

export default function AboutView() {
  return (
    <div id="about-view" className="bg-white">
      {/* Page Title Header */}
      <section className="py-20 border-b border-black text-center bg-black text-white select-none">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Premium Heritage</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          Our <span className="font-bold">Story</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/60 block">The Genesis</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-black">
              Born from simplicity, crafted for moments.
            </h2>
            <p className="text-sm text-black/70 font-sans tracking-wide leading-relaxed font-light">
              Shaina Cafe was founded with a singular, unyielding vision: to create a dedicated space in Dabwali, Haryana, where the artistry of fine coffee and artisan cuisine could be celebrated in its purest form.
            </p>
            <p className="text-xs text-black/60 font-sans leading-relaxed font-light">
              We asked ourselves why dining spaces have become so overwhelmingly noisy—full of bright artificial colors, plastic decorations, and sensory distraction. We chose a different path. By limiting our architectural design, tableware, branding, and visuals strictly to high-contrast black and white, we redirect focus back to what truly matters: the fragrance of freshly crushed single-origin espresso beans, the texture of artisanal sourdough, and the organic warmth of human connection.
            </p>
          </div>
          <div className="border border-black p-2 bg-white flex items-center justify-center">
            <div className="border border-black/20 w-full overflow-hidden aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" 
                alt="Roasting processes" 
                className="w-full h-full object-cover filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Values Section */}
      <section className="py-24 bg-black text-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 block">Core Philosophy</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white">
              Mission & Values
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border border-white/10 p-8 hover:border-white/50 transition-colors duration-300">
              <div className="w-10 h-10 border border-white flex items-center justify-center mx-auto mb-6">
                <Target className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-display text-sm uppercase tracking-widest font-bold text-white mb-3">Absolute Purism</h3>
              <p className="text-white/60 text-xs font-sans font-light leading-relaxed">
                We utilize zero artificial food dyes, flavor enhancers, or cheap fillers. Every plate is crafted from raw, natural ingredients prepared with classical expertise.
              </p>
            </div>

            <div className="border border-white/10 p-8 hover:border-white/50 transition-colors duration-300">
              <div className="w-10 h-10 border border-white flex items-center justify-center mx-auto mb-6">
                <Eye className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-display text-sm uppercase tracking-widest font-bold text-white mb-3">Visual Harmony</h3>
              <p className="text-white/60 text-xs font-sans font-light leading-relaxed">
                Our strict monochrome discipline ensures a clutter-free visual environment. It calms the mind, highlights food aesthetics, and lets clarity thrive.
              </p>
            </div>

            <div className="border border-white/10 p-8 hover:border-white/50 transition-colors duration-300">
              <div className="w-10 h-10 border border-white flex items-center justify-center mx-auto mb-6">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-display text-sm uppercase tracking-widest font-bold text-white mb-3">Community Legacy</h3>
              <p className="text-white/60 text-xs font-sans font-light leading-relaxed">
                We believe in serving our community in Dabwali with premium standards previously found only in major world capitals. Luxury should have a local home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cafe Experience Description */}
      <section className="py-24 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 border border-black p-2 bg-white flex items-center justify-center">
            <div className="border border-black/20 w-full overflow-hidden aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800" 
                alt="Brewing Coffee" 
                className="w-full h-full object-cover filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/60 block">The Experience</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-black">
              A visual retreat of shadow and light.
            </h2>
            <p className="text-sm text-black/70 font-sans tracking-wide leading-relaxed font-light">
              Stepping inside Shaina Cafe is an instant reset. The gentle hum of our Italian espresso machine, the crisp white linen napkins, and the sleek black iron fixtures define an exceptional architecture of shadow and light.
            </p>
            <p className="text-xs text-black/60 font-sans leading-relaxed font-light">
              We focus on a sensory journey. Our drinks are served in custom hand-thrown black ceramic mugs, and our meals onto bespoke heavy white stoneware plates. Whether you are ordering a rich, dense taglitelle or slow dripped pour-over cup, you are participating in a premium ritual of design and flavour consistency.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Team Introduction & Coffee Artisans */}
      <section className="py-24 border-b border-black bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Our Craftspeople</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-black">
              Culinary & Coffee Artisans
            </h2>
            <div className="w-12 h-[1px] bg-black mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ranveer Brar",
                role: "Lead Culinary Curator",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Jaspreet Singh",
                role: "Master Coffee Roaster",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Simran Kaur",
                role: "Bespoke Patissier",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
              }
            ].map((member, index) => (
              <div key={index} className="border border-black bg-white group overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden border-b border-black relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-display text-sm uppercase tracking-wider font-bold text-black">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-black/50 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cafe Interior Gallery Preview */}
      <section className="py-24 border-b border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 block">Architectural Space</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white">
              Interior Solitude
            </h2>
            <p className="text-xs text-white/50 max-w-md mx-auto leading-relaxed">
              Quiet geometry that prioritizes high comfort and serene focus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="overflow-hidden border border-white/20 aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                alt="Cafe interior bench seat" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden border border-white/20 aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
                alt="Cafe counter espresso bar" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customer Commitment */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Our Promise</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-black">
            Our Customer Commitment
          </h2>
          <p className="text-xs text-black/60 font-sans leading-relaxed font-light max-w-xl mx-auto">
            Whether ordering online for local home delivery in Dabwali, booking an exclusive evening table session, or choosing Shaina Cafe for a peaceful afternoon espresso—you will experience absolute standards of presentation, purity, and aesthetic silence.
          </p>
          <div className="w-12 h-[1px] bg-black mx-auto" />
        </div>
      </section>
    </div>
  );
}
