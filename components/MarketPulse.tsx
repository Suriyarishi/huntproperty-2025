import React, { useEffect, useState } from 'react';
import { TrendingUp, Globe } from 'lucide-react';
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
       <div className="glass-panel rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden border border-white shadow-xl bg-gradient-to-br from-white/80 to-white/40">
          {/* Decorative Background Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-50/50 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-10 relative z-10">
             <div className="md:w-1/3 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                    <Globe size={12} /> Live Market Intelligence
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900">
                    Market <span className="text-emerald-600">Pulse</span>
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    Gemini Search Grounding provides real-time analysis of housing trends and rates.
                </p>
             </div>

             <div className="md:w-2/3 bg-white/60 rounded-2xl p-6 border border-white shadow-sm backdrop-blur-sm">
                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                        <div className="h-3 bg-slate-200 rounded w-full"></div>
                        <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="prose prose-slate prose-sm max-w-none text-slate-700 font-medium">
                            {trendData?.text}
                        </div>
                        {trendData?.sources && trendData.sources.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                                {trendData.sources.slice(0, 3).map((source: any, i: number) => {
                                    const data = source.web || source.maps;
                                    if(!data) return null;
                                    return (
                                        <a key={i} href={data.uri} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-emerald-600 transition-colors bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">
                                            <TrendingUp size={10} /> {data.title}
                                        </a>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default MarketPulse;