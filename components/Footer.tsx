
import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  MapPin, Phone, Mail, ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Brand & Newsletter Card */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left: Brand & App Links */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="text-slate-950" size={20} fill="currentColor" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">HuntProperty</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The future of real estate is here. Powered by Gemini AI to help you find, analyze, and design your dream home with data-driven precision.
            </p>
            
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#" className="bg-black border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 hover:border-primary/40 transition-all">
                <div className="w-6 h-6 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.523 15.3414C17.5015 15.3414 17.4801 15.3414 17.4587 15.3414C16.3263 15.3414 15.1939 15.3414 14.0614 15.3414C14.0614 15.7001 14.0614 16.0588 14.0614 16.4175C15.2144 16.4175 16.3674 16.4175 17.5204 16.4175C17.5213 16.0588 17.5222 15.7001 17.523 15.3414ZM11.025 15.3414H7.56158V16.4175H11.025V15.3414ZM11.025 12.0125H7.56158V13.0886H11.025V12.0125ZM11.025 8.68364H7.56158V9.75971H11.025V8.68364ZM14.0614 12.0125V13.0886H17.523V12.0125H14.0614ZM14.0614 8.68364V9.75971H17.523V8.68364H14.0614Z"/></svg>
                </div>
                <div className="leading-none">
                  <p className="text-[8px] uppercase text-slate-500 font-bold">Get it on</p>
                  <p className="text-xs font-bold text-white">Google Play</p>
                </div>
              </a>
              <a href="#" className="bg-black border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 hover:border-primary/40 transition-all">
                <div className="w-6 h-6 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.07 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                </div>
                <div className="leading-none">
                  <p className="text-[8px] uppercase text-slate-500 font-bold">Download on the</p>
                  <p className="text-xs font-bold text-white">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Newsletter Card */}
          <div className="lg:col-span-8">
            <div className="bg-[#111111]/80 border border-white/5 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4 flex-1">
                <h3 className="text-3xl font-display font-bold">Subscribe to Market Watch</h3>
                <p className="text-slate-500 text-sm">
                  Get the latest AI-driven market insights and hot listings delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 items-center bg-black/40 p-2 rounded-[1.5rem] border border-white/5">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent px-6 py-4 outline-none text-white w-full sm:w-64 text-sm font-medium"
                />
                <button className="bg-primary text-slate-950 px-8 py-4 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(47,237,154,0.4)] transition-all whitespace-nowrap active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-16"></div>

        {/* Bottom Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-primary font-bold text-sm mb-8 uppercase tracking-widest">New Projects</h4>
            <ul className="space-y-4">
              {['Luxury Penthouses', 'Smart Eco-Villas', 'Urban Lofts', 'Upcoming Towers'].map(link => (
                <li key={link}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-bold text-sm mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press & Media', 'Contact Support'].map(link => (
                <li key={link}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-bold text-sm mb-8 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {['Property Valuation', 'Legal Assistance', 'Home Loans', 'Interior Design AI'].map(link => (
                <li key={link}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-bold text-sm mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-400 text-sm font-medium">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>1200 Tech Plaza, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@huntproperty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-8"></div>

        {/* Footer Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">
            © 2025 HuntProperty Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-white text-sm transition-colors">Terms of Service</a>
            <span className="text-primary font-bold text-sm">RERA: PR/25/12345</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
