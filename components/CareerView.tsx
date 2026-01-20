
import React, { useState } from 'react';
import { 
    Briefcase, User, Mail, Phone, MapPin, 
    ChevronDown, Upload, Send, Sparkles, 
    CheckCircle2, FileText, Globe, Star,
    Target, Zap, Clock, ArrowRight
} from 'lucide-react';

const CareerView = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        jobCategory: '',
        expYears: '',
        expMonths: '',
        description: '',
        source: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate recruitment API submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1800);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-6 flex items-center justify-center">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 max-w-xl w-full text-center animate-fade-in-up">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-display font-black text-slate-900 uppercase tracking-tight mb-4">Application Sent</h2>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed italic">
                        "Your talent profile has been transmitted to our recruitment hub. Our human capital specialists will analyze your fit and contact you shortly."
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-slate-950 transition-all shadow-xl active:scale-95"
                    >
                        Return to Careers
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] pt-32 pb-32 font-sans selection:bg-primary selection:text-slate-900">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Futuristic Header */}
                <div className="text-center md:text-left mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                        <Zap size={12} className="fill-primary" /> Talent Acquisition Hub
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
                        Join the <br/><span className="text-red-600 italic">Evolution</span>
                    </h1>
                    <div className="max-w-4xl space-y-6">
                        <p className="text-slate-600 font-medium text-lg leading-relaxed border-l-4 border-red-600/20 pl-8 italic">
                            "At Hunt Property, we look for astute/ingenious thinkers who can add value to our business, have excellent work ethics, and are driven to take our organization and their own careers to new heights. We consider all three elements equally important for the mutual growth and success of the company and the person as well."
                        </p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest ml-8">
                            Please fill in the intelligence profile below and we will reach back to you.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Main Application Form Node */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms]">
                                <Sparkles size={300} />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                
                                {/* Name Row */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name <span className="text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.firstName}
                                            onChange={e => setFormData({...formData, firstName: e.target.value})}
                                            placeholder="Enter First Name"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                                        <input 
                                            type="text" 
                                            value={formData.lastName}
                                            onChange={e => setFormData({...formData, lastName: e.target.value})}
                                            placeholder="Enter Last Name"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" 
                                        />
                                    </div>
                                </div>

                                {/* Contact Row */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Coordinates <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input 
                                                type="email" 
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({...formData, email: e.target.value})}
                                                placeholder="name@domain.com"
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 pl-14 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Interface <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input 
                                                type="tel" 
                                                required
                                                value={formData.phone}
                                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                                placeholder="+91"
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 pl-14 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Geography Row */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">State Node <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <select 
                                                required
                                                value={formData.state}
                                                onChange={e => setFormData({...formData, state: e.target.value})}
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 focus:bg-white appearance-none cursor-pointer transition-all shadow-inner"
                                            >
                                                <option value="">Select State</option>
                                                <option>Uttar Pradesh</option>
                                                <option>Delhi</option>
                                                <option>Maharashtra</option>
                                                <option>Tamil Nadu</option>
                                            </select>
                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">City Grid <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <select 
                                                required
                                                value={formData.city}
                                                onChange={e => setFormData({...formData, city: e.target.value})}
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 focus:bg-white appearance-none cursor-pointer transition-all shadow-inner"
                                            >
                                                <option value="">Select City</option>
                                                <option>Noida</option>
                                                <option>Gurugram</option>
                                                <option>Mumbai</option>
                                                <option>Chennai</option>
                                            </select>
                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Row */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Job Category <span className="text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.jobCategory}
                                            onChange={e => setFormData({...formData, jobCategory: e.target.value})}
                                            placeholder="e.g. Real Estate Consultant"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" 
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Experience Maturity <span className="text-red-500">*</span></label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative">
                                                <select 
                                                    value={formData.expYears}
                                                    onChange={e => setFormData({...formData, expYears: e.target.value})}
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-red-600 appearance-none shadow-inner"
                                                >
                                                    <option>Select Years</option>
                                                    {[...Array(20)].map((_, i) => <option key={i}>{i} Years</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
                                            </div>
                                            <div className="relative">
                                                <select 
                                                    value={formData.expMonths}
                                                    onChange={e => setFormData({...formData, expMonths: e.target.value})}
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-red-600 appearance-none shadow-inner"
                                                >
                                                    <option>Select Months</option>
                                                    {[...Array(12)].map((_, i) => <option key={i}>{i} Months</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Asset Upload */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Resume / CV Asset <span className="text-red-500">*</span></label>
                                    <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-white hover:border-red-600/30 transition-all cursor-pointer group/upload">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover/upload:text-red-600 group-hover/upload:scale-110 transition-all shadow-sm mb-4">
                                            <Upload size={24} />
                                        </div>
                                        <p className="text-xs font-black text-slate-900 uppercase">Transmit Resume Protocol</p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">PDF, DOCX (Max 5MB)</p>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>

                                {/* Deep Intelligence */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Self-Description Node <span className="text-red-500">*</span></label>
                                    <textarea 
                                        required
                                        value={formData.description}
                                        onChange={e => setFormData({...formData, description: e.target.value})}
                                        placeholder="Describe your professional DNA and catalytic potential..."
                                        className="w-full h-40 bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-8 py-6 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner resize-none"
                                    />
                                </div>

                                {/* Source Node */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Position Discovery Vector <span className="text-red-500">*</span></label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.source}
                                        onChange={e => setFormData({...formData, source: e.target.value})}
                                        placeholder="How did you learn about this position?"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" 
                                    />
                                </div>

                                {/* Action Console */}
                                <div className="pt-6">
                                    <button 
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-6 bg-red-600 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-slate-950 transition-all shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-4 group/btn"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>Finalize Application Transmission <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar: Talent Matrix */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-28 space-y-8">
                            
                            {/* Mission Node */}
                            <div className="bg-slate-950 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-50"></div>
                                <h3 className="text-2xl font-display font-black uppercase mb-6 text-primary flex items-center gap-3">
                                    <Target size={24} /> Mission 2025
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium">
                                    "We create this mutuality of interest, not just with salary compensations that match the best in the industry, but also with meticulous training, counselling, and creation of opportunities to hone and polish skills."
                                </p>
                            </div>

                            {/* Culture Stats */}
                            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl space-y-8">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Culture DNA</h4>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Innovation Node', val: '98%', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
                                        { label: 'Talent Growth', val: '4x', icon: Briefcase, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                                        { label: 'Work Harmony', val: 'High', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border border-white`}>
                                                <stat.icon size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                                <p className="text-lg font-display font-black text-slate-900">{stat.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg flex items-center gap-6">
                                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                                    <Star size={32} fill="currentColor" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">Voted Best Hub</h4>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Real Estate Talent Awards 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Security Strip */}
                <div className="mt-24 pt-12 border-t border-slate-100 opacity-20 flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.6em] text-slate-900">
                    <span>Talent Encrypted</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                    <span>Global Screening</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                    <span>Privacy Secured</span>
                </div>
            </div>
        </div>
    );
};

export default CareerView;
