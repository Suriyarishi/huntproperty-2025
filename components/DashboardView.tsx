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
    Heart, Lock, Fingerprint, Map as MapIcon, ChevronDown, List, X, Download
} from 'lucide-react';

type DashboardTab = 'home' | 'services' | 'responses' | 'subscriptions' | 'advice';
type HomeSubTab = 'manage' | 'post' | 'favorite' | 'profile' | 'edit' | 'password';

interface DashboardViewProps {
    onNavigate: (view: any) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('home');
    const [activeHomeSubTab, setActiveHomeSubTab] = useState<HomeSubTab>('manage');

    const userInfo = {
        name: 'RISHI KESAVAN S K',
        email: 'klnmca6@gmail.com',
        mobile: '9003486509',
        aadhar: 'N/A',
        userType: 'Owner',
        verified: 'No',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop'
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
        { id: 'favorite', label: 'Favorite Property', icon: Heart },
        { id: 'profile', label: 'Profile Details', icon: User },
        { id: 'edit', label: 'Edit Details', icon: Edit3 },
        { id: 'password', label: 'Change Password', icon: Lock },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans selection:bg-primary selection:text-slate-900">
            {/* 1. Profile Header Hub */}
            <div className="max-w-[100rem] mx-auto px-6 mb-10">
                <div className="bg-white rounded-[3.5rem] p-8 md:p-10 border border-slate-100 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-[5000ms] pointer-events-none">
                        <Sparkles size={400} />
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <div className="relative group/avatar cursor-pointer">
                            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-2xl relative transition-transform group-hover/avatar:scale-105">
                                <img src={userInfo.avatar} alt="Profile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                                    <Camera size={24} className="text-white" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-red-600 text-white p-2 rounded-xl border-4 border-white shadow-lg animate-bounce-slow">
                                <ShieldCheck size={16} />
                            </div>
                        </div>

                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-display font-black text-slate-950 uppercase tracking-tight leading-none">Welcome, {userInfo.name}</h1>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Neural Management Interface Hub V.2025</p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { label: 'Neural ID', val: userInfo.email, icon: Mail },
                                    { label: 'Secure Line', val: userInfo.mobile, icon: Phone },
                                    { label: 'Role Node', val: userInfo.userType, icon: User },
                                    { label: 'Sync Status', val: 'Verified Listing', icon: Activity, color: 'text-emerald-500' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                                            <item.icon size={11} className={item.color} />
                                            <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
                                        </div>
                                        <p className="text-[11px] font-black uppercase tracking-tight text-slate-900 truncate">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button className="px-8 py-3 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-slate-950 transition-all shadow-xl active:scale-95">Edit Intelligence Profile</button>
                            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-red-600 hover:border-red-100 transition-all active:scale-95">Cloud Sync Protocol</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Primary Navigation Bar */}
            <div className="max-w-[100rem] mx-auto px-6 mb-8">
                <div className="bg-slate-950/95 backdrop-blur-2xl rounded-[2.5rem] p-2 border border-white/10 shadow-2xl flex flex-wrap lg:flex-nowrap gap-1">
                    {topTabs.map(tab => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as DashboardTab)}
                                className={`flex-1 flex flex-col items-center justify-center gap-2 p-5 rounded-[2rem] transition-all duration-500 group relative overflow-hidden ${isActive ? 'bg-primary text-slate-950 shadow-inner scale-[1.02] z-10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                <tab.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} className={isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'} />
                                <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">{tab.label}</span>
                                {isActive && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-slate-950 rounded-full opacity-20"></div>}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 3. Main Dashboard Console */}
            <div className="max-w-[100rem] mx-auto px-6">
                <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl min-h-[700px] overflow-hidden flex flex-col">
                    
                    <div className="flex-1 flex flex-col lg:flex-row relative">
                        {/* Sidebar Logic for Home Details */}
                        {activeTab === 'home' && (
                            <aside className="lg:w-80 bg-slate-50 border-r border-slate-100 p-8 space-y-2 shrink-0">
                                <div className="mb-8 px-4">
                                    <h3 className="text-slate-900 font-display font-black uppercase text-sm tracking-tight">Home Controls</h3>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Operational Nodes</p>
                                </div>
                                {homeSubTabs.map(sub => {
                                    const isSubActive = activeHomeSubTab === sub.id;
                                    return (
                                        <button 
                                            key={sub.id}
                                            onClick={() => sub.id === 'post' ? onNavigate('add-property') : setActiveHomeSubTab(sub.id as HomeSubTab)}
                                            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${isSubActive ? 'bg-white shadow-lg text-red-600 scale-[1.05] border-l-4 border-red-600' : 'text-slate-400 hover:bg-white/50 hover:text-slate-700'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <sub.icon size={18} className={isSubActive ? 'text-red-600' : 'text-slate-300'} />
                                                <span className="text-[11px] font-black uppercase tracking-tight">{sub.label}</span>
                                            </div>
                                            <ChevronRight size={14} className={`transition-transform duration-500 ${isSubActive ? 'translate-x-1 text-red-600' : 'opacity-0 group-hover:opacity-100'}`} />
                                        </button>
                                    );
                                })}
                            </aside>
                        )}

                        {/* Content Viewer Stage */}
                        <main className="flex-1 p-8 md:p-12 relative overflow-hidden bg-white">
                            <div className="max-w-6xl h-full animate-fade-in-up">
                                {activeTab === 'home' && (
                                    <>
                                        {activeHomeSubTab === 'manage' && <ManagePropertiesNode />}
                                        {activeHomeSubTab === 'favorite' && <FavoritePropertiesNode />}
                                        {activeHomeSubTab === 'profile' && <ProfileDetailsNode userInfo={userInfo} />}
                                        {activeHomeSubTab === 'edit' && <EditProfileNode userInfo={userInfo} />}
                                        {activeHomeSubTab === 'password' && <ChangePasswordNode userInfo={userInfo} />}
                                    </>
                                )}
                                {activeTab === 'services' && <ServicesNode onNavigate={onNavigate} />}
                                {activeTab === 'responses' && <ResponsesNode />}
                                {activeTab === 'subscriptions' && <SubscriptionsNode />}
                                {activeTab === 'advice' && <AdviceNode />}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View Modules ---

const ManagePropertiesNode = () => {
    const userProperties = [
        { id: '1136', type: 'Sell', title: 'Srinagar, Jammu & Kashmir Node', price: '₹ 555', area: '555 Sq-ft', date: '05 Jan, 2026', views: 0, status: 'Active' },
        { id: '1135', type: 'Sell', title: 'Roja Street, Himachal Pradesh Node', price: '₹ 4244', area: '24 Sq-ft', date: '05 Jan, 2026', views: 2, status: 'Active' },
        { id: '1134', type: 'Rent', title: 'Basti, Uttar Pradesh Node', price: '₹ 424', area: '232 Sq-ft', date: '19 Nov, 2025', views: 33, status: 'Active' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-6">
                <div>
                    <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Active Listings</h2>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Registry Control Hub</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                        <input type="text" placeholder="ID LOOKUP..." className="bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-6 text-[10px] font-black outline-none focus:border-red-600 transition-all shadow-inner" />
                    </div>
                    <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-950 transition-all shadow-lg active:scale-95">Sync Matrix</button>
                </div>
            </div>

            {userProperties.map(prop => (
                <div key={prop.id} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row gap-8 hover:bg-white hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
                    
                    <div className="w-full md:w-56 h-40 bg-white rounded-[2rem] flex flex-col items-center justify-center gap-4 border border-slate-100 group-hover:border-red-100 transition-all overflow-hidden relative shadow-sm">
                        <Building size={40} className="text-slate-200 group-hover:scale-110 group-hover:text-red-600 transition-all duration-700" />
                        <button className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white gap-2 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <ImagePlus size={24} className="text-primary" />
                            <span className="text-[8px] font-black uppercase tracking-widest">Inject Asset View</span>
                        </button>
                    </div>

                    <div className="flex-1 space-y-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${prop.type === 'Sell' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                        Protocol: {prop.type}
                                    </span>
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Node ID: #{prop.id}</span>
                                </div>
                                <h3 className="text-xl font-display font-black text-slate-900 leading-tight uppercase tracking-tight group-hover:text-red-600 transition-colors">{prop.title}</h3>
                                <p className="text-[9px] font-bold text-slate-400 flex items-center gap-2 italic mt-1"><Calendar size={10}/> Transmission Logged: {prop.date}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-display font-black text-slate-950 tracking-tighter">{prop.price}</div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Evaluated Hub Value</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                            <div className="flex gap-10">
                                <div className="space-y-1">
                                    <p className="text-[8px] font-black text-slate-400 uppercase">Neural Views</p>
                                    <p className="text-xs font-black text-slate-900 flex items-center gap-2"><Eye size={12} className="text-primary"/> {prop.views}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[8px] font-black text-slate-400 uppercase">Grid Status</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <p className="text-xs font-black text-slate-900 uppercase">{prop.status}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-6 py-2.5 bg-slate-950 text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-md active:scale-95 flex items-center gap-2">
                                    <Edit3 size={12} /> Reconfigure
                                </button>
                                <button className="px-4 py-2.5 border border-slate-200 text-slate-300 rounded-xl font-black text-[9px] uppercase tracking-widest hover:text-red-600 hover:border-red-100 transition-all active:scale-95">
                                    <Trash2 size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const FavoritePropertiesNode = () => {
    const favorites = [
        { id: '101', title: 'PRINCESS ESTATE, INDORE NODE', price: '₹ 2.4 Cr', location: 'Indore City, M.P.', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070', date: '14 JAN, 2026' }
    ];

    return (
        <div className="space-y-10">
            <div className="border-b border-slate-100 pb-6">
                <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">FAVORITE NODES</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">BOOKMARKED NEURAL ASSETS</p>
            </div>

            {favorites.length > 0 ? (
                <div className="space-y-8">
                    {favorites.map(fav => (
                        <div key={fav.id} className="bg-white border border-slate-100 rounded-[3rem] p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-700 group flex flex-col md:flex-row gap-8 relative overflow-hidden">
                            {/* Visual Asset Node - Horizontal Layout */}
                            <div className="relative w-full md:w-[320px] h-[240px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-inner">
                                <img src={fav.imageUrl} alt={fav.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                                
                                {/* Heart Badge Overlay */}
                                <div className="absolute top-4 right-4">
                                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 shadow-xl active:scale-90 transition-all hover:scale-105 border border-slate-50">
                                        <Heart size={18} fill="currentColor" />
                                    </button>
                                </div>

                                {/* Modernized Price Overlay */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2.5 shadow-2xl">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(47,237,154,0.6)]"></div>
                                        <span className="text-primary font-display font-black text-base tracking-tight">
                                            {fav.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Matrix Node */}
                            <div className="flex-1 flex flex-col justify-between py-2 pr-4">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="px-3 py-1 rounded-lg bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-widest border border-red-100">
                                                PREMIUM ASSET
                                            </div>
                                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">UNIT ID: #{fav.id}</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight leading-tight group-hover:text-red-600 transition-colors">
                                            {fav.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-6 items-center">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-red-600 shadow-sm border border-slate-100">
                                                <MapPin size={16} />
                                            </div>
                                            <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{fav.location}</p>
                                        </div>
                                        <div className="h-4 w-px bg-slate-100 hidden sm:block"></div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                                                <Calendar size={16} />
                                            </div>
                                            <div className="space-y-0">
                                                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none">Matrix Sync</p>
                                                <p className="text-[10px] font-black text-slate-700 tracking-tighter mt-0.5">{fav.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {[1,2].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img src={`https://randomuser.me/api/portraits/thumb/men/${i+20}.jpg`}/></div>)}
                                        </div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">340+ Neural Hits</p>
                                    </div>
                                    <button className="px-10 py-4 bg-slate-950 text-white rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-slate-950 transition-all shadow-xl active:scale-95 group/btn flex items-center gap-3">
                                        VIEW NODE <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-32 text-center space-y-6 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <Heart size={64} className="mx-auto text-slate-200 animate-pulse" strokeWidth={1} />
                    <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">No bookmarked intelligence found</p>
                </div>
            )}
        </div>
    );
};

const ProfileDetailsNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-12">
        <div className="border-b border-slate-50 pb-6">
            <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Identity Profile</h2>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Verified User Node Details</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 bg-slate-50/50 p-12 rounded-[4rem] border border-slate-100 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><User size={300} /></div>
            {[
                { label: 'Entity Identity', val: userInfo.name, icon: User },
                { label: 'Registered As', val: userInfo.userType, icon: Building },
                { label: 'Urban Grid Hub', val: 'Noida', icon: MapPin },
                { label: 'Intelligence Coordinate', val: userInfo.email, icon: Mail },
                { label: 'Direct Mobile Link', val: userInfo.mobile, icon: Phone },
                { label: 'Verification Protocol', val: 'Active (Level 1)', icon: ShieldCheck, color: 'text-emerald-600' }
            ].map((field, i) => (
                <div key={i} className="space-y-2 relative z-10 group">
                    <div className="flex items-center gap-3 text-slate-400">
                        <field.icon size={14} className={field.color} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{field.label}</span>
                    </div>
                    <p className="text-lg font-display font-black text-slate-900 uppercase tracking-tight border-b-2 border-slate-100 group-hover:border-red-600 transition-all pb-2">{field.val}</p>
                </div>
            ))}
        </div>

        <div className="flex justify-center pt-8">
            <button className="flex items-center gap-4 px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-slate-950 transition-all shadow-2xl active:scale-95 group">
                <Download size={18} className="group-hover:animate-bounce" /> Export Identity Log (PDF)
            </button>
        </div>
    </div>
);

