import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Check, Send } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div id="contact-view" className="bg-white">
      {/* Header */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Connect With Us</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          Contact <span className="font-bold">Us</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* Main Grid Workspace */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Direct Info Details */}
          <div className="lg:col-span-5 space-y-12 select-none">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Visit our Sanctuary</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest text-black">
                Shaina Cafe Dabwali
              </h2>
              <div className="w-10 h-[1px] bg-black" />
            </div>

            <div className="space-y-8 font-sans">
              
              {/* Point 1: Address */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 border border-black shrink-0 flex items-center justify-center bg-black text-white">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-black/55 font-bold">Physical Address</h4>
                  <p className="text-xs text-black mt-1 leading-relaxed font-light">
                    Shaina Cafe, Main Market Road,<br />
                    Masti Colony, Mandi Dabwali - 125104,<br />
                    Haryana, India
                  </p>
                </div>
              </div>

              {/* Point 2: Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 border border-black shrink-0 flex items-center justify-center bg-black text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-black/55 font-bold">Hotline Enquiries</h4>
                  <p className="text-xs text-black mt-1 font-light">
                    Phone: <span className="font-semibold">+91 98765 43210</span><br />
                    Whatsapp: <span className="font-semibold">+91 98765 43211</span>
                  </p>
                </div>
              </div>

              {/* Point 3: Email */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 border border-black shrink-0 flex items-center justify-center bg-black text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-black/55 font-bold">Electronic Mail</h4>
                  <p className="text-xs text-black mt-1 font-light">
                    Reservations: <span className="font-semibold">reserve@shainacafe.com</span><br />
                    General Support: <span className="font-semibold">info@shainacafe.com</span>
                  </p>
                </div>
              </div>

              {/* Point 4: Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 border border-black shrink-0 flex items-center justify-center bg-black text-white">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] uppercase tracking-widest text-black/55 font-bold mb-1.5">Weekly Schedule</h4>
                  <div className="space-y-1 text-xs text-black/75 max-w-xs font-light">
                    <div className="flex justify-between border-b border-black/5 pb-1">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">08:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-semibold">09:00 AM - 12:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7 border border-black p-8 sm:p-10 bg-white">
            <h3 className="font-display text-sm uppercase tracking-wider font-bold mb-6 text-black border-b border-black/10 pb-4">
              Write An Enquiry Message
            </h3>

            {submitSuccess ? (
              <div className="py-12 text-center space-y-4 max-w-sm mx-auto">
                <div className="w-12 h-12 border-2 border-black rounded-none flex items-center justify-center mx-auto bg-black text-white">
                  <Check className="h-6 w-6 stroke-[3]" />
                </div>
                <h4 className="font-display text-xs uppercase tracking-widest font-bold text-black">Message Sent Successfully</h4>
                <p className="text-xs text-black/60 font-sans font-light leading-relaxed">
                  Thank you for reaching out to Shaina Cafe. Our guest experience management team in Dabwali will review your message and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 border border-black text-[10px] uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                      Your Email *
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
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                    Subject Line *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Catering request / Event alignment"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                    Your Message *
                  </label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we assist you today? Please feel free to write here in detail."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 text-xs uppercase tracking-widest font-extrabold flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>TRANSMIT MESSAGE</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 5. Google Maps Embed Placeholder - Architectural Minimal Vector Art */}
      <section className="py-20 border-t border-black bg-black/5 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Map Registry</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-black">
              Mandi Dabwali Location
            </h2>
            <p className="text-xs text-black/50 max-w-sm mx-auto leading-relaxed">
              Found on the main intersection connecting National Highway 9, Haryana.
            </p>
          </div>

          {/* Luxury Vector map card */}
          <div className="border border-black bg-white aspect-[21/9] w-full overflow-hidden flex flex-col justify-between p-6 sm:p-12 relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              {/* Complex Vector Grid */}
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="black" strokeWidth="2" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="black" strokeWidth="1" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" strokeWidth="1" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="black" strokeWidth="2.5" />
                <line x1="90%" y1="0" x2="90%" y2="100%" stroke="black" strokeWidth="1" />
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="black" strokeWidth="1" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black" strokeWidth="2.5" />
                <line x1="0" y1="80%" x2="100%" y2="80%" stroke="black" strokeWidth="1" />
                <circle cx="70%" cy="50%" r="50" fill="transparent" stroke="black" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>

            <div className="relative z-10 space-y-2">
              <span className="px-3 py-1 bg-black text-white text-[9px] uppercase tracking-widest font-mono font-bold">
                REGISTRY OFFICE
              </span>
              <h3 className="font-display text-lg uppercase tracking-wider font-extrabold text-black">
                SHAINA CAFE HQ
              </h3>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-black/10 pt-6">
              <div className="text-xs text-black/60 leading-normal font-sans font-light">
                <strong>Coordinates:</strong> 29.9659° N, 74.7214° E<br />
                <strong>Landmark:</strong> Near Punjab-Haryana Border Crossing, Mandi Dabwali
              </div>

              <a 
                href="https://maps.google.com/?q=Shaina+Cafe,+Mandi+Dabwali,+Haryana" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black border border-black transition-colors duration-300"
              >
                OPEN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
