
import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const INSTA_POSTS = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    caption: "Buy your perfect home in the heart of the city. #DreamHome #HuntProperty",
    likes: "1.2k"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    caption: "We are here to make your dream come true. Explore luxury living. #RealEstate #ModernLiving",
    likes: "850"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    caption: "Ready to move plots near Noida International Airport. #Investment #YamunaExpressway",
    likes: "2.4k"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2020&auto=format&fit=crop",
    caption: "The ideal location for your future business or home. #CityLife #NewLaunch",
    likes: "1.1k"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop",
    caption: "We make living better in the ideal location! #Lifestyle #HuntProperty2025",
    likes: "3.2k"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop",
    caption: "Noida International Airport connectivity now at your doorstep. #Infrastructure #Growth",
    likes: "940"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100 text-[10px] font-bold uppercase tracking-widest">
            <Instagram size={12} /> Social Presence
          </div>
          <h2 className="text-4xl font-display font-bold text-slate-900">
            Instagram <span className="text-pink-600">Feed</span>
          </h2>
          <p className="text-slate-500 max-w-md font-medium">
            Join our community of over 50,000 homeowners and investors.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2">
            <button className="p-3 rounded-full border border-slate-200 text-slate-400 hover:border-pink-500 hover:text-pink-500 transition-all bg-white shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button className="p-3 rounded-full border border-slate-200 text-slate-400 hover:border-pink-500 hover:text-pink-500 transition-all bg-white shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-500 text-white font-bold text-sm flex items-center gap-2 hover:shadow-xl hover:shadow-pink-500/20 transition-all active:scale-95">
            Follow @huntproperty <ExternalLink size={14} />
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar -mx-6 px-6 gap-6 snap-x snap-mandatory">
        {INSTA_POSTS.map((post) => (
          <div key={post.id} className="min-w-[280px] md:min-w-[320px] aspect-square snap-start group relative">
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <img 
                src={post.imageUrl} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex flex-col items-center text-white gap-1">
                  <Heart className="fill-white" size={24} />
                  <span className="font-bold text-sm">{post.likes}</span>
                </div>
                <div className="flex flex-col items-center text-white gap-1">
                  <MessageCircle className="fill-white" size={24} />
                  <span className="font-bold text-sm">42</span>
                </div>
              </div>

              {/* Brand Footer like in the original image */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">H</div>
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Hunt Property</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200"></div>
                  <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-8 opacity-40 grayscale pointer-events-none">
          {/* Subtle branding strip mirroring the UI of the provided image */}
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Commercial</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Residential</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Retail</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Office</span>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
