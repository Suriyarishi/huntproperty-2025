import React, { useState } from 'react';
import { 
    HelpCircle, ChevronDown, UserPlus, FileEdit, 
    Search, MessageSquare, Bell, Tag, 
    PhoneCall, Mail, UserCheck, ShieldCheck, 
    Sparkles, ArrowRight, ExternalLink, Globe,
    Network, Cpu, Info, Target, Landmark
} from 'lucide-react';

type FaqCategory = 'registration' | 'post-property' | 'search' | 'responses' | 'requirements' | 'tags';

const CustomerCareView = () => {
    const [activeCategory, setActiveCategory] = useState<FaqCategory>('registration');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        { id: 'registration', label: 'User Registration', icon: UserPlus },
        { id: 'post-property', label: 'Post/Delete/Refresh Property', icon: FileEdit },
        { id: 'search', label: 'Search on Hunt Property', icon: Search },
        { id: 'responses', label: 'Responses', icon: MessageSquare },
        { id: 'requirements', label: 'Post Requirements/Alerts', icon: Bell },
        { id: 'tags', label: 'Special Tags with Property', icon: Tag }
    ];

    const faqData: Record<FaqCategory, { q: string, a: React.ReactNode }[]> = {
        registration: [
            { 
                q: "Registration with Huntproperty.com", 
                a: (
                    <div className="space-y-4">
                        <p className="font-bold text-slate-900">How much do I have to pay to register on Huntproperty.com?</p>
                        <p className="text-slate-500 leading-relaxed italic">
                            "Absolutely free! Registration on Huntproperty.com doesn't require even a single penny. We do not charge any brokerage/commission from any of the users on property transactions."
                        </p>
                        <button className="text-red-600 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:underline">
                            Initialize Registration <ArrowRight size={12} />
                        </button>
                    </div>
                )
            },
            { q: "Forgot Password?", a: "To reset your access key, navigate to the Login portal and select 'Retrieve Credentials'. An authentication link will be transmitted to your registered neural mail." },
            { q: "Can I create Multiple Accounts with Same Details?", a: "Each data node (Email/Mobile) is mapped uniquely. Multiple accounts with duplicate biometric or contact markers are restricted for registry integrity." },
            { q: "Can same details be used for new account after deactivation?", a: "Deactivated nodes remain in the cold storage archive for 180 days before being purged for re-entry." },
            { q: "Account Deactivation", a: "Request deactivation through the Security Settings in your Dashboard. This protocol is irreversible after 24 hours." }
        ],
        'post-property': [
            { q: "How to post a property listing?", a: "Utilize the 'Post Your Property' gateway. Complete the 4-stage data entry flow to synchronize your asset with the global grid." },
            { q: "How to refresh my existing listing?", a: "Access the 'Manage Matrix' node in your dashboard. Selecting 'Synthesize/Refresh' will push your node to the top of active search stacks." }
        ],
        search: [
            { q: "Advanced Spatial Filtering", a: "Use the Search Grounding interface to filter by geospatial coordinates, budget spectrums, and unit configurations." }
        ],
        responses: [
            { q: "Tracking leads in real-time", a: "All incoming handshakes are logged in the 'Response Module' of your dashboard with identity verification scores." }
        ],
        requirements: [
            { q: "Setting up automated alerts", a: "Define your 'Intelligence Profile' and we will transmit real-time alerts whenever a matching node enters the registry." }
        ],
        tags: [
            { q: "Verified Node Badge", a: "Properties passing our RERA and Legal framework validation are assigned the 'Diamond Shield' tag for premium visibility." }
        ]
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6">
                
                {/* 1. Tactical Header */}
                <div className="text-center space-y-8 mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-[#1A1A1A] text-primary border border-white/10 text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                        <HelpCircle size={16} className="animate-pulse" /> Support Operations v.2025
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-[#1A1A1A] uppercase tracking-tighter leading-[0.85]">
                        Customer <span className="text-red-600 italic">Care</span>
                    </h1>
                    <p className="text-slate-500 text-2xl font-medium italic opacity-80 max-w-4xl mx-auto leading-relaxed">
                        "Get answers of all your questions here. Our intelligence agents are standing by to assist with your property grid navigation."
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* 2. Navigation Sidebar */}
                    <div className="lg:col-span-4 bg-white rounded-[3.5rem] p-6 shadow-2xl border border-slate-200 sticky top-28">
                        <div className="px-8 py-8 border-b border-slate-50 mb-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-2">Protocol Hub</h3>
                            <h4 className="text-[#1A1A1A] font-display font-black uppercase text-2xl tracking-tight">Intelligence Categories</h4>
                        </div>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <button 
                                    key={cat.id} 
                                    onClick={() => { setActiveCategory(cat.id as FaqCategory); setOpenIndex(0); }} 
                                    className={`w-full flex items-center justify-between p-5 rounded-[2rem] transition-all duration-500 group ${activeCategory === cat.id ? 'bg-[#1A1A1A] text-white shadow-2xl scale-[1.03] z-10' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-12 h-12 rounded-[1.2rem] flex items-center justify-center transition-all ${activeCategory === cat.id ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-white shadow-sm'}`}>
                                            <cat.icon size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-widest text-left leading-tight max-w-[140px]">{cat.label}</span>
                                    </div>
                                    <ChevronDown size={16} className={`transition-transform duration-500 ${activeCategory === cat.id ? '-rotate-90 text-primary' : '-rotate-90 opacity-0 group-hover:opacity-100'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 3. Knowledge Accordion Terminal */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white rounded-[4.5rem] p-10 md:p-20 shadow-[0_50px_150px_-30px_rgba(0,0,0,0.1)] border border-slate-200 min-h-[600px] relative overflow-hidden group/terminal">
                            <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover/terminal:scale-110 transition-transform duration-[6000ms]">
                                <Network size={500} />
                            </div>

                            <div className="space-y-10 relative z-10">
                                <div className="flex items-center justify-between border-b border-slate-50 pb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-[1.5rem] flex items-center justify-center shadow-inner">
                                            <Info size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">Active Matrix</h3>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{categories.find(c => c.id === activeCategory)?.label}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-700">
                                        <ShieldCheck size={14} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Verified Content</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {faqData[activeCategory].map((item, idx) => (
                                        <div key={idx} className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openIndex === idx ? 'bg-slate-50 border-red-200 shadow-lg' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
                                            <button 
                                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                                className="w-full flex items-center justify-between p-8 text-left group/item"
                                            >
                                                <span className={`text-sm font-black uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-red-600' : 'text-slate-900'}`}>{item.q}</span>
                                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === idx ? 'bg-red-600 border-red-600 text-white rotate-180' : 'bg-white border-slate-100 text-slate-400 group-hover/item:text-red-600'}`}>
                                                    <ChevronDown size={14} strokeWidth={3} />
                                                </div>
                                            </button>
                                            {openIndex === idx && (
                                                <div className="px-10 pb-10 animate-fade-in-up">
                                                    <div className="bg-white p-8 rounded-3xl border border-slate-100 text-sm font-medium text-slate-500 leading-relaxed shadow-inner">
                                                        {item.a}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Sales Enquiry Hub */}
                        <div className="mt-12 bg-[#1A1A1A] rounded-[4rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group/footer">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover/footer:scale-110 transition-transform duration-[8000ms]">
                                <PhoneCall size={300} />
                            </div>
                            
                            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
                                <div className="md:col-span-4 space-y-6">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-lg group-hover/footer:scale-110 transition-transform">
                                        <Target size={32} />
                                    </div>
                                    <h2 className="text-4xl font-display font-black uppercase tracking-tighter leading-none">Sales <br/><span className="text-primary italic">Enquiry</span> Node</h2>
                                    <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
                                </div>

                                <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
                                    {[
                                        { label: 'Property Owners', email: 'contactus@huntproperty.com', icon: UserCheck },
                                        { label: 'Brokers & Builders', email: 'contactus@huntproperty.com', icon: Building },
                                        { label: 'Channel Partners', email: 'channelpartner@huntproperty.com', icon: Globe }
                                    ].map((hub, i) => (
                                        <div key={i} className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3 text-slate-400">
                                                <hub.icon size={16} className="text-primary" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{hub.label}</span>
                                            </div>
                                            <a href={`mailto:${hub.email}`} className="text-[11px] font-bold text-slate-200 hover:text-primary transition-colors block break-all">{hub.email}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Validation */}
                <div className="mt-32 pt-16 border-t border-slate-200 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-12">
                     <p className="text-[10px] font-black text-slate-900 uppercase tracking-[1em]">HUNT PROPERTY INTELLECTUAL PROPERTY SYSTEM</p>
                     <div className="flex flex-wrap justify-center gap-24">
                         {/* Fix: Landmark is now imported from lucide-react */}
                         {[ShieldCheck, Globe, Network, Cpu, ArrowDownToLine, Landmark].map((Icon, i) => (
                             <Icon key={i} size={36} strokeWidth={1} className="text-slate-400 hover:text-red-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

// Internal icon helpers for specific modules
const ArrowDownToLine = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
);

const Building = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);

export default CustomerCareView;