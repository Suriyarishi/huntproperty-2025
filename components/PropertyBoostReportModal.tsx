import React from 'react';
import { 
    X, TrendingUp, Users, MapPin, MousePointer2, 
    ArrowUpRight, BarChart3, Globe2, Zap, Calendar,
    ChevronRight, ArrowRight, ShieldCheck
} from 'lucide-react';

interface PropertyBoostReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    property: any;
}

const PropertyBoostReportModal: React.FC<PropertyBoostReportModalProps> = ({ 
    isOpen, 
    onClose, 
    property 
}) => {
    if (!isOpen) return null;

    const leadOrigins = [
        { city: 'Mumbai', state: 'MH', count: 42, percentage: 35 },
        { city: 'Srinagar', state: 'J&K', count: 28, percentage: 24 },
        { city: 'Indore', state: 'MP', count: 18, percentage: 15 },
        { city: 'Bangalore', state: 'KA', count: 12, percentage: 10 },
        { city: 'Delhi', state: 'NCR', count: 20, percentage: 16 },
    ];

    const trafficData = {
        organic: 1200,
        boosted: 4800,
        total: 6000
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-8 right-8 z-20 p-3 bg-[#F8FAFC] hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-2xl transition-all active:scale-90"
                >
                    <X size={20} />
                </button>

                <div className="overflow-y-auto flex-1 custom-scrollbar">
                    {/* Header Section */}
                    <div className="p-10 md:p-12 bg-slate-50 border-b border-slate-100 relative">
                        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white shrink-0">
                                <img src={property.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="px-4 py-1 bg-primary text-[#1A1A1A] text-[9px] font-black rounded-lg uppercase tracking-widest shadow-lg">LIVE PROMOTION</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Property ID: {property.id}</span>
                                </div>
                                <h2 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none">{property.title}</h2>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <MapPin size={16} className="text-red-500" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest">Primary Market: {property.id.includes('MHSA') ? 'J&K' : 'MP'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Calendar size={16} className="text-primary" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest">Active Since: {property.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 md:p-12 space-y-16">
                        {/* Section 1: Traffic Intelligence */}
                        <div className="space-y-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-3">
                                    <TrendingUp className="text-primary" />
                                    Traffic Composition
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Global Network Analysis</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                {/* SVG Comparison Bars */}
                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Organic Engagement</p>
                                                <p className="text-2xl font-black text-[#1A1A1A] tracking-tighter">{trafficData.organic.toLocaleString()}</p>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase">Baseline</span>
                                        </div>
                                        <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-slate-200 transition-all duration-1000" 
                                                style={{ width: `${(trafficData.organic / trafficData.total) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Boosted Exposure</p>
                                                <p className="text-4xl font-black text-[#1A1A1A] tracking-tighter">{trafficData.boosted.toLocaleString()}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[20px] font-black text-green-500 leading-none">4x</p>
                                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Multiplier</p>
                                            </div>
                                        </div>
                                        <div className="h-6 w-full bg-slate-50 rounded-full overflow-hidden border-2 border-primary/5">
                                            <div 
                                                className="h-full bg-primary shadow-[0_0_20px_rgba(47,237,154,0.4)] transition-all duration-1000 delay-300" 
                                                style={{ width: `${(trafficData.boosted / trafficData.total) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                                    <div className="relative z-10 space-y-6">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary">
                                            <Zap size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-lg font-black uppercase tracking-tight">AI Rank Prediction</h4>
                                            <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">"Your property currently retains the #1 spot in Srinagar for 85% of relevant searches due to the Platinum engine boost."</p>
                                        </div>
                                        <div className="pt-4 flex items-center gap-8 border-t border-white/5">
                                            <div>
                                                <p className="text-2xl font-black text-white tracking-tight">98%</p>
                                                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Visibility Index</p>
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black text-primary tracking-tight">Top 10</p>
                                                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Search Rank</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Geographic Heatmap */}
                        <div className="space-y-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-3">
                                    <Globe2 className="text-red-500" />
                                    Lead Heatmap (HQ Origins)
                                </h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Location Intelligence</p>
                            </div>

                            <div className="grid lg:grid-cols-5 gap-10">
                                <div className="lg:col-span-3 h-[400px] bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden flex items-center justify-center p-10 group">
                                    {/* Stylized Heatmap Dots */}
                                    <div className="absolute inset-x-0 inset-y-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_location_map.svg/800px-India_location_map.svg.png')] bg-no-repeat bg-center bg-contain" />
                                    <div className="relative w-full h-full">
                                        {/* Mock Data Pulse Points */}
                                        <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-primary/20 rounded-full border border-primary/40 animate-pulse flex items-center justify-center">
                                            <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#2FED9A]" />
                                        </div>
                                        <div className="absolute bottom-1/2 left-1/4 w-12 h-12 bg-red-400/20 rounded-full border border-red-400/40 animate-pulse flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        </div>
                                        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-400/20 rounded-full border border-blue-400/40 animate-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                                            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-slate-100 shadow-xl space-y-2">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Search Hotspot</p>
                                        <p className="text-sm font-black text-[#1A1A1A] uppercase tracking-tight">KASHMIR VALLEY NODE</p>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 space-y-4">
                                    {leadOrigins.map((origin, i) => (
                                        <div key={i} className="p-6 bg-white border border-slate-50 rounded-2xl flex items-center justify-between hover:border-primary transition-all group/item hover:shadow-lg">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover/item:bg-[#1A1A1A] group-hover/item:text-primary transition-all">
                                                    <MapPin size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[12px] font-black text-[#1A1A1A] uppercase tracking-tight">{origin.city}, {origin.state}</h4>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{origin.count} Verified Inquiries</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black text-[#1A1A1A]">{origin.percentage}%</p>
                                                <div className="w-12 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                    <div className="h-full bg-primary" style={{ width: `${origin.percentage}%` }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-primary hover:text-primary transition-all mt-4">Download Detailed CSV Log</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-8 md:p-10 bg-[#F8FAFC] border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center text-green-500">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-tight">Quality Assurance Node</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">All leads verified via OTP/HuntID</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-10 py-5 bg-[#1A1A1A] text-white rounded-[1.8rem] font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-[#1A1A1A] transition-all active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3">
                            <Zap size={16} />
                            Buy More Visibility
                        </button>
                        <button className="flex-1 md:flex-none px-10 py-5 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-[1.8rem] font-black text-[11px] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-3">
                            Extend Boost
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyBoostReportModal;
