import React, { useState } from 'react';
import { Star, MessageSquare, Check, PenTool } from 'lucide-react';
import { Review } from '../types';

export default function ReviewsView() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'rev1',
      name: 'Amanpreet Singh',
      rating: 5,
      comment: 'Excellent customer service. The custom black cappuccino was flawless, robust depth and visually magnificent. Dabwali finally has a premium café destination!',
      date: 'May 28, 2026'
    },
    {
      id: 'rev2',
      name: 'Preeti Sharma',
      rating: 5,
      comment: 'I checked in last weekend with my colleagues. The five-cheese wood-fired pizza accompanied by smoked tea is highly recommended. Peaceful environment.',
      date: 'May 24, 2026'
    },
    {
      id: 'rev3',
      name: 'Vikram Aditya',
      rating: 5,
      comment: 'Absolutely love the physical discipline here. Highly curated black and white branding, clean stoneware cups, and silent acoustics. Exceptional coffee consistency.',
      date: 'May 19, 2026'
    },
    {
      id: 'rev4',
      name: 'Gaurav K.',
      rating: 4,
      comment: 'Very premium chocolate gateau and nitro cold brew. Taste profile is deep, not overly sweet. Service is highly professional.',
      date: 'May 12, 2026'
    }
  ]);

  // Form states
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      rating: rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setRating(5);
    setComment('');
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div id="reviews-view" className="bg-white">
      {/* Header */}
      <section className="py-20 bg-black text-white text-center select-none border-b border-black">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-2 block">Guest Experiences</span>
        <h1 className="font-display text-4xl sm:text-5xl font-light uppercase tracking-[0.25em]">
          Customer <span className="font-bold">Reviews</span>
        </h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-6" />
      </section>

      {/* Main container */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: List of Reviews */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 block">Shared Opinions</span>
              <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-black">
                Gourmet Feedback
              </h2>
              <p className="text-xs text-black/50 font-sans font-light max-w-sm">
                Authentic testimonials submitted by registered guests from Dabwali.
              </p>
              <div className="w-10 h-[1px] bg-black" />
            </div>

            <div className="space-y-6">
              {reviews.map((rev) => (
                <div key={rev.id} className="border border-black p-6 sm:p-8 bg-white space-y-4 select-none">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="font-display text-xs uppercase tracking-wider font-bold text-black">
                        {rev.name}
                      </h3>
                      <span className="text-[9px] text-black/40 font-mono font-medium block">
                        {rev.date}
                      </span>
                    </div>

                    {/* Star ratings */}
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < rev.rating ? 'text-black fill-black' : 'text-black/10'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-black/85 leading-relaxed font-sans font-light italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Submit Form */}
          <div className="lg:col-span-5 border border-black p-6 sm:p-8 bg-white lg:sticky lg:top-24">
            <h3 className="font-display text-xs uppercase tracking-wider font-bold mb-6 text-black border-b border-black/10 pb-4 flex items-center space-x-2">
              <PenTool className="h-4 w-4" />
              <span>Submit Guest Review</span>
            </h3>

            {success && (
              <div className="mb-6 p-4 border border-black bg-black text-white text-xs flex items-center space-x-2 animate-none font-sans font-medium">
                <Check className="h-4 w-4 shrink-0 stroke-[2.5]" />
                <span>Thank you. Your review has been submitted successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-5 font-sans">
              
              {/* Name */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                  Your Full Name *
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

              {/* Score Interactive click stars */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                  Star Rating Score *
                </label>
                <div className="flex items-center space-x-1.5 p-2 border border-black bg-black/5 max-w-max select-none">
                  {[1, 2, 3, 4, 5].map((starNum) => {
                    const active = hoverRating !== null ? starNum <= hoverRating : starNum <= rating;
                    return (
                      <button
                        key={starNum}
                        type="button"
                        onClick={() => setRating(starNum)}
                        onMouseEnter={() => setHoverRating(starNum)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 focus:outline-none hover:scale-110 transition-transform"
                        aria-label={`Select ${starNum} Stars`}
                      >
                        <Star 
                          className={`h-5 w-5 transition-colors ${
                            active 
                              ? 'text-black fill-black' 
                              : 'text-black/25'
                          }`} 
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feed Description */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-black/60 mb-2 font-bold">
                  Feedback Comment *
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How was your Shaina espresso craft or pizza dining? Share your genuine feedback..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full text-xs text-black border border-black p-3 rounded-none focus:outline-none focus:ring-0 resize-none font-sans font-light"
                />
              </div>

              {/* Submit trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white hover:bg-white hover:text-black border border-black transition-colors duration-300 text-xs uppercase tracking-widest font-extrabold"
                >
                  PUBLISH FEEDBACK
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
