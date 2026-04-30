
import React, { useState, useEffect, useCallback } from 'react';
import { X, MapPin, Ruler, IndianRupee, Bell, Bookmark, ArrowRight, Sparkles } from 'lucide-react';

export type PopupVariant = 'property' | 'price-drop' | 'new-listing' | 'subscription';

export interface PopupData {
    id: string;
    variant: PopupVariant;
    title: string;
    description: string;
    image?: string;
    price?: string;
    size?: string;
    location?: string;
    ctaText?: string;
    timeLabel?: string;
}

interface NotificationPopupProps {
    isOpen: boolean;
    onClose: () => void;
    data: PopupData | null;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, onClose, data }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleEsc = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [handleEsc]);

    if (!isOpen && !isVisible) return null;

    if (!data) return null;

    return (
        <div 
            className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 transition-all duration-500 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Popup Card */}
            <div 
                className={`relative w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 transform ${
                    isOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'
                }`}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all border border-white/20"
                >
                    <X size={20} />
                </button>

                {/* Image Section */}
                {data.image && (
                    <div className="relative h-64 w-full overflow-hidden">
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                        
                        {/* Overlay Badges */}
                        <div className="absolute bottom-6 left-6 flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                                <Sparkles size={12} /> {data.variant === 'price-drop' ? 'Price Dropped' : 'Exclusive Match'}
                            </span>
                        </div>
                    </div>
                )}

                {/* Content Section */}
                <div className={`p-8 ${!data.image ? 'pt-12' : 'pt-2'}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{data.timeLabel || 'Just Now'}</span>
                        <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Priority Alert</span>
                    </div>

                    <h3 className="text-3xl font-display font-black text-slate-900 leading-tight mb-3">
                        {data.title}
                    </h3>

                    <p className="text-slate-500 font-medium leading-relaxed mb-6">
                        {data.description}
                    </p>

                    {/* Property Strip */}
                    {(data.price || data.size || data.location) && (
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
                            {data.price && (
                                <div className="space-y-1">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Price</span>
                                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                                        <IndianRupee size={14} className="text-primary" /> {data.price}
                                    </span>
                                </div>
                            )}
                            {data.size && (
                                <div className="space-y-1 px-4 border-x border-slate-200">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Size</span>
                                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                                        <Ruler size={14} className="text-primary" /> {data.size}
                                    </span>
                                </div>
                            )}
                            {data.location && (
                                <div className="space-y-1">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Location</span>
                                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                                        <MapPin size={14} className="text-primary" /> {data.location}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="flex flex-col gap-3">
                        <button className="w-full py-5 rounded-2xl bg-primary hover:bg-[#25d488] text-slate-950 font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                            {data.ctaText || 'View Details'} <ArrowRight size={16} />
                        </button>
                        <div className="flex gap-3">
                            <button className="flex-1 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                                <Bookmark size={14} /> Save for later
                            </button>
                            <button 
                                onClick={onClose}
                                className="flex-1 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-400 font-bold text-[10px] uppercase tracking-widest transition-all"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>

                {/* Progress bar for auto-dismiss (optional) */}
                <div className="h-1.5 w-full bg-slate-50 overflow-hidden">
                    <div className="h-full bg-primary/20 animate-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default NotificationPopup;
