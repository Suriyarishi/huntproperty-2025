import React from 'react';
import { ShieldCheck, Fence } from 'lucide-react';

const FENCING_TYPES = ['Wired', 'RCC Slabs', 'Bricks Fencing', 'Others'];

interface AddLandPossession5Props {
    formData: {
        agriLand: {
            underOwnerPossession: boolean | null;
            fencingDone: boolean | null;
            fencingTypes: string[];
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandPossession5: React.FC<AddLandPossession5Props> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const toggleFencingType = (type: string) => {
        const current = land.fencingTypes || [];
        const updated = current.includes(type)
            ? current.filter((t) => t !== type)
            : [...current, type];
        update('fencingTypes', updated);
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 5</p>
                </div>
            </div>

            <div className="space-y-10">
                {/* Question 1 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-gray-50/60 rounded-2xl border border-gray-100">
                        <p className="font-bold text-[#1a1c21] text-sm leading-relaxed flex-1 min-w-0">
                            Is the land under owner / landlord possession?
                        </p>
                        <div className="flex gap-2 flex-shrink-0">
                            {[true, false].map((val) => (
                                <button
                                    key={String(val)}
                                    onClick={() => update('underOwnerPossession', val)}
                                    className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                        land.underOwnerPossession === val
                                            ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                            : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                    }`}
                                >
                                    {val ? 'Yes' : 'No'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Conditional: Only if Yes */}
                {land.underOwnerPossession === true && (
                    <div className="space-y-6 animate-fade-in pl-2 border-l-4 border-emerald-200">
                        <p className="text-[11px] font-black text-emerald-600 uppercase tracking-widest ml-4">
                            If Yes, then please answer the following questions:
                        </p>

                        {/* Question 2 */}
                        <div className="space-y-4 ml-3">
                            <div className="flex items-center gap-4 p-5 bg-gray-50/60 rounded-2xl border border-gray-100">
                                <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">
                                    Is the fencing of the land has been done?
                                </p>
                                <div className="flex gap-2 flex-shrink-0">
                                    {[true, false].map((val) => (
                                        <button
                                            key={String(val)}
                                            onClick={() => {
                                                update('fencingDone', val);
                                                if (!val) update('fencingTypes', []);
                                            }}
                                            className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                                land.fencingDone === val
                                                    ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                                    : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                            }`}
                                        >
                                            {val ? 'Yes' : 'No'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Fencing Types */}
                            {land.fencingDone === true && (
                                <div className="space-y-3 animate-fade-in">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        If yes, then which type of fencing has been done?
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {FENCING_TYPES.map((type, idx) => {
                                            const selected = (land.fencingTypes || []).includes(type);
                                            return (
                                                <button
                                                    key={type}
                                                    onClick={() => toggleFencingType(type)}
                                                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                                                        selected
                                                            ? 'border-emerald-400 bg-emerald-50 text-[#1a1c21]'
                                                            : 'border-gray-100 bg-gray-50/50 text-gray-400 hover:border-gray-200'
                                                    }`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${
                                                        selected ? 'bg-emerald-500 text-white' : 'bg-white border border-gray-100 text-gray-300'
                                                    }`}>
                                                        {String.fromCharCode(65 + idx)}
                                                    </div>
                                                    <span className="text-xs font-black uppercase tracking-wider">{type}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession5;
