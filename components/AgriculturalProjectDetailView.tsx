import React, { useState } from 'react';
import {
    ArrowLeft, MapPin, Heart, Share2, Maximize2, ChevronDown,
    MessageCircle, Navigation2, CalendarClock, CheckCircle2,
    Image as ImageIcon, ShieldCheck, Map as MapIcon,
    DollarSign, Download, Compass, Trees, FileText,
    BadgeCheck, Sprout, TrendingUp, Fence, Building, FileSignature, AlertTriangle, AlertCircle
} from 'lucide-react';
import { Project, AgriculturalProjectDetails } from '../types';
import MediaModal from './MediaModal';
import { PossessionBadge, PropertyTypeBadge } from './PropertyBadge';
import { legacyStatusToKey } from '../services/propertyConstants';
import PropertyStatusStrip from './PropertyStatusStrip';

// ─── Props ────────────────────────────────────────────────────────────────────

interface AgriculturalProjectDetailViewProps {
    project: Project;
    onBack: () => void;
}

// ─── Section types ────────────────────────────────────────────────────────────

type NavSection =
    | 'overview'
    | 'location-details'
    | 'land-condition'
    | 'legal-ownership'
    | 'risk-surroundings'
    | 'pricing'
    | 'gallery';

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_ITEMS: { id: NavSection; label: string; icon: React.FC<any> }[] = [
    { id: 'overview', label: 'Overview', icon: Sprout },
    { id: 'location-details', label: 'Location Details', icon: MapPin },
    { id: 'land-condition', label: 'Land Condition', icon: Trees },
    { id: 'legal-ownership', label: 'Ownership & Legal', icon: FileSignature },
    { id: 'risk-surroundings', label: 'Risks & Surroundings', icon: AlertTriangle },
    { id: 'pricing', label: 'Pricing & Loan', icon: DollarSign },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const AgriculturalProjectDetailView: React.FC<AgriculturalProjectDetailViewProps> = ({ project, onBack }) => {
    // ── State ──
    const [activeSection, setActiveSection] = useState<NavSection>('overview');
    const [aboutExpanded, setAboutExpanded] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [galleryFilter, setGalleryFilter] = useState<'all' | 'site' | 'documents'>('all');
    const [mediaModalConfig, setMediaModalConfig] = useState<{ isOpen: boolean; tab: 'photos' | 'plans' }>({ isOpen: false, tab: 'photos' });

    // ── Data ──
    const details = project.details as AgriculturalProjectDetails;
    const images = project.galleryImages?.length ? project.galleryImages : [project.imageUrl];
    const possessionStatusKey = legacyStatusToKey(project.status ?? '');
    const possessionDate = details?.possessionStatus || project.completionDate || undefined;

    // ── Navigation ──
    const navigateTo = (id: NavSection) => {
        setActiveSection(id);
        if (window.innerWidth < 768) window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ── Shared SectionHeader ──
    const SectionHeader = ({ title, badge }: { title: string; badge?: React.ReactNode }) => (
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight">{title}</h2>
            {badge}
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 1. OVERVIEW
    // ════════════════════════════════════════════════════════════════════════════

    const renderOverview = () => {
        const hasEnough = images.length >= 3;
        return (
            <div className="space-y-8">
                {/* Title row */}
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-950 leading-tight tracking-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <p className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                            <MapPin size={16} className="text-[#2FED9A] shrink-0" />
                            <span className="font-bold text-slate-950">{details?.geographic?.village}, {details?.geographic?.tehsil}</span> · {details?.geographic?.state}
                        </p>
                        <div className="text-right">
                            <p className="text-3xl font-black text-slate-950 tracking-tighter">{details?.pricing?.totalDemand ?? project.priceRange}</p>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Total Demand</p>
                        </div>
                    </div>
                </div>

                {/* Asymmetric gallery */}
                <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-2 h-[380px] rounded-2xl overflow-hidden cursor-pointer">
                    <div className="col-span-3 row-span-2 relative group overflow-hidden"
                        onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#2FED9A]/90 backdrop-blur text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                            <Trees size={12} /> {details?.landType || 'Agricultural Land'}
                        </div>
                    </div>
                    {hasEnough ? (
                        <>
                            <div className="col-span-2 row-span-1 relative group overflow-hidden"
                                onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                                <img src={images[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                            </div>
                            <div className="col-span-2 row-span-1 relative group overflow-hidden"
                                onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                                <img src={images[2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                                <button
                                    onClick={e => { e.stopPropagation(); setMediaModalConfig({ isOpen: true, tab: 'photos' }); }}
                                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-md hover:bg-white transition-all">
                                    <ImageIcon size={12} /> View All {images.length}+
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="col-span-2 row-span-2 bg-slate-50 flex items-center justify-center cursor-pointer"
                            onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                            <ImageIcon size={28} className="text-slate-300" />
                        </div>
                    )}
                </div>

                {/* Mobile image */}
                <div className="md:hidden relative h-64 rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                    <img src={images[0]} className="w-full h-full object-cover" alt="" />
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur flex items-center gap-1">
                        <ImageIcon size={11} /> Gallery
                    </div>
                </div>

                {/* Status strip - Adapted for Agriculture */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                     <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-[#2FED9A]/20 flex items-center justify-center">
                                 <Sprout size={14} className="text-slate-900" />
                             </div>
                             <div>
                                 <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Property Type</p>
                                 <p className="text-xs font-black text-slate-950">{details?.landType || 'Agricultural Land'}</p>
                             </div>
                        </div>
                        <div className="h-6 w-px bg-slate-200 hidden md:block" />
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-[#2FED9A]/20 flex items-center justify-center">
                                 <CalendarClock size={14} className="text-slate-900" />
                             </div>
                             <div>
                                 <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Possession</p>
                                 <p className="text-xs font-black text-slate-950">{details?.possessionStatus || 'Immediate Availability'}</p>
                             </div>
                        </div>
                        <div className="h-6 w-px bg-slate-200 hidden md:block" />
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-[#2FED9A]/20 flex items-center justify-center">
                                 <FileSignature size={14} className="text-slate-900" />
                             </div>
                             <div>
                                 <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Legal Status</p>
                                 <p className="text-xs font-black text-slate-950">{details?.legal?.mutationStatus || 'Mutation Done'}</p>
                             </div>
                        </div>
                     </div>
                </div>

                {/* KEY STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { label: 'Total Land Area', value: details?.totalSize || '—' },
                        { label: 'Price / Unit', value: details?.pricing?.pricePerUnit || '—' },
                        { label: 'Total Demand', value: details?.pricing?.totalDemand || project.priceRange },
                        { label: 'Land Type', value: details?.landType || '—' },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-[#2FED9A]/50 transition-colors">
                            <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black mb-2">{item.label}</p>
                            <p className="text-lg font-black text-slate-950 tracking-tight">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* About snippet */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-slate-950 uppercase tracking-widest">About Property</h3>
                    </div>
                    <p className={`text-sm text-slate-600 font-medium leading-relaxed ${aboutExpanded ? '' : 'line-clamp-3'}`}>
                        {project.title} is a premium {details?.landType || 'Agricultural'} property located in {details?.geographic?.village}, {details?.geographic?.tehsil}.
                        Spanning {details?.totalSize}, this {details?.siteCondition?.cropStatus ? 'fertile' : ''} land offers immediate possession with {details?.legal?.mutationStatus} status. Ideal for farming, investment, or farm house development.
                    </p>
                    <button onClick={() => setAboutExpanded(!aboutExpanded)}
                        className="text-xs text-[#1DA366] font-bold flex items-center gap-1">
                        {aboutExpanded ? 'Read Less' : 'Read More'}
                        <ChevronDown size={14} className={`transition-transform ${aboutExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        );
    };

    // ════════════════════════════════════════════════════════════════════════════
    // 2. LOCATION DETAILS
    // ════════════════════════════════════════════════════════════════════════════

    const renderLocationDetails = () => (
        <div className="space-y-6">
            <SectionHeader title="Location & Geographic" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Village', value: details?.geographic?.village || '—' },
                    { label: 'Tehsil', value: details?.geographic?.tehsil || '—' },
                    { label: 'State', value: details?.geographic?.state || '—' },
                    { label: 'Khasara No.', value: details?.geographic?.khasaraNumber || '—' },
                ].map((loc, i) => (
                    <div key={i} className="flex flex-col gap-1 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{loc.label}</p>
                        <p className="text-sm text-slate-950 font-black">{loc.value}</p>
                    </div>
                ))}
            </div>

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm mt-4">
                <img
                    src="https://images.unsplash.com/photo-1524414139215-35c99f80112d?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-80" alt="Map"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#2FED9A] text-slate-900 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                        <MapPin size={24} />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 shadow-sm">
                    {details?.geographic?.village}, {details?.geographic?.state}
                </div>
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-700 shadow-sm flex items-center gap-1.5 hover:bg-white transition-colors">
                    <Navigation2 size={11} /> Open in Google Maps
                </button>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 3. LAND CONDITION
    // ════════════════════════════════════════════════════════════════════════════

    const renderLandCondition = () => (
        <div className="space-y-6">
            <SectionHeader title="Land Condition & Site Plan" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 hover:border-[#2FED9A]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#2FED9A]/20 flex items-center justify-center">
                            <Fence size={18} className="text-slate-900" />
                        </div>
                        <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Site Condition</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Fencing Type</span>
                            <span className="text-sm font-black text-slate-950">{details?.siteCondition?.fencing || 'None'}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Crop Status</span>
                            <span className="text-sm font-black text-slate-950">{details?.siteCondition?.cropStatus || 'Barren'}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Existing Structures</span>
                            <span className="text-sm font-black text-slate-950">{details?.siteCondition?.existingStructures || 'None'}</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 hover:border-[#2FED9A]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#2FED9A]/20 flex items-center justify-center">
                            <Building size={18} className="text-slate-900" />
                        </div>
                        <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Future Development</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Highway Nearby</span>
                            <span className="text-sm font-black text-slate-950">Yes, within 5 KM</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Expressway</span>
                            <span className="text-sm font-black text-slate-950">Proposed nearby</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Site Plan thumbnail */}
            <div className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
                onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                <img
                    src={details?.technical?.sitePlanUrl ?? images[0]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    alt="Site Plan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                        <p className="text-white font-black text-sm">Land Layout & Boundaries</p>
                        <p className="text-white/80 text-[10px] font-medium">{details?.totalSize}</p>
                    </div>
                    <button className="bg-white/10 backdrop-blur border border-white/20 text-white text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1">
                        <Maximize2 size={11} /> Expand
                    </button>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center justify-center">
                    <Compass size={16} className="text-[#2FED9A]" />
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 4. LEGAL & OWNERSHIP
    // ════════════════════════════════════════════════════════════════════════════

    const renderLegalOwnership = () => (
        <div className="space-y-6">
            <SectionHeader title="Ownership & Legal Clarity" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                        <FileSignature size={16} className="text-[#2FED9A]" /> Ownership Details
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ownership Type</p>
                            <p className="text-sm font-black text-slate-950 bg-slate-50 px-3 py-2 rounded-lg inline-block border border-slate-100">
                                {details?.legal?.ownersCount > 1 ? 'Multiple Owners' : 'Single Owner'}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Number of Owners</p>
                                <p className="text-sm font-black text-slate-950">{details?.legal?.ownersCount || 1}</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ownership Share</p>
                                <p className="text-sm font-black text-slate-950">100%</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Land Category</p>
                            <p className="text-sm font-black text-slate-950">{details?.legal?.category || 'General'}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#2FED9A]" /> Legal Status
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                            <CheckCircle2 size={20} className="text-emerald-500" />
                            <div>
                                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Mutation Status</p>
                                <p className="text-sm font-black text-slate-950">{details?.legal?.mutationStatus || 'Mutation Done'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                            <BadgeCheck size={20} className="text-slate-500" />
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Registry Availability</p>
                                <p className="text-sm font-black text-slate-950">Available for immediate transfer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Available Documents</p>
                            <div className="flex flex-wrap gap-2">
                                {(details?.legal?.documents || ['Mutation', 'Registry', 'Khatauni']).map((doc, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1.5">
                                        <FileText size={12} className="text-slate-400" /> {doc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 5. RISKS & SURROUNDINGS
    // ════════════════════════════════════════════════════════════════════════════

    const renderRiskSurroundings = () => (
        <div className="space-y-6">
            <SectionHeader title="Surroundings & Distance" />
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                    <AlertCircle size={16} className="text-amber-500" /> Surroundings Check
                </h3>
                <div className="flex flex-wrap gap-3">
                    {[
                        { label: 'High-tension wire', active: details?.proximityFlags?.highTensionWires },
                        { label: 'Factory nearby', active: details?.proximityFlags?.factories },
                        { label: 'Water body', active: details?.proximityFlags?.waterBodies },
                        { label: 'Sewer line', active: false },
                        { label: 'Cremation ground', active: false },
                        { label: 'Garbage presence', active: false },
                    ].map((risk, i) => (
                        <div key={i} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-colors ${risk.active ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'}`}>
                            {risk.active ? <AlertTriangle size={12} className="text-amber-500" /> : <CheckCircle2 size={12} />}
                            {risk.label}
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-slate-400 font-medium">* Highlighted items indicate presence near the property.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {[
                    { dest: 'Main Road', dist: details?.connectivity?.mainRoad || '0.5 KM' },
                    { dest: 'School', dist: details?.connectivity?.school || '3 KM' },
                    { dest: 'Hospital', dist: details?.connectivity?.hospital || '5 KM' },
                    { dest: 'Police Station', dist: details?.connectivity?.policeStation || '4 KM' },
                ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[#2FED9A]/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-[#2FED9A]/10 border border-[#2FED9A]/20 flex items-center justify-center shrink-0 text-slate-900">
                            <Navigation2 size={16} />
                        </div>
                        <div>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-0.5">{loc.dist}</p>
                            <p className="text-sm text-slate-950 font-black">{loc.dest}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 6. PRICING & LOAN
    // ════════════════════════════════════════════════════════════════════════════

    const renderPricing = () => (
        <div className="space-y-6">
            <SectionHeader title="Pricing & Financing" />

            <div className="bg-[#2FED9A] text-slate-950 p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-800 font-black mb-3">Total Demand</p>
                    <p className="text-5xl font-black tracking-tighter mb-2">{details?.pricing?.totalDemand || project.priceRange}</p>
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-widest bg-white/30 inline-block px-3 py-1 rounded-lg">
                        @ {details?.pricing?.pricePerUnit || 'Contact for price/unit'}
                    </p>
                </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-5">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#2FED9A]" /> Loan Availability
                </h3>
                {details?.pricing?.bankLoanAvailable !== false ? (
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                            <CheckCircle2 size={24} className="text-emerald-500" />
                            <div>
                                <p className="text-sm font-black text-slate-950">Bank Loan Available</p>
                                <p className="text-xs font-medium text-emerald-700">Eligible for agricultural & land purchase loans</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Participating Banks</p>
                                <p className="text-sm font-black text-slate-950">SBI, HDFC, ICICI, PNB</p>
                            </div>
                            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated EMI</p>
                                <p className="text-sm font-black text-slate-950">Starts at ₹ 45,000/mo</p>
                                <p className="text-[8px] text-slate-400 mt-1">*Based on 70% LTV</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                        <AlertTriangle size={24} className="text-amber-500" />
                        <div>
                            <p className="text-sm font-black text-slate-950">Direct Funding Required</p>
                            <p className="text-xs font-medium text-amber-700">Bank loans might not be available for this property type.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 7. GALLERY
    // ════════════════════════════════════════════════════════════════════════════

    const renderGallery = () => (
        <div className="space-y-6">
            <SectionHeader title="Site Gallery" />
            <div className="flex gap-2 flex-wrap">
                {(['all', 'site', 'documents'] as const).map(f => (
                    <button key={f} onClick={() => setGalleryFilter(f)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${galleryFilter === f ? 'bg-slate-950 text-[#2FED9A] shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                        {f === 'all' ? 'All Photos' : f === 'site' ? 'Site View' : 'Documents'}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((img, i) => (
                    <div key={i} onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}
                        className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group relative border border-slate-100">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                ))}
            </div>
            <button onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}
                className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-[#2FED9A] hover:text-slate-950 transition-all flex items-center justify-center gap-2">
                <Maximize2 size={16} /> Open Full Gallery Viewer
            </button>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // SECTION SWITCH
    // ════════════════════════════════════════════════════════════════════════════

    const renderSection = () => {
        switch (activeSection) {
            case 'overview': return renderOverview();
            case 'location-details': return renderLocationDetails();
            case 'land-condition': return renderLandCondition();
            case 'legal-ownership': return renderLegalOwnership();
            case 'risk-surroundings': return renderRiskSurroundings();
            case 'pricing': return renderPricing();
            case 'gallery': return renderGallery();
        }
    };

    // ════════════════════════════════════════════════════════════════════════════
    // SHELL
    // ════════════════════════════════════════════════════════════════════════════

    return (
        <div className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto no-scrollbar font-sans">
            {/* Top Header Bar */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-5 h-[60px] flex items-center gap-4">
                    <button onClick={onBack}
                        className="w-9 h-9 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0">
                        <ArrowLeft size={17} />
                    </button>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-black text-slate-950 truncate leading-tight">{project.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                            <p className="text-[10px] text-slate-400 font-medium truncate">{details?.geographic?.village}, {details?.geographic?.tehsil}</p>
                            <span className="hidden sm:block shrink-0">
                                <span className="bg-[#2FED9A]/10 text-slate-800 border-[#2FED9A]/20 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border">
                                    {details?.possessionStatus || 'Immediate'}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                        <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-slate-950 transition-colors border border-slate-200">
                            <Download size={13} /> Documents
                        </button>
                        <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-colors">
                            <Share2 size={13} /> Share
                        </button>
                        <button onClick={() => setIsFavorited(!isFavorited)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-500'}`}>
                            <Heart size={15} className={isFavorited ? 'fill-rose-500' : ''} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Two-Column Layout */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-5">
                <div className="flex gap-5 items-start">
                    {/* LEFT: Sticky sidebar */}
                    <aside className="hidden md:flex flex-col w-52 shrink-0 sticky top-[68px] self-start">
                        <div className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm space-y-0.5">
                            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                <button key={id} onClick={() => navigateTo(id)}
                                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left transition-all group text-[10px] font-black uppercase tracking-wider relative ${activeSection === id
                                        ? 'bg-[#2FED9A] text-slate-950 shadow-md'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                        }`}>
                                    <Icon size={14} className={activeSection === id ? 'text-slate-950' : 'text-slate-400 group-hover:text-slate-600 transition-colors'} />
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Status + type badge */}
                        <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Availability</p>
                            <div className="flex items-center gap-2 px-2.5 py-2 bg-[#2FED9A]/10 border border-[#2FED9A]/20 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-[#2FED9A] animate-pulse shrink-0" />
                                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                                    {details?.possessionStatus || 'Immediate'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-2.5 py-2 bg-slate-100 border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest">
                                <Trees size={12} /> {details?.landType || 'Agri Land'}
                            </div>
                        </div>

                        {/* Sticky CTAs */}
                        <div className="mt-4 space-y-2">
                            <button className="w-full h-11 bg-[#2FED9A] text-slate-950 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-[#2FED9A]/20 hover:bg-[#1DA366] hover:text-white transition-colors active:scale-95">
                                <CalendarClock size={14} /> Schedule Site Visit
                            </button>
                            <button className="w-full h-11 bg-white text-slate-700 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors border border-slate-200">
                                <FileSignature size={14} /> Request Documents
                            </button>
                            <button className="w-full h-11 bg-[#25D366]/10 text-[#128C7E] rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
                                <MessageCircle size={14} /> WhatsApp
                            </button>
                        </div>
                    </aside>

                    {/* RIGHT: Dynamic content area */}
                    <main className="flex-1 min-w-0 pb-32 md:pb-6">
                        {/* Mobile section picker */}
                        <div className="md:hidden mb-4 overflow-x-auto no-scrollbar">
                            <div className="flex gap-2 pb-1">
                                {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                    <button key={id} onClick={() => navigateTo(id)}
                                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${activeSection === id
                                            ? 'bg-[#2FED9A] text-slate-950 shadow-md'
                                            : 'bg-white text-slate-500 border border-slate-200 hover:border-[#2FED9A]/50'
                                            }`}>
                                        <Icon size={13} /> {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Active section panel */}
                        <div className="bg-white border border-slate-100 rounded-xl p-5 md:p-7 shadow-sm min-h-[60vh]" key={activeSection}>
                            {renderSection()}
                        </div>
                    </main>
                </div>
            </div>

            {/* Mobile Sticky CTA Bar */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-100 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
                <div className="flex gap-2.5">
                    <button onClick={() => setIsFavorited(!isFavorited)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all shrink-0 ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Heart size={16} className={isFavorited ? 'fill-rose-500' : ''} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-500 rounded-xl transition-colors hover:bg-slate-100 shrink-0">
                        <Download size={16} />
                    </button>
                    <button className="flex-1 h-12 bg-[#2FED9A] text-slate-950 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md shadow-[#2FED9A]/20 active:scale-95 hover:bg-[#1DA366] hover:text-white transition-all">
                        <CalendarClock size={14} /> Site Visit
                    </button>
                </div>
            </div>

            {/* Media Modal */}
            {mediaModalConfig.isOpen && (
                <MediaModal
                    initialTab={mediaModalConfig.tab}
                    project={project}
                    projectType="Agricultural"
                    onClose={() => setMediaModalConfig({ ...mediaModalConfig, isOpen: false })}
                />
            )}
        </div>
    );
};

export default AgriculturalProjectDetailView;
