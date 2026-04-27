import React from 'react';
import { ArrowLeft, MapPin, Building2, Layout, Filter } from 'lucide-react';
import { Project, Builder } from '../types';
import MinimalistProjectCard from './MinimalistProjectCard';
import BuilderProjectCard from './BuilderProjectCard';

interface BuilderProjectsViewProps {
    builder: Builder;
    projects: Project[];
    onBack: () => void;
    onProjectSelect: (project: Project) => void;
}

const BuilderProjectsView: React.FC<BuilderProjectsViewProps> = ({ builder, projects, onBack, onProjectSelect }) => {
    // Group projects by location (City/State)
    const groupedProjects = projects.reduce((acc, project) => {
        const location = project.location.split(',').pop()?.trim() || project.location;
        if (!acc[location]) {
            acc[location] = [];
        }
        acc[location].push(project);
        return acc;
    }, {} as Record<string, Project[]>);

    const locations = Object.keys(groupedProjects);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={onBack}
                            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden">
                                {builder.brandLogo ? (
                                    <img src={builder.brandLogo} alt={builder.name} className="w-8 h-8 object-contain" />
                                ) : (
                                    <Building2 size={20} className="text-primary" />
                                )}
                            </div>
                            <div>
                                <h1 className="text-xl font-display font-bold text-slate-900">{builder.name}</h1>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Portfolio Portfolio</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-4">
                        <div className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100 flex items-center gap-2">
                            <Layout size={14} /> {projects.length} Total Projects
                        </div>
                        <div className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100 flex items-center gap-2">
                            <MapPin size={14} /> {locations.length} Locations
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
                {/* Intro */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
                        Project <span className="text-primary">Discovery</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg">
                        Explore {builder.name}'s diverse real estate portfolio carefully categorized by prime locations across the country.
                    </p>
                </div>

                {/* Location Sections */}
                {locations.length > 0 ? (
                    <div className="space-y-24">
                        {locations.map(location => (
                            <section key={location} className="space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="h-px bg-slate-100 flex-1" />
                                    <div className="flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
                                        <MapPin className="text-primary" size={16} />
                                        <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{location}</span>
                                    </div>
                                    <div className="h-px bg-slate-100 flex-1" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {groupedProjects[location].map(project => (
                                        <MinimalistProjectCard 
                                            key={project.id} 
                                            project={project} 
                                            onClick={() => onProjectSelect(project)} 
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-100">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Filter className="text-slate-200" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No projects found in this portfolio</h3>
                        <p className="text-slate-500">Try exploring other trusted developers from the home screen.</p>
                        <button 
                            onClick={onBack}
                            className="mt-8 px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                        >
                            Return to Showcase
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default BuilderProjectsView;
