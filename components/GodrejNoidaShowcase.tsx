import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowRight, Sparkles, Building2, MapPin, CheckCircle2, Zap } from 'lucide-react';
import FeaturedPropertyCard from './FeaturedPropertyCard';

interface GodrejNoidaShowcaseProps {
    projects: Project[];
    onProjectSelect: (project: Project) => void;
}

const GodrejNoidaShowcase: React.FC<GodrejNoidaShowcaseProps> = ({ projects, onProjectSelect }) => {
    const [activeStatus, setActiveStatus] = useState<'All' | 'Ready to Move' | 'Under Construction' | 'Launching Soon'>('All');

    const godrejNoidaBase = projects.filter(p => p.developer === 'Godrej Builder' && p.location.includes('Noida'));
    
    const filteredProjects = activeStatus === 'All' 
        ? godrejNoidaBase 
        : godrejNoidaBase.filter(p => p.status === activeStatus);

    return (
        <section className="py-32 px-4 md:px-12 bg-[#0a0f18] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="px-5 py-2 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-primary/20 backdrop-blur-md">
                                <Sparkles size={14} className="inline mr-2 mb-0.5" /> Curated Collection
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter">
                            GODREJ <span className="text-primary text-glow">SIGNATURE</span> <br />
                            <span className="flex items-center gap-6">
                                NOIDA LIVING <div className="h-1 lg:h-2 w-24 lg:w-48 bg-primary rounded-full mt-2" />
                            </span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-xl font-medium leading-relaxed">
                            Discover a legacy of innovation and sustainability with Godrej Properties' signature developments across Noida's most strategic growth corridors.
                        </p>
                    </div>

                    {/* Interactive Filter */}
                    <div className="bg-white/5 backdrop-blur-3xl p-2 rounded-[2.5rem] border border-white/10 flex gap-2 w-fit lg:w-auto overflow-x-auto no-scrollbar">
                        {(['All', 'Ready to Move', 'Under Construction', 'Launching Soon'] as const).map((status) => (
                            <button
                                key={status}
                                onClick={() => setActiveStatus(status)}
                                className={`px-8 py-4 rounded-[2rem] font-black uppercase tracking-widest text-[10px] transition-all duration-500 whitespace-nowrap ${
                                    activeStatus === status 
                                    ? 'bg-primary text-slate-950 shadow-2xl shadow-primary/20 scale-105' 
                                    : 'text-white/40 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Layout - Enhanced for Visual Impact */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            {/* Type Badge */}
                            <div className="absolute top-6 left-6 z-20 flex gap-2">
                                <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-md border ${
                                    project.type === 'Plot'
                                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                                        : 'bg-primary/20 text-primary border-primary/30'
                                }`}>
                                    {project.type === 'Plot' ? '🏡 Residential Plot' : `🏢 ${project.type}`}
                                </span>
                            </div>
                            <div className="relative transform transition-all duration-700 hover:-translate-y-4">
                                <FeaturedPropertyCard 
                                    project={project} 
                                    onClick={() => onProjectSelect(project)} 
                                />
                            </div>
                        </div>
                    ))}
                    
                    {filteredProjects.length === 0 && (
                        <div className="col-span-2 py-40 text-center bg-white/5 rounded-[4rem] border border-dashed border-white/10 backdrop-blur-sm">
                            <Building2 size={48} className="text-white/10 mx-auto mb-6" />
                            <p className="text-white/40 font-black uppercase tracking-[0.3em] text-xs">No projects found in this category</p>
                        </div>
                    )}
                </div>

                {/* Feature Bento Grid Below */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
                    <div className="bg-white/5 backdrop-blur-md p-12 rounded-[4rem] border border-white/5 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-10 border border-white/5 group-hover:border-primary/50 transition-colors">
                            <Building2 className="text-primary" size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">Legacy of Trust</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">GODREJ Properties brings 125+ years of excellence and ethical governance to your doorstep.</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-md p-12 rounded-[4rem] border border-white/5 group hover:border-blue-400/30 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-10 border border-white/5 group-hover:border-blue-400/50 transition-colors">
                            <Sparkles className="text-blue-400" size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">Future Forward</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">Sustainable infrastructure with forest corridors, EV charging, and AI-enabled home automation.</p>
                    </div>

                    <div className="bg-primary p-12 rounded-[4rem] group hover:bg-white transition-all duration-500 relative overflow-hidden shadow-2xl shadow-primary/20">
                         <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-black/10 blur-3xl rounded-full" />
                         <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-colors">
                            <Zap className="text-primary group-hover:text-slate-950" size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-slate-950 uppercase mb-4 tracking-tight">High ROI Yield</h4>
                        <p className="text-slate-950/70 font-bold leading-relaxed">Historical capital appreciation of 14-18% annually in Godrej micro-markets across Noida.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GodrejNoidaShowcase;
