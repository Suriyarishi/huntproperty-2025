import React, { useEffect, useState } from 'react';
import { getNearbyPlaces } from '../services/geminiService';
import { MapPin, Navigation, Loader2 } from 'lucide-react';

interface Props {
    location: string;
}

const MapView: React.FC<Props> = ({ location }) => {
    const [places, setPlaces] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [textSummary, setTextSummary] = useState('');

    useEffect(() => {
        let isMounted = true;
        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const result = await getNearbyPlaces(location, 37.7749, -122.4194);
                if (isMounted) {
                    setTextSummary(result.text);
                    setPlaces(result.grounding || []); 
                    setLoading(false);
                }
            } catch (e) {
                console.error(e);
                if (isMounted) setLoading(false);
            }
        };
        fetchPlaces();
        return () => { isMounted = false; };
    }, [location]);

    return (
        <div className="h-full flex flex-col md:flex-row gap-6">
            {/* Text Summary Section */}
            <div className="md:w-1/2 glass-panel p-6 rounded-2xl overflow-y-auto bg-white/80">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Navigation className="text-emerald-600" /> Neighborhood Guide
                </h3>
                {loading ? (
                    <div className="space-y-4">
                        <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4"></div>
                        <div className="h-4 bg-slate-100 rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-slate-100 rounded animate-pulse w-5/6"></div>
                    </div>
                ) : (
                    <div className="prose prose-slate prose-sm max-w-none">
                         {textSummary}
                    </div>
                )}
            </div>

            {/* Places List from Grounding */}
            <div className="md:w-1/2 flex flex-col gap-3 overflow-y-auto pr-2">
                 <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Verified Places (Google Maps)</h4>
                 {loading ? (
                     <Loader2 className="animate-spin text-emerald-600 mx-auto mt-10" />
                 ) : places.length > 0 ? (
                     places.map((chunk: any, idx: number) => {
                         if (!chunk.web && !chunk.maps) return null;
                         const data = chunk.maps || chunk.web;
                         if (!data) return null;

                         return (
                            <a 
                                key={idx} 
                                href={data.uri} 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4 hover:shadow-md hover:border-emerald-200 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 line-clamp-1">{data.title}</h5>
                                    <p className="text-xs text-slate-400 truncate max-w-[200px]">{data.uri}</p>
                                </div>
                            </a>
                         );
                     })
                 ) : (
                     <div className="text-slate-500 italic p-4 border border-dashed border-slate-200 rounded-xl bg-slate-50">
                         Gemini synthesized the location data above.
                     </div>
                 )}
            </div>
        </div>
    );
};

export default MapView;