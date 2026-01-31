import React, { useState, useEffect } from 'react';
import { 
    Shield, ShieldCheck, Fingerprint, Eye, Lock, 
    Globe, Network, Cpu, Landmark, UserCheck, 
    ChevronRight, List, Info, Activity, Scale,
    HardDrive, Mail, Phone, ExternalLink, Zap,
    Gavel, FileSignature, AlertCircle, CheckCircle2,
    Cookie, BarChart3, Users, CreditCard, Ban,
    Receipt, History, XCircle, MapPin
} from 'lucide-react';

const PrivacyPolicyView = () => {
    const [activeSection, setActiveSection] = useState('section-1');

    const sections = [
        { id: 'section-1', title: '1. General' },
        { id: 'section-2', title: '2. Collection of Information' },
        { id: 'section-3', title: '3. Cookies & Security' },
        { id: 'section-4', title: '4. Third-Party Advertisers' },
        { id: 'section-5', title: '5. Analytics & Tracking' },
        { id: 'section-6', title: '6. Use of Information' },
        { id: 'section-7', title: '7. Sharing of Information' },
        { id: 'section-8', title: '8. Security' },
        { id: 'section-9', title: '9. Users’ Consent' },
        { id: 'section-10', title: '10. Dispute & Jurisdiction' },
        { id: 'section-11', title: '11. Definitions' },
        { id: 'section-12', title: '12. Contract' },
        { id: 'section-13', title: '13. User Obligations' },
        { id: 'section-14', title: '14. Termination of Service' },
        { id: 'section-15', title: '15. Charges & Payments' },
        { id: 'section-16', title: '16. Refund Policy' },
        { id: 'section-17', title: '17. Payment Security' },
        { id: 'section-18', title: '18. Cancellation' }
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-40 font-sans selection:bg-slate-900 selection:text-white">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-16">
                
                {/* Minimal 2025 Header */}
                <div className="max-w-4xl mb-24 space-y-8 animate-fade-in-up">
                    <div className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">
                        <ShieldCheck size={14} className="text-emerald-500" />
                        Trust & Transparency Protocol
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-black text-slate-950 tracking-tighter leading-none">
                        Privacy <br/>
                        <span className="text-slate-400 italic">Governance</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-100 pl-8 italic">
                        "Defining the ethical data frameworks and security standards that protect your digital identity within the Hunt Property ecosystem."
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-20">
                    
                    {/* Minimalist Sticky Navigation */}
                    <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit border-l border-slate-100 pl-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Directory Nodes</p>
                            {sections.map((s) => (
                                <button 
                                    key={s.id} 
                                    onClick={() => scrollTo(s.id)}
                                    className={`w-full text-left py-2 px-4 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${activeSection === s.id ? 'bg-slate-950 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
                                >
                                    {s.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-9 max-w-4xl space-y-32">
                        
                        {/* 1. General */}
                        <section id="section-1" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">1. General</h2>
                                <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                            </div>
                            <div className="text-lg leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p>This Privacy Policy is governed by the Information Technology Act, 2000 and related rules.</p>
                                <p>The website <span className="text-slate-950 font-bold">huntproperty.com</span> is owned and operated by Catalyst E Pages Pvt. Ltd.</p>
                                <p>“User / Subscriber” refers to anyone accessing or using the website.</p>
                                <p>By using the website, the user agrees to all terms, conditions, and policies. This policy forms a legally binding agreement between the User and the Service Provider.</p>
                            </div>
                        </section>

                        {/* 2. Collection */}
                        <section id="section-2" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">2. Collection of Personal & Other Information</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-12">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">The website collects personal details such as:</h4>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {['Name, email, phone number, address', 'Property details uploaded by users', 'Messages, reviews, feedback, and enquiries'].map(item => (
                                            <li key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-slate-900 font-bold text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Information is collected when users:</h4>
                                    <ul className="space-y-3">
                                        {['Register, post properties, contact sellers/agents', 'Subscribe to services or promotions', 'Submit reviews or feedback'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <ChevronRight size={14} className="text-slate-300" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4 border-t border-slate-100 pt-8">
                                    <p className="font-bold text-slate-900 italic">The website may automatically collect IP address, browser type, device info, and browsing behavior.</p>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Collected data is used for:</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {['Improving user experience', 'Customer support', 'Service personalization', 'Legal or regulatory purposes'].map(p => (
                                            <span key={p} className="px-4 py-2 border border-slate-200 rounded-full text-[11px] font-black uppercase text-slate-500 tracking-wider">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Cookies */}
                        <section id="section-3" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">3. Cookies & Security</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Cookies are used to:</p>
                                <ul className="grid md:grid-cols-3 gap-6">
                                    {['Improve website functionality', 'Analyze traffic and user behavior', 'Deliver relevant advertisements'].map(c => (
                                        <li key={c} className="p-6 border border-slate-100 rounded-2xl flex flex-col gap-4">
                                            <Cookie size={20} className="text-slate-300" />
                                            <span className="text-slate-900 font-bold leading-tight">{c}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="pt-6 italic border-l-2 border-slate-100 pl-6">Users can disable cookies through browser settings, but some features may not work properly. Temporary and permanent cookies may be used.</p>
                            </div>
                        </section>

                        {/* 4. Third-Party Advertisers */}
                        <section id="section-4" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">4. Third-Party Advertisers</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-4 font-medium">
                                <p>Third-party ad networks may display ads on the website. These advertisers may use cookies or tracking tools.</p>
                                <p className="text-red-600 font-bold">The website is not responsible for third-party privacy practices. Users should review third-party privacy policies separately.</p>
                            </div>
                        </section>

                        {/* 5. Analytics */}
                        <section id="section-5" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">5. Third-Party Analytics & Tracking Pixels</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p>Tools like Google Analytics are used to track website usage and analyze visitor behavior.</p>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-6">
                                    <BarChart3 className="text-slate-300 shrink-0" size={32} />
                                    <div className="space-y-2">
                                        <p className="text-slate-900 font-bold uppercase text-xs tracking-wider">Tracking pixels and cookies help measure:</p>
                                        <p className="text-slate-500 italic">Traffic sources and marketing performance.</p>
                                    </div>
                                </div>
                                <p className="text-xs font-black uppercase text-slate-400 tracking-widest text-center py-4">Users may opt out by changing browser settings.</p>
                            </div>
                        </section>

                        {/* 6. Use of Info */}
                        <section id="section-6" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">6. Use of Information</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Information is used to:</p>
                                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        'Provide and improve services',
                                        'Process transactions',
                                        'Communicate offers, updates, and notifications',
                                        'Conduct research and analytics'
                                    ].map(item => (
                                        <li key={item} className="border-b border-slate-50 pb-4 flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                                            <span className="text-slate-900 font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="pt-8 text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                                    <ShieldCheck size={16} /> Data is used only for legitimate business purposes.
                                </p>
                            </div>
                        </section>

                        {/* 7. Sharing */}
                        <section id="section-7" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">7. Revealing / Sharing of Personal Information</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Personal data may be shared:</p>
                                <div className="space-y-4">
                                    {[
                                        'With affiliates and service partners for business operations',
                                        'With legal authorities if required by law',
                                        'During mergers, acquisitions, or asset transfers',
                                        'With advertisers or analytics partners (non-personal or aggregated data)'
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 p-6 border border-slate-100 rounded-2xl group hover:border-slate-950 transition-colors">
                                            <span className="text-slate-300 font-black group-hover:text-slate-950 transition-colors">0{i+1}</span>
                                            <p className="text-slate-700">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 8. Security */}
                        <section id="section-8" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">8. Security</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <div className="p-12 bg-slate-950 text-white rounded-[3rem] space-y-6 relative overflow-hidden group">
                                    <Lock className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000" size={200} />
                                    <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Cryptographic Integrity</h4>
                                    <p className="text-xl italic leading-relaxed">
                                        "Reasonable security measures are used to protect user data. However, complete security cannot be guaranteed due to internet limitations."
                                    </p>
                                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest border-t border-white/10 pt-6 flex items-center gap-2">
                                        <AlertCircle size={14} className="text-red-500" /> Users are responsible for safeguarding their login credentials.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 9. Consent */}
                        <section id="section-9" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">9. Users’ Consent</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p>By using the website, users consent to data collection and usage as per this policy.</p>
                                <p className="font-black text-slate-950 uppercase tracking-wide border-b-2 border-slate-950 w-fit pb-1">Continued usage implies acceptance of any future updates to the policy.</p>
                            </div>
                        </section>

                        {/* 10. Dispute */}
                        <section id="section-10" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">10. Dispute Resolution & Jurisdiction</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-12">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-8 border border-slate-100 rounded-[2rem] space-y-4">
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Step 01</h5>
                                        <p className="text-slate-900 font-black text-xl uppercase tracking-tighter">Mediation</p>
                                        <p className="text-sm font-medium text-slate-500">Amicable settlement via institutional dialogue.</p>
                                    </div>
                                    <div className="p-8 border border-slate-100 rounded-[2rem] space-y-4">
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Step 02</h5>
                                        <p className="text-slate-900 font-black text-xl uppercase tracking-tighter">Arbitration</p>
                                        <p className="text-sm font-medium text-slate-500">Enforced if mediation fails to resolve conflicts.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem]">
                                    <MapPin className="text-red-600 shrink-0" size={24} />
                                    <p className="text-sm font-black uppercase tracking-widest text-slate-950">Jurisdiction lies exclusively with courts in Uttar Pradesh, India.</p>
                                </div>
                            </div>
                        </section>

                        {/* 11. Definitions */}
                        <section id="section-11" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">11. Definitions (Key Terms)</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="divide-y divide-slate-100 border-y border-slate-100">
                                {[
                                    { k: 'Website', v: 'huntproperty.com' },
                                    { k: 'Service Provider', v: 'Catalyst E Pages Pvt. Ltd.' },
                                    { k: 'User / Client', v: 'Anyone accessing or using services' },
                                    { k: 'Content', v: 'Property details, images, listings, data' },
                                    { k: 'Subscription / Membership', v: 'Paid services offered on the platform' }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center py-6 gap-2 sm:gap-12 group">
                                        <span className="w-48 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-950 transition-colors">{item.k}</span>
                                        <span className="text-slate-900 font-bold uppercase tracking-tight">{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 12. Contract */}
                        <section id="section-12" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">12. Contract</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <div className="p-10 border-2 border-slate-100 rounded-[3rem] space-y-8">
                                    <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-widest">A contract is formed when:</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-6">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 font-black text-xs border border-slate-100">A</div>
                                            <p className="text-slate-900 font-bold uppercase text-sm">User submits an online subscription</p>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 font-black text-xs border border-slate-100">B</div>
                                            <p className="text-slate-900 font-bold uppercase text-sm">User signs a physical subscription order</p>
                                        </div>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-widest text-red-600 pt-4 border-t border-slate-50">The company may suspend or terminate services if terms are violated.</p>
                                </div>
                            </div>
                        </section>

                        {/* 13. Obligations */}
                        <section id="section-13" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">13. User Obligations</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-8 font-medium">
                                <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Users must:</p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        'Provide accurate and lawful information',
                                        'Own or be authorized to post property listings',
                                        'Avoid misleading, illegal, or offensive content',
                                        'Comply with all applicable laws and regulations'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
                                            <p className="text-slate-950 font-bold uppercase text-xs leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 14. Suspension */}
                        <section id="section-14" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">14. Suspension or Termination of Service</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Services may be suspended or terminated if:</p>
                                <div className="space-y-4">
                                    {['User violates terms', 'False or illegal content is posted', 'Non-payment or misuse occurs'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-50">
                                            <Ban size={14} className="text-red-500" />
                                            <span className="text-slate-900 font-bold uppercase text-sm tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 15. Charges */}
                        <section id="section-15" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">15. Charges & Payments</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-8 bg-slate-50 rounded-[2rem] text-center space-y-3">
                                        <Globe size={24} className="mx-auto text-slate-400" />
                                        <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-900">Browsing</h5>
                                        <p className="text-slate-500 text-xs italic">Free Node Access</p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-[2rem] text-center space-y-3">
                                        <Receipt size={24} className="mx-auto text-slate-400" />
                                        <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-900">Paid Plans</h5>
                                        <p className="text-slate-500 text-xs italic">Subscription Logic</p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-[2rem] text-center space-y-3">
                                        <AlertCircle size={24} className="mx-auto text-slate-400" />
                                        <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-900">Price Drift</h5>
                                        <p className="text-slate-500 text-xs italic">Notice via Pulse</p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-slate-500 pt-4">Website browsing is free. Paid services are charged as per subscription plans. Prices may change with prior notice.</p>
                            </div>
                        </section>

                        {/* 16. Refund */}
                        <section id="section-16" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">16. Refund Policy</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p>Refunds (if applicable) are processed after verification. Processing may take up to 21 days.</p>
                                <p className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-600"></div> Certain fees (activation/admin) may be non-refundable.
                                </p>
                            </div>
                        </section>

                        {/* 17. Payment Sec */}
                        <section id="section-17" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">17. Payment Security</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-8 font-medium">
                                <div className="p-10 border-2 border-slate-100 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
                                    <div className="w-20 h-20 bg-slate-950 text-primary rounded-3xl flex items-center justify-center shrink-0">
                                        <CreditCard size={36} />
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-slate-950 font-black text-xl uppercase tracking-tighter leading-none">Online payments are processed via secure gateways.</p>
                                        <p className="text-slate-500 italic">The company does not store card or banking details locally within the system registry.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 18. Cancellation */}
                        <section id="section-18" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">18. Cancellation</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 space-y-6 font-medium">
                                <p>Cancellation charges may apply as per policy. Government taxes once paid are non-refundable.</p>
                            </div>
                        </section>

                        {/* Minimal Validation Footer */}
                        <div className="pt-24 border-t border-slate-100 text-center space-y-10 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-6 py-2 border border-slate-200 text-slate-950 rounded-full group">
                                <FileSignature size={14} className="text-slate-400 group-hover:text-red-600 transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Node Validated v.2025.10.12</span>
                            </div>
                            <p className="text-slate-300 text-[10px] font-bold italic max-w-lg mx-auto leading-relaxed uppercase tracking-widest">
                                "Continuous usage of the Hunt Property grid constitutes persistent agreement to this Privacy Protocol."
                            </p>
                        </div>

                    </div>
                </div>

                {/* Registry Strip */}
                <div className="mt-40 pt-20 border-t border-slate-200 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-16 group/strip">
                     <p className="text-[10px] font-black text-slate-950 uppercase tracking-[1.4em] group-hover:tracking-[1.6em] transition-all duration-1000">HUNT PROPERTY INTELLECTUAL DEFENSE • v.2025</p>
                     <div className="flex flex-wrap justify-center gap-24 grayscale group-hover:grayscale-0 transition-all duration-1000">
                         {[ShieldCheck, Globe, Network, Cpu, Landmark, Fingerprint, Lock].map((Icon, i) => (
                             <Icon key={i} size={32} strokeWidth={1} className="text-slate-400 hover:text-red-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyView;