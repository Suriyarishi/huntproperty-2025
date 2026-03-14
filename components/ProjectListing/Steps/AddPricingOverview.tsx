import React from 'react';
import { DollarSign, Plus, Trash2 } from 'lucide-react';

interface PaymentPlan {
    id: number;
    type: string;
    label: string;
    price: string;
    installments: { milestone: string; percentage: string }[];
}

interface AddPricingOverviewProps {
    formData: {
        bsp: string;
        pricingUnit: string;
        paymentPlans: PaymentPlan[];
    };
    updateFormData: (data: any) => void;
}

const AddPricingOverview: React.FC<AddPricingOverviewProps> = ({ formData, updateFormData }) => {
    const setFormData = (data: any) => updateFormData(data);

    return (
        <div className="space-y-12 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50/50">
                <div className="w-16 h-16 bg-emerald-50/50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <DollarSign size={28} strokeWidth={2.5} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tighter">Pricing & Plans</h3>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Configure your project rates</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Basic Sales Price (BSP)</label>
                    <div className="relative group">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-black text-emerald-500 transition-colors">₹</div>
                        <input 
                            type="number"
                            value={formData.bsp}
                            onChange={(e) => setFormData({ bsp: e.target.value })}
                            placeholder="19000"
                            className="w-full h-16 bg-gray-50 border border-transparent rounded-2xl px-12 font-black text-2xl text-[#1a1c21] outline-none focus:border-emerald-100 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Unit Selection</label>
                    <div className="flex gap-2 h-16 p-1.5 bg-gray-50 rounded-2xl border border-gray-100/50">
                        {['SQFT', 'SQYD', 'SQM', 'ACRE', 'BEGHA'].map((u) => (
                            <button 
                                key={u}
                                onClick={() => setFormData({ pricingUnit: u })}
                                className={`flex-1 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${formData.pricingUnit === u ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {u}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-gray-50/50">
                <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Payment Plan Tiers</h4>
                    <button 
                        onClick={() => setFormData({
                            paymentPlans: [
                                ...formData.paymentPlans,
                                { id: Date.now(), type: 'CUSTOM', label: '', price: '', installments: [] }
                            ]
                        })}
                        className="flex items-center gap-2.5 px-6 py-2.5 bg-gray-50 border border-emerald-100/50 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                    >
                        <Plus size={14} /> Add Plan
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {formData.paymentPlans.map((p, idx) => (
                        <div key={p.id} className="relative group bg-white p-6 rounded-3xl border border-gray-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
                            <div className="flex flex-col gap-0.5 mb-4">
                                <span className="text-[9px] font-black uppercase text-emerald-500 tracking-widest">{p.type === 'CUSTOM' ? 'Custom' : p.type}</span>
                                <input 
                                    type="text"
                                    value={p.label}
                                    onChange={(e) => {
                                        const newPlans = [...formData.paymentPlans];
                                        newPlans[idx].label = e.target.value;
                                        setFormData({ paymentPlans: newPlans });
                                    }}
                                    placeholder="Plan Name"
                                    className="text-[10px] font-black text-[#1a1c21] uppercase tracking-wide outline-none bg-transparent border-b border-transparent focus:border-emerald-100 pb-0.5 w-full"
                                />
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-black text-emerald-500">₹</span>
                                <input 
                                    type="number"
                                    value={p.price}
                                    onChange={(e) => {
                                        const newPlans = [...formData.paymentPlans];
                                        newPlans[idx].price = e.target.value;
                                        setFormData({ paymentPlans: newPlans });
                                    }}
                                    placeholder="0"
                                    className="w-full bg-transparent font-black text-2xl text-[#1a1c21] outline-none placeholder:text-gray-100"
                                />
                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">/{formData.pricingUnit}</span>
                            </div>
                            
                            {p.type === 'CUSTOM' && (
                                <button 
                                    onClick={() => setFormData({
                                        paymentPlans: formData.paymentPlans.filter(item => item.id !== p.id)
                                    })}
                                    className="absolute top-4 right-4 text-gray-200 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={14} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddPricingOverview;