const EditProfileNode = ({ userInfo }: { userInfo: any }) => {
    return (
        <div className="space-y-10">
            <div className="border-b border-slate-50 pb-6">
                <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Reconfigure Identity</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Profile Intelligence Update Node</p>
            </div>

            <form className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 space-y-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-[4000ms] pointer-events-none"><Edit3 size={300} /></div>
                
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Primary Node ID (Email)</label>
                        <input type="email" readOnly value={userInfo.email} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-400 outline-none cursor-not-allowed shadow-inner" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-950 uppercase tracking-widest ml-2">Identity Signature (Name) <span className="text-red-500">*</span></label>
                        <input type="text" defaultValue={userInfo.name} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-950 uppercase tracking-widest ml-2">Alternate Mobile Hub</label>
                        <input type="tel" placeholder="+91" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-950 uppercase tracking-widest ml-2">Aadhar Identification Number</label>
                        <input type="text" placeholder="XXXX XXXX XXXX" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-black text-slate-900 outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-50 flex justify-end">
                    <button type="submit" className="px-16 py-5 bg-red-600 text-white rounded-3xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-950 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.25)] active:scale-95 flex items-center gap-4 group">
                        Commit Intelligence Update <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
    );
};

const ChangePasswordNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-10">
        <div className="border-b border-slate-50 pb-6">
            <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Security Protocol</h2>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Rotate Cryptographic Node Password</p>
        </div>

        <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><Lock size={300} /></div>
            
            <form className="max-w-2xl mx-auto space-y-10 relative z-10">
                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-4">
                    <Mail size={18} className="text-red-600" />
                    <div className="space-y-1">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Neural ID</p>
                        <p className="text-sm font-black text-slate-900">{userInfo.email}</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Current Intelligence Key <span className="text-red-500">*</span></label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-lg outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">New Neural Entry Key <span className="text-red-500">*</span></label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-lg outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Repeat Entry Key <span className="text-red-500">*</span></label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-lg outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner" />
                    </div>
                </div>

                <div className="pt-6">
                    <button type="submit" className="w-full py-6 bg-red-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-slate-950 transition-all shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-4 group">
                        Authorize New Security Node <Fingerprint size={24} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                <p className="text-center text-[10px] font-bold text-slate-400 italic">
                    "Regular rotation of security nodes ensures maximum asset sovereignty."
                </p>
            </form>
        </div>
    </div>
);

