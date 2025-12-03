import React from 'react';
import { Quote, Star, MapPin } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials = ({ items }: { items: Testimonial[] }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
       <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">Client Stories</span>
            <h2 className="text-4xl font-display font-bold mt-4 text-slate-900">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Thousands</span></h2>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
           {items.map((item) => (
               <div key={item.id} className="relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] hover:bg-white/80 transition-all duration-500 shadow-lg group">
                   {/* Quote Icon */}
                   <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 rotate-12 group-hover:rotate-0 transition-transform">
                       <Quote size={24} className="fill-current" />
                   </div>

                   <p className="mt-6 text-slate-600 italic font-medium leading-relaxed mb-8">"{item.text}"</p>

                   <div className="flex items-center gap-4">
                       <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                       <div>
                           <h4 className="font-bold text-slate-900">{item.name}</h4>
                           <p className="text-xs text-primary font-bold uppercase tracking-wide">{item.role}</p>
                           <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                               <MapPin size={10} /> {item.location}
                           </div>
                       </div>
                   </div>
                   
                   <div className="absolute top-8 right-8 flex gap-0.5 text-amber-400">
                       {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-current" />)}
                   </div>
               </div>
           ))}
       </div>
    </section>
  );
};

export default Testimonials;