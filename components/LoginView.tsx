
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';

interface LoginViewProps {
  onNavigate: (view: 'register' | 'home') => void;
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-400/5 rounded-full blur-[120px]"></div>
       </div>

       <div className="glass-panel w-full max-w-md p-8 rounded-[2.5rem] bg-white/80 shadow-2xl relative z-10">
          <div className="text-center mb-10">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 shadow-lg">
                  <User size={32} />
              </div>
              <h1 className="text-3xl font-display font-bold text-slate-900">Welcome Back</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-primary" />
              </div>
              <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-primary" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-primary hover:text-slate-900 transition-all shadow-xl">
                  {loading ? 'Processing...' : 'Sign In'}
              </button>
          </form>

          <div className="mt-8 text-center">
              <button onClick={() => onNavigate('register')} className="text-primary font-bold hover:underline">Create Account</button>
          </div>
       </div>
    </div>
  );
};

export default LoginView;
