import React, { useState } from 'react';
import { Maximize, Upload, Trash2, Plus, FileUp, Info } from 'lucide-react';

interface PlotDimensionRow {
    id: number;
    landSize: string;
    unit: 'Sqmtrs' | 'Sqyds';
    dimensions: string;
    attachedFile: File | null;
    fileName: string;
}

interface AddAgriPlotDimensionsProps {
    formData: {
        agriPlotDimensions: PlotDimensionRow[];
    };
    updateFormData: (data: any) => void;
}

const AddAgriPlotDimensions: React.FC<AddAgriPlotDimensionsProps> = ({ formData, updateFormData }) => {
    const rows = formData.agriPlotDimensions || [];

    const addRow = () => {
        updateFormData({
            agriPlotDimensions: [
                ...rows,
                { id: Date.now(), landSize: '', unit: 'Sqmtrs', dimensions: '', attachedFile: null, fileName: '' }
            ]
        });
    };

    const removeRow = (id: number) => {
        updateFormData({ agriPlotDimensions: rows.filter(r => r.id !== id) });
    };

    const updateRow = (id: number, field: string, value: any) => {
        updateFormData({
            agriPlotDimensions: rows.map(r => r.id === id ? { ...r, [field]: value } : r)
        });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            {/* Header */}
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Maximize size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Add Plot Dimensions
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        PROJECT DETAILS – SCREEN 3
                    </p>
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[60px_1fr_140px_1fr_160px_50px] gap-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span>S. No.</span>
                <span>Land Size</span>
                <span className="text-center">Unit</span>
                <span>Dimensions</span>
                <span className="text-center">Attach Plans</span>
                <span></span>
            </div>

            {/* Rows */}
            <div className="space-y-3">
                {rows.length === 0 && (
                    <div className="flex items-center justify-center h-28 rounded-2xl border-2 border-dashed border-gray-100 text-gray-300 text-xs font-bold uppercase tracking-widest">
                        No plot dimensions added yet
                    </div>
                )}
                {rows.map((row, idx) => (
                    <div
                        key={row.id}
                        className="grid grid-cols-[60px_1fr_140px_1fr_160px_50px] gap-4 items-center bg-gray-50/50 px-4 py-3 rounded-[20px] border border-gray-100/50 hover:bg-white hover:border-emerald-100 hover:shadow-md transition-all group"
                    >
                        {/* S.No */}
                        <div className="w-10 h-10 rounded-xl bg-[#1a1c21] flex items-center justify-center text-xs font-black text-[#2FED9A]">
                            {idx + 1}
                        </div>

                        {/* Land Size */}
                        <input
                            type="text"
                            value={row.landSize}
                            onChange={(e) => updateRow(row.id, 'landSize', e.target.value)}
                            placeholder="e.g. 120000"
                            className="w-full h-12 bg-white border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                        />

                        {/* Unit Toggle */}
                        <div className="flex gap-1.5">
                            {(['Sqmtrs', 'Sqyds'] as const).map(u => (
                                <button
                                    key={u}
                                    onClick={() => updateRow(row.id, 'unit', u)}
                                    className={`flex-1 h-12 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all border-2 ${
                                        row.unit === u
                                            ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                            : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                    }`}
                                >
                                    {u}
                                </button>
                            ))}
                        </div>

                        {/* Dimensions */}
                        <input
                            type="text"
                            value={row.dimensions}
                            onChange={(e) => updateRow(row.id, 'dimensions', e.target.value)}
                            placeholder="e.g. 100 x 120 ft"
                            className="w-full h-12 bg-white border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                        />

                        {/* Attach File */}
                        <label className="cursor-pointer group/upload">
                            <div className={`h-12 rounded-xl border-2 border-dashed flex items-center justify-center gap-2 transition-all px-3 ${
                                row.fileName
                                    ? 'border-emerald-400 bg-emerald-50 text-emerald-600'
                                    : 'border-gray-200 bg-white text-gray-300 hover:border-emerald-400 hover:bg-emerald-50/30 hover:text-emerald-500'
                            }`}>
                                {row.fileName ? (
                                    <>
                                        <FileUp size={13} />
                                        <span className="text-[9px] font-black uppercase truncate max-w-[80px]">{row.fileName}</span>
                                    </>
                                ) : (
                                    <>
                                        <Upload size={13} />
                                        <span className="text-[9px] font-black uppercase">.gif/.pdf</span>
                                    </>
                                )}
                            </div>
                            <input
                                type="file"
                                accept=".gif,.pdf,.png,.jpg,.jpeg"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        updateRow(row.id, 'attachedFile', file);
                                        updateRow(row.id, 'fileName', file.name);
                                    }
                                }}
                            />
                        </label>

                        {/* Delete */}
                        <button
                            onClick={() => removeRow(row.id)}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-200 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100 opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 size={15} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <button
                    onClick={addRow}
                    className="px-8 py-4 bg-[#1a1c21] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-3 active:scale-95"
                >
                    <Plus size={16} /> Add Button
                </button>

                <div className="flex items-start gap-3 max-w-xs bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4">
                    <Info size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-[9px] font-bold text-amber-700 leading-relaxed">
                        Note: Plot sizes are always in square yards (Sqyds) or in Square Meter (Sqmtr)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddAgriPlotDimensions;
