import React, { useState } from 'react';
import {
    ArrowLeft, ArrowRight, Building2, MapPin,
    User, Phone, Mail, FileText, ChevronRight,
    Plus, Image as ImageIcon, Layout, Navigation,
    DollarSign, Percent, ShieldCheck, Check,
    Upload, Trash2, Calendar, Search, Home,
    Info, Star, Layers, Activity, Dumbbell,
    Waves, Bike, Timer, Sun, Wifi, Video,
    FileUp, Maximize, Map
} from 'lucide-react';
import AddPlotsDetails from './ProjectListing/Steps/AddPlotsDetails';
import AddBlockPlan from './ProjectListing/Steps/AddBlockPlan';
import AddPlotDimensions from './ProjectListing/Steps/AddPlotDimensions';
import AddTowerDetails from './ProjectListing/Steps/AddTowerDetails';
import AddPricingOverview from './ProjectListing/Steps/AddPricingOverview';
import AddCLP from './ProjectListing/Steps/AddCLP';
import AddFPP from './ProjectListing/Steps/AddFPP';
import AddSPP from './ProjectListing/Steps/AddSPP';
import AddDPP from './ProjectListing/Steps/AddDPP';
import AddAgriculturalDetails from './ProjectListing/Steps/AddAgriculturalDetails';
import AddLandLocationDetails from './ProjectListing/Steps/AddLandLocationDetails';
import AddAgriPlotDimensions from './ProjectListing/Steps/AddAgriPlotDimensions';
import AddAgriSitePlan from './ProjectListing/Steps/AddAgriSitePlan';
import AddLandPossession5 from './ProjectListing/Steps/AddLandPossession5';
import AddLandPossession6 from './ProjectListing/Steps/AddLandPossession6';
import AddLandPossession7 from './ProjectListing/Steps/AddLandPossession7';
import AddLandPossession8 from './ProjectListing/Steps/AddLandPossession8';
import AddLandPossession9 from './ProjectListing/Steps/AddLandPossession9';
import AddLandPossession10 from './ProjectListing/Steps/AddLandPossession10';
import AddLandPossession11 from './ProjectListing/Steps/AddLandPossession11';
import AddLandPossession11A from './ProjectListing/Steps/AddLandPossession11A';
import AddLandPossession11B from './ProjectListing/Steps/AddLandPossession11B';
import AddLandPossession11C from './ProjectListing/Steps/AddLandPossession11C';
import AddLandPossession12 from './ProjectListing/Steps/AddLandPossession12';
import AddAgriPricing from './ProjectListing/Steps/AddAgriPricing';

interface ProjectListingFlowProps {
    onCancel: () => void;
}

type ProjectType = 'residential' | 'commercial' | 'agricultural' | null;

