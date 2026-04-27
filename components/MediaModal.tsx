import React, { useState, useEffect } from 'react';
import {
    X, ZoomIn, ZoomOut, Download, Share2, Heart,
    CalendarClock, MessageCircle, Lock, Compass, Scaling,
    Tag, ChevronLeft, ChevronRight, Image as ImageIcon,
    LayoutDashboard, Grid3x3, Move, Maximize2
} from 'lucide-react';

// ─── Props ────────────────────────────────────────────────────────────────────

interface MediaModalProps {
    initialTab?: 'photos' | 'plans';
    project: any;
    selectedUnit?: any;
    projectType?: string;   // 'Plot' → switches plans tab to Block Plan mode
    onClose: () => void;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const MediaModal: React.FC<MediaModalProps> = ({
    initialTab = 'photos',
    project,
    selectedUnit = null,
    projectType,
    onClose
}) => {
    const isPlot = projectType === 'Plot' || project?.type === 'Plot';
    const isAgricultural = projectType === 'Agricultural' || project?.type === 'Agricultural';
    const isLandMode = isPlot || isAgricultural;

    // ── Tab state ──
    const [activeTab, setActiveTab] = useState<'photos' | 'plans'>(initialTab);

    // ── Photo gallery ──
    const allImages = project?.galleryImages?.length ? project.galleryImages : [project?.imageUrl].filter(Boolean);
    const [photoIndex, setPhotoIndex] = useState(0);

    // ── Residential: floor plan state ──
    const allUnits = project?.details?.accommodation || [];
    const [activeUnit, setActiveUnit] = useState(selectedUnit || allUnits[0] || {});

    // ── Plot: block plan state ──
    const plotLayout  = project?.details?.layout || [];
    const blockPlans  = project?.details?.plans?.blockPlans || [];
    const clusterPlans = project?.details?.plans?.clusterPlans || [];
    const allBlockImages = [...blockPlans, ...clusterPlans, ...allImages].filter(Boolean);
    const [activeBlockIdx, setActiveBlockIdx] = useState(0);
    const [activeBlock, setActiveBlock] = useState(plotLayout[0] || null);

    // ── Lead gate (only for plans tab) ──
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [mobileNo, setMobileNo] = useState('');

    // If launched with a specific unit, switch to plans tab
    useEffect(() => {
        if (selectedUnit) {
            setActiveTab('plans');
            setActiveUnit(selectedUnit);
        }
    }, [selectedUnit]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (activeTab === 'plans' && !isUnlocked) {
            timer = setTimeout(() => setShowLeadForm(true), 5000);
        } else {
            setShowLeadForm(false);
        }
        return () => clearTimeout(timer);
    }, [activeTab, isUnlocked]);

    // ── Handlers ──
    const handleUnlock = () => {
        if (mobileNo.length >= 10) { setIsUnlocked(true); setShowLeadForm(false); }
    };
    const handlePlanInteraction = () => {
        if (!isUnlocked && activeTab === 'plans') setShowLeadForm(true);
    };
    const handleZoomIn  = () => { handlePlanInteraction(); if (isUnlocked) setZoom(p => Math.min(p + 0.5, 3)); };
    const handleZoomOut = () => { if (isUnlocked) setZoom(p => Math.max(p - 0.5, 1)); };
    const handleNextPhoto = () => setPhotoIndex(p => (p + 1) % allImages.length);
    const handlePrevPhoto = () => setPhotoIndex(p => (p - 1 + allImages.length) % allImages.length);

    // Active block image to display
    const activeBlockImage = allBlockImages[activeBlockIdx] ?? allImages[0];

    // Header subtitle
    const headerTitle = activeTab === 'plans'
        ? isLandMode
            ? (activeBlock ? `${activeBlock.blockName}` : (isAgricultural ? 'Site Plan' : 'Block Layout'))
            : `${activeUnit.type || ''} Plan`
        : 'Visual Gallery';

