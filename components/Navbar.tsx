
import React, { useState } from 'react';
import { Menu, User, Sparkles, ArrowLeft, Share2, ChevronDown, LogIn, UserPlus, Briefcase } from 'lucide-react';

interface NavbarProps {
    onNavigate: (view: any) => void;
    onPostProperty: () => void;
    isDetailView?: boolean;
    onBack?: () => void;
    backLabel?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onPostProperty, isDetailView, onBack, backLabel }) => {
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-[90rem] mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto relative">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg shrink-0">
                <span className="font-display font-bold text-primary text-xl">H</span>
            </div>
            {!isDetailView && <span className="text-xl font-display font-bold tracking-tight text-slate-900 hidden sm:block">HuntProperty</span>}
            </div>

            {isDetailView && onBack && (
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-900 transition-colors font-bold text-sm"
                >
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">{backLabel || 'Back'}</span>
                </button>
            )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-600">
          {!isDetailView && (
              <>
                <button onClick={() => onNavigate('home')} className="px-4 py-2 hover:text-slate-900 transition-colors">Home</button>
                
                {/* Buy Dropdown */}
                <div className="relative group" onMouseEnter={() => handleMouseEnter('buy')} onMouseLeave={handleMouseLeave}>
                    <button 
                        onClick={() => onNavigate('buy')} 
                        className="px-4 py-2 hover:text-slate-900 transition-colors flex items-center gap-1"
                    >
                        Buy <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'buy' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`absolute top-full left-0 pt-6 w-[600px] transition-all duration-200 ${activeDropdown === 'buy' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 gap-10">
                             <div>
                                <h4 className="text-red-600 font-bold mb-4 uppercase text-xs tracking-wider border-b border-red-100 pb-2">NEW PROJECTS IN INDIA</h4>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    {['New Projects in Pune', 'New Projects in Bengaluru', 'New Projects in Mumbai', 'New Projects in Chennai', 'New Projects in Hyderabad', 'New Projects in Noida', 'New Projects in Gurugram'].map(item => (
                                        <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                             </div>
                             <div>
                                <h4 className="text-red-600 font-bold mb-4 uppercase text-xs tracking-wider border-b border-red-100 pb-2">REAL ESTATE IN INDIA</h4>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    {['New Projects in Mohali', 'New Projects in Coimbatore', 'New Projects in Kochi', 'New Projects in Delhi', 'New Projects in Chandigarh', 'New Projects in Faridabad', 'New Projects in Dehradun', 'New Projects in Nagpur'].map(item => (
                                        <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Rent Dropdown */}
                <div className="relative group" onMouseEnter={() => handleMouseEnter('rent')} onMouseLeave={handleMouseLeave}>
                    <button 
                        onClick={() => onNavigate('rent')} 
                        className="px-4 py-2 hover:text-slate-900 transition-colors flex items-center gap-1"
                    >
                        Rent <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'rent' ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`absolute top-full -left-20 pt-6 w-[600px] transition-all duration-200 ${activeDropdown === 'rent' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 gap-10">
                             <div>
                                <h4 className="text-red-600 font-bold mb-4 uppercase text-xs tracking-wider border-b border-red-100 pb-2">RENT PROPERTY IN INDIA</h4>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    {['Rent Projects in Pune', 'Rent Projects in Bengaluru', 'Rent Projects in Mumbai', 'Rent Projects in Chennai', 'Rent Projects in Hyderabad', 'Rent Projects in Noida', 'Rent Projects in Gurugram'].map(item => (
                                        <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                             </div>
                             <div>
                                <h4 className="text-red-600 font-bold mb-4 uppercase text-xs tracking-wider border-b border-red-100 pb-2">EXCLUSIVE RENTAL CHOICES</h4>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    {['Rent Projects in Mohali', 'Rent Projects in Coimbatore', 'Rent Projects in Kochi', 'Rent Projects in Delhi', 'Rent Projects in Chandigarh', 'Rent Projects in Faridabad', 'Rent Projects in Dehradun', 'Rent Projects in Nagpur'].map(item => (
                                        <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Sell Dropdown */}
                 <div className="relative group" onMouseEnter={() => handleMouseEnter('sell')} onMouseLeave={handleMouseLeave}>
                    <button 
                        onClick={() => onNavigate('sell')} 
                        className="px-4 py-2 hover:text-slate-900 transition-colors flex items-center gap-1"
                    >
                        Sell <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'sell' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`absolute top-full -left-10 pt-6 w-[500px] transition-all duration-200 ${activeDropdown === 'sell' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 gap-10">
                             <div>
                                <h4 className="text-red-600 font-bold mb-4 uppercase text-xs tracking-wider border-b border-red-100 pb-2">SELLING TOOLS</h4>
                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li className="hover:text-primary cursor-pointer transition-colors" onClick={onPostProperty}>Post Your Property</li>
                                    <li className="hover:text-primary cursor-pointer transition-colors">Property Worth Calculator</li>
                                </ul>
                             </div>
                             <div>
                                <h4 className="text-red-600 font-bold mb-4 uppercase text-xs tracking-wider border-b border-red-100 pb-2">OUR SERVICES</h4>
                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li className="hover:text-primary cursor-pointer transition-colors">Customer Care</li>
                                    <li className="hover:text-primary cursor-pointer transition-colors">Sell / Rent Ad Packages</li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>

                <button onClick={onPostProperty} className="px-4 py-2 hover:text-slate-900 transition-colors whitespace-nowrap">Post Your Property</button>
                
                {/* Tools & Advice Dropdown */}
                <div className="relative group" onMouseEnter={() => handleMouseEnter('tools')} onMouseLeave={handleMouseLeave}>
                    <button 
                        className="px-4 py-2 hover:text-slate-900 transition-colors flex items-center gap-1 whitespace-nowrap"
                    >
                        Tools & Advice <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`absolute top-full left-0 pt-6 w-[250px] transition-all duration-200 ${activeDropdown === 'tools' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                             <ul className="space-y-2 text-slate-600 text-sm">
                                {[
                                    'RERA', 
                                    'Legal Advisory', 
                                    'Master Plans', 
                                    'News Gallery', 
                                    'Media Gallery', 
                                    'Video Gallery', 
                                    'Articles', 
                                    'NRI Center', 
                                    'Covid', 
                                    'Investor Relation', 
                                    'Career'
                                ].map(item => (
                                    <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                                ))}
                             </ul>
                        </div>
                    </div>
                </div>

                <button onClick={() => onNavigate('home-loans')} className="px-4 py-2 hover:text-slate-900 transition-colors whitespace-nowrap">Home Loans</button>
                <button onClick={() => onNavigate('channel-partner')} className="px-4 py-2 hover:text-slate-900 transition-colors whitespace-nowrap">Channel Partner</button>
              </>
          )}
        </div>

        <div className="flex items-center gap-4">
            {isDetailView && (
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                    <Share2 size={20} />
                </button>
            )}
          
          {/* User Menu */}
          <div className="relative">
              <button 
                onClick={() => setShowAuthMenu(!showAuthMenu)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 flex items-center gap-1"
              >
                 <User size={20} />
                 <ChevronDown size={14} />
              </button>
              
              {showAuthMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 flex flex-col gap-1 animate-fade-in-up origin-top-right">
                      <button onClick={() => { onNavigate('login'); setShowAuthMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl text-left text-sm font-bold text-slate-700">
                          <LogIn size={16} className="text-primary" /> Login
                      </button>
                      <button onClick={() => { onNavigate('register'); setShowAuthMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl text-left text-sm font-bold text-slate-700">
                          <UserPlus size={16} className="text-primary" /> Registration
                      </button>
                      <div className="h-px bg-slate-100 my-1"></div>
                      <button onClick={() => { onNavigate('employee-login'); setShowAuthMenu(false); }} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl text-left text-sm font-bold text-slate-700">
                          <Briefcase size={16} className="text-slate-400" /> Employee Login
                      </button>
                  </div>
              )}
          </div>
          
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors xl:hidden text-slate-600">
             <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
