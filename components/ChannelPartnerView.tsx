
import React, { useState } from 'react';
import { Mail, CheckCircle2, Building2, Users, ArrowRight, Send } from 'lucide-react';

const ChannelPartnerView = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    companyName: '',
    industryType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20">
      {/* Hero Banner */}
      <div className="relative h-[400px] bg-slate-900 overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
            alt="Handshake Meeting" 
            className="w-full h-full object-cover opacity-30"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent"></div>
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
             <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/30 px-3 py-1 rounded-lg border border-primary/20 backdrop-blur-sm mb-4 text-emerald-400">
                Grow With Us
             </span>
             <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Channel Partner Program</h1>
             <p className="text-slate-300 max-w-2xl text-lg">
                Join a network of elite real estate professionals and unlock exclusive inventory, higher commissions, and AI-driven sales tools.
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Content Column */}
            <div className="space-y-8 animate-fade-in-up">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Vision</h2>
                    <div className="prose prose-slate text-slate-600 leading-relaxed space-y-6">
                        <p>
                            Hunt Property operates with a vision to provide multi-dimensional realty solutions. Even after going through so many ups and downs and being questioned, this industry has only become more organized and disciplined. Introduction of <strong>RERA (Real Estate Regulatory Act)</strong> has played a vital role in the same.
                        </p>
                        <p>
                            As we know many sectors depend on the real estate industry heavily, which means that this industry is only supposed to evolve, expand, and succeed.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Users className="text-primary" /> Team Philosophy
                    </h3>
                    <div className="prose prose-slate text-slate-600 leading-relaxed space-y-6">
                        <p>
                            Having huge potential in this sector, we cater to all those people who believe in working transparently by giving right knowledge and unprompted services to their customers.
                        </p>
                        <p>
                            We are team players and believe in working as a team. A team can be created by those people who are robust, self-motivated, catalysts, enthusiastic, and have the zeal to make their career in the Real Estate industry.
                        </p>
                    </div>
                </div>

                <div className="bg-emerald-900 p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                        <CheckCircle2 className="text-primary" /> Why Join Us?
                    </h3>
                    <p className="text-slate-300 mb-6 relative z-10">
                        We welcome all RERA certified people who have extensive knowledge of Real Estate as well as their own customer base. Our channel partners get:
                    </p>
                    <ul className="space-y-2 mb-8 relative z-10">
                        {['Regular Real Estate updates', 'Exclusive Training Sessions', 'Global Visibility', 'High Commission Slabs'].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm font-medium text-emerald-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {item}
                            </li>
                        ))}
                    </ul>
                    <div className="pt-6 border-t border-white/10 relative z-10">
                        <p className="text-sm text-slate-400 mb-1">For further details reach us at:</p>
                        <a href="mailto:channelpartner@huntproperty.com" className="text-primary font-bold hover:underline flex items-center gap-2">
                            <Mail size={16} /> channelpartner@huntproperty.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Form Column */}
            <div className="relative">
                <div className="sticky top-24">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
                        {submitted ? (
                             <div className="text-center py-20">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                                <p className="text-slate-500">
                                    Thank you for your interest in partnering with Hunt Property. Our team will verify your details and get back to you shortly.
                                </p>
                             </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wide">Partnership Application</span>
                                    <h2 className="text-3xl font-display font-bold text-slate-900 mt-2">Boost your business</h2>
                                    <p className="text-slate-500 mt-2">Become a Hunt Property partner today.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name <span className="text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Full Name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mobile No. <span className="text-red-500">*</span></label>
                                            <input 
                                                type="tel" 
                                                name="mobile"
                                                required
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                placeholder="+91"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email <span className="text-red-500">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="name@company.com"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Company Name</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input 
                                                type="text" 
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder="Your Real Estate Firm"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 pl-12 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Industry Type</label>
                                        <select 
                                            name="industryType"
                                            value={formData.industryType}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                                        >
                                            <option value="" disabled>Select Industry Type</option>
                                            <option value="Real Estate Agent">Real Estate Agent / Broker</option>
                                            <option value="Builder">Builder / Developer</option>
                                            <option value="Architect">Architect / Interior Designer</option>
                                            <option value="Financial Institution">Financial Institution</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Message</label>
                                        <textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your experience and customer base..."
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none h-32"
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl hover:bg-primary hover:text-slate-900 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                    >
                                        {loading ? 'Sending...' : (
                                            <>Submit Application <Send size={18} /></>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPartnerView;
