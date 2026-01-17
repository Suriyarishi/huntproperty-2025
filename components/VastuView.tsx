
import React, { useState } from 'react';
import { 
    Compass, Sparkles, Upload, ShieldCheck, 
    LayoutGrid, Plus, Info, CheckCircle2, 
    ArrowRight, MousePointer2, FileSearch, 
    Scan, Map as MapIcon, ChevronRight, 
    Layers, Download, Zap, Eye, BarChart3,
    Clock, Shield, Building2, Search,
    X, Loader2, Landmark, Home, Utensils, Bed, Bath, Baby, Sofa,
    Activity, UserCheck, TrendingUp, Award, Cpu, ChevronLeft,
    AlertCircle, AlertTriangle, Flame, Droplets, Wind, Mountain, 
    DoorOpen, Ban, CheckCircle
} from 'lucide-react';

type VastuViewState = 'home' | 'scan-upload' | 'manual-map' | 'report';

const ROOM_CATEGORIES = [
    { id: 'entrance', label: 'Main Entrance', icon: Home, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'kitchen', label: 'Kitchen', icon: Utensils, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'master_bedroom', label: 'Master Bedroom', icon: Bed, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'living_room', label: 'Living Room', icon: Sofa, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'bathroom', label: 'Toilet / Bathroom', icon: Bath, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { id: 'puja_room', label: 'Puja Room', icon: Sparkles, color: 'text-red-600', bg: 'bg-red-50' },
];

// Define missing DIRECTION_NODES constant used in manual mapping
const DIRECTION_NODES = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];

const DIRECTIONAL_DATA = [
    { dir: 'North', icon: Mountain, text: "Abundance of open space and balconies in the North promotes prosperity.", status: 'positive' },
    { dir: 'North-East', icon: Bath, text: "A toilet in the North-East is a major Vaastu defect, impacting health and mental peace.", status: 'negative' },
    { dir: 'North', icon: Home, text: "Abundance of open space and balconies in the North promotes prosperity.", status: 'positive' },
    { dir: 'South-East', icon: DoorOpen, text: "The entrance/foyer is located here; while active, it displaces the ideal fire zone.", status: 'neutral' },
    { dir: 'South', icon: Bed, text: "Solid walls and the placement of a bedroom provide stability.", status: 'positive' },
    { dir: 'South-East', icon: Building2, text: "Bedroom placement in the South-West corner is excellent for the head of the family.", status: 'positive' },
    { dir: 'West', icon: Utensils, text: "The kitchen is in the West; while manageable, it's not the primary 'Agni' (fire) zone.", status: 'neutral' },
    { dir: 'North-West', icon: Bath, text: "The toilet and sit-out area here are acceptable per Vayu corner principles.", status: 'positive' }
];

const ROOM_SCORES = [
    { name: 'Master Bedroom (SW)', score: 9, max: 10, detail: 'Perfectly placed in the South-West ...', color: 'bg-emerald-500' },
    { name: 'Kitchen', score: 5, max: 10, detail: 'West placement is neutral; ideally', color: 'bg-amber-500' },
    { name: 'Puja Room', score: 3, max: 10, detail: 'Placed near the South/Center; should', color: 'bg-red-500' },
    { name: 'Dining Area', score: 7, max: 10, detail: 'Central placement is convenient and', color: 'bg-emerald-400' }
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

    const handleManualAnalyze = () => {
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

    if (viewState === 'home') {
        return (
            <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-slate-900 overflow-x-hidden">
                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-50">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-emerald-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-blue-50/20 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl animate-fade-in-up">
                            <Sparkles size={12} /> Neural Architecture Hub
                        </div>
                        
                        <h1 className="text-5xl md:text-[5.5rem] font-display font-black text-slate-950 leading-[0.95] tracking-tighter animate-fade-in-up delay-100">
                            Vaastu Score for Your Home — <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 italic">Powered by AI</span>
                        </h1>

                        <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up delay-200">
                            Check your home’s Vaastu compliance using AI scan or manual mapping. Simple, accurate, and renovation-free.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-fade-in-up delay-300">
                            <button 
                                onClick={() => document.getElementById('method-selector')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-12 py-6 rounded-[2rem] bg-slate-950 text-white font-black text-sm uppercase tracking-widest hover:bg-emerald-600 hover:-translate-y-1 transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-4"
                            >
                                Get Vaastu Score <ArrowRight size={20} />
                            </button>
                            <button 
                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-12 py-6 rounded-[2rem] bg-white border-2 border-slate-100 text-slate-950 font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center gap-4"
                            >
                                How It Works
                            </button>
                        </div>

                        {/* Dual Path Visual Illustration */}
                        <div className="mt-20 relative max-w-5xl mx-auto p-4 bg-slate-50/50 rounded-[4rem] border border-slate-100 shadow-inner">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-[3.5rem] p-12 shadow-sm border border-slate-100 group transition-all">
                                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <Scan size={32} />
                                    </div>
                                    <h3 className="text-2xl font-display font-black text-slate-900 uppercase">Scan AI</h3>
                                    <div className="h-1 w-12 bg-emerald-500 rounded-full mt-4"></div>
                                </div>
                                <div className="bg-white rounded-[3.5rem] p-12 shadow-sm border border-slate-100 group transition-all">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <MousePointer2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-display font-black text-slate-900 uppercase">Manual Map</h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full mt-4"></div>
                                </div>
                            </div>
                            {/* Central Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-950 rounded-full border-8 border-slate-50/50 flex items-center justify-center text-primary shadow-2xl hidden md:flex">
                                <Compass size={32} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- METHOD SELECTION SECTION --- */}
                <section id="method-selector" className="py-32 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-slate-950 uppercase tracking-tighter">Choose How You Want to Analyze Vaastu</h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Card 1: Scan AI */}
                        <div className="group bg-slate-950 rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden flex flex-col transition-all hover:shadow-[0_40px_100px_-20px_rgba(47,237,154,0.15)]">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform"><FileSearch size={400} /></div>
                            <div className="relative z-10 flex-1 space-y-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-20 h-20 bg-primary/20 text-primary rounded-[2rem] flex items-center justify-center shadow-inner border border-primary/20">
                                        <Scan size={40} />
                                    </div>
                                    <span className="px-6 py-2 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Fastest & Recommended</span>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">Scan Floor Plan with AI</h3>
                                    <p className="text-slate-400 text-xl font-medium leading-relaxed italic border-l-4 border-primary/20 pl-8">
                                        "Upload your floor plan and let AI automatically detect rooms, directions, and energy zones."
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {['Upload JPG, PNG, or PDF', 'AI detects layout & directions', 'Instant Vaastu score & insights'].map(point => (
                                        <li key={point} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                            <CheckCircle2 size={18} className="text-primary" /> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button 
                                onClick={() => setViewState('scan-upload')}
                                className="relative z-10 mt-12 w-full py-7 bg-white text-slate-950 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-2xl"
                            >
                                Scan with AI
                            </button>
                        </div>

                        {/* Card 2: Manual Map */}
                        <div className="group bg-white rounded-[4rem] p-12 md:p-16 border-2 border-slate-100 shadow-xl flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl">
                            <div className="relative z-10 flex-1 space-y-10">
                                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center shadow-inner">
                                    <LayoutGrid size={40} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-display font-black text-slate-950 uppercase tracking-tight">Map Your Home Manually</h3>
                                    <p className="text-slate-500 text-xl font-medium leading-relaxed italic border-l-4 border-blue-200 pl-8">
                                        "Manually mark rooms and directions if you don’t have a floor plan image."
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {['Select house shape', 'Mark rooms & directions', 'Works without image upload'].map(point => (
                                        <li key={point} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-500">
                                            <CheckCircle2 size={18} className="text-blue-500" /> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button 
                                onClick={() => setViewState('manual-map')}
                                className="mt-12 w-full py-7 bg-slate-950 text-white rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-blue-600/10"
                            >
                                Map Manually
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (viewState === 'scan-upload') {
        return (
            <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans overflow-y-auto">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                    <div className="space-y-4">
                        <button onClick={goBack} className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em] transition-all"><ChevronLeft size={16} /> Back to Hub</button>
                        <h1 className="text-4xl font-display font-black text-slate-900 uppercase">Transmission Portal</h1>
                        <p className="text-slate-500 font-medium italic">Spatial DNA Extraction Protocol</p>
                    </div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <div 
                        onClick={handleStartScan}
                        className="bg-white border-4 border-dashed border-slate-200 rounded-[4rem] p-24 md:p-40 text-center hover:border-emerald-500 hover:bg-emerald-50/10 transition-all cursor-pointer group relative overflow-hidden shadow-2xl"
                    >
                        {loading ? (
                            <div className="space-y-10 animate-fade-in-up">
                                <div className="relative w-32 h-32 mx-auto">
                                    <div className="absolute inset-0 border-8 border-slate-100 border-t-emerald-500 rounded-full animate-spin"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-emerald-500"><Zap size={40} className="animate-pulse" /></div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-display font-black text-slate-900 uppercase">Analyzing Spatial Nodes</h3>
                                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] animate-pulse">Syncing with Vedic Registry...</p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-10 relative z-10">
                                <div className="w-24 h-24 bg-slate-950 text-white rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:bg-emerald-600 transition-all">
                                    <Upload size={40} />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tighter">Drag & drop floor plan</h2>
                                    <p className="text-slate-500 text-lg font-medium">or click to browse local files</p>
                                </div>
                                <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl group-hover:bg-emerald-600 transition-colors">Select From System</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (viewState === 'manual-map') {
        return (
            <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-48 font-sans overflow-y-auto">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                    <div className="space-y-4">
                        <button onClick={goBack} className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] transition-all"><ChevronLeft size={16} /> Back to Hub</button>
                        <h1 className="text-4xl font-display font-black text-slate-900 uppercase tracking-tighter">Interactive Grid</h1>
                        <p className="text-slate-500 font-medium italic">Define architectural room nodes manually</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-6 max-h-[80vh] overflow-y-auto no-scrollbar pr-4">
                        {ROOM_CATEGORIES.map((room) => (
                            <div key={room.id} className="bg-white p-8 rounded-[3.5rem] shadow-sm border border-slate-200 hover:border-blue-400/40 transition-all duration-500 group flex flex-col md:flex-row items-center gap-8">
                                <div className="flex flex-col items-center gap-4 shrink-0 text-center w-32">
                                    <div className={`w-20 h-20 ${room.bg} ${room.color} rounded-[2rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                                        <room.icon size={36} strokeWidth={1.2} />
                                    </div>
                                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-tight">{room.label}</h4>
                                </div>
                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                                    {DIRECTION_NODES.map((dir) => {
                                        const isSelected = selections[room.id] === dir;
                                        return (
                                            <button
                                                key={dir}
                                                onClick={() => setSelections(prev => ({ ...prev, [room.id]: dir }))}
                                                className={`py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border-2 text-center h-12 flex items-center justify-center leading-none ${isSelected ? 'bg-slate-900 border-slate-900 text-blue-400 shadow-xl scale-[1.03] z-10' : 'bg-slate-50 border-slate-50 text-slate-400 hover:bg-white hover:border-slate-300'}`}
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
                        <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-[3000ms]"><Compass size={300} /></div>
                            <div className="relative z-10 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-display font-black uppercase tracking-tight text-blue-400">Grid Sync</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed italic border-l-4 border-blue-400/20 pl-8">
                                        "Assign unit nodes to cardinal points to compute property harmony."
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Configured Nodes</p>
                                        <p className="text-2xl font-display font-black text-white">{Object.keys(selections).length} / {ROOM_CATEGORIES.length}</p>
                                    </div>
                                    <div className="h-12 w-px bg-white/10"></div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${Object.keys(selections).length > 0 ? 'text-blue-400' : 'text-emerald-500'}`}>
                                            {Object.keys(selections).length > 0 ? 'ACTIVE' : 'READY'}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    onClick={handleManualAnalyze}
                                    disabled={loading || Object.keys(selections).length === 0}
                                    className="w-full py-8 bg-blue-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4 disabled:opacity-30 disabled:grayscale"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : <Activity size={22} />}
                                    {loading ? 'Analyzing Grid...' : 'Run Diagnostics'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (viewState === 'report') {
        return (
            <div className="min-h-screen bg-slate-50 pt-28 pb-32 font-sans selection:bg-emerald-100">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Floating Header Actions */}
                    <div className="flex justify-between items-center mb-8">
                        <button onClick={goBack} className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-black text-[10px] uppercase tracking-widest transition-all">
                            <ChevronLeft size={16} /> Exit Analysis
                        </button>
                        <button className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-600">
                            <Download size={20} />
                        </button>
                    </div>

                    {/* Main Report Container mirroring screenshot style */}
                    <div className="bg-white rounded-[2rem] border-2 border-emerald-500 shadow-2xl overflow-hidden animate-fade-in-up">
                        
                        {/* Overall Score Node */}
                        <div className="p-10 text-center border-b border-slate-100 relative">
                            <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">Overall Vaastu Score</h3>
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-40 h-40">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset={283 - (283 * 62) / 100} strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-display font-black text-slate-900 leading-none">62</span>
                                        <span className="text-slate-300 font-bold text-lg">/100</span>
                                    </div>
                                    <div className="absolute top-4 right-4 text-emerald-500">
                                        <Compass size={32} className="opacity-20" />
                                    </div>
                                </div>
                                <div className="bg-emerald-100 px-6 py-2 rounded-full border border-emerald-200">
                                    <span className="text-[11px] font-black uppercase text-emerald-800 tracking-widest">Needs Improvement Harmony</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 space-y-12">
                            
                            {/* Directional Analysis Grid */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                                    <Compass size={20} className="text-slate-400" />
                                    <h4 className="text-sm font-black uppercase text-slate-400 tracking-[0.3em]">Directional Analysis</h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {DIRECTIONAL_DATA.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all group">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${item.status === 'positive' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : item.status === 'negative' ? 'bg-red-50 border-red-100 text-red-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                                                <item.icon size={24} />
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-display font-black text-xs uppercase tracking-tight text-slate-900">{item.dir}</h5>
                                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Room Analysis (Compact Scores) */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                                    <LayoutGrid size={20} className="text-slate-400" />
                                    <h4 className="text-sm font-black uppercase text-slate-400 tracking-[0.3em]">Room Analysis</h4>
                                </div>
                                <div className="space-y-3">
                                    {ROOM_SCORES.map((room, i) => (
                                        <div key={i} className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-emerald-200 transition-all">
                                            <div className="flex-1 space-y-1">
                                                <h5 className="font-display font-black text-sm uppercase text-slate-900">{room.name}</h5>
                                                <p className="text-[10px] text-slate-400 font-medium italic">{room.detail}</p>
                                            </div>
                                            <div className="flex items-center gap-6 w-full md:w-auto">
                                                <div className="flex-1 md:w-32 h-2 bg-slate-50 rounded-full overflow-hidden shadow-inner border border-slate-100">
                                                    <div className={`h-full ${room.color} rounded-full transition-all duration-1000`} style={{ width: `${(room.score/room.max)*100}%` }}></div>
                                                </div>
                                                <div className="text-right min-w-[40px]">
                                                    <span className={`text-lg font-display font-black ${room.score >= 7 ? 'text-emerald-500' : room.score >= 5 ? 'text-amber-500' : 'text-red-500'}`}>{room.score}</span>
                                                    <span className="text-[10px] font-bold text-slate-200">/10</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deep-Dive Dosh Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                                    <Ban size={20} className="text-red-400" />
                                    <h4 className="text-sm font-black uppercase text-slate-400 tracking-[0.3em]">Defect Diagnostics</h4>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Ishanya Toilet Dosh', icon: Bath, desc: 'The presence of a toilet in the North-East (Ishanya) corner is a severe violation, believed to drain positive energy and cause health issues.', color: 'text-red-600', bg: 'bg-red-50' },
                                        { title: 'Improper Puja Placement', icon: Sparkles, desc: 'The Puja/Store is located towards the South, which is the zone of Yama; it should be moved to the Ishanya corner for spiritual growth.', color: 'text-red-600', bg: 'bg-red-50' }
                                    ].map((dosh, i) => (
                                        <div key={i} className="flex gap-6 p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
                                            <div className={`w-14 h-14 ${dosh.bg} ${dosh.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm`}><dosh.icon size={28} /></div>
                                            <div className="space-y-2">
                                                <h5 className="font-display font-black text-lg text-slate-900 uppercase leading-none">{dosh.title}</h5>
                                                <p className="text-xs text-slate-500 leading-relaxed font-medium">{dosh.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Positive Aspects */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                                    <CheckCircle size={20} className="text-emerald-400" />
                                    <h4 className="text-sm font-black uppercase text-slate-400 tracking-[0.3em]">Positive Aspects</h4>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Nairutya Stability', icon: Award, desc: 'The heaviest room (Master Bedroom) is in the South-West, ensuring financial and emotional stability.' },
                                        { title: 'Northern Ventilation', icon: Wind, desc: 'Large balconies in the North and West allow for good airflow and light.' }
                                    ].map((pos, i) => (
                                        <div key={i} className="flex gap-6 p-6 rounded-3xl border border-emerald-50 bg-emerald-50/20">
                                            <div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-emerald-100"><pos.icon size={28} /></div>
                                            <div className="space-y-2">
                                                <h5 className="font-display font-black text-lg text-slate-900 uppercase leading-none">{pos.title}</h5>
                                                <p className="text-xs text-slate-600 leading-relaxed font-medium italic">"{pos.desc}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recommendations Node */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                                    <Zap size={20} className="text-amber-400" />
                                    <h4 className="text-sm font-black uppercase text-slate-400 tracking-[0.3em]">Recommendations</h4>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Relocate Puja Room', icon: Sparkles, desc: 'Shift the Puja room to the North-East corner of the house for better spiritual alignment.' },
                                        { title: 'NE Toilet Remedy', icon: Bath, desc: 'If the toilet in the NE cannot be moved, keep it closed and use sea salt/Vaastu pyramids to neutralize energy.' },
                                        { title: 'Kitchen Color Palette', icon: Utensils, desc: 'Since the kitchen is in the West, use white or yellow tones to balance the elements.' }
                                    ].map((rec, i) => (
                                        <div key={i} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex flex-col gap-4 text-center group hover:bg-white hover:shadow-xl transition-all">
                                            <div className="w-14 h-14 bg-white text-slate-900 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:bg-slate-900 group-hover:text-primary transition-all">
                                                <rec.icon size={24} />
                                            </div>
                                            <div className="space-y-2">
                                                <h5 className="font-display font-black text-xs uppercase text-slate-900">{rec.title}</h5>
                                                <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{rec.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-12 text-center border-t border-slate-50 opacity-40">
                                <p className="text-[10px] font-medium text-slate-400 italic max-w-lg mx-auto">
                                    "By following these Vaastu principles, the energy in the house can be optimized for better harmony and prosperity."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default VastuView;
