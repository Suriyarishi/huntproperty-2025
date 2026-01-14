import React, { useState } from 'react';
import { 
    ShieldCheck, Scale, Map, Newspaper, Play, 
    Globe, UserCheck, Briefcase, Download, ArrowRight, 
    Search, Filter, ChevronRight, CheckCircle2, AlertCircle, AlertTriangle,
    FileText, HelpCircle, Phone, Mail, Upload, Sparkles, Building, Landmark, TreePine, Navigation, Compass, Layout, Target, Tag, Calendar, UserCircle, Droplet, Layers,
    History, Fingerprint, Gavel, ShieldAlert, Zap, ArrowDownToLine, Info, BookOpen, HardDrive, FileSignature, FileKey, Shield,
    Eye, Users, ClipboardCheck, MessageSquarePlus, Quote, BookOpenCheck, ExternalLink, Maximize2, Clock, ListFilter, Youtube, Share2,
    ShieldPlus, FileBadge, Globe2, Network, IndianRupee, ChevronDown, Key, Repeat, Activity, Send,
    User, MapPin, HeartPulse, Thermometer, Hand, Syringe, Biohazard, Stethoscope,
    Wind, Activity as ActivityIcon, ShieldAlert as ShieldAlertIcon, RefreshCw, Smartphone,
    Waves, Beaker, Pill, LogOut, Coffee, Info as InfoIcon
} from 'lucide-react';

const Header = ({ title, subtitle, icon: Icon, themeColor = 'text-red-600', bgColor = 'bg-red-50' }) => (
    <div className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 border-b border-slate-100 pb-6">
            <div className={`w-14 h-14 ${bgColor} ${themeColor} rounded-[1.2rem] flex items-center justify-center shadow-lg ring-4 ${bgColor}/50`}>
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <div className="text-center md:text-left space-y-0.5">
                <h1 className="text-2xl md:text-4xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">{title}</h1>
                <p className="text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em]">{subtitle}</p>
            </div>
        </div>
    </div>
);

