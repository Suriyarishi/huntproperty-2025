import React, { useState, useEffect, useMemo } from 'react';
import { 
  Map as MapIcon, Loader2, Search, ChevronDown, 
  Heart, Phone, MessageSquare, MapPin, Building2, 
  Layers, Square, Navigation, LayoutGrid,
  Users, SlidersHorizontal, Sparkles, X, ShieldCheck, CheckCircle2,
  Calendar, Briefcase, Droplets
} from 'lucide-react';
import { Property } from '../types';

interface ListingsViewProps {
  type: 'buy' | 'rent';
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const ListingsView: React.FC<ListingsViewProps> = ({ type: initialType, properties, onPropertySelect }) => {
  const [viewType, setViewType] = useState<'buy' | 'rent'>(initialType);
  const [displayedProperties, setDisplayedProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSort, setActiveSort] = useState('Relevance');
  const [searchQuery, setSearchQuery] = useState('Noida');
  
  // Filter States
  const [selectedBHK, setSelectedBHK] = useState<string[]>([]);

  useEffect(() => {
    setViewType(initialType);
  }, [initialType]);

  useEffect(() => {
    // Enhanced mock data to match screenshot variety
    const mockData: Property[] = [
        {
            id: '101',
            title: "Villa in Noida",
            price: "₹ 1.35 Crs",
            location: "Greater Noida West",
            beds: 4,
            baths: 4,
            sqft: 2925,
            imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070",
            tags: ["Verified"],
            description: "Luxury villa with premium amenities.",
            ownershipType: "Leasehold",
            postedDate: "7 July 2024",
            isOwner: false,
            locality: "Greater Noida West"
        },
        {
            id: '102',
            title: "Ace Golfshire",
            price: "₹ 60 Lacs",
            location: "Sector 150, Noida",
            beds: 3,
            baths: 2,
            sqft: 1195,
            imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
            tags: ["New Launch"],
            description: "High-rise apartment with golf course view.",
            ownershipType: "Leasehold",
            postedDate: "14 September 2024",
            isOwner: true,
            locality: "Sector 150"
        },
        {
            id: '103',
            title: "Hurry limited inventory sale start now",
            price: "₹ 20.99 Lacs",
            location: "Greater Noida",
            beds: 2,
            baths: 2,
            sqft: 855,
            imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
            tags: ["Sale"],
            description: "Affordable housing project.",
            ownershipType: "Power of Attorney",
            postedDate: "23 October 2024",
            isOwner: true,
            locality: "Greater Noida"
        },
        {
            id: '104',
            title: "Palm valley",
            price: "₹ 21.45 Lacs",
            location: "Greater Noida West",
            beds: 2,
            baths: 1,
            sqft: 855,
            imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
            tags: ["Verified"],
            description: "Ready to move apartment.",
            ownershipType: "Freehold",
            postedDate: "12 November 2024",
            isOwner: true,
            locality: "Greater Noida West Sec-1"
        }
    ];
    setDisplayedProperties(mockData);
  }, []);

  const filteredProperties = useMemo(() => {
    return displayedProperties.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBHK = selectedBHK.length === 0 || selectedBHK.includes(`${p.beds} BHK`);
        return matchesSearch && matchesBHK;
    });
  }, [displayedProperties, searchQuery, selectedBHK]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1200);
  };

  const toggleBHK = (val: string) => {
    setSelectedBHK(prev => prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] pt-24 pb-20 font-sans">
      
      {/* Precision Search Console */}
      <div className="sticky top-[88px] z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 px-6 py-2.5">
          <div className="max-w-[100rem] mx-auto flex flex-col lg:flex-row items-center gap-3">
              <div className="flex bg-slate-100 p-1 rounded-xl w-full lg:w-auto border border-slate-200 shadow-inner">
                  <button 
                    onClick={() => setViewType('buy')}
                    className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${viewType === 'buy' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Buy
                  </button>
                  <button 
                    onClick={() => setViewType('rent')}
                    className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${viewType === 'rent' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Rent
                  </button>
              </div>
              
              <div className="relative flex-1 w-full group">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter locality, landmark or project..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-12 text-sm font-bold outline-none focus:border-red-600/40 focus:ring-4 focus:ring-red-600/5 transition-all shadow-inner" 
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-slate-900 text-white rounded-lg hover:bg-red-600 transition-colors">
                      <Search size={16} strokeWidth={2.5} />
                  </button>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-2 w-full lg:w-auto">
                  <div className="relative flex-1 md:w-48">
                      <select className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-[10px] font-black uppercase tracking-widest text-slate-700 outline-none appearance-none cursor-pointer hover:border-slate-300">
                          <option>Property Type</option>
                          <option>Residential Apartment</option>
                          <option>Villa</option>
                      </select>
                      <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                   <div className="relative flex-1 md:w-48">
                      <select className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-[10px] font-black uppercase tracking-widest text-slate-700 outline-none appearance-none cursor-pointer hover:border-slate-300">
                          <option>Possession</option>
                          <option>Ready to move</option>
                          <option>Under Construction</option>
                      </select>
                      <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-[100rem] mx-auto px-6 mt-6 flex flex-col lg:flex-row gap-6">
        
        {/* Optimized Sidebar */}
        <aside className="lg:w-64 shrink-0 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-[160px] max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
                <div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Intelligence Filter</h3>
                    <button className="text-[9px] font-black uppercase tracking-widest text-red-600 hover:underline">Reset</button>
                </div>

                <div className="space-y-6">
                    {/* Budget */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest block">Budget Range</label>
                        <div className="flex gap-2">
                            <input type="text" placeholder="min" className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-[11px] font-bold outline-none focus:border-red-600/30 shadow-inner" />
                            <input type="text" placeholder="max" className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-[11px] font-bold outline-none focus:border-red-600/30 shadow-inner" />
                        </div>
                    </div>

                    {/* Bedroom Grid */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest block">Unit Config</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '9+ BHK'].map(bhk => (
                                <button 
                                    key={bhk}
                                    onClick={() => toggleBHK(bhk)}
                                    className={`py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border ${selectedBHK.includes(bhk) ? 'bg-slate-900 border-slate-900 text-white shadow-md' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'}`}
                                >
                                    {bhk}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Possession Status */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest block">Status</label>
                        <div className="space-y-2">
                            {['Under Construction', 'Ready to move'].map(s => (
                                <label key={s} className="flex items-center gap-2.5 cursor-pointer group">
                                    <div className="w-4 h-4 rounded-md border-2 border-slate-200 flex items-center justify-center group-hover:border-red-600 transition-colors shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-sm opacity-0 group-hover:opacity-10"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{s}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Area */}
                    <div className="space-y-3 pt-2">
                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest block">Spatial Area (Sqft)</label>
                        <div className="flex gap-2">
                            <input type="text" placeholder="min" className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-[11px] font-bold outline-none shadow-inner" />
                            <input type="text" placeholder="max" className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-[11px] font-bold outline-none shadow-inner" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        {/* Dynamic Listings Hub */}
        <div className="flex-1 space-y-5">
            
            {/* Context Nav Bar */}
            <div className="bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between shadow-sm rounded-xl overflow-hidden">
                <div className="flex items-stretch overflow-x-auto no-scrollbar w-full md:w-auto border-b md:border-b-0 md:border-r border-slate-100">
                    <button className="flex items-center gap-3 px-6 py-3.5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest shrink-0">
                        <Building2 size={16} className="text-primary" /> {filteredProperties.length} Properties
                    </button>
                    <button className="flex items-center gap-3 px-6 py-3.5 text-slate-500 hover:bg-slate-50 font-black text-[10px] uppercase tracking-widest shrink-0 transition-all border-r border-slate-50">
                        <Sparkles size={16} /> Arrivals
                    </button>
                    <button className="flex items-center gap-3 px-6 py-3.5 text-slate-500 hover:bg-slate-50 font-black text-[10px] uppercase tracking-widest shrink-0 transition-all border-r border-slate-50">
                        <Users size={16} /> Agents
                    </button>
                    <button className="flex items-center gap-3 px-6 py-3.5 text-slate-500 hover:bg-slate-50 font-black text-[10px] uppercase tracking-widest shrink-0 transition-all">
                        <MapIcon size={16} /> Map
                    </button>
                </div>
                <div className="flex items-center gap-4 py-2 px-6 shrink-0">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Rank By</span>
                    <div className="relative group">
                        <select 
                            value={activeSort} 
                            onChange={(e) => setActiveSort(e.target.value)}
                            className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none appearance-none pr-5 cursor-pointer"
                        >
                            <option>Relevance</option>
                            <option>Price Asc</option>
                            <option>Price Desc</option>
                            <option>Newest</option>
                        </select>
                        <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-red-600 transition-colors" />
                    </div>
                </div>
            </div>

            {/* Property Stream: Reduced Height Cards */}
            <div className="space-y-4">
                {filteredProperties.length > 0 ? filteredProperties.map((prop) => (
                    <div key={prop.id} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group relative overflow-hidden rounded-2xl">
                        
                        {/* Visual Node: Optimized Height */}
                        <div className="relative w-full md:w-[240px] h-48 md:h-auto overflow-hidden shrink-0 bg-slate-50 border-r border-slate-100 flex items-center justify-center">
                            {prop.imageUrl ? (
                                <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 cursor-pointer" onClick={() => onPropertySelect(prop)} />
                            ) : (
                                <div className="text-slate-200 flex flex-col items-center gap-2">
                                    <MapIcon size={32} strokeWidth={1} />
                                    <span className="text-[8px] font-black uppercase tracking-widest italic">Visual Offline</span>
                                </div>
                            )}
                            
                            <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                                {prop.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-red-600 rounded-md text-[8px] font-black uppercase tracking-widest shadow-sm border border-slate-100/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button className="absolute bottom-2.5 right-2.5 p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg text-slate-400 hover:text-red-600 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                <Heart size={16} />
                            </button>
                        </div>

                        {/* Content Engine: Tightened Padding & Layout */}
                        <div className="flex-1 p-4 md:p-6 flex flex-col justify-between relative">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <div className="text-xl font-display font-black text-red-600 tracking-tighter">{prop.price}</div>
                                        <h3 
                                            className="text-base font-display font-black text-slate-800 leading-tight uppercase tracking-tight group-hover:text-red-600 transition-colors cursor-pointer" 
                                            onClick={() => onPropertySelect(prop)}
                                        >
                                            {prop.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                            <MapPin size={10} className="text-red-500" /> {prop.locality || 'Noida'}
                                        </p>
                                        <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                                        <button className="text-[9px] font-black text-blue-600 hover:underline uppercase tracking-widest italic">
                                            Geospatial Node
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right hidden sm:flex flex-col items-end gap-0.5 opacity-60">
                                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Registry ID: #HP-{prop.id}</p>
                                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Logged: {prop.postedDate}</p>
                                </div>
                            </div>

                            {/* Intelligence Matrix: Compact 3-Column Grid */}
                            <div className="grid grid-cols-3 gap-y-3 gap-x-6 py-4 my-2 border-y border-slate-50/50">
                                <div className="space-y-0.5">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Spatial Area</span>
                                    <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 uppercase">
                                        <Square size={12} className="text-slate-300" /> {prop.sqft} <span className="text-[8px] text-slate-400">Sq Ft</span>
                                    </div>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Unit Config</span>
                                    <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 uppercase">
                                        <Building2 size={12} className="text-slate-300" /> {prop.beds} BHK
                                    </div>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Ownership</span>
                                    <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 uppercase truncate">
                                        <ShieldCheck size={12} className="text-slate-300" /> {prop.ownershipType}
                                    </div>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Intended For</span>
                                    <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 uppercase">
                                        <Layers size={12} className="text-slate-300" /> {viewType === 'buy' ? 'Asset Sale' : 'Lease'}
                                    </div>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Listing Type</span>
                                    <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 uppercase">
                                        <Users size={12} className="text-slate-300" /> {prop.isOwner ? 'Principal' : 'Consultant'}
                                    </div>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Locality</span>
                                    <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 uppercase truncate">
                                        <Navigation size={12} className="text-slate-300" /> {prop.locality}
                                    </div>
                                </div>
                            </div>

                            {/* Unified Command Modules */}
                            <div className="flex items-center justify-between pt-1">
                                <div className="flex items-center gap-2">
                                    <button className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-black text-[9px] uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-95 flex items-center gap-2">
                                        <Phone size={12} strokeWidth={3} /> Get Contact
                                    </button>
                                    <button className="px-5 py-2.5 border-2 border-slate-900 text-slate-900 rounded-lg font-black text-[9px] uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all active:scale-95 flex items-center gap-2">
                                        <MessageSquare size={12} /> Contact Agent
                                    </button>
                                </div>
                                
                                {/* Status Seal Overlay: Strictly following 2025 branding */}
                                {!prop.isOwner && (
                                    <div className="hidden lg:flex items-center gap-2 opacity-20 grayscale transition-all group-hover:opacity-60 group-hover:grayscale-0">
                                        <div className="w-10 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center rotate-12 transition-transform group-hover:rotate-0">
                                            <div className="text-[6px] font-black uppercase text-center leading-none text-slate-600">Verified<br/>Asset</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="py-32 text-center bg-white border border-slate-100 rounded-3xl shadow-sm animate-fade-in-up">
                        <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-200 mb-6">
                            <Search size={40} strokeWidth={1} />
                        </div>
                        <h4 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tighter">No Neural Matches</h4>
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-2">Broaden your filter matrix to discover nodes in this sector.</p>
                        <button onClick={() => { setSearchQuery(''); setSelectedBHK([]); }} className="mt-8 px-10 py-3.5 bg-slate-950 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all hover:bg-red-600">Clear Global Filters</button>
                    </div>
                )}
            </div>

            {/* Futuristic Load Sync */}
            {filteredProperties.length > 0 && (
                <div className="py-12 flex flex-col items-center gap-6">
                    <button 
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className="px-16 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-red-600 transition-all duration-500 shadow-2xl disabled:opacity-50 flex items-center gap-4 group"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Briefcase size={16} className="group-hover:rotate-12 transition-transform" />}
                        {isLoading ? 'Decrypting Registry...' : 'Load More Intelligence'}
                    </button>
                    
                    <div className="flex items-center gap-6 text-[8px] font-black text-slate-200 uppercase tracking-[0.8em] opacity-40">
                        <div className="w-12 h-px bg-slate-300"></div> 
                        GRID LINK SECURE (AES-256)
                        <div className="w-12 h-px bg-slate-300"></div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ListingsView;