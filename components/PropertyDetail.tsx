
import React, { useState, useEffect } from 'react';
// Add missing Phone icon import
import { 
  MapPin, Bed, Bath, Square, Image as ImageIcon, 
  ChevronRight, ChevronLeft, CheckCircle2, X, Droplets, 
  Zap, Car, User, Share2, Heart, 
  Info, Calculator, ArrowRight, 
  ShieldCheck, ExternalLink, Landmark, Mail, Compass, Layers, 
  Key, Box, LayoutGrid, Maximize2, Phone
} from 'lucide-react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface Props {
  property: Property;
  onBack: () => void;
  similarProperties: Property[];
  onPropertySelect: (p: Property) => void;
}

const PropertyDetail: React.FC<Props> = ({ property, onBack, similarProperties, onPropertySelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [userType, setUserType] = useState<'individual' | 'dealer'>('individual');

  const slides = [
      property.imageUrl,
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [property]);

  const nextSlide = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const specGroups = [
    {
      items: [
        { label: 'Bedrooms', val: property.beds || '2', icon: Bed },
        { label: 'Bathrooms', val: property.baths || '2', icon: Bath },
        { label: 'Balcony', val: '1', icon: Landmark },
        { label: 'Store Room', val: 'no', icon: Box }
      ]
    },
    {
      items: [
        { label: 'Covered area', val: '--', icon: Layers },
        { label: 'Carpet area', val: property.sqft ? `${property.sqft} Sq ft` : '750 Sq ft', icon: Square },
        { label: 'Plot area', val: '--', icon: LayoutGrid },
        { label: 'Unit Code', val: `HP-${property.id}`, icon: Info }
      ]
    },
    {
      items: [
        { label: 'Status', val: '--', icon: Zap },
        { label: 'Transaction', val: 'New Property', icon: Key },
        { label: 'Floor', val: '0 (Out of 0)', icon: Layers },
        { label: 'Car Parking', val: 'yes', icon: Car }
      ]
    },
    {
      items: [
        { label: 'Furnished', val: '--', icon: Droplets },
        { label: 'Lift', val: 'no', icon: ArrowRight },
        { label: 'Ownership', val: 'Freehold', icon: ShieldCheck },
        { label: 'Facing', val: 'West', icon: Compass }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 pt-24 font-sans selection:bg-primary selection:text-slate-900">
      <div className="max-w-[100rem] mx-auto px-4 md:px-12">
        
        {/* Fututistic Banner Hero UX */}
        <div className="relative mb-12 animate-fade-in-up">
            <div className="relative h-[500px] md:h-[700px] w-full rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group bg-slate-950">
                {/* Main Visual Node */}
                <div className="absolute inset-0 flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, idx) => (
                        <div key={idx} className="min-w-full h-full">
                            <img src={slide} className="w-full h-full object-cover" alt={`Asset View ${idx + 1}`} />
                        </div>
                    ))}
                </div>
                
                {/* Glass Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none opacity-60" />
                
                {/* Immersive Navigation UX */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button onClick={prevSlide} className="p-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-primary hover:text-slate-950 transition-all pointer-events-auto shadow-2xl group/nav active:scale-90">
                        <ChevronLeft size={32} strokeWidth={2.5} className="group-hover/nav:-translate-x-1 transition-transform" />
                    </button>
                    <button onClick={nextSlide} className="p-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-primary hover:text-slate-950 transition-all pointer-events-auto shadow-2xl group/nav active:scale-90">
                        <ChevronRight size={32} strokeWidth={2.5} className="group-hover/nav:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Bottom Hub: Info & Visual Thumbnails */}
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-end justify-between gap-8 pointer-events-none">
                    <div className="space-y-4 pointer-events-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            <MapPin size={16} className="text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Ecil, Secunderabad Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-none tracking-tighter uppercase">
                            Independent <span className="text-primary">House</span>
                        </h1>
                        <p className="text-slate-300 font-medium text-lg tracking-tight">Prime Residential Asset • Ready for Transfer</p>
                    </div>

                    <div className="flex items-center gap-4 pointer-events-auto bg-slate-950/40 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/10 shadow-2xl">
                        {slides.slice(0, 4).map((slide, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 shrink-0 ${currentSlide === idx ? 'border-primary shadow-[0_0_20px_rgba(47,237,154,0.3)]' : 'border-transparent opacity-40 hover:opacity-100'}`}
                            >
                                <img src={slide} className="w-full h-full object-cover" alt="mini" />
                            </button>
                        ))}
                        <button 
                            onClick={() => setIsGalleryOpen(true)}
                            className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center text-white gap-1 hover:bg-primary hover:text-slate-900 transition-all shrink-0 group/viz"
                        >
                            <Maximize2 size={20} className="group-hover/viz:scale-110 transition-transform" />
                            <span className="text-[8px] font-black uppercase">Expand</span>
                        </button>
                    </div>
                </div>

                {/* Price Node Overlay */}
                <div className="absolute top-10 right-10 pointer-events-auto">
                    <div className="bg-red-600 px-10 py-6 rounded-[2.5rem] shadow-[0_20px_40px_rgba(220,38,38,0.3)] border border-red-500 animate-pulse-glow">
                        <p className="text-[10px] font-black text-red-100 uppercase tracking-widest mb-1">Asset Value</p>
                        <div className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none">₹ 52 Lac</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Core Asset Intelligence Dashboard */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
                
                {/* 2025 Intelligence Grid (Replacement for the old spec table) */}
                <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden">
                    <div className="bg-slate-950 px-10 py-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary"><LayoutGrid size={24} /></div>
                            <div>
                                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight leading-none">Asset Specification Matrix</h3>
                                <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] mt-2">Verified Registry Data V.2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Link Verified</span>
                        </div>
                    </div>
                    
                    <div className="p-6 md:p-10 space-y-4">
                        {specGroups.map((group, gIdx) => (
                            <div key={gIdx} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {group.items.map((item, iIdx) => (
                                    <div key={iIdx} className="bg-slate-50 border border-slate-100 p-6 rounded-[2rem] flex flex-col gap-3 group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                        <div className="flex items-center justify-between">
                                            <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors shadow-sm">
                                                <item.icon size={18} strokeWidth={1.5} />
                                            </div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-red-200 transition-colors"></div>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{item.label}</p>
                                            <p className="text-xl font-display font-black text-slate-950 uppercase tracking-tight">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Insight Blocks */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform"><Info size={160} /></div>
                        <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight border-b border-slate-50 pb-6">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shadow-inner"><Info size={24} /></div>
                            Registry Node
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Asset DNA', val: 'Prime Urban Hub' },
                                { label: 'State Node', val: 'Telangana' },
                                { label: 'Urban Grid', val: 'Secunderabad Metro' },
                                { label: 'Status Protocol', val: 'Verified Listing' }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 group cursor-default">
                                    <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest group-hover:text-red-600 transition-colors">{item.label}</span>
                                    <span className="text-slate-950 font-bold uppercase tracking-tight text-right text-xs">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl p-10 relative overflow-hidden group">
                        <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight border-b border-slate-50 pb-6">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner"><Zap size={24} /></div>
                            Infrastructure
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Car, label: 'Park Nodes', val: '1 Private' },
                                { icon: Droplets, label: 'H2O Source', val: 'Municipal' },
                                { icon: Zap, label: 'Power Bypass', val: 'Ready' },
                                { icon: User, label: 'Neural Watch', val: '24/7 Guards' }
                            ].map((spec, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <spec.icon size={14} />
                                        <span className="text-[9px] font-black uppercase tracking-widest">{spec.label}</span>
                                    </div>
                                    <p className="text-sm font-black text-slate-950 uppercase">{spec.val}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-3 text-red-600 mb-2">
                                <Calculator size={18} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Financial Synopsis</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                                "Estimated monthly sustainment is verified within standard parameters for this sector node."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Controller */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
                
                {/* Principal Node Card */}
                <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
                    <div className="p-10 border-b border-slate-50 bg-slate-950 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="relative">
                                <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center text-primary shadow-inner border border-white/20">
                                    <User size={48} />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center border-4 border-slate-950 shadow-lg">
                                    <CheckCircle2 size={16} strokeWidth={4} />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Principal Associate</p>
                                <h4 className="text-2xl font-display font-black uppercase tracking-tight leading-none">Aravind Sharma</h4>
                                <p className="text-[9px] font-bold text-primary uppercase tracking-widest mt-2 flex items-center gap-1.5">
                                   <Zap size={10} className="fill-primary" /> Platinum Partner Node
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 space-y-8">
                         <div className="space-y-4">
                            <h5 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] ml-1">Secure Protocol Handshake</h5>
                            <div className="space-y-4">
                                <div className="relative group/field">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-red-600 transition-colors" size={18} />
                                    <input type="text" placeholder="FULL NAME" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-xs font-black text-slate-950 outline-none focus:border-red-600 transition-all shadow-inner" />
                                </div>
                                <div className="relative group/field">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-red-600 transition-colors" size={18} />
                                    <input type="email" placeholder="EMAIL COORDINATES" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-xs font-black text-slate-950 outline-none focus:border-red-600 transition-all shadow-inner" />
                                </div>
                                <div className="relative group/field">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-red-600 transition-colors" size={18} />
                                    <input type="tel" placeholder="MOBILE INTERFACE" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-xs font-black text-slate-950 outline-none focus:border-red-600 transition-all shadow-inner" />
                                </div>
                            </div>
                         </div>

                         <div className="space-y-3">
                             <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Engagement Intent</label>
                             <div className="flex bg-slate-50 rounded-2xl p-1.5 border border-slate-200 shadow-inner">
                                 <button onClick={() => setUserType('individual')} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-500 ${userType === 'individual' ? 'bg-slate-950 text-primary shadow-lg' : 'text-slate-400 hover:text-slate-950'}`}>Personal</button>
                                 <button onClick={() => setUserType('dealer')} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-500 ${userType === 'dealer' ? 'bg-slate-950 text-primary shadow-lg' : 'text-slate-400 hover:text-slate-950'}`}>Associate</button>
                             </div>
                         </div>

                         <button className="w-full py-7 bg-red-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:bg-red-700 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.25)] active:scale-95 flex items-center justify-center gap-4 group">
                             Finalize Contact <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                         </button>
                         
                         <p className="text-[8px] font-black text-slate-300 uppercase text-center tracking-[0.3em]">AES-256 SECURED TRANSACTION HUB</p>
                    </div>
                </div>

                {/* Additional Utility Modules */}
                <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl space-y-6">
                    <h5 className="text-[10px] font-black text-slate-950 uppercase tracking-widest flex items-center gap-3">
                        <ExternalLink size={16} className="text-red-600" /> Global Assets Utilities
                    </h5>
                    <div className="grid grid-cols-1 gap-3">
                        <button className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-600 hover:bg-white transition-all group">
                            <div className="flex items-center gap-4">
                                <Calculator size={20} className="text-slate-400 group-hover:text-red-600" />
                                <span className="text-[10px] font-black uppercase text-slate-600 group-hover:text-slate-950 tracking-widest">Loan Intelligence</span>
                            </div>
                            <ChevronRight size={14} className="text-slate-300" />
                        </button>
                        <button className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-600 hover:bg-white transition-all group">
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={20} className="text-slate-400 group-hover:text-red-600" />
                                <span className="text-[10px] font-black uppercase text-slate-600 group-hover:text-slate-950 tracking-widest">Legal Verification</span>
                            </div>
                            <ChevronRight size={14} className="text-slate-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Neural Recommendations Slider */}
        <div className="mt-32 pt-24 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
                <div className="space-y-4">
                    <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100">Neural Recommendations</span>
                    <h3 className="text-4xl md:text-6xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">Similar <span className="text-primary italic">Genetic</span> Assets</h3>
                    <p className="text-slate-500 font-medium italic text-xl">"Properties with high feature correlation and geospatial overlap."</p>
                </div>
                <button 
                  onClick={onBack}
                  className="px-12 py-5 rounded-2xl border-2 border-slate-950 text-slate-950 font-black text-[10px] uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-4"
                >
                    Explore Hub <ChevronRight size={18} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {similarProperties.map(p => (
                    <div key={p.id} className="h-[480px]">
                        <PropertyCard property={p} onClick={() => onPropertySelect(p)} />
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Futuristic Visualization Portal */}
      {isGalleryOpen && (
          <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-3xl flex items-center justify-center animate-in fade-in duration-500 overflow-hidden">
              <button 
                onClick={() => setIsGalleryOpen(false)} 
                className="absolute top-10 right-10 p-6 rounded-full bg-white/5 text-white hover:bg-primary hover:text-slate-900 transition-all z-[110] border border-white/10 shadow-2xl"
              >
                  <X size={40} />
              </button>
              
              <div className="absolute top-10 left-10 text-white space-y-2 hidden md:block">
                  <div className="font-display font-black text-5xl uppercase tracking-tighter leading-none">Neural Visualization</div>
                  <div className="text-primary text-[12px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
                     <div className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Asset Identification: Independent House
                  </div>
              </div>

              <div className="relative w-full max-w-[90rem] px-8 flex items-center justify-center group/modal">
                <button 
                    onClick={prevSlide} 
                    className="absolute left-8 p-10 rounded-[3rem] bg-white/5 text-white hover:bg-primary hover:text-slate-900 transition-all border border-white/10 shadow-2xl z-10 opacity-0 group-hover/modal:opacity-100 -translate-x-10 group-hover/modal:translate-x-0"
                >
                    <ChevronLeft size={64} strokeWidth={2.5} />
                </button>
                
                <div className="relative aspect-video w-full rounded-[5rem] overflow-hidden shadow-[0_0_200px_rgba(47,237,154,0.15)] bg-slate-900 border border-white/5 p-2">
                    <img src={slides[currentSlide]} alt="Full Visualization" className="w-full h-full object-contain rounded-[4.5rem]" />
                </div>
                
                <button 
                    onClick={nextSlide} 
                    className="absolute right-8 p-10 rounded-[3rem] bg-white/5 text-white hover:bg-primary hover:text-slate-900 transition-all border border-white/10 shadow-2xl z-10 opacity-0 group-hover/modal:opacity-100 translate-x-10 group-hover/modal:translate-x-0"
                >
                    <ChevronRight size={64} strokeWidth={2.5} />
                </button>

                {/* Modal Precision Thumbnails */}
                <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 flex gap-6 overflow-x-auto no-scrollbar p-8 bg-slate-900/50 backdrop-blur-3xl rounded-[4rem] border border-white/10 shadow-2xl hidden md:flex">
                    {slides.map((s, i) => (
                        <button 
                            key={i} 
                            onClick={() => setCurrentSlide(i)}
                            className={`w-32 h-24 rounded-3xl overflow-hidden border-4 transition-all duration-700 shrink-0 ${currentSlide === i ? 'border-primary scale-110 shadow-[0_0_50px_rgba(47,237,154,0.4)]' : 'border-transparent opacity-20 hover:opacity-100 hover:scale-105'}`}
                        >
                            <img src={s} className="w-full h-full object-cover" alt="mini" />
                        </button>
                    ))}
                </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default PropertyDetail;
