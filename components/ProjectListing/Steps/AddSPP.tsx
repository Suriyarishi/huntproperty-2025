import React from 'react';
import { Star, Plus } from 'lucide-react';

interface PaymentPlan {
    type: string;
    label: string;
    installments: { milestone: string; percentage: string }[];
}

interface AddSPPProps {
    formData: {
        paymentPlans: PaymentPlan[];
    };
    updateFormData: (data: any) => void;
}

const AddSPP: React.FC<AddSPPProps> = ({ formData, updateFormData }) => {
    const setFormData = (data: any) => updateFormData(data);
    const plan = formData.paymentPlans.find(p => p.type === 'SPP');

    const installments = plan?.installments || [
        { milestone: 'At the time of booking', percentage: '10' },
        { milestone: 'With in 45 Days', percentage: '30' },
        { milestone: 'On Completion of 10th Floor', percentage: '20 & So on' }
    ];

    const updateInstallment = (idx: number, field: 'milestone' | 'percentage', value: string) => {
        const newPlans = [...formData.paymentPlans];
        const planIdx = newPlans.findIndex(p => p.type === 'SPP');
        if (planIdx === -1) return;

        if (!newPlans[planIdx].installments[idx]) {
            newPlans[planIdx].installments[idx] = { milestone: '', percentage: '' };
        }
        newPlans[planIdx].installments[idx][field] = value;
        setFormData({ paymentPlans: newPlans });
    };

    const addInstallment = () => {
        const newPlans = [...formData.paymentPlans];
        const planIdx = newPlans.findIndex(p => p.type === 'SPP');
        if (planIdx === -1) return;

        if (!newPlans[planIdx].installments) newPlans[planIdx].installments = [];
        newPlans[planIdx].installments.push({ milestone: '', percentage: '' });
        setFormData({ paymentPlans: newPlans });
    };

    return (
        <div className="space-y-10 animate-fade-in bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50/50">
                <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center">
                    <Star size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tighter">
                        {plan?.label || 'Special Payment Plan'}
                    </h3>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Provide the installment details</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-[#1a1c21] rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] w-20">S. No.</span>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] flex-1 ml-4">Demand State</span>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-48 text-right pr-4">Payment in (%)</span>
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
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50/50">
                <button 
                    onClick={addInstallment}
                    className="px-8 py-3 bg-[#1a1c21] text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all shadow-lg flex items-center gap-3"
                >
                    <Plus size={14} /> Add Installment
                </button>
                <div className="bg-orange-50/50 px-5 py-2.5 rounded-xl border border-orange-100/50">
                    <p className="text-[8px] font-black text-orange-600/70 uppercase tracking-widest text-center">
                        Note: Total installments must equal 100%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddSPP;
