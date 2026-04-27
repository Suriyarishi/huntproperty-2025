
import React from 'react';
import { Heart, Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface Props {
  property: Property;
  onClick: () => void;
  variant?: 'primary' | 'emerald';
  isBoosted?: boolean;
}

const PropertyCard: React.FC<Props> = ({ property, onClick, variant = 'primary', isBoosted = false }) => {
  const boosted = isBoosted || property.activeBoost;
  
  // Action button is strictly green (#2FED9A)
  const buttonStyles = 'bg-primary text-slate-900 shadow-lg shadow-primary/20 hover:bg-[#25D488] hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300';

  const iconColors = {
    primary: 'text-primary',
    emerald: 'text-emerald-500',
  };

  const tagColors = {
    primary: 'bg-primary text-slate-900 border-primary',
    emerald: 'bg-emerald-600 text-white border-emerald-500',
  };

  return (
    <div 
      className={`group relative bg-white/70 backdrop-blur-xl border rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col h-full ${
        boosted 
          ? 'border-primary/50 shadow-[0_0_30px_rgba(47,237,154,0.15)] hover:shadow-[0_0_50px_rgba(47,237,154,0.3)] hover:-translate-y-3' 
          : 'border-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-2'
      }`}
    >
      {boosted && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      )}
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            {boosted && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 hot-badge-fire shadow-2xl">
                    {/* 3-Layer Animated Flame SVG */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path className="flame-outer" d="M12 2C12 2 19 7 19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 7 12 2 12 2Z" fill="#FF9800" fillOpacity="0.8" />
                        <path className="flame-middle" d="M12 7C12 7 16 10.5 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14C8 10.5 12 7 12 7Z" fill="#FF5722" />
                        <path className="flame-inner" d="M12 11C12 11 14 13 14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13 12 11 12 11Z" fill="#FFF176" />
                    </svg>
                    <span className="text-shimmer text-[9px] font-black uppercase tracking-[0.15em] whitespace-nowrap">
                        TODAY'S HOT {property.price.toLowerCase().includes('/mo') || property.tags.some(t => t.toLowerCase() === 'rent') ? 'RENT' : 'SALE'}
                    </span>
                </div>
            )}
            <div className="flex gap-2">
                {property.tags.slice(0, 2).map((tag, i) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md border ${i === 0 ? tagColors[variant] : 'bg-black/40 text-white border-white/20'}`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-red-500 transition-all shadow-lg group-hover:scale-110">
            <Heart size={18} className="fill-transparent hover:fill-current transition-colors" />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
             <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
                 <span className="text-slate-900 font-display font-bold text-xl">{property.price}</span>
             </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
             <h3 className="text-xl font-display font-bold text-slate-900 mb-2 line-clamp-1" title={property.title}>{property.title}</h3>
             <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <MapPin size={14} className={`${iconColors[variant]} shrink-0`} />
                <span className="truncate">{property.location}</span>
             </div>
        </div>

        {/* Specs Row */}
        <div className="flex items-center justify-between py-4 border-t border-slate-200/60 mb-4">
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <Bed size={18} className="text-slate-400" />
                    <span>{property.beds}</span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Beds</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <Bath size={18} className="text-slate-400" />
                    <span>{property.baths}</span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Baths</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <Square size={18} className="text-slate-400" />
                    <span>{property.sqft}</span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Sq.Ft</span>
            </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
            <button 
                onClick={onClick}
                className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${buttonStyles}`}
            >
                See Details <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
