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
    History, Package, Check, Minus, MessageSquarePlus, Share2, MousePointer2
} from 'lucide-react';

type DashboardTab = 'home' | 'services' | 'responses' | 'subscriptions' | 'advice';
type HomeSubTab = 'manage' | 'post' | 'favorite' | 'profile' | 'edit' | 'password';
type SubscriptionSubTab = 'subscribed' | 'history' | 'view';

interface DashboardViewProps {
    onNavigate: (view: any) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('home');
    const [activeHomeSubTab, setActiveHomeSubTab] = useState<HomeSubTab>('manage');
    const [activeSubSubTab, setActiveSubSubTab] = useState<SubscriptionSubTab>('subscribed');

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

    const subscriptionSubTabs = [
        { id: 'subscribed', label: 'Subscribed Services', icon: Package },
        { id: 'history', label: 'Order History', icon: History },
        { id: 'view', label: 'View Services', icon: Eye },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            {/* Profile Header */}
            <div className="max-w-[100rem] mx-auto px-6 mb-10">
                <div className="bg-white rounded-[4rem] p-6 md:p-10 border border-slate-200 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.04)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none select-none group-hover:scale-110 transition-transform duration-[8000ms]">
                        <Network size={500} className="text-[#1A1A1A]" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 relative z-10">
                        <div className="relative shrink-0">
                            <div className="w-36 h-36 rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-105 ring-1 ring-slate-100">
                                <img src={userInfo.avatar} alt="Profile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#1A1A1A]/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                                    <Camera size={28} className="text-primary" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-red-600 text-white p-3 rounded-2xl border-4 border-white shadow-xl animate-bounce-slow">
                                <ShieldCheck size={20} />
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none">Welcome, {userInfo.name}</h1>
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] pt-1">Neural Management Interface Hub v.2025</p>
                            </div>
                            <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-10">
                                {[
                                    { label: 'Neural ID', val: userInfo.email, icon: Mail },
                                    { label: 'Secure Line', val: userInfo.mobile, icon: Phone },
                                    { label: 'Role Node', val: userInfo.userType, icon: User },
                                    { label: 'Sync Status', val: 'Verified Listing', icon: Activity, color: 'text-primary' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2 group/item">
                                        <div className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-400">
                                            <item.icon size={13} className={item.color || "text-slate-300"} />
                                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">{item.label}</span>
                                        </div>
                                        <p className="text-sm font-black text-[#1A1A1A] uppercase truncate tracking-tight group-hover/item:text-primary transition-colors">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 min-w-[280px] w-full lg:w-auto">
                            <button className="w-full px-10 py-5 bg-[#1A1A1A] text-white rounded-[1.8rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-[#1A1A1A] transition-all duration-500 shadow-xl border border-white/5">Edit Profile</button>
                            <button className="w-full px-10 py-5 bg-white border-2 border-slate-100 text-[#1A1A1A] rounded-[1.8rem] font-black text-[11px] uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all duration-500 shadow-lg">Cloud Sync</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Dock */}
            <div className="max-w-[100rem] mx-auto px-6 mb-10 sticky top-24 z-50">
                <div className="bg-[#1A1A1A]/95 backdrop-blur-2xl rounded-[3rem] p-2 border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] flex flex-wrap lg:flex-nowrap gap-1">
                    {topTabs.map(tab => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as DashboardTab)}
                                className={`flex-1 flex items-center justify-center gap-4 p-5 rounded-[2.5rem] transition-all duration-700 group relative overflow-hidden ${isActive ? 'bg-primary text-[#1A1A1A] shadow-[0_0_40px_rgba(47,237,154,0.3)] scale-[1.02] z-10' : 'text-slate-500 hover:text-white'}`}
                            >
                                <tab.icon size={20} strokeWidth={isActive ? 3 : 1.5} className={isActive ? 'animate-pulse' : 'group-hover:scale-125 transition-transform duration-500'} />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">{tab.label}</span>
                                {!isActive && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full group-hover:w-8 transition-all duration-500"></div>}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Console */}
            <div className="max-w-[100rem] mx-auto px-6">
                <div className="bg-white rounded-[4rem] border border-slate-200 shadow-2xl min-h-[850px] overflow-hidden flex flex-col">
                    <div className="flex-1 flex flex-col lg:flex-row relative">
                        {(activeTab === 'home' || activeTab === 'subscriptions') && (
                            <aside className="lg:w-96 bg-slate-50/50 border-r border-slate-100 p-10 md:p-14 space-y-4 shrink-0">
                                <div className="mb-14 px-2">
                                    <h3 className="text-[#1A1A1A] font-black uppercase text-base tracking-tighter">Operational Nodes</h3>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Registry Access Hub</p>
                                </div>
                                <div className="space-y-3">
                                    {activeTab === 'home' ? (
                                        homeSubTabs.map(sub => {
                                            const isSubActive = activeHomeSubTab === sub.id;
                                            return (
                                                <button 
                                                    key={sub.id}
                                                    onClick={() => sub.id === 'post' ? onNavigate('add-property') : setActiveHomeSubTab(sub.id as HomeSubTab)}
                                                    className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500 group ${isSubActive ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-red-600 scale-[1.05] border-l-8 border-red-600' : 'text-slate-400 hover:bg-white/80 hover:text-[#1A1A1A]'}`}
                                                >
                                                    <div className="flex items-center gap-5">
                                                        <sub.icon size={22} strokeWidth={isSubActive ? 3 : 1.5} className={isSubActive ? 'text-red-600' : 'text-slate-300'} />
                                                        <span className="text-[13px] font-black uppercase tracking-[0.15em] pt-0.5">{sub.label}</span>
                                                    </div>
                                                    <ChevronRight size={20} className={`transition-transform duration-700 ${isSubActive ? 'translate-x-2 text-red-600' : 'opacity-0 group-hover:opacity-100'}`} />
                                                </button>
                                            );
                                        })
                                    ) : (
                                        subscriptionSubTabs.map(sub => {
                                            const isSubActive = activeSubSubTab === sub.id;
                                            return (
                                                <button 
                                                    key={sub.id}
                                                    onClick={() => setActiveSubSubTab(sub.id as SubscriptionSubTab)}
                                                    className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500 group ${isSubActive ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-red-600 scale-[1.05] border-l-8 border-red-600' : 'text-slate-400 hover:bg-white/80 hover:text-[#1A1A1A]'}`}
                                                >
                                                    <div className="flex items-center gap-5">
                                                        <sub.icon size={22} strokeWidth={isSubActive ? 3 : 1.5} className={isSubActive ? 'text-red-600' : 'text-slate-300'} />
                                                        <span className="text-[13px] font-black uppercase tracking-[0.15em] pt-0.5">{sub.label}</span>
                                                    </div>
                                                    <ChevronRight size={20} className={`transition-transform duration-700 ${isSubActive ? 'translate-x-2 text-red-600' : 'opacity-0 group-hover:opacity-100'}`} />
                                                </button>
                                            );
                                        })
                                    )}
                                </div>
                            </aside>
                        )}
                        <main className="flex-1 p-10 md:p-20 relative overflow-hidden bg-white">
                            <div className="max-w-6xl mx-auto h-full animate-fade-in-up">
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
                                {activeTab === 'subscriptions' && <SubscriptionsNode activeSubTab={activeSubSubTab} />}
                                {activeTab === 'advice' && <AdviceNode />}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- REDESIGNED SUB-MODULES ---

const ManagePropertiesNode = () => {
    const userProperties = [
        { id: '1136', type: 'Sell', title: 'SRINAGAR, J&K PRIME NODE', price: '₹ 5.2 Cr', area: '5,500 Sq-ft', date: '05 Jan, 2026', views: 742, status: 'Active' },
        { id: '1135', type: 'Sell', title: 'ROJA STREET, HP RESIDENCE', price: '₹ 4.2 Cr', area: '2,400 Sq-ft', date: '05 Jan, 2026', views: 102, status: 'Active' },
    ];
    return (
        <div className="space-y-12">
            <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter">Property Matrix</h2>
            <div className="grid gap-8">
                {userProperties.map(prop => (
                    <div key={prop.id} className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 flex flex-col md:flex-row gap-10 hover:shadow-2xl transition-all group">
                        <div className="w-48 h-32 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-primary/20 transition-all"><Building size={48} className="text-slate-200 group-hover:text-primary transition-all" /></div>
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between">
                                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase">{prop.title}</h3>
                                <div className="text-xl font-black text-red-600">{prop.price}</div>
                            </div>
                            <div className="flex gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                <span>ID: #{prop.id}</span>
                                <span>Area: {prop.area}</span>
                                <span>Sync: {prop.date}</span>
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-50">
                                <button className="px-6 py-2 bg-[#1A1A1A] text-primary rounded-xl font-black text-[10px] uppercase">Reconfigure</button>
                                <button className="px-4 py-2 border border-slate-100 text-slate-300 rounded-xl font-black text-[10px] uppercase hover:text-red-600 transition-all"><Trash2 size={14}/></button>
                            </div>
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
        <div className="space-y-12">
            <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter">Curation Hub</h2>
            {favorites.map(fav => (
                <div key={fav.id} className="bg-white border-2 border-slate-100 rounded-[4rem] p-8 flex flex-col md:flex-row gap-10 hover:shadow-2xl transition-all group overflow-hidden relative">
                    <div className="w-80 h-56 rounded-[2.5rem] overflow-hidden shrink-0 shadow-inner">
                        <img src={fav.imageUrl} alt={fav.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 py-4 flex flex-col justify-between">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black text-[#1A1A1A] uppercase">{fav.title}</h3>
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold"><MapPin size={16} className="text-red-600" /> {fav.location}</div>
                            <div className="text-3xl font-black text-primary">{fav.price}</div>
                        </div>
                        <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Added: {fav.date}</span>
                            <button className="px-10 py-4 bg-[#1A1A1A] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-[#1A1A1A] transition-all">View Node</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProfileDetailsNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-16">
        <h2 className="text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter">Identity Profile</h2>
        <div className="grid md:grid-cols-2 gap-16 bg-slate-50/50 p-20 rounded-[5rem] border-2 border-slate-100 shadow-inner">
            {[
                { label: 'Neural Key', val: userInfo.name, icon: User },
                { label: 'Registry Role', val: userInfo.userType, icon: Building },
                { label: 'Uplink Coordinate', val: userInfo.email, icon: Mail },
                { label: 'Direct Secure Line', val: userInfo.mobile, icon: Phone },
            ].map((field, i) => (
                <div key={i} className="space-y-4 border-b-2 border-slate-200 pb-6 group hover:border-primary transition-all">
                    <div className="flex items-center gap-4 text-slate-400">
                        <field.icon size={18} />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em]">{field.label}</span>
                    </div>
                    <p className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none">{field.val}</p>
                </div>
            ))}
        </div>
    </div>
);

const EditProfileNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-12">
        <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter">Reconfigure Node</h2>
        <form className="bg-white rounded-[4rem] p-16 shadow-2xl border-2 border-slate-100 space-y-10">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-widest ml-4">Full Identity</label>
                    <input type="text" defaultValue={userInfo.name} className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-8 py-5 text-lg font-black text-[#1A1A1A] outline-none focus:border-primary transition-all" />
                </div>
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-widest ml-4">Communication Line</label>
                    <input type="tel" defaultValue={userInfo.mobile} className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-8 py-5 text-lg font-black text-[#1A1A1A] outline-none focus:border-primary transition-all" />
                </div>
            </div>
            <button className="px-16 py-6 bg-red-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.5em] hover:bg-[#1A1A1A] hover:text-primary transition-all shadow-2xl shadow-red-600/20">Upgrade Identity</button>
        </form>
    </div>
);

const ChangePasswordNode = ({ userInfo }: { userInfo: any }) => (
    <div className="space-y-12">
        <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none">Guard Protocol</h2>
        <form className="max-w-2xl bg-white p-16 rounded-[4rem] shadow-2xl border-2 border-slate-100 space-y-10">
            <input type="password" placeholder="OLD KEY" className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-10 py-6 text-2xl font-black outline-none focus:border-primary transition-all" />
            <input type="password" placeholder="NEW HUB KEY" className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-10 py-6 text-2xl font-black outline-none focus:border-primary transition-all" />
            <button className="w-full py-8 bg-secondary text-primary rounded-[2.5rem] font-black text-sm uppercase tracking-[0.6em] hover:shadow-2xl transition-all">Authorize Regen</button>
        </form>
    </div>
);

const ResponsesNode = () => {
    const responses = [
        { name: 'ANANYA SHARMA', mobile: '+91 9884521000', email: 'ANANYA.S@NEURAL.NET', date: '08 JAN 2026', type: 'ACQUISITION' },
        { name: 'RAHUL KAPOOR', mobile: '+91 9123456789', email: 'RAHUL.K@MATRIX.IO', date: '07 JAN 2026', type: 'RENTAL' },
    ];
    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter">Neural Leads</h2>
            <div className="grid gap-6">
                {responses.map((r, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-xl hover:border-primary/20 transition-all shadow-sm group">
                        <div className="flex items-center gap-6 min-w-[280px]">
                            <div className="w-16 h-16 rounded-2xl bg-secondary text-primary flex items-center justify-center font-black text-xl shadow-lg ring-4 ring-primary/5 group-hover:scale-105 transition-transform">{r.name[0]}</div>
                            <div>
                                <h4 className="text-lg font-black uppercase text-[#1A1A1A] group-hover:text-primary transition-colors">{r.name}</h4>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{r.type} PROTOCOL • {r.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-16 px-10 border-x border-slate-50 hidden lg:flex">
                            <div className="space-y-1">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Mobile</p>
                                <p className="text-slate-600 font-black text-[13px] tracking-tight">{r.mobile}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Email Node</p>
                                <p className="text-slate-600 font-black text-[13px] tracking-tight lowercase">{r.email}</p>
                            </div>
                        </div>
                        <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-[#1A1A1A] transition-all shadow-lg active:scale-95 border border-white/5 flex items-center gap-3">Handshake <ArrowRight size={14}/></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SubscriptionsNode = ({ activeSubTab }: { activeSubTab: SubscriptionSubTab }) => {
    const historyData = [
        { id: '114107135936', product: 'Owner-Metal-0', date: '2025-11-20 19:32:59', status: 'Invalid', mode: 'N/A' },
        { id: 'HP-99841', product: 'Owner-Gold -3500', date: '2025-11-20 19:33:07', status: 'Pending', mode: 'N/A' },
    ];

    const moreServices = [
        { title: 'Hunt Vastu Consultancy', desc: 'Neural AI scan for energy harmony and spatial optimization.', icon: Compass },
        { title: 'Advice Legal Expert', desc: 'Secure legal framework validation and document verification.', icon: Gavel },
        { title: 'Insta SMS Booster Pack', desc: 'High-velocity lead acquisition via targeted SMS broadcasts.', icon: Zap },
        { title: 'Insta E Mail Booster Pack', desc: 'Digital marketing protocol for massive asset exposure.', icon: Mail },
        { title: 'Property Page Design By Expert', desc: 'Bespoke UI/UX for your property node presentation.', icon: Layout },
        { title: 'Digital Marketing Pack', desc: 'Full spectrum social and search engine synchronization.', icon: Share2 },
        { title: 'Advertise with Us', desc: 'Mainframe priority listing for maximum node traffic.', icon: Newspaper },
        { title: 'Property Showcase in top search', desc: 'Search engine dominance for your architectural assets.', icon: Search },
    ];

    return (
        <div className="space-y-12">
            <div className="border-b border-slate-100 pb-10">
                <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none">
                    {activeSubTab === 'subscribed' ? 'Subscribed Services' : activeSubTab === 'history' ? 'Order History' : 'Explore Services'}
                </h2>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] mt-4">Registry License Node v.2025</p>
            </div>

            {activeSubTab === 'subscribed' && (
                <div className="bg-white rounded-[3rem] border-2 border-slate-100 overflow-hidden shadow-2xl">
                    <div className="bg-[#1A1A1A] p-6 flex justify-between items-center text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Managed Node Subscriptions (0)</span>
                        <Package size={20} className="text-primary" />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    {['Order ID / Payment mode', 'Service Title / Product Title', 'Status', 'Time', 'Valid Till'].map(h => (
                                        <th key={h} className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colSpan={5} className="px-8 py-24 text-center text-slate-300 italic font-black uppercase text-sm tracking-[0.1em]">No records found in current sync cycle</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeSubTab === 'history' && (
                <div className="bg-white rounded-[3rem] border-2 border-slate-100 overflow-hidden shadow-2xl">
                    <div className="bg-[#1A1A1A] p-6 flex justify-between items-center text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Neural Order History (4)</span>
                        <History size={20} className="text-primary" />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    {['Product Title / Order ID', 'Order Date', 'Order Status / Payment Mode'].map(h => (
                                        <th key={h} className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {historyData.map((order, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-10 py-8">
                                            <div className="space-y-1">
                                                <p className="text-sm font-black text-secondary uppercase tracking-tight">{order.product}</p>
                                                <p className="text-[10px] font-bold text-slate-300 tracking-widest">{order.id}</p>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 flex items-center gap-3 text-slate-500 font-black text-[11px]"><Calendar size={14} className="text-primary" /> {order.date}</td>
                                        <td className="px-10 py-8 text-right">
                                            <span className={`px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${order.status === 'Invalid' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>{order.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeSubTab === 'view' && (
                <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {moreServices.map(service => (
                            <div key={service.title} className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between h-[340px]">
                                <div className="absolute -top-10 -right-10 w-48 h-48 bg-slate-50 rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 flex items-center justify-center"><service.icon size={80} className="text-slate-100 group-hover:text-primary transition-all" /></div>
                                <div className="space-y-5 relative z-10">
                                    <div className="w-14 h-14 bg-[#1A1A1A] text-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><service.icon size={24}/></div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter text-secondary leading-none pr-20">{service.title}</h3>
                                    <p className="text-[13px] font-medium text-slate-500 leading-relaxed max-w-[280px] italic">"{service.desc}"</p>
                                </div>
                                <button className="w-fit px-12 py-4 bg-white border-2 border-red-600 text-red-600 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all shadow-lg active:scale-95 flex items-center gap-3">Proceed <ArrowRight size={16} /></button>
                            </div>
                        ))}
                    </div>
                    {/* Support Block */}
                    <div className="bg-[#1A1A1A] rounded-[4rem] p-12 flex flex-col md:flex-row items-center justify-center gap-16 text-white shadow-2xl relative overflow-hidden ring-4 ring-primary/5">
                         <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent"></div>
                         <div className="flex items-center gap-6 group cursor-pointer relative z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-lg group-hover:scale-110 transition-all"><Phone size={24} /></div>
                            <div>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Call Hub</p>
                                <p className="text-xl font-black tracking-tight">8588 002009</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-6 group cursor-pointer relative z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 border border-white/10 shadow-lg group-hover:scale-110 transition-all"><Mail size={24} /></div>
                            <div>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Mail Node</p>
                                <p className="text-xl font-black tracking-tight lowercase">INFO@HUNTPROPERTY.COM</p>
                            </div>
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ServicesNode = ({ onNavigate }: { onNavigate: (v: any) => void }) => {
    const services = [
        { label: 'Home Loan', icon: IndianRupee, color: 'text-emerald-500', bg: 'bg-emerald-50', view: 'home-loans', sub: 'Capital Matrix' },
        { label: 'Vastu AI', icon: Compass, color: 'text-amber-500', bg: 'bg-amber-50', view: 'vastu', sub: 'Spatial Harmony' },
        { label: 'Interior Node', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50', view: 'home', sub: 'Visual Logic' },
        { label: 'Market Pulse', icon: Newspaper, color: 'text-blue-500', bg: 'bg-blue-50', view: 'insights', sub: 'Neural Insights' },
        { label: 'Legal Shield', icon: Scale, color: 'text-rose-500', bg: 'bg-rose-50', view: 'legal-advisory', sub: 'Regulatory Node' },
        { label: 'Network Hub', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50', view: 'channel-partner', sub: 'Global Partner' },
        { label: 'RERA Guard', icon: ShieldPlus, color: 'text-orange-500', bg: 'bg-orange-50', view: 'rera', sub: 'Compliance Hub' },
        { label: 'Talent Flow', icon: Briefcase, color: 'text-slate-600', bg: 'bg-slate-50', view: 'career', sub: 'Human Capital' }
    ];
    return (
        <div className="space-y-20">
            <div className="text-center space-y-10 max-w-4xl mx-auto">
                <h3 className="text-6xl md:text-8xl font-black text-secondary tracking-tighter uppercase leading-[0.85]">Market Your <span className="text-primary italic">Sanctuary</span></h3>
                <p className="text-slate-500 text-2xl font-medium italic opacity-90 leading-relaxed">"High-fidelity intelligence services powered by Gemini AI v.2025."</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {services.map(service => (
                    <div key={service.label} onClick={() => onNavigate(service.view)} className="p-10 rounded-[4rem] border-2 border-slate-100 text-center space-y-8 hover:shadow-2xl hover:border-primary transition-all group cursor-pointer relative overflow-hidden bg-white shadow-xl">
                        <div className={`w-24 h-24 mx-auto rounded-[2.5rem] ${service.bg} ${service.color} flex items-center justify-center shadow-inner border-2 border-white group-hover:bg-[#1A1A1A] group-hover:text-primary transition-all duration-700`}><service.icon size={44} strokeWidth={1.5} /></div>
                        <div className="space-y-1 relative z-10">
                            <h4 className="text-2xl font-black uppercase text-secondary group-hover:text-primary transition-colors leading-none">{service.label}</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{service.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AdviceNode = () => {
    const advice = [
        { title: "DO'S & DON'T'S FOR SELL", items: ["Verified Registry Protocol", "Clear Utility Logs", "Visual Asset Staging", "ID Matching Validation"], icon: Info },
        { title: "RENTAL FRAMEWORKS", items: ["Residency Verification Node", "Digital Lease Matrix", "Security Deposit Token", "Utility Connectivity Base"], icon: FileText },
        { title: "SALES DOCUMENTATION", items: ["Registry Chain Archive", "Tax Redressal Shield", "Final Transfer Protocol", "Ownership DNA Guard"], icon: Gavel }
    ];
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {advice.map(cat => (
                <div key={cat.title} className="bg-white border-2 border-slate-100 rounded-[4rem] p-12 shadow-2xl hover:-translate-y-4 transition-all duration-700 flex flex-col group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-[4000ms]"><cat.icon size={300} /></div>
                    <div className="flex items-center gap-8 mb-12 border-b border-slate-50 pb-8 relative z-10">
                        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-red-600 group-hover:text-white transition-all duration-1000"><cat.icon size={32} /></div>
                        <h4 className="text-sm font-black uppercase text-secondary tracking-tighter leading-tight max-w-[120px]">{cat.title}</h4>
                    </div>
                    <ul className="space-y-6 flex-1 relative z-10">
                        {cat.items.map(item => (
                            <li key={item} className="flex items-start gap-4 text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] leading-relaxed"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {item}</li>
                        ))}
                    </ul>
                    <button className="mt-12 w-full py-6 bg-slate-50 text-slate-400 rounded-3xl font-black text-[10px] uppercase tracking-[0.5em] hover:bg-[#1A1A1A] hover:text-primary transition-all active:scale-95 group/btn flex items-center justify-center gap-4 relative z-10">Expand Intel <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform" /></button>
                </div>
            ))}
        </div>
    );
};

// Custom Gavel Icon Helper
const Gavel = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m14.5 12.5-8 8a2.11 2.11 0 1 1-3-3l8-8"/><path d="m16 16 2 2"/><path d="m19 13 2 2"/><path d="m5 5 3 3"/><path d="m2 8 3 3"/><path d="m15 4 6 6"/></svg>
);

export default DashboardView;
