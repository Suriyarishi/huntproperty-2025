import React from 'react';
import { 
    Building2, Home, Map as MapIcon, 
    Trees, MapPin, IndianRupee, 
    Calendar, CheckCircle2, Ruler,
    ArrowUpRight, TrendingUp, ShieldCheck, Tag
} from 'lucide-react';
import { Project } from '../types';

interface DiscoveryPropertyCardProps {
    project: Project;
    onClick: () => void;
}

const DiscoveryPropertyCard: React.FC<DiscoveryPropertyCardProps> = ({ project, onClick }) => {
    const renderCategorySpecifics = () => {
        switch (project.type) {
            case 'Commercial':
                const comm = project.details as any;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-y border-slate-50">
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">BSP</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{comm?.bsp || '7,500/sqft'}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-primary uppercase tracking-widest">Returns</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{comm?.assuredReturn || '12% Assured'}</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 pt-1">
                            <ShieldCheck size={12} className="text-primary" />
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">RERA: {comm?.reraId || 'P0240000'}</span>
                        </div>
                    </div>
                );
            case 'Residential':
                const res = project.details as any;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-y border-slate-50">
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Config</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{res?.accommodation?.[0]?.type || '3 BHK'}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Plot Size</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{res?.plotSize || '1500 sqft'}</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 pt-1">
                            <Calendar size={12} className="text-primary" />
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Possession: {res?.expectedPossession || 'Dec 2026'}</span>
                        </div>
                    </div>
                );
            case 'Plot':
                const plot = project.details as any;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-y border-slate-50">
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Block</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{plot?.layout?.[0]?.blockName || 'Alpha Node'}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dimensions</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{plot?.layout?.[0]?.dimensions || '30x50 ft'}</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 pt-1">
                            <Tag size={12} className="text-primary" />
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Price: {plot?.pricePerUnit || '₹ 45k'} / sqyd</span>
                        </div>
                    </div>
                );
            case 'Agricultural':
                const agri = project.details as any;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-y border-slate-50">
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Khasara No</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{agri?.geographic?.khasaraNumber || '542/3'}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Category</span>
                            <p className="text-xs font-black text-[#1A1A1A]">{agri?.legal?.category || 'General'}</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 pt-1">
                            <MapIcon size={12} className="text-primary" />
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{agri?.connectivity?.mainRoad || 'Close to Highway'}</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const getIcon = () => {
        switch (project.type) {
            case 'Commercial': return Building2;
            case 'Residential': return Home;
            case 'Plot': return MapIcon;
            case 'Agricultural': return Trees;
            default: return Building2;
        }
    };

    const CategoryIcon = getIcon();

    return (
        <div 
            onClick={onClick}
            className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <img 
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800'} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase text-[#1A1A1A] tracking-widest border border-white/50 flex items-center gap-1.5">
                        <CategoryIcon size={10} className="text-primary" /> {project.type}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Starts From</p>
                    <p className="text-2xl font-black">{project.priceRange}</p>
                </div>
            </div>

            {/* content Section */}
            <div className="p-6 flex flex-col flex-1">
                <div className="space-y-1 mb-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">{project.developer}</span>
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{project.status}</span>
                        </div>
                    </div>
                    <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                    <div className="flex items-center gap-1 text-slate-400">
                        <MapPin size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-tight truncate">{project.location}</span>
                    </div>
                </div>

                {renderCategorySpecifics()}

                <button className="mt-6 w-full py-3.5 bg-slate-50 group-hover:bg-primary rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] transition-all flex items-center justify-center gap-2 border border-slate-100 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20">
                    Explore Details <ArrowUpRight size={14} />
                </button>
            </div>
        </div>
    );
};

export default DiscoveryPropertyCard;
