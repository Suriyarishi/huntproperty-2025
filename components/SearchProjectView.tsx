import React, { useState } from 'react';
import { Search, MapPin, Building2, ChevronDown, Filter, LayoutGrid, List } from 'lucide-react';

const MOCK_PROJECTS = [
    {
        id: 1,
        title: "Supernova",
        priceRange: "₹5000-5500",
        location: "Uttar Pradesh, Gautam Buddh Nagar, Sector 94, Noida",
        builder: "Builder",
        superArea: "86060 sqft",
        buildUpArea: "1231 sqft",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        configurations: [
            { type: "1 Bedroom", size: "500 sqft", price: "10 Lacs" },
            { type: "2 Bedroom", size: "1000 sqft", price: "25 Lacs" }
        ]
    },
    {
        id: 2,
        title: "Avadh Colony",
        priceRange: "₹40 Lacs-5 Crs",
        location: "Delhi, Delhi, Dwarka, 12, Sector 23, Dwarka, New Delhi, 110077, India",
        builder: "Builder",
        superArea: "52000 sqft",
        buildUpArea: "50000 sqft",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        configurations: [
            { type: "2 Bedroom", size: "700 sqft", price: "41 Lacs" },
            { type: "3 Bedroom", size: "900 sqft", price: "65 Lacs" },
            { type: "4 Bedroom", size: "1700 sqft", price: "1.1 Crs" }
        ]
    }
];

const SearchProjectView = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-red-100 selection:text-red-900">
            <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
                
                {/* Search & Filter Bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-10">
                    {/* Top Row: Type, Location, Basic Filters */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <div className="relative min-w-[120px]">
                            <select className="w-full bg-red-600 text-white rounded-lg px-4 py-3 text-sm font-bold appearance-none cursor-pointer outline-none focus:ring-4 focus:ring-red-600/20">
                                <option>Buy</option>
                                <option>Rent</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none" size={16} />
                        </div>
                        
                        <div className="flex-1 relative group">
                            <input 
                                type="text" 
                                placeholder="Location" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pl-10 text-sm font-medium outline-none focus:border-red-600 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={18} />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-200 rounded-md hover:bg-slate-300 transition-colors">
                                <Search size={16} className="text-slate-600" />
                            </button>
                        </div>

                        <div className="flex gap-4">
                            <div className="relative min-w-[180px]">
                                <select className="w-full bg-slate-50 border border-slate-200 text-slate-600 rounded-lg px-4 py-3 text-sm font-medium appearance-none cursor-pointer outline-none hover:border-slate-300">
                                    <option>Select Property Type</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                    <option>Plot</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                            <div className="relative min-w-[180px]">
                                <select className="w-full bg-slate-50 border border-slate-200 text-slate-600 rounded-lg px-4 py-3 text-sm font-medium appearance-none cursor-pointer outline-none hover:border-slate-300">
                                    <option>Possession Status</option>
                                    <option>Ready to Move</option>
                                    <option>Under Construction</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Advanced Filters */}
                    <div className="flex flex-col lg:flex-row gap-4 border-t border-slate-100 pt-4">
                        {[
                            { label: 'Budget', options: ['Min', 'Max'] },
                            { label: 'Construction Status', options: ['New Launch', 'Under Construction'] },
                            { label: 'BHK', options: ['1 BHK', '2 BHK', '3 BHK'] }
                        ].map((filter, i) => (
                            <div key={i} className="relative flex-1">
                                <select className="w-full bg-white border border-slate-200 text-slate-500 rounded-lg px-4 py-2.5 text-sm font-medium appearance-none cursor-pointer outline-none hover:border-slate-300">
                                    <option>{filter.label}</option>
                                    {filter.options.map(o => <option key={o}>{o}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Title */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight relative pl-4 border-l-4 border-red-600">
                        Project Listing
                    </h2>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-red-600 hover:border-red-600 transition-all"><List size={18}/></button>
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-all"><LayoutGrid size={18}/></button>
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-6">
                    {MOCK_PROJECTS.map((project) => (
                        <div key={project.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col lg:flex-row gap-8">
                            
                            {/* Visual */}
                            <div className="w-full lg:w-80 h-56 shrink-0 rounded-xl overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                                    Project
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 mb-1">{project.title};</h3>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xl flex items-start gap-1">
                                                <MapPin size={12} className="mt-0.5 shrink-0" /> {project.location}
                                            </p>
                                            <p className="text-xs text-slate-400 font-bold mt-1">by <span className="text-slate-600">{project.builder}</span></p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-lg font-black text-slate-900 block">{project.priceRange}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 w-fit">
                                        <div>
                                            <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Super Area</span>
                                            {project.superArea}
                                        </div>
                                        <div className="w-px bg-slate-200"></div>
                                        <div>
                                            <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Build Up Area</span>
                                            {project.buildUpArea}
                                        </div>
                                    </div>

                                    {/* Configuration Table */}
                                    <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                                        {project.configurations.map((config, idx) => (
                                            <div key={idx} className="grid grid-cols-3 gap-4 px-6 py-3 text-xs font-bold text-slate-600 border-b border-slate-200 last:border-0 hover:bg-white transition-colors">
                                                <div>{config.type}</div>
                                                <div className="text-center text-slate-500">{config.size}</div>
                                                <div className="text-right text-slate-900">{config.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <button className="px-6 py-3 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-95">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SearchProjectView;