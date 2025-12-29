
import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Upload, Check, MapPin, 
  Shield, Wifi, Car, Sun, Trees, Coffee, 
  Sparkles, Building, Landmark, TreePine, 
  ChevronRight, AlertCircle, Info
} from 'lucide-react';

interface AddPropertyFlowProps {
  onCancel: () => void;
  onComplete: () => void;
}

type MainCategory = 'Residential' | 'Commercial' | 'Agriculture';
type Step = 1 | 2 | 3 | 4 | 5;

const PROPERTY_STRUCTURE: Record<MainCategory, string[]> = {
  'Residential': [
    'House or Kothi', 'Multi-Story Apartment', 'Builder Floor', 'Villa', 
    'Penthouse', 'Studio Apartment', 'Plot/Land', 'Flats', 'Service Apartment', 'Duplex'
  ],
  'Commercial': [
    'Commercial Land', 'Office Space', 'Shop', 'Showroom', 'Warehouse/Godown', 
    'Industrial Land', 'Industrial Building', 'Industrial Shed', 'IT Space', 
    'Hostal/PG', 'Food Court', 'Restaurants', 'Banquet Hall', 'Cineplex/Cinema Hall'
  ],
  'Agriculture': [
    'Farm House', 'Agricultural Land', 'Farm Land'
  ]
};

const AMENITIES_LIST = [
  { id: 'wifi', label: 'High-Speed Wifi', icon: Wifi },
  { id: 'parking', label: 'Private Parking', icon: Car },
  { id: 'security', label: '24/7 AI Security', icon: Shield },
  { id: 'solar', label: 'Smart Solar Grid', icon: Sun },
  { id: 'garden', label: 'Vertical Garden', icon: Trees },
  { id: 'gym', label: 'Fitness Center', icon: Coffee },
];

const AddPropertyFlow: React.FC<AddPropertyFlowProps> = ({ onCancel, onComplete }) => {
  const [step, setStep] = useState<Step>(1);
  const [purpose, setPurpose] = useState<'sell' | 'rent'>('sell');
  const [category, setCategory] = useState<MainCategory>('Residential');
  const [subType, setSubType] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    city: '',
    area: '',
    beds: 1,
    baths: 1,
    amenities: [] as string[],
    images: [] as string[]
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5) as Step);
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const toggleAmenity = (id: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(id) 
        ? prev.amenities.filter(a => a !== id) 
        : [...prev.amenities, id]
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <button onClick={onCancel} className="p-3 rounded-full hover:bg-white shadow-sm transition-all text-slate-500">
                <ArrowLeft size={20} />
            </button>
            <div className="text-center">
                <h1 className="text-3xl font-display font-bold text-slate-900">List Property</h1>
                <div className="flex items-center gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <div 
                            key={s} 
                            className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-slate-200'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="w-10" />
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] bg-white/80 shadow-2xl relative overflow-hidden border border-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

            {step === 1 && (
                <div className="space-y-8 animate-fade-in-up">
                    <div className="flex justify-center">
                        <div className="bg-slate-100 p-1.5 rounded-2xl flex w-full max-w-sm shadow-inner">
                            <button onClick={() => setPurpose('sell')} className={`flex-1 py-3 rounded-xl font-bold transition-all ${purpose === 'sell' ? 'bg-white text-slate-900 shadow-md scale-105' : 'text-slate-500'}`}>Sell</button>
                            <button onClick={() => setPurpose('rent')} className={`flex-1 py-3 rounded-xl font-bold transition-all ${purpose === 'rent' ? 'bg-white text-slate-900 shadow-md scale-105' : 'text-slate-500'}`}>Rent</button>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">Property Name</label>
                            <input type="text" placeholder="e.g. Skyline Neo-Penthouse" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full glass-input rounded-2xl px-6 py-4 text-slate-900 outline-none focus:ring-4 focus:ring-primary/10 transition-all text-lg font-medium" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">AI-Optimized Description</label>
                            <textarea placeholder="Describe the lifestyle..." value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full glass-input rounded-2xl px-6 py-4 text-slate-900 outline-none h-40 resize-none transition-all" />
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-10 animate-fade-in-up">
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { id: 'Residential', icon: Building, color: 'text-slate-700 bg-slate-100' },
                            { id: 'Commercial', icon: Landmark, color: 'text-emerald-700 bg-emerald-50' },
                            { id: 'Agriculture', icon: TreePine, color: 'text-emerald-800 bg-emerald-100' }
                        ].map((cat) => (
                            <button key={cat.id} onClick={() => { setCategory(cat.id as MainCategory); setSubType(''); }} className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${category === cat.id ? 'border-primary bg-primary/5 shadow-lg scale-105' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                                <div className={`p-4 rounded-full ${cat.color}`}><cat.icon size={32} /></div>
                                <span className="font-bold text-slate-900">{cat.id}</span>
                            </button>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-700 mb-4 border-l-4 border-primary pl-4 uppercase tracking-widest text-xs">Specific Type</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {PROPERTY_STRUCTURE[category].map((type) => (
                                <button key={type} onClick={() => setSubType(type)} className={`px-4 py-3 rounded-xl border text-sm font-bold transition-all text-left flex items-center justify-between group ${subType === type ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-100 hover:border-primary'}`}>
                                    {type}{subType === type && <Check size={14} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-8 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-4">
                            <h3 className="font-bold text-slate-900">Key Parameters</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Price (₹)" className="w-full glass-input p-3 rounded-xl outline-none font-bold" />
                                <input type="text" placeholder="Area (Sq.ft)" className="w-full glass-input p-3 rounded-xl outline-none font-bold" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900">Geo Location</h3>
                            <div className="relative">
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                                <input type="text" placeholder="Search City..." className="w-full glass-input pl-12 p-3 rounded-xl outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in-up">
                    {AMENITIES_LIST.map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.amenities.includes(item.id);
                        return (
                            <button key={item.id} onClick={() => toggleAmenity(item.id)} className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${isSelected ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                                <div className={`p-3 rounded-full ${isSelected ? 'bg-primary text-slate-900' : 'bg-slate-50 text-slate-400'}`}><Icon size={24} /></div>
                                <span className={`text-sm font-bold ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {step === 5 && (
                <div className="space-y-8 animate-fade-in-up text-center">
                    <div className="border-4 border-dashed border-slate-100 rounded-[3rem] p-16 flex flex-col items-center justify-center group hover:border-primary/50 transition-all cursor-pointer bg-slate-50/50">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110"><Upload size={32} /></div>
                        <h3 className="text-xl font-bold text-slate-900">Upload Property Media</h3>
                    </div>
                </div>
            )}

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                <button onClick={handleBack} disabled={step === 1} className="px-8 py-3 rounded-xl font-bold text-slate-500 hover:text-slate-900 disabled:opacity-0 transition-all">Back</button>
                <button onClick={step < 5 ? handleNext : onComplete} className={`px-10 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl active:scale-95 ${step === 5 ? 'bg-primary text-slate-900 shadow-primary/40' : 'bg-slate-900 text-white hover:bg-primary hover:text-slate-900'}`}>
                    {step < 5 ? <>Next Step <ChevronRight size={18} /></> : <>Publish Listing <Check size={20} /></>}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyFlow;
