import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Builder } from '../types';

interface BuilderProjectCardProps {
    builder: Builder;
    onClick: () => void;
}

const BuilderProjectCard: React.FC<BuilderProjectCardProps> = ({ builder, onClick }) => {
    return (
        <div 
            className="group bg-white rounded-[3rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col items-center text-center border border-slate-50 relative overflow-hidden"
            onClick={onClick}
        >
            {/* Logo Section */}
            <div className="w-56 h-56 rounded-full border border-slate-100 flex items-center justify-center p-12 mb-10 bg-white relative">
                {builder.brandLogo ? (
                    <img src={builder.brandLogo} alt={builder.name} className="w-full h-full object-contain" />
                ) : (
                    <Building2 className="text-primary" size={48} />
                )}
                {/* Subtle soft glow behind logo */}
                <div className="absolute inset-4 rounded-full bg-slate-50 -z-10 group-hover:scale-110 transition-transform duration-700 opacity-50" />
            </div>

            {/* Builder Info */}
            <div className="w-full space-y-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                    {builder.name}
                </h3>

                {/* Stats Row */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-50 w-full px-2">
                    <div className="text-center flex-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Total Projects</p>
                        <p className="text-xl font-black text-slate-900">195</p>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="text-center flex-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Total City</p>
                        <p className="text-xl font-black text-slate-900">6</p>
                    </div>
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-8">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                        Explore Projects
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        <ArrowRight size={20} strokeWidth={3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuilderProjectCard;
