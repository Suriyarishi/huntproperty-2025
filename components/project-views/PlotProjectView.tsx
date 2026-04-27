import React from 'react';
import { 
    MapPin, Building2, Grid, Layers, Map as MapIcon, 
    Maximize2, DollarSign, Wallet, CheckCircle2, 
    Zap, Compass, Move, ArrowRight, Download, Image as ImageIcon
} from 'lucide-react';
import { Project, PlotProjectDetails } from '../../types';

interface PlotProjectViewProps {
    project: Project;
    onBack: () => void;
}

const PlotProjectView: React.FC<PlotProjectViewProps> = ({ project, onBack }) => {
    const details = project.details as PlotProjectDetails;

    return (
        <div className="min-h-screen bg-white animate-fade-in font-sans">
            {/* 1. Top Level Info / Hero */}
            <div className="bg-slate-950 text-white min-h-[70vh] flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-10">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-emerald-500 text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {project.type} Development
                                </span>
                                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
                                    RERA: {details.projectRera}
                                </span>
                            </div>
                            
                            <div className="space-y-6">
                                <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                                    {project.title} <br/><span className="text-white/20 italic">Collection</span>
                                </h1>
                                <div className="flex items-center gap-8 text-white/40 font-bold uppercase text-[11px] tracking-[0.3em]">
                                    <div className="flex items-center gap-2">
                                        <Building2 size={16} className="text-emerald-500" />
                                        {project.developer}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-emerald-500" />
                                        {project.location}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-12 pt-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Immediate Possession</p>
                                    <p className="text-3xl font-black uppercase">{details.expectedPossession}</p>
                                </div>
                                <div className="w-px h-12 bg-white/10" />
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Infrastructure</p>
                                    <p className="text-3xl font-black uppercase">{project.units}+ Plots</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-[4rem] p-12 text-slate-950 shadow-2xl space-y-10 border-t-8 border-emerald-500">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Investment Value</p>
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="text-6xl font-black tracking-tighter">{details.pricePerUnit}</h3>
                                        <span className="text-sm font-bold text-slate-400 uppercase">Onwards*</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DLP Structure</span>
                                        <span className="text-sm font-black text-slate-950 uppercase">{details.dlp}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                            <p className="text-[9px] font-black text-slate-400 uppercase mb-1">IDC Charges</p>
                                            <p className="text-xs font-black text-slate-950">{details.developmentCharges.idc}</p>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                            <p className="text-[9px] font-black text-slate-400 uppercase mb-1">EDC Charges</p>
                                            <p className="text-xs font-black text-slate-950">{details.developmentCharges.edc}</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-slate-950 text-white h-18 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all flex items-center justify-center gap-4 py-6">
                                    Request Quotation <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Layout & Dimensions Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="space-y-20">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Master Mapping</p>
                                <h2 className="text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tighter">Block Layouts</h2>
                            </div>
                            <div className="h-px bg-slate-100 flex-1 hidden lg:block mx-12" />
                            <div className="flex items-center gap-4">
                                <Grid className="text-emerald-500" size={32} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {details.layout.map((item, idx) => (
                                <div key={idx} className="group p-10 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-3xl transition-all duration-700">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-16 h-16 bg-slate-950 text-white rounded-[1.8rem] flex items-center justify-center text-xl font-black">
                                            {item.blockName}
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Cut</p>
                                            <p className="text-3xl font-black text-slate-950 tracking-tighter">{item.dimensions}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                                        <div className="flex items-center gap-2">
                                            <Maximize2 size={16} className="text-emerald-500" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Inventory Available</span>
                                        </div>
                                        <span className="text-lg font-black text-slate-950">{item.plotsPerBlock} Plots</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Technical Blueprints Section */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="space-y-20">
                        <div className="text-center space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Strategic Documentation</p>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tighter">Technical Plans</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {[
                                { title: 'Block Framework', plans: details.plans.blockPlans },
                                { title: 'Cluster Strategy', plans: details.plans.clusterPlans }
                            ].map((section, idx) => (
                                <div key={idx} className="bg-white p-12 rounded-[4rem] border border-slate-200/60 shadow-sm space-y-8">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">{section.title}</h4>
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-emerald-500">
                                            <Download size={16} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        {section.plans.map((url, i) => (
                                            <div key={i} className="aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-500 transition-all group p-4">
                                                <img src={url} alt="Plan" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-all duration-700" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Infrastructure & Features Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 space-y-12">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">PLC Strategy</p>
                                    <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Location Premium</h3>
                                </div>
                                <div className="space-y-4">
                                    {details.plcOptions.map((opt, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{opt}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[9px] font-bold text-slate-400 italic uppercase leading-relaxed">* Preferential Location Charges apply as per site selection and plot orientation.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-12">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Core Assets</p>
                                    <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Infrastructure Specs</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {details.communityFeatures.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-emerald-50 transition-colors">
                                            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-emerald-500 shadow-sm">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Visual Site Progress */}
            <section className="py-32 bg-slate-950 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="space-y-20">
                        <div className="text-center space-y-4">
                            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Visual Veracity</p>
                            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">Current Development</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {details.visuals.siteLayoutPhotos.map((photo, idx) => (
                                <div key={idx} className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 cursor-pointer group relative">
                                    <img src={photo} alt="Site" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
                                    <div className="absolute inset-x-0 bottom-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ImageIcon size={20} className="text-emerald-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Navigation */}
            <div className="fixed bottom-12 left-0 right-0 flex justify-center z-50 pointer-events-none">
                <button 
                    onClick={onBack}
                    className="bg-slate-950 text-white px-10 py-5 rounded-full shadow-3xl flex items-center gap-4 font-black uppercase tracking-widest text-[9px] pointer-events-auto hover:bg-emerald-600 hover:scale-105 transition-all border border-white/10 backdrop-blur-xl"
                >
                    <ArrowRight size={18} className="rotate-180" /> Return to Discovery
                </button>
            </div>
        </div>
    );
};

export default PlotProjectView;
