
import React, { useState, useMemo } from 'react';
import { 
    IndianRupee, Percent, Calculator, 
    ArrowRight, Sparkles, ShieldCheck, TrendingUp, 
    ChevronRight, HelpCircle, Briefcase, Zap,
    Wallet, ArrowUpRight, Info, CheckCircle2,
    Activity, Globe, Cpu, HandCoins, Landmark, 
    ChevronDown, MapPin, Receipt, FileText,
    Network, ShieldPlus, Search,
    UserCheck, Timer, Loader2, Key, Download,
    TrendingUpDown, BarChart3, Clock, Calendar
} from 'lucide-react';

type CalculatorTab = 'faq' | 'eligibility' | 'emi' | 'rental' | 'future';

const HomeLoanCalculatorView = () => {
    const [activeTab, setActiveTab] = useState<CalculatorTab>('faq');
    const [activeFaqIndex, setActiveFaqIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    // Form States
    const [emiData, setEmiData] = useState({ principal: 2500000, tenure: 10, rate: 10 });
    const [eligibilityData, setEligibilityData] = useState({ income: 75000, commitment: 10000, tenure: 20, rate: 8.5 });
    const [rentalData, setRentalData] = useState({ value: 10000000, months: 10, rate: 10 });
    const [futureData, setFutureData] = useState({ value: 2500000, years: 10, appreciation: 10 });

    const faqs = [
        {
            q: "What are the factors you should keep in mind before getting a home loan?",
            a: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <div className="w-1 h-6 bg-red-600 rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Key Criteria Analysis</h4>
                    </div>
                    <ul className="space-y-5">
                        {[
                            { text: "Your income and your track record of repaying previous loans - obtained from Credit Bureau.", icon: UserCheck },
                            { text: "Current expenses including other loans. The loan-to-value ratio is critical.", icon: Receipt },
                            { text: "Ownership of the property - the bank must verify the full ownership of the seller.", icon: ShieldCheck },
                            { text: "Report of the local bank surveyor who inspects the property for valuation.", icon: Search },
                            { text: "Eligibility depends on repayment ability (salary) rather than building age.", icon: Activity }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                                <div className="mt-1 w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    <ChevronRight size={12} strokeWidth={3} />
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">"{item.text}"</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        },
        {
            q: "What are the advantages and disadvantages of getting a home loan insured?",
            a: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Insurance Protocols</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Loan insurance acts as a financial safety net for your family. While not legally mandatory, most institutional lenders recommend it to secure the asset and protect against liability in unforeseen events. Premiums can often be capitalized into the loan principal.</p>
                </div>
            )
        },
        {
            q: "Why does home loan interest rate differ?",
            a: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Market Variability Factors</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Rates fluctuate based on RBI repo rate changes, bank cost of funds (MCLR/EBLR), your credit score (CIBIL), loan-to-value ratio, and the chosen regime (Fixed vs. Floating).</p>
                </div>
            )
        },
        {
            q: "Do you get tax benefits on loan?",
            a: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Statutory Tax Savings</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Principal repayments (up to ₹1.5L) under Section 80C and interest payments (up to ₹2L) under Section 24(b) are deductible for self-occupied properties.</p>
                </div>
            )
        },
        {
            q: "What is pre-EMI interest?",
            a: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Construction-Phase Servicing</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Pre-EMI is interest paid on disbursed amounts before full possession and the start of the regular EMI cycle, common in construction-linked plans.</p>
                </div>
            )
        },
        {
            q: "What is the meaning of moratorium and capitalisation of interest?",
            a: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Deferment Matrix</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">A moratorium is a temporary repayment pause. Interest continues to accrue and is 'capitalized'—added to the principal—which may increase future EMIs or tenure.</p>
                </div>
            )
        }
    ];

    // --- CALCULATION ENGINES ---

    const emiResult = useMemo(() => {
        const r = emiData.rate / 12 / 100;
        const n = emiData.tenure * 12;
        if (r === 0) return Math.round(emiData.principal / n);
        const emi = (emiData.principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return Math.round(emi);
    }, [emiData]);

    const eligibilityResult = useMemo(() => {
        const disposable = (eligibilityData.income * 0.5) - eligibilityData.commitment;
        const r = eligibilityData.rate / 12 / 100;
        const n = eligibilityData.tenure * 12;
        if (r === 0) return disposable * n;
        const maxLoan = disposable * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
        return Math.round(maxLoan);
    }, [eligibilityData]);

    const rentalResult = useMemo(() => {
        // Based on screenshot logic: (Value * Rate% / 100) / 12 * Months
        const annualYield = (rentalData.value * (rentalData.rate / 100));
        const monthlyRent = annualYield / 12;
        return monthlyRent * rentalData.months;
    }, [rentalData]);

    const futureResult = useMemo(() => {
        // Compound Interest: FV = PV * (1 + r)^n
        return futureData.value * Math.pow(1 + (futureData.appreciation / 100), futureData.years);
    }, [futureData]);

    const handleCalculate = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 800);
    };

    const handleReset = () => {
        setEmiData({ principal: 2500000, tenure: 10, rate: 10 });
        setEligibilityData({ income: 75000, commitment: 10000, tenure: 20, rate: 8.5 });
        setRentalData({ value: 10000000, months: 10, rate: 10 });
        setFutureData({ value: 2500000, years: 10, appreciation: 10 });
    };

    const InputField = ({ label, value, onChange, icon: Icon, suffix }: any) => (
        <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</label>
                {suffix && <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{suffix}</span>}
            </div>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors">
                    <Icon size={16} />
                </div>
                <input 
                    type="number" 
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-11 py-4 text-base font-bold text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all shadow-sm"
                />
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[85rem] mx-auto px-6">
                
                {/* 1. Header Section */}
                <div className="text-center space-y-6 mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 text-primary border border-white/5 text-[9px] font-bold uppercase tracking-[0.4em] shadow-lg">
                        <Cpu size={14} /> Financial Intelligence Node
                    </div>
                    <h1 className="text-3xl md:text-5xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">
                        Real Estate <span className="text-red-600">Calculators</span>
                    </h1>
                    <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
                        "Deploy precision mathematical models to evaluate asset yield, eligibility thresholds, and future equity growth."
                    </p>
                </div>

                {/* 2. Compact Command Dock */}
                <div className="flex flex-wrap lg:flex-nowrap bg-white/80 backdrop-blur-xl p-1.5 rounded-[2.5rem] border border-slate-200 shadow-md gap-1.5 mb-10 animate-fade-in-up">
                    {[
                        { id: 'faq', label: 'Insights', icon: Info },
                        { id: 'eligibility', label: 'Eligibility', icon: Briefcase },
                        { id: 'emi', label: 'EMI Matrix', icon: Calculator },
                        { id: 'rental', label: 'Rental Value', icon: Key },
                        { id: 'future', label: 'Future Value', icon: TrendingUp }
                    ].map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as CalculatorTab)}
                            className={`flex-1 min-w-[150px] p-4 rounded-[1.8rem] transition-all duration-500 text-left group relative ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-xl scale-[1.02] z-10' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeTab === tab.id ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-100 group-hover:bg-slate-900 group-hover:text-white'}`}>
                                    <tab.icon size={18} strokeWidth={activeTab === tab.id ? 2.5 : 1.5} />
                                </div>
                                <h3 className="text-xs font-bold uppercase tracking-widest">{tab.label}</h3>
                            </div>
                        </button>
                    ))}
                </div>

                {/* 3. Main Interface Logic */}
                <div className="animate-fade-in-up delay-100">
                    {activeTab === 'faq' ? (
                        <div className="grid lg:grid-cols-12 gap-8 items-start">
                            {/* FAQ Sidebar */}
                            <div className="lg:col-span-4 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden sticky top-28">
                                <div className="p-8 border-b border-slate-50 bg-slate-950 text-white flex items-center justify-between">
                                    <div>
                                        <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-2">Knowledge Node</h3>
                                        <p className="text-xl font-display font-black uppercase tracking-tight">Need to Know</p>
                                    </div>
                                    <HelpCircle size={20} className="text-primary"/>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    {faqs.map((item, i) => (
                                        <button 
                                            key={i} 
                                            onClick={() => setActiveFaqIndex(i)}
                                            className={`w-full text-left p-6 transition-all duration-300 group flex items-center justify-between border-l-4 ${activeFaqIndex === i ? 'bg-slate-50 border-red-600' : 'bg-white border-transparent hover:bg-slate-50/50'}`}
                                        >
                                            <span className={`text-xs font-bold transition-colors uppercase tracking-tight leading-relaxed max-w-[85%] ${activeFaqIndex === i ? 'text-red-600' : 'text-slate-600'}`}>{item.q}</span>
                                            <ChevronRight size={16} className={`transition-all duration-500 ${activeFaqIndex === i ? 'translate-x-1 text-red-600' : 'text-slate-200 opacity-0 group-hover:opacity-100'}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Display Terminal */}
                            <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-200 min-h-[600px] flex flex-col relative overflow-hidden group/panel">
                                <div className="absolute top-0 right-0 p-16 opacity-[0.01] pointer-events-none group-hover/panel:scale-110 transition-transform duration-[8000ms]"><Network size={500} /></div>
                                
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-slate-100 pb-10">
                                        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-sm"><Info size={28} /></div>
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Section Response Node {activeFaqIndex + 1}</p>
                                            <h3 className="text-xl md:text-2xl font-display font-black text-slate-950 uppercase tracking-tight leading-tight">{faqs[activeFaqIndex].q}</h3>
                                        </div>
                                    </div>

                                    <div className="animate-fade-in-up flex-1" key={activeFaqIndex}>
                                        {faqs[activeFaqIndex].a}
                                    </div>
                                    
                                    <div className="pt-16 mt-auto">
                                        <button className="px-10 py-4 bg-slate-950 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl active:scale-95 flex items-center gap-4">
                                            Read Complete Archive <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden relative group/calc">
                            <div className="grid lg:grid-cols-12 min-h-[600px]">
                                {/* Parameter Input Terminal */}
                                <div className="lg:col-span-5 p-10 md:p-14 bg-slate-50/50 border-r border-slate-100 space-y-12 flex flex-col justify-center">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-display font-black text-slate-950 uppercase tracking-tight flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div> Compute Grid
                                        </h3>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Parameter Entry Node</p>
                                    </div>

                                    <div className="space-y-8">
                                        {activeTab === 'emi' && (
                                            <>
                                                <InputField label="Principal Matrix" icon={IndianRupee} value={emiData.principal} onChange={(v:any) => setEmiData({...emiData, principal: v})} />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <InputField label="Tenure Node" icon={Timer} value={emiData.tenure} onChange={(v:any) => setEmiData({...emiData, tenure: v})} suffix="Yrs" />
                                                    <InputField label="Interest" icon={Percent} value={emiData.rate} onChange={(v:any) => setEmiData({...emiData, rate: v})} suffix="% p.a" />
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'eligibility' && (
                                            <>
                                                <InputField label="Monthly Gross Node" icon={Wallet} value={eligibilityData.income} onChange={(v:any) => setEligibilityData({...eligibilityData, income: v})} />
                                                <InputField label="Fixed Overheads" icon={Receipt} value={eligibilityData.commitment} onChange={(v:any) => setEligibilityData({...eligibilityData, commitment: v})} />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <InputField label="Tenure" icon={Timer} value={eligibilityData.tenure} onChange={(v:any) => setEligibilityData({...eligibilityData, tenure: v})} suffix="Yrs" />
                                                    <InputField label="Rate" icon={Percent} value={eligibilityData.rate} onChange={(v:any) => setEligibilityData({...eligibilityData, rate: v})} suffix="%" />
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'rental' && (
                                            <>
                                                <InputField label="Property Value" icon={IndianRupee} value={rentalData.value} onChange={(v:any) => setRentalData({...rentalData, value: v})} />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <InputField label="Months" icon={Clock} value={rentalData.months} onChange={(v:any) => setRentalData({...rentalData, months: v})} suffix="Units" />
                                                    <InputField label="Rate of Rent" icon={TrendingUpDown} value={rentalData.rate} onChange={(v:any) => setRentalData({...rentalData, rate: v})} suffix="%" />
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'future' && (
                                            <>
                                                <InputField label="Current Property Value" icon={IndianRupee} value={futureData.value} onChange={(v:any) => setFutureData({...futureData, value: v})} />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <InputField label="No. of Years" icon={Calendar} value={futureData.years} onChange={(v:any) => setFutureData({...futureData, years: v})} suffix="Yrs" />
                                                    <InputField label="Average Appreciation" icon={BarChart3} value={futureData.appreciation} onChange={(v:any) => setFutureData({...futureData, appreciation: v})} suffix="%" />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="flex gap-4">
                                        <button 
                                            onClick={handleCalculate}
                                            className="flex-1 py-5 bg-red-600 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.5em] hover:bg-slate-950 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4"
                                        >
                                            Run Analytics <Activity size={18} />
                                        </button>
                                        <button 
                                            onClick={handleReset}
                                            className="px-6 py-5 bg-white border border-slate-200 text-slate-400 rounded-2xl font-bold text-[9px] uppercase tracking-widest hover:text-red-600 transition-all active:scale-95"
                                        >
                                            Reset All
                                        </button>
                                    </div>
                                </div>

                                {/* Intelligent Results Display */}
                                <div className="lg:col-span-7 p-10 md:p-20 flex flex-col items-center justify-center text-center relative bg-white">
                                    <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none"><Calculator size={400} /></div>
                                    
                                    {loading ? (
                                        <div className="space-y-6 animate-pulse relative z-10">
                                            <div className="w-40 h-40 bg-slate-50 rounded-full border-4 border-slate-100 flex items-center justify-center mx-auto"><Cpu size={48} className="text-slate-200 animate-spin-slow" /></div>
                                            <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.8em]">Processing Registry...</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-12 animate-fade-in-up relative z-10 w-full">
                                            <div className="space-y-4">
                                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] font-bold uppercase tracking-widest">
                                                    <ShieldCheck size={14} /> Verified Calculation Protocol
                                                </div>
                                                <h4 className="text-3xl md:text-4xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">
                                                    {activeTab === 'emi' && 'Computed Installment'}
                                                    {activeTab === 'eligibility' && 'Maximum Eligibility'}
                                                    {activeTab === 'rental' && 'Your Rental Value is'}
                                                    {activeTab === 'future' && 'Your Value is'}
                                                </h4>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="text-5xl md:text-7xl font-display font-black text-slate-950 tracking-tighter leading-none flex items-start justify-center">
                                                    <span className="text-2xl md:text-3xl text-slate-300 mt-2 mr-4">₹</span>
                                                    {activeTab === 'emi' && emiResult.toLocaleString()}
                                                    {activeTab === 'eligibility' && eligibilityResult.toLocaleString()}
                                                    {activeTab === 'rental' && rentalResult.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
                                                    {activeTab === 'future' && futureResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] pt-4">Synthesized Result Output</p>
                                            </div>

                                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                                                <button className="px-10 py-5 bg-slate-950 text-primary rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:shadow-2xl transition-all flex items-center gap-4 group/btn active:scale-95 border border-white/5 shadow-xl">
                                                    Initiate Application <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                                                </button>
                                                <button className="px-8 py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center gap-4 active:scale-95 shadow-lg">
                                                    <Download size={18} /> Export Node PDF
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 4. Infrastructure Security Strip */}
                <div className="mt-24 pt-16 border-t border-slate-200 opacity-20 hover:opacity-50 transition-all duration-1000 text-center space-y-12">
                     <p className="text-[10px] font-bold text-slate-900 uppercase tracking-[1.2em]">FINANCIAL SECURITY NETWORK • HUNT PROPERTY HUB</p>
                     <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                         {[ShieldCheck, Globe, Network, Cpu, Landmark, HandCoins, Activity].map((Icon, i) => (
                             <Icon key={i} size={36} strokeWidth={1} className="text-slate-400 hover:text-emerald-600 transition-colors" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLoanCalculatorView;
