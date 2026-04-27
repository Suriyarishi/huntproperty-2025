import React from 'react';
import { MapPin, Rocket, Heart, Eye, ArrowRight, TrendingUp } from 'lucide-react';
import { Project, CommercialProjectDetails, ResidentialProjectDetails, PlotProjectDetails, AgriculturalProjectDetails } from '../types';

interface FeaturedPropertyCardProps {
  project: Project;
  onClick: () => void;
}

const FeaturedPropertyCard: React.FC<FeaturedPropertyCardProps> = ({ project, onClick }) => {
  // Brand color
  const mintGreen = '#00E676';

  const renderCategoryData = () => {
    if (!project.details) return null;

    switch (project.type) {
      case 'Commercial': {
        const d = project.details as CommercialProjectDetails;
        return (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Assured Return %</span>
            <span className="text-slate-900 font-black text-sm">{d.assuredReturn || 'N/A'}</span>
            <div className="mt-2 text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded-full w-fit font-bold border border-primary/10">
              {d.spaceTypes?.[0]?.type || 'Office Space'}
            </div>
          </div>
        );
      }
      case 'Residential': {
        const d = project.details as ResidentialProjectDetails;
        return (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">BHK Configuration</span>
            <span className="text-slate-900 font-black text-sm">{d.accommodation?.[0]?.type || '3 BHK + 2 Toilets'}</span>
            <div className="mt-2 text-[10px] text-slate-400 font-bold">
              Expected Possession: <span className="text-slate-900">{d.expectedPossession || 'Dec 2026'}</span>
            </div>
          </div>
        );
      }
      case 'Plot': {
        const d = project.details as PlotProjectDetails;
        return (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Plot Dimensions</span>
            <span className="text-slate-900 font-black text-sm">{d.layout?.[0]?.dimensions || '10x12'}</span>
            <div className="mt-2 text-[10px] text-slate-400 font-bold">
              Infrastructure: <span className="text-slate-900 uppercase">Ready</span>
            </div>
          </div>
        );
      }
      case 'Agricultural': {
        const d = project.details as AgriculturalProjectDetails;
        return (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Village Name</span>
            <span className="text-slate-900 font-black text-sm">{d.geographic?.village || 'N/A'}</span>
            <div className="mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Fencing: <span className="text-primary">{d.siteCondition?.fencing || 'RCC'}</span>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div
      className="group relative bg-white rounded-[16px] overflow-hidden flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(0,230,118,0.1)] transition-all duration-500 border border-slate-100 cursor-pointer"
      onClick={onClick}
    >
      {/* Visual Identity & Branding */}
      <div className="relative h-64 overflow-hidden shrink-0 m-2 rounded-[12px]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Primary Badge */}
        <div className="absolute top-4 left-4">
          <div
            style={{ backgroundColor: mintGreen, boxShadow: `0 0 10px ${mintGreen}33` }}
            className="px-4 py-1.5 rounded-full flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-lg animate-pulse"
          >
            FEATURED <Rocket size={10} fill="white" />
          </div>
        </div>

        {/* Categories / Type Overlay */}
        <div className="absolute top-4 right-4">
          <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-widest">
            {project.type}
          </div>
        </div>

        {/* Location Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-1.5 mb-1.5">
            <MapPin size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-tight">{project.location}</span>
          </div>
          <h3 className="text-xl font-display font-black leading-none">{project.title}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between gap-6">
        {/* Category Data parameters */}
        <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100/50">
          {renderCategoryData()}
        </div>

        <div className="space-y-4">
          {/* Activity Metrics */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Eye size={16} className="text-slate-300" />
              <span className="text-xs font-black text-slate-500">{project.views || 0}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Heart size={16} className="fill-transparent" />
              <span className="text-xs font-black text-slate-500">{project.saves || 0}</span>
            </div>
            <div className="ml-auto flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full">
              <TrendingUp size={12} className="text-emerald-500" />
              <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">High Activity</span>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="space-y-1">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Price Starts From</span>
            <span className="text-2xl font-black text-[#1A1A1A] tracking-tighter">₹ {project.priceRange.replace('₹', '').trim()}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          style={{ backgroundColor: mintGreen }}
          className="w-full py-4 rounded-xl text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-lg shadow-[#00E676]/20 hover:shadow-[#00E676]/40 hover:-translate-y-0.5 transition-all"
        >
          View Property <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPropertyCard;
