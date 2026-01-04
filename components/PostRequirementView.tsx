
import React, { useState } from 'react';
import { 
    User, Mail, Phone, Globe, MapPin, Building, 
    Home, CheckCircle2, ChevronDown, ListFilter, 
    DollarSign, Ruler, Sparkles, Send, ArrowRight
} from 'lucide-react';

interface PostRequirementViewProps {
    onComplete: () => void;
}

const PostRequirementView: React.FC<PostRequirementViewProps> = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        userType: 'Individual',
        name: 'RISHI KESAVAN S K',
        email: 'klnmca6@gmail.com',
        mobile: '9003486509',
        country: 'India',
        state: 'Tamil Nadu',
        residency: 'Resident',
        intent: 'To Buy',
        propertyType: '',
        targetState: '',
        targetCity: '',
        locality: '',
        bhk: '',
        finishing: '',
        possession: '',
        minArea: '',
        maxArea: '',
        minPrice: '',
        maxPrice: '',
        paymentPlan: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-6 flex items-center justify-center">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 max-w-xl w-full text-center animate-fade-in-up">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-display font-black text-slate-900 uppercase tracking-tight mb-4">Requirement Logged</h2>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed italic">
                        "Your vision has been transmitted. Our specialist team will curate matching opportunities and contact you shortly."
                    </p>
                    <button 
                        onClick={onComplete}
                        className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-slate-950 transition-all shadow-xl active:scale-95"
                    >
                        Back to Portal
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] pt-32 pb-32">
            <div className="max-w-5xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                        <Sparkles size={12} /> Personalized Curation
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">Post Your <br/><span className="text-red-600 italic">Requirement</span></h1>
                    <p className="text-slate-500 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
                        At Hunt Property, we look for astute thinkers who add value. Please fill in the intelligence profile below and our advisors will reach back to you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    
                    {/* Personal Details Panel */}
                    <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><User size={240} /></div>
                        
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-lg"><User size={28} /></div>
                            <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">Personal Intelligence</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* I Am Row */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entity Class</label>
                                <div className="flex gap-4">
                                    {['Individual', 'Corporate'].map(v => (
                                        <button 
                                            key={v}
                                            type="button"
                                            onClick={() => setFormData({...formData, userType: v})}
                                            className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${formData.userType === v ? 'bg-slate-950 border-slate-950 text-white shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-red-600/20'}`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 pl-14 text-sm font-black outline-none focus:border-red-600 transition-all shadow-inner" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Coordinates</label>
                                <div className="relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    <input 
                                        type="email" 
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 pl-14 text-sm font-black outline-none focus:border-red-600 transition-all shadow-inner" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Interface</label>
                                <div className="relative">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    <input 
                                        type="tel" 
                                        required
                                        value={formData.mobile}
                                        onChange={e => setFormData({...formData, mobile: e.target.value})}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 pl-14 text-sm font-black outline-none focus:border-red-600 transition-all shadow-inner" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Country of Origin</label>
                                <div className="relative">
                                    <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    <input 
                                        type="text" 
                                        value={formData.country}
                                        onChange={e => setFormData({...formData, country: e.target.value})}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 pl-14 text-sm font-black outline-none focus:border-red-600 transition-all shadow-inner" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">State / Province</label>
                                <div className="relative">
                                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    <input 
                                        type="text" 
                                        value={formData.state}
                                        onChange={e => setFormData({...formData, state: e.target.value})}
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 pl-14 text-sm font-black outline-none focus:border-red-600 transition-all shadow-inner" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Residency Status</label>
                                <div className="flex gap-4">
                                    {['Resident', 'Non Resident'].map(v => (
                                        <button 
                                            key={v}
                                            type="button"
                                            onClick={() => setFormData({...formData, residency: v})}
                                            className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${formData.residency === v ? 'bg-red-600 border-red-600 text-white shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-red-600/20'}`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Objective</label>
                                <div className="flex gap-4">
                                    {['To Buy', 'To Rent', 'Other'].map(v => (
                                        <button 
                                            key={v}
                                            type="button"
                                            onClick={() => setFormData({...formData, intent: v})}
                                            className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${formData.intent === v ? 'bg-slate-950 border-slate-950 text-white shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-red-600/20'}`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Specs Panel */}
                    <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><Building size={240} /></div>

                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"><Building size={28} /></div>
                            <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">Property Parameters</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Asset Class</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.propertyType}
                                        onChange={e => setFormData({...formData, propertyType: e.target.value})}
                                    >
                                        <option value="">Select Property Type</option>
                                        <option>Apartment</option>
                                        <option>Villa</option>
                                        <option>Plot / Land</option>
                                        <option>Commercial Office</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target State</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.targetState}
                                        onChange={e => setFormData({...formData, targetState: e.target.value})}
                                    >
                                        <option value="">Select State</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Delhi</option>
                                        <option>Haryana</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target City</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.targetCity}
                                        onChange={e => setFormData({...formData, targetCity: e.target.value})}
                                    >
                                        <option value="">Select City</option>
                                        <option>Noida</option>
                                        <option>Gurugram</option>
                                        <option>New Delhi</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Locality</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Sector 150"
                                    value={formData.locality}
                                    onChange={e => setFormData({...formData, locality: e.target.value})}
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 shadow-inner" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">BHK Configuration</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.bhk}
                                        onChange={e => setFormData({...formData, bhk: e.target.value})}
                                    >
                                        <option value="">Select BHK</option>
                                        <option>1 BHK</option>
                                        <option>2 BHK</option>
                                        <option>3 BHK</option>
                                        <option>4 BHK+</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Finishing Class</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.finishing}
                                        onChange={e => setFormData({...formData, finishing: e.target.value})}
                                    >
                                        <option value="">Select Finish</option>
                                        <option>Raw / Bare Shell</option>
                                        <option>Semi-Furnished</option>
                                        <option>Fully-Furnished</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Possession Horizon</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.possession}
                                        onChange={e => setFormData({...formData, possession: e.target.value})}
                                    >
                                        <option value="">Select Possession</option>
                                        <option>Ready to Move</option>
                                        <option>Within 6 Months</option>
                                        <option>1 - 2 Years</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2"><Ruler size={12}/> Space Magnitude (Sq. Ft)</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="number" placeholder="Min Area" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 shadow-inner" />
                                    <input type="number" placeholder="Max Area" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 shadow-inner" />
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2"><DollarSign size={12}/> Budgetary Spectrum</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="number" placeholder="Min Price" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 shadow-inner" />
                                    <input type="number" placeholder="Max Price" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 shadow-inner" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Payment Strategy</label>
                                <div className="relative">
                                    <select 
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                                        value={formData.paymentPlan}
                                        onChange={e => setFormData({...formData, paymentPlan: e.target.value})}
                                    >
                                        <option value="">Select Payment Plan</option>
                                        <option>Construction Linked (CLP)</option>
                                        <option>Possession Linked (PLP)</option>
                                        <option>Full Downpayment</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submission Action */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                        <div className="flex items-center gap-4 text-slate-400">
                             <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                             <p className="text-[10px] font-black uppercase tracking-[0.3em]">End-to-End Encryption Enabled</p>
                        </div>
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto px-20 py-6 rounded-[2rem] bg-red-600 text-white font-black text-lg uppercase tracking-widest hover:bg-red-700 hover:-translate-y-1 transition-all shadow-2xl shadow-red-600/30 active:scale-95 flex items-center justify-center gap-4 group"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>Submit Intelligence <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" /></>
                            )}
                        </button>
                    </div>
                </form>

                {/* Footer Meta Strip */}
                <div className="mt-20 py-8 border-t border-slate-100 flex flex-wrap justify-center gap-12 opacity-30">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div><span className="text-[9px] font-black uppercase tracking-[0.4em]">Data Sovereignty</span></div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div><span className="text-[9px] font-black uppercase tracking-[0.4em]">Zero Knowledge Protocol</span></div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div><span className="text-[9px] font-black uppercase tracking-[0.4em]">Quantum Secure Vault</span></div>
                </div>
            </div>
        </div>
    );
};

export default PostRequirementView;
