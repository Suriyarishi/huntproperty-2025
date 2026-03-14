import React from 'react';
import { Users, Plus, Trash2 } from 'lucide-react';

interface OwnerRow {
    id: number;
    name: string;
    share: string;
    khasaraNo: string;
    villageName: string;
    tehsil: string;
}

interface AddLandPossession6Props {
    formData: {
        agriLand: {
            singleOwner: boolean | null;
            numberOfOwners: string;
            owners: OwnerRow[];
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandPossession6: React.FC<AddLandPossession6Props> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const addOwner = () => {
        update('owners', [
            ...(land.owners || []),
            { id: Date.now(), name: '', share: '', khasaraNo: '', villageName: '', tehsil: '' }
        ]);
    };

    const removeOwner = (id: number) => {
        update('owners', (land.owners || []).filter((o) => o.id !== id));
    };

    const updateOwner = (id: number, field: string, value: string) => {
        update('owners', (land.owners || []).map((o) => o.id === id ? { ...o, [field]: value } : o));
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-5 pb-6 border-b border-gray-50">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 6</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Q: Single Owner */}
                <div className="flex items-center gap-4 p-5 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">Is there only one owner of the land?</p>
                    <div className="flex gap-2 flex-shrink-0">
                        {[true, false].map((val) => (
                            <button
                                key={String(val)}
                                onClick={() => update('singleOwner', val)}
                                className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                    land.singleOwner === val
                                        ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                        : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                }`}
                            >
                                {val ? 'Yes' : 'No'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Multiple Owners block */}
                {land.singleOwner === false && (
                    <div className="space-y-5 animate-fade-in border-l-4 border-amber-200 pl-4">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
                                In case of No OR (More than 1 Owner / Landlord)
                            </p>
                            <p className="text-xs font-bold text-gray-500">Please mention the total number of owners of the land</p>
                            <input
                                type="number"
                                value={land.numberOfOwners || ''}
                                onChange={(e) => update('numberOfOwners', e.target.value)}
                                placeholder="No. of Owners"
                                className="w-44 h-11 bg-gray-50 border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                            />
                        </div>

                        {/* Owners table */}
                        <div className="space-y-3">
                            <p className="text-xs font-bold text-gray-500">Please mention the details of owners in following format:</p>

                            {/* Column Headers */}
                            <div className="grid grid-cols-[minmax(0,2fr)_80px_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_36px] gap-2 px-1 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                                <span>Name</span>
                                <span>Share %</span>
                                <span>Khasara No.</span>
                                <span>Village</span>
                                <span>Tehsil</span>
                                <span></span>
                            </div>

                            {(land.owners || []).length === 0 && (
                                <div className="flex items-center justify-center h-16 rounded-2xl border-2 border-dashed border-gray-100 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                                    No owners added yet
                                </div>
                            )}

                            {(land.owners || []).map((owner) => (
                                <div
                                    key={owner.id}
                                    className="grid grid-cols-[minmax(0,2fr)_80px_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_36px] gap-2 items-center group bg-gray-50/50 p-2.5 rounded-2xl border border-gray-100 hover:bg-white hover:border-emerald-100 hover:shadow-md transition-all"
                                >
                                    <input type="text" value={owner.name} onChange={(e) => updateOwner(owner.id, 'name', e.target.value)} placeholder="Name" className="h-10 w-full bg-white border border-gray-100 rounded-xl px-3 font-bold text-xs text-[#1a1c21] outline-none focus:border-emerald-500 transition-all min-w-0" />
                                    <input type="text" value={owner.share} onChange={(e) => updateOwner(owner.id, 'share', e.target.value)} placeholder="%" className="h-10 w-full bg-white border border-gray-100 rounded-xl px-3 font-bold text-xs text-[#1a1c21] outline-none focus:border-emerald-500 transition-all" />
                                    <input type="text" value={owner.khasaraNo} onChange={(e) => updateOwner(owner.id, 'khasaraNo', e.target.value)} placeholder="Khasara No" className="h-10 w-full bg-white border border-gray-100 rounded-xl px-3 font-bold text-xs text-[#1a1c21] outline-none focus:border-emerald-500 transition-all min-w-0" />
                                    <input type="text" value={owner.villageName} onChange={(e) => updateOwner(owner.id, 'villageName', e.target.value)} placeholder="Village" className="h-10 w-full bg-white border border-gray-100 rounded-xl px-3 font-bold text-xs text-[#1a1c21] outline-none focus:border-emerald-500 transition-all min-w-0" />
                                    <input type="text" value={owner.tehsil} onChange={(e) => updateOwner(owner.id, 'tehsil', e.target.value)} placeholder="Tehsil" className="h-10 w-full bg-white border border-gray-100 rounded-xl px-3 font-bold text-xs text-[#1a1c21] outline-none focus:border-emerald-500 transition-all min-w-0" />
                                    <button onClick={() => removeOwner(owner.id)} className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-200 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100 flex-shrink-0">
                                        <Trash2 size={13} />
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={addOwner}
                                className="px-6 py-3 bg-[#1a1c21] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-2.5 active:scale-95"
                            >
                                <Plus size={13} /> Add Button
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession6;
