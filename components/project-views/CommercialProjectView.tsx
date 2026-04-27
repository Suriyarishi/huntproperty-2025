import React, { useState } from 'react';
import { 
    Building2, MapPin, Globe, Info, Layers, Maximize2, 
    ArrowRight, CheckCircle2, DollarSign, Wallet, FileText, 
    ShieldCheck, Zap, Award, Image as ImageIcon, FileSearch,
    ChevronRight, Download
} from 'lucide-react';
import { Project, CommercialProjectDetails } from '../../types';

interface CommercialProjectViewProps {
    project: Project;
    onBack: () => void;
}

const CommercialProjectView: React.FC<CommercialProjectViewProps> = ({ project, onBack }) => {
    const details = project.details as CommercialProjectDetails;
    const [activeTab, setActiveTab] = useState<'CLP' | 'SPP' | 'FPP' | 'DPP'>('CLP');

    const paymentPlanData = {
        CLP: details.paymentPlans.clp,
        SPP: details.paymentPlans.spp,
        FPP: details.paymentPlans.fpp,
        DPP: details.paymentPlans.dpp
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20 animate-fade-in">
            {/* 1. Project Header */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c21] via-[#1a1c21]/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                                    {project.type}
                                </span>
                                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    RERA ID: {details.reraId}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                                {project.title}
                            </h1>
                            <div className="flex items-center gap-2 text-white/70 font-bold uppercase text-xs tracking-widest">
                                <Building2 size={16} className="text-emerald-400" />
                                {project.developer} <span className="mx-2 text-white/30">|</span>
                                <MapPin size={16} className="text-emerald-400" />
                                {project.location}
                            </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[32px] border border-white/20 text-white min-w-[240px]">
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Expected Possession</p>
                            <p className="text-2xl font-black uppercase">{details.expectedPossession}</p>
                            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-white/50 uppercase">Starting From</span>
                                <span className="text-xl font-black text-emerald-400">{project.priceRange}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-16 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left & Middle Column (Main Info) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 2. Business Overview */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                    <Info className="text-emerald-500" /> Project Overview
                                </h2>
                                <a 
                                    href={details.builderWebsite} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest hover:text-emerald-700 transition-colors"
                                >
                                    Visit Website <Globe size={14} />
                                </a>
                            </div>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                {details.aboutProject}
                            </p>
                            
                            {/* 3. Inventory Structure */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 group hover:border-emerald-200 transition-all">
                                    <Layers className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Towers</p>
                                    <p className="text-xl font-black text-[#1a1c21]">{details.totalTowers} Towers</p>
                                </div>
                                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 group hover:border-emerald-200 transition-all">
                                    <Maximize2 className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Floor Sizes</p>
                                    <p className="text-xl font-black text-[#1a1c21]">{details.floorSizes}</p>
                                </div>
                                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 group hover:border-emerald-200 transition-all">
                                    <Maximize2 className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Unit Sizes</p>
                                    <p className="text-xl font-black text-[#1a1c21]">{details.unitSizes}</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Space Types */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <h2 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                <Building2 className="text-emerald-500" /> Space Configurations
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {details.spaceTypes.map((space, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-6 bg-[#1a1c21] rounded-3xl group hover:bg-emerald-600 transition-all duration-300">
                                        <div className="space-y-1">
                                            <p className="text-white font-black uppercase tracking-tight">{space.type}</p>
                                            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                                                {space.isLockable ? 'Lockable' : 'Unlockable'} Space
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-emerald-400 font-black group-hover:text-white transition-colors">{space.minSize}</p>
                                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-tight">Min. Size</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5. Payment Plans */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <h2 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                    <Wallet className="text-emerald-500" /> Payment Plans
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
                            
                            <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-3xl min-h-[120px] animate-fade-in">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shrink-0">
                                        <FileText size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black text-[#1a1c21] uppercase tracking-tight">
                                            {activeTab === 'CLP' && 'Construction Linked Plan'}
                                            {activeTab === 'SPP' && 'Special Payment Plan'}
                                            {activeTab === 'FPP' && 'Flexi Payment Plan'}
                                            {activeTab === 'DPP' && 'Down Payment Plan'}
                                        </h4>
                                        <p className="text-gray-600 font-medium leading-relaxed">
                                            {paymentPlanData[activeTab]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6. Technical Gallery */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <h2 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                <FileSearch className="text-emerald-500" /> Blueprints & Plans
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { label: 'Floor Plans', items: details.technicalGallery.floorPlans },
                                    { label: 'Cluster Plans', items: details.technicalGallery.clusterPlans },
                                    { label: 'Site Plans', items: details.technicalGallery.sitePlans }
                                ].map((group, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{group.label}</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {group.items.map((img, i) => (
                                                <div key={i} className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group cursor-pointer border border-gray-200">
                                                    <img src={img} alt={group.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                    <div className="absolute inset-0 bg-[#1a1c21]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Download size={20} className="text-white" />
                                                    </div>
                                                </div>
                                            ))}
                                            {group.items.length === 0 && (
                                                <div className="col-span-2 py-8 text-center text-gray-300 italic text-[10px]">No plans attached</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="space-y-8">
                        {/* Financial Card */}
                        <div className="bg-[#1a1c21] rounded-[40px] p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full" />
                            
                            <h2 className="text-xl font-black uppercase tracking-tight text-emerald-400">Financial Summary</h2>
                            
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Basic Sales Price (BSP)</p>
                                    <p className="text-3xl font-black text-white">{details.bsp}</p>
                                </div>
                                <div className="space-y-1 bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-[24px]">
                                    <p className="text-[10px] font-black text-emerald-400/80 uppercase tracking-widest">Assured Returns / Rentals</p>
                                    <p className="text-2xl font-black text-emerald-400">{details.assuredReturn}</p>
                                    <p className="text-[10px] font-medium text-emerald-400/50 mt-2 italic">*Terms and conditions apply</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest">Additional Surcharges</h4>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Covered Parking', value: details.otherCosts.parking },
                                        { label: 'Club Membership', value: details.otherCosts.clubMembership },
                                        { label: 'EFC / FFC Charges', value: details.otherCosts.efc_ffc }
                                    ].map((cost, idx) => (
                                        <div key={idx} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                            <span className="text-[10px] font-bold text-white/60 uppercase">{cost.label}</span>
                                            <span className="text-sm font-black text-white">{cost.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-emerald-500 text-[#1a1c21] h-16 rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group">
                                Contact Seller For Quotes <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Infrastructure & Tech */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <h2 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight">Infrastructure</h2>
                            <div className="space-y-4 text-emerald-400">
                                {[
                                    { icon: Zap, label: "Energy Efficient" },
                                    { icon: Award, label: "LEED Certified" },
                                    { icon: ShieldCheck, label: "3-Tier Security" },
                                    { icon: Building2, label: "High-speed Lifts" }
                                ].map((infra, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <infra.icon size={20} className="text-emerald-500" />
                                        <span className="text-xs font-black text-gray-700 uppercase tracking-widest">{infra.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visuals - Construction Site */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                            <h2 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                <ImageIcon className="text-emerald-500" /> Construction Feed
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {details.visuals.constructionPhotos.map((photo, idx) => (
                                    <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-gray-100 transition-transform hover:scale-105 cursor-pointer">
                                        <img src={photo} alt="Construction" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                {details.visuals.constructionPhotos.length === 0 && (
                                    <div className="col-span-2 py-12 text-center text-gray-300 italic text-[10px]">No site photos available yet</div>
                                )}
                            </div>
                            <button className="w-full h-14 bg-gray-950 text-white rounded-[20px] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all">
                                View Full Project Gallery <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* FAB for Back */}
            <button 
                onClick={onBack}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#1a1c21] text-[#2FED9A] px-10 py-5 rounded-full shadow-2xl flex items-center gap-3 font-black uppercase tracking-widest text-[10px] hover:scale-110 transition-all z-50 border-2 border-emerald-500/20"
            >
                <ArrowRight size={18} className="rotate-180" /> Back to Projects
            </button>
        </div>
    );
};

export default CommercialProjectView;
