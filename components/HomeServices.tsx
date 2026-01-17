import React from 'react';
import { 
  Home, 
  Compass, 
  Newspaper, 
  Globe, 
  Scale, 
  Handshake, 
  UserCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface HomeServicesProps {
    onNavigate: (view: string) => void;
}

const SERVICES = [
  { 
    id: 'home-loan', 
    view: 'home-loans',
    title: 'Home Loan', 
    description: 'Flexible financing solutions for your next big investment.', 
    icon: Home, 
    theme: {
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-100',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      hoverBg: 'hover:bg-emerald-100/50'
    }
  },
  { 
    id: 'vastu', 
    view: 'vastu',
    title: 'Vastu AI', 
    description: 'Futuristic AI neural scan for energy harmony in your sanctuary.', 
    icon: Compass, 
    theme: {
      bg: 'bg-amber-50/50',
      border: 'border-amber-100',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      hoverBg: 'hover:bg-amber-100/50'
    }
  },
  { 
    id: 'property-news', 
    view: 'news-gallery',
    title: 'Market Insights', 
    description: 'Stay ahead with real-time real estate trends.', 
    icon: Newspaper, 
    theme: {
      bg: 'bg-blue-50/50',
      border: 'border-blue-100',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverBg: 'hover:bg-blue-100/50'
    }
  },
  { 
    id: 'rera-services', 
    view: 'rera',
    title: 'RERA Compliance', 
    description: 'Navigating regulatory standards with precision.', 
    icon: Globe, 
    theme: {
      bg: 'bg-purple-50/50',
      border: 'border-purple-100',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      hoverBg: 'hover:bg-purple-100/50'
    }
  },
  { 
    id: 'legal-advisory', 
    view: 'legal-advisory',
    title: 'Legal Counsel', 
    description: 'Expert legal support for secure transactions.', 
    icon: Scale, 
    theme: {
      bg: 'bg-rose-50/50',
      border: 'border-rose-100',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      hoverBg: 'hover:bg-rose-100/50'
    }
  },
  { 
    id: 'channel-partner', 
    view: 'channel-partner',
    title: 'Partner Network', 
    description: 'Exclusive spaces for investors and partners.', 
    icon: Handshake, 
    theme: {
      bg: 'bg-indigo-50/50',
      border: 'border-indigo-100',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      hoverBg: 'hover:bg-indigo-100/50'
    }
  },
  { 
    id: 'nri-center', 
    view: 'nri-center',
    title: 'NRI Center', 
    description: 'Tailored property management for global citizens.', 
    icon: UserCircle, 
    theme: {
      bg: 'bg-orange-50/50',
      border: 'border-orange-100',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      hoverBg: 'hover:bg-orange-100/50'
    }
  },
];

const HomeServices: React.FC<HomeServicesProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-8 bg-slate-900"></span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
              Premium Ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-950 leading-tight tracking-tight">
            Refined Services for <br />
            <span className="text-slate-400 font-medium">Modern Property Needs</span>
          </h2>
        </div>
        <p className="text-slate-500 text-base max-w-sm font-medium leading-relaxed">
          A collection of high-end specialized services designed to streamline your next real estate move.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service} onClick={() => onNavigate(service.view)} />
        ))}
        <div className="hidden lg:block"></div> {/* Spacer for layout balance */}
        {SERVICES.slice(4).map((service) => (
          <ServiceCard key={service.id} service={service} onClick={() => onNavigate(service.view)} />
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button 
            className="group flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-slate-800 transition-all duration-500"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Explore Full Network</span>
          <div className="w-8 h-8 rounded-full bg-primary text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any, onClick: () => void }> = ({ service, onClick }) => {
  const Icon = service.icon;
  const { bg, border, iconBg, iconColor, hoverBg } = service.theme;
  
  return (
    <div 
        onClick={onClick}
        className={`group relative h-[280px] ${bg} rounded-[2.5rem] p-8 flex flex-col justify-between border ${border} transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] ${hoverBg} hover:-translate-y-2 cursor-pointer overflow-hidden shadow-sm`}
    >
      {/* Subtle Background Accent */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${iconBg} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
      
      <div className="relative z-10 space-y-4">
        <div className={`w-14 h-14 rounded-[1.2rem] ${iconBg} flex items-center justify-center transition-all duration-500 group-hover:bg-slate-900 group-hover:scale-110 group-hover:shadow-xl`}>
          <Icon size={24} strokeWidth={1.5} className={`${iconColor} group-hover:text-primary transition-colors`} />
        </div>
        
        <div className="space-y-1.5">
          <h3 className="text-xl font-display font-bold text-slate-900 tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-600 text-[13px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75 line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
          Discovery
        </span>
        <div className={`p-2.5 rounded-full bg-white/50 border ${border} group-hover:border-slate-900 group-hover:bg-white transition-all`}>
          <ChevronRight size={14} className="text-slate-400 group-hover:text-slate-900" />
        </div>
      </div>

      {/* Hover Progress Indicator */}
      <div className={`absolute bottom-0 left-0 h-1.5 w-0 ${iconColor.replace('text', 'bg')} opacity-40 transition-all duration-700 group-hover:w-full`}></div>
    </div>
  );
};

export default HomeServices;