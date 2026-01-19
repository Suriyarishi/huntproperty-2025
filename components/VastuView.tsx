import React, { useState, useRef, useEffect } from 'react';
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
    DoorOpen, Ban, CheckCircle, Send, MessageSquare, Camera,
    FileText, ArrowUp, ChevronUp, MoveUp, MoveDown, MoveLeft, MoveRight,
    ShieldAlert, FileDown
} from 'lucide-react';
import { getFastChatResponse } from '../services/geminiService';

type VastuViewState = 'home' | 'scan-upload' | 'chat-flow' | 'manual-map' | 'report';

const DIRECTIONAL_CARDS = [
    { dir: 'North', icon: Mountain, text: "Abundance of open space and balconies in the North promotes prosperity.", status: 'positive' },
    { dir: 'North-East', icon: Bath, text: "A toilet in the North-East is a major Vaastu defect, impacting health and mental peace.", status: 'negative' },
    { dir: 'East', icon: Home, text: "Abundance of open space and balconies in the North promotes prosperity.", status: 'positive' },
    { dir: 'South-East', icon: DoorOpen, text: "The entrance/foyer is located here; while active, it displaces the ideal fire zone.", status: 'neutral' },
    { dir: 'South', icon: Bed, text: "Solid walls and the placement of a bedroom provide stability.", status: 'positive' },
    { dir: 'South-West', icon: Building2, text: "Bedroom placement in the South-West corner is excellent for the head of the family.", status: 'positive' },
    { dir: 'West', icon: Utensils, text: "The kitchen is in the West; while manageable, it's not the primary 'Agni' (fire) zone.", status: 'neutral' },
    { dir: 'North-West', icon: Bath, text: "The toilet and sit-out area here are acceptable per Vayu corner principles.", status: 'positive' }
];

const ROOM_CATEGORIES = [
    { id: 'entrance', label: 'Main Entrance', icon: DoorOpen, bg: 'bg-blue-50', color: 'text-blue-600' },
    { id: 'living', label: 'Living Room', icon: Sofa, bg: 'bg-indigo-50', color: 'text-indigo-600' },
    { id: 'bedroom', label: 'Master Bedroom', icon: Bed, bg: 'bg-purple-50', color: 'text-purple-600' },
    { id: 'kitchen', label: 'Kitchen', icon: Utensils, bg: 'bg-amber-50', color: 'text-amber-600' },
    { id: 'bathroom', label: 'Bathroom/Toilet', icon: Bath, bg: 'bg-slate-50', color: 'text-slate-600' },
    { id: 'puja', label: 'Puja Room', icon: Sparkles, bg: 'bg-red-50', color: 'text-red-600' },
    { id: 'kids', label: 'Kids Room', icon: Baby, bg: 'bg-pink-50', color: 'text-pink-600' }
];

const DIRECTION_NODES = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];

const VastuView = () => {
    const [viewState, setViewState] = useState<VastuViewState>('home');
    const [chatStep, setChatStep] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string>("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070");
    const [selectedOrientation, setSelectedOrientation] = useState<string>('');
    const [selectedCompassDirection, setSelectedCompassDirection] = useState<string>('');
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (viewState === 'chat-flow') {
            scrollToBottom();
        }
    }, [chatStep, loading, viewState]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setViewState('chat-flow');
            setChatStep(1); 
        }, 1500);
    };

    const handleOrientationSelect = (dir: string) => {
        setSelectedOrientation(dir);
        setChatStep(2); 
    };

    const handleCompassSelect = (dir: string) => {
        setSelectedCompassDirection(dir);
        setChatStep(3); 
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setChatStep(4); 
        }, 3000);
    };

    const goBack = () => {
        setViewState('home');
        setChatStep(0);
        setSelectedOrientation('');
        setSelectedCompassDirection('');
        window.scrollTo(0, 0);
    };

    const AIAvatar = () => (
        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 shadow-sm overflow-hidden group">
            <img 
                src="https://huntproperty.com/assets/images/vastu_icon.png" 
                className="w-7 h-7 object-contain transition-transform group-hover:scale-110" 
                alt="AI"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/512/2103/2103811.png";
                }}
            />
        </div>
    );

    if (viewState === 'home') {
        return (
            <div className="min-h-screen bg-white font-sans overflow-x-hidden pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                        <Sparkles size={12} /> Neural Architecture Hub
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-tight tracking-tighter">
                        Ai Vaastu Analysis <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 italic">2025 Edition</span>
                    </h1>

                    <div id="method-selector" className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 pt-12">
                        <div 
                            onClick={() => document.getElementById('vastu-file-upload')?.click()}
                            className="bg-white rounded-[3.5rem] p-12 shadow-xl border-2 border-slate-50 hover:border-primary transition-all cursor-pointer group hover:-translate-y-2 duration-500"
                        >
                            <input type="file" id="vastu-file-upload" className="hidden" accept="image/*" onChange={handleFileUpload} />
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-slate-900 transition-all">
                                <Scan size={40} />
                            </div>
                            <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">Scan AI</h3>
                            <p className="text-slate-400 text-sm mt-3 font-medium px-4">Instant neural analysis of floor plan images.</p>
                        </div>
                        <div 
                            onClick={() => setViewState('manual-map')}
                            className="bg-white rounded-[3.5rem] p-12 shadow-xl border-2 border-slate-50 hover:border-blue-500 transition-all cursor-pointer group hover:-translate-y-2 duration-500"
                        >
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <MousePointer2 size={40} />
                            </div>
                            <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">Manual Map</h3>
                            <p className="text-slate-400 text-sm mt-3 font-medium px-4">Interactive room grid for manual entry.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (viewState === 'chat-flow') {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
                {/* Fixed Top Header - Optimized spacing */}
                <div className="fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-b border-slate-100 py-6 px-6 shadow-sm">
                    <div className="max-w-3xl mx-auto flex items-center relative h-10">
                        <button 
                            onClick={goBack} 
                            className="absolute left-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <h2 className="flex-1 text-center text-lg md:text-xl font-display font-black text-slate-900 uppercase tracking-[0.1em]">AI Vaastu Analysis</h2>
                    </div>
                </div>

                {/* Content Area - Added significant top padding to fix overlap */}
                <div className="flex-1 max-w-3xl mx-auto w-full pt-40 pb-48 px-6 space-y-10">
                    
                    {/* Welcome Message */}
                    <div className="flex gap-4 animate-fade-in-up">
                        <AIAvatar />
                        <div className="space-y-4 max-w-[90%]">
                            <div className="bg-white p-7 rounded-[2.5rem] rounded-tl-none border border-slate-100 shadow-sm space-y-5">
                                <p className="text-[15px] font-medium text-slate-600 leading-relaxed italic">
                                    I'm your personal AI Vaastu consultant. I'll guide you step-by-step to analyze your home.
                                </p>
                                <div className="space-y-4 pt-2">
                                    <p className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] border-b border-slate-50 pb-3">How This Works (5-7 minutes total)</p>
                                    <ul className="space-y-3 text-[13px] text-slate-500 font-bold">
                                        <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Phase 1: Direction Setup</li>
                                        <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Phase 2: Room Mapping</li>
                                        <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Phase 3: Vaastu Analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {chatStep >= 1 && (
                        <div className="flex gap-4 animate-fade-in-up">
                            <AIAvatar />
                            <div className="bg-white p-7 rounded-[2.5rem] rounded-tl-none border border-emerald-400 shadow-lg shadow-emerald-500/5 space-y-5 max-w-[90%]">
                                <h4 className="text-[13px] font-black text-emerald-600 uppercase tracking-tight flex items-center gap-2">
                                    Phase 1: Direction Setup <Compass size={16} className="animate-spin-slow" />
                                </h4>
                                <p className="text-[15px] text-slate-700 font-medium italic">Great! I can see your floor plan. Please tell me which direction is <span className="text-emerald-600 font-black">NORTH</span> in your image.</p>
                                <div className="bg-orange-50 px-4 py-2 rounded-xl inline-flex">
                                    <p className="text-[10px] text-orange-600 font-black uppercase tracking-widest flex items-center gap-2 animate-pulse">👇 Select orientation below:</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {chatStep === 1 && (
                        <div className="bg-white border border-emerald-400 rounded-[3rem] p-8 shadow-2xl animate-fade-in-up ml-14">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="w-full md:w-2/5 aspect-square bg-slate-50 rounded-3xl border border-slate-100 p-4 relative overflow-hidden shadow-inner">
                                    <img src={uploadedImage} className="w-full h-full object-contain" alt="Floorplan" />
                                    <div className="absolute inset-0 pointer-events-none border-2 border-emerald-100 rounded-3xl">
                                        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase text-slate-300">Top</span>
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase text-slate-300">Bottom</span>
                                        <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black uppercase text-slate-300">Left</span>
                                        <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-black uppercase text-slate-300">Right</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-7">
                                    <div>
                                        <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">Where is North?</h3>
                                        <p className="text-[13px] text-slate-400 font-bold uppercase tracking-widest mt-1">Select the side of image facing North</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: 'Top', icon: MoveUp },
                                            { id: 'Right', icon: MoveRight },
                                            { id: 'Bottom', icon: MoveDown },
                                            { id: 'Left', icon: MoveLeft }
                                        ].map(dir => (
                                            <button 
                                                key={dir.id}
                                                onClick={() => handleOrientationSelect(dir.id)}
                                                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500 hover:shadow-xl transition-all group active:scale-95 shadow-sm"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                                                    <dir.icon size={18} strokeWidth={3} />
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-xs font-black text-slate-900 uppercase leading-none mb-1">{dir.id}</p>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Orientation</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {chatStep >= 2 && (
                        <div className="flex gap-4 animate-fade-in-up">
                            <AIAvatar />
                            <div className="bg-white p-7 rounded-[2.5rem] rounded-tl-none border border-emerald-400 shadow-md space-y-4 max-w-[90%]">
                                <p className="text-[15px] text-slate-700 font-medium italic">Confirmed North at <span className="font-black text-emerald-600">{selectedOrientation}</span>. Now, please select the compass direction for your property.</p>
                            </div>
                        </div>
                    )}

                    {chatStep === 2 && (
                        <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl animate-fade-in-up ml-14">
                            <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-5">
                                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                    <Compass size={16} className="text-emerald-500" /> Select Cardinal Point
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {DIRECTION_NODES.map(d => (
                                    <button 
                                        key={d} 
                                        onClick={() => handleCompassSelect(d)}
                                        className="flex flex-col items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all group active:scale-95 shadow-sm"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white text-slate-300 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm border border-slate-100">
                                            <Zap size={22} />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest text-center">{d}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {chatStep >= 3 && (
                        <div className="flex gap-4 animate-fade-in-up">
                            <AIAvatar />
                            <div className="bg-white p-7 rounded-[2.5rem] rounded-tl-none border border-emerald-400 shadow-md space-y-5 max-w-[90%]">
                                <h4 className="text-[14px] font-black text-slate-950 uppercase tracking-tight flex items-center gap-2">
                                    Analyzing {selectedCompassDirection} Property DNA <Compass size={18} className="text-emerald-500 animate-pulse" />
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                            <div className={`h-full bg-emerald-500 transition-all duration-[3000ms] ${chatStep >= 4 ? 'w-full' : 'w-1/2 animate-pulse'}`}></div>
                                        </div>
                                    </div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] italic">Synthesizing 108 Spatial Nodes...</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {chatStep === 4 && (
                        <div className="space-y-16 animate-fade-in-up">
                            <div className="flex gap-4">
                                <AIAvatar />
                                <div className="w-full">
                                    <div className="bg-white rounded-[3.5rem] border-2 border-emerald-400 shadow-[0_40px_100px_-20px_rgba(47,237,154,0.15)] overflow-hidden">
                                        <div className="p-12 text-center border-b border-slate-50 bg-gradient-to-b from-emerald-50/20 to-transparent">
                                            <h3 className="text-slate-400 font-black uppercase tracking-[0.5em] text-[11px] mb-10">Overall Vaastu Score</h3>
                                            <div className="flex flex-col items-center gap-8">
                                                <div className="relative w-48 h-48">
                                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset={283 - (283 * 62) / 100} strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                                                    </svg>
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                        <span className="text-6xl font-display font-black text-slate-900 leading-none">62</span>
                                                        <div className="h-0.5 w-10 bg-slate-200 my-2"></div>
                                                        <span className="text-slate-400 font-black text-sm uppercase tracking-widest">100</span>
                                                    </div>
                                                </div>
                                                <div className="bg-amber-50 px-8 py-3 rounded-full border border-amber-100 flex items-center gap-3">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></div>
                                                    <span className="text-[11px] font-black uppercase text-amber-800 tracking-widest">Needs Improvement Harmony</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-10 md:p-16 space-y-20">
                                            <div className="space-y-10">
                                                <div className="flex items-center gap-5 border-b border-slate-50 pb-5">
                                                    <Compass size={24} className="text-slate-300" />
                                                    <h4 className="text-[12px] font-black uppercase text-slate-400 tracking-[0.4em]">Directional Analysis</h4>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {DIRECTIONAL_CARDS.map((item, i) => (
                                                        <div key={i} className="flex items-start gap-6 p-6 rounded-[2.5rem] border border-slate-50 bg-slate-50/20 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all duration-500 group shadow-sm">
                                                            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 border transition-all duration-700 ${item.status === 'positive' ? 'bg-emerald-50 border-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white' : item.status === 'negative' ? 'bg-red-50 border-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white' : 'bg-white border-slate-200 text-slate-400 group-hover:bg-slate-900 group-hover:text-primary'}`}>
                                                                <item.icon size={28} strokeWidth={1.5} />
                                                            </div>
                                                            <div className="space-y-2 pt-1">
                                                                <h5 className="font-display font-black text-xs uppercase tracking-tight text-slate-900">{item.dir} Node</h5>
                                                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic">"{item.text}"</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-10">
                                                <div className="flex items-center gap-5 border-b border-slate-50 pb-5">
                                                    <LayoutGrid size={24} className="text-slate-300" />
                                                    <h4 className="text-[12px] font-black uppercase text-slate-400 tracking-[0.4em]">Room Analysis Protocol</h4>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {[
                                                        { n: 'Master Bedroom (SW)', s: 9, c: 'bg-emerald-500' },
                                                        { n: 'Kitchen', s: 5, c: 'bg-amber-500' },
                                                        { n: 'Puja Room', s: 3, c: 'bg-red-500' },
                                                        { n: 'Dining Area', s: 7, c: 'bg-emerald-400' }
                                                    ].map((r, i) => (
                                                        <div key={i} className="bg-white border border-slate-100 p-7 rounded-3xl flex flex-col gap-6 group hover:shadow-lg transition-all shadow-sm">
                                                            <div className="flex items-center justify-between">
                                                                <h5 className="font-display font-black text-[12px] uppercase text-slate-900 tracking-tight">{r.n}</h5>
                                                                <div className="text-right">
                                                                    <span className="text-lg font-display font-black text-slate-950">{r.s}</span>
                                                                    <span className="text-[10px] font-bold text-slate-300">/10</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100 shadow-inner">
                                                                <div className={`h-full ${r.c} rounded-full transition-all duration-1000 shadow-sm`} style={{ width: `${r.s * 10}%` }}></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-10">
                                                <div className="flex items-center gap-5 border-b border-slate-50 pb-5">
                                                    <ShieldAlert size={24} className="text-red-400" />
                                                    <h4 className="text-[12px] font-black uppercase text-slate-400 tracking-[0.4em]">Defect Diagnostics (Dosh)</h4>
                                                </div>
                                                <div className="space-y-6">
                                                    {[
                                                        { t: 'Ishanya Toilet Dosh', d: 'A toilet in the North-East corner is a severe violation, believed to drain positive energy.', i: Bath, b: 'bg-red-50', text: 'text-red-600' },
                                                        { t: 'Improper Puja Placement', d: 'Puja/Store is in the zone of Yama (South); relocate to Ishanya corner for growth.', i: Sparkles, b: 'bg-red-50', text: 'text-red-600' }
                                                    ].map((d, i) => (
                                                        <div key={i} className="flex gap-7 p-8 rounded-[3rem] border border-red-100 bg-red-50/10 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
                                                            <div className={`w-16 h-16 ${d.b} ${d.text} rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-red-100 group-hover:scale-110 transition-transform`}><d.i size={32} /></div>
                                                            <div className="space-y-2 pt-1">
                                                                <h5 className="font-display font-black text-base text-slate-950 uppercase leading-none">{d.t}</h5>
                                                                <p className="text-[13px] text-slate-500 leading-relaxed font-medium italic">"{d.d}"</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="pt-16 text-center border-t border-slate-100 opacity-40">
                                                <p className="text-[11px] font-bold text-slate-400 italic max-w-lg mx-auto leading-relaxed">
                                                    "By following these Vastu principles, the energy in the house can be optimized for better harmony and prosperity."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Footer Chat Input / Actions */}
                <div className="fixed bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-2xl border-t border-slate-100 z-[70] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                    <div className="max-w-3xl mx-auto flex gap-4">
                        {chatStep >= 4 ? (
                            <>
                                <button 
                                    onClick={() => setViewState('report')} 
                                    className="flex-1 py-5 bg-white border-2 border-slate-950 text-slate-950 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-slate-950 hover:text-white transition-all shadow-xl active:scale-95 group"
                                >
                                    <FileDown size={22} className="group-hover:animate-bounce" /> Report
                                </button>
                                <button className="flex-[2] py-5 bg-primary text-slate-950 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all shadow-xl active:scale-95 group">
                                    <MessageSquare size={22} className="fill-slate-950" /> Ask AI Specialist
                                </button>
                            </>
                        ) : (
                            <div className="w-full flex items-center gap-4 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-2.5 pl-10 shadow-inner">
                                <input 
                                    type="text" 
                                    disabled={loading}
                                    placeholder="Ask about remedial measures or specific rooms..." 
                                    className="flex-1 bg-transparent border-none outline-none text-[15px] font-bold text-slate-900 placeholder-slate-300"
                                />
                                <button className="w-14 h-14 bg-slate-950 text-primary rounded-[1.8rem] flex items-center justify-center shadow-lg active:scale-90 transition-all hover:bg-slate-800">
                                    <Send size={24} />
                                </button>
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
                                    {DIRECTION_NODES.map((dir) => (
                                        <button
                                            key={dir}
                                            className={`py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border-2 text-center h-12 flex items-center justify-center leading-none bg-slate-50 border-slate-50 text-slate-400 hover:bg-white hover:border-slate-300`}
                                        >
                                            {dir}
                                        </button>
                                    ))}
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
                                <button 
                                    className="w-full py-8 bg-blue-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4"
                                >
                                    <Activity size={22} /> Run Diagnostics
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

// Re-defining missing helper
const InfoIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

export default VastuView;