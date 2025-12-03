import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Camera, ShieldCheck } from 'lucide-react';

interface SellViewProps {
    onPostProperty: () => void;
}

const SellView: React.FC<SellViewProps> = ({ onPostProperty }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20">
        {/* Hero Section */}
        <div className="relative bg-slate-900 py-24 px-6 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Luxury Interior" 
                    className="w-full h-full object-cover opacity-40"
                />
            </div>
            
            <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 space-y-6">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                        Sell with Intelligence
                    </span>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
                        Sell your home <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">faster & smarter.</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-md">
                        Leverage Gemini AI to optimize your listing, analyze market value, and find qualified buyers instantly.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button 
                            onClick={onPostProperty}
                            className="px-8 py-4 bg-primary text-slate-900 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105"
                        >
                            List Your Property <ArrowRight size={18} />
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md border border-white/10">
                            Get Valuation
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Stats / Benefits */}
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        <BarChart3 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AI Market Analysis</h3>
                    <p className="text-slate-500 text-sm">We price your home perfectly using real-time data from thousands of similar sold listings.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-4">
                        <Camera size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Enhancement</h3>
                    <p className="text-slate-500 text-sm">Our AI tools enhance your photos and offer virtual staging to attract premium buyers.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Verified Buyers</h3>
                    <p className="text-slate-500 text-sm">Connect directly with pre-approved buyers and verified agents. No time wasters.</p>
                </div>
            </div>
        </div>

        {/* Steps */}
        <div className="py-24 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-slate-900">How it works</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    {[
                        { title: 'Post your property', desc: 'Enter details and upload photos in our easy 4-step flow.' },
                        { title: 'AI Optimization', desc: 'Our system automatically enhances descriptions and highlights key features.' },
                        { title: 'Go Live', desc: 'Your listing is published to thousands of active buyers instantly.' },
                        { title: 'Close Deal', desc: 'Manage inquiries and close the deal with our digital paperwork support.' }
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                <p className="text-slate-500">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-100 rounded-[3rem] overflow-hidden h-[500px] relative">
                     <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Process" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default SellView;