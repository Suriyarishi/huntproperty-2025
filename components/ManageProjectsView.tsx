import React, { useState } from 'react';
import {
    LayoutDashboard, Plus, Search, Filter,
    MoreVertical, Edit3, Trash2, ExternalLink,
    MapPin, Building2, Tag, Calendar, ChevronRight,
    AlertTriangle, X
} from 'lucide-react';

interface Project {
    id: string;
    name: string;
    category: 'Residential' | 'Commercial' | 'Agricultural';
    location: string;
    status: 'Active' | 'Under Review' | 'Draft';
    date: string;
    image: string;
    priceRange: string;
}

interface ManageProjectsViewProps {
    onAddProject: () => void;
}

const ManageProjectsView: React.FC<ManageProjectsViewProps> = ({ onAddProject }) => {
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 'PRJ-001',
            name: 'Skyline Residential Plots',
            category: 'Residential',
            location: 'Sector 150, Noida',
            status: 'Active',
            date: 'Mar 05, 2026',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400',
            priceRange: '₹85 L - ₹2.5 Cr'
        },
        {
            id: 'PRJ-002',
            name: 'Nexus Business Tower',
            category: 'Commercial',
            location: 'Cyber City, Gurugram',
            status: 'Under Review',
            date: 'Mar 02, 2026',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
            priceRange: '₹1.2 Cr - ₹5.0 Cr'
        },
        {
            id: 'PRJ-003',
            name: 'Green Valley Farms',
            category: 'Agricultural',
            location: 'Manesar, Haryana',
            status: 'Draft',
            date: 'Feb 28, 2026',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400',
            priceRange: '₹45 L - ₹1.8 Cr'
        }
    ];

    const getStatusColor = (status: Project['status']) => {
        switch (status) {
            case 'Active': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'Under Review': return 'bg-amber-50 text-amber-600 border-amber-100';
            case 'Draft': return 'bg-gray-50 text-gray-500 border-gray-100';
            default: return 'bg-gray-50 text-gray-500 border-gray-100';
        }
    };

    return (
        <div className="space-y-12 animate-fade-in-up">
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-gray-50 pb-8">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Manage Projects</h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Your Professional Portfolio</p>
                </div>
                <button
                    onClick={onAddProject}
                    className="bg-[#2FED9A] text-[#1a1c21] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                    <Plus size={16} /> Add New Project
                </button>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="relative group w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full h-14 bg-gray-50/50 border border-transparent rounded-[20px] pl-14 pr-6 text-sm outline-none focus:bg-white focus:border-teal-200 focus:shadow-xl focus:shadow-teal-500/5 transition-all font-bold placeholder:text-gray-300"
                    />
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-teal-500 transition-colors" size={18} />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="flex-1 md:flex-none">
                        <select className="h-14 bg-white border border-gray-100 rounded-[20px] px-8 text-sm font-black uppercase tracking-widest outline-none appearance-none hover:border-teal-200 transition-all cursor-pointer min-w-[180px]">
                            <option>All Categories</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Agricultural</option>
                        </select>
                    </div>
                    <button className="h-14 w-14 flex items-center justify-center bg-white border border-gray-100 rounded-[20px] text-gray-400 hover:text-teal-500 hover:border-teal-100 transition-all shadow-sm">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* Horizontal Projects List */}
            <div className="space-y-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-white rounded-[24px] border border-gray-100 p-5 flex flex-col lg:flex-row gap-6 transition-all hover:shadow-xl hover:shadow-gray-200/40 hover:border-emerald-100/50 overflow-hidden"
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-60 aspect-[4/3] lg:h-auto rounded-[18px] overflow-hidden relative shrink-0 shadow-sm">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full border backdrop-blur-md text-[9px] font-black uppercase tracking-widest ${getStatusColor(project.status)}`}>
                                {project.status}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-0.5">
                                        <h3 className="text-xl font-bold text-[#1a1c21] tracking-tight">{project.name}</h3>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                                            <MapPin size={12} className="text-gray-300" />
                                            {project.location}
                                        </div>
                                    </div>
                                    <div className="px-4 py-1.5 bg-emerald-50/50 text-emerald-600 border border-emerald-100 rounded-full text-[9px] font-black uppercase tracking-widest">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-3 border-t border-gray-50">
                                    <div className="space-y-0.5">
                                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Project ID</p>
                                        <p className="text-xs font-bold text-[#1a1c21]">{project.id}</p>
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Listed On</p>
                                        <p className="text-xs font-bold text-[#1a1c21]">{project.date}</p>
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Price Range</p>
                                        <p className="text-xs font-bold text-emerald-600">{project.priceRange}</p>
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Analytics</p>
                                        <div className="flex items-center gap-1 text-xs font-bold text-[#1a1c21]">
                                            <Plus size={10} className="text-emerald-500" /> 124 Views
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 mt-6">
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 px-5 py-2 bg-gray-50 text-[#1a1c21] rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#1a1c21] hover:text-white transition-all shadow-sm">
                                        <Edit3 size={12} /> Edit Project
                                    </button>
                                    <button 
                                        onClick={() => setProjectToDelete(project)}
                                        className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-all"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                                <button className="flex items-center gap-2 text-[#1a1c21] font-bold text-[10px] uppercase tracking-widest hover:text-emerald-500 transition-colors group">
                                    View Full Details
                                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Highlighting strip on hover */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#2FED9A] transition-transform -translate-x-full group-hover:translate-x-0"></div>
                    </div>
                ))}
            </div>

            {/* Load More or Page Info */}
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Showing 3 of 12 Projects</p>
                <button className="px-10 py-3 rounded-full border border-gray-100 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:bg-[#1a1c21] hover:text-white hover:border-[#1a1c21] transition-all">
                    Load More Projects
                </button>
            </div>


            {/* Delete Confirmation Modal */}
            {projectToDelete && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-[#1a1c21]/80 backdrop-blur-sm animate-fade-in"
                        onClick={() => setProjectToDelete(null)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl animate-scale-in">
                        <div className="p-8 space-y-8">
                            {/* Icon & Close */}
                            <div className="flex items-start justify-between">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                                    <AlertTriangle size={28} />
                                </div>
                                <button 
                                    onClick={() => setProjectToDelete(null)}
                                    className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-[#1a1c21] uppercase tracking-tight">Delete Project?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    Are you sure you want to delete <span className="font-bold text-[#1a1c21]">"{projectToDelete.name}"</span>? 
                                    This action cannot be undone and all associated data will be permanently removed.
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3 pt-2">
                                <button 
                                    onClick={() => {
                                        // Handle actual deletion logic here
                                        setProjectToDelete(null);
                                    }}
                                    className="w-full bg-[#1a1c21] text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-red-500 transition-all shadow-xl shadow-red-500/10"
                                >
                                    Confirm Deletion
                                </button>
                                <button 
                                    onClick={() => setProjectToDelete(null)}
                                    className="w-full bg-white text-gray-400 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:text-[#1a1c21] transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                        
                        {/* Status Accent */}
                        <div className="h-2 bg-red-500 w-full opacity-20"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProjectsView;
