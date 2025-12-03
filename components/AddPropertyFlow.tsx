import React, { useState, useCallback } from 'react';
import { 
  ArrowLeft, ArrowRight, Upload, Check, MapPin, Home, 
  Shield, Wifi, Car, Sun, Trees, Coffee, X, Image as ImageIcon,
  AlertCircle, ChevronRight, Sparkles
} from 'lucide-react';

interface AddPropertyFlowProps {
  onCancel: () => void;
  onComplete: () => void;
}

type Step = 1 | 2 | 3 | 4;

interface PropertyFormData {
  // Step 1
  purpose: 'sell' | 'rent';
  propertyName: string;
  propertyType: string;
  description: string;
  // Step 2
  city: string;
  locality: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  totalFloors: number;
  area: string;
  // Step 3
  amenities: string[];
  // Step 4
  images: string[]; // Mock urls
}

const INITIAL_DATA: PropertyFormData = {
  purpose: 'sell',
  propertyName: '',
  propertyType: 'Apartment',
  description: '',
  city: '',
  locality: '',
  address: '',
  bedrooms: 2,
  bathrooms: 2,
  floors: 1,
  totalFloors: 5,
  area: '',
  amenities: [],
  images: []
};

const AMENITIES_LIST = [
  { id: 'wifi', label: 'High-Speed Wifi', icon: Wifi },
  { id: 'parking', label: 'Private Parking', icon: Car },
  { id: 'security', label: '24/7 Security', icon: Shield },
  { id: 'pool', label: 'Swimming Pool', icon: Home }, // Using Home as placeholder if Pool not available
  { id: 'solar', label: 'Solar Power', icon: Sun },
  { id: 'garden', label: 'Private Garden', icon: Trees },
  { id: 'gym', label: 'Fitness Center', icon: Coffee }, // Placeholder
  { id: 'smart', label: 'Smart Home', icon: (props: any) => <Sparkles {...props} /> },
];

