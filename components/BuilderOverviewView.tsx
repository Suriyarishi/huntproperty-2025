import React from 'react';
import { ArrowLeft, MapPin, Building2, Layout, ChevronRight, Globe, Building } from 'lucide-react';
import { Project, Builder } from '../types';

interface BuilderOverviewViewProps {
    builder: Builder;
    projects: Project[];
    onBack: () => void;
    onLocationSelect: (location: string) => void;
}

const BuilderOverviewView: React.FC<BuilderOverviewViewProps> = ({ builder, projects, onBack, onLocationSelect }) => {
    // Group projects by location (City)
    const locationStats = projects.reduce((acc, project) => {
        const location = project.location.split(',').pop()?.trim() || project.location;
        if (!acc[location]) {
            acc[location] = {
                name: location,
                count: 0,
                minPrice: Infinity,
                maxPrice: 0,
                image: project.imageUrl
            };
        }
        acc[location].count++;
        // Simple price parsing for demo
        const price = parseInt(project.priceRange.replace(/[^0-9]/g, '')) || 50; 
        if (price < acc[location].minPrice) acc[location].minPrice = price;
        if (price > acc[location].maxPrice) acc[location].maxPrice = price;
        
        return acc;
    }, {} as Record<string, { name: string; count: number; minPrice: number; maxPrice: number; image: string }>);

    const locations = Object.values(locationStats) as { name: string; count: number; minPrice: number; image: string }[];

    return (
        <div className="min-h-screen bg-white">
            {/* Builder Header */}
            <div className="bg-slate-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={builder.brandLogo} alt="" className="w-full h-full object-cover blur-2xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors uppercase text-[10px] font-black tracking-[0.2em]"
                    >
                        <ArrowLeft size={16} /> Back to Builders
                    </button>
                    
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                        <div className="w-32 h-32 bg-white rounded-[2rem] p-6 flex items-center justify-center shadow-2xl border border-white/20">
                            <img src={builder.brandLogo} alt={builder.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight">{builder.name}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md">
                                    <Building size={16} className="text-primary" />
                                    <span className="text-sm font-bold">{builder.activeProjects} Active Projects</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md">
                                    <Globe size={16} className="text-primary" />
                                    <span className="text-sm font-bold">{builder.citiesCovered} Cities Covered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-24">
                <div className="mb-16">
                    <h2 className="text-4xl font-display font-black text-slate-900 mb-4">Projects by <span className="text-primary">Location</span></h2>
                    <p className="text-slate-500 text-lg">Select a city to explore localized portfolios and exclusive developments.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc) => (
                        <div 
                            key={loc.name}
                            onClick={() => onLocationSelect(loc.name)}
                            className="group cursor-pointer relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="h-64 overflow-hidden">
                                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                            
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin size={16} className="text-primary" />
                                    <h3 className="text-2xl font-black">{loc.name}</h3>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{loc.count} Projects Available</p>
                                        <p className="text-sm font-bold">Starts ₹ {loc.minPrice} L*</p>
                                    </div>
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-slate-950 shadow-lg group-hover:scale-110 transition-transform">
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default BuilderOverviewView;
