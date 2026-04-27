import React, { useState } from 'react';
import {
    ArrowLeft, Building2, MapPin, Heart, Share2,
    Maximize2, ChevronDown, Phone, MessageCircle,
    Navigation2, Layers, LayoutGrid, CalendarClock,
    Zap, CheckCircle2, Image as ImageIcon, Info,
    ShieldCheck, LayoutDashboard,
    Award, Users, Home, Map as MapIcon,
    Eye, DollarSign, Sliders, Sparkles, FileText,
    Download, HardHat
} from 'lucide-react';
import { Project, ResidentialProjectDetails } from '../types';
import MediaModal from './MediaModal';
import { PossessionBadge, PropertyTypeBadge } from './PropertyBadge';
import { legacyStatusToKey } from '../services/propertyConstants';
import PropertyStatusStrip from './PropertyStatusStrip';

interface ProjectDetailViewProps {
    project: Project;
    onBack: () => void;
}

type NavSection = 'overview' | 'gallery' | 'floorplans' | 'pricing' | 'configuration' | 'amenities' | 'specifications' | 'location' | 'builder';

const NAV_ITEMS: { id: NavSection; label: string; icon: React.FC<any> }[] = [
    { id: 'overview',       label: 'Overview',         icon: Home },
    { id: 'gallery',        label: 'Gallery',          icon: ImageIcon },
    { id: 'floorplans',     label: 'Floor Plans',      icon: LayoutDashboard },
    { id: 'pricing',        label: 'Pricing',          icon: DollarSign },
    { id: 'configuration',  label: 'Configuration',    icon: Sliders },
    { id: 'amenities',      label: 'Amenities',        icon: Sparkles },
    { id: 'specifications', label: 'Specifications',   icon: FileText },
    { id: 'location',       label: 'Location',         icon: MapIcon },
    { id: 'builder',        label: 'Builder Info',     icon: Award },
];

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
    const [activeSection, setActiveSection] = useState<NavSection>('overview');
    const [activeUnitTab, setActiveUnitTab] = useState('All');
    const [priceExpanded, setPriceExpanded] = useState(false);
    const [aboutExpanded, setAboutExpanded] = useState(false);
    const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [galleryFilter, setGalleryFilter] = useState<'all' | 'exterior' | 'interior' | 'amenities'>('all');
    const [mediaModalConfig, setMediaModalConfig] = useState<{ isOpen: boolean; tab: 'photos' | 'plans'; unit?: any }>({ isOpen: false, tab: 'photos' });

    const resDetails = project.details as ResidentialProjectDetails;
    const units = resDetails?.accommodation || [];
    const images = project.galleryImages || [project.imageUrl];
    const filteredUnits = activeUnitTab === 'All' ? units : units.filter(u => u.type.includes(activeUnitTab));

    const possessionStatusKey = legacyStatusToKey(project.status ?? '');
    const possessionDate = resDetails?.expectedPossession || project.completionDate || undefined;

    const navigateTo = (id: NavSection) => {
        setActiveSection(id);
        // On mobile, scroll to top of content
        if (window.innerWidth < 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // ─── SECTION RENDERERS ─────────────────────────────────────────────────────

    const SectionHeader = ({ title, badge }: { title: string; badge?: React.ReactNode }) => (
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight">{title}</h2>
            {badge}
        </div>
    );

    const renderOverview = () => {
        const hasEnough = images.length >= 3;
        return (
            <div className="space-y-8">
                {/* Title */}
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-950 leading-tight tracking-tight">{project.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <p className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                            <MapPin size={16} className="text-emerald-600 shrink-0" />
                            <span className="font-bold text-slate-950">{project.developer}</span> · {project.location}
                        </p>
                        <div className="text-right">
                            <p className="text-3xl font-black text-slate-950 tracking-tighter">{project.priceRange}</p>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Starting Price</p>
                        </div>
                    </div>
                </div>

                {/* Asymmetric Gallery Preview */}
                <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-2 h-[380px] rounded-2xl overflow-hidden cursor-pointer">
                    <div className="col-span-3 row-span-2 relative group overflow-hidden" onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    {hasEnough ? (
                        <>
                            <div className="col-span-2 row-span-1 relative group overflow-hidden" onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                                <img src={images[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                            </div>
                            <div className="col-span-2 row-span-1 relative group overflow-hidden" onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                                <img src={images[2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                                <button
                                    onClick={e => { e.stopPropagation(); setMediaModalConfig({ isOpen: true, tab: 'photos' }); }}
                                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-md hover:bg-white transition-all"
                                >
                                    <ImageIcon size={12} /> View All {images.length}+
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="col-span-2 row-span-2 bg-slate-50 flex items-center justify-center cursor-pointer" onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                            <ImageIcon size={28} className="text-slate-300" />
                        </div>
                    )}
                </div>

                {/* Mobile image */}
                <div className="md:hidden relative h-64 rounded-xl overflow-hidden cursor-pointer" onClick={() => setMediaModalConfig({ isOpen: true, tab: 'photos' })}>
                    <img src={images[0]} className="w-full h-full object-cover" alt="" />
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur flex items-center gap-1">
                        <ImageIcon size={11} /> Gallery
                    </div>
                </div>

                {/* ── PROPERTY STATUS STRIP (floats below gallery) ─── */}
                <PropertyStatusStrip
                    projectType={project.type}
                    projectStatus={project.status}
                    possessionDate={resDetails?.expectedPossession || project.completionDate}
                    reraId={resDetails?.reraNumber || (resDetails as any)?.reraId}
                    reraVerified={!!resDetails?.reraNumber || !!(resDetails as any)?.reraId}
                    floating={false}
                />

                {/* Highlights / Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { label: 'Towers', value: resDetails?.towerAnalytics?.names?.length || '7' },
                        { label: 'Total Units', value: project.units || '800' },
                        { label: 'Plot Size', value: resDetails?.plotSize || '12 Acres' },
                        { label: 'Base Rate', value: resDetails?.bsp || '₹14,500/sqft' },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-emerald-200 transition-colors">
                            <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black mb-2">{item.label}</p>
                            <p className="text-lg font-black text-slate-950 tracking-tight">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* About snippet */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-slate-950 uppercase tracking-widest">About Project</h3>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                            <ShieldCheck size={13} /> RERA
                        </div>
                    </div>
                    <p className={`text-sm text-slate-600 font-medium leading-relaxed ${aboutExpanded ? '' : 'line-clamp-3'}`}>
                        {resDetails?.projectProfile} {resDetails?.aboutBuilder}
                    </p>
                    <button onClick={() => setAboutExpanded(!aboutExpanded)} className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                        {aboutExpanded ? 'Read Less' : 'Read More'} <ChevronDown size={14} className={`transition-transform ${aboutExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>


            </div>
        );
    };

    const renderGallery = () => (
        <div className="space-y-6">
            <SectionHeader title="Photo Gallery" />
            {/* Category Filters */}
            <div className="flex gap-2 flex-wrap">
                {(['all', 'exterior', 'interior', 'amenities'] as const).map(f => (
                    <button key={f} onClick={() => setGalleryFilter(f)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${galleryFilter === f ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                        {f === 'all' ? 'All Photos' : f}
                    </button>
                ))}
            </div>
            {/* Image Grid */}
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

    const renderFloorPlans = () => (
        <div className="space-y-6">
            <SectionHeader title="Floor Plans" />
            {/* Unit Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {['All', '2 BHK', '3 BHK', '4 BHK'].map(tab => (
                    <button key={tab} onClick={() => setActiveUnitTab(tab)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeUnitTab === tab ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                        {tab}
                    </button>
                ))}
            </div>
            {/* Unit Cards */}
            <div className="space-y-4">
                {filteredUnits.length > 0 ? filteredUnits.map((unit, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                        <div className="w-full sm:w-36 h-36 bg-slate-50 rounded-xl overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center p-4">
                            <img src={unit.floorPlanUrl} className="w-full h-full object-contain mix-blend-multiply opacity-80" alt="Layout" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-black text-slate-950 leading-none mb-2">{unit.type}</h4>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{unit.size}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-xl font-black text-emerald-600">{unit.price}</p>
                                <button onClick={() => setMediaModalConfig({ isOpen: true, tab: 'plans', unit })}
                                    className="text-[10px] font-black uppercase tracking-widest text-white bg-slate-950 px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2">
                                    <Eye size={14} /> View Plan
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
                        <Info size={24} className="text-slate-300" />
                        <p className="text-sm font-bold text-slate-400">No units match this filter.</p>
                    </div>
                )}
            </div>
        </div>
    );

    const renderPricing = () => (
        <div className="space-y-6">
            <SectionHeader title="Pricing & Payment" />
            {/* Price Display Card */}
            <div className="bg-slate-950 text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-black mb-3">Starting Price</p>
                    <p className="text-5xl font-black tracking-tighter mb-2">{project.priceRange}</p>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">@ {resDetails?.bsp || '₹14,500'} / sqft</p>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <button onClick={() => setPriceExpanded(!priceExpanded)}
                            className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                            Price Breakdown <ChevronDown size={16} className={`transition-transform ${priceExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {priceExpanded && (
                            <div className="mt-5 space-y-3 bg-white/5 p-5 rounded-xl border border-white/10 animate-slide-down">
                                {[
                                    { label: 'Basic Cost', value: '₹ 2.40 Cr' },
                                    { label: 'Club Membership', value: resDetails?.surcharges?.clubMembership || '₹ 5.0 L' },
                                    { label: 'Taxes & Charges', value: 'Extra as actuals', highlight: true },
                                ].map((row, i) => (
                                    <div key={i} className={`flex justify-between text-[11px] ${i < 2 ? 'pb-3 border-b border-white/10' : ''}`}>
                                        <span className={`font-bold uppercase tracking-widest ${row.highlight ? 'text-emerald-400' : 'text-white/50'}`}>{row.label}</span>
                                        <span className={`font-black ${row.highlight ? 'text-emerald-400' : ''}`}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Payment Timeline */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Payment Plan</h3>
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500">CLP</span>
                </div>
                <div className="relative pl-8">
                    <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-slate-100 rounded-full" />
                    {[
                        { step: '10%', event: 'On Booking' },
                        { step: '20%', event: 'On Excavation' },
                        { step: '30%', event: 'Structure Ready' },
                        { step: '40%', event: 'On Possession', highlight: true },
                    ].map((ms, i) => (
                        <div key={i} className="relative flex items-center justify-between py-4 group">
                            <div className={`absolute -left-[30px] w-5 h-5 rounded-full border-4 bg-white transition-colors ${ms.highlight ? 'border-emerald-500' : 'border-slate-200 group-hover:border-slate-400'}`} />
                            <p className="text-sm font-bold text-slate-600">{ms.event}</p>
                            <p className={`text-lg font-black ${ms.highlight ? 'text-emerald-600' : 'text-slate-950'}`}>{ms.step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderConfiguration = () => (
        <div className="space-y-6">
            <SectionHeader title="Project Configuration" />
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Towers', val: resDetails?.towerAnalytics?.names?.length || '7', icon: Layers },
                    { label: 'Floors', val: resDetails?.towerAnalytics?.totalFloors || '32', icon: Building2 },
                    { label: 'Units / Floor', val: resDetails?.towerAnalytics?.flatsPerFloor || '4', icon: LayoutGrid },
                ].map((c, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl text-center shadow-sm hover:border-emerald-200 transition-colors group">
                        <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                            <c.icon size={20} />
                        </div>
                        <p className="text-3xl font-black text-slate-950 tracking-tighter mb-1">{c.val}</p>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{c.label}</p>
                    </div>
                ))}
            </div>
            {/* Unit Distribution */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Unit Inventory</h3>
                {['2 BHK — 1250 sqft', '3 BHK — 1850 sqft', '4 BHK — 2600 sqft'].map((u, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100">
                        <div className="w-1.5 h-10 bg-emerald-500 rounded-full shrink-0" />
                        <p className="text-sm font-bold text-slate-700">{u}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderAmenities = () => (
        <div className="space-y-6">
            <SectionHeader title="Elite Amenities"
                badge={<span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">{resDetails?.amenities?.length || 0} Total</span>} />
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {(amenitiesExpanded ? resDetails?.amenities : resDetails?.amenities?.slice(0, 8))?.map((amenity, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center gap-3 aspect-square text-center shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                            <Zap size={18} />
                        </div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600 line-clamp-2 leading-tight">{amenity}</p>
                    </div>
                ))}
            </div>
            {(resDetails?.amenities?.length || 0) > 8 && (
                <button onClick={() => setAmenitiesExpanded(!amenitiesExpanded)}
                    className="w-full py-4 rounded-xl border-2 border-dashed border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-400 hover:text-slate-950 transition-all">
                    {amenitiesExpanded ? 'Show Less' : `View All ${resDetails?.amenities?.length} Amenities`}
                </button>
            )}
        </div>
    );

    const renderSpecifications = () => (
        <div className="space-y-6">
            <SectionHeader title="Specifications" />
            <div className="space-y-3">
                {resDetails?.specifications?.length ? resDetails.specifications.map((spec, i) => (
                    <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                            <CheckCircle2 size={16} className="text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-[11px] font-black uppercase tracking-widest text-slate-950 mb-1.5">{spec.title}</p>
                            <p className="text-xs font-medium text-slate-500 leading-relaxed">{spec.desc}</p>
                        </div>
                    </div>
                )) : (
                    <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
                        <FileText size={24} className="text-slate-300" />
                        <p className="text-sm font-bold text-slate-400">Specifications not available.</p>
                    </div>
                )}
            </div>
        </div>
    );

    const renderLocation = () => (
        <div className="space-y-6">
            <SectionHeader title="Location & Connectivity" />
            {/* Map Placeholder */}
            <div className="h-56 md:h-72 rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Map" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                        <MapPin size={24} />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 shadow-sm">
                    {project.location}
                </div>
            </div>
            {/* Distance Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resDetails?.locationAdvantage?.map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-emerald-600">
                            <Navigation2 size={16} />
                        </div>
                        <div>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-0.5">{loc.time}</p>
                            <p className="text-sm text-slate-950 font-black">{loc.destination}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderBuilder = () => (
        <div className="space-y-6">
            <SectionHeader title="Builder Information"
                badge={
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                        <ShieldCheck size={12} /> RERA Verified
                    </div>
                } />
            {/* Builder Card */}
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
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{resDetails?.aboutBuilder || 'A leading real estate developer with a strong track record of delivering premium residential and commercial projects.'}</p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                        { label: 'Projects', value: '50+', icon: Home },
                        { label: 'Years', value: '20+', icon: Award },
                        { label: 'Happy Families', value: '10K+', icon: Users },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                            <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center text-emerald-600 mb-2 shadow-sm">
                                <stat.icon size={14} />
                            </div>
                            <p className="text-base font-black text-slate-950">{stat.value}</p>
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* RERA Details */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 shrink-0">
                    <ShieldCheck size={22} />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-0.5">RERA Registration</p>
                    <p className="text-sm font-black text-slate-950">{resDetails?.reraNumber || (resDetails as any)?.reraId || 'UP-RERA-GBN-2024-XXX'}</p>
                </div>
            </div>
        </div>
    );

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':       return renderOverview();
            case 'gallery':        return renderGallery();
            case 'floorplans':     return renderFloorPlans();
            case 'pricing':        return renderPricing();
            case 'configuration':  return renderConfiguration();
            case 'amenities':      return renderAmenities();
            case 'specifications': return renderSpecifications();
            case 'location':       return renderLocation();
            case 'builder':        return renderBuilder();
        }
    };

    return (
        <div className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto no-scrollbar font-sans">
            {/* Top Header Bar */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-5 h-[60px] flex items-center gap-4">
                    <button onClick={onBack} className="w-9 h-9 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0">
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
                        <button
                            onClick={() => setIsFavorited(!isFavorited)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-500'}`}
                        >
                            <Heart size={15} className={isFavorited ? 'fill-rose-500' : ''} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Two-Column Layout */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-5">
                <div className="flex gap-5 items-start">

                    {/* ═══ LEFT: Sticky Navigation ═══ */}
                    <aside className="hidden md:flex flex-col w-52 shrink-0 sticky top-[68px] self-start">
                        <div className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm space-y-0.5">
                            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => navigateTo(id)}
                                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left transition-all group text-[10px] font-black uppercase tracking-wider relative ${
                                        activeSection === id
                                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                                >
                                    <Icon size={14} className={activeSection === id ? 'text-white' : 'text-slate-400 group-hover:text-slate-600 transition-colors'} />
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Possession badge in sidebar */}
                        <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Possession Status</p>
                            <PossessionBadge statusKey={possessionStatusKey} date={possessionDate} size="sm" />
                            <PropertyTypeBadge type={project.type as any} size="sm" />
                        </div>

                        {/* Sticky CTAs */}
                        <div className="mt-4 space-y-2">
                            <button className="w-full h-11 bg-emerald-600 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-colors active:scale-95">
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

                    {/* ═══ RIGHT: Dynamic Content Area ═══ */}
                    <main className="flex-1 min-w-0 pb-32 md:pb-6">
                        {/* Mobile Section Picker */}
                        <div className="md:hidden mb-4 overflow-x-auto no-scrollbar">
                            <div className="flex gap-2 pb-1">
                                {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                                    <button key={id} onClick={() => navigateTo(id)}
                                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${
                                            activeSection === id
                                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
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

            {/* Mobile Sticky CTA Bar */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-100 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
                <div className="flex gap-2.5">
                    <button
                        onClick={() => setIsFavorited(!isFavorited)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all shrink-0 ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}
                    >
                        <Heart size={16} className={isFavorited ? 'fill-rose-500' : ''} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-500 rounded-xl transition-colors hover:bg-slate-100 shrink-0">
                        <Download size={16} />
                    </button>
                    <button className="flex-1 h-12 bg-emerald-600 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 active:scale-95 hover:bg-emerald-700 transition-all">
                        <CalendarClock size={14} /> Schedule Visit
                    </button>
                </div>
            </div>

            {/* Media Modal */}
            {mediaModalConfig.isOpen && (
                <MediaModal
                    initialTab={mediaModalConfig.tab}
                    project={project}
                    selectedUnit={mediaModalConfig.unit}
                    onClose={() => setMediaModalConfig({ ...mediaModalConfig, isOpen: false })}
                />
            )}
        </div>
    );
};

export default ProjectDetailView;