const AddPropertyFlow: React.FC<AddPropertyFlowProps> = ({ onCancel, onComplete }) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<PropertyFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof PropertyFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof PropertyFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (currentStep: Step): boolean => {
    const newErrors: any = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.propertyName) newErrors.propertyName = "Property name is required";
      if (formData.description.length > 500) newErrors.description = "Description too long";
    }
    
    if (currentStep === 2) {
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.area || parseInt(formData.area) < 100) newErrors.area = "Area must be > 100 sq.ft";
      if (formData.floors > formData.totalFloors) newErrors.floors = "Floor cannot be higher than total floors";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 4) as Step);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1) as Step);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    onComplete();
  };

  // --- Step Components ---

  const renderStep1 = () => (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
        <button 
          onClick={() => updateField('purpose', 'sell')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${formData.purpose === 'sell' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Sell
        </button>
        <button 
          onClick={() => updateField('purpose', 'rent')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${formData.purpose === 'rent' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Rent
        </button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Property Name</label>
        <input 
          type="text" 
          value={formData.propertyName}
          onChange={e => updateField('propertyName', e.target.value)}
          placeholder="e.g. Sunset Heights Apartment"
          className={`w-full glass-input rounded-xl px-4 py-3 outline-none transition-all text-slate-900 placeholder-slate-400 ${errors.propertyName ? 'border-red-400 bg-red-50' : ''}`}
        />
        {errors.propertyName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.propertyName}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Property Type</label>
            <select 
                value={formData.propertyType}
                onChange={e => updateField('propertyType', e.target.value)}
                className="w-full glass-input rounded-xl px-4 py-3 outline-none appearance-none text-slate-900"
            >
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Studio</option>
                <option>Independent House</option>
            </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Description</label>
        <textarea 
          value={formData.description}
          onChange={e => updateField('description', e.target.value)}
          placeholder="Tell us about the property features, neighborhood, etc."
          className="w-full glass-input rounded-xl px-4 py-3 h-32 outline-none resize-none text-slate-900 placeholder-slate-400"
          maxLength={500}
        />
        <div className="flex justify-end text-xs text-slate-400">
            {formData.description.length}/500
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8 animate-fade-in-up">
       <div className="space-y-4">
           <h3 className="font-bold text-lg text-slate-900 border-b border-slate-200 pb-2">Location</h3>
           <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">City</label>
                    <input 
                        type="text" 
                        value={formData.city}
                        onChange={e => updateField('city', e.target.value)}
                        className={`w-full glass-input rounded-xl px-4 py-3 outline-none text-slate-900 placeholder-slate-400 ${errors.city ? 'border-red-400' : ''}`}
                        placeholder="Select City"
                    />
                     {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Locality</label>
                    <input 
                        type="text" 
                        value={formData.locality}
                        onChange={e => updateField('locality', e.target.value)}
                        className="w-full glass-input rounded-xl px-4 py-3 outline-none text-slate-900 placeholder-slate-400"
                        placeholder="Enter Locality"
                    />
                </div>
           </div>
           <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Address</label>
                <input 
                    type="text" 
                    value={formData.address}
                    onChange={e => updateField('address', e.target.value)}
                    className="w-full glass-input rounded-xl px-4 py-3 outline-none text-slate-900 placeholder-slate-400"
                    placeholder="House No, Street, Landmark"
                />
           </div>
           {/* Mock Map */}
           <div className="h-48 bg-slate-100 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 gap-2">
               <MapPin size={20} /> Map Pin Selection (Mock)
           </div>
       </div>

       <div className="space-y-4">
           <h3 className="font-bold text-lg text-slate-900 border-b border-slate-200 pb-2">Features</h3>
           
           {/* Steppers */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                   { label: 'Bedrooms', field: 'bedrooms' },
                   { label: 'Bathrooms', field: 'bathrooms' }
               ].map((item) => (
                   <div key={item.field} className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">{item.label}</label>
                       <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1">
                           <button 
                            className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-lg text-slate-500"
                            onClick={() => updateField(item.field as keyof PropertyFormData, Math.max(0, (formData[item.field as keyof PropertyFormData] as number) - 1))}
                           >-</button>
                           <span className="flex-1 text-center font-bold text-slate-900">{formData[item.field as keyof PropertyFormData]}</span>
                           <button 
                            className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-lg text-slate-500"
                            onClick={() => updateField(item.field as keyof PropertyFormData, (formData[item.field as keyof PropertyFormData] as number) + 1)}
                           >+</button>
                       </div>
                   </div>
               ))}
               
               <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Super Area (sq.ft)</label>
                    <input 
                        type="number"
                        value={formData.area}
                        onChange={e => updateField('area', e.target.value)}
                        className={`w-full glass-input rounded-xl px-4 py-3 outline-none text-center font-bold text-slate-900 placeholder-slate-400 ${errors.area ? 'border-red-400' : ''}`}
                        placeholder="0"
                    />
                    {errors.area && <p className="text-red-500 text-xs">{errors.area}</p>}
               </div>
           </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Floor No.</label>
                    <input 
                        type="number"
                        value={formData.floors}
                        onChange={e => updateField('floors', parseInt(e.target.value))}
                        className="w-full glass-input rounded-xl px-4 py-3 outline-none text-slate-900 placeholder-slate-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Total Floors</label>
                    <input 
                        type="number"
                        value={formData.totalFloors}
                        onChange={e => updateField('totalFloors', parseInt(e.target.value))}
                        className="w-full glass-input rounded-xl px-4 py-3 outline-none text-slate-900 placeholder-slate-400"
                    />
                     {errors.floors && <p className="text-red-500 text-xs">{errors.floors}</p>}
                </div>
            </div>
       </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 animate-fade-in-up">
       <p className="text-slate-500 text-sm">Select all the amenities available at your property.</p>
       
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           {AMENITIES_LIST.map(amenity => {
               const isSelected = formData.amenities.includes(amenity.id);
               // @ts-ignore
               const Icon = amenity.icon;
               return (
                   <button
                        key={amenity.id}
                        onClick={() => {
                            const newAmenities = isSelected 
                                ? formData.amenities.filter(a => a !== amenity.id)
                                : [...formData.amenities, amenity.id];
                            updateField('amenities', newAmenities);
                        }}
                        className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                            isSelected 
                                ? 'bg-emerald-50 border-primary text-slate-900 shadow-md' 
                                : 'bg-white/50 border-slate-200 text-slate-500 hover:bg-white'
                        }`}
                   >
                       <div className={`p-2 rounded-full ${isSelected ? 'bg-primary text-slate-900' : 'bg-slate-100'}`}>
                           <Icon size={18} />
                       </div>
                       <span className="font-bold text-sm">{amenity.label}</span>
                       {isSelected && <Check size={16} className="ml-auto text-primary" />}
                   </button>
               )
           })}
       </div>

       <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3 text-blue-800 text-sm">
           <AlertCircle className="shrink-0 mt-0.5" size={18} />
           <p>Listing properties with more amenities receives <strong>40% more inquiries</strong> on average.</p>
       </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8 animate-fade-in-up">
        <div className="border-2 border-dashed border-slate-300 rounded-3xl bg-slate-50 p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <Upload size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Click to upload or drag & drop</h3>
            <p className="text-slate-500 text-sm mt-1">SVG, PNG, JPG or GIF (max. 4MB)</p>
        </div>

        <div className="space-y-4">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Photo Guidelines</h4>
            <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary"/> At least one photo of the bedroom</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary"/> Bright lighting works best</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary"/> Horizontal (landscape) photos preferred</li>
            </ul>
        </div>

        {/* Preview Mock */}
        {formData.images.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
                {/* Images would go here */}
            </div>
        )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
            {/* Header with Progress */}
            <div className="flex items-center gap-4 mb-8">
                <button onClick={onCancel} className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex-1">
                    <h1 className="text-2xl font-display font-bold text-slate-900">List Your Property</h1>
                    <p className="text-slate-500 text-sm">Step {step} of 4: {
                        step === 1 ? 'Property Info' : 
                        step === 2 ? 'Location & Features' :
                        step === 3 ? 'Amenities' : 'Photos'
                    }</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-slate-200 rounded-full mb-8 overflow-hidden">
                <div 
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${(step / 4) * 100}%` }}
                ></div>
            </div>

            {/* Main Form Card */}
            <div className="glass-panel p-6 md:p-10 rounded-[2rem] shadow-xl bg-white/80 relative overflow-hidden">
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-100">
                     <button 
                        onClick={handleBack}
                        disabled={step === 1}
                        className="px-6 py-3 rounded-xl text-slate-600 font-bold disabled:opacity-0 hover:bg-slate-50 transition-all"
                     >
                         Back
                     </button>

                     {step < 4 ? (
                         <button 
                            onClick={handleNext}
                            className="px-8 py-3 rounded-xl bg-secondary text-primary font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                         >
                             Next Step <ChevronRight size={18} />
                         </button>
                     ) : (
                         <button 
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="px-10 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-primary text-slate-900 font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                         >
                             {isSubmitting ? 'Submitting...' : 'Post Property'}
                             {!isSubmitting && <Check size={18} />}
                         </button>
                     )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddPropertyFlow;