import React, { useState } from 'react';
import { 
    ShieldCheck, Scale, Map, Newspaper, Play, 
    Globe, UserCheck, Briefcase, Download, ArrowRight, 
    Search, Filter, ChevronRight, CheckCircle2, AlertCircle, AlertTriangle,
    FileText, HelpCircle, Phone, Mail, Upload, Sparkles, Building, Building2, Landmark, TreePine, Navigation, Compass, Layout, Target, Tag, Calendar, UserCircle, Droplet, Layers,
    History, Fingerprint, Gavel, ShieldAlert, Zap, ArrowDownToLine, Info, BookOpen, HardDrive, FileSignature, FileKey, Shield,
    Eye, Users, ClipboardCheck, MessageSquarePlus, Quote, BookOpenCheck, ExternalLink, Maximize2, Clock, ListFilter, Youtube, Share2,
    ShieldPlus, FileBadge, Globe2, Network, IndianRupee, ChevronDown, Key, Repeat, Activity, Send,
    User, MapPin, HeartPulse, Thermometer, Hand, Syringe, Biohazard, Stethoscope,
    Wind, Activity as ActivityIcon, ShieldAlert as ShieldAlertIcon, RefreshCw, Smartphone,
    Waves, Beaker, Pill, LogOut, Coffee, Info as InfoIcon, TrendingUp, Loader2
} from 'lucide-react';

const Header = ({ title, subtitle, icon: Icon, themeColor = 'text-red-600', bgColor = 'bg-red-50' }) => (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-100 pb-12">
            <div className={`w-20 h-20 ${bgColor} ${themeColor} rounded-[2rem] flex items-center justify-center shadow-xl ring-8 ${bgColor}/50`}>
                <Icon size={40} strokeWidth={1.5} />
            </div>
            <div className="text-center md:text-left space-y-2">
                <h1 className="text-4xl md:text-6xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">{title}</h1>
                <p className="text-slate-400 font-black text-xs md:text-sm uppercase tracking-[0.3em]">{subtitle}</p>
            </div>
        </div>
    </div>
);

