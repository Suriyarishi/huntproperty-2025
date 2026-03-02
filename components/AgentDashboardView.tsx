import React, { useState } from 'react';
import {
    MessageSquare, Building2, User, CreditCard,
    ChevronDown, MapPin, Download, ImageIcon,
    LayoutDashboard, Users, UserPlus, Sliders,
    ShieldCheck, Bell, ChevronRight, Bookmark,
    Home, Building, Clock, CheckCircle2, Info, ArrowUpRight,
    Search, FileText
} from 'lucide-react';

interface AgentDashboardViewProps {
    onNavigate: (view: any) => void;
    userName?: string;
}

const AgentDashboardView: React.FC<AgentDashboardViewProps> = ({ onNavigate, userName = 'vinay rathore' }) => {
    const [activeTab, setActiveTab] = useState('contacts');
    const [activeSubTab, setActiveSubTab] = useState('view-responses');

    const stats = [
        { label: 'Total Active Properties', value: 'N/A' },
        { label: 'Total Search Views', value: 'N/A' },
        { label: 'Property Detail Views', value: 'N/A' },
        { label: 'Responses Received', value: 'N/A' },
        { label: 'Leads Viewed', value: '0' },
    ];

    const tabs = [
        { id: 'contacts', label: 'Contacts/Responses', icon: MessageSquare },
        { id: 'properties', label: 'Properties', icon: Building2 },
        { id: 'services', label: 'Our Services', icon: UserPlus },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
        { id: 'bookings', label: 'Bookings', icon: Building2 },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* 1. Header Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1400px] mx-auto px-4 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                        <div className="flex items-center">
                            <span className="font-bold text-2xl text-[#1a1c21]">Hunt</span>
                            <div className="relative mx-0.5">
                                <MapPin className="text-red-600 fill-red-600" size={24} />
                            </div>
                            <span className="font-bold text-2xl text-[#1a1c21]">roperty</span>
                        </div>
                        <div className="hidden lg:block ml-2 h-8 border-l border-gray-300 mx-4"></div>
                        <span className="hidden lg:block text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Think Wisely Invest Smartly</span>
                    </div>

                    <div className="flex items-center gap-10 text-[14px] font-bold text-gray-600">
                        <button className="hover:text-red-600 transition-colors">Home Loan</button>
                        <div className="flex items-center gap-1 text-[#0066cc] cursor-pointer group">
                            <span>( {userName} )</span>
                            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                        </div>
                        <button className="hover:text-red-600 transition-colors">Dashboard</button>
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                            <Download size={18} className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Sub Navigation */}
            <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
                <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-center gap-12 py-4">
                    <button className="flex items-center gap-2 text-red-600 font-bold text-[14px] px-2 py-1">
                        <Home size={18} />
                        <span>Home</span>
                    </button>
                    {['Buy', 'Rent', 'Sell'].map((item) => (
                        <button key={item} className="flex items-center gap-1 text-gray-600 font-bold text-[14px] hover:text-red-600 transition-colors">
                            <span>{item}</span>
                            <ChevronDown size={14} />
                        </button>
                    ))}
                    <button className="text-gray-600 font-bold text-[14px] hover:text-red-600 transition-colors">Post Your Property</button>
                    <button className="flex items-center gap-1 text-gray-600 font-bold text-[14px] hover:text-red-600 transition-colors">
                        <span>Tools & Advice</span>
                        <ChevronDown size={14} />
                    </button>
                    <button className="text-gray-600 font-bold text-[14px] hover:text-red-600 transition-colors">Channel Partner</button>
                    <button className="text-gray-600 font-bold text-[14px] hover:text-red-600 transition-colors">Blogs</button>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 py-10">
                {/* 3. Welcome & Stats Section */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome, {userName}</h1>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Profile Photo Placeholder */}
                        <div className="w-full lg:w-80">
                            <div className="bg-[#f2f4f7] aspect-[4/3] rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center group cursor-pointer hover:border-red-600 transition-all">
                                <ImageIcon size={64} className="text-gray-300 group-hover:text-red-600 transition-colors" />
                            </div>
                            <button className="w-full mt-2 py-3 bg-[#e0e4e9] text-gray-600 font-bold text-[11px] uppercase tracking-[0.2em] rounded hover:bg-gray-300 transition-colors">
                                + Add Photo
                            </button>
                        </div>

                        {/* Statistics Grid */}
                        <div className="flex-1 w-full">
                            <div className="flex justify-between items-end border-b border-gray-100 pb-2 mb-8">
                                <div className="bg-[#f2f4f7] px-8 py-2 text-[11px] font-black text-gray-500 uppercase tracking-widest rounded-t-lg">
                                    STATISTICS
                                </div>
                                <div className="text-[14px] font-bold text-gray-400 pb-2">
                                    01-Mar-2026
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-2xl">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 border-l-4 border-red-600/10 pl-4 py-1">
                                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                                        <span className="text-xl font-black text-gray-700">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* 5. Main Feature Tabs */}
                <div className="flex border-b border-gray-200 mb-0">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 flex flex-col items-center justify-center py-8 border-r border-gray-100 transition-all relative ${isActive ? 'bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.04)]' : 'bg-gray-50/50 hover:bg-white'
                                    }`}
                            >
                                <tab.icon size={36} strokeWidth={1.5} className={isActive ? 'text-red-600' : 'text-gray-300'} />
                                <span className={`text-[14px] font-black uppercase tracking-tight mt-3 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                                    {tab.label}
                                </span>
                                {isActive && (
                                    <>
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
                                        {/* Classic red pointer arrow */}
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-b border-r border-gray-200 z-10"></div>
                                    </>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* 6. Content Workspace */}
                <div className="bg-white border-x border-b border-gray-200 shadow-2xl min-h-[600px] flex flex-col">
                    <div className="bg-[#f2f4f7] border-b border-gray-200 px-8 py-5">
                        <h3 className="text-xl font-black text-gray-800 uppercase tracking-tighter">Contact/Responses</h3>
                    </div>

                    <div className="flex-1 flex flex-col lg:flex-row">
                        {/* Control Sidebar */}
                        <aside className="w-full lg:w-72 border-r border-gray-200 bg-[#fbfcff]">
                            {[
                                { id: 'view-responses', label: 'View Responses' },
                                { id: 'conversation', label: 'Conversation' },
                                { id: 'leads-management', label: 'Leads Management' },
                                { id: 'viewed-leads', label: 'Viewed Leads' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSubTab(item.id)}
                                    className={`w-full text-left px-8 py-5 text-[15px] font-black uppercase tracking-tight border-b border-gray-100 transition-all ${activeSubTab === item.id
                                        ? 'bg-[#e31e24] text-white shadow-lg relative z-10'
                                        : 'text-gray-500 hover:bg-white hover:text-red-600'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </aside>

                        {/* Interactive Main Pane */}
                        <div className="flex-1 p-16">
                            <div className="max-w-4xl space-y-8 animate-fade-in-up">
                                <div className="space-y-4">
                                    <p className="text-gray-400 font-bold italic text-lg leading-relaxed">
                                        "You will not be able to view the responses as currently you do not have any active paid package."
                                    </p>
                                    <div className="h-1 w-24 bg-red-100 rounded-full"></div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-gray-700 font-bold text-lg">To view responses, please get your package renewed.</p>
                                    <div className="flex flex-wrap items-center gap-2 text-lg font-bold">
                                        <span className="text-gray-500">contact your</span>
                                        <span className="text-[#e31e24] cursor-pointer hover:underline underline-offset-4 decoration-2">Account Manager</span>
                                        <span className="text-gray-500">or customer care at</span>
                                        <span className="text-[#e31e24] font-black text-2xl tracking-tighter ml-2">9350 543210 Now!</span>
                                    </div>
                                </div>

                                <button className="mt-8 px-12 py-5 bg-gray-900 text-white rounded font-black text-[13px] uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-xl active:scale-95 flex items-center gap-4">
                                    Upgrade Portfolio <ArrowUpRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Minimalist */}
            <div className="bg-gray-50 py-10 mt-20 border-t border-gray-200 text-center">
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em]">© 2026 Hunt Property Digital Limited</p>
            </div>
        </div>
    );
};

export default AgentDashboardView;
