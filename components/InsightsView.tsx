
import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Insight } from '../types';

interface InsightsViewProps {
  insights: Insight[];
  onInsightSelect?: (insight: Insight) => void;
}

const InsightsView: React.FC<InsightsViewProps> = ({ insights, onInsightSelect }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">
               Market Intelligence
             </span>
             <h1 className="text-4xl font-display font-bold mt-4 text-slate-900">Real Estate Insights</h1>
             <p className="text-slate-500 mt-4 text-lg">
                Stay ahead of the curve with the latest trends, technology updates, and investment analysis powered by our expert team and AI.
             </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {insights.map((item) => (
               <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer" onClick={() => onInsightSelect && onInsightSelect(item)}>
                   <div className="relative h-64 overflow-hidden shrink-0">
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                           <Tag size={12} className="text-primary" /> {item.category}
                       </div>
                   </div>
                   <div className="p-8 flex flex-col flex-1">
                       <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-4">
                           <Calendar size={12} /> {item.date}
                       </div>
                       <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                           {item.title}
                       </h3>
                       <p className="text-slate-500 text-base mb-6 line-clamp-3 leading-relaxed flex-1">
                           {item.description}
                       </p>
                       <button 
                        className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:translate-x-2 transition-transform mt-auto"
                       >
                           Read Full Article <ArrowRight size={16} className="text-primary" />
                       </button>
                   </div>
               </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsView;
