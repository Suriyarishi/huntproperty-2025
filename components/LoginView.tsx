
import React, { useState } from 'react';
import { Mail, Lock, X, MapPin } from 'lucide-react';

interface LoginViewProps {
  onNavigate: (view: 'register' | 'home') => void;
  onLogin: (role: 'Owner' | 'Agent' | 'Developer') => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock Login Logic
    const credentials = [
      { email: 'owner@gmail.com', password: 'Owner', role: 'Owner' as const },
      { email: 'agent@gmail.com', password: 'Agent', role: 'Agent' as const },
      { email: 'dev@gmail.com', password: 'Dev', role: 'Developer' as const },
    ];

    setTimeout(() => {
      const user = credentials.find(c => c.email === email && c.password === password);

      if (user) {
        setLoading(false);
        onLogin(user.role);
      } else {
        setLoading(false);
        setError('Invalid email or password. Please try again.');
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {/* Background soft shadow effect */}
      <div className="absolute inset-0 bg-[#f0f2f5] -z-10"></div>

      <div className="w-full max-w-[540px] bg-white rounded-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 relative">
        {/* Close Button */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[28px] font-extrabold text-[#1a1a1a] tracking-tight">Hunt</span>
            <div className="relative">
              <MapPin className="text-[#ff3d3d] fill-[#ff3d3d]" size={36} />
              <div className="absolute top-[8px] left-[13px] w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span className="text-[28px] font-extrabold text-[#1a1a1a] tracking-tight">roperty</span>
          </div>
          <span className="text-xs italic font-medium text-slate-500 tracking-wider">Think Wisely, Invest Smartly</span>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[42px] font-bold text-[#1a1c21] mb-3">Welcome Back</h1>
          <p className="text-[#64748b] text-[17px] leading-relaxed max-w-[340px] mx-auto font-medium">
            Sign in to access your saved properties and AI insights.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[14px] font-semibold text-center animate-shake">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-[13px] font-extrabold text-[#1a1c21] mb-3 tracking-wide uppercase">EMAIL ADDRESS</label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2dd4bf] transition-colors">
                <Mail size={22} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 text-[16px] outline-none focus:border-[#2dd4bf] transition-all placeholder:text-slate-300 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-extrabold text-[#1a1c21] mb-3 tracking-wide uppercase">PASSWORD</label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2dd4bf] transition-colors">
                <Lock size={22} />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***************"
                className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 text-[16px] outline-none focus:border-[#2dd4bf] transition-all placeholder:text-slate-300 font-medium"
              />
            </div>
            <div className="mt-3 text-right">
              <button type="button" className="text-[#2dd4bf] text-[14px] font-bold hover:underline">Forgot Password?</button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-16 bg-[#0f172a] text-white rounded-2xl text-[18px] font-bold hover:bg-[#1e293b] transition-all shadow-[0_10px_20px_rgba(15,23,42,0.2)] active:scale-[0.98]"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-12 text-center text-[16px] font-bold text-[#64748b]">
          Don't have an account? <button onClick={() => onNavigate('register')} className="text-[#2dd4bf] hover:underline ml-1">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
