import React from 'react';
import { 
    MapPin, Building2, Gavel, FileText, TreePine, 
    Droplets, Zap, ShieldAlert, Navigation, Phone, 
    Hospital, GraduationCap, DollarSign, Map as MapIcon,
    ArrowRight, CheckCircle2, XCircle, Info, Download
} from 'lucide-react';
import { Project, AgriculturalProjectDetails } from '../../types';

interface AgriculturalProjectViewProps {
    project: Project;
    onBack: () => void;
}

const AgriculturalProjectView: React.FC<AgriculturalProjectViewProps> = ({ project, onBack }) => {
    const details = project.details as AgriculturalProjectDetails;

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-24 animate-fade-in font-sans">
            {/* Header / Hero */}
            <div className="relative h-[450px] w-full bg-[#1a1c21] overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c21] via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6">
                    <div className="flex gap-3">
                        <span className="px-6 py-2 bg-emerald-500 text-[#1a1c21] rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl">
                            {details.landType} Listing
                        </span>
                        <span className="px-6 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em]">
                            {details.possessionStatus}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight italic">
                        {project.title}
                    </h1>
                    <div className="flex items-center gap-6 text-emerald-400 font-bold uppercase text-xs tracking-[0.4em]">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} /> {details.geographic.village}, {details.geographic.state}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-16 -mt-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Primary Specs & Geographic (Top Bar Style) */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 space-y-2 flex flex-col items-center text-center">
                            <TreePine className="text-emerald-500 mb-2" size={32} />
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Land Size</p>
                            <p className="text-2xl font-black text-[#1a1c21] uppercase">{details.totalSize}</p>
                        </div>
                        <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 space-y-2 flex flex-col items-center text-center">
                            <Info className="text-emerald-500 mb-2" size={32} />
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Khasara Number</p>
                            <p className="text-2xl font-black text-[#1a1c21]">{details.geographic.khasaraNumber}</p>
                        </div>
                        <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 space-y-2 flex flex-col items-center text-center">
                            <MapPin className="text-emerald-500 mb-2" size={32} />
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tehsil / District</p>
                            <p className="text-2xl font-black text-[#1a1c21] uppercase">{details.geographic.tehsil}</p>
                        </div>
                        <div className="bg-[#1a1c21] p-8 rounded-[40px] shadow-2xl text-white space-y-2 flex flex-col items-center text-center group hover:bg-emerald-600 transition-colors">
                            <DollarSign className="text-emerald-400 mb-2 group-hover:text-white transition-colors" size={32} />
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Price Per Unit</p>
                            <p className="text-2xl font-black text-emerald-400 group-hover:text-white transition-colors">{details.pricing.pricePerUnit}</p>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-10">
                        
                        {/* Legal & Ownership */}
                        <div className="bg-white rounded-[48px] p-12 shadow-xl border border-gray-50 space-y-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full translate-x-20 -translate-y-20 blur-3xl opacity-50" />
                            
                            <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tighter flex items-center gap-4 italic z-10 relative">
                                <Gavel className="text-emerald-500" /> Legal & Ownership Record
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Ownership Details</p>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Category', val: details.legal.category },
                                                { label: 'No. of Owners', val: details.legal.ownersCount },
                                                { label: 'Mutation Status', val: details.legal.mutationStatus }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-50">
                                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.label}</span>
                                                    <span className="text-sm font-black text-[#1a1c21] uppercase">{item.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50 p-8 rounded-[32px] border border-emerald-100 italic font-medium text-emerald-800 text-sm">
                                        Note: All ownership documents are verified through the state land record portal.
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Available Documents</p>
                                    <div className="space-y-4">
                                        {details.legal.documents.map((doc, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 rounded-[24px] border border-gray-100 group hover:bg-[#1a1c21] transition-all">
                                                <div className="flex items-center gap-4">
                                                    <FileText size={20} className="text-emerald-500" />
                                                    <span className="text-xs font-black text-[#1a1c21] group-hover:text-white uppercase tracking-widest">{doc}</span>
                                                </div>
                                                <Download size={18} className="text-gray-300 group-hover:text-emerald-400 cursor-pointer" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Site Condition & Environmental */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-[48px] p-10 shadow-xl border border-gray-50 space-y-8">
                                <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight flex items-center gap-3">
                                    <TreePine className="text-emerald-500" /> Site Condition
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Fencing Type', val: details.siteCondition.fencing },
                                        { label: 'Existing Crop', val: details.siteCondition.cropStatus },
                                        { label: 'Structures', val: details.siteCondition.existingStructures }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col gap-1 p-5 bg-gray-50 rounded-3xl">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
                                            <span className="text-sm font-black text-[#1a1c21] uppercase">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-[#1a1c21] rounded-[48px] p-10 text-white shadow-2xl space-y-8">
                                <h3 className="text-xl font-black text-emerald-400 uppercase tracking-tight flex items-center gap-3">
                                    <ShieldAlert size={20} /> Proximity Flags
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Water Bodies Near Site', val: details.proximityFlags.waterBodies },
                                        { label: 'High Tension Wires', val: details.proximityFlags.highTensionWires, inverted: true },
                                        { label: 'Factories Nearby', val: details.proximityFlags.factories, inverted: true },
                                        { label: 'Religious Structures', val: details.proximityFlags.religiousStructures }
                                    ].map((flag, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{flag.label}</span>
                                            {flag.val ? (
                                                <CheckCircle2 size={18} className={flag.inverted ? 'text-amber-500' : 'text-emerald-500'} />
                                            ) : (
                                                <XCircle size={18} className="text-white/20" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[9px] font-bold text-white/30 italic uppercase">* Indicators based on site survey data</p>
                            </div>
                        </div>

                        {/* Financials & technical */}
                        <div className="bg-white rounded-[48px] p-12 shadow-xl border border-gray-50 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                                    <DollarSign className="text-emerald-500" /> Financial Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-gray-50 p-6 rounded-[24px]">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Demand</p>
                                        <p className="text-2xl font-black text-[#1a1c21]">{details.pricing.totalDemand}</p>
                                    </div>
                                    <div className="flex justify-between items-center bg-emerald-500 p-6 rounded-[24px] text-[#1a1c21] shadow-lg shadow-emerald-500/20">
                                        <p className="text-[10px] font-black text-[#1a1c21]/60 uppercase tracking-widest">Bank Loan Available</p>
                                        <p className="text-lg font-black uppercase">{details.pricing.bankLoanAvailable ? 'Yes - T&C' : 'Call Broker'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                                    <MapIcon className="text-emerald-500" /> Technical Data
                                </h3>
                                <div className="space-y-6">
                                    <a href={details.technical.googleLocation} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-[#1a1c21] text-white rounded-[24px] group transition-all">
                                        <div className="flex items-center gap-4">
                                            <Navigation size={20} className="text-emerald-400 group-hover:rotate-45 transition-transform" />
                                            <span className="text-xs font-black uppercase tracking-widest">Google Location</span>
                                        </div>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <div className="aspect-video bg-gray-100 rounded-[24px] border border-gray-200 relative overflow-hidden group cursor-pointer">
                                        <img src={details.technical.sitePlanUrl} alt="Site Plan" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                        <div className="absolute inset-0 bg-[#1a1c21]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">View Site Plan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Connectivity Card */}
                        <div className="bg-[#1a1c21] rounded-[48px] p-10 text-white shadow-2xl space-y-10 border border-white/5">
                            <h3 className="text-xl font-black text-emerald-400 uppercase tracking-tight flex items-center gap-3 italic">
                                <Navigation className="rotate-45" size={20} /> Connectivity
                            </h3>
                            <div className="space-y-8 relative">
                                <div className="absolute top-2 bottom-2 left-6 w-[1px] bg-white/10" />
                                {[
                                    { icon: Building2, label: 'Main Road', dist: details.connectivity.mainRoad },
                                    { icon: GraduationCap, label: 'Local School', dist: details.connectivity.school },
                                    { icon: Hospital, label: 'Goverment Hospital', dist: details.connectivity.hospital },
                                    { icon: Phone, label: 'Police Station', dist: details.connectivity.policeStation }
                                ].map((conn, idx) => (
                                    <div key={idx} className="flex items-center gap-6 relative z-10 group">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:bg-emerald-500 group-hover:text-[#1a1c21] transition-all">
                                            <conn.icon size={20} />
                                        </div>
                                        <div className="flex-1 flex justify-between items-end border-b border-white/5 pb-4 group-last:border-0 group-last:pb-0">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{conn.label}</span>
                                            <span className="text-sm font-black text-emerald-400">{conn.dist}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full h-18 bg-emerald-500 text-[#1a1c21] rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 mt-4">
                                Request Direction Link <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Support Card */}
                        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50 space-y-6 text-center">
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Phone size={32} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-black text-[#1a1c21] uppercase tracking-tight">Need Assistance?</h4>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our land advisors are here to help you</p>
                            </div>
                            <div className="pt-6 space-y-4">
                                <button className="w-full h-14 bg-gray-100 text-[#1a1c21] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-200 transition-all">
                                    Call Land Advisor
                                </button>
                                <button className="w-full h-14 bg-[#1a1c21] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all">
                                    Chat on Whatsapp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back Button FAB */}
            <div className="fixed bottom-10 left-10 z-50">
                <button 
                    onClick={onBack}
                    className="p-6 bg-[#1a1c21] text-emerald-400 rounded-[28px] shadow-2xl hover:scale-110 transition-all border-4 border-emerald-500/20"
                >
                    <ArrowRight size={32} className="rotate-180" />
                </button>
            </div>
        </div>
    );
};

export default AgriculturalProjectView;
