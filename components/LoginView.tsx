
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
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
       </div>

       <div className="glass-panel w-full max-w-md p-8 md:p-10 rounded-[2.5rem] bg-white/80 shadow-2xl relative z-10">
          <div className="text-center mb-10">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 shadow-lg shadow-slate-900/20">
                  <User size={32} />
              </div>
              <h1 className="text-3xl font-display font-bold text-slate-900">Welcome Back</h1>
              <p className="text-slate-500 mt-2">Sign in to access your saved properties and AI insights.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                  </div>
              </div>

              <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                      <button type="button" className="text-xs font-bold text-primary hover:text-emerald-600 transition-colors">Forgot Password?</button>
                  </div>
                  <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                  </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                  {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                      <>Sign In <ArrowRight size={20} /></>
                  )}
              </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-600 font-medium">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => onNavigate('register')}
                    className="text-primary font-bold hover:underline"
                  >
                      Create Account
                  </button>
              </p>
          </div>
       </div>
    </div>
  );
};

export default LoginView;
