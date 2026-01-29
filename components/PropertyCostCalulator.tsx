import React, { useState, useMemo } from 'react';
import { 
    Calculator, MapPin, Building2, Layers, 
    Square, ArrowRight, Sparkles, 
    ShieldCheck, ChevronDown, 
    Zap, Network, Cpu,
    HandCoins, Landmark, Activity,
    IndianRupee, PieChart, Receipt,
    Wallet, CheckCircle2, DollarSign,
    Download, Loader2, Info, Globe
} from 'lucide-react';

interface LineItem {
    id: number;
    particulars: string;
    pricePerUnit: number;
    noOfUnit: number;
}

interface TableRowProps {
    item: LineItem;
    annexure: 'I' | 'II' | 'III';
    onUpdate: (annexure: 'I' | 'II' | 'III', id: number, field: 'pricePerUnit' | 'noOfUnit', value: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ item, annexure, onUpdate }) => (
    <div className="grid grid-cols-12 gap-4 items-center p-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 group">
        <div className="col-span-1 text-[10px] font-black text-slate-300 group-hover:text-red-600 transition-colors">{item.id}</div>
        <div className="col-span-4 text-[11px] font-black text-slate-600 uppercase tracking-tight">{item.particulars}</div>
        <div className="col-span-3">
            <div className="relative group/field">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-red-500 transition-colors" size={12} />
                <input 
                    type="number" 
                    value={item.pricePerUnit || ''} 
                    onChange={(e) => onUpdate(annexure, item.id, 'pricePerUnit', e.target.value)}
                    placeholder="0"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-8 py-3 text-xs font-black outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner"
                />
            </div>
        </div>
        <div className="col-span-2">
            <input 
                type="number" 
                value={item.noOfUnit || ''} 
                onChange={(e) => onUpdate(annexure, item.id, 'noOfUnit', e.target.value)}
                placeholder="0"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-black text-center outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner"
            />
        </div>
        <div className="col-span-2 text-right text-xs font-display font-black text-slate-900">
            ₹ {(item.pricePerUnit * item.noOfUnit).toLocaleString()}
        </div>
    </div>
);

