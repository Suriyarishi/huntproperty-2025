
import React, { useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, BrainCircuit, Image as ImageIcon, Sparkles, Phone, MessageCircle, Calendar, Loader2, ChevronRight, ChevronLeft, CheckCircle2, X, Droplets, Zap, ShieldAlert, Car, User } from 'lucide-react';
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

  const DETAILS = {
    rent: "₹ 7,000",
    brokerage: "₹ 7,000",
    address: "Sector 23 Gurgaon, Dharam Colony, Palam Vihar Extension",
    landmark: "Metro station",
    status: "Ready to move",
    transactionType: "New Property",
    floor: "1 (Out of 3 Floors)",
    furnishing: "Furnished",
    facing: "East",
    ownership: "Leasehold",
    superArea: "600 Sqft",
    carpetArea: "500 Sqft",
    builtUpArea: "550 Sqft",
    age: "New Construction",
    lift: "No",
    parking: "Covered",
    description: "Newly Constructed Rooms | Studio Appartments | Separate independent flats. Location: Dharam Colony, Palam Vihar Extension, Gurugram, Haryana."
  };

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
        const invResult = await getInvestmentAnalysis(`${property.title} in ${property.location} priced at ${property.description}`);
        setInvestmentData(invResult);
        setLoading(false);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
        console.error(e);
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
    <div className="min-h-screen bg-[#f8fafc] pb-32">
      <div className="relative h-[60vh] lg:h-[70vh] w-full bg-slate-900 group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <div className="absolute inset-0">
                <img src={slides[currentSlide]} alt="Property" className="w-full h-full object-cover transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90" />

            <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prevSlide} className="p-4 bg-white/10 backdrop-blur-xl hover:bg-primary hover:text-slate-900 rounded-full text-white pointer-events-auto transition-all border border-white/10"><ChevronLeft size={24} /></button>
                <button onClick={nextSlide} className="p-4 bg-white/10 backdrop-blur-xl hover:bg-primary hover:text-slate-900 rounded-full text-white pointer-events-auto transition-all border border-white/10"><ChevronRight size={24} /></button>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 flex items-center gap-2">
                 <ImageIcon size={16} /> View Gallery ({slides.length})
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-3 mb-4 animate-fade-in-up">
                        <span className="px-4 py-1.5 rounded-full bg-primary text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg">For Rent</span>
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white text-xs font-bold uppercase tracking-wider border border-white/20 flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-primary" /> Verified
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight tracking-tight animate-fade-in-up delay-75">
                        1 BHK Independent Flat
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-white/90 animate-fade-in-up delay-150">
                        <span className="text-3xl md:text-4xl text-primary font-display font-bold">{DETAILS.rent}<span className="text-sm font-medium text-white/70 ml-1">/mo</span></span>
                        <div className="h-8 w-px bg-white/20 hidden md:block"></div>
                        <span className="flex items-center gap-2 text-lg font-medium"><MapPin size={20} className="text-primary" /> Gurugram, Haryana</span>
                    </div>
                </div>
            </div>
      </div>

      {isGalleryOpen && (
          <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-200">
              <button onClick={() => setIsGalleryOpen(false)} className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
                  <X size={24} />
              </button>
              <div className="absolute top-6 left-6 text-white font-bold bg-black/50 px-4 py-2 rounded-full border border-white/10">
                  {currentSlide + 1} / {slides.length}
              </div>
              <button onClick={prevSlide} className="absolute left-4 md:left-8 p-4 rounded-full bg-white/10 text-white hover:bg-primary hover:text-slate-900 transition-all border border-white/10">
                  <ChevronLeft size={32} />
              </button>
              <img src={slides[currentSlide]} alt="Slide" className="max-w-full max-h-[85vh] object-contain shadow-2xl" />
              <button onClick={nextSlide} className="absolute right-4 md:right-8 p-4 rounded-full bg-white/10 text-white hover:bg-primary hover:text-slate-900 transition-all border border-white/10">
                  <ChevronRight size={32} />
              </button>
          </div>
      )}

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
         <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-8 grid grid-cols-3 gap-8 mb-12">
             <div className="flex flex-col items-center justify-center gap-2 border-r border-slate-200/60">
                 <Bed className="text-slate-400" size={32}/> 
                 <div className="text-center">
                     <span className="text-3xl font-display font-bold text-slate-900 block">1</span>
                     <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Bedroom</span>
                 </div>
             </div>
             <div className="flex flex-col items-center justify-center gap-2 border-r border-slate-200/60">
                 <Bath className="text-slate-400" size={32}/> 
                 <div className="text-center">
                     <span className="text-3xl font-display font-bold text-slate-900 block">1</span>
                     <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Bathroom</span>
                 </div>
             </div>
             <div className="flex flex-col items-center justify-center gap-2">
                 <Square className="text-slate-400" size={32}/> 
                 <div className="text-center">
                     <span className="text-3xl font-display font-bold text-slate-900 block">{DETAILS.superArea}</span>
                     <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Super Area</span>
                 </div>
             </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                 <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Property Specifications</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                        {[
                            { label: 'Carpet Area', val: DETAILS.carpetArea },
                            { label: 'Status', val: DETAILS.status },
                            { label: 'Transaction', val: DETAILS.transactionType },
                            { label: 'Floor', val: DETAILS.floor },
                            { label: 'Furnished', val: DETAILS.furnishing },
                            { label: 'Facing', val: DETAILS.facing },
                            { label: 'Ownership', val: DETAILS.ownership },
                            { label: 'Brokerage', val: DETAILS.brokerage }
                        ].map(item => (
                            <div key={item.label} className="space-y-1">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                                <p className="font-bold text-slate-900">{item.val}</p>
                            </div>
                        ))}
                     </div>
                 </div>

                 <div className="glass-panel p-8 rounded-3xl bg-white">
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Property Description</h3>
                     <p className="text-slate-600 leading-relaxed text-lg">{DETAILS.description}</p>
                 </div>

                 <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-slate-100 text-slate-700 font-medium text-center hover:shadow-md transition-all">
                            <div className="p-3 bg-emerald-50 rounded-full text-emerald-600"><Droplets size={24}/></div>
                            <span className="text-sm font-bold">24 Hour Water Supply</span>
                        </div>
                         <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-slate-100 text-slate-700 font-medium text-center hover:shadow-md transition-all">
                            <div className="p-3 bg-red-50 rounded-full text-red-500"><ShieldAlert size={24}/></div>
                            <span className="text-sm font-bold">Firefighting Equipment</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-slate-100 text-slate-700 font-medium text-center hover:shadow-md transition-all">
                            <div className="p-3 bg-amber-50 rounded-full text-amber-500"><Zap size={24}/></div>
                            <span className="text-sm font-bold">Power Backup</span>
                        </div>
                         <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-slate-100 text-slate-700 font-medium text-center hover:shadow-md transition-all">
                            <div className="p-3 bg-emerald-50 rounded-full text-emerald-600"><Car size={24}/></div>
                            <span className="text-sm font-bold">Car Parking</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-white/10 shadow-2xl text-white overflow-hidden relative">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                     <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="p-2 bg-white/10 rounded-lg text-primary backdrop-blur"><Sparkles size={20} /></div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white">Gemini Intelligence</h3>
                            <p className="text-slate-400 text-sm">Unlock deeper insights about this property</p>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-4 mb-8 relative z-10">
                         <button onClick={() => { setActiveAiSection(activeAiSection === 'analysis' ? 'none' : 'analysis'); handleAnalyze(); }} className={`p-6 text-left rounded-2xl border transition-all group ${activeAiSection === 'analysis' ? 'bg-primary text-slate-900 border-primary' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}>
                             <Sparkles className={`mb-4 transition-transform group-hover:scale-110 ${activeAiSection === 'analysis' ? 'text-slate-900' : 'text-primary'}`} />
                             <h4 className="font-bold text-lg mb-1">Investment Analysis</h4>
                             <p className={`text-sm ${activeAiSection === 'analysis' ? 'text-slate-800' : 'text-slate-400'}`}>Market value prediction & ROI analysis.</p>
                         </button>
                         <button onClick={() => setActiveAiSection(activeAiSection === 'visualize' ? 'none' : 'visualize')} className={`p-6 text-left rounded-2xl border transition-all group ${activeAiSection === 'visualize' ? 'bg-primary text-slate-900 border-primary' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}>
                             <BrainCircuit className={`mb-4 transition-transform group-hover:scale-110 ${activeAiSection === 'visualize' ? 'text-slate-900' : 'text-primary'}`} />
                             <h4 className="font-bold text-lg mb-1">AI Renovator</h4>
                             <p className={`text-sm ${activeAiSection === 'visualize' ? 'text-slate-800' : 'text-slate-400'}`}>Redesign interiors instantly.</p>
                         </button>
                     </div>
                     {activeAiSection === 'analysis' && (
                         <div className="bg-white/10 p-6 rounded-2xl border border-white/10 animate-fade-in-up backdrop-blur-md relative z-10">
                             {loading ? (
                                <div className="flex flex-col items-center justify-center py-8 gap-3 text-primary">
                                    <Loader2 className="animate-spin" size={32} />
                                    <p className="font-medium text-white">Analyzing market data with Gemini 3 Pro...</p>
                                </div>
                             ) : (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h4 className="text-primary font-bold text-lg border-b border-white/10 pb-2 mb-3">Market Assessment</h4>
                                    <p>{investmentData || analysis}</p>
                                </div>
                             )}
                         </div>
                     )}
                     {activeAiSection === 'visualize' && (
                         <div className="bg-white p-2 rounded-2xl border border-white/10 animate-fade-in-up shadow-inner h-[500px] relative z-10">
                             <AIImageStudio initialImage={property.imageUrl} />
                         </div>
                     )}
                </div>

                 <div>
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Location Context</h3>
                     <div className="h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
                         <MapView location={property.location} />
                     </div>
                 </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl sticky top-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                            <User size={32} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Owner</p>
                            <h4 className="font-display font-bold text-slate-900 text-xl">Tejasvi Kapoor</h4>
                            <button className="text-xs font-bold text-primary mt-1 hover:underline flex items-center gap-1">
                                <Phone size={12} /> Get Phone No.
                            </button>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl space-y-4 border border-slate-100">
                        <h5 className="font-bold text-slate-900">Contact Owner</h5>
                        <input type="text" defaultValue="RISHI KESAVAN S K" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                        <input type="email" defaultValue="klnmca6@gmail.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                        <input type="tel" defaultValue="9003486509" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                        <div className="space-y-2">
                             <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interested In</label>
                             <div className="flex bg-white rounded-lg p-1 border border-slate-200">
                                 <button onClick={() => setUserType('individual')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${userType === 'individual' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>Individual</button>
                                 <button onClick={() => setUserType('dealer')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${userType === 'dealer' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>Dealer</button>
                             </div>
                        </div>
                        <button className="w-full py-3.5 bg-primary text-slate-900 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-2 mt-2">Contact Now</button>
                    </div>
                </div>
            </div>
         </div>

         <div className="mt-20 border-t border-slate-200 pt-16">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-10">Similar Properties</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {similarProperties.map(p => (
                    <div key={p.id} className="h-[450px]">
                        <PropertyCard property={p} onClick={() => onPropertySelect(p)} />
                    </div>
                ))}
            </div>
         </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 z-40 pointer-events-none">
           <div className="max-w-4xl mx-auto pointer-events-auto">
                <div className="bg-slate-900/90 backdrop-blur-xl text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-between gap-6">
                    <div className="hidden md:block pl-4">
                         <p className="text-xs text-gray-400 font-bold uppercase">Monthly Rent</p>
                         <p className="text-2xl font-display font-bold text-primary">{DETAILS.rent}</p>
                    </div>
                    <div className="flex flex-1 gap-3 md:justify-end overflow-x-auto no-scrollbar">
                        <button className="flex-1 md:flex-none px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"><MessageCircle size={18} /> WhatsApp</button>
                        <button className="flex-1 md:flex-none px-8 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"><Calendar size={18} /> Schedule Visit</button>
                        <button className="flex-1 md:flex-none px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/20 whitespace-nowrap"><MessageCircle size={18} /> Contact Owner</button>
                    </div>
                </div>
           </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
