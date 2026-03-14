import React from 'react';
import { DollarSign, Plus, Trash2 } from 'lucide-react';

interface PaymentPlan {
    type: string;
    label: string;
    installments: { milestone: string; percentage: string }[];
}

interface AddDPPProps {
    formData: {
        paymentPlans: PaymentPlan[];
    };
    updateFormData: (data: any) => void;
}

const AddDPP: React.FC<AddDPPProps> = ({ formData, updateFormData }) => {
    const setFormData = (data: any) => updateFormData(data);
    const plan = formData.paymentPlans.find(p => p.type === 'DPP');

    const installments = plan?.installments || [
        { milestone: 'At the time of booking', percentage: '10' },
        { milestone: 'With in 45 Days', percentage: '85' },
        { milestone: 'On Possession', percentage: '5' }
    ];

    const updateInstallment = (idx: number, field: 'milestone' | 'percentage', value: string) => {
        const newPlans = [...formData.paymentPlans];
        const planIdx = newPlans.findIndex(p => p.type === 'DPP');
        if (planIdx === -1) return;

        if (!newPlans[planIdx].installments[idx]) {
            newPlans[planIdx].installments[idx] = { milestone: '', percentage: '' };
        }
        newPlans[planIdx].installments[idx][field] = value;
        setFormData({ paymentPlans: newPlans });
    };

    const addInstallment = () => {
        const newPlans = [...formData.paymentPlans];
        const planIdx = newPlans.findIndex(p => p.type === 'DPP');
        if (planIdx === -1) return;

        if (!newPlans[planIdx].installments) newPlans[planIdx].installments = [];
        newPlans[planIdx].installments.push({ milestone: '', percentage: '' });
        setFormData({ paymentPlans: newPlans });
    };

    const removeInstallment = (idx: number) => {
        const newPlans = [...formData.paymentPlans];
        const planIdx = newPlans.findIndex(p => p.type === 'DPP');
        if (planIdx === -1) return;

        newPlans[planIdx].installments.splice(idx, 1);
        setFormData({ paymentPlans: newPlans });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <DollarSign size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        {plan?.label || 'Down Payment Plan'}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROVIDE THE INSTALLMENT DETAILS</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-[#1a1c21] rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] w-20">S. No.</span>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] flex-1 ml-4">Demand State / Milestone</span>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-48 text-right pr-4">Payment in (%)</span>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-20 text-right pr-4">Action</span>
                </div>
                <div className="space-y-3">
                    {installments.map((inst, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-gray-50/50 p-2 rounded-2xl border border-gray-100/30 group hover:bg-white hover:border-emerald-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 text-center font-black text-[10px] text-gray-300 group-hover:text-emerald-500 transition-colors">{idx + 1}</div>
                            <div className="flex-1">
                                <input 
                                    type="text"
                                    value={inst.milestone}
                                    onChange={(e) => updateInstallment(idx, 'milestone', e.target.value)}
                                    placeholder="Enter Milestone"
                                    className="w-full bg-transparent px-4 py-2.5 text-[11px] font-bold text-[#1a1c21] outline-none"
                                />
                            </div>
                            <div className="w-40 mr-2">
                                <div className="bg-white rounded-xl border border-gray-100 group-hover:border-emerald-100 transition-all flex items-center px-4">
                                    <input 
                                        type="text"
                                        value={inst.percentage}
                                        onChange={(e) => updateInstallment(idx, 'percentage', e.target.value)}
                                        placeholder="0"
                                        className="w-full bg-transparent py-2.5 text-center text-xs font-black text-emerald-500 outline-none"
                                    />
                                    <span className="text-[10px] font-black text-gray-200">%</span>
                                </div>
                            </div>
                            <div className="w-12 text-center">
                                <button 
                                    onClick={() => removeInstallment(idx)}
                                    className="p-2 text-gray-200 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 ">
                <button 
                    onClick={addInstallment}
                    className="px-8 py-4 bg-[#1a1c21] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-3"
                >
                    <Plus size={16} /> Add Installment
                </button>
            </div>
        </div>
    );
};

export default AddDPP;
