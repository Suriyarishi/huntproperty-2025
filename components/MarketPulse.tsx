import React, { useEffect, useState } from 'react';
import { TrendingUp, Globe, ExternalLink } from 'lucide-react';
import { getMarketTrends } from '../services/geminiService';

const MarketPulse = () => {
  const [trendData, setTrendData] = useState<{text: string, sources: any[]} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const data = await getMarketTrends("What are the current real estate market trends for 2025? Keep it brief.");
        setTrendData({ 
            text: data.text, 
            sources: data.grounding || []
        });
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    fetchTrends();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
       <div className="glass-panel rounded-[2.5rem] p-8 relative overflow-hidden shadow-xl bg-gradient-to-br from-white/80 to-emerald-50/20">
          <div className="flex flex-col md:flex-row gap-10 relative z-10">
             <div className="md:w-1/3 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                    <Globe size={12} /> Live Market Intelligence
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900">
                    Market <span className="text-emerald-600">Pulse</span>
                </h2>
             </div>
             <div className="md:w-2/3 space-y-6">
                <div className="bg-white/60 rounded-2xl p-6 border border-white shadow-sm backdrop-blur-sm">
                    {loading ? (
                        <div className="space-y-4 animate-pulse">
                            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                            <div className="h-3 bg-slate-200 rounded w-full"></div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="prose prose-slate prose-sm max-w-none text-slate-700 font-medium whitespace-pre-wrap">
                                {trendData?.text}
                            </div>
                        </div>
                    )}
                </div>

                {/* Fix: Added section to display grounding sources as required by Gemini API search grounding guidelines */}
                {!loading && trendData && trendData.sources.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Verified Market Sources</h4>
                        <div className="flex flex-wrap gap-2">
                            {trendData.sources.map((chunk: any, i: number) => {
                                const source = chunk.web || chunk.maps;
                                if (!source) return null;
                                return (
                                    <a 
                                        key={i} 
                                        href={source.uri} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm group"
                                    >
                                        <ExternalLink size={10} className="group-hover:scale-110 transition-transform" />
                                        {source.title || 'Source'}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default MarketPulse;