import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Shaina House Blend Espresso',
    description: 'Velvety-smooth double shot with dense crema and notes of rich dark cocoa and cedar.',
    category: 'Coffee',
    price: 180,
    image: 'https://images.unsplash.com/photo-1510972527409-cef190317417?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'c2',
    name: 'Premium Pour Over',
    description: 'Carefully brewed single-origin Arabica beans, clean finish with high clarity.',
    category: 'Coffee',
    price: 220,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },
  {
    id: 'c3',
    name: 'Obsidian Charcoal Latte',
    description: 'Our signature espresso enriched with organic micro-activated charcoal and steamed whole milk.',
    category: 'Coffee',
    price: 240,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'c4',
    name: 'Nitro Cold Brew',
    description: '24-hour slow steep infused with food-grade nitrogen for a creamy, stout-like texture.',
    category: 'Coffee',
    price: 210,
    image: 'https://images.unsplash.com/photo-1461023215437-076839a44015?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // TEA
  {
    id: 't1',
    name: 'Kashmiri Saffron Kahwa',
    description: 'Exquisite green tea brewed with genuine saffron strands, crushed almonds, cardamoms, and cinnamon.',
    category: 'Tea',
    price: 160,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 't2',
    name: 'Smoked Lapsang Souchong',
    description: 'Distinctive pine-smoked black tea leaves, offering a bold and savory aroma.',
    category: 'Tea',
    price: 150,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // SHAKES
  {
    id: 's1',
    name: 'Black Velvet Cocoa Shake',
    description: 'Gourmet 72% Belgian chocolate blended with premium vanilla cream and dark cookie dust.',
    category: 'Shakes',
    price: 250,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 's2',
    name: 'Madagascar Vanilla Bean Shake',
    description: 'Sublime double-cream shake blended with imported organic cold-pressed vanilla pods.',
    category: 'Shakes',
    price: 230,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // COLD BEVERAGES
  {
    id: 'cb1',
    name: 'Black Tonic',
    description: 'Cold brew espresso floating on dry tonic water, complete with a cold-pressed citrus wheel.',
    category: 'Cold Beverages',
    price: 190,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 'cb2',
    name: 'Charcoal Lemonade',
    description: 'Fresh organic squeezed lemon, structured water, raw agave, and active pharmaceutical-grade charcoal.',
    category: 'Cold Beverages',
    price: 180,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // FAST FOOD
  {
    id: 'ff1',
    name: 'Black Truffle Fries',
    description: 'Hand-cut premium potatoes tossed in pure Italian black truffle oil and crushed sea salt.',
    category: 'Fast Food',
    price: 195,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 'ff2',
    name: 'Charcoal Crisp Tempura Onion Rings',
    description: 'Crispy, carbon-battered tempura ring onions served with a garlic-infused white emulsion dipping.',
    category: 'Fast Food',
    price: 175,
    image: 'https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // PIZZA
  {
    id: 'p1',
    name: 'Forest Mushroom & White Truffle Pizza',
    description: 'Topped with wild porcini, wood-ear, truffle-infused cream cheese, and fresh micro-thyme on our signature light crust.',
    category: 'Pizza',
    price: 490,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'High-Contrast Margherita',
    description: 'Rich slow-cooked dark pomodoro base, premium buffalo mozzarella medallions, fresh sweet basil, and extra virgin olive oil.',
    category: 'Pizza',
    price: 420,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // BURGERS
  {
    id: 'b1',
    name: 'Shaina Signature Black Burger',
    description: 'Charcoal brioche bun, grilled custom patty, melted white cheddar, house black aioli, and crisp heirloom endive.',
    category: 'Burgers',
    price: 320,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'b2',
    name: 'Charcoal Grilled Paneer Burger',
    description: 'Thick marinated cottage cheese steak cooked over wood fire, smoked white glaze, and custom cucumber shavings.',
    category: 'Burgers',
    price: 290,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // SANDWICHES
  {
    id: 'sd1',
    name: 'Toasted Sourdough Caprese',
    description: 'Locally sourced wild yeast sourdough slice with heirloom plum tomatoes, fresh mozzarella, and cold-pressed pine nut oil.',
    category: 'Sandwiches',
    price: 260,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 'sd2',
    name: 'Edamame Smashed Toast',
    description: 'Warm seed sourdough topped with green edamame mash, black sea salt, flaked pepper, and white sesame topping.',
    category: 'Sandwiches',
    price: 270,
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // PASTA
  {
    id: 'ps1',
    name: 'Black Garlic Tagliatelle',
    description: 'Artisanal hand-cut pasta draped gently in an emulsion of caramelized black garlic, extra virgin olive oil, and premium pecorino.',
    category: 'Pasta',
    price: 380,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 'ps2',
    name: 'Smoked White Penne',
    description: 'Tossed in a rich, slow-simmered white wine cream with roasted garlic cloves, parmigiano-reggiano, and micro-parsley.',
    category: 'Pasta',
    price: 360,
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0bc6?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Darkness Lava Gateau',
    description: '72% Single-origin dark chocolate cake with a warm flowing core, paired with house-made premium vanilla bean cream.',
    category: 'Desserts',
    price: 240,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'd2',
    name: 'Pure Vanilla Panna Cotta',
    description: 'Gently sweetened heavy cream mold set with genuine vanilla pod scrapings and finished with a dark espresso glaze.',
    category: 'Desserts',
    price: 210,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  },

  // SPECIAL COMBOS
  {
    id: 'sc1',
    name: 'The Shaina Signature Club',
    description: 'A curated pairing of the Signature Black Burger, Black Truffle Fries, and our signature Obsidian Charcoal Latte.',
    category: 'Special Combos',
    price: 650,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'sc2',
    name: 'The Artisanal High-Tea',
    description: 'Toasted Sourdough Caprese paired styled alongside the Kashmiri Saffron Kahwa and Darkness Lava Gateau.',
    category: 'Special Combos',
    price: 580,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
    isPopular: false
  }
];
