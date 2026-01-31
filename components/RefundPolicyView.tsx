import React, { useState } from 'react';
import { 
    Receipt, ShieldCheck, RefreshCw, AlertTriangle, 
    FileText, CreditCard, Landmark, CheckCircle2,
    ChevronRight, ArrowRight
} from 'lucide-react';

const RefundPolicyView = () => {
    const [activeSection, setActiveSection] = useState('payment-refund');

    const sections = [
        { id: 'payment-refund', title: 'I. PAYMENT & REFUND CLAUSE' },
        { id: 'payment-security', title: 'II. PAYMENT SECURITY' },
        { id: 'charge-back', title: 'III. CHARGE BACK POLICY' },
        { id: 'cancellation', title: 'IV. CANCELLATION' }
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
                
                {/* Minimal Header */}
                <div className="max-w-4xl mb-24 space-y-8 animate-fade-in-up">
                    <div className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">
                        <Receipt size={14} className="text-red-600" />
                        Financial Framework
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 tracking-tighter leading-none">
                        Refund & <br/>
                        <span className="text-slate-400 italic">Cancellation</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-100 pl-8 italic">
                        "Transparent protocols governing financial transactions, cancellations, and security standards."
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-20">
                    
                    {/* Minimalist Sticky Navigation */}
                    <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit border-l border-slate-100 pl-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Policy Sections</p>
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
                    <div className="lg:col-span-9 max-w-4xl space-y-24">
                        
                        {/* I. PAYMENT & REFUND CLAUSE */}
                        <section id="payment-refund" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">I. PAYMENT & REFUND CLAUSE</h2>
                                <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                            </div>
                            <ul className="space-y-6 text-base leading-relaxed text-slate-600 font-medium">
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>For all services bought, 50% of the order amount would be towards the activation/administration fees & the rest 50% would be refunded on pro-rata basis, considering the usages of the services. Customer agrees that the refund process would take at least 21 days after the complete documentation has been received by the Finance team for processing such refund.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Where Subscription Fees accrues it shall be payable at or within such time as stated in the invoice(s) issued by the Company to the User.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>The Subscription Fees shall be paid by the User on demand. In case the user disputes the same for any reason whatsoever, he shall make the payment towards the Subscription Fees accrued subject to the decision of the Company on the dispute. In the event of Company’s deciding the dispute in the User’s favour, the Company shall refund to the User any excess amount paid by the User free of interest.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Any delay in the payment by the User of any sums due under this Agreement, the Company shall have the right to charge interest on the outstanding amount from the date the payment became due until the date of final payment by the User.</span>
                                </li>
                            </ul>
                        </section>

                        {/* II. PAYMENT SECURITY */}
                        <section id="payment-security" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">II. PAYMENT SECURITY</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>Transactions on the Website are secure and protected. Any information entered by the User when transacting on the Website is encrypted to protect the User against unintentional disclosure to third parties.</p>
                                <p className="p-6 bg-slate-50 border-l-4 border-slate-900 italic">
                                    "The User’s credit and debit card information is not received, stored by or retained by the Service Provider / Website in any manner. This information is supplied by the User directly to the relevant payment gateway which is authorized to handle the information provided, and is compliant with the regulations and requirements of various banks and institutions and payment franchisees that it is associated with."
                                </p>
                            </div>
                        </section>

                        {/* III. CHARGE BACK POLICY */}
                        <section id="charge-back" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">III. CHARGE BACK POLICY</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <ul className="space-y-6 text-base leading-relaxed text-slate-600 font-medium">
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Payment for the services offered shall be on 100% advance basis.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Payment for service once subscribed to by the subscriber, is not refundable and any amount paid shall stand appropriated.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Refund if any will be at the sole discretion of Catalyst E Pages Private Limited only.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>User acknowledges and agrees that Catalyst E Pages Private Limited at its sole discretion and without prejudice to other rights and remedies that it may have under the applicable laws, shall be entitled to set off the amount paid by a subscriber/user, against any amount(s) payable by user to Catalyst E Pages Private Limited under any other agreement or commercial relationship towards other products/services.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Catalyst E Pages Private Limited offers no guarantees whatsoever for the accuracy or timeliness of the refunds reaching the Subscribers card/bank accounts. This is on account of the multiplicity of organizations involved in processing of online transactions, the problems with Internet infrastructure currently available and working days/holidays of financial institutions.</span>
                                </li>
                            </ul>
                        </section>

                        {/* IV. CANCELLATION */}
                        <section id="cancellation" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">IV. CANCELLATION</h2>
                                <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                            </div>
                            <ul className="space-y-6 text-base leading-relaxed text-slate-600 font-medium">
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Company shall reserve the exclusive right to cancel any content whatsoever from being published or reflected on its website or in any other mode. The cancellation charges payable to the User shall be at the applicable rates laid down in the cancellation and refund policy.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>For all services bought, 25% of the order amount would be towards the activation/administration fees & the rest 75% would be refunded against cancellation on pro-rata basis, considering the usages of the services. Customer agrees that the cancellation process would take at least 21 days after the complete documentation has been received by the Finance team for processing such refund.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>All refund and cancellation will be process after deducting all government taxes, as once these taxes paid to government can not be claimed. So the customer agrees the terms of cancellation and refund process.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Where Subscription Fees accrues it shall be payable at or within such time as stated in the invoice(s) issued by the Company to the User.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>The Subscription Fees shall be paid by the User on demand. In case the user disputes the same for any reason whatsoever, he shall make the payment towards the Subscription Fees accrued subject to the decision of the Company on the dispute. In the event of Company’s deciding the dispute in the User’s favour, the Company shall refund to the User any excess amount paid by the User free of interest.</span>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowRight className="shrink-0 text-red-600 mt-1.5" size={16} />
                                    <span>Any delay in the payment by the User of any sums due under this Agreement, the Company shall have the right to charge interest on the outstanding amount from the date the payment became due until the date of final payment by the User.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Validation Footer */}
                        <div className="pt-24 border-t border-slate-100 text-center space-y-10 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-6 py-2 border border-slate-200 text-slate-950 rounded-full group">
                                <CheckCircle2 size={14} className="text-slate-400 group-hover:text-red-600 transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Protocol Validated v.2025.10</span>
                            </div>
                            <p className="text-slate-300 text-[10px] font-bold italic max-w-lg mx-auto leading-relaxed uppercase tracking-widest">
                                "Financial interactions on Hunt Property network are governed by these immutable terms."
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicyView;