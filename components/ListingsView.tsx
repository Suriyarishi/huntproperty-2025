import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';
import { Filter, Map as MapIcon, Loader2 } from 'lucide-react';

interface ListingsViewProps {
  type: 'buy' | 'rent';
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const ListingsView: React.FC<ListingsViewProps> = ({ type, properties, onPropertySelect }) => {
  const [displayedProperties, setDisplayedProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with props, ensuring we reset if the type changes
  useEffect(() => {
    setDisplayedProperties(properties);
  }, [properties, type]);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate network request delay
    setTimeout(() => {
        // In a real app, we would fetch the next page. 
        // Here we duplicate existing properties to simulate "more" data.
        const newBatch = properties.map((p, index) => ({
            ...p,
            id: `${p.id}-more-${Date.now()}-${index}` // Ensure unique keys
        }));
        
        setDisplayedProperties(prev => [...prev, ...newBatch]);
        setIsLoading(false);
    }, 1000);
  };

  const title = type === 'buy' ? 'Properties for Sale' : 'Properties for Rent';
  const subtitle = type === 'buy' ? 'Invest in your future' : 'Find your next home';
  
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
             <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">
               {subtitle}
             </span>
             <h1 className="text-4xl font-display font-bold mt-4 text-slate-900">{title}</h1>
             <p className="text-slate-500 mt-2">Showing {displayedProperties.length} premium listings matching your criteria.</p>
          </div>
          
          <div className="flex gap-3">
             <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm flex items-center gap-2 hover:border-primary hover:text-primary transition-colors shadow-sm">
                <Filter size={16} /> Filters
             </button>
             <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm flex items-center gap-2 hover:border-primary hover:text-primary transition-colors shadow-sm">
                <MapIcon size={16} /> Map View
             </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map(prop => (
            <div key={prop.id} className="h-[500px]">
                 <PropertyCard 
                    property={prop} 
                    onClick={() => onPropertySelect(prop)} 
                />
            </div>
          ))}
        </div>
        
        {/* Empty State / Load More */}
        <div className="mt-16 text-center">
            <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-primary hover:text-slate-900 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto min-w-[200px]"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin" size={18} /> Loading...
                    </>
                ) : (
                    'Load More Listings'
                )}
            </button>
            <p className="text-slate-400 text-xs mt-4 font-medium">Showing {displayedProperties.length} properties</p>
        </div>
      </div>
    </div>
  );
};

export default ListingsView;