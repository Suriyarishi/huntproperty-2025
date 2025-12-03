
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Building2 } from 'lucide-react';

interface RegisterViewProps {
  onNavigate: (view: 'login' | 'home') => void;
  onRegister: () => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({ onNavigate, onRegister }) => {
  const [userType, setUserType] = useState<'buyer' | 'agent' | 'seller'>('buyer');
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate register
    setTimeout(() => {
      setLoading(false);
      onRegister();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
       </div>

       <div className="glass-panel w-full max-w-lg p-8 md:p-10 rounded-[2.5rem] bg-white/80 shadow-2xl relative z-10">
          <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-slate-900">Create Account</h1>
              <p className="text-slate-500 mt-2">Join thousands of users finding their dream homes.</p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
              {(['buyer', 'agent', 'seller'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setUserType(type)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${userType === type ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                      {type}
                  </button>
              ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                  </div>
              </div>

              <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@example.com"
                        className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                  </div>
              </div>

              <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
                  <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="password" 
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        placeholder="Create a password"
                        className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                  </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-xl bg-primary text-slate-900 font-bold text-lg shadow-xl shadow-primary/20 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                  {loading ? (
                      <div className="w-6 h-6 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                  ) : (
                      <>Create Account <ArrowRight size={20} /></>
                  )}
              </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-600 font-medium">
                  Already have an account?{' '}
                  <button 
                    onClick={() => onNavigate('login')}
                    className="text-slate-900 font-bold hover:underline"
                  >
                      Sign In
                  </button>
              </p>
          </div>
       </div>
    </div>
  );
};

export default RegisterView;