// 1. RERA View
export const ReraView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const states = [
        "Andhra Pradesh", "Bihar", "Dadra and Nagar Haveli", "Goa", "Haryana", 
        "Kerala", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamilnadu", 
        "UP", "Uttrakhand"
    ];

    const filteredStates = states.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const objectives = [
      { 
        title: "Financial Discipline", 
        desc: "70% of project funds must reside in an escrow account, ensuring construction capital is strictly protected.",
        icon: ShieldPlus,
        color: 'emerald'
      },
      { 
        title: "Total Transparency", 
        desc: "Mandatory carpet area quotes and project disclosures eliminate ambiguity and hidden costs.",
        icon: Eye,
        color: 'blue'
      },
      { 
        title: "Rigid Accountability", 
        desc: "Registration is non-negotiable for projects over 500 sq.m, enforcing developer compliance.",
        icon: ClipboardCheck,
        color: 'red'
      },
      { 
        title: "Judicial Redressal", 
        desc: "Dedicated tribunals provide rapid legal resolution for possession delays and quality issues.",
        icon: Gavel,
        color: 'amber'
      },
      { 
        title: "Agent Governance", 
        desc: "Standardized unique IDs for brokers ensure consumer protection through certified mediation.",
        icon: UserCheck,
        color: 'purple'
      }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[160px] -mr-96 -mt-96 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] -ml-48 -mb-48 pointer-events-none"></div>

            <Header 
                title="RERA Intelligence" 
                subtitle="Governance, Compliance & Consumer Protection" 
                icon={ShieldCheck} 
                themeColor="text-emerald-600"
                bgColor="bg-emerald-50"
            />
            
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000">
                                <Network size={280} />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-1 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"><Zap size={24} /></div>
                                    <div>
                                        <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">The RERA Mandate</h2>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Core Operational Objectives</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {objectives.map((obj, i) => (
                                        <div key={i} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-emerald-200 p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-xl group/card">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 group-hover:card:bg-emerald-50 group-hover:card:text-emerald-600 transition-all shadow-sm">
                                                    <obj.icon size={24} strokeWidth={1.5} />
                                                </div>
                                                <div className="text-[10px] font-black text-slate-200 group-hover/card:text-emerald-100 transition-colors">0{i+1}</div>
                                            </div>
                                            <h4 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight mb-2 group-hover/card:text-emerald-600 transition-colors">{obj.title}</h4>
                                            <p className="text-slate-500 text-xs font-medium leading-relaxed italic">{obj.desc}</p>
                                        </div>
                                    ))}
                                    <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white flex flex-col justify-center items-center text-center space-y-4 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                        <ShieldCheck size={40} className="text-primary mb-2" />
                                        <h4 className="text-xl font-display font-black uppercase leading-tight">Total Market <br/>Shield</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ensuring a fair ecosystem</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/5">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                            
                            <div className="flex items-center gap-4 mb-12 relative z-10">
                                <History className="text-primary" size={32} />
                                <h3 className="text-3xl font-display font-black uppercase tracking-tight">The Journey to <span className="text-primary">Order</span></h3>
                            </div>

                            <div className="space-y-12 relative z-10">
                                {[
                                    { year: '2013', event: 'Introduction', desc: 'The Real Estate Regulatory Authority Bill was first conceptualized and introduced to Parliament.' },
                                    { year: '2015', event: 'Optimization', desc: 'The Union Cabinet approved 20 major amendments based on Rajya Sabha recommendations.' },
                                    { year: '2016', event: 'Sanctified', desc: 'Historic approval by the Rajya Sabha (Mar 10) and Lok Sabha (Mar 15) marked a new era.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="flex flex-col items-center">
                                            <div className={`w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center font-display font-black text-primary text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                                                {item.year.slice(2)}
                                            </div>
                                            {i < 2 && <div className="w-0.5 h-full bg-white/5 my-4"></div>}
                                        </div>
                                        <div className="space-y-2 pt-2">
                                            <h4 className="font-display font-black text-white text-lg uppercase tracking-tight leading-none">{item.event}</h4>
                                            <p className="text-slate-400 text-sm font-medium max-w-xl leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white border border-slate-200 p-10 rounded-[3.5rem] shadow-xl space-y-6 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700"><Info size={120} /></div>
                             <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shadow-inner"><AlertTriangle size={20} /></div>
                                 <h4 className="font-display font-black text-slate-950 uppercase text-lg tracking-tight">Vigilance Hub</h4>
                             </div>
                             <p className="text-slate-500 font-medium text-sm leading-relaxed italic border-l-2 border-red-100 pl-4">
                                "The era of ambiguous 'Super Built-up Area' has ended. Buyers now possess the legal right to verified carpet area data and escrow-protected capital."
                             </p>
                             <div className="pt-4 space-y-3">
                                 <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                     <CheckCircle2 size={14} className="text-emerald-500" /> Possession Safeguards
                                 </div>
                                 <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                     <CheckCircle2 size={14} className="text-emerald-500" /> Capital Protection
                                 </div>
                                 <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                     <CheckCircle2 size={14} className="text-emerald-500" /> Quality Assurance
                                 </div>
                             </div>
                        </div>

                        <div className="bg-slate-950 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                             <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                             <div className="space-y-6 relative z-10">
                                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary shadow-inner border border-white/10">
                                     <Scale size={28} />
                                 </div>
                                 <div className="space-y-2">
                                     <h3 className="text-2xl font-display font-black uppercase tracking-tight leading-tight">Expert Audit <br/>Portal</h3>
                                     <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">Verification & Compliance Review</p>
                                 </div>
                                 <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary transition-all active:scale-95 shadow-xl">
                                     Initiate Legal Sync
                                 </button>
                                 <p className="text-[8px] font-black text-slate-600 uppercase text-center tracking-[0.2em]">DIRECT REGULATORY CONNECT</p>
                             </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
                                <p className="text-3xl font-display font-black text-emerald-600">70%</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Escrow Locked</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
                                <p className="text-3xl font-display font-black text-blue-600">2016</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Legislation Act</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
                    <div className="space-y-3">
                        <div className="w-12 h-1.5 bg-emerald-600 rounded-full"></div>
                        <h3 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Regional Governance Nodes</h3>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Access state-specific regulatory documents & frameworks</p>
                    </div>
                    <div className="w-full md:w-96 relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-600 transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="Find a regional node..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold shadow-xl outline-none focus:border-emerald-600 focus:ring-8 focus:ring-emerald-600/5 transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredStates.map(state => (
                        <div key={state} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700">
                                <Landmark size={140} />
                            </div>
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[1.5rem] mb-8 flex items-center justify-center shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                <FileBadge size={28} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-1 mb-8">
                                <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">Regulatory Link</h3>
                                <p className="text-emerald-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Globe2 size={12} /> {state} Node
                                </p>
                            </div>
                            <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group/btn">
                                <ArrowDownToLine size={16} className="group-hover/btn:animate-bounce" /> Sync Data Node
                            </button>
                        </div>
                    ))}

                    {filteredStates.length === 0 && (
                        <div className="col-span-full py-32 text-center bg-white rounded-[4rem] border border-dashed border-slate-200">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200 mb-6">
                                <Search size={32} />
                            </div>
                            <h4 className="text-xl font-display font-black text-slate-950 uppercase tracking-tight">Regional node not found</h4>
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Check the search criteria for active RERA hubs</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-32 text-center space-y-8 opacity-30">
                 <div className="w-16 h-1 w-24 bg-emerald-100 mx-auto"></div>
                 <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.5em]">Global Regulatory Assurance Hub • V.2025</p>
                 <div className="flex justify-center gap-12">
                     <Shield size={24} />
                     <Scale size={24} />
                     <Landmark size={24} />
                 </div>
            </div>
        </div>
    );
};

// 2. Legal Advisory View
export const LegalAdvisoryView = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const documentVault = [
        { name: "ADDENDUM FORMAT", date: "26-Dec-2020" },
        { name: "ADDRESS CHANGE FORMAT", date: "27-Dec-2020" },
        { name: "AGREEMENT TO SELL", date: "28-Dec-2020" },
        { name: "AGREEMENT TO SELL", date: "31-Jan-2021" },
        { name: "BROKER AGREEMENT", date: "29-Dec-2020" },
        { name: "BUILDER BUYER AGREEMENT FORMAT", date: "31-Dec-2020" },
        { name: "CANCELLATION AFFIDAVIT", date: "16-Jan-2021" },
        { name: "CANCELLATION CHECKLIST", date: "17-Jan-2021" },
        { name: "CANCELLATION FORMAT (ACE)", date: "18-Jan-2021" },
        { name: "CANCELLATION OF ALLOTTED UNIT (LOTUS)", date: "19-Jan-2021" },
        { name: "CANCELLATION OF UNALLOTTED UNIT (LOTUS)", date: "20-Jan-2021" },
        { name: "CHECK LIST FOR LOST AGREEMENT", date: "25-Jan-2021" },
        { name: "CO-MARKETING AGREEMENT", date: "27-Jan-2021" },
        { name: "CONVEYANCE DEED", date: "01-Jan-2021" },
        { name: "FUND TRANSFER AFFIDAVIT", date: "21-Jan-2021" },
        { name: "FUND TRANSFER CHECKLIST", date: "22-Jan-2021" },
        { name: "GENERAL POWER OF ATTORNEY", date: "29-Jan-2021" },
        { name: "LETTER OF INTENT", date: "02-Jan-2021" },
        { name: "LOST AGREEMENT AFFIDAVIT FORMAT", date: "26-Jan-2021" },
        { name: "MARKETING AGREEMENT", date: "28-Jan-2021" },
        { name: "NAME ADDITION FORMAT", date: "03-Jan-2021" },
        { name: "NAME DELETION FORMAT", date: "04-Jan-2021" },
        { name: "NO DUES CERTIFICATE", date: "05-Jan-2021" },
        { name: "NO OBJECTION CERTIFICATE", date: "06-Jan-2021" },
        { name: "PAYMENT RECEIPT", date: "07-Jan-2021" },
        { name: "PLAN CHANGE AFFIDAVIT", date: "08-Jan-2021" },
        { name: "POSSESSION LETTER", date: "09-Jan-2021" },
        { name: "PROPERTY TRANSFER FORMAT (RESALE) (3CS)", date: "01-Feb-2021" },
        { name: "PROVISIONAL ALLOTMENT LETTER", date: "14-Jan-2021" },
        { name: "PURCHASE N SALE (BUY BACK)", date: "10-Jan-2021" },
        { name: "QUADRAPARTITE AGREEMENT (JP)", date: "11-Jan-2021" },
        { name: "RENT AGREEMENT OR LEASE DEED", date: "23-Jan-2021" },
        { name: "RESALE FORMAT (SUPERTECH)", date: "02-Feb-2021" },
        { name: "REVOCATION OF GENERAL POWER OF ATTORNEY", date: "30-Jan-2021" },
        { name: "SAMPLE ALLOTMENT LETTER", date: "15-Jan-2021" },
        { name: "SIGNATURE VERIFICATION FROM BANK", date: "12-Jan-2021" },
        { name: "SURRENDER OF LEASE", date: "24-Jan-2021" },
        { name: "TRI PARTY AGREEMENT", date: "13-Jan-2021" }
    ];

    const filteredDocs = documentVault.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const coveredAreas = [
        { title: "Purchasing & Leasing", desc: "Guidance for land acquisition and long-term lease holds.", icon: Landmark },
        { title: "Building & Construction", desc: "Legal compliance frameworks for contractors and developers.", icon: Building },
        { title: "Property Management", desc: "Specialized drafting for estate maintenance and operations.", icon: Layers },
        { title: "Transferring Assets", desc: "Secure protocols for ownership transition and deed execution.", icon: ArrowRight },
        { title: "Cancellation Rights", desc: "Structured affidavits for unit withdrawals and refunds.", icon: AlertTriangle }
    ];

    const commonForms = [
        "Contracts for sale and purchase", "Mortgage agreements and assignments", "Liens",
        "Contractors and construction forms", "Real estate disclosures", "Property management agreements"
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header 
                title="Legal Advisory" 
                subtitle="High-Performance Compliance & Contracts" 
                icon={Scale} 
                themeColor="text-red-600"
                bgColor="bg-red-50"
            />
            
            <div className="max-w-7xl mx-auto px-6 mb-24 space-y-24">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                    <div className="lg:w-1/2 relative z-10 space-y-8">
                         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-primary text-[10px] font-black uppercase tracking-widest border border-white/10">
                            <Sparkles size={14} /> Knowledge is Power
                         </div>
                         <h2 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase tracking-tight">The <span className="text-red-500 italic">Objective</span></h2>
                         <p className="text-slate-300 text-lg font-medium leading-relaxed">
                            At Hunt Property we believe "Knowledge is Power". Time and again we have stated that we provide unabridged information to you. All real estate forms must be drafted to comply with the laws.
                         </p>
                         <p className="text-slate-400 text-sm font-medium leading-relaxed">
                            To save your valuable time we are providing you format of various Real Estate Legal Documents. Our Real Estate forms are designed to fit a variety of real estate related needs. By having everything in writing you can minimize or all-together avoid any potential problems at a later time.
                         </p>
                    </div>
                    <div className="lg:w-1/2 relative z-10">
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                             <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" className="w-full h-full object-cover" alt="Legal Gavel" />
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h3 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Core Covered Domains</h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs italic">"Ensuring clarity in every legal transition"</p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {coveredAreas.map((cap, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
                                    <cap.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-display font-black text-slate-900 text-sm uppercase tracking-tight mb-2">{cap.title}</h4>
                                <p className="text-slate-500 text-[11px] font-bold leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-xl grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight mb-4 leading-tight">Common <br/>Real Estate Forms</h3>
                        <p className="text-slate-500 text-sm font-medium italic">Standardized modules for secure residential and commercial operations.</p>
                    </div>
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                         {commonForms.map(item => (
                             <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                 <CheckCircle2 size={16} className="text-emerald-600" />
                                 <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight">{item}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden">
                    <div className="bg-slate-950 p-10 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-red-600 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                                <HardDrive size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-display font-black uppercase tracking-tight leading-none">Digital Vault</h2>
                                <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] mt-2">Standard Real Estate Formats</p>
                            </div>
                        </div>
                        <div className="w-full md:w-96 relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input 
                                type="text" 
                                placeholder="Search registry..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-white outline-none focus:border-red-600 focus:bg-white/10 transition-all"
                            />
                        </div>
                    </div>
                    <div className="max-h-[800px] overflow-y-auto no-scrollbar">
                        <table className="w-full text-left">
                            <tbody className="divide-y divide-slate-50">
                                {filteredDocs.map((doc, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-all group">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-red-50 group-hover:text-red-600 transition-all shadow-sm">
                                                    <FileSignature size={22} />
                                                </div>
                                                <div className="space-y-1">
                                                    <span className="font-display font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">{doc.name}</span>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                        <Calendar size={12} /> MODIFIED: {doc.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-lg active:scale-95 group/btn">
                                                <Download size={14} className="group-hover/btn:animate-bounce" /> Get PDF
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-32 text-center space-y-8 opacity-30">
                 <div className="w-16 h-1 w-24 bg-emerald-100 mx-auto"></div>
                 <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.5em]">Global Regulatory Assurance Hub • Hunt Property V.2025</p>
                 <div className="flex justify-center gap-12">
                     <Shield size={24} />
                     <Scale size={24} />
                     <Landmark size={24} />
                 </div>
            </div>
        </div>
    );
};

// 3. Master Plan View
export const MasterPlanView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const cities = ["Ahemdabad", "Allahabad", "Ambala", "Amritsar", "Aurangabad", "Begluru", "Chandigarh", "Dehradun", "Delhi", "Faridabad", "Gorakhpur", "Noida-2031"];
    
    const filteredCities = cities.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const processSteps = [
        { title: "Authority Setup", desc: "In India, State Development Authorities prepare the master plan.", icon: Landmark },
        { title: "Lifecycle Review", desc: "Master plans are periodically reviewed to ensure they remain updated.", icon: ClipboardCheck },
        { title: "Public Involvement", desc: "Community and industry are involved to ensure values are considered.", icon: Users },
        { title: "Governance Check", desc: "Central/State government and authority advice are integrated.", icon: ShieldCheck },
        { title: "Public Notice", desc: "Approval of GOI for public notice to invite objections & suggestions.", icon: Eye },
        { title: "Feedback Audit", desc: "Consideration of objections and suggestions.", icon: MessageSquarePlus },
        { title: "Finalization", desc: "Final plan is prepared subsequently for implementation.", icon: FileText }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header 
                title="Urban Master Plans" 
                subtitle="City Expansion & Strategic Blueprint Hub" 
                icon={Map} 
                themeColor="text-blue-600" 
                bgColor="bg-blue-50" 
            />

            <div className="max-w-7xl mx-auto px-6 mb-24 space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-blue-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03]"><Map size={200} /></div>
                            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-lg">?</span> 
                                What is a master plan?
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-4">
                                <p className="text-lg text-slate-800">A master plan is a <span className="font-black text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-4">non-statutory document</span> that outlines a vision to pilot growth and development of a centre over the next <span className="font-bold">20-30 years</span>.</p>
                                <p>It is not a detailed design, but rather:</p>
                                <ul className="space-y-4 pt-2">
                                    {[
                                        "A document that sets out how a particular area can develop and redevelop into the future.",
                                        "A high level plan intended to set out objectives and strategies to manage development and change over time.",
                                        "A process that defines what is important about a place and how its character and quality can be conserved, improved and enhanced."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={14} /></div>
                                            <span className="text-sm font-bold text-slate-600 leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {processSteps.slice(0, 4).map((step, i) => (
                            <div key={i} className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <step.icon size={80} />
                                </div>
                                <step.icon className="text-blue-400 mb-4" size={24} />
                                <h4 className="font-display font-black text-sm uppercase tracking-tight mb-2">{step.title}</h4>
                                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02]"><Building size={240} /></div>
                    <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-8">Who prepares a master plan?</h3>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-blue-600 font-black text-xs uppercase tracking-widest">Authority Control</h4>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                In India, <strong>State Development Authorities</strong> prepare master plan. These plans are periodically reviewed to ensure they remain updated with modern urban shifts.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-blue-600 font-black text-xs uppercase tracking-widest">Community Engagement</h4>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                Community and industry are involved throughout to ensure local issues and community values are considered.
                            </p>
                        </div>
                        <div className="space-y-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                             {/* Fix for AlertTriangle usage */}
                            <h4 className="text-red-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                                <AlertTriangle size={14} /> Disclaimer Notice
                            </h4>
                            <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">
                                Community views can sometimes be conflicting. Not all interests can be accommodated, especially if they contradict broader policy outcomes or deal with non-masterplan issues like maintenance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-3">
                        <div className="w-12 h-1.5 bg-blue-600 rounded-full"></div>
                        <h3 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Access Regional Blueprints</h3>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Search and download official Master Plan PDF documents</p>
                    </div>
                    <div className="w-full md:w-96 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input 
                            type="text" 
                            placeholder="Find a city..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border-2 border-slate-100 rounded-full py-5 pl-14 pr-6 text-sm font-bold shadow-sm outline-none focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5 transition-all"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCities.map(city => (
                        <div key={city} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700">
                                <Map size={100} />
                            </div>
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mb-8 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><Navigation size={28} /></div>
                            <div className="space-y-1 mb-8">
                                <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">Master Plan</h3>
                                <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">{city}</p>
                            </div>
                            <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 group/btn">
                                <ArrowDownToLine size={16} className="group-hover/btn:animate-bounce" /> Download PDF
                            </button>
                        </div>
                    ))}

                    {filteredCities.length === 0 && (
                        <div className="col-span-full py-32 text-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200 mb-6">
                                <Search size={32} />
                            </div>
                            <h4 className="text-xl font-display font-black text-slate-950 uppercase">No Matrix Matches</h4>
                            <button onClick={() => { setSearchQuery(''); }} className="mt-6 px-8 py-2.5 bg-slate-950 text-white rounded-lg font-black text-[9px] uppercase tracking-widest shadow-xl">Clear Matrix</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-32 text-center space-y-8 opacity-40">
                 <div className="w-16 h-1 w-24 bg-blue-100 mx-auto"></div>
                 <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.4em]">Hunt Property Urban Development Division</p>
                 <div className="flex justify-center gap-10">
                     <Map size={24} />
                     <Building size={24} />
                     <Globe size={24} />
                 </div>
            </div>
        </div>
    );
};

// 4. Media Gallery View
export const MediaGalleryView = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    
    const media = [
        { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070", title: "Yeida to raise funds for projects", publisher: "HT Live", date: "Oct 25, 2020", page: "20", category: "NATIONAL" },
        { src: "https://images.unsplash.com/photo-1585829365234-752ff94602f2?q=80&w=2070", title: "Har 20 minute mein bullet train", publisher: "Noida Times", date: "Oct 22, 2020", page: "19", category: "LOCAL" },
        { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070", title: "Yeida mein bina zameen kharide", publisher: "Noida Times", date: "Oct 21, 2020", page: "18", category: "LOCAL" },
        { src: "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?q=80&w=2070", title: "Metro line connecting Jewar", publisher: "Hindustan times", date: "Oct 21, 2020", page: "21", category: "NATIONAL" },
        { src: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2073", title: "Infrastructure Report V.22", publisher: "Noida Times", date: "Oct 21, 2020", page: "22", category: "LOCAL" },
        { src: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070", title: "69 FIRMS TO SET UP PLANTS", publisher: "NAMO", date: "Oct 21, 2020", page: "24", category: "BUSINESS" },
        { src: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2070", title: "Plots and Spatial Expansion", publisher: "Jewar", date: "Oct 21, 2020", page: "25", category: "GOVERNMENT" },
        { src: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2066", title: "Industrial Premises Growth", publisher: "Jewar", date: "Oct 21, 2020", page: "26", category: "GOVERNMENT" }
    ];

    const categories = ['ALL', 'NATIONAL', 'LOCAL', 'BUSINESS', 'GOVERNMENT'];
    const filteredMedia = activeCategory === 'ALL' ? media : media.filter(m => m.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32">
            <Header 
                title="Media Gallery" 
                subtitle="Press Archives & Public Recognition Hub" 
                icon={Newspaper} 
                themeColor="text-indigo-600" 
                bgColor="bg-indigo-50" 
            />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                 <div className="bg-slate-950 rounded-full p-2 flex flex-wrap justify-center md:justify-start gap-2 shadow-2xl border border-white/10">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeCategory === cat ? 'bg-primary text-slate-950 shadow-lg scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {cat}
                        </button>
                    ))}
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredMedia.map((item, idx) => (
                        <div key={idx} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                                <img 
                                    src={item.src} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    alt={item.title} 
                                />
                                <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-md text-primary rounded-lg text-[7px] font-black uppercase tracking-[0.2em] border border-white/10">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 space-y-5 flex flex-col flex-1">
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-red-600 font-black text-[9px] uppercase tracking-[0.15em] leading-none">
                                            {item.publisher}
                                        </span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-red-600 transition-colors" />
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 text-sm leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                                
                                <div className="flex items-center gap-6 py-4 border-t border-slate-50">
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <Calendar size={10} className="shrink-0" />
                                        <span className="text-[8px] font-black uppercase tracking-widest">{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <FileText size={10} className="shrink-0" />
                                        <span className="text-[8px] font-black uppercase tracking-widest">P.{item.page}</span>
                                    </div>
                                </div>

                                <button className="flex items-center justify-between group/action text-slate-900 hover:text-red-600 transition-colors">
                                    <span className="text-[9px] font-black uppercase tracking-widest">Examine Clipping</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover/action:bg-slate-950 group-hover/action:text-primary group-hover/action:translate-x-1 transition-all shadow-sm">
                                        <ArrowRight size={14} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-32">
                <div className="bg-slate-950 rounded-[4rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="space-y-4 text-center md:text-left relative z-10">
                         <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter leading-none">
                            Our <span className="text-primary">Impact</span> Recognized
                         </h3>
                         <p className="text-slate-400 max-w-lg text-lg font-medium">
                            Tracking the global footprint of Hunt Property through premier editorial coverage and regional archives.
                         </p>
                    </div>
                    <button className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-xl active:scale-95 flex items-center gap-4 relative z-10 group">
                        Inquire for Press <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// 5. News Gallery View
export const NewsGalleryView = () => {
    const newsData = [
        {
            title: "The Chintels Paradiso Crisis: A Turning Point in Real Estate Safety",
            date: "February 21, 2025",
            image: "https://images.unsplash.com/photo-1590333746433-93666f27f07e?q=80&w=2070",
            desc: "Gurugram's Chintels Paradiso: A Case for Safer Construction Practices. The Chintels Paradiso residential complex in Gurugram has become a significant focus after structural audits declared all nine towers unsafe for habitation."
        },
        {
            title: "Tamil Nadu's Real Estate: Driving India’s $2.5 Trillion Economic Vision",
            date: "January 12, 2025",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070",
            desc: "Tamil Nadu, a trailblazer in India’s economic landscape, is shaping the country’s future. Contributing 8.8% to India’s GDP, it is a powerhouse for the next economic vision."
        },
        {
            title: "Great Days Ahead for Indian Real Estate: Foreign Investments on the Rise",
            date: "January 12, 2025",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
            desc: "The Indian real estate sector is seeing promising growth. Institutional investments in Q3 2024 witnessed an impressive 41% annual growth, reaching $0.96 billion."
        },
        {
            title: "Noida Seals Four Major Housing Projects Due to Violation of Building By-Laws",
            date: "January 12, 2025",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
            desc: "The Noida Authority has taken decisive action against four major housing projects for violating building by-laws, sealing properties for ongoing construction after permits expired."
        },
        {
            title: "Unlocking Real Estate Potential: The Rise of Dwarka Expressway in NCR",
            date: "January 11, 2025",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
            desc: "Dwarka Expressway is rapidly evolving into a prime real estate corridor in NCR. Spanning 29 kilometers, this eight-lane expressway connects Dwarka to Gurugram."
        },
        {
            title: "HSBC Insights: Real Estate Sector Poised for Growth; Recommends Key Players",
            date: "January 11, 2025",
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=2070",
            desc: "Tejasvi Kapoor emphasizes growing confidence in India's real estate sector, supported by recent HSBC reports reinforcing the sector's long-term potential."
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header 
                title="News" 
                subtitle="Real-time Sector Intelligence & Global Market Updates" 
                icon={Newspaper} 
                themeColor="text-emerald-600" 
                bgColor="bg-emerald-50" 
            />

            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] -mr-32 -mt-32"></div>
                    <div className="lg:w-1/2 relative z-10 space-y-8">
                         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-primary text-[10px] font-black uppercase tracking-widest border border-white/10">
                            <BookOpenCheck size={14} /> Educating Investors
                         </div>
                         <h2 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase tracking-tight">Our <span className="text-emerald-500 italic">Philosophy</span></h2>
                         <div className="space-y-6 text-slate-300 text-lg font-medium leading-relaxed">
                            <p>
                                At Hunt Property we put our clients first and foremost. While our team is capable of executing any task, we believe educating our clients about the industry is paramount.
                            </p>
                            <p className="text-slate-400 text-base">
                                We have created this platform so you remain informed. There is a fine line between leadership and bullying; we want you to recognize who is clearly a leader in this vertical through day-to-day happenings.
                            </p>
                         </div>
                    </div>
                    <div className="lg:w-1/2 relative z-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-48 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070" className="w-full h-full object-cover" alt="news1" />
                                </div>
                                <div className="h-64 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070" className="w-full h-full object-cover" alt="news2" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-64 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2070" className="w-full h-full object-cover" alt="news3" />
                                </div>
                                <div className="h-48 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070" className="w-full h-full object-cover" alt="news4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                    <div>
                        <h3 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">News</h3>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-1">Daily updates from the core of the market</p>
                    </div>
                    <button className="flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-slate-900 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                        Archive Access <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news, i) => (
                        <div key={i} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full relative">
                            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                                    <Calendar size={12} /> {news.date}
                                </p>
                            </div>
                            <div className="h-64 overflow-hidden relative bg-slate-100">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h4 className="text-xl font-display font-black text-slate-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{news.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-4 italic">{news.desc}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-[10px] font-black text-slate-950 uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Full Analysis <ChevronRight size={14} className="text-emerald-600" />
                                    </button>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-100 group-hover:bg-emerald-600 transition-colors"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 6. Video Gallery View
export const VideoGalleryView = () => {
    const [playingId, setPlayingId] = useState(null);

    const videos = [
        { 
            id: "vid_1",
            youtubeId: "dQw4w9WgXcQ", 
            title: "How to Sell Houses Like a Champion in 2025", 
            category: "MASTERCLASS", 
            duration: "10:42", 
            views: "1.2M",
            date: "Feb 12, 2025", 
            thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073" 
        },
        { 
            id: "vid_2",
            youtubeId: "dQw4w9WgXcQ",
            title: "5 Biggest Home Buying Mistakes for Investors", 
            category: "ADVICE", 
            duration: "15:20", 
            views: "850K",
            date: "Jan 28, 2025", 
            thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" 
        },
        { 
            id: "vid_3",
            youtubeId: "dQw4w9WgXcQ",
            title: "The Future of Smart Cities: Noida 2031 Vision", 
            category: "URBANISM", 
            duration: "08:15", 
            views: "2.4M",
            date: "Jan 15, 2025", 
            thumbnail: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070" 
        },
        { 
            id: "vid_4",
            youtubeId: "dQw4w9WgXcQ",
            title: "Interior Design Trends: Minimalist Luxury Spaces", 
            category: "DESIGN", 
            duration: "12:30", 
            views: "420K",
            date: "Dec 10, 2024", 
            thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32">
            <Header 
                title="Hunt TV" 
                subtitle="High-Fidelity Real Estate Intelligence Network" 
                icon={Youtube} 
                themeColor="text-red-600" 
                bgColor="bg-red-50" 
            />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {videos.map((vid, idx) => (
                    <div key={vid.id} className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="relative aspect-video overflow-hidden bg-slate-900 rounded-t-[2rem]">
                            {playingId === vid.id ? (
                                <iframe 
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${vid.youtubeId}?autoplay=1`}
                                    title={vid.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <>
                                    <img 
                                        src={vid.thumbnail} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000" 
                                        alt={vid.title} 
                                    />
                                    <button 
                                        onClick={() => setPlayingId(vid.id)}
                                        className="absolute inset-0 flex items-center justify-center group/play"
                                    >
                                        <div className="w-16 h-12 rounded-2xl bg-red-600/90 backdrop-blur-md flex items-center justify-center text-white group-hover/play:scale-110 transition-all shadow-2xl">
                                            <Play size={24} className="fill-current" />
                                        </div>
                                    </button>
                                    <div className="absolute bottom-3 right-3">
                                        <div className="px-2 py-0.5 bg-slate-950/90 backdrop-blur-md text-white rounded text-[10px] font-black tracking-tight">
                                            {vid.duration}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="p-5 space-y-4 flex flex-col flex-1">
                            <div className="space-y-1.5 flex-1">
                                <span className="text-red-600 font-black text-[9px] uppercase tracking-[0.2em] leading-none">
                                    {vid.category}
                                </span>
                                <h3 
                                    className="font-display font-bold text-slate-900 text-sm leading-tight group-hover:text-red-600 transition-colors line-clamp-2 cursor-pointer"
                                    onClick={() => setPlayingId(vid.id)}
                                >
                                    {vid.title}
                                </h3>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{vid.views} Views</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{vid.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 7. Articles View
export const ArticlesView = () => {
    const articles = [
        {
            title: "Navigating the 2025 Tier-1 Real Estate Market",
            date: "Oct 24, 2025",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
            desc: "Detailed analysis of price appreciation across major metropolitan nodes including Noida and Bengaluru."
        },
        {
            title: "Infrastructure Evolution: The Airport Influence",
            date: "Oct 20, 2025",
            image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070",
            desc: "How the Jewar International Airport is fundamentally altering the investment landscape of Northern India."
        },
        {
            title: "Green Protocols: Sustainable Living in 2025",
            date: "Oct 15, 2025",
            image: "https://images.unsplash.com/photo-1518005020480-47b2c943806f?q=80&w=2070",
            desc: "An overview of new environmental compliance standards for residential townships and luxury villas."
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header 
                title="Articles" 
                subtitle="Deep-Dive Insights & Strategic Market Counsel" 
                icon={BookOpen} 
                themeColor="text-red-600" 
                bgColor="bg-red-50" 
            />

            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] -mr-32 -mt-32"></div>
                    <div className="lg:w-1/2 relative z-10 space-y-8">
                         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-primary text-[10px] font-black uppercase tracking-widest border border-white/10">
                            <Sparkles size={14} /> Knowledge is Power
                         </div>
                         <h2 className="text-3xl md:text-5xl font-display font-black leading-tight uppercase tracking-tight italic">
                            “Little knowledge is a <span className="text-red-500">dangerous</span> thing”
                         </h2>
                         <p className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mt-[-1rem]">— Alexander Pope</p>
                         
                         <div className="space-y-6 text-slate-300 text-lg font-medium leading-relaxed">
                            <p>
                                Investing in Real Estate is a big decision and we want you to invest in the right property as plethora of choices makes it difficult to decide the location for investment. 
                            </p>
                            <p className="text-slate-400 text-base">
                                In order to ease your decision Hunt Property provides you articles on overview of various cities from infrastructure development to government policies. Our main objective is to make you aware about the developments in the city you want to invest and choose wisely from myriad of options.
                            </p>
                         </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((art, i) => (
                        <div key={i} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative">
                            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                                <p className="text-[10px] font-black text-red-600 uppercase tracking-widest flex items-center gap-2">
                                    <Calendar size={12} /> {art.date}
                                </p>
                            </div>
                            <div className="h-64 overflow-hidden relative bg-slate-100">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h4 className="text-xl font-display font-black text-[#7c1d1d] mb-6 leading-tight uppercase tracking-tight group-hover:text-red-600 transition-colors">
                                    {art.title}
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 flex-1 italic">
                                    "{art.desc}"
                                </p>
                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <button className="flex items-center gap-3 text-[11px] font-black text-slate-950 uppercase tracking-widest group-hover:gap-5 transition-all">
                                        Read Full Analysis <ArrowRight size={14} className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 8. NRI Center View
export const NRICenterView = () => {
    const [activeTab, setActiveTab] = useState<'section' | 'query'>('section');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqQuestions = [
        "Do NRI pay property tax in India?",
        "Can NRI buy property in India without Aadhar card?",
        "Can NRI transfer property in India?",
        "Do NRI pay TDS on property?",
        "How can NRI sell property in India?",
        "PAN for NRI?",
        "Can OCI get Aadhar card?",
        "How do I transfer ownership of property in India?",
        "Rate of TDS under Section 195",
        "What is the TDS rate for NRI for sale of property?",
        "How much money can NRI repatriate?",
        "Can NRI get 80C benefits?",
        "Is PAN card different for NRI?",
        "Who is considered NRI in India?",
        "Can NRI maintain savings account in India?",
        "What is TDS limit?",
        "What will happens if NRI buy agricultural land in India?",
        "Does India support dual citizenship?",
        "How is NRI defined?",
        "Is OCI and NRI same?",
        "What is the difference between NRI and OCI?",
        "What is a NRI certificate?",
        "How a NRI can get the NRI Certificate?",
        "What is the use of NRI certificate?",
        "Can I transfer money from NRO to NRE?",
        "How long can you keep money in NRE?",
        "What is Section 195 under income tax?",
        "Is Section 194IA applicable to NRI?",
        "Is Tan required for purchase of property from NRI?",
        "How is NRI status calculated?",
        "Why NRI account is required?",
        "What and how much NRIs/PIOs are permitted to Repatriate from India?",
        "Special provisions for Foreign Nationals (other than PIO or citizen of Nepal/Bhutan)"
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32 overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-500/5 rounded-full blur-[180px] -mr-96 -mt-96 pointer-events-none"></div>
            
            <Header 
                title="NRI Center" 
                subtitle="Global Citizen Realty Solutions & Compliance Hub" 
                icon={Globe} 
                themeColor="text-red-700"
                bgColor="bg-red-50"
            />

            <div className="max-w-7xl mx-auto px-6 mb-24">
                {/* Clean Tab Navigation Hub */}
                <div className="flex justify-center mb-16">
                    <div className="bg-slate-900 p-2 rounded-[2rem] shadow-2xl flex gap-2 border border-white/10 backdrop-blur-xl">
                        <button 
                            onClick={() => setActiveTab('section')}
                            className={`px-10 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'section' ? 'bg-red-600 text-white shadow-xl scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            NRI Intelligence Hub
                        </button>
                        <button 
                            onClick={() => setActiveTab('query')}
                            className={`px-10 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'query' ? 'bg-red-600 text-white shadow-xl scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            Specialist Query Console
                        </button>
                    </div>
                </div>

                <div className="animate-fade-in-up">
                    {activeTab === 'section' ? (
                        <div className="space-y-16">
                            <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><Globe size={320} /></div>
                                <div className="max-w-4xl space-y-10 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Strategic Intelligence Node</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
                                        NRI Investments <br/> in <span className="text-red-700 italic">Indian Real Estate</span>
                                    </h2>
                                    <div className="prose prose-xl prose-slate text-slate-500 font-medium leading-relaxed border-l-4 border-red-50 pl-10 italic">
                                        "NRI investments in Indian Real Estate – It will give you glimpse of investment in the real estate sector which is one of the most popular investment avenue for non-resident Indians (NRIs)."
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced FAQ Interactive Module */}
                            <div className="space-y-12">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-8 px-6">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight">Intelligence Vault</h3>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Curated regulatory and fiscal clarifications</p>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                                        <Search size={16} className="text-slate-300" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{faqQuestions.length} Active Modules</span>
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-x-12 gap-y-4">
                                    {faqQuestions.map((q, idx) => (
                                        <div key={idx} className="border border-slate-50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-red-100 group bg-white shadow-lg shadow-slate-100/50">
                                            <button 
                                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                                className={`w-full flex items-center justify-between p-8 text-left transition-colors ${openFaq === idx ? 'bg-slate-950 text-white' : 'bg-white text-slate-900 hover:bg-slate-50'}`}
                                            >
                                                <div className="flex items-center gap-6">
                                                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-[10px] font-black transition-all ${openFaq === idx ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-white'}`}>{idx + 1}</span>
                                                    <span className="text-[11px] font-black uppercase tracking-tight leading-tight max-w-[85%]">{q}</span>
                                                </div>
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${openFaq === idx ? 'bg-red-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-white'}`}>
                                                    <ChevronDown size={20} />
                                                </div>
                                            </button>
                                            {openFaq === idx && (
                                                <div className="p-10 pt-0 bg-slate-950 text-slate-400 text-sm font-medium leading-relaxed animate-in slide-in-from-top duration-500">
                                                    <div className="h-px bg-white/10 mb-10"></div>
                                                    <div className="space-y-4 flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-1"><Info size={16} /></div>
                                                        <div className="space-y-4">
                                                            <p>Regulatory analysis for: <strong className="text-white">{q}</strong></p>
                                                            <p className="italic">Standard operating procedure: This module provides real-time verification of the specified NRI protocol within the Indian real estate legal framework.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
                                
                                <div className="text-center mb-20 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-100 text-[10px] font-black uppercase tracking-[0.4em]">
                                       Encryption Level: Active
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
                                        NRI <span className="text-red-600">Query Portal</span>
                                    </h2>
                                    <p className="text-slate-400 font-bold uppercase text-[11px] tracking-[0.5em]">Direct Transmission To Specialist Advisor</p>
                                </div>

                                <form className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                        {/* First Name */}
                                        <div className="space-y-3 group">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                                First Name <span className="text-red-600 font-black">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={22} />
                                                <input type="text" placeholder="GIVEN NAME" className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white shadow-inner transition-all" required />
                                            </div>
                                        </div>

                                        {/* Last Name */}
                                        <div className="space-y-3 group">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                                Last Name
                                            </label>
                                            <div className="relative">
                                                <Fingerprint className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={22} />
                                                <input type="text" placeholder="SURNAME" className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white shadow-inner transition-all" />
                                            </div>
                                        </div>

                                        {/* Email Address */}
                                        <div className="space-y-3 group">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                                Email Address <span className="text-red-600 font-black">*</span>
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={22} />
                                                <input type="email" placeholder="ACTIVE ENDPOINT" className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white shadow-inner transition-all" required />
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div className="space-y-3 group">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                                Phone Number <span className="text-red-600 font-black">*</span>
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={22} />
                                                <input type="tel" placeholder="+91" className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white shadow-inner transition-all" required />
                                            </div>
                                        </div>

                                        {/* State / Region */}
                                        <div className="space-y-3 group">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                                State / Region <span className="text-red-600 font-black">*</span>
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={22} />
                                                <input type="text" placeholder="SECTOR NODE" className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white shadow-inner transition-all" required />
                                            </div>
                                        </div>

                                        {/* Country */}
                                        <div className="space-y-3 group">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                                Country <span className="text-red-600 font-black">*</span>
                                            </label>
                                            <div className="relative">
                                                <Globe2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={22} />
                                                <input type="text" placeholder="GLOBAL ORIGIN" className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white shadow-inner transition-all" required />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Query with specific style */}
                                    <div className="space-y-4 group">
                                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 px-2 transition-colors group-focus-within:text-red-600">
                                            Message / Detailed Query <span className="text-red-600 font-black">*</span>
                                        </label>
                                        <div className="relative">
                                            <textarea placeholder="DESCRIBE YOUR SCENARIO IN DEPTH..." className="w-full h-64 bg-white border-2 border-red-600/40 rounded-[3rem] p-10 pt-12 text-sm font-bold text-slate-900 outline-none focus:border-red-600 shadow-[0_20px_50px_rgba(220,38,38,0.05)] transition-all resize-none" required></textarea>
                                            <div className="absolute top-10 left-10 w-0.5 h-7 bg-red-600 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Footer Action Node */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12">
                                        <div className="flex items-center gap-5 text-slate-400">
                                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-inner border border-emerald-100">
                                                <ShieldAlert size={28} />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[11px] font-black uppercase tracking-widest leading-none text-slate-900">Encrypted Transmission</p>
                                                <p className="text-[9px] font-bold uppercase tracking-tighter">Verified 256-bit Secure Protocol Tunnel.</p>
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full md:w-auto px-24 py-8 bg-red-600 text-white rounded-[3rem] font-black text-sm uppercase tracking-[0.4em] hover:bg-red-700 hover:-translate-y-2 transition-all shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-6 group/btn">
                                            Transmit Requirement <Send size={22} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Futuristic Global Meta Strip */}
            <div className="max-w-5xl mx-auto px-6 mt-32 text-center space-y-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-1000">
                 <div className="w-48 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                 <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.8em] max-w-2xl mx-auto leading-relaxed">
                    Global NRI Assurance Hub • Hunt Property Strategic Advisory Division • Vers. 2025.04
                 </p>
                 <div className="flex justify-center gap-20">
                     <Globe size={32} strokeWidth={1} />
                     <Scale size={32} strokeWidth={1} />
                     <Fingerprint size={32} strokeWidth={1} />
                     <History size={32} strokeWidth={1} />
                 </div>
            </div>
        </div>
    );
};

// 9. Covid View Redesigned strictly following PDF content
export const CovidView = () => {
    const [activeSectionId, setActiveSectionId] = useState<string>('overview');

    const sections = [
        {
            id: 'overview',
            title: 'What is COVID?',
            icon: Biohazard,
            content: (
                <div className="space-y-10 animate-fade-in-up">
                    <div className="space-y-6">
                        <p className="text-slate-700 text-lg font-medium leading-relaxed">
                            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.
                        </p>
                    </div>
                    
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-inner">
                        <h4 className="text-slate-950 font-display font-black uppercase tracking-tight mb-8 flex items-center gap-3 text-2xl">
                            <Thermometer className="text-red-600" size={28} /> Symptoms of Covid
                        </h4>
                        
                        <div className="space-y-10">
                            <div>
                                <h5 className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 border-b border-blue-100 pb-2">Most common symptoms:</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {['Fever', 'Dry cough', 'Tiredness'].map(s => (
                                        <div key={s} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="text-sm font-bold text-slate-700">{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h5 className="text-slate-500 font-black text-xs uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Most common symptoms:</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        'Aches and pains', 'Sore throat', 'Diarrhoea', 
                                        'Conjunctivitis', 'Headache', 'Loss of taste or smell',
                                        'A rash on skin, or discolouration of fingers or toes'
                                    ].map(s => (
                                        <div key={s} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                            <span className="text-xs font-bold text-slate-600">{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h5 className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 border-b border-red-100 pb-2">Serious symptoms:</h5>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        'Difficulty breathing or shortness of breath',
                                        'Chest pain or pressure',
                                        'Loss of speech or movement'
                                    ].map(s => (
                                        <div key={s} className="flex items-center gap-4 bg-red-50 p-5 rounded-2xl border border-red-100">
                                            <AlertCircle size={18} className="text-red-600 shrink-0" />
                                            <span className="text-sm font-black text-red-900 uppercase tracking-tight italic">{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'spread',
            title: 'How It Spreads',
            icon: RefreshCw,
            content: (
                <div className="space-y-10 animate-fade-in-up">
                    <div className="relative h-64 rounded-[3.5rem] overflow-hidden group border border-slate-200">
                        <img src="https://images.unsplash.com/photo-1584113702303-3a51e8a58e3b?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" alt="Viral spread visualization" />
                        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-12 text-center">
                            <p className="text-white text-lg font-medium leading-relaxed italic">
                                "The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales."
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl space-y-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner"><Waves size={24} /></div>
                            <h4 className="text-xl font-display font-black uppercase text-slate-900">Droplet Protocol</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                            </p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl space-y-4">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner"><Hand size={24} /></div>
                            <h4 className="text-xl font-display font-black uppercase text-slate-900">Infection Vectors</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'family-safety',
            title: 'Family Safety Impact',
            icon: Users,
            content: (
                <div className="space-y-10 animate-fade-in-up">
                    <h3 className="text-3xl font-display font-black text-slate-900 uppercase">How to keep you and your family safe from its impact?</h3>
                    <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 shadow-inner space-y-6">
                        <p className="text-slate-600 text-xl font-medium leading-relaxed italic border-l-4 border-blue-200 pl-8">
                            "With the increasing number of COVID-19 cases around the world, the more desperate governments are working towards bringing out a cure. As the search for a vaccine continues, simple home remedies such as practising hygiene, staying indoors and avoiding crowded places can help you and your family stay safe."
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['Practising Hygiene', 'Staying Indoors', 'Avoiding Crowded Places'].map(item => (
                            <div key={item} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={20} /></div>
                                <span className="text-xs font-black uppercase text-slate-700 tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'preventive',
            title: 'Preventive Measures',
            icon: ShieldPlus,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-display font-black text-slate-900 uppercase">Basic Preventive Measures</h3>
                        <p className="text-slate-500 text-sm italic font-medium">These preventive tips can be used in numerous ways to prevent the spread of the virus. These preventive tips include:</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { label: 'Regularly washing hands with alcohol-based sanitizers and soap.', icon: Droplet },
                            { label: 'Cover mouth and nose with elbow or tissues when coughing or sneezing.', icon: ShieldAlert },
                            { label: 'Avoid close contact with anyone with flu, cough and cold symptoms.', icon: LogOut },
                            { label: 'Regularly clean phones, light switches, taps and doorknobs with disinfectants.', icon: Smartphone },
                            { label: 'Consult a doctor if you have fever, cough and difficulty breathing.', icon: Stethoscope }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all group">
                                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all"><item.icon size={22} strokeWidth={1.5} /></div>
                                <p className="text-sm font-bold text-slate-600 leading-relaxed pt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-950 p-10 rounded-[3rem] text-white space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                        <h4 className="text-xl font-display font-black uppercase text-primary tracking-widest flex items-center gap-3">
                            <Sparkles size={24} /> Advanced Preventive Measures
                        </h4>
                        <p className="text-slate-300 text-lg leading-relaxed font-medium italic border-l-2 border-primary/20 pl-8">
                            "These measures will actually help you and understand how exactly certain actions need to be done the right way. This includes how to wash hands, what to do if my child shows symptoms of COVID-19 and what precautions to take while travelling together. Here’s what you need to know."
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'hand-washing',
            title: 'Wash Hands (20s)',
            icon: Hand,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="flex flex-col md:flex-row items-center gap-12 border-b border-slate-100 pb-12">
                        <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center shrink-0 shadow-inner border border-blue-100">
                            <Hand size={80} className="text-blue-600 animate-pulse" />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl font-display font-black text-slate-900 uppercase leading-none">Wash Hands For <span className="text-blue-600">20 Seconds</span></h3>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
                                "Why do you have to wash your hands for 20 seconds? Well, the answer is simple. Say goodbye to germs that can cause infections and viruses. Medically speaking, what’s the best way to wash your hands? Here’s how you do it."
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Step 1', desc: 'Wet your hands with water.' },
                            { step: '2', title: 'Step 2', desc: 'Apply soap or hand wash on your palm.' },
                            { step: '3', title: 'Step 3', desc: 'Scrub your hands. (Back, in between fingers and under your nails for 20 secs)' },
                            { step: '4', title: 'Step 4', desc: 'Rinse with water.' }
                        ].map(item => (
                            <div key={item.step} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="text-6xl font-display font-black text-slate-50 absolute -right-2 -top-2 group-hover:text-blue-50 transition-colors">{item.step}</div>
                                <h4 className="text-lg font-black text-slate-900 uppercase mb-3 relative z-10">{item.title}</h4>
                                <p className="text-slate-500 text-xs font-bold leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 ml-2">When to wash your hands?</h4>
                        <div className="grid sm:grid-cols-3 gap-6">
                             {[
                                 { label: 'Before eating', icon: Coffee },
                                 { label: 'After sneezing, blowing & your nose', icon: Wind },
                                 { label: 'After using the bathroom', icon: Droplet }
                             ].map(item => (
                                 <div key={item.label} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><item.icon size={20} /></div>
                                     <span className="text-[11px] font-black uppercase text-slate-700">{item.label}</span>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'masks-indoor',
            title: 'Masks & Indoor Policy',
            icon: Shield,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-100 space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform"><Shield size={160} /></div>
                            <h4 className="text-2xl font-display font-black uppercase text-slate-900 tracking-tight">Wear A Medical Mask?</h4>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                "Why do you have to wear a face mask during the COVID outbreak? If you have any respiratory problems such as coughing or sneezing, then it is recommended that you wear a mask to prevent the spread of infection. This comes handy in protecting you from any infection or from spreading it."
                            </p>
                        </div>
                        <div className="bg-slate-950 p-10 rounded-[3.5rem] shadow-2xl text-white space-y-6 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform"><Building size={160} /></div>
                             <h4 className="text-2xl font-display font-black uppercase text-primary tracking-tight">Stay Indoors</h4>
                             <p className="text-slate-300 text-lg font-medium leading-relaxed">
                                "This is the simplest way to prevent COVID from spreading. All you need to do is stay inside your homes, practice hygiene and stay away from social gatherings. Quarantine can get interesting if you keep yourself busy. It’s the best time to concentrate on yourself and learn new things such as cooking, gardening, playing a new musical instrument etc. Simple, do what you love doing."
                             </p>
                        </div>
                    </div>

                    <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl space-y-8">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/10"><Users size={28} /></div>
                            <h4 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight">What If My Child / Family Member Is Affected?</h4>
                        </div>
                        <div className="prose prose-slate max-w-none space-y-6">
                            <p className="text-slate-600 text-xl font-medium leading-relaxed italic border-l-4 border-red-200 pl-8">
                                "Firstly, how do you know that the person is affected by COVID-19? Well, if the person shows signs of cough, cold, shortness of breath and fever, it is advised that you seek immediate medical help by rushing him/her to the nearest hospital. It is recommended that you continue to practice good hygiene and social distancing ways to fight the virus."
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'travel-positive',
            title: 'Travel & Positive Protocol',
            icon: Globe,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 border-dashed space-y-6">
                        <h4 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight flex items-center gap-3">
                            <Navigation size={24} className="text-blue-600" /> What Precautions one should take while Travelling?
                        </h4>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed border-l-4 border-blue-400 pl-8">
                            "During this pandemic it may not be a good idea. You must stay at home to keep you and your love one safe and it will definitely help you in fighting against Covid due to hinderance in its spreading. Remember, social distancing and wearing mask plays an effective role in curbing COVID-19. Stay indoors, stay safe."
                        </p>
                    </div>

                    <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl overflow-hidden">
                        <div className="bg-red-600 p-8 flex items-center gap-5 text-white">
                             <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg"><Activity size={28} /></div>
                             <h4 className="text-2xl font-display font-black uppercase tracking-tight">What to do if you are Corona Positive?</h4>
                        </div>
                        <div className="p-10 space-y-8">
                             <div className="space-y-4">
                                 <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-l-2 border-red-600 pl-4">Audience Guidance</h5>
                                 <p className="text-sm font-bold text-slate-700 leading-relaxed italic">This advice is intended for:</p>
                                 <ul className="grid md:grid-cols-2 gap-4">
                                     <li className="flex items-start gap-3 text-sm text-slate-500"><div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></div> People with confirmed coronavirus disease, i.e. those with a positive laboratory test result – who have been asked to isolate at home</li>
                                     <li className="flex items-start gap-3 text-sm text-slate-500"><div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></div> Those living in households with someone who has confirmed coronavirus disease</li>
                                 </ul>
                             </div>
                             
                             <div className="grid md:grid-cols-2 gap-10 border-t border-slate-100 pt-10">
                                 <div className="space-y-4">
                                     <h5 className="text-[10px] font-black text-red-600 uppercase tracking-widest">Medical Trajectory</h5>
                                     <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                         Most people who get sick with coronavirus disease will have only a mild illness and should recover at home. You may continue to experience the typical symptoms which include a fever, cough and mild shortness of breath. Most people with mild illness will start feeling better within a week of first symptoms. Have your healthcare provider’s contact information on hand for emergencies – this could be your GP or your nearest local clinic/ hospital.
                                     </p>
                                 </div>
                                 <div className="space-y-4">
                                     <h5 className="text-[10px] font-black text-red-600 uppercase tracking-widest">Hydration & Support</h5>
                                     <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                         Get rest at home and drink enough water/ clear fluids during the day to make sure that your urine stays a pale clear colour. There are no specific antiviral treatments recommended for coronavirus disease. You can take over-the-counter medications if you have fever or pain. Use these according to the instructions on the packet or label and do not exceed the recommended dose. You should continue taking any other prescribed chronic medication.
                                     </p>
                                 </div>
                             </div>

                             <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white space-y-6">
                                 <h5 className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 animate-pulse"><AlertTriangle size={14}/> Emergency Warning Signs</h5>
                                 <p className="text-sm text-slate-400 leading-relaxed">
                                     Monitor your symptoms carefully. If your symptoms get worse, call your healthcare provider immediately. If you develop any emergency warning signs, get medical attention immediately. Emergency warning signs include:
                                 </p>
                                 <div className="flex flex-wrap gap-3">
                                     {['Trouble breathing', 'Chest pain or pressure', 'Coughing up blood', 'Confused', 'Severe sleepiness', 'Blue lips or face'].map(sign => (
                                         <span key={sign} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-tight text-white">{sign}</span>
                                     ))}
                                 </div>
                                 <p className="text-xs font-bold text-red-400 italic">
                                     If you have any warning signs, you or a member of your household should call your nearest hospital or emergency services immediately and notify them that you have confirmed coronavirus disease.
                                 </p>
                             </div>

                             <div className="flex items-start gap-4 bg-red-50 p-6 rounded-2xl border border-red-100">
                                 <InfoIcon size={20} className="text-red-600 shrink-0 mt-0.5" />
                                 <p className="text-xs font-black text-red-800 uppercase tracking-tight">Avoid taking public transport to the facility – either use private transport (preferably with windows rolled-down) or call emergency services for an ambulance if required. You should wear a face mask if you travel to seek hospital care.</p>
                             </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'corporate-shield',
            title: 'Hunt Property Measurements',
            icon: Building,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">Hunt Property Framework</h3>
                        <p className="text-slate-500 text-sm italic font-medium">What Measurements taken by Hunt Property to protect its Employees and Clients from COVID?</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            'Regular sensitisation of the premises.',
                            'Regular use of sanitizer.',
                            'Uninterrupted use of Mask while working or dealing with clients.',
                            'Keeping essential or 6Ft distance while dealing with client or in meeting or site visit with client.',
                            'Anti-Virus fogging inside the premises.',
                            'Pest Control in the premises.',
                            'Keeping wash rooms clean regularity to avoid any kind of infection.',
                            'Facilitating the employees to work from home.',
                            'Regular use of steamer to get the steam for employees in order to avoid the spreading of this virus.'
                        ].map((measure, i) => (
                            <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-lg hover:border-emerald-200 transition-all group">
                                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all"><CheckCircle2 size={18} /></div>
                                <span className="text-xs font-black uppercase text-slate-700 tracking-tight">{measure}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Final Join Efforts Node */}
                    <div className="bg-blue-600 p-12 rounded-[3.5rem] text-white text-center space-y-8 shadow-2xl relative overflow-hidden group/cta">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover/cta:scale-150 transition-transform duration-[3000ms]"></div>
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter leading-none">
                                Hunt Together • Fight Together
                            </h3>
                            <p className="text-blue-100 text-lg font-medium italic max-w-4xl mx-auto leading-relaxed">
                                "Use of Our joint efforts to fight against COVID could became the biggest reason for the elimination of COVID from India. So let’s be together - Fight together - Hunt COVID and Kill COVID"
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const currentSection = sections.find(s => s.id === activeSectionId) || sections[0];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32 overflow-hidden selection:bg-blue-600 selection:text-white font-sans">
            <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-blue-500/5 rounded-full blur-[180px] -mr-96 -mt-96 pointer-events-none"></div>
            
            <Header 
                title="Public Health Matrix" 
                subtitle="Biological Safeguard & Awareness Hub" 
                icon={HeartPulse} 
                themeColor="text-blue-700"
                bgColor="bg-blue-50"
            />

            <div className="max-w-7xl mx-auto px-6 mb-24 space-y-12">
                {/* Mandatory Intro Paragraph Section from PDF */}
                <div className="bg-slate-950 p-10 md:p-14 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden group border border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-[3000ms]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-primary border border-white/10 shadow-inner group-hover:bg-primary group-hover:text-slate-950 transition-all duration-700 shrink-0">
                            <Biohazard size={48} className="animate-pulse" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight leading-tight">
                                Intelligence for Public <span className="text-primary italic">Awareness</span>
                            </h2>
                            <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-4xl border-l-4 border-white/5 pl-8 italic">
                                "This section is dedicated for the public awareness during this pandemic to fight, hunt and eliminate the Covid 19 attack. :"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Frame Section Navigation: sidebar mirroring the original screenshot UI list */}
                    <div className="lg:col-span-4 space-y-3 sticky top-28">
                         <div className="bg-white rounded-[3rem] p-5 shadow-2xl border border-slate-100">
                             <div className="px-6 py-5 border-b border-slate-50 mb-4">
                                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Protocol Directory</h3>
                                 <h4 className="text-slate-900 font-display font-black uppercase text-xl">Covid Precaution</h4>
                             </div>
                             <div className="space-y-1.5">
                                 {sections.map(section => (
                                     <button 
                                         key={section.id}
                                         onClick={() => setActiveSectionId(section.id)}
                                         className={`w-full flex items-center justify-between p-5 rounded-[1.8rem] transition-all duration-500 group ${activeSectionId === section.id ? 'bg-slate-950 text-white shadow-2xl scale-[1.03] z-10' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
                                     >
                                         <div className="flex items-center gap-4">
                                             <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${activeSectionId === section.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-white shadow-sm'}`}>
                                                 <section.icon size={18} strokeWidth={2.5} />
                                             </div>
                                             <span className="text-[11px] font-black uppercase tracking-tight text-left leading-tight">{section.title}</span>
                                         </div>
                                         <ChevronRight size={14} className={`transition-transform duration-500 ${activeSectionId === section.id ? 'translate-x-1 text-primary' : 'text-slate-200'}`} />
                                     </button>
                                 ))}
                             </div>
                         </div>
                         
                         {/* Compliance Badge */}
                         <div className="bg-emerald-950/90 backdrop-blur-xl p-8 rounded-[3rem] shadow-xl text-white space-y-4 border border-emerald-500/20">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-primary" size={20} />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-400">Biological Node Security</span>
                            </div>
                            <h5 className="text-xl font-display font-black uppercase">Active Shield</h5>
                            <p className="text-[10px] text-emerald-100/60 font-bold leading-relaxed">
                                Protocols synchronized with global health grid directives. V.2025.04
                            </p>
                         </div>
                    </div>

                    {/* Content Detail Panel */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[4.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden min-h-[900px] flex flex-col relative group/panel">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover/panel:scale-110 transition-transform duration-[2000ms]"><currentSection.icon size={340} /></div>
                            
                            <div className="p-10 md:p-16 space-y-12 flex-1">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Intelligence Unit: {currentSection.id.toUpperCase()}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none">
                                        {currentSection.title}
                                    </h2>
                                </div>

                                <div className="relative z-10">
                                    {currentSection.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Meta Terminal Strip */}
            <div className="max-w-5xl mx-auto px-6 mt-32 text-center space-y-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-1000">
                 <div className="w-48 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
                 <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.8em] max-w-2xl mx-auto leading-relaxed">
                    Global Health Assurance Grid • Hunt Property Strategic Safety Division • Vers. 2025.04
                 </p>
                 <div className="flex justify-center gap-20">
                     <Stethoscope size={32} strokeWidth={1} />
                     <ShieldCheck size={32} strokeWidth={1} />
                     <Syringe size={32} strokeWidth={1} />
                     <Biohazard size={32} strokeWidth={1} />
                 </div>
            </div>
        </div>
    );
};

// 10. Career View
export const CareerView = () => {
    const jobs = [
        { title: "Real Estate Advisor", type: "Full Time", location: "Noida, India", icon: UserCircle },
        { title: "AI Research Engineer", type: "Remote", location: "Global", icon: Zap },
        { title: "Property Consultant", type: "Contract", location: "Mumbai, India", icon: Building },
        { title: "Partner Liaison", type: "Executive", location: "Delhi, India", icon: Handshake }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32 selection:bg-red-600 selection:text-white">
            <Header 
                title="Global Talent Network" 
                subtitle="Join Our Global Innovation Network" 
                icon={Briefcase} 
                themeColor="text-red-600" 
                bgColor="bg-red-50" 
            />
            <div className="max-w-7xl mx-auto px-6 space-y-16">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16 group">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] -mr-32 -mt-32"></div>
                    <div className="lg:w-1/2 relative z-10 space-y-8">
                         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-primary text-[10px] font-black uppercase tracking-widest border border-white/10">
                            <Sparkles size={14} /> Join the Evolution
                         </div>
                         <h2 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase tracking-tight">Work With <span className="text-red-500 italic">Us</span></h2>
                         <p className="text-slate-300 text-lg font-medium leading-relaxed italic border-l-4 border-white/10 pl-8">
                            "We are looking for ambitious individuals who believe in working transparently by giving right knowledge and unprompted services."
                         </p>
                         <button className="px-10 py-4 bg-primary text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
                             Connect With HR Node
                         </button>
                    </div>
                    <div className="lg:w-1/2 relative z-10">
                        <div className="h-[400px] rounded-[3.5rem] overflow-hidden border-4 border-white/5 bg-slate-800 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Team" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {jobs.map((job, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-[1.8rem] mb-8 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner border border-red-100">
                                    <job.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-display font-black text-slate-950 text-xl uppercase tracking-tight mb-4 leading-tight">{job.title}</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <Clock size={14} className="text-red-500" /> {job.type}
                                    </div>
                                    <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <MapPin size={14} className="text-red-500" /> {job.location}
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-red-600 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 group/btn">
                                Sync Manifest <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 11. Investors Relation View
export const InvestorsRelationView = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        company: '',
        industry: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const investorContent = [
        {
            title: "About Company",
            text: "Hunt Property operates with a vision to provide multi-dimensional realty solutions. Even after going through so many ups and downs and being questioned, this industry has only become more organized and disciplined.",
            // Fix: Building2 is now imported
            icon: Building2
        },
        {
            title: "We Welcome Investors",
            text: "Having a huge potential in this sector we love to welcome the investors who keep strong belief in this sector and love to invest in it. We believe in working transparently by giving committed returns and unprompted services.",
            icon: Users
        },
        {
            title: "RERA: The Backbone",
            text: "Introduction of RERA (Real Estate Regulatory Act) has played a vital role in the same. As we know many sectors depend on the real estate industry heavily which means that this industry is only supposed to evolve, expand and succeed.",
            icon: ShieldCheck
        },
        {
            title: "Our Team",
            text: "We are a team player and believe in working as a team. Our strength is our team. It is created by those people who are robust, self motivated, catalyst, enthusiastic and have zeal to make their career and achieve respected goals in the Real Estate industry.",
            icon: UserCheck
        },
        {
            title: "Advance Technology",
            text: "Use of advance technology lets us work more effectively, accurately and timely. It keeps the working flow uninterrupted and regular.",
            icon: Zap
        },
        {
            title: "Our Presence",
            text: "Right now we have a presence in Noida, U.P. North India (Very Closely connected with the capital of India - Delhi. and another one is in Amritsar (Punjab) India.",
            icon: Globe
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32 overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-500/5 rounded-full blur-[180px] -mr-96 -mt-96 pointer-events-none"></div>
            
            <Header 
                title="Investors Relation" 
                subtitle="Financial Stewardship & Growth Alliances" 
                icon={TrendingUp} 
                themeColor="text-slate-950"
                bgColor="bg-slate-100"
            />

            <div className="max-w-7xl mx-auto px-6 space-y-12">
                {/* Hero visual panel like the screenshot's chess theme but 2025 */}
                <div className="relative h-[400px] rounded-[4rem] overflow-hidden group shadow-2xl border border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1522071823914-469602df082a?q=80&w=2070&auto=format&fit=crop" 
                        alt="Strategy Meeting" 
                        className="w-full h-full object-cover grayscale transition-all duration-[3000ms] group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                           Strategic Alliances V.2025
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none">Dear <span className="text-primary italic">Investors</span></h2>
                        <p className="text-slate-200 text-lg max-w-2xl font-medium leading-relaxed italic border-l-4 border-primary/40 pl-8">
                            "We started from scratch to a respected level. We know the value of money. We know how it earns how to multiply. All these experiences make us care about our Investors and their investments."
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-6">
                            {investorContent.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                    <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-950 group-hover:text-primary transition-all">
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-display font-black uppercase tracking-tight text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed italic line-clamp-4 group-hover:line-clamp-none transition-all">
                                        "{item.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Location Strip from presence info */}
                        <div className="bg-slate-950 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="space-y-2 relative z-10">
                                <h4 className="text-xl font-display font-black uppercase tracking-widest">Global Linkage</h4>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Verified Nodes: Noida • New Delhi • Amritsar</p>
                            </div>
                            <div className="flex gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500">
                                    <Globe size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500">
                                    <Map size={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Query Console Column */}
                    <div className="lg:col-span-5 sticky top-28">
                         <div className="bg-white rounded-[3.5rem] shadow-2xl p-10 md:p-12 border border-slate-100 relative overflow-hidden group/form">
                             <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover/form:scale-110 transition-transform duration-[2000ms]"><Send size={240} /></div>
                             
                             {submitted ? (
                                 <div className="text-center py-20 animate-fade-in-up">
                                     <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                         <CheckCircle2 size={48} />
                                     </div>
                                     <h3 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Transmission Secured</h3>
                                     <p className="text-slate-500 mt-4 font-medium italic">"An associate will verify your investor status and reach back shortly."</p>
                                     <button onClick={() => setSubmitted(false)} className="mt-10 text-[10px] font-black uppercase tracking-widest text-red-600 hover:underline">Send Another Fragment</button>
                                 </div>
                             ) : (
                                 <>
                                    <div className="mb-10">
                                        <h3 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter">Query Console</h3>
                                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2">Direct Channel to Financial Stewardship</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="relative">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input name="name" required value={formData.name} onChange={handleChange} placeholder="FULL NAME" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                <input name="mobile" required value={formData.mobile} onChange={handleChange} placeholder="MOBILE INTERFACE" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                                            </div>
                                            <div className="relative">
                                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="EMAIL COORDS" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            {/* Fix: Building2 is now imported */}
                                            <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input name="company" value={formData.company} onChange={handleChange} placeholder="COMPANY ENTITY" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="relative">
                                            <ListFilter className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-10 text-[11px] font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner appearance-none">
                                                <option value="" disabled>SELECT INDUSTRY CLASS</option>
                                                <option>Individual Investor</option>
                                                <option>Venture Capital</option>
                                                <option>HNI Asset Management</option>
                                                <option>Institutional Fund</option>
                                                <option>Other Service</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                        </div>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="DETAILED FRAGMENT / REQUIREMENT..." className="w-full h-40 bg-slate-50 border-2 border-slate-100 rounded-3xl py-6 px-8 text-[11px] font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner resize-none" />
                                        
                                        <button 
                                            type="submit" 
                                            disabled={loading}
                                            className="w-full py-6 bg-red-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-4 group"
                                        >
                                            {/* Fix: Loader2 is now imported */}
                                            {loading ? <Loader2 className="animate-spin" size={18} /> : <>Transmit Fragment <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                                        </button>
                                        
                                        <p className="text-[8px] font-bold text-slate-300 text-center uppercase tracking-[0.5em] mt-6">End-to-End Cryptography Active</p>
                                    </form>
                                 </>
                             )}
                         </div>
                    </div>
                </div>
            </div>

            {/* Global Health Terminal Meta Strip */}
            <div className="max-w-5xl mx-auto px-6 mt-32 text-center space-y-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-1000">
                 <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent mx-auto"></div>
                 <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.8em] max-w-2xl mx-auto leading-relaxed">
                    Financial Integrity Grid • Hunt Property Institutional Relations Division • Vers. 2025.04
                 </p>
                 <div className="flex justify-center gap-20">
                     <TrendingUp size={32} strokeWidth={1} />
                     <ShieldCheck size={32} strokeWidth={1} />
                     <Landmark size={32} strokeWidth={1} />
                     <UserCheck size={32} strokeWidth={1} />
                 </div>
            </div>
        </div>
    );
};

// SVG Helpers
const ArrowUpRight = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

const Handshake = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 .5.5a1 1 0 1 0 3-3l-3.88-3.88a2.5 2.5 0 1 0-3.5 3.5l.38.38"></path><path d="m8 11-.5-.5a1 1 0 1 0-3 3l3.88 3.88a2.5 2.5 0 1 0 3.5-3.5l-.38-.38"></path><path d="m13 7-2-2a1 1 0 1 0-3 3"></path></svg>
);

const Mask = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M7 10c0 1 1.5 2 3 2s3-1 3-2"/><path d="M11 10c0 1 1.5 2 3 2s3-1 3-2"/><path d="M2 12c0 2 2 4 4 4"/><path d="M22 12c0 2-2 4-4 4"/></svg>
);