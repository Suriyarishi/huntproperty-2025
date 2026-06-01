import React, { useState } from 'react';
import { RoomDekhoView, RoomListing, RoomType, Occupancy } from './types';
import { ArrowLeft, UploadCloud, CheckCircle2, Home } from 'lucide-react';

const AVAILABLE_AMENITIES = [
    'AC', 'WiFi', 'Attached Washroom', 'Washing Machine', 'Food Included', 'Maid', 'Parking', 'Power Backup'
];

interface RoomDekhoListFormProps {
    onAddRoom: (room: RoomListing) => void;
    onNavigate: (view: RoomDekhoView) => void;
}

const RoomDekhoListForm: React.FC<RoomDekhoListFormProps> = ({ onAddRoom, onNavigate }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        ownerName: '',
        phone: '',
        city: '',
        locality: '',
        propertyType: 'Single Room' as RoomType,
        rent: '',
        deposit: '',
        isAvailable: true,
        availableFrom: '',
        description: '',
        occupancyPreference: 'Any' as Occupancy,
        amenities: [] as string[]
    });

    const [cityLatLong] = useState<{ [key: string]: [number, number] }>({
        'Mumbai': [19.0760, 72.8777],
        'Bangalore': [12.9716, 77.5946],
        'Delhi': [28.6139, 77.2090],
        'Pune': [18.5204, 73.8567],
        'Hyderabad': [17.3850, 78.4867],
        'Chennai': [13.0827, 80.2707],
        'Kolkata': [22.5726, 88.3639],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const toggleAmenity = (amenity: string) => {
        setFormData(prev => {
            const current = prev.amenities;
            if (current.includes(amenity)) {
                return { ...prev, amenities: current.filter(a => a !== amenity) };
            } else {
                return { ...prev, amenities: [...current, amenity] };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Mock API call
        setTimeout(() => {
            const city = formData.city || 'Mumbai';
            const baseCoords = cityLatLong[city] || [20.5937, 78.9629];
            // Randomize slightly so markers don't overlap completely
            const lat = baseCoords[0] + (Math.random() - 0.5) * 0.05;
            const lng = baseCoords[1] + (Math.random() - 0.5) * 0.05;

            const newRoom: RoomListing = {
                id: `r-${Date.now()}`,
                ...formData,
                rent: Number(formData.rent),
                deposit: formData.deposit ? Number(formData.deposit) : undefined,
                photos: [
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop'
                ],
                amenities: formData.amenities.length > 0 ? formData.amenities : ['Basic Setup'],
                coordinates: [lat, lng],
                createdAt: new Date().toISOString().split('T')[0]
            };

            onAddRoom(newRoom);
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-slate-50 p-6">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2 text-center">Listing Published!</h2>
                <p className="text-slate-500 text-center max-w-md mb-8">
                    Your room is now visible on the map for tenants in {formData.city || 'your city'}. Get ready for incoming queries.
                </p>
                <div className="flex gap-4">
                    <button 
                        onClick={() => onNavigate('map', { city: formData.city })}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors"
                    >
                        View your room on map
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-[calc(100vh-64px)] py-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <button 
                    onClick={() => onNavigate('home')}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium mb-6 transition-colors"
                >
                    <ArrowLeft size={20} /> Cancel
                </button>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10">
                    <div className="mb-8 border-b border-slate-100 pb-6">
                        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">List your room free</h1>
                        <p className="text-slate-500">Fill out this quick form and go live in under 2 minutes.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Owner Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Owner Name</label>
                                <input required type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all" placeholder="10-digit number" />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">City</label>
                                <select required name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all">
                                    <option value="" disabled>Select City</option>
                                    {Object.keys(cityLatLong).map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Locality/Area</label>
                                <input required type="text" name="locality" value={formData.locality} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. Andheri West" />
                            </div>
                        </div>

                        {/* Property Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Property Type</label>
                                <select required name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all">
                                    <option value="Single Room">Single Room</option>
                                    <option value="Double Sharing">Double Sharing</option>
                                    <option value="1BHK">1BHK</option>
                                    <option value="2BHK">2BHK</option>
                                    <option value="PG">PG</option>
                                    <option value="Flatmate">Flatmate</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Occupancy Pref</label>
                                <select required name="occupancyPreference" value={formData.occupancyPreference} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all">
                                    <option value="Any">Any</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Family">Family</option>
                                </select>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Monthly Rent (₹)</label>
                                <input required type="number" name="rent" value={formData.rent} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. 15000" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Deposit (₹) <span className="text-slate-400 font-normal">(Optional)</span></label>
                                <input type="number" name="deposit" value={formData.deposit} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. 30000" />
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Available From</label>
                                <input required type="text" name="availableFrom" value={formData.availableFrom} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. Immediately, Next week" />
                            </div>
                            <div className="flex items-center gap-3 pt-6">
                                <input type="checkbox" id="isAvailable" name="isAvailable" checked={formData.isAvailable} onChange={handleChange} className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                                <label htmlFor="isAvailable" className="text-sm font-bold text-slate-700">Currently Available</label>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3">Amenities</label>
                            <div className="flex flex-wrap gap-3">
                                {AVAILABLE_AMENITIES.map(amenity => {
                                    const isSelected = formData.amenities.includes(amenity);
                                    return (
                                        <button
                                            key={amenity}
                                            type="button"
                                            onClick={() => toggleAmenity(amenity)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                                                isSelected 
                                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                            }`}
                                        >
                                            <Home size={14} className={isSelected ? 'text-emerald-500' : 'text-slate-400'} />
                                            {amenity}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Short Description</label>
                            <textarea required name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all resize-none" placeholder="Mention nearby landmarks, amenities, or restrictions..."></textarea>
                        </div>

                        {/* Photo Upload (Mock) */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Photos</label>
                            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 hover:border-emerald-400 transition-colors cursor-pointer">
                                <UploadCloud className="mx-auto text-slate-400 mb-2" size={32} />
                                <p className="text-sm font-bold text-slate-700">Click to upload photos</p>
                                <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-4 border-t border-slate-100">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-lg transition-colors shadow-md disabled:opacity-70 flex justify-center items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Publishing...
                                    </>
                                ) : (
                                    'Post Listing Now'
                                )}
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                By posting, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomDekhoListForm;
