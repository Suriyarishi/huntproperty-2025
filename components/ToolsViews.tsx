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
            <Header 
                title="RERA Intelligence" 
                subtitle="Governance, Compliance & Consumer Protection" 
                icon={ShieldCheck} 
                themeColor="text-emerald-600"
                bgColor="bg-emerald-50"
            />
            
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000">
                                <Network size={280} />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight mb-8">The RERA Mandate</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {objectives.map((obj, i) => (
                                        <div key={i} className="bg-slate-50 hover:bg-white border border-slate-100 p-6 rounded-[2rem] transition-all duration-500 hover:shadow-lg group/card">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 group-hover/card:bg-emerald-50 group-hover/card:text-emerald-600 transition-all">
                                                    <obj.icon size={20} strokeWidth={1.5} />
                                                </div>
                                            </div>
                                            <h4 className="font-display font-black text-slate-900 text-sm uppercase mb-1">{obj.title}</h4>
                                            <p className="text-slate-500 text-[10px] font-medium leading-relaxed italic">{obj.desc}</p>
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

// 2. Legal Advisory View
export const LegalAdvisoryView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const documentVault = [
        { name: "ADDENDUM FORMAT", date: "26-Dec-2020" },
        { name: "ADDRESS CHANGE FORMAT", date: "27-Dec-2020" },
        { name: "AGREEMENT TO SELL", date: "28-Dec-2020" },
        { name: "BROKER AGREEMENT", date: "29-Dec-2020" },
        { name: "BUILDER BUYER AGREEMENT", date: "31-Dec-2020" },
        { name: "CANCELLATION AFFIDAVIT", date: "16-Jan-2021" },
        { name: "CONVEYANCE DEED", date: "01-Jan-2021" },
        { name: "FUND TRANSFER AFFIDAVIT", date: "21-Jan-2021" },
        { name: "GENERAL POWER OF ATTORNEY", date: "29-Jan-2021" },
        { name: "LETTER OF INTENT", date: "02-Jan-2021" }
    ];

    const filteredDocs = documentVault.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Legal Advisory" subtitle="High-Performance Compliance & Contracts" icon={Scale} />
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
                    <div className="bg-slate-950 p-8 text-white flex justify-between items-center">
                        <h2 className="text-2xl font-display font-black uppercase">Digital Vault</h2>
                        <div className="relative w-64">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                            <input 
                                type="text" placeholder="Search..." value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs font-bold"
                            />
                        </div>
                    </div>
                    <table className="w-full">
                        <tbody className="divide-y divide-slate-50">
                            {filteredDocs.map((doc, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-all">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <FileSignature size={18} className="text-slate-300" />
                                            <span className="font-display font-black text-slate-900 text-xs uppercase">{doc.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="text-[10px] font-black uppercase text-red-600 hover:underline">Download PDF</button>
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
    const [searchQuery, setSearchQuery] = useState('');
    const cities = ["Ahemdabad", "Allahabad", "Ambala", "Amritsar", "Aurangabad", "Begluru", "Chandigarh", "Dehradun", "Delhi", "Faridabad", "Gorakhpur", "Noida-2031"];
    const filteredCities = cities.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Urban Master Plans" subtitle="Strategic Blueprint Hub" icon={Map} themeColor="text-blue-600" bgColor="bg-blue-50" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-display font-black uppercase">Regional Blueprints</h3>
                    <div className="relative w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                        <input type="text" placeholder="Find a city..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white border border-slate-100 rounded-xl py-2 pl-10 text-xs font-bold outline-none" />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredCities.map(city => (
                        <div key={city} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
                            <Navigation size={24} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-display font-black text-slate-900 text-xs uppercase">{city}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 4. Media Gallery View
export const MediaGalleryView = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const media = [
        { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600", title: "Yeida to raise funds", publisher: "HT Live", category: "NATIONAL" },
        { src: "https://images.unsplash.com/photo-1585829365234-752ff94602f2?q=80&w=600", title: "Bullet train update", publisher: "Noida Times", category: "LOCAL" }
    ];
    const categories = ['ALL', 'NATIONAL', 'LOCAL', 'BUSINESS'];
    const filteredMedia = activeCategory === 'ALL' ? media : media.filter(m => m.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32">
            <Header title="Media Gallery" subtitle="Press Archives" icon={Newspaper} themeColor="text-indigo-600" bgColor="bg-indigo-50" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-2 mb-8 bg-slate-900 p-1 rounded-full w-fit">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-primary text-slate-950' : 'text-slate-400 hover:text-white'}`}>{cat}</button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredMedia.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div className="h-40 overflow-hidden"><img src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={item.title} /></div>
                            <div className="p-4"><p className="text-red-600 font-black text-[8px] uppercase">{item.publisher}</p><h3 className="font-bold text-[11px] text-slate-900 mt-1">{item.title}</h3></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 5. News Gallery View
export const NewsGalleryView = () => {
    const newsData = [
        { title: "Chintels Paradiso Crisis", date: "Feb 21, 2025", image: "https://images.unsplash.com/photo-1590333746433-93666f27f07e?q=80&w=600", desc: "Gurugram's residential complex focus after audits." },
        { title: "Tamil Nadu Economic Vision", date: "Jan 12, 2025", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600", desc: "Driving India's economic landscape future." }
    ];
    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="News" subtitle="Real-time Sector Intelligence" icon={Newspaper} themeColor="text-emerald-600" bgColor="bg-emerald-50" />
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {newsData.map((news, i) => (
                    <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                        <div className="h-48 overflow-hidden"><img src={news.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                        <div className="p-6"><p className="text-[9px] font-black text-emerald-600 uppercase mb-2">{news.date}</p><h4 className="text-lg font-display font-black text-slate-900 uppercase leading-tight mb-3">{news.title}</h4><p className="text-slate-500 text-xs font-medium leading-relaxed">{news.desc}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 6. Video Gallery View
export const VideoGalleryView = () => {
    const [playingId, setPlayingId] = useState(null);
    const videos = [
        { id: "v1", title: "Selling Houses 2025", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600", category: "MASTERCLASS" },
        { id: "v2", title: "Avoid Buying Mistakes", thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600", category: "ADVICE" }
    ];
    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32">
            <Header title="Hunt TV" subtitle="Intelligence Network" icon={Youtube} />
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {videos.map((vid) => (
                    <div key={vid.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-md transition-all">
                        <div className="relative aspect-video bg-slate-900">
                            <img src={vid.thumbnail} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center"><Play className="text-white fill-current" size={32} /></div>
                        </div>
                        <div className="p-4"><p className="text-red-600 font-black text-[8px] uppercase">{vid.category}</p><h3 className="font-bold text-xs text-slate-900 mt-1">{vid.title}</h3></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 7. Articles View - HIGH DENSITY REDESIGN
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
            
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-6">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                    <div className="relative z-10 space-y-3 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary text-[8px] font-black uppercase tracking-widest border border-white/10">
                            <Sparkles size={10} /> Knowledge is Power
                        </div>
                        <h2 className="text-xl md:text-3xl font-display font-black uppercase tracking-tight italic">
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
    const [formData, setFormData] = useState({ locality: '' });

    const faqQuestions = ["Do NRI pay property tax in India?", "Can NRI buy property without Aadhar?", "NRI TDS on property sale", "Repatriation limits for NRI"];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32 overflow-hidden">
            <Header title="NRI Center" subtitle="Global Citizen Realty Solutions" icon={Globe} themeColor="text-red-700" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center mb-12">
                    <div className="bg-slate-900 p-1.5 rounded-full flex gap-1 border border-white/10">
                        <button onClick={() => setActiveTab('section')} className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase transition-all ${activeTab === 'section' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Intelligence Hub</button>
                        <button onClick={() => setActiveTab('query')} className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase transition-all ${activeTab === 'query' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Specialist Query</button>
                    </div>
                </div>
                {activeTab === 'section' ? (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                            <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">NRI Investments in <span className="text-red-700">India</span></h2>
                            <p className="text-slate-500 italic border-l-4 border-red-50 pl-6">Investment in the real estate sector is a popular avenue for non-resident Indians (NRIs).</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {faqQuestions.map((q, idx) => (
                                <div key={idx} className="border border-slate-50 rounded-[2rem] bg-white shadow-sm overflow-hidden">
                                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className={`w-full flex justify-between p-6 text-left transition-colors ${openFaq === idx ? 'bg-slate-950 text-white' : 'hover:bg-slate-50'}`}>
                                        <span className="text-[10px] font-black uppercase">{q}</span>
                                        <ChevronDown size={16} className={`transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openFaq === idx && <div className="p-8 bg-slate-950 text-slate-400 text-[10px] leading-relaxed border-t border-white/5">Analysis module synchronized. Verified regulatory protocol in place for this query type.</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto bg-white rounded-[3rem] p-10 shadow-2xl animate-fade-in-up">
                        <h2 className="text-2xl font-display font-black text-center uppercase mb-8">Query Transmission</h2>
                        <form className="space-y-6">
                            <input type="text" placeholder="FULL NAME" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-6 py-4 text-xs font-black outline-none focus:border-red-600" />
                            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-6 py-4 text-xs font-black outline-none focus:border-red-600" />
                            <textarea placeholder="DESCRIBE REQUIREMENT..." className="w-full h-32 bg-slate-50 border-2 border-slate-100 rounded-xl px-6 py-4 text-xs font-black outline-none focus:border-red-600 resize-none" />
                            <button className="w-full py-5 bg-red-600 text-white rounded-xl font-black uppercase text-xs shadow-xl shadow-red-600/20">Submit Intelligence Requirement</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

// 9. Covid View
export const CovidView = () => {
    const [activeSectionId, setActiveSectionId] = useState<string>('overview');
    const sections = [
        { id: 'overview', title: 'What is COVID?', icon: Biohazard, text: "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus." },
        { id: 'spread', title: 'How It Spreads', icon: RefreshCw, text: "Mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales." },
        { id: 'corporate', title: 'Hunt Shield', icon: Building, text: "Regular sensitisation, sanitizers, and uninterrupted mask usage for all client dealings." }
    ];
    const current = sections.find(s => s.id === activeSectionId) || sections[0];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32">
            <Header title="Health Matrix" subtitle="Safety Protocols" icon={HeartPulse} themeColor="text-blue-700" />
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-4 shadow-xl border border-slate-100">
                    <div className="space-y-2">
                        {sections.map(s => (
                            <button key={s.id} onClick={() => setActiveSectionId(s.id)} className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all ${activeSectionId === s.id ? 'bg-slate-950 text-white' : 'hover:bg-slate-50 text-slate-400'}`}>
                                <div className="flex items-center gap-4"><s.icon size={16} /><span className="text-[9px] font-black uppercase tracking-widest">{s.title}</span></div>
                                <ChevronRight size={14} />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-8 bg-white rounded-[3.5rem] p-12 shadow-2xl border border-slate-100 min-h-[500px] animate-fade-in-up">
                    <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-8">{current.title}</h2>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed italic border-l-4 border-blue-100 pl-8">"{current.text}"</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="bg-blue-600 rounded-[3rem] p-10 text-white text-center shadow-xl">
                    <h3 className="text-2xl font-display font-black uppercase mb-4">Hunt Together • Fight Together</h3>
                    <p className="text-blue-50 text-sm italic">"Fight together - Hunt COVID and Kill COVID"</p>
                </div>
            </div>
        </div>
    );
};

// 10. Career View
export const CareerView = () => {
    const jobs = [
        { title: "Advisor", type: "Full Time", location: "Noida", icon: UserCircle },
        { title: "Researcher", type: "Remote", location: "Global", icon: Zap }
    ];
    return (
        <div className="min-h-screen bg-[#f8fafc] pb-32">
            <Header title="Talent Network" subtitle="Join Our Innovation Hub" icon={Briefcase} />
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                {jobs.map((job, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg group flex justify-between items-center">
                        <div>
                            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all"><job.icon size={24} /></div>
                            <h4 className="font-display font-black text-slate-950 text-xl uppercase mb-2">{job.title}</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{job.type} • {job.location}</p>
                        </div>
                        <button className="p-5 rounded-full bg-slate-900 text-white hover:bg-red-600 transition-all"><ArrowUpRight size={24} /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ArrowUpRight = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);
