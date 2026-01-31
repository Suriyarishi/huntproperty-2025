
import React, { useState } from 'react';
import { 
    ShoppingBag, CreditCard, ShieldCheck, 
    FileText, Banknote, RefreshCw, XCircle,
    ArrowRight, ChevronRight, CheckCircle2
} from 'lucide-react';

const PackagePolicyView = () => {
    const [activeSection, setActiveSection] = useState('charges');

    const sections = [
        { id: 'charges', title: 'I. CHARGES' },
        { id: 'packages', title: 'II. PACKAGES, FEES & PAYMENT' },
        { id: 'payment-mode', title: 'III. MODE OF PAYMENT' },
        { id: 'refund', title: 'IV. PAYMENT & REFUND' },
        { id: 'security', title: 'V. PAYMENT SECURITY' },
        { id: 'chargeback', title: 'VI. CHARGE BACK POLICY' },
        { id: 'cancellation', title: 'VII. CANCELLATION' }
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
                        <ShoppingBag size={14} className="text-red-600" />
                        Commercial Protocol
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 tracking-tighter leading-none">
                        Shopping <br/>
                        <span className="text-slate-400 italic">Policy</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-100 pl-8 italic">
                        "Comprehensive guidelines regarding charges, packages, payments, and service execution."
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
                        
                        {/* I. CHARGES */}
                        <section id="charges" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">I. CHARGES</h2>
                                <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>The use of this Website by the User, such as browsing the Website is free of cost. The User is only required to pay for the services availed by the User of the Website. However, the Service Provider reserves the right to amend this no-fee policy and charge the User for any or all services offered / rendered. In such an event, the User will be intimated of the same when he/she attempts to access the Website, and the User shall have the option of declining to avail of the services offered on the Website. Any such change, if made, shall come into effect immediately upon such change being notified to the User, unless specified otherwise.</p>
                            </div>
                        </section>

                        {/* II. PACKAGES, FEES AND PAYMENT */}
                        <section id="packages" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">II. PACKAGES, FEES AND PAYMENT</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>The Service will not be activated until full payment has been provided whether in the form of Demand Draft, Debit Card, Credit Card payments, or other forms of payments as stipulated by Subscription Order. You are liable for the costs incurred in this Contract from the "start date" which is specified in the Subscription Order or if no such date is specified from the date of acceptance, (which will be the date we receive your confirmation of the Subscription Order) if nothing is stated in your Subscription Order.</p>
                                
                                <p>If you have elected to pay via credit card, then please note that the service shall only become activated once the first payment or the sole payment (in the event of a lump sum payment upon the contract) has been received by us.</p>
                                
                                <p>If payment via credit card on a monthly basis was elected for a 12-month or 6-months Contract, then you shall be required to provide us with your choice of 2 or 4 security cheques, with each cheque representing a pro rata amount of the total Contract amount.</p>
                                
                                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-900 italic">
                                    "The security cheques referenced in the provisions of this Clause shall be provided by you, prior to the expiry of the first month of the contract. Failure to provide the security cheque will result in the suspension of the services; until such time that the security cheque is provided to us."
                                </div>

                                <p>Please note that any cheque issued by you that "bounces" due to insufficient funds or is rejected by the relevant financial institution for any other reason will incur a Rs1000 administration fee payable to us within seven (7) days and we reserve the right to charge you our reasonable administration costs in dealing with any failed payments and/or costs in relation to pursuing outstanding amounts (including legal fees and expenses).</p>

                                <p>The Current Fees for the Service are specified in your Subscription Order. We offer a number of different packages that vary in terms of price and services included. You may subscribe to any of these packages but switching, or addition of special conditions to, packages is at our sole discretion. If you wish to change package during your Subscription Order then we reserve the right to amend any such terms in the Subscription Order including but not limited to the Fees. Please be advised that a package can only be reduced to the extent that the total current fee for the Services that you have requested is not reduced until the end of the current contract term. This does not apply to upgrades.</p>
                            </div>
                        </section>

                        {/* III. MODE OF PAYMENT */}
                        <section id="payment-mode" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">III. MODE OF PAYMENT</h2>
                                <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>The following payment options are available on the Website:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Domestic and international credit cards issued by banks and institutions that are part of the Visa, Master Card & Amex Card Network</li>
                                    <li>Visa & Master Card Debit cards</li>
                                    <li>Netbanking/Direct Debit payments from select banks in India.</li>
                                </ul>
                                <p>A full list is available at the time of Check Out and prior to making payments for purchases.</p>
                                <p>As prescribed by the financial institutions issuing the credit or debit cards affiliated with Visa and MasterCard you will need to submit your 16-digit credit card number, card expiry date and 3-digit CVV number (usually on the reverse of the card) when you make your online transaction using your Credit or Debit card. You should also have enrolled your Credit Card with VBV (Verified by Visa) or MSC (MasterCard Secure Code) to complete the transaction.</p>
                            </div>
                        </section>

                        {/* IV. PAYMENT & REFUND */}
                        <section id="refund" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">IV. PAYMENT & REFUND</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>For all services bought, 50% of the order amount would be towards the activation/administration fees & the rest 50% would be refunded on pro-rata basis, considering the usages of the services. Customer agrees that the refund process would take at least 21 days after the complete documentation has been received by the Finance team for processing such refund.</p>
                            </div>
                        </section>

                        {/* V. PAYMENT SECURITY */}
                        <section id="security" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">V. PAYMENT SECURITY</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>Transactions on the Website are secure and protected. Any information entered by the User when transacting on the Website is encrypted to protect the User against unintentional disclosure to third parties. The User’s credit and debit card information is not received, stored by or retained by the Service Provider / Website in any manner. This information is supplied by the User directly to the relevant payment gateway which is authorized to handle the information provided, and is compliant with the regulations and requirements of various banks and institutions and payment franchisees that it is associated with.</p>
                            </div>
                        </section>

                        {/* VI. CHARGE BACK POLICY */}
                        <section id="chargeback" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">VI. CHARGE BACK POLICY</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>Payment for the services offered shall be on 100% advance basis. Payment for service once subscribed to by the subscriber, is not refundable and any amount paid shall stand appropriated. Refund if any will be at the sole discretion of Catalyst E Pages Private Limited only.</p>
                                <p>User acknowledges and agrees that Catalyst E Pages Private Limited at its sole discretion and without prejudice to other rights and remedies that it may have under the applicable laws, shall be entitled to set off the amount paid by a subscriber/user, against any amount(s) payable by user to Catalyst E Pages Private Limited under any other agreement or commercial relationship towards other products/services.</p>
                            </div>
                        </section>

                        {/* VII. CANCELLATION */}
                        <section id="cancellation" className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">VII. CANCELLATION</h2>
                                <div className="h-1 w-12 bg-slate-950 rounded-full"></div>
                            </div>
                            <div className="text-base leading-relaxed text-slate-600 font-medium space-y-6">
                                <p>Company shall reserve the exclusive right to cancel any content whatsoever from being published or reflected on its website or in any other mode. The cancellation charges payable to the User shall be at the applicable rates laid down in the cancellation and refund policy.</p>
                            </div>
                        </section>

                        {/* Validation Footer */}
                        <div className="pt-24 border-t border-slate-100 text-center space-y-10 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-6 py-2 border border-slate-200 text-slate-950 rounded-full group">
                                <CheckCircle2 size={14} className="text-slate-400 group-hover:text-red-600 transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Protocol Validated v.2025.10</span>
                            </div>
                            <p className="text-slate-300 text-[10px] font-bold italic max-w-lg mx-auto leading-relaxed uppercase tracking-widest">
                                "Commercial interactions on Hunt Property network are governed by these immutable terms."
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagePolicyView;
