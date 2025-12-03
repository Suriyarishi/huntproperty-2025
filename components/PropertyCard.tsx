import React from 'react';
import { Heart, Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface Props {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<Props> = ({ property, onClick }) => {
  return (
    <div 
      className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
            {property.tags.slice(0, 2).map((tag, i) => (
                <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md border ${i === 0 ? 'bg-primary text-slate-900 border-primary' : 'bg-black/40 text-white border-white/20'}`}>
                    {tag}
                </span>
            ))}
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
                <MapPin size={14} className="text-primary shrink-0" />
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
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-slate-900 transition-all shadow-lg hover:shadow-primary/30"
            >
                See Details <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;