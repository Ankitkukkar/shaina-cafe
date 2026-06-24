import React, { useState } from 'react';
import { Calendar, Users, Clock, AlignLeft, Check, Ticket, AlertCircle } from 'lucide-react';

export default function ReservationsView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingTicket, setBookingTicket] = useState<{
    id: string;
    name: string;
    guests: number;
    date: string;
    time: string;
    notes?: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    // Simulate luxury API booking
    setTimeout(() => {
      const ticketId = `SC-RES-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingTicket({
        id: ticketId,
        name: name.trim(),
        guests: guests,
        date: date,
        time: time,
        notes: notes.trim() || undefined
      });
      setIsBooking(false);
      setName('');
      setEmail('');
      setPhone('');
      setGuests(2);
      setDate('');
      setTime('');
      setNotes('');
    }, 1500);
  };

  const timeSlots = [
    '08:30 AM', '10:00 AM', '11:30 AM', '01:00 PM',
    '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM',
    '08:30 PM', '10:00 PM'
  ];

  const handleReset = () => {
    setBookingTicket(null);
  };

  return (
    <div id="reservations-view" className="bg-white">
      {/* Header */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Exclusive Seating</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          Table <span className="font-bold">Booking</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* Primary Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        {bookingTicket ? (
          /* Booking Confirmation Ticket UI */
          <div className="border border-black p-1 sm:p-2 bg-black text-white max-w-lg mx-auto shadow-xl select-none">
            <div className="border border-white/20 p-6 sm:p-10 space-y-8 bg-black">
              
              {/* Ticket Top Branding */}
              <div className="text-center space-y-2 border-b border-white/15 pb-6">
                <Ticket className="h-8 w-8 text-white mx-auto stroke-[1.2] mb-2" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 block">Confirmed Reservation</span>
                <h3 className="font-display text-lg uppercase tracking-widest font-extrabold text-white">Shaina Cafe Table</h3>
                <span className="text-xs font-mono text-white bg-white/10 px-3 py-1 mt-2 inline-block rounded-none font-bold">
                  {bookingTicket.id}
                </span>
              </div>

              {/* Ticket Specifications */}
              <div className="space-y-4 font-sans text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/55 uppercase tracking-wider">Guest Lead Name</span>
                  <span className="font-bold uppercase text-white">{bookingTicket.name}</span>
                </div>
                
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/55 uppercase tracking-wider">Reserved Seats</span>
                  <span className="font-bold uppercase text-white font-mono">{bookingTicket.guests} People</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/55 uppercase tracking-wider">Date Scheduled</span>
                  <span className="font-bold uppercase text-white font-mono">{bookingTicket.date}</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/55 uppercase tracking-wider">Arrival Slot</span>
                  <span className="font-bold uppercase text-white font-mono">{bookingTicket.time}</span>
                </div>

                {bookingTicket.notes && (
                  <div className="border-b border-white/5 pb-2 space-y-1">
                    <span className="text-white/55 uppercase tracking-wider block">Special Notes</span>
                    <p className="text-white/85 text-[11px] italic font-light">"{bookingTicket.notes}"</p>
                  </div>
                )}
              </div>

              {/* Security Alerts Disclaimer */}
              <div className="bg-white/5 p-4 border border-white/10 flex items-start space-x-3 text-white/60 text-[10px] leading-relaxed font-light">
                <AlertCircle className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <p>
                  <strong>Notice:</strong> Tables are reserved strictly for 15 minutes past scheduled arrival. For changes or cancellation contact Shaina guest desk at +91 98765 43210.
                </p>
              </div>

              {/* Back CTA */}
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300 text-[10px] uppercase tracking-widest font-extrabold"
                >
                  Book Another Table
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* Booking Reservation Form */
          <div className="border border-black p-8 sm:p-12 bg-white space-y-8">
            <div className="space-y-2">
              <h2 className="font-display text-sm uppercase tracking-wider font-bold text-black pb-4 border-b border-black/10">
                Secure An Exclusive Table Experience
              </h2>
              <p className="text-xs text-black/60 font-sans font-light leading-relaxed pt-2">
                Due to limited seating capacity and structural silence commitments, we encourage guests in Dabwali to secure room table reservations in advance. Reserve yours instantly by filling the form below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              
              {/* Name field */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amanpreet Singh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0"
                />
              </div>

              {/* Grid with Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. aman@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              {/* Schedule options: Guests Count, Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                    Number of Guests *
                  </label>
                  <div className="flex items-center border border-black p-1 bg-white">
                    <Users className="h-4 w-4 text-black/40 ml-2" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-transparent text-xs text-black p-2.5 outline-none font-semibold cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                        <option key={n} value={n} className="text-black bg-white">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                    Booking Date *
                  </label>
                  <div className="flex items-center border border-black p-1 bg-white">
                    <Calendar className="h-4 w-4 text-black/40 ml-2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent text-xs text-black p-2 font-semibold outline-none focus:ring-0 cursor-pointer uppercase"
                    />
                  </div>
                </div>
              </div>

              {/* Clock slots grid */}
              <div className="space-y-3">
                <label className="block text-[10px] uppercase tracking-wider text-black/60 font-bold">
                  Select Arrival Time Check *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 select-none">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`py-2 px-1 text-[10px] font-mono border text-center font-bold tracking-wider transition-all duration-300 ${
                        time === slot
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-black/20 hover:border-black'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {/* Required alert if not validated */}
                <input 
                  type="hidden" 
                  value={time} 
                  required 
                  onChange={() => {}} 
                />
              </div>

              {/* Special instructions field */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Allergies, wheelchair access, high seat requests, quiet room alignment..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0 resize-none"
                />
              </div>

              {/* Submit trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isBooking || !time}
                  className="w-full py-4 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 text-xs uppercase tracking-widest font-extrabold flex items-center justify-center space-x-2 disabled:opacity-40"
                >
                  {isBooking ? (
                    <span>CONFIRMING TABLE...</span>
                  ) : (
                    <>
                      <Check className="h-4 w-4 stroke-[2.5]" />
                      <span>SECURE RESERVATION</span>
                    </>
                  )}
                </button>
                {!time && (
                  <p className="text-[10px] text-center text-black font-semibold mt-2">
                    * Please select an arrival time slot to activate booking triggers.
                  </p>
                )}
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
