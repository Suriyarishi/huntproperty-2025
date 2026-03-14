import React from 'react';
import { Layers } from 'lucide-react';

const LAND_CATEGORIES = [
    { label: 'General', value: 'General' },
    { label: 'SC / ST', value: 'SCST' },
    { label: 'Patta Bhoomi', value: 'PattaBhoomi' },
    { label: "Other's — Please Specify", value: 'Others' },
];

interface AddLandPossession8Props {
    formData: {
        agriLand: {
            landCategory: string;
            landCategoryOther: string;
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandPossession8: React.FC<AddLandPossession8Props> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Layers size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 8</p>
                </div>
            </div>

            <div className="space-y-6">
                <p className="text-sm font-black text-[#1a1c21]">Your land falls under which category:</p>

                <div className="space-y-3">
                    {LAND_CATEGORIES.map(({ label, value }, idx) => {
                        const selected = land.landCategory === value;
                        return (
                            <button
                                key={value}
                                onClick={() => update('landCategory', value)}
                                className={`w-full flex items-center gap-5 p-5 rounded-2xl border-2 text-left transition-all ${
                                    selected
                                        ? 'border-emerald-400 bg-emerald-50'
                                        : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
                                }`}
                            >
                                {/* Letter Badge */}
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-black uppercase flex-shrink-0 transition-all ${
                                    selected ? 'bg-[#1a1c21] text-[#2FED9A]' : 'bg-white border border-gray-100 text-gray-300'
                                }`}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <span className={`text-sm font-black uppercase tracking-wider transition-colors ${selected ? 'text-[#1a1c21]' : 'text-gray-400'}`}>
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Other specify field */}
                {land.landCategory === 'Others' && (
                    <div className="space-y-2 animate-fade-in pl-2 border-l-4 border-emerald-200">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Please Specify</label>
                        <input
                            type="text"
                            value={land.landCategoryOther || ''}
                            onChange={(e) => update('landCategoryOther', e.target.value)}
                            placeholder="Describe the land category…"
                            className="w-full h-13 bg-gray-50 border border-gray-100 rounded-xl px-6 py-3.5 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all ml-4"
                            style={{ width: 'calc(100% - 1rem)' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession8;
