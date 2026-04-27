import React, { useState } from 'react';
import {
    ArrowLeft, MapPin, Heart, Share2, Maximize2, ChevronDown,
    Phone, MessageCircle, Navigation2, CalendarClock, CheckCircle2,
    Image as ImageIcon, Info, ShieldCheck, LayoutDashboard,
    Award, Users, Map as MapIcon, DollarSign,
    Sliders, Sparkles, FileText, Download, BadgeCheck,
    Layers, LayoutGrid, Zap, Landmark, TrendingUp,
    Building2, Lock, Unlock, ReceiptText, Percent,
    Coffee, ShoppingBag, Briefcase, ParkingCircle,
    Flame, Activity, Eye, Home
} from 'lucide-react';
import { Project, CommercialProjectDetails } from '../types';
import MediaModal from './MediaModal';
import { PossessionBadge, PropertyTypeBadge } from './PropertyBadge';
import { legacyStatusToKey } from '../services/propertyConstants';
import PropertyStatusStrip from './PropertyStatusStrip';

// ─── Primary colour token ─────────────────────────────────────────────────────
// All primary actions, highlights, and active states use #2FED9A
const PRIMARY = '#2FED9A';
const PRIMARY_DARK = '#00C97B';

// ─── Props ────────────────────────────────────────────────────────────────────

interface CommercialProjectDetailViewProps {
    project: Project;
    onBack: () => void;
}

// ─── Section types — mirrors PlotProjectDetailView structure ──────────────────

type NavSection =
    | 'overview'
    | 'gallery'
    | 'unit-types'           // replaces: floor plans — office/shop/food-court
    | 'pricing'              // BSP + payment plans
    | 'configuration'        // tower/floor/units layout
    | 'roi'                  // Assured Return + Rental Income (commercial-only section)
    | 'amenities'
    | 'specifications'
    | 'location';

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_ITEMS: { id: NavSection; label: string; icon: React.FC<any> }[] = [
    { id: 'overview',       label: 'Overview',       icon: Home },
    { id: 'gallery',        label: 'Gallery',         icon: ImageIcon },
    { id: 'unit-types',     label: 'Space Types',     icon: LayoutDashboard },
    { id: 'pricing',        label: 'Pricing',         icon: DollarSign },
    { id: 'configuration',  label: 'Configuration',   icon: Sliders },
    { id: 'roi',            label: 'ROI & Rental',    icon: TrendingUp },
    { id: 'amenities',      label: 'Amenities',       icon: Sparkles },
    { id: 'specifications', label: 'Specs',           icon: FileText },
    { id: 'location',       label: 'Location',        icon: MapIcon },
];

// ─── PLC colour palette ───────────────────────────────────────────────────────

const PLC_COLOURS = [
    { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    dot: 'bg-cyan-500'    },
    { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     dot: 'bg-sky-500'     },
    { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  dot: 'bg-violet-500'  },
];

// ─── Amenity icon pool ────────────────────────────────────────────────────────

const AMENITY_ICONS = [
    Zap, ShieldCheck, Building2, TrendingUp, Landmark, Users,
    BadgeCheck, MapPin, CheckCircle2, Sparkles, LayoutGrid, Activity,
];

// ─── Sub-type icon map ────────────────────────────────────────────────────────