const ProjectListingFlow: React.FC<ProjectListingFlowProps> = ({ onCancel }) => {
    const [step, setStep] = useState(0);
    const [nonReraStep, setNonReraStep] = useState(1);
    const [projectType, setProjectType] = useState<ProjectType>(null);

    // Form state
    const [formData, setFormData] = useState({
        // Builder Details (Screen 1)
        builderName: '',
        builderAddress: '',
        builderAddressLine: '',
        builderCity: '',
        builderState: '',
        builderPinCode: '',
        builderContactPerson: '',
        builderMobile: '',
        builderEmail: '',
        builderWebsite: '',
        aboutBuilder: '',

        // Basic Details / RERA Consent (Screen 1-A1 / 1-B1)
        isReraRegistered: null as boolean | null,
        companyIncorporationNumber: '',
        companyIncorporationCertificate: null as any,
        builderReraState: '',
        builderReraNumber: '',
        builderReraCertificate: null as any,

        // Authorized Person Details (Screen 1-A2)
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

        // Non-RERA Consent Workflow (Redesigned with Blocks)
        nonReraConsent: {
            builderRegistrationState: '',
            companyIncorporationNumber: '',
            incorporationCertificate: null as any,
            projectReraStatusDescription: '',
            reasons: [] as string[],
            signatoryName: '',
            signatoryDesignation: '',
            signatoryEmail: '',
            signatoryMobile: '',
            panNumber: '',
            panFile: null as any,
            aadhaarNumber: '',
            aadhaarFile: null as any,
            acceptedTerms: false,
        },

        // Project Details Basic (Screen 2)
        projectReraNumber: '',
        projectType: '', // sub category
        productType: '', // e.g., Offices, Shops
        expectedPossession: '', // Month & Year
        projectPlotSize: '',
        unitSize: 'Acres',
        siteAddress: '',

        // Project Overview (Screen 2B)
        aboutProject: '',

        // Project Structure / Tower Details (Screen 3-5)
        totalTowers: '',
        towerDetails: [
            { id: 1, name: '', floors: '', size: '', unit: 'Sqft' }
        ],
        totalUnits: '',
        floorPlans: [
            { id: 1, size: '', unit: 'Sqft', accommodation: '', files: [] as any[] }
        ],
        hasClusterPlan: null as boolean | null,
        clusterPlans: [
            { id: 1, towerId: '', files: [] as any[] }
        ],

        // Site Plan & Location (Screen 6)
        sitePlan: null as any,
        latitude: '',
        longitude: '',

        // Inventory Details (Screen 7)
        lockableSpace: null as boolean | null,
        lockableMinSize: '',
        unlockableMinSize: '',

        // Price & Payment plans (Screens 8-12)
        bsp: '',
        pricingUnit: 'Sqft',
        paymentPlans: [
            { id: 1, type: 'CLP', label: 'Construction Link Plan', price: '19000', installments: [] },
            { id: 2, type: 'FPP', label: 'Flexi Payment Plan', price: '18500', installments: [] },
            { id: 3, type: 'SPP', label: 'Special Payment Plan', price: '18000', installments: [] },
            { id: 4, type: 'DPP', label: 'Down Payment Plan', price: '17000', installments: [] },
        ],

        // Other Charges (Screen 15)
        otherCharges: [
            { label: 'Car Parking Covered', value: '500000' },
            { label: 'Car Parking Open', value: '300000' },
            { label: 'Lease Rent Per Sqft', value: '100' },
            { label: 'Club Membership', value: '500000' },
            { label: 'Electrification Charges (EFC)', value: '300000' },
            { label: 'Fire Fitting Charges (FFC)', value: '100' },
        ],

        // PLC Charts (Screens 16-17)
        facingPlc: [
            { label: 'Central Park Facing', value: '1000' },
            { label: 'Corner', value: '750' },
            { label: 'Any 2 PLC\'s', value: '1500' },
            { label: 'Road Facing', value: '500' },
        ],
        floorPlc: [
            { label: 'Ground Floor', value: '1000' },
            { label: '1st Floor', value: '750' },
            { label: '2nd Floor', value: '1500' },
            { label: '3rd Floor', value: '500' },
        ],

        // Location Advantage (Screen 18)
        advantages: [
            { label: '5 Minutes drive from sector 18 Noida.' },
            { label: '10 minutes drive from Okhla.' },
            { label: '45 Minutes drive from Noida International Airport.' },
        ],

        // Specifications, Amenities (Screens 18-21)
        specifications: [
            { label: 'Ceiling height', value: '' },
            { label: 'Marble Flooring', value: '' },
            { label: 'Fire Fitting', value: '' },
            { label: 'High Speed Lifts', value: '' },
            { label: 'Green Building', value: '' },
            { label: 'LEED Certification', value: '' },
            { label: 'Covered Car Parking', value: '' },
            { label: 'Video Intercom', value: '' },
        ],
        features: [
            { label: '24 Hrs Business Center' },
            { label: '3 Tier security' },
            { label: '24 Hr Electricity' },
            { label: '80% Open Area' },
        ] as { label: string }[],
        amenities: [] as { label: string }[],

        // Media (Screens 22-23)
        photos: {
            flatSize: '3250',
            accommodation: '4 BHK',
            sitePhotos: [
                { label: 'Sun Court', files: [] },
                { label: 'Star Court', files: [] },
                { label: 'Galaxy', files: [] }
            ],
            samplePhotos: [
                { label: 'Entrance', files: [] },
                { label: 'Lift Lobby', files: [] },
                { label: 'Corridor', files: [] }
            ]
        },
        assuredReturn: [
            { id: 1, paymentPlan: '', ar: '', unit: 'Sqft' }
        ],
        assuredRental: [
            { id: 1, product: '', ar: '', unit: '/Sqft' }
        ],
        // Residential specific
        blockDetails: [
            { id: 1, name: '', totalPlots: '' }
        ],
        plotPlans: [
            { id: 1, type: '', direction: '', file: null, plcTags: [] }
        ],
        plotDimensions: [
            { id: 1, size: '', unit: 'Sqyds', dimensions: '', floorPlanFile: null }
        ],
        hasBlockPlan: true,
        blockPlans: [] as { blockId: number; blockName: string; file: File | null }[],
        bankApprovals: [] as string[],
        confirmed: false,
        // Agricultural specific
            agriDetails: {
            possessionType: 'Immediate' as 'Immediate' | 'Calendar',
            expectedPossession: '',
            landSizeUnit: 'Acres' as 'Acres' | 'Meters' | 'Begha',
            beghaSizeUnit: 'Sqyds' as 'Sqyds' | 'Meters',
            totalLandArea: '',
            beghaSize: '',
            agriculturalProjectType: 'Agriculture',
            siteAddress: '',
            villageName: '',
            tehsilName: '',
            khasaraNumber: '',
            state: '',
            googleLocation: '',
            sitePlanFile: null as File | null,
            sitePlanFileName: ''
        },
        agriPlotDimensions: [] as { id: number; landSize: string; unit: 'Sqmtrs' | 'Sqyds'; dimensions: string; attachedFile: File | null; fileName: string }[],
        agriLand: {
            underOwnerPossession: null as boolean | null,
            fencingDone: null as boolean | null,
            fencingTypes: [] as string[],
            singleOwner: null as boolean | null,
            numberOfOwners: '',
            owners: [] as { id: number; name: string; share: string; khasaraNo: string; villageName: string; tehsil: string }[],
            mutationUpdated: null as boolean | null,
            membersAlive: null as boolean | null,
            mutationConfirmed: false,
            landCategory: '',
            landCategoryOther: '',
            // Screen 9
            landOnLease: null as boolean | null,
            cropGrowing: null as boolean | null,
            hasMutation: null as boolean | null,
            underAcquisition: null as boolean | null,
            compensationReceived: null as boolean | null,
            structureExisting: null as boolean | null,
            structureSize: '',
            // Screen 10
            waterBody: null as boolean | null,
            highTensionWire: null as boolean | null,
            cremationGround: null as boolean | null,
            sewerLine: null as boolean | null,
            boucherHouse: null as boolean | null,
            factoryNearby: null as boolean | null,
            factoryName: '',
            factoryType: '',
            // Screen 11
            templeOnLand: null as boolean | null,
            templeNearby: null as boolean | null,
            mosqueOnLand: null as boolean | null,
            mosqueNearby: null as boolean | null,
            distMainRoad: '',
            distSchool: '',
            distHospital: '',
            distPoliceStation: '',
            // Screen 11A
            highwayNearby: null as boolean | null,
            highwayBrief: '',
            // Screen 11B
            familySoldLand: null as boolean | null,
            familySoldBrief: '',
            // Screen 11C
            garbageDumping: null as boolean | null,
            hasOwnershipDocs: null as boolean | null,
            ownershipDocs: [] as { id: number; name: string }[],
            // Screen 12
            loanOnLand: null as boolean | null,
            bankLoans: [] as { id: number; bankName: string; bankBranch: string; bankAddress: string; dateOfLoan: string; emiAmount: string; paidEmi: string }[],
            // Pricing Details
            pricePerUnit: '',
            totalLand: '',
            totalDemand: '',
            pricingConfirmed: false
        }
    });

    const isResidential = projectType === 'residential';
    const isAgricultural = projectType === 'agricultural';

    const getSteps = () => {
        if (isAgricultural) {
            return [
                "Builder Details",
                "Basic Project Details",
                "Land Location Details",
                "Plot Dimensions",
                "Site Plan & Location",
                "Land Possession",
                "Ownership Details",
                "Mutation & Status",
                "Land Category",
                "Lease & Crop Details",
                "Land Surroundings",
                "Temple & Distances",
                "Highway & Roads",
                "Previous Sale",
                "Documents & Waste",
                "Bank Loan Details",
                "Pricing Details",
                "Submission"
            ];
        }

        if (isResidential) {
            return [
                "Builder Details",
                "RERA Registration",
                "Compliance Check",
                "Basic Project Details",
                "About Builder",
                "Project Overview",
                "Block Details",
                "Plot Floor Plan & PLC",
                "Plot Dimensions",
                "Site & Location",
                "Pricing Overview",
                "Construction Link Plan (CLP)",
                "Flexi Payment Plan (FPP)",
                "Special Payment Plan (SPP)",
                "Down Payment Plan (DPP)",
                "Other Charges",
                "Facing/View PLC",
                "Location Advantage",
                "Amenities",
                "Project Media Center",
                "Submission"
            ];
        }

        return [
            "Builder Details",
            "RERA Registration",
            "Compliance Check",
            "Basic Project Details",
            "About Builder",
            "Project Overview",
            "Tower Details",
            "Site & Location",
            "Pricing Overview",
            "Construction Link Plan (CLP)",
            "Flexi Payment Plan (FPP)",
            "Special Payment Plan (SPP)",
            "Down Payment Plan (DPP)",
            "Assured Return",
            "Assured Rental",
            "Other Charges",
            "Facing/View PLC",
            "Location Advantage",
            "Amenities",
            "Project Media Center",
            "Submission"
        ];
    };

    const steps = getSteps();

    const totalSteps = steps.length;

    const nextStep = () => {
        if (isAgricultural) {
            if (step === 1) {
                // Pre-fill site address from builder address if not set
                const builderFullAddress = `${formData.builderAddress}${formData.builderAddressLine ? ', ' + formData.builderAddressLine : ''}${formData.builderCity ? ', ' + formData.builderCity : ''}`;
                setFormData(prev => ({
                    ...prev,
                    agriDetails: {
                        ...prev.agriDetails,
                        siteAddress: prev.agriDetails.siteAddress || builderFullAddress
                    }
                }));
            }
            setStep(prev => prev + 1);
            return;
        }

        if (step === 2) {
            setStep(3);
            setNonReraStep(1);
            return;
        }

        if (step === 3) {
            if (formData.isReraRegistered === false) {
                if (nonReraStep < 6) {
                    setNonReraStep(prev => prev + 1);
                } else {
                    setStep(4);
                }
            } else {
                setStep(4);
            }
            return;
        }

        setStep(prev => prev + 1);
    };

    const prevStep = () => {
        if (step === 4) {
            setStep(3);
            if (formData.isReraRegistered === false) setNonReraStep(6);
            return;
        }

        if (step === 3) {
            if (formData.isReraRegistered === false && nonReraStep > 1) {
                setNonReraStep(prev => prev - 1);
            } else {
                setStep(2);
            }
            return;
        }

        setStep(prev => Math.max(0, prev - 1));
    };

    // UI Helpers
    const renderProgressBar = () => {
        if (step === 0 || step === totalSteps + 1) return null;
        const percentage = (step / totalSteps) * 100;
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
        if (step === 0 || step === totalSteps + 1) return null;
        // Let's check step 16 is submission, step 17 is success.
        // Wait, I updated success to 16 in previous session.
        // Let's make success 17 again for clarity if it's a 16-step flow.
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
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive ? 'bg-[#2FED9A] text-[#1a1c21] font-black' : 'text-gray-400'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${isActive ? 'bg-white text-[#1a1c21]' : isCompleted ? 'bg-[#2FED9A] text-[#1a1c21]' : 'bg-gray-100'
                                    }`}>
                                    {isCompleted ? <Check size={12} strokeWidth={4} /> : stepIdx}
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
                        <div className="space-y-12 animate-fade-in-up flex flex-col items-center">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-black text-[#1a1c21] uppercase tracking-tight">Add New Project</h2>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[11px] opacity-70">Step 1: Choose Project Category</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 w-full max-w-5xl">
                                {[
                                    { id: 'residential', label: 'RESIDENTIAL PLOT', icon: Layout, desc: 'APARTMENTS, VILLAS, FLATS' },
                                    { id: 'commercial', label: 'COMMERCIAL PROJECT', icon: Building2, desc: 'OFFICES, SHOPS, SHOWROOMS' },
                                    { id: 'agricultural', label: 'AGRICULTURAL LAND', icon: MapPin, desc: 'FARM LANDS, RURAL PLOTS' }
                                ].map((cat) => {
                                    const isSelected = projectType === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setProjectType(cat.id as ProjectType)}
                                            className={`group p-10 rounded-[35px] text-center transition-all relative overflow-hidden flex flex-col items-center gap-6 border-2 h-full ${
                                                isSelected 
                                                ? 'bg-white border-[#2FED9A] shadow-2xl shadow-[#2FED9A]/20 scale-[1.05]' 
                                                : 'bg-white border-gray-100/50 hover:border-gray-200 shadow-sm'
                                            }`}
                                        >
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                                                isSelected 
                                                ? 'bg-[#2FED9A] text-white shadow-lg' 
                                                : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                                            }`}>
                                                <cat.icon size={32} />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-black text-[#1a1c21] uppercase tracking-wider">{cat.label}</h4>
                                                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest whitespace-nowrap">{cat.desc}</p>
                                            </div>
                                            {isSelected && (
                                                <div className="absolute top-4 right-4 text-[#2FED9A]">
                                                    <Check size={20} className="font-black" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            
                            <div className="flex flex-col items-center gap-8 pt-8">
                                <button
                                    disabled={!projectType}
                                    onClick={() => setStep(1)}
                                    className={`px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl flex items-center gap-3 ${
                                        projectType 
                                        ? 'bg-[#2FED9A] text-[#1a1c21] hover:scale-105 active:scale-95 shadow-[#2FED9A]/30' 
                                        : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                    }`}
                                >
                                    Start Listing <ChevronRight size={18} />
                                </button>
                                
                                <button
                                    onClick={onCancel}
                                    className="text-gray-300 font-bold uppercase tracking-widest text-[10px] hover:text-[#1a1c21] transition-colors border-b border-transparent hover:border-gray-200 pb-1"
                                >
                                    Cancel & Return to Dashboard
                                </button>
                            </div>
                        </div>
                    ) : step === totalSteps + 1 ? (
                        <div className="min-h-[600px] flex flex-col items-center justify-center space-y-10 py-20 animate-fade-in">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#2FED9A]/20 blur-[100px] rounded-full animate-pulse" />
                                <div className="relative w-28 h-28 bg-[#2FED9A] text-[#1a1c21] rounded-[36px] flex items-center justify-center shadow-2xl shadow-teal-500/40">
                                    <Check size={56} strokeWidth={3} />
                                </div>
                            </div>

                            {isAgricultural ? (
                                <div className="text-center space-y-5 max-w-2xl">
                                    <h2 className="text-4xl font-black text-[#1a1c21] leading-tight">
                                        Thank You to submit the details of your project. Your project listing will get active soon.
                                    </h2>
                                    <p className="text-gray-400 font-bold text-sm leading-relaxed">
                                        At the same time the developer will get the confirmation for submission on his registered mail id and mobile number.
                                    </p>
                                    <p className="text-gray-400 font-bold text-sm leading-relaxed">
                                        Now in his dashboard he will get the option to boost his project for getting maximum visibility and leads he can opt for our various packages.
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center space-y-5">
                                    <h2 className="text-5xl font-black text-[#1a1c21] uppercase tracking-tighter">Congratulations!</h2>
                                    <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest">Project Submitted Successfully</h3>
                                    <p className="text-gray-400 font-bold text-sm max-w-md mx-auto leading-relaxed">
                                        Your project listing has been sent for review. Our team will verify the details and it will be live within 24-48 hours.
                                    </p>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
                                <button 
                                    onClick={() => onCancel()}
                                    className="flex-1 h-18 bg-[#1a1c21] text-white rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl py-6"
                                >
                                    Go to Dashboard
                                </button>
                                <button 
                                    onClick={() => setStep(0)}
                                    className="flex-1 h-18 bg-white border-4 border-gray-50 text-[#1a1c21] rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all shadow-xl py-6"
                                >
                                    Add New Project
                                </button>
                            </div>

                            <div className="pt-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                                    <Search size={18} />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Listing ID: #HP-2025-00124</span>
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
                                                Project Listing • Step {step} of {totalSteps}
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
                                        {/* Step 1: Builder Details (Screen 1) */}
                                        {step === 1 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder/ Developer</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderName}
                                                        onChange={(e) => setFormData({ ...formData, builderName: e.target.value })}
                                                        placeholder="Name"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Address</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderAddress}
                                                        onChange={(e) => setFormData({ ...formData, builderAddress: e.target.value })}
                                                        placeholder="Address Line 1"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Address Line</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderAddressLine}
                                                        onChange={(e) => setFormData({ ...formData, builderAddressLine: e.target.value })}
                                                        placeholder="Address Line 2"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">City</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderCity}
                                                        onChange={(e) => setFormData({ ...formData, builderCity: e.target.value })}
                                                        placeholder="City"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">State</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderState}
                                                        onChange={(e) => setFormData({ ...formData, builderState: e.target.value })}
                                                        placeholder="State"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Pin Code</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderPinCode}
                                                        onChange={(e) => setFormData({ ...formData, builderPinCode: e.target.value })}
                                                        placeholder="Pin Code"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                {projectType !== 'residential' && (
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Website</label>
                                                        <input
                                                            type="text"
                                                            value={formData.builderWebsite}
                                                            onChange={(e) => setFormData({ ...formData, builderWebsite: e.target.value })}
                                                            placeholder="www.example.com"
                                                            className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                        />
                                                    </div>
                                                )}

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Person</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderContactPerson}
                                                        onChange={(e) => setFormData({ ...formData, builderContactPerson: e.target.value })}
                                                        placeholder="Contact Person Name"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile No</label>
                                                    <input
                                                        type="text"
                                                        value={formData.builderMobile}
                                                        onChange={(e) => setFormData({ ...formData, builderMobile: e.target.value })}
                                                        placeholder="Mobile"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">E Mail Id</label>
                                                    <input
                                                        type="email"
                                                        value={formData.builderEmail}
                                                        onChange={(e) => setFormData({ ...formData, builderEmail: e.target.value })}
                                                        placeholder="Email ID"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2: RERA Registration (Screen 1-A1 / 1-B1) */}
                                        {step === 2 && !isAgricultural && (
                                            <div className="space-y-12 animate-fade-in">
                                                <div className="space-y-6">
                                                    <label className="text-xs font-black text-[#1a1c21] uppercase tracking-widest ml-1 text-center block w-full">Do you have the Builder RERA?</label>
                                                    <div className="flex gap-4 max-w-md mx-auto">
                                                        {[
                                                            { value: true, label: 'Yes' },
                                                            { value: false, label: 'No' },
                                                        ].map((opt) => (
                                                            <button
                                                                key={opt.label}
                                                                onClick={() => setFormData({ ...formData, isReraRegistered: opt.value })}
                                                                className={`flex-1 h-16 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${formData.isReraRegistered === opt.value
                                                                    ? 'bg-[#2FED9A] border-[#2FED9A] text-[#1a1c21] shadow-xl shadow-[#2FED9A]/20'
                                                                    : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                                                                    }`}
                                                            >
                                                                {opt.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {formData.isReraRegistered === true && (
                                                    <div className="space-y-8 animate-fade-in-up bg-gray-50/50 p-8 rounded-[32px] border border-gray-100">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Select State (Builder Firm)</label>
                                                                <select 
                                                                    value={formData.builderReraState}
                                                                    onChange={(e) => setFormData({...formData, builderReraState: e.target.value})}
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                >
                                                                    <option value="">Select State</option>
                                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                                    <option value="Haryana">Haryana</option>
                                                                    <option value="Delhi">Delhi</option>
                                                                </select>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Incorporation Details</label>
                                                                <div className="flex gap-4">
                                                                    <input
                                                                        type="text"
                                                                        value={formData.companyIncorporationNumber}
                                                                        onChange={(e) => setFormData({ ...formData, companyIncorporationNumber: e.target.value })}
                                                                        placeholder="CIN Number"
                                                                        className="flex-1 h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                    />
                                                                    <button className="h-14 px-4 bg-white border border-dashed border-gray-200 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:bg-teal-50 transition-all">
                                                                        <Upload size={14} /> Attach
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Select State (RERA)</label>
                                                                <select 
                                                                    value={formData.builderReraState}
                                                                    onChange={(e) => setFormData({...formData, builderReraState: e.target.value})}
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                >
                                                                    <option value="">Select State</option>
                                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                                    <option value="Haryana">Haryana</option>
                                                                </select>
                                                            </div>

                                                            <div className="space-y-4">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">RERA Certificate</label>
                                                                    <div className="flex gap-4">
                                                                        <input
                                                                            type="text"
                                                                            value={formData.builderReraNumber}
                                                                            onChange={(e) => setFormData({ ...formData, builderReraNumber: e.target.value })}
                                                                            placeholder="RERA Number"
                                                                            className="flex-1 h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                        />
                                                                        <button className="h-14 px-4 bg-white border border-dashed border-gray-200 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:bg-teal-50 transition-all">
                                                                            <Upload size={14} /> Attach
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                        {/* Step 3: Compliance Check */}
                                        {step === 3 && !isAgricultural && (
                                            <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
                                                {formData.isReraRegistered ? (
                                                    /* RERA Flow: Authorized Signatory Details */
                                                    <div className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100 space-y-8">
                                                        <div className="space-y-4">
                                                            <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-2xl flex items-center justify-center">
                                                                <User size={32} />
                                                            </div>
                                                            <h3 className="text-2xl font-black uppercase tracking-tight">Authorized Signatory Verification</h3>
                                                            <p className="text-sm font-bold text-gray-400 italic">
                                                                Provide details of the authorized representative responsible for the declaration and project listing.
                                                            </p>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder Name</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.builderName}
                                                                    readOnly
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none shadow-sm opacity-60"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Authorized Signatory Name</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.authorizedPerson.name}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        authorizedPerson: { ...formData.authorizedPerson, name: e.target.value }
                                                                    })}
                                                                    placeholder="Full Name"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Designation</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.authorizedPerson.designation}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        authorizedPerson: { ...formData.authorizedPerson, designation: e.target.value }
                                                                    })}
                                                                    placeholder="e.g. Director, Partner"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Email</label>
                                                                <input
                                                                    type="email"
                                                                    value={formData.authorizedPerson.email}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        authorizedPerson: { ...formData.authorizedPerson, email: e.target.value }
                                                                    })}
                                                                    placeholder="email@company.com"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Mobile</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.authorizedPerson.mobile}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        authorizedPerson: { ...formData.authorizedPerson, mobile: e.target.value }
                                                                    })}
                                                                    placeholder="10-digit number"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">PAN Number</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.authorizedPerson.panNumber}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        authorizedPerson: { ...formData.authorizedPerson, panNumber: e.target.value }
                                                                    })}
                                                                    placeholder="ABCDE1234F"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                                            <p className="text-xs font-bold text-teal-600 leading-relaxed">
                                                                "I confirm that I am an authorized representative of the builder and the information provided in this declaration is accurate."
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    /* Non-RERA Flow: Multi-block Consent */
                                                    <div className="space-y-8">
                                                        {nonReraStep === 1 && (
                                                            /* BLOCK – NON RERA DECLARATION */
                                                    <div className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100 space-y-8">
                                                        <div className="space-y-4">
                                                            <div className="w-16 h-16 bg-[#FF8A00]/10 text-[#FF8A00] rounded-2xl flex items-center justify-center">
                                                                <ShieldCheck size={32} />
                                                            </div>
                                                            <h3 className="text-2xl font-black uppercase tracking-tight">Non-RERA Project Declaration</h3>
                                                            <p className="text-sm font-bold text-gray-400 italic">
                                                                You have selected that the builder or project does not have RERA registration. Before continuing, confirm the legal registration details of the builder entity.
                                                            </p>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder Registration State</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.builderRegistrationState}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, builderRegistrationState: e.target.value }
                                                                    })}
                                                                    placeholder="Enter State"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#FF8A00] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Incorporation Certificate Number</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.companyIncorporationNumber}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, companyIncorporationNumber: e.target.value }
                                                                    })}
                                                                    placeholder="CIN Number"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#FF8A00] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="md:col-span-2 space-y-4">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Upload Company Incorporation Certificate</label>
                                                                <div className="flex gap-4">
                                                                    <div className="flex-1 h-32 bg-white border-2 border-dashed border-gray-100 rounded-3xl flex flex-col items-center justify-center gap-2 hover:bg-orange-50 hover:border-[#FF8A00] transition-all cursor-pointer">
                                                                        <Upload className="text-[#FF8A00]" size={24} />
                                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Click to upload (.pdf, .jpg)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="bg-[#FF8A00]/5 p-6 rounded-2xl border border-[#FF8A00]/10">
                                                            <p className="text-xs font-bold text-[#FF8A00] leading-relaxed">
                                                                "I confirm that the builder entity is legally registered and holds a valid incorporation certificate for conducting business activities."
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 2 && (
                                                    /* BLOCK – ADVERTISEMENT CONSENT LETTER */
                                                    <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm space-y-10 text-[#1a1c21]">
                                                        <div className="flex flex-col items-center justify-center space-y-4 pb-6 border-b border-gray-100">
                                                            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center shadow-inner">
                                                                <FileText size={32} />
                                                            </div>
                                                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#1a1c21]">CONSENT FORM</h3>
                                                        </div>

                                                        <div className="space-y-8 text-sm leading-relaxed max-w-2xl mx-auto">
                                                            <div className="flex justify-between items-start">
                                                                <div className="space-y-1">
                                                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Date</p>
                                                                    <p className="font-bold text-base">{new Date().toLocaleDateString('en-GB')}</p>
                                                                    
                                                                    <div className="h-4"></div>
                                                                    
                                                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">To</p>
                                                                    <p className="font-bold text-base">Huntproperty.com <span className="text-gray-400 font-normal text-sm block md:inline md:ml-1">(A business unit of Catalyst E pages Pvt Ltd)</span></p>
                                                                    <p className="text-gray-600">3rd Floor, The Homestop At 104,</p>
                                                                    <p className="text-gray-600">Sector 104, Hazipur,</p>
                                                                    <p className="text-gray-600">Noida, U.P 201304.</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="space-y-6 pt-4">
                                                                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                                                        <span className="font-black uppercase tracking-widest text-xs min-w-[300px] md:min-w-fit flex-shrink-0">Subject: Advertisement of Project Name</span>
                                                                        <input 
                                                                            type="text" 
                                                                            value={formData.builderName} 
                                                                            onChange={(e) => setFormData({...formData, builderName: e.target.value})}
                                                                            placeholder="Enter Project Name"
                                                                            className="flex-1 w-full bg-transparent border-b-2 border-dashed border-gray-300 px-2 py-1 outline-none focus:border-[#2FED9A] font-bold text-[#1a1c21] transition-colors"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="space-y-4 text-gray-700">
                                                                    <p className="font-bold text-[#1a1c21]">Dear Concern Person,</p>
                                                                    
                                                                    <p className="leading-loose text-justify">
                                                                        Please do proceed with publishing the advertisements/informational pages of the project{" "}
                                                                        <span className="font-bold text-[#1a1c21] inline-block min-w-[200px] border-b-2 border-gray-200 px-2 text-center bg-gray-50/50 rounded-t-md mx-1">{formData.builderName || "____________________"}</span>
                                                                        {" "}located at the following address:{" "}
                                                                        <span className="font-bold text-[#1a1c21] inline-block min-w-[300px] border-b-2 border-gray-200 px-2 text-center bg-gray-50/50 rounded-t-md mx-1 align-bottom pb-1">{formData.builderAddress}{formData.builderCity ? `, ${formData.builderCity}` : ''}</span>
                                                                        ; based on below instructions.
                                                                    </p>
                                                                </div>
                                                                
                                                                <div className="space-y-3 pt-6 border-t border-gray-100">
                                                                    <label className="text-xs font-black text-[#1a1c21] uppercase tracking-widest block">RERA Details of the Project:</label>
                                                                    <textarea
                                                                        value={formData.nonReraConsent.projectReraStatusDescription}
                                                                        onChange={(e) => setFormData({
                                                                            ...formData,
                                                                            nonReraConsent: { ...formData.nonReraConsent, projectReraStatusDescription: e.target.value }
                                                                        })}
                                                                        placeholder="Describe why RERA is not applicable..."
                                                                        className="w-full h-32 bg-gray-50 border border-gray-100 rounded-2xl p-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm resize-none transition-all focus:bg-white"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 3 && (
                                                    /* BLOCK – RERA NOT APPLICABLE REASON */
                                                    <div className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100 space-y-8">
                                                        <div className="space-y-4">
                                                            <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center">
                                                                <Layers size={32} />
                                                            </div>
                                                            <h3 className="text-2xl font-black uppercase tracking-tight">Reason for Non-RERA Status</h3>
                                                            <p className="text-sm font-bold text-gray-400 italic">
                                                                Provide the appropriate reason explaining why the project does not require RERA registration.
                                                            </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            {[
                                                                "Project plot area is below 500 square meters and the project contains fewer than 8 units",
                                                                "Project was completed prior to May 2017",
                                                                "Project is outside the jurisdiction of the planning authority",
                                                                "Project is located on leasehold land, freehold land, or other non-notified land"
                                                            ].map((reason, idx) => {
                                                                const isSelected = formData.nonReraConsent.reasons.includes(reason);
                                                                return (
                                                                    <button
                                                                        key={idx}
                                                                        onClick={() => {
                                                                            const newReasons = isSelected
                                                                                ? formData.nonReraConsent.reasons.filter(r => r !== reason)
                                                                                : [reason]; // Single select as per requirements? Or multi? Usually one primary reason.
                                                                            setFormData({
                                                                                ...formData,
                                                                                nonReraConsent: { ...formData.nonReraConsent, reasons: newReasons }
                                                                            });
                                                                        }}
                                                                        className={`w-full p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${isSelected ? 'bg-white border-purple-500 shadow-lg' : 'bg-white border-gray-50 hover:border-purple-100'}`}
                                                                    >
                                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-purple-500 border-purple-500 text-white' : 'border-gray-200'}`}>
                                                                            {isSelected && <Check size={12} />}
                                                                        </div>
                                                                        <span className={`text-sm font-bold ${isSelected ? 'text-[#1a1c21]' : 'text-gray-500'}`}>{reason}</span>
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>

                                                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                                            <p className="text-xs font-bold text-purple-600 leading-relaxed">
                                                                "The selected reason accurately explains why the project does not require RERA registration."
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 4 && (
                                                    /* BLOCK – REGULATORY DISCLAIMER */
                                                    <div className="bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm space-y-10 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                                            <ShieldCheck size={240} className="text-[#1a1c21]" />
                                                        </div>
                                                        <div className="relative z-10 space-y-10">
                                                            <div className="flex flex-col items-center text-center space-y-6">
                                                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center shadow-inner">
                                                                    <Info size={40} />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#1a1c21]">Regulatory Compliance Notice</h3>
                                                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">LEGAL GUIDELINES & DISCLOSURES</p>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-8 max-w-2xl mx-auto">
                                                                <div className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 space-y-6">
                                                                    <p className="text-base font-bold text-[#1a1c21] leading-relaxed">
                                                                        The services offered by <span className="text-emerald-500">huntproperty.com</span> are at all times subject to guidelines/directions issued by Relevant Regulatory Authority of India/State or any other statutory authority as applicable from time to time.
                                                                    </p>
                                                                    <p className="text-base font-bold text-[#1a1c21] leading-relaxed">
                                                                        Please note that <span className="text-emerald-500">Huntproperty.com</span> is under no obligation but reserves the right to extend, cancel, discontinue, prematurely withdraw, change, alter or modify the content of the advertisement or any part thereof, at its sole discretion at any time as may be required in view of business exigencies and/or regulatory or statutory requirements.
                                                                    </p>
                                                                </div>

                                                                <div className="flex items-start gap-5 p-6 bg-emerald-50/30 rounded-2xl border border-emerald-100/50 transition-all hover:bg-emerald-50/50">
                                                                    <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                                                                        <Check size={20} strokeWidth={3} />
                                                                    </div>
                                                                    <p className="text-sm font-bold leading-relaxed text-[#1a1c21]">
                                                                        HuntProperty.com reserves the right to modify, suspend, remove, or alter any advertisement or project information if required by regulatory authorities or internal verification processes.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 5 && (
                                                    /* BLOCK – AUTHORIZED SIGNATORY DETAILS */
                                                    <div className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100 space-y-8">
                                                        <div className="space-y-4">
                                                            <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-2xl flex items-center justify-center">
                                                                <User size={32} />
                                                            </div>
                                                            <h3 className="text-2xl font-black uppercase tracking-tight">Authorized Signatory Verification</h3>
                                                            <p className="text-sm font-bold text-gray-400 italic">
                                                                Provide details of the authorized representative responsible for the declaration and project listing.
                                                            </p>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder Name</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.builderName}
                                                                    readOnly
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none shadow-sm opacity-60"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Authorized Signatory Name</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.signatoryName}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, signatoryName: e.target.value }
                                                                    })}
                                                                    placeholder="Full Name"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Designation</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.signatoryDesignation}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, signatoryDesignation: e.target.value }
                                                                    })}
                                                                    placeholder="e.g. Director, Partner"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Email</label>
                                                                <input
                                                                    type="email"
                                                                    value={formData.nonReraConsent.signatoryEmail}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, signatoryEmail: e.target.value }
                                                                    })}
                                                                    placeholder="email@company.com"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Mobile</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.signatoryMobile}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, signatoryMobile: e.target.value }
                                                                    })}
                                                                    placeholder="10-digit number"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">PAN Number</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.panNumber}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, panNumber: e.target.value }
                                                                    })}
                                                                    placeholder="ABCDE1234F"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="md:col-span-2 space-y-4">
                                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Aadhaar Number</label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.nonReraConsent.aadhaarNumber}
                                                                    onChange={(e) => setFormData({
                                                                        ...formData,
                                                                        nonReraConsent: { ...formData.nonReraConsent, aadhaarNumber: e.target.value }
                                                                    })}
                                                                    placeholder="12-digit Aadhaar"
                                                                    className="w-full h-14 bg-white border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                                            <p className="text-xs font-bold text-teal-600 leading-relaxed">
                                                                "I confirm that I am an authorized representative of the builder and the information provided in this declaration is accurate."
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {nonReraStep === 6 && (
                                                    /* BLOCK – FINAL CONSENT (Minimal White Design) */
                                                    <div className="bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm space-y-12 animate-fade-in text-center">
                                                        <div className="flex flex-col items-center space-y-8">
                                                            <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner relative">
                                                                <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping opacity-25"></div>
                                                                <Check size={48} strokeWidth={3} />
                                                            </div>
                                                            
                                                            <div className="space-y-4 max-w-xl mx-auto">
                                                                <h3 className="text-4xl font-black uppercase tracking-tight text-[#1a1c21]">Final Consent Confirmation</h3>
                                                                <p className="text-base font-bold text-gray-400">Carefully review the project information before accepting the declaration.</p>
                                                            </div>
                                                        </div>

                                                        <div className="text-left space-y-6 max-w-3xl mx-auto bg-gray-50/50 rounded-3xl p-8 border border-gray-100">
                                                            <p className="text-sm font-bold text-[#1a1c21] leading-relaxed">
                                                                Please review & satisfy yourself that all of the information in the advertisement and the Project Page is accurate. If any of the information in the advertisement and the Project Page is inaccurate, you must correct it by informing our support team.
                                                            </p>
                                                            <p className="text-sm font-bold text-[#1a1c21] leading-relaxed">
                                                                In case of any concerns, feel free to get in touch with us at <span className="text-emerald-500 underline">contactus@huntproperty.com</span> or your sales representative. If you have any questions, please do not hesitate to contact us.
                                                            </p>
                                                        </div>

                                                        <div className="max-w-2xl mx-auto">
                                                            <label 
                                                                className={`group relative flex items-start gap-6 p-8 rounded-[32px] border-2 transition-all cursor-pointer ${
                                                                    formData.nonReraConsent.acceptedTerms 
                                                                    ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-500/10' 
                                                                    : 'bg-white border-gray-100 hover:border-emerald-200'
                                                                }`}
                                                            >
                                                                <div className="relative flex items-center shrink-0 mt-1">
                                                                    <input 
                                                                        type="checkbox"
                                                                        className="peer sr-only"
                                                                        checked={formData.nonReraConsent.acceptedTerms}
                                                                        onChange={(e) => setFormData({
                                                                            ...formData, 
                                                                            nonReraConsent: {
                                                                                ...formData.nonReraConsent,
                                                                                acceptedTerms: e.target.checked
                                                                            }
                                                                        })}
                                                                    />
                                                                    <div className="w-8 h-8 rounded-xl border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center">
                                                                        <Check size={18} className="text-white scale-0 peer-checked:scale-100 transition-transform" strokeWidth={4} />
                                                                    </div>
                                                                </div>
                                                                <div className="text-left space-y-1">
                                                                    <div className="text-lg font-black uppercase tracking-tight text-[#1a1c21]">I Accept All Statements</div>
                                                                    <p className="text-xs font-bold text-gray-400 leading-relaxed">
                                                                        I confirm that all project details, declarations, and uploaded documents are accurate and comply with the applicable legal and regulatory requirements. I accept all terms and conditions of HuntProperty.com for publishing this project listing.
                                                                    </p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                                        {/* Step 4: Basic Project Details (Screen 2) */}
                                        {step === 4 && (projectType === 'residential' || projectType === 'commercial') && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project RERA Number</label>
                                                    <input
                                                        type="text"
                                                        value={formData.projectReraNumber}
                                                        onChange={(e) => setFormData({ ...formData, projectReraNumber: e.target.value })}
                                                        placeholder="RERA Number"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project Category</label>
                                                    <select 
                                                        value={formData.projectType}
                                                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    >
                                                        <option value="">Select Category</option>
                                                        <option value="Commercial">Commercial</option>
                                                        <option value="Residential">Residential</option>
                                                    </select>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Product Type</label>
                                                    <select 
                                                        value={formData.productType}
                                                        onChange={(e) => setFormData({...formData, productType: e.target.value})}
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    >
                                                        <option value="">Select Type</option>
                                                        <option value="Offices">Offices</option>
                                                        <option value="Shops">Shops</option>
                                                        <option value="Showrooms">Showrooms</option>
                                                        <option value="Studio Apartments">Studio Apartments</option>
                                                        <option value="Food Court">Food Court</option>
                                                    </select>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Possession Date</label>
                                                    <input
                                                        type="text"
                                                        value={formData.expectedPossession}
                                                        onChange={(e) => setFormData({ ...formData, expectedPossession: e.target.value })}
                                                        placeholder="Month / Year"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project Plot Size</label>
                                                    <div className="flex gap-4">
                                                        <input
                                                            type="text"
                                                            value={formData.projectPlotSize}
                                                            onChange={(e) => setFormData({ ...formData, projectPlotSize: e.target.value })}
                                                            placeholder="Size"
                                                            className="flex-1 h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                        />
                                                        <select 
                                                            value={formData.unitSize}
                                                            onChange={(e) => setFormData({...formData, unitSize: e.target.value})}
                                                            className="w-32 h-14 bg-gray-50 border border-gray-100 rounded-xl px-4 font-bold text-xs"
                                                        >
                                                            <option value="Acres">Acres</option>
                                                            {isResidential ? (
                                                                <>
                                                                    <option value="Meters">Meters</option>
                                                                    <option value="Sqyd">Sqyd</option>
                                                                </>
                                                            ) : (
                                                                <option value="Sqft">Sqft</option>
                                                            )}
                                                            <option value="Sqm">Sqm</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="md:col-span-2 space-y-2">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Site Address</label>
                                                    <input
                                                        type="text"
                                                        value={formData.siteAddress}
                                                        onChange={(e) => setFormData({ ...formData, siteAddress: e.target.value })}
                                                        placeholder="Complete Site Address"
                                                        className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 5: About Builder (Screen 2A) */}
                                        {step === 5 && (projectType === 'residential' || projectType === 'commercial') && (
                                            <div className="space-y-10 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px] flex flex-col">
                                                <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                                                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center shadow-inner">
                                                        <User size={32} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">About Builder</h3>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">BUILDER PROFILE & WEBSITE ADDRESS</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-1 bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[28px] p-2 hover:border-emerald-200/30 hover:bg-white transition-all flex flex-col focus-within:border-emerald-500 focus-within:bg-white focus-within:shadow-xl focus-within:shadow-emerald-500/5">
                                                    <textarea 
                                                        value={formData.aboutBuilder}
                                                        onChange={(e) => setFormData({...formData, aboutBuilder: e.target.value})}
                                                        placeholder="Start typing builder profile here..."
                                                        className="flex-1 bg-transparent border-none outline-none text-[#1a1c21] font-bold text-sm leading-relaxed resize-none p-6 placeholder:text-gray-300"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Builder website</label>
                                                        <input 
                                                            type="text"
                                                            value={formData.builderWebsite}
                                                            onChange={(e) => setFormData({...formData, builderWebsite: e.target.value})}
                                                            placeholder="Enter the Website Address"
                                                            className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-emerald-500 shadow-sm"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="flex justify-between items-center pt-8 text-[10px] font-black uppercase tracking-widest">
                                                    <div className="flex items-center gap-2 text-gray-400">
                                                        <Info size={14} className="text-emerald-500" />
                                                        <span>Min 100 characters recommended for better profile visibility</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className={`${formData.aboutBuilder.length >= 100 ? 'text-emerald-500' : 'text-orange-400'}`}>
                                                            {formData.aboutBuilder.length} characters
                                                        </span>
                                                        <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                            <div 
                                                                className={`h-full transition-all duration-300 ${formData.aboutBuilder.length >= 100 ? 'bg-emerald-500' : 'bg-orange-400'}`}
                                                                style={{ width: `${Math.min(100, (formData.aboutBuilder.length / 100) * 100)}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 6: Project Overview - Non-Agricultural only */}
                                        {(!isAgricultural && step === 6) && (
                                            <div className="space-y-10 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px] flex flex-col">
                                                <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                                                    <div className="w-16 h-16 bg-[#FF8A00]/10 text-[#FF8A00] rounded-2xl flex items-center justify-center shadow-inner">
                                                        <Layers size={32} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">About Project</h3>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DETAILED PROJECT DESCRIPTION & HIGHLIGHTS</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-1 bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[28px] p-2 hover:border-[#FF8A00]/30 hover:bg-white transition-all flex flex-col focus-within:border-[#FF8A00] focus-within:bg-white focus-within:shadow-xl focus-within:shadow-[#FF8A00]/5">
                                                    <textarea 
                                                        value={formData.aboutProject}
                                                        onChange={(e) => setFormData({...formData, aboutProject: e.target.value})}
                                                        placeholder="Start typing project description here..."
                                                        className="flex-1 bg-transparent border-none outline-none text-[#1a1c21] font-bold text-sm leading-relaxed resize-none p-6 placeholder:text-gray-300"
                                                    />
                                                </div>
                                                
                                                <div className="flex justify-between items-center pt-8 text-[10px] font-black uppercase tracking-widest">
                                                    <div className="flex items-center gap-2 text-gray-400">
                                                        <Info size={14} className="text-[#FF8A00]" />
                                                        <span>Min 100 characters recommended for better visibility</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className={`${formData.aboutProject.length >= 100 ? 'text-emerald-500' : 'text-orange-400'}`}>
                                                            {formData.aboutProject.length} characters
                                                        </span>
                                                        <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                            <div 
                                                                className={`h-full transition-all duration-300 ${formData.aboutProject.length >= 100 ? 'bg-emerald-500' : 'bg-orange-400'}`}
                                                                style={{ width: `${Math.min(100, (formData.aboutProject.length / 100) * 100)}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 7: Tower Details / Block Details (Screen 3) */}
                                        {step === 7 && !isAgricultural && (
                                            isResidential ? (
                                                <AddPlotsDetails 
                                                    formData={formData} 
                                                    updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                                />
                                            ) : (
                                                <AddTowerDetails 
                                                    formData={formData} 
                                                    updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                                />
                                            )
                                        )}

                                        {/* Step 8: Add Block Plan (Screen 4) - Residential Only */}
                                        {step === 8 && isResidential && (
                                            <AddBlockPlan 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Step 9: Add Plot Dimensions (Screen 5) - Residential Only */}
                                        {step === 9 && isResidential && (
                                            <AddPlotDimensions 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Agricultural Details Step */}
                                        {isAgricultural && step === 2 && (
                                            <AddAgriculturalDetails 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Agricultural Land Location Details Step */}
                                        {isAgricultural && step === 3 && (
                                            <AddLandLocationDetails 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Agricultural Plot Dimensions Step (Screen 3) */}
                                        {isAgricultural && step === 4 && (
                                            <AddAgriPlotDimensions 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Agricultural Site Plan & Location Step (Screen 4) */}
                                        {isAgricultural && step === 5 && (
                                            <AddAgriSitePlan 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Land Possession - Screen 5 */}
                                        {isAgricultural && step === 6 && (
                                            <AddLandPossession5
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 6 */}
                                        {isAgricultural && step === 7 && (
                                            <AddLandPossession6
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 7 */}
                                        {isAgricultural && step === 8 && (
                                            <AddLandPossession7
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 8 */}
                                        {isAgricultural && step === 9 && (
                                            <AddLandPossession8
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 9 */}
                                        {isAgricultural && step === 10 && (
                                            <AddLandPossession9
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 10 */}
                                        {isAgricultural && step === 11 && (
                                            <AddLandPossession10
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 11 */}
                                        {isAgricultural && step === 12 && (
                                            <AddLandPossession11
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 11A */}
                                        {isAgricultural && step === 13 && (
                                            <AddLandPossession11A
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 11B */}
                                        {isAgricultural && step === 14 && (
                                            <AddLandPossession11B
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 11C */}
                                        {isAgricultural && step === 15 && (
                                            <AddLandPossession11C
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}

                                        {/* Land Possession - Screen 12 */}
                                        {isAgricultural && step === 16 && (
                                            <AddLandPossession12
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                            />
                                        )}


                                        {/* Site & Location (Screen 8/10) - non-agricultural only */}
                                        {((isResidential && step === 10) || (!isResidential && !isAgricultural && step === 8)) && (
                                            <div className="space-y-8 animate-fade-in">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Upload Site Plan</label>
                                                    <div className="border-2 border-dashed border-gray-100 rounded-[32px] p-10 flex items-center gap-8 bg-gray-50 hover:bg-white hover:border-teal-200 transition-all cursor-pointer group">
                                                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-gray-300 group-hover:text-teal-500 shadow-sm">
                                                            <ImageIcon size={32} />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <h4 className="text-lg font-black uppercase text-gray-700">Site Plan Master</h4>
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DRAG OR CLICK TO UPLOAD PROJECT MASTER LAYOUT</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Map Location</label>
                                                    <div className="h-[400px] bg-gray-100 rounded-[40px] overflow-hidden border border-gray-100 relative shadow-inner">
                                                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.3910,28.5355,12,0/800x400?access_token=pk.ey...')] bg-cover bg-center opacity-70 grayscale" />
                                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce border border-white">
                                                                <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center">
                                                                    <MapPin size={20} />
                                                                </div>
                                                                <span className="text-xs font-black uppercase text-gray-800">Pin Location Here</span>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                                                            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-4">
                                                                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                                                                    <Navigation size={16} />
                                                                </div>
                                                                <div className="text-[9px] font-black text-gray-400 uppercase leading-none space-y-1">
                                                                    <p>Lat: {formData.latitude || '28.5355'}</p>
                                                                    <p>Lng: {formData.longitude || '77.3910'}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location Advantages</label>
                                                    <div className="flex gap-4">
                                                        <input
                                                            id="adv-input"
                                                            placeholder="Add Location Advantage (e.g. 5 min from Metro)"
                                                            className="flex-1 h-14 bg-white border border-gray-100 rounded-2xl px-6 font-bold text-sm outline-none focus:border-[#2FED9A] shadow-sm"
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') {
                                                                    const val = (e.target as HTMLInputElement).value;
                                                                    if (val) {
                                                                        setFormData({ ...formData, advantages: [...formData.advantages, { label: val }] });
                                                                        (e.target as HTMLInputElement).value = '';
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                const el = document.getElementById('adv-input') as HTMLInputElement;
                                                                if (el.value) {
                                                                    setFormData({ ...formData, advantages: [...formData.advantages, { label: el.value }] });
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
                                                                <span className="text-xs font-bold text-gray-700">{adv.label}</span>
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


                                        {/* Pricing Overview (Screen 9/11) - non-agricultural only */}
                                        {((isResidential && step === 11) || (!isResidential && !isAgricultural && step === 9)) && (
                                            <AddPricingOverview 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Construction Linked Plan (CLP) (Screen 10/12) */}
                                        {((isResidential && step === 12) || (!isResidential && !isAgricultural && step === 10)) && (
                                            <AddCLP 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Flexi Payment Plan (FPP) (Screen 11/13) */}
                                        {((isResidential && step === 13) || (!isResidential && !isAgricultural && step === 11)) && (
                                            <AddFPP 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}

                                        {/* Special Payment Plan (SPP) (Screen 12/14) */}
                                        {((isResidential && step === 14) || (!isResidential && !isAgricultural && step === 12)) && (
                                            <AddSPP 
                                                formData={formData} 
                                                updateFormData={(data) => setFormData({ ...formData, ...data })} 
                                            />
                                        )}


                                        {/* Assured Return (Screen 14) */}
                                        {step === 14 && !isResidential && !isAgricultural && (
                                            <div className="space-y-10 animate-fade-in bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
                                                <div className="flex items-center gap-6 pb-6 border-b border-gray-50/50">
                                                    <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center">
                                                        <Percent size={28} />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tighter">Assured Return</h3>
                                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Provide the details of Assured Return</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="bg-[#1a1c21] rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
                                                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] w-20">S. No.</span>
                                                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] flex-1 ml-4">Pay. Plan</span>
                                                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-48 text-center">Assured Return</span>
                                                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-32 text-right pr-4">Unit</span>
                                                    </div>

                                                    <div className="space-y-3">
                                                        {formData.assuredReturn.map((item, idx) => (
                                                            <div key={item.id} className="flex items-center gap-4 bg-gray-50/50 p-2 rounded-2xl border border-gray-100/30 group hover:bg-white hover:border-emerald-100 hover:shadow-lg transition-all duration-300">
                                                                <div className="w-12 text-center font-black text-[10px] text-gray-300 group-hover:text-emerald-500 transition-colors">{idx + 1}</div>
                                                                <div className="flex-1">
                                                                    <select 
                                                                        value={item.paymentPlan}
                                                                        onChange={(e) => {
                                                                            const newAR = [...formData.assuredReturn];
                                                                            newAR[idx].paymentPlan = e.target.value;
                                                                            setFormData({ ...formData, assuredReturn: newAR });
                                                                        }}
                                                                        className="w-full bg-transparent px-4 py-2.5 text-[11px] font-bold text-[#1a1c21] outline-none"
                                                                    >
                                                                        <option value="">Select Plan</option>
                                                                        {formData.paymentPlans.map(p => (
                                                                            <option key={p.id} value={p.label}>{p.label}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                                <div className="w-48 text-center">
                                                                    <div className="bg-white rounded-xl border border-gray-100 group-hover:border-emerald-100 transition-all flex items-center px-4">
                                                                        <input 
                                                                            type="text"
                                                                            value={item.ar}
                                                                            onChange={(e) => {
                                                                                const newAR = [...formData.assuredReturn];
                                                                                newAR[idx].ar = e.target.value;
                                                                                setFormData({ ...formData, assuredReturn: newAR });
                                                                            }}
                                                                            placeholder="0"
                                                                            className="w-full bg-transparent py-2.5 text-center text-xs font-black text-emerald-500 outline-none"
                                                                        />
                                                                        <span className="text-[10px] font-black text-gray-200">%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-32 mr-2">
                                                                    <select 
                                                                        value={item.unit}
                                                                        onChange={(e) => {
                                                                            const newAR = [...formData.assuredReturn];
                                                                            newAR[idx].unit = e.target.value;
                                                                            setFormData({ ...formData, assuredReturn: newAR });
                                                                        }}
                                                                        className="w-full bg-white rounded-xl border border-gray-100 py-2.5 text-center text-[10px] font-black text-gray-400 outline-none"
                                                                    >
                                                                        <option value="Sqft">Sqft</option>
                                                                        <option value="Sqyd">Sqyd</option>
                                                                        <option value="Sqm">Sqm</option>
                                                                    </select>
                                                                </div>
                                                                <button 
                                                                    onClick={() => {
                                                                        const newAR = formData.assuredReturn.filter((_, i) => i !== idx);
                                                                        setFormData({ ...formData, assuredReturn: newAR });
                                                                    }}
                                                                    className="p-2 text-gray-200 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-6 border-t border-gray-50/50">
                                                    <button 
                                                        onClick={() => setFormData({ ...formData, assuredReturn: [...formData.assuredReturn, { id: Date.now(), paymentPlan: '', ar: '', unit: 'Sqft' }] })}
                                                        className="px-8 py-3 bg-[#1a1c21] text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all shadow-lg flex items-center gap-3"
                                                    >
                                                        <Plus size={14} /> Add Button
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Assured Rental (Screen 15) */}
                                        {step === 15 && !isResidential && !isAgricultural && (
                                            <div className="space-y-10 animate-fade-in bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
                                                <div className="flex items-center gap-6 pb-6 border-b border-gray-50/50">
                                                    <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center">
                                                        <Building2 size={28} />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <h3 className="text-xl font-black text-[#1a1c21] uppercase tracking-tighter">Assured Rental</h3>
                                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Provide the details of rental after possession</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="bg-[#1a1c21] rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
                                                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] w-20">S. No.</span>
                                                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] flex-1 ml-4">Product</span>
                                                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-48 text-center">Assured Return</span>
                                                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] w-32 text-right pr-4">Unit</span>
                                                    </div>

                                                    <div className="space-y-3">
                                                        {formData.assuredRental.map((item, idx) => (
                                                            <div key={item.id} className="flex items-center gap-4 bg-gray-50/50 p-2 rounded-2xl border border-gray-100/30 group hover:bg-white hover:border-emerald-100 hover:shadow-lg transition-all duration-300">
                                                                <div className="w-12 text-center font-black text-[10px] text-gray-300 group-hover:text-emerald-500 transition-colors">{idx + 1}</div>
                                                                <div className="flex-1">
                                                                    <input 
                                                                        type="text"
                                                                        value={item.product}
                                                                        onChange={(e) => {
                                                                            const newAR = [...formData.assuredRental];
                                                                            newAR[idx].product = e.target.value;
                                                                            setFormData({ ...formData, assuredRental: newAR });
                                                                        }}
                                                                        placeholder="e.g. Office Space"
                                                                        className="w-full bg-transparent px-4 py-2.5 text-[11px] font-bold text-[#1a1c21] outline-none"
                                                                    />
                                                                </div>
                                                                <div className="w-48 text-center">
                                                                    <div className="bg-white rounded-xl border border-gray-100 group-hover:border-emerald-100 transition-all flex items-center px-4">
                                                                        <input 
                                                                            type="text"
                                                                            value={item.ar}
                                                                            onChange={(e) => {
                                                                                const newAR = [...formData.assuredRental];
                                                                                newAR[idx].ar = e.target.value;
                                                                                setFormData({ ...formData, assuredRental: newAR });
                                                                            }}
                                                                            placeholder="0"
                                                                            className="w-full bg-transparent py-2.5 text-center text-xs font-black text-emerald-500 outline-none"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="w-32 mr-2">
                                                                    <select 
                                                                        value={item.unit}
                                                                        onChange={(e) => {
                                                                            const newAR = [...formData.assuredRental];
                                                                            newAR[idx].unit = e.target.value;
                                                                            setFormData({ ...formData, assuredRental: newAR });
                                                                        }}
                                                                        className="w-full bg-white rounded-xl border border-gray-100 py-2.5 text-center text-[10px] font-black text-gray-400 outline-none"
                                                                    >
                                                                        <option value="/Sqft">/Sqft</option>
                                                                        <option value="/Sqyd">/Sqyd</option>
                                                                        <option value="/Sqm">/Sqm</option>
                                                                    </select>
                                                                </div>
                                                                <button 
                                                                    onClick={() => {
                                                                        const newAR = formData.assuredRental.filter((_, i) => i !== idx);
                                                                        setFormData({ ...formData, assuredRental: newAR });
                                                                    }}
                                                                    className="p-2 text-gray-200 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-6 border-t border-gray-50/50">
                                                    <button 
                                                        onClick={() => setFormData({ ...formData, assuredRental: [...formData.assuredRental, { id: Date.now(), product: '', ar: '', unit: '/Sqft' }] })}
                                                        className="px-8 py-3 bg-[#1a1c21] text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all shadow-lg flex items-center gap-3"
                                                    >
                                                        <Plus size={14} /> Add Button
                                                    </button>
                                                </div>
                                            </div>
                                        )}


                                        {/* Other Charges (Step 16) */}
                                        {step === 16 && !isAgricultural && (
                                            <div className="space-y-10 animate-fade-in">
                                                <div className="bg-gray-50 p-10 rounded-[48px] border border-white shadow-inner">
                                                    <div className="flex items-center gap-4 mb-10">
                                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-500 shadow-sm">
                                                            <DollarSign size={24} />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <h4 className="text-xl font-black text-[#1a1c21] uppercase tracking-tight">Other Charges</h4>
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Additional costs and fees</p>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-separate border-spacing-y-3">
                                                            <thead>
                                                                <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                    <th className="px-6 py-2 w-20">S. No.</th>
                                                                    <th className="px-6 py-2">Charges Name</th>
                                                                    <th className="px-6 py-2 w-48 text-center">Amount</th>
                                                                    <th className="px-6 py-2 w-20 text-center">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {formData.otherCharges.map((charge, idx) => (
                                                                    <tr key={idx} className="group">
                                                                        <td className="px-6 h-16 bg-white border-y border-l border-gray-100 rounded-l-2xl text-sm font-black text-[#1a1c21]">{idx + 1}</td>
                                                                        <td className="px-6 h-16 bg-white border-y border-gray-100">
                                                                            <input 
                                                                                type="text"
                                                                                value={charge.label}
                                                                                onChange={(e) => {
                                                                                    const newC = [...formData.otherCharges];
                                                                                    newC[idx].label = e.target.value;
                                                                                    setFormData({ ...formData, otherCharges: newC });
                                                                                }}
                                                                                placeholder="Charges Name"
                                                                                className="w-full h-10 bg-gray-50 border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-teal-500"
                                                                            />
                                                                        </td>
                                                                        <td className="px-6 h-16 bg-white border-y border-gray-100">
                                                                            <div className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-lg h-10 px-3 max-w-[140px] mx-auto group-focus-within:border-teal-500">
                                                                                <span className="text-[10px] font-black text-gray-200 mr-2">₹</span>
                                                                                <input 
                                                                                    type="number"
                                                                                    value={charge.value}
                                                                                    onChange={(e) => {
                                                                                        const newC = [...formData.otherCharges];
                                                                                        newC[idx].value = e.target.value;
                                                                                        setFormData({ ...formData, otherCharges: newC });
                                                                                    }}
                                                                                    placeholder="0"
                                                                                    className="w-full bg-transparent text-center text-xs font-black text-[#1a1c21] outline-none"
                                                                                />
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-6 h-16 bg-white border-y border-r border-gray-100 rounded-r-2xl text-center">
                                                                            <button 
                                                                                onClick={() => {
                                                                                    const newC = formData.otherCharges.filter((_, i) => i !== idx);
                                                                                    setFormData({ ...formData, otherCharges: newC });
                                                                                }}
                                                                                className="p-2 text-gray-200 hover:text-red-500 transition-colors"
                                                                            >
                                                                                <Trash2 size={16} />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="pt-6 border-t border-gray-100 mt-6">
                                                        <button 
                                                            onClick={() => setFormData({ ...formData, otherCharges: [...formData.otherCharges, { label: '', value: '' }] })}
                                                            className="px-8 py-3 bg-[#1a1c21] text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-teal-500 transition-all shadow-lg flex items-center gap-3"
                                                        >
                                                            <Plus size={14} /> Add Button
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* Facing PLC (Step 17) */}
                                        {step === 17 && !isAgricultural && (
                                            <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
                                                <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                                                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                                                        <Navigation size={32} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">Facing/ View PLC</h3>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PREFERRED LOCATION CHARGES BY VIEW</p>
                                                    </div>
                                                </div>

                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left border-separate border-spacing-y-3">
                                                        <thead>
                                                            <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                <th className="px-6 py-2 w-20">S. No.</th>
                                                                <th className="px-6 py-2">Charges Name</th>
                                                                <th className="px-6 py-2 w-48 text-center">Amount (Per Sqft)</th>
                                                                <th className="px-6 py-2 w-20 text-center">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {formData.facingPlc.map((plc, idx) => (
                                                                <tr key={idx} className="group">
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-l border-gray-100 rounded-l-2xl text-sm font-black text-[#1a1c21]">{idx + 1}</td>
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                                                        <input 
                                                                            type="text"
                                                                            value={plc.label}
                                                                            onChange={(e) => {
                                                                                const newPlc = [...formData.facingPlc];
                                                                                newPlc[idx].label = e.target.value;
                                                                                setFormData({ ...formData, facingPlc: newPlc });
                                                                            }}
                                                                            placeholder="Charges Name"
                                                                            className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-emerald-500"
                                                                        />
                                                                    </td>
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                                                        <div className="flex items-center justify-center bg-white border border-gray-100 rounded-lg h-10 px-3 max-w-[140px] mx-auto group-focus-within:border-emerald-500">
                                                                            <span className="text-[10px] font-black text-gray-200 mr-2">₹</span>
                                                                            <input 
                                                                                type="text"
                                                                                value={plc.value}
                                                                                onChange={(e) => {
                                                                                    const newPlc = [...formData.facingPlc];
                                                                                    newPlc[idx].value = e.target.value;
                                                                                    setFormData({ ...formData, facingPlc: newPlc });
                                                                                }}
                                                                                placeholder="0"
                                                                                className="w-full bg-transparent text-center text-xs font-black text-emerald-500 outline-none"
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-r border-gray-100 rounded-r-2xl text-center">
                                                                        <button 
                                                                            onClick={() => {
                                                                                const newPlc = formData.facingPlc.filter((_, i) => i !== idx);
                                                                                setFormData({ ...formData, facingPlc: newPlc });
                                                                            }}
                                                                            className="p-2 text-gray-200 hover:text-red-500 transition-colors"
                                                                        >
                                                                            <Trash2 size={16} />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="pt-6">
                                                    <button 
                                                        onClick={() => setFormData({ ...formData, facingPlc: [...formData.facingPlc, { label: "", value: "" }] })}
                                                        className="px-8 py-4 bg-[#1a1c21] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-3"
                                                    >
                                                        <Plus size={16} /> Add PLC Item
                                                    </button>
                                                </div>
                                            </div>
                                        )}


                                        {/* Location Advantage (Step 18) */}
                                        {step === 18 && !isAgricultural && (
                                            <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
                                                <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                                                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                                                        <MapPin size={32} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">Location Advantage</h3>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">KEY CONNECTIVITY & PROXIMITY HIGHLIGHTS</p>
                                                    </div>
                                                </div>

                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left border-separate border-spacing-y-3">
                                                        <thead>
                                                            <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                                <th className="px-6 py-2 w-20">S. No.</th>
                                                                <th className="px-6 py-2">Location Details</th>
                                                                <th className="px-6 py-2 w-20 text-center">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {formData.advantages.map((adv, idx) => (
                                                                <tr key={idx} className="group">
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-l border-gray-100 rounded-l-2xl text-sm font-black text-[#1a1c21]">{idx + 1}</td>
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                                                        <input 
                                                                            type="text"
                                                                            value={adv.label}
                                                                            onChange={(e) => {
                                                                                const newAdv = [...formData.advantages];
                                                                                newAdv[idx].label = e.target.value;
                                                                                setFormData({ ...formData, advantages: newAdv });
                                                                            }}
                                                                            placeholder="Enter connectivity highlight (e.g. 10 mins from Metro)"
                                                                            className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-emerald-500"
                                                                        />
                                                                    </td>
                                                                    <td className="px-6 h-16 bg-gray-50 border-y border-r border-gray-100 rounded-r-2xl text-center">
                                                                        <button 
                                                                            onClick={() => {
                                                                                const newAdv = formData.advantages.filter((_, i) => i !== idx);
                                                                                setFormData({ ...formData, advantages: newAdv });
                                                                            }}
                                                                            className="p-2 text-gray-200 hover:text-red-500 transition-colors"
                                                                        >
                                                                            <Trash2 size={16} />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="pt-6">
                                                    <button 
                                                        onClick={() => setFormData({ ...formData, advantages: [...formData.advantages, { label: "" }] })}
                                                        className="px-8 py-4 bg-[#1a1c21] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-3"
                                                    >
                                                        <Plus size={16} /> Add Button
                                                    </button>
                                                </div>
                                            </div>
                                        )}


                                        {/* Pricing Details (Agricultural Step 17) */}
                                        {isAgricultural && step === 17 && (
                                            <AddAgriPricing
                                                formData={formData}
                                                updateFormData={(data) => setFormData({ ...formData, ...data })}
                                                onSubmit={() => setStep(step + 1)}
                                            />
                                        )}

                                        {/* Amenities (Step 19) */}
                                        {(!isAgricultural && step === 19) && (
                                            <div className="space-y-12 animate-fade-in">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                                    {[
                                                        { label: 'Gym', icon: <Dumbbell size={24} /> },
                                                        { label: 'Swimming Pool', icon: <Waves size={24} /> },
                                                        { label: 'Clubhouse', icon: <Home size={24} /> },
                                                        { label: 'Jogging Track', icon: <Activity size={24} /> },
                                                        { label: 'Power Backup', icon: <Sun size={24} /> },
                                                        { label: 'Security', icon: <ShieldCheck size={24} /> },
                                                        { label: 'Parking', icon: <Building2 size={24} /> },
                                                        { label: 'Wi-Fi', icon: <Wifi size={24} /> },
                                                        { label: 'Garden', icon: <Sun size={24} /> },
                                                        { label: 'CCTV', icon: <Video size={24} /> },
                                                        { label: 'Play Area', icon: <Bike size={24} /> },
                                                    ].map((item, idx) => {
                                                        const isSelected = formData.amenities.some(a => a.label === item.label);
                                                        return (
                                                            <button
                                                                key={idx}
                                                                onClick={() => {
                                                                    if (isSelected) {
                                                                        setFormData({ ...formData, amenities: formData.amenities.filter(a => a.label !== item.label) });
                                                                    } else {
                                                                        setFormData({ ...formData, amenities: [...formData.amenities, { label: item.label }] });
                                                                    }
                                                                }}
                                                                className={`group flex flex-col items-center justify-center gap-4 p-6 rounded-[32px] border-2 transition-all duration-500 ${
                                                                    isSelected 
                                                                        ? 'border-[#2FED9A] bg-[#f0fff8] shadow-lg shadow-emerald-100' 
                                                                        : 'border-gray-50 bg-white hover:border-[#2FED9A] hover:shadow-xl hover:shadow-gray-100'
                                                                }`}
                                                            >
                                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                                                    isSelected ? 'bg-[#2FED9A] text-[#1a1c21]' : 'bg-gray-50 text-gray-400 group-hover:bg-[#2FED9A] group-hover:text-[#1a1c21]'
                                                                }`}>
                                                                    {item.icon}
                                                                </div>
                                                                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                                                                    isSelected ? 'text-[#1a1c21]' : 'text-gray-400'
                                                                }`}>
                                                                    {item.label}
                                                                </span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                
                                                <div className="flex flex-col items-center gap-6 pt-6">
                                                    <div className="w-full max-w-md space-y-2">
                                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Custom Amenity</label>
                                                        <div className="flex gap-4">
                                                            <input
                                                                id="customAmenity"
                                                                type="text"
                                                                placeholder="Add another amenity..."
                                                                className="flex-1 px-8 py-5 bg-gray-50 rounded-[20px] text-sm font-bold text-[#1a1c21] outline-none border-2 border-transparent focus:border-[#2FED9A] focus:bg-white shadow-inner transition-all"
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter') {
                                                                        const val = (e.target as HTMLInputElement).value;
                                                                        if (val && !formData.amenities.some(a => a.label === val)) {
                                                                            setFormData({ ...formData, amenities: [...formData.amenities, { label: val }] });
                                                                            (e.target as HTMLInputElement).value = '';
                                                                        }
                                                                    }
                                                                }}
                                                            />
                                                            <button
                                                                onClick={() => {
                                                                    const input = document.getElementById('customAmenity') as HTMLInputElement;
                                                                    if (input.value && !formData.amenities.some(a => a.label === input.value)) {
                                                                        setFormData({ ...formData, amenities: [...formData.amenities, { label: input.value }] });
                                                                        input.value = '';
                                                                    }
                                                                }}
                                                                className="p-5 bg-[#1a1c21] text-white rounded-[20px] hover:bg-[#2FED9A] hover:text-[#1a1c21] transition-all"
                                                            >
                                                                <Plus size={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    {formData.amenities.filter(a => ![
                                                        'Gym', 'Swimming Pool', 'Clubhouse', 'Jogging Track', 'Power Backup', 
                                                        'Security', 'Parking', 'Wi-Fi', 'Garden', 'CCTV', 'Play Area'
                                                    ].includes(a.label)).length > 0 && (
                                                        <div className="flex flex-wrap justify-center gap-3">
                                                            {formData.amenities.filter(a => ![
                                                                'Gym', 'Swimming Pool', 'Clubhouse', 'Jogging Track', 'Power Backup', 
                                                                'Security', 'Parking', 'Wi-Fi', 'Garden', 'CCTV', 'Play Area'
                                                            ].includes(a.label)).map((amenity, idx) => (
                                                                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-600 shadow-sm animate-fade-in hover:border-red-100 transition-colors">
                                                                    {amenity.label}
                                                                    <button 
                                                                        onClick={() => setFormData({ ...formData, amenities: formData.amenities.filter(a => a.label !== amenity.label) })}
                                                                        className="text-gray-300 hover:text-red-500 transition-colors"
                                                                    >
                                                                        <Trash2 size={14} />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Project Media Center (Step 20) */}
                                        {(!isAgricultural && step === 20) && (
                                            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in pb-10">
                                                {/* Card 1: Actual Site Photographs (Screen 22) */}
                                                <div className="space-y-10 bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm">
                                                    <div className="flex items-center gap-6">
                                                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center">
                                                            <Building2 size={32} />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">Actual Site Photos</h3>
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CONSTRUCTION SITE PROGRESS</p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <div className="grid grid-cols-[80px_1fr_180px_80px] gap-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                            <span>S. No.</span>
                                                            <span>Tower Name/ No.</span>
                                                            <span className="text-center">Attach Images</span>
                                                            <span className="text-center">Action</span>
                                                        </div>
                                                        
                                                        {formData.photos.sitePhotos.map((cat, idx) => (
                                                            <div key={idx} className="grid grid-cols-[80px_1fr_180px_80px] gap-4 items-center bg-gray-50/50 p-4 rounded-[24px] border border-gray-100/50 hover:bg-white hover:border-blue-100 transition-all group">
                                                                <div className="text-sm font-black text-[#1a1c21] pl-4">{idx + 1}</div>
                                                                <div>
                                                                    <input 
                                                                        type="text"
                                                                        value={cat.label}
                                                                        onChange={(e) => {
                                                                            const newSite = [...formData.photos.sitePhotos];
                                                                            newSite[idx].label = e.target.value;
                                                                            setFormData({ ...formData, photos: { ...formData.photos, sitePhotos: newSite } });
                                                                        }}
                                                                        placeholder="Tower Name"
                                                                        className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-xs font-bold text-[#1a1c21] outline-none focus:border-blue-500 focus:shadow-sm transition-all"
                                                                    />
                                                                </div>
                                                                <div className="flex justify-center">
                                                                    <label className="cursor-pointer group/upload w-full max-w-[140px]">
                                                                        <div className="py-3 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 group-hover/upload:border-blue-400 bg-white transition-all">
                                                                            <Upload size={14} className="text-gray-300 group-hover/upload:text-blue-500" />
                                                                            <span className="text-[10px] font-bold text-gray-300 group-hover/upload:text-blue-500">.gif/.pdf</span>
                                                                        </div>
                                                                        <input type="file" className="hidden" />
                                                                    </label>
                                                                </div>
                                                                <div className="flex justify-center">
                                                                    <button 
                                                                        onClick={() => {
                                                                            const newSite = formData.photos.sitePhotos.filter((_, i) => i !== idx);
                                                                            setFormData({ ...formData, photos: { ...formData.photos, sitePhotos: newSite } });
                                                                        }}
                                                                        className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-200 hover:text-red-500 hover:border-red-100 transition-all"
                                                                    >
                                                                        <Trash2 size={16} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="flex flex-col gap-6 pt-4">
                                                        <button 
                                                            onClick={() => setFormData({ ...formData, photos: { ...formData.photos, sitePhotos: [...formData.photos.sitePhotos, { label: "", files: [] }] } })}
                                                            className="w-fit px-8 py-4 bg-[#1a1c21] text-white rounded-[20px] text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg shadow-gray-200 active:scale-95"
                                                        >
                                                            <Plus size={18} /> ADD BUTTON
                                                        </button>
                                                        <p className="text-[10px] font-bold text-gray-300 italic">* Note: In case of No we will continue to the next screen.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        )}

                                        {/* Submission (Step 21) */}
                                        {((!isAgricultural && step === 21) || (isAgricultural && step === 18)) && (
                                            <div className="max-w-2xl mx-auto space-y-12 py-10 animate-fade-in-up">
                                                <div className="text-center space-y-4">
                                                    <div className="w-20 h-20 bg-teal-50 text-teal-500 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                                                        <ShieldCheck size={40} />
                                                    </div>
                                                    <h3 className="text-3xl font-black text-[#1a1c21] uppercase tracking-tight">Final Submission</h3>
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Review the declaration and submit your project</p>
                                                </div>

                                                <div className="bg-gray-50/50 rounded-[40px] p-12 text-[#1a1c21] border border-gray-100 relative overflow-hidden shadow-inner active:scale-[0.99] transition-transform">
                                                    <div className="relative z-10 space-y-8">
                                                        <div className="space-y-4">
                                                            <h4 className="text-lg font-black uppercase tracking-tight flex items-center gap-3">
                                                                <FileText size={20} className="text-teal-500" />
                                                                Agent Declaration
                                                            </h4>
                                                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white text-sm font-bold text-gray-500 leading-relaxed italic shadow-sm">
                                                                "I hereby declare that the information provided about this project is true, accurate, and verified by me. I understand that any false information may lead to the suspension of my account and listing."
                                                            </div>
                                                        </div>

                                                        <label className="flex items-center gap-6 cursor-pointer group bg-white p-6 rounded-3xl border border-gray-50 hover:border-teal-200 transition-all shadow-sm">
                                                            <div
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setFormData({ ...formData, confirmed: !formData.confirmed });
                                                                }}
                                                                className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all ${formData.confirmed ? 'bg-[#2FED9A] border-[#2FED9A] text-[#1a1c21] shadow-lg shadow-teal-500/20' : 'border-gray-200 bg-white group-hover:border-teal-300'}`}
                                                            >
                                                                {formData.confirmed && <Check size={20} className="font-black" />}
                                                            </div>
                                                            <div className="space-y-1">
                                                                <span className="text-sm font-black uppercase tracking-widest text-[#1a1c21]">I Accept the Terms</span>
                                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Confirming legal compliance</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* END OF STEPS */}
                                    </div>

                                    <div className="flex items-center justify-between pt-12 border-t border-gray-50 mt-12">
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={prevStep}
                                                className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs border border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"
                                            >
                                                Previous
                                            </button>
                                        </div>

                                        <button
                                            onClick={nextStep}
                                            disabled={(!isAgricultural && step === 2 && formData.isReraRegistered === null)}
                                            className="bg-[#2FED9A] text-[#1a1c21] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 group disabled:opacity-20"
                                        >
                                            {step === totalSteps ? 'SUBMIT PROJECT' : 'NEXT STEP'}
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectListingFlow;
