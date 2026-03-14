import React from 'react';
import { Users } from 'lucide-react';

interface AddLandPossession11BProps {
    formData: {
        agriLand: {
            familySoldLand: boolean | null;
            familySoldBrief: string;
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandPossession11B: React.FC<AddLandPossession11BProps> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    return (
        <div className="space-y-5 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-5 pb-5 border-b border-gray-50">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 11B</p>
                </div>
            </div>

            <div className="space-y-4">
                {/* Question */}
                <div className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">
                        Have you or any of your family member sell this land earlier?
                    </p>
                    <div className="flex gap-2 flex-shrink-0">
                        {[true, false].map((val) => (
                            <button
                                key={String(val)}
                                onClick={() => {
                                    update('familySoldLand', val);
                                    if (!val) update('familySoldBrief', '');
                                }}
                                className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                    land.familySoldLand === val
                                        ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                        : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                }`}
                            >
                                {val ? 'Yes' : 'No'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conditional brief textarea */}
                {land.familySoldLand === true && (
                    <div className="animate-fade-in border-l-4 border-amber-200 pl-4 space-y-2">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            If yes, Please provide the briefing of the same:
                        </p>
                        <div className="bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[24px] p-2 hover:border-amber-200 hover:bg-white transition-all focus-within:border-amber-400 focus-within:bg-white focus-within:shadow-lg">
                            <textarea
                                value={land.familySoldBrief || ''}
                                onChange={(e) => update('familySoldBrief', e.target.value)}
                                placeholder="Provide details about the previous sale..."
                                rows={5}
                                className="w-full bg-transparent border-none outline-none text-[#1a1c21] font-bold text-sm leading-relaxed resize-none p-4 placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession11B;
