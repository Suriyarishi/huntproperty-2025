import React, { useState } from 'react';
import { 
    Home, MapPin, Building2, User, Info, Layout, 
    Layers, Bed, Maximize2, DollarSign, Wallet, 
    Star, Dumbbell, Waves, Timer, Plane, ShieldCheck, FileText, CheckCircle2,
    Image as ImageIcon, ChevronRight, ArrowRight, Download
} from 'lucide-react';
import { Project, ResidentialProjectDetails } from '../../types';

interface ResidentialProjectViewProps {
    project: Project;
    onBack: () => void;
}

const ResidentialProjectView: React.FC<ResidentialProjectViewProps> = ({ project, onBack }) => {
    const details = project.details as ResidentialProjectDetails;
    const [activeTab, setActiveTab] = useState<'CLP' | 'SPP' | 'FPP' | 'DPP'>('CLP');

    const paymentPlanData = {
        CLP: details.paymentPlans.clp,
        SPP: details.paymentPlans.spp,
        FPP: details.paymentPlans.fpp,
        DPP: details.paymentPlans.dpp
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20 animate-fade-in">
            {/* 1. Hero Data */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c21] via-[#1a1c21]/20 to-transparent" />
                
                <div className="absolute top-10 left-10 z-20">
                    <button 
                        onClick={onBack}
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-emerald-500 transition-all group"
                    >
                        <ArrowRight size={24} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="space-y-6 flex-1">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-5 py-2 bg-emerald-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/30">
                                    {project.type}
                                </span>
                                <span className="px-5 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                                    RERA: {details.reraNumber}
                                </span>
                                <span className="px-5 py-2 bg-[#1a1c21] text-emerald-400 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                                    {project.status}
                                </span>
                            </div>
                            
                            <div className="space-y-2">
                                <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none italic">
                                    {project.title}
                                </h1>
                                <div className="flex items-center gap-4 text-emerald-400 font-bold uppercase text-sm tracking-[0.2em]">
                                    <Building2 size={18} />
                                    {project.developer} <span className="text-white/20">/</span>
                                    <MapPin size={18} />
                                    {project.location}
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-6 w-full md:w-auto">
                            <div className="flex-1 bg-white/5 backdrop-blur-2xl p-6 rounded-[32px] border border-white/10 text-white min-w-[200px] text-center">
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Plot size</p>
                                <p className="text-2xl font-black uppercase tracking-tight">{details.plotSize}</p>
                            </div>
                            <div className="flex-1 bg-emerald-500 p-6 rounded-[32px] text-[#1a1c21] min-w-[200px] text-center shadow-2xl shadow-emerald-500/40">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Pricing From</p>
                                <p className="text-2xl font-black uppercase tracking-tight">{project.priceRange}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-16 -mt-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Stats Row */}
                    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Total Towers', val: details.towerAnalytics.names.length, sub: 'Units Available' },
                            { label: 'Total Floors', val: details.towerAnalytics.totalFloors, sub: 'High Rise Living' },
                            { label: 'Flats Per Floor', val: details.towerAnalytics.flatsPerFloor, sub: 'Optimized Privacy' },
                            { label: 'Possession', val: project.completionDate, sub: 'Scheduled Date' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-50 flex flex-col items-center text-center space-y-2 group hover:bg-emerald-50 transition-colors">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-3xl font-black text-[#1a1c21] group-hover:text-emerald-600 transition-colors">{stat.val}</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Left Content (Profile & Details) */}
                    <div className="lg:col-span-3 space-y-12">
                        
                        {/* 2. Residential Profiles */}
                        <div className="bg-white rounded-[48px] p-12 shadow-xl shadow-gray-200/40 border border-gray-50 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 text-emerald-200/20 p-10 -rotate-12 translate-x-10 -translate-y-10">
                                <Home size={160} />
                            </div>
                            <div className="relative z-10 space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tighter">Residency <span className="text-emerald-500">Profile</span></h2>
                                    <p className="text-gray-500 font-medium leading-relaxed text-lg italic pr-20">{details.projectProfile}</p>
                                </div>
                                
                                <div className="pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                                                <User size={20} />
                                            </div>
                                            <h4 className="text-sm font-black text-[#1a1c21] uppercase tracking-widest">About Builder</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm font-bold leading-relaxed">{details.aboutBuilder}</p>
                                        <button className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em] hover:gap-4 transition-all">
                                            View Builder History <ChevronRight size={14} />
                                        </button>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 flex flex-col justify-center gap-2">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Signatory Authority</p>
                                        <p className="text-xl font-black text-[#1a1c21] uppercase">{details.builderSignatory}</p>
                                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2 mt-2">
                                            <ShieldCheck size={14} /> Legally Verified
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Tower Analytics & Accommodation */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-4">
                                <Layers className="text-emerald-500" /> Unit Configurations
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {details.accommodation.map((acc, idx) => (
                                    <div key={idx} className="bg-white rounded-[40px] p-10 shadow-lg border border-gray-50 flex items-center justify-between group hover:border-emerald-200 transition-all">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-[#1a1c21] text-white rounded-[20px] flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                                                    <Bed size={24} />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h4 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tighter">{acc.type}</h4>
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                        <Maximize2 size={12} /> {acc.size}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-emerald-100 hover:text-emerald-600 transition-all group/btn">
                                            <Download size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Payment Plans */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <h2 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                    <Wallet className="text-emerald-500" /> Financial Roadmaps
                                </h2>
                                <div className="flex bg-gray-100 p-1.5 rounded-2xl overflow-x-auto no-scrollbar whitespace-nowrap">
                                    {(['CLP', 'SPP', 'FPP', 'DPP'] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                                activeTab === tab 
                                                ? 'bg-white text-[#1a1c21] shadow-md' 
                                                : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-emerald-50 border-2 border-dashed border-emerald-200 p-8 rounded-3xl min-h-[140px] flex items-center gap-8 group">
                                <div className="w-20 h-20 bg-white text-emerald-500 rounded-[24px] flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                                    <FileText size={32} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight"> {activeTab} Selected </h4>
                                    <p className="text-gray-600 font-bold uppercase text-xs tracking-widest opacity-80 leading-relaxed">
                                        {paymentPlanData[activeTab]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Amenities & Surcharges) */}
                    <div className="space-y-8 lg:col-span-1">
                        {/* Amenities */}
                        <div className="bg-[#1a1c21] rounded-[48px] p-10 text-white space-y-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-[80px] rounded-full" />
                            <h3 className="text-xl font-black uppercase tracking-tight text-emerald-400 flex items-center gap-3">
                                <Star size={20} /> Specs & Amenities
                            </h3>
                            <div className="space-y-4">
                                {details.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-wider text-white/80">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-3xl text-center space-y-1">
                                    <Dumbbell className="mx-auto text-emerald-400" size={20} />
                                    <p className="text-[9px] font-black uppercase text-white/40">Fitness Hub</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-3xl text-center space-y-1">
                                    <Waves className="mx-auto text-emerald-400" size={20} />
                                    <p className="text-[9px] font-black uppercase text-white/40">Kids Pool</p>
                                </div>
                            </div>
                        </div>

                        {/* Surcharges */}
                        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50 space-y-6">
                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-[0.2em] mb-4">Other Surcharges</h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'Lease Rent', val: details.surcharges.leaseRent },
                                    { label: 'Club Membership', val: details.surcharges.clubMembership },
                                    { label: 'PLC (Facing/Floor)', val: details.surcharges.plc }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase">{item.label}</span>
                                        <span className="text-[11px] font-black text-[#1a1c21] uppercase tracking-tight">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location Advantage */}
                        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50 space-y-6">
                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <MapPin size={18} className="text-emerald-500" /> Location Advantage
                            </h3>
                            <div className="space-y-6">
                                {details.locationAdvantage.map((loc, idx) => (
                                    <div key={idx} className="flex items-center gap-4 relative group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                                        <div className="absolute top-1.5 left-[2.5px] bottom-[-24px] w-[1px] bg-gray-100 last:hidden" />
                                        <div className="flex-1 flex justify-between items-end pb-4 border-b border-gray-50 group-last:border-0 group-last:pb-0">
                                            <div className="space-y-1">
                                                <p className="text-xs font-black text-[#1a1c21] uppercase tracking-tight">{loc.destination}</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Drive Time</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-emerald-600 font-black text-sm">
                                                <Timer size={14} /> {loc.time}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Media Gallery (Wide) */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-[48px] p-10 shadow-xl border border-gray-50 space-y-8">
                        <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                            <ImageIcon className="text-emerald-500" /> Site Progress Photos
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {details.media.progressPhotos.map((p, i) => (
                                <div key={i} className="aspect-square bg-gray-100 rounded-3xl overflow-hidden cursor-pointer hover:ring-4 ring-emerald-500/20 transition-all">
                                    <img src={p} className="w-full h-full object-cover" alt="Progress" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-[48px] p-10 shadow-xl border border-gray-50 space-y-8">
                        <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                            <Layout className="text-emerald-500" /> Sample Flat Gallery
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {details.media.sampleFlatGallery.map((p, i) => (
                                <div key={i} className="aspect-square bg-gray-100 rounded-3xl overflow-hidden cursor-pointer hover:ring-4 ring-emerald-500/20 transition-all">
                                    <img src={p} className="w-full h-full object-cover" alt="Sample" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResidentialProjectView;
