import React, { useState } from 'react';
import { IndianRupee, CheckCircle } from 'lucide-react';

interface AddAgriPricingProps {
    formData: {
        agriLand: {
            pricePerUnit: string;
            totalLand: string;
            totalDemand: string;
            pricingConfirmed: boolean;
        };
    };
    updateFormData: (data: any) => void;
    onSubmit?: () => void;
}

const AddAgriPricing: React.FC<AddAgriPricingProps> = ({ formData, updateFormData, onSubmit }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const fields = [
        { key: 'pricePerUnit', label: 'Price Per Bigha / Meter / Acres / Hectare', placeholder: '₹ 0.00' },
        { key: 'totalLand', label: 'Total Land', placeholder: 'e.g. 5 Bigha' },
        { key: 'totalDemand', label: 'Total Demand', placeholder: '₹ 0.00' },
    ];

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-5 pb-5 border-b border-gray-50">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IndianRupee size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">Pricing Details</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AGRICULTURAL PROJECT — PRICING OVERVIEW</p>
                </div>
            </div>

            {/* Pricing fields */}
            <div className="space-y-4">
                {fields.map(({ key, label, placeholder }) => (
                    <div key={key} className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                        <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">{label}</p>
                        <input
                            type="text"
                            value={(land as any)[key] || ''}
                            onChange={(e) => update(key, e.target.value)}
                            placeholder={placeholder}
                            className="w-44 h-11 bg-white border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all text-right flex-shrink-0"
                        />
                    </div>
                ))}
            </div>

            {/* Declaration */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-2">
                <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Declaration:</p>
                <p className="text-sm font-bold text-amber-900 leading-relaxed">
                    That I declare that the information has been shared by me is true as per the best of my knowledge.
                    Any misleading information will cause the legal action against me.
                </p>
            </div>

            {/* Confirm + Submit */}
            <div className="flex gap-4">
                <button
                    onClick={() => update('pricingConfirmed', !land.pricingConfirmed)}
                    className={`flex items-center gap-3 px-6 py-3.5 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                        land.pricingConfirmed
                            ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-lg'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}
                >
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                        land.pricingConfirmed ? 'bg-[#2FED9A] border-[#2FED9A]' : 'border-gray-300'
                    }`}>
                        {land.pricingConfirmed && <CheckCircle size={13} className="text-[#1a1c21]" />}
                    </div>
                    I Confirmed
                </button>

                <button
                    onClick={onSubmit}
                    disabled={!land.pricingConfirmed}
                    className={`flex-1 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                        land.pricingConfirmed
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600'
                            : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddAgriPricing;