const SPACE_ICONS: Record<string, React.FC<any>> = {
    'Office Space': Briefcase,
    'Shop':         ShoppingBag,
    'Showroom':     ShoppingBag,
    'Food Court':   Coffee,
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const CommercialProjectDetailView: React.FC<CommercialProjectDetailViewProps> = ({ project, onBack }) => {

    // ── State ──
    const [activeSection, setActiveSection]         = useState<NavSection>('overview');
    const [activeSpaceTab, setActiveSpaceTab]       = useState('All');
    const [priceExpanded, setPriceExpanded]         = useState(false);
    const [aboutExpanded, setAboutExpanded]         = useState(false);
    const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);
    const [extraExpanded, setExtraExpanded]         = useState(false);
    const [isFavorited, setIsFavorited]             = useState(false);
    const [galleryFilter, setGalleryFilter]         = useState<'all' | 'exterior' | 'site' | 'office'>('all');
    const [mediaModalConfig, setMediaModalConfig]   = useState<{ isOpen: boolean; tab: 'photos' | 'plans' }>({ isOpen: false, tab: 'photos' });

    // ── Data ──
    const details  = project.details as CommercialProjectDetails;
    const images   = project.galleryImages?.length ? project.galleryImages : [project.imageUrl];
    const spaceTypes = details?.spaceTypes ?? [
        { type: 'Office Space', isLockable: true,  minSize: '250 sqft' },
        { type: 'Shop',         isLockable: true,  minSize: '150 sqft' },
        { type: 'Food Court',   isLockable: false, minSize: '400 sqft' },
    ];

    const filteredSpaces = activeSpaceTab === 'All'
        ? spaceTypes
        : spaceTypes.filter(s => s.type === activeSpaceTab);

    const possessionStatusKey = legacyStatusToKey(project.status ?? '');
    const possessionDate      = details?.expectedPossession || project.completionDate || undefined;

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

    // ── Primary colour chip ──
    const PrimaryBadge = ({ label }: { label: string }) => (
        <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest"
            style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY_DARK, border: `1px solid ${PRIMARY}40` }}
        >
            {label}
        </span>
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
                            <MapPin size={16} style={{ color: PRIMARY }} className="shrink-0" />
                            <span className="font-bold text-slate-950">{project.developer}</span> · {project.location}
                        </p>
                        <div className="text-right">
                            <p className="text-3xl font-black text-slate-950 tracking-tighter">{project.priceRange}</p>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Starting Price</p>
                        </div>
                    </div>
                </div>

                {/* Asymmetric gallery */}
                <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-2 h-[380px] rounded-2xl overflow-hidden cursor-pointer">
                    <div className="col-span-3 row-span-2 relative group overflow-hidden"
                        onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        {/* Commercial badge */}
                        <div
                            className="absolute top-4 left-4 flex items-center gap-2 backdrop-blur text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg"
                            style={{ backgroundColor: `${PRIMARY}E6` }}
                        >
                            <Building2 size={12} /> Commercial Project
                        </div>
                        {/* ROI teaser badge */}
                        <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur text-white px-4 py-2.5 rounded-xl">
                            <p className="text-[8px] font-black uppercase tracking-widest text-white/50 mb-0.5">Assured Return</p>
                            <p className="text-lg font-black" style={{ color: PRIMARY }}>
                                {details?.assuredReturn ?? 'Upto 12%'}
                            </p>
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

                {/* Status strip */}
                <PropertyStatusStrip
                    projectType="Commercial"
                    projectStatus={project.status}
                    possessionDate={possessionDate}
                    reraId={details?.reraId}
                    reraVerified={!!details?.reraId}
                    floating={false}
                />

                {/* KEY STATS — 4 cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { label: 'Total Towers',     value: `${details?.totalTowers ?? '—'}` },
                        { label: 'Total Units',       value: `${project.units}` },
                        { label: 'Floor Size',        value: details?.floorSizes ?? '—' },
                        { label: 'Base Rate',         value: details?.bsp ?? project.priceRange },
                    ].map((item, i) => (
                        <div key={i}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-[#2FED9A]/40 transition-colors group">
                            <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black mb-2">{item.label}</p>
                            <p className="text-lg font-black text-slate-950 tracking-tight group-hover:text-slate-950">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* ROI Highlight Banner — commercial-unique */}
                <div
                    className="rounded-2xl p-6 border"
                    style={{ background: `linear-gradient(135deg, ${PRIMARY}12 0%, #00C97B08 100%)`, borderColor: `${PRIMARY}30` }}
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Investment Highlights</p>
                            <p className="text-sm font-black text-slate-950">Assured Return · Rental Income · Capital Appreciation</p>
                        </div>
                        <div className="flex gap-4">
                            {[
                                { plan: 'CLP', roi: '9%' },
                                { plan: 'SPP', roi: '10%' },
                                { plan: 'FPP', roi: '12%' },
                            ].map((r, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-2xl font-black tracking-tighter" style={{ color: PRIMARY_DARK }}>{r.roi}</p>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">{r.plan}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* About Project snippet */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-slate-950 uppercase tracking-widest">About Project</h3>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                            <ShieldCheck size={13} /> RERA Verified
                        </div>
                    </div>
                    <p className={`text-sm text-slate-600 font-medium leading-relaxed ${aboutExpanded ? '' : 'line-clamp-3'}`}>
                        {details?.aboutProject ??
                            `${project.title} is a RERA-registered premium commercial development by ${project.developer} at ${project.location}.
                            Designed for modern businesses with Grade-A office spaces, high-street retail, and a food court — all under one roof.
                            Featuring assured returns up to ${details?.assuredReturn ?? '12%'}, structured payment plans, and high-demand rental yields, this project is built for investment excellence.`}
                    </p>
                    <button onClick={() => setAboutExpanded(!aboutExpanded)}
                        className="text-xs font-bold flex items-center gap-1" style={{ color: PRIMARY_DARK }}>
                        {aboutExpanded ? 'Read Less' : 'Read More'}
                        <ChevronDown size={14} className={`transition-transform ${aboutExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        );
    };

    // ════════════════════════════════════════════════════════════════════════════
    // 2. GALLERY
    // ════════════════════════════════════════════════════════════════════════════

    const renderGallery = () => (
        <div className="space-y-6">
            <SectionHeader title="Project Gallery" />
            <div className="flex gap-2 flex-wrap">
                {(['all', 'exterior', 'site', 'office'] as const).map(f => (
                    <button key={f} onClick={() => setGalleryFilter(f)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${galleryFilter === f
                            ? 'text-slate-950 shadow-md'
                            : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'
                        }`}
                        style={galleryFilter === f ? { backgroundColor: PRIMARY, color: '#111' } : {}}>
                        {f === 'all' ? 'All Photos' : f === 'exterior' ? 'Exterior' : f === 'site' ? 'Site View' : 'Sample Office'}
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
                className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-400 hover:text-slate-950 transition-all flex items-center justify-center gap-2">
                <Maximize2 size={16} /> Open Full Gallery Viewer
            </button>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 3. UNIT TYPES (Office / Retail / Food Court)
    // ════════════════════════════════════════════════════════════════════════════

    const renderUnitTypes = () => (
        <div className="space-y-6">
            <SectionHeader title="Space Types & Configurations" />

            {/* Space type filter tabs */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {['All', ...spaceTypes.map(s => s.type)].map(tab => (
                    <button key={tab} onClick={() => setActiveSpaceTab(tab)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeSpaceTab === tab
                            ? 'text-slate-950 shadow-md'
                            : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'
                        }`}
                        style={activeSpaceTab === tab ? { backgroundColor: PRIMARY } : {}}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Space cards */}
            <div className="space-y-4">
                {filteredSpaces.length > 0 ? filteredSpaces.map((space, i) => {
                    const SpaceIcon = SPACE_ICONS[space.type] ?? Briefcase;
                    // Size tiers per type
                    const sizeTiers =
                        space.type === 'Office Space' ? [
                            { label: 'Small Office', size: '250 sqft' },
                            { label: 'Mid Office',   size: '750 sqft' },
                            { label: 'Large Office', size: '1,250 sqft' },
                        ] : space.type === 'Shop' || space.type === 'Showroom' ? [
                            { label: 'Compact Shop',  size: '120 sqft' },
                            { label: 'Standard Shop', size: '250 sqft' },
                            { label: 'Large Shop',    size: '500 sqft' },
                        ] : [
                            { label: 'Kiosk / Cart',  size: '80 sqft' },
                            { label: 'Food Stall',    size: '200 sqft' },
                            { label: 'Restaurant',    size: '500 sqft' },
                        ];
                    return (
                        <div key={i} className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                            style={{ '--hover-border': `${PRIMARY}60` } as any}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = `${PRIMARY}60`)}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = '#e2e8f0')}>
                            {/* Icon panel */}
                            <div className="w-full sm:w-36 h-36 rounded-xl overflow-hidden shrink-0 border flex flex-col items-center justify-center gap-2"
                                style={{ backgroundColor: `${PRIMARY}10`, borderColor: `${PRIMARY}30` }}>
                                <SpaceIcon size={32} style={{ color: PRIMARY_DARK }} />
                                <p className="text-[8px] font-black uppercase tracking-widest" style={{ color: PRIMARY_DARK }}>
                                    {space.type}
                                </p>
                            </div>
                            {/* Info */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <h4 className="text-xl font-black text-slate-950 leading-none">{space.type}</h4>
                                        {/* Lockable badge */}
                                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border ${space.isLockable
                                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                            : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                                            {space.isLockable ? <Lock size={9} /> : <Unlock size={9} />}
                                            {space.isLockable ? 'Lockable' : 'Open Area'}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                                        Starts from {space.minSize}
                                    </p>
                                    {/* Size tiers */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {sizeTiers.map((tier, ti) => (
                                            <div key={ti}
                                                className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:border-[#2FED9A]/40 transition-colors">
                                                <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">{tier.label}</p>
                                                <p className="text-sm font-black text-slate-950">{tier.size}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <button onClick={() => setMediaModalConfig({ isOpen: true, tab: 'plans' })}
                                        className="text-[10px] font-black uppercase tracking-widest text-white px-5 py-3 rounded-xl transition-colors shadow-sm flex items-center gap-2 active:scale-95"
                                        style={{ backgroundColor: '#111' }}
                                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = PRIMARY_DARK)}
                                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111')}>
                                        <Eye size={14} /> View Floor Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }) : (
                    <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
                        <Info size={24} className="text-slate-300" />
                        <p className="text-sm font-bold text-slate-400">No spaces match this filter.</p>
                    </div>
                )}
            </div>

            {/* RERA + Possession pair */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 shrink-0"><ShieldCheck size={20} /></div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-0.5">RERA Number</p>
                        <p className="text-sm font-black text-slate-950 font-mono">{details?.reraId ?? '—'}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl border" style={{ backgroundColor: `${PRIMARY}10`, borderColor: `${PRIMARY}30` }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${PRIMARY}30`, color: PRIMARY_DARK }}>
                        <CalendarClock size={20} />
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: PRIMARY_DARK }}>Expected Possession</p>
                        <p className="text-sm font-black text-slate-950">{details?.expectedPossession ?? project.completionDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 4. PRICING
    // ════════════════════════════════════════════════════════════════════════════

    const renderPricing = () => (
        <div className="space-y-6">
            <SectionHeader title="Pricing & Payment Plans" />

            {/* Dark hero price card */}
            <div className="bg-slate-950 text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: `${PRIMARY}08` }} />
                <div className="relative z-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-black mb-3">Base Selling Price (BSP)</p>
                    <p className="text-5xl font-black tracking-tighter mb-2">{project.priceRange}</p>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>
                        @ {details?.bsp ?? '₹ 6,500 per sqft'}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <button onClick={() => setPriceExpanded(!priceExpanded)}
                            className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                            Price Breakdown <ChevronDown size={16} className={`transition-transform ${priceExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {priceExpanded && (
                            <div className="mt-5 space-y-3 bg-white/5 p-5 rounded-xl border border-white/10">
                                {[
                                    { label: 'Base Selling Price',      value: details?.bsp ?? '—' },
                                    { label: 'Floor Rise Charges',      value: '₹ 50 per sqft per floor' },
                                    { label: 'Electrification Charges', value: details?.otherCosts?.efc_ffc ?? '₹ 1.5 L per 1KW' },
                                    { label: 'Car Parking',             value: details?.otherCosts?.parking ?? '₹ 3 L per space', highlight: true },
                                    { label: 'GST',                     value: '12% (Commercial)', highlight: true },
                                ].map((row, i) => (
                                    <div key={i} className={`flex justify-between text-[11px] ${i < 4 ? 'pb-3 border-b border-white/10' : ''}`}>
                                        <span className={`font-bold uppercase tracking-widest ${row.highlight ? 'text-[#2FED9A]' : 'text-white/50'}`}>{row.label}</span>
                                        <span className={`font-black ${row.highlight ? 'text-[#2FED9A]' : ''}`}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Payment Plans */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-2">Payment Plans</h3>
                {[
                    {
                        name:   'Construction Linked Plan',
                        badge:  'CLP',
                        desc:   details?.paymentPlans?.clp ?? 'Pay as construction progresses through defined milestones — Booking, Foundation, Floors, Fit-out, Possession.',
                        color:  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
                        stages: ['Booking', 'Structure', 'Fit-out', 'Possession'],
                        pct:    ['10%', '40%', '30%', '20%'],
                        roi:    '9%',
                    },
                    {
                        name:   'Subvention Payment Plan',
                        badge:  'SPP',
                        desc:   details?.paymentPlans?.spp ?? 'Pay 20% booking; EMIs handled by builder till possession. Zero construction-stage payment stress.',
                        color:  { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700' },
                        stages: ['Booking', 'Bank Disbursal', 'Possession'],
                        pct:    ['20%', '75%', '5%'],
                        roi:    '10%',
                    },
                    {
                        name:   'Flexi Payment Plan',
                        badge:  'FPP',
                        desc:   details?.paymentPlans?.fpp ?? 'Maximum return plan — pay 90% within 60 days for highest assured return and flat price benefit.',
                        color:  { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700' },
                        stages: ['Booking', 'Balance (60 days)', 'Possession'],
                        pct:    ['10%', '85%', '5%'],
                        roi:    '12%',
                    },
                ].map((plan, pi) => (
                    <div key={pi} className={`p-5 rounded-xl border ${plan.color.border} ${plan.color.bg}`}>
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                            <h4 className={`text-sm font-black ${plan.color.text}`}>{plan.name}</h4>
                            <div className="flex items-center gap-2">
                                <span className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border ${plan.color.border} ${plan.color.bg} ${plan.color.text}`}>{plan.badge}</span>
                                <span className="px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-950"
                                    style={{ backgroundColor: PRIMARY, border: `1px solid ${PRIMARY}` }}>
                                    ROI: {plan.roi}
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">{plan.desc}</p>
                        {/* Payment timeline */}
                        <div className="relative flex justify-between items-start pt-2">
                            <div className="absolute top-[8px] left-0 right-0 h-0.5 bg-slate-200 rounded-full z-0" />
                            {plan.stages.map((stage, si) => (
                                <div key={si} className="relative z-10 flex flex-col items-center gap-1.5 text-center"
                                    style={{ width: `${100 / plan.stages.length}%` }}>
                                    <div className="w-4 h-4 rounded-full border-2 bg-white"
                                        style={{ borderColor: si === plan.stages.length - 1 ? PRIMARY : '#cbd5e1' }} />
                                    <p className="text-[9px] font-black text-slate-950 uppercase tracking-widest">{plan.pct[si]}</p>
                                    <p className="text-[7px] text-slate-400 font-medium leading-tight">{stage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Charges */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <button onClick={() => setExtraExpanded(!extraExpanded)}
                    className="w-full flex items-center justify-between px-6 py-5 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                            <ReceiptText size={16} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-black text-slate-950">Other Charges</p>
                            <p className="text-[9px] text-slate-400 font-medium">Parking · Lease Rent · Electrification · Fire Safety</p>
                        </div>
                    </div>
                    <ChevronDown size={16} className={`text-slate-400 transition-transform ${extraExpanded ? 'rotate-180' : ''}`} />
                </button>
                {extraExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                        {[
                            { label: 'Car Parking (Mechanical)',       value: details?.otherCosts?.parking ?? '₹ 3,00,000 per space' },
                            { label: 'Club Membership',                value: details?.otherCosts?.clubMembership ?? '₹ 1,50,000 (one-time)' },
                            { label: 'Electrification / Fire Charges', value: details?.otherCosts?.efc_ffc ?? '₹ 1.5 L per 1 KW load' },
                            { label: 'Lease Rent',                     value: 'As per applicable authority rates' },
                            { label: 'CAM (Common Area Maintenance)',   value: '₹ 12–18 per sqft / month' },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-3.5 border-b border-slate-50 last:border-0">
                                <p className="text-xs font-bold text-slate-600">{item.label}</p>
                                <p className="text-xs font-black text-slate-950">{item.value}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* PLC chips */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Preferential Location Charges</h3>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">PLC</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">One-time premium based on unit facing, floor preference, and zone within the project.</p>
                <div className="flex flex-wrap gap-2.5">
                    {[
                        'Park Facing (+15%)',
                        'Corner Unit (+12%)',
                        'Road Facing – Main (+10%)',
                        'East Facing (+5%)',
                    ].map((opt, i) => {
                        const c = PLC_COLOURS[i % PLC_COLOURS.length];
                        return (
                            <span key={i} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${c.bg} ${c.border} ${c.text}`}>
                                <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                                {opt}
                            </span>
                        );
                    })}
                </div>
                <p className="text-[8px] italic text-slate-400 font-medium">* PLC is one-time and confirmed at allotment stage.</p>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 5. CONFIGURATION
    // ════════════════════════════════════════════════════════════════════════════

    const renderConfiguration = () => {
        const towers = details?.totalTowers ?? 2;
        const dummyTowers = Array.from({ length: towers }, (_, i) => ({
            name:       `Tower ${String.fromCharCode(65 + i)}`,
            floors:     details?.floorSizes ? 15 : 18,
            floorSize:  details?.floorSizes ?? '12,000 sqft per floor',
            unitsFloor: 6,
        }));

        return (
            <div className="space-y-6">
                <SectionHeader title="Tower Configuration" />

                {/* 4 stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Total Towers',    val: `${towers}`,              icon: Building2 },
                        { label: 'Total Units',     val: `${project.units}`,       icon: LayoutGrid },
                        { label: 'Floor Size',      val: details?.floorSizes ?? '—', icon: Layers },
                        { label: 'Units / Floor',   val: `${dummyTowers[0]?.unitsFloor ?? '—'}`, icon: Home },
                    ].map((c, i) => (
                        <div key={i}
                            className="bg-white border border-slate-100 p-5 rounded-2xl text-center shadow-sm transition-colors group cursor-default"
                            onMouseEnter={e => (e.currentTarget.style.borderColor = `${PRIMARY}60`)}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = '#f1f5f9')}>
                            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-slate-400 mb-4 bg-slate-50 group-hover:text-slate-700 transition-colors"
                                style={{ '--hover-bg': `${PRIMARY}18` } as any}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = `${PRIMARY}20`; (e.currentTarget as HTMLElement).style.color = PRIMARY_DARK; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.color = ''; }}>
                                <c.icon size={20} />
                            </div>
                            <p className="text-2xl font-black text-slate-950 tracking-tighter mb-1">{c.val}</p>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{c.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tower distribution */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Tower Breakdown</h3>
                    <div className="space-y-3">
                        {dummyTowers.map((tower, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 hover:border-[#2FED9A]/40 transition-colors">
                                {/* Tower letter badge */}
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 text-slate-950"
                                    style={{ backgroundColor: PRIMARY }}>
                                    {String.fromCharCode(65 + i)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-black text-slate-950">{tower.name}</p>
                                    <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                                        {tower.floors} Floors · {tower.floorSize}
                                    </p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-base font-black text-slate-950">{tower.unitsFloor * tower.floors}</p>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Units</p>
                                </div>
                                <div className="w-20 shrink-0 hidden sm:block">
                                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full transition-all" style={{ width: `${(i + 1) / towers * 100}%`, backgroundColor: PRIMARY }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Site/floor plan thumbnail */}
                <div className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
                    onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                    <img
                        src={images[0]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                        alt="Site Plan"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div>
                            <p className="text-white font-black text-sm">{project.title} — Master Plan</p>
                            <p className="text-white/60 text-[10px] font-medium">{project.location}</p>
                        </div>
                        <button className="bg-white/10 backdrop-blur border border-white/20 text-white text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1">
                            <Maximize2 size={11} /> Expand
                        </button>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center justify-center">
                        <Building2 size={16} className="text-white" />
                    </div>
                </div>
            </div>
        );
    };

    // ════════════════════════════════════════════════════════════════════════════
    // 6. ROI & RENTAL INCOME — commercial-unique highlight section
    // ════════════════════════════════════════════════════════════════════════════

    const renderROI = () => (
        <div className="space-y-6">
            <SectionHeader
                title="Assured Return & Rental Income"
                badge={
                    <span
                        className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg"
                        style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY_DARK, border: `1px solid ${PRIMARY}40` }}>
                        Investment Focus
                    </span>
                }
            />

            {/* ROI Hero */}
            <div className="bg-slate-950 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: `${PRIMARY}10` }} />
                <div className="relative z-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-black mb-6">Assured Return on Investment</p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {[
                            { plan: 'CLP', pct: '9%',  desc: 'Construction Linked' },
                            { plan: 'SPP', pct: '10%', desc: 'Subvention Plan' },
                            { plan: 'FPP', pct: '12%', desc: 'Flexi Payment Plan' },
                        ].map((r, i) => (
                            <div key={i}
                                className="text-center rounded-2xl p-5 border"
                                style={{ backgroundColor: `${PRIMARY}10`, borderColor: `${PRIMARY}20` }}>
                                <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mb-2">{r.desc}</p>
                                <p className="text-4xl font-black tracking-tighter leading-none mb-2" style={{ color: PRIMARY }}>{r.pct}</p>
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-950 px-2 py-0.5 rounded"
                                    style={{ backgroundColor: PRIMARY }}>{r.plan}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs font-medium text-white/40 italic">
                        * Assured returns applicable for pre-possession period. Terms and conditions apply as per builder agreement.
                    </p>
                </div>
            </div>

            {/* Assured Rental Income */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Assured Rental Income</h3>
                    <PrimaryBadge label="Post Possession" />
                </div>
                <div className="space-y-3">
                    {[
                        { type: 'Office Space',  rate: '₹ 75–90 per sqft / month',  icon: Briefcase },
                        { type: 'Retail Shop',   rate: '₹ 120–180 per sqft / month', icon: ShoppingBag },
                        { type: 'Food Court',    rate: '₹ 90–130 per sqft / month',  icon: Coffee },
                    ].map((row, i) => (
                        <div key={i}
                            className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#2FED9A]/40 transition-colors group bg-slate-50">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY_DARK }}>
                                <row.icon size={16} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-black text-slate-950">{row.type}</p>
                                <p className="text-[10px] text-slate-400 font-medium">Indicative rental rate</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-black text-slate-950">{row.rate}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[9px] italic text-slate-400 font-medium">* Rental rates are indicative based on area comparables. Actual returns may vary.</p>
            </div>

            {/* Why Invest card */}
            <div className="rounded-2xl p-6 border space-y-4"
                style={{ background: `linear-gradient(135deg, ${PRIMARY}08 0%, transparent 70%)`, borderColor: `${PRIMARY}25` }}>
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Why Invest in This Project?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        { title: 'Grade-A Commercial',   desc: 'High-demand office spaces with premium tenant profile.' },
                        { title: 'RERA Registered',       desc: 'Legal compliance and buyer protection guaranteed.' },
                        { title: 'Lease Management',      desc: 'Builder-managed leasing for hassle-free ownership.' },
                        { title: 'Capital Appreciation',  desc: 'Location-driven long-term value growth.' },
                    ].map((point, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-100">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY_DARK }}>
                                <CheckCircle2 size={14} />
                            </div>
                            <div>
                                <p className="text-[11px] font-black text-slate-950 uppercase tracking-widest mb-1">{point.title}</p>
                                <p className="text-xs font-medium text-slate-500 leading-relaxed">{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 7. AMENITIES
    // ════════════════════════════════════════════════════════════════════════════

    const renderAmenities = () => {
        const feats = details?.infrastructure ?? [
            'Business Centre', '24×7 Security', 'Power Backup', 'High-Speed Elevators',
            'Mechanical Parking', 'CCTV Surveillance', 'Lobby Concierge', 'Green Building',
            'Fire Suppression System', 'EV Charging Points', 'Conference Rooms', 'Cafeteria',
        ];
        const shown = amenitiesExpanded ? feats : feats.slice(0, 8);
        return (
            <div className="space-y-6">
                <SectionHeader
                    title="Business Amenities"
                    badge={<span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">{feats.length} Total</span>}
                />
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {shown.map((feat, i) => {
                        const Icon = AMENITY_ICONS[i % AMENITY_ICONS.length];
                        return (
                            <div key={i}
                                className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center gap-3 aspect-square text-center shadow-sm hover:shadow-md transition-all group"
                                onMouseEnter={e => (e.currentTarget.style.borderColor = `${PRIMARY}60`)}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = '#f1f5f9')}>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: `${PRIMARY}18`, color: PRIMARY_DARK }}>
                                    <Icon size={18} />
                                </div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600 line-clamp-2 leading-tight">{feat}</p>
                            </div>
                        );
                    })}
                </div>
                {feats.length > 8 && (
                    <button onClick={() => setAmenitiesExpanded(!amenitiesExpanded)}
                        className="w-full py-4 rounded-xl border-2 border-dashed border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-400 hover:text-slate-950 transition-all">
                        {amenitiesExpanded ? 'Show Less' : `View All ${feats.length} Amenities`}
                    </button>
                )}
            </div>
        );
    };

    // ════════════════════════════════════════════════════════════════════════════
    // 8. SPECIFICATIONS
    // ════════════════════════════════════════════════════════════════════════════

    const renderSpecifications = () => {
        const specs = [
            { title: 'Ceiling Height',       desc: 'Standard 10 ft slab-to-slab; customisable raised flooring for server rooms and data centres.' },
            { title: 'Elevators',            desc: 'High-speed passenger and service lifts with dedicated parking-to-lobby shuttle lifts.' },
            { title: 'Fire Safety',          desc: 'Addressable fire detection, sprinkler suppression, pressurised staircases, fire command centre.' },
            { title: 'HVAC System',          desc: 'Central air-conditioning with VRV/VRF system. Individual unit temperature control.' },
            { title: 'Green Building',       desc: 'IGBC / LEED Gold pre-certified — solar reflective glass, rainwater harvesting, LED common areas.' },
            { title: 'Electrical Supply',    desc: 'Dedicated 2 KVA per 100 sqft. 100% DG backup for common areas; dedicated backup for office units.' },
        ];
        return (
            <div className="space-y-6">
                <SectionHeader title="Technical Specifications" />
                <div className="space-y-3">
                    {specs.map((spec, i) => (
                        <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#2FED9A]/40 transition-colors">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                                style={{ backgroundColor: `${PRIMARY}18`, borderColor: `${PRIMARY}30`, color: PRIMARY_DARK }}>
                                <CheckCircle2 size={16} />
                            </div>
                            <div>
                                <p className="text-[11px] font-black uppercase tracking-widest text-slate-950 mb-1.5">{spec.title}</p>
                                <p className="text-xs font-medium text-slate-500 leading-relaxed">{spec.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // ════════════════════════════════════════════════════════════════════════════
    // 9. LOCATION
    // ════════════════════════════════════════════════════════════════════════════

    const renderLocation = () => (
        <div className="space-y-6">
            <SectionHeader title="Location & Connectivity" />
            <div className="h-56 md:h-72 rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm">
                <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-50" alt="Map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 text-slate-950 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse"
                        style={{ backgroundColor: PRIMARY }}>
                        <MapPin size={24} />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 shadow-sm">
                    {project.location}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-700 shadow-sm flex items-center gap-1.5">
                    <Navigation2 size={11} /> Open Maps
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    { dest: 'Expressway / NH',          time: '2 Min Drive' },
                    { dest: 'Metro / Rapid Transit',    time: '5 Min Walk' },
                    { dest: 'International Airport',    time: '20 Min Drive' },
                    { dest: 'CBD / Business District',  time: '10 Min Drive' },
                    { dest: 'Top Hotel / Convention',   time: '8 Min Drive' },
                    { dest: 'IT / Tech Park',           time: '12 Min Drive' },
                ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[#2FED9A]/40 transition-colors">
                        <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${PRIMARY}18`, borderColor: `${PRIMARY}30`, color: PRIMARY_DARK }}>
                            <Navigation2 size={16} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: PRIMARY_DARK }}>{loc.time}</p>
                            <p className="text-sm text-slate-950 font-black">{loc.dest}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // SECTION SWITCH
    // ════════════════════════════════════════════════════════════════════════════

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':       return renderOverview();
            case 'gallery':        return renderGallery();
            case 'unit-types':     return renderUnitTypes();
            case 'pricing':        return renderPricing();
            case 'configuration':  return renderConfiguration();
            case 'roi':            return renderROI();
            case 'amenities':      return renderAmenities();
            case 'specifications': return renderSpecifications();
            case 'location':       return renderLocation();
        }
    };

    // ════════════════════════════════════════════════════════════════════════════
    // SHELL — pixel-identical structure to PlotProjectDetailView
    // ════════════════════════════════════════════════════════════════════════════

    return (
        <div className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto no-scrollbar font-sans">

            {/* ── Top Header Bar ── */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-5 h-[60px] flex items-center gap-4">
                    <button onClick={onBack}
                        className="w-9 h-9 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0">
                        <ArrowLeft size={17} />
                    </button>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-black text-slate-950 truncate leading-tight">{project.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                            <p className="text-[10px] text-slate-400 font-medium truncate">{project.location}</p>
                            <span className="hidden sm:block shrink-0">
                                <PossessionBadge statusKey={possessionStatusKey} date={possessionDate} size="sm" />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                        <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-slate-950 transition-colors border border-slate-200">
                            <Download size={13} /> Brochure
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

            {/* ── Two-Column Layout ── */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-5">
                <div className="flex gap-5 items-start">

                    {/* ═══ LEFT: Sticky sidebar ═══ */}
                    <aside className="hidden md:flex flex-col w-52 shrink-0 sticky top-[68px] self-start">
                        <div className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm space-y-0.5">
                            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                <button key={id} onClick={() => navigateTo(id)}
                                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left transition-all group text-[10px] font-black uppercase tracking-wider relative ${activeSection === id
                                        ? 'text-slate-950 shadow-md'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                                    style={activeSection === id ? { backgroundColor: PRIMARY, color: '#111' } : {}}>
                                    <Icon size={14} className={activeSection === id ? 'text-slate-950' : 'text-slate-400 group-hover:text-slate-600 transition-colors'} />
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Status + type mini-card */}
                        <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Possession Status</p>
                            {possessionStatusKey === 'ready_to_move' ? (
                                <div className="flex items-center gap-2 px-2.5 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Ready to Move</span>
                                </div>
                            ) : (
                                <PossessionBadge statusKey={possessionStatusKey} date={possessionDate} size="sm" />
                            )}
                            <PropertyTypeBadge type="Commercial" size="sm" />
                        </div>

                        {/* ROI badge in sidebar */}
                        <div className="mt-3 p-3 rounded-xl border space-y-2"
                            style={{ background: `${PRIMARY}10`, borderColor: `${PRIMARY}30` }}>
                            <p className="text-[8px] font-black uppercase tracking-widest" style={{ color: PRIMARY_DARK }}>Assured Return</p>
                            <p className="text-2xl font-black tracking-tighter" style={{ color: PRIMARY_DARK }}>
                                {details?.assuredReturn ?? 'Upto 12%'}
                            </p>
                            <p className="text-[8px] font-medium text-slate-400">Pre-possession period</p>
                        </div>

                        {/* Sticky CTAs */}
                        <div className="mt-4 space-y-2">
                            <button
                                className="w-full h-11 text-slate-950 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
                                style={{ backgroundColor: PRIMARY, boxShadow: `0 4px 16px ${PRIMARY}40` }}>
                                <CalendarClock size={14} /> Schedule Visit
                            </button>
                            <button className="w-full h-11 bg-white text-slate-700 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors border border-slate-200">
                                <Download size={14} /> Download Brochure
                            </button>
                            <button className="w-full h-11 bg-[#25D366]/10 text-[#128C7E] rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
                                <MessageCircle size={14} /> WhatsApp
                            </button>
                        </div>
                    </aside>

                    {/* ═══ RIGHT: Dynamic content area ═══ */}
                    <main className="flex-1 min-w-0 pb-32 md:pb-6">
                        {/* Mobile section picker */}
                        <div className="md:hidden mb-4 overflow-x-auto no-scrollbar">
                            <div className="flex gap-2 pb-1">
                                {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                    <button key={id} onClick={() => navigateTo(id)}
                                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${activeSection === id
                                            ? 'text-slate-950 shadow-md'
                                            : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'}`}
                                        style={activeSection === id ? { backgroundColor: PRIMARY } : {}}>
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

            {/* ── Mobile Sticky CTA Bar ── */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-100 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
                <div className="flex gap-2.5">
                    <button onClick={() => setIsFavorited(!isFavorited)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all shrink-0 ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Heart size={16} className={isFavorited ? 'fill-rose-500' : ''} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-500 rounded-xl transition-colors hover:bg-slate-100 shrink-0">
                        <Download size={16} />
                    </button>
                    <button
                        className="flex-1 h-12 text-slate-950 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all"
                        style={{ backgroundColor: PRIMARY, boxShadow: `0 4px 16px ${PRIMARY}40` }}>
                        <CalendarClock size={14} /> Schedule Visit
                    </button>
                </div>
            </div>

            {/* Media Modal */}
            {mediaModalConfig.isOpen && (
                <MediaModal
                    initialTab={mediaModalConfig.tab}
                    project={project}
                    projectType="Commercial"
                    onClose={() => setMediaModalConfig({ ...mediaModalConfig, isOpen: false })}
                />
            )}
        </div>
    );
};

export default CommercialProjectDetailView;
