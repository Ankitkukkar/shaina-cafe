import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'Food' | 'Drinks' | 'Interior';
  title: string;
  description: string;
  image: string;
}

export default function GalleryView() {
  const [filter, setFilter] = useState<'All' | 'Food' | 'Drinks' | 'Interior'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'Food',
      title: 'Artisan Sourdough Slices',
      description: 'Slow-yeast sourdough accompanied by cold-pressed olive oils.',
      image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g2',
      category: 'Interior',
      title: 'Minimalist Counter Seatings',
      description: 'Clean geometry highlighting physical shadows and lights.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g3',
      category: 'Drinks',
      title: 'House Blend Craft Espresso',
      description: 'Double extraction featuring delicate crema with dark cocoa hints.',
      image: 'https://images.unsplash.com/photo-1510972527409-cef190317417?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g4',
      category: 'Food',
      title: 'Signature Black Burger',
      description: 'Pure charcoal-infused brioche with standard high-melt white cheese.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g5',
      category: 'Drinks',
      title: 'Charcoal Brew Extraction',
      description: 'A premium combination of raw activated charcoal and house cold brew.',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g6',
      category: 'Interior',
      title: 'The Solitude Espresso Bar',
      description: 'Espresso workbench featuring our state-of-the-art Italian extraction.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g7',
      category: 'Food',
      title: 'Gourmet Truffle Fry Sets',
      description: 'Crisp rosemary fries tossed gently in high-mineral black salts.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g8',
      category: 'Drinks',
      title: 'Nitro Espresso Stout Float',
      description: 'Steeped for 24 hours, served dense over vanilla bean cream.',
      image: 'https://images.unsplash.com/photo-1461023215437-076839a44015?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'g9',
      category: 'Interior',
      title: 'Lounge Bench Alignment',
      description: 'Exquisite comfort framed by smooth high-contrast iron angles.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredItems = galleryItems.filter(item => filter === 'All' || item.category === filter);

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex(item => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length));
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === null ? null : (prev + 1) % galleryItems.length));
    }
  };

  return (
    <div id="gallery-view" className="bg-white">
      {/* Page Title Header */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Our Visual Identity</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          The <span className="font-bold">Gallery</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Sorting Category Badges */}
        <div id="gallery-filters" className="flex flex-wrap justify-center gap-2 mb-16 select-none bg-black p-1 max-w-md mx-auto border border-black">
          {(['All', 'Food', 'Drinks', 'Interior'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-1 px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white text-black font-extrabold' 
                  : 'bg-black text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Column Layout */}
        <div id="gallery-grid" className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="break-inside-avoid border border-black bg-white group cursor-pointer overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="relative overflow-hidden border-b border-black aspect-auto bg-black">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover filter grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay card icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="w-10 h-10 border border-white flex items-center justify-center text-white bg-black/60">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Descriptions */}
              <div className="p-5 space-y-1.5 select-none bg-white">
                <span className="text-[9px] uppercase tracking-widest text-black/45 font-mono">
                  {item.category}
                </span>
                <h3 className="font-display text-xs uppercase tracking-wider font-bold text-black group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-[10px] text-black/60 font-sans font-light leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay Modal */}
      {lightboxIndex !== null && (
        <div 
          id="gallery-lightbox-modal"
          onClick={closeLightbox}
          className="fixed inset-0 bg-black z-50 flex flex-col justify-between p-6 select-none cursor-zoom-out"
        >
          {/* Lightbox Actions Top */}
          <div className="flex justify-between items-center text-white w-full max-w-7xl mx-auto pt-4 z-10">
            <span className="text-[10px] uppercase tracking-widest font-mono text-white/55">
              Image {lightboxIndex + 1} of {galleryItems.length} &bull; {galleryItems[lightboxIndex].category}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 border border-white/20 hover:border-white text-white transition-colors duration-300 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Lightbox Imagery Content Workspace */}
          <div className="flex-1 flex items-center justify-center relative my-4 w-full">
            {/* Left controller */}
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 border border-white/10 hover:border-white text-white hover:bg-white/10 transition-colors duration-300 z-10 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Main Img Container */}
            <div className="max-w-4xl max-h-[70vh] border border-white/20 p-2 bg-black flex items-center justify-center select-none overflow-hidden">
              <img 
                src={galleryItems[lightboxIndex].image} 
                alt={galleryItems[lightboxIndex].title} 
                className="max-w-full max-h-[66vh] object-contain filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right controller */}
            <button
              onClick={nextImage}
              className="absolute right-4 p-3 border border-white/10 hover:border-white text-white hover:bg-white/10 transition-colors duration-300 z-10 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Bottom Metagrid captions */}
          <div className="w-full max-w-4xl mx-auto text-center text-white pb-6 space-y-1">
            <h4 className="font-display text-sm uppercase tracking-widest font-bold">
              {galleryItems[lightboxIndex].title}
            </h4>
            <p className="text-xs text-white/60 font-sans font-light max-w-md mx-auto">
              {galleryItems[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
