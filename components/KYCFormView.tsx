import React, { useState } from 'react';
import {
    FileText, User, MapPin, Phone, Mail, CreditCard,
    ChevronDown, Calendar, ShieldCheck, Plus, Check,
    Building2, ClipboardList, DollarSign, Users,
    ArrowUpRight, Info, Search, Save, Download
} from 'lucide-react';

interface KYCFormViewProps {
    userName?: string;
}

const KYCFormView: React.FC<KYCFormViewProps> = ({ userName = 'vinay rathore' }) => {
    // Lead Details State
    const [leadSource, setLeadSource] = useState<string[]>([]);
    const [otherLeadSource, setOtherLeadSource] = useState('');

    // Booking Details State
    const [bookingData, setBookingData] = useState({
        builder: '',
        project: '',
        monthOfBooking: '',
        dateOfBooking: '',
        branchLocation: '',
        applicantName: '',
        address: '',
        mobileNo: '',
        emailId: '',
        pan: '',
        teamName: '',
        teamLeader: '',
        addSecondApplicant: false,
        sharing: '',
        bookingDoneBy: userName,
        reportingTo: '',
        plan: '',
        tower: '',
        floorNo: '',
        unitNo: '',
        area: '',
        areaUnit: 'Sq. Ft.',
        creditNoteBroker: '',
        schemesIncentives: '',
        loanSelfFunding: '',
        paymentType: '',
        paymentAmount: '',
        paymentNo: '',
        paymentDate: '',
        bankName: '',
        addSecondPayment: false
    });

    // Costing Details State
    const [bspData, setBspData] = useState({
        bspRate: 0,
        inauguralDiscount: 0,
        onFormDiscount: 0,
        gstRebate: 0
    });

    const [plcData, setPlcData] = useState({
        floorPlc: { amount: 0, discount: 0 },
        facingPlc: { amount: 0, discount: 0 },
        otherPlc: { amount: 0, discount: 0 }
    });

    const [otherCharges, setOtherCharges] = useState<Record<string, { amount: number, discount: number }>>({
        openCarParking: { amount: 0, discount: 0 },
        stiltCarParking: { amount: 0, discount: 0 },
        coveredCarParking: { amount: 0, discount: 0 },
        clubMembership: { amount: 0, discount: 0 },
        powerBackup: { amount: 0, discount: 0 },
        ifms: { amount: 0, discount: 0 },
        leaseRent: { amount: 0, discount: 0 },
        ffc: { amount: 0, discount: 0 },
        eec: { amount: 0, discount: 0 },
        idc: { amount: 0, discount: 0 },
        other: { amount: 0, discount: 0 },
        terraceGarden: { amount: 0, discount: 0 },
        meter: { amount: 0, discount: 0 }
    });

    // Revenue State
    const [revenueData, setRevenueData] = useState({
        type: '',
        totalRevenue: 0,
        brokerRevenue: 0,
        clientDiscount: 0,
        teamRevenue: 0
    });

    // Calculations
    const bspOnForm: number = bspData.bspRate - bspData.inauguralDiscount - bspData.onFormDiscount;
    const effectiveBsp: number = bspOnForm - bspData.gstRebate;

    const calculateNet = (item: { amount: number, discount: number }): number => item.amount - item.discount;

    const plcTotal: number = calculateNet(plcData.floorPlc) + calculateNet(plcData.facingPlc) + calculateNet(plcData.otherPlc);

    const otherChargesTotal: number = (Object.values(otherCharges) as { amount: number, discount: number }[]).reduce((sum: number, item) => sum + calculateNet(item), 0);

    const netCostOnForm: number = bspOnForm + plcTotal + otherChargesTotal;
    const netCostToCustomer: number = effectiveBsp + plcTotal + otherChargesTotal;

    const handleLeadSourceToggle = (source: string) => {
        setLeadSource(prev =>
            prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]
        );
    };

    return (
        <div className="space-y-12 animate-fade-in-up pb-20">
            {/* Header / Title Section */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 pb-6 gap-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">KYC Document</h2>
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Digital Booking Record & Verification</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Builder</label>
                        <input
                            type="text"
                            className="h-10 border border-gray-200 rounded-lg px-4 text-sm outline-none w-48 bg-gray-50/50"
                            placeholder="Builder Name"
                            value={bookingData.builder}
                            onChange={(e) => setBookingData({ ...bookingData, builder: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Project</label>
                        <input
                            type="text"
                            className="h-10 border border-gray-200 rounded-lg px-4 text-sm outline-none w-48 bg-gray-50/50"
                            placeholder="Project Name"
                            value={bookingData.project}
                            onChange={(e) => setBookingData({ ...bookingData, project: e.target.value })}
                        />
                    </div>
                    <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-teal-500 hover:border-teal-200 transition-all shadow-sm self-end">
                        <Download size={20} />
                    </button>
                </div>
            </div>

            {/* 1. Lead Details Section */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#ff3d3d] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white">
                        <Users size={20} />
                        <h3 className="text-sm font-black uppercase tracking-widest">Lead Details</h3>
                    </div>
                </div>
                <div className="p-10 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Source of Lead <span className="text-red-500">*</span></label>
                        <div className="flex flex-wrap gap-x-12 gap-y-6">
                            {['Company SMS', 'Personal SMS', 'Advertisement', 'Reference', 'Recycle Data', 'Online'].map((source) => (
                                <label key={source} className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        onClick={() => handleLeadSourceToggle(source)}
                                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${leadSource.includes(source) ? 'bg-[#ff3d3d] border-[#ff3d3d] shadow-lg' : 'border-gray-200 group-hover:border-[#ff3d3d]'}`}
                                    >
                                        {leadSource.includes(source) && <Check size={14} className="text-white" strokeWidth={4} />}
                                    </div>
                                    <span className="text-[13px] font-bold text-gray-500 group-hover:text-[#1a1c21]">{source}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <span className="text-[13px] font-bold text-gray-400 italic">if others(specify):</span>
                        <input
                            type="text"
                            className="flex-1 border-b border-gray-200 pb-1 text-sm outline-none font-bold text-[#1a1c21] bg-transparent focus:border-[#ff3d3d] transition-all"
                            value={otherLeadSource}
                            onChange={(e) => setOtherLeadSource(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* 2. Customer & Booking Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Booking Details Part 1 */}
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-[#ff3d3d] p-4 flex items-center gap-3 text-white">
                        <ClipboardList size={20} />
                        <h3 className="text-sm font-black uppercase tracking-widest">Booking & Applicant Details</h3>
                    </div>
                    <div className="overflow-hidden">
                        <table className="w-full border-collapse">
                            <tbody>
                                {[
                                    { sr: '1', label: 'Month of Booking', key: 'monthOfBooking', required: true },
                                    { sr: '2', label: 'Date of Booking', key: 'dateOfBooking', required: true, type: 'date' },
                                    { sr: '3', label: 'HP Branch Location', key: 'branchLocation', required: true },
                                    { sr: '4.(a)', label: 'First Applicant Name', key: 'applicantName', required: true },
                                    { sr: '4.(b)', label: 'Address', key: 'address', required: true, type: 'textarea' },
                                    { sr: '4.(c)', label: 'Mobile No.', key: 'mobileNo', required: true },
                                    { sr: '4.(d)', label: 'Email ID', key: 'emailId', required: true },
                                    { sr: '4.(e)', label: 'PAN', key: 'pan', required: true },
                                    { sr: '5', label: 'Team Name', key: 'teamName' },
                                    { sr: '6', label: 'Team Leader', key: 'teamLeader' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-50">
                                        <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">{row.sr}.</td>
                                        <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50 w-48">
                                            {row.label} {row.required && <span className="text-red-500">*</span>}
                                        </td>
                                        <td className="p-2">
                                            {row.type === 'textarea' ? (
                                                <textarea
                                                    className="w-full bg-gray-50/50 rounded-lg p-2 text-sm outline-none min-h-[80px] font-bold text-[#1a1c21] focus:bg-white transition-all"
                                                    value={bookingData[row.key as keyof typeof bookingData] as string}
                                                    onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                                />
                                            ) : row.type === 'date' ? (
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] focus:bg-white transition-all"
                                                        value={bookingData[row.key as keyof typeof bookingData] as string}
                                                        onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                                    />
                                                </div>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] focus:bg-white transition-all"
                                                    value={bookingData[row.key as keyof typeof bookingData] as string}
                                                    onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="border-b border-gray-50">
                                    <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">7.</td>
                                    <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Add Second Applicant?</td>
                                    <td className="p-4">
                                        <label className="flex items-center gap-2 cursor-pointer group w-fit">
                                            <div
                                                onClick={() => setBookingData({ ...bookingData, addSecondApplicant: !bookingData.addSecondApplicant })}
                                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${bookingData.addSecondApplicant ? 'bg-teal-500 border-teal-500' : 'border-gray-200'}`}
                                            >
                                                {bookingData.addSecondApplicant && <Check size={12} className="text-white" strokeWidth={4} />}
                                            </div>
                                            <span className="text-sm font-bold text-gray-500">Yes</span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">8.</td>
                                    <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Sharing *</td>
                                    <td className="p-4">
                                        <div className="flex gap-8">
                                            {['Yes', 'No'].map((opt) => (
                                                <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                    <div
                                                        onClick={() => setBookingData({ ...bookingData, sharing: opt })}
                                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center p-1 transition-all ${bookingData.sharing === opt ? 'border-teal-500' : 'border-gray-200'}`}
                                                    >
                                                        {bookingData.sharing === opt && <div className="w-full h-full bg-teal-500 rounded-full" />}
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-500">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Booking Details Part 2 */}
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#ff3d3d] p-4 flex items-center gap-3 text-white">
                        <Building2 size={20} />
                        <h3 className="text-sm font-black uppercase tracking-widest">Property Assignment</h3>
                    </div>
                    <div className="overflow-hidden flex-1">
                        <table className="w-full border-collapse h-full">
                            <tbody>
                                {[
                                    { sr: '9', label: 'Booking Done By (For Employee)', key: 'bookingDoneBy', required: true, disabled: true },
                                    { sr: '10', label: 'Reporting To', key: 'reportingTo', required: true },
                                    { sr: '11', label: 'Plan (FLEXI / CLP / DP)', key: 'plan', required: true },
                                    { sr: '12', label: 'Tower', key: 'tower' },
                                    { sr: '13', label: 'Floor No.', key: 'floorNo' },
                                    { sr: '14', label: 'Unit No.', key: 'unitNo' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-50">
                                        <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">{row.sr}.</td>
                                        <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50 w-48">
                                            {row.label} {row.required && <span className="text-red-500">*</span>}
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                disabled={row.disabled}
                                                className={`w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] focus:bg-white transition-all ${row.disabled ? 'opacity-60 italic' : ''}`}
                                                value={bookingData[row.key as keyof typeof bookingData] as string}
                                                onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                ))}
                                <tr className="border-b border-gray-50">
                                    <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">15.</td>
                                    <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Area *</td>
                                    <td className="p-2">
                                        <div className="flex gap-2">
                                            <input
                                                type="number"
                                                className="flex-1 bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] focus:bg-white transition-all"
                                                placeholder="Total Area"
                                                value={bookingData.area}
                                                onChange={(e) => setBookingData({ ...bookingData, area: e.target.value })}
                                            />
                                            <div className="relative w-32">
                                                <select
                                                    className="w-full h-full bg-gray-100/50 rounded-lg px-4 text-xs font-black outline-none appearance-none"
                                                    value={bookingData.areaUnit}
                                                    onChange={(e) => setBookingData({ ...bookingData, areaUnit: e.target.value })}
                                                >
                                                    <option>Sq. Ft.</option>
                                                    <option>Sq. Yds.</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">16.</td>
                                    <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Credit Note / Broker</td>
                                    <td className="p-4">
                                        <div className="flex gap-8">
                                            {['Yes', 'No'].map((opt) => (
                                                <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                    <div
                                                        onClick={() => setBookingData({ ...bookingData, creditNoteBroker: opt })}
                                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center p-1 transition-all ${bookingData.creditNoteBroker === opt ? 'border-teal-500' : 'border-gray-200'}`}
                                                    >
                                                        {bookingData.creditNoteBroker === opt && <div className="w-full h-full bg-teal-500 rounded-full" />}
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-500">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">17.</td>
                                    <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Schemes / Incentives</td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] focus:bg-white transition-all"
                                            value={bookingData.schemesIncentives}
                                            onChange={(e) => setBookingData({ ...bookingData, schemesIncentives: e.target.value })}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">18.</td>
                                    <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Loan / Self Funding *</td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] focus:bg-white transition-all"
                                            value={bookingData.loanSelfFunding}
                                            onChange={(e) => setBookingData({ ...bookingData, loanSelfFunding: e.target.value })}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 3. Costing Details Section */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#ff3d3d] p-4 flex items-center gap-3 text-white">
                    <DollarSign size={20} />
                    <h3 className="text-sm font-black uppercase tracking-widest">Costing Details</h3>
                </div>
                <div className="p-10 space-y-12">
                    {/* BSP Table */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight text-center">Basic Selling Price (BSP)</h4>
                        <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/50 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                                        <th className="px-6 py-4 border-r border-gray-100 text-center w-16">Sr no</th>
                                        <th className="px-6 py-4 border-r border-gray-100">Particulars</th>
                                        <th className="px-6 py-4 border-r border-gray-100 w-48">Per SQFT</th>
                                        <th className="px-6 py-4 w-64">Total Amount (Per SQFT * Area)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { sr: 1, label: 'BSP (as per Rate List)', key: 'bspRate' },
                                        { sr: 2, label: 'Less: Inaugural discount', key: 'inauguralDiscount' },
                                        { sr: 3, label: 'Less: On Form Discount', key: 'onFormDiscount' },
                                        { sr: 4, label: 'BSP on Form (1-2-3)', result: bspOnForm, isBold: true, bg: 'bg-emerald-50/30' },
                                        { sr: 5, label: 'Less: GST REBATE 7.5% OR (C.NOTE)', key: 'gstRebate' },
                                        { sr: 6, label: 'Effective BSP to customer (4-5)', result: effectiveBsp, isBold: true, bg: 'bg-[#2FED9A]/10' },
                                    ].map((row, idx) => (
                                        <tr key={idx} className={`border-b border-gray-50 ${row.bg || ''}`}>
                                            <td className="px-6 py-4 border-r border-gray-50 text-center text-[13px] font-bold text-gray-400">{row.sr}.</td>
                                            <td className={`px-6 py-4 border-r border-gray-50 text-[13px] uppercase tracking-tight ${row.isBold ? 'font-black text-[#1a1c21]' : 'font-bold text-gray-500'}`}>{row.label}</td>
                                            <td className="px-6 py-2 border-r border-gray-50">
                                                {row.key ? (
                                                    <div className="flex items-center gap-2 bg-gray-50/50 rounded-lg px-3 py-2 border border-transparent focus-within:border-teal-200 focus-within:bg-white transition-all">
                                                        <span className="text-gray-400 font-bold">₹</span>
                                                        <input
                                                            type="number"
                                                            className="w-full bg-transparent text-sm font-black text-[#1a1c21] outline-none"
                                                            value={bspData[row.key as keyof typeof bspData]}
                                                            onChange={(e) => setBspData({ ...bspData, [row.key as string]: Number(e.target.value) })}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="px-3 py-2 text-[15px] font-black text-[#1a1c21]">₹ {row.result?.toLocaleString()}</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-2">
                                                <div className="px-3 py-2 text-[15px] font-black text-[#1a1c21]">
                                                    ₹ {((row.key ? bspData[row.key as keyof typeof bspData] : row.result || 0) * (Number(bookingData.area) || 0)).toLocaleString()}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* PLC Details */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight text-center">PLC Details</h4>
                            <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                                            <th className="px-4 py-4 border-r border-gray-100 text-center w-12">Sr no</th>
                                            <th className="px-4 py-4 border-r border-gray-100">Particulars</th>
                                            <th className="px-4 py-4 border-r border-gray-100">Amount</th>
                                            <th className="px-4 py-4 border-r border-gray-100">Discount</th>
                                            <th className="px-4 py-4">Net Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { sr: 7, label: 'Floor PLC', key: 'floorPlc' },
                                            { sr: 8, label: 'Facing PLC (Park Corner)', key: 'facingPlc' },
                                            { sr: 9, label: 'Other PLC', key: 'otherPlc' },
                                            { sr: 10, label: 'Total', result: plcTotal, isBold: true, bg: 'bg-[#ff3d3d]/5' },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-50 ${row.bg || ''}`}>
                                                <td className="px-4 py-4 border-r border-gray-50 text-center text-[12px] font-bold text-gray-400">{row.sr}.</td>
                                                <td className={`px-4 py-4 border-r border-gray-50 text-[12px] uppercase tracking-tight ${row.isBold ? 'font-black text-[#1a1c21]' : 'font-bold text-gray-500'}`}>{row.label}</td>
                                                <td className="px-2 py-2 border-r border-gray-50">
                                                    {row.key && (
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-50/50 rounded px-2 py-1.5 text-xs font-black outline-none"
                                                            value={plcData[row.key as keyof typeof plcData].amount}
                                                            onChange={(e) => setPlcData({ ...plcData, [row.key as string]: { ...plcData[row.key as keyof typeof plcData], amount: Number(e.target.value) } })}
                                                        />
                                                    )}
                                                </td>
                                                <td className="px-2 py-2 border-r border-gray-50">
                                                    {row.key && (
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-50/50 rounded px-2 py-1.5 text-xs font-black outline-none"
                                                            value={plcData[row.key as keyof typeof plcData].discount}
                                                            onChange={(e) => setPlcData({ ...plcData, [row.key as string]: { ...plcData[row.key as keyof typeof plcData], discount: Number(e.target.value) } })}
                                                        />
                                                    )}
                                                </td>
                                                <td className="px-4 py-4 text-[13px] font-black text-[#1a1c21]">
                                                    ₹ {(row.key ? calculateNet(plcData[row.key as keyof typeof plcData]) : row.result || 0).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Other Charges Details */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight text-center">Other Charges Details</h4>
                            <div className="overflow-x-auto border border-gray-100 rounded-2xl h-[400px] no-scrollbar">
                                <table className="w-full text-left border-collapse">
                                    <thead className="sticky top-0 z-10 bg-gray-50">
                                        <tr className="text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 shadow-sm">
                                            <th className="px-4 py-4 border-r border-gray-100 text-center w-12">Sr no</th>
                                            <th className="px-4 py-4 border-r border-gray-100">Particulars</th>
                                            <th className="px-4 py-4 border-r border-gray-100">Amount</th>
                                            <th className="px-4 py-4 border-r border-gray-100">Discount</th>
                                            <th className="px-4 py-4">Net</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { sr: 11, label: 'OPEN CAR PARKING', key: 'openCarParking' },
                                            { sr: 12, label: 'STILT CAR PARKING', key: 'stiltCarParking' },
                                            { sr: 13, label: 'COVERED CAR PARKING', key: 'coveredCarParking' },
                                            { sr: 14, label: 'CLUB MEMBERSHIP', key: 'clubMembership' },
                                            { sr: 15, label: 'POWER BACKUP', key: 'powerBackup' },
                                            { sr: 16, label: 'IFMS', key: 'ifms' },
                                            { sr: 17, label: 'LEASE RENT', key: 'leaseRent' },
                                            { sr: 18, label: 'FFC', key: 'ffc' },
                                            { sr: 19, label: 'EEC', key: 'eec' },
                                            { sr: 20, label: 'IDC', key: 'idc' },
                                            { sr: 21, label: 'Other', key: 'other' },
                                            { sr: 22, label: 'TERRACE / GARDEN', key: 'terraceGarden' },
                                            { sr: 23, label: 'METER', key: 'meter' },
                                            { sr: 24, label: 'Total', result: otherChargesTotal, isBold: true, bg: 'bg-[#ff3d3d]/5' },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-50 ${row.bg || ''}`}>
                                                <td className="px-4 py-3 border-r border-gray-50 text-center text-[12px] font-bold text-gray-400">{row.sr}.</td>
                                                <td className={`px-4 py-3 border-r border-gray-50 text-[12px] uppercase tracking-tight ${row.isBold ? 'font-black text-[#1a1c21]' : 'font-bold text-gray-500'}`}>{row.label}</td>
                                                <td className="px-2 py-1.5 border-r border-gray-50">
                                                    {row.key && (
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-50/50 rounded px-2 py-1 text-xs font-black outline-none"
                                                            value={otherCharges[row.key].amount}
                                                            onChange={(e) => setOtherCharges({ ...otherCharges, [row.key as string]: { ...otherCharges[row.key as string], amount: Number(e.target.value) } })}
                                                        />
                                                    )}
                                                </td>
                                                <td className="px-2 py-1.5 border-r border-gray-50">
                                                    {row.key && (
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-50/50 rounded px-2 py-1 text-xs font-black outline-none"
                                                            value={otherCharges[row.key].discount}
                                                            onChange={(e) => setOtherCharges({ ...otherCharges, [row.key as string]: { ...otherCharges[row.key as string], discount: Number(e.target.value) } })}
                                                        />
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-[13px] font-black text-[#1a1c21]">
                                                    ₹ {(row.key ? calculateNet(otherCharges[row.key]) : row.result || 0).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Overall Summary Costs */}
                    <div className="bg-[#1a1c21] rounded-[30px] p-8 text-white grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <span className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.3em]">Total Cost Breakdown</span>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                    <span className="text-sm font-bold text-gray-400">25. Net Cost on Form (4+10+24)</span>
                                    <span className="text-2xl font-black">₹ {netCostOnForm.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-[#2FED9A]">26. Net Cost to Customer (6+10+24)</span>
                                    <span className="text-3xl font-black text-[#2FED9A]">₹ {netCostToCustomer.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end items-end gap-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-emerald-400" size={24} />
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Verified Calculations as per<br />Hunt Property Standards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Payment Details & Declaration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-10">
                    <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="bg-[#ff3d3d] p-4 flex items-center gap-3 text-white">
                            <CreditCard size={20} />
                            <h3 className="text-sm font-black uppercase tracking-widest">Payment Details</h3>
                        </div>
                        <div className="overflow-hidden flex-1">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {[
                                        { sr: '19.(a)', label: 'Payment Type', key: 'paymentType', required: true, type: 'select', options: ['Cheque', 'NEFT', 'RTGS', 'UPI'] },
                                        { sr: '19.(b)', label: 'Payment Amount', key: 'paymentAmount', required: true },
                                        { sr: '19.(c)', label: 'Payment No.', key: 'paymentNo', required: true },
                                        { sr: '19.(d)', label: 'Payment Date', key: 'paymentDate', required: true, type: 'date' },
                                        { sr: '19.(e)', label: 'Bank Name', key: 'bankName', required: true },
                                    ].map((row, idx) => (
                                        <tr key={idx} className="border-b border-gray-50">
                                            <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">{row.sr}.</td>
                                            <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50 w-48">
                                                {row.label} {row.required && <span className="text-red-500">*</span>}
                                            </td>
                                            <td className="p-2">
                                                {row.type === 'select' ? (
                                                    <div className="relative">
                                                        <select
                                                            className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21] appearance-none"
                                                            value={bookingData[row.key as keyof typeof bookingData] as string}
                                                            onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                                        >
                                                            <option>Select</option>
                                                            {row.options?.map(o => <option key={o}>{o}</option>)}
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                                    </div>
                                                ) : row.type === 'date' ? (
                                                    <input
                                                        type="date"
                                                        className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21]"
                                                        value={bookingData[row.key as keyof typeof bookingData] as string}
                                                        onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                                    />
                                                ) : (
                                                    <input
                                                        type="text"
                                                        className="w-full bg-gray-50/50 rounded-lg p-3 text-sm outline-none font-bold text-[#1a1c21]"
                                                        value={bookingData[row.key as keyof typeof bookingData] as string}
                                                        onChange={(e) => setBookingData({ ...bookingData, [row.key]: e.target.value })}
                                                    />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="w-16 p-4 text-[12px] font-bold text-gray-400 border-r border-gray-50 text-center bg-gray-50/30">20.</td>
                                        <td className="p-4 text-[12px] font-black text-gray-500 uppercase tracking-tight border-r border-gray-50">Add Second Payment?</td>
                                        <td className="p-4">
                                            <label className="flex items-center gap-2 cursor-pointer group w-fit">
                                                <div
                                                    onClick={() => setBookingData({ ...bookingData, addSecondPayment: !bookingData.addSecondPayment })}
                                                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${bookingData.addSecondPayment ? 'bg-teal-500 border-teal-500' : 'border-gray-200'}`}
                                                >
                                                    {bookingData.addSecondPayment && <Check size={12} className="text-white" strokeWidth={4} />}
                                                </div>
                                                <span className="text-sm font-bold text-gray-500">Yes</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    {/* Declaration */}
                    <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 space-y-8">
                        <h4 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight">Declaration</h4>
                        <p className="text-sm font-medium text-gray-500 leading-relaxed italic">
                            Declaration: I, <span className="font-black text-[#1a1c21] underline decoration-[#ff3d3d] decoration-2 underline-offset-4">{userName}</span>, confirm that all the details mentioned in this document - are TRUE and Correct to best of my knowledge. In case of any discrepancy/Error, I hold myself responsible and accountable and accept all action taken by the management.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Employee Signature</label>
                                <div className="h-24 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-[10px]">Sign Here</div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</label>
                                <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 font-bold text-[#1a1c21] text-sm">{new Date().toLocaleDateString('en-GB')}</div>
                            </div>
                            <div className="col-span-2 space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Team Leader Signature</label>
                                <div className="h-24 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-[10px]">Leader Approval</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Revenue Section */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#ff3d3d] p-4 flex items-center gap-3 text-white">
                    <ArrowUpRight size={20} />
                    <h3 className="text-sm font-black uppercase tracking-widest">Revenue</h3>
                </div>
                <div className="p-8">
                    <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">
                                    <th className="px-6 py-4 border-r border-gray-100">Revenue *</th>
                                    <th className="px-6 py-4 border-r border-gray-100">Total Revenue (₹)</th>
                                    <th className="px-6 py-4 border-r border-gray-100">Broker Revenue (₹)</th>
                                    <th className="px-6 py-4 border-r border-gray-100">Client Discount (₹)</th>
                                    <th className="px-6 py-4">Team Revenue (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center font-black">
                                    <td className="p-3 border-r border-gray-50">
                                        <div className="relative">
                                            <select
                                                className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-sm outline-none appearance-none text-center"
                                                value={revenueData.type}
                                                onChange={(e) => setRevenueData({ ...revenueData, type: e.target.value })}
                                            >
                                                <option>Select</option>
                                                <option>Standard</option>
                                                <option>Premium</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" size={12} />
                                        </div>
                                    </td>
                                    <td className="p-3 border-r border-gray-50">
                                        <input
                                            type="number"
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-sm outline-none text-center"
                                            value={revenueData.totalRevenue}
                                            onChange={(e) => setRevenueData({ ...revenueData, totalRevenue: Number(e.target.value) })}
                                        />
                                    </td>
                                    <td className="p-3 border-r border-gray-50">
                                        <input
                                            type="number"
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-sm outline-none text-center"
                                            value={revenueData.brokerRevenue}
                                            onChange={(e) => setRevenueData({ ...revenueData, brokerRevenue: Number(e.target.value) })}
                                        />
                                    </td>
                                    <td className="p-3 border-r border-gray-50">
                                        <input
                                            type="number"
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-sm outline-none text-center"
                                            value={revenueData.clientDiscount}
                                            onChange={(e) => setRevenueData({ ...revenueData, clientDiscount: Number(e.target.value) })}
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            type="number"
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-sm outline-none text-center"
                                            value={revenueData.teamRevenue}
                                            onChange={(e) => setRevenueData({ ...revenueData, teamRevenue: Number(e.target.value) })}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 6. For Official Use Only */}
            <div className="bg-gray-50/50 rounded-[40px] border border-gray-100 shadow-inner p-10 space-y-12">
                <div className="flex items-center justify-center gap-3">
                    <ShieldCheck size={28} className="text-[#ff3d3d]" />
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#1a1c21]">For Official Use Only</h3>
                </div>

                <div className="overflow-x-auto border border-gray-200 rounded-3xl bg-white shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-200">
                                <th className="px-4 py-4 border-r border-gray-200">Department</th>
                                <th className="px-4 py-4 border-r border-gray-200">Date of Receiving</th>
                                <th className="px-4 py-4 border-r border-gray-200">Date & Time of Checking</th>
                                <th className="px-4 py-4 border-r border-gray-200">Date of Handover</th>
                                <th className="px-4 py-4 border-r border-gray-200">Name</th>
                                <th className="px-4 py-4">Signature</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="px-4 py-6 border-r border-gray-100 font-black text-[#1a1c21] text-xs">KYC Team</td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6"></td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="px-4 py-6 border-r border-gray-100 font-black text-[#1a1c21] text-xs">KYC Team Remarks</td>
                                <td colSpan={3} className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100 flex items-center justify-around h-full pt-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                        <span className="text-[10px] font-bold text-gray-400">KYC Ok</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                        <span className="text-[10px] font-bold text-gray-400">KYC Not Ok</span>
                                    </label>
                                </td>
                                <td className="px-4 py-6"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-6 border-r border-gray-100 font-black text-[#1a1c21] text-xs">Booking Validation</td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6 border-r border-gray-100"></td>
                                <td className="px-4 py-6"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6 bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
                        {[
                            { label: 'Receiving from the BV Team:' },
                            { label: 'Accepted:' },
                            { label: 'Receiving Code:' },
                            { label: 'Accepted by:' },
                            { label: 'Date of acceptance:' },
                            { label: 'Signature:' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6">
                                <label className="w-40 text-[11px] font-black text-gray-500 uppercase tracking-widest">{item.label}</label>
                                <div className="flex-1 h-10 border-b border-gray-100"></div>
                            </div>
                        ))}
                    </div>
                    <div className="relative bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
                        <div className="absolute top-0 right-10 bg-[#ff3d3d] text-white px-6 py-2 rounded-b-2xl font-black uppercase text-[10px] tracking-widest">Rejected</div>
                        <div className="space-y-10 pt-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Rejection Date:</label>
                                <div className="h-10 border-b border-gray-100"></div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Reason for rejection:</label>
                                <div className="h-20 border-b border-gray-100"></div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Signature:</label>
                                <div className="h-10 border-b border-gray-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-center pt-10">
                <button className="bg-[#ff3d3d] text-white px-20 py-5 rounded-[25px] font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:scale-[1.05] transition-all hover:shadow-[#ff3d3d]/30 active:scale-95 flex items-center gap-4">
                    Submit KYC <Check size={20} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
};

export default KYCFormView;
