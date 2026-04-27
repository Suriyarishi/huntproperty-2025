import React, { useState } from 'react';
import {
    ArrowLeft, MapPin, Heart, Share2, Maximize2, ChevronDown,
    Phone, MessageCircle, Navigation2, CalendarClock, CheckCircle2,
    Image as ImageIcon, Info, ShieldCheck, LayoutDashboard,
    Award, Users, Home, Map as MapIcon, Eye, DollarSign,
    Sliders, Sparkles, FileText, Download, BadgeCheck,
    Layers, LayoutGrid, Move, Compass, Trees, Zap, Landmark,
    Grid3x3, ReceiptText, Building2
} from 'lucide-react';
import { Project, PlotProjectDetails } from '../types';
import MediaModal from './MediaModal';
import { PossessionBadge, PropertyTypeBadge } from './PropertyBadge';
import { legacyStatusToKey } from '../services/propertyConstants';
import PropertyStatusStrip from './PropertyStatusStrip';

// ─── Props ────────────────────────────────────────────────────────────────────

interface PlotProjectDetailViewProps {
    project: Project;
    onBack: () => void;
}

// ─── Section types — mirrors ProjectDetailView exactly, renamed for plots ─────

type NavSection =
    | 'overview'        // same
    | 'gallery'         // same
    | 'plot-details'    // replaces: floorplans
    | 'pricing'         // same
    | 'configuration'   // same slot → block/plot layout
    | 'amenities'       // same
    | 'specifications'  // same slot → plot specs (soil, road, utilities)
    | 'location'        // same
    | 'builder';        // same

// ─── Navigation — same order, same count as ProjectDetailView ─────────────────

const NAV_ITEMS: { id: NavSection; label: string; icon: React.FC<any> }[] = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'plot-details', label: 'Plot Details', icon: LayoutDashboard },  // ← Floor Plans slot
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'configuration', label: 'Configuration', icon: Sliders },          // ← Block layout slot
    { id: 'amenities', label: 'Amenities', icon: Sparkles },
    { id: 'specifications', label: 'Plot Specs', icon: FileText },          // ← Specs slot
    { id: 'location', label: 'Location', icon: MapIcon },
    { id: 'builder', label: 'Builder Info', icon: Award },
];

// ─── PLC colour palette ───────────────────────────────────────────────────────

