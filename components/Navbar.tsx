
import React, { useState } from 'react';
import { Menu, User, ArrowLeft, ChevronDown, LogIn, UserPlus, Briefcase, MapPin, Home, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const navItems = [
    { label: 'Home', view: 'home', hasDropdown: false, icon: Home },
    { label: 'Buy', view: 'buy', hasDropdown: true },
    { label: 'Rent', view: 'rent', hasDropdown: true },
    { label: 'Sell', view: 'sell', hasDropdown: true },
    { label: 'Tools & Advice', view: 'home', hasDropdown: true },
    { label: 'Home Loans', view: 'home-loans', hasDropdown: false },
    { label: 'Channel Partner', view: 'channel-partner', hasDropdown: false },
  ];

  const buyDropdownContent = {
    col1: {
      title: 'New Projects in India',
      items: ['New Projects in Pune', 'New Projects in Bengaluru', 'New Projects in Mumbai', 'New Projects in Chennai', 'New Projects in Hyderabad', 'New Projects in Noida', 'New Projects in Gurugram']
    },
    col2: {
      title: 'Real Estate in India',
      items: ['New Projects in Mohali', 'New Projects in Coimbatore', 'New Projects in Kochi', 'New Projects in Delhi', 'New Projects in Chandigarh', 'New Projects in Faridabad', 'New Projects in Dehradun', 'New Projects in Nagpur']
    }
  };

  const rentDropdownContent = {
    col1: {
      title: 'Rent Property in India',
      items: ['Rent Projects in Pune', 'Rent Projects in Bengaluru', 'Rent Projects in Mumbai', 'Rent Projects in Chennai', 'Rent Projects in Hyderabad', 'Rent Projects in Noida', 'Rent Projects in Gurugram']
    },
    col2: {
      title: 'Exclusive Rental Choices',
      items: ['Rent Projects in Mohali', 'Rent Projects in Coimbatore', 'Rent Projects in Kochi', 'Rent Projects in Delhi', 'Rent Projects in Chandigarh', 'Rent Projects in Faridabad', 'Rent Projects in Dehradun', 'Rent Projects in Nagpur']
    }
  };

  const sellDropdownContent = {
    col1: {
      title: 'Selling Tools',
      items: ['Post Your Property', 'Property Worth Calculator']
    },
    col2: {
      title: 'Our Services',
      items: ['Customer Care', 'Sell / Rent Ad Packages']
    }
  };

  const toolsAdviceItems = [
      { label: 'RERA', view: 'rera' },
      { label: 'Legal Advisory', view: 'legal-advisory' },
      { label: 'Master Plans', view: 'master-plans' },
      { label: 'News Gallery', view: 'news-gallery' },
      { label: 'Media Gallery', view: 'media-gallery' },
      { label: 'Video Gallery', view: 'video-gallery' },
      { label: 'Articles', view: 'articles' },
      { label: 'NRI Center', view: 'nri-center' },
      { label: 'Covid', view: 'covid' },
      { label: 'Career', view: 'career' }
  ];

  const getDropdownData = (label: string) => {
    if (label === 'Buy') return buyDropdownContent;
    if (label === 'Rent') return rentDropdownContent;
    if (label === 'Sell') return sellDropdownContent;
    return null;
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-6 pointer-events-none">
        <div className="max-w-[95rem] mx-auto glass-panel rounded-full px-4 sm:px-8 py-3 flex items-center justify-between pointer-events-auto shadow-2xl bg-white/95 backdrop-blur-xl border border-white/40">
          
          {/* Logo & Back Button */}
          <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
                  <div className="flex items-center">
                      <span className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">Hunt</span>
                      <div className="relative -mx-0.5 mb-1">
                          <MapPin className="text-red-600 fill-red-600" size={22} />
                      </div>
                      <span className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight -ml-0.5">roperty</span>
                  </div>
              </div>

              {isDetailView && onBack && (
                  <button 
                      onClick={onBack}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-900 hover:bg-primary rounded-full text-white hover:text-slate-900 transition-all font-bold text-[10px] sm:text-xs shadow-lg group shrink-0"
                  >
                      <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                      <span className="hidden xs:inline">{backLabel || 'Back'}</span>
                  </button>
              )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 h-12">
              {!isDetailView && navItems.map((item) => (
                  <div 
                      key={item.label} 
                      className="relative group h-full flex items-center"
                      onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                  >
                      <button 
                          onClick={() => !item.hasDropdown && onNavigate(item.view)}
                          className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors ${activeDropdown === item.label ? 'text-red-600' : 'text-slate-700 hover:text-slate-900'}`}
                      >
                          {item.icon && <item.icon size={18} className={activeDropdown === item.label ? 'text-red-600' : 'text-slate-400'} />}
                          {item.label}
                          {item.hasDropdown && <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                      </button>
                      
                      {activeDropdown === item.label && (item.label === 'Buy' || item.label === 'Rent' || item.label === 'Sell') && (
                          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[580px] pt-3 animate-fade-in-up z-50">
                              <div className="bg-white rounded-lg shadow-[0_15px_45px_rgba(0,0,0,0.18)] border-t-[3px] border-red-600 overflow-hidden px-8 py-8 flex gap-8 text-left">
                                  {Object.entries(getDropdownData(item.label) || {}).map(([key, section]) => (
                                      <div key={key} className="flex-1">
                                          <h4 className="text-red-600 font-bold text-xs tracking-wider mb-5 uppercase border-b border-slate-50 pb-2.5">
                                              {section.title}
                                          </h4>
                                          <ul className="space-y-2.5">
                                              {section.items.map(itemText => (
                                                  <li key={itemText} className="text-slate-600 hover:text-red-600 transition-colors text-[14px] font-medium cursor-pointer">
                                                      {itemText}
                                                  </li>
                                              ))}
                                          </ul>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}

                      {item.label === 'Tools & Advice' && activeDropdown === 'Tools & Advice' && (
                          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[240px] pt-3 animate-fade-in-up z-50">
                              <div className="bg-white rounded-lg shadow-[0_15px_45px_rgba(0,0,0,0.18)] border-t-[3px] border-red-600 overflow-hidden px-6 py-6 text-left">
                                  <ul className="space-y-3">
                                      {toolsAdviceItems.map(tool => (
                                          <li 
                                            key={tool.label} 
                                            onClick={() => { onNavigate(tool.view); setActiveDropdown(null); }}
                                            className="text-slate-600 hover:text-red-600 transition-colors text-[14px] font-medium cursor-pointer"
                                          >
                                              {tool.label}
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      )}
                  </div>
              ))}
          </div>

          {/* Action Buttons & User Menu */}
          <div className="flex items-center gap-1 sm:gap-3">
              <button 
                  onClick={onPostProperty}
                  className="hidden sm:flex items-center px-6 sm:px-8 py-3 bg-slate-950 text-white font-bold rounded-full hover:bg-primary hover:text-slate-950 transition-all duration-300 shadow-xl hover:shadow-primary/30 active:scale-95 whitespace-nowrap text-xs sm:text-sm"
              >
                  Post Your Property
              </button>

              <div className="relative">
                  <button 
                      onClick={() => setShowAuthMenu(!showAuthMenu)}
                      className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-100 transition-all text-slate-700"
                  >
                      <User size={20} className="stroke-[2.5]" />
                      <ChevronDown size={12} className={`text-slate-400 transition-transform ${showAuthMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {showAuthMenu && (
                      <div className="absolute right-0 top-full mt-4 w-52 sm:w-60 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 flex flex-col gap-1 animate-fade-in-up origin-top-right">
                          <button onClick={() => { onNavigate('login'); setShowAuthMenu(false); }} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 rounded-2xl text-left text-sm sm:text-[15px] font-bold text-slate-800">
                              <LogIn size={16} className="text-primary" /> Login
                          </button>
                          <button onClick={() => { onNavigate('register'); setShowAuthMenu(false); }} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 rounded-2xl text-left text-sm sm:text-[15px] font-bold text-slate-800">
                              <UserPlus size={16} className="text-primary" /> Registration
                          </button>
                          <div className="h-px bg-slate-100 mx-4 my-1"></div>
                          <button onClick={() => { onNavigate('employee-login'); setShowAuthMenu(false); }} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 rounded-2xl text-left text-sm sm:text-[15px] font-bold text-slate-600">
                              <Briefcase size={16} /> Employee Login
                          </button>
                      </div>
                  )}
              </div>

              <button onClick={toggleMobileMenu} className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-700">
                  <Menu size={20} />
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <span className="font-display font-bold text-xl text-slate-900">Hunt</span>
                        <MapPin className="text-red-600 fill-red-600 mx-0.5" size={20} />
                        <span className="font-display font-bold text-xl text-slate-900">roperty</span>
                    </div>
                    <button onClick={toggleMobileMenu} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                        <X size={24} className="text-slate-900" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 no-scrollbar">
                    {navItems.map((item) => (
                        <div key={item.label} className="border-b border-slate-50 last:border-0">
                            <button 
                                onClick={() => {
                                    if(!item.hasDropdown) {
                                        onNavigate(item.view);
                                        setIsMobileMenuOpen(false);
                                    }
                                }}
                                className="w-full flex items-center justify-between py-4 text-left font-bold text-slate-700"
                            >
                                <span className="flex items-center gap-3">
                                    {item.icon && <item.icon size={20} className="text-slate-400" />}
                                    {item.label}
                                </span>
                                {item.hasDropdown && <ChevronDown size={16} className="text-slate-300" />}
                            </button>
                        </div>
                    ))}
                    
                    <div className="pt-8">
                        <button 
                            onClick={() => {
                                onPostProperty();
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            Post Your Property
                        </button>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">© 2025 Hunt Property</p>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
