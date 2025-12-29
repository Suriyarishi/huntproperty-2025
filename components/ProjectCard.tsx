
import React from 'react';
import { MapPin, Building2, Layers, TrendingUp, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  developer: string;
  location: string;
  priceRange: string;
  units: number;
  status: 'Launching Soon' | 'Under Construction' | 'Ready to Move';
  imageUrl: string;
  completionDate: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const statusColors = {
    'Launching Soon': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    'Under Construction': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    'Ready to Move': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  };

  return (
    <div 
      className="glass-card group rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-white/40 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-1">
              <Building2 size={12} className="text-primary" />
              {project.developer}
            </div>
            <h3 className="text-white text-xl font-display font-bold">{project.title}</h3>
          </div>
          <div className="bg-primary/20 backdrop-blur-md p-2 rounded-full border border-primary/30 text-primary">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} className="text-slate-400" />
            <span className="truncate">{project.location}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Starts From</span>
              <span className="text-slate-900 font-bold">{project.priceRange}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Total Units</span>
              <span className="text-slate-900 font-bold">{project.units}+ Units</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600">
            <TrendingUp size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">High Demand</span>
          </div>
          <span className="text-xs text-slate-400 font-medium">Est. {project.completionDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
