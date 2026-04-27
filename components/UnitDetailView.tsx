import React from 'react';
import { ArrowLeft, Phone, MessageSquare, Mail, MapPin, Navigation, Info, ShieldCheck, Calendar, Maximize2, Building2, Wind } from 'lucide-react';

interface UnitDetailViewProps {
    unit: any;
    project: any;
    onBack: () => void;
}

const UnitDetailView: React.FC<UnitDetailViewProps> = ({ unit, project, onBack }) => {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-3 text-slate-400 hover:text-slate-950 mb-16 transition-all uppercase text-[10px] font-black tracking-[0.3em] group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Project Details
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Visual Asset Section */}
                    <div className="lg:col-span-7 space-y-16">
                        <div className="aspect-[4/3] bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 relative group shadow-inner">
                            <img 
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                                alt="Floor Plan" 
                                className="w-full h-full object-cover p-12 transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute top-10 left-10">
                                <span className="px-8 py-3 bg-slate-950 text-primary rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                                    Technical Perspective
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Asset Details</p>
                                <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter flex items-center gap-4 leading-none">
                                    Specifications
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                {[
                                    { label: 'Primary Area', value: unit.size || unit.dimensions, icon: Maximize2 },
                                    { label: 'Orientation', value: 'North-East Facing', icon: Wind },
                                    { label: 'Elevation', value: 'High Rise Tier', icon: Building2 },
                                    { label: 'Delivery', value: project.completionDate, icon: Calendar }
                                ].map((spec, i) => (
                                    <div key={i} className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                            <spec.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
                                            <p className="font-black text-slate-950 text-base uppercase tracking-tight">{spec.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Panel Section */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="sticky top-24 space-y-12">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <p className="text-xs font-black text-primary uppercase tracking-[0.4em]">{project.title}</p>
                                    <h1 className="text-6xl font-black text-slate-950 tracking-tighter uppercase leading-[0.85]">
                                        {unit.type || unit.blockName}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-3">
                                        <ShieldCheck size={14} /> Inventory Verified
                                    </span>
                                    <span className="px-5 py-2 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100">
                                        {unit.status || 'Signature Series'}
                                    </span>
                                </div>
                                <div className="pt-10 border-t border-slate-100 space-y-10">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset Valuation</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-5xl font-black text-slate-950 tracking-tighter">₹ {(unit.size || '1000').split(' ')[0] * 5500 / 100000} L*</p>
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pricing Plan</span>
                                        </div>
                                        <p className="text-[9px] font-bold text-slate-400 italic uppercase">Excluding statutory duties and premium location charges.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <button className="flex items-center justify-center gap-4 w-full h-20 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-primary hover:text-slate-950 transition-all shadow-2xl">
                                            <MessageSquare size={18} /> Request Availability
                                        </button>
                                        <div className="grid grid-cols-2 gap-4">
                                            <button className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-950 rounded-2xl font-black uppercase tracking-widest text-[9px] hover:border-primary transition-all h-16 shadow-sm">
                                                <Phone size={16} /> Direct Call
                                            </button>
                                            <button className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:shadow-lg transition-all h-16">
                                                <MessageSquare size={20} /> WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 space-y-10">
                                <h3 className="text-xl font-black text-slate-950 uppercase tracking-widest flex items-center gap-4">
                                    <Navigation size={22} className="text-primary" /> Location Hub
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Transit Node', value: '1.2 km' },
                                        { label: 'Academic Zone', value: '0.5 km' },
                                        { label: 'Financial District', value: '5.0 km' }
                                    ].map((loc, i) => (
                                        <div key={i} className="flex justify-between items-center pb-5 border-b border-slate-200 last:border-0 last:pb-0">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{loc.label}</span>
                                            <span className="text-base font-black text-slate-950 tracking-tighter">{loc.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitDetailView;
