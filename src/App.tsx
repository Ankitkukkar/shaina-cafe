import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import MenuView from './components/MenuView';
import OrderView from './components/OrderView';
import TrackView from './components/TrackView';
import GalleryView from './components/GalleryView';
import ReservationsView from './components/ReservationsView';
import ReviewsView from './components/ReviewsView';
import ContactView from './components/ContactView';
import { MenuItem, CartItem, Order } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [trackOrderIdInput, setTrackOrderIdInput] = useState<string>('');

  // 1. LocalStorage synchronization on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shaina_cart');
    const savedOrders = localStorage.getItem('shaina_orders');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (e) {
        console.error("Failed to parse orders", e);
      }
    }
  }, []);

  // 2. Perform tracking changes & cart saves
  useEffect(() => {
    localStorage.setItem('shaina_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shaina_orders', JSON.stringify(orders));
  }, [orders]);

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const idx = prevCart.findIndex((x) => x.item.id === item.id);
      if (idx !== -1) {
        const copy = [...prevCart];
        copy[idx] = {
          ...copy[idx],
          quantity: copy[idx].quantity + 1
        };
        return copy;
      } else {
        return [...prevCart, { item, quantity: 1 }];
      }
    });

    // Provide micro-interaction feeedback or switch to ordering
    setCurrentPage('order');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const updateCartQuantity = (itemId: string, diff: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((x) => {
          if (x.item.id === itemId) {
            const nextQty = x.quantity + diff;
            return { ...x, quantity: nextQty };
          }
          return x;
        })
        .filter((x) => x.quantity > 0);
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((x) => x.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const submitOrder = (newOrder: Order) => {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    setCart([]); // Reset Cart
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView 
            setCurrentPage={setCurrentPage} 
            setSelectedCategory={setSelectedCategory}
            addToCart={addToCart}
            setTrackOrderIdInput={setTrackOrderIdInput}
          />
        );
      case 'about':
        return <AboutView />;
      case 'menu':
        return (
          <MenuView 
            addToCart={addToCart} 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'order':
        return (
          <OrderView 
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            submitOrder={submitOrder}
            setCurrentPage={setCurrentPage}
            setTrackOrderIdInput={setTrackOrderIdInput}
          />
        );
      case 'track':
        return (
          <TrackView 
            orders={orders}
            enteredOrderId={trackOrderIdInput}
            setEnteredOrderId={setTrackOrderIdInput}
          />
        );
      case 'gallery':
        return <GalleryView />;
      case 'reservations':
        return <ReservationsView />;
      case 'reviews':
        return <ReviewsView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView 
            setCurrentPage={setCurrentPage} 
            setSelectedCategory={setSelectedCategory}
            addToCart={addToCart}
            setTrackOrderIdInput={setTrackOrderIdInput}
          />
        );
    }
  };

  // Calculate cart counts
  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div id="shaina-root-theme" className="min-h-screen flex flex-col justify-between selection:bg-black selection:text-white bg-white antialiased">
      {/* Dynamic Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0 });
        }} 
        cartCount={totalCartCount} 
      />

      {/* Main Dynamic Workspace Render */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Dynamic Footer */}
      <Footer 
        setCurrentPage={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />
    </div>
  );
}
