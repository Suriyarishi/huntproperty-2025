import React from 'react';
import { MapPin, Navigation, Map } from 'lucide-react';

interface AddLandLocationDetailsProps {
    formData: {
        agriDetails: {
            villageName: string;
            tehsilName: string;
            khasaraNumber: string;
            state: string;
            googleLocation: string;
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandLocationDetails: React.FC<AddLandLocationDetailsProps> = ({ formData, updateFormData }) => {
    const agri = formData.agriDetails;

    const handleChange = (field: string, value: any) => {
        updateFormData({
            agriDetails: {
                ...agri,
                [field]: value
            }
        });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <MapPin size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Land Location Details
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        SCREEN 2A
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Village Name */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Village Name</label>
                    <input
                        type="text"
                        value={agri.villageName || ''}
                        onChange={(e) => handleChange('villageName', e.target.value)}
                        placeholder="Enter Village Name"
                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                    />
                </div>

                {/* Tehsil Name */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Tehsil Name</label>
                    <input
                        type="text"
                        value={agri.tehsilName || ''}
                        onChange={(e) => handleChange('tehsilName', e.target.value)}
                        placeholder="Enter Tehsil Name"
                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                    />
                </div>

                {/* Khasara Number */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Khasara Number</label>
                    <input
                        type="text"
                        value={agri.khasaraNumber || ''}
                        onChange={(e) => handleChange('khasaraNumber', e.target.value)}
                        placeholder="Enter Khasara Number"
                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                    />
                </div>

                {/* State */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">State</label>
                    <input
                        type="text"
                        value={agri.state || ''}
                        onChange={(e) => handleChange('state', e.target.value)}
                        placeholder="Enter State"
                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                    />
                </div>

                {/* Google Location */}
                <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Google Location</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={agri.googleLocation || ''}
                            onChange={(e) => handleChange('googleLocation', e.target.value)}
                            placeholder="Paste Google Maps Link"
                            className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-12 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                        />
                        <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLandLocationDetails;
