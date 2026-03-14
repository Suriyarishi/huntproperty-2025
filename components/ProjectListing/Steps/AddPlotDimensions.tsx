import React from 'react';
import { Maximize, FileUp, Trash2, Plus } from 'lucide-react';

interface PlotDimension {
    id: number;
    size: string;
    unit: string;
    dimensions: string;
    floorPlanFile?: File | null;
}

interface AddPlotDimensionsProps {
    formData: {
        plotDimensions: PlotDimension[];
    };
    updateFormData: (data: any) => void;
}

const AddPlotDimensions: React.FC<AddPlotDimensionsProps> = ({ formData, updateFormData }) => {
    const handleTotalPlotsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(e.target.value) || 0;
        const newDimensions = Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            size: formData.plotDimensions[i]?.size || '',
            unit: formData.plotDimensions[i]?.unit || 'Sqyds',
            dimensions: formData.plotDimensions[i]?.dimensions || '',
            floorPlanFile: formData.plotDimensions[i]?.floorPlanFile || null
        }));
        updateFormData({ plotDimensions: newDimensions });
    };

    const handleUpdate = (idx: number, field: keyof PlotDimension, value: any) => {
        const newDimensions = [...formData.plotDimensions];
        newDimensions[idx] = { ...newDimensions[idx], [field]: value };
        updateFormData({ plotDimensions: newDimensions });
    };

    const removeRow = (idx: number) => {
        const newDimensions = formData.plotDimensions.filter((_, i) => i !== idx);
        updateFormData({ plotDimensions: newDimensions });
    };

    const addRow = () => {
        const newRow = { id: Date.now(), size: '', unit: 'Sqyds', dimensions: '', floorPlanFile: null };
        updateFormData({ plotDimensions: [...formData.plotDimensions, newRow] });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Maximize size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Add Plot Dimensions
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        DEFINING DIMENSIONS & FLOOR PLANS
                    </p>
                </div>
            </div>

            <div className="max-w-xs space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Total No of Plots
                </label>
                <input 
                    type="number"
                    value={formData.plotDimensions.length}
                    onChange={handleTotalPlotsChange}
                    placeholder="0"
                    className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <th className="px-6 py-2 w-20 text-center">S. No.</th>
                            <th className="px-6 py-2">Plot Size</th>
                            <th className="px-6 py-2">Unit</th>
                            <th className="px-6 py-2">Dimensions</th>
                            <th className="px-6 py-2">Add Floor Plans</th>
                            <th className="px-6 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.plotDimensions.map((item, idx) => (
                            <tr key={item.id} className="group">
                                <td className="px-6 h-16 bg-gray-50 border-y border-l border-gray-100 rounded-l-2xl text-xs font-black text-[#1a1c21] text-center">
                                    {idx + 1}
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="number"
                                        value={item.size}
                                        onChange={(e) => handleUpdate(idx, 'size', e.target.value)}
                                        placeholder="e.g. 120"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#2FED9A]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <select 
                                        value={item.unit}
                                        onChange={(e) => handleUpdate(idx, 'unit', e.target.value)}
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-3 font-bold text-xs outline-none focus:border-[#2FED9A]"
                                    >
                                        <option value="Sqyds">Sqyds</option>
                                        <option value="Sqmtr">Sqmtr</option>
                                    </select>
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="text"
                                        value={item.dimensions}
                                        onChange={(e) => handleUpdate(idx, 'dimensions', e.target.value)}
                                        placeholder="e.g. 10 * 12"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#2FED9A]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <label className="flex items-center justify-between gap-2 cursor-pointer bg-white border border-gray-100 rounded-lg px-4 h-10 hover:border-emerald-200 transition-all">
                                        <span className="text-[10px] font-black uppercase text-gray-400 truncate">
                                            {item.floorPlanFile ? item.floorPlanFile.name : '.gif/.pdf'}
                                        </span>
                                        <FileUp size={14} className="text-emerald-500" />
                                        <input 
                                            type="file" 
                                            className="hidden" 
                                            onChange={(e) => {
                                                if (e.target.files?.[0]) handleUpdate(idx, 'floorPlanFile', e.target.files[0]);
                                            }} 
                                        />
                                    </label>
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-r border-gray-100 rounded-r-2xl text-center">
                                    <button 
                                        onClick={() => removeRow(idx)}
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

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50">
                <button 
                    onClick={addRow}
                    className="px-8 py-4 bg-[#1a1c21] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-3"
                >
                    <Plus size={16} /> Add Button
                </button>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 italic">
                        Note: Plot sizes are always in square yards (Sqyds) or in Square Meter (Sqmtr)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddPlotDimensions;
