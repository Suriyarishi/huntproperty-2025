import React from 'react';
import { FileText, Plus, Trash2 } from 'lucide-react';

interface DocRow {
    id: number;
    name: string;
}

interface AddLandPossession11CProps {
    formData: {
        agriLand: {
            garbageDumping: boolean | null;
            hasOwnershipDocs: boolean | null;
            ownershipDocs: DocRow[];
        };
    };
    updateFormData: (data: any) => void;
}

const AddLandPossession11C: React.FC<AddLandPossession11CProps> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const addDoc = () => {
        update('ownershipDocs', [...(land.ownershipDocs || []), { id: Date.now(), name: '' }]);
    };

    const removeDoc = (id: number) => {
        update('ownershipDocs', (land.ownershipDocs || []).filter((d) => d.id !== id));
    };

    const updateDoc = (id: number, value: string) => {
        update('ownershipDocs', (land.ownershipDocs || []).map((d) => d.id === id ? { ...d, name: value } : d));
    };

    const YesNo = ({ field, onNo }: { field: string; onNo?: () => void }) => (
        <div className="flex gap-2 flex-shrink-0">
            {[true, false].map((val) => (
                <button
                    key={String(val)}
                    onClick={() => {
                        update(field, val);
                        if (!val && onNo) onNo();
                    }}
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
                    <FileText size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 11C</p>
                </div>
            </div>

            <div className="space-y-4">
                {/* Q1: Garbage dumping */}
                <div className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">
                        Is there any sort of garbage or construction waste is dumping on your land?
                    </p>
                    <YesNo field="garbageDumping" />
                </div>

                {/* Q2: Ownership documents */}
                <div className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">
                        Do you have all ownership documents of the land?
                    </p>
                    <YesNo field="hasOwnershipDocs" onNo={() => update('ownershipDocs', [])} />
                </div>

                {/* Conditional: document list */}
                {land.hasOwnershipDocs === true && (
                    <div className="animate-fade-in border-l-4 border-emerald-200 pl-4 space-y-3">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            If Yes, Please specify those documents:
                        </p>

                        {/* Column headers */}
                        <div className="grid grid-cols-[48px_1fr_36px] gap-3 px-1 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                            <span>S. No</span>
                            <span>Name of Documents</span>
                            <span></span>
                        </div>

                        {(land.ownershipDocs || []).length === 0 && (
                            <div className="flex items-center justify-center h-14 rounded-2xl border-2 border-dashed border-gray-100 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                                No documents added yet
                            </div>
                        )}

                        {(land.ownershipDocs || []).map((doc, idx) => (
                            <div key={doc.id} className="grid grid-cols-[48px_1fr_36px] gap-3 items-center group">
                                <div className="h-11 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl flex items-center justify-center font-black text-sm">
                                    {idx + 1}
                                </div>
                                <input
                                    type="text"
                                    value={doc.name}
                                    onChange={(e) => updateDoc(doc.id, e.target.value)}
                                    placeholder="Document name (e.g. Mutation, Land Registry)"
                                    className="h-11 w-full bg-white border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                                />
                                <button
                                    onClick={() => removeDoc(doc.id)}
                                    className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-200 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100 flex-shrink-0"
                                >
                                    <Trash2 size={13} />
                                </button>
                            </div>
                        ))}

                        <button
                            onClick={addDoc}
                            className="px-6 py-3 bg-[#1a1c21] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-2.5 active:scale-95"
                        >
                            <Plus size={13} /> Add Document
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession11C;
