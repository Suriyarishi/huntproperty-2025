import React from 'react';
import { Building2, Trash2, Plus } from 'lucide-react';

interface BlockDetail {
    id: number;
    name: string;
    totalPlots: string;
}

interface AddPlotsDetailsProps {
    formData: {
        blockDetails: BlockDetail[];
    };
    updateFormData: (data: any) => void;
}

const AddPlotsDetails: React.FC<AddPlotsDetailsProps> = ({ formData, updateFormData }) => {
    const handleTotalBlocksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(e.target.value) || 0;
        const newBlocks = Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            name: formData.blockDetails[i]?.name || '',
            totalPlots: formData.blockDetails[i]?.totalPlots || ''
        }));
        updateFormData({ blockDetails: newBlocks });
    };

    const handleBlockUpdate = (idx: number, field: keyof BlockDetail, value: string) => {
        const newBlocks = [...formData.blockDetails];
        newBlocks[idx] = { ...newBlocks[idx], [field]: value };
        updateFormData({ blockDetails: newBlocks });
    };

    const removeBlock = (idx: number) => {
        const newBlocks = formData.blockDetails.filter((_, i) => i !== idx);
        updateFormData({ blockDetails: newBlocks });
    };

    const addBlock = () => {
        const newBlock = { id: Date.now(), name: '', totalPlots: '' };
        updateFormData({ blockDetails: [...formData.blockDetails, newBlock] });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Building2 size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Add Plots Details
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        DEFINING PROJECT STRUCTURE & PLOTS
                    </p>
                </div>
            </div>

            <div className="max-w-xs space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Total No of Tower
                </label>
                <input 
                    type="number"
                    value={formData.blockDetails.length}
                    onChange={handleTotalBlocksChange}
                    placeholder="0"
                    className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <th className="px-6 py-2">S. No.</th>
                            <th className="px-6 py-2">Block Name/No.</th>
                            <th className="px-6 py-2">Total no. of Plots(in each block)</th>
                            <th className="px-6 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.blockDetails.map((item, idx) => (
                            <tr key={item.id} className="group">
                                <td className="px-6 h-16 bg-gray-50 border-y border-l border-gray-100 rounded-l-2xl text-sm font-black text-[#1a1c21]">
                                    {idx + 1}
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => handleBlockUpdate(idx, 'name', e.target.value)}
                                        placeholder="Block A"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#2FED9A]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="number"
                                        value={item.totalPlots}
                                        onChange={(e) => handleBlockUpdate(idx, 'totalPlots', e.target.value)}
                                        placeholder="15"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#2FED9A]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-r border-gray-100 rounded-r-2xl text-center">
                                    <button 
                                        onClick={() => removeBlock(idx)}
                                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button 
                onClick={addBlock}
                className="px-8 py-4 bg-[#1a1c21] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-3"
            >
                <Plus size={16} /> Add Button
            </button>
        </div>
    );
};

export default AddPlotsDetails;
