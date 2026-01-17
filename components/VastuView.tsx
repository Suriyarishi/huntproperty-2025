import React, { useState } from 'react';
import { 
    Compass, Sparkles, Droplets, Flame, Wind, Mountain, 
    Zap, ChevronRight, Upload, ShieldCheck, 
    Activity, Map as MapIcon, ClipboardCheck, ArrowUpRight,
    FileSearch, CheckCircle2, History, Scale, BookOpen, 
    Cpu, Globe2, ShieldAlert, ChevronDown, Award, ScanFace,
    ChevronLeft, X, Utensils, Bed, Sofa, Bath, Home as HomeIcon, Baby, LayoutGrid,
    MessageSquare, User, Search, Heart, Plus, Camera, Info, TrendingUp, AlertCircle,
    Loader2, Download, Eye, Layers, Box, Globe, Shield, FileText, SearchCode, BarChart3,
    Clock, ArrowRight
} from 'lucide-react';

type VastuViewState = 'home' | 'scan-upload' | 'manual-map' | 'report';

const ROOM_CATEGORIES = [
    { id: 'entrance', label: 'Main Entrance', icon: HomeIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'kitchen', label: 'Kitchen', icon: Utensils, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'master_bedroom', label: 'Master Bedroom', icon: Bed, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'living_room', label: 'Living Room', icon: Sofa, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'bathroom', label: 'Toilet / Bathroom', icon: Bath, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { id: 'puja_room', label: 'Puja Room', icon: Sparkles, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 'kids_room', label: 'Children\'s Room', icon: Baby, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'balcony', label: 'Balcony', icon: LayoutGrid, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const DIRECTION_NODES = [
    'North', 'North-East', 'East', 'South-East',
    'South', 'South-West', 'West', 'North-West'
];

const VastuView = () => {
    const [viewState, setViewState] = useState<VastuViewState>('home');
    const [loading, setLoading] = useState(false);
    const [selections, setSelections] = useState<Record<string, string>>({});

    const handleStartScan = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setViewState('report');
        }, 3000);
    };

    const handleManualAnalyze = async () => {
        if (Object.keys(selections).length === 0) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setViewState('report');
        }, 2000);
    };

    const goBack = () => {
        setViewState('home');
        window.scrollTo(0, 0);
    };

    const toggleSelection = (roomId: string, direction: string) => {
        setSelections(prev => ({ ...prev, [roomId]: direction }));
    };

    const ScreenHeader = ({ title, subtitle, backAction }: { title: string, subtitle: string, backAction?: () => void }) => (
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-4">
                {backAction && (
                    <button 
                        onClick={backAction}
                        className="flex items-center gap-2 text-slate-400 hover:text-red-600 font-black text-[10px] uppercase tracking-[0.2em] transition-all group"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Vastu Intelligence
                    </button>
                )}
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 shadow-lg">
                        <Compass size={24} />
                    </div>
                    <span className="text-xl font-display font-black text-slate-900 uppercase tracking-tight">Vaastu AI</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none">
                    {title}
                </h1>
                <p className="text-slate-500 font-medium text-lg italic">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="h-1.5 w-12 bg-primary rounded-full"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Protocol V.25</span>
            </div>
        </div>
    );

    if (viewState === 'home') {
        return (
            <div className="min-h-screen bg-white pt-32 pb-20 font-sans selection:bg-primary selection:text-slate-900 overflow-hidden">
                {/* Visual Flair Background */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none -mr-32 -mt-32 rotate-12">
                    <Compass size={900} />
                </div>
                <div className="absolute bottom-0 left-0 p-12 opacity-[0.01] pointer-events-none -ml-32 -mb-32">
                    <Layers size={700} />
                </div>

                {/* --- BANNER / HERO SECTION --- */}
                <section className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-12">
                    <div className="flex flex-col items-center gap-6 mb-12">
                        <div className="w-20 h-20 bg-slate-950 rounded-[2rem] flex items-center justify-center text-primary shadow-[0_20px_50px_rgba(47,237,154,0.3)] animate-pulse-glow">
                            <Compass size={40} strokeWidth={2.5} />
                        </div>
                        <span className="text-2xl font-display font-black text-slate-950 uppercase tracking-[0.1em]">Vaastu AI</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-[7.5rem] font-display font-black text-slate-950 uppercase tracking-tighter leading-[0.85] mb-8">
                        Upload your floor plan. <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-800 italic leading-tight">Get instant Vaastu insights.</span>
                    </h1>
                    
                    <p className="text-slate-500 text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed italic border-x-2 border-slate-100 px-12 py-2 mb-16">
                        "We read your floor plan and tell you what's right and wrong — according to Vaastu Shastra."
                    </p>

                    {/* --- CENTRAL UPLOAD HUB --- */}
                    <div className="max-w-4xl mx-auto group">
                        <div 
                            onClick={() => setViewState('scan-upload')}
                            className="bg-slate-950 border-[6px] border-white rounded-[4.5rem] p-16 md:p-24 text-center hover:bg-slate-900 transition-all cursor-pointer relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] group-hover:-translate-y-2 duration-700"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform">
                                <ScanFace size={350} />
                            </div>
                            
                            <div className="space-y-12 relative z-10">
                                <div className="w-24 h-24 bg-primary text-slate-950 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all">
                                    <Upload size={40} strokeWidth={3} />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                                        Drag & drop <span className="text-primary italic">your floor plan</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg font-black uppercase tracking-[0.2em]">or click to upload</p>
                                </div>
                                
                                <div className="flex flex-wrap justify-center gap-4">
                                    {['PNG', 'JPG', 'PDF'].map(fmt => (
                                        <span key={fmt} className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest">{fmt}</span>
                                    ))}
                                    <span className="px-6 py-2 bg-red-600/10 border border-red-600/20 text-red-500 rounded-xl text-[10px] font-black uppercase tracking-widest">• Max 5MB</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-10">
                            {[
                                { t: 'No signup required', i: User },
                                { t: 'Free analysis', i: Sparkles },
                                { t: 'Results in 30 seconds', i: Clock }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:bg-white hover:shadow-md">
                                    <item.i size={18} className="text-emerald-500" />
                                    <span className="text-[11px] font-black uppercase text-slate-900 tracking-widest">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- THE UX CHOICE SECTION: AI SCAN vs MANUAL MAP --- */}
                <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 mb-32 pt-20 border-t border-slate-100">
                     {/* Choice 1: Scan AI */}
                    <div className="group bg-slate-50 rounded-[4rem] p-12 border border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-700 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-[4000ms]"><FileSearch size={300} /></div>
                        <div className="relative z-10 space-y-8">
                            <div className="w-16 h-16 bg-slate-950 text-primary rounded-2xl flex items-center justify-center shadow-xl"><Cpu size={32} /></div>
                            <div>
                                <h3 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Neural AI Scan</h3>
                                <p className="text-slate-500 text-lg leading-relaxed mt-4 font-medium italic">"Fully automated structural node extraction using computer vision."</p>
                            </div>
                            <button onClick={() => setViewState('scan-upload')} className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95 flex items-center gap-4">
                                Start Scan Protocol <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Choice 2: Manual Map */}
                    <div className="group bg-slate-50 rounded-[4rem] p-12 border border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-700 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-[4000ms]"><LayoutGrid size={300} /></div>
                        <div className="relative z-10 space-y-8">
                            <div className="w-16 h-16 bg-white border-2 border-slate-950 text-slate-950 rounded-2xl flex items-center justify-center shadow-xl"><MapIcon size={32} /></div>
                            <div>
                                <h3 className="text-3xl font-display font-black text-slate-950 uppercase tracking-tight">Manual Grid Matrix</h3>
                                <p className="text-slate-500 text-lg leading-relaxed mt-4 font-medium italic">"Manually assign room nodes to cardinal points for verified accuracy."</p>
                            </div>
                            <button onClick={() => setViewState('manual-map')} className="px-10 py-5 border-2 border-slate-950 text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-4">
                                Open Matrix Hub <Plus size={16} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- 3-STEP PROCESS SECTION --- */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Intelligence Sync</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 uppercase tracking-tighter">How it <span className="text-emerald-600">Works</span></h2>
                        </div>
                        <div className="h-px bg-slate-100 flex-1 hidden md:block mx-12"></div>
                        <button onClick={() => setViewState('scan-upload')} className="px-8 py-3 bg-slate-950 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-slate-950 transition-all">Quick Start</button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                    <Upload size={28} />
                                </div>
                                <span className="text-4xl font-display font-black text-slate-50 group-hover:text-red-50/50 transition-colors">01</span>
                            </div>
                            <h3 className="text-[11px] font-black text-red-600 uppercase tracking-[0.4em] mb-4">Step 1</h3>
                            <h4 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight mb-4 leading-tight">Upload your floor plan</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10 flex-1">
                                "Simply drag and drop your floor plan image or PDF. We accept any format - builder blueprints, hand-drawn sketches, or photos. No account needed."
                            </p>
                            <button onClick={() => setViewState('scan-upload')} className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl flex items-center justify-center gap-3">
                                Upload Now <ArrowUpRight size={14} />
                            </button>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-slate-950 p-10 rounded-[3.5rem] shadow-2xl relative flex flex-col h-full group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform"><Cpu size={250} /></div>
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-16 h-16 bg-primary text-slate-950 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                    <SearchCode size={28} />
                                </div>
                                <span className="text-4xl font-display font-black text-white/5">02</span>
                            </div>
                            <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-4">Step 2</h3>
                            <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-4 leading-tight">AI analyzes your layout</h4>
                            <p className="text-slate-300 text-sm font-medium leading-relaxed italic mb-10 flex-1">
                                "Our AI instantly detects rooms, identifies directions, and evaluates each space according to Vaastu Shastra principles. Analysis takes just 30 seconds."
                            </p>
                            <div className="grid grid-cols-1 gap-2">
                                {['🔍 Room Detection', '🧭 Direction Mapping', '⚡ 30s Analysis'].map((f, i) => (
                                    <div key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-slate-200 uppercase tracking-widest">{f}</div>
                                ))}
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                    <BarChart3 size={28} />
                                </div>
                                <span className="text-4xl font-display font-black text-slate-50 group-hover:text-emerald-50/50 transition-colors">03</span>
                            </div>
                            <h3 className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4">Step 3</h3>
                            <h4 className="text-2xl font-display font-black text-slate-950 uppercase tracking-tight mb-4 leading-tight">Get your detailed report</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed italic mb-10 flex-1">
                                "Receive a comprehensive analysis with scores for each direction and room, plus actionable remedies to improve your home's energy flow."
                            </p>
                            <button onClick={() => setViewState('scan-upload')} className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-3">
                                Get Your Free Report <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- FOOTER BADGES --- */}
                <section className="max-w-7xl mx-auto px-6 text-center opacity-30 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-1000">
                    <div className="flex flex-wrap justify-center gap-20 items-center">
                        <div className="flex items-center gap-3"><Globe size={32} /><span className="text-sm font-black uppercase tracking-[0.3em]">Global Node</span></div>
                        <div className="flex items-center gap-3"><Shield size={32} /><span className="text-sm font-black uppercase tracking-[0.3em]">AES-256 SECURE</span></div>
                        <div className="flex items-center gap-3"><Activity size={32} /><span className="text-sm font-black uppercase tracking-[0.3em]">Real-time Sync</span></div>
                        <div className="flex items-center gap-3"><Award size={32} /><span className="text-sm font-black uppercase tracking-[0.3em]">Certified Hub</span></div>
                    </div>
                </section>
            </div>
        );
    }

    if (viewState === 'scan-upload') {
        return (
            <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans overflow-y-auto">
                <ScreenHeader title="Floor Plan Transmission" subtitle="Spatial DNA Extraction Protocol" backAction={goBack} />
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8">
                        <div 
                            onClick={handleStartScan}
                            className="bg-white border-4 border-dashed border-slate-200 rounded-[4rem] p-24 md:p-40 text-center hover:border-primary hover:bg-emerald-50/10 transition-all cursor-pointer group relative overflow-hidden shadow-2xl"
                        >
                            {loading ? (
                                <div className="space-y-10 animate-fade-in-up">
                                    <div className="relative w-32 h-32 mx-auto">
                                        <div className="absolute inset-0 border-8 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-primary"><Cpu size={40} className="animate-pulse" /></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-display font-black text-slate-900 uppercase">Analyzing Spatial Nodes</h3>
                                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] animate-pulse">Syncing with Vedic Registry...</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-10 relative z-10">
                                    <div className="w-24 h-24 bg-slate-950 text-white rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:bg-red-600 transition-all">
                                        <Upload size={40} />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tighter">Drag & drop <br/><span className="text-red-600 italic">your floor plan</span></h2>
                                        <p className="text-slate-500 text-lg font-medium">or click to upload</p>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <span className="px-4 py-2 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 shadow-sm">PNG</span>
                                        <span className="px-4 py-2 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 shadow-sm">JPG</span>
                                        <span className="px-4 py-2 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 shadow-sm">PDF</span>
                                        <span className="px-4 py-2 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 shadow-sm">• Max 5MB</span>
                                    </div>
                                    <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl group-hover:bg-primary group-hover:text-slate-950 transition-colors">Select From System</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-950 rounded-[3rem] p-10 text-white shadow-2xl space-y-8">
                            <h3 className="text-xl font-display font-black uppercase tracking-tight flex items-center gap-4">
                                <Info className="text-primary" /> Intelligence Key
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { t: 'Free Analysis', d: 'Get professional grade Vastu scores at no cost.' },
                                    { t: 'Instant Results', d: 'Gemini 3 Pro decodes layouts in under 30 seconds.' },
                                    { t: 'No Signup', d: 'Start your spatial analysis immediately without an account.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-primary shrink-0">{i+1}</div>
                                        <div>
                                            <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-200 mb-1">{item.t}</h4>
                                            <p className="text-slate-400 text-xs font-medium leading-relaxed italic">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl text-center">
                            <ShieldCheck className="text-emerald-500 mx-auto mb-4" size={40} />
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End-to-End Encrypted Analysis Hub</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (viewState === 'manual-map') {
        return (
            <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-48 font-sans overflow-y-auto">
                <ScreenHeader title="Interactive Matrix" subtitle="Define your property's architectural DNA" backAction={goBack} />
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-6 max-h-[80vh] overflow-y-auto no-scrollbar pr-4">
                        {ROOM_CATEGORIES.map((room) => (
                            <div key={room.id} className="bg-white p-8 rounded-[3.5rem] shadow-sm border border-slate-200 hover:border-primary/40 transition-all duration-500 group flex flex-col md:flex-row items-center gap-8">
                                <div className="flex flex-col items-center gap-4 shrink-0 text-center w-32">
                                    <div className={`w-20 h-20 ${room.bg} ${room.color} rounded-[2rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                                        <room.icon size={36} strokeWidth={1.2} />
                                    </div>
                                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-tight">{room.label}</h4>
                                </div>
                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                                    {DIRECTION_NODES.map((dir) => {
                                        const isSelected = selections[room.id] === dir;
                                        return (
                                            <button
                                                key={dir}
                                                onClick={() => toggleSelection(room.id, dir)}
                                                className={`py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all border-2 text-center h-14 flex items-center justify-center leading-none ${isSelected ? 'bg-slate-950 border-slate-950 text-primary shadow-xl scale-[1.03] z-10' : 'bg-slate-50 border-slate-50 text-slate-400 hover:bg-white hover:border-slate-300'}`}
                                            >
                                                {dir}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-5 sticky top-32">
                        <div className="bg-slate-950 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-[3000ms]"><Compass size={300} /></div>
                            <div className="relative z-10 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-display font-black uppercase tracking-tighter text-primary">Protocol Analysis</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-8">
                                        "Please assign each major unit to its corresponding directional vector to calculate the property integrity score."
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Configuration Nodes</p>
                                        <p className="text-2xl font-display font-black text-white">{Object.keys(selections).length} / {ROOM_CATEGORIES.length}</p>
                                    </div>
                                    <div className="h-12 w-px bg-white/10"></div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${Object.keys(selections).length > 0 ? 'text-primary' : 'text-red-500'}`}>
                                            {Object.keys(selections).length > 0 ? 'Active Stream' : 'Awaiting Input'}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    onClick={handleManualAnalyze}
                                    disabled={loading || Object.keys(selections).length === 0}
                                    className="w-full py-8 bg-red-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-red-700 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] active:scale-95 flex items-center justify-center gap-4 disabled:opacity-30 disabled:grayscale"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : <Activity size={22} />}
                                    {loading ? 'Transmitting Matrix...' : 'Finalize Analysis'}
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center items-center gap-6 opacity-40">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                             <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.6em]">GRID LINK SECURE 0X7A</span>
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (viewState === 'report') {
        const directionalAnalysis = [
            { dir: 'North', status: 'Water Resonance Optimized', val: 85, color: 'bg-blue-500' },
            { dir: 'East', status: 'Solar Node - Great Entrance', val: 92, color: 'bg-emerald-500' },
            { dir: 'South', status: 'Fire Energy Deficiency Detected', val: 45, color: 'bg-red-500' },
            { dir: 'West', status: 'Earth Grounding Adequate', val: 68, color: 'bg-amber-500' },
            { dir: 'Northeast', status: 'Spiritual Pivot - Optimal Pooja', val: 95, color: 'bg-emerald-600' },
            { dir: 'Southeast', status: 'Agni Node - Kitchen Correct', val: 88, color: 'bg-orange-500' },
            { dir: 'Southwest', status: 'Heavy Node - Master Bedroom', val: 72, color: 'bg-emerald-500' },
            { dir: 'Northwest', status: 'Air Flux - Storage Recommendation', val: 55, color: 'bg-blue-400' },
        ];

        return (
            <div className="min-h-screen bg-[#FDFBF9] pt-32 pb-32 font-sans selection:bg-slate-950 selection:text-white">
                <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between border-b border-orange-100 pb-10 gap-8">
                    <div className="space-y-6">
                        <button 
                            onClick={goBack}
                            className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] transition-all"
                        >
                            <ChevronLeft size={16} /> Exit Analysis Dashboard
                        </button>
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-slate-950 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl ring-8 ring-slate-100"><ClipboardCheck size={32} /></div>
                            <div>
                                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none">Deep <span className="text-red-600 italic">Vastu</span> AI</h1>
                                <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] mt-3">Registry ID: #VN-2025-0X7A • Timestamp: 24 Oct 2025</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-white border-2 border-slate-950 text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3 active:scale-95 transition-all">
                            <Download size={16} /> Export Intelligence
                        </button>
                        <button 
                            onClick={goBack}
                            className="px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3 hover:bg-red-600 active:scale-95 transition-all"
                        >
                            <X size={16} /> Close Report
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        <div className="bg-white rounded-[4rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                            <div className="relative shrink-0">
                                <div className="w-56 h-56 rounded-full border-[16px] border-slate-50 flex flex-col items-center justify-center bg-white shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                     <div className="absolute inset-0 border-[16px] border-emerald-500 border-t-transparent border-l-transparent -rotate-45"></div>
                                     <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Harmony Score</span>
                                     <div className="flex items-baseline gap-1">
                                        <span className="text-7xl font-display font-black text-slate-950 leading-none">72</span>
                                        <span className="text-slate-300 font-bold text-xl">/100</span>
                                     </div>
                                </div>
                            </div>
                            <div className="flex-1 space-y-8 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                                    <ShieldCheck size={14} /> High Compliance Certified
                                </div>
                                <h3 className="text-3xl font-display font-black text-slate-900 uppercase leading-none">Architectural Essence Analysis</h3>
                                <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-red-100 pl-8 font-medium">
                                    "Your sanctuary exhibits strong structural DNA. The East-aligned entrance node acts as a potent solar frequency gateway, significantly boosting overall energy flow. However, fire node deficits in the South require remediation."
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-[4.5rem] p-12 border border-slate-100 shadow-xl space-y-12">
                             <div className="flex items-center justify-between border-b border-slate-50 pb-8">
                                <h4 className="text-2xl font-display font-black text-slate-900 uppercase flex items-center gap-4">
                                    <Compass className="text-red-600" size={32} /> Directional Frequency Matrix
                                </h4>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Verification Level: Quantum 0.2</span>
                             </div>

                             <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                {directionalAnalysis.map((item, i) => (
                                    <div key={i} className="space-y-4 group">
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse shadow-lg`}></div>
                                                <h5 className="text-[11px] font-black text-slate-950 uppercase tracking-widest">{item.dir} Nodes</h5>
                                            </div>
                                            <span className={`text-lg font-display font-black ${item.val > 70 ? 'text-emerald-600' : item.val > 50 ? 'text-amber-500' : 'text-red-600'}`}>{item.val}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                            <div className={`h-full ${item.color} rounded-full transition-all duration-[2000ms] shadow-sm`} style={{ width: `${item.val}%` }}></div>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight italic group-hover:text-slate-900 transition-colors">"Status: {item.status}"</p>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-10">
                        <div className="bg-slate-950 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform"><Sparkles size={200} /></div>
                            <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-12 text-center">Equilibrium Matrix</h4>
                            <div className="grid grid-cols-5 gap-3 relative z-10">
                                {[
                                    { n: 'Fire', i: Flame, c: 'text-orange-500', bg: 'bg-orange-500/10' },
                                    { n: 'Water', i: Droplets, c: 'text-blue-500', bg: 'bg-blue-500/10' },
                                    { n: 'Earth', i: Mountain, c: 'text-amber-700', bg: 'bg-amber-700/10' },
                                    { n: 'Air', i: Wind, c: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                                    { n: 'Space', i: Sparkles, c: 'text-purple-500', bg: 'bg-purple-500/10' }
                                ].map(el => (
                                    <div key={el.n} className="flex flex-col items-center gap-4 group/el">
                                        <div className={`w-14 h-14 rounded-2xl ${el.bg} flex items-center justify-center ${el.c} border border-white/5 shadow-inner group-hover/el:scale-110 group-hover/el:shadow-primary/20 transition-all duration-300`}>
                                            <el.i size={24} />
                                        </div>
                                        <span className="text-[8px] font-black uppercase text-slate-500 tracking-widest group-hover/el:text-primary transition-colors">{el.n}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-10">
                            <h4 className="text-xl font-display font-black text-slate-900 uppercase flex items-center gap-3">
                                <AlertCircle className="text-red-600" /> Remediation Protocols
                            </h4>
                            <div className="space-y-8">
                                {[
                                    { t: 'Immediate', d: 'Neutralize entrance node clutter to maximize Pranic intake.', c: 'text-red-600', bg: 'bg-red-50' },
                                    { t: 'Mid-Cycle', d: 'Install copper pyramid node in South Sector to boost Agni resonance.', c: 'text-orange-600', bg: 'bg-orange-50' },
                                    { t: 'Long-Term', d: 'Recalibrate Sanctuary node to Southwest for increased grounding.', c: 'text-emerald-600', bg: 'bg-emerald-50' }
                                ].map((rem, idx) => (
                                    <div key={idx} className="flex gap-6 items-start group">
                                        <div className={`w-12 h-12 rounded-2xl ${rem.bg} ${rem.c} flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110`}><Zap size={20} /></div>
                                        <div className="space-y-1">
                                            <h5 className={`text-[10px] font-black uppercase tracking-widest ${rem.c}`}>{rem.t} Phase</h5>
                                            <p className="text-xs font-medium text-slate-500 leading-relaxed italic">"{rem.d}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full py-6 bg-slate-950 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-primary hover:text-slate-950 transition-all shadow-xl active:scale-95">
                                Order Hardware Kit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default VastuView;