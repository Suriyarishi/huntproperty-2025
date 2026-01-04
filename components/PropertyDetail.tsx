import React, { useState, useEffect } from 'react';
import { 
  MapPin, Bed, Bath, Square, BrainCircuit, Image as ImageIcon, 
  Sparkles, Phone, MessageCircle, Calendar, Loader2, 
  ChevronRight, ChevronLeft, CheckCircle2, X, Droplets, 
  Zap, ShieldAlert, Car, User, Share2, Heart, 
  Dribbble, Utensils, School, PlusSquare, BookOpen, 
  Activity, Home, Info, Coins, Calculator, ArrowRight
} from 'lucide-react';
import { Property } from '../types';
import { analyzePropertyPhoto, getInvestmentAnalysis } from '../services/geminiService';
import AIImageStudio from './AIImageStudio';
import MapView from './MapView';
import PropertyCard from './PropertyCard';

interface Props {
  property: Property;
  onBack: () => void;
  similarProperties: Property[];
  onPropertySelect: (p: Property) => void;
}

const PropertyDetail: React.FC<Props> = ({ property, onBack, similarProperties, onPropertySelect }) => {
  const [activeAiSection, setActiveAiSection] = useState<'none' | 'analysis' | 'visualize'>('none');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [investmentData, setInvestmentData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
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

  const handleAnalyze = async () => {
    if (analysis) return;
    setLoading(true);
    try {
      const response = await fetch(property.imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = (reader.result as string).split(',')[1];
        const result = await analyzePropertyPhoto(base64data);
        setAnalysis(result);
        const invResult = await getInvestmentAnalysis(`${property.title} in ${property.location}`);
        setInvestmentData(invResult);
        setLoading(false);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
        setLoading(false);
    }
  };

  const nextSlide = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32 pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
            <span className="hover:text-primary cursor-pointer">Uttar Pradesh</span>
            <ChevronRight size={10} />
            <span className="hover:text-primary cursor-pointer">Gautam Buddh Nagar</span>
            <ChevronRight size={10} />
            <span className="hover:text-primary cursor-pointer">Sector 104</span>
            <ChevronRight size={10} />
            <span className="text-slate-900">Sector 100</span>
        </div>

        {/* Banner Carousel Section */}
        <div className="mb-8 relative group">
            <div className="relative h-[400px] md:h-[500px] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Slides */}
                <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, idx) => (
                        <div key={idx} className="min-w-full h-full">
                            <img src={slide} className="w-full h-full object-cover" alt={`Slide ${idx + 1}`} />
                        </div>
                    ))}
                </div>
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between pointer-events-none">
                    <button 
                        onClick={prevSlide}
                        className="p-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 text-white hover:bg-primary hover:text-slate-900 transition-all pointer-events-auto opacity-0 group-hover:opacity-100 shadow-xl"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="p-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 text-white hover:bg-primary hover:text-slate-900 transition-all pointer-events-auto opacity-0 group-hover:opacity-100 shadow-xl"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Counter Badge */}
                <div className="absolute bottom-6 left-8 px-4 py-2 bg-black/50 backdrop-blur-md rounded-xl text-white text-xs font-bold border border-white/10 flex items-center gap-2">
                    <ImageIcon size={14} /> {currentSlide + 1} / {slides.length} Photos
                </div>

                {/* Main Action Overlays */}
                <div className="absolute top-6 right-6 flex gap-3">
                    <button className="p-3 rounded-full bg-white shadow-lg text-slate-700 hover:text-red-500 transition-all"><Heart size={20} /></button>
                    <button className="p-3 rounded-full bg-white shadow-lg text-slate-700 hover:text-primary transition-all"><Share2 size={20} /></button>
                </div>
            </div>

            {/* Interactive Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {slides.map((slide, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`relative w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${currentSlide === idx ? 'border-primary scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                        <img src={slide} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                    </button>
                ))}
            </div>
        </div>

        {/* Main Header Card - Updated Layout */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-8">
            <div className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-slate-50 pb-8 mb-8 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest">Featured</span>
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-emerald-700 text-[10px] font-black uppercase tracking-widest">Resale</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-display font-black text-slate-900 leading-tight">
                            {property.title}
                        </h1>
                        <p className="text-slate-500 text-base font-medium mt-2 flex items-center gap-2">
                            <MapPin size={18} className="text-primary" /> Sector 104, Gautam Buddh Nagar, Noida
                        </p>
                    </div>
                    <div className="text-left lg:text-right bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 w-full lg:w-auto">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Expected Price</p>
                        <div className="text-4xl font-display font-black text-red-600">{property.price}</div>
                        <p className="text-[10px] font-bold text-slate-400 mt-1 italic">Exclusive Listing on HuntProperty</p>
                    </div>
                </div>

                {/* Summary Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-6">
                    {[
                        { label: 'Bedrooms', val: property.beds, icon: Bed },
                        { label: 'Bathrooms', val: property.baths, icon: Bath },
                        { label: 'Balcony', val: '5', icon: Home },
                        { label: 'Super Area', val: '2850 Sqft', icon: Square },
                        { label: 'Status', val: 'Ready to move', icon: CheckCircle2 },
                        { label: 'Facing', val: 'North-East', icon: MapPin }
                    ].map(item => (
                        <div key={item.label} className="flex items-start gap-3">
                            <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400"><item.icon size={20} /></div>
                            <div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{item.label}</span>
                                <span className="text-sm font-bold text-slate-900">{item.val}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-50">
                    <button className="flex-1 lg:flex-none px-10 py-4 bg-red-600 text-white rounded-2xl font-black text-sm hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-600/20 active:scale-95">
                        <Phone size={18} /> Get Phone No.
                    </button>
                    <button className="flex-1 lg:flex-none px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95">
                        <MessageCircle size={18} /> Contact Owner
                    </button>
                </div>
            </div>
        </div>

        {/* Detailed Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                
                {/* Property Description */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                    <h3 className="text-xl font-display font-black text-slate-900 mb-6 border-b border-slate-50 pb-4 flex items-center gap-2">
                        <Info size={20} className="text-primary" /> Detailed Overview
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
                        {[
                            { label: 'Description', val: 'Located at prime location of Noida' },
                            { label: 'Property For', val: 'Sell' },
                            { label: 'State', val: 'Uttar Pradesh' },
                            { label: 'City', val: 'Gautam Buddh Nagar' },
                            { label: 'Locality', val: 'Sector 104' },
                            { label: 'Landmark', val: 'Near Pathways School' },
                            { label: 'Possession Status', val: 'Ready to move' },
                            { label: 'Age of Construction', val: 'Less than 5 Years' },
                            { label: 'Maintenance Charges', val: '₹ 2 /sqft' },
                            { label: 'Brokerage', val: '₹ 347,500' },
                            { label: 'Unit Number', val: 'B-1102' },
                            { label: 'Total Floors', val: '20' }
                        ].map(item => (
                            <div key={item.label} className="flex justify-between py-2.5 border-b border-slate-50 last:border-0">
                                <span className="text-slate-500 font-bold">{item.label}</span>
                                <span className="text-slate-900 font-black text-right">{item.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI & Insights Section */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-white/10 shadow-2xl text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                     <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="p-3 bg-white/10 rounded-2xl text-primary backdrop-blur-xl"><Sparkles size={24} /></div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white tracking-tight">Gemini 3.0 Market Intelligence</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Next-Gen Real Estate Analysis</p>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
                         <button onClick={() => { setActiveAiSection(activeAiSection === 'analysis' ? 'none' : 'analysis'); handleAnalyze(); }} className={`p-6 text-left rounded-2xl border-2 transition-all ${activeAiSection === 'analysis' ? 'bg-primary text-slate-900 border-primary shadow-2xl scale-105' : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                             <div className="mb-4 flex items-center justify-between">
                                <Sparkles size={24} />
                                {activeAiSection === 'analysis' && <CheckCircle2 size={16} />}
                             </div>
                             <h4 className="font-black text-lg mb-1">Investment Score</h4>
                             <p className={`text-xs ${activeAiSection === 'analysis' ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>Market predictions, ROI forecasting & neighborhood appreciation trends.</p>
                         </button>
                         <button onClick={() => setActiveAiSection(activeAiSection === 'visualize' ? 'none' : 'visualize')} className={`p-6 text-left rounded-2xl border-2 transition-all ${activeAiSection === 'visualize' ? 'bg-primary text-slate-900 border-primary shadow-2xl scale-105' : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                             <div className="mb-4 flex items-center justify-between">
                                <BrainCircuit size={24} />
                                {activeAiSection === 'visualize' && <CheckCircle2 size={16} />}
                             </div>
                             <h4 className="font-black text-lg mb-1">AI Interior Renovator</h4>
                             <p className={`text-xs ${activeAiSection === 'visualize' ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>Digitally restyle interiors instantly using our advanced visualization engine.</p>
                         </button>
                     </div>
                     {activeAiSection === 'analysis' && (
                         <div className="bg-white/5 p-8 rounded-3xl border border-white/10 animate-fade-in-up backdrop-blur-xl relative z-10">
                             {loading ? (
                                <div className="flex flex-col items-center justify-center py-10 gap-4 text-primary">
                                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                    <p className="text-sm font-bold tracking-widest uppercase">Consulting AI Knowledge Base...</p>
                                </div>
                             ) : (
                                <div className="text-sm leading-relaxed prose prose-invert max-w-none">
                                    <div className="flex items-center gap-2 text-primary font-black mb-4 uppercase tracking-widest text-[10px]">
                                        <Activity size={12} /> Live Market Assessment
                                    </div>
                                    <p>{investmentData || analysis}</p>
                                </div>
                             )}
                         </div>
                     )}
                     {activeAiSection === 'visualize' && (
                         <div className="bg-white p-2 rounded-[2rem] animate-fade-in-up h-[450px] relative z-10 shadow-inner">
                             <AIImageStudio initialImage={property.imageUrl} />
                         </div>
                     )}
                </div>

                {/* Amenities Grid */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                    <h3 className="text-xl font-display font-black text-slate-900 mb-8 border-b border-slate-50 pb-4">World-Class Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
                        {[
                            { icon: Car, label: 'Secure Parking' },
                            { icon: Dribbble, label: "Kid's Club" },
                            { icon: Home, label: 'Grand Lounge' },
                            { icon: Utensils, label: 'Fine Dining' },
                            { icon: Activity, label: 'Olympic Gym' },
                            { icon: School, label: 'Top Schools' },
                            { icon: PlusSquare, label: '24/7 Medical' },
                            { icon: Droplets, label: 'Infinity Pool' },
                            { icon: Info, label: 'Water Reserve' },
                            { icon: ShieldAlert, label: 'AI Security' },
                            { icon: Zap, label: 'Backup Grid' },
                            { icon: BookOpen, label: 'Study Hub' }
                        ].map(amenity => (
                            <div key={amenity.label} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-slate-900 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300 border border-slate-100">
                                    <amenity.icon size={30} strokeWidth={1.2} />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter text-center group-hover:text-slate-900 transition-colors">{amenity.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location Insight */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                    <h3 className="text-xl font-display font-black text-slate-900 mb-8 flex items-center gap-2">
                        <MapPin size={22} className="text-primary" /> Neighborhood Intelligence
                    </h3>
                    <div className="h-[450px] rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                        <MapView location={property.location} />
                    </div>
                </div>
            </div>

            {/* Sidebar Contact */}
            <div className="space-y-6">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl sticky top-24">
                    <div className="mb-8 border-b border-slate-50 pb-6">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3">Property Owner</p>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-slate-400 shadow-inner">
                                <User size={32} />
                            </div>
                            <div>
                                <h4 className="font-display font-black text-slate-900 text-xl tracking-tight">Tejasvi Kapoor</h4>
                                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1 uppercase tracking-widest">
                                    <CheckCircle2 size={12} /> Verified Seller
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl space-y-6 border border-slate-100">
                        <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                            <Calendar size={14} className="text-primary" /> Inquire About Unit
                        </h5>
                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                <input type="text" defaultValue="RISHI KESAVAN S K" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 pl-11 text-xs font-black text-slate-900 outline-none focus:border-primary transition-all" />
                            </div>
                            <div className="relative">
                                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                <input type="email" defaultValue="klnmca6@gmail.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 pl-11 text-xs font-black text-slate-900 outline-none focus:border-primary transition-all" />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                <input type="tel" defaultValue="+91 9003486509" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 pl-11 text-xs font-black text-slate-900 outline-none focus:border-primary transition-all" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Interested As</label>
                             <div className="flex bg-white rounded-xl p-1.5 border border-slate-200">
                                 <button onClick={() => setUserType('individual')} className={`flex-1 py-2.5 text-[10px] font-black rounded-lg transition-all ${userType === 'individual' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>Individual</button>
                                 <button onClick={() => setUserType('dealer')} className={`flex-1 py-2.5 text-[10px] font-black rounded-lg transition-all ${userType === 'dealer' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>Dealer</button>
                             </div>
                        </div>

                        <button className="w-full py-4 bg-primary text-slate-900 rounded-2xl font-black text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-2">
                            Connect Instantly <ArrowRight size={18} />
                        </button>
                        
                        <p className="text-[9px] text-slate-400 text-center leading-relaxed font-medium px-4">
                            By clicking connect you agree to HuntProperty's <span className="underline cursor-pointer hover:text-slate-600">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-slate-600">User Terms</span>.
                        </p>
                    </div>

                    {/* Additional Sidebar Info */}
                    <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-bold">Maintenance</span>
                            <span className="text-slate-900 font-black">₹ 2 /sqft</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-bold">Booking Amount</span>
                            <span className="text-slate-900 font-black">₹ 3.47 Lac</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-bold">RERA Reg.</span>
                            <span className="text-emerald-600 font-black">UPRERA9023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Similar Properties Section */}
        <div className="mt-24 border-t border-slate-100 pt-20">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <span className="text-primary font-black uppercase tracking-widest text-xs">Recommendations</span>
                    <h3 className="text-4xl font-display font-black text-slate-900 mt-2">Discover <span className="text-emerald-600">Similar</span> Gems</h3>
                </div>
                <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-slate-900 text-slate-900 font-black text-xs hover:bg-slate-900 hover:text-white transition-all">
                    View All Matches <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarProperties.map(p => (
                    <div key={p.id} className="h-[400px]">
                        <PropertyCard property={p} onClick={() => onPropertySelect(p)} />
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Gallery Modal - Polished */}
      {isGalleryOpen && (
          <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-3xl flex items-center justify-center animate-in fade-in duration-300">
              <button 
                onClick={() => setIsGalleryOpen(false)} 
                className="absolute top-8 right-8 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-all z-[110]"
              >
                  <X size={28} />
              </button>
              
              <div className="absolute top-8 left-8 text-white">
                  <div className="font-display font-black text-2xl mb-1">Gallery View</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">{property.title}</div>
              </div>

              <div className="relative w-full max-w-7xl px-4 flex items-center justify-center group/modal">
                <button 
                    onClick={prevSlide} 
                    className="absolute left-4 md:left-8 p-6 rounded-full bg-white/5 text-white hover:bg-primary hover:text-slate-900 transition-all border border-white/10 shadow-2xl z-10"
                >
                    <ChevronLeft size={40} />
                </button>
                
                <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(47,237,154,0.15)] bg-slate-900">
                    <img src={slides[currentSlide]} alt="Full Gallery" className="w-full h-full object-contain" />
                </div>
                
                <button 
                    onClick={nextSlide} 
                    className="absolute right-4 md:right-8 p-6 rounded-full bg-white/5 text-white hover:bg-primary hover:text-slate-900 transition-all border border-white/10 shadow-2xl z-10"
                >
                    <ChevronRight size={40} />
                </button>

                {/* Modal Thumbnails */}
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex gap-3 overflow-x-auto no-scrollbar p-4 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10">
                    {slides.map((s, i) => (
                        <button 
                            key={i} 
                            onClick={() => setCurrentSlide(i)}
                            className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${currentSlide === i ? 'border-primary scale-110' : 'border-transparent opacity-40'}`}
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

// Helper components for missing icons
const ExternalLink = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const ChevronDown = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

export default PropertyDetail;