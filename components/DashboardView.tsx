import React, { useState } from 'react';
import {
    User, Mail, Phone, ShieldCheck, MapPin,
    LayoutDashboard, Briefcase, MessageSquare,
    Bell, CreditCard, HelpCircle, LogOut,
    Search, Filter, ChevronRight, Plus,
    ArrowUpRight, Clock, Eye, Edit3,
    Trash2, ImagePlus, CheckCircle2, Info,
    Home, Repeat, Key, Sparkles, Building,
    Calendar, Users, IndianRupee, FileText,
    Zap, SlidersHorizontal, BookOpen, AlertCircle,
    Layers, Target, Compass, Layout, Newspaper, Scale,
    TrendingUp, Activity, Smartphone, Monitor, ShieldPlus,
    Camera, Shield, Globe2, Network, BarChart3, ArrowRight, Cpu,
    Heart, Lock, Fingerprint, Map as MapIcon, ChevronDown, List, X, Download,
    History, Package, Check, Minus, MessageSquarePlus, Share2, MousePointer2, Rocket, BarChart2
} from 'lucide-react';
import BoostModal from './BoostModal';
import PropertyBoostReportModal from './PropertyBoostReportModal';

type DashboardTab = 'home' | 'services' | 'responses' | 'subscriptions' | 'advice';
type HomeSubTab = 'manage' | 'post' | 'favorite' | 'profile' | 'edit' | 'password' | 'boost-analytics';
type SubscriptionSubTab = 'subscribed' | 'history' | 'view';
type ViewServicesSubTab = 'listing-packages' | 'more-services';

interface DashboardViewProps {
    onNavigate: (view: any) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('home');
    const [activeHomeSubTab, setActiveHomeSubTab] = useState<HomeSubTab>('manage');
    const [activeSubSubTab, setActiveSubSubTab] = useState<SubscriptionSubTab>('subscribed');
    const [activeViewServicesTab, setActiveViewServicesTab] = useState<ViewServicesSubTab>('listing-packages');
    const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
    const [isBoostActive, setIsBoostActive] = useState(true); // Default to true for demo
    const [hasPurchasedBoost, setHasPurchasedBoost] = useState(true); // Default to true for demo
    const [selectedPropertyForBoost, setSelectedPropertyForBoost] = useState<any>(null);
    const [selectedPropertyForReport, setSelectedPropertyForReport] = useState<any>(null);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    const boostedProperties = [
        { id: 'MHSA', title: 'SRINAGAR, JAMMU & KASHMIR NODE', price: '₹ 555', area: '1524 SQ-FT', date: '10 Jan, 2026', views: 1240, saves: 85, inquiries: 12, status: 'ACTIVE', daysLeft: 12, package: 'Platinum - 30 Days', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
        { id: 'MHSB', title: 'INDORE METRO HUB RESIDENCE', price: '₹ 2.4 Cr', area: '2400 SQ-FT', date: '12 Jan, 2026', views: 850, saves: 42, inquiries: 5, status: 'ACTIVE', daysLeft: 5, package: 'Gold - 15 Days', image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800&auto=format&fit=crop' },
    ];

    const userInfo = {
        name: 'RISHI KESAVAN S K',
        email: 'ebc.gjmail.com',
        mobile: '99999 99999',
        aadhar: '25252 25252 2523',
        userType: 'Owner',
        verified: 'No',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    };

    const topTabs = [
        { id: 'home', label: 'Home Details', icon: Home },
        { id: 'services', label: 'Our Services', icon: Repeat },
        { id: 'responses', label: 'Responses', icon: MessageSquare },
        { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
        { id: 'advice', label: 'Selling/Renting Advice', icon: BookOpen },
    ];

    const homeSubTabs = [
        { id: 'manage', label: 'Manage Properties', icon: List },
        { id: 'post', label: 'Post New Property', icon: Plus },
        { id: 'favorite', label: 'Favourite Property', icon: Heart },
        { id: 'profile', label: 'Profile Detail', icon: User },
        { id: 'edit', label: 'Edit Detail', icon: Edit3 },
        { id: 'password', label: 'Change Password', icon: Lock },
        { id: 'boost-analytics', label: 'Boost Analytics', icon: Rocket },
    ];

    return (
        <div className="min-h-screen bg-[#F1F5F9] pt-28 pb-20 font-sans">
            {/* 1. Profile Header */}
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 mb-8">
                <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-2 border-slate-50">
                                <img src={userInfo.avatar} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-primary text-[#1A1A1A] p-2 rounded-xl border-2 border-white shadow-md">
                                <ShieldCheck size={14} />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="mb-6">
                                <h1 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">WELCOME, {userInfo.name}</h1>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">Dashboard Management</p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
                                {[
                                    { label: 'MAIL ID', val: userInfo.email, icon: Mail },
                                    { label: 'PHONE NUMBER', val: userInfo.mobile, icon: Phone },
                                    { label: 'AADHAR NUMBER', val: userInfo.aadhar, icon: FileText },
                                    { label: 'USER TYPE', val: userInfo.userType, icon: User },
                                    { label: 'VERIFIED', val: userInfo.verified, icon: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                                            <item.icon size={12} className="text-slate-300" />
                                            <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                                        </div>
                                        <p className="text-[12px] font-bold text-[#1A1A1A] truncate">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Navigation Dock */}
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 mb-10">
                <div className="bg-[#1A1A1A] rounded-[2rem] p-1.5 flex flex-wrap lg:flex-nowrap gap-1 shadow-2xl">
                    {topTabs.map(tab => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as DashboardTab)}
                                className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-[1.8rem] transition-all duration-300 ${isActive ? 'bg-primary text-[#1A1A1A]' : 'text-slate-400 hover:text-white'}`}
                            >
                                <tab.icon size={18} strokeWidth={isActive ? 3 : 2} />
                                <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 3. Main Dashboard */}
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.02)] min-h-[700px] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                    {/* Sidebar */}
                    {(activeTab === 'home' || activeTab === 'subscriptions') && (
                        <aside className="lg:w-80 bg-[#F8FAFC] border-r border-slate-100 p-8 flex flex-col gap-8 shrink-0">
                            <div>
                                <h3 className="text-[#1A1A1A] font-black uppercase text-sm tracking-widest px-4">Home Controls</h3>
                                <div className="h-1 w-12 bg-primary mt-2 ml-4 rounded-full"></div>
                            </div>

                            <div className="space-y-2">
                                {(activeTab === 'home' ? homeSubTabs : [
                                    { id: 'subscribed', label: 'Subscribed Services', icon: Package },
                                    { id: 'history', label: 'Order History', icon: History },
                                    { id: 'view', label: 'View Services', icon: Eye },
                                ]).map(sub => {
                                    const isSubActive = activeTab === 'home' ? activeHomeSubTab === sub.id : activeSubSubTab === sub.id;

                                    // Only show boost analytics if purchased
                                    if (sub.id === 'boost-analytics' && !hasPurchasedBoost) return null;

                                    return (
                                        <div key={sub.id} className="space-y-1">
                                            <button
                                                onClick={() => {
                                                    if (activeTab === 'home') {
                                                        if (sub.id === 'post') onNavigate('add-property');
                                                        else setActiveHomeSubTab(sub.id as HomeSubTab);
                                                    } else {
                                                        setActiveSubSubTab(sub.id as SubscriptionSubTab);
                                                    }
                                                }}
                                                className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${isSubActive ? 'bg-white shadow-lg text-[#1A1A1A] border-l-4 border-primary' : 'text-slate-500 hover:bg-white/60 hover:text-[#1A1A1A]'}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="relative">
                                                        <sub.icon size={20} className={isSubActive ? 'text-primary' : 'text-slate-300'} />
                                                        {sub.id === 'boost-analytics' && isBoostActive && (
                                                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#F8FAFC] animate-pulse"></span>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[13px] font-bold tracking-tight">{sub.label}</span>
                                                        {sub.id === 'boost-analytics' && isBoostActive && (
                                                            <span className="text-[8px] font-black text-green-500 tracking-tighter -mt-0.5 uppercase">LIVE ENGINE</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <ChevronRight size={16} className={`transition-transform duration-300 ${isSubActive ? 'translate-x-1 opacity-100 rotate-90' : 'opacity-0'}`} />
                                            </button>

                                            {/* Boost Analytics Sub-menu */}
                                            {sub.id === 'boost-analytics' && isSubActive && hasPurchasedBoost && (
                                                <div className="pl-14 pr-4 py-2 space-y-2 animate-in slide-in-from-top-2 duration-300">
                                                    {boostedProperties.map(bp => (
                                                        <button
                                                            key={bp.id}
                                                            onClick={() => {
                                                                setSelectedPropertyForReport(bp);
                                                                setIsReportModalOpen(true);
                                                            }}
                                                            className="w-full text-left text-[10px] font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group/subitem truncate"
                                                        >
                                                            <div className="w-1 h-1 bg-slate-200 rounded-full group-hover/subitem:bg-primary" />
                                                            <span className="truncate uppercase tracking-tighter">{bp.title}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </aside>
                    )}

                    {/* Main Content Area */}
                    <main className="flex-1 p-8 md:p-12 relative bg-white">
                        <div className="max-w-5xl mx-auto h-full">
                            {activeTab === 'home' && (
                                <>
                                    {activeHomeSubTab === 'manage' && (
                                        <ManagePropertiesNode onBoost={(prop) => {
                                            setSelectedPropertyForBoost(prop);
                                            setIsBoostModalOpen(true);
                                        }} />
                                    )}
                                    {activeHomeSubTab === 'favorite' && <FavoritePropertiesNode />}
                                    {activeHomeSubTab === 'profile' && <ProfileDetailsNode userInfo={userInfo} />}
                                    {activeHomeSubTab === 'edit' && <EditProfileNode userInfo={userInfo} />}
                                    {activeHomeSubTab === 'password' && <ChangePasswordNode userInfo={userInfo} />}
                                    {activeHomeSubTab === 'boost-analytics' && (
                                        <BoostAnalyticsNode
                                            isBoostActive={isBoostActive}
                                            properties={boostedProperties}
                                            onViewReport={(prop) => {
                                                setSelectedPropertyForReport(prop);
                                                setIsReportModalOpen(true);
                                            }}
                                        />
                                    )}
                                </>
                            )}
                            {activeTab === 'services' && <ServicesNode onNavigate={onNavigate} />}
                            {activeTab === 'responses' && <ResponsesNode />}
                            {activeTab === 'subscriptions' && (
                                <SubscriptionsNode
                                    activeSubTab={activeSubSubTab}
                                    activeViewServicesTab={activeViewServicesTab}
                                    onViewServicesTabChange={setActiveViewServicesTab}
                                />
                            )}
                            {activeTab === 'advice' && <AdviceNode />}
                        </div>
                    </main>
                </div>
            </div>

            <BoostModal
                isOpen={isBoostModalOpen}
                onClose={() => setIsBoostModalOpen(false)}
                property={selectedPropertyForBoost}
                onComplete={() => {
                    setIsBoostActive(true);
                    setHasPurchasedBoost(true);
                    setActiveHomeSubTab('boost-analytics');
                }}
            />

            {isReportModalOpen && selectedPropertyForReport && (
                <PropertyBoostReportModal
                    isOpen={isReportModalOpen}
                    onClose={() => setIsReportModalOpen(false)}
                    property={selectedPropertyForReport}
                />
            )}
        </div>
    );
};

// --- DATA MODULES ---

const ManagePropertiesNode = ({ onBoost }: { onBoost?: (prop: any) => void }) => {
    const userProperties = [
        { id: 'MHSA', type: 'Residential', title: 'SRINAGAR, JAMMU & KASHMIR NODE', price: '₹ 5.5 Cr', area: '1524 SQ-FT', date: '10 Jan, 2026', views: 1240, saves: 142, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
        { id: 'MHSB', type: 'Commercial', title: 'INDORE METRO HUB OFFICE', price: '₹ 1.2 Cr', area: '850 SQ-FT', date: '12 Jan, 2026', views: 850, saves: 65, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800&auto=format&fit=crop' },
        { id: 'MHSC', type: 'Plot', title: 'CHANDIGARH SMART PLOT', price: '₹ 85 L', area: '200 SQ-YD', date: '14 Jan, 2026', views: 420, saves: 28, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
    ];
    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-50 pb-6">
                <div>
                    <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">MANAGE PROPERTIES</h2>
                    <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 bg-[#20F29E]/10 rounded-full border border-[#20F29E]/20">
                        <span className="text-[10px] font-black text-[#20F29E] uppercase tracking-widest leading-none">LISTING QUOTA : 60 LEFT</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Vault..."
                            className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold outline-none focus:border-[#20F29E] transition-all shadow-inner"
                        />
                        <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    </div>
                </div>
            </div>

            <div className="grid gap-6">
                {userProperties.map(prop => (
                    <div key={prop.id} className="bg-white border border-slate-50 rounded-3xl p-6 flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-all group overflow-hidden relative">
                        {/* Status Badge */}
                        <div className="absolute top-6 left-6 z-10">
                            <div className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[8px] font-black rounded-full uppercase shadow-sm border border-slate-100">{prop.type}</div>
                        </div>

                        <div className="w-full md:w-56 h-40 rounded-2xl overflow-hidden shrink-0 relative shadow-inner">
                            <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Asset ID: {prop.id}</span>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full">
                                        <div className="w-1.5 h-1.5 bg-[#20F29E] rounded-full animate-pulse" />
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{prop.status}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-[#20F29E] transition-colors leading-snug">{prop.title}</h3>
                                <div className="flex items-center gap-4 mt-3">
                                    <div className="px-3 py-1.5 bg-slate-50 rounded-xl flex items-center gap-2">
                                        <Eye size={12} className="text-slate-400" />
                                        <span className="text-[10px] font-black text-[#1A1A1A]">{prop.views} <span className="text-slate-400 ml-1">VIEWS</span></span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-slate-50 rounded-xl flex items-center gap-2">
                                        <Heart size={12} className="text-slate-400" />
                                        <span className="text-[10px] font-black text-[#1A1A1A]">{prop.saves} <span className="text-slate-400 ml-1">SAVES</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-50">
                                <button
                                    onClick={() => onBoost?.(prop)}
                                    className="px-6 py-2.5 bg-[#20F29E] text-[#1A1A1A] rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-xl hover:shadow-[#20F29E]/20 transition-all flex items-center gap-2 group/boost shadow-md"
                                >
                                    <Rocket size={14} className="group-hover/boost:-translate-y-0.5 group-hover/boost:translate-x-0.5 transition-transform" />
                                    BOOST PROPERTY
                                </button>
                                <button className="px-5 py-2.5 border border-slate-100 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                                    <Edit3 size={12} /> EDIT
                                </button>
                                <button className="px-5 py-2.5 border border-slate-100 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                                    <Eye size={12} /> VIEW
                                </button>
                                <button className="p-2.5 text-slate-300 hover:text-red-500 transition-colors ml-auto">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col justify-center items-end border-l border-slate-50 pl-8 min-w-[140px]">
                            <div className="text-2xl font-black text-[#1A1A1A] tracking-tighter">{prop.price}</div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{prop.area}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FavoritePropertiesNode = () => {
    const favorites = [{ id: '101', title: 'PRINCESS ESTATE, INDORE HUB', price: '₹ 2.4 Cr', location: 'INDORE CITY METRO, M.P.', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', date: '14 JAN, 2026' }];
    return (
        <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">FAVOURITE PROPERTIES</h2>
            <div className="grid gap-6">
                {favorites.map(fav => (
                    <div key={fav.id} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col md:flex-row gap-8 hover:shadow-xl transition-all group overflow-hidden">
                        <div className="w-full md:w-64 h-44 rounded-xl overflow-hidden shrink-0 shadow-sm relative">
                            <img src={fav.imageUrl} alt={fav.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-red-600 shadow-md">
                                <Heart size={16} fill="currentColor" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div className="space-y-3">
                                <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-red-600 transition-colors leading-tight">{fav.title}</h3>
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold leading-none"><MapPin size={14} className="text-red-600" /> {fav.location}</div>
                                <div className="text-2xl font-black text-[#1A1A1A] tracking-tighter pt-2">{fav.price}</div>
                            </div>
                            <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Added: {fav.date}</span>
                                <button className="px-8 py-3 bg-[#1A1A1A] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-[#1A1A1A] transition-all active:scale-95 shadow-lg">VIEW PROPERTY</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProfileDetailsNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-8 animate-fade-in-up">
        <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">PROFILE DETAILS</h2>
        <div className="bg-[#F8FAFC] p-10 md:p-14 rounded-3xl border border-slate-100 shadow-inner grid sm:grid-cols-2 gap-10">
            {[
                { label: 'NAME', val: userInfo.name, icon: User },
                { label: 'USER TYPE', val: userInfo.userType, icon: Building },
                { label: 'MAIL ID', val: userInfo.email, icon: Mail },
                { label: 'PHONE NUMBER', val: userInfo.mobile, icon: Phone },
            ].map((field, i) => (
                <div key={i} className="space-y-2 border-b border-slate-200 pb-4 group hover:border-primary transition-colors">
                    <div className="flex items-center gap-3 text-slate-400">
                        <field.icon size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{field.label}</span>
                    </div>
                    <p className="text-sm font-black text-[#1A1A1A] uppercase truncate">{field.val}</p>
                </div>
            ))}
        </div>
    </div>
);

const EditProfileNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-8 animate-fade-in-up">
        <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">EDIT DETAIL</h2>
        <form className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                    <input type="text" defaultValue={userInfo.name} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold text-[#1A1A1A] outline-none focus:border-primary focus:bg-white transition-all shadow-inner" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                    <input type="tel" defaultValue={userInfo.mobile} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold text-[#1A1A1A] outline-none focus:border-primary focus:bg-white transition-all shadow-inner" />
                </div>
            </div>
            <button className="px-10 py-4 bg-primary text-[#1A1A1A] rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">UPDATE PROFILE</button>
        </form>
    </div>
);

const ChangePasswordNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-8 animate-fade-in-up">
        <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">CHANGE PASSWORD</h2>
        <form className="max-w-xl bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 space-y-6">
            <div className="space-y-4">
                <input type="password" placeholder="CURRENT PASSWORD" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold outline-none focus:border-primary transition-all shadow-inner" />
                <input type="password" placeholder="NEW PASSWORD" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold outline-none focus:border-primary transition-all shadow-inner" />
                <button className="w-full py-5 bg-[#1A1A1A] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95 shadow-lg">UPDATE PASSWORD</button>
            </div>
        </form>
    </div>
);

const ResponsesNode = () => {
    const responses = [
        { name: 'ANANYA SHARMA', mobile: '+91 9884521000', email: 'ananya.s@gmail.com', date: '08 JAN 2026', type: 'ACQUISITION' },
        { name: 'RAHUL KAPOOR', mobile: '+91 9123456789', email: 'rahul.k@outlook.com', date: '07 JAN 2026', type: 'RENTAL' },
    ];
    return (
        <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">RESPONSES</h2>
            <div className="grid gap-4">
                {responses.map((r, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-all group overflow-hidden">
                        <div className="flex items-center gap-5 min-w-[240px]">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#1A1A1A] flex items-center justify-center font-black text-lg border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all">{r.name[0]}</div>
                            <div>
                                <h4 className="text-sm font-black uppercase text-[#1A1A1A] group-hover:text-red-600 transition-colors">{r.name}</h4>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{r.type} • {r.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-12 px-8 border-x border-slate-50 hidden lg:flex">
                            <div className="space-y-1">
                                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Mobile</p>
                                <p className="text-[#1A1A1A] font-bold text-xs">{r.mobile}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Email</p>
                                <p className="text-[#1A1A1A] font-bold text-xs lowercase">{r.email}</p>
                            </div>
                        </div>
                        <button className="px-6 py-2.5 bg-[#1A1A1A] text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-primary hover:text-[#1A1A1A] transition-all active:scale-95 flex items-center gap-2">CONTACT <ArrowRight size={12} /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SubscriptionsNode = ({
    activeSubTab,
    activeViewServicesTab,
    onViewServicesTabChange
}: {
    activeSubTab: SubscriptionSubTab,
    activeViewServicesTab: ViewServicesSubTab,
    onViewServicesTabChange: (t: ViewServicesSubTab) => void
}) => {
    const historyData = [
        { id: '114107135936', product: 'Owner-Metal-0', date: '2025-11-20 19:32:59', status: 'Invalid' },
        { id: 'HP-99841', product: 'Owner-Gold -3500', date: '2025-11-20 19:33:07', status: 'Pending' },
    ];

    const plans = [
        { name: 'Metal', price: 'Free', color: 'bg-slate-400', duration: '30 Days', listings: 1, video: false, sms: false, email: false, verified: false, chat: false, contact: false },
        { name: 'Bronze', price: '₹ 730', color: 'bg-orange-600', duration: '60 Days', listings: 3, video: false, sms: false, email: false, verified: false, chat: true, contact: true },
        { name: 'Silver', price: '₹ 1400', color: 'bg-red-600', duration: '90 Days', listings: 5, video: false, sms: false, email: true, verified: false, chat: true, contact: true },
        { name: 'Gold', price: '₹ 3500', color: 'bg-amber-500', duration: '120 Days', listings: 7, video: true, sms: true, email: true, verified: true, chat: true, contact: true },
        { name: 'Platinum', price: '₹ 5000', color: 'bg-[#1A1A1A]', duration: '150 Days', listings: 9, video: true, sms: true, email: true, verified: true, chat: true, contact: true }
    ];

    const moreServices = [
        { title: 'Hunt Vastu Consultancy', desc: 'Expert Vastu analysis for energy harmony and spatial optimization.', icon: Compass },
        { title: 'Legal Expert Advice', desc: 'Secure legal framework validation and document verification.', icon: Scale },
        { title: 'SMS Booster Pack', desc: 'High-velocity lead acquisition via targeted SMS broadcasts.', icon: Zap },
        { title: 'Email Booster Pack', desc: 'Digital marketing protocol for massive asset exposure.', icon: Mail },
        { title: 'Expert Page Design', desc: 'Bespoke UI/UX for your property presentation.', icon: Layout },
        { title: 'Digital Marketing', desc: 'Full spectrum social and search engine synchronization.', icon: Share2 },
    ];

    return (
        <div className="space-y-10 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-50">
                <div>
                    <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
                        {activeSubTab === 'subscribed' ? 'Subscribed Services' : activeSubTab === 'history' ? 'Order History' : 'Discovery Hub'}
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Registry Management</p>
                </div>
                {activeSubTab === 'view' && (
                    <div className="flex gap-1 p-1 bg-slate-100 rounded-xl">
                        <button
                            onClick={() => onViewServicesTabChange('listing-packages')}
                            className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeViewServicesTab === 'listing-packages' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                            Listing Packages
                        </button>
                        <button
                            onClick={() => onViewServicesTabChange('more-services')}
                            className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeViewServicesTab === 'more-services' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                            More Services
                        </button>
                    </div>
                )}
            </div>

            {activeSubTab === 'subscribed' && (
                <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                    <div className="bg-[#1A1A1A] p-4 flex justify-between items-center text-white">
                        <span className="text-[9px] font-black uppercase tracking-widest">Active Plans</span>
                        <Package size={16} className="text-primary" />
                    </div>
                    <div className="py-20 text-center text-slate-300 font-bold uppercase text-[10px] tracking-widest">No active plans detected</div>
                </div>
            )}

            {activeSubTab === 'history' && (
                <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#1A1A1A] text-white">
                                <tr>{['Product', 'Date', 'Status'].map(h => <th key={h} className="px-8 py-4 text-[9px] font-black uppercase tracking-widest">{h}</th>)}</tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {historyData.map((order, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-all">
                                        <td className="px-8 py-5">
                                            <p className="text-xs font-black text-[#1A1A1A] uppercase">{order.product}</p>
                                            <p className="text-[9px] font-bold text-slate-300">ID: {order.id}</p>
                                        </td>
                                        <td className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                            {order.date}
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${order.status === 'Invalid' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>{order.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeSubTab === 'view' && (
                <div className="animate-fade-in-up">
                    {activeViewServicesTab === 'listing-packages' ? (
                        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white">Feature Protocol</th>
                                            {plans.map(p => (
                                                <th key={p.name} className={`px-4 py-8 min-w-[120px] text-white ${p.color}`}>
                                                    <h4 className="text-sm font-black uppercase tracking-tight">{p.name}</h4>
                                                    <p className="text-[9px] font-black text-white/60 uppercase mt-1">{p.price}</p>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { label: 'Free Posting', key: 'free' },
                                            { label: 'Duration (Days)', key: 'duration' },
                                            { label: 'Total Listings', key: 'listings' },
                                            { label: 'Video Support', key: 'video' },
                                            { label: 'SMS Alerts', key: 'sms' },
                                            { label: 'Verified Badge', key: 'verified' },
                                            { label: 'Direct Chat', key: 'chat' },
                                            { label: 'Buyer Contact', key: 'contact' },
                                        ].map((row) => (
                                            <tr key={row.label} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-left border-r border-slate-50 bg-white sticky left-0 z-10">
                                                    <span className="text-[10px] font-black uppercase text-[#1A1A1A] tracking-tight">{row.label}</span>
                                                </td>
                                                {plans.map(p => {
                                                    const val = (p as any)[row.key];
                                                    const isBool = typeof val === 'boolean';
                                                    return (
                                                        <td key={p.name} className="px-4 py-4 border-x border-slate-50">
                                                            {isBool ? (
                                                                val ? <div className="flex justify-center"><CheckCircle2 size={16} className="text-primary" /></div> : <div className="flex justify-center"><Minus size={16} className="text-slate-100" /></div>
                                                            ) : (
                                                                <span className="text-[10px] font-bold text-[#1A1A1A] uppercase">{row.key === 'free' ? 'Yes' : val}</span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {moreServices.map(service => (
                                <div key={service.title} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="w-12 h-12 bg-slate-50 text-[#1A1A1A] rounded-xl flex items-center justify-center group-hover:bg-primary transition-all"><service.icon size={20} /></div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A] leading-none">{service.title}</h3>
                                            <p className="text-xs font-medium text-slate-500 leading-relaxed italic pr-4">{service.desc}</p>
                                        </div>
                                    </div>
                                    <button className="mt-8 px-8 py-3 bg-[#1A1A1A] text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-primary hover:text-[#1A1A1A] transition-all flex items-center justify-center gap-3">Proceed <ArrowRight size={14} /></button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const ServicesNode = ({ onNavigate }: { onNavigate: (v: any) => void }) => {
    const services = [
        { label: 'Home Loan', icon: IndianRupee, color: 'text-emerald-500', bg: 'bg-emerald-50', view: 'home-loans' },
        { label: 'Vastu AI', icon: Compass, color: 'text-amber-500', bg: 'bg-amber-50', view: 'vastu' },
        { label: 'Interior Node', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50', view: 'home' },
        { label: 'Market Pulse', icon: Newspaper, color: 'text-blue-500', bg: 'bg-blue-50', view: 'insights' },
    ];
    return (
        <div className="space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tight uppercase leading-none">STRATEGIC <span className="text-primary italic">SERVICES</span></h3>
                <p className="text-slate-400 text-sm font-medium italic">"Premium real estate intelligence and advisory at your fingertips."</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map(service => (
                    <div key={service.label} onClick={() => onNavigate(service.view)} className="p-8 rounded-3xl border border-slate-100 text-center space-y-6 hover:shadow-xl hover:border-primary transition-all group cursor-pointer bg-white">
                        <div className={`w-16 h-16 mx-auto rounded-2xl ${service.bg} ${service.color} flex items-center justify-center border-2 border-white group-hover:bg-[#1A1A1A] group-hover:text-primary transition-all duration-500`}><service.icon size={24} /></div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-black uppercase text-[#1A1A1A] group-hover:text-primary transition-colors tracking-tight leading-none">{service.label}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AdviceNode = () => {
    const advice = [
        { title: "DO'S & DON'T'S FOR SELL", items: ["Verified Registry Protocol", "Infrastructure Archive Log", "Immersive Visual Staging"], icon: Info },
        { title: "RENTAL FRAMEWORKS", items: ["Residency Verification Node", "Digital Lease Matrix", "Security Deposit Token"], icon: FileText }
    ];
    return (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {advice.map(cat => (
                <div key={cat.title} className="bg-white border border-slate-100 rounded-3xl p-10 hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="flex items-center gap-6 mb-8 pb-6 border-b border-slate-50">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-primary transition-all duration-500"><cat.icon size={20} /></div>
                        <h4 className="text-sm font-black uppercase text-[#1A1A1A] tracking-tight">{cat.title}</h4>
                    </div>
                    <ul className="space-y-4">
                        {cat.items.map(item => (
                            <li key={item} className="flex items-start gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

const BoostAnalyticsNode = ({ isBoostActive, properties, onViewReport }: { isBoostActive: boolean, properties: any[], onViewReport: (prop: any) => void }) => {
    if (!isBoostActive || properties.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 animate-fade-in-up">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-200">
                    <Rocket size={40} />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">No Active Boosts Detected</h3>
                    <p className="text-slate-400 text-sm font-medium italic">"Ignite your property's visibility to see real-time performance analytics here."</p>
                </div>
                <button className="px-10 py-4 bg-[#1A1A1A] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#20F29E] hover:text-[#1A1A1A] transition-all active:scale-95 shadow-lg">BOOST A PROPERTY NOW</button>
            </div>
        );
    }

    const globalStats = {
        totalViews: 14250,
        totalLeads: 84,
        avgROI: '3.4x',
        activeBoosts: properties.length
    };

    return (
        <div className="space-y-10 animate-fade-in-up pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-50">
                <div>
                    <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">PRO-ANALYTICS ENGINE</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-[#20F29E] rounded-full animate-pulse"></div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Real-time Lead Origin Synced</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                        <TrendingUp size={12} className="text-[#20F29E]" />
                        <span className="text-[10px] font-black uppercase text-[#1A1A1A]">ROI: {globalStats.avgROI}</span>
                    </div>
                </div>
            </div>

            {/* ROI Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {properties.map((prop, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-8 space-y-8 hover:shadow-2xl transition-all group overflow-hidden relative">
                        <div className="flex items-start justify-between">
                            <div className="space-y-1">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{prop.package}</span>
                                <h4 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight truncate max-w-[200px]">{prop.title}</h4>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#20F29E] transition-all duration-500">
                                <BarChart3 size={20} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 py-6 border-y border-slate-50">
                            <div className="space-y-1">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Leads Generated</span>
                                <p className="text-3xl font-black text-[#1A1A1A]">{prop.inquiries}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Traffic Gain</span>
                                <p className="text-3xl font-black text-[#20F29E]">+{Math.floor(prop.views / 10)}%</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Clock size={12} className="text-red-500" />
                                    <span className="text-[10px] font-black text-red-500 uppercase">{prop.daysLeft} DAYS LEFT</span>
                                </div>
                                <p className="text-[8px] font-bold text-slate-400 uppercase italic">Expiry: 12 April 2026</p>
                            </div>
                            <button className="px-6 py-2.5 bg-[#1A1A1A] text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-[#20F29E] hover:text-[#1A1A1A] transition-all shadow-lg">EXTEND BOOST</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Map Overlay & Lead Origin */}
            <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 relative overflow-hidden group min-h-[500px]">
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Lead Origin Heatmap</h3>
                            <p className="text-slate-400 text-sm font-medium italic">Showing organic vs targeted traffic flow</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#20F29E] rounded-full"></div>
                                <span className="text-[9px] font-bold text-white uppercase">Inter-City</span>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-[9px] font-bold text-white uppercase">Local</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 grid md:grid-cols-3 gap-10">
                        {/* Mock Map Representation */}
                        <div className="md:col-span-2 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden min-h-[300px]">
                            {/* Abstract Map Lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                                <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
                                <path d="M20,0 Q40,50 20,100" fill="none" stroke="white" strokeWidth="0.5" />
                                <path d="M80,0 Q60,50 80,100" fill="none" stroke="white" strokeWidth="0.5" />
                            </svg>

                            {/* Origin Points (Pulse) */}
                            <div className="absolute top-1/4 left-1/3">
                                <div className="w-4 h-4 bg-[#20F29E] rounded-full animate-pulse scale-150 opacity-20" />
                                <div className="absolute top-0 w-4 h-4 bg-[#20F29E] rounded-full border-2 border-white shadow-[0_0_15px_#20F29E]" />
                                <span className="absolute top-6 left-0 text-[8px] font-black text-[#20F29E] uppercase whitespace-nowrap">SRINAGAR (Local)</span>
                            </div>

                            <div className="absolute bottom-1/4 right-1/4">
                                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse scale-150 opacity-20" />
                                <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_15px_blue]" />
                                <span className="absolute top-6 left-0 text-[8px] font-black text-blue-400 uppercase whitespace-nowrap">CHENNAI (Targeted)</span>
                            </div>

                            <div className="absolute top-1/2 right-1/3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-40" />
                                <div className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full border border-white" />
                                <span className="absolute top-5 left-0 text-[7px] font-black text-slate-400 uppercase">NOIDA</span>
                            </div>

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                                <path
                                    d="M133,75 Q200,150 300,225"
                                    fill="none"
                                    stroke="url(#lineGradient)"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    className="animate-[dash_10s_linear_infinite]"
                                />
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#20F29E" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Top Locations Stats */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black text-[#20F29E] uppercase tracking-widest">Geographical Intensity</h4>
                            <div className="space-y-4">
                                {[
                                    { city: 'Chennai', percentage: 42, color: 'bg-blue-500' },
                                    { city: 'Noida', percentage: 28, color: 'bg-blue-400' },
                                    { city: 'Srinagar', percentage: 15, color: 'bg-[#20F29E]' },
                                    { city: 'Indore', percentage: 10, color: 'bg-slate-700' },
                                    { city: 'Others', percentage: 5, color: 'bg-slate-800' }
                                ].map((loc, idx) => (
                                    <div key={idx} className="space-y-1.5">
                                        <div className="flex justify-between items-center text-[10px] font-bold text-white uppercase">
                                            <span>{loc.city}</span>
                                            <span className="text-slate-500">{loc.percentage}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${loc.color} transition-all duration-1000 ease-out`}
                                                style={{ width: `${loc.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                    <MapIcon size={300} className="text-primary" />
                </div>
            </div>
        </div>
    );
};

// Custom Gavel Icon Helper
const Gavel = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m14.5 12.5-8 8a2.11 2.11 0 1 1-3-3l8-8" /><path d="m16 16 2 2" /><path d="m19 13 2 2" /><path d="m5 5 3 3" /><path d="m2 8 3 3" /><path d="m15 4 6 6" /></svg>
);

export default DashboardView;
