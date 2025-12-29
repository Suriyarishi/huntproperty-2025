
import React, { useState } from 'react';
import { Check, ArrowRight, Home, IndianRupee, Percent, Clock, ChevronLeft } from 'lucide-react';

interface HomeLoanViewProps {
  onBack: () => void;
}

const HomeLoanView: React.FC<HomeLoanViewProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', loanType: '' });
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 flex items-center justify-center text-center">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-lg w-full animate-fade-in-up">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={40} /></div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Application Received!</h2>
          <button onClick={onBack} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary hover:text-slate-900">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 mb-8"><ChevronLeft size={20} /> Back</button>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-in-up">
             <div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">Banking Partners</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 text-slate-900">Finance your <span className="text-emerald-600">Dream Home</span></h1>
             </div>
             <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { icon: Percent, label: 'Low Interest Rates', val: '8.35% p.a.', color: 'bg-emerald-50 text-emerald-600' },
                    { icon: Clock, label: 'Quick Approval', val: '48 hours', color: 'bg-slate-100 text-slate-600' },
                    { icon: IndianRupee, label: 'Max Funding', val: 'Up to 90%', color: 'bg-emerald-100 text-emerald-800' },
                    { icon: Home, label: 'No Hidden Charges', val: 'Transparent', color: 'bg-slate-200 text-slate-900' }
                ].map(stat => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${stat.color}`}><stat.icon size={20} /></div>
                        <h3 className="font-bold text-slate-900">{stat.label}</h3>
                        <p className="text-sm text-slate-500 mt-1">{stat.val}</p>
                    </div>
                ))}
             </div>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 relative">
             <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary" />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary" />
                <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-primary hover:text-slate-900 shadow-xl transition-all">
                    {loading ? 'Submitting...' : 'Submit Application'}
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanView;
