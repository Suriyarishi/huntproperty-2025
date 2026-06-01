import React, { useState } from 'react';
import { RoomDekhoView } from './types';
import { Map, Zap, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface RoomDekhoHomeProps {
    onNavigate: (view: RoomDekhoView, params?: { city?: string }) => void;
}

const CITIES = [
    { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop' },
    { name: 'Bangalore', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600&auto=format&fit=crop' },
    { name: 'Delhi', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600&auto=format&fit=crop' },
    { name: 'Pune', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop' }
];

const FEATURES = [
    { title: 'Map-First Search', desc: 'Find exact room locations before you visit.', icon: Map },
    { title: 'Direct Owner Contact', desc: 'No brokerage. WhatsApp owners directly.', icon: Zap },
    { title: 'Verified Listings', desc: 'Genuine photos and transparent rent details.', icon: Shield },
    { title: 'Fast Listing', desc: 'List your spare room in under 2 minutes.', icon: CheckCircle2 }
];

const RoomDekhoHome: React.FC<RoomDekhoHomeProps> = ({ onNavigate }) => {
    const [howItWorksMode, setHowItWorksMode] = useState<'find' | 'list'>('find');

    return (
        <div className="pb-24">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wide uppercase">India's Smartest Rental Network</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight">
                        Find rooms near you.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            Zero brokerage.
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        The easiest way for students and professionals to discover PGs, single rooms, and shared spaces on an interactive map.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button 
                            onClick={() => onNavigate('map')}
                            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-lg transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
                        >
                            <Map size={20} />
                            Find Rooms on Map
                        </button>
                        <button 
                            onClick={() => onNavigate('list')}
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-lg transition-all flex items-center justify-center gap-2"
                        >
                            List Your Room Free
                        </button>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <feat.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">{feat.title}</h3>
                                <p className="text-slate-500 text-sm">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-[#111111] py-24 mt-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3 tracking-tight">How It Works</h2>
                        <p className="text-slate-400 font-medium text-sm sm:text-base">Whether you’re searching for a room or sharing one, getting started is simple.</p>
                    </div>

                    <div className="flex justify-center mb-16">
                        <div className="bg-[#1A1A1A] rounded-full p-1.5 inline-flex items-center gap-2 border border-white/5">
                            <button
                                onClick={() => setHowItWorksMode('find')}
                                className={`px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${howItWorksMode === 'find' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                I need a room
                            </button>
                            <button
                                onClick={() => setHowItWorksMode('list')}
                                className={`px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${howItWorksMode === 'list' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                I have a room
                            </button>
                        </div>
                    </div>

                    {howItWorksMode === 'find' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] hover:bg-[#222222] hover:border-white/10 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Find rooms near you</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">Browse available rooms in your area in just a tap.</p>
                            </div>
                            <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] hover:bg-[#222222] hover:border-white/10 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">View rooms on the map</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">Check rent, room type, and distance before you decide.</p>
                            </div>
                            <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] hover:bg-[#222222] hover:border-white/10 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Call the owner directly</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">No broker, no hidden charges. Connect instantly.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] hover:bg-[#222222] hover:border-white/10 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Post your room in 2 minutes</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">Add rent, photos, and your contact number in a few easy steps.</p>
                            </div>
                            <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] hover:bg-[#222222] hover:border-white/10 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Your room appears on the map</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">Nearby students and workers can discover your listing right away.</p>
                            </div>
                            <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] hover:bg-[#222222] hover:border-white/10 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Interested people call you directly</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">No middleman, no commission. Receive calls straight from interested tenants.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* City Shortcuts */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Popular Cities</h2>
                        <p className="text-slate-500">Explore top rental hubs across India.</p>
                    </div>
                    <button 
                        onClick={() => onNavigate('city')}
                        className="hidden sm:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                        View all cities <ArrowRight size={18} />
                    </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CITIES.map((city, idx) => (
                        <div 
                            key={idx}
                            onClick={() => onNavigate('map', { city: city.name })}
                            className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <img src={city.image} alt={city.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">{city.name}</h3>
                                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                    <span>Explore rooms</span>
                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomDekhoHome;