const ServicesNode = ({ onNavigate }: { onNavigate: (v: any) => void }) => (
    <div className="space-y-16 pb-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h3 className="text-5xl font-display font-black text-slate-950 tracking-tighter uppercase leading-none">Market Your <span className="text-emerald-600 italic">Home</span></h3>
            <p className="text-slate-500 text-lg font-medium italic opacity-70">"Accelerate transaction finality with elite intelligence services."</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { label: 'Home Loan', icon: IndianRupee, color: 'text-emerald-600', bg: 'bg-emerald-50', view: 'home-loans', sub: 'Banking Logic' },
                { label: 'Vastu AI', icon: Compass, color: 'text-amber-600', bg: 'bg-amber-50', view: 'vastu', sub: 'Energy Harmony' },
                { label: 'Interior Node', icon: Layout, color: 'text-indigo-600', bg: 'bg-indigo-50', view: 'home', sub: 'Visual Logic' },
                { label: 'Market Pulse', icon: Newspaper, color: 'text-blue-600', bg: 'bg-blue-50', view: 'insights', sub: 'Neural Insights' },
                { label: 'Legal Advisory', icon: Scale, color: 'text-rose-600', bg: 'bg-rose-50', view: 'legal-advisory', sub: 'Regulatory Node' },
                { label: 'Partner Hub', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', view: 'channel-partner', sub: 'Network Space' },
                { label: 'RERA Center', icon: ShieldPlus, color: 'text-orange-600', bg: 'bg-orange-50', view: 'rera', sub: 'Compliance Hub' },
                { label: 'Career Hub', icon: Briefcase, color: 'text-slate-600', bg: 'bg-slate-50', view: 'career', sub: 'Talent Network' }
            ].map(service => (
                <div 
                    key={service.label} 
                    onClick={() => onNavigate(service.view)}
                    className="p-12 rounded-[4rem] border-2 border-slate-50 shadow-lg hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all group cursor-pointer text-center space-y-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-125 transition-transform duration-1000"><service.icon size={150}/></div>
                    <div className={`w-24 h-24 mx-auto rounded-[2.5rem] ${service.bg} ${service.color} flex items-center justify-center shadow-inner border border-white group-hover:bg-slate-950 group-hover:text-primary group-hover:scale-110 transition-all duration-700`}>
                        <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1 relative z-10">
                        <h4 className="text-xl font-display font-black uppercase text-slate-950 group-hover:text-primary transition-colors">{service.label}</h4>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">{service.sub}</p>
                    </div>
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-900 text-white rounded-full text-[8px] font-black uppercase tracking-widest">
                            Inquire <ChevronRight size={10} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ResponsesNode = () => {
    const responses = [
        { name: 'ANANYA SHARMA', mobile: '+91 9884521000', email: 'ananya.s@hub.com', date: '08 Jan 2026', asset: 'HP-1136', type: 'Buy Query' }
    ];

    return (
        <div className="space-y-12">
            <div className="border-b border-slate-50 pb-6">
                <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Lead Responses</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Real-time Inquiry Data Stream</p>
            </div>

            <div className="bg-white rounded-[3.5rem] border-2 border-slate-100 overflow-hidden shadow-2xl relative">
                <table className="w-full text-left">
                    <thead className="bg-slate-950 text-white">
                        <tr>
                            {['Lead Identity', 'Contact Node', 'Sync Date', 'Asset Node', 'Protocol Hub'].map(h => (
                                <th key={h} className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em]">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {responses.map((r, i) => (
                            <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                <td className="px-10 py-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-[1.2rem] bg-slate-900 text-primary flex items-center justify-center font-display font-black text-lg shadow-xl group-hover:scale-110 transition-transform">
                                            AS
                                        </div>
                                        <div>
                                            <span className="text-[13px] font-black uppercase text-slate-950 block">{r.name}</span>
                                            <span className="text-[9px] font-black text-primary uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded-md mt-1 inline-block">{r.type}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-10 space-y-2">
                                    <div className="flex items-center gap-3 text-slate-500 group-hover:text-slate-900 transition-colors"><Phone size={12} className="text-emerald-500"/><span className="text-[11px] font-black">{r.mobile}</span></div>
                                    <div className="flex items-center gap-3 text-slate-500 group-hover:text-slate-900 transition-colors"><Mail size={12} className="text-blue-500"/><span className="text-[11px] font-black">{r.email}</span></div>
                                </td>
                                <td className="px-10 py-10">
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <Clock size={12} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{r.date}</span>
                                    </div>
                                </td>
                                <td className="px-10 py-10">
                                    <span className="px-5 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">#{r.asset}</span>
                                </td>
                                <td className="px-10 py-10">
                                    <button className="px-8 py-4 bg-red-600 text-white rounded-[1.2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-950 transition-all shadow-xl active:scale-95 flex items-center gap-3">
                                        Reply Protocol <ArrowRight size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const SubscriptionsNode = () => (
    <div className="space-y-12">
        <div className="border-b border-slate-50 pb-6">
            <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Service Subscriptions</h2>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Active Plan Management Hub</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: 'Standard Matrix', price: '₹ 4,999', icon: Smartphone, features: ['Global Visibility', 'AI Enhancement', '24/7 Support'] },
                { title: 'Elite Shield', price: '₹ 9,999', icon: Monitor, features: ['All Standard', 'Virtual Staging', 'Priority Lead AI'] },
                { title: 'Nexus Hub', price: 'Custom', icon: Cpu, features: ['Corporate Security', 'API Access', 'Dedicated Advisor'] }
            ].map(plan => (
                <div key={plan.title} className="bg-white border-2 border-slate-100 rounded-[3.5rem] p-12 shadow-xl hover:border-primary transition-all group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000 group-hover:rotate-12">
                        <plan.icon size={250} />
                    </div>
                    <div className="space-y-2 mb-10">
                        <h3 className="text-2xl font-display font-black uppercase tracking-tight text-slate-900">{plan.title}</h3>
                    </div>
                    <div className="text-5xl font-display font-black text-red-600 mb-10 flex items-end gap-2">
                        {plan.price} <span className="text-xs text-slate-300 font-black uppercase tracking-widest mb-2">/ Node Cycle</span>
                    </div>
                    <ul className="space-y-5 mb-12 flex-1">
                        {plan.features.map(f => (
                            <li key={f} className="text-sm font-bold text-slate-600 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                {f}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-5 bg-slate-950 text-white rounded-3xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-slate-950 transition-all shadow-2xl active:scale-95 group/btn">
                        Authorize Plan <ChevronRight size={16} className="inline ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const AdviceNode = () => {
    const adviceCategories = [
        { title: "DO'S & DON'T'S FOR SELLING", items: ["Verified Registry Protocol", "Clear Utility Logs", "Visual Asset Staging", "ID Matching Validation"], icon: Info },
        { title: "DOCUMENTS FOR RENTING", items: ["Residency Proof Node", "Lease Contract Matrix", "Security Deposit Token", "Utility Baseline Sync"], icon: FileText },
        { title: "DOCUMENTS FOR SELLING", items: ["Registry Chain Node", "Taxes Clearance Hub", "Standard Sale Protocol", "Legal Ownership Shield"], icon: Gavel },
        { title: "RENTING MY HOUSE", items: ["Occupant Verification", "Asset Maintenance Log", "Lease Duration Hub", "Notice Protocol Node"], icon: Key },
        { title: "KEY STAGES OF SELLING", items: ["Discovery Protocol", "Verification Stage", "Agreement Matrix", "Final Transference"], icon: Target }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
            {adviceCategories.map(cat => (
                <div key={cat.title} className="bg-white border border-slate-100 rounded-[3.5rem] p-12 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[3000ms]"><cat.icon size={300} /></div>
                    
                    <div className="flex items-center gap-6 mb-10 border-b border-slate-50 pb-8">
                        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-[1.5rem] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                            <cat.icon size={32} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-sm font-black uppercase text-slate-950 tracking-tight leading-tight max-w-[140px]">{cat.title}</h4>
                    </div>

                    <ul className="space-y-6 flex-1">
                        {cat.items.map(item => (
                            <li key={item} className="flex items-start gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> {item}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-12 w-full py-5 bg-slate-50 border-2 border-slate-100 text-slate-400 rounded-3xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-slate-950 hover:text-white transition-all active:scale-95 group/btn flex items-center justify-center gap-3">
                        Expand Protocol <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform duration-500" />
                    </button>
                </div>
            ))}
        </div>
    );
};

// Missing icon helper (Gavel not in first set of imports)
const Gavel = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m14.5 12.5-8 8a2.11 2.11 0 1 1-3-3l8-8"/><path d="m16 16 2 2"/><path d="m19 13 2 2"/><path d="m5 5 3 3"/><path d="m2 8 3 3"/><path d="m15 4 6 6"/></svg>
);

export default DashboardView;
