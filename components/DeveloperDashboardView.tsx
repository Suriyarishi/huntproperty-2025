import React, { useState } from 'react';
import {
    MessageSquare, Building2, User, CreditCard,
    ChevronDown, MapPin, Download, ImageIcon,
    LayoutDashboard, Users, UserPlus, Sliders,
    ShieldCheck, Bell, ChevronRight, ChevronLeft, Bookmark,
    Home, Building, Clock, CheckCircle2, Info, ArrowUpRight,
    Search, FileText, Mail, Phone, Fingerprint, LogOut,
    Plus, Heart, UserCircle, Edit3, Key, Instagram, Twitter, Facebook, Linkedin,
    Briefcase, Lock
} from 'lucide-react';
import KYCFormView from './KYCFormView';
import ManageProjectsView from './ManageProjectsView';

interface DeveloperDashboardViewProps {
    onNavigate: (view: any) => void;
    userName?: string;
    image?: string;
}

const DeveloperDashboardView: React.FC<DeveloperDashboardViewProps> = ({ onNavigate, userName = 'rishi1', image }) => {
    const [activeTab, setActiveTab] = useState('responses');
    const [activeSidebarItem, setActiveSidebarItem] = useState('view-responses');
    const [selectedPropertyType, setSelectedPropertyType] = useState('residential');

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        if (tabId === 'properties') {
            setActiveSidebarItem('manage-properties');
        } else if (tabId === 'responses') {
            setActiveSidebarItem('view-responses');
        } else if (tabId === 'profile') {
            setActiveSidebarItem('profile-details');
        } else if (tabId === 'subscriptions') {
            setActiveSidebarItem('subscribed-services');
        } else if (tabId === 'projects') {
            setActiveSidebarItem('manage-projects');
        }
    };

    const navItems = [
        { label: 'Home', view: 'home' },
        { label: 'Buy', hasDropdown: true },
        { label: 'Rent', hasDropdown: true },
        { label: 'Sell', hasDropdown: true },
        { label: 'Tools & Advice', hasDropdown: true },
        { label: 'Home Loans', view: 'home-loans' },
        { label: 'Channel Partner', view: 'channel-partner' },
    ];

    const mainTabs = [
        { id: 'responses', label: 'Contacts/Responses', icon: MessageSquare },
        { id: 'properties', label: 'Properties', icon: Building2 },
        { id: 'services', label: 'Our Services', icon: Sliders },
        { id: 'profile', label: 'Profile', icon: UserCircle },
        { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
        { id: 'projects', label: 'Projects', icon: Building2 },
    ];

    const sidebarItems = [
        { id: 'view-responses', label: 'View Responses', icon: FileText },
        { id: 'conversation', label: 'Conversation', icon: MessageSquare },
        { id: 'leads-management', label: 'Leads Management', icon: Users },
        { id: 'viewed-leads', label: 'Viewed Leads', icon: Search },
    ];

    const propertiesSidebarItems = [
        { id: 'manage-properties', label: 'Manage Properties', icon: Building2 },
        { id: 'bulk-edit', label: 'Bulk Edit', icon: Edit3 },
        { id: 'post-property', label: 'Post New Property', icon: Plus },
        { id: 'favorite-property', label: 'Favorite Property', icon: Heart },
    ];

    const profileSidebarItems = [
        { id: 'profile-details', label: 'Profile Details', icon: User },
        { id: 'edit-company', label: 'Edit Company Details', icon: Building },
        { id: 'edit-office', label: 'Edit Office Details', icon: Briefcase },
        { id: 'edit-login', label: 'Edit Login Details', icon: Mail },
        { id: 'change-password', label: 'Change Password', icon: Lock },
    ];

    const subscriptionsSidebarItems = [
        { id: 'subscribed-services', label: 'Subscribed Services', icon: CheckCircle2 },
        { id: 'order-history', label: 'Order History', icon: Clock },
        { id: 'view-services', label: 'View Services', icon: Info },
        { id: 'alerts', label: 'Alerts', icon: Bell },
    ];

    const bookingsSidebarItems = [
        { id: 'view-clients', label: 'View Clients', icon: Users },
        { id: 'client-registration', label: 'Client Registration', icon: UserPlus },
        { id: 'view-kyc', label: 'View KYC', icon: ShieldCheck },
        { id: 'add-kyc', label: 'Add KYC', icon: Plus },
    ];

    const projectsSidebarItems = [
        { id: 'manage-projects', label: 'View Projects', icon: Building2 },
        { id: 'add-project', label: 'Add New Project', icon: Plus },
    ];

    const stats = [
        { label: 'Total Active Properties', value: 'N/A' },
        { label: 'Total Search Views', value: 'N/A' },
        { label: 'Property Detail Views', value: 'N/A' },
        { label: 'Responses Received', value: 'N/A' },
        { label: 'Leads Viewed', value: '0' },
    ];

    return (
        <div className="min-h-screen bg-[#F4F7FA] font-sans text-gray-800 pb-20">
            {/* 1. Floating Header */}
            <div className="p-6">
                <nav className="max-w-[1400px] mx-auto bg-white rounded-full shadow-lg px-8 py-3 flex items-center justify-between border border-gray-100">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                        <div className="flex items-center">
                            <span className="font-bold text-xl text-[#1a1c21]">Hunt</span>
                            <div className="relative mx-0.5">
                                <MapPin className="text-red-600 fill-red-600" size={20} />
                            </div>
                            <span className="font-bold text-xl text-[#1a1c21]">roperty</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-gray-600">
                        {navItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1 cursor-pointer hover:text-teal-500 transition-colors">
                                <span>{item.label}</span>
                                {item.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#1a1c21] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-teal-500 transition-all shadow-md">
                            Post Your Property
                        </button>
                        <div className="p-2 border border-gray-100 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                            <User size={20} className="text-gray-600" />
                        </div>
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>
                </nav>
            </div>

            <div className="max-w-[1240px] mx-auto px-4 space-y-8">
                {/* 2. Welcome Profile Card with Stats */}
                <div className="bg-white rounded-[24px] shadow-xl p-8 flex flex-col items-center border border-gray-50 overflow-hidden relative">
                    <div className="w-full flex flex-col md:flex-row items-center gap-10 relative z-10">
                        {/* Left: Profile Photo */}
                        <div className="flex flex-col items-center gap-3 shrink-0">
                            <div className="relative group">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner bg-gray-100 flex items-center justify-center">
                                    {image ? (
                                        <img src={image} alt="Developer Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <ImageIcon size={32} className="text-gray-300" />
                                    )}
                                </div>
                                <div className="absolute bottom-1 right-1 bg-[#2FED9A] p-1.5 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <Plus size={16} className="text-[#1a1c21]" />
                                </div>
                            </div>
                            <button className="text-[9px] font-black uppercase tracking-widest text-[#1a1c21] bg-gray-100 px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                                + Add Photo
                            </button>
                        </div>

                        {/* Middle: Welcome & Stats */}
                        <div className="flex-1 w-full space-y-5">
                            <div className="space-y-1 text-center md:text-left">
                                <h1 className="text-3xl font-black text-[#1a1c21] tracking-tight uppercase">Welcome, {userName}</h1>
                                <p className="text-[10px] font-bold text-teal-500 uppercase tracking-[0.4em]">Developer Workspace</p>
                            </div>

                            <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100/50 w-full">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                                    <h3 className="text-[10px] font-black text-gray-500 tracking-widest uppercase bg-gray-100 px-2 py-1 rounded">Statistics</h3>
                                    <span className="text-[10px] font-bold text-gray-400">10-Mar-2026</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4">
                                    {stats.map((s, idx) => (
                                        <div key={idx} className="flex flex-col group">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors">{s.label}</span>
                                            <span className="text-sm font-black text-[#1a1c21]">{s.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Navy Tab Navigation */}
                <div className="bg-[#1a1c21] rounded-full p-2 hidden sm:flex items-center justify-between shadow-2xl">
                    {mainTabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`flex items-center justify-center gap-3 px-10 py-4 rounded-full transition-all duration-300 group ${isActive
                                    ? 'bg-[#2FED9A] text-[#1a1c21] shadow-lg scale-[1.02]'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <tab.icon size={20} className={isActive ? 'text-[#1a1c21]' : 'text-gray-500 group-hover:text-teal-400'} />
                                <span className="text-[13px] font-bold">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* 4. Workspace Container */}
                <div className="bg-white rounded-[40px] shadow-2xl border border-gray-50 flex flex-col md:flex-row min-h-[700px] overflow-hidden">
                    {/* Sidebar */}
                    <aside className="w-full md:w-80 border-r border-gray-100 bg-gray-50/30 p-8 space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] px-4">
                                {activeTab === 'properties' ? 'Manage Properties' : activeTab === 'profile' ? 'Profile Details' : activeTab === 'subscriptions' ? 'Manage Subscriptions' : activeTab === 'bookings' ? 'Manage Bookings' : activeTab === 'projects' ? 'Manage Projects' : 'Contact/Responses'}
                            </h3>
                            <nav className="space-y-3">
                                {(activeTab === 'properties' ? propertiesSidebarItems : activeTab === 'profile' ? profileSidebarItems : activeTab === 'subscriptions' ? subscriptionsSidebarItems : activeTab === 'bookings' ? bookingsSidebarItems : activeTab === 'projects' ? projectsSidebarItems : sidebarItems).map((item) => {
                                    const isActive = activeSidebarItem === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                if (item.id === 'add-project') {
                                                    onNavigate('project-listing');
                                                } else {
                                                    setActiveSidebarItem(item.id);
                                                }
                                            }}
                                            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all group ${isActive
                                                ? 'bg-[#2FED9A] shadow-xl text-[#1a1c21] relative'
                                                : 'text-gray-500 hover:text-teal-500'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <item.icon size={18} className={isActive ? 'text-[#1a1c21]' : 'text-gray-400 group-hover:text-teal-500'} />
                                                <span className="text-[14px] font-bold">{item.label}</span>
                                            </div>
                                            <ChevronRight size={16} className={isActive ? 'text-[#1a1c21]' : 'text-gray-300'} />
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 p-12">
                        {activeTab === 'properties' ? (
                            <div className="space-y-12 animate-fade-in-up">
                                    <>
                                        <div className="flex items-center justify-between mb-12 border-b border-gray-50 pb-8">
                                            <div>
                                                <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Properties</h2>
                                                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Inventory Management</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[15px] font-black text-[#1a1c21]">Listings Left: 50</p>
                                            </div>
                                        </div>

                                        {activeSidebarItem === 'manage-properties' ? (
                                            <div className="space-y-8 contents-wrapper">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                        Manage Properties
                                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                placeholder="Search by ID"
                                                                className="h-10 border border-gray-200 rounded-lg px-4 text-sm outline-none w-40"
                                                            />
                                                        </div>
                                                        <button className="h-10 bg-[#2FED9A] text-[#1a1c21] px-4 rounded-lg font-black text-xs uppercase tracking-widest hover:shadow-lg transition-all">
                                                            Go
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Filter Section */}
                                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                                                    <div className="space-y-2">
                                                        <div className="relative">
                                                            <select className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-sm outline-none appearance-none text-gray-400">
                                                                <option>Property For</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter a Locality or Project"
                                                            className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-sm outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="relative">
                                                            <select className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-sm outline-none appearance-none text-gray-400">
                                                                <option>Property Type</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <input type="text" placeholder="₹ Min" className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-sm outline-none" />
                                                        <input type="text" placeholder="₹ Max" className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-sm outline-none" />
                                                    </div>
                                                    <button className="h-12 bg-[#2FED9A] text-[#1a1c21] flex items-center justify-center rounded-lg hover:shadow-lg transition-all">
                                                        <Search size={24} />
                                                    </button>
                                                </div>

                                                <div className="flex justify-end">
                                                    <button className="text-[12px] font-bold text-gray-400 hover:text-[#1a1c21] underline decoration-dotted">
                                                        Reset Search
                                                    </button>
                                                </div>

                                                <div className="pt-10 space-y-8">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                            Properties
                                                            <div className="absolute bottom-0 left-0 w-2/3 h-0.5 bg-[#2FED9A]"></div>
                                                        </h3>
                                                        <div className="flex items-center gap-4">
                                                            <span className="text-[12px] font-bold text-gray-400">Filter by</span>
                                                            <div className="relative">
                                                                <select className="h-10 bg-white border border-gray-200 rounded-lg px-6 pr-10 text-sm outline-none appearance-none min-w-[120px]">
                                                                    <option>All</option>
                                                                </select>
                                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-20 text-center space-y-2 opacity-50">
                                                        <Building2 size={40} className="text-gray-200 mx-auto" />
                                                        <p className="text-sm font-bold text-gray-400">No Records found</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : activeSidebarItem === 'bulk-edit' ? (
                                            <div className="space-y-8 animate-fade-in-up">
                                                <div className="border-b border-gray-100 pb-2">
                                                    <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                        Bulk Edit
                                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                                    </h3>
                                                </div>

                                                <div className="flex flex-wrap items-center justify-between gap-4">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <button className="bg-[#1a1c21] text-white px-6 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all">
                                                            Activate Selected Properties
                                                        </button>
                                                        <button className="bg-[#1a1c21] text-white px-6 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all">
                                                            Deactivate Selected Properties
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <button className="bg-[#ff3d3d] text-white px-6 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-[#ff3d3d]/90 transition-all">
                                                            Clear all
                                                        </button>
                                                        <button className="bg-[#2FED9A] text-[#1a1c21] px-8 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest hover:shadow-lg transition-all">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead>
                                                            <tr className="bg-gray-50 text-[11px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-100">
                                                                <th className="px-6 py-4 w-10">
                                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                                                                </th>
                                                                <th className="px-6 py-4">Property ID</th>
                                                                <th className="px-6 py-4">Description</th>
                                                                <th className="px-6 py-4">Current Price</th>
                                                                <th className="px-6 py-4">Recommended Price</th>
                                                                <th className="px-6 py-4">Status</th>
                                                                <th className="px-6 py-4">Set New Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colSpan={7} className="px-6 py-20 text-center">
                                                                    <p className="text-sm font-bold text-gray-300">No Records found</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        ) : activeSidebarItem === 'favorite-property' ? (
                                            <div className="space-y-8 animate-fade-in-up">
                                                <div className="border-b border-gray-100 pb-2">
                                                    <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                        Favorite Properties
                                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                                    {[
                                                        {
                                                            id: 'PROP-001',
                                                            title: 'Elite Residency 2BHK',
                                                            location: 'Sector 128, Noida',
                                                            price: '₹1.25 Cr',
                                                            type: 'Apartment',
                                                            details: '2 BHK • 1250 sq.ft',
                                                            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400'
                                                        },
                                                        {
                                                            id: 'PROP-002',
                                                            title: 'Luxury Villa Pine',
                                                            location: 'Zeta 1, Greater Noida',
                                                            price: '₹3.50 Cr',
                                                            type: 'Villa',
                                                            details: '4 BHK • 3500 sq.ft',
                                                            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400'
                                                        }
                                                    ].map((prop) => (
                                                        <div key={prop.id} className="group relative bg-white rounded-[24px] border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:shadow-gray-200/40 hover:border-emerald-100/50">
                                                            <div className="relative h-48 overflow-hidden">
                                                                <img
                                                                    src={prop.image}
                                                                    alt={prop.title}
                                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                                <div className="absolute top-4 left-4 flex gap-2">
                                                                    <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#1a1c21] shadow-sm">
                                                                        {prop.type}
                                                                    </div>
                                                                </div>
                                                                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full text-red-500 shadow-sm hover:scale-110 transition-transform">
                                                                    <Heart size={14} fill="currentColor" />
                                                                </button>
                                                                <div className="absolute bottom-4 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                                                    <p className="text-sm font-black uppercase tracking-widest">{prop.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="p-6 space-y-4">
                                                                <div className="space-y-1">
                                                                    <h4 className="text-lg font-bold text-[#1a1c21] tracking-tight">{prop.title}</h4>
                                                                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                                                                        <MapPin size={12} className="text-gray-300" />
                                                                        {prop.location}
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                                                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{prop.details}</span>
                                                                    <button className="flex items-center gap-1 text-[#1a1c21] font-bold text-[10px] uppercase tracking-widest hover:text-emerald-500 transition-colors group/btn">
                                                                        Details <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                                                <LayoutDashboard size={80} className="text-gray-200" />
                                                <div className="text-center space-y-2">
                                                    <h3 className="text-2xl font-black uppercase tracking-tight">Section Coming Soon</h3>
                                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Agent Content Implementation in Progress</p>
                                                </div>
                                            </div>
                                        )}
                                    </>
                            </div>
                        ) : activeTab === 'profile' ? (
                            <div className="space-y-12 animate-fade-in-up">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Profile</h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Agent Credentials</p>
                                    </div>
                                </div>

                                {activeSidebarItem === 'profile-details' ? (
                                    <div className="space-y-10 contents-wrapper">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Profile Details
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="bg-white rounded-[30px] p-10 space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Name</span>
                                                    <span className="text-[15px] font-bold text-[#1a1c21]">rishi1</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Company Name</span>
                                                    <span className="text-[15px] font-bold text-gray-400 italic">N/A</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Registered As</span>
                                                    <span className="text-[15px] font-bold text-[#1a1c21]">Builder</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">City</span>
                                                    <span className="text-[15px] font-bold text-[#1a1c21]">Noida</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Email</span>
                                                    <span className="text-[15px] font-bold text-[#1a1c21]">rishi1@gmail.com</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Mobile</span>
                                                    <span className="text-[15px] font-bold text-[#1a1c21]">0987654321</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">RERA Number</span>
                                                    <span className="text-[15px] font-bold text-[#1a1c21]">P52000012345</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                                                    <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Aadhar Number</span>
                                                    <span className="text-[15px] font-bold text-gray-400 italic">N/A</span>
                                                </div>
                                            </div>

                                            <div className="pt-6 flex justify-end">
                                                <button className="bg-[#1a1c21] text-white px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all shadow-lg">
                                                    Update Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'edit-company' ? (
                                    <div className="space-y-10 contents-wrapper">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Edit Company Details
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <p className="text-xs font-bold text-gray-400 italic bg-teal-50/50 p-4 rounded-xl border border-teal-100/50">
                                            Edit your Company Details here. This will also update your details in our database. This updation increases your chances to appear in the search results for Brokers/Agents.
                                        </p>

                                        <div className="space-y-10 pb-10">
                                            {/* Dealing In */}
                                            <div className="space-y-4">
                                                <h4 className="text-[13px] font-black text-[#1a1c21] uppercase tracking-widest">I am dealing in</h4>
                                                <div className="flex gap-4">
                                                    <button className="flex items-center gap-3 px-8 py-3 bg-[#2FED9A] text-[#1a1c21] rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100">
                                                        <FileText size={16} /> SALE
                                                    </button>
                                                    <button className="flex items-center gap-3 px-8 py-3 bg-white border border-gray-100 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:border-teal-200 transition-all">
                                                        <FileText size={16} /> RENT
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Property Type */}
                                            <div className="space-y-4">
                                                <h4 className="text-[13px] font-black text-[#1a1c21] uppercase tracking-widest">Property Type</h4>
                                                <div className="flex gap-4">
                                                    <button 
                                                        onClick={() => setSelectedPropertyType('residential')}
                                                        className={`flex items-center gap-3 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${selectedPropertyType === 'residential' ? 'bg-[#2FED9A] text-[#1a1c21] shadow-lg shadow-teal-100' : 'bg-white border border-gray-100 text-gray-400 hover:border-teal-200'}`}
                                                    >
                                                        <Home size={16} /> Residential
                                                    </button>
                                                    <button 
                                                        onClick={() => setSelectedPropertyType('commercial')}
                                                        className={`flex items-center gap-3 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${selectedPropertyType === 'commercial' ? 'bg-[#2FED9A] text-[#1a1c21] shadow-lg shadow-teal-100' : 'bg-white border border-gray-100 text-gray-400 hover:border-teal-200'}`}
                                                    >
                                                        <Building size={16} /> Commercial
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Transaction Type */}
                                            <div className="space-y-4">
                                                <h4 className="text-[13px] font-black text-[#1a1c21] uppercase tracking-widest">Transaction Type</h4>
                                                <div className="flex flex-wrap gap-4">
                                                    <button className="flex items-center gap-3 px-8 py-3 bg-[#2FED9A] text-[#1a1c21] rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100">
                                                        <Edit3 size={16} /> Rent/Lease
                                                    </button>
                                                    <button className="flex items-center gap-3 px-8 py-3 bg-white border border-gray-100 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:border-teal-200 transition-all">
                                                        <ArrowUpRight size={16} /> New Launch
                                                    </button>
                                                    <div className="relative">
                                                        <select className="h-[46px] bg-white border border-gray-100 rounded-xl px-4 pr-10 text-[13px] font-bold text-gray-400 outline-none appearance-none min-w-[120px]">
                                                            <option>Others</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                    </div>
                                                </div>
                                                <p className="text-[#e3002f] text-sm font-semibold">Please choose at least 1 item(s)</p>
                                            </div>

                                            {/* Conditional Categories */}
                                            {selectedPropertyType === 'residential' ? (
                                                <div className="space-y-4 animate-fade-in-up">
                                                    <h4 className="text-[13px] font-black text-[#1a1c21] uppercase tracking-widest">Type of Residential Properties</h4>
                                                    <div className="flex flex-wrap gap-3">
                                                        {[
                                                            { label: 'Residential Plot', icon: Building2 },
                                                            { label: 'Residential House', icon: Home },
                                                            { label: 'Multi-storey Apartments', icon: Building },
                                                            { label: 'Builder Floor Apartment', icon: Building }
                                                        ].map((cat, idx) => (
                                                            <button key={idx} className="flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-[12px] transition-all border bg-white border-gray-100 text-gray-500 hover:border-teal-100">
                                                                <cat.icon size={16} className="text-gray-300" />
                                                                {cat.label}
                                                            </button>
                                                        ))}
                                                        <div className="relative">
                                                            <select className="h-[46px] bg-white border border-gray-100 rounded-xl px-4 pr-10 text-[12px] font-bold text-gray-400 outline-none appearance-none min-w-[120px]">
                                                                <option>Others</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-4 animate-fade-in-up">
                                                    <h4 className="text-[13px] font-black text-[#1a1c21] uppercase tracking-widest">Type of Commercial Properties</h4>
                                                    <div className="flex flex-wrap gap-3">
                                                        {[
                                                            { label: 'Commercial Land', icon: MapPin },
                                                            { label: 'Commercial Office Space', icon: Briefcase },
                                                            { label: 'Commercial Shop', icon: Home },
                                                            { label: 'Commercial Showroom', icon: Building2 }
                                                        ].map((cat, idx) => (
                                                            <button key={idx} className="flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-[12px] transition-all border bg-white border-gray-100 text-gray-500 hover:border-teal-100">
                                                                <cat.icon size={16} className="text-gray-300" />
                                                                {cat.label}
                                                            </button>
                                                        ))}
                                                        <div className="relative">
                                                            <select className="h-[46px] bg-white border border-gray-100 rounded-xl px-4 pr-10 text-[12px] font-bold text-gray-400 outline-none appearance-none min-w-[120px]">
                                                                <option>Others</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Dropdowns */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Operating Since</label>
                                                    <div className="relative">
                                                        <select className="w-full h-12 bg-white border border-gray-100 rounded-xl px-6 pr-10 font-bold text-sm outline-none appearance-none">
                                                            <option>Select Year</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Expertise in</label>
                                                    <div className="relative">
                                                        <select className="w-full h-12 bg-white border border-gray-100 rounded-xl px-6 pr-10 font-bold text-sm outline-none appearance-none">
                                                            <option>Select one</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Textareas */}
                                            <div className="space-y-8">
                                                <div className="space-y-3">
                                                    <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Brief Description of Your Business <span className="text-red-400 lowercase">(Max 3000 Chr.)</span></label>
                                                    <textarea className="w-full h-32 bg-white border border-gray-100 rounded-[30px] p-8 text-sm outline-none focus:border-teal-200 transition-all resize-none"></textarea>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Authorized Agents / Dealers of <span className="text-red-400 lowercase">(Max 3000 Chr.)</span></label>
                                                    <textarea className="w-full h-24 bg-white border border-gray-100 rounded-[30px] p-8 text-sm outline-none focus:border-teal-200 transition-all resize-none"></textarea>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Authorized Dealers For Projects.</label>
                                                    <textarea className="w-full h-24 bg-white border border-gray-100 rounded-[30px] p-8 text-sm outline-none focus:border-teal-200 transition-all resize-none"></textarea>
                                                </div>
                                            </div>

                                            {/* Value Added Services */}
                                            <div className="space-y-8 pt-6">
                                                <h4 className="text-xl font-black text-[#1a1c21]">Value Added Services</h4>
                                                <div className="space-y-4 border-t border-gray-50 pt-8">
                                                    {[
                                                        'Property Registry',
                                                        'Can Provide Loan Facility',
                                                        'Registered With NAR',
                                                        'Registered With RERA',
                                                        'Registered With CREDAI'
                                                    ].map((service, idx) => (
                                                        <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 max-w-2xl">
                                                            <span className="text-[14px] font-bold text-gray-500">{service}</span>
                                                            <div className="flex items-center gap-8">
                                                                <label className="flex items-center gap-2 cursor-pointer group">
                                                                    <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-teal-400 transition-all flex items-center justify-center p-1">
                                                                        <div className="w-full h-full bg-transparent rounded-full"></div>
                                                                    </div>
                                                                    <span className="text-[13px] font-black uppercase text-gray-300 group-hover:text-teal-500">No</span>
                                                                </label>
                                                                <label className="flex items-center gap-2 cursor-pointer group">
                                                                    <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center p-1">
                                                                        <div className="w-full h-full bg-teal-500 rounded-full"></div>
                                                                    </div>
                                                                    <span className="text-[13px] font-black uppercase text-teal-600">Yes</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Valuable Clients */}
                                            <div className="space-y-8 pt-6">
                                                <h4 className="text-xl font-black text-[#1a1c21]">Valuable Clients</h4>
                                                <div className="flex flex-col md:flex-row gap-8 items-end border-t border-gray-50 pt-8">
                                                    <div className="flex-1 space-y-3 w-full">
                                                        <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Name</label>
                                                        <input type="text" className="w-full h-12 bg-white border border-gray-100 rounded-xl px-6 outline-none" />
                                                    </div>
                                                    <div className="flex-1 space-y-3 w-full">
                                                        <label className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Deal Values</label>
                                                        <input type="text" className="w-full h-12 bg-white border border-gray-100 rounded-xl px-6 outline-none" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <button className="text-[13px] font-black text-teal-500 hover:text-teal-600 underline underline-offset-4 decoration-dotted">Add More +</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="pt-10 flex justify-center">
                                                <button className="bg-[#2FED9A] text-[#1a1c21] px-12 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#1a1c21] hover:text-white transition-all shadow-2xl hover:scale-[1.05] active:scale-95 group flex items-center gap-3">
                                                    Save and Exit <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'edit-office' ? (
                                    <div className="space-y-10 contents-wrapper">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Edit Office Details
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <p className="text-xs font-bold text-gray-400 italic bg-teal-50/50 p-4 rounded-xl border border-teal-100/50">
                                            Edit your Office Details here. This will also update your details in our database. This updation increases your chances to appear in the search results for Brokers/Agents.
                                        </p>

                                        <div className="space-y-12 pb-10">
                                            {/* Office Address Section */}
                                            <div className="space-y-8">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-xl font-black text-[#1a1c21]">Office Address</h4>
                                                </div>

                                                <div className="flex flex-col lg:flex-row gap-10">
                                                    <div className="flex-1 space-y-6">
                                                        <div className="grid grid-cols-1 gap-6">
                                                            <div className="flex items-center gap-6">
                                                                <label className="w-32 text-[12px] font-black text-gray-400 uppercase tracking-widest">State</label>
                                                                <div className="relative flex-1">
                                                                    <select className="w-full h-11 bg-white border border-gray-100 rounded-lg px-6 pr-10 font-bold text-sm outline-none appearance-none text-gray-400">
                                                                        <option>Select State</option>
                                                                    </select>
                                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-6">
                                                                <label className="w-32 text-[12px] font-black text-gray-400 uppercase tracking-widest">City</label>
                                                                <div className="relative flex-1">
                                                                    <select className="w-full h-11 bg-white border border-gray-100 rounded-lg px-6 pr-10 font-bold text-sm outline-none appearance-none text-gray-400">
                                                                        <option>Select City</option>
                                                                    </select>
                                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-6">
                                                                <label className="w-32 text-[12px] font-black text-gray-400 uppercase tracking-widest">Locality</label>
                                                                <input type="text" placeholder="Enter Locality" className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none text-gray-400 placeholder-gray-300" />
                                                            </div>
                                                            <div className="flex items-start gap-6">
                                                                <label className="w-32 text-[12px] font-black text-gray-400 uppercase tracking-widest mt-4">Address</label>
                                                                <textarea
                                                                    placeholder="Office Address"
                                                                    className="flex-1 h-32 bg-white border border-gray-100 rounded-xl p-6 text-sm outline-none focus:border-teal-200 transition-all resize-none text-gray-400 font-medium placeholder-gray-300"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Map Preview */}
                                                    <div className="w-full lg:w-72 h-48 lg:h-auto rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative group bg-gray-50">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=500"
                                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                                            alt="Office Location Map"
                                                        />
                                                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] group-hover:bg-transparent transition-all"></div>
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                                                <MapPin size={14} className="text-red-500" />
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Open in Maps</span>
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-4 left-4">
                                                            <div className="p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-sm">
                                                                <MapPin size={16} className="text-red-500" />
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-1.5 rounded-lg border border-gray-100 shadow-sm cursor-pointer">
                                                            <Plus size={14} className="text-gray-400" />
                                                        </div>
                                                        <div className="absolute bottom-4 left-4">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" className="w-6 h-6 shadow-sm rounded p-0.5 bg-white" alt="Google Maps" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Personal/Company Info */}
                                            <div className="space-y-6 pt-6 border-t border-gray-50">
                                                <div className="flex items-center gap-6">
                                                    <label className="w-48 text-[12px] font-black text-gray-400 uppercase tracking-widest">Name</label>
                                                    <input type="text" placeholder="Enter Contact Person Name" className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none text-gray-500 placeholder-gray-300" />
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <label className="w-48 text-[12px] font-black text-gray-400 uppercase tracking-widest">Agency/Company Name</label>
                                                    <input type="text" placeholder="Enter Agency/Company Name" className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none text-gray-500 placeholder-gray-300" />
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <label className="w-48 text-[12px] font-black text-gray-400 uppercase tracking-widest">Company Website</label>
                                                    <input type="text" placeholder="Enter Agency/Company Website" className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none text-gray-500 placeholder-gray-300" />
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className="flex justify-center pt-4">
                                                <button className="bg-[#2FED9A] text-[#1a1c21] px-10 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#1a1c21] hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95">
                                                    Save
                                                </button>
                                            </div>

                                            {/* Office Photos Section */}
                                            <div className="space-y-8 pt-10 border-t border-gray-50">
                                                <div className="space-y-1">
                                                    <h4 className="text-[13px] font-black text-[#1a1c21] uppercase tracking-widest">Office Photos (Upload upto 10)</h4>
                                                </div>

                                                <div className="relative group">
                                                    <div className="bg-gray-50/50 rounded-[40px] p-12 border border-gray-100 overflow-hidden flex items-center justify-center min-h-[240px]">
                                                        <div className="flex items-center gap-8 w-full justify-center">
                                                            {/* Placeholder Carousel */}
                                                            <div className="flex-shrink-0 w-44 h-44 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center group/upload cursor-pointer hover:border-teal-200 transition-all">
                                                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover/upload:bg-teal-50 transition-colors">
                                                                    <Plus size={32} className="text-gray-300 group-hover/upload:text-teal-400 transition-colors" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Carousel Controls (Visual only) */}
                                                        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-300 hover:text-teal-500 transition-colors opacity-0 group-hover:opacity-100">
                                                            <ChevronLeft size={20} />
                                                        </button>
                                                        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-300 hover:text-teal-500 transition-colors opacity-0 group-hover:opacity-100">
                                                            <ChevronRight size={20} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'edit-login' ? (
                                    <div className="space-y-12 contents-wrapper max-w-4xl mx-auto">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Edit Login Details
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="space-y-8 pt-6">
                                            {/* Email ID (Readonly) */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Email ID :</label>
                                                <div className="flex-1 font-bold text-gray-800">{userName}@gmail.com</div>
                                            </div>

                                            {/* Name */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Name* :</label>
                                                <input
                                                    type="text"
                                                    defaultValue={userName}
                                                    className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                />
                                            </div>

                                            {/* Alternate Email */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Alternate Email ID :</label>
                                                <input
                                                    type="email"
                                                    placeholder="Alternate Email Id"
                                                    className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                />
                                            </div>

                                            {/* Aadhar Number */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Aadhar Number* :</label>
                                                <input
                                                    type="text"
                                                    placeholder="N/A"
                                                    className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                />
                                            </div>

                                            {/* Mobile */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Mobile* :</label>
                                                <div className="flex-1 flex gap-4">
                                                    <div className="relative w-32 flex-shrink-0">
                                                        <select className="w-full h-11 bg-white border border-gray-100 rounded-lg px-4 pr-8 font-bold text-sm outline-none appearance-none text-gray-400">
                                                            <option>IND +91</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="0000000000"
                                                        className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                    />
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex justify-center gap-4 pt-10">
                                                <button className="bg-[#2FED9A] text-[#1a1c21] px-10 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(47,237,154,0.3)] transition-all transform hover:scale-105 active:scale-95">
                                                    Save and Exit
                                                </button>
                                                <button className="bg-[#1a1c21] text-white px-10 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                                                    Save and Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'change-password' ? (
                                    <div className="space-y-12 contents-wrapper max-w-4xl mx-auto">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Change Password
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="space-y-8 pt-6">
                                            {/* Email ID (Readonly) */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Email ID :</label>
                                                <div className="flex-1 font-bold text-gray-800 italic">{userName}@gmail.com</div>
                                            </div>

                                            {/* Old Password */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Old Password* :</label>
                                                <input
                                                    type="password"
                                                    className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                />
                                            </div>

                                            {/* New Password */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">New Password* :</label>
                                                <input
                                                    type="password"
                                                    className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                />
                                            </div>

                                            {/* Repeat Password */}
                                            <div className="flex items-center gap-10">
                                                <label className="w-40 text-right text-[13px] font-bold text-gray-500">Repeat Password* :</label>
                                                <input
                                                    type="password"
                                                    className="flex-1 h-11 bg-white border border-gray-100 rounded-lg px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all text-gray-600"
                                                />
                                            </div>

                                            {/* Action Button */}
                                            <div className="flex justify-center pt-10">
                                                <button className="bg-[#2FED9A] text-[#1a1c21] px-12 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1c21] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                                        <LayoutDashboard size={80} className="text-gray-200" />
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-black uppercase tracking-tight">Section Coming Soon</h3>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Profile Management in Progress</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeTab === 'subscriptions' ? (
                            <div className="space-y-12 animate-fade-in-up">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Subscriptions</h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Service Management</p>
                                    </div>
                                </div>

                                {activeSidebarItem === 'subscribed-services' ? (
                                    <div className="space-y-8 animate-fade-in-up">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Manage Subscriptions - Subscribed Services (0)
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                                                        <th className="px-8 py-5">Order ID / Payment mode</th>
                                                        <th className="px-8 py-5">Service Title / Product Title</th>
                                                        <th className="px-8 py-5">Status</th>
                                                        <th className="px-8 py-5">Time</th>
                                                        <th className="px-8 py-5">Valid Till</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={5} className="px-8 py-20 text-center">
                                                            <div className="flex flex-col items-center gap-4 opacity-40">
                                                                <CreditCard size={40} className="text-gray-200" />
                                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No Record Found</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'order-history' ? (
                                    <div className="space-y-8 animate-fade-in-up">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Manage Subscriptions - Order History (0)
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                                                        <th className="px-8 py-5">Product Title / Order ID</th>
                                                        <th className="px-8 py-5">Order Date</th>
                                                        <th className="px-8 py-5 text-right">Order Status / Payment Mode</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={3} className="px-8 py-20 text-center">
                                                            <div className="flex flex-col items-center gap-4 opacity-40">
                                                                <Clock size={40} className="text-gray-200" />
                                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No Record Found</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'alerts' ? (
                                    <div className="space-y-8 animate-fade-in-up">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Alerts
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="py-32 flex flex-col items-center justify-center text-center space-y-4">
                                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shadow-inner">
                                                <Bell size={28} className="text-gray-200" />
                                            </div>
                                            <p className="text-[15px] font-bold text-gray-500 uppercase tracking-wide">
                                                Currently there are no alerts available for this user
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                                        <LayoutDashboard size={80} className="text-gray-200" />
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-black uppercase tracking-tight">Section Coming Soon</h3>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Subscription Management in Progress</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeTab === 'bookings' ? (
                            <div className="space-y-12 animate-fade-in-up">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Bookings</h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Client & KYC Management</p>
                                    </div>
                                </div>

                                {activeSidebarItem === 'view-clients' ? (
                                    <div className="space-y-8 animate-fade-in-up">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Manage Bookings - View Clients (0)
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                                                        <th className="px-8 py-5">Sr. no.</th>
                                                        <th className="px-8 py-5">Client Name</th>
                                                        <th className="px-8 py-5">Client Phone</th>
                                                        <th className="px-8 py-5">Client Email</th>
                                                        <th className="px-8 py-5">Property Type</th>
                                                        <th className="px-8 py-5 text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={6} className="px-8 py-20 text-center">
                                                            <div className="flex flex-col items-center gap-4 opacity-40">
                                                                <Users size={40} className="text-gray-200" />
                                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No Record Found</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'client-registration' ? (
                                    <div className="space-y-8 animate-fade-in-up pb-12">
                                        <div className="bg-red-600 text-white p-4 rounded-xl flex items-center justify-center gap-3 shadow-lg">
                                            <div className="bg-white p-1 rounded-lg">
                                                <FileText className="text-red-600" size={20} />
                                            </div>
                                            <h3 className="text-sm font-black uppercase tracking-widest">Client Registration Form</h3>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-[40px] p-10 shadow-sm space-y-12">
                                            {/* Basic Information */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">Full Name <span className="text-red-500">*</span></label>
                                                        <input type="text" placeholder="Client Name..." className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none focus:border-[#2FED9A] transition-colors" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">Contact No. <span className="text-red-500">*</span></label>
                                                        <input type="text" placeholder="Client Contact No..." className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none focus:border-[#2FED9A] transition-colors" />
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">Email <span className="text-red-500">*</span></label>
                                                        <input type="email" placeholder="Client Email..." className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none focus:border-[#2FED9A] transition-colors" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">Address <span className="text-red-500">*</span></label>
                                                        <textarea placeholder="Client Address..." className="w-full h-28 bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:border-[#2FED9A] transition-colors resize-none"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Lead Source */}
                                            <div className="space-y-6">
                                                <label className="text-sm font-black text-[#1a1c21] uppercase tracking-wide">How you got to know about us ? <span className="text-red-500">*</span></label>
                                                <div className="flex flex-wrap gap-6">
                                                    {['SMS', 'Newspaper', 'Friend', 'Facebook', 'Instagram', 'Google', 'Walk In', 'other'].map((source) => (
                                                        <label key={source} className="flex items-center gap-2 cursor-pointer group">
                                                            <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center p-1 group-hover:border-[#2FED9A] transition-colors">
                                                                <div className="w-full h-full rounded-full bg-transparent group-active:bg-[#2FED9A]"></div>
                                                            </div>
                                                            <span className="text-sm font-bold text-gray-500 capitalize">{source}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                <p className="text-[11px] font-bold text-gray-400 italic bg-gray-50 p-4 rounded-xl border-l-4 border-teal-500">
                                                    Request : Your correct information will help us to serve and guide in a better way. Our key of success is our customer's satisfaction. - Thank You (Team HP)
                                                </p>
                                            </div>

                                            <div className="border-t border-gray-50 pt-12 space-y-12">
                                                {/* Project Looking For */}
                                                <div className="space-y-8">
                                                    <div className="flex items-center gap-3">
                                                        <Building2 size={24} className="text-[#1a1c21]" />
                                                        <h4 className="text-lg font-black text-[#1a1c21] uppercase tracking-tight">Project Looking For</h4>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                                        {[
                                                            { label: 'Residential', icon: Home },
                                                            { label: 'Commercial', icon: Building2 },
                                                            { label: 'Industrial', icon: Briefcase },
                                                            { label: 'Agriculture', icon: LayoutDashboard },
                                                            { label: 'Institutional', icon: Building }
                                                        ].map((type) => (
                                                            <div key={type.label} className="bg-gray-50 p-6 rounded-[25px] flex flex-col items-center gap-4 cursor-pointer hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-transparent hover:border-[#2FED9A] group text-center">
                                                                <type.icon size={28} className="text-gray-300 group-hover:text-[#2FED9A]" />
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-4 h-4 rounded-full border-2 border-gray-200 flex items-center justify-center p-0.5 group-hover:border-[#2FED9A]">
                                                                        <div className="w-full h-full rounded-full bg-transparent group-active:bg-[#2FED9A]"></div>
                                                                    </div>
                                                                    <span className="text-xs font-black text-gray-500 group-hover:text-[#1a1c21] uppercase tracking-wider">{type.label}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Purpose */}
                                                <div className="space-y-8">
                                                    <div className="flex items-center gap-3">
                                                        <Briefcase size={24} className="text-[#1a1c21]" />
                                                        <h4 className="text-lg font-black text-[#1a1c21] uppercase tracking-tight">Purpose <span className="text-red-500">*</span></h4>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                        {['Investment', 'Self Use', 'Both'].map((p) => (
                                                            <div key={p} className="bg-white border-2 border-gray-50 p-6 rounded-[25px] flex items-center justify-center gap-4 cursor-pointer hover:border-[#2FED9A] hover:shadow-lg transition-all group">
                                                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center p-1 group-hover:border-[#2FED9A]">
                                                                    <div className="w-full h-full rounded-full bg-[#2FED9A]/0 group-active:bg-[#2FED9A]"></div>
                                                                </div>
                                                                <span className="text-sm font-black text-gray-500 group-hover:text-[#1a1c21] uppercase tracking-widest">{p}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Size */}
                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Size *</span>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="relative">
                                                            <select className="w-full h-12 bg-white border border-gray-100 rounded-xl px-4 text-sm outline-none appearance-none focus:border-[#2FED9A] transition-colors">
                                                                <option>Select</option>
                                                                <option>Sq. Ft.</option>
                                                                <option>Sq. Yds.</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={14} />
                                                        </div>
                                                        <input type="text" placeholder="Property size..." className="w-full h-12 bg-white border border-gray-100 rounded-xl px-4 text-sm outline-none focus:border-[#2FED9A] transition-colors" />
                                                    </div>
                                                </div>

                                                {/* Possession */}
                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">When You are expecting the possession of the property? *</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                                        {['Ready to move', 'With in 3 months', 'With in 6 months', 'With in 9 Months', 'With in 12 to 15 months'].map((term) => (
                                                            <div key={term} className="bg-white border border-gray-50 p-6 rounded-[25px] flex flex-col items-center gap-3 cursor-pointer hover:border-[#2FED9A] shadow-sm transition-all group text-center">
                                                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center p-1 group-hover:border-[#2FED9A]">
                                                                    <div className="w-full h-full rounded-full bg-transparent group-active:bg-[#2FED9A]"></div>
                                                                </div>
                                                                <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#1a1c21] leading-tight">{term}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="space-y-2 pt-4">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-4">Other (Plz Specify)</label>
                                                        <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none" />
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Location *</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                                                        {['Noida', 'Gurugram', 'Greater Noida West', 'Faridabad', 'Greater Noida', 'Ghaziabad', 'Yamuna Expressway (YEW)', 'Manesar', 'Jewar'].map((loc) => (
                                                            <div key={loc} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:shadow-md transition-all group">
                                                                <div className="w-4 h-4 border-2 border-gray-200 rounded group-hover:border-[#2FED9A] transition-colors"></div>
                                                                <span className="text-xs font-bold text-gray-500 group-hover:text-[#1a1c21]">{loc}</span>
                                                            </div>
                                                        ))}
                                                        <div className="md:col-span-3 space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-4">Other (Plz Specify)</label>
                                                            <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Amount */}
                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">How much amount would you like to spend on investment? *</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                                        {['Less then 30 Lacs', '31 Lacs to 40 Lacs', '41 Lacs to 50 Lacs', '50 lacs to 75 Lacs', '75 lacs to 1 Cr', '1 Cr to 1.5 Cr', '1.5 Cr to 2 Cr'].map((amt) => (
                                                            <div key={amt} className="bg-white border border-gray-100 p-6 rounded-[25px] flex flex-col items-center gap-3 cursor-pointer hover:border-[#2FED9A] transition-all group text-center">
                                                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center p-1 group-hover:border-[#2FED9A]">
                                                                    <div className="w-full h-full rounded-full bg-transparent group-active:bg-[#2FED9A]"></div>
                                                                </div>
                                                                <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#1a1c21] leading-tight">{amt}</span>
                                                            </div>
                                                        ))}
                                                        <div className="md:col-span-2 space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-4">Other (Plz Specify)</label>
                                                            <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Loan */}
                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Looking For Bank Loan *</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-6">
                                                        {['Yes', 'No'].map((ans) => (
                                                            <div key={ans} className="bg-white border-2 border-gray-50 p-6 rounded-[25px] flex items-center justify-center gap-4 cursor-pointer hover:border-[#2FED9A] transition-all group">
                                                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center p-1 group-hover:border-[#2FED9A]">
                                                                    <div className="w-full h-full rounded-full bg-transparent group-active:bg-[#2FED9A]"></div>
                                                                </div>
                                                                <span className="text-sm font-black text-gray-500 group-hover:text-[#1a1c21] uppercase tracking-widest">{ans}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Planning */}
                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">When are you planning to close or finalise the deal? *</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                        {['With in a 2 to 3 Days', 'With in a Week', 'With in 2 Weeks', 'With in a Month'].map((time) => (
                                                            <div key={time} className="bg-white border border-gray-100 p-6 rounded-[25px] flex flex-col items-center gap-3 cursor-pointer hover:border-[#2FED9A] transition-all group text-center">
                                                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center p-1 group-hover:border-[#2FED9A]">
                                                                    <div className="w-full h-full rounded-full bg-transparent group-active:bg-[#2FED9A]"></div>
                                                                </div>
                                                                <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#1a1c21] leading-tight">{time}</span>
                                                            </div>
                                                        ))}
                                                        <div className="md:col-span-1 space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-4">Other (Plz Specify)</label>
                                                            <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm outline-none" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Remark */}
                                                <div className="space-y-6">
                                                    <div className="bg-gray-50 px-6 py-2 rounded-lg">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Remark *</span>
                                                    </div>
                                                    <textarea placeholder="Remark" className="w-full h-32 bg-gray-50 border border-gray-100 rounded-[25px] p-6 text-sm outline-none focus:border-[#2FED9A] transition-colors resize-none shadow-inner"></textarea>
                                                </div>

                                                <div className="flex justify-center pt-8">
                                                    <button className="bg-[#2FED9A] text-[#1a1c21] px-12 py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 hover:shadow-[#2FED9A]/20 transition-all">
                                                        Submit and OTP Verification
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'view-kyc' ? (
                                    <div className="space-y-8 animate-fade-in-up">
                                        <div className="border-b border-gray-100 pb-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Manage Bookings - View KYC (0)
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="overflow-x-auto border border-gray-100 rounded-xl">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50/50 border-b border-gray-100 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                                                        <th className="px-8 py-5 border-r border-gray-100">Sr. no.</th>
                                                        <th className="px-8 py-5 border-r border-gray-100">Builder Name</th>
                                                        <th className="px-8 py-5 border-r border-gray-100">Project Name</th>
                                                        <th className="px-8 py-5 border-r border-gray-100">Client Name</th>
                                                        <th className="px-8 py-5 border-r border-gray-100">Booking Month</th>
                                                        <th className="px-8 py-5 text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-50">
                                                        <td className="px-8 py-5 border-r border-gray-50 text-[13px] font-bold text-gray-500">1</td>
                                                        <td className="px-8 py-5 border-r border-gray-50 text-[13px] font-black text-[#1a1c21]">Gaur Sons</td>
                                                        <td className="px-8 py-5 border-r border-gray-50 text-[13px] font-bold text-gray-500">Gaur City 2</td>
                                                        <td className="px-8 py-5 border-r border-gray-50 text-[13px] font-black text-[#1a1c21]">Vinay Rathore</td>
                                                        <td className="px-8 py-5 border-r border-gray-50 text-[13px] font-bold text-gray-500">March 2026</td>
                                                        <td className="px-8 py-5 text-right">
                                                            <button className="text-teal-500 font-bold text-xs hover:underline">View Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={6} className="px-8 py-20 text-center bg-gray-50/20">
                                                            <div className="flex flex-col items-center gap-4 opacity-40">
                                                                <ShieldCheck size={40} className="text-gray-200" />
                                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">End of Records</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : activeSidebarItem === 'add-kyc' ? (
                                    <KYCFormView userName={userName} />
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                                        <LayoutDashboard size={80} className="text-gray-200" />
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-black uppercase tracking-tight">Section Coming Soon</h3>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Booking Management in Progress</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeTab === 'projects' ? (
                            <div className="space-y-12 animate-fade-in-up">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Projects</h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Manage Your Projects</p>
                                    </div>
                                </div>

                                {activeSidebarItem === 'manage-projects' ? (
                                    <div className="space-y-8 animate-fade-in-up">
                                        <div className="bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                                                        <th className="px-8 py-5 border-r border-gray-50">Sr. no.</th>
                                                        <th className="px-8 py-5 border-r border-gray-50">Project Name</th>
                                                        <th className="px-8 py-5 border-r border-gray-50">Builder Name</th>
                                                        <th className="px-8 py-5 border-r border-gray-50">Project Type</th>
                                                        <th className="px-8 py-5 border-r border-gray-50">Status</th>
                                                        <th className="px-8 py-5 border-r border-gray-50">View Site</th>
                                                        <th className="px-8 py-5">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={7} className="px-8 py-20 text-center">
                                                            <div className="flex flex-col items-center gap-4 opacity-40">
                                                                <Building2 size={40} className="text-gray-200" />
                                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No Projects Found</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                                        <LayoutDashboard size={80} className="text-gray-200" />
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-black uppercase tracking-tight">Section Coming Soon</h3>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Project Addition in Progress</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeSidebarItem === 'view-responses' ? (
                            <div className="space-y-12 animate-fade-in-up">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Contact/Responses</h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Inbound Property Leads</p>
                                    </div>
                                </div>

                                <div className="bg-[#F8FAFC] rounded-[40px] p-12 flex flex-col items-start justify-start text-left space-y-6 border border-gray-100 shadow-inner min-h-[400px]">
                                    <div className="space-y-6 max-w-2xl">
                                        <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                                            You will not be able to view the responses as currently you do not have any active paid package.
                                        </p>
                                        <div className="space-y-2">
                                            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                                                To view responses, please get your package renewed.
                                            </p>
                                            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                                                contact your <span className="text-[#ff3d3d] font-bold cursor-pointer hover:underline">Account Manager</span> or customer care at <span className="text-[#ff3d3d] font-bold">9350 543210 Now!</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (activeSidebarItem === 'leads-management' || activeSidebarItem === 'viewed-leads') ? (
                            <div className="space-y-12 animate-fade-in-up">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">
                                            {activeSidebarItem === 'leads-management' ? 'Leads Management' : 'Viewed Leads'}
                                        </h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Property Inquiries</p>
                                    </div>
                                </div>

                                <div className="bg-[#F8FAFC] rounded-[40px] p-12 flex flex-col items-center justify-center text-center space-y-6 border border-gray-100 shadow-inner min-h-[400px]">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50">
                                        <Lock size={32} className="text-[#2FED9A]" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-500 font-bold text-[15px]">
                                            Please subscribe package to view leads.
                                        </p>
                                        <button
                                            onClick={() => handleTabChange('subscriptions')}
                                            className="text-[#2FED9A] font-black text-[15px] hover:underline transition-all"
                                        >
                                            click here to view subscription packages.
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : activeSidebarItem === 'conversation' ? (
                            <div className="space-y-12 animate-fade-in-up h-full flex flex-col">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Contact/Responses</h2>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Communication Hub</p>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col md:flex-row gap-10 pt-4">
                                    {/* Chat List Side */}
                                    <div className="w-full md:w-96 space-y-6">
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider relative inline-block pb-1">
                                                Chat History
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2FED9A]"></div>
                                            </h3>
                                        </div>

                                        <div className="relative group">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="w-full h-12 bg-white border border-gray-200 rounded-lg pl-6 pr-12 text-sm outline-none focus:border-[#2FED9A] transition-all placeholder:text-gray-300"
                                            />
                                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-teal-500 transition-colors" size={18} />
                                        </div>

                                        <div className="flex-1 flex flex-col items-center justify-center pt-20 text-center space-y-2 opacity-50">
                                            <MessageSquare size={40} className="text-gray-200" />
                                            <p className="text-sm font-bold text-gray-400">No Conversations yet.</p>
                                        </div>
                                    </div>

                                    {/* Chat Detail Side (Empty State) */}
                                    <div className="flex-1 hidden md:flex items-center justify-center border-l border-gray-50 bg-gray-50/20 rounded-[30px]">
                                        <div className="text-center space-y-4 opacity-20">
                                            <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm">
                                                <MessageSquare size={32} className="text-gray-300" />
                                            </div>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Select a chat to view messages</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                                <LayoutDashboard size={80} className="text-gray-200" />
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Section Coming Soon</h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Agent Content Implementation in Progress</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 5. Premium Footer */}
            <footer className="mt-40 bg-[#1a1c21] text-white pt-24 pb-12">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                        {/* Company Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-2xl text-white">Hunt</span>
                                <MapPin className="text-red-600 fill-red-600" size={24} />
                                <span className="font-bold text-2xl text-white">roperty</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                Hunt Property offers end-to-end real estate expertise with a refined, client-first approach, delivering buying, leasing, Vaastu, design, and investment solutions with precision and trust.
                            </p>
                            <div className="flex items-center gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                    <div key={idx} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all cursor-pointer text-gray-400">
                                        <Icon size={18} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                            </div>
                        </div>

                        {/* Subscription */}
                        <div className="lg:col-span-3">
                            <div className="bg-white/5 rounded-[40px] p-10 md:p-14 border border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-teal-500/20"></div>
                                <div className="relative z-10 space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black uppercase tracking-tight">Subscribe to Market Watch</h3>
                                        <p className="text-sm text-gray-400 font-medium">Subscribe for market insights, exclusive listings, trends, updates, and opportunities.</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                                        />
                                        <button className="bg-[#2FED9A] text-[#1a1c21] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(47,237,154,0.4)] transition-all active:scale-95">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                                <div>
                                    <h4 className="text-teal-500 font-black text-[11px] uppercase tracking-widest mb-8">Essentials</h4>
                                    <ul className="space-y-4 text-sm text-gray-400 font-bold">
                                        <li className="hover:text-white transition-colors cursor-pointer">Apply for Home Loan</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Advertise with Us</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">All Property</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Sitemap</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-teal-500 font-black text-[11px] uppercase tracking-widest mb-8">Company</h4>
                                    <ul className="space-y-4 text-sm text-gray-400 font-bold">
                                        <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Testimonials</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Blogs</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Customer Care</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-teal-500 font-black text-[11px] uppercase tracking-widest mb-8">Company Policy</h4>
                                    <ul className="space-y-4 text-sm text-gray-400 font-bold">
                                        <li className="hover:text-white transition-colors cursor-pointer">Terms and Conditions</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Refund and Cancellation Policy</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Package Policy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-teal-500 font-black text-[11px] uppercase tracking-widest mb-8">Property Services</h4>
                                    <ul className="space-y-4 text-sm text-gray-400 font-bold">
                                        <li className="hover:text-white transition-colors cursor-pointer">Search Property</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Search Projects</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Search Agents</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Home loan calculator</li>
                                        <li className="hover:text-white transition-colors cursor-pointer">Property Cost Calculator</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <div className="flex gap-6">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span className="text-gray-300">RERA: UPRERAAGT20169</span>
                        </div>
                        <div>
                            © Copyright 2017 - Huntproperty.com - All Rights Reserved
                        </div>
                        <div>
                            Powered By : Catalyst E Page PVT LTD
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default DeveloperDashboardView;
