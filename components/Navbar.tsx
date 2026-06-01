import React, { useState, useEffect } from 'react';
import { Menu, User, ArrowLeft, ChevronDown, LogIn, UserPlus, Briefcase, MapPin, Home, X, LayoutDashboard, Bell, Check } from 'lucide-react';

interface NavbarProps {
    onNavigate: (view: any) => void;
    onPostProperty: () => void;
    isDetailView?: boolean;
    onBack?: () => void;
    backLabel?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onPostProperty, isDetailView, onBack, backLabel }) => {
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNotificationTab, setActiveNotificationTab] = useState('All');
  const [activeDropdown, setActiveDropdown] = useState<string | null>('Buy');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const notifications = [
    { id: 1, type: 'property', title: 'Price Dropped by ₹5L', desc: '2 BHK in Mumbai now available at lower price', time: '2 mins ago', unread: true, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=100&q=80' },
    { id: 2, type: 'alert', title: 'New Project Alert', desc: 'Godrej Tropical Isle just launched in Sector 146', time: '1 hour ago', unread: true },
    { id: 3, type: 'plan', title: 'Subscription Expiring', desc: 'Your Premium plan expires in 3 days. Renew now.', time: '1 day ago', unread: false }
  ];

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
      items: [
        { label: 'New Projects in Pune', view: 'buy' },
        { label: 'New Projects in Bengaluru', view: 'buy' },
        { label: 'New Projects in Mumbai', view: 'buy' },
        { label: 'New Projects in Chennai', view: 'buy' },
        { label: 'New Projects in Hyderabad', view: 'buy' },
        { label: 'New Projects in Noida', view: 'buy' },
        { label: 'New Projects in Gurugram', view: 'buy' }
      ]
    },
    col2: {
      title: 'Real Estate in India',
      items: [
        { label: 'New Projects in Mohali', view: 'buy' },
        { label: 'New Projects in Coimbatore', view: 'buy' },
        { label: 'New Projects in Kochi', view: 'buy' },
        { label: 'New Projects in Delhi', view: 'buy' },
        { label: 'New Projects in Chandigarh', view: 'buy' },
        { label: 'New Projects in Faridabad', view: 'buy' },
        { label: 'New Projects in Dehradun', view: 'buy' },
        { label: 'New Projects in Nagpur', view: 'buy' }
      ]
    }
  };

  const rentDropdownContent = {
    col1: {
      title: 'Rent Property in India',
      items: [
        { label: 'Rent Projects in Pune', view: 'rent' },
        { label: 'Rent Projects in Bengaluru', view: 'rent' },
        { label: 'Rent Projects in Mumbai', view: 'rent' },
        { label: 'Rent Projects in Chennai', view: 'rent' },
        { label: 'Rent Projects in Hyderabad', view: 'rent' },
        { label: 'Rent Projects in Noida', view: 'rent' },
        { label: 'Rent Projects in Gurugram', view: 'rent' }
      ]
    },
    col2: {
      title: 'Exclusive Rental Choices',
      items: [
        { label: 'Rent Projects in Mohali', view: 'rent' },
        { label: 'Rent Projects in Coimbatore', view: 'rent' },
        { label: 'Rent Projects in Kochi', view: 'rent' },
        { label: 'Rent Projects in Delhi', view: 'rent' },
        { label: 'Rent Projects in Chandigarh', view: 'rent' },
        { label: 'Rent Projects in Faridabad', view: 'rent' },
        { label: 'Rent Projects in Dehradun', view: 'rent' },
        { label: 'Rent Projects in Nagpur', view: 'rent' }
      ]
    }
  };

  const sellDropdownContent = {
    col1: {
      title: 'Selling Tools',
      items: [
        { label: 'Post Your Property', action: onPostProperty },
        { label: 'Property Worth Calculator', view: 'worth-calculator' }
      ]
    },
    col2: {
      title: 'Our Services',
      items: [
        { label: 'Customer Care', view: 'customer-care' },
        { label: 'Sell / Rent Ad Packages', view: 'ad-packages' }
      ]
    }
  };

  const toolsAdviceItems = [
      { label: 'Investors Relation', view: 'investors' },
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
      <nav className="sticky top-0 z-[100] w-full pointer-events-none transition-all duration-300">
        <div className="w-full px-4 sm:px-8 py-3 flex items-center justify-between pointer-events-auto shadow-sm bg-white/95 backdrop-blur-xl border-b border-gray-100">
          
          {/* Logo & Back Button */}
          <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center cursor-pointer group" onClick={() => { setActiveDropdown(null); onNavigate('home'); }}>
                  <div className="flex items-center">
                      <span className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">Hunt</span>
                      <div className="relative -mx-0.5 mb-1">
                          <MapPin className="text-red-600 fill-red-600" size={22} />
                      </div>
                      <span className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight -ml-0.5">roperty</span>
                  </div>
              </div>

              {isDetailView && onBack && (
                  <button 
                      onClick={onBack}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1A1A1A] hover:bg-primary rounded-full text-white hover:text-[#1A1A1A] transition-all font-bold text-[10px] sm:text-xs shadow-lg group shrink-0"
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
                          className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors ${activeDropdown === item.label ? 'text-red-600' : 'text-[#1A1A1A] hover:text-black'}`}
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
                                              {section.items.map((subItem: any) => (
                                                  <li 
                                                    key={subItem.label} 
                                                    onClick={() => {
                                                        if (subItem.action) subItem.action();
                                                        else if (subItem.view) onNavigate(subItem.view);
                                                        setActiveDropdown(null);
                                                    }}
                                                    className="text-slate-600 hover:text-red-600 transition-colors text-[14px] font-medium cursor-pointer"
                                                  >
                                                      {subItem.label}
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
                  onClick={() => { setActiveDropdown(null); onNavigate('dashboard'); }}
                  className="hidden xl:flex items-center gap-2 px-5 py-3 text-[#1A1A1A] hover:text-red-600 font-bold text-sm transition-all"
              >
                  <LayoutDashboard size={18} className="text-red-600" />
                  Dashboard
              </button>

              <button 
                  onClick={onPostProperty}
                  className="hidden sm:flex items-center px-6 sm:px-8 py-3 bg-[#1A1A1A] text-white font-bold rounded-full hover:bg-primary hover:text-[#1A1A1A] transition-all duration-300 shadow-xl hover:shadow-primary/30 active:scale-95 whitespace-nowrap text-xs sm:text-sm"
              >
                  Post Your Property
              </button>

              <div className="relative">
                  <button 
                      onClick={() => { setShowNotifications(!showNotifications); setShowAuthMenu(false); setActiveDropdown(null); }}
                      className="relative p-2 rounded-full hover:bg-slate-100 transition-all text-[#1A1A1A] group"
                  >
                      <Bell size={20} className="stroke-[2.5]" />
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2FED9A] rounded-full ring-2 ring-white"></span>
                  </button>

                  {showNotifications && (
                      <div className="absolute right-0 top-full mt-4 w-[360px] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-2 flex flex-col animate-fade-in-up origin-top-right z-50">
                          <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                              <h3 className="font-bold text-[#1A1A1A] text-[15px]">Notifications</h3>
                              <button className="text-[11px] font-bold text-[#2FED9A] hover:text-teal-600 uppercase tracking-widest flex items-center gap-1">
                                  <Check size={14} /> Mark all as read
                              </button>
                          </div>
                          
                          <div className="flex px-4 py-2 gap-2 border-b border-gray-50">
                              {['All', 'Property Alerts', 'Plan'].map(tab => (
                                  <button 
                                    key={tab}
                                    onClick={() => setActiveNotificationTab(tab)}
                                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors ${activeNotificationTab === tab ? 'bg-[#2FED9A]/10 text-[#2FED9A]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                                  >
                                      {tab}
                                  </button>
                              ))}
                          </div>

                          <div className="max-h-[320px] overflow-y-auto no-scrollbar py-2">
                              {notifications.filter(n => activeNotificationTab === 'All' || (activeNotificationTab === 'Property Alerts' && n.type === 'property') || (activeNotificationTab === 'Plan' && n.type === 'plan')).map(notif => (
                                  <div key={notif.id} className={`flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer group ${notif.unread ? 'bg-[#2FED9A]/5' : ''}`}>
                                      <div className="relative shrink-0">
                                          {notif.image ? (
                                              <img src={notif.image} alt="Property" className="w-12 h-12 rounded-xl object-cover" />
                                          ) : (
                                              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                                                  <Bell size={20} />
                                              </div>
                                          )}
                                          {notif.unread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#2FED9A] rounded-full border-2 border-white"></div>}
                                      </div>
                                      
                                      <div className="flex-1 min-w-0">
                                          <h4 className="text-[13px] font-bold text-[#1A1A1A] truncate leading-tight group-hover:text-[#2FED9A] transition-colors">{notif.title}</h4>
                                          <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">{notif.desc}</p>
                                          <div className="flex items-center justify-between mt-2">
                                              <span className="text-[10px] font-semibold text-gray-400">{notif.time}</span>
                                              <button className="text-[10px] font-black text-[#2FED9A] uppercase tracking-widest hover:text-teal-600">
                                                  View Details
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>

                          <div className="p-3 border-t border-gray-50">
                              <button 
                                onClick={() => { onNavigate('notifications'); setShowNotifications(false); }}
                                className="w-full py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#1A1A1A] font-bold text-xs uppercase tracking-widest transition-colors"
                              >
                                  View All Notifications
                              </button>
                          </div>
                      </div>
                  )}
              </div>

              <div className="relative">
                  <button 
                      onClick={() => { setShowAuthMenu(!showAuthMenu); setShowNotifications(false); }}
                      className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-100 transition-all text-[#1A1A1A]"
                  >
                      <User size={20} className="stroke-[2.5]" />
                      <ChevronDown size={12} className={`text-slate-400 transition-transform ${showAuthMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {showAuthMenu && (
                      <div className="absolute right-0 top-full mt-4 w-52 sm:w-60 bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-2 flex flex-col gap-1 animate-fade-in-up origin-top-right z-50">
                          <button onClick={() => { onNavigate('dashboard'); setShowAuthMenu(false); setActiveDropdown(null); }} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 rounded-2xl text-left text-sm sm:text-[15px] font-bold text-[#1A1A1A]">
                              <LayoutDashboard size={16} className="text-red-600" /> Dashboard
                          </button>
                          <div className="h-px bg-slate-100 mx-4 my-1"></div>
                          <button onClick={() => { onNavigate('login'); setShowAuthMenu(false); setActiveDropdown(null); }} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 rounded-2xl text-left text-sm sm:text-[15px] font-bold text-[#1A1A1A]">
                              <LogIn size={16} className="text-primary" /> Login
                          </button>
                          <button onClick={() => { onNavigate('register'); setShowAuthMenu(false); setActiveDropdown(null); }} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 rounded-2xl text-left text-sm sm:text-[15px] font-bold text-[#1A1A1A]">
                              <UserPlus size={16} className="text-primary" /> Registration
                          </button>
                      </div>
                  )}
              </div>

              <button onClick={toggleMobileMenu} className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors text-[#1A1A1A]">
                  <Menu size={20} />
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#1A1A1A]/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <span className="font-display font-bold text-xl text-[#1A1A1A]">Hunt</span>
                        <MapPin className="text-red-600 fill-red-600 mx-0.5" size={20} />
                        <span className="font-display font-bold text-xl text-[#1A1A1A]">roperty</span>
                    </div>
                    <button onClick={toggleMobileMenu} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                        <X size={24} className="text-[#1A1A1A]" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 no-scrollbar">
                    <button onClick={() => { onNavigate('dashboard'); setIsMobileMenuOpen(false); setActiveDropdown(null); }} className="w-full flex items-center gap-3 py-4 text-left font-bold text-red-600 border-b border-slate-50">
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    {navItems.map((item) => (
                        <div key={item.label} className="border-b border-slate-50 last:border-0">
                            <button 
                                onClick={() => {
                                    if(!item.hasDropdown) {
                                        onNavigate(item.view);
                                        setIsMobileMenuOpen(false);
                                        setActiveDropdown(null);
                                    }
                                }}
                                className="w-full flex items-center justify-between py-4 text-left font-bold text-[#1A1A1A]"
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
                            className="w-full py-4 bg-primary text-[#1A1A1A] font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
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
