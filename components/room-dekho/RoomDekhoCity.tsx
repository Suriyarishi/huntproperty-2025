import React from 'react';
import { RoomDekhoView, RoomListing } from './types';
import { Map, MapPin, IndianRupee, ArrowRight } from 'lucide-react';

interface RoomDekhoCityProps {
    city: string | null;
    rooms: RoomListing[];
    onNavigate: (view: RoomDekhoView, params?: { roomId?: string, city?: string }) => void;
}

const CITIES = ['Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata'];

const RoomDekhoCity: React.FC<RoomDekhoCityProps> = ({ city, rooms, onNavigate }) => {
    
    // If no city is selected, show an index of cities
    if (!city) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Cities we cover</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">Find the perfect room or flatmate in India's top metropolitan areas.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CITIES.map(c => (
                        <div 
                            key={c}
                            onClick={() => onNavigate('city', { city: c })}
                            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-violet-200 transition-all cursor-pointer group"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{c}</h2>
                            <p className="text-slate-500 mb-6 flex items-center gap-2">
                                <MapPin size={16} /> Explore rooms
                            </p>
                            <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Show city landing page
    const cityRooms = rooms.filter(r => r.city.toLowerCase() === city.toLowerCase());

    return (
        <div className="pb-24">
            {/* City Hero */}
            <div className="bg-slate-900 py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-violet-900/20"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Rooms for rent in {city}
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Discover the best PGs, single rooms, and flatmates in {city}. Directly contact owners with zero brokerage fees. 
                    </p>
                    <button 
                        onClick={() => onNavigate('map', { city })}
                        className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full text-lg transition-all shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 mx-auto"
                    >
                        <Map size={20} />
                        Open {city} Map
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Featured in {city}</h2>
                    <button onClick={() => onNavigate('city')} className="text-slate-500 hover:text-slate-900 font-medium transition-colors">
                        Change City
                    </button>
                </div>

                {cityRooms.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center">
                        <MapPin className="mx-auto text-slate-300 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No rooms listed yet</h3>
                        <p className="text-slate-500 mb-6">Be the first to list a room in {city}!</p>
                        <button 
                            onClick={() => onNavigate('list')}
                            className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            List Your Room
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cityRooms.map(room => (
                            <div 
                                key={room.id}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col group"
                                onClick={() => onNavigate('detail', { roomId: room.id })}
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img src={room.photos[0]} alt="Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-bold text-slate-900 shadow-sm">
                                        {room.propertyType}
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div className="mb-4">
                                        <h3 className="font-bold text-xl text-slate-900 mb-1 line-clamp-1">{room.locality}</h3>
                                        <p className="text-slate-500 text-sm">For {room.occupancyPreference}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <p className="font-bold text-violet-700 text-xl flex items-center">
                                                <IndianRupee size={18} /> {room.rent.toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:border-violet-200 transition-colors">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoomDekhoCity;
