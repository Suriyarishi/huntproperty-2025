import React from 'react';
import { MapPin, Building2, Calendar, Layout, Ruler, Tag, ArrowRight } from 'lucide-react';
import { Project, CommercialProjectDetails, ResidentialProjectDetails, PlotProjectDetails, AgriculturalProjectDetails } from '../types';

interface MinimalistProjectCardProps {
    project: Project;
    onClick: () => void;
}

const MinimalistProjectCard: React.FC<MinimalistProjectCardProps> = ({ project, onClick }) => {
    const renderTypeSpecificDetails = () => {
        switch (project.type) {
            case 'Commercial':
                const comm = project.details as CommercialProjectDetails;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Property Type</span>
                           <span className="text-slate-900 font-bold text-sm">Office/Shop</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Price / Sqft</span>
                           <span className="text-slate-900 font-bold text-sm">{comm?.bsp || 'Contact'}</span>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase bg-slate-100/50 px-3 py-1.5 rounded-lg w-fit">
                            <Tag size={10} /> RERA: {comm?.reraId || 'Pending'}
                        </div>
                    </div>
                );
            case 'Residential':
                const res = project.details as ResidentialProjectDetails;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Configuration</span>
                           <span className="text-slate-900 font-bold text-sm">2/3 BHK</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Possession</span>
                           <span className="text-slate-900 font-bold text-sm">Est. {project.completionDate}</span>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase bg-slate-100/50 px-3 py-1.5 rounded-lg w-fit">
                            <Building2 size={10} /> {res?.bsp || project.priceRange}
                        </div>
                    </div>
                );
            case 'Plot':
                const plot = project.details as PlotProjectDetails;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Block Name</span>
                           <span className="text-slate-900 font-bold text-sm">{plot?.layout[0]?.blockName || 'Main Block'}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Dimensions</span>
                           <span className="text-slate-900 font-bold text-sm">{plot?.layout[0]?.dimensions || 'Various'}</span>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase bg-slate-100/50 px-3 py-1.5 rounded-lg w-fit">
                            <Ruler size={10} /> {plot?.pricePerUnit || 'Contact Area'}
                        </div>
                    </div>
                );
            case 'Agricultural':
                const agri = project.details as AgriculturalProjectDetails;
                return (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Land Category</span>
                           <span className="text-slate-900 font-bold text-sm">{agri?.legal.category || 'General'}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                           <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Total Size</span>
                           <span className="text-slate-900 font-bold text-sm">{agri?.totalSize || 'Multiple'}</span>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase bg-slate-100/50 px-3 py-1.5 rounded-lg w-fit">
                            <Tag size={10} /> {agri?.pricing.pricePerUnit || 'Contact per Bigha'}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const statusColors = {
        'Launching Soon': 'bg-purple-500/10 text-purple-600 border-purple-200',
        'Under Construction': 'bg-amber-500/10 text-amber-600 border-amber-200',
        'Ready to Move': 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    };

    return (
        <div 
            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full"
            onClick={onClick}
        >
            <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-md ${statusColors[project.status]}`}>
                        {project.status === 'Ready to Move' ? 'Ready' : project.status === 'Under Construction' ? 'Construction' : 'Soon'}
                    </span>
                </div>
                
                <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <ArrowRight size={16} />
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="space-y-1 mb-4">
                    <h3 className="text-lg font-display font-bold text-slate-900 truncate">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin size={12} className="shrink-0" />
                        <span className="truncate">{project.location}</span>
                    </div>
                </div>

                {renderTypeSpecificDetails()}

                <div className="mt-auto pt-4 flex items-center justify-between">
                    <div>
                        <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-widest leading-none">Price Starts From</span>
                        <span className="text-slate-900 font-black text-base">{project.priceRange.split('-')[0]}</span>
                    </div>
                    <div className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
                        {project.type}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalistProjectCard;
