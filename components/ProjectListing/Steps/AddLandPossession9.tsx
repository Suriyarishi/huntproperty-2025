import React from 'react';
import { ClipboardList } from 'lucide-react';

interface AddLandPossession9Props {
    formData: {
        agriLand: {
            landOnLease: boolean | null;
            cropGrowing: boolean | null;
            hasMutation: boolean | null;
            underAcquisition: boolean | null;
            compensationReceived: boolean | null;
            structureExisting: boolean | null;
            structureSize: string;
        };
    };
    updateFormData: (data: any) => void;
}

const questions = [
    { key: 'landOnLease', label: 'Is the land is given on lease to any farmer or other entity?' },
    { key: 'cropGrowing', label: 'Is there any type of crop is been growing?' },
    { key: 'hasMutation', label: 'Do you have the mutation of the land?' },
    { key: 'underAcquisition', label: 'Did your land fall under acquisition?' },
];

const AddLandPossession9: React.FC<AddLandPossession9Props> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const YesNo = ({ field }: { field: string }) => (
        <div className="flex gap-2 flex-shrink-0">
            {[true, false].map((val) => (
                <button
                    key={String(val)}
                    onClick={() => update(field, val)}
                    className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                        (land as any)[field] === val
                            ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                            : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                    }`}
                >
                    {val ? 'Yes' : 'No'}
                </button>
            ))}
        </div>
    );

    return (
        <div className="space-y-5 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-5 pb-5 border-b border-gray-50">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ClipboardList size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 9</p>
                </div>
            </div>

            <div className="space-y-3">
                {/* Simple Yes/No questions */}
                {questions.map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                        <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">{label}</p>
                        <YesNo field={key} />
                    </div>
                ))}

                {/* Conditional: compensation (only if underAcquisition = Yes) */}
                {land.underAcquisition === true && (
                    <div className="animate-fade-in border-l-4 border-amber-200 pl-4 space-y-2">
                        <div className="flex items-center gap-4 p-4 bg-amber-50/40 rounded-2xl border border-amber-100">
                            <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">If Yes, have you received the compensation?</p>
                            <YesNo field="compensationReceived" />
                        </div>
                    </div>
                )}

                {/* Structure question */}
                <div className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">Is there any temporary or permanent structure is already existing on your land?</p>
                    <YesNo field="structureExisting" />
                </div>

                {/* Conditional: structure size */}
                {land.structureExisting === true && (
                    <div className="animate-fade-in border-l-4 border-emerald-200 pl-4 space-y-2">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">If yes, then please mention the size of the structure</p>
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                value={land.structureSize || ''}
                                onChange={(e) => update('structureSize', e.target.value)}
                                placeholder="e.g. 200"
                                className="w-44 h-11 bg-gray-50 border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                            />
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-4 py-2.5 rounded-xl">IN Sqmeter</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession9;
