
import React, { useState } from 'react';
import { 
    ShieldCheck, Scale, Map, Newspaper, Play, 
    Globe, UserCheck, Briefcase, Download, ArrowRight, 
    Search, Filter, ChevronRight, CheckCircle2, AlertTriangle, 
    FileText, HelpCircle, Phone, Mail, Upload, Sparkles, Building, Landmark, TreePine, Navigation, Compass, Layout, Target, Tag, Calendar, UserCircle, Droplet, Layers,
    History, Fingerprint, Gavel, ShieldAlert, Zap, ArrowDownToLine, Info, BookOpen, HardDrive, FileSignature, FileKey, Shield,
    Eye, Users, ClipboardCheck, MessageSquarePlus, Quote, BookOpenCheck
} from 'lucide-react';

const Header = ({ title, subtitle, icon: Icon, themeColor = 'text-red-600', bgColor = 'bg-red-50' }) => (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-100 pb-12">
            <div className={`w-20 h-20 ${bgColor} ${themeColor} rounded-[2rem] flex items-center justify-center shadow-xl`}>
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

    const problemsBefore = [
        "Property builders advertised and sold properties based on ambiguous 'super built-up area'. A lot of homebuyers ended up spending more but actually deriving lesser benefits and useful space.",
        "Buyers had to pay a booking charge to block their investment in an apartment and later pay the total purchase consideration in one go or in instalments without even knowing that how and where their funds were being utilised.",
        "Buyers did not have a point of contact to check the progress of the project invested in.",
        "Buyers had no mechanism to know the credibility of the project and had to merely rely on the brand of the property developer or promises made by the property developer.",
        "There was no redressal mechanism for either delay in obtaining occupancy certificates/ possession or for the realisation of sub-standard development in the future."
    ];

    const objectives = [
        { title: "Financial Discipline", desc: "70% of project funds must stay in a dedicated escrow account for construction use only." },
        { title: "Transparency", desc: "Builders must quote prices based on carpet area, clearly defined to include usable spaces." },
        { title: "Accountability", desc: "Mandatory project registration for anything over 500 sq. meters or 8 apartments." },
        { title: "Judicial Redressal", desc: "Establishment of state-level Regulatory Authorities and Appellate Tribunals." },
        { title: "Agent Governance", desc: "Mandatory registration and unique ID for all real estate agents facilitating sales." }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header 
                title="Real Estate Regulatory Act" 
                subtitle="Intelligence Hub & Governance (RERA)" 
                icon={ShieldCheck} 
                themeColor="text-emerald-600"
                bgColor="bg-emerald-50"
            />
            
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-emerald-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Info size={160} /></div>
                            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-lg">?</span> 
                                Why do we need RERA?
                            </h2>
                            <div className="prose prose-slate max-w-none space-y-4">
                                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                                    RERA was established to bring transparency, accountability, and efficiency to the real estate sector. It acts as a shield for homebuyers against unfair practices and ensures that the developer-buyer relationship is balanced and legally governed.
                                </p>
                                <div className="h-px bg-slate-100 my-8"></div>
                                <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-6">Situations faced by buyers before RERA:</h4>
                                <div className="space-y-6">
                                    {problemsBefore.map((p, i) => (
                                        <div key={i} className="flex gap-5 group">
                                            <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-sm font-black text-xs">0{i+1}</div>
                                            <p className="text-slate-500 text-sm font-bold leading-relaxed group-hover:text-slate-900 transition-colors">{p}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                             <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <History className="text-primary" size={32} />
                                    <h2 className="text-2xl font-display font-black uppercase tracking-tight">The Legislative Journey</h2>
                                </div>
                                <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
                                    <p>
                                        The <span className="text-white font-bold">Real Estate Regulatory Authority (RERA) Bill</span> was introduced by the Indian National Congress government in <span className="text-primary font-bold">2013</span>. 
                                    </p>
                                    <p>
                                        In December 2015, the Union Cabinet of India approved <span className="text-white">20 major amendments</span> to the bill based on recommendations from a Rajya Sabha committee. The Bill had been referred to a select committee in July 2015. 
                                    </p>
                                    <p>
                                        The bill received historic approval from the <span className="text-white">Rajya Sabha on 10 March 2016</span> and by the <span className="text-white">Lok Sabha on 15 March 2016</span>, marking a new era for Indian real estate.
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[3rem] shadow-sm">
                            <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight mb-8">Core Objectives</h3>
                            <div className="space-y-4">
                                {objectives.map((obj, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-emerald-100 group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle2 size={16} className="text-emerald-600" />
                                            <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-widest">{obj.title}</h4>
                                        </div>
                                        <p className="text-slate-500 text-xs font-bold leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6"><Scale size={28} /></div>
                            <h4 className="font-display font-black text-slate-900 uppercase mb-2">Legal Verifier</h4>
                            <p className="text-slate-500 text-xs font-bold mb-6">Need help verifying a RERA registration number?</p>
                            <button className="w-full py-4 bg-slate-900 text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-400 hover:text-slate-900 transition-all shadow-lg shadow-emerald-400/10">Consult Expert</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredStates.map(state => (
                    <div key={state} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2 transition-all group flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                            <Building size={120} />
                        </div>
                        <div className="w-20 h-20 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-50 transition-all shadow-inner">
                            <Landmark size={32} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1 mb-8">
                            <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">RERA Document</h3>
                            <p className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em]">{state}</p>
                        </div>
                        <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 group/btn relative z-10 active:scale-95 shadow-lg">
                            <ArrowDownToLine size={16} className="group-hover/btn:animate-bounce" /> Download PDF
                        </button>
                    </div>
                ))}
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
            
            {/* 1. Objective & Capabilities */}
            <div className="max-w-7xl mx-auto px-6 mb-24 space-y-24">
                
                {/* Introduction Section */}
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

                {/* Covered Areas Grid */}
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

                {/* Common Forms Narrative */}
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

            {/* 2. Digital Vault - Document List */}
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

            {/* 3. Support Footer */}
            <div className="max-w-4xl mx-auto px-6 mt-32 text-center space-y-8">
                 <div className="w-16 h-1 w-24 bg-red-100 mx-auto"></div>
                 <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] max-w-lg mx-auto">
                    Although these forms are in their standard format but we suggest you to get it checked with your Legal Advisor.
                 </p>
                 <div className="flex justify-center gap-8 opacity-40 pt-10">
                     <Scale size={24} />
                     <ShieldCheck size={24} />
                     <Gavel size={24} />
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

            {/* 1. Intelligence Section */}
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

            {/* 2. Download Registry Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-3">
                        <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
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
                                <Search size={40} />
                            </div>
                            <h4 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight">City Registry Not Found</h4>
                            <p className="text-slate-400 font-bold text-sm">Please check the spelling or contact urban planning support.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Support Footer */}
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
    const media = [
        { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070", title: "Noida Times", date: "Oct 21, 2020", page: "18" },
        { src: "https://images.unsplash.com/photo-1585829365234-752ff94602f2?q=80&w=2070", title: "Hindustan Times", date: "Oct 21, 2020", page: "21" },
        { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070", title: "Times Group", date: "Oct 14, 2020", page: "28" },
        { src: "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?q=80&w=2070", title: "HT Live", date: "Oct 25, 2020", page: "20" }
    ];
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header title="Media Gallery" subtitle="Press Coverage Archives" icon={Newspaper} themeColor="text-indigo-600" bgColor="bg-indigo-50" />
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {media.map((item, idx) => (
                    <div key={idx} className="group bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
                        <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                            <img src={item.src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="News" />
                        </div>
                        <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">{item.title}</h3>
                        <p className="text-slate-400 font-black text-[10px] mt-1">{item.date}</p>
                    </div>
                ))}
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
                title="Industry News" 
                subtitle="Real-time Sector Intelligence & Global Market Updates" 
                icon={Newspaper} 
                themeColor="text-emerald-600" 
                bgColor="bg-emerald-50" 
            />

            {/* Philosophy Section */}
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

            {/* News Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                    <div>
                        <h3 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Latest <span className="text-emerald-600">Headlines</span></h3>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-1">Daily updates from the core of the market</p>
                    </div>
                    <button className="flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-slate-900 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                        Archive Access <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news, i) => (
                        <div key={i} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
                            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                                    <Calendar size={12} /> {news.date}
                                </p>
                            </div>
                            <div className="h-64 overflow-hidden relative">
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
    const videos = [
        { title: "HOW TO SELL HOUSES LIKE A CHAMP", time: "10:42", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073" },
        { title: "5 BIGGEST HOME BUYING MISTAKES", time: "15:20", thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" }
    ];
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header title="Video Gallery" subtitle="Expert Knowledge" icon={Play} themeColor="text-red-600" bgColor="bg-red-50" />
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {videos.map((vid, idx) => (
                    <div key={idx} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                        <div className="relative aspect-video">
                            <img src={vid.thumbnail} className="w-full h-full object-cover" alt="Video" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="w-20 h-20 bg-primary text-slate-900 rounded-full flex items-center justify-center shadow-xl"><Play size={32} /></div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">{vid.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 7. Articles View
export const ArticlesView = () => {
    return <NewsGalleryView />; 
};

// 8. NRI Center View
export const NRICenterView = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header title="NRI Center" subtitle="Global Citizen Realty Solutions" icon={Globe} themeColor="text-emerald-600" bgColor="bg-emerald-50" />
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                    <h2 className="text-4xl font-display font-black text-slate-900 uppercase tracking-tight mb-8">Invest in <span className="text-emerald-600">India</span></h2>
                    <p className="text-slate-600 font-medium">Non-Resident Indians (NRIs) are permitted to invest in India's booming real estate sector under specific FEMA guidelines.</p>
                </div>
            </div>
        </div>
    );
};

// 9. Covid View
export const CovidView = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header title="Health & Safety" subtitle="Protocols" icon={AlertTriangle} themeColor="text-amber-600" bgColor="bg-amber-50" />
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl mb-12">
                    <h2 className="text-4xl font-display font-black uppercase tracking-tight">Safety First</h2>
                    <p className="text-slate-400">Public awareness to fight the spread of variants.</p>
                </div>
            </div>
        </div>
    );
};

// 10. Career View
export const CareerView = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header title="Career" subtitle="Join Our Team" icon={Briefcase} themeColor="text-red-600" bgColor="bg-red-50" />
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
                    <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Join Our <span className="text-red-600">Vision</span></h2>
                    <p className="text-slate-500 font-medium">We look for astute thinkers who can add value.</p>
                </div>
            </div>
        </div>
    );
};
