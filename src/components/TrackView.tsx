import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, CornerDownRight, Check, CheckCircle2 } from 'lucide-react';
import { Order, OrderStatus } from '../types';

interface TrackViewProps {
  orders: Order[];
  enteredOrderId: string;
  setEnteredOrderId: (orderId: string) => void;
}

export default function TrackView({ orders, enteredOrderId, setEnteredOrderId }: TrackViewProps) {
  const [searchId, setSearchId] = useState(enteredOrderId || '');
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  
  // Simulation ticks for demo
  const [demoStatus, setDemoStatus] = useState<OrderStatus>('received');
  const [timerTick, setTimerTick] = useState<number>(0);

  // Search logic
  useEffect(() => {
    if (enteredOrderId) {
      setSearchId(enteredOrderId);
    }
  }, [enteredOrderId]);

  // Lookup order
  useEffect(() => {
    const cleanId = searchId.trim().toUpperCase();
    if (!cleanId) {
      setCurrentOrder(null);
      return;
    }

    if (cleanId === 'SC-DEMO') {
      // Setup high quality dummy order
      const demoOrder: Order = {
        id: 'SC-DEMO',
        date: new Date().toISOString(),
        status: demoStatus,
        customerName: 'Amanpreet Singh',
        customerPhone: '+91 98765 43210',
        customerAddress: 'House 410, Sector 10, Mandi Dabwali, Haryana',
        type: 'delivery',
        subtotal: 515,
        discount: 75,
        total: 490,
        couponCode: 'SHAINA15',
        estimatedTime: '25 Minutes remaining',
        items: [
          {
            item: {
              id: 'c3',
              name: 'Obsidian Charcoal Latte',
              description: '',
              category: 'Coffee',
              price: 240,
              image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=300'
            },
            quantity: 1
          },
          {
            item: {
              id: 'sd2',
              name: 'Edamame Smashed Toast',
              description: '',
              category: 'Sandwiches',
              price: 275,
              image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=300'
            },
            quantity: 1
          }
        ]
      };
      setCurrentOrder(demoOrder);
    } else {
      const found = orders.find(o => o.id.toUpperCase() === cleanId);
      if (found) {
        setCurrentOrder(found);
      } else {
        setCurrentOrder(null);
      }
    }
  }, [searchId, orders, demoStatus]);

  // Demo status cycle
  useEffect(() => {
    if (searchId.trim().toUpperCase() === 'SC-DEMO') {
      const interval = setInterval(() => {
        setTimerTick(prev => {
          const next = (prev + 1) % 5;
          const statuses: OrderStatus[] = ['received', 'preparing', 'ready', 'delivering', 'delivered'];
          setDemoStatus(statuses[next]);
          return next;
        });
      }, 7000); // cycle every 7s
      return () => clearInterval(interval);
    }
  }, [searchId]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnteredOrderId(searchId.trim().toUpperCase());
  };

  const getOrderStatusIndex = (status: OrderStatus): number => {
    const statuses: OrderStatus[] = ['received', 'preparing', 'ready', 'delivering', 'delivered'];
    return statuses.indexOf(status);
  };

  const activeIndex = currentOrder ? getOrderStatusIndex(currentOrder.status) : 0;

  const steps = [
    { title: 'Order Received', desc: 'Cafe acknowledged order' },
    { title: 'In Kitchen', desc: 'Chefs preparing request' },
    { title: 'Ready', desc: 'Craft packaged neatly' },
    { 
      title: currentOrder?.type === 'pickup' ? 'Ready at Counter' : 'Dispatched', 
      desc: currentOrder?.type === 'pickup' ? 'Collect from store front' : 'Rider out on Dabwali streets' 
    },
    { title: 'Completed', desc: 'Enjoy your luxury experience' }
  ];

  return (
    <div id="track-view" className="bg-white min-h-[80vh]">
      {/* Header */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Live Progress</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          Order <span className="font-bold">Tracking</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        
        {/* Lookup bar */}
        <div className="border border-black p-6 sm:p-8 bg-white space-y-4 mb-12">
          <h2 className="font-display text-xs uppercase tracking-widest font-bold text-black">
            Enter Your Tracking ID
          </h2>
          <form onSubmit={handleSearchSubmit} className="flex gap-2 border border-black p-1">
            <input 
              type="text"
              placeholder="e.g. SC-58193 or SC-DEMO"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="bg-transparent text-xs text-black font-mono placeholder-black/30 px-3 py-2.5 focus:outline-none flex-1 uppercase tracking-widest"
              id="tracking-search-field"
            />
            <button 
              type="submit"
              className="px-6 py-2.5 bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black transition-all text-xs uppercase tracking-widest font-bold flex items-center space-x-2"
            >
              <Search className="h-3 w-3" />
              <span>Track Now</span>
            </button>
          </form>
          <p className="text-[10px] text-black/50 font-sans">
            Need an example? Search for <button onClick={() => { setSearchId('SC-DEMO'); setEnteredOrderId('SC-DEMO'); }} className="font-mono underline text-black hover:opacity-75 font-bold">SC-DEMO</button> to see the real-time simulation timeline in action.
          </p>
        </div>

        {currentOrder ? (
          /* Found Active Order Details */
          <div className="space-y-12">
            
            {/* Live status banner */}
            <div className="border border-black bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-white/50 block">Currently Tracking</span>
                <strong className="text-sm font-mono tracking-widest block uppercase text-white">{currentOrder.id}</strong>
              </div>

              <div className="space-y-1 text-left sm:text-right">
                <span className="text-[10px] uppercase tracking-widest text-white/50 block flex items-center sm:justify-end gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  Estimated Time
                </span>
                <strong className="text-xs uppercase font-sans text-white font-extrabold">{currentOrder.estimatedTime}</strong>
              </div>
            </div>

            {/* Timeline progress graphic */}
            <div className="border border-black p-6 sm:p-10 bg-white">
              <h3 className="font-display text-sm uppercase tracking-wider font-bold text-black border-b border-black/10 pb-4 mb-8">
                Preparation Journey
              </h3>

              <div className="relative">
                {/* Vertical representation for mobile/tablet, step sequence */}
                <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-black/15">
                  {steps.map((step, idx) => {
                    const isCompleted = idx < activeIndex;
                    const isActive = idx === activeIndex;
                    
                    return (
                      <div key={idx} className="flex gap-4 items-start relative pl-1">
                        {/* Dot indicator */}
                        <div 
                          className={`w-4 h-4 rounded-none border shrink-0 flex items-center justify-center transition-colors duration-300 z-10 ${
                            isCompleted 
                              ? 'bg-black border-black text-white' 
                              : isActive 
                                ? 'bg-white border-black border-2 animate-pulse text-black' 
                                : 'bg-white border-black/20 text-transparent'
                          }`}
                        >
                          {isCompleted && <Check className="h-2 w-2 stroke-[3]" />}
                          {isActive && <div className="w-1.5 h-1.5 bg-black" />}
                        </div>

                        {/* Content text */}
                        <div className="space-y-1">
                          <h4 className={`text-xs uppercase tracking-wider font-bold ${
                            isActive ? 'text-black' : isCompleted ? 'text-black/75' : 'text-black/40'
                          }`}>
                            {step.title}
                          </h4>
                          <p className="text-[10px] font-sans text-black/50 font-light">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Receipt breakdown */}
            <div className="border border-black p-6 sm:p-8 bg-white space-y-6">
              <h3 className="font-display text-sm uppercase tracking-wider font-bold text-black border-b border-black/10 pb-4">
                Summary of Selected Products
              </h3>

              <div className="divide-y divide-black/5">
                {currentOrder.items.map(({ item, quantity }) => (
                  <div key={item.id} className="py-4 flex justify-between items-center text-xs first:pt-0 last:pb-0">
                    <div className="space-y-1">
                      <strong className="text-black uppercase tracking-wider font-bold font-display block text-xs">
                        {item.name}
                      </strong>
                      <span className="text-[10px] font-mono text-black/50 block">
                        ₹{item.price} &bull; Qty: {quantity}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-black">
                      ₹{item.price * quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total calculations */}
              <div className="border-t border-black pt-4 font-sans text-xs space-y-2">
                <div className="flex justify-between text-black/60">
                  <span>Subtotal</span>
                  <span className="font-mono">₹{currentOrder.subtotal}</span>
                </div>
                {currentOrder.discount > 0 && (
                  <div className="flex justify-between text-black/80 font-bold">
                    <span>Discount Included</span>
                    <span className="font-mono">- ₹{currentOrder.discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-black font-extrabold text-sm border-t border-black/10 pt-2">
                  <span className="uppercase tracking-widest text-xs">Total Charged</span>
                  <span className="font-mono">₹{currentOrder.total}</span>
                </div>
              </div>

              {/* Delivery Destination Address */}
              <div className="border-t border-black/10 pt-4 text-xs space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-black/50 block font-bold">Shipping Destination</span>
                <p className="font-sans text-black/80">{currentOrder.customerAddress}</p>
                <p className="text-[10px] text-black/60">Recipients Phone: {currentOrder.customerPhone}</p>
              </div>
            </div>

          </div>
        ) : (
          /* Empty Search placeholder state */
          <div className="text-center py-20 border border-dashed border-black/20 p-8 max-w-md mx-auto space-y-3">
            <span className="text-[10px] uppercase tracking-wider text-black/40 block">Waiting For Search</span>
            <p className="font-display text-xs uppercase tracking-widest font-bold text-black">No Active Search Triggered</p>
            <p className="text-xs text-black/60 font-sans font-light leading-relaxed">
              Please enter an active Order ID to display live timeline updates. If you haven't ordered yet, you can use the simulation ID <strong className="text-black font-mono px-1 bg-black/5 rounded">SC-DEMO</strong> to preview our timeline tracking feature.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
