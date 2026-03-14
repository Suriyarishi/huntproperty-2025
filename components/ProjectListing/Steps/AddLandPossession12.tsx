import React from 'react';
import { Landmark, Plus, Trash2 } from 'lucide-react';

interface BankLoanRow {
    id: number;
    bankName: string;
    bankBranch: string;
    bankAddress: string;
    dateOfLoan: string;
    emiAmount: string;
    paidEmi: string;
}

interface AddLandPossession12Props {
    formData: {
        agriLand: {
            loanOnLand: boolean | null;
            bankLoans: BankLoanRow[];
        };
    };
    updateFormData: (data: any) => void;
}

const emptyLoan = (): BankLoanRow => ({
    id: Date.now(),
    bankName: '',
    bankBranch: '',
    bankAddress: '',
    dateOfLoan: '',
    emiAmount: '',
    paidEmi: '',
});

const AddLandPossession12: React.FC<AddLandPossession12Props> = ({ formData, updateFormData }) => {
    const land = formData.agriLand;

    const update = (field: string, value: any) => {
        updateFormData({ agriLand: { ...land, [field]: value } });
    };

    const addLoan = () => {
        update('bankLoans', [...(land.bankLoans || []), emptyLoan()]);
    };

    const removeLoan = (id: number) => {
        update('bankLoans', (land.bankLoans || []).filter((l) => l.id !== id));
    };

    const updateLoan = (id: number, field: string, value: string) => {
        update('bankLoans', (land.bankLoans || []).map((l) => l.id === id ? { ...l, [field]: value } : l));
    };

    const loanFields: { key: keyof BankLoanRow; label: string; type?: string; placeholder?: string }[] = [
        { key: 'bankName', label: 'Bank Name', placeholder: 'e.g. State Bank of India' },
        { key: 'bankBranch', label: 'Bank Branch', placeholder: 'Branch name' },
        { key: 'bankAddress', label: 'Bank Address', placeholder: 'Full address' },
        { key: 'dateOfLoan', label: 'Date of Loan Borrow', type: 'date', placeholder: '' },
        { key: 'emiAmount', label: 'EMI Amount', placeholder: '₹ 0.00' },
        { key: 'paidEmi', label: 'Paid EMI', placeholder: '0' },
    ];

    return (
        <div className="space-y-5 animate-fade-in bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-5 pb-5 border-b border-gray-50">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Landmark size={28} />
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1a1c21]">About Land Possession</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PROJECT DETAILS – SCREEN 12</p>
                </div>
            </div>

            <div className="space-y-5">
                {/* Main question */}
                <div className="flex items-center gap-4 p-4 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <p className="font-bold text-[#1a1c21] text-sm flex-1 min-w-0">
                        Is any loan against this land has been borrowed by landlord from any bank?
                    </p>
                    <div className="flex gap-2 flex-shrink-0">
                        {[true, false].map((val) => (
                            <button
                                key={String(val)}
                                onClick={() => {
                                    update('loanOnLand', val);
                                    if (!val) update('bankLoans', []);
                                }}
                                className={`w-16 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                    land.loanOnLand === val
                                        ? 'bg-[#1a1c21] border-[#1a1c21] text-[#2FED9A] shadow-md'
                                        : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                }`}
                            >
                                {val ? 'Yes' : 'No'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conditional: loan form */}
                {land.loanOnLand === true && (
                    <div className="animate-fade-in border-l-4 border-amber-200 pl-4 space-y-4">
                        <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
                            If Yes, then you are requested to provide the following details:
                        </p>

                        {(land.bankLoans || []).length === 0 && (
                            <div className="flex items-center justify-center h-14 rounded-2xl border-2 border-dashed border-gray-100 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                                No loan entries added yet
                            </div>
                        )}

                        {(land.bankLoans || []).map((loan, idx) => (
                            <div key={loan.id} className="bg-gray-50/60 border border-gray-100 rounded-2xl p-5 space-y-3 group hover:border-amber-100 hover:bg-white hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Loan Entry #{idx + 1}</span>
                                    <button
                                        onClick={() => removeLoan(loan.id)}
                                        className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-200 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100"
                                    >
                                        <Trash2 size={13} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {loanFields.map(({ key, label, type, placeholder }) => (
                                        key !== 'id' && (
                                            <div key={key} className="space-y-1.5">
                                                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{label}</label>
                                                <input
                                                    type={type || 'text'}
                                                    value={loan[key] as string}
                                                    onChange={(e) => updateLoan(loan.id, key, e.target.value)}
                                                    placeholder={placeholder}
                                                    className="w-full h-11 bg-white border border-gray-100 rounded-xl px-4 font-bold text-sm text-[#1a1c21] outline-none focus:border-emerald-500 transition-all"
                                                />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={addLoan}
                            className="px-6 py-3 bg-[#1a1c21] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-2.5 active:scale-95"
                        >
                            <Plus size={13} /> Add Loan Entry
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLandPossession12;
