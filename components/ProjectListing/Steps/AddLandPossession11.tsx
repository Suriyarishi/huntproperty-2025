import React from 'react';
import { MapPin } from 'lucide-react';

interface AddLandPossession11Props {
    formData: {
        agriLand: {
            templeOnLand: boolean | null;
            templeNearby: boolean | null;
            mosqueOnLand: boolean | null;
            mosqueNearby: boolean | null;
            distMainRoad: string;
            distSchool: string;
            distHospital: string;
            distPoliceStation: string;
        };
    };
    updateFormData: (data: any) => void;
}

const yesNoQuestions = [
    { key: 'templeOnLand', label: 'Is there any temple constructed on your land?' },
    { key: 'templeNearby', label: 'Is there any temple nearby to your land?' },
    { key: 'mosqueOnLand', label: 'Is there any mosque constructed on your land?' },
    { key: 'mosqueNearby', label: 'Is there any mosque nearby to your land?' },
];

const distanceFields = [
    { key: 'distMainRoad', label: 'Your land is how far from the main road?' },
    { key: 'distSchool', label: 'Your land is how far from the existing school?' },
    { key: 'distHospital', label: 'Your land is how far from the existing hospital?' },
    { key: 'distPoliceStation', label: 'Your land is how far from the existing Police Station?' },
];

const AddLandPossession11: React.FC<AddLandPossession11Props> = ({ formData, updateFormData }) => {
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
                    <MapPin size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 11</p>
                </div>
            </div>

            <div className="space-y-3">
                {/* Yes/No questions */}
                {yesNoQuestions.map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                        <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">{label}</p>
                        <YesNo field={key} />
                    </div>
                ))}

                {/* Distance fields */}
                <div className="pt-2 space-y-3">
                    {distanceFields.map(({ key, label }) => (
                        <div key={key} className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                            <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">{label}</p>
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <input
                                    type="text"
                                    value={(land as any)[key] || ''}
                                    onChange={(e) => update(key, e.target.value)}
                                    placeholder="0"
                                    className="w-20 h-10 bg-white border border-gray-100 rounded-xl px-3 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all text-center"
                                />
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-2 rounded-lg whitespace-nowrap">In KM</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddLandPossession11;
