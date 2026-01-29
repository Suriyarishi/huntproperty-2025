import React, { useState } from 'react';
import { 
    Monitor, Smartphone, LayoutGrid, Network, 
    ArrowRight, Phone, Mail, Info, 
    Zap, Sparkles, IndianRupee,
    ChevronRight, ShieldCheck, Globe, Cpu
} from 'lucide-react';

interface AdvertiseWithUsViewProps {
    onNavigate: (view: any) => void;
}

const AdvertiseWithUsView: React.FC<AdvertiseWithUsViewProps> = ({ onNavigate }) => {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

    const packages = [
        {
            id: 'h-home',
            title: 'Horizontal Banners',
            location: 'Home Page',
            price: '₹ 35,000',
            icon: Monitor
        },
        {
            id: 'v-home',
            title: 'Vertical Banners',
            location: 'Home Page',
            price: '₹ 35,000',
            icon: Smartphone
        },
        {
            id: 'h-dash',
            title: 'Horizontal Banners',
            location: 'Dashboard',
            price: '₹ 25,000',
            icon: LayoutGrid
        },
        {
            id: 'v-dash',
            title: 'Vertical Banners',
            location: 'Dashboard',
            price: '₹ 25,000',
            icon: Network
        }
    ];

    const handlePayment = () => {
        if (!selectedPackage) return;
        alert(`Initializing secure transaction hub...`);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Professional Header */}
                <div className="text-center space-y-6 mb-24 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900 text-primary text-[9px] font-black uppercase tracking-[0.3em] shadow-lg">
                        <Sparkles size={12} /> Advertise with Hunt Property
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none">
                        Advertising <span className="text-red-600 italic">Packages</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        Strategically position your brand where high-intent buyers, builders, and developers engage.
                    </p>
                </div>

                {/* 2. Minimalist Package Grid */}
                <div className="space-y-16 animate-fade-in-up delay-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {packages.map((pkg) => (
                            <div 
                                key={pkg.id}
                                onClick={() => setSelectedPackage(pkg.id)}
                                className={`group relative bg-white rounded-[3rem] p-12 transition-all duration-500 cursor-pointer border flex flex-col justify-between h-[380px] shadow-sm ${selectedPackage === pkg.id ? 'border-red-600 shadow-2xl ring-4 ring-red-50 scale-[1.02]' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                                <div className="space-y-8 relative z-10 text-center flex flex-col items-center">
                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${selectedPackage === pkg.id ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-slate-50 border border-slate-100 text-slate-400'}`}>
                                        <pkg.icon size={32} strokeWidth={1.5} />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight leading-tight">{pkg.title}</h3>
                                        <div className="inline-block px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                                            <p className="text-[9px] font-black text-red-600 uppercase tracking-widest">{pkg.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <div className={`text-4xl font-display font-black tracking-tighter ${selectedPackage === pkg.id ? 'text-red-600' : 'text-slate-900'}`}>
                                        {pkg.price}
                                    </div>
                                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedPackage === pkg.id ? 'border-red-600 bg-red-600 shadow-lg' : 'border-slate-200 bg-white'}`}>
                                        {selectedPackage === pkg.id && <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>}
                                    </div>
                                </div>
                                
                                {/* Background Glow */}
                                {selectedPackage === pkg.id && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-red-50/0 to-red-50/50 pointer-events-none rounded-[3rem]"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center pt-4">
                        <button 
                            onClick={handlePayment}
                            disabled={!selectedPackage}
                            className={`px-24 py-7 rounded-full font-black text-xs uppercase tracking-[0.5em] transition-all active:scale-95 shadow-2xl flex items-center gap-6 group relative overflow-hidden ${selectedPackage ? 'bg-slate-900 text-white hover:bg-red-600' : 'bg-slate-100 text-slate-300'}`}
                        >
                            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            PROCESS PAYMENT <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* 3. Improved Contact Us Section */}
                <div className="mt-40 bg-white rounded-[4rem] border border-slate-200 shadow-2xl overflow-hidden relative group/contact">
                    <div className="grid lg:grid-cols-12">
                        {/* Title Bar */}
                        <div className="lg:col-span-4 p-12 md:p-16 bg-slate-950 text-white flex flex-col justify-center space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldCheck size={180} /></div>
                            <h3 className="text-primary font-black uppercase text-[10px] tracking-[0.6em] relative z-10">Assistance Matrix</h3>
                            <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.8] relative z-10">Contact <br/><span className="text-red-600">Us</span></h2>
                        </div>

                        {/* Details Matrix */}
                        <div className="lg:col-span-8 p-12 md:p-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start bg-slate-50/50">
                            {/* Phone */}
                            <div className="space-y-6 group/item">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 border border-slate-200 group-hover/item:scale-110 group-hover/item:border-red-600 transition-all shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call us at</p>
                                    <p className="text-2xl font-black text-slate-900 tracking-tighter">9350 543210</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-6 group/item lg:col-span-1">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 border border-slate-200 group-hover/item:scale-110 group-hover/item:border-red-600 transition-all shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mail for Sales/Service</p>
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-black text-slate-900 uppercase tracking-tight">info@huntproperty.com</p>
                                        <p className="text-xs font-black text-slate-900 uppercase tracking-tight">services@huntproperty.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Link */}
                            <div className="space-y-6 group/item">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 border border-slate-200 group-hover/item:scale-110 group-hover/item:border-emerald-600 transition-all shadow-sm">
                                    <Info size={24} />
                                </div>
                                <div className="space-y-3">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">More Information</p>
                                    <button 
                                        onClick={() => onNavigate('customer-care')}
                                        className="inline-flex items-center gap-3 text-red-600 font-black text-xs uppercase tracking-widest hover:underline group/btn"
                                    >
                                        Continue with Customer Services <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Validation */}
                <div className="mt-32 pt-16 border-t border-slate-200 opacity-20 hover:opacity-100 transition-all duration-1000 text-center space-y-12">
                     <p className="text-[11px] font-black text-slate-900 uppercase tracking-[1em]">HUNT PROPERTY SECURED AD NETWORK</p>
                     <div className="flex flex-wrap justify-center gap-20 grayscale hover:grayscale-0 transition-all">
                         <ShieldCheck size={36} />
                         <Globe size={36} />
                         <Network size={36} />
                         <Cpu size={36} />
                         <IndianRupee size={36} />
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseWithUsView;