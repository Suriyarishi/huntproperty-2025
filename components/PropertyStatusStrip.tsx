import React, { useEffect, useState } from 'react';
import {
    ShieldCheck, Home, Building2, Leaf, LayoutGrid,
    BadgeCheck, HardHat, Rocket, CheckCircle2, Clock,
    AlertTriangle
} from 'lucide-react';
import {
    getPossessionConfig, getPropertyTypeConfig, formatPossessionLabel,
    legacyStatusToKey,
    type PossessionStatusKey,
    type PrimaryPropertyType,
} from '../services/propertyConstants';

// ─── TYPES ────────────────────────────────────────────────────────

interface PropertyStatusStripProps {
    projectType: string;
    projectStatus: string;
    possessionDate?: string;
    reraId?: string;
    reraVerified?: boolean;
    /** Elevation: float over gallery with -mt */
    floating?: boolean;
}

// ─── ICON MAP for property types ──────────────────────────────────

const TYPE_ICON_MAP: Record<string, React.FC<any>> = {
    'Residential':     Home,
    'Commercial':      Building2,
    'Residential Plot': LayoutGrid,
    'Agricultural':    Leaf,
};

// ─── POSSESSION GROUP ICON ────────────────────────────────────────

function getPossessionIcon(key: PossessionStatusKey): React.FC<any> {
    const config = getPossessionConfig(key);
    if (config.group === 'ready')        return CheckCircle2;
    if (config.group === 'construction') return HardHat;
    if (config.group === 'upcoming')     return Rocket;
    return AlertTriangle; // special/risk
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────

const PropertyStatusStrip: React.FC<PropertyStatusStripProps> = ({
    projectType,
    projectStatus,
    possessionDate,
    reraId,
    reraVerified = true,
    floating = true,
}) => {
    const [visible, setVisible] = useState(false);

    // Smooth mount animation
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    const typeConfig     = getPropertyTypeConfig(projectType as PrimaryPropertyType);
    const statusKey      = legacyStatusToKey(projectStatus);
    const statusConfig   = getPossessionConfig(statusKey);
    const statusLabel    = formatPossessionLabel(statusKey, possessionDate);
    const TypeIcon       = TYPE_ICON_MAP[projectType] ?? Home;
    const PossessionIcon = getPossessionIcon(statusKey);

    const isReady       = statusConfig.group === 'ready';
    const isRisk        = statusConfig.group === 'special';
    const isUpcoming    = statusConfig.group === 'upcoming';

    return (
        <div
            className={`
                transition-all duration-500 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${floating ? '-mt-6 relative z-10 px-2 md:px-0' : ''}
            `}
        >
            <div className={`
                bg-white border rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300
                overflow-hidden
                ${isRisk ? 'border-red-200' : 'border-slate-100/80'}
            `}>
                {/* Risk Banner (only for high-risk statuses) */}
                {isRisk && (
                    <div className="bg-red-50 border-b border-red-100 px-4 py-2 flex items-center gap-2">
                        <AlertTriangle size={13} className="text-red-500 shrink-0" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-red-600">
                            This project requires due diligence — verify RERA status before investing.
                        </p>
                    </div>
                )}

                <div className="flex items-stretch divide-x divide-slate-100">

                    {/* ── BLOCK 1: PROPERTY TYPE ─────────────────────────── */}
                    <div className="flex items-center gap-4 px-5 py-4 flex-1 min-w-0">
                        <div className={`
                            w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                            ${typeConfig.color} ${typeConfig.textColor}
                            border ${typeConfig.borderColor}
                        `}>
                            <TypeIcon size={20} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 mb-1 leading-none">
                                Property Type
                            </p>
                            <p className="text-sm font-black text-slate-950 tracking-tight leading-tight truncate">
                                {projectType}
                            </p>
                            {typeConfig.subtypes.length > 0 && (
                                <p className="text-[9px] text-slate-400 font-medium mt-0.5 truncate">
                                    {typeConfig.subtypes.slice(0, 2).join(' · ')} & more
                                </p>
                            )}
                        </div>
                    </div>

                    {/* ── BLOCK 2: POSSESSION STATUS (PRIMARY HERO) ───────── */}
                    <div className={`
                        flex items-center gap-4 px-5 py-4 flex-[1.5] min-w-0 relative
                        ${isReady ? 'bg-emerald-50/60' : ''}
                        ${isUpcoming ? 'bg-sky-50/50' : ''}
                        ${isRisk ? 'bg-red-50/40' : ''}
                        ${statusConfig.group === 'construction' ? 'bg-orange-50/40' : ''}
                    `}>
                        {/* Background glow for emphasis */}
                        <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${
                            isReady ? 'bg-emerald-400' : isRisk ? 'bg-red-400' : isUpcoming ? 'bg-sky-400' : 'bg-orange-400'
                        }`} />

                        <div className={`
                            w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative z-10
                            ${statusConfig.color} ${statusConfig.textColor}
                            border ${statusConfig.borderColor} shadow-sm
                        `}>
                            <PossessionIcon size={22} />
                        </div>

                        <div className="min-w-0 relative z-10 flex-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 mb-1.5 leading-none">
                                Possession Status
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className={`text-base font-black tracking-tight leading-tight ${statusConfig.textColor}`}>
                                    {statusLabel}
                                </p>
                                {/* Animated alive indicator for ready */}
                                {isReady && (
                                    <span className="flex items-center gap-1 text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        Live
                                    </span>
                                )}
                            </div>
                            {/* Progress indicator bar */}
                            <div className="mt-2.5 h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 delay-300 ${
                                        isReady ? 'bg-emerald-500 w-full' :
                                        statusConfig.group === 'construction' ? 'bg-orange-400 w-3/5' :
                                        isUpcoming ? 'bg-sky-400 w-1/5' :
                                        'bg-red-400 w-4/5'
                                    } ${visible ? '' : 'w-0'}`}
                                />
                            </div>
                            <div className="flex justify-between mt-1">
                                <p className="text-[8px] font-bold text-slate-400">Launch</p>
                                <p className="text-[8px] font-bold text-slate-400">Possession</p>
                            </div>
                        </div>
                    </div>

                    {/* ── BLOCK 3: RERA / TRUST ───────────────────────────── */}
                    <div className="flex items-center gap-3.5 px-5 py-4 flex-1 min-w-0">
                        <div className={`
                            w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                            ${reraVerified ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-slate-100 text-slate-400 border border-slate-200'}
                        `}>
                            {reraVerified ? <BadgeCheck size={20} /> : <ShieldCheck size={20} />}
                        </div>
                        <div className="min-w-0">
                            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 mb-1 leading-none">
                                RERA Status
                            </p>
                            <p className={`text-sm font-black tracking-tight leading-tight ${reraVerified ? 'text-emerald-700' : 'text-slate-500'}`}>
                                {reraVerified ? 'Verified' : 'Pending Verification'}
                            </p>
                            {reraId && (
                                <p className="text-[9px] text-slate-400 font-medium mt-0.5 truncate font-mono tracking-wider">
                                    {reraId}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyStatusStrip;
