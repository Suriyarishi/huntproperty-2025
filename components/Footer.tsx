import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  MapPin, Phone, Mail, Smartphone, 
  ShieldCheck, Globe, Network, ExternalLink, Send
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navGroups = [
    {
      title: "ESSENTIALS",
      links: [
        { label: "Apply for Home Loan", view: "home-loans" },
        { label: "Advertise with Us", view: "advertise" },
        { label: "All Property", view: "buy" },
        { label: "Sitemap", view: "sitemap" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", view: "about-us" },
        { label: "Careers", view: "career" },
        { label: "Testimonials", view: "testimonials" },
        { label: "Blogs", view: "insights" },
        { label: "Customer Care", view: "customer-care" },
        { label: "Contact Us", view: "customer-care" }
      ]
    },
    {
      title: "Company Policy",
      links: [
        { label: "Terms and Conditions", view: "terms" },
        { label: "Privacy Policy", view: "privacy" },
        { label: "Refund and Cancellation Policy", view: "refund-policy" },
        { label: "Package Policy", view: "package-policy" }
      ]
    },
    {
      title: "Property Services",
      links: [
        { label: "Search Property", view: "buy" },
        { label: "Search Projects", view: "buy" },
        { label: "Search Agents", view: "agents" },
        { label: "Home loan calculator", view: "home-loan-calculator" },
        { label: "Property Cost Calulator", view: "PropertyCostCalulator" }
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
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 font-sans border-t border-white/5">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        
        {/* Top Section: Brand & Subscription */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          
          {/* Left Side: Brand Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => onNavigate?.('home')}>
              <span className="text-3xl font-display font-bold text-white tracking-tight">Hunt</span>
              <div className="relative mx-0.5 mb-1">
                <MapPin className="text-red-600 fill-red-600" size={28} />
              </div>
              <span className="text-3xl font-display font-bold text-white tracking-tight">roperty</span>
            </div>
            
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Hunt Property offers end-to-end real estate expertise with a refined, client-first approach, delivering buying, leasing, Vaastu, design, and investment solutions with precision and trust.
            </p>

            {/* Social Buttons */}
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>

            {/* App Stores */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-black border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 hover:border-white/20 transition-all">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4 text-white">
                  {[1,2,3,4].map(i => <div key={i} className="bg-current rounded-[1px]"></div>)}
                </div>
                <div className="text-left">
                  <p className="text-[7px] uppercase text-slate-500 font-bold leading-none mb-0.5">Get it on</p>
                  <p className="text-[12px] font-bold leading-none">Google Play</p>
                </div>
              </button>
              <button className="bg-black border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 hover:border-white/20 transition-all">
                <div className="text-white">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.07 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[7px] uppercase text-slate-500 font-bold leading-none mb-0.5">Download on the</p>
                  <p className="text-[12px] font-bold leading-none">App Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Subscription Card */}
          <div className="lg:w-[55%]">
            <div className="bg-[#111111] rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold mb-3">Subscribe to Market Watch</h3>
                <p className="text-slate-400 text-sm">Subscribe for market insights, exclusive listings, trends, updates, and opportunities</p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center bg-[#0F0F0F] rounded-2xl p-2 border border-white/5 transition-all focus-within:border-primary/30">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-transparent px-5 py-4 text-sm font-medium text-white outline-none placeholder:text-slate-700 w-full"
                />
                <button className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold text-sm w-full sm:w-auto shadow-lg shadow-primary/20 hover:bg-emerald-400 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Nav Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-t border-white/5">
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <h4 className="text-primary font-bold text-[13px] uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.label}>
                    <button 
                      onClick={() => onNavigate?.(link.view)}
                      className="text-slate-400 hover:text-white transition-all text-[14px] font-medium block text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Strip: Legal & Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 text-[12px] font-medium text-slate-500">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6">
            <button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">RERA: UPRERAAGT20169</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
            <p className="">© Copyright 2017 - Huntproperty.com - All Rights Reserved</p>
            <div className="flex items-center gap-1">
              <span>Powered By :</span>
              <span className="text-slate-300">Catalyst E Page PVT LTD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;