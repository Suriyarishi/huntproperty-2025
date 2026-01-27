import React, { useState } from 'react';
import { 
    CheckCircle2, Minus, ArrowRight, Sparkles, 
    Zap, Globe, ShieldCheck, Mail, Phone, 
    ChevronRight, Target, Clock, Star, Users,
    LayoutGrid, Package, History, Eye, Compass,
    Gavel, Newspaper, Search, Share2, Layout,
    Network, IndianRupee, Video, MessageSquare, 
    Smartphone, FileText, Camera, Facebook, Instagram,
    Cpu, Award, Briefcase
} from 'lucide-react';

type UserClass = 'Owner' | 'Agent' | 'Builder';
type PackageTab = 'listing' | 'services';

const AdPackagesView = ({ onNavigate }: { onNavigate: (v: any) => void }) => {
    const [userClass, setUserClass] = useState<UserClass>('Owner');
    const [activeTab, setActiveTab] = useState<PackageTab>('listing');

    const pricingData: Record<UserClass, { plans: any[], rows: { label: string, key: string, icon: any }[] }> = {
        Owner: {
            plans: [
                { name: 'Metal', price: 'Free', color: 'bg-slate-500', features: { free: 'Yes', duration: '30 Days', listings: '1', photos: 'Yes', video: false, sms: false, email: false, verified: false, photoshoot: false, chat: false, desc: false, visibility: false, contact: false } },
                { name: 'Bronze', price: '₹ 730', color: 'bg-orange-700', features: { free: 'Yes', duration: '60 Days', listings: '3', photos: 'Yes', video: false, sms: false, email: false, verified: false, photoshoot: false, chat: 'Yes', desc: 'Yes', visibility: false, contact: 'Yes' } },
                { name: 'Silver', price: '₹ 1,400', color: 'bg-red-600', features: { free: 'Yes', duration: '90 Days', listings: '5', photos: 'Yes', video: false, sms: false, email: 'Yes', verified: false, photoshoot: false, chat: 'Yes', desc: 'Yes', visibility: false, contact: 'Yes' } },
                { name: 'Gold', price: '₹ 3,500', color: 'bg-amber-500', features: { free: 'Yes', duration: '120 Days', listings: '7', photos: 'Yes', video: 'Yes', sms: 'Yes', email: 'Yes', verified: false, photoshoot: false, chat: 'Yes', desc: 'Yes', visibility: false, contact: 'Yes' } },
                { name: 'Platinum', price: '₹ 5,000', color: 'bg-slate-900', features: { free: 'Yes', duration: '150 Days', listings: '9', photos: 'Yes', video: 'Yes', sms: 'Yes', email: 'Yes', verified: 'Yes', photoshoot: false, chat: 'Yes', desc: 'Yes', visibility: 'Yes', contact: 'Yes' } }
            ],
            rows: [
                { label: 'Free Posting', key: 'free', icon: Globe },
                { label: 'Duration (In Days)', key: 'duration', icon: Clock },
                { label: 'Number of Listing', key: 'listings', icon: LayoutGrid },
                { label: 'Photos Posting (Upto 5MB)', key: 'photos', icon: Camera },
                { label: 'Video Posting (Upto 5MB)', key: 'video', icon: Video },
                { label: 'SMS Alert', key: 'sms', icon: Smartphone },
                { label: 'E Mail Alert', key: 'email', icon: Mail },
                { label: 'Verified/ Premium', key: 'verified', icon: ShieldCheck },
                { label: 'Photo Shoot (On Request)', key: 'photoshoot', icon: Camera },
                { label: 'Chat Option', key: 'chat', icon: MessageSquare },
                { label: 'Property Description By Expert', key: 'desc', icon: FileText },
                { label: 'Preferential visibility in Search', key: 'visibility', icon: Eye },
                { label: 'Get Contact number of buyer', key: 'contact', icon: Phone },
            ]
        },
        Agent: {
            plans: [
                { name: 'Metal', price: 'N/A', color: 'bg-slate-500', features: {} },
                { name: 'Bronze', price: '₹ 730', color: 'bg-orange-700', features: { free: 'Yes', duration: '60 Days', listings: '2', photos: 'Yes', video: false, sms: false, email: false, verified: false, docs: false, photoshoot: false, chat: 'Yes', desc: false, visibility: false, contact: false } },
                { name: 'Silver', price: '₹ 2,000', color: 'bg-red-600', features: { free: 'Yes', duration: '90 Days', listings: '3', photos: 'Yes', video: false, sms: false, email: 'Yes', verified: false, docs: false, photoshoot: false, chat: 'Yes', desc: false, visibility: false, contact: false } },
                { name: 'Gold', price: '₹ 6,500', color: 'bg-amber-500', features: { free: 'Yes', duration: '120 Days', listings: '4', photos: 'Yes', video: 'Yes', sms: 'Yes', email: 'Yes', verified: false, docs: false, photoshoot: false, chat: 'Yes', desc: false, visibility: false, contact: '1000' } },
                { name: 'Platinum', price: '₹ 9,500', color: 'bg-slate-900', features: { free: 'Yes', duration: '150 Days', listings: '4', photos: 'Yes', video: 'Yes', sms: 'Yes', email: 'Yes', verified: 'Yes', docs: 'Yes', photoshoot: false, chat: 'Yes', desc: 'Yes', visibility: 'Yes', contact: '1000' } }
            ],
            rows: [
                { label: 'Free Posting', key: 'free', icon: Globe },
                { label: 'Duration (In Days)', key: 'duration', icon: Clock },
                { label: 'Number of Listing', key: 'listings', icon: LayoutGrid },
                { label: 'Photos Posting (Upto 5MB)', key: 'photos', icon: Camera },
                { label: 'Video Posting (Upto 5MB)', key: 'video', icon: Video },
                { label: 'SMS Alert', key: 'sms', icon: Smartphone },
                { label: 'E Mail Alert', key: 'email', icon: Mail },
                { label: 'Verified/ Premium', key: 'verified', icon: ShieldCheck },
                { label: 'Property Documents Upload', key: 'docs', icon: FileText },
                { label: 'Photo Shoot (On Request)', key: 'photoshoot', icon: Camera },
                { label: 'Chat Option', key: 'chat', icon: MessageSquare },
                { label: 'Property Description By Expert', key: 'desc', icon: FileText },
                { label: 'Preferential visibility in Search', key: 'visibility', icon: Eye },
                { label: 'Get Contact number of buyer', key: 'contact', icon: Phone },
            ]
        },
        Builder: {
            plans: [
                { name: 'Metal', price: 'N/A', color: 'bg-slate-500', features: {} },
                { name: 'Bronze', price: '₹ 1,65,000', color: 'bg-orange-700', features: { consultancy: false, sms_pack: '500000', email_pack: '500000', design: 'Yes', page: 'Yes', showcase: 'Yes', writing: 'Yes', photo: 'Yes', video: false, digital: 'Yes', fb: 'Yes', insta: 'Yes', duration: '30', listings: '1', lead: false, mail: 'Yes', sms: 'Yes', banner: false } },
                { name: 'Silver', price: '₹ 2,00,000', color: 'bg-red-600', features: { consultancy: false, sms_pack: '500000', email_pack: '500000', design: 'Yes', page: 'Yes', showcase: 'Yes', writing: 'Yes', photo: 'Yes', video: 'Yes', digital: 'Yes', fb: 'Yes', insta: 'Yes', duration: '30', listings: '1', lead: '1000', mail: 'Yes', sms: 'Yes', banner: false } },
                { name: 'Gold', price: '₹ 3,50,000', color: 'bg-amber-500', features: { consultancy: false, sms_pack: '1000000', email_pack: '1000000', design: 'Yes', page: 'Yes', showcase: 'Yes', writing: 'Yes', photo: false, video: 'Yes', digital: 'Yes', fb: 'Yes', insta: 'Yes', duration: '30', listings: '1', lead: '1000', mail: 'Yes', sms: 'Yes', banner: 'Yes' } },
                { name: 'Platinum', price: '₹ 5,00,000', color: 'bg-slate-900', features: { consultancy: false, sms_pack: '2000000', email_pack: '2000000', design: 'Yes', page: 'Yes', showcase: 'Yes', writing: 'Yes', photo: 'Yes', video: 'Yes', digital: 'Yes', fb: 'Yes', insta: 'Yes', duration: '30', listings: '1', lead: '1000', mail: 'Yes', sms: 'Yes', banner: 'Yes' } }
            ],
            rows: [
                // Fix: added missing Briefcase icon from lucide-react
                { label: 'Project Consultancy', key: 'consultancy', icon: Briefcase },
                { label: 'Insta SMS Booster Pack', key: 'sms_pack', icon: Zap },
                { label: 'Insta E Mail Booster Pack', key: 'email_pack', icon: Mail },
                { label: 'Property Page Design By Expert', key: 'design', icon: Layout },
                { label: 'Dedicated Page on Hunt Priority Site', key: 'page', icon: Globe },
                { label: 'Property Showcase in top search', key: 'showcase', icon: Target },
                { label: 'Content Writing by Expert', key: 'writing', icon: FileText },
                { label: 'Photo Shoot', key: 'photo', icon: Camera },
                { label: 'Video Shoot', key: 'video', icon: Video },
                { label: 'Digital Marketing Pack', key: 'digital', icon: Share2 },
                { label: 'Facebook Campaign', key: 'fb', icon: Facebook },
                { label: 'Instagram Campaign', key: 'insta', icon: Instagram },
                { label: 'Duration', key: 'duration', icon: Clock },
                { label: 'Number of Projects Listing', key: 'listings', icon: LayoutGrid },
                { label: 'Lead Alert', key: 'lead', icon: Zap },
                { label: 'Intimation By Mail', key: 'mail', icon: Mail },
                { label: 'Intimation By SMS', key: 'sms', icon: Smartphone },
                { label: 'Banner Advertisement', key: 'banner', icon: Newspaper },
            ]
        }
    };

    const moreServices = [
        { title: 'Hunt Vastu Consultancy', desc: 'Neural AI scan for energy harmony and spatial optimization.', icon: Compass },
        { title: 'Advice Legal Expert', desc: 'Secure legal framework validation and document verification.', icon: Gavel },
        { title: 'Insta SMS Booster Pack', desc: 'High-velocity lead acquisition via targeted SMS broadcasts.', icon: Zap },
        { title: 'Insta E Mail Booster Pack', desc: 'Digital marketing protocol for massive asset exposure.', icon: Mail },
        { title: 'Property Page Design By Expert', desc: 'Bespoke UI/UX for your property node presentation.', icon: Layout },
        { title: 'Digital Marketing Pack', desc: 'Full spectrum social and search engine synchronization.', icon: Share2 },
        { title: 'Advertise with Us', desc: 'Mainframe priority listing for maximum node traffic.', icon: Newspaper },
        { title: 'Property Showcase in top search', desc: 'Search engine dominance for your architectural assets.', icon: Search },
    ];

    const currentData = pricingData[userClass];

    return (
        <div className="min-h-screen bg-[#F1F5F9] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6">
                
                {/* 1. Futuristic Header Hub */}
                <div className="text-center space-y-8 mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-slate-900 text-primary border border-white/10 text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                        <Cpu size={16} className="animate-pulse" /> Commercial Exposure Matrix v.2025
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-slate-950 uppercase tracking-tighter leading-[0.85]">
                        Listing <span className="text-emerald-600 italic">Packages</span>
                    </h1>
                    <p className="text-slate-500 text-2xl font-medium italic opacity-80 max-w-4xl mx-auto leading-relaxed">
                        "Deploy high-fidelity advertising protocols to maximize transaction velocity across the urban property grid."
                    </p>
                </div>

                {/* 2. Tier Selection Hub */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 animate-fade-in-up delay-100">
                    <div className="flex bg-white/70 backdrop-blur-xl p-2 rounded-[2.5rem] border border-white/60 shadow-xl ring-8 ring-slate-100/50">
                        {(['Owner', 'Agent', 'Builder'] as UserClass[]).map(v => (
                            <button 
                                key={v}
                                onClick={() => setUserClass(v)}
                                className={`px-10 py-4 rounded-[2rem] text-xs font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-3 ${userClass === v ? 'bg-slate-950 text-white shadow-2xl scale-[1.05]' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
                            >
                                <Users size={16} /> I'm {v}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-4 p-2 bg-slate-950/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                        <button 
                            onClick={() => setActiveTab('listing')}
                            className={`px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'listing' ? 'bg-primary text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}
                        >
                            Listing Packages
                        </button>
                        <button 
                            onClick={() => setActiveTab('services')}
                            className={`px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'services' ? 'bg-primary text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}
                        >
                            More Services
                        </button>
                    </div>
                </div>

                {/* 3. Main Logic Hub */}
                <div className="animate-fade-in-up delay-200">
                    {activeTab === 'listing' ? (
                        <div className="bg-white rounded-[4rem] border border-slate-200 shadow-[0_50px_150px_-30px_rgba(0,0,0,0.1)] overflow-hidden">
                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="px-10 py-12 text-left text-[12px] font-black uppercase tracking-[0.4em] text-slate-400 bg-white min-w-[320px] sticky left-0 z-20">Exposure Parameter Matrix</th>
                                            {currentData.plans.map(p => (
                                                <th key={p.name} className={`px-6 py-12 min-w-[160px] text-white ${p.color} border-x border-white/10 relative overflow-hidden group`}>
                                                    <div className="absolute inset-0 bg-white/5 group-hover:translate-y-full transition-transform duration-1000"></div>
                                                    <h4 className="text-2xl font-black uppercase tracking-tighter relative z-10">{p.name}</h4>
                                                    <p className="text-[11px] font-black text-white/50 uppercase tracking-[0.3em] mt-3 relative z-10">{p.price}</p>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {currentData.rows.map((row) => (
                                            <tr key={row.label} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-10 py-8 text-left border-r border-slate-100 bg-white sticky left-0 z-10 shadow-[10px_0_20px_rgba(0,0,0,0.02)]">
                                                    <div className="flex items-center gap-4">
                                                        <div className="p-2 bg-slate-50 rounded-lg text-slate-300">
                                                            <row.icon size={16} />
                                                        </div>
                                                        <span className="text-[11px] font-black uppercase text-slate-900 tracking-tight">{row.label}</span>
                                                    </div>
                                                </td>
                                                {currentData.plans.map(p => {
                                                    if (p.price === 'N/A') return (
                                                        <td key={p.name} className="px-6 py-8 border-x border-slate-100 bg-slate-50/50">
                                                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic">NOT AVAILABLE</span>
                                                        </td>
                                                    );

                                                    const val = p.features[row.key];
                                                    const isBool = typeof val === 'boolean';
                                                    
                                                    return (
                                                        <td key={p.name} className="px-6 py-8 border-x border-slate-100">
                                                            {isBool ? (
                                                                val ? (
                                                                    <div className="flex justify-center">
                                                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                                                                            <CheckCircle2 size={20} />
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex justify-center">
                                                                        <Minus size={20} className="text-slate-100" />
                                                                    </div>
                                                                )
                                                            ) : (
                                                                <span className="text-[13px] font-display font-black text-slate-950 uppercase tracking-tight">
                                                                    {val || '-'}
                                                                </span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                        <tr className="bg-slate-950 border-t-8 border-emerald-500/20">
                                            <td className="px-10 py-14 text-left border-r border-white/5 bg-slate-950 sticky left-0 z-10">
                                                <span className="text-[11px] font-black uppercase text-primary tracking-[0.4em] flex items-center gap-3">
                                                    <Zap size={14} className="fill-primary" /> Transmit Signal
                                                </span>
                                            </td>
                                            {currentData.plans.map(p => (
                                                <td key={p.name} className="px-6 py-14 border-x border-white/5">
                                                    {p.price !== 'N/A' ? (
                                                        <div className="space-y-5">
                                                            <div className="text-xl font-display font-black text-white tracking-tighter leading-none">{p.price}</div>
                                                            <button className="w-full py-4 bg-primary text-slate-950 rounded-[1.2rem] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:shadow-[0_0_40px_#2FED9A66] transition-all active:scale-95 shadow-xl">PROCEED</button>
                                                        </div>
                                                    ) : (
                                                        <div className="opacity-20 flex flex-col items-center gap-3">
                                                            <Minus size={24} className="text-slate-400" />
                                                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Protocol Offline</span>
                                                        </div>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {moreServices.map(service => (
                                <div key={service.title} className="bg-white border-2 border-slate-100 rounded-[3.5rem] p-10 hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-700 group relative overflow-hidden flex flex-col justify-between min-h-[400px] shadow-sm">
                                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50 rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000 flex items-center justify-center">
                                        <service.icon size={120} className="text-slate-200 group-hover:text-emerald-500 transition-all opacity-10 group-hover:opacity-30" />
                                    </div>
                                    <div className="space-y-8 relative z-10">
                                        <div className="w-16 h-16 bg-slate-950 text-primary rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform ring-4 ring-primary/5">
                                            <service.icon size={28}/>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-slate-950 leading-none pr-12">{service.title}</h3>
                                            <div className="w-12 h-1.5 bg-emerald-500/30 rounded-full group-hover:w-24 transition-all duration-700"></div>
                                        </div>
                                        <p className="text-[14px] font-medium text-slate-500 leading-relaxed italic">"{service.desc}"</p>
                                    </div>
                                    <button className="relative z-10 w-full py-5 bg-white border-2 border-red-600 text-red-600 rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4 group/btn">
                                        INITIALIZE HUB <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 4. Infrastructure Support Hub */}
                <div className="mt-24 bg-slate-950 rounded-[5rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-center gap-20 text-white shadow-2xl relative overflow-hidden ring-8 ring-emerald-500/5 group/footer">
                    <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none group-hover/footer:scale-110 transition-transform duration-[10000ms]">
                        <Network size={600} />
                    </div>
                    <div className="text-center lg:text-left space-y-6 max-w-sm relative z-10">
                        <h4 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none">Need Bespoke <br/> <span className="text-primary">Intelligence?</span></h4>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed italic border-l-2 border-primary/20 pl-8">"Our tactical agents can define custom ad nodes for enterprise scale requirements."</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 relative z-10">
                        <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-20 h-20 bg-white/5 rounded-[2.2rem] flex items-center justify-center text-primary border border-white/10 shadow-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <Phone size={32} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">Signal Uplink</p>
                                <p className="text-4xl font-display font-black tracking-tighter">8588 002009</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-20 h-20 bg-white/5 rounded-[2.2rem] flex items-center justify-center text-red-500 border border-white/10 shadow-2xl group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-500">
                                <Mail size={32} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">Registry Support</p>
                                <p className="text-4xl font-display font-black tracking-tighter uppercase">INFO@HUNTPROPERTY.COM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Validation Strip */}
                <div className="mt-32 pt-16 border-t border-slate-200 opacity-20 hover:opacity-50 transition-all duration-1000 text-center space-y-12">
                     <p className="text-[11px] font-black text-slate-950 uppercase tracking-[1em]">SECURED EXPOSURE NETWORK • HUNT PROPERTY SYSTEM</p>
                     <div className="flex flex-wrap justify-center gap-24">
                         {[ShieldCheck, Globe, Network, Cpu, IndianRupee, Award].map((Icon, i) => (
                             <Icon key={i} size={40} strokeWidth={1} className="text-slate-400 hover:text-emerald-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AdPackagesView;