import React from 'react';
import { ArrowLeft, Home, Building2, Layout, Sprout, ChevronRight } from 'lucide-react';
import { Project, Builder } from '../types';

interface CategorySelectionViewProps {
    builder: Builder;
    location: string;
    projects: Project[];
    onBack: () => void;
    onCategorySelect: (category: string) => void;
}

const CategorySelectionView: React.FC<CategorySelectionViewProps> = ({ builder, location, projects, onBack, onCategorySelect }) => {
    // Calculate counts for each category
    const categoryCounts = projects.reduce((acc, project) => {
        acc[project.type] = (acc[project.type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categories = [
        { id: 'Residential', name: 'Residential', icon: Home, color: 'bg-primary/10 text-primary' },
        { id: 'Commercial', name: 'Commercial', icon: Building2, color: 'bg-emerald-50 text-emerald-600' },
        { id: 'Plot', name: 'Plot', icon: Layout, color: 'bg-blue-50 text-blue-600' },
        { id: 'Agricultural', name: 'Agricultural', icon: Sprout, color: 'bg-orange-50 text-orange-600' }
    ];

    // Filter categories that have projects
    const availableCategories = categories.filter(cat => categoryCounts[cat.id] > 0);

    return (
        <div className="min-h-screen bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Navigation / Selection Breadcrumb */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div className="space-y-4">
                        <button 
                            onClick={onBack}
                            className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-8 transition-colors uppercase text-[10px] font-black tracking-widest"
                        >
                            <ArrowLeft size={16} /> Back to Locations
                        </button>
                        <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                            Select <span className="text-primary">Project Type</span>
                        </h1>
                        <p className="text-slate-500 text-lg">
                            Exploring <span className="text-slate-900 font-bold">{builder.name}</span> projects in <span className="text-slate-900 font-bold">{location}</span>.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {availableCategories.map((cat) => (
                        <div 
                            key={cat.id}
                            onClick={() => onCategorySelect(cat.id)}
                            className="group cursor-pointer bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center relative overflow-hidden"
                        >
                            {/* Decorative Background Blob */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity blur-3xl`} />
                            
                            <div className={`w-24 h-24 ${cat.color} rounded-[2rem] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/5`}>
                                <cat.icon size={48} strokeWidth={2.5} />
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">Project Type</p>
                                <h3 className="text-2xl font-black text-slate-900 uppercase">{cat.name}</h3>
                                <div className="pt-4 flex flex-col items-center gap-4">
                                    <span className="px-6 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-500 border border-slate-100 group-hover:bg-primary group-hover:text-slate-950 transition-colors">
                                        {categoryCounts[cat.id]} Properties
                                    </span>
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                        View Listings <ChevronRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySelectionView;
