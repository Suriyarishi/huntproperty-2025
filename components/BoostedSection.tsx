import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

interface BoostedSectionProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
  onViewAll: () => void;
}

const BoostedSection: React.FC<BoostedSectionProps> = ({ properties, onPropertySelect, onViewAll }) => {
  if (properties.length === 0) return null;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="hot-badge-fire px-4 py-1.5 flex items-center gap-2 w-fit">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path className="flame-outer" d="M12 2C12 2 19 7 19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 7 12 2 12 2Z" fill="#FFF" fillOpacity="0.3" />
                    <path className="flame-middle" d="M12 7C12 7 16 10.5 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14C8 10.5 12 7 12 7Z" fill="#FFF" fillOpacity="0.6" />
                    <path className="flame-inner" d="M12 11C12 11 14 13 14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13 12 11 12 11Z" fill="#FFF" />
                </svg>
                <span className="text-shimmer text-white font-black tracking-wider uppercase text-[10px]">Hot Deals</span>
              </span>
              <span className="text-emerald-500 font-bold tracking-wider uppercase text-[10px] bg-emerald-500/5 px-4 py-1.5 rounded-full border border-emerald-500/20 flex items-center gap-2 w-fit">
                <Zap size={12} /> High Velocity
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Trending <span className="text-[#ff4d00]">Hot</span> Ads
            </h2>
            <p className="text-slate-500 max-w-xl text-lg">
              Priority listings with maximum reach and verified backgrounds. The absolute best-in-class assets currently available.
            </p>
          </div>
          
          <button 
            onClick={onViewAll}
            className="group flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-[2rem] font-bold hover:bg-primary hover:text-[#1A1A1A] transition-all shadow-2xl hover:shadow-primary/30"
          >
            Explore Featured <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Dynamic Grid for Boosted Ads */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop, index) => (
            <div 
              key={prop.id} 
              className="relative w-full h-[520px] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow Effect behind the card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <PropertyCard 
                property={prop} 
                onClick={() => onPropertySelect(prop)} 
                isBoosted={true}
              />
              
              {/* Special Tag Overlay for the container */}
              <div className="absolute -top-3 -right-3 z-20 transform rotate-12">
                 <div className="bg-primary text-[#1A1A1A] px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                    <Sparkles size={12} strokeWidth={3} /> Featured
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoostedSection;
