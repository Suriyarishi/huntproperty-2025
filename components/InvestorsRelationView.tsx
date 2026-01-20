import React, { useState } from 'react';
import { 
  Users, Building2, TrendingUp, ShieldCheck, 
  Cpu, Globe, Target, Send, CheckCircle2, 
  ArrowRight, Sparkles, LayoutGrid, Info, MapPin, ChevronDown
} from 'lucide-react';

const InvestorsRelationView = () => {
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const infoBlocks = [
    {
      title: "About Company",
      icon: Building2,
      text: "Hunt Property operates with a vision to provide multi-dimensional realty solutions. Even after going through so many ups and downs and being questioned, this industry has only become more organized and disciplined.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "We Welcome Investors",
      icon: Users,
      text: "Having a huge potential in this sector we love to welcome the investors who keep strong belief in this sector and love to invest in it. We believe in working transparently by giving committed returns and unprompted services.",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "RERA: The Backbone",
      icon: ShieldCheck,
      text: "Introduction of RERA (Real Estate Regulatory Act) has played a vital role in the industry. As we know many sectors depend on the real estate industry heavily which means that this industry is only supposed to evolve, expand and succeed.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
        title: "Team Power",
        icon: Target,
        text: "We are a team player and believe in working as a team. Our strength is our team. It is created by those people who are robust, self motivated, catalyst, enthusiastic and have zeal to make their career and achieve respected goals.",
        color: "text-red-600",
        bg: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 pt-24 font-sans selection:bg-primary">
      
      {/* Dynamic Hero Section - Strategic Theme */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1529697210530-8c4bb1358ce5?q=80&w=2070&auto=format&fit=crop" 
                alt="Strategic Chess" 
                className="w-full h-full object-cover opacity-40 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-[#F8FAFC]"></div>
          </div>

          <div className="relative z-10 text-center space-y-8 max-w-5xl px-6 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                  <TrendingUp size={12} /> Strategic Partnership Protocol
              </span>
              <h1 className="text-6xl md:text-9xl font-display font-black text-white leading-none tracking-tighter uppercase">
                  Investors <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 italic">Relation</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                "Scaling real estate intelligence through transparent, data-driven investment frameworks."
              </p>
          </div>
      </section>

      <div className="max-w-[100rem] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 -mt-24 relative z-20">
          
          {/* Main Content Node */}
          <div className="lg:col-span-8 space-y-12">
              
              {/* Introduction Card */}
              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms]">
                      <Sparkles size={300} />
                  </div>
                  <div className="relative z-10 space-y-8">
                      <div className="flex items-center gap-4">
                          <div className="w-1.5 h-12 bg-red-600 rounded-full"></div>
                          <h2 className="text-4xl font-display font-black text-slate-900 uppercase tracking-tight">Dear Investors</h2>
                      </div>
                      <p className="text-slate-600 text-xl font-medium leading-relaxed italic border-l-4 border-slate-50 pl-8">
                        "We started from scratch to a respected level. We know the value of money. We know how it earns, how to multiply. All these experiences make us care about our Investors and their investments."
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8 pt-6">
                          {infoBlocks.map((block, i) => (
                              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group/card">
                                  <div className={`w-14 h-14 ${block.bg} ${block.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover/card:scale-110 transition-transform`}>
                                      <block.icon size={28} strokeWidth={1.5} />
                                  </div>
                                  <h4 className="text-xl font-display font-black text-slate-950 uppercase tracking-tight mb-4">{block.title}</h4>
                                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{block.text}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Presence & Tech Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-slate-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50"></div>
                        <h3 className="text-2xl font-display font-black uppercase mb-8 flex items-center gap-4 text-primary">
                            <Cpu size={28} /> Advance Technology
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed italic font-medium">
                            "Use of advance technology lets us work more effectively, accurately and timely. It keeps the working flow uninterrupted and regular."
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                             <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                             Gemini AI Integration v2025
                        </div>
                   </div>

                   <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-[3000ms]"><Globe size={180} /></div>
                        <h3 className="text-2xl font-display font-black uppercase mb-8 flex items-center gap-4 text-red-600">
                            {/* Fixed: MapPin now imported from lucide-react */}
                            <MapPin size={28} /> Our Presence
                        </h3>
                        <div className="space-y-6">
                            <p className="text-slate-600 font-medium">Right now we have a presence in Noida, U.P, North India (Very closely connected with the capital of India - Delhi. and another one is in Amritsar (Punjab) India.</p>
                            <div className="h-px bg-slate-100 w-full"></div>
                            <p className="text-slate-500 text-sm italic">"There are many more things that we can learn from each other when we come under an association."</p>
                        </div>
                   </div>
              </div>
          </div>

          {/* Sidebar: Query Protocol */}
          <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-28">
                  <div className="bg-white rounded-[3.5rem] p-10 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-200 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600"></div>
                      
                      {submitted ? (
                          <div className="text-center py-20 animate-fade-in-up">
                              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                  <CheckCircle2 size={40} />
                              </div>
                              <h3 className="text-2xl font-display font-black text-slate-900 uppercase">Transmission Logged</h3>
                              <p className="text-slate-500 mt-4 font-medium italic">Our partnership leads will contact you shortly via secured channels.</p>
                              <button onClick={() => setSubmitted(false)} className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl">Send Another</button>
                          </div>
                      ) : (
                          <div className="space-y-10">
                              <div>
                                  <h3 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Query Portal</h3>
                                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2 border-l-2 border-red-600/20 pl-4">Secured Investor Protocol</p>
                              </div>

                              <form onSubmit={handleSubmit} className="space-y-5">
                                  {[
                                      { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter Identity' },
                                      { label: 'Mobile No.', name: 'mobile', type: 'tel', placeholder: '+91' },
                                      { label: 'Email', name: 'email', type: 'email', placeholder: 'name@domain.com' },
                                      { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Legal Entity Name' }
                                  ].map((field) => (
                                      <div key={field.name} className="space-y-1.5">
                                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">{field.label}</label>
                                          <input 
                                              type={field.type}
                                              name={field.name}
                                              required
                                              value={formData[field.name as keyof typeof formData]}
                                              onChange={handleChange}
                                              placeholder={field.placeholder}
                                              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner"
                                          />
                                      </div>
                                  ))}

                                  <div className="space-y-1.5">
                                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Industry Type</label>
                                      <div className="relative">
                                          <select 
                                              name="industryType"
                                              value={formData.industryType}
                                              onChange={handleChange}
                                              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all appearance-none cursor-pointer shadow-inner"
                                          >
                                              <option value="" disabled>Select Sector</option>
                                              <option>Tech-Integrated Real Estate</option>
                                              <option>Capital & Investment Hub</option>
                                              <option>Urban Infrastructure</option>
                                              <option>Residential Architecture</option>
                                          </select>
                                          {/* Fixed: ChevronDown now imported from lucide-react */}
                                          <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                                      </div>
                                  </div>

                                  <div className="space-y-1.5">
                                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Message</label>
                                      <textarea 
                                          name="message"
                                          value={formData.message}
                                          onChange={handleChange}
                                          placeholder="Define Investment Intent..."
                                          className="w-full h-32 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all resize-none shadow-inner"
                                      />
                                  </div>

                                  <button 
                                      type="submit"
                                      disabled={loading}
                                      className="w-full py-6 bg-red-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:bg-slate-950 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.25)] flex items-center justify-center gap-4 group"
                                  >
                                      {loading ? <div className="w-5 h-5 border-4 border-white/20 border-t-white rounded-full animate-spin"></div> : (
                                          <>Initialize Handshake <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></>
                                      )}
                                  </button>
                              </form>

                              <div className="pt-8 border-t border-slate-50 text-center">
                                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2">Direct Contact Vector</p>
                                  <a href="mailto:channelpartner@huntproperty.com" className="text-slate-900 font-black text-xs hover:text-red-600 transition-colors">channelpartner@huntproperty.com</a>
                              </div>
                          </div>
                      )}
                  </div>

                  {/* Trust Shield Mini Card */}
                  <div className="mt-8 bg-slate-950 rounded-[2rem] p-8 text-white flex items-center gap-6 shadow-2xl border border-white/10 group">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                          <ShieldCheck size={32} />
                      </div>
                      <div>
                          <h4 className="font-display font-black uppercase text-sm tracking-tight">Financial Shield</h4>
                          <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-1">RERA & LEGAL COMPLIANT NODE</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      {/* Footer Disclaimer Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-32 opacity-20 hover:opacity-50 transition-opacity duration-1000 text-center">
           <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
               <span>Secured Assets</span>
               <div className="w-1 h-1 bg-slate-400 rounded-full mt-1"></div>
               <span>Verified Equity</span>
               <div className="w-1 h-1 bg-slate-400 rounded-full mt-1"></div>
               <span>Strategic Growth</span>
               <div className="w-1 h-1 bg-slate-400 rounded-full mt-1"></div>
               <span>Neural Intelligence</span>
           </div>
      </div>
    </div>
  );
};

export default InvestorsRelationView;