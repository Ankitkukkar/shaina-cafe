import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, ShieldCheck, Ticket, MapPin, Truck, ChevronRight } from 'lucide-react';
import { MenuItem, CartItem, Order } from '../types';

interface OrderViewProps {
  cart: CartItem[];
  updateCartQuantity: (itemId: string, diff: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  submitOrder: (order: Order) => void;
  setCurrentPage: (page: string) => void;
  setTrackOrderIdInput: (orderId: string) => void;
}

export default function OrderView({
  cart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  submitOrder,
  setCurrentPage,
  setTrackOrderIdInput
}: OrderViewProps) {
  // Ordering form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [couponInput, setCouponInput] = useState('');
  const [appliedDiscountRate, setAppliedDiscountRate] = useState(0); // e.g. 0.15 for 15%
  const [appliedCouponName, setAppliedCouponName] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Calculate prices
  const subtotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0);
  const discountAmount = Math.round(subtotal * appliedDiscountRate);
  const deliveryCharge = deliveryType === 'delivery' && subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal > 0 ? (subtotal - discountAmount + deliveryCharge) : 0;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    
    const code = couponInput.trim().toUpperCase();
    if (code === 'SHAINA15') {
      setAppliedDiscountRate(0.15);
      setAppliedCouponName('SHAINA15');
      setCouponSuccess('15% discount has been applied successfully!');
    } else if (code === '') {
      setCouponError('Please enter a coupon code.');
    } else {
      setCouponError('Invalid coupon code. Try using SHAINA15');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedDiscountRate(0);
    setAppliedCouponName('');
    setCouponInput('');
    setCouponSuccess('');
    setCouponError('');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // Generate custom Order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000); // 5 digits
    const generatedId = `SC-${randomNum}`;

    const newOrder: Order = {
      id: generatedId,
      date: new Date().toISOString(),
      status: 'received',
      items: [...cart],
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerAddress: deliveryType === 'delivery' ? customerAddress.trim() : 'Pickup from Cafe - Dabwali',
      type: deliveryType,
      subtotal: subtotal,
      discount: discountAmount,
      total: grandTotal,
      couponCode: appliedCouponName || undefined,
      estimatedTime: deliveryType === 'delivery' ? '30 - 45 Minutes' : '15 - 20 Minutes'
    };

    // Store in global state
    submitOrder(newOrder);

    // Update tracking selection input & page redirect
    setTrackOrderIdInput(generatedId);
    setCurrentPage('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="order-view" className="bg-white">
      {/* Page Title */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Checkout Area</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          Online <span className="font-bold">Ordering</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* Primary Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {cart.length === 0 ? (
          // Empty state
          <div className="text-center py-20 border border-black p-12 max-w-lg mx-auto space-y-6">
            <ShoppingBag className="h-12 w-12 text-black mx-auto stroke-[1.2]" />
            <div className="space-y-2">
              <h2 className="font-display text-lg uppercase tracking-widest font-bold text-black">Your Cart is Empty</h2>
              <p className="text-xs text-black/60 font-sans font-light leading-relaxed">
                Add premium roasts, hand-tossed artisan pizzas, or signature blends to your basket to begin your luxury culinary order.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-extrabold hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              Exquisite Menu Options
            </button>
          </div>
        ) : (
          /* Active Cart Workspace */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* 1. Left Side: Cart Items Review */}
            <div className="lg:col-span-7 space-y-8">
              <div className="border border-black p-6 sm:p-8 bg-white space-y-6">
                <div className="flex justify-between items-center border-b border-black pb-4">
                  <h2 className="font-display text-sm uppercase tracking-wider font-bold text-black">
                    Your Shopping Bag ({cart.reduce((qty, cur) => qty + cur.quantity, 0)})
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-[10px] uppercase tracking-wider font-bold text-black/40 hover:text-black transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="divide-y divide-black/10">
                  {cart.map(({ item, quantity }) => (
                    <div key={item.id} className="py-6 flex gap-4 sm:gap-6 items-start first:pt-0 last:pb-0">
                      <div className="w-20 h-20 border border-black overflow-hidden shrink-0 relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover filter grayscale contrast-125"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-1 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div className="space-y-1">
                          <h3 className="font-display text-xs uppercase tracking-wider font-bold text-black">
                            {item.name}
                          </h3>
                          <p className="text-[10px] text-black/50 uppercase tracking-widest font-mono">
                            {item.category} &bull; ₹{item.price} each
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-black p-0.5">
                            <button
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="p-1 hover:bg-black hover:text-white transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-mono font-bold">{quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="p-1 hover:bg-black hover:text-white transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="font-mono text-xs font-bold text-black block">
                              ₹{item.price * quantity}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[10px] uppercase tracking-wider text-black/40 hover:text-black mt-1 inline-block"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery / Pickup Choice Section */}
              <div className="border border-black p-6 sm:p-8 bg-white space-y-6">
                <h3 className="font-display text-sm uppercase tracking-wider font-bold text-black">
                  Service Delivery Preferences
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`p-4 border text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 ${
                      deliveryType === 'delivery'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black/20 hover:border-black'
                    }`}
                  >
                    <Truck className="h-5 w-5" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Courier Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`p-4 border text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 ${
                      deliveryType === 'pickup'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black/20 hover:border-black'
                    }`}
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Cafe Pickup</span>
                  </button>
                </div>
              </div>

              {/* Secure Delivery/Pickup Address Form */}
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="border border-black p-6 sm:p-8 bg-white space-y-6">
                <h3 className="font-display text-sm uppercase tracking-wider font-bold text-black border-b border-black/10 pb-4">
                  Checkout Information
                </h3>

                <div className="space-y-4 font-sans">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amanpreet Singh"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 XXXXX XXXXX"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0"
                    />
                  </div>

                  {deliveryType === 'delivery' && (
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                        Delivery Address in Dabwali *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Please include landmark, street, sector, or colony name in Mandi Dabwali."
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0 resize-none"
                      />
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold flex items-center justify-center space-x-2"
                    >
                      <span>Place Secure Order</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* 2. Right Side: Summary & Coupon */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              {/* Coupon Form */}
              <div className="border border-black p-6 sm:p-8 bg-white space-y-4">
                <h3 className="font-display text-xs uppercase tracking-wider font-bold text-black flex items-center space-x-2">
                  <Ticket className="h-4 w-4" />
                  <span>Promo Coupon Code</span>
                </h3>

                {appliedCouponName ? (
                  <div className="bg-black text-white p-4 flex justify-between items-center">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-white/50 block">Coupon Active</span>
                      <strong className="text-xs tracking-widest font-mono">{appliedCouponName}</strong>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-[10px] uppercase tracking-wider underline hover:text-white/80 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. SHAINA15"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 text-xs text-black border border-black p-2.5 rounded-none font-mono focus:outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 bg-black text-white text-[10px] uppercase tracking-widest font-bold border border-black hover:bg-white hover:text-black transition-all"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponError && <p className="text-xs text-black font-extrabold">{couponError}</p>}
                {couponSuccess && <p className="text-xs text-black font-semibold font-sans">{couponSuccess}</p>}
              </div>

              {/* Order Calculations Summary */}
              <div className="border border-black p-6 sm:p-8 bg-white space-y-6">
                <h3 className="font-display text-sm uppercase tracking-wider font-bold text-black border-b border-black/10 pb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between text-black/70">
                    <span>Subtotal</span>
                    <span className="font-mono font-medium">₹{subtotal}</span>
                  </div>

                  {appliedDiscountRate > 0 && (
                    <div className="flex justify-between text-black/80 font-bold">
                      <span>Discount ({appliedDiscountRate * 100}%)</span>
                      <span className="font-mono">- ₹{discountAmount}</span>
                    </div>
                  )}

                  {deliveryType === 'delivery' ? (
                    <div className="flex justify-between text-black/70 border-b border-black/5 pb-3">
                      <span>Delivery Charge</span>
                      <span className="font-mono">₹{deliveryCharge}</span>
                    </div>
                  ) : (
                    <div className="flex justify-between text-black/70 border-b border-black/5 pb-3">
                      <span>Pickup Charge</span>
                      <span className="font-mono">Free</span>
                    </div>
                  )}

                  <div className="flex justify-between text-black text-sm font-extrabold pt-2">
                    <span className="uppercase tracking-widest">Grand Total</span>
                    <span className="font-mono">₹{grandTotal}</span>
                  </div>
                </div>

                <div className="bg-black/5 p-4 flex items-start space-x-3 text-black/70">
                  <ShieldCheck className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-relaxed font-sans">
                    <strong>100% Cash on Delivery/Pickup.</strong> Pay securely in cash or dynamic UPI QR code on receipt of goods at your doorstep in Dabwali.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}
