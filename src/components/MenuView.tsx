import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Star } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menu';

interface MenuViewProps {
  addToCart: (item: MenuItem) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function MenuView({ addToCart, selectedCategory, setSelectedCategory }: MenuViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Coffee',
    'Tea',
    'Shakes',
    'Cold Beverages',
    'Fast Food',
    'Pizza',
    'Burgers',
    'Sandwiches',
    'Pasta',
    'Desserts',
    'Special Combos'
  ];

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div id="menu-view" className="bg-white">
      {/* Menu Header with Pure Black Canvas */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Our Culinary Gallery</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          The <span className="font-bold">Menu</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Statistics Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Elegant Search Input */}
          <div className="relative w-full md:max-w-md border border-black p-1 flex items-center bg-white">
            <Search className="h-4 w-4 text-black/50 ml-3 shrink-0" />
            <input 
              type="text"
              placeholder="Search for roasts, pizzas, hand-crafted sliders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-black px-3 py-2.5 placeholder-black/35 focus:outline-none uppercase tracking-wider"
              id="menu-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-black/60 hover:text-black font-sans pr-3 font-semibold"
              >
                CLEAR
              </button>
            )}
          </div>

          <div className="text-[10px] uppercase tracking-widest text-black/60 font-mono">
            Showing {filteredItems.length} items of {MENU_ITEMS.length} total
          </div>
        </div>

        {/* Categories Horizontal Scroll Layout */}
        <div className="border border-black bg-black p-1.5 mb-16 overflow-x-auto no-scrollbar select-none">
          <div className="flex space-x-2 md:justify-center min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-300 font-bold ${
                  selectedCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white hover:bg-white/10'
                }`}
                id={`category-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                id={`menu-item-${item.id}`}
                className="border border-black bg-white flex flex-col justify-between group h-full transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-black">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-black text-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-white text-white" />
                      <span>Popular</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white text-black border border-black px-2 py-0.5 text-[9px] uppercase font-mono tracking-widest font-bold">
                    {item.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6 bg-white">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-black">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-bold text-black shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-black/60 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    id={`add-to-cart-btn-${item.id}`}
                    className="w-full py-3.5 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-extrabold flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add To Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-black p-8 max-w-md mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-black/40 block">No Match Found</span>
            <p className="text-sm font-display uppercase tracking-widest font-bold text-black">We couldn't find matches for "{searchQuery}"</p>
            <p className="text-xs text-black/60 font-sans font-light">Try searching for other ingredients like "truffle", "charcoal", "paneer", or change the active category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Special Offer Disclaimer banner */}
      <section className="py-20 border-t border-b border-black text-center bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 block">Special Offerings</span>
          <h3 className="font-display text-xl uppercase tracking-widest font-bold">
            Gourmet Combos Delivered
          </h3>
          <p className="text-white/70 text-xs font-sans font-light leading-relaxed">
            Order online from our dedicated range of special combos to experience curated food packages. Use checkout coupon <strong className="text-white bg-white/20 px-1 font-mono">SHAINA15</strong> for an exclusive 15% discount.
          </p>
        </div>
      </section>
    </div>
  );
}
