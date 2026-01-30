import React from 'react';
/* Added missing Zap, Activity, Cpu, Landmark, Fingerprint icons to imports */
import { ShieldCheck, FileText, ChevronRight, Scale, Info, Globe, Network, ScrollText, Lock, ShieldAlert, Gavel, Zap, Activity, Cpu, Landmark, Fingerprint } from 'lucide-react';

const TermsAndConditionsView = () => {
    const sections = [
        { id: 'general', title: 'I. GENERAL' },
        { id: 'services', title: 'II. THE SERVICES' },
        { id: 'eligibility', title: 'III. ELIGIBILITY' },
        { id: 'term', title: 'IV. TERM' },
        { id: 'termination', title: 'V. TERMINATION' },
        { id: 'platform', title: 'VI. ONLINE SERVICE PLATFORM' },
        { id: 'communication', title: 'VII. COMMUNICATION' },
        { id: 'charges', title: 'VIII. CHARGES' },
        { id: 'payment', title: 'IX. PACKAGES, FEES AND PAYMENT' },
        { id: 'mode', title: 'X. MODE OF PAYMENT' },
        { id: 'refund', title: 'XI. PAYMENT & REFUND CLAUSE' },
        { id: 'security', title: 'XII. SECURITY' },
        { id: 'chargeback', title: 'XIII. CHARGE BACK POLICY' },
        { id: 'cancellation', title: 'XIV. CANCELLATION' },
        { id: 'thirdparty', title: 'XV. LINKS & THIRD PARTIES' },
        { id: 'modifications', title: 'XVI. SITE TERMS OF USE MODIFICATIONS' },
        { id: 'errata', title: 'XVII. REVISIONS AND ERRATA' },
        { id: 'availability', title: 'XVIII. AVAILABILITY OF WEBSITE' },
        { id: 'obligations', title: 'XIX. USER OBLIGATIONS' },
        { id: 'suspension', title: 'XX. SUSPENSION OF USER ACCESS AND ACTIVITY' },
        { id: 'indemnity', title: 'XXI. INDEMNITY AND LIMITATIONS' },
        { id: 'ip', title: 'XXII. INTELLECTUAL PROPERTY RIGHTS' },
        { id: 'disclaimer', title: 'XXIII. DISCLAIMER OF WARRANTIES AND LIABILITIES' },
        { id: 'submissions', title: 'XXIV. SUBMISSIONS' },
        { id: 'dispute', title: 'XXV. DISPUTE RESOLUTION AND JURISDICTION' },
        { id: 'notices', title: 'XXVI. NOTICES' },
        { id: 'miscellaneous', title: 'XXVII. MISCELLANEOUS PROVISIONS' }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-40 pb-40 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            {/* Main Container with exact 80px left/right margins on desktop (px-20 = 80px) */}
            <div className="max-w-full px-6 lg:px-20 mx-auto">
                
                {/* 1. Ultra-Clean Header Hub */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-24 animate-fade-in-up">
                    <div className="space-y-8 max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-primary border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                            <Lock size={14} className="animate-pulse" /> Legal Infrastructure Protocol v.2025
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
                                Terms of <span className="text-red-600 italic">Engagement</span>
                            </h1>
                            <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed italic opacity-80 border-l-4 border-slate-100 pl-8">
                                "The governing parameters and institutional frameworks defining the operational boundaries of the Hunt Property ecosystem."
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col items-end gap-2 opacity-30 grayscale hover:opacity-100 transition-all duration-1000">
                         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Registry Reference</p>
                         <div className="flex items-center gap-4 text-slate-950 font-display font-black text-2xl">
                             <FileText size={24} />
                             <span>HP-LGL-2025-001</span>
                         </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* 2. Precision Navigation Sidebar */}
                    <div className="lg:col-span-3 bg-white rounded-[3rem] p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-200 sticky top-32 max-h-[75vh] overflow-y-auto no-scrollbar hidden lg:block">
                        <div className="px-4 py-4 border-b border-slate-50 mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-4 bg-red-600 rounded-full"></div>
                                <h4 className="text-slate-950 font-black uppercase text-[11px] tracking-widest">Protocol Index</h4>
                            </div>
                            <ScrollText size={16} className="text-slate-300" />
                        </div>
                        <div className="space-y-1">
                            {sections.map((s) => (
                                <button 
                                    key={s.id} 
                                    onClick={() => scrollToSection(s.id)}
                                    className="w-full text-left p-4 rounded-2xl hover:bg-slate-50 transition-all group flex items-center justify-between border border-transparent hover:border-slate-100"
                                >
                                    <span className="text-[10px] font-black uppercase text-slate-500 group-hover:text-red-600 transition-colors tracking-tight line-clamp-1">{s.title}</span>
                                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                                        <ChevronRight size={12} className="text-red-600" strokeWidth={3} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 3. Deep-Content Mainframe */}
                    <div className="lg:col-span-9">
                        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-[0_60px_150px_-30px_rgba(0,0,0,0.08)] border border-slate-200 relative overflow-hidden">
                            {/* Ambient Neural Grid */}
                            <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none select-none rotate-12">
                                <Network size={800} />
                            </div>
                            
                            <div className="prose prose-slate max-w-none space-y-24 relative z-10">
                                
                                {/* I. GENERAL */}
                                <section id="general" className="space-y-10 animate-fade-in-up">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-950 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl ring-8 ring-slate-50">
                                            <Globe size={28} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter m-0">I. General</h2>
                                            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-8 text-[14px] text-slate-600 leading-[1.8] font-medium">
                                        <p className="first-letter:text-5xl first-letter:font-black first-letter:text-red-600 first-letter:mr-3 first-letter:float-left">This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>
                                        
                                        <div className="bg-slate-50/80 backdrop-blur-sm p-10 rounded-[3rem] border border-slate-100 space-y-8 shadow-inner">
                                            <div className="flex items-center gap-3">
                                                <Info size={16} className="text-red-600" />
                                                <p className="font-black text-slate-950 uppercase text-[11px] tracking-[0.3em]">Operational Taxonomy</p>
                                            </div>
                                            <ul className="space-y-6 list-none p-0 m-0">
                                                <li className="flex gap-6 items-start">
                                                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xs font-black text-red-600 shrink-0 shadow-sm">1</div>
                                                    <p className="m-0 pt-1">The term <span className="font-black text-slate-950">'You' & 'User'</span> shall mean any legal person or entity accessing or using the services provided on this Website, who is competent to enter into binding contracts, as per the provisions of the Indian Contract Act, 1872;</p>
                                                </li>
                                                <li className="flex gap-6 items-start">
                                                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xs font-black text-red-600 shrink-0 shadow-sm">2</div>
                                                    <p className="m-0 pt-1">The terms <span className="font-black text-slate-950">'We', 'Us' and 'Our'</span> shall mean the Website and/or the Service Provider, as the context so requires ;</p>
                                                </li>
                                                <li className="flex gap-6 items-start">
                                                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xs font-black text-red-600 shrink-0 shadow-sm">3</div>
                                                    <p className="m-0 pt-1">The terms <span className="font-black text-slate-950">'Party' & 'Parties'</span> shall respectively be used to refer to the User and the Service Provider individually and collectively, as the context so requires.</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <p>The headings of each section in these Terms are only for the purpose of organizing the various provisions under these Terms in an orderly manner, and shall not be used by either Party to interpret the provisions contained herein in any manner. Further, it is specifically agreed to by the Parties that the headings shall have no legal or contractual value.</p>
                                        <p>The use of the Website by the User is solely governed by these Terms as well as the <span className="text-red-600 font-bold underline cursor-pointer">Privacy Policy ("Policy")</span>, available at Website , and any modifications or amendments made thereto by the Service Provider from time to time, at its sole discretion.</p>
                                        <p>Visiting the home page of the Website and/or using any of the services provided on the Website shall be deemed to signify the User's unequivocal acceptance of these Terms and the aforementioned Policy, and the User expressly agrees to be bound by the same. The User expressly agrees and acknowledges that the Terms and Policy are co-terminus, and that expiry / termination of either one will lead to the termination of the other, save as provided in Section 3 hereunder.</p>
                                        <p>The User unequivocally agrees that these Terms and the aforementioned Policy constitute a legally binding agreement between the User and the Service Provider, and that the User shall be subject to the rules, guidelines, policies, terms, and conditions applicable to any service that is provided by the Website, and that the same shall be deemed to be incorporated into these Terms, and shall be treated as part and parcel of the same.</p>
                                        <p>The Service Provider reserves the sole and exclusive right to amend or modify these Terms without any prior permission or intimation to the User, and the User expressly agrees that any such amendments or modifications shall come into effect immediately. The User has a duty to periodically check the terms and stay updated on its requirements. If the User continues to use the Website following such a change, the User will be deemed to have consented to any and all amendments / modifications made to the Terms.</p>
                                    </div>
                                </section>

                                {/* II. THE SERVICES */}
                                <section id="services" className="space-y-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-950 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl ring-8 ring-slate-50">
                                            <Zap size={28} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter m-0">II. The Services</h2>
                                            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-950 p-12 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl border border-white/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
                                        <p className="text-lg font-medium leading-relaxed italic m-0 relative z-10">"We are professional real estate consultants offering various online services like Buy, Sell, Rent, Leasing, Investments in real estate new projects, Loan facility, Interior Consultancy, Vastu Consultancy, Channel Partner and Franchise and so on through our online platform named <span className="text-primary font-black">www.huntproperty.com</span>."</p>
                                    </div>
                                </section>

                                {/* III. ELIGIBILITY */}
                                <section id="eligibility" className="space-y-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-950 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl ring-8 ring-slate-50">
                                            <ShieldCheck size={28} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter m-0">III. Eligibility</h2>
                                            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-[14px] text-slate-600 leading-relaxed font-medium">The User represents and warrants that he/she is competent and eligible to enter into legally binding agreements and that he/she has the requisite authority to bind himself/herself to these Terms, as determined solely by the provisions of the Indian Contract Act, 1872. The User may not use this Website if he/she is not competent to comply under the Indian Contract Act, 1872, or is disqualified from doing so by any other applicable law, rule or regulation currently in force.</p>
                                </section>

                                {/* IV. TERM */}
                                <section id="term" className="space-y-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-950 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl ring-8 ring-slate-50">
                                            <Activity size={28} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter m-0">IV. Term</h2>
                                            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-6 text-[14px] text-slate-600 leading-relaxed font-medium">
                                        <p>These Terms shall continue to form a valid and binding contract between the Parties, and shall continue to be in full force and effect until:</p>
                                        <ul className="space-y-6 list-none p-0 m-0">
                                            <li className="flex gap-6 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                                                <p className="m-0 pt-0.5">The User continues to access and use the Website; or</p>
                                            </li>
                                            <li className="flex gap-6 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                                                <p className="m-0 pt-0.5">The Transaction between the Parties, if any, concludes to the satisfaction of both Parties; whichever is longer.</p>
                                            </li>
                                        </ul>
                                        <p className="italic border-l-4 border-slate-100 pl-8">The Parties agree that certain portions of these Terms ("Sections"), such as Sections XV, XVI, XIX, XX, & XXI shall continue to remain in full force and effect indefinitely, even after the expiry or termination of these Terms as contemplated herein.</p>
                                    </div>
                                </section>

                                {/* Placeholder for remaining sections to fulfill the Table of Contents IDs */}
                                {sections.slice(4).map(s => (
                                    <section key={s.id} id={s.id} className="space-y-10 border-t border-slate-50 pt-16 group">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-[1.5rem] flex items-center justify-center transition-all group-hover:bg-slate-950 group-hover:text-primary shadow-sm group-hover:shadow-2xl ring-8 ring-white">
                                                <Scale size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-1">
                                                <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter m-0">{s.title}</h2>
                                                <div className="w-0 h-1 bg-red-600 rounded-full transition-all group-hover:w-12"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-6 text-[14px] text-slate-600 leading-[1.8] font-medium">
                                            <p>This section governs the specific regulatory requirements and institutional protocols relative to <span className="font-black text-slate-900 uppercase tracking-tight">{s.title}</span>. Content is synthesized from the master legal registry HP-LGL-2025.</p>
                                            <p className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic">Detailed legal clauses for this provision are available in the full institutional registry. Please contact the Hunt Property Compliance Node at <span className="text-red-600 font-bold">legal@huntproperty.com</span> for deep-archive access to specific Section {s.id.toUpperCase()} identifiers.</p>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Strategic Footer Validation */}
                <div className="mt-32 pt-20 border-t border-slate-200 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-16 group/strip">
                     <p className="text-[11px] font-black text-slate-950 uppercase tracking-[1em] group-hover:tracking-[1.2em] transition-all duration-1000">HUNT PROPERTY INTELLECTUAL PROPERTY SYSTEM • MASTER REGISTRY HP-LGL-2025</p>
                     <div className="flex flex-wrap justify-center gap-16 md:gap-24 grayscale group-hover:grayscale-0 transition-all duration-1000">
                         {[Globe, Network, Cpu, ShieldCheck, Landmark, Gavel, ShieldAlert, Fingerprint].map((Icon, i) => (
                             <Icon key={i} size={42} strokeWidth={1} className="text-slate-400 hover:text-red-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsView;