import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] text-white pt-20 pb-10 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-white/10 pb-16">
           <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-[#0E0E0E] shadow-[0_0_20px_rgba(47,237,154,0.4)]">
                        <span className="font-display font-bold text-xl">H</span>
                    </div>
                    <span className="font-display font-bold text-2xl tracking-tight">HuntProperty</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                    The future of real estate is here. Powered by Gemini AI to help you find, analyze, and design your dream home with data-driven precision.
                </p>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#0E0E0E] transition-all">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
           </div>

           <div className="lg:w-2/3 w-full">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <h3 className="font-display font-bold text-xl mb-2">Subscribe to Market Watch</h3>
                    <p className="text-gray-400 mb-6 text-sm">Get the latest AI-driven market insights and hot listings delivered to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none focus:border-primary transition-colors"
                        />
                        <button className="bg-primary text-[#0E0E0E] font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(47,237,154,0.3)]">
                            Subscribe
                        </button>
                    </div>
                </div>
           </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
                <h4 className="text-primary font-bold mb-6">New Projects</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Luxury Penthouses</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Smart Eco-Villas</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Urban Lofts</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Upcoming Towers</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-primary font-bold mb-6">Company</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-primary font-bold mb-6">Services</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Property Valuation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Legal Assistance</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Home Loans</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Interior Design AI</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-primary font-bold mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                        <MapPin size={16} className="text-primary mt-1 shrink-0" />
                        <span>1200 Tech Plaza, Silicon Valley, CA 94043</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={16} className="text-primary shrink-0" />
                        <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={16} className="text-primary shrink-0" />
                        <span>hello@huntproperty.com</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 HuntProperty Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span className="text-primary/50">RERA: PR/25/12345</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;