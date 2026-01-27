import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  MapPin, Phone, Mail, Smartphone, 
  ShieldCheck, Globe, Network, Zap, User,
  ExternalLink, Send, ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navGroups = [
    {
      title: "NEW PROJECTS",
      links: [
        "New Projects in Pune", "New Projects in Bengaluru", "New Projects in Mumbai", 
        "New Projects in Chennai", "New Projects in Hyderabad", "New Projects in Noida", 
        "New Projects in Gurugram", "New Projects in Mohali", "New Projects in Coimbatore", 
        "New Projects in Kochi", "New Projects in Delhi"
      ]
    },
    {
      title: "COMPANY",
      links: [
        "About Us", "Careers", "Press & Media", "Contact Support", 
        "Testimonials", "Blogs", "Terms and Conditions", "Privacy Policy", 
        "Refund and Cancellation Policy", "Package Policy"
      ]
    },
    {
      title: "SERVICES",
      links: [
        "Property Valuation", "Legal Assistance", "Home Loans", "Interior Design AI",
        "Apply for Home Loan", "Buy/Sell/Rent", "Advertise with Us", "Hunt Property on Mobile", 
        "Real Estate Developers", "All Properties", "Sitemap", "Home Loan Calc", "Property Worth"
      ]
    }
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 p-32 opacity-[0.02] pointer-events-none">
        <Network size={600} />
      </div>

      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: Brand & Subscription */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-start">
          
          {/* Left: Brand & Connect */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 shadow-[0_0_20px_rgba(47,237,154,0.3)]">
                <div className="w-6 h-6 border-4 border-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                </div>
              </div>
              <span className="text-3xl font-display font-black tracking-tighter uppercase">HuntProperty</span>
            </div>
            
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md">
              The future of real estate is here. Powered by Gemini AI to help you find, analyze, and design your dream home with data-driven precision.
            </p>

            {/* Social Icons Pattern */}
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <social.Icon size={18} />
                </a>
              ))}
            </div>

            {/* App Stores Pattern */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 hover:border-white/20 transition-all">
                <div className="grid grid-cols-2 gap-1 w-4 h-4 text-white">
                  {[1,2,3,4].map(i => <div key={i} className="bg-current rounded-sm"></div>)}
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase text-slate-500 font-bold leading-none mb-0.5">Get it on</p>
                  <p className="text-[13px] font-black leading-none">Google Play</p>
                </div>
              </button>
              <button className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 hover:border-white/20 transition-all">
                <div className="text-white">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.07 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase text-slate-500 font-bold leading-none mb-0.5">Download on the</p>
                  <p className="text-[13px] font-black leading-none">App Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Subscribe Card Pattern */}
          <div className="bg-[#0A0A0A] rounded-[3.5rem] p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10 mb-8">
              <h3 className="text-4xl md:text-5xl font-display font-black leading-[0.95] uppercase mb-6 tracking-tighter">
                Subscribe to <br/> <span className="text-white">Market Watch</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                Get the latest AI-driven market insights and hot listings delivered to your inbox.
              </p>
            </div>

            <div className="relative z-10 flex items-center bg-black rounded-full p-2 border border-white/10 max-w-lg shadow-inner group-focus-within:border-primary/40 transition-all">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent px-6 py-3 text-sm font-bold text-white outline-none placeholder:text-slate-700"
              />
              <button className="bg-primary text-slate-900 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Line Separator */}
        <div className="w-full h-px bg-white/5 mb-16"></div>

        {/* Bottom Grid: Navigation Pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-8">
              <h4 className="text-primary font-black text-[12px] uppercase tracking-[0.2em]">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.slice(0, 8).map(link => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-white transition-all text-sm font-bold block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column Pattern */}
          <div className="space-y-8">
            <h4 className="text-primary font-black text-[12px] uppercase tracking-[0.2em]">
              CONTACT
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin size={16} />
                </div>
                <p className="text-slate-400 text-sm font-bold leading-relaxed pt-1">
                  1200 Tech Plaza, Silicon Valley, CA 94043
                </p>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone size={16} />
                </div>
                <p className="text-slate-400 text-sm font-bold group-hover:text-white transition-colors">
                  +1 (555) 123-4567
                </p>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <p className="text-slate-400 text-sm font-bold group-hover:text-white transition-colors">
                  hello@huntproperty.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Security & Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
             <div className="flex items-center gap-3 bg-white/[0.02] px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-md shadow-inner">
                <ShieldCheck size={16} className="text-primary" />
                <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.2em]">
                  RERA: <span className="text-white">UPRERAAGT20169</span>
                </p>
             </div>
             <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] leading-relaxed">
               © 2017 - 2025 <span className="text-primary italic">HuntProperty.com</span> • SECURED DATA NETWORK
             </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center md:items-end gap-0.5">
              <p className="text-slate-600 text-[8px] font-black uppercase tracking-[0.3em]">Architecture By</p>
              <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.1em]">Catalyst E Pages PVT LTD</p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-4.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-xl group relative overflow-hidden shrink-0 active:scale-90"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
