
import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Insight } from '../types';

interface InsightsProps {
    items: Insight[];
    onViewAll?: () => void;
    onInsightSelect?: (insight: Insight) => void;
}

const Insights = ({ items, onViewAll, onInsightSelect }: InsightsProps) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200/50">
       <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-slate-500 font-bold tracking-wider uppercase text-xs">Market Intelligence</span>
                <h2 className="text-4xl font-display font-bold mt-2 text-slate-900">Real Estate <span className="text-emerald-600">Insights</span></h2>
            </div>
            {onViewAll && (
                <button 
                    onClick={onViewAll}
                    className="hidden md:flex items-center gap-2 text-slate-600 font-bold hover:text-primary transition-colors"
                >
                    View All Articles <ArrowRight size={18} />
                </button>
            )}
       </div>

       <div className="grid md:grid-cols-3 gap-8">
           {items.slice(0, 3).map((item) => (
               <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer" onClick={() => onInsightSelect && onInsightSelect(item)}>
                   <div className="relative h-56 overflow-hidden shrink-0">
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                           <Tag size={12} className="text-primary" /> {item.category}
                       </div>
                   </div>
                   <div className="p-6 flex flex-col flex-1">
                       <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-3">
                           <Calendar size={12} /> {item.date}
                       </div>
                       <h3 className="text-xl font-display font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                           {item.title}
                       </h3>
                       <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                           {item.description}
                       </p>
                       <button className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:translate-x-2 transition-transform mt-auto">
                           Read More <ArrowRight size={16} className="text-primary" />
                       </button>
                   </div>
               </div>
           ))}
       </div>
    </section>
  );
};

export default Insights;
