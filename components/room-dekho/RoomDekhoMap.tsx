import React, { useState, useEffect } from 'react';
import { RoomDekhoView, RoomListing } from './types';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Search, MapPin, IndianRupee, BedDouble } from 'lucide-react';

// Fix for default marker icon in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconRetinaUrl: iconRetina,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom active icon
const ActiveIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


interface RoomDekhoMapProps {
    rooms: RoomListing[];
    initialCity?: string | null;
    onNavigate: (view: RoomDekhoView, params?: { roomId?: string, city?: string }) => void;
}

// Map Updater Component
const MapUpdater: React.FC<{ center: [number, number] }> = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
};

const RoomDekhoMap: React.FC<RoomDekhoMapProps> = ({ rooms, initialCity, onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState(initialCity || '');
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([20.5937, 78.9629]); // Default India
    const [mapZoom, setMapZoom] = useState(5);

    const filteredRooms = rooms.filter(room => 
        room.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
        room.locality.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        if (filteredRooms.length > 0 && !activeRoomId) {
            setMapCenter(filteredRooms[0].coordinates);
            setMapZoom(12);
        }
    }, [searchQuery]);

    const handleRoomClick = (room: RoomListing) => {
        setActiveRoomId(room.id);
        setMapCenter(room.coordinates);
        setMapZoom(14);
    };

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
            {/* Left/Bottom List Area */}
            <div className="w-full lg:w-[450px] flex flex-col bg-white border-r border-slate-200 z-10 order-2 lg:order-1 h-1/2 lg:h-full">
                <div className="p-4 border-b border-slate-200 bg-white">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search by city or locality..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all font-medium"
                        />
                    </div>
                    <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                        <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full border border-violet-100 whitespace-nowrap">Any Budget</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 whitespace-nowrap">Property Type</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 whitespace-nowrap">Gender</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {filteredRooms.length === 0 ? (
                        <div className="text-center py-12">
                            <MapPin className="mx-auto text-slate-300 mb-3" size={48} />
                            <h3 className="text-lg font-bold text-slate-900 mb-1">No rooms found</h3>
                            <p className="text-slate-500 text-sm">Try searching another area or city.</p>
                        </div>
                    ) : (
                        <p className="text-sm font-semibold text-slate-500 mb-2">{filteredRooms.length} rooms found</p>
                    )}

                    {filteredRooms.map(room => (
                        <div 
                            key={room.id}
                            id={`room-card-${room.id}`}
                            className={`flex flex-col bg-white rounded-2xl overflow-hidden border transition-all cursor-pointer hover:shadow-md ${activeRoomId === room.id ? 'border-violet-500 ring-1 ring-violet-500 shadow-md' : 'border-slate-200'}`}
                            onClick={() => handleRoomClick(room)}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={room.photos[0]} alt={room.propertyType} className="w-full h-full object-cover" />
                                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                                    {room.propertyType}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">{room.locality}, {room.city}</h3>
                                        <p className="text-sm text-slate-500 font-medium">{room.occupancyPreference} • Available {room.availableFrom}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-violet-700 flex items-center justify-end text-lg">
                                            <IndianRupee size={16} /> {room.rent.toLocaleString()}
                                        </p>
                                        <p className="text-xs text-slate-400 font-medium">/ month</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onNavigate('detail', { roomId: room.id }); }}
                                    className="w-full mt-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right/Top Map Area */}
            <div className="w-full lg:flex-1 h-1/2 lg:h-full bg-slate-100 relative order-1 lg:order-2">
                <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '100%', width: '100%', zIndex: 0 }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
                    <MapUpdater center={mapCenter} />
                    
                    {filteredRooms.map(room => (
                        <Marker 
                            key={room.id} 
                            position={room.coordinates}
                            icon={activeRoomId === room.id ? ActiveIcon : DefaultIcon}
                            eventHandlers={{
                                click: () => {
                                    handleRoomClick(room);
                                    document.getElementById(`room-card-${room.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                }
                            }}
                        >
                            <Popup className="roomdekho-popup">
                                <div className="p-1 -m-3">
                                    <img src={room.photos[0]} alt="Room" className="w-full h-24 object-cover rounded-t-lg mb-2" />
                                    <div className="px-3 pb-3">
                                        <p className="font-bold text-sm text-slate-900 m-0">₹{room.rent.toLocaleString()} /mo</p>
                                        <p className="text-xs text-slate-500 m-0 truncate">{room.locality}</p>
                                        <button 
                                            className="mt-2 w-full text-xs bg-violet-100 text-violet-700 py-1.5 rounded font-semibold"
                                            onClick={() => onNavigate('detail', { roomId: room.id })}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default RoomDekhoMap;
