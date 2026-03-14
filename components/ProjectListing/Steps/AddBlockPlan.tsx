import React, { useState } from 'react';
import { Layout, FileUp, Trash2, CheckCircle2 } from 'lucide-react';

interface BlockDetail {
    id: number;
    name: string;
}

interface BlockPlan {
    blockId: number;
    blockName: string;
    file: File | null;
}

interface AddBlockPlanProps {
    formData: {
        blockDetails: BlockDetail[];
        hasBlockPlan?: boolean;
        blockPlans?: BlockPlan[];
    };
    updateFormData: (data: any) => void;
}

const AddBlockPlan: React.FC<AddBlockPlanProps> = ({ formData, updateFormData }) => {
    const [hasPlan, setHasPlan] = useState<boolean>(formData.hasBlockPlan ?? true);

    const handleToggle = (value: boolean) => {
        setHasPlan(value);
        updateFormData({ hasBlockPlan: value });
    };

    const handleFileUpload = (idx: number, file: File) => {
        const newPlans = [...(formData.blockPlans || [])];
        // Ensure we have plans for all blocks
        if (newPlans.length === 0) {
            formData.blockDetails.forEach((block, i) => {
                newPlans.push({ blockId: block.id, blockName: block.name, file: null });
            });
        }
        newPlans[idx].file = file;
        updateFormData({ blockPlans: newPlans });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Layout size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Add Block Plan
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        DO YOU HAVE THE BLOCK PLAN?
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-[#1a1c21] uppercase tracking-wider">Do you have the Block plan.</span>
                    <div className="flex bg-gray-100 p-1 rounded-2xl">
                        <button 
                            onClick={() => handleToggle(true)}
                            className={`px-8 py-2 rounded-xl text-xs font-black transition-all ${hasPlan ? 'bg-[#1a1c21] text-white shadow-lg' : 'text-gray-400 hover:text-[#1a1c21]'}`}
                        >
                            YES
                        </button>
                        <button 
                            onClick={() => handleToggle(false)}
                            className={`px-8 py-2 rounded-xl text-xs font-black transition-all ${!hasPlan ? 'bg-[#1a1c21] text-white shadow-lg' : 'text-gray-400 hover:text-[#1a1c21]'}`}
                        >
                            NO
                        </button>
                    </div>
                </div>
            </div>

            {hasPlan ? (
                <div className="space-y-6 animate-fade-in">
                    <p className="text-sm font-bold text-gray-500 italic">If Yes, Please add cluster plan</p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    <th className="px-6 py-2 w-20 text-center">S. No.</th>
                                    <th className="px-6 py-2">Tower Name/ No.</th>
                                    <th className="px-6 py-2">Cluster Plan</th>
                                    <th className="px-6 py-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.blockDetails.map((block, idx) => (
                                    <tr key={block.id} className="group">
                                        <td className="px-6 h-16 bg-gray-50 border-y border-l border-gray-100 rounded-l-2xl text-xs font-black text-[#1a1c21] text-center">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                            <div className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 flex items-center font-bold text-xs text-[#1a1c21]">
                                                {block.name || `Block ${idx + 1}`}
                                            </div>
                                        </td>
                                        <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                            <label className="flex items-center justify-between gap-2 cursor-pointer bg-white border border-gray-100 rounded-lg px-4 h-10 hover:border-emerald-200 transition-all">
                                                <span className="text-[10px] font-black uppercase text-gray-400 truncate">
                                                    {formData.blockPlans?.[idx]?.file ? formData.blockPlans[idx].file?.name : '.gif/.pdf'}
                                                </span>
                                                <FileUp size={14} className="text-emerald-500" />
                                                <input 
                                                    type="file" 
                                                    className="hidden" 
                                                    onChange={(e) => {
                                                        if (e.target.files?.[0]) handleFileUpload(idx, e.target.files[0]);
                                                    }} 
                                                />
                                            </label>
                                        </td>
                                        <td className="px-6 h-16 bg-gray-50 border-y border-r border-gray-100 rounded-r-2xl text-center">
                                            <button className="px-6 py-2 bg-[#1a1c21] text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">
                                                Attach/ Submit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-50 rounded-3xl p-10 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="text-emerald-500" size={32} />
                    </div>
                    <p className="text-xs font-bold text-gray-400 italic">
                        * Note: In case of No we will continue to the next screen.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AddBlockPlan;
