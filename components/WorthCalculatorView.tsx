import React from 'react';
import { 
    Calculator, MapPin, Sparkles, 
    TrendingUp, Globe, Network, Cpu,
    Landmark, Activity, Box, ArrowUpRight, 
    LayoutGrid, ShieldCheck, Fingerprint,
    Zap, Info
} from 'lucide-react';

const LOCALITY_DATA = [
    { locality: "Uttam Nagar", region: "Delhi", desc: "Flat in best offer for Navratra", price: "₹ 17.00 Lac" },
    { locality: "Badarpur", region: "Delhi", desc: "One Bhk Flat IN Gated Society", price: "₹ 6.99 Lac" },
    { locality: "Vishnu Garden", region: "Delhi, Delhi, Delhi", desc: "Property in Vishnu Garden", price: "₹ 25.00 Lac" },
    { locality: "Jamia Nagar", region: "Delhi", desc: "Two Room Set Flat With Modular Kitchen In Batla House", price: "₹ 19.00 Lac" },
    { locality: "Vikaspuri", region: "Delhi", desc: "Free hold DDA LIG flat with terrace right with negotiable price", price: "₹ 51.00 Lac" },
    { locality: "Dwarka Sector 16B", region: "Delhi", desc: "URGENT SALE 3BHK Dwarka FULLY FURNISHED", price: "₹ 85.00 Lac" },
    { locality: "Uttam Nagar", region: "Delhi", desc: "Two bhk Luxury flat in Dwarka mod", price: "₹ 22.55 Lac" },
    { locality: "new ashok nagar", region: "Delhi", desc: "one room set for rent at independent floor", price: "₹ 70.00 Lac" },
    { locality: "Mansa Ram Park", region: "Delhi, Delhi, Delhi", desc: "three bedroom set with loan facility", price: "₹ 43.50 Lac" },
    { locality: "uttam nagar", region: "Delhi", desc: "two BHK FLOOR GUD LOCATION NEAR UTTAM NAGAR WEST METRO STATION", price: "₹ 22.00 Lac" },
    { locality: "Uttam Nagar", region: "Delhi", desc: "two bhk builder floor in uttam nagar west", price: "₹ 26.54 Lac" },
    { locality: "Adhyapak Nagar", region: "Delhi", desc: "Built up house for saleBuilt up house for sale", price: "₹ 68.75 Lac" }
];

const WorthCalculatorView = ({ onNavigate }: { onNavigate: (v: any) => void }) => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
                
                {/* 1. Tactical Header Console */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 border-b border-slate-200 pb-12">
                    <div className="space-y-6 max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-primary border border-white/10 text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl">
                            <Calculator size={14} className="animate-pulse" /> Regional Worth Pulse v.2025
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-black text-slate-950 uppercase tracking-tighter leading-[0.85]">
                            Worth <span className="text-emerald-600 italic">Matrix</span>
                        </h1>
                        <p className="text-slate-500 text-xl font-medium italic opacity-80 leading-relaxed max-w-2xl">
                            "Synthesized market nodes for top localities in <span className="text-red-600 font-bold">Delhi</span>. Decrypting the economic DNA of the capital's architectural landscape."
                        </p>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
                        <div className="text-right">
                            <p className="text-[10px] font-black uppercase text-slate-400">Node Cluster</p>
                            <p className="text-2xl font-display font-black text-slate-950">Delhi-NCR</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200"></div>
                        <div className="text-right">
                            <p className="text-[10px] font-black uppercase text-slate-400">Sync Status</p>
                            <p className="text-2xl font-display font-black text-emerald-600">LIVE</p>
                        </div>
                    </div>
                </div>

                {/* 2. Locality Matrix Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up">
                    {LOCALITY_DATA.map((node, i) => (
                        <div key={i} className="group relative bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                            {/* Neural Pattern Background */}
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
                                <Network size={180} />
                            </div>

                            <div className="space-y-6 relative z-10">
                                {/* Header: Locality & Region */}
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-red-600">
                                        <MapPin size={14} className="fill-current" />
                                        <h3 className="text-lg font-display font-black uppercase tracking-tight leading-none group-hover:text-red-700 transition-colors">{node.locality}</h3>
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-5">{node.region}</p>
                                </div>

                                {/* Body: Node Synopsis */}
                                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 min-h-[100px] flex items-center group-hover:bg-white transition-colors">
                                    <p className="text-xs font-bold text-slate-500 leading-relaxed italic line-clamp-3">
                                        "{node.desc}"
                                    </p>
                                </div>

                                {/* Footer: Valuation Index */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Market Worth</p>
                                        <p className="text-2xl font-display font-black text-slate-900 tracking-tighter group-hover:text-red-600 transition-colors">
                                            {node.price}
                                        </p>
                                    </div>
                                    <button className="w-10 h-10 rounded-xl bg-slate-900 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform active:scale-95">
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Verification Badge */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                <ShieldCheck size={24} className="text-emerald-600" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Global Information Context */}
                <div className="mt-24 grid md:grid-cols-2 gap-12">
                    <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-transparent opacity-50"></div>
                        <div className="relative z-10 space-y-8">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-lg">
                                <Zap size={28} className="fill-primary animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-display font-black uppercase tracking-tight">Market Momentum</h3>
                            <p className="text-slate-400 text-lg leading-relaxed italic font-medium">
                                "The Delhi property matrix is experiencing a 12.4% increase in liquidity nodes. High-fidelity valuations are now active for all 272 urban sectors."
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-slate-200 flex flex-col justify-center space-y-8 group hover:border-red-600/20 transition-all duration-700">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[1.8rem] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-700">
                                <ShieldCheck size={32} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Neural Guard</h4>
                                <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight">Verified Protocol</h3>
                            </div>
                        </div>
                        <p className="text-slate-500 text-base font-medium leading-relaxed italic">
                            All valuations are synthesized from current registry nodes and historical geospatial data v.2025.
                        </p>
                    </div>
                </div>

                {/* 4. Trust Matrix Bottom Strip */}
                <div className="mt-32 pt-16 border-t border-slate-200 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-12 group/strip">
                     <p className="text-[11px] font-black text-slate-950 uppercase tracking-[1em] group-hover:tracking-[1.2em] transition-all duration-1000">HUNT PROPERTY INTELLECTUAL PROPERTY SYSTEM</p>
                     <div className="flex flex-wrap justify-center gap-16 md:gap-24 grayscale group-hover:grayscale-0 transition-all duration-1000">
                         {[Globe, Network, Cpu, ShieldCheck, Landmark, Box, Activity, Fingerprint].map((Icon, i) => (
                             <Icon key={i} size={36} strokeWidth={1} className="text-slate-400 hover:text-emerald-600 transition-colors" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default WorthCalculatorView;
