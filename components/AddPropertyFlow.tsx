
import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Upload, Check, MapPin, 
  Shield, Wifi, Car, Sun, Trees, Coffee, 
  Sparkles, Building, Landmark, TreePine, 
  ChevronRight, AlertCircle, Info, Home,
  Layers, Ruler, IndianRupee, Camera, 
  Dribbble, Utensils, School, PlusSquare, 
  Droplets, Zap, ShieldAlert, BookOpen, Activity, UserCircle,
  HelpCircle, CheckCircle2, Navigation, Square, Wand2,
  Building2, Palmtree, Store, Factory, Briefcase,
  Clock, Sprout, Warehouse, Ticket, UtensilsCrossed, Monitor,
  Compass, Bed, Bath, Layout, Target, Tag, Calendar, Key,
  ShieldCheck, ArrowUpRight, ChevronDown, ListFilter, DollarSign,
  Users, Repeat, Tv, Refrigerator, Wind, Droplet
} from 'lucide-react';

// Helper components
const Loader2 = ({ className, size }: { className?: string, size?: number }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

interface AddPropertyFlowProps {
  onCancel: () => void;
  onComplete: () => void;
}

type Step = 1 | 2 | 3 | 4;
type PropertyCategory = 'Residential' | 'Commercial' | 'Agriculture';

const PROPERTY_STRUCTURE: Record<PropertyCategory, { label: string, icon: any, types: { id: string, label: string, icon: any }[] }> = {
  Residential: {
    label: 'Residential',
    icon: Home,
    types: [
      { id: 'house-kothi', label: 'House or Kothi', icon: Home },
      { id: 'multi-story', label: 'Multi-Story Apartment', icon: Building2 },
      { id: 'builder-floor', label: 'Builder Floor', icon: Layers },
      { id: 'villa', label: 'Villa', icon: Landmark },
      { id: 'penthouse', label: 'Penthouse', icon: Sun },
      { id: 'studio-apt', label: 'Studio Apartment', icon: UserCircle },
      { id: 'plot-land', label: 'Plot/Land', icon: Palmtree },
      { id: 'flats', label: 'Flats', icon: Building },
      { id: 'service-apt', label: 'Service Apartment', icon: Coffee },
      { id: 'duplex', label: 'Duplex', icon: Layers },
    ]
  },
  Commercial: {
    label: 'Commercial',
    icon: Store,
    types: [
      { id: 'comm-land', label: 'Commercial Land', icon: Palmtree },
      { id: 'office-space', label: 'Office Space', icon: Briefcase },
      { id: 'shop', label: 'Shop', icon: Store },
      { id: 'showroom', label: 'Showroom', icon: Monitor },
      { id: 'warehouse', label: 'Warehouse/Godown', icon: Warehouse },
      { id: 'ind-land', label: 'Industrial Land', icon: Factory },
      { id: 'ind-building', label: 'Industrial Building', icon: Building2 },
      { id: 'ind-shed', label: 'Industrial Shed', icon: Shield },
      { id: 'it-space', label: 'IT Space', icon: Zap },
      { id: 'hostel-pg', label: 'Hostal/PG', icon: Users },
      { id: 'food-court', label: 'Food Court', icon: Utensils },
      { id: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed },
      { id: 'banquet-hall', label: 'Banquet Hall', icon: Sparkles },
      { id: 'cinema', label: 'Cineplex/Cinema Hall', icon: Ticket },
    ]
  },
  Agriculture: {
    label: 'Agriculture',
    icon: Sprout,
    types: [
      { id: 'farm-house', label: 'Farm House', icon: Home },
      { id: 'agri-land', label: 'Agricultural Land', icon: Sprout },
      { id: 'farm-land', label: 'Farm Land', icon: TreePine },
    ]
  }
};

const AMENITIES_LIST = [
  { id: 'parking', label: 'Car Parking', icon: Car },
  { id: 'playground', label: "Kid's Playground", icon: Dribbble },
  { id: 'clubhouse', label: 'Club House', icon: Home },
  { id: 'restaurants', label: 'Restaurants', icon: Utensils },
  { id: 'gym', label: 'Fitness Gym', icon: Activity },
  { id: 'school', label: 'School', icon: School },
  { id: 'hospital', label: 'Hospital', icon: PlusSquare },
  { id: 'pool', label: 'Swimming Pool', icon: Droplets },
  { id: 'water', label: '24 Hour Water Supply', icon: Info },
  { id: 'fire', label: 'Firefighting Equipment', icon: ShieldAlert },
  { id: 'backup', label: 'Power Backup', icon: Zap },
  { id: 'yoga', label: 'Yoga', icon: UserCircle },
  { id: 'library', label: 'Library', icon: BookOpen },
];

const FURNISHING_DETAILS = [
  'Cupboards', 'Study Table', 'AC', 'Geyser', 'Washing Machine', 'Wifi', 'Fridge', 'Cooler', 'TV'
];

const PHOTO_TABS = [
  'Exterior View', 'Living Room', 'Bedrooms', 'Bathrooms', 
  'Kitchen', 'Floor Plan', 'Master Plan', 'Location', 'MapOthers'
];

const FACING_OPTIONS = ['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West'];
const OWNERSHIP_OPTIONS = ['Freehold', 'Leasehold', 'Co-operative Society', 'Power of Attorney'];
const AGE_OPTIONS = ['New Construction', 'Less than 5 Years', '5-10 Years', '10-20 Years', '20+ Years'];

const AddPropertyFlow: React.FC<AddPropertyFlowProps> = ({ onCancel, onComplete }) => {
  const [step, setStep] = useState<Step>(1);
  const [activePhotoTab, setActivePhotoTab] = useState('Exterior View');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('Residential');
  
  const [formData, setFormData] = useState({
    // Step 1
    propertyName: '',
    propertyFor: 'Sell' as 'Sell' | 'Rent',
    propertyType: 'house-kothi',
    description: '',
    // Step 2
    state: 'Please Select',
    city: '--Select--',
    locality: '',
    address: '',
    landmark: '',
    buildingName: '',
    bedrooms: '3',
    bathrooms: '2',
    balconies: '1',
    finishingStatus: 'Ready to move',
    pantry: 'no',
    floorNumber: '',
    totalFloors: '',
    floorsAllowed: '',
    openSides: '2',
    facing: '--Select--',
    storeRoom: 'no',
    furnishingDetails: [] as string[],
    servantRoom: 'no',
    carParking: 'yes',
    lift: 'yes',
    superArea: '',
    builtUpArea: '',
    carpetArea: '',
    transactionType: 'New Property',
    possessionStatus: 'Ready to move',
    availableFrom: '',
    ageOfConstruction: 'New Construction',
    ownershipType: 'Freehold',
    unitNumber: '',
    price: '',
    bookingAmount: '',
    maintenance: '',
    brokerage: '0',
    // Step 3
    amenities: [] as string[],
    // Step 4
    spamCheck: ''
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4) as Step);
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const toggleAmenity = (id: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(id) 
        ? prev.amenities.filter(a => a !== id) 
        : [...prev.amenities, id]
    }));
  };

  const toggleFurnishing = (item: string) => {
    setFormData(prev => ({
      ...prev,
      furnishingDetails: prev.furnishingDetails.includes(item)
        ? prev.furnishingDetails.filter(i => i !== item)
        : [...prev.furnishingDetails, item]
    }));
  };

  const generateAiDescription = () => {
    setIsAiGenerating(true);
    setTimeout(() => {
        const desc = `Luxury ${formData.propertyType} located in a prime city center. This property features premium finishing, modern layout, and high-end security. Perfect for ${formData.propertyFor === 'Sell' ? 'investors seeking high ROI' : 'families looking for a convenient urban lifestyle'}.`;
        setFormData({ ...formData, description: desc });
        setIsAiGenerating(false);
    }, 1500);
  };

  const stepsInfo = [
    { label: 'Basic DNA', icon: UserCircle },
    { label: 'Intelligence Profile', icon: MapPin },
    { label: 'Experience Hub', icon: Sparkles },
    { label: 'Visual Capture', icon: Camera }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-32 px-4 md:px-6 selection:bg-primary selection:text-slate-900">
      <div className="max-w-[95rem] mx-auto">
        
        {/* Futuristic Step Indicator */}
        <div className="mb-12 relative flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
             <button onClick={onCancel} className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:text-red-600 transition-all text-slate-500">
                <ArrowLeft size={24} />
             </button>
             <div>
                <h1 className="text-3xl font-display font-black text-slate-950 tracking-tight uppercase">New Property Portal</h1>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Step {step} of 4</p>
             </div>
          </div>

          <div className="flex items-center gap-4 bg-white/50 backdrop-blur-xl p-2 rounded-[2rem] border border-white shadow-2xl">
             {stepsInfo.map((s, idx) => {
               const active = step >= idx + 1;
               const current = step === idx + 1;
               const Icon = s.icon;
               return (
                 <div key={idx} className="flex items-center">
                    <div className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-700 ${active ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]' : 'bg-slate-100 text-slate-400'} ${current ? 'scale-110 ring-4 ring-red-600/10' : ''}`}>
                       <Icon size={22} />
                       {current && <div className="absolute -bottom-8 whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-red-600 animate-fade-in-up">{s.label}</div>}
                    </div>
                    {idx < stepsInfo.length - 1 && <div className={`w-8 h-1 mx-2 rounded-full transition-colors duration-700 ${active ? 'bg-red-600' : 'bg-slate-200'}`}></div>}
                 </div>
               );
             })}
          </div>
        </div>

        {/* Form Panel */}
        <div className="glass-panel rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden flex flex-col relative transition-all duration-500 min-h-[850px]">
          
          <div className="p-8 md:p-16 flex-1 overflow-y-auto no-scrollbar">
            {step === 1 && (
              <div className="space-y-16 animate-fade-in-up">
                 <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Listing Headline</label>
                            <input 
                                type="text" 
                                value={formData.propertyName}
                                onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                                placeholder="e.g. 4BHK Sky Villa with Private Pool" 
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-8 py-6 text-slate-950 outline-none focus:border-red-600 focus:bg-white focus:ring-8 focus:ring-red-600/5 transition-all font-display font-bold text-2xl placeholder:text-slate-300 shadow-inner" 
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { id: 'Sell', label: 'Transfer Ownership', sub: 'Sell Property', icon: DollarSign },
                                { id: 'Rent', label: 'Passive Income', sub: 'Rent Property', icon: Clock }
                            ].map((type) => (
                                <button 
                                key={type.id}
                                onClick={() => setFormData({...formData, propertyFor: type.id as any})}
                                className={`relative p-8 rounded-[2.5rem] border-2 text-left transition-all duration-500 group overflow-hidden ${formData.propertyFor === type.id ? 'bg-slate-950 border-slate-950 text-white shadow-2xl scale-[1.03]' : 'bg-white border-slate-100 text-slate-400 hover:border-red-600/20'}`}
                                >
                                    <type.icon size={100} className={`absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform ${formData.propertyFor === type.id ? 'text-white' : 'text-slate-950'}`} />
                                    <div className={`w-12 h-12 rounded-2xl mb-4 flex items-center justify-center transition-colors ${formData.propertyFor === type.id ? 'bg-red-600 text-white' : 'bg-slate-50'}`}>
                                        <type.icon size={20} />
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{type.sub}</p>
                                    <h4 className="text-xl font-display font-black leading-tight">{type.label}</h4>
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compelling Description</label>
                                <button 
                                    onClick={generateAiDescription}
                                    disabled={isAiGenerating}
                                    className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-primary rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-lg active:scale-95 disabled:opacity-50"
                                >
                                    {isAiGenerating ? <Loader2 className="animate-spin" size={12} /> : <Wand2 size={12} />}
                                    AI Magic Write
                                </button>
                            </div>
                            <textarea 
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-8 py-6 text-slate-950 outline-none focus:border-red-600 focus:bg-white transition-all font-medium text-lg h-64 resize-none shadow-inner"
                                placeholder="Tell us what makes this property special..."
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                         <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight">Property Taxonomy</h3>
                            <div className="flex gap-2">
                                {(Object.keys(PROPERTY_STRUCTURE) as PropertyCategory[]).map(cat => (
                                    <button 
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-slate-950 text-primary' : 'bg-slate-100 text-slate-400'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                         </div>
                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {PROPERTY_STRUCTURE[activeCategory].types.map(type => {
                                const Icon = type.icon;
                                const active = formData.propertyType === type.id;
                                return (
                                    <button 
                                        key={type.id}
                                        onClick={() => setFormData({...formData, propertyType: type.id})}
                                        className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] border-2 transition-all ${active ? 'bg-red-50 border-red-600 text-red-600 shadow-xl' : 'bg-white border-slate-50 text-slate-400 hover:bg-slate-50'}`}
                                    >
                                        <Icon size={28} strokeWidth={1.5} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">{type.label}</span>
                                    </button>
                                );
                            })}
                         </div>
                    </div>
                 </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-20 animate-fade-in-up pb-10">
                 
                 {/* Section 1: Location */}
                 <div className="space-y-10">
                    <div className="flex items-center gap-5 border-l-4 border-red-600 pl-6">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/10"><MapPin size={24} /></div>
                        <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Location</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { label: 'State', val: formData.state, key: 'state', options: ['Uttar Pradesh', 'Delhi', 'Haryana', 'Maharashtra', 'Karnataka'] },
                                { label: 'City', val: formData.city, key: 'city', options: ['Noida', 'Gurugram', 'New Delhi', 'Mumbai', 'Bengaluru'] },
                                { label: 'Locality', val: formData.locality, key: 'locality', placeholder: 'e.g. Sector 150' },
                                { label: 'Landmark', val: formData.landmark, key: 'landmark', placeholder: 'e.g. Near Matrix Park' },
                            ].map(field => (
                                <div key={field.label} className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">{field.label}</label>
                                    {field.options ? (
                                        <div className="relative">
                                            <select 
                                                value={field.val} 
                                                onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 appearance-none cursor-pointer"
                                            >
                                                <option disabled>{field.val}</option>
                                                {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                                            </select>
                                            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                        </div>
                                    ) : (
                                        <input 
                                            type="text" 
                                            value={field.val as string}
                                            onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                                            placeholder={field.placeholder}
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 shadow-inner"
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Address</label>
                                <textarea 
                                    value={formData.address}
                                    onChange={e => setFormData({...formData, address: e.target.value})}
                                    placeholder="Enter complete physical address..."
                                    className="w-full h-24 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 shadow-inner resize-none"
                                />
                            </div>
                        </div>
                        <div className="relative min-h-[320px] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl group bg-slate-100">
                             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Map Preview" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md px-8 py-5 rounded-[2rem] flex items-center gap-4 shadow-2xl border border-white group-hover:scale-110 transition-transform cursor-pointer">
                                    <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg"><Navigation size={20} /></div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mapping Interface</p>
                                        <p className="text-sm font-black text-slate-950 uppercase tracking-tight">Pin Precise Location</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                 </div>

                 {/* Section 2: Property Features */}
                 <div className="space-y-10 pt-10 border-t border-slate-100">
                    <div className="flex items-center gap-5 border-l-4 border-emerald-500 pl-6">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/10"><Layout size={24} /></div>
                        <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Property Features</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="lg:col-span-2 space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Building Name</label>
                            <input 
                                type="text" 
                                value={formData.buildingName} 
                                onChange={e => setFormData({...formData, buildingName: e.target.value})}
                                placeholder="Enter building or project name..."
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 shadow-inner"
                            />
                        </div>

                        {/* Interactive Grids for Bed/Bath/Balcony */}
                        {[
                            { label: 'Bedrooms', key: 'bedrooms', icon: Bed, options: ['1', '2', '3', '4', '5+'] },
                            { label: 'Bathrooms', key: 'bathrooms', icon: Bath, options: ['1', '2', '3', '4', '5+'] },
                            { label: 'Balconies', key: 'balconies', icon: Home, options: ['0', '1', '2', '3', '4+'] },
                        ].map(spec => (
                            <div key={spec.label} className="space-y-4">
                                <div className="flex items-center gap-2 text-slate-500 ml-1">
                                    <spec.icon size={16} />
                                    <label className="text-[10px] font-black uppercase tracking-widest">{spec.label}</label>
                                </div>
                                <div className="flex gap-1.5 p-1.5 bg-slate-100 rounded-2xl shadow-inner border border-slate-200">
                                    {spec.options.map(o => (
                                        <button 
                                            key={o}
                                            onClick={() => setFormData({...formData, [spec.key]: o})}
                                            className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all ${formData[spec.key as keyof typeof formData] === o ? 'bg-slate-950 text-primary shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                                        >
                                            {o}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="space-y-4">
                             <div className="flex items-center gap-2 text-slate-500 ml-1">
                                <Compass size={16} />
                                <label className="text-[10px] font-black uppercase tracking-widest">Facing</label>
                             </div>
                             <div className="relative">
                                <select 
                                    value={formData.facing} 
                                    onChange={e => setFormData({...formData, facing: e.target.value})}
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 outline-none focus:border-red-600 appearance-none cursor-pointer"
                                >
                                    <option disabled>--Select--</option>
                                    {FACING_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                             </div>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-3 gap-6 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200 shadow-inner">
                            {[
                                { label: 'Floor Number', key: 'floorNumber', placeholder: 'e.g. 11' },
                                { label: 'Total Floors', key: 'totalFloors', placeholder: 'e.g. 24' },
                            ].map(f => (
                                <div key={f.label} className="space-y-2">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">{f.label}</label>
                                    <input 
                                        type="number" 
                                        value={formData[f.key as keyof typeof formData] as string} 
                                        onChange={e => setFormData({...formData, [f.key]: e.target.value})}
                                        placeholder={f.placeholder}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-black outline-none focus:border-red-600 text-center" 
                                    />
                                </div>
                            ))}
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Pantry</p>
                                <div className="flex bg-white border border-slate-200 p-1 rounded-xl">
                                    {['Yes', 'No'].map(v => (
                                        <button key={v} onClick={() => setFormData({...formData, pantry: v.toLowerCase()})} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${formData.pantry === v.toLowerCase() ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400'}`}>{v}</button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Specialty Rooms</label>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black text-slate-500 uppercase">Store Room</p>
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        {['Yes', 'No'].map(v => (
                                            <button key={v} onClick={() => setFormData({...formData, storeRoom: v.toLowerCase()})} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${formData.storeRoom === v.toLowerCase() ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400'}`}>{v}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black text-slate-500 uppercase">Servant Room</p>
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        {['Yes', 'No'].map(v => (
                                            <button key={v} onClick={() => setFormData({...formData, servantRoom: v.toLowerCase()})} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${formData.servantRoom === v.toLowerCase() ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400'}`}>{v}</button>
                                        ))}
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Finishing Status</label>
                            <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
                                {['Ready to move', 'Under Construction'].map(status => (
                                    <button key={status} onClick={() => setFormData({...formData, finishingStatus: status})} className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase transition-all ${formData.finishingStatus === status ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400'}`}>{status}</button>
                                ))}
                            </div>
                        </div>

                        {/* Furnishing Details Multi-select */}
                        <div className="lg:col-span-4 pt-6">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-4">Furnishing Details</label>
                            <div className="flex flex-wrap gap-3">
                                {FURNISHING_DETAILS.map(item => {
                                    const active = formData.furnishingDetails.includes(item);
                                    return (
                                        <button 
                                            key={item} 
                                            onClick={() => toggleFurnishing(item)}
                                            className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${active ? 'bg-slate-900 border-slate-900 text-primary' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'}`}
                                        >
                                            {item === 'AC' && <Wind size={12} />}
                                            {item === 'TV' && <Tv size={12} />}
                                            {item === 'Fridge' && <Refrigerator size={12} />}
                                            {item === 'Geyser' && <Droplet size={12} />}
                                            {active ? <CheckCircle2 size={12} /> : <div className="w-3 h-3 rounded-full border border-slate-300" />}
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Section 3: Area */}
                 <div className="space-y-10 pt-10 border-t border-slate-100">
                    <div className="flex items-center gap-5 border-l-4 border-primary pl-6">
                        <div className="w-12 h-12 bg-primary/10 text-emerald-700 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/10"><Ruler size={24} /></div>
                        <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Area</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                        <div className="space-y-4 relative z-10">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Super Area</label>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    value={formData.superArea}
                                    onChange={e => setFormData({...formData, superArea: e.target.value})}
                                    placeholder="0.00" 
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-7 text-4xl font-display font-black text-primary outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner" 
                                />
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600 uppercase tracking-widest">Sq. Ft</span>
                            </div>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Built Up Area</label>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    value={formData.builtUpArea}
                                    onChange={e => setFormData({...formData, builtUpArea: e.target.value})}
                                    placeholder="0.00" 
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-7 text-4xl font-display font-black text-primary outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner" 
                                />
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600 uppercase tracking-widest">Sq. Ft</span>
                            </div>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Carpet Area</label>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    value={formData.carpetArea}
                                    onChange={e => setFormData({...formData, carpetArea: e.target.value})}
                                    placeholder="0.00" 
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-7 text-4xl font-display font-black text-primary outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner" 
                                />
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600 uppercase tracking-widest">Sq. Ft</span>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Section 4: Transaction Type */}
                 <div className="space-y-10 pt-10 border-t border-slate-100">
                    <div className="flex items-center gap-5 border-l-4 border-blue-500 pl-6">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/10"><Repeat size={24} /></div>
                        <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Transaction Type</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
                         <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Transaction Type</label>
                            <div className="flex bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
                                {['New Property', 'Resale'].map(t => (
                                    <button key={t} onClick={() => setFormData({...formData, transactionType: t})} className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${formData.transactionType === t ? 'bg-slate-950 text-white shadow-lg' : 'text-slate-400'}`}>{t}</button>
                                ))}
                            </div>
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Possession Status</label>
                            <div className="flex bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
                                {['Under Construction', 'Ready to move'].map(s => (
                                    <button key={s} onClick={() => setFormData({...formData, possessionStatus: s})} className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${formData.possessionStatus === s ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400'}`}>{s.split(' ')[0]}</button>
                                ))}
                            </div>
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Available From</label>
                            <div className="relative">
                                <input type="text" placeholder="MM-YYYY" value={formData.availableFrom} onChange={e => setFormData({...formData, availableFrom: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-red-600" />
                                <Calendar size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300" />
                            </div>
                         </div>
                         <div className="space-y-4">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Age of Construction</label>
                             <div className="relative">
                                <select value={formData.ageOfConstruction} onChange={e => setFormData({...formData, ageOfConstruction: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-red-600 appearance-none">
                                    {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                             </div>
                         </div>
                         <div className="space-y-4">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Infrastructure</label>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black text-slate-500 uppercase">Car Parking</p>
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        {['Yes', 'No'].map(v => (
                                            <button key={v} onClick={() => setFormData({...formData, carParking: v.toLowerCase()})} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${formData.carParking === v.toLowerCase() ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>{v}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black text-slate-500 uppercase">Lift</p>
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        {['Yes', 'No'].map(v => (
                                            <button key={v} onClick={() => setFormData({...formData, lift: v.toLowerCase()})} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${formData.lift === v.toLowerCase() ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>{v}</button>
                                        ))}
                                    </div>
                                </div>
                             </div>
                         </div>
                         <div className="space-y-4">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type of Ownership</label>
                             <div className="relative">
                                <select value={formData.ownershipType} onChange={e => setFormData({...formData, ownershipType: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-red-600 appearance-none">
                                    {OWNERSHIP_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                             </div>
                         </div>
                         <div className="space-y-4 lg:col-span-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Unit Number</label>
                            <input type="text" value={formData.unitNumber} onChange={e => setFormData({...formData, unitNumber: e.target.value})} placeholder="e.g. B-1402, Skyline Tower A" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-red-600 shadow-inner" />
                         </div>
                    </div>
                 </div>

                 {/* Section 5: Price Details */}
                 <div className="space-y-10 pt-10 border-t border-slate-100">
                    <div className="flex items-center gap-5 border-l-4 border-amber-500 pl-6">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-600/10"><DollarSign size={24} /></div>
                        <h2 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Price Details</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                         <div className="space-y-3">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Expected Price</label>
                             <div className="relative group">
                                 <IndianRupee size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-red-600 group-focus-within:scale-110 transition-transform" />
                                 <input type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="Total INR" className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] px-8 py-7 pl-14 text-3xl font-display font-black text-slate-950 outline-none focus:border-red-600 shadow-inner transition-all" />
                             </div>
                         </div>
                         <div className="space-y-3">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Booking Amount</label>
                             <div className="relative">
                                 <input type="number" value={formData.bookingAmount} onChange={e => setFormData({...formData, bookingAmount: e.target.value})} placeholder="Amount" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-6 text-xl font-bold text-slate-600 outline-none focus:border-red-600 shadow-inner" />
                                 <Tag size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                             </div>
                         </div>
                         <div className="space-y-3">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Maintenance Charges</label>
                             <div className="relative">
                                 <input type="number" value={formData.maintenance} onChange={e => setFormData({...formData, maintenance: e.target.value})} placeholder="Amount" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-6 text-xl font-bold text-slate-600 outline-none focus:border-red-600 shadow-inner" />
                                 <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[9px] font-black text-slate-400 uppercase tracking-tighter">/ Monthly</span>
                             </div>
                         </div>
                         <div className="space-y-3">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Brokerage</label>
                             <div className="relative">
                                 <input type="number" value={formData.brokerage} onChange={e => setFormData({...formData, brokerage: e.target.value})} placeholder="0" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-6 text-xl font-bold text-slate-600 outline-none focus:border-red-600 shadow-inner" />
                                 <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    <ListFilter size={14} className="text-slate-300" />
                                    <span className="text-[9px] font-black text-slate-400 uppercase">Fixed</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-16 animate-fade-in-up">
                 <div className="flex items-center gap-5 border-b border-slate-50 pb-8">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-[1.5rem] flex items-center justify-center shadow-inner"><Sparkles size={28} /></div>
                    <div>
                        <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Experience Hub</h2>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Select the amenities that define the lifestyle</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8">
                    {AMENITIES_LIST.map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.amenities.includes(item.id);
                        return (
                            <div 
                                key={item.id} 
                                className="flex flex-col items-center gap-5 group cursor-pointer" 
                                onClick={() => toggleAmenity(item.id)}
                            >
                                <div className={`relative w-24 h-24 rounded-[2.5rem] flex items-center justify-center transition-all duration-500 border-2 ${isSelected ? 'bg-slate-950 border-slate-950 text-primary shadow-2xl scale-110' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300 hover:-translate-y-1'}`}>
                                    <Icon size={36} strokeWidth={1.2} className={isSelected ? 'animate-pulse' : ''} />
                                    {isSelected && (
                                        <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1.5 shadow-lg border-2 border-white">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                    )}
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-tighter text-center leading-tight transition-colors ${isSelected ? 'text-slate-950' : 'text-slate-400 group-hover:text-slate-600'}`}>{item.label}</span>
                            </div>
                        );
                    })}
                 </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-16 animate-fade-in-up">
                 <div className="flex items-center gap-5 border-b border-slate-50 pb-8">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-[1.5rem] flex items-center justify-center shadow-inner"><Camera size={28} /></div>
                    <div>
                        <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight">Visual Capture</h2>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-1">High-quality photos increase engagement by 400%</p>
                    </div>
                 </div>

                 <div className="space-y-12">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar border-b border-slate-100 pb-2">
                        {PHOTO_TABS.map(tab => (
                        <button 
                            key={tab} 
                            onClick={() => setActivePhotoTab(tab)}
                            className={`text-[10px] font-black uppercase tracking-widest px-6 py-4 whitespace-nowrap transition-all border-b-4 ${activePhotoTab === tab ? 'text-red-600 border-red-600' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
                        >
                            {tab}
                        </button>
                        ))}
                    </div>

                    <div className="border-4 border-dashed border-slate-100 rounded-[4rem] p-24 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-white hover:border-red-600/30 transition-all cursor-pointer group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <Upload size={300} />
                        </div>
                        <div className="text-center space-y-8 relative z-10">
                            <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto text-red-600 group-hover:scale-110 transition-transform">
                                <Upload size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-slate-950 font-display font-black text-4xl uppercase tracking-tighter">Drop assets for <span className="text-red-600">{activePhotoTab}</span></h3>
                                <p className="text-slate-500 font-bold text-lg">Support for 4K Ultra-HD photography and floorplans.</p>
                            </div>
                            <button className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:shadow-primary/20 hover:text-primary transition-all active:scale-95">
                                Select Assets From System
                            </button>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">JPEG, PNG, HEIC (Max 10MB per file)</p>
                        </div>
                    </div>

                    <div className="bg-slate-950 rounded-[3rem] p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-6">
                             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-lg shadow-primary/5">
                                <ShieldCheck size={32} />
                             </div>
                             <div>
                                 <h4 className="text-white font-display font-black text-xl tracking-tight uppercase">Privacy Secured</h4>
                                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">GDPR & RERA COMPLIANT HUB</p>
                             </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                             <span className="text-xl font-display font-black text-white italic">24 + 16 =</span>
                             <input 
                                type="number" 
                                placeholder="?"
                                value={formData.spamCheck}
                                onChange={e => setFormData({...formData, spamCheck: e.target.value})}
                                className="w-24 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-2xl font-black text-primary outline-none focus:border-primary transition-all text-center" 
                             />
                             <div className="h-10 w-px bg-white/10 mx-2"></div>
                             <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">Identity <br/> Verification</p>
                        </div>
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Action Navigation Bar */}
          <div className="px-10 py-10 border-t border-slate-100 bg-white/80 backdrop-blur-xl flex justify-between items-center relative z-20">
            <button 
              onClick={handleBack} 
              disabled={step === 1} 
              className="px-12 py-5 rounded-2xl font-black text-slate-400 uppercase tracking-widest text-[10px] hover:text-slate-950 disabled:opacity-0 transition-all flex items-center gap-3 active:scale-95 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Previous Stage
            </button>
            <button 
              onClick={step < 4 ? handleNext : onComplete} 
              className="px-16 py-6 rounded-3xl bg-red-600 text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-red-600/30 hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-5"
            >
              {step < 4 ? (
                  <>Progress To Next Module <ChevronRight size={22} strokeWidth={3} /></>
              ) : (
                  <>Finalize Global Listing <CheckCircle2 size={22} strokeWidth={3} /></>
              )}
            </button>
          </div>
        </div>
        
        {/* Footer Meta */}
        <div className="mt-16 flex items-center justify-center gap-12 opacity-30">
           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div><p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">AES-256 ENCRYPTED</p></div>
           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div><p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">REAL-TIME VALIDATION</p></div>
           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div><p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">GLOBAL NODE ACCESS</p></div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyFlow;
