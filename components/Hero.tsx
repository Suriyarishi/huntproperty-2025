
import React, { useState } from 'react';
import { 
  Search, Sliders, MapPin, Home, DollarSign, 
  ArrowRight, ClipboardEdit, ChevronDown, Sparkles, 
  X, LocateFixed, Building2, Layers
} from 'lucide-react';

interface HeroProps {
    onSearch: () => void;
    onPostProperty?: () => void;
    onPostRequirement?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onPostProperty, onPostRequirement }) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop" 
           alt="Modern Minimal Architecture" 
           className="w-full h-full object-cover scale-105"
         />
         <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-[#f8fafc]"></div>
         
         {/* Animated Glow Orbs */}
         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-6xl text-center space-y-10 animate-fade-in-up">
        <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl mb-2">
                <Sparkles size={12} className="animate-spin-slow" /> Intelligence-Driven Realty
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black text-slate-950 leading-[0.9] tracking-tighter drop-shadow-sm">
              Discover Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-800 italic">Sanctuary</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-tight">
              A high-fidelity property ecosystem powered by Gemini AI.
            </p>
        </div>

        {/* Enhanced Search Engine Container */}
        <div className="mx-auto w-full max-w-5xl">
            {/* Mode Switcher */}
            <div className="flex justify-center -mb-6 relative z-20">
                <div className="bg-slate-900/95 backdrop-blur-2xl p-1.5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex gap-1">
                    {(['buy', 'rent', 'sell'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-10 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${
                        activeTab === tab 
                        ? 'bg-primary text-slate-950 shadow-lg scale-105' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {tab === 'buy' && <Home size={14} />}
                        {tab === 'rent' && <Key size={14} />}
                        {tab === 'sell' && <DollarSign size={14} />}
                        {tab}
                    </button>
                    ))}
                </div>
            </div>

            {/* Main Console */}
            <div className="glass-panel p-8 pt-14 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 border border-white/60 relative group">
                {/* Search Bar Row */}
                <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-8">
                    <div className="flex-1 relative group/input">
                        <div className={`flex items-center gap-4 rounded-[2rem] px-8 py-6 w-full transition-all duration-500 bg-white/60 border-2 shadow-inner ${searchQuery ? 'border-primary ring-4 ring-primary/5' : 'border-slate-100 hover:border-slate-200'}`}>
                            <MapPin className={`${searchQuery ? 'text-emerald-600' : 'text-slate-400'} transition-colors`} size={24} />
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Locality, Landmark or Project Name..." 
                                className="bg-transparent border-none outline-none text-slate-950 placeholder-slate-400 w-full font-sans text-xl font-bold"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                                    <X size={18} />
                                </button>
                            )}
                            <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>
                            <button className="hidden sm:flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:bg-emerald-50 px-4 py-2 rounded-xl transition-all">
                                <LocateFixed size={16} /> Near Me
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex gap-3">
                        <button 
                            onClick={onSearch}
                            className="flex-1 lg:flex-none px-12 py-6 rounded-[2rem] bg-slate-950 text-white font-black flex items-center justify-center gap-3 shadow-2xl hover:bg-slate-800 hover:-translate-y-1 active:scale-95 transition-all text-lg uppercase tracking-wider group/btn"
                        >
                            <Search size={22} strokeWidth={3} className="group-hover/btn:scale-110 transition-transform" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>

                {/* Advanced Intelligence Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-2 ml-2">
                            <Building2 size={12} className="text-slate-400" />
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Property Class</label>
                        </div>
                        <div className="relative group/sel">
                            <select className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-5 pr-10 text-[13px] font-black text-slate-800 outline-none focus:border-primary focus:bg-white appearance-none cursor-pointer shadow-sm transition-all">
                                <option>Residential Apartment</option>
                                <option>Independent Villa</option>
                                <option>Luxury Penthouse</option>
                                <option>Commercial Space</option>
                                <option>Urban Plot</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/sel:text-primary transition-colors" />
                        </div>
                    </div>
                    
                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-2 ml-2">
                            <DollarSign size={12} className="text-slate-400" />
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Budget Spectrum</label>
                        </div>
                        <div className="relative group/sel">
                            <select className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-5 pr-10 text-[13px] font-black text-slate-800 outline-none focus:border-primary focus:bg-white appearance-none cursor-pointer shadow-sm transition-all">
                                <option>Any Budget</option>
                                <option>₹ 50 Lac - 1 Cr</option>
                                <option>₹ 1 Cr - 2.5 Cr</option>
                                <option>₹ 2.5 Cr - 5 Cr</option>
                                <option>₹ 5 Cr+</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/sel:text-primary transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-2 ml-2">
                            <Layers size={12} className="text-slate-400" />
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Bedroom Layout</label>
                        </div>
                        <div className="flex gap-1.5 p-1.5 bg-slate-50 border-2 border-slate-100 rounded-2xl shadow-inner">
                            {['1', '2', '3', '4+'].map(num => (
                                <button key={num} className="flex-1 py-2.5 text-[11px] font-black rounded-xl hover:bg-white text-slate-400 hover:text-slate-900 transition-all focus:bg-slate-950 focus:text-primary focus:shadow-lg">{num}</button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-2 ml-2">
                            <Sparkles size={12} className="text-slate-400" />
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Lifecycle Stage</label>
                        </div>
                        <div className="relative group/sel">
                            <select className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-5 pr-10 text-[13px] font-black text-slate-800 outline-none focus:border-primary focus:bg-white appearance-none cursor-pointer shadow-sm transition-all">
                                <option>Ready to Occupy</option>
                                <option>Under Construction</option>
                                <option>New Launch</option>
                                <option>Resale Match</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/sel:text-primary transition-colors" />
                        </div>
                    </div>
                </div>
                
                {/* Meta Controls & Requirement Action */}
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                     <div className="flex flex-wrap justify-center items-center gap-6">
                        <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-all group/f">
                            <div className="p-1.5 rounded-lg bg-slate-100 group-hover/f:bg-emerald-50 transition-colors">
                                <Sliders size={14} className="group-hover/f:rotate-180 transition-transform duration-500" />
                            </div>
                            Advanced Filters
                        </button>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-5 bg-slate-200 rounded-full cursor-pointer hover:bg-slate-300 transition-colors">
                                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all group-hover:translate-x-5"></div>
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New Projects Only</span>
                        </div>
                     </div>

                     <div className="flex items-center gap-4">
                        <div className="h-10 w-px bg-slate-100 hidden md:block"></div>
                        <button 
                            onClick={onPostRequirement}
                            className="px-8 py-4 rounded-2xl bg-primary hover:bg-[#25d488] text-slate-950 font-black text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group/req"
                        >
                            <ClipboardEdit size={16} className="group-hover/req:rotate-12 transition-transform" />
                            Post Your Requirement
                        </button>
                     </div>
                </div>
            </div>
            
            {/* Live Counter Mini Badge */}
            <div className="inline-flex items-center gap-4 mt-6 px-6 py-2.5 rounded-full bg-white/50 backdrop-blur-xl border border-white/40 shadow-sm animate-fade-in-up delay-500">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                            <img src={`https://randomuser.me/api/portraits/thumb/men/${i+10}.jpg`} alt="user" />
                        </div>
                    ))}
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <span className="text-emerald-600">4,500+</span> Properties Analyzed Today
                </p>
            </div>
        </div>

        {/* Quick Discovery Tiles */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 opacity-90 animate-fade-in-up delay-700">
             {[
                { label: 'Post Property', icon: Home, color: 'text-emerald-500', action: onPostProperty },
                { label: 'Market Value', icon: DollarSign, color: 'text-blue-500' },
                { label: 'Investment Hotspots', icon: TrendingUp, color: 'text-orange-500' }
             ].map((tile, i) => (
                <button 
                    key={i}
                    onClick={tile.action}
                    className="px-8 py-4 rounded-2xl glass-card flex items-center gap-3 text-slate-700 font-black text-[11px] uppercase tracking-widest hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all border border-white/80 group"
                >
                    <tile.icon size={18} className={`${tile.color} group-hover:scale-110 transition-transform`} /> 
                    {tile.label}
                </button>
             ))}
        </div>
      </div>
    </div>
  );
};

// Missing icon helper
const TrendingUp = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

const Key = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.25-2.25"></path></svg>
);

export default Hero;
