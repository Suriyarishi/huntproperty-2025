import React, { useState } from 'react';
import { Search, Sliders, MapPin, Home, DollarSign, ArrowRight } from 'lucide-react';

interface HeroProps {
    onSearch: () => void;
    onPostProperty?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onPostProperty }) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           alt="Modern Minimal Architecture" 
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-[#f8fafc]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl text-center space-y-8 animate-fade-in-up">
        <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm mb-4">
            Real Estate Reimagined
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-950 leading-tight tracking-tight drop-shadow-sm">
          Find Your Future <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">Sanctuary</span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-sm">
          Discover premium properties with the power of Gemini AI.
        </p>

        {/* Floating Glass Search Bar */}
        <div className="mt-12 mx-auto max-w-4xl">
            {/* Toggles - Floating above */}
            <div className="flex justify-center mb-4">
                <div className="bg-white/80 backdrop-blur-xl p-1 rounded-full shadow-lg border border-white/50 inline-flex">
                    {(['buy', 'rent', 'sell'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === tab 
                        ? 'bg-secondary text-primary shadow-lg' 
                        : 'text-slate-500 hover:bg-white/50 hover:text-slate-800'
                        }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                    ))}
                </div>
            </div>

            {/* Search Container */}
            <div className="glass-panel p-4 rounded-[2rem] shadow-2xl shadow-slate-200/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="flex-1 w-full">
                        <div className="flex items-center gap-3 glass-input rounded-2xl px-6 py-4 w-full transition-all">
                            <MapPin className="text-slate-400" size={22} />
                            <input 
                                type="text" 
                                placeholder="City, neighborhood, or address..." 
                                className="bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 w-full font-sans text-lg font-medium"
                            />
                        </div>
                    </div>
                    
                    <div className="flex gap-2 w-full md:w-auto">
                        <button 
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className={`p-5 rounded-2xl border transition-all ${showAdvanced ? 'bg-slate-100 border-slate-300 text-slate-900' : 'bg-white/40 border-white/60 text-slate-600 hover:bg-white'}`}
                        >
                            <Sliders size={22} />
                        </button>
                        <button 
                            onClick={onSearch}
                            className="flex-1 md:flex-none px-10 py-5 rounded-2xl bg-primary hover:bg-[#25d488] text-secondary font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 text-lg"
                        >
                            <Search size={22} />
                            <span>Search</span>
                        </button>
                    </div>
                </div>

                {/* Advanced Filters Panel */}
                {showAdvanced && (
                    <div className="mt-4 p-6 border-t border-slate-200/30 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</label>
                            <select className="w-full bg-white/50 border border-slate-200 rounded-xl p-2 text-slate-700 outline-none focus:border-primary">
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Penthouse</option>
                            </select>
                        </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Price Range</label>
                            <select className="w-full bg-white/50 border border-slate-200 rounded-xl p-2 text-slate-700 outline-none focus:border-primary">
                                <option>Any Price</option>
                                <option>$500k - $1M</option>
                                <option>$1M - $3M</option>
                                <option>$3M+</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bedrooms</label>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 bg-white/50 rounded-xl border border-slate-200 hover:border-primary text-slate-600 font-medium">2</button>
                                <button className="flex-1 py-2 bg-white/50 rounded-xl border border-slate-200 hover:border-primary text-slate-600 font-medium">3</button>
                                <button className="flex-1 py-2 bg-white/50 rounded-xl border border-slate-200 hover:border-primary text-slate-600 font-medium">4+</button>
                            </div>
                        </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</label>
                             <select className="w-full bg-white/50 border border-slate-200 rounded-xl p-2 text-slate-700 outline-none focus:border-primary">
                                <option>Ready to Move</option>
                                <option>Under Construction</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Quick Action Tiles */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-90">
             <button 
                onClick={onPostProperty}
                className="px-6 py-3 rounded-xl glass-card flex items-center gap-2 text-slate-700 font-semibold hover:bg-white"
             >
                <Home size={18} className="text-emerald-500" /> Post Property
             </button>
             <button className="px-6 py-3 rounded-xl glass-card flex items-center gap-2 text-slate-700 font-semibold hover:bg-white">
                <DollarSign size={18} className="text-blue-500" /> Get Estimates
             </button>
             <button className="px-6 py-3 rounded-xl glass-card flex items-center gap-2 text-slate-700 font-semibold hover:bg-white">
                <ArrowRight size={18} /> Trending Areas
             </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
