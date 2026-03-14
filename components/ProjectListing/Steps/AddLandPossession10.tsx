import React from 'react';
import { Waves } from 'lucide-react';

interface AddLandPossession10Props {
    formData: {
        agriLand: {
            waterBody: boolean | null;
            highTensionWire: boolean | null;
            cremationGround: boolean | null;
            sewerLine: boolean | null;
            boucherHouse: boolean | null;
            factoryNearby: boolean | null;
            factoryName: string;
            factoryType: string;
        };
    };
    updateFormData: (data: any) => void;
}

const questions = [
    { key: 'waterBody', label: 'Is there any water body like pond or lake on your land?' },
    { key: 'highTensionWire', label: 'Is there any high-tension wire passing over your land?' },
    { key: 'cremationGround', label: 'Is there any cremation ground nearby your land?' },
    { key: 'sewerLine', label: 'Is there any sewer line nearby your land?' },
    { key: 'boucherHouse', label: 'Is there any Boucher house nearby your land?' },
    { key: 'factoryNearby', label: 'Is there any factory nearby your land?' },
];

const AddLandPossession10: React.FC<AddLandPossession10Props> = ({ formData, updateFormData }) => {
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
                    <Waves size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 10</p>
                </div>
            </div>

            <div className="space-y-3">
                {questions.map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                        <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">{label}</p>
                        <YesNo field={key} />
                    </div>
                ))}

                {/* Conditional: factory name & type */}
                {land.factoryNearby === true && (
                    <div className="animate-fade-in border-l-4 border-red-200 pl-4 space-y-3">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">If Yes, please specify the name and type of factory</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    value={land.factoryName || ''}
                                    onChange={(e) => update('factoryName', e.target.value)}
                                    placeholder="Factory Name"
                                    className="w-full h-11 bg-gray-50 border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Type</label>
                                <input
                                    type="text"
                                    value={land.factoryType || ''}
                                    onChange={(e) => update('factoryType', e.target.value)}
                                    placeholder="e.g. Chemical, Textile"
                                    className="w-full h-11 bg-gray-50 border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession10;
