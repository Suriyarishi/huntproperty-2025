import React from 'react';
import { RoomDekhoView } from './types';
import { MapPin, ArrowLeft, PlusCircle } from 'lucide-react';

interface RoomDekhoNavbarProps {
    onNavigate: (view: RoomDekhoView) => void;
    onExit: () => void;
    currentView: RoomDekhoView;
}

const RoomDekhoNavbar: React.FC<RoomDekhoNavbarProps> = ({ onNavigate, onExit, currentView }) => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={onExit}
                        className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                        <ArrowLeft size={18} />
                        <span className="hidden sm:inline">Back</span>
                    </button>
                    <div 
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => onNavigate('home')}
                    >
                        <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white group-hover:bg-violet-700 transition-colors shadow-inner">
                            <MapPin size={18} />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-violet-700 transition-colors">
                            RoomSpot
                        </span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => onNavigate('map')} className={`text-sm font-medium transition-colors ${currentView === 'map' ? 'text-violet-600' : 'text-slate-600 hover:text-violet-600'}`}>
                        Find Rooms
                    </button>
                    <button onClick={() => onNavigate('city')} className={`text-sm font-medium transition-colors ${currentView === 'city' ? 'text-violet-600' : 'text-slate-600 hover:text-violet-600'}`}>
                        Cities
                    </button>
                    <button onClick={() => onNavigate('blog')} className={`text-sm font-medium transition-colors ${currentView === 'blog' ? 'text-violet-600' : 'text-slate-600 hover:text-violet-600'}`}>
                        Blog
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => onNavigate('list')}
                        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-700 hover:bg-violet-100 font-semibold rounded-full text-sm transition-all shadow-sm"
                    >
                        <PlusCircle size={16} />
                        List Your Room
                    </button>
                    <button 
                        onClick={() => onNavigate('map')}
                        className="px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 font-semibold rounded-full text-sm transition-all shadow-md"
                    >
                        Search Map
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default RoomDekhoNavbar;
