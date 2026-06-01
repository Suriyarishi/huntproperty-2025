import React from 'react';
import { RoomDekhoView, RoomListing } from './types';
import { Phone, MessageCircle, MapPin, Calendar, Users, Home, IndianRupee, Info, ShieldCheck, ArrowLeft } from 'lucide-react';

interface RoomDekhoDetailProps {
    room: RoomListing | undefined;
    onNavigate: (view: RoomDekhoView) => void;
}

const RoomDekhoDetail: React.FC<RoomDekhoDetailProps> = ({ room, onNavigate }) => {
    if (!room) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Room not found</h2>
                <button onClick={() => onNavigate('map')} className="text-violet-600 font-semibold hover:underline">
                    Back to Map
                </button>
            </div>
        );
    }

    return (
        <div className="pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button 
                    onClick={() => onNavigate('map')}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium mb-6 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Search
                </button>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="md:col-span-1 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                        <img src={room.photos[0]} alt="Room main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[400px]">
                        {room.photos.slice(1, 3).map((photo, idx) => (
                            <div key={idx} className="h-full rounded-2xl overflow-hidden">
                                <img src={photo} alt={`Room photo ${idx+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                        {room.photos.length < 3 && (
                            <div className="h-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-medium border border-slate-200">
                                No more photos
                            </div>
                        )}
                        {room.photos.length < 2 && (
                            <div className="h-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-medium border border-slate-200">
                                No more photos
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-violet-100 text-violet-800 text-sm font-bold rounded-md">{room.propertyType}</span>
                                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-bold rounded-md">For {room.occupancyPreference}</span>
                            </div>
                            <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
                                {room.locality}, {room.city}
                            </h1>
                            <p className="flex items-center gap-1 text-slate-500">
                                <MapPin size={18} /> {room.locality} Area
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-1"><IndianRupee size={14}/> Rent</p>
                                <p className="text-lg font-bold text-slate-900">₹{room.rent.toLocaleString()}<span className="text-sm text-slate-500 font-normal">/mo</span></p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1">Deposit</p>
                                <p className="text-lg font-bold text-slate-900">{room.deposit ? `₹${room.deposit.toLocaleString()}` : 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-1"><Calendar size={14}/> Available</p>
                                <p className="text-lg font-bold text-slate-900">{room.availableFrom}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-1"><Users size={14}/> Occupancy</p>
                                <p className="text-lg font-bold text-slate-900">{room.occupancyPreference}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {room.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Amenities</h3>
                            <div className="flex flex-wrap gap-3">
                                {room.amenities.map((amenity, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 flex items-center gap-2">
                                        <Home size={16} className="text-slate-400" /> {amenity}
                                    </span>
                                ))}
                                {room.amenities.length === 0 && <span className="text-slate-500 italic">No specific amenities listed.</span>}
                            </div>
                        </div>
                    </div>

                    {/* Owner Contact Card */}
                    <div className="md:col-span-1">
                        <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Contact Owner</h3>
                            <p className="text-sm text-slate-500 mb-6 flex items-center gap-1">
                                <ShieldCheck size={16} className="text-teal-600" /> Direct owner listing, no brokerage.
                            </p>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xl uppercase">
                                    {room.ownerName.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">{room.ownerName}</p>
                                    <p className="text-sm text-slate-500">Property Owner</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a 
                                    href={`tel:${room.phone}`} 
                                    className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-md"
                                >
                                    <Phone size={20} /> Call Owner
                                </a>
                                <a 
                                    href={`https://wa.me/91${room.phone}`} 
                                    target="_blank" rel="noopener noreferrer"
                                    className="w-full py-3.5 bg-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md"
                                >
                                    <MessageCircle size={20} /> Chat on WhatsApp
                                </a>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                                    <Info size={16} className="shrink-0 mt-0.5" /> 
                                    Never pay any booking amount without verifying the property in person. RoomSpot is a discovery platform and does not verify individual listings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDekhoDetail;