    const headerSub = activeTab === 'plans'
        ? isLandMode
            ? (activeBlock ? `${activeBlock.dimensions} · ${activeBlock.plotsPerBlock} Plots` : (isAgricultural ? project.details?.totalSize || 'Land Dimensions' : 'Plot Dimensions'))
            : `${activeUnit.size || ''} • Tower A`
        : `${allImages.length} High-Res Photos`;

    // ── RENDER ────────────────────────────────────────────────────────────────

    return (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center md:p-6">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white w-full md:w-[700px] h-[95vh] md:h-[85vh] md:max-h-[850px] rounded-t-[2rem] md:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-slide-up">

                {/* ── 1. Header ── */}
                <div className="px-6 pt-5 pb-4 border-b border-slate-100 z-20 bg-white shadow-sm shrink-0">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-black text-slate-950 tracking-tight leading-none mb-1.5">
                                {headerTitle}
                            </h3>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                                {headerSub}
                            </p>
                        </div>
                        <button onClick={onClose}
                            className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Tab toggle */}
                    <div className="flex bg-slate-100 p-1.5 rounded-xl">
                        <button onClick={() => setActiveTab('photos')}
                            className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === 'photos' ? 'bg-white shadow-sm text-slate-950' : 'text-slate-500 hover:text-slate-700'}`}>
                            <ImageIcon size={14} /> Photos
                        </button>
                        <button onClick={() => setActiveTab('plans')}
                            className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === 'plans' ? 'bg-white shadow-sm text-slate-950' : 'text-slate-500 hover:text-slate-700'}`}>
                            {isLandMode ? <Grid3x3 size={14} /> : <LayoutDashboard size={14} />}
                            {isLandMode ? (isAgricultural ? 'Site Plan' : 'Block Plan') : 'Floor Plans'}
                        </button>
                    </div>
                </div>

                {/* ── 2. Media Area ── */}
                <div className="relative flex-[0.60] md:flex-[0.65] bg-slate-50/80 overflow-hidden border-b border-slate-100 flex flex-col">

                    {/* ENGINE A: Photo Gallery (unchanged) */}
                    {activeTab === 'photos' && (
                        <div className="flex flex-col h-full w-full">
                            <div className="relative flex-1 w-full bg-slate-100 flex items-center justify-center group">
                                <img src={allImages[photoIndex]} alt="Gallery"
                                    className="w-full h-full object-cover transition-opacity duration-300" />
                                <button onClick={handlePrevPhoto}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-950 shadow-md opacity-0 md:group-hover:opacity-100 transition-all hover:scale-105 active:opacity-100">
                                    <ChevronLeft size={20} />
                                </button>
                                <button onClick={handleNextPhoto}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-950 shadow-md opacity-0 md:group-hover:opacity-100 transition-all hover:scale-105 active:opacity-100">
                                    <ChevronRight size={20} />
                                </button>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded-full text-white text-[10px] font-bold tracking-widest shadow-sm">
                                    {photoIndex + 1} / {allImages.length}
                                </div>
                            </div>
                            {/* Thumbnail strip */}
                            <div className="h-24 w-full bg-slate-50 flex gap-2 p-3 overflow-x-auto no-scrollbar border-t border-slate-100 shrink-0">
                                {allImages.map((img: string, i: number) => (
                                    <button key={i} onClick={() => setPhotoIndex(i)}
                                        className={`shrink-0 w-24 h-full rounded-xl overflow-hidden border-2 transition-all ${photoIndex === i ? 'border-emerald-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                                        <img src={img} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ENGINE B-PLOT: Block Plan (replaces Floor Plans for Plot projects) */}
                    {activeTab === 'plans' && isLandMode && (
                        <div className="flex flex-col h-full w-full">
                            {/* Block selector tabs */}
                            <div className="flex gap-2 p-3 bg-white border-b border-slate-100 overflow-x-auto no-scrollbar shrink-0 shadow-[0_5px_15px_-10px_rgba(0,0,0,0.1)] z-10">
                                <button
                                    onClick={() => { setActiveBlockIdx(0); setActiveBlock(null); setZoom(1); }}
                                    className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest shrink-0 transition-colors ${activeBlock === null ? 'bg-amber-500 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'}`}>
                                    Master Plan
                                </button>
                                {plotLayout.map((block: any, i: number) => (
                                    <button key={i}
                                        onClick={() => { setActiveBlockIdx(i + 1); setActiveBlock(block); setZoom(1); }}
                                        className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest shrink-0 transition-colors ${activeBlock?.blockName === block.blockName ? 'bg-amber-500 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'}`}>
                                        {block.blockName}
                                    </button>
                                ))}
                            </div>

                            {/* Plan Stage */}
                            <div className="relative flex-1 w-full bg-slate-50/50 flex items-center justify-center p-6">
                                {/* Dimension overlay badge */}
                                {activeBlock && (
                                    <div className="absolute top-4 left-4 z-10 bg-white border border-amber-200 rounded-xl px-3 py-2 shadow-md">
                                        <p className="text-[8px] font-black text-amber-600 uppercase tracking-widest mb-0.5">Dimensions</p>
                                        <p className="text-sm font-black text-slate-950 flex items-center gap-1.5">
                                            <Move size={13} className="text-amber-500" /> {activeBlock.dimensions}
                                        </p>
                                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">{activeBlock.plotsPerBlock} plots available</p>
                                    </div>
                                )}

                                {/* Image with zoom + blur-gate */}
                                <div
                                    className={`transition-all duration-700 ease-in-out w-full h-full flex items-center justify-center ${(!isUnlocked && showLeadForm) ? 'blur-md scale-95 opacity-40' : ''}`}
                                    style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
                                    <img
                                        src={activeBlockImage}
                                        alt={activeBlock ? `${activeBlock.blockName} Layout` : 'Master Plan'}
                                        className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-xl"
                                    />
                                </div>

                                {/* Zoom controls */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                                    <button onClick={handleZoomIn}
                                        className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 transition-all">
                                        <ZoomIn size={18} />
                                    </button>
                                    <button onClick={handleZoomOut}
                                        className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 transition-all">
                                        <ZoomOut size={18} />
                                    </button>
                                    <button onClick={handlePlanInteraction}
                                        className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 transition-all">
                                        <Maximize2 size={16} />
                                    </button>
                                </div>

                                {/* Lead gate overlay */}
                                {(!isUnlocked && showLeadForm) && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center p-4 bg-white/30 backdrop-blur-[2px]">
                                        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-[340px] text-center space-y-5">
                                            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto border border-amber-100">
                                                <Lock size={24} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <h4 className="text-xl font-black text-slate-950 tracking-tight">Unlock Block Plan</h4>
                                                <p className="text-[11px] text-slate-500 font-medium px-2 leading-relaxed">Enter your number to view detailed block plans, plot dimensions and site layouts.</p>
                                            </div>
                                            <div className="space-y-3 pt-2">
                                                <div className="flex bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-amber-500 transition-all shadow-inner">
                                                    <div className="px-4 py-3.5 border-r border-slate-200 text-sm font-bold text-slate-500 bg-white">+91</div>
                                                    <input type="tel" placeholder="Mobile Number"
                                                        className="w-full bg-transparent px-4 py-3.5 text-sm font-bold text-slate-950 outline-none placeholder:text-slate-400"
                                                        value={mobileNo}
                                                        onChange={e => setMobileNo(e.target.value.replace(/\D/g, '').slice(0, 10))} />
                                                </div>
                                                <button onClick={handleUnlock} disabled={mobileNo.length < 10}
                                                    className="w-full h-12 bg-slate-950 text-white rounded-xl font-black uppercase tracking-widest text-[10px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors shadow-md">
                                                    Unlock Instantly
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-px bg-slate-100" />
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">OR</span>
                                                <div className="flex-1 h-px bg-slate-100" />
                                            </div>
                                            <button onClick={() => setIsUnlocked(true)}
                                                className="w-full h-12 bg-[#25D366]/10 text-[#128C7E] rounded-xl font-black uppercase tracking-wide text-[10px] flex justify-center items-center gap-2 hover:bg-[#25D366]/20 transition-colors">
                                                <MessageCircle size={16} /> Continue via WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Block plan thumbnail strip */}
                            {allBlockImages.length > 1 && (
                                <div className="h-20 w-full bg-slate-50 flex gap-2 p-2.5 overflow-x-auto no-scrollbar border-t border-slate-100 shrink-0">
                                    {allBlockImages.map((img: string, i: number) => (
                                        <button key={i}
                                            onClick={() => {
                                                setActiveBlockIdx(i);
                                                setActiveBlock(i === 0 ? null : plotLayout[i - 1] ?? null);
                                                setZoom(1);
                                            }}
                                            className={`shrink-0 w-20 h-full rounded-lg overflow-hidden border-2 transition-all ${activeBlockIdx === i ? 'border-amber-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                                            <img src={img} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* ENGINE B-RESIDENTIAL: Floor Plans (unchanged) */}
                    {activeTab === 'plans' && !isLandMode && (
                        <div className="flex flex-col h-full w-full">
                            {/* Unit Sub-Nav */}
                            <div className="flex gap-2 p-3 bg-white border-b border-slate-100 overflow-x-auto no-scrollbar shrink-0 shadow-[0_5px_15px_-10px_rgba(0,0,0,0.1)] z-10">
                                {allUnits.map((u: any, i: number) => (
                                    <button key={i} onClick={() => { setActiveUnit(u); setZoom(1); }}
                                        className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest shrink-0 transition-colors ${activeUnit.type === u.type ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'}`}>
                                        {u.type}
                                    </button>
                                ))}
                            </div>
                            {/* Plan Stage */}
                            <div className="relative flex-1 w-full bg-slate-50/50 flex items-center justify-center p-6">
                                <div
                                    className={`transition-all duration-700 ease-in-out w-full h-full flex items-center justify-center ${(!isUnlocked && showLeadForm) ? 'blur-md scale-95 opacity-40' : ''}`}
                                    style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
                                    <img
                                        src={activeUnit.floorPlanUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070"}
                                        alt={`${activeUnit.type} Layout`}
                                        className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-xl"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                                    <button onClick={handleZoomIn}
                                        className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all">
                                        <ZoomIn size={18} />
                                    </button>
                                    <button onClick={handleZoomOut}
                                        className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all">
                                        <ZoomOut size={18} />
                                    </button>
                                </div>
                                {(!isUnlocked && showLeadForm) && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center p-4 bg-white/30 backdrop-blur-[2px]">
                                        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-[340px] text-center space-y-5">
                                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
                                                <Lock size={24} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <h4 className="text-xl font-black text-slate-950 tracking-tight">Unlock HD Plan</h4>
                                                <p className="text-[11px] text-slate-500 font-medium px-2 leading-relaxed">Enter your number to view high-res floor plans and dimension details.</p>
                                            </div>
                                            <div className="space-y-3 pt-2">
                                                <div className="flex bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-emerald-500 transition-all shadow-inner">
                                                    <div className="px-4 py-3.5 border-r border-slate-200 text-sm font-bold text-slate-500 bg-white">+91</div>
                                                    <input type="tel" placeholder="Mobile Number"
                                                        className="w-full bg-transparent px-4 py-3.5 text-sm font-bold text-slate-950 outline-none placeholder:text-slate-400"
                                                        value={mobileNo}
                                                        onChange={e => setMobileNo(e.target.value.replace(/\D/g, '').slice(0, 10))} />
                                                </div>
                                                <button onClick={handleUnlock} disabled={mobileNo.length < 10}
                                                    className="w-full h-12 bg-slate-950 text-white rounded-xl font-black uppercase tracking-widest text-[10px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors shadow-md">
                                                    Unlock instantly
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-px bg-slate-100" />
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">OR</span>
                                                <div className="flex-1 h-px bg-slate-100" />
                                            </div>
                                            <button onClick={() => setIsUnlocked(true)}
                                                className="w-full h-12 bg-[#25D366]/10 text-[#128C7E] rounded-xl font-black uppercase tracking-wide text-[10px] flex justify-center items-center gap-2 hover:bg-[#25D366]/20 transition-colors">
                                                <MessageCircle size={16} /> Continue via WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── 3. Bottom Info + CTAs ── */}
                <div className="bg-white flex flex-col p-6 z-20 flex-[0.40] md:flex-[0.35] min-h-0 overflow-y-auto w-full max-w-xl mx-auto">

                    {/* Info chips */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-6">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 shadow-sm shrink-0">
                            <Tag size={13} className={isLandMode ? (isAgricultural ? 'text-emerald-500' : 'text-amber-500') : 'text-emerald-600'} />
                            <span className="text-xs font-black">
                                {activeTab === 'plans'
                                    ? (isLandMode
                                        ? (project?.details?.pricePerUnit ?? project?.priceRange)
                                        : activeUnit.price)
                                    : project?.priceRange}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 shadow-sm shrink-0">
                            {isLandMode ? <Move size={13} className={isAgricultural ? 'text-emerald-500' : 'text-amber-500'} /> : <Scaling size={13} className="text-slate-400" />}
                            <span className="text-[11px] font-bold uppercase">
                                {activeTab === 'plans'
                                    ? (isLandMode
                                        ? (activeBlock?.dimensions ?? (isAgricultural ? 'Site Dimension' : 'Plot Dimensions'))
                                        : activeUnit.size)
                                    : (isLandMode ? (isAgricultural ? 'Agricultural Land' : 'Plotted Development') : 'From 1250 sqft')}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 shadow-sm shrink-0">
                            <Compass size={13} className="text-slate-400" />
                            <span className="text-[11px] font-bold uppercase">
                                {isLandMode ? (isAgricultural ? 'Verified Land' : 'RERA Verified') : 'East/North'}
                            </span>
                        </div>
                    </div>

                    {/* Secondary actions */}
                    <div className="flex items-center justify-center gap-8 mb-auto pb-4">
                        <button onClick={handlePlanInteraction}
                            className={`flex flex-col items-center gap-1.5 transition-colors ${(activeTab === 'plans' && !isUnlocked) ? 'text-slate-300' : 'text-slate-500 hover:text-slate-950'}`}>
                            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50">
                                <Download size={18} />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Save</span>
                        </button>
                        <button className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-950 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50">
                                <Share2 size={18} />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Share</span>
                        </button>
                        <button className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-rose-500 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50">
                                <Heart size={18} />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Shortlist</span>
                        </button>
                    </div>

                    {/* Primary CTAs */}
                    <div className="flex flex-col gap-2.5 mt-2 w-full">
                        <button className={`w-full h-14 text-white rounded-[1.25rem] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform hover:opacity-90 ${isLandMode ? (isAgricultural ? 'bg-[#2FED9A] shadow-[#2FED9A]/25 text-slate-950' : 'bg-amber-500 shadow-amber-500/25') : 'bg-slate-950 shadow-slate-950/20'}`}>
                            <CalendarClock size={16} /> Schedule Visit
                        </button>
                        <button className="w-full h-12 bg-white text-[#128C7E] font-bold text-[11px] uppercase tracking-widest flex justify-center items-center gap-2 hover:bg-slate-50 rounded-xl transition-colors border border-slate-100">
                            <MessageCircle size={16} /> Contact via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaModal;