const PLC_COLOURS = [
    { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', dot: 'bg-amber-500' },
    { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700', dot: 'bg-sky-500' },
    { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', dot: 'bg-violet-500' },
];

// ─── Amenity icon pool ────────────────────────────────────────────────────────

const AMENITY_ICONS = [
    Trees, Zap, ShieldCheck, Compass, Move, Landmark,
    Users, BadgeCheck, MapPin, CheckCircle2, Sparkles, LayoutGrid,
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const PlotProjectDetailView: React.FC<PlotProjectDetailViewProps> = ({ project, onBack }) => {
    // ── State — identical pattern to ProjectDetailView ──
    const [activeSection, setActiveSection] = useState<NavSection>('overview');
    const [activePlotTab, setActivePlotTab] = useState('All');          // mirrors activeUnitTab
    const [priceExpanded, setPriceExpanded] = useState(false);
    const [aboutExpanded, setAboutExpanded] = useState(false);
    const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);
    const [extraExpanded, setExtraExpanded] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [galleryFilter, setGalleryFilter] = useState<'all' | 'exterior' | 'site' | 'amenities'>('all');
    const [mediaModalConfig, setMediaModalConfig] = useState<{ isOpen: boolean; tab: 'photos' | 'plans' }>({ isOpen: false, tab: 'photos' });

    // ── Data ──
    const details = project.details as PlotProjectDetails;
    const images = project.galleryImages?.length ? project.galleryImages : [project.imageUrl];
    const layout = details?.layout ?? [];
    const totalPlots = layout.reduce((acc, b) => acc + b.plotsPerBlock, 0) || project.units;
    const totalLand = layout.length > 0
        ? `${(totalPlots * 0.04).toFixed(1)} Acres (est.)`   // rough: 1 plot ≈ 0.04 acres
        : '—';

    // Filter plot blocks by tab (mirrors filteredUnits)
    const filteredBlocks = activePlotTab === 'All'
        ? layout
        : layout.filter(b => b.blockName.includes(activePlotTab));

    // Possession
    const possessionStatusKey = legacyStatusToKey(project.status ?? '');
    const possessionDate = details?.expectedPossession || project.completionDate || undefined;

    // ── Navigation ──
    const navigateTo = (id: NavSection) => {
        setActiveSection(id);
        if (window.innerWidth < 768) window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ── Shared SectionHeader (identical to ProjectDetailView) ──
    const SectionHeader = ({ title, badge }: { title: string; badge?: React.ReactNode }) => (
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight">{title}</h2>
            {badge}
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 1. OVERVIEW — same structure; replace apartment stats with plot stats
    // ════════════════════════════════════════════════════════════════════════════

    const renderOverview = () => {
        const hasEnough = images.length >= 3;
        return (
            <div className="space-y-8">
                {/* Title row — identical to ProjectDetailView */}
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-950 leading-tight tracking-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <p className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                            <MapPin size={16} className="text-amber-500 shrink-0" />
                            <span className="font-bold text-slate-950">{project.developer}</span> · {project.location}
                        </p>
                        <div className="text-right">
                            <p className="text-3xl font-black text-slate-950 tracking-tighter">{project.priceRange}</p>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Starting Price</p>
                        </div>
                    </div>
                </div>

                {/* Asymmetric gallery — identical */}
                <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-2 h-[380px] rounded-2xl overflow-hidden cursor-pointer">
                    <div className="col-span-3 row-span-2 relative group overflow-hidden"
                        onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        {/* Plot-type badge over main image */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-amber-500/90 backdrop-blur text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                            <Grid3x3 size={12} /> Residential Plot
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

                {/* Status strip — identical call, passes "Residential Plot" as type */}
                <PropertyStatusStrip
                    projectType="Residential Plot"
                    projectStatus={project.status}
                    possessionDate={possessionDate}
                    reraId={details?.projectRera || details?.builderRera}
                    reraVerified={!!(details?.projectRera || details?.builderRera)}
                    floating={false}
                />

                {/* KEY STATS — exact same 4-card grid; data mapped for plots:
                    Towers       → Total Plots
                    Total Units  → Total Plots (same field, plot count)
                    Plot Size    → Land Area (Acres)
                    Base Rate    → Price per Sqmt / Sqyd               */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { label: 'Total Plots', value: `${totalPlots}` },
                        { label: 'No. of Blocks', value: `${layout.length || '—'}` },
                        { label: 'Total Land Area', value: totalLand },
                        { label: 'Price / Sqmt', value: details?.pricePerUnit ?? project.priceRange },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-amber-200 transition-colors">
                            <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black mb-2">{item.label}</p>
                            <p className="text-lg font-black text-slate-950 tracking-tight">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* About snippet — identical card, Read More toggle */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-slate-950 uppercase tracking-widest">About Project</h3>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                            <ShieldCheck size={13} /> RERA
                        </div>
                    </div>
                    <p className={`text-sm text-slate-600 font-medium leading-relaxed ${aboutExpanded ? '' : 'line-clamp-3'}`}>
                        {project.title} is a premium RERA-registered plotted development by {project.developer} located at {project.location}.
                        Comprising {totalPlots} well-planned plots across {layout.length} blocks with wide internal roads, underground utilities,
                        and 24×7 gated security — ideal for self-construction or long-term capital appreciation.
                    </p>
                    <button onClick={() => setAboutExpanded(!aboutExpanded)}
                        className="text-xs text-amber-600 font-bold flex items-center gap-1">
                        {aboutExpanded ? 'Read Less' : 'Read More'}
                        <ChevronDown size={14} className={`transition-transform ${aboutExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        );
    };

    // ════════════════════════════════════════════════════════════════════════════
    // 2. GALLERY — identical to ProjectDetailView, filter labels renamed for plot
    // ════════════════════════════════════════════════════════════════════════════

    const renderGallery = () => (
        <div className="space-y-6">
            <SectionHeader title="Site Gallery" />
            {/* Category filters — same pattern, plot-relevant labels */}
            <div className="flex gap-2 flex-wrap">
                {(['all', 'exterior', 'site', 'amenities'] as const).map(f => (
                    <button key={f} onClick={() => setGalleryFilter(f)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${galleryFilter === f ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                        {f === 'all' ? 'All Photos' : f === 'exterior' ? 'Entrance' : f === 'site' ? 'Site View' : 'Amenities'}
                    </button>
                ))}
            </div>
            {/* Grid — identical */}
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
    // 3. PLOT DETAILS — same slot as "Floor Plans"; block tabs + plot size cards
    // ════════════════════════════════════════════════════════════════════════════

    const renderPlotDetails = () => (
        <div className="space-y-6">
            <SectionHeader title="Plot Details" />

            {/* Block filter tabs — mirrors BHK tabs in floor plans */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {['All', ...layout.map(b => b.blockName)].map(tab => (
                    <button key={tab} onClick={() => setActivePlotTab(tab)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activePlotTab === tab ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Plot size cards — mirrors unit cards in floor plans */}
            <div className="space-y-4">
                {filteredBlocks.length > 0 ? filteredBlocks.map((block, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all">
                        {/* Thumbnail / diagram placeholder */}
                        <div className="w-full sm:w-36 h-36 bg-amber-50 rounded-xl overflow-hidden shrink-0 border border-amber-100 flex flex-col items-center justify-center gap-2">
                            <Grid3x3 size={32} className="text-amber-400" />
                            <p className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Plot Layout</p>
                        </div>
                        {/* Info — mirrors unit info */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-black text-slate-950 leading-none mb-2">{block.blockName}</h4>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                                    <Move size={11} className="text-amber-500" /> {block.dimensions}
                                </p>
                            </div>
                            {/* Stats row */}
                            <div className="flex flex-wrap gap-3 mt-3">
                                <div className="bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Available</p>
                                    <p className="text-sm font-black text-slate-950">{block.plotsPerBlock} Plots</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Base Price</p>
                                    <p className="text-sm font-black text-amber-600">{details?.pricePerUnit ?? project.priceRange}</p>
                                </div>
                            </div>
                            {/* CTA — mirrors "View Plan" */}
                            <div className="flex items-center justify-end mt-4">
                                <button onClick={() => setMediaModalConfig({ isOpen: true, tab: 'plans' })}
                                    className="text-[10px] font-black uppercase tracking-widest text-white bg-slate-950 px-5 py-3 rounded-xl hover:bg-amber-600 transition-colors shadow-sm flex items-center gap-2">
                                    <Eye size={14} /> View Plot Layout
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
                        <Info size={24} className="text-slate-300" />
                        <p className="text-sm font-bold text-slate-400">No blocks match this filter.</p>
                    </div>
                )}
            </div>

            {/* RERA pair */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 shrink-0"><ShieldCheck size={20} /></div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-0.5">Project RERA</p>
                        <p className="text-sm font-black text-slate-950 font-mono">{details?.projectRera ?? '—'}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                    <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 shrink-0"><CalendarClock size={20} /></div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-0.5">Possession / Registry</p>
                        <p className="text-sm font-black text-slate-950">
                            {details?.expectedPossession === 'Ready to Registry'
                                ? '✅ Ready to Registry'
                                : (details?.expectedPossession ?? project.completionDate)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 4. PRICING — same card anatomy; payment timeline uses plot stages
    // ════════════════════════════════════════════════════════════════════════════

    const renderPricing = () => (
        <div className="space-y-6">
            <SectionHeader title="Pricing & Payment" />

            {/* Dark hero price card — identical structure */}
            <div className="bg-slate-950 text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-black mb-3">Starting Price</p>
                    <p className="text-5xl font-black tracking-tighter mb-2">{project.priceRange}</p>
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">@ {details?.pricePerUnit ?? '—'}</p>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <button onClick={() => setPriceExpanded(!priceExpanded)}
                            className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                            Price Breakdown <ChevronDown size={16} className={`transition-transform ${priceExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {priceExpanded && (
                            <div className="mt-5 space-y-3 bg-white/5 p-5 rounded-xl border border-white/10">
                                {[
                                    { label: 'Plot Base Price', value: details?.pricePerUnit ?? '—' },
                                    { label: 'IDC (Internal Dev.)', value: details?.developmentCharges?.idc ?? '—' },
                                    { label: 'EDC (External Dev.)', value: details?.developmentCharges?.edc ?? '—' },
                                    { label: 'Stamp Duty & Registry', value: 'As per Actuals', highlight: true },
                                ].map((row, i) => (
                                    <div key={i} className={`flex justify-between text-[11px] ${i < 3 ? 'pb-3 border-b border-white/10' : ''}`}>
                                        <span className={`font-bold uppercase tracking-widest ${row.highlight ? 'text-amber-400' : 'text-white/50'}`}>{row.label}</span>
                                        <span className={`font-black ${row.highlight ? 'text-amber-400' : ''}`}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Payment Plans — three cards: DLP / Flexi / DPP */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-2">Payment Plans</h3>
                {[
                    {
                        name: 'Development Linked Plan',
                        badge: 'DLP',
                        desc: details?.dlp ?? 'Payments staged to development milestones — Booking, Roads, Services, Registry.',
                        color: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
                        stages: ['Booking', 'Development', 'Roads & Services', 'Registry'],
                        pct: ['10%', '30%', '20%', '40%'],
                    },
                    {
                        name: 'Flexi Payment Plan',
                        badge: 'FLEXI',
                        desc: 'Pay 30% at booking; balance split across development milestones till possession.',
                        color: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700' },
                        stages: ['Booking', 'Infrastructure', 'Registry'],
                        pct: ['30%', '45%', '25%'],
                    },
                    {
                        name: 'Down Payment Plan',
                        badge: 'DPP',
                        desc: 'Pay 95% within 45 days for a flat cash discount. Ideal for investors.',
                        color: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
                        stages: ['Booking', 'Balance (45 days)', 'Possession'],
                        pct: ['5%', '90%', '5%'],
                    },
                ].map((plan, pi) => (
                    <div key={pi} className={`p-5 rounded-xl border ${plan.color.border} ${plan.color.bg}`}>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className={`text-sm font-black ${plan.color.text}`}>{plan.name}</h4>
                            <span className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border ${plan.color.border} ${plan.color.bg} ${plan.color.text}`}>{plan.badge}</span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">{plan.desc}</p>
                        {/* Payment milestone timeline */}
                        <div className="relative flex justify-between items-start pt-2">
                            <div className="absolute top-[8px] left-0 right-0 h-0.5 bg-slate-200 rounded-full z-0" />
                            {plan.stages.map((stage, si) => (
                                <div key={si} className="relative z-10 flex flex-col items-center gap-1.5 text-center"
                                    style={{ width: `${100 / plan.stages.length}%` }}>
                                    <div className={`w-4 h-4 rounded-full border-2 bg-white ${si === plan.stages.length - 1 ? 'border-amber-500' : 'border-slate-300'}`} />
                                    <p className="text-[9px] font-black text-slate-950 uppercase tracking-widest">{plan.pct[si]}</p>
                                    <p className="text-[7px] text-slate-400 font-medium leading-tight">{stage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Charges — expandable (IDC, EDC, Lease Rent, Electricity, Club) */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <button onClick={() => setExtraExpanded(!extraExpanded)}
                    className="w-full flex items-center justify-between px-6 py-5 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                            <ReceiptText size={16} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-black text-slate-950">Other Charges</p>
                            <p className="text-[9px] text-slate-400 font-medium">IDC · EDC · Lease Rent · Electricity · Club</p>
                        </div>
                    </div>
                    <ChevronDown size={16} className={`text-slate-400 transition-transform ${extraExpanded ? 'rotate-180' : ''}`} />
                </button>
                {extraExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-100 space-y-0">
                        {[
                            { label: 'Internal Development Charges (IDC)', value: details?.developmentCharges?.idc ?? '—' },
                            { label: 'External Development Charges (EDC)', value: details?.developmentCharges?.edc ?? '—' },
                            { label: 'Lease Rent', value: 'As per authority rates' },
                            { label: 'Electricity Connection Charges', value: 'At actuals (DVVNL / PVVNL)' },
                            { label: 'Club Membership', value: 'Included in base price' },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-3.5 border-b border-slate-50 last:border-0">
                                <p className="text-xs font-bold text-slate-600">{item.label}</p>
                                <p className="text-xs font-black text-slate-950">{item.value}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* PLC chips — Park Facing, Corner, Road Facing, East Facing */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Preferential Location Charges</h3>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">PLC</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Additional one-time charge based on plot orientation and position within the township</p>
                <div className="flex flex-wrap gap-2.5">
                    {(details?.plcOptions?.length ? details.plcOptions : [
                        'Park Facing (+15%)',
                        'Corner Plot (+12%)',
                        'Road Facing (24m+) (+8%)',
                        'East Facing (+5%)',
                    ]).map((opt, i) => {
                        const c = PLC_COLOURS[i % PLC_COLOURS.length];
                        return (
                            <span key={i}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${c.bg} ${c.border} ${c.text}`}>
                                <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                                {opt}
                            </span>
                        );
                    })}
                </div>
                <p className="text-[8px] italic text-slate-400 font-medium">* PLC is one-time. Values confirmed at time of plot allotment.</p>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 5. CONFIGURATION — same slot as "Configuration"; blocks replace towers
    // ════════════════════════════════════════════════════════════════════════════

    const renderConfiguration = () => (
        <div className="space-y-6">
            <SectionHeader title="Plot Configuration" />

            {/* 3 stat cards — mirrors Towers / Floors / Units per Floor */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Total Blocks', val: `${layout.length}`, icon: Layers },
                    { label: 'Total Plots', val: `${totalPlots}`, icon: Grid3x3 },
                    {
                        label: 'Plots / Block', val: layout.length > 0
                            ? `${Math.round(totalPlots / layout.length)}`
                            : '—', icon: LayoutGrid
                    },
                ].map((c, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl text-center shadow-sm hover:border-amber-200 transition-colors group">
                        <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                            <c.icon size={20} />
                        </div>
                        <p className="text-3xl font-black text-slate-950 tracking-tighter mb-1">{c.val}</p>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{c.label}</p>
                    </div>
                ))}
            </div>

            {/* Block inventory — mirrors "Unit Distribution" */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Block Distribution</h3>
                <div className="space-y-3">
                    {layout.map((block, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 hover:border-amber-100 transition-colors">
                            {/* Block letter badge */}
                            <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center text-amber-700 font-black text-xs shrink-0">
                                {String.fromCharCode(65 + i)}
                            </div>
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-black text-slate-950">{block.blockName}</p>
                                <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                                    <Move size={10} className="text-amber-400" /> {block.dimensions}
                                </p>
                            </div>
                            {/* Count */}
                            <div className="text-right shrink-0">
                                <p className="text-base font-black text-slate-950">{block.plotsPerBlock}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Plots</p>
                            </div>
                            {/* Progress bar */}
                            <div className="w-20 shrink-0 hidden sm:block">
                                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-400 rounded-full transition-all"
                                        style={{ width: `${Math.round((block.plotsPerBlock / totalPlots) * 100)}%` }} />
                                </div>
                                <p className="text-[8px] text-slate-400 mt-0.5 text-right">
                                    {Math.round((block.plotsPerBlock / totalPlots) * 100)}%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Site Plan thumbnail */}
            <div className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
                onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                <img
                    src={details?.plans?.blockPlans?.[0] ?? images[0]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                    alt="Site Plan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                        <p className="text-white font-black text-sm">{project.title} — Master Layout</p>
                        <p className="text-white/60 text-[10px] font-medium">{project.location}</p>
                    </div>
                    <button className="bg-white/10 backdrop-blur border border-white/20 text-white text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1">
                        <Maximize2 size={11} /> Expand
                    </button>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center justify-center">
                    <Compass size={16} className="text-white" />
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 6. AMENITIES — identical to ProjectDetailView, amber accent
    // ════════════════════════════════════════════════════════════════════════════

    const renderAmenities = () => {
        const feats = details?.communityFeatures ?? [];
        const shown = amenitiesExpanded ? feats : feats.slice(0, 8);
        return (
            <div className="space-y-6">
                <SectionHeader title="Community Amenities"
                    badge={<span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">{feats.length} Total</span>}
                />
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {shown.map((feat, i) => {
                        const Icon = AMENITY_ICONS[i % AMENITY_ICONS.length];
                        return (
                            <div key={i} className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center gap-3 aspect-square text-center shadow-sm hover:border-amber-200 hover:shadow-md transition-all group">
                                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 group-hover:bg-amber-100 transition-colors">
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
    // 7. SPECIFICATIONS — same slot; plot-specific specs (replaces interiors)
    // ════════════════════════════════════════════════════════════════════════════

    const renderSpecifications = () => {
        const plotSpecs = [
            { title: 'Road Width', desc: 'Internal roads: 24 ft (main), 18 ft (secondary). Fully black-topped and kerb-lined with proper drainage slopes.' },
            { title: 'Boundary Wall', desc: 'Perimeter compound wall with RCC posts and brick infill. Boundary markers provided for each plot at registry.' },
            { title: 'Underground Utilities', desc: 'Water supply, sewerage, electrical conduits, and optical fibre ducts laid underground in dedicated corridors.' },
            { title: 'Street Lighting', desc: 'Solar-integrated LED luminaires at 15 m spacing. Emergency backup power for common areas.' },
            { title: 'Drainage', desc: 'Storm-water drains with trapezoidal sections. Rainwater harvesting pits at 200 m intervals across the layout.' },
            { title: 'Plot Markings', desc: 'Pre-cast corner stones permanently embedded. Individual plot IDs painted for easy identification.' },
        ];
        return (
            <div className="space-y-6">
                <SectionHeader title="Plot Specifications" />
                <div className="space-y-3">
                    {plotSpecs.map((spec, i) => (
                        <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors">
                            <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                                <CheckCircle2 size={16} className="text-amber-600" />
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
    // 8. LOCATION — identical to ProjectDetailView
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
                    <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
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
                    { dest: 'Expressway / Highway', time: '2 Min Drive' },
                    { dest: 'Nearest Metro Station', time: '8 Min Drive' },
                    { dest: 'International Airport', time: '25 Min Drive' },
                    { dest: 'City Centre / Mall', time: '15 Min Drive' },
                    { dest: 'School & Hospital', time: '10 Min Drive' },
                    { dest: 'IT / Business Park', time: '12 Min Drive' },
                ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                            <Navigation2 size={16} />
                        </div>
                        <div>
                            <p className="text-[9px] text-amber-600 font-black uppercase tracking-widest mb-0.5">{loc.time}</p>
                            <p className="text-sm text-slate-950 font-black">{loc.dest}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // 9. BUILDER — identical to ProjectDetailView; adds dual-RERA cards
    // ════════════════════════════════════════════════════════════════════════════

    const renderBuilder = () => (
        <div className="space-y-6">
            <SectionHeader title="Builder Information"
                badge={
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                        <ShieldCheck size={12} /> RERA Verified
                    </div>
                }
            />
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black text-xl shrink-0">
                        {project.developer?.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-950">{project.developer}</h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">Established Developer · 20+ Years</p>
                    </div>
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {project.developer} has a proven legacy of delivering RERA-compliant plotted townships with clear land titles, robust infrastructure, and on-time registry — trusted by thousands of plot owners across India.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                        { label: 'Plots Delivered', value: '5K+', icon: Grid3x3 },
                        { label: 'Years', value: '20+', icon: Award },
                        { label: 'Happy Families', value: '10K+', icon: Users },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                            <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center text-amber-600 mb-2 shadow-sm">
                                <stat.icon size={14} />
                            </div>
                            <p className="text-base font-black text-slate-950">{stat.value}</p>
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 shrink-0">
                    <ShieldCheck size={22} />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-0.5">Builder RERA</p>
                    <p className="text-sm font-black text-slate-950 font-mono">{details?.builderRera ?? '—'}</p>
                </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                    <BadgeCheck size={22} />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-0.5">Project RERA</p>
                    <p className="text-sm font-black text-slate-950 font-mono">{details?.projectRera ?? '—'}</p>
                </div>
            </div>
        </div>
    );

    // ════════════════════════════════════════════════════════════════════════════
    // SECTION SWITCH
    // ════════════════════════════════════════════════════════════════════════════

    const renderSection = () => {
        switch (activeSection) {
            case 'overview': return renderOverview();
            case 'gallery': return renderGallery();
            case 'plot-details': return renderPlotDetails();
            case 'pricing': return renderPricing();
            case 'configuration': return renderConfiguration();
            case 'amenities': return renderAmenities();
            case 'specifications': return renderSpecifications();
            case 'location': return renderLocation();
            case 'builder': return renderBuilder();
        }
    };

    // ════════════════════════════════════════════════════════════════════════════
    // SHELL — pixel-identical to ProjectDetailView shell
    // ════════════════════════════════════════════════════════════════════════════

    return (
        <div className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto no-scrollbar font-sans">

            {/* ── Top Header Bar — identical markup ── */}
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

            {/* ── Main Two-Column Layout — identical to ProjectDetailView ── */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-5">
                <div className="flex gap-5 items-start">

                    {/* ═══ LEFT: Sticky sidebar — same width, same structure ═══ */}
                    <aside className="hidden md:flex flex-col w-52 shrink-0 sticky top-[68px] self-start">
                        <div className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm space-y-0.5">
                            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                <button key={id} onClick={() => navigateTo(id)}
                                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left transition-all group text-[10px] font-black uppercase tracking-wider relative ${activeSection === id
                                        ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                        }`}>
                                    <Icon size={14} className={activeSection === id ? 'text-white' : 'text-slate-400 group-hover:text-slate-600 transition-colors'} />
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Status + type badge — same card as ProjectDetailView */}
                        <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Possession Status</p>
                            {possessionStatusKey === 'ready_to_move' ? (
                                <div className="flex items-center gap-2 px-2.5 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                                        {details?.expectedPossession === 'Ready to Registry' ? 'Ready to Registry' : 'Ready to Move'}
                                    </span>
                                </div>
                            ) : (
                                <PossessionBadge statusKey={possessionStatusKey} date={possessionDate} size="sm" />
                            )}
                            <PropertyTypeBadge type="Plot" size="sm" />
                        </div>

                        {/* Sticky CTAs — identical pattern */}
                        <div className="mt-4 space-y-2">
                            <button className="w-full h-11 bg-amber-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-colors active:scale-95">
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

                    {/* ═══ RIGHT: Dynamic content area — identical wrapper ═══ */}
                    <main className="flex-1 min-w-0 pb-32 md:pb-6">
                        {/* Mobile section picker */}
                        <div className="md:hidden mb-4 overflow-x-auto no-scrollbar">
                            <div className="flex gap-2 pb-1">
                                {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                    <button key={id} onClick={() => navigateTo(id)}
                                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${activeSection === id
                                            ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                                            : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
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

            {/* ── Mobile Sticky CTA Bar — identical to ProjectDetailView ── */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-100 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
                <div className="flex gap-2.5">
                    <button onClick={() => setIsFavorited(!isFavorited)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all shrink-0 ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                        <Heart size={16} className={isFavorited ? 'fill-rose-500' : ''} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-500 rounded-xl transition-colors hover:bg-slate-100 shrink-0">
                        <Download size={16} />
                    </button>
                    <button className="flex-1 h-12 bg-amber-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 active:scale-95 hover:bg-amber-600 transition-all">
                        <CalendarClock size={14} /> Schedule Visit
                    </button>
                </div>
            </div>

            {/* Media Modal */}
            {mediaModalConfig.isOpen && (
                <MediaModal
                    initialTab={mediaModalConfig.tab}
                    project={project}
                    projectType="Plot"
                    onClose={() => setMediaModalConfig({ ...mediaModalConfig, isOpen: false })}
                />
            )}
        </div>
    );
};

export default PlotProjectDetailView;