// 1. RERA View
export const ReraView = () => {
    const objectives = [
      { title: "Financial Discipline", desc: "70% of project funds must reside in an escrow account.", icon: ShieldPlus },
      { title: "Total Transparency", desc: "Mandatory carpet area quotes and project disclosures.", icon: Eye },
      { title: "Rigid Accountability", desc: "Registration is non-negotiable for projects over 500 sq.m.", icon: ClipboardCheck },
      { title: "Judicial Redressal", desc: "Dedicated tribunals provide rapid legal resolution.", icon: Gavel }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="RERA Intelligence" subtitle="Compliance Hub" icon={ShieldCheck} themeColor="text-emerald-600" bgColor="bg-emerald-50" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                    <h2 className="text-2xl font-display font-black uppercase mb-8">The RERA Mandate</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {objectives.map((obj, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <obj.icon className="text-emerald-600 mb-4" size={24} />
                                <h4 className="font-bold text-slate-900 mb-2">{obj.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{obj.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Legal Advisory View
export const LegalAdvisoryView = () => {
    const documentVault = [
        { name: "ADDENDUM FORMAT", date: "26-Dec-2020" },
        { name: "ADDRESS CHANGE FORMAT", date: "27-Dec-2020" },
        { name: "AGREEMENT TO SELL", date: "28-Dec-2020" },
        { name: "BROKER AGREEMENT", date: "29-Dec-2020" },
        { name: "BUILDER BUYER AGREEMENT", date: "31-Dec-2020" },
        { name: "CANCELLATION AFFIDAVIT", date: "16-Jan-2021" }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Legal Advisory" subtitle="Standard Formats" icon={Scale} />
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-12 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl font-display font-black uppercase mb-4">Knowledge is Power</h2>
                        <p className="text-slate-400 leading-relaxed">To save your valuable time we are providing you format of various Real Estate Legal Documents. Having everything in writing minimizes potential problems.</p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-8 py-4 text-[10px] font-black uppercase text-slate-400">Document Name</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase text-slate-400 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {documentVault.map((doc, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-8 py-6 flex items-center gap-4">
                                        <FileSignature size={18} className="text-slate-300" />
                                        <span className="text-xs font-bold uppercase">{doc.name}</span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase hover:bg-red-600 transition-colors">Get PDF</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// 3. Master Plan View
export const MasterPlanView = () => {
    const cities = ["Noida-2031", "Delhi", "Gurugram", "Bengaluru", "Mumbai", "Pune"];
    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Master Plans" subtitle="Urban Expansion" icon={Map} themeColor="text-blue-600" bgColor="bg-blue-50" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-6">
                    {cities.map(city => (
                        <div key={city} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center justify-between group">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-tight">{city}</h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Official Blueprint</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform"><Download size={18} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 4-6. Galleries (Simplified for brevity)
export const MediaGalleryView = () => <div className="min-h-screen bg-[#f8fafc] pt-32 px-6"><Header title="Media" subtitle="Press Archive" icon={Newspaper} /></div>;
export const NewsGalleryView = () => <div className="min-h-screen bg-[#f8fafc] pt-32 px-6"><Header title="News" subtitle="Market Updates" icon={Newspaper} themeColor="text-emerald-600" bgColor="bg-emerald-50" /></div>;
export const VideoGalleryView = () => <div className="min-h-screen bg-[#f8fafc] pt-32 px-6"><Header title="Hunt TV" subtitle="Video Insights" icon={Youtube} /></div>;

// 7. Articles View - HIGH DENSITY
export const ArticlesView = () => {
    const articles = [
        { id: 1, title: "Navigating 2025 Tier-1 Real Estate", date: "Oct 24, 2025", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
        { id: 2, title: "Infrastructure & Airport Influence", date: "Oct 20, 2025", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800" },
        { id: 3, title: "Green Protocols & Sustainability", date: "Oct 15, 2025", image: "https://images.unsplash.com/photo-1518005020480-47b2c943806f?q=80&w=800" },
        { id: 4, title: "Urbanization Paradigm Shift", date: "Oct 10, 2025", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800" },
        { id: 5, title: "Asset Diversification: Nodes", date: "Oct 05, 2025", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
        { id: 6, title: "Residential DNA: Modular Living", date: "Sep 28, 2025", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" },
        { id: 7, title: "Legal Frameworks: Digital Escrow", date: "Sep 22, 2025", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800" },
        { id: 8, title: "Vastu & Modern Design Synthesis", date: "Sep 15, 2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
        { id: 9, title: "AI Integration in Appraisals", date: "Sep 10, 2025", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" },
        { id: 10, title: "The Rise of Micro-Condos", date: "Sep 05, 2025", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800" },
        { id: 11, title: "Satellite Cities: Next Frontier", date: "Aug 30, 2025", image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=800" },
        { id: 12, title: "Global Investment Corridors", date: "Aug 25, 2025", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800" }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Articles" subtitle="Deep-Dive Market Insights" icon={BookOpen} />
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="bg-slate-950 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-6">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                    <div className="relative z-10 space-y-2 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary text-[8px] font-black uppercase tracking-widest border border-white/10">
                            <Sparkles size={10} /> Knowledge is Power
                        </div>
                        <h2 className="text-xl md:text-3xl font-display font-black uppercase tracking-tight italic leading-none">
                            “Little knowledge is a <span className="text-red-500">dangerous</span> thing”
                        </h2>
                        <p className="text-slate-400 font-black text-[9px] uppercase tracking-[0.4em]">— Alexander Pope</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {articles.map((art) => (
                        <div key={art.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col relative">
                            <div className="h-32 overflow-hidden relative bg-slate-100">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                            </div>
                            <div className="p-3 flex flex-col flex-1">
                                <p className="text-[7px] font-black text-red-600 uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Calendar size={8} /> {art.date}
                                </p>
                                <h4 className="text-[9px] font-display font-black text-slate-900 leading-tight uppercase tracking-tight group-hover:text-red-600 transition-colors line-clamp-2">
                                    {art.title}
                                </h4>
                            </div>
                            <button className="absolute inset-0 opacity-0 z-10 cursor-pointer"></button>
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
    const faqQuestions = ["Do NRI pay property tax in India?", "Can NRI buy property without Aadhar?", "NRI TDS on property sale", "Repatriation limits for NRI"];

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="NRI Center" subtitle="Global Solutions" icon={Globe} themeColor="text-red-700" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center mb-12">
                    <div className="bg-slate-900 p-1.5 rounded-full flex gap-1">
                        <button onClick={() => setActiveTab('section')} className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase transition-all ${activeTab === 'section' ? 'bg-red-600 text-white' : 'text-slate-400'}`}>Intelligence</button>
                        <button onClick={() => setActiveTab('query')} className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase transition-all ${activeTab === 'query' ? 'bg-red-600 text-white' : 'text-slate-400'}`}>Query Portal</button>
                    </div>
                </div>
                {activeTab === 'section' ? (
                    <div className="space-y-6">
                        {faqQuestions.map((q, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                                    <span className="text-xs font-bold uppercase">{q}</span>
                                    <ChevronDown size={16} className={`transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === idx && <div className="p-6 bg-slate-950 text-slate-400 text-xs border-t border-white/5">Details for: {q}. Professional guidance available via specialist query portal.</div>}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                        <form className="space-y-4">
                            <input type="text" placeholder="FULL NAME" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold outline-none focus:border-red-600" />
                            <textarea placeholder="MESSAGE" className="w-full h-32 bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold outline-none focus:border-red-600" />
                            <button className="w-full py-4 bg-red-600 text-white rounded-xl font-black uppercase text-xs">Transmit Query</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

// 9. Covid View - REDESIGNED PER PDF SCREENSHOTS
export const CovidView = () => {
    const [activeSectionId, setActiveSectionId] = useState<string>('what-is-covid');

    const sections = [
        {
            id: 'what-is-covid',
            title: 'What is COVID?',
            icon: Biohazard,
            content: (
                <div className="space-y-8 animate-fade-in-up">
                    <p className="text-slate-700 text-lg font-medium leading-relaxed italic border-l-4 border-blue-500 pl-6">
                        "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."
                    </p>
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                        <h4 className="font-display font-black uppercase text-slate-900 mb-6 flex items-center gap-3">
                            <Thermometer className="text-red-600" size={24} /> Symptoms Analysis
                        </h4>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h5 className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-b border-blue-100 pb-2">Most common symptoms:</h5>
                                <ul className="grid sm:grid-cols-3 gap-4">
                                    {['Fever', 'Dry cough', 'Tiredness'].map(s => <li key={s} className="text-sm font-bold text-slate-600 flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"><CheckCircle2 size={16} className="text-emerald-500" /> {s}</li>)}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Secondary symptoms:</h5>
                                <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {[
                                        'Aches and pains', 'Sore throat', 'Diarrhoea', 'Conjunctivitis', 
                                        'Headache', 'Loss of taste/smell', 'Rash on skin', 'Digit discolouration'
                                    ].map(s => <li key={s} className="text-[11px] font-bold text-slate-500 p-3 bg-white/50 rounded-xl border border-slate-100">• {s}</li>)}
                                </ul>
                            </div>
                            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 space-y-4">
                                <h5 className="text-red-600 font-black text-[10px] uppercase tracking-widest">Serious Symptoms Node:</h5>
                                <ul className="space-y-3">
                                    {[
                                        'Difficulty breathing or shortness of breath',
                                        'Chest pain or pressure',
                                        'Loss of speech or movement'
                                    ].map(s => (
                                        <li key={s} className="flex items-center gap-4 text-sm font-black text-red-900 uppercase tracking-tight italic">
                                            <AlertCircle size={20} className="text-red-600 shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'how-it-spreads',
            title: 'How It Spreads',
            icon: RefreshCw,
            content: (
                <div className="space-y-10 animate-fade-in-up">
                    <div className="relative h-64 rounded-[4rem] overflow-hidden group shadow-2xl bg-slate-900 border border-white/5">
                        <img src="https://images.unsplash.com/photo-1584113702303-3a51e8a58e3b?q=80&w=2070" className="w-full h-full object-cover opacity-50 transition-transform duration-[3000ms] group-hover:scale-110" alt="Spread" />
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-gradient-to-t from-slate-950/80 to-transparent">
                            <p className="text-white text-xl font-medium leading-relaxed italic max-w-2xl">
                                "The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales."
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl space-y-4">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner"><Waves size={28} /></div>
                            <h4 className="text-2xl font-display font-black uppercase text-slate-900">Droplet Protocol</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>
                        </div>
                        <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl space-y-4">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner"><Hand size={28} /></div>
                            <h4 className="text-2xl font-display font-black uppercase text-slate-900">Contact Vector</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">You can be infected by breathing in the virus or by touching contaminated surfaces and then your eyes, nose or mouth.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'family-safety',
            title: 'Family Safety',
            icon: Users,
            content: (
                <div className="space-y-10 animate-fade-in-up">
                    <h3 className="text-3xl font-display font-black text-slate-900 uppercase">How to keep you and your family safe?</h3>
                    <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 shadow-inner space-y-6">
                        <p className="text-slate-600 text-xl font-medium leading-relaxed italic border-l-4 border-blue-400 pl-8">
                            "With the increasing number of COVID-19 cases around the world, simple home remedies such as practising hygiene, staying indoors and avoiding crowded places can help you and your family stay safe."
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['Practising Hygiene', 'Staying Indoors', 'Avoiding Crowds'].map(item => (
                            <div key={item} className="flex items-center gap-4 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-lg group hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner"><CheckCircle2 size={24} /></div>
                                <span className="text-xs font-black uppercase text-slate-900 tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'preventive-measures',
            title: 'Preventive Measures',
            icon: ShieldPlus,
            content: (
                <div className="space-y-10 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { label: 'Regularly wash hands with alcohol-based sanitizers.', icon: Droplet },
                            { label: 'Cover mouth and nose with elbow when coughing.', icon: ShieldAlert },
                            { label: 'Avoid close contact with anyone with flu symptoms.', icon: LogOut },
                            { label: 'Regularly clean phones, taps and doorknobs.', icon: Smartphone },
                            { label: 'Consult a doctor if you have fever or breathing issues.', icon: Stethoscope }
                        ].map((m, i) => (
                            <div key={i} className="flex items-start gap-6 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all shadow-inner"><m.icon size={24} strokeWidth={1.5} /></div>
                                <p className="text-sm font-bold text-slate-600 leading-relaxed pt-2">{m.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-950 p-12 rounded-[4rem] text-white space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform"><Sparkles size={200} /></div>
                        <h4 className="text-2xl font-display font-black uppercase text-primary tracking-widest flex items-center gap-4">
                            <Sparkles size={32} /> Advanced Measures
                        </h4>
                        <p className="text-slate-300 text-lg leading-relaxed font-medium italic border-l-2 border-primary/20 pl-8">
                            "These measures will help you understand exactly what actions need to be done the right way. Here’s what you need to know."
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'hand-washing',
            title: '20s Hand Wash',
            icon: Hand,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="flex flex-col md:flex-row items-center gap-12 border-b border-slate-100 pb-12">
                        <div className="w-48 h-48 bg-blue-50 rounded-[3rem] flex items-center justify-center shrink-0 shadow-inner border border-blue-100 group">
                            <Hand size={80} className="text-blue-600 animate-pulse group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl font-display font-black text-slate-900 uppercase leading-none">Wash Hands For <span className="text-blue-600">20 Seconds</span></h3>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed italic border-l-2 border-blue-500 pl-6">
                                "Say goodbye to germs that can cause infections and viruses. Medically speaking, what’s the best way to wash your hands? Here’s how you do it."
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Wet', desc: 'Wet your hands with water.' },
                            { step: '02', title: 'Soap', desc: 'Apply soap or hand wash on your palm.' },
                            { step: '03', title: 'Scrub', desc: 'Scrub for 20s (back, between fingers, under nails).' },
                            { step: '04', title: 'Rinse', desc: 'Rinse thoroughly with water.' }
                        ].map(s => (
                            <div key={s.step} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all">
                                <div className="text-7xl font-display font-black text-slate-50 absolute -right-2 -top-2 group-hover:text-blue-50/50 transition-colors">{s.step}</div>
                                <h4 className="text-lg font-black text-slate-900 uppercase mb-3 relative z-10">{s.title}</h4>
                                <p className="text-slate-500 text-[11px] font-bold leading-relaxed relative z-10">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 ml-2">When to wash?</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { l: 'Before eating', i: Coffee },
                                { l: 'After sneezing', i: Wind },
                                { l: 'After bathroom', i: Droplet }
                            ].map(x => (
                                <div key={x.l} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><x.i size={18} /></div>
                                    <span className="text-[10px] font-black uppercase text-slate-700">{x.l}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mask-indoor',
            title: 'Masks & Indoor',
            icon: Shield,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform"><Shield size={200} /></div>
                            <h4 className="text-3xl font-display font-black uppercase text-slate-900 tracking-tight leading-none">Wear A Medical Mask?</h4>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed italic border-l-4 border-red-500 pl-8">
                                "If you have any respiratory problems, it is recommended that you wear a mask to prevent the spread of infection. This comes handy in protecting you from any infection."
                            </p>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl text-white space-y-8 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform"><Building size={200} /></div>
                             <h4 className="text-3xl font-display font-black uppercase text-primary tracking-tight leading-none">Stay Indoors</h4>
                             <p className="text-slate-300 text-lg font-medium leading-relaxed">
                                "This is the simplest way to prevent COVID from spreading. Practice hygiene and stay away from social gatherings. It’s the best time to concentrate on yourself and learn new things."
                             </p>
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-[2rem] flex items-center justify-center shadow-lg"><Users size={32} /></div>
                            <h4 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">If Family Is Affected?</h4>
                        </div>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed italic border-l-4 border-red-200 pl-10">
                            "If a person shows signs of cough, cold, shortness of breath and fever, seek immediate medical help by rushing him/her to the nearest hospital."
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'positive-protocol',
            title: 'Positive Protocol',
            icon: AlertTriangle,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <div className="bg-blue-600 p-12 rounded-[4rem] text-white space-y-8">
                        <h4 className="text-3xl font-display font-black uppercase tracking-tight flex items-center gap-4">
                            <Navigation size={32} /> Travel Precautions
                        </h4>
                        <p className="text-blue-50 text-xl font-medium leading-relaxed border-l-4 border-white/20 pl-10">
                            "During this pandemic it may not be a good idea. Stay indoors, stay safe."
                        </p>
                    </div>
                    <div className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden">
                        <div className="bg-red-600 p-10 flex items-center gap-6 text-white">
                             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg"><Activity size={32} /></div>
                             <h4 className="text-3xl font-display font-black uppercase tracking-tight leading-none">What to do if positive?</h4>
                        </div>
                        <div className="p-12 space-y-8 text-slate-600">
                             <p className="text-lg font-bold italic">Advice for people isolating at home:</p>
                             <ul className="space-y-6">
                                 <li className="flex items-start gap-4 text-sm font-medium"><div className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0"></div> Get rest at home and drink enough water to make sure that your urine stays a pale clear colour.</li>
                                 <li className="flex items-start gap-4 text-sm font-medium"><div className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0"></div> Monitor symptoms carefully. If they get worse, call healthcare provider immediately.</li>
                                 <li className="flex items-start gap-4 text-sm font-medium"><div className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0"></div> If you develop emergency warning signs, get medical attention immediately.</li>
                             </ul>
                             <div className="bg-red-50 p-6 rounded-3xl border border-red-100 text-xs font-black text-red-800 uppercase tracking-tight">
                                 Avoid taking public transport – either use private transport (windows rolled-down) or call ambulance. Wear a face mask.
                             </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'hunt-shield',
            title: 'Hunt Property Shield',
            icon: Building,
            content: (
                <div className="space-y-12 animate-fade-in-up">
                    <h3 className="text-3xl font-display font-black text-slate-900 uppercase">Hunt Property Measurements</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            'Regular sensitisation of the premises.',
                            'Regular use of sanitizer.',
                            'Uninterrupted use of Mask while working.',
                            'Keeping essential 6Ft distance.',
                            'Anti-Virus fogging inside the premises.',
                            'Facilitating employees to work from home.',
                            'Regular use of steamer for employees.'
                        ].map((m, i) => (
                            <div key={i} className="flex items-center gap-5 p-8 bg-white rounded-[3rem] border border-slate-100 shadow-xl hover:border-blue-600 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner"><CheckCircle2 size={24} /></div>
                                <span className="text-xs font-black uppercase text-slate-700 tracking-tight">{m}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-950 p-16 rounded-[5rem] text-white text-center space-y-10 shadow-2xl relative overflow-hidden group/cta">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-primary/5"></div>
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-4xl font-display font-black uppercase tracking-tighter leading-none">
                                Hunt Together • <span className="text-primary">Fight Together</span>
                            </h3>
                            <p className="text-slate-300 text-2xl font-medium italic max-w-5xl mx-auto leading-relaxed border-y border-white/5 py-12">
                                "Use of Our joint efforts to fight against COVID could became the biggest reason for the elimination of COVID from India. So let’s be together - Fight together - Hunt COVID and Kill COVID"
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const current = sections.find(s => s.id === activeSectionId) || sections[0];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32 selection:bg-blue-600 selection:text-white">
            <Header title="Public Health Matrix" subtitle="Safety Protocols & Bio-Awareness" icon={HeartPulse} themeColor="text-blue-700" bgColor="bg-blue-50" />
            
            <div className="max-w-7xl mx-auto px-6 mb-12">
                {/* Hero Banner Section from PDF */}
                <div className="relative h-[300px] md:h-[400px] w-full rounded-[4rem] overflow-hidden shadow-2xl bg-slate-900 border-8 border-white group">
                    <img 
                        src="https://images.unsplash.com/photo-1584634731339-252c5aba1957?q=80&w=2070" 
                        className="w-full h-full object-cover opacity-60 transition-transform duration-[4000ms] group-hover:scale-110" 
                        alt="Covid-19 Shield" 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none mb-4">COVID - 19</h2>
                        <div className="h-1 w-24 bg-red-600 rounded-full mb-6"></div>
                        <p className="text-xl md:text-2xl font-medium text-slate-100 italic tracking-tight">"Precaution is the Biggest Cure"</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                    <div className="w-32 h-32 bg-blue-50 text-blue-600 rounded-[3rem] flex items-center justify-center shrink-0 shadow-inner animate-pulse">
                        <Biohazard size={64} />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 uppercase tracking-tight leading-tight">
                            Intelligence for Public <span className="text-blue-600 italic">Awareness</span>
                        </h2>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-4xl italic border-l-4 border-blue-100 pl-10">
                            "This section is dedicated for the public awareness during this pandemic to fight, hunt and eliminate the Covid 19 attack."
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 bg-white rounded-[3.5rem] p-6 shadow-2xl border border-slate-100 sticky top-28">
                    <div className="px-8 py-6 border-b border-slate-50 mb-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-2">Protocol Hub</h3>
                        <h4 className="text-slate-950 font-display font-black uppercase text-2xl">Covid Precaution</h4>
                    </div>
                    <div className="space-y-2">
                        {sections.map(s => (
                            <button 
                                key={s.id} 
                                onClick={() => setActiveSectionId(s.id)} 
                                className={`w-full flex items-center justify-between p-5 rounded-[2rem] transition-all duration-500 group ${activeSectionId === s.id ? 'bg-slate-950 text-white shadow-2xl scale-[1.03] z-10' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`w-12 h-12 rounded-[1.2rem] flex items-center justify-center transition-all ${activeSectionId === s.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-white shadow-sm'}`}>
                                        <s.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-left leading-tight max-w-[140px]">{s.title}</span>
                                </div>
                                <ChevronRight size={16} className={`transition-transform duration-500 ${activeSectionId === s.id ? 'translate-x-1 text-primary' : 'text-slate-200'}`} />
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="lg:col-span-8 bg-white rounded-[4.5rem] p-12 md:p-20 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.1)] border border-slate-100 min-h-[800px] flex flex-col relative overflow-hidden group/panel">
                    <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none group-hover/panel:scale-110 transition-transform duration-[4000ms]"><current.icon size={450} /></div>
                    
                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">Unit: {current.id.toUpperCase()}</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
                            {current.title}
                        </h2>
                    </div>
                    
                    <div className="relative z-10 flex-1">
                        {current.content}
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-32 text-center space-y-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-1000">
                 <div className="w-64 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
                 <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[1em] max-w-2xl mx-auto leading-relaxed">
                    PUBLIC HEALTH ASSURANCE • HUNT PROPERTY V.2025
                 </p>
                 <div className="flex justify-center gap-24">
                     <Stethoscope size={36} strokeWidth={1} />
                     <ShieldCheck size={36} strokeWidth={1} />
                     <Syringe size={36} strokeWidth={1} />
                     <Biohazard size={36} strokeWidth={1} />
                 </div>
            </div>
        </div>
    );
};

// 10. Career View
export const CareerView = () => {
    const jobs = [
        { title: "Property Advisor", type: "Full Time", location: "Noida", icon: UserCircle },
        { title: "Tech Researcher", type: "Remote", location: "Global", icon: Zap }
    ];
    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Career" subtitle="Join Our Talent Network" icon={Briefcase} />
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                {jobs.map((job, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg group flex justify-between items-center transition-all hover:shadow-2xl hover:-translate-y-1">
                        <div>
                            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all"><job.icon size={24} /></div>
                            <h4 className="font-display font-black text-slate-950 text-xl uppercase mb-2">{job.title}</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{job.type} • {job.location}</p>
                        </div>
                        <button className="p-5 rounded-full bg-slate-900 text-white hover:bg-red-600 transition-all shadow-lg active:scale-90"><ArrowRight size={24} className="-rotate-45" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};