const WorthCalculatorView = ({ onNavigate }: { onNavigate: (v: any) => void }) => {
    const [loading, setLoading] = useState(false);
    const [calculated, setCalculated] = useState(false);
    
    const [formData, setFormData] = useState({
        developerName: '',
        projectName: '',
        propertyType: 'Select Property Type',
        paymentPlan: 'Select Plan',
        location: '',
        propertySize: '',
        pricePerUnit: '',
        unitType: 'Select Unit'
    });

    // Annexure I: Core Property Cost
    const [annexureI, setAnnexureI] = useState<LineItem[]>([
        { id: 1, particulars: 'Basic Selling Price (BSP)', pricePerUnit: 0, noOfUnit: 0 },
        { id: 2, particulars: 'Electrification Charges (EFC)', pricePerUnit: 0, noOfUnit: 0 },
        { id: 3, particulars: 'Fire Fighting Charges (FFC)', pricePerUnit: 0, noOfUnit: 0 },
        { id: 4, particulars: 'Interest Free Maintainace Deposit (IFMS)', pricePerUnit: 0, noOfUnit: 0 },
        { id: 5, particulars: 'Floor PLC', pricePerUnit: 0, noOfUnit: 0 },
        { id: 6, particulars: 'View PLC', pricePerUnit: 0, noOfUnit: 0 },
        { id: 7, particulars: 'Other PLC', pricePerUnit: 0, noOfUnit: 0 },
        { id: 8, particulars: 'Lease Rent', pricePerUnit: 0, noOfUnit: 0 },
        { id: 9, particulars: 'Annual Maintenance Charges', pricePerUnit: 0, noOfUnit: 0 },
        { id: 10, particulars: 'Sinking Fund Charges', pricePerUnit: 0, noOfUnit: 0 },
    ]);

    // Annexure II: External & Internal Development
    const [annexureII, setAnnexureII] = useState<LineItem[]>([
        { id: 11, particulars: 'External Development Charges (EDC)', pricePerUnit: 0, noOfUnit: 0 },
        { id: 12, particulars: 'Internal Development Charges (IDC)', pricePerUnit: 0, noOfUnit: 0 },
    ]);

    // Annexure III: Utility & Premium Amenities
    const [annexureIII, setAnnexureIII] = useState<LineItem[]>([
        { id: 13, particulars: 'Car Parking (Open)', pricePerUnit: 0, noOfUnit: 1 },
        { id: 14, particulars: 'Car Parking (Covered)', pricePerUnit: 0, noOfUnit: 1 },
        { id: 15, particulars: 'Club Membership', pricePerUnit: 0, noOfUnit: 1 },
        { id: 16, particulars: 'Water Connection Charges', pricePerUnit: 0, noOfUnit: 1 },
        { id: 17, particulars: 'Gas Connection Charges', pricePerUnit: 0, noOfUnit: 1 },
        { id: 18, particulars: 'Meter Installation Charges (Per KVA)', pricePerUnit: 0, noOfUnit: 1 },
        { id: 19, particulars: 'Golf Course Membership', pricePerUnit: 0, noOfUnit: 1 },
        { id: 20, particulars: 'Electric Substation Charges (ESSC)', pricePerUnit: 0, noOfUnit: 1 },
        { id: 21, particulars: 'Wood work Charges', pricePerUnit: 0, noOfUnit: 1 },
        { id: 22, particulars: 'Home Appliance Charges', pricePerUnit: 0, noOfUnit: 1 },
    ]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateItem = (annexure: 'I' | 'II' | 'III', id: number, field: 'pricePerUnit' | 'noOfUnit', value: string) => {
        const numVal = parseFloat(value) || 0;
        const setter = annexure === 'I' ? setAnnexureI : annexure === 'II' ? setAnnexureII : setAnnexureIII;
        setter(prev => prev.map(item => item.id === id ? { ...item, [field]: numVal } : item));
    };

    const totalCost = useMemo(() => {
        const sum = (arr: LineItem[]) => arr.reduce((acc, item) => acc + (item.pricePerUnit * item.noOfUnit), 0);
        return sum(annexureI) + sum(annexureII) + sum(annexureIII);
    }, [annexureI, annexureII, annexureIII]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setCalculated(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-primary selection:text-[#1A1A1A]">
            <div className="max-w-[100rem] mx-auto px-6">
                
                {/* 1. Precise Header Section */}
                <div className="space-y-4 mb-16 animate-fade-in-up">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                        <h1 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tight leading-none">Property Cost Calculator</h1>
                    </div>
                    <p className="text-slate-400 font-bold text-sm ml-16 italic">"Please fill in the form below to compute absolute acquisition value across all statutory and development nodes."</p>
                </div>

                {/* 2. Parameters Console */}
                <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-200 shadow-2xl mb-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[6000ms]">
                        <Network size={400} />
                    </div>
                    <form className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 relative z-10">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Developer Name (required)</label>
                            <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                <input type="text" name="developerName" value={formData.developerName} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 pl-10 text-sm font-bold outline-none focus:border-red-600 transition-all shadow-inner" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Name (required)</label>
                            <div className="relative">
                                <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 pl-10 text-sm font-bold outline-none focus:border-red-600 transition-all shadow-inner" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Property Type</label>
                            <div className="relative">
                                <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 appearance-none cursor-pointer">
                                    <option>Select Property Type</option>
                                    <option>Residential Flat</option>
                                    <option>Independent Villa</option>
                                    <option>Penthouse Node</option>
                                    <option>Urban Plot</option>
                                    <option>Commercial Unit</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Payment Plan</label>
                            <div className="relative">
                                <select name="paymentPlan" value={formData.paymentPlan} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 appearance-none cursor-pointer">
                                    <option>Select Plan</option>
                                    <option>Construction Linked (CLP)</option>
                                    <option>Possession Linked (PLP)</option>
                                    <option>Downpayment Plan</option>
                                    <option>Flexi-Payment Matrix</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Property Location (required)</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 pl-10 text-sm font-bold outline-none focus:border-red-600 transition-all shadow-inner" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Property Size (required)</label>
                            <div className="relative">
                                <Square className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                <input type="number" name="propertySize" value={formData.propertySize} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 pl-10 text-sm font-bold outline-none focus:border-red-600 transition-all shadow-inner" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Price Per Unit (required)</label>
                            <div className="relative">
                                <select name="unitType" value={formData.unitType} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-red-600 appearance-none cursor-pointer">
                                    <option>Select Unit</option>
                                    <option>Sq. Ft</option>
                                    <option>Sq. Mt</option>
                                    <option>Sq. Yd</option>
                                    <option>Units</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* 3. Main Computation Matrix */}
                <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden animate-fade-in-up delay-200">
                    {/* Header Row */}
                    <div className="bg-slate-950 p-6 md:px-10 grid grid-cols-12 gap-4 text-white relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-50"></div>
                        <div className="col-span-1 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 relative z-10">S. NO</div>
                        <div className="col-span-4 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 relative z-10">Particulars</div>
                        <div className="col-span-3 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 relative z-10">Price per Unit (Unit)</div>
                        <div className="col-span-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-center relative z-10">No of Unit</div>
                        <div className="col-span-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-right relative z-10">Amount</div>
                    </div>

                    {/* Annexure I */}
                    <div className="bg-slate-50/50">
                        <div className="px-10 py-5 bg-slate-100/50 text-center border-b border-slate-200 flex items-center justify-center gap-4">
                            <div className="h-px bg-slate-200 flex-1"></div>
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-900">Annexure I: Infrastructure Nodes</span>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                        <div className="p-2 md:px-10">
                            {annexureI.map(item => <TableRow key={item.id} item={item} annexure="I" onUpdate={updateItem} />)}
                        </div>
                    </div>

                    {/* Annexure II */}
                    <div className="bg-white">
                        <div className="px-10 py-5 bg-slate-100/50 text-center border-b border-slate-200 border-t border-slate-200 flex items-center justify-center gap-4">
                            <div className="h-px bg-slate-200 flex-1"></div>
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-900">Annexure II: Statutory Levies</span>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                        <div className="p-2 md:px-10">
                            {annexureII.map(item => <TableRow key={item.id} item={item} annexure="II" onUpdate={updateItem} />)}
                        </div>
                    </div>

                    {/* Annexure III */}
                    <div className="bg-slate-50/50">
                        <div className="px-10 py-5 bg-slate-100/50 text-center border-b border-slate-200 border-t border-slate-200 flex items-center justify-center gap-4">
                            <div className="h-px bg-slate-200 flex-1"></div>
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-900">Annexure III: Utility & Premium Services</span>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                        <div className="p-2 md:px-10">
                            {annexureIII.map(item => <TableRow key={item.id} item={item} annexure="III" onUpdate={updateItem} />)}
                        </div>
                    </div>

                    {/* Total Matrix Footer */}
                    <div className="bg-slate-950 p-12 md:px-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none rotate-12"><IndianRupee size={300} /></div>
                        <div className="flex items-center gap-10 relative z-10">
                            <div className="w-20 h-20 bg-primary/10 rounded-[2.5rem] flex items-center justify-center text-primary shadow-[0_0_50px_rgba(47,237,154,0.15)] ring-4 ring-primary/5">
                                <Calculator size={36} className="animate-pulse" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-3xl font-display font-black text-white uppercase tracking-tighter leading-none">Total Cost of the Unit</h4>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Aggregated Acquisition Value • V.2025</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-2 relative z-10">
                             <div className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-1">Final Computation Result</div>
                             <div className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none flex items-start">
                                <span className="text-3xl md:text-5xl text-primary mt-3 mr-3">₹</span>
                                {totalCost.toLocaleString()}
                             </div>
                        </div>
                    </div>
                </div>

                {/* 4. Action Command Hub */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 animate-fade-in-up delay-300">
                    <button 
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-24 py-7 bg-red-600 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.5em] hover:bg-[#1A1A1A] transition-all shadow-2xl shadow-red-600/30 active:scale-95 flex items-center gap-8 group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        {loading ? (
                            <>SYNCING GRID NODES... <Loader2 className="animate-spin" size={24} /></>
                        ) : (
                            <>Submit to Registry <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" strokeWidth={3} /></>
                        )}
                    </button>
                    <button className="px-12 py-7 bg-white border-2 border-slate-100 text-slate-500 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.4em] hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center gap-6 shadow-xl hover:shadow-emerald-500/10 active:scale-95">
                        <Download size={22} /> Export Intelligence PDF
                    </button>
                </div>

                {/* 5. Validation Matrix Footer */}
                <div className="mt-40 pt-20 border-t border-slate-200 opacity-20 hover:opacity-100 transition-all duration-1000 text-center space-y-16">
                     <p className="text-[11px] font-black text-slate-900 uppercase tracking-[1em]">HUNT PROPERTY INTELLECTUAL FINANCIAL HUB • V.2025</p>
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 grayscale hover:grayscale-0 transition-all duration-1000">
                         {[ShieldCheck, Globe, Network, Cpu, Receipt, CheckCircle2, IndianRupee].map((Icon, i) => (
                             <Icon key={i} size={42} strokeWidth={1} className="text-slate-400 hover:text-emerald-600 transition-colors cursor-crosshair" />
                         ))}
                     </div>
                </div>
            </div>

            {/* Float Information Node (Appears after interaction) */}
            {totalCost > 0 && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-6 animate-fade-in-up">
                    <div className="bg-[#1A1A1A] p-6 rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex items-center justify-between text-white ring-8 ring-primary/5">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-inner border border-white/5"><Zap size={28} className="fill-primary" /></div>
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Analysis</p>
                                <h5 className="text-xl font-black uppercase tracking-tight">{formData.projectName || 'Asset Valuation'} Node</h5>
                            </div>
                        </div>
                        <div className="text-right pr-4">
                             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Valuation</p>
                             <p className="text-3xl font-black text-primary tracking-tighter">₹ {totalCost.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyCostCalulatorView;