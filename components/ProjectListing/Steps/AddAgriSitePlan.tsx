import React, { useState } from 'react';
import { Map, Upload, Navigation, FileUp, CheckCircle } from 'lucide-react';

interface AddAgriSitePlanProps {
    formData: {
        agriDetails: {
            googleLocation: string;
            sitePlanFile: File | null;
            sitePlanFileName: string;
        };
    };
    updateFormData: (data: any) => void;
}

const AddAgriSitePlan: React.FC<AddAgriSitePlanProps> = ({ formData, updateFormData }) => {
    const agri = formData.agriDetails;
    const [isDragOver, setIsDragOver] = useState(false);

    const handleChange = (field: string, value: any) => {
        updateFormData({
            agriDetails: {
                ...agri,
                [field]: value
            }
        });
    };

    const handleFileDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleChange('sitePlanFile', file);
            handleChange('sitePlanFileName', file.name);
        }
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            {/* Header */}
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Map size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Site Plan & Location
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        PROJECT DETAILS – SCREEN 4
                    </p>
                </div>
            </div>

            {/* Section 1: Site Plan Upload */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <p className="text-sm font-black text-[#1a1c21] uppercase tracking-tight">
                        You are required to provide the site plan
                    </p>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-[9px] font-black uppercase tracking-widest rounded-full">Required</span>
                </div>

                {/* Upload Zone */}
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleFileDrop}
                    className={`relative rounded-3xl border-2 border-dashed transition-all duration-300 ${
                        isDragOver
                            ? 'border-emerald-400 bg-emerald-50 scale-[1.01]'
                            : agri.sitePlanFileName
                                ? 'border-emerald-300 bg-emerald-50/30'
                                : 'border-gray-200 bg-gray-50/50 hover:border-emerald-300 hover:bg-emerald-50/20'
                    }`}
                >
                    <div className="flex items-center gap-6 p-8">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${
                            agri.sitePlanFileName ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-100 text-gray-300'
                        }`}>
                            {agri.sitePlanFileName ? <CheckCircle size={30} /> : <FileUp size={30} />}
                        </div>

                        {/* Text */}
                        <div className="flex-1 space-y-1">
                            {agri.sitePlanFileName ? (
                                <>
                                    <p className="text-sm font-black text-[#1a1c21] truncate">{agri.sitePlanFileName}</p>
                                    <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">File attached successfully</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-sm font-black text-gray-400">Drag & drop or click to upload</p>
                                    <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Accepted: .gif / .pdf / .png / .jpg</p>
                                </>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <label className="cursor-pointer">
                                <div className="px-6 py-3.5 bg-gray-100 text-gray-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
                                    <Upload size={13} />
                                    .gif/.pdf
                                </div>
                                <input
                                    type="file"
                                    accept=".gif,.pdf,.png,.jpg,.jpeg"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            handleChange('sitePlanFile', file);
                                            handleChange('sitePlanFileName', file.name);
                                        }
                                    }}
                                />
                            </label>
                            <label className="cursor-pointer">
                                <div className="px-6 py-3.5 bg-[#1a1c21] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center gap-2">
                                    <CheckCircle size={13} />
                                    Attach / Submit
                                </div>
                                <input
                                    type="file"
                                    accept=".gif,.pdf,.png,.jpg,.jpeg"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            handleChange('sitePlanFile', file);
                                            handleChange('sitePlanFileName', file.name);
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Google Location */}
            <div className="space-y-4">
                <p className="text-sm font-black text-[#1a1c21] uppercase tracking-tight">Add Google Location</p>
                <div className="relative">
                    <input
                        type="text"
                        value={agri.googleLocation || ''}
                        onChange={(e) => handleChange('googleLocation', e.target.value)}
                        placeholder="Paste Google Maps link here…"
                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-6 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 shadow-sm transition-all"
                    />
                    <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                </div>
                <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest pl-1">
                    * Opens in Google Maps for buyers to view the plot location
                </p>
            </div>
        </div>
    );
};

export default AddAgriSitePlan;
