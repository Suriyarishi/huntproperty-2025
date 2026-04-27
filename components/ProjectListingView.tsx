import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter as FilterIcon, Search, LayoutGrid, List as ListIcon, MapPin, Building2, Calendar, Maximize2, IndianRupee, ChevronRight } from 'lucide-react';
import { Project, Builder } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectListingViewProps {
    builder: Builder;
    location: string;
    category: string;
    projects: Project[];
    onBack: () => void;
    onProjectSelect: (project: Project) => void;
}

const ProjectListingView: React.FC<ProjectListingViewProps> = ({ builder, location, category, projects, onBack, onProjectSelect }) => {
    const [priceFilter, setPriceFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesPrice = priceFilter === 'all' || true; // Simplified for demo
            const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
            return matchesPrice && matchesStatus;
        });
    }, [projects, priceFilter, statusFilter]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Selection Path */}
            <div className="bg-white border-b border-slate-100 py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-8 transition-colors uppercase text-[10px] font-black tracking-widest"
                    >
                        <ArrowLeft size={16} /> Back to {location} Categories
                    </button>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                                {category} <span className="text-primary">Portfolio</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                                <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-slate-900">
                                    <Building2 size={14} className="text-primary" /> {builder.name}
                                </span>
                                <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-slate-900">
                                    <MapPin size={14} className="text-primary" /> {location}
                                </span>
                                <span className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 text-emerald-600">
                                    {filteredProjects.length} Listings Found
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <ListIcon size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
                    {/* Sticky Sidebar Filters */}
                    <aside className="lg:col-span-3 space-y-10">
                        <div className="sticky top-24 space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                                    <h3 className="text-sm font-black uppercase tracking-widest">Global Filters</h3>
                                    <FilterIcon size={16} className="text-slate-400" />
                                </div>
                                
                                {/* Price Range Select */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Budget Threshold</label>
                                    <select 
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold focus:ring-2 focus:ring-primary/20 outline-none"
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                    >
                                        <option value="all">All Budgets</option>
                                        <option value="u50">Under ₹ 50 L</option>
                                        <option value="50-1c">₹ 50 L - 1 Cr</option>
                                        <option value="1c-3c">₹ 1 Cr - 3 Cr</option>
                                        <option value="3c+">Above ₹ 3 Cr</option>
                                    </select>
                                </div>

                                {/* Possession Status Select */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Asset Status</label>
                                    <div className="space-y-2">
                                        {['Under Construction', 'Ready to Move', 'Launching Soon'].map((status) => (
                                            <button 
                                                key={status}
                                                onClick={() => setStatusFilter(statusFilter === status ? 'all' : status)}
                                                className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === status ? 'bg-primary border-primary text-slate-950' : 'bg-white border-slate-100 text-slate-500 hover:border-primary/40'}`}
                                            >
                                                {status}
                                                <div className={`w-3.5 h-3.5 rounded-full border-2 border-current`} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Card */}
                            <div className="bg-slate-950 p-8 rounded-[2rem] text-white space-y-4">
                                <Search size={24} className="text-primary mb-4" />
                                <h4 className="text-lg font-black uppercase tracking-tight">Need something Specific?</h4>
                                <p className="text-xs text-white/50 leading-relaxed font-medium">Get a personalized consultation with a portfolio manager specializing in {category} assets.</p>
                                <button className="w-full py-4 bg-primary text-slate-950 rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all">Book Consultation</button>
                            </div>
                        </div>
                    </aside>

                    {/* Project Listing Grid */}
                    <div className="lg:col-span-9">
                        {filteredProjects.length > 0 ? (
                            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-10' : 'space-y-10'}`}>
                                {filteredProjects.map(project => (
                                    <div 
                                        key={project.id} 
                                        className="animate-fade-in-up" 
                                        onClick={() => onProjectSelect(project)}
                                    >
                                        <ProjectCard project={project} onClick={() => onProjectSelect(project)} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[3rem] p-24 text-center border border-slate-100 flex flex-col items-center gap-6">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                                    <FilterIcon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Match Accuracy Zero</h3>
                                <p className="text-slate-500 max-w-sm font-medium">No results found with current filters. Try relaxing your budget or looking in adjacent locations.</p>
                                <button className="text-primary font-bold uppercase text-[10px] tracking-widest px-8 py-3 bg-primary/10 rounded-full mt-4">Reset Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectListingView;
