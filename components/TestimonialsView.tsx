import React, { useState } from 'react';
import { 
    Send, Upload, User, Mail, Phone, 
    ChevronDown, CheckCircle2, Globe, Landmark, 
    ShieldCheck, MessageSquare, Image, Sparkles
} from 'lucide-react';

const TestimonialsView = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        testimonial: '',
        allowMarketing: 'No'
    });
    const [charCount, setCharCount] = useState(500);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        if (val.length <= 500) {
            setFormData({ ...formData, testimonial: val });
            setCharCount(500 - val.length);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const states = ["Delhi", "Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Haryana"];
    const cities = ["Noida", "Mumbai", "New Delhi", "Bengaluru", "Chennai", "Gurugram"];

    return (
        <div className="min-h-screen bg-white pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            {/* 80px side margins for desktop */}
            <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
                
                {/* 1. Minimalist Header - Reduced Sizes */}
                <div className="text-center space-y-6 mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-400 border border-slate-100 text-[9px] font-bold uppercase tracking-[0.2em]">
                        <MessageSquare size={12} /> Community Feedback
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                            Share Your <span className="text-red-600">Success Story</span>
                        </h1>
                        <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                            Tell us about your experience navigating the property market. Your journey helps others find their way home.
                        </p>
                    </div>
                </div>

                {/* 2. Refined Form Hub - Narrower Max Width for Better UX */}
                <div className="max-w-3xl mx-auto">
                    {submitted ? (
                        <div className="bg-slate-50 rounded-[2.5rem] p-12 text-center animate-fade-in-up space-y-8 border border-slate-100 shadow-sm">
                            <div className="w-20 h-20 bg-white text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm border border-slate-50">
                                <CheckCircle2 size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Transmission Received</h3>
                                <p className="text-slate-500 text-sm">Thank you for sharing. Your story is now being processed for our registry.</p>
                            </div>
                            <button 
                                onClick={() => setSubmitted(false)} 
                                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95"
                            >
                                Submit Another Node
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.03)] border border-slate-100 space-y-10">
                            
                            {/* Personal Details */}
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] border-b border-slate-50 pb-3">Identity Node</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { label: 'First Name', name: 'firstName', icon: User, placeholder: 'Identity' },
                                        { label: 'Last Name', name: 'lastName', icon: User, placeholder: 'Heritage' },
                                        { label: 'Email Coordinate', name: 'email', type: 'email', icon: Mail, placeholder: 'name@domain.com' },
                                        { label: 'Secure Line', name: 'phone', type: 'tel', icon: Phone, placeholder: '+91' },
                                    ].map((field) => (
                                        <div key={field.name} className="space-y-2 group">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-red-600 transition-colors">{field.label}</label>
                                            <div className="relative">
                                                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={14} />
                                                <input 
                                                    type={field.type || 'text'}
                                                    required
                                                    placeholder={field.placeholder}
                                                    className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-5 py-3.5 pl-11 text-sm font-medium text-slate-900 outline-none focus:border-red-600/30 focus:bg-white transition-all"
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Region</label>
                                        <div className="relative">
                                            <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                            <select className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-5 py-3.5 pl-11 text-sm font-medium text-slate-900 outline-none focus:border-red-600/30 focus:bg-white appearance-none cursor-pointer transition-all">
                                                <option>Select State</option>
                                                {states.map(s => <option key={s}>{s}</option>)}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
                                        </div>
                                    </div>

                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Urban Cluster</label>
                                        <div className="relative">
                                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                            <select className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-5 py-3.5 pl-11 text-sm font-medium text-slate-900 outline-none focus:border-red-600/30 focus:bg-white appearance-none cursor-pointer transition-all">
                                                <option>Select City</option>
                                                {cities.map(c => <option key={c}>{c}</option>)}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Area */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Experiential Narrative</h4>
                                    <span className={`text-[9px] font-bold uppercase tracking-widest ${charCount < 50 ? 'text-red-600 animate-pulse' : 'text-slate-300'}`}>{charCount} char remaining</span>
                                </div>
                                <textarea 
                                    required
                                    value={formData.testimonial}
                                    onChange={handleTextChange}
                                    placeholder="Describe your journey..."
                                    className="w-full h-44 bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium text-slate-700 leading-relaxed outline-none focus:border-red-600/30 focus:bg-white transition-all resize-none italic"
                                />
                            </div>

                            {/* Media & Permissions */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Visual Asset</label>
                                    <div className="border-2 border-dashed border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50/30 hover:bg-white hover:border-red-600/20 transition-all cursor-pointer group/upload">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-300 group-hover/upload:text-red-600 transition-all shadow-sm mb-3 border border-slate-50">
                                            <Image size={20} />
                                        </div>
                                        <p className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">Add Photo</p>
                                        <p className="text-[8px] text-slate-400 uppercase mt-1">JPEG, PNG • Max 5MB</p>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Usage Protocol</label>
                                    <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100 space-y-4">
                                        <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight">Permission for marketing usage?</p>
                                        <div className="flex gap-6">
                                            {['Yes', 'No'].map(v => (
                                                <label key={v} className="flex items-center gap-3 cursor-pointer group/radio">
                                                    <div className="relative flex items-center justify-center">
                                                        <input 
                                                            type="radio" 
                                                            name="permission" 
                                                            value={v} 
                                                            checked={formData.allowMarketing === v}
                                                            onChange={e => setFormData({...formData, allowMarketing: e.target.value})}
                                                            className="peer sr-only" 
                                                        />
                                                        <div className="w-5 h-5 rounded-full border-2 border-slate-200 peer-checked:border-red-600 transition-all"></div>
                                                        <div className="absolute w-2 h-2 rounded-full bg-red-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                                                    </div>
                                                    <span className="text-[11px] font-bold uppercase text-slate-400 peer-checked:text-slate-950 transition-colors">{v}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 bg-slate-950 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.4em] hover:bg-red-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4 group/btn disabled:opacity-50"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>Finalize Entry <Send size={14} className="group-hover/btn:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* 3. Global Footer Strip - Scaled Down */}
                <div className="mt-32 pt-12 border-t border-slate-50 opacity-30 hover:opacity-100 transition-opacity duration-1000 text-center space-y-10 group/strip">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.8em]">HUNT PROPERTY SUCCESS HUB • V.2025</p>
                     <div className="flex flex-wrap justify-center gap-16 grayscale group-hover:grayscale-0 transition-all duration-700">
                         {[ShieldCheck, Globe, Landmark, Sparkles].map((Icon, i) => (
                             <Icon key={i} size={28} strokeWidth={1} className="text-slate-300 hover:text-red-600 transition-colors" />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsView;