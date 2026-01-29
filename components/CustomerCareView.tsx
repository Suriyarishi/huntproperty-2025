import React, { useState } from 'react';
import { 
    HelpCircle, ChevronDown, UserPlus, FileEdit, 
    Search, MessageSquare, Bell, Tag, 
    PhoneCall, Mail, UserCheck, ShieldCheck, 
    Sparkles, ArrowRight, ExternalLink, Globe,
    Network, Cpu, Info, Target, Landmark,
    ArrowDownToLine, Building, ChevronRight,
    MapPin, Smartphone, Map as MapIcon, Users,
    Briefcase, Zap, Headphones, Navigation
} from 'lucide-react';

type FaqCategory = 'registration' | 'post-property' | 'search' | 'responses' | 'requirements' | 'tags';

const CustomerCareView = () => {
    const [activeCategory, setActiveCategory] = useState<FaqCategory>('registration');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        { id: 'registration', label: 'Registration', icon: UserPlus },
        { id: 'post-property', label: 'Manage Listings', icon: FileEdit },
        { id: 'search', label: 'Search Interface', icon: Search },
        { id: 'responses', label: 'Lead Responses', icon: MessageSquare },
        { id: 'requirements', label: 'Alert Protocols', icon: Bell },
        { id: 'tags', label: 'Verification Tags', icon: Tag }
    ];

    const faqData: Record<FaqCategory, { q: string, a: React.ReactNode }[]> = {
        registration: [
            { 
                q: "Registration with Huntproperty.com", 
                a: (
                    <div className="space-y-3">
                        <p className="font-bold text-slate-900 text-sm">How much do I have to pay to register?</p>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Registration is entirely complimentary. We do not charge brokerage or commissions on transactions between users.
                        </p>
                    </div>
                )
            },
            { q: "Forgot Access Key?", a: "Navigate to the authentication portal and select 'Retrieve Credentials' to receive a secure link via your registered neural mail." },
            { q: "Multiple Registry Entries", a: "Duplicate data nodes (Email/Mobile) are restricted to maintain registry integrity." },
        ],
        'post-property': [
            { q: "How to post a property listing?", a: "Utilize the 'Post Your Property' gateway. Complete the 4-stage data entry flow." },
        ],
        search: [
            { q: "Spatial Filtering Parameters", a: "The Search Grounding interface allows for precise filtering by geospatial coordinates and budget spectrums." }
        ],
        responses: [
            { q: "Real-time Lead Tracking", a: "Incoming lead signals are logged in the Response Module with verified identity scores." }
        ],
        requirements: [
            { q: "Automated Registry Alerts", a: "Define your intelligence profile to receive real-time alerts when matching nodes enter the registry." }
        ],
        tags: [
            { q: "Diamond Shield Protocol", a: "Properties meeting RERA and Legal framework validation are assigned the Verified Badge." }
        ]
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6">
                
                {/* 1. Refined Minimal Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-in-up">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-primary border border-white/5 text-[9px] font-bold uppercase tracking-[0.3em] shadow-md">
                            <Headphones size={14} /> Intelligence Support Hub
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-5xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">
                                Help & <span className="text-red-600">Assistance</span>
                            </h1>
                            <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed italic opacity-80">
                                "Direct access to institutional knowledge and real-time support vectors."
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 opacity-40">
                         <div className="text-right">
                             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response Rate</p>
                             <p className="text-2xl font-black text-slate-900">99.8%</p>
                         </div>
                         <div className="w-px h-10 bg-slate-200"></div>
                         <div className="text-right">
                             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sync Status</p>
                             <p className="text-2xl font-black text-emerald-600 uppercase">Live</p>
                         </div>
                    </div>
                </div>

                {/* 2. Knowledge Terminal & FAQ Section */}
                <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
                    <div className="lg:col-span-3 bg-white rounded-[2rem] p-4 shadow-xl border border-slate-200 sticky top-28">
                        <div className="px-6 py-5 border-b border-slate-50 mb-4">
                            <h4 className="text-slate-400 font-bold uppercase text-[9px] tracking-widest">Knowledge Base</h4>
                        </div>
                        <div className="space-y-1">
                            {categories.map((cat) => (
                                <button 
                                    key={cat.id} 
                                    onClick={() => { setActiveCategory(cat.id as FaqCategory); setOpenIndex(0); }} 
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${activeCategory === cat.id ? 'bg-slate-950 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <cat.icon size={16} className={activeCategory === cat.id ? 'text-primary' : 'text-slate-300 group-hover:text-slate-900'} />
                                        <span className="text-[11px] font-bold uppercase tracking-wide">{cat.label}</span>
                                    </div>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeCategory === cat.id ? '-rotate-90 text-primary' : 'opacity-0 group-hover:opacity-100'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-9">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-200 min-h-[450px] relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.01] pointer-events-none"><Network size={400} /></div>
                            <div className="relative z-10 flex-1">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-8 mb-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-sm"><Info size={22} /></div>
                                        <div>
                                            <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight">Technical Matrix</h3>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">{categories.find(c => c.id === activeCategory)?.label}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {faqData[activeCategory].map((item, idx) => (
                                        <div key={idx} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === idx ? 'bg-slate-50/50 border-red-200 shadow-md' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
                                            <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between px-8 py-5 text-left group/item">
                                                <span className={`text-[12px] font-bold uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-red-600' : 'text-slate-700'}`}>{item.q}</span>
                                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${openIndex === idx ? 'bg-red-600 border-red-600 text-white rotate-180' : 'bg-white border-slate-100 text-slate-300 group-hover/item:text-red-600'}`}>
                                                    <ChevronDown size={12} strokeWidth={3} />
                                                </div>
                                            </button>
                                            {openIndex === idx && (
                                                <div className="px-8 pb-6 animate-fade-in-up">
                                                    <div className="text-[13px] font-medium text-slate-500 leading-relaxed bg-white p-6 rounded-xl border border-slate-100 shadow-inner">{item.a}</div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Sales Enquiry Hub - Based on User Provided Image */}
                <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden mb-12 animate-fade-in-up">
                    <div className="p-10 md:p-14 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-6 group">
                            <div className="w-16 h-16 bg-slate-900 text-primary rounded-[1.8rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <PhoneCall size={32} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tighter">Sales Enquiry</h3>
                                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-24 transition-all duration-700"></div>
                            </div>
                        </div>

                        <div className="flex-1 grid md:grid-cols-3 gap-8 md:ml-12">
                            {[
                                { title: 'For Property Owners', email: 'contactus@huntproperty.com', icon: UserCheck },
                                { title: 'For Brokers & Builders', email: 'contactus@huntproperty.com', icon: Building },
                                { title: 'For Channel Partners', email: 'channelpartner@huntproperty.com', icon: Users }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2 group/card">
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <item.icon size={14} className="group-hover/card:text-red-600 transition-colors" />
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.title}</p>
                                    </div>
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email : <a href={`mailto:${item.email}`} className="text-red-600 hover:underline">{item.email}</a></p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Still Have Questions Section - Based on User Provided Image */}
                    <div className="p-10 md:p-14 bg-slate-50/50">
                        <div className="mb-14">
                            <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">Still Have questions? Contact us on</h2>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            {/* Phone / Email Node */}
                            <div className="lg:col-span-3 flex items-start gap-6 border-r border-slate-200 pr-8">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300 border border-slate-100 shadow-sm shrink-0">
                                    <Mail size={32} strokeWidth={1} />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-display font-black text-slate-950 uppercase leading-none">Phone/Email</h4>
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-medium text-slate-500 uppercase tracking-tight">Email : <a href="mailto:contactus@huntproperty.com" className="text-red-600 hover:underline">contactus@huntproperty.com</a></p>
                                        <p className="text-[11px] font-medium text-slate-500 uppercase tracking-tight">Phone No. : <span className="text-red-600 font-bold">+91 9899 095 939</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Head Office Node */}
                            <div className="lg:col-span-4 flex items-start gap-6 border-r border-slate-200 pr-8">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300 border border-slate-100 shadow-sm shrink-0">
                                    <MapPin size={32} strokeWidth={1} />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-display font-black text-slate-950 uppercase leading-none">Head Office</h4>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-slate-600 uppercase leading-tight">Hunt Property Infratech Pvt Ltd</p>
                                        <p className="text-[11px] font-medium text-slate-500 uppercase tracking-tight leading-relaxed">
                                            3rd Floor The Homestop@104, Sector 104,<br/>
                                            Hazipur, Noida, U.P 201304
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Visualization Node */}
                            <div className="lg:col-span-5">
                                <div className="relative h-48 w-full rounded-2xl overflow-hidden border-4 border-white shadow-xl group/map">
                                    <img 
                                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                                        className="w-full h-full object-cover grayscale opacity-40 group-hover/map:grayscale-0 group-hover/map:opacity-100 transition-all duration-1000" 
                                        alt="Map Preview" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white shadow-2xl flex items-center gap-4">
                                            {/* Fix: Added missing Navigation import from lucide-react */}
                                            <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center"><Navigation size={18} /></div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-950 uppercase">The Home Stop@104</p>
                                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[9px] font-bold text-blue-600 uppercase hover:underline">View larger map</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-black text-slate-400 uppercase">Google Neural Maps</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Minimal Strips */}
                <div className="mt-24 pt-12 border-t border-slate-200 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-10">
                     <p className="text-[9px] font-black text-slate-950 uppercase tracking-[0.8em]">HUNT PROPERTY INTELLECTUAL FINANCIAL SYSTEM • V.2025</p>
                     <div className="flex flex-wrap justify-center gap-16 grayscale group-hover:grayscale-0 transition-all">
                         {[ShieldCheck, Globe, Network, Cpu, ArrowDownToLine, Landmark].map((Icon, i) => (
                             <Icon key={i} size={32} strokeWidth={1} className="text-slate-400 hover:text-red-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCareView;