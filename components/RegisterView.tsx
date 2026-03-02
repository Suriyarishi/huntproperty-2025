
import React, { useState } from 'react';
import { Mail, Lock, User, X, Check, Phone, ArrowRight } from 'lucide-react';

interface RegisterViewProps {
  onNavigate: (view: 'login' | 'home') => void;
  onRegister: () => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({ onNavigate, onRegister }) => {
  const [role, setRole] = useState<'Owner' | 'Agent' | 'Developer'>('Owner');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegister();
    }, 1500);
  };

  const registerReasons = [
    "Get latest Projects News and Updates.",
    "Get market information, trends & reports.",
    "Set property alerts.",
    "Get market information, trends & reports.",
    "Ask property related questions."
  ];

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] h-[720px] bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex overflow-hidden relative">

        {/* Left Sidebar - Info Panel */}
        <div className="w-[35%] relative flex flex-col justify-between p-10 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
              alt="Modern House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-[24px] font-bold mb-10 tracking-tight">Why Register?</h2>
            <ul className="space-y-8">
              {registerReasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-semibold leading-snug text-slate-100">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <Phone size={18} />
            </div>
            <span className="text-[18px] font-bold tracking-widest">9899 095 939</span>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex-1 p-12 flex flex-col relative">
          {/* Close Button */}
          <button
            onClick={() => onNavigate('home')}
            className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-8">
            <h1 className="text-[36px] font-extrabold text-[#1a1c21] mb-2">Create Account</h1>
            <p className="text-slate-500 font-medium">Join thousands of users finding their dream homes.</p>
          </div>

          {/* Role Tabs */}
          <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-10 w-full max-w-sm mx-auto">
            {(['Owner', 'Agent', 'Developer'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-3 text-[14px] font-bold rounded-xl transition-all ${role === r
                    ? 'bg-[#2dd4bf] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 flex-1 max-w-sm mx-auto w-full">
            <div>
              <label className="block text-[11px] font-extrabold text-[#1a1c21] mb-2 tracking-widest uppercase">FULL NAME</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2dd4bf]" size={18} />
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full h-14 bg-white border-2 border-slate-50 rounded-xl pl-12 pr-4 outline-none focus:border-[#2dd4bf] transition-all font-medium text-[15px] placeholder:text-slate-300 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-extrabold text-[#1a1c21] mb-2 tracking-widest uppercase">EMAIL ADDRESS</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2dd4bf]" size={18} />
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  required
                  className="w-full h-14 bg-white border-2 border-slate-50 rounded-xl pl-12 pr-4 outline-none focus:border-[#2dd4bf] transition-all font-medium text-[15px] placeholder:text-slate-300 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-extrabold text-[#1a1c21] mb-2 tracking-widest uppercase">PASSWORD</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2dd4bf]" size={18} />
                <input
                  type="password"
                  placeholder="***************"
                  required
                  className="w-full h-14 bg-white border-2 border-slate-50 rounded-xl pl-12 pr-4 outline-none focus:border-[#2dd4bf] transition-all font-medium text-[15px] placeholder:text-slate-300 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-md checked:bg-[#2dd4bf] checked:border-[#2dd4bf] transition-all cursor-pointer" />
                  <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={14} />
                </div>
                <span className="text-[13px] font-semibold text-slate-500 leading-tight">
                  I hereby allow Hunt Property & its Affiliates to contact me.
                </span>
              </label>

              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                By clicking above I agree to the <span className="text-slate-600 font-bold underline cursor-pointer">T&C</span>, <span className="text-slate-600 font-bold underline cursor-pointer">Privacy Policy</span>, & <span className="text-slate-600 font-bold underline cursor-pointer">Cookie Policy</span>.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-16 bg-[#2dd4bf] text-slate-900 rounded-2xl text-[18px] font-extrabold hover:bg-[#24bfa6] transition-all shadow-[0_10px_30px_rgba(45,212,191,0.3)] active:scale-[0.98] mt-4"
            >
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center text-[15px] font-medium text-slate-400">
            Already have an account? <button onClick={() => onNavigate('login')} className="text-[#1a1c21] font-bold hover:underline ml-1">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
