import React from 'react';
import { MapPin, Calendar, Maximize, Ruler, Map } from 'lucide-react';

interface AddAgriculturalDetailsProps {
    formData: {
        agriDetails: {
            possessionType: 'Immediate' | 'Calendar';
            expectedPossession: string;
            landSizeUnit: 'Acres' | 'Meters' | 'Begha';
            beghaSizeUnit: 'Sqyds' | 'Meters';
            totalLandArea: string;
            beghaSize: string;
            agriculturalProjectType: string;
            siteAddress: string;
        };
    };
    updateFormData: (data: any) => void;
}

const AddAgriculturalDetails: React.FC<AddAgriculturalDetailsProps> = ({ formData, updateFormData }) => {
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
                        Project Details
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        BASIC DETAILS - AGRICULTURAL LAND
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project Type */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project Type</label>
                    <select 
                        value={agri.agriculturalProjectType}
                        onChange={(e) => handleChange('agriculturalProjectType', e.target.value)}
                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                    >
                        <option value="Agriculture">Agriculture</option>
                    </select>
                </div>

                {/* Expected Possession */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Expected Possession</label>
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleChange('possessionType', 'Immediate')}
                            className={`flex-1 h-14 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border-2 ${
                                agri.possessionType === 'Immediate'
                                ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200'
                            }`}
                        >
                            Immediate
                        </button>
                        <div className="flex-1 flex gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={agri.expectedPossession}
                                    onChange={(e) => {
                                        handleChange('possessionType', 'Calendar');
                                        handleChange('expectedPossession', e.target.value);
                                    }}
                                    placeholder="Month & Year"
                                    className={`w-full h-14 bg-gray-50 border rounded-xl px-6 font-bold text-sm outline-none transition-all shadow-sm ${
                                        agri.possessionType === 'Calendar' ? 'border-emerald-500 focus:border-emerald-600' : 'border-gray-100'
                                    }`}
                                />
                                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Land Size Type */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Land Size Unit</label>
                    <div className="flex gap-2">
                        {['Acres', 'Meters', 'Begha'].map((unit) => (
                            <button
                                key={unit}
                                onClick={() => handleChange('landSizeUnit', unit)}
                                className={`flex-1 h-14 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all border-2 ${
                                    agri.landSizeUnit === unit
                                    ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-lg'
                                    : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200'
                                }`}
                            >
                                {unit}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Size of 1 Begha/Acre/Metre */}
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Size of 1 {agri.landSizeUnit === 'Begha' ? 'Begha' : (agri.landSizeUnit === 'Meters' ? 'Metre' : 'Acre')}
                    </label>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={agri.beghaSize}
                            onChange={(e) => handleChange('beghaSize', e.target.value)}
                            placeholder="Value"
                            className="flex-1 h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                        />
                        <div className="flex gap-2 w-48">
                            {['Sqyds', 'Meters'].map((unit) => (
                                <button
                                    key={unit}
                                    onClick={() => handleChange('beghaSizeUnit', unit)}
                                    className={`flex-1 h-14 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all border-2 ${
                                        agri.beghaSizeUnit === unit
                                        ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-lg'
                                        : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200'
                                    }`}
                                >
                                    {unit}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Total Land Area */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Total Land in {agri.landSizeUnit}</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={agri.totalLandArea}
                            onChange={(e) => handleChange('totalLandArea', e.target.value)}
                            placeholder="Enter Total Area"
                            className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-12 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                        />
                        <Maximize className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                    </div>
                </div>

                {/* Site Address */}
                <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Site Address</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={agri.siteAddress}
                            onChange={(e) => handleChange('siteAddress', e.target.value)}
                            placeholder="Complete Site Address"
                            className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-12 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                        />
                        <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                    </div>
                    <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        Auto-copied from Builder details. Edit if different.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddAgriculturalDetails;
