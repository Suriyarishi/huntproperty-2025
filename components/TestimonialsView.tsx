import React, { useState } from 'react';
import { 
    Quote, Star, MapPin, Send, Upload, 
    Sparkles, User, Mail, Phone, ChevronDown, 
    CheckCircle2, Globe, ShieldCheck,
    MessageSquareQuote, Landmark
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
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            {/* 80px side margins achieved with px-20 on desktop */}
            <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
                
                {/* 1. Header Protocol */}
                <div className="text-center space-y-6 mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-lg">
                        <MessageSquareQuote size={14} /> Neural Ledger of Success
                    </div>
                    <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
                        VIVID EXPERIENCE <br/><span className="text-red-600 italic">OF THE PEOPLE</span>
                    </h1>
                    <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
                        "Learn what people have to say about their journey through the property grid."
                    </p>
                </div>

                {/* 2. Testimonial Archive Registry */}
                <div className="grid lg:grid-cols-1 gap-12 mb-32">
                    {/* ASHOK KUMAR - PRIMARY NODE */}
                    <div className="relative bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-100 overflow-hidden group animate-fade-in-up">
                        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                                <User size={48} className="text-slate-300" />
                            </div>
                            
                            <div className="space-y-8 max-w-4xl">
                                <div className="flex justify-center text-amber-400 gap-1">
                                    {[1,2,3,4,5].map(s => <Star key={s} size={24} className="fill-current" />)}
                                </div>
                                <div className="relative">
                                    <Quote size={60} className="absolute -top-10 -left-10 text-red-600/10 fill-red-600/5 rotate-12" />
                                    <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed italic">
                                        "Associating with Hunt Property was a hassle free experience for me and my family. I would highly recommend them to all who are looking for a new house. Thanks to Mr. Kapoor and his whole team for all the hard work & support they have given us in completing the registration process of my unit in Supertech. I will be glad reconnect with Hunt Property for future deals."
                                    </p>
                                    <Quote size={60} className="absolute -bottom-10 -right-10 text-red-600/10 fill-red-600/5 rotate-[192deg]" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tighter">ASHOK KUMAR</h3>
                                    <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                                        <Globe size={12} className="text-red-600" /> INDIA NODE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Send Success Story Section */}
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Info Card */}
                    <div className="lg:col-span-4 space-y-8 sticky top-32">
                        <div className="bg-slate-950 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                                    <Sparkles size={32} />
                                </div>
                                <h2 className="text-3xl font-display font-black uppercase tracking-tight leading-none">Deposit Your <br/><span className="text-primary italic">Success Story</span></h2>
                                <p className="text-slate-400 text-lg leading-relaxed italic font-medium">
                                    "Your victory is the fuel for our evolution. Share your architectural journey with the global grid."
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl flex items-center gap-6 group">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-slate-950 uppercase tracking-widest leading-none">Security Protocol</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Verified Identity Synchronization</p>
                            </div>
                        </div>
                    </div>

                    {/* Submission Node (Form) */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-200 relative overflow-hidden">
                            {submitted ? (
                                <div className="text-center py-20 animate-fade-in-up space-y-10">
                                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-display font-black text-slate-900 uppercase tracking-tighter">Story Decrypted</h3>
                                        <p className="text-slate-500 font-medium italic">"Transmission successful. Your data node is now pending validation in the master registry."</p>
                                    </div>
                                    <button onClick={() => setSubmitted(false)} className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl">Initialize New Entry</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        {[
                                            { label: 'First Name', name: 'firstName', icon: User, placeholder: 'Enter Identity' },
                                            { label: 'Last Name', name: 'lastName', icon: User, placeholder: 'Enter Heritage' },
                                            { label: 'Email Coordinate', name: 'email', type: 'email', icon: Mail, placeholder: 'name@domain.com' },
                                            { label: 'Secure Line', name: 'phone', type: 'tel', icon: Phone, placeholder: '+91 0000 000 000' },
                                        ].map((field) => (
                                            <div key={field.name} className="space-y-2.5 group">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4 group-focus-within:text-red-600 transition-colors">{field.label}</label>
                                                <div className="relative">
                                                    <field.icon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-red-600 transition-colors" size={16} />
                                                    <input 
                                                        type={field.type || 'text'}
                                                        required
                                                        placeholder={field.placeholder}
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-8 py-5 pl-14 text-sm font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner"
                                                    />
                                                </div>
                                            </div>
                                        ))}

                                        <div className="space-y-2.5 group">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4">Regional Node (State)</label>
                                            <div className="relative">
                                                <Landmark className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-8 py-5 pl-14 text-sm font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white appearance-none cursor-pointer transition-all shadow-inner">
                                                    <option>Select State</option>
                                                    {states.map(s => <option key={s}>{s}</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5 group">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4">Urban Cluster (City)</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-8 py-5 pl-14 text-sm font-black text-slate-950 outline-none focus:border-red-600 focus:bg-white appearance-none cursor-pointer transition-all shadow-inner">
                                                    <option>Select City</option>
                                                    {cities.map(c => <option key={c}>{c}</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center px-4">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Story Deep-Intel</label>
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${charCount < 50 ? 'text-red-600 animate-pulse' : 'text-slate-300'}`}>({charCount} characters left)</span>
                                        </div>
                                        <textarea 
                                            required
                                            value={formData.testimonial}
                                            onChange={handleTextChange}
                                            placeholder="Define your experiential node..."
                                            className="w-full h-48 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] px-10 py-8 text-sm font-bold text-slate-600 leading-relaxed outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner resize-none italic"
                                        />
                                    </div>

                                    <div className="space-y-6">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-4">Visual Evidence (Image)</label>
                                        <div className="border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 flex flex-col items-center justify-center bg-slate-50 hover:bg-white hover:border-red-600/30 transition-all cursor-pointer group/upload shadow-inner">
                                            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-slate-300 group-hover/upload:text-red-600 group-hover/upload:scale-110 transition-all shadow-sm mb-6 border border-slate-50">
                                                <Upload size={32} strokeWidth={1.5} />
                                            </div>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Sync Visual Asset</p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">JPEG, PNG Protocol • MAX 5MB</p>
                                            <input type="file" className="hidden" />
                                        </div>
                                    </div>

                                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                                        <p className="text-[11px] font-black text-slate-950 uppercase tracking-widest leading-relaxed">Do you want us to use your success story on any of our ads/ press releases?</p>
                                        <div className="flex gap-10">
                                            {['Yes', 'No'].map(v => (
                                                <label key={v} className="flex items-center gap-4 cursor-pointer group/radio">
                                                    <div className="relative flex items-center justify-center">
                                                        <input 
                                                            type="radio" 
                                                            name="permission" 
                                                            value={v} 
                                                            checked={formData.allowMarketing === v}
                                                            onChange={e => setFormData({...formData, allowMarketing: e.target.value})}
                                                            className="peer sr-only" 
                                                        />
                                                        <div className="w-6 h-6 rounded-full border-2 border-slate-200 peer-checked:border-red-600 transition-all group-hover/radio:border-red-600"></div>
                                                        <div className="absolute w-2.5 h-2.5 rounded-full bg-red-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                                                    </div>
                                                    <span className="text-xs font-black uppercase text-slate-500 peer-checked:text-slate-950">{v}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button 
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-7 bg-red-600 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] hover:bg-slate-950 transition-all shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-6 group/btn"
                                        >
                                            {loading ? (
                                                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>Authorize Transmission <Send size={20} className="group-hover/btn:translate-x-2 transition-transform" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsView;