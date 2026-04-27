import React, { useState } from 'react';
import { 
    Rocket, Target, TrendingUp, CheckCircle2, 
    Zap, ChevronRight, ArrowLeft, X, 
    ShieldCheck, Globe2, BarChart3, Clock, 
    Layers, MousePointer2, Phone, Mail,
    MapPin, Navigation, Search, Map
} from 'lucide-react';

interface BoostModalProps {
    isOpen: boolean;
    onClose: () => void;
    property?: {
        id: string;
        title: string;
        price: string;
        location?: string;
    };
    onComplete: (plan: any) => void;
}

type Step = 1 | 2 | 3 | 4;

const BoostModal: React.FC<BoostModalProps> = ({ isOpen, onClose, property, onComplete }) => {
    const [step, setStep] = useState<Step>(1);
    const [goal, setGoal] = useState<'leads' | 'reach' | null>(null);
    const [boostType, setBoostType] = useState<'local' | 'intercity'>('local');
    const [targetCity, setTargetCity] = useState('');
    const [radius, setRadius] = useState(20);
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

    const plans = [
        { id: 1, name: 'Basic Boost', duration: 7, reach: '1,200+', price: 499, description: 'Quick visibility spike' },
        { id: 2, name: 'Silver Boost', duration: 15, reach: '3,500+', price: 999, description: 'Steady lead flow' },
        { id: 3, name: 'Platinum Boost', duration: 30, reach: '8,000+', price: 1799, description: 'Maximum market dominance' }
    ];

    if (!isOpen) return null;

    const nextStep = () => setStep((prev) => (prev < 4 ? (prev + 1) as Step : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? (prev - 1) as Step : prev));

    const handleComplete = () => {
        const plan = plans.find(p => p.id === selectedPlan);
        onComplete({ 
            ...plan, 
            goal, 
            boostType, 
            targetCity, 
            radius,
            propertyId: property?.id 
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
            
            <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#20F29E]/10 rounded-xl flex items-center justify-center">
                            <Rocket className="text-[#20F29E]" size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">Hypersonic Boost</h2>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {step} of 4: {
                                step === 1 ? 'Goal Selection' : 
                                step === 2 ? 'Location Parameter' : 
                                step === 3 ? 'Fuel Plan' : 'Final Ignition'
                            }</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                <div className="p-8">
                    {/* Step 1: Goal Selection */}
                    {step === 1 && (
                        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">Define Your Mission</h3>
                                <p className="text-slate-500 text-sm font-medium italic">Select the primary objective for this promotion</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <button 
                                    onClick={() => setGoal('leads')}
                                    className={`p-8 rounded-[2rem] border-2 transition-all text-left space-y-4 group relative ${goal === 'leads' ? 'border-[#20F29E] bg-[#20F29E]/5 shadow-lg shadow-[#20F29E]/10' : 'border-slate-100 hover:border-slate-200 bg-slate-50'}`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${goal === 'leads' ? 'bg-[#20F29E] text-[#1A1A1A]' : 'bg-white text-slate-400 group-hover:bg-[#20F29E]/20'}`}>
                                        <TrendingUp size={28} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-black text-[#1A1A1A] uppercase text-sm tracking-tight">Max Leads</h4>
                                        <p className="text-xs text-slate-500 font-medium">Focus on high-intent inquiries, calls, and emails.</p>
                                    </div>
                                    {goal === 'leads' && <CheckCircle2 size={24} className="text-[#20F29E] absolute top-4 right-4" />}
                                </button>

                                <button 
                                    onClick={() => setGoal('reach')}
                                    className={`p-8 rounded-[2rem] border-2 transition-all text-left space-y-4 group relative ${goal === 'reach' ? 'border-[#20F29E] bg-[#20F29E]/5 shadow-lg shadow-[#20F29E]/10' : 'border-slate-100 hover:border-slate-200 bg-slate-50'}`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${goal === 'reach' ? 'bg-[#20F29E] text-[#1A1A1A]' : 'bg-white text-slate-400 group-hover:bg-[#20F29E]/20'}`}>
                                        <Target size={28} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-black text-[#1A1A1A] uppercase text-sm tracking-tight">Max Reach</h4>
                                        <p className="text-xs text-slate-500 font-medium">Optimize for search ranking and overall views.</p>
                                    </div>
                                    {goal === 'reach' && <CheckCircle2 size={24} className="text-[#20F29E] absolute top-4 right-4" />}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Location Parameter (NEW) */}
                    {step === 2 && (
                        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                             <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">Location Parameter</h3>
                                <p className="text-slate-500 text-sm font-medium italic">Define the geographic boundaries of your boost</p>
                            </div>

                            <div className="space-y-6">
                                {/* Toggle local vs intercity */}
                                <div className="flex bg-slate-100 p-1.5 rounded-2xl relative">
                                    <div 
                                        className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-white rounded-xl shadow-sm transition-all duration-300 ${boostType === 'intercity' ? 'translate-x-[100%]' : 'translate-x-0'}`}
                                    />
                                    <button 
                                        onClick={() => setBoostType('local')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors ${boostType === 'local' ? 'text-[#1A1A1A]' : 'text-slate-400'}`}
                                    >
                                        <Navigation size={14} /> LOCAL BOOST
                                    </button>
                                    <button 
                                        onClick={() => setBoostType('intercity')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors ${boostType === 'intercity' ? 'text-[#1A1A1A]' : 'text-slate-400'}`}
                                    >
                                        <Map size={14} /> INTER-CITY BOOST
                                    </button>
                                </div>

                                {boostType === 'local' ? (
                                    <div className="bg-[#20F29E]/5 border border-[#20F29E]/10 rounded-3xl p-6 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-black text-[#20F29E] uppercase tracking-widest">Base Location</h4>
                                                <p className="text-lg font-black text-[#1A1A1A] uppercase">{property?.location || 'Srinagar, Jammu & Kashmir'}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                                                <MapPin className="text-[#20F29E]" size={20} />
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-[#20F29E]/10">
                                            <div className="flex justify-between items-center">
                                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Blast Radius</h4>
                                                <span className="px-3 py-1 bg-[#1A1A1A] text-[#20F29E] rounded-full text-[10px] font-black">{radius === 100 ? 'State-wide' : `${radius} KM`}</span>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="10" 
                                                max="100" 
                                                step="10"
                                                value={radius}
                                                onChange={(e) => setRadius(parseInt(e.target.value))}
                                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#20F29E]"
                                            />
                                            <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase tracking-widest">
                                                <span>10 KM</span>
                                                <span>50 KM</span>
                                                <span>State-wide</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Target Growth Hub</h4>
                                            <div className="relative">
                                                <input 
                                                    type="text" 
                                                    placeholder="Search City (e.g. Bangalore, Mumbai)..." 
                                                    value={targetCity}
                                                    onChange={(e) => setTargetCity(e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-bold outline-none focus:border-[#20F29E] transition-all shadow-sm"
                                                />
                                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {['Noida', 'Chennai', 'Mumbai', 'Indore'].map(city => (
                                                    <button 
                                                        key={city}
                                                        onClick={() => setTargetCity(city)}
                                                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${targetCity === city ? 'bg-[#1A1A1A] text-white' : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-200'}`}
                                                    >
                                                        {city}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                         <div className="space-y-4 pt-4 border-t border-slate-200">
                                            <div className="flex justify-between items-center">
                                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Targeting Precision</h4>
                                                <span className="px-3 py-1 bg-[#1A1A1A] text-[#20F29E] rounded-full text-[10px] font-black">{radius} KM Radius</span>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="10" 
                                                max="100" 
                                                step="10"
                                                value={radius}
                                                onChange={(e) => setRadius(parseInt(e.target.value))}
                                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#20F29E]"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Plan Selection */}
                    {step === 3 && (
                        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">Select Your Fuel Plan</h3>
                                <p className="text-slate-500 text-sm font-medium italic">Premium reach packages for maximum impact</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-4">
                                {plans.map(plan => (
                                    <button 
                                        key={plan.id}
                                        onClick={() => setSelectedPlan(plan.id)}
                                        className={`flex-1 min-w-[200px] p-6 rounded-3xl border-2 transition-all text-center space-y-4 relative ${selectedPlan === plan.id ? 'border-[#20F29E] bg-white shadow-xl scale-[1.02]' : 'border-slate-100 hover:border-slate-200 bg-slate-50'}`}
                                    >
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{plan.duration} Days</span>
                                            <h4 className="font-black text-[#1A1A1A] uppercase italic text-sm">{plan.name}</h4>
                                        </div>
                                        <div className="py-4 border-y border-slate-100">
                                            <p className="text-2xl font-black text-[#1A1A1A]">₹{plan.price}</p>
                                            <p className="text-[10px] font-bold text-[#20F29E] uppercase tracking-widest">Est. Reach: {plan.reach}</p>
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-bold italic">{plan.description}</p>
                                        {selectedPlan === plan.id && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#20F29E] text-[#1A1A1A] px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Active</div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Final Ignition (Checkout) */}
                    {step === 4 && (
                        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">System Check</h3>
                                <p className="text-slate-500 text-sm font-medium italic">Final review of your hypersonic configuration</p>
                            </div>

                            <div className="bg-[#1A1A1A] rounded-[2rem] p-8 text-white space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                    <Rocket size={180} />
                                </div>
                                
                                <div className="space-y-5 relative z-10">
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Asset</span>
                                        <span className="text-xs font-bold uppercase truncate max-w-[200px]">{property?.title}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Targeting</span>
                                        <div className="text-right">
                                            <p className="text-xs font-bold uppercase text-[#20F29E]">{boostType === 'local' ? 'Local Hyper-Boost' : 'Inter-City Hub'}</p>
                                            <p className="text-[9px] font-medium text-slate-400 uppercase">{boostType === 'local' ? radius === 100 ? 'State-wide coverage' : `${radius}km Radius` : `${targetCity} @ ${radius}km`}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficiency Goal</span>
                                        <span className="text-xs font-bold uppercase">{goal === 'leads' ? 'Inquiry Maximization' : 'Visibility Spike'}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="space-y-1">
                                            <span className="text-xs font-black text-white uppercase tracking-widest">Mission Cost</span>
                                            <p className="text-[8px] font-bold text-slate-500 uppercase">Inclusive of all platform taxes</p>
                                        </div>
                                        <span className="text-3xl font-black text-[#20F29E]">₹{plans.find(p => p.id === selectedPlan)?.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                    <ShieldCheck className="text-[#20F29E]" size={20} />
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Secured via end-to-end encrypted payment gateway. Priority support included.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="p-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
                    <button 
                        onClick={prevStep}
                        disabled={step === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-[#1A1A1A] hover:bg-white hover:shadow-md'}`}
                    >
                        <ArrowLeft size={14} /> Back
                    </button>
                    
                    {step < 4 ? (
                        <button 
                            onClick={nextStep}
                            disabled={(step === 1 && !goal) || (step === 2 && boostType === 'intercity' && !targetCity) || (step === 3 && !selectedPlan)}
                            className="flex items-center gap-2 px-10 py-3.5 bg-[#1A1A1A] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#20F29E] hover:text-[#1A1A1A] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-black/10"
                        >
                            Continue Mission <ChevronRight size={14} />
                        </button>
                    ) : (
                        <button 
                            onClick={handleComplete}
                            className="flex items-center gap-2 px-10 py-4 bg-[#20F29E] text-[#1A1A1A] rounded-xl font-black text-[12px] uppercase tracking-widest hover:brightness-105 hover:shadow-2xl hover:shadow-[#20F29E]/20 transition-all shadow-lg"
                        >
                            Authorize Ignition <Zap size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BoostModal;
