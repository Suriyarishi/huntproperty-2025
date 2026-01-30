import React, { useState, useEffect } from 'react';
import { 
    Scale, Globe, Network, Lock, 
    ShieldCheck, Activity, Cpu, Landmark, 
    Fingerprint, Gavel, ShieldAlert, FileText,
    ArrowRight, CheckCircle2, ChevronRight,
    Search, Info, List, FileSignature, ShieldPlus,
    AlertCircle, AlertTriangle, Shield,
    // Fix: Added missing icons used in the component
    Zap, CreditCard, History
} from 'lucide-react';

const TermsAndConditionsView = () => {
    const [activeSection, setActiveSection] = useState('general');

    const sections = [
        { id: 'general', title: 'I. GENERAL' },
        { id: 'services', title: 'II. THE SERVICES' },
        { id: 'eligibility', title: 'III. ELIGIBILITY' },
        { id: 'term', title: 'IV. TERM' },
        { id: 'termination', title: 'V. TERMINATION' },
        { id: 'platform', title: 'VI. ONLINE PLATFORM' },
        { id: 'communication', title: 'VII. COMMUNICATION' },
        { id: 'charges', title: 'VIII. CHARGES' },
        { id: 'packages', title: 'IX. PACKAGES & FEES' },
        { id: 'payment', title: 'X. MODE OF PAYMENT' },
        { id: 'refund', title: 'XI. PAYMENT & REFUND' },
        { id: 'security', title: 'XII. SECURITY' },
        { id: 'chargeback', title: 'XIII. CHARGE BACK' },
        { id: 'cancellation', title: 'XIV. CANCELLATION' },
        { id: 'thirdparty', title: 'XV. LINKS & THIRD PARTIES' },
        { id: 'modifications', title: 'XVI. MODIFICATIONS' },
        { id: 'errata', title: 'XVII. REVISIONS' },
        { id: 'availability', title: 'XVIII. AVAILABILITY' },
        { id: 'obligations', title: 'XIX. USER OBLIGATIONS' },
        { id: 'suspension', title: 'XX. SUSPENSION' },
        { id: 'indemnity', title: 'XXI. INDEMNITY' },
        { id: 'ip', title: 'XXII. INTELLECTUAL PROPERTY' },
        { id: 'disclaimer', title: 'XXIII. DISCLAIMER' },
        { id: 'submissions', title: 'XXIV. SUBMISSIONS' },
        { id: 'dispute', title: 'XXV. DISPUTE RESOLUTION' },
        { id: 'notices', title: 'XXVI. NOTICES' },
        { id: 'miscellaneous', title: 'XXVII. MISCELLANEOUS' }
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
        <div className="min-h-screen bg-white pt-32 pb-40 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
                
                {/* Header Hub */}
                <div className="mb-20 space-y-4 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-primary border border-white/5 text-[9px] font-black uppercase tracking-[0.3em] shadow-lg">
                        <Scale size={12} /> Institutional Framework v.2025
                    </div>
                    <h1 className="text-3xl md:text-4xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">
                        Terms & <span className="text-red-600">Conditions</span>
                    </h1>
                    <p className="text-slate-500 text-base font-medium max-w-2xl leading-relaxed italic border-l-4 border-slate-100 pl-6">
                        "Governing the architectural usage, data interactions, and legal framework within the Hunt Property ecosystem."
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-3 sticky top-28 hidden lg:block">
                        <div className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 shadow-sm max-h-[75vh] overflow-y-auto no-scrollbar">
                            <div className="flex items-center gap-3 px-4 pb-6 mb-4 border-b border-slate-200">
                                <List size={14} className="text-red-600" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Registry Nodes</span>
                            </div>
                            <div className="space-y-1">
                                {sections.map((s) => (
                                    <button 
                                        key={s.id} 
                                        onClick={() => scrollTo(s.id)}
                                        className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between group ${activeSection === s.id ? 'bg-white text-red-600 shadow-md border border-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-tight">{s.title}</span>
                                        <ChevronRight size={12} className={`transition-transform ${activeSection === s.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Terminal */}
                    <div className="lg:col-span-9 space-y-24 text-slate-700">
                        
                        <section id="general" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">I. General</h2>
                            </div>
                            <div className="text-sm leading-[1.8] space-y-4 font-medium">
                                <p>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>
                                <p>This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of huntproperty.com.</p>
                                <p>The domain name <span className="text-red-600 font-bold">huntproperty.com</span> ("Website"), is owned and operated by Catalyst E Pages Pvt. Ltd. ("Service Provider") a Private Service Provider limited by shares, incorporated under the provisions of the Companies Act, 2013, and having its registered office at A2/404, Purvanchal Silver City, Sector 93, Noida, Gautam Budh Nagar, U.P - 201304 and registered office at No. 214, Second Floor, Urbtech Matrix Tower, opposite Jaypee Hospital, Sector 132, Noida, U.P - 201303.</p>
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-4">
                                    <p className="font-black text-slate-950 uppercase text-[10px] tracking-widest border-b border-slate-200 pb-2">Core Definitions</p>
                                    <ul className="space-y-3 list-none p-0 m-0 text-xs">
                                        <li className="flex gap-4 items-start"><span className="text-red-600 font-black">1.</span> <span><strong>'User/You':</strong> Refers to any legal person or entity accessing or using the services provided on this Website, who is competent to enter into binding contracts.</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-red-600 font-black">2.</span> <span><strong>'We/Us/Our':</strong> Refers to the Website and/or the Service Provider, as the context so requires.</span></li>
                                        <li className="flex gap-4 items-start"><span className="text-red-600 font-black">3.</span> <span><strong>'Party/Parties':</strong> Shall respectively be used to refer to the User and the Service Provider individually and collectively.</span></li>
                                    </ul>
                                </div>
                                <p>The Service Provider reserves the sole and exclusive right to amend or modify these Terms without any prior permission or intimation to the User, and the User expressly agrees that any such amendments or modifications shall come into effect immediately.</p>
                            </div>
                        </section>

                        <section id="services" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">II. THE SERVICES</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                We are professional real estate consultants offering various online services like Buy, Sell, Rent, Leasing, Investments in real estate new projects, Loan facility, Interior Consultancy, Vastu Consultancy, Channel Partner and Franchise and so on through our online platform named www.huntproperty.com.
                            </p>
                        </section>

                        <section id="eligibility" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">III. ELIGIBILITY</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The User represents and warrants that he/she is competent and eligible to enter into legally binding agreements and that he/she has the requisite authority to bind himself/herself to these Terms, as determined solely by the provisions of the Indian Contract Act, 1872. The User may not use this Website if he/she is not competent to comply under the Indian Contract Act, 1872, or is disqualified from doing so by any other applicable law, rule or regulation currently in force.
                            </p>
                        </section>

                        <section id="term" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">IV. TERM</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                These Terms shall continue to form a valid and binding contract between the Parties, and shall continue to be in full force and effect until the User continues to access and use the Website, or the Transaction between the Parties, if any, concludes to the satisfaction of both Parties; whichever is longer.
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wide italic">Sections XV, XVI, XIX, XX, & XXI shall continue to remain in full force and effect indefinitely.</p>
                        </section>

                        <section id="termination" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">V. TERMINATION</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Service Provider reserves the right, at its sole discretion, to unilaterally terminate the User's access to the products and services offered on the Website, or any portion thereof, at any time, without notice or cause. The User shall continue to be bound by these Terms, and it is expressly agreed to by the Parties that the User shall not have the right to terminate these Terms till the expiry of the same.
                            </p>
                        </section>

                        <section id="platform" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">VI. ONLINE PLATFORM</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Website is an online platform for real estate information and connects various stakeholders.
                            </p>
                        </section>

                        <section id="communication" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">VII. COMMUNICATION</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                By using this Website, and providing his/her contact information to the Service Provider through the Website, the User hereby agrees and consents to receiving calls, autodialed and/or pre-recorded message calls, e-mails and SMSs from the Service Provider and/or any of its affiliates or partners at any time.
                            </p>
                        </section>

                        <section id="charges" className="space-y-10">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">VIII. CHARGES</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The use of this Website by the User, such as browsing the Website is free of cost. The User is only required to pay for the services availed by the User of the Website. However, the Service Provider reserves the right to amend this no-fee policy and charge the User for any or all services offered / rendered.
                            </p>
                        </section>

                        <section id="packages" className="space-y-10">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">IX. PACKAGES & FEES</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 text-xs font-medium leading-relaxed">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-[10px] font-black uppercase text-slate-950 mb-3 tracking-widest flex items-center gap-2">
                                        <Zap size={12} className="text-red-600" /> Activation Protocol
                                    </h4>
                                    <p>The Service will not be activated until full payment has been provided whether in the form of Demand Draft, Debit Card, Credit Card payments, or other forms of payments as stipulated by Subscription Order.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-[10px] font-black uppercase text-slate-950 mb-3 tracking-widest flex items-center gap-2">
                                        <History size={12} className="text-red-600" /> Liability Start
                                    </h4>
                                    <p>You are liable for the costs incurred in this Contract from the "start date" which is specified in the Subscription Order or if no such date is specified from the date of acceptance.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-[10px] font-black uppercase text-slate-950 mb-3 tracking-widest flex items-center gap-2">
                                        <CreditCard size={12} className="text-red-600" /> Payment Security
                                    </h4>
                                    <p>Security cheques referenced in the provisions of this Clause shall be provided by you, prior to the expiry of the first month of the contract. Failure to provide the security cheque will result in the suspension of the services.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-[10px] font-black uppercase text-slate-950 mb-3 tracking-widest flex items-center gap-2">
                                        <AlertTriangle size={12} className="text-red-600" /> Bouncing Penalty
                                    </h4>
                                    <p>Please note that any cheque issued by you that "bounces" due to insufficient funds or is rejected by the relevant financial institution for any other reason will incur a Rs1000 administration fee.</p>
                                </div>
                            </div>
                        </section>

                        <section id="payment" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">X. Mode of Payment</h2>
                            </div>
                            <div className="bg-white border-2 border-slate-100 p-8 rounded-[2rem] space-y-6">
                                <p className="text-sm font-bold uppercase tracking-tight text-slate-900">The following payment options are available on the Website:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Domestic and international credit cards (Visa, Master Card & Amex)',
                                        'Visa & Master Card Debit cards',
                                        'Netbanking/Direct Debit payments from select banks in India',
                                        'Cheque / Demand Draft / RTGS / NEFT'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center p-4 bg-slate-50 rounded-xl">
                                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                                            <span className="text-xs font-black uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="refund" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XI. Payment & Refund</h2>
                            </div>
                            <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><Activity size={180} /></div>
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm"><Info size={24} /></div>
                                        <h3 className="text-xl font-display font-black text-red-900 uppercase">Policy Allocation</h3>
                                    </div>
                                    <p className="text-base font-bold text-red-900 leading-relaxed italic">
                                        "For all services bought, 50% of the order amount would be towards the activation/administration fees & the rest 50% would be refunded on pro-rata basis, considering the usages of the services. Customer agrees that the refund process would take at least 21 days after the complete documentation."
                                    </p>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 border-t border-red-100 pt-6">
                                        Delay in the payment of any sums due under this Agreement, the Company shall have the right to charge interest on the outstanding amount.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="security" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XII. Security</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                Transactions on the Website are secure and protected. Any information entered by the User when transacting on the Website is encrypted to protect the User against unintentional disclosure to third parties.
                            </p>
                        </section>

                        <section id="chargeback" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XIII. Charge Back</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                You agree that any payment made by you is not subject to any chargeback.
                            </p>
                        </section>

                        <section id="cancellation" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XIV. Cancellation</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Service Provider reserves the right to cancel any service for any reason.
                            </p>
                        </section>

                        <section id="thirdparty" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XV. Links & Third Parties</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Website may contain links to other websites.
                            </p>
                        </section>

                        <section id="modifications" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XVI. Modifications</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Service Provider may modify these terms at any time.
                            </p>
                        </section>

                        <section id="errata" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XVII. Revisions</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Service Provider does not warrant that any of the materials on its web site are accurate, complete, or current.
                            </p>
                        </section>

                        <section id="availability" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XVIII. Availability</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                Availability of the Website and services may be interrupted from time to time.
                            </p>
                        </section>

                        <section id="obligations" className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XIX. User Obligations</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                {[
                                    'No copying, distributing, or modifying Website content.',
                                    'Strict prohibition of deep-linking or scraping algorithms.',
                                    'No probes, vulnerability scans, or security breaches.',
                                    'Users must not post obscene, hateful, or racially objectionable content.',
                                    'No commercial solicitation of other Website users.',
                                    'Mandatory adherence to RERA and IP frameworks.',
                                    'No uploading of virus-infected files or corrupted data.',
                                    'No interference with the security or servers of the Website.'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start group">
                                        <div className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-950 group-hover:text-primary transition-all shadow-sm">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <p className="text-[13px] font-medium leading-relaxed pt-0.5">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <p className="text-xs font-bold leading-relaxed text-slate-500 italic">
                                    "The User hereby expressly authorizes the Service Provider/Website to disclose any and all information relating to the User in the possession of the Service Provider/Website to law enforcement or other government officials, as the Service Provider may in its sole discretion, believe necessary or appropriate in connection with the investigation and/or resolution of possible crimes."
                                </p>
                            </div>
                        </section>

                        <section id="suspension" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XX. Suspension</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Service Provider may suspend access to the Website for any reason.
                            </p>
                        </section>

                        <section id="indemnity" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXI. Indemnity & Limitations</h2>
                            </div>
                            <div className="space-y-8">
                                <p className="text-sm font-medium leading-[1.8]">
                                    The User hereby expressly agrees to defend, indemnify and hold harmless the Website and the Service Provider, its employees, directors, officers, agents and their successors and assigns against and against any and all claims, liabilities, damages, losses, costs and expenses, including attorney's fees, caused by or arising out of claims based upon the User's actions or inactions.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        'Loss due to software or internet failure.',
                                        'Loss of profit / business / reputation.',
                                        'Reliance on any content on Website.',
                                        'Depletion of goodwill.',
                                        'Failure of User\'s hardware/account.',
                                        'Direct or consequential damages.'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                                            <AlertTriangle size={14} className="text-red-500" />
                                            <span className="text-[10px] font-black uppercase tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="ip" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXII. Intellectual Property</h2>
                            </div>
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="flex-1 space-y-4">
                                    <p className="text-sm leading-[1.8] font-medium">Unless expressly agreed to in writing, nothing contained herein shall give the User a right to use any of the Website's trade names, trademarks, service marks, logos, domain names, information, questions, answers, solutions, reports and other distinctive brand features, save according to the provisions of these Terms.</p>
                                </div>
                                <div className="w-full md:w-64 bg-slate-950 p-8 rounded-[3rem] text-center flex flex-col items-center justify-center gap-4 shadow-xl">
                                    <Fingerprint size={48} className="text-primary" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">IP Sentinel Node</span>
                                </div>
                            </div>
                        </section>

                        <section id="disclaimer" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXIII. Disclaimer</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                The Service Provider disclaims all warranties.
                            </p>
                        </section>

                        <section id="submissions" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXIV. Submissions</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                Any submissions made by the User will be owned by the Service Provider.
                            </p>
                        </section>

                        <section id="dispute" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXV. Dispute Resolution</h2>
                            </div>
                            <div className="bg-slate-50 p-10 md:p-14 rounded-[4rem] border border-slate-100 space-y-10">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-black text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-2">Step 1: Mediation</h4>
                                        <p className="text-[13px] leading-relaxed font-medium text-slate-600 italic">"In case of any dispute between the parties, the Parties will attempt to resolve the same amicably amongst themselves, to the mutual satisfaction of both Parties within thirty (30) days of one Party communicating the existence of a dispute to the other Party."</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-black text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-2">Step 2: Arbitration</h4>
                                        <p className="text-[13px] leading-relaxed font-medium text-slate-600 italic">"Arbitration shall be conducted by a sole arbitrator to be appointed by the Service Provider. The seat of Arbitration shall be the city of Gautam Budh Nagar (Noida) in the state of Uttar Pradesh, India."</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm w-fit mx-auto">
                                    <Landmark size={14} className="text-red-600" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Jurisdiction: Noida, U.P., India</span>
                                </div>
                            </div>
                        </section>

                        <section id="notices" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXVI. Notices</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                Any notices shall be given by email.
                            </p>
                        </section>

                        <section id="miscellaneous" className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                <h2 className="text-lg font-display font-black text-slate-900 uppercase">XXVII. Miscellaneous</h2>
                            </div>
                            <p className="text-sm leading-[1.8] font-medium">
                                These Terms constitute the entire agreement between the Parties.
                            </p>
                        </section>

                        <div className="pt-20 border-t border-slate-100 text-center space-y-8 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full shadow-2xl">
                                <FileSignature size={18} className="text-primary" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Validated Matrix Agreement v.2025</span>
                            </div>
                            <p className="text-slate-400 text-xs font-bold italic max-w-lg mx-auto leading-relaxed">
                                "These terms and conditions are effective as of the current timestamp. Continuous access of the registry nodes implies persistent agreement."
                            </p>
                        </div>

                    </div>
                </div>

                {/* Validation Strip */}
                <div className="mt-40 pt-20 border-t border-slate-200 opacity-20 hover:opacity-100 transition-opacity duration-1000 text-center space-y-12 group/strip">
                     <p className="text-[11px] font-black text-slate-950 uppercase tracking-[1.2em] group-hover:tracking-[1.5em] transition-all duration-1000">HUNT PROPERTY LEGAL PROTOCOL • MASTER REGISTRY v.2025</p>
                     <div className="flex flex-wrap justify-center gap-16 md:gap-24 grayscale group-hover:grayscale-0 transition-all duration-1000">
                         {[Globe, Network, Cpu, ShieldCheck, Landmark, Fingerprint, Gavel].map((Icon, i) => (
                             <Icon key={i} size={40} strokeWidth={1} className="text-slate-400 hover:text-red-600 transition-colors" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsView;