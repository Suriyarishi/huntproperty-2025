import React from 'react';
import { 
    Map, Globe, Network, Cpu, ShieldCheck, 
    Landmark, Activity, Box, ArrowUpRight, 
    Search, Info, List, Home, UserPlus, 
    LogIn, Phone, CreditCard, Scale, Smartphone,
    Repeat, Key, Briefcase, Building2, UserCheck, 
    FileText, Compass, Zap, Target,
    // Added missing icons to fix compilation errors on lines 39, 107, 151, and 163
    Sparkles, ArrowRight, Fingerprint, DollarSign
} from 'lucide-react';

interface SitemapViewProps {
    onNavigate: (view: any) => void;
}

const SitemapView: React.FC<SitemapViewProps> = ({ onNavigate }) => {
    const sitemapData = [
        {
            title: "General Site Links",
            icon: Network,
            links: [
                { label: "Home Hub", view: "home", icon: Home },
                { label: "Login Portal", view: "login", icon: LogIn },
                { label: "Apply for Loan", view: "home-loans", icon: HandCoins },
                { label: "Advertise with Us", view: "advertise", icon: Target },
                { label: "Terms and Conditions", view: "terms", icon: Scale },
                { label: "Register New Identity", view: "register", icon: UserPlus },
                { label: "Global Properties", view: "buy", icon: Globe },
                { label: "Mobile Application", view: "home", icon: Smartphone },
                { label: "Contact Intelligence", view: "customer-care", icon: Phone },
                { label: "Privacy Protocol", view: "home", icon: ShieldCheck }
            ]
        },
        {
            title: "Market Search Grid",
            icon: Search,
            links: [
                { label: "Search Properties", view: "buy", icon: Search },
                { label: "Real Estate Agents", view: "agents", icon: UserCheck },
                { label: "Search New Projects", view: "buy", icon: Sparkles },
                { label: "Builders Registry", view: "buy", icon: Building2 }
            ]
        },
        {
            title: "Operational Channels",
            icon: Repeat,
            links: [
                { label: "Sell Property Node", view: "sell", icon: Repeat },
                { label: "Rent Property Node", view: "rent", icon: Key },
                { label: "Buyers Intelligence Guide", view: "insights", icon: BookOpen }
            ]
        }
    ];

    const cityNodes = ["Delhi", "Noida", "Ghaziabad", "Faridabad", "Gurugram", "Pune", "Mumbai"];

    const geospatialSections = [
        { title: "Buy Property in India", view: "buy", color: "text-red-600" },
        { title: "Rent Property in India", view: "rent", color: "text-emerald-600" },
        { title: "Sell Property in India", view: "sell", color: "text-blue-600" }
    ];

    return (
        <div className="min-h-screen bg-white pt-32 pb-40 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
                
                {/* 1. Futuristic Header */}
                <div className="text-center space-y-8 mb-24 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-primary border border-white/10 text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl">
                        <Map size={14} className="animate-pulse" /> Global Navigational Matrix v.2025
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-8xl font-display font-black text-slate-950 uppercase tracking-tighter leading-[0.85]">
                            Site<span className="text-red-600 italic">map</span>
                        </h1>
                        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80 border-l-4 border-slate-100 pl-8 text-left md:text-center">
                            "A comprehensive architectural overview of the Hunt Property ecosystem. Decrypting paths to residential and commercial nodes."
                        </p>
                    </div>
                </div>

                {/* 2. Main Sitemap Registry Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {sitemapData.map((section, idx) => ( section.links.length > 0 && 
                        <div key={idx} className="bg-slate-50/50 rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[6000ms]">
                                <section.icon size={280} />
                            </div>
                            
                            <div className="flex items-center gap-5 mb-10 border-b border-slate-200 pb-8 relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 group-hover:bg-slate-950 group-hover:text-primary transition-all duration-500">
                                    <section.icon size={24} />
                                </div>
                                <h2 className="text-xl font-display font-black uppercase tracking-tight text-slate-900 leading-none">{section.title}</h2>
                            </div>

                            <ul className="space-y-5 relative z-10">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <button 
                                            onClick={() => onNavigate(link.view)}
                                            className="flex items-center gap-4 text-slate-500 hover:text-red-600 transition-all duration-300 font-black text-xs uppercase tracking-widest group/link"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center group-hover/link:border-red-600 transition-colors shadow-sm">
                                                {link.icon && <link.icon size={14} className="text-slate-300 group-hover/link:text-red-600" />}
                                            </div>
                                            <span className="pt-0.5">{link.label}</span>
                                            <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 3. Geospatial Node Registry (Cities) */}
                <div className="space-y-12">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <div className="flex items-center gap-4">
                            <Globe size={24} className="text-red-600" />
                            <h2 className="text-2xl font-display font-black uppercase tracking-tighter text-slate-950">Geospatial Intelligence Nodes</h2>
                        </div>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {geospatialSections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm hover:shadow-2xl transition-all duration-700 group">
                                <h3 className={`text-sm font-black uppercase tracking-widest mb-8 ${section.color} border-b border-slate-50 pb-4`}>{section.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {cityNodes.map(city => (
                                        <button 
                                            key={city}
                                            onClick={() => onNavigate(section.view)}
                                            className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-500 shadow-inner group-hover:shadow-none"
                                        >
                                            {city} Node
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Footer Branding Strip */}
                <div className="mt-40 pt-20 border-t border-slate-100 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-12 group/strip">
                     <p className="text-[11px] font-black text-slate-950 uppercase tracking-[1em] group-hover:tracking-[1.2em] transition-all duration-1000">HUNT PROPERTY INTELLECTUAL NAVIGATION HUB • v.2025</p>
                     <div className="flex flex-wrap justify-center gap-20 grayscale group-hover:grayscale-0 transition-all duration-1000">
                         {[ShieldCheck, Globe, Network, Cpu, Landmark, Fingerprint].map((Icon, i) => (
                             <Icon key={i} size={36} strokeWidth={1} className="text-slate-400 hover:text-red-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

// Re-defining missing HandCoins as DollarSign for consistency
const HandCoins = ({ size, className }: { size: number, className?: string }) => (
    <DollarSign size={size} className={className} />
);

const BookOpen = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

export default SitemapView;