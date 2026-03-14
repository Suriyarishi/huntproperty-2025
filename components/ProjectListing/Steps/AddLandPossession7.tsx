import React from 'react';
import { FileText, Check } from 'lucide-react';

interface AddLandPossession7Props {
    formData: {
        agriLand: {
            mutationUpdated: boolean | null;
            membersAlive: boolean | null;
            mutationConfirmed: boolean;
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandPossession7: React.FC<AddLandPossession7Props> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const questions = [
        { key: 'mutationUpdated', label: 'Has all name been updated in the mutation?' },
        { key: 'membersAlive', label: 'Has all members are still alive?' },
    ];

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <FileText size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 7</p>
                </div>
            </div>

            <div className="space-y-6">
                {questions.map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-4 p-5 bg-gray-50/60 rounded-2xl border border-gray-100">
                        <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">{label}</p>
                        <div className="flex gap-2 flex-shrink-0">
                            {[true, false].map((val) => (
                                <button
                                    key={String(val)}
                                    onClick={() => update(key, val)}
                                    className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                        (land as any)[key] === val
                                            ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                            : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                    }`}
                                >
                                    {val ? 'Yes' : 'No'}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Legal Note */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl px-7 py-5">
                    <p className="text-xs font-bold text-amber-700 leading-relaxed">
                        In case of No or expired owner — his all legal heirs are entitled to get the share.
                    </p>
                </div>

                {/* Confirmation */}
                <button
                    onClick={() => update('mutationConfirmed', !land.mutationConfirmed)}
                    className={`flex items-center gap-5 px-8 py-5 rounded-2xl border-2 transition-all font-black text-sm uppercase tracking-widest ${
                        land.mutationConfirmed
                            ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-xl'
                            : 'bg-white border-gray-100 text-gray-400 hover:border-gray-300'
                    }`}
                >
                    <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${
                        land.mutationConfirmed ? 'bg-[#2FED9A] border-[#2FED9A]' : 'border-gray-200 bg-white'
                    }`}>
                        {land.mutationConfirmed && <Check size={16} className="text-[#1a1c21]" />}
                    </div>
                    I Confirmed
                </button>
            </div>
        </div>
    );
};

export default AddLandPossession7;
