
import React, { useState } from 'react';
import { 
  Bell, Check, Trash2, Bookmark, 
  MapPin, Filter, Search, ChevronDown, 
  ArrowRight, X, Clock, Sliders
} from 'lucide-react';

interface NotificationCardProps {
    id: number;
    type: string;
    title: string;
    desc: string;
    time: string;
    unread: boolean;
    image?: string;
    onDelete: (id: number) => void;
    onMarkRead: (id: number) => void;
    onView: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
    id, type, title, desc, time, unread, image, 
    onDelete, onMarkRead, onView 
}) => {
    return (
        <div 
            className={`group relative flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                unread 
                ? 'bg-white border-primary/20 shadow-sm' 
                : 'bg-slate-50/50 border-slate-100 hover:bg-white'
            }`}
        >
            {/* Unread Indicator Dot */}
            {unread && (
                <div className="absolute top-6 left-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            )}

            {/* Media / Icon */}
            <div className="relative shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <Bell size={24} />
                    </div>
                )}
                {/* Type Badge Overlay */}
                <div className={`absolute bottom-0 right-0 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-widest text-white ${
                    type === 'property' ? 'bg-emerald-500' : type === 'plan' ? 'bg-blue-500' : 'bg-slate-800'
                }`}>
                    {type}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className={`text-[15px] font-bold tracking-tight transition-colors group-hover:text-primary ${unread ? 'text-slate-900' : 'text-slate-600'}`}>
                            {title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <Clock size={10} /> {time}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                                {type === 'property' ? 'Market Alert' : 'System Update'}
                            </span>
                        </div>
                    </div>
                    
                    {/* Action Menu (Visible on Hover) */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                            onClick={(e) => { e.stopPropagation(); onMarkRead(id); }}
                            className="p-2 rounded-lg hover:bg-primary/10 text-slate-400 hover:text-primary transition-colors"
                            title="Mark as read"
                        >
                            <Check size={16} />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); onDelete(id); }}
                            className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                            title="Delete"
                        >
                            <Trash2 size={16} />
                        </button>
                        <button 
                            className="p-2 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-colors"
                            title="Save Property"
                        >
                            <Bookmark size={16} />
                        </button>
                    </div>
                </div>
                
                <p className="mt-2 text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {desc}
                </p>

                <div className="mt-4 flex items-center gap-4">
                    <button 
                        onClick={onView}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-primary text-white hover:text-slate-950 font-black text-[10px] uppercase tracking-[0.15em] transition-all flex items-center gap-2 group/btn shadow-lg shadow-slate-900/10"
                    >
                        View Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const NotificationsView: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [notifications, setNotifications] = useState([
        { 
            id: 1, 
            type: 'property', 
            title: 'Price Dropped by ₹5L', 
            desc: 'The luxury 3 BHK apartment in Godrej Tropical Isle, Sector 146 has just seen a significant price correction. This matches your saved criteria for Noida Extension.', 
            time: '12:45 PM', 
            unread: true, 
            group: 'Today',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' 
        },
        { 
            id: 2, 
            type: 'alert', 
            title: 'New Luxury Project Launch', 
            desc: 'M3M The Cullinan at Sector 94, Noida has opened for priority expressions of interest. High-growth potential for early investors.', 
            time: '10:20 AM', 
            unread: true, 
            group: 'Today',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80' 
        },
        { 
            id: 3, 
            type: 'plan', 
            title: 'Subscription Expiring Soon', 
            desc: 'Your "Premium Listing" package for Godrej Woods will expire in 48 hours. Renew now to maintain top-of-search visibility and 5x lead generation.', 
            time: 'Yesterday', 
            unread: false, 
            group: 'Yesterday' 
        },
        { 
            id: 4, 
            type: 'property', 
            title: 'Ready-to-Move-In Match', 
            desc: 'New listing: 4 BHK Independent Villa in Jaypee Wishtown. 4500 sqft with private pool. Fully furnished and ready for immediate registry.', 
            time: 'Yesterday', 
            unread: false, 
            group: 'Yesterday',
            image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80' 
        },
        { 
            id: 5, 
            type: 'alert', 
            title: 'Market Performance Report', 
            desc: 'Your property listings in Noida Sector 150 have received 450+ views this week. Download your detailed analytics report now.', 
            time: '2 days ago', 
            unread: false, 
            group: 'Earlier' 
        }
    ]);

    const handleDelete = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const handleMarkRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
    };

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    };

    const filteredNotifications = notifications.filter(n => {
        const matchesTab = activeTab === 'All' || 
                          (activeTab === 'Property Alerts' && n.type === 'property') || 
                          (activeTab === 'Plan' && n.type === 'plan');
        const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             n.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const groups = ['Today', 'Yesterday', 'Earlier'];

    return (
        <div className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                        <Bell size={12} /> Notification Center
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                        Keep Up with <span className="text-primary">Reality</span>
                    </h1>
                </div>
                <button 
                    onClick={handleMarkAllRead}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary/50 transition-all font-bold text-xs uppercase tracking-widest shadow-sm group"
                >
                    <Check size={16} className="group-hover:scale-110 transition-transform" /> Mark All as Read
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Sidebar: Filters */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                <Sliders size={16} className="text-primary" /> Advanced Filters
                            </h3>
                            <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">Reset</button>
                        </div>

                        {/* Search in Notifications */}
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={16} />
                            <input 
                                type="text" 
                                placeholder="Search alerts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none"
                            />
                        </div>

                        {/* Filter Categories */}
                        <div className="space-y-5">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Location Radius</label>
                                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs font-bold appearance-none outline-none focus:border-primary transition-all cursor-pointer">
                                    <option>Noida (All Sectors)</option>
                                    <option>Gurugram</option>
                                    <option>Greater Noida</option>
                                    <option>New Delhi</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Alert Category</label>
                                <div className="space-y-2">
                                    {['Price Drops', 'New Listings', 'Market Trends', 'Ad Packages'].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-primary focus:ring-primary cursor-pointer" defaultChecked />
                                            <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tip Card */}
                    <div className="bg-slate-900 p-8 rounded-[2rem] text-white space-y-4 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/30 transition-all duration-700"></div>
                        <h4 className="font-display font-bold text-xl leading-tight relative z-10">Upgrade to <span className="text-primary">Elite</span> for Real-time SMS Alerts</h4>
                        <p className="text-slate-400 text-xs font-medium leading-relaxed relative z-10">Never miss a price drop again. Elite members get instant WhatsApp & SMS notifications.</p>
                        <button className="w-full py-4 rounded-xl bg-primary text-slate-900 font-black text-[10px] uppercase tracking-widest relative z-10 hover:scale-105 active:scale-95 transition-all">Go Elite Now</button>
                    </div>
                </div>

                {/* Right Content: Notifications List */}
                <div className="lg:col-span-9 space-y-10">
                    {/* Tabs Navigation */}
                    <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
                        {['All', 'Property Alerts', 'Plan'].map(tab => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                                    activeTab === tab 
                                    ? 'bg-white text-slate-900 shadow-lg scale-105' 
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Grouped Notifications */}
                    <div className="space-y-12">
                        {groups.map(group => {
                            const groupNotifications = filteredNotifications.filter(n => n.group === group);
                            if (groupNotifications.length === 0) return null;

                            return (
                                <div key={group} className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{group}</h2>
                                        <div className="flex-1 h-px bg-slate-100"></div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {groupNotifications.map(notif => (
                                            <NotificationCard 
                                                key={notif.id}
                                                {...notif}
                                                onDelete={handleDelete}
                                                onMarkRead={handleMarkRead}
                                                onView={() => {}}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                        {filteredNotifications.length === 0 && (
                            <div className="py-24 text-center space-y-6 bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                                    <Bell size={40} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-slate-900 text-lg">No notifications found</h3>
                                    <p className="text-slate-500 text-sm max-w-xs mx-auto">Try adjusting your filters or search query to find what you're looking for.</p>
                                </div>
                                <button 
                                    onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
                                    className="px-8 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold text-[11px] uppercase tracking-widest hover:bg-slate-200 transition-all"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Pagination / Load More */}
                    {filteredNotifications.length > 0 && (
                        <div className="flex flex-col items-center gap-6 pt-10">
                            <button className="px-12 py-5 rounded-2xl border-2 border-slate-100 text-slate-400 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all group flex items-center gap-3">
                                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /> Load More History
                            </button>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing {filteredNotifications.length} of {notifications.length} alerts</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationsView;
