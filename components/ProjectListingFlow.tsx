import React, { useState } from 'react';
import {
    ArrowLeft, ArrowRight, Building2, MapPin,
    User, Phone, Mail, FileText, ChevronRight,
    Plus, Image as ImageIcon, Layout, Navigation,
    DollarSign, Percent, ShieldCheck, Check,
    Upload, Trash2, Calendar, Search,
    Info, Star, Layers, Activity, Dumbbell,
    Waves, Bike, Timer, Sun, Wifi, Video
} from 'lucide-react';

interface ProjectListingFlowProps {
    onCancel: () => void;
}

type ProjectType = 'residential' | 'commercial' | 'agricultural' | null;

const ProjectListingFlow: React.FC<ProjectListingFlowProps> = ({ onCancel }) => {
    const [step, setStep] = useState(0); // 0 is selection screen, 1-15 are steps, 16 is success
    const [projectType, setProjectType] = useState<ProjectType>(null);
    const [nonReraStep, setNonReraStep] = useState(1); // 1-5 for consent flow

    // Form state
    const [formData, setFormData] = useState({
        // New Workflow Fields
        isReraRegistered: null as boolean | null,
        selectedState: '',
        possessionTimeline: '', // 'immediate', '2-6-months', '6-12-months'

        // Authorized Person Details
        authorizedPerson: {
            name: '',
            designation: '',
            email: '',
            mobile: '',
            panNumber: '',
            panFile: null as any,
            aadhaarNumber: '',
            aadhaarFile: null as any,
        },

        // Non-RERA Consent Workflow
        nonReraConsent: {
            reasons: [] as string[],
            acceptedLegal: false,
        },

        // Project Overview
        aboutProject: '',

        // Existing Fields (Retained for subsequent steps)
        builderName: '',
        builderAddress: '',
        builderCity: '',
        builderState: '',
        builderPinCode: '',
        builderContactPerson: '',
        builderMobile: '',
        builderEmail: '',

        // Step 2: Basic Project Details
        builderRera: '',
        projectRera: '',
        productType: '', // sub category
        expectedPossession: '',
        projectPlotSize: '',
        unitSize: 'Acres',
        siteAddress: '',

        // Step 3: Compliance Check (RERA) - Will be integrated into new flow
        isBuilderReraRegistered: null as boolean | null,
        isProjectReraRegistered: null as boolean | null,
        builderReraNumber: '',
        projectReraNumber: '',
        reraCertificate: null as any,
        hasAppliedRera: null as boolean | null,
        reraApplicationNumber: '',
        reraApplicationDate: '',
        reraApplicationDocument: null as any,
        isNonReraOrCompleted: null as boolean | null,
        nonReraDeclarationDocument: null as any,
        nonReraConfirmation: false,

        // Step 4: Builder Profile
        builderDescription: '',

        // Step 4: Project Structure (Dynamic rows)
        structureRows: [] as any[],

        // Step 5: Floor Plan
        floorPlans: [] as any[],

        // Step 6: Site Plan & Location
        sitePlan: null as any,
        latitude: '',
        longitude: '',

        // Step 7: Pricing & Payment Plan
        bsp: '',
        pricingUnit: 'Sqft',
        paymentPlans: [
            { type: 'Construction Linked Plan', installments: [] },
            { type: 'Flexi Payment Plan', installments: [] },
            { type: 'Special Payment Plan', installments: [] },
            { type: 'Down Payment Plan', installments: [] },
        ],

        // Step 8: Other Charges
        otherCharges: [
            { label: 'Car Parking Charges', value: '' },
            { label: 'Club Membership Charges', value: '' },
            { label: 'Electrification Charges', value: '' },
            { label: 'Fire Fitting Charges', value: '' },
            { label: 'Lease Rent', value: '' },
        ],

        plc: [
            { label: 'Park Facing', value: '' },
            { label: 'Corner Plot', value: '' },
            { label: 'Road Facing', value: '' },
            { label: 'East Facing', value: '' },
            { label: 'Floor PLC', value: '' },
        ],

        // Step 10: Location Advantages
        advantages: [] as string[],

        // Step 11: Specifications
        specifications: [
            { label: 'Ceiling Height', value: '' },
            { label: 'Flooring', value: '' },
            { label: 'Lift Details', value: '' },
            { label: 'Security System', value: '' },
            { label: 'Green Building Certification', value: '' },
        ],

        features: [
            { label: 'Ample Parking' },
            { label: '24/7 Security' },
            { label: 'Power Backup' },
            { label: 'Water Supply' },
            { label: 'WiFi Enabled' },
            { label: 'Gymnasium' },
        ],

        amenities: [
            { label: 'Swimming Pool' },
            { label: 'Club House' },
            { label: 'Jogging Track' },
            { label: 'Sports Court' },
            { label: 'Kids Play Area' },
            { label: 'Landscape Garden' },
            { label: 'Yoga Deck' },
            { label: 'Mini Theatre' },
        ],

        // Step 14: Photos
        photos: {
            flatSize: '3250',
            accommodation: '4 BHK',
            categories: [
                { label: 'Entrance', files: [] as any[] },
                { label: 'Lift Lobby', files: [] as any[] },
                { label: 'Corridor', files: [] as any[] },
            ]
        },

        // Step 15: Declaration
        confirmed: false,
    });

    const steps = [
        "Basic Details",
        formData.isReraRegistered ? "Authorized Person" : "Consent Form",
        "Project Overview",
        "Builder Details",
        "Project Structure",
        "Plans",
        "Site & Location",
        "Pricing",
        "Other Charges",
        "PLC",
        "Location Advantages",
        "Specifications",
        "Features",
        "Amenities",
        "Photos",
        "Declaration"
    ];

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => Math.max(0, prev - 1));

    // UI Helpers
    const renderProgressBar = () => {
        if (step === 0 || step === 17) return null;
        const percentage = (step / 16) * 100;
        return (
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
                <div
                    className="h-full bg-[#2FED9A] transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        );
    };

    const renderSidebar = () => {
        if (step === 0 || step === 17) return null;
        return (
            <aside className="hidden lg:block w-72 border-r border-gray-100 pr-8">
                <nav className="space-y-1">
                    {steps.map((label, idx) => {
                        const stepIdx = idx + 1;
                        const isActive = step === stepIdx;
                        const isCompleted = step > stepIdx;
                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive ? 'bg-teal-50 text-teal-600 font-bold' : 'text-gray-400'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-teal-500 text-white' : isCompleted ? 'bg-teal-100 text-teal-600' : 'bg-gray-100'
                                    }`}>
                                    {isCompleted ? <Check size={12} /> : stepIdx}
                                </div>
                                <span className="text-xs truncate">{label}</span>
                            </div>
                        );
                    })}
                </nav>
            </aside>
        );
    };

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8 md:py-16">
            <div className="bg-white rounded-[48px] shadow-2xl shadow-gray-200/40 border border-gray-100/50 overflow-hidden">
                <div className="p-8 md:p-16">
                    {step === 0 ? (
                        <div className="space-y-8 animate-fade-in-up">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1c21] uppercase tracking-tight">Add New Project</h2>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] opacity-70">Step 1: Choose Project Category</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {[
                                    { id: 'residential', label: 'Residential Plot', icon: Layout, desc: 'Apartments, Villas, Flats' },
                                    { id: 'commercial', label: 'Commercial Project', icon: Building2, desc: 'Offices, Shops, Showrooms' },
                                    { id: 'agricultural', label: 'Agricultural Land', icon: MapPin, desc: 'Farm lands, Rural plots' },
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setProjectType(type.id as ProjectType)}
                                        className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center text-center gap-4 group ${projectType === type.id
                                            ? 'bg-white border-emerald-500 shadow-lg shadow-emerald-100'
                                            : 'bg-white border-gray-50 text-gray-500 hover:border-emerald-100'
                                            }`}
                                    >
                                        <div className={`p-4 rounded-2xl transition-all ${projectType === type.id ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200' : 'bg-gray-50 text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500'
                                            }`}>
                                            <type.icon size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold text-[#1a1c21] uppercase tracking-tight">{type.label}</h4>
                                            <p className="text-[8px] font-bold opacity-40 uppercase tracking-widest">{type.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    disabled={!projectType}
                                    onClick={nextStep}
                                    className="bg-[#1a1c21] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-200 transition-all disabled:opacity-20 disabled:cursor-not-allowed group flex items-center gap-2"
                                >
                                    Start Listing <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ) : step === 17 ? (
                        <div className="text-center space-y-8 animate-fade-in-up py-10">
                            <div className="w-24 h-24 bg-[#2FED9A]/10 text-[#2FED9A] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#2FED9A]/5">
                                <Check size={48} className="animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-4xl font-black text-[#1a1c21] uppercase tracking-tight">Project Submitted</h2>
                                <p className="text-gray-500 font-bold max-w-md mx-auto uppercase tracking-widest text-[10px]">
                                    Listing ID: HP-PRJ-{Math.floor(Math.random() * 9000) + 1000}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-[32px] p-10 max-w-lg mx-auto border border-gray-100">
                                <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-4">Verification In Progress</p>
                                <p className="text-sm font-bold text-gray-600 leading-relaxed italic">
                                    "Your project is now in our verification queue. Boost its reach from your dashboard to start getting leads immediately."
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                                <button
                                    onClick={onCancel}
                                    className="w-full sm:w-auto bg-[#1a1c21] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                >
                                    Go to Dashboard
                                </button>
                                <button
                                    className="w-full sm:w-auto border-2 border-[#1a1c21] text-[#1a1c21] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1a1c21] hover:text-white transition-all flex items-center justify-center gap-3"
                                >
                                    <Star size={16} /> Boost Project
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-12 min-h-[700px] animate-fade-in-up">
                            {renderSidebar()}

                            <div className="flex-1 flex flex-col">
                                {renderProgressBar()}

                                <div className="flex-1 space-y-12">
                                    <div className="flex items-center justify-between border-b border-gray-50 pb-8">
                                        <div className="space-y-1">
                                            <h3 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">
                                                {steps[step - 1]}
                                            </h3>
                                            <p className="text-[10px] font-bold text-teal-500 uppercase tracking-[0.3em]">
                                                Project Listing • Step {step} of 16
                                            </p>
                                        </div>
                                        <button
                                            onClick={prevStep}
                                            className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-[#1a1c21] hover:text-[#2FED9A] transition-all flex items-center gap-2 group"
                                        >
                                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                            <span className="text-[10px] font-black uppercase tracking-widest pr-2">Back</span>
                                        </button>
                                    </div>

                                    <div className="min-h-[500px]">
                                        {/* Step 1: Basic Details */}
                                        {step === 1 && (
                                            <div className="space-y-12 animate-fade-in">
                                                {/* RERA Question */}
                                                <div className="space-y-6">
                                                    <label className="text-xs font-black text-[#1a1c21] uppercase tracking-widest ml-1">Do you have a Builder RERA?</label>
                                                    <div className="flex gap-4">
                                                        {[
                                                            { value: true, label: 'Yes' },
                                                            { value: false, label: 'No' },
                                                        ].map((opt) => (
                                                            <button
                                                                key={opt.label}
                                                                onClick={() => setFormData({ ...formData, isReraRegistered: opt.value })}
                                                                className={`flex-1 h-16 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${formData.isReraRegistered === opt.value
                                                                    ? 'bg-[#1a1c21] border-[#1a1c21] text-white shadow-xl shadow-gray-200'
                                                                    : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                                                    }`}
                                                            >
                                                                {opt.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* State Selection */}
                                                <div className="space-y-6">
                                                    <label className="text-xs font-black text-[#1a1c21] uppercase tracking-widest ml-1">Select the state where you have registered as your authorized firm:</label>
                                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                                        {['Uttar Pradesh', 'Haryana', 'Uttarakhand', 'Other State'].map((state) => (
                                                            <button
                                                                key={state}
                                                                onClick={() => setFormData({ ...formData, selectedState: state })}
                                                                className={`h-16 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border-2 ${formData.selectedState === state
                                                                    ? 'bg-[#1a1c21] border-[#1a1c21] text-white shadow-xl shadow-gray-200'
                                                                    : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                                                    }`}
                                                            >
                                                                {state}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Timeline Selection */}
                                                <div className="space-y-6">
                                                    <label className="text-xs font-black text-[#1a1c21] uppercase tracking-widest ml-1">Select Timeline:</label>
                                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                        {[
                                                            { id: 'immediate', label: 'Immediate' },
                                                            { id: '2-6-months', label: 'In next 2 to 6 months' },
                                                            { id: '6-12-months', label: 'In next 6 to 12 months' },
                                                        ].map((time) => (
                                                            <button
                                                                key={time.id}
                                                                onClick={() => setFormData({ ...formData, possessionTimeline: time.id })}
                                                                className={`px-4 h-16 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border-2 ${formData.possessionTimeline === time.id
                                                                    ? 'bg-[#1a1c21] border-[#1a1c21] text-white shadow-xl shadow-gray-200'
                                                                    : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                                                    }`}
                                                            >
                                                                {time.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2: Authorized Person Details (RERA Path) */}
                                        {step === 2 && formData.isReraRegistered && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">For Builder Name</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderName}
                                                        onChange={(e) => setFormData({ ...formData, builderName: e.target.value })}
                                                        placeholder="Enter Builder Name"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Name of Authorized Signatory</label>
                                                    <input
                                                        type="text"
                                                        value={formData.authorizedPerson.name}
                                                        onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, name: e.target.value } })}
                                                        placeholder="Signatory Name"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Designation & Stamp</label>
                                                    <input
                                                        type="text"
                                                        value={formData.authorizedPerson.designation}
                                                        onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, designation: e.target.value } })}
                                                        placeholder="Designation"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Email Address</label>
                                                    <input
                                                        type="email"
                                                        value={formData.authorizedPerson.email}
                                                        onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, email: e.target.value } })}
                                                        placeholder="email@example.com"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Mobile No.</label>
                                                    <input
                                                        type="text"
                                                        value={formData.authorizedPerson.mobile}
                                                        onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, mobile: e.target.value } })}
                                                        placeholder="Mobile Number"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">PAN Card Number</label>
                                                    <input
                                                        type="text"
                                                        value={formData.authorizedPerson.panNumber}
                                                        onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, panNumber: e.target.value } })}
                                                        placeholder="ABCDE1234F"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Aadhaar Card Number</label>
                                                    <input
                                                        type="text"
                                                        value={formData.authorizedPerson.aadhaarNumber}
                                                        onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, aadhaarNumber: e.target.value } })}
                                                        placeholder="1234 5678 9012"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2: Consent Form Flow (Non-RERA Path) */}
                                        {step === 2 && !formData.isReraRegistered && (
                                            <div className="space-y-8 animate-fade-in">
                                                {nonReraStep === 1 && (
                                                    <div className="space-y-8">
                                                        <div className="bg-emerald-50 border border-emerald-100 rounded-[32px] p-10 text-[#1a1c21]">
                                                            <p className="text-lg font-bold leading-relaxed">
                                                                Dear,<br /><br />
                                                                <span className="text-[#1a1c21]">Huntproperty.com (Manasvi info solutions Pvt. Ltd.)</span><br />
                                                                9th Floor, 915 Cyber Height, Vibhuti Khand, Gomti Nagar,<br />
                                                                Lucknow, UP 226010<br /><br />
                                                                <span className="font-black underline uppercase">Sub: Advertisement for Project Name ___________</span><br />
                                                                Dear Sir / Madam,<br /><br />
                                                                I/ We am/are in a position to list properties to buy, sell / rent against the said project. I / We certify that the above-mentioned project...
                                                            </p>
                                                        </div>
                                                        <button
                                                            onClick={() => setNonReraStep(2)}
                                                            className="w-full py-5 bg-[#1a1c21] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                        >
                                                            Proceed to Declaration
                                                        </button>
                                                    </div>
                                                )}

                                                {nonReraStep === 2 && (
                                                    <div className="space-y-8">
                                                        <div className="bg-orange-50 border border-orange-100 rounded-[32px] p-10">
                                                            <h4 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-6">Why this project is Non-RERA?</h4>
                                                            <div className="space-y-4">
                                                                {[
                                                                    "Project phase has not reached RERA registration due to following reason",
                                                                    "Project area is/below 500 m2 and project does not have more than 8 flats",
                                                                    "Project completed prior to May 2017",
                                                                    "Project which is for renewal, yearly planning pass",
                                                                    "Project is on the lease back land, freehold land or other non-notified land"
                                                                ].map((reason) => (
                                                                    <label key={reason} className="flex items-center gap-4 cursor-pointer group p-4 hover:bg-white rounded-xl transition-all">
                                                                        <div
                                                                            onClick={() => {
                                                                                const newReasons = formData.nonReraConsent.reasons.includes(reason)
                                                                                    ? formData.nonReraConsent.reasons.filter(r => r !== reason)
                                                                                    : [...formData.nonReraConsent.reasons, reason];
                                                                                setFormData({ ...formData, nonReraConsent: { ...formData.nonReraConsent, reasons: newReasons } });
                                                                            }}
                                                                            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.nonReraConsent.reasons.includes(reason) ? 'bg-[#1a1c21] border-[#1a1c21] text-white' : 'border-gray-200 bg-white'}`}
                                                                        >
                                                                            {formData.nonReraConsent.reasons.includes(reason) && <Check size={14} />}
                                                                        </div>
                                                                        <span className="text-[11px] font-bold text-gray-700 leading-tight">{reason}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button onClick={() => setNonReraStep(1)} className="flex-1 py-5 border-2 border-[#1a1c21] text-[#1a1c21] rounded-2xl font-black uppercase tracking-widest text-xs">Back</button>
                                                            <button onClick={() => setNonReraStep(3)} className="flex-1 py-5 bg-[#1a1c21] text-white rounded-2xl font-black uppercase tracking-widest text-xs">Next</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 3 && (
                                                    <div className="space-y-8">
                                                        <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-10 text-xs font-bold leading-relaxed text-gray-600">
                                                            <p>
                                                                The services offered by huntproperty.com are at all times subject to guide, road directions issued by Relevant Regulatory Authority of India Uttar or any other statutory authority as applicable from time to time.<br /><br />
                                                                Please note that Huntproperty.com is under no obligation but reserves the right to extend, cancel, discontinue, prematurely withdraw, change, alter or modify the content of the advertisement or any part thereof at its sole discretion at any time as may be required in view of business exigencies and/or regulatory or statutory provisions.
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button onClick={() => setNonReraStep(2)} className="flex-1 py-5 border-2 border-[#1a1c21] text-[#1a1c21] rounded-2xl font-black uppercase tracking-widest text-xs">Back</button>
                                                            <button onClick={() => setNonReraStep(4)} className="flex-1 py-5 bg-[#1a1c21] text-white rounded-2xl font-black uppercase tracking-widest text-xs">Next</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 4 && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                                                        <h4 className="md:col-span-2 text-xs font-black text-[#1a1c21] uppercase tracking-widest mb-2">Authorized Signatory Confirmation</h4>
                                                        <div className="md:col-span-2 space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">For Builder Name</label>
                                                            <input
                                                                type="text"
                                                                value={formData.builderName}
                                                                onChange={(e) => setFormData({ ...formData, builderName: e.target.value })}
                                                                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm"
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Signatory Name</label>
                                                            <input
                                                                type="text"
                                                                value={formData.authorizedPerson.name}
                                                                onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, name: e.target.value } })}
                                                                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm"
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Designation</label>
                                                            <input
                                                                type="text"
                                                                value={formData.authorizedPerson.designation}
                                                                onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, designation: e.target.value } })}
                                                                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm"
                                                            />
                                                        </div>
                                                        {/* mobile and email */}
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile No.</label>
                                                            <input
                                                                type="text"
                                                                value={formData.authorizedPerson.mobile}
                                                                onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, mobile: e.target.value } })}
                                                                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm"
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email ID</label>
                                                            <input
                                                                type="email"
                                                                value={formData.authorizedPerson.email}
                                                                onChange={(e) => setFormData({ ...formData, authorizedPerson: { ...formData.authorizedPerson, email: e.target.value } })}
                                                                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm"
                                                            />
                                                        </div>
                                                        <div className="md:col-span-2 flex gap-4 pt-6">
                                                            <button onClick={() => setNonReraStep(3)} className="flex-1 py-5 border-2 border-[#1a1c21] text-[#1a1c21] rounded-2xl font-black uppercase tracking-widest text-xs">Back</button>
                                                            <button onClick={() => setNonReraStep(5)} className="flex-1 py-5 bg-[#1a1c21] text-white rounded-2xl font-black uppercase tracking-widest text-xs">Next</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 5 && (
                                                    <div className="space-y-8">
                                                        <div className="bg-red-50 border border-red-100 rounded-[32px] p-10 font-bold text-xs text-red-600 leading-relaxed italic">
                                                            <p>
                                                                Please Note: If you are already RERA registered, these terms/requirements do not apply. In such case, you must contact our information support team. In case of any concerns, feel free to get in touch with us at <a href="mailto:contact@huntproperty.com" className="underline text-blue-600">contact@huntproperty.com</a> or your sales representative. If you have any questions, please do not hesitate to contact us.<br /><br />
                                                                The above said terms and conditions are binding on compliance.
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button onClick={() => setNonReraStep(4)} className="flex-1 py-5 border-2 border-[#1a1c21] text-[#1a1c21] rounded-2xl font-black uppercase tracking-widest text-xs">Request Info</button>
                                                            <button
                                                                onClick={() => {
                                                                    setFormData({ ...formData, nonReraConsent: { ...formData.nonReraConsent, acceptedLegal: true } });
                                                                    nextStep();
                                                                }}
                                                                className="flex-1 py-5 bg-[#1a1c21] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#2FED9A] hover:text-[#1a1c21]"
                                                            >
                                                                Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Step 3: Project Overview (Screen 2B) */}
                                        {step === 3 && (
                                            <div className="space-y-6 animate-fade-in">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">About Project</label>
                                                    <textarea
                                                        value={formData.aboutProject}
                                                        onChange={(e) => setFormData({ ...formData, aboutProject: e.target.value })}
                                                        placeholder="Write a brief overview of your project..."
                                                        className="w-full h-80 bg-gray-50 border border-gray-100 rounded-[30px] p-8 font-medium text-sm outline-none focus:border-teal-200 shadow-sm transition-all resize-none"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        )}

                                        {/* Shifted Original Steps (indices changed from 1-16 to 4-19) */}
                                        {/* Step 4: Builder Details */}
                                        {step === 4 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder / Developer Name</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderName}
                                                        onChange={(e) => setFormData({ ...formData, builderName: e.target.value })}
                                                        placeholder="Enter Name"
                                                        className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Person</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderContactPerson}
                                                        onChange={(e) => setFormData({ ...formData, builderContactPerson: e.target.value })}
                                                        placeholder="Person Name"
                                                        className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                    />
                                                </div>
                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder Address</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderAddress}
                                                        onChange={(e) => setFormData({ ...formData, builderAddress: e.target.value })}
                                                        placeholder="Company Address"
                                                        className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">City</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderCity}
                                                        onChange={(e) => setFormData({ ...formData, builderCity: e.target.value })}
                                                        placeholder="City"
                                                        className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">State</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderState}
                                                        onChange={(e) => setFormData({ ...formData, builderState: e.target.value })}
                                                        placeholder="State"
                                                        className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Pin Code</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderPinCode}
                                                        onChange={(e) => setFormData({ ...formData, builderPinCode: e.target.value })}
                                                        placeholder="700001"
                                                        className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Number</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                                        <input
                                                            type="text"
                                                            value={formData.builderMobile}
                                                            onChange={(e) => setFormData({ ...formData, builderMobile: e.target.value })}
                                                            placeholder="91XXXXXXXX"
                                                            className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-12 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email ID</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                                        <input
                                                            type="email"
                                                            value={formData.builderEmail}
                                                            onChange={(e) => setFormData({ ...formData, builderEmail: e.target.value })}
                                                            placeholder="developer@company.com"
                                                            className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-12 font-bold text-sm outline-none focus:border-teal-200 transition-all"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 4 is Builder Details above */}


                                        {/* Step 3 (Compliance) merged into new Step 1-2 */}


                                        {/* Builder Profile merged into Step 3 Project Overview */}


                                        {/* Step 5: Project Structure */}
                                        {step === 5 && (
                                            <div className="space-y-6">
                                                <div className="bg-gray-50/50 rounded-[30px] p-8 border border-gray-100">
                                                    <div className="flex items-center gap-4 mb-8">
                                                        <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                                                            <Layers className="text-emerald-500" size={20} />
                                                        </div>
                                                        <h4 className="text-sm font-bold text-[#1a1c21] uppercase tracking-tight">Project Structure Details</h4>
                                                    </div>
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left">
                                                            <thead>
                                                                <tr className="text-[9px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                                                                    {projectType === 'residential' ? (
                                                                        <>
                                                                            <th className="px-4 py-4">Block Name</th>
                                                                            <th className="px-4 py-4">Total Plots per Block</th>
                                                                        </>
                                                                    ) : projectType === 'commercial' ? (
                                                                        <>
                                                                            <th className="px-4 py-4">Tower Name</th>
                                                                            <th className="px-4 py-4">Total Floors</th>
                                                                            <th className="px-4 py-4">Floor Size (Sqft)</th>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <th className="px-4 py-4">Land Size</th>
                                                                            <th className="px-4 py-4">Land Dimension</th>
                                                                            <th className="px-4 py-4">Unit</th>
                                                                        </>
                                                                    )}
                                                                    <th className="px-4 py-4 w-10"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-50">
                                                                {formData.structureRows.map((row, idx) => (
                                                                    <tr key={idx}>
                                                                        {projectType === 'residential' ? (
                                                                            <>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="text"
                                                                                        value={row.blockName || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].blockName = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="e.g. Block A"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        value={row.totalPlots || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].totalPlots = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="0"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                            </>
                                                                        ) : projectType === 'commercial' ? (
                                                                            <>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="text"
                                                                                        value={row.towerName || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].towerName = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="e.g. Tower 1"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        value={row.totalFloors || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].totalFloors = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="0"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        value={row.floorSize || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].floorSize = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="0.00"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        value={row.landSize || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].landSize = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="0.00"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                                <td className="px-4 py-4">
                                                                                    <input
                                                                                        type="text"
                                                                                        value={row.dimension || ''}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].dimension = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        placeholder="e.g. 50x100"
                                                                                        className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all"
                                                                                    />
                                                                                </td>
                                                                                <td className="px-4 py-4">
                                                                                    <select
                                                                                        value={row.unit || 'Sqyd'}
                                                                                        onChange={(e) => {
                                                                                            const newRows = [...formData.structureRows];
                                                                                            newRows[idx].unit = e.target.value;
                                                                                            setFormData({ ...formData, structureRows: newRows });
                                                                                        }}
                                                                                        className="bg-white border border-gray-100 rounded-xl px-2 py-2.5 text-xs w-full outline-none focus:border-emerald-200"
                                                                                    >
                                                                                        <option>Sqyd</option>
                                                                                        <option>Sqm</option>
                                                                                    </select>
                                                                                </td>
                                                                            </>
                                                                        )}
                                                                        <td className="px-4 py-4">
                                                                            <button
                                                                                onClick={() => {
                                                                                    const newRows = formData.structureRows.filter((_, i) => i !== idx);
                                                                                    setFormData({ ...formData, structureRows: newRows });
                                                                                }}
                                                                                className="p-2 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                                            >
                                                                                <Trash2 size={14} />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <button
                                                        onClick={() => setFormData({ ...formData, structureRows: [...formData.structureRows, {}] })}
                                                        className="mt-8 flex items-center gap-2 text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors group/add"
                                                    >
                                                        <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center group-hover/add:bg-emerald-100 transition-colors">
                                                            <Plus size={14} />
                                                        </div>
                                                        Add New Row
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 6: Plans */}
                                        {step === 6 && (

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                {[
                                                    { label: 'Floor Plan', id: 'floor' },
                                                    { label: 'Cluster Plan', id: 'cluster' },
                                                    { label: 'Block Plan', id: 'block' },
                                                ].map((plan) => (
                                                    <div key={plan.id} className="space-y-4">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{plan.label}</label>
                                                        <div className="border-2 border-dashed border-gray-100 rounded-[30px] p-8 flex flex-col items-center justify-center gap-4 bg-gray-50 hover:bg-white hover:border-teal-200 transition-all cursor-pointer group h-64">
                                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-teal-500 shadow-sm transition-colors">
                                                                <Upload size={24} />
                                                            </div>
                                                            <div className="text-center">
                                                                <p className="text-xs font-bold text-gray-600">Click to Upload</p>
                                                                <p className="text-[9px] font-black text-gray-300 uppercase mt-1">PDF, JPG, PNG, GIF</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Step 7: Site Plan & Location */}
                                        {step === 7 && (
                                            <div className="space-y-10">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Upload Site Plan</label>
                                                    <div className="border-2 border-dashed border-gray-100 rounded-[30px] p-12 flex items-center justify-center gap-10 bg-gray-50 hover:bg-white hover:border-teal-200 transition-all cursor-pointer group">
                                                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-gray-300 group-hover:text-teal-500 shadow-sm transition-colors">
                                                            <ImageIcon size={32} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="text-lg font-black uppercase text-gray-700">Site Plan Master</h4>
                                                            <p className="text-sm font-bold text-gray-400 italic">Drag and drop or click to upload the overall project site layout.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Google Map Location Picker</label>
                                                    <div className="bg-gray-100 rounded-[40px] h-[400px] overflow-hidden relative border-4 border-white shadow-xl">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                                                            className="w-full h-full object-cover opacity-50 grayscale"
                                                            alt="Map placeholder"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-[30px] shadow-2xl border border-white flex items-center gap-6">
                                                                <div className="w-14 h-14 bg-red-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
                                                                    <Navigation size={24} />
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Auto Capture</p>
                                                                    <p className="font-black text-gray-800 uppercase italic">Pin Location on Map</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-6 right-6 bg-white p-6 rounded-2xl shadow-xl space-y-3">
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-[10px] font-black text-gray-400 uppercase w-16">Latitude:</span>
                                                                <span className="text-xs font-bold text-teal-600">28.5355° N</span>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-[10px] font-black text-gray-400 uppercase w-16">Longitude:</span>
                                                                <span className="text-xs font-bold text-teal-600">77.3910° E</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 8: Pricing & Payment Plan */}
                                        {step === 8 && (
                                            <div className="space-y-10">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Basic Sales Price (BSP)</label>
                                                        <div className="relative">
                                                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                                            <input
                                                                type="number"
                                                                value={formData.bsp}
                                                                onChange={(e) => setFormData({ ...formData, bsp: e.target.value })}
                                                                placeholder="0.00"
                                                                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-12 font-bold text-sm outline-none focus:border-teal-200"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Unit Type</label>
                                                        <select
                                                            value={formData.pricingUnit}
                                                            onChange={(e) => setFormData({ ...formData, pricingUnit: e.target.value })}
                                                            className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none appearance-none"
                                                        >
                                                            <option>Sqft</option>
                                                            <option>Sqyd</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="flex items-center justify-between">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Payment Plan Types</label>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                        {formData.paymentPlans.map((plan, idx) => (
                                                            <button
                                                                key={idx}
                                                                className="p-6 rounded-3xl border-2 border-teal-50 bg-teal-50/20 text-teal-600 text-center space-y-2 hover:bg-teal-50 transition-all"
                                                            >
                                                                <p className="text-[10px] font-black uppercase leading-tight">{plan.type}</p>
                                                                <Plus size={14} className="mx-auto opacity-40" />
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="bg-gray-50/50 rounded-[30px] p-8 border border-gray-100">
                                                        <table className="w-full text-left">
                                                            <thead>
                                                                <tr className="text-[9px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                                                                    <th className="px-4 py-4">Demand Stage</th>
                                                                    <th className="px-4 py-4">Payment Percentage (%)</th>
                                                                    <th className="px-4 py-4 w-10"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-50">
                                                                <tr>
                                                                    <td className="px-4 py-4">
                                                                        <input type="text" placeholder="e.g. At the time of booking" className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all" />
                                                                    </td>
                                                                    <td className="px-4 py-4">
                                                                        <input type="number" placeholder="10" className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-xs w-full outline-none focus:border-emerald-200 focus:shadow-sm transition-all" />
                                                                    </td>
                                                                    <td className="px-4 py-4">
                                                                        <button className="p-2 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                                                                            <Trash2 size={14} />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <button className="mt-8 flex items-center gap-2 text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors group/add">
                                                            <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center group-hover/add:bg-emerald-100 transition-colors">
                                                                <Plus size={14} />
                                                            </div>
                                                            Add Installment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 9: Other Charges */}
                                        {step === 9 && (
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                                    {formData.otherCharges.map((charge, idx) => (
                                                        <div key={idx} className="flex items-center gap-6 border-b border-gray-50 pb-6 group">
                                                            <div className="flex-1 space-y-1">
                                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{charge.label}</p>
                                                                <input
                                                                    type="number"
                                                                    value={charge.value}
                                                                    onChange={(e) => {
                                                                        const newCharges = [...formData.otherCharges];
                                                                        newCharges[idx].value = e.target.value;
                                                                        setFormData({ ...formData, otherCharges: newCharges });
                                                                    }}
                                                                    placeholder="Enter Amount"
                                                                    className="w-full text-lg font-black text-[#1a1c21] outline-none placeholder:text-gray-200"
                                                                />
                                                            </div>
                                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-focus-within:bg-teal-50 group-focus-within:text-teal-500 transition-colors">
                                                                <DollarSign size={20} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-center pt-6">
                                                    <button className="flex items-center gap-3 px-8 py-3 bg-gray-50 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all">
                                                        <Plus size={16} /> Add Charge
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 10: PLC */}
                                        {step === 10 && (
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                                    {formData.plc.map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-6 border-b border-gray-50 pb-8 group">
                                                            <div className="flex-1 space-y-2">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                        S. No. {idx + 1}
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <input
                                                                        type="text"
                                                                        value={item.label}
                                                                        onChange={(e) => {
                                                                            const newPlc = [...formData.plc];
                                                                            newPlc[idx].label = e.target.value;
                                                                            setFormData({ ...formData, plc: newPlc });
                                                                        }}
                                                                        placeholder="PLC Name (e.g. Park Facing)"
                                                                        className="w-full text-xs font-black text-gray-400 uppercase tracking-widest outline-none bg-transparent placeholder:text-gray-200"
                                                                    />
                                                                    <div className="flex items-center gap-2">
                                                                        <input
                                                                            type="number"
                                                                            value={item.value}
                                                                            onChange={(e) => {
                                                                                const newPlc = [...formData.plc];
                                                                                newPlc[idx].value = e.target.value;
                                                                                setFormData({ ...formData, plc: newPlc });
                                                                            }}
                                                                            placeholder="0"
                                                                            className="w-20 text-3xl font-black text-[#1a1c21] outline-none placeholder:text-gray-100 bg-transparent"
                                                                        />
                                                                        <span className="text-xl font-black text-gray-200">%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-focus-within:bg-teal-50 group-focus-within:text-teal-500 transition-colors shadow-sm">
                                                                    <Percent size={24} />
                                                                </div>
                                                                <button
                                                                    onClick={() => {
                                                                        const newPlc = formData.plc.filter((_, i) => i !== idx);
                                                                        setFormData({ ...formData, plc: newPlc });
                                                                    }}
                                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={18} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-center pt-8">
                                                    <button
                                                        onClick={() => {
                                                            setFormData({
                                                                ...formData,
                                                                plc: [...formData.plc, { label: 'New PLC', value: '' }]
                                                            });
                                                        }}
                                                        className="flex items-center gap-3 px-10 py-4 bg-[#1a1c21] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all shadow-xl"
                                                    >
                                                        <Plus size={16} /> Add PLC Row
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 11: Location Advantages */}
                                        {step === 11 && (
                                            <div className="space-y-8">
                                                <div className="bg-gray-50 rounded-[30px] p-8 border border-gray-100">
                                                    <div className="flex gap-4 mb-6">
                                                        <input
                                                            type="text"
                                                            id="adv-input"
                                                            placeholder="Add Location Advantage (e.g. 5 min from Metro)"
                                                            className="flex-1 h-14 bg-white border border-gray-100 rounded-2xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm"
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') {
                                                                    const val = (e.target as HTMLInputElement).value;
                                                                    if (val) {
                                                                        setFormData({ ...formData, advantages: [...formData.advantages, val] });
                                                                        (e.target as HTMLInputElement).value = '';
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                const el = document.getElementById('adv-input') as HTMLInputElement;
                                                                if (el.value) {
                                                                    setFormData({ ...formData, advantages: [...formData.advantages, el.value] });
                                                                    el.value = '';
                                                                }
                                                            }}
                                                            className="bg-[#1a1c21] text-white px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                    <div className="flex flex-wrap gap-3">
                                                        {formData.advantages.map((adv, idx) => (
                                                            <div key={idx} className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-3 rounded-xl shadow-sm animate-fade-in">
                                                                <Star size={14} className="text-teal-500" />
                                                                <span className="text-xs font-bold text-gray-700">{adv}</span>
                                                                <button
                                                                    onClick={() => setFormData({ ...formData, advantages: formData.advantages.filter((_, i) => i !== idx) })}
                                                                    className="text-gray-300 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={14} />
                                                                </button>
                                                            </div>
                                                        ))}
                                                        {formData.advantages.length === 0 && (
                                                            <p className="text-xs font-bold text-gray-300 italic py-4">No advantages added yet. Type and press Enter.</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 12: Specifications */}
                                        {step === 12 && (
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                                    {formData.specifications.map((spec, idx) => (
                                                        <div key={idx} className="flex items-center gap-6 border-b border-gray-50 pb-6 group">
                                                            <div className="flex-1 space-y-1">
                                                                <input
                                                                    type="text"
                                                                    value={spec.label}
                                                                    onChange={(e) => {
                                                                        const newSpecs = [...formData.specifications];
                                                                        newSpecs[idx].label = e.target.value;
                                                                        setFormData({ ...formData, specifications: newSpecs });
                                                                    }}
                                                                    placeholder="Spec Label"
                                                                    className="text-[10px] font-black text-gray-400 uppercase tracking-widest outline-none bg-transparent w-full"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    value={spec.value}
                                                                    onChange={(e) => {
                                                                        const newSpecs = [...formData.specifications];
                                                                        newSpecs[idx].value = e.target.value;
                                                                        setFormData({ ...formData, specifications: newSpecs });
                                                                    }}
                                                                    placeholder="Enter Details"
                                                                    className="w-full text-lg font-black text-[#1a1c21] outline-none placeholder:text-gray-200"
                                                                />
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-focus-within:bg-teal-50 group-focus-within:text-teal-500 transition-colors">
                                                                    <Building2 size={20} />
                                                                </div>
                                                                <button
                                                                    onClick={() => {
                                                                        const newSpecs = formData.specifications.filter((_, i) => i !== idx);
                                                                        setFormData({ ...formData, specifications: newSpecs });
                                                                    }}
                                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-center pt-6">
                                                    <button
                                                        onClick={() => {
                                                            setFormData({
                                                                ...formData,
                                                                specifications: [...formData.specifications, { label: 'New Specification', value: '' }]
                                                            });
                                                        }}
                                                        className="flex items-center gap-3 px-8 py-3 bg-gray-50 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                    >
                                                        <Plus size={16} /> Add Specification
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 13: Features */}
                                        {step === 13 && (
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                                    {formData.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-6 border-b border-gray-50 pb-6 group">
                                                            <div className="flex-1 space-y-1">
                                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                    S. No. {idx + 1}
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    value={feature.label}
                                                                    onChange={(e) => {
                                                                        const newFeatures = [...formData.features];
                                                                        newFeatures[idx].label = e.target.value;
                                                                        setFormData({ ...formData, features: newFeatures });
                                                                    }}
                                                                    placeholder="Description of Feature"
                                                                    className="w-full text-lg font-black text-[#1a1c21] outline-none placeholder:text-gray-200 bg-transparent"
                                                                />
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-focus-within:bg-teal-50 group-focus-within:text-teal-500 transition-colors">
                                                                    <ShieldCheck size={20} />
                                                                </div>
                                                                <button
                                                                    onClick={() => {
                                                                        const newFeatures = formData.features.filter((_, i) => i !== idx);
                                                                        setFormData({ ...formData, features: newFeatures });
                                                                    }}
                                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-center pt-6">
                                                    <button
                                                        onClick={() => {
                                                            setFormData({
                                                                ...formData,
                                                                features: [...formData.features, { label: 'New Feature' }]
                                                            });
                                                        }}
                                                        className="flex items-center gap-3 px-8 py-3 bg-gray-50 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                    >
                                                        <Plus size={16} /> Add Feature
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 14: Amenities */}
                                        {step === 14 && (
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                                    {formData.amenities.map((amenity, idx) => (
                                                        <div key={idx} className="flex items-center gap-6 border-b border-gray-50 pb-6 group">
                                                            <div className="flex-1 space-y-1">
                                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                    S. No. {idx + 1}
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    value={amenity.label}
                                                                    onChange={(e) => {
                                                                        const newAmenities = [...formData.amenities];
                                                                        newAmenities[idx].label = e.target.value;
                                                                        setFormData({ ...formData, amenities: newAmenities });
                                                                    }}
                                                                    placeholder="Description of Amenity"
                                                                    className="w-full text-lg font-black text-[#1a1c21] outline-none placeholder:text-gray-200 bg-transparent"
                                                                />
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-focus-within:bg-teal-50 group-focus-within:text-teal-500 transition-colors">
                                                                    <Waves size={20} />
                                                                </div>
                                                                <button
                                                                    onClick={() => {
                                                                        const newAmenities = formData.amenities.filter((_, i) => i !== idx);
                                                                        setFormData({ ...formData, amenities: newAmenities });
                                                                    }}
                                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-center pt-6">
                                                    <button
                                                        onClick={() => {
                                                            setFormData({
                                                                ...formData,
                                                                amenities: [...formData.amenities, { label: 'New Amenity' }]
                                                            });
                                                        }}
                                                        className="flex items-center gap-3 px-8 py-3 bg-gray-50 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                    >
                                                        <Plus size={16} /> Add Amenity
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 15: Photos */}
                                        {step === 15 && (
                                            <div className="space-y-10">
                                                {/* Meta Info */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50 p-8 rounded-[32px] border border-gray-100">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Flat Size</label>
                                                        <input
                                                            type="text"
                                                            value={formData.photos.flatSize}
                                                            onChange={(e) => setFormData({
                                                                ...formData,
                                                                photos: { ...formData.photos, flatSize: e.target.value }
                                                            })}
                                                            className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm transition-all"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Accommodation</label>
                                                        <input
                                                            type="text"
                                                            value={formData.photos.accommodation}
                                                            onChange={(e) => setFormData({
                                                                ...formData,
                                                                photos: { ...formData.photos, accommodation: e.target.value }
                                                            })}
                                                            className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 font-bold text-sm outline-none focus:border-teal-200 shadow-sm transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Categories List */}
                                                <div className="space-y-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                                        {formData.photos.categories.map((cat, idx) => (
                                                            <div key={idx} className="flex items-center gap-6 border-b border-gray-50 pb-6 group">
                                                                <div className="flex-1 space-y-1">
                                                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                        S. No. {idx + 1}
                                                                    </div>
                                                                    <input
                                                                        type="text"
                                                                        value={cat.label}
                                                                        onChange={(e) => {
                                                                            const newCats = [...formData.photos.categories];
                                                                            newCats[idx].label = e.target.value;
                                                                            setFormData({
                                                                                ...formData,
                                                                                photos: { ...formData.photos, categories: newCats }
                                                                            });
                                                                        }}
                                                                        className="w-full text-lg font-black text-[#1a1c21] outline-none bg-transparent"
                                                                    />
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#1a1c21] hover:bg-teal-50 hover:border-teal-100 transition-all shadow-sm">
                                                                        <Upload size={14} className="text-teal-500" />
                                                                        .gif/.pdf
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            const newCats = formData.photos.categories.filter((_, i) => i !== idx);
                                                                            setFormData({
                                                                                ...formData,
                                                                                photos: { ...formData.photos, categories: newCats }
                                                                            });
                                                                        }}
                                                                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                                    >
                                                                        <Trash2 size={16} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-center pt-6">
                                                        <button
                                                            onClick={() => {
                                                                setFormData({
                                                                    ...formData,
                                                                    photos: {
                                                                        ...formData.photos,
                                                                        categories: [...formData.photos.categories, { label: 'New Category', files: [] }]
                                                                    }
                                                                });
                                                            }}
                                                            className="flex items-center gap-3 px-8 py-3 bg-gray-50 text-gray-400 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                        >
                                                            <Plus size={16} /> Add Button
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 16: Declaration */}
                                        {step === 16 && (
                                            <div className="max-w-2xl mx-auto space-y-10 py-10">
                                                <div className="bg-gray-50/50 rounded-[40px] p-10 text-[#1a1c21] border border-gray-100 relative overflow-hidden">
                                                    <div className="relative z-10 space-y-6">
                                                        <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-2xl flex items-center justify-center">
                                                            <ShieldCheck size={32} />
                                                        </div>
                                                        <h4 className="text-2xl font-black uppercase tracking-tight">Agent Declaration</h4>
                                                        <p className="text-sm font-bold text-gray-500 leading-relaxed italic">
                                                            "I hereby declare that the information provided about this project is true, accurate, and verified by me. I understand that any false information may lead to the suspension of my account and listing."
                                                        </p>
                                                        <label className="flex items-center gap-4 cursor-pointer group">
                                                            <div
                                                                onClick={() => setFormData({ ...formData, confirmed: !formData.confirmed })}
                                                                className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${formData.confirmed ? 'bg-[#1a1c21] border-[#1a1c21] text-white' : 'border-gray-200 bg-white'}`}
                                                            >
                                                                {formData.confirmed && <Check size={16} />}
                                                            </div>
                                                            <span className="text-xs font-black uppercase tracking-widest text-[#1a1c21]">I Accept the Terms</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>

                                <div className="flex items-center justify-between pt-12 border-t border-gray-50 mt-12">
                                    <div className="flex items-center gap-4">
                                        {step > 1 && (
                                            <button
                                                onClick={prevStep}
                                                className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs border border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"
                                            >
                                                Previous
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        onClick={nextStep}
                                        className="bg-[#1a1c21] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all shadow-xl flex items-center gap-3 group"
                                    >
                                        {step === 15 ? 'Submit Project' : 'Next Step'}
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div >
                    )}
                </div >
            </div >
        </div >
    );
};

export default ProjectListingFlow;
