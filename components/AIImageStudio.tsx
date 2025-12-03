import React, { useState } from 'react';
import { Wand2, ImagePlus, Download, Loader2, Sparkles } from 'lucide-react';
import { editPropertyImage, generatePropertyVisualization } from '../services/geminiService';
import { AspectRatio } from '../types';

const AIImageStudio = ({ initialImage }: { initialImage: string }) => {
  const [mode, setMode] = useState<'edit' | 'generate'>('edit');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');

  const handleAction = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      if (mode === 'edit') {
        const resp = await fetch(initialImage);
        const blob = await resp.blob();
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64 = (reader.result as string).split(',')[1];
            const result = await editPropertyImage(base64, prompt);
            if (result.image) setGeneratedImage(result.image);
            setLoading(false);
        };
        reader.readAsDataURL(blob);
      } else {
        const result = await generatePropertyVisualization(prompt, aspectRatio);
        if (result) setGeneratedImage(result);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
            <h3 className="text-2xl font-display font-bold text-slate-900">Design Studio</h3>
            <p className="text-slate-500 text-sm">Reimagine this space with Gemini AI</p>
        </div>
        <div className="bg-slate-100 p-1 rounded-xl flex">
            <button 
                onClick={() => { setMode('edit'); setGeneratedImage(null); }}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'edit' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
                Remix Space
            </button>
            <button 
                onClick={() => { setMode('generate'); setGeneratedImage(null); }}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'generate' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
                New Concept
            </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Controls */}
        <div className="lg:w-1/3 space-y-6">
            <div className="glass-panel p-6 rounded-2xl space-y-4 bg-white/60">
                <label className="text-slate-900 text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                    <Sparkles size={14} className="text-primary fill-current" />
                    {mode === 'edit' ? 'Prompt' : 'Vision'}
                </label>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={mode === 'edit' ? "e.g., Replace the floor with hardwood, paint walls beige..." : "e.g., A minimal scandinavian living room..."}
                    className="w-full h-32 bg-white border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none resize-none transition-all shadow-inner"
                />
                
                {mode === 'generate' && (
                     <div>
                        <label className="text-slate-500 text-xs font-bold uppercase tracking-wide block mb-2">Aspect Ratio</label>
                        <div className="flex flex-wrap gap-2">
                            {(['1:1', '3:4', '4:3', '16:9'] as AspectRatio[]).map(r => (
                                <button 
                                    key={r} 
                                    onClick={() => setAspectRatio(r)}
                                    className={`px-3 py-1 text-xs font-medium rounded-md border transition-colors ${aspectRatio === r ? 'border-primary text-primary bg-primary/5' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                     </div>
                )}

                <button 
                    onClick={handleAction}
                    disabled={loading || !prompt}
                    className="w-full py-4 rounded-xl bg-secondary text-primary hover:bg-slate-800 disabled:opacity-50 font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary/20"
                >
                    {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={18} />}
                    {mode === 'edit' ? 'Generate Edit' : 'Create Concept'}
                </button>
            </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center min-h-[400px] relative overflow-hidden group">
            {!generatedImage && !loading && (
                mode === 'edit' ? (
                    <img src={initialImage} className="w-full h-full object-contain opacity-80 grayscale-[20%]" alt="Original" />
                ) : (
                    <div className="text-slate-400 flex flex-col items-center text-center p-8">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <ImagePlus size={32} className="opacity-50" />
                        </div>
                        <h4 className="font-bold text-slate-600">Canvas Empty</h4>
                        <p className="text-sm max-w-xs mt-1">Enter a prompt to start generating visuals with Gemini 3 Pro.</p>
                    </div>
                )
            )}
            
            {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md z-10">
                    <div className="w-16 h-16 border-4 border-slate-200 border-t-primary rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-900 font-bold animate-pulse">Rendering pixels...</p>
                </div>
            )}

            {generatedImage && (
                <div className="relative w-full h-full bg-white">
                     <img src={generatedImage} className="w-full h-full object-contain" alt="Generated" />
                     <a 
                        href={generatedImage} 
                        download="huntproperty-ai-design.png"
                        className="absolute bottom-6 right-6 p-4 rounded-full bg-secondary text-primary hover:scale-110 transition-transform shadow-xl"
                     >
                         <Download size={24} />
                     </a>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AIImageStudio;