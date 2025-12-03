
import React, { useState } from 'react';
import { Check, ArrowRight, Home, IndianRupee, Percent, Clock, ChevronLeft } from 'lucide-react';

interface HomeLoanViewProps {
  onBack: () => void;
}

const HomeLoanView: React.FC<HomeLoanViewProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    loanType: ''
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 flex items-center justify-center">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-lg w-full text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Application Received!</h2>
          <p className="text-slate-500 mb-8">
            Thank you, {formData.name}. Our loan experts will review your details and contact you at {formData.phone} within 24 hours.
          </p>
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary hover:text-slate-900 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-8"
        >
            <ChevronLeft size={20} /> Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">
                    Banking Partners
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 text-slate-900 leading-tight">
                    Finance your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Dream Home</span>
                </h1>
                <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                    Get the best interest rates from our trusted banking partners. Minimal documentation, quick approval, and door-step service.
                </p>
             </div>

             <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                        <Percent size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900">Low Interest Rates</h3>
                    <p className="text-sm text-slate-500 mt-1">Starting from 8.35% p.a.</p>
                </div>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
                        <Clock size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900">Quick Approval</h3>
                    <p className="text-sm text-slate-500 mt-1">Sanction in 48 hours</p>
                </div>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-3">
                        <IndianRupee size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900">Max Funding</h3>
                    <p className="text-sm text-slate-500 mt-1">Up to 90% property value</p>
                </div>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                        <Home size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900">Zero Hidden Charges</h3>
                    <p className="text-sm text-slate-500 mt-1">Transparent processing</p>
                </div>
             </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
             
             <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 relative z-10">Apply Loan</h2>
             
             <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address <span className="text-red-500">*</span></label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Address <span className="text-red-500">*</span></label>
                    <textarea 
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Your current residence address"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none h-24"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Loan Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select 
                            name="loanType"
                            required
                            value={formData.loanType}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                        >
                            <option value="" disabled>Select Loan Type</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Loan Against Property">Loan Against Property</option>
                            <option value="Top Up Loan">Top Up Loan</option>
                            <option value="Balance Transfer">Balance Transfer</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <ChevronLeft size={16} className="-rotate-90" />
                        </div>
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl hover:bg-primary hover:text-slate-900 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                    {loading ? 'Submitting...' : (
                        <>Submit Application <ArrowRight size={20} /></>
                    )}
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanView;
