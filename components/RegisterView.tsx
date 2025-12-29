
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface RegisterViewProps {
  onNavigate: (view: 'login' | 'home') => void;
  onRegister: () => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({ onNavigate, onRegister }) => {
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

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden">
       <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/20 rounded-full blur-[120px]"></div>
       </div>

       <div className="glass-panel w-full max-w-lg p-8 rounded-[2.5rem] bg-white/80 shadow-2xl relative z-10">
          <h1 className="text-3xl font-display font-bold text-slate-900 text-center mb-8">Create Account</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" placeholder="Full Name" required className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 px-4 outline-none focus:border-primary" />
              <input type="email" placeholder="Email" required className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 px-4 outline-none focus:border-primary" />
              <input type="password" placeholder="Password" required className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 px-4 outline-none focus:border-primary" />
              <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-primary text-slate-900 font-bold hover:bg-emerald-400 shadow-xl transition-all">
                  {loading ? 'Creating...' : 'Register'}
              </button>
          </form>
          <div className="mt-8 text-center">
              <button onClick={() => onNavigate('login')} className="text-slate-900 font-bold hover:underline">Already have an account? Sign In</button>
          </div>
       </div>
    </div>
  );
};

export default RegisterView;
