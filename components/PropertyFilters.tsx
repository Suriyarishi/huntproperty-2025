import React, { useState } from 'react';
import {
    PROPERTY_TYPES, POSSESSION_STATUSES, POSSESSION_GROUPS,
    getStatusesByGroup,
    type PrimaryPropertyType,
    type PossessionStatusKey,
    type PossessionGroup,
} from '../services/propertyConstants';
import { X, SlidersHorizontal, ChevronDown } from 'lucide-react';

// ─── TYPES ────────────────────────────────────────────────────────

export interface PropertyFilterState {
    types: PrimaryPropertyType[];
    statuses: PossessionStatusKey[];
}

interface PropertyFiltersProps {
    value: PropertyFilterState;
    onChange: (filters: PropertyFilterState) => void;
    /** Compact inline layout (for sticky search bars) vs full expanded panel */
    variant?: 'bar' | 'panel';
    className?: string;
}

// ─── FILTER COMPONENT ─────────────────────────────────────────────

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
    value,
    onChange,
    variant = 'bar',
    className = '',
}) => {
    const [statusGroupOpen, setStatusGroupOpen] = useState<PossessionGroup | null>(null);
    const [panelExpanded, setPanelExpanded] = useState(false);

    const toggleType = (type: PrimaryPropertyType) => {
        const next = value.types.includes(type)
            ? value.types.filter(t => t !== type)
            : [...value.types, type];
        onChange({ ...value, types: next });
    };

    const toggleStatus = (key: PossessionStatusKey) => {
        const next = value.statuses.includes(key)
            ? value.statuses.filter(s => s !== key)
            : [...value.statuses, key];
        onChange({ ...value, statuses: next });
    };

    const clearAll = () => onChange({ types: [], statuses: [] });
    const totalActive = value.types.length + value.statuses.length;

    // ── BAR VARIANT (horizontal scrolling filter row) ─────────────
    if (variant === 'bar') {
        return (
            <div className={`flex flex-col gap-3 ${className}`}>
                {/* Property Types */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
                    {PROPERTY_TYPES.map(({ id, label, emoji, color, textColor, borderColor }) => {
                        const active = value.types.includes(id);
                        return (
                            <button
                                key={id}
                                onClick={() => toggleType(id)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap border transition-all shrink-0 ${
                                    active
                                        ? `bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20`
                                        : `bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-900`
                                }`}
                            >
                                <span className={active ? '' : 'opacity-60'}>{emoji}</span>
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Possession Status Filters */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
                    {(Object.keys(POSSESSION_GROUPS) as PossessionGroup[]).map(group => {
                        const groupStatuses = getStatusesByGroup(group);
                        const anyActive = groupStatuses.some(s => value.statuses.includes(s.key));
                        const meta = POSSESSION_GROUPS[group];

                        return (
                            <div key={group} className="relative shrink-0">
                                <button
                                    onClick={() => setStatusGroupOpen(statusGroupOpen === group ? null : group)}
                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap border transition-all ${
                                        anyActive
                                            ? `${meta.color} ${meta.textColor} border-current`
                                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                                    }`}
                                >
                                    {anyActive && <span className="w-2 h-2 bg-emerald-500 rounded-full" />}
                                    {meta.label}
                                    <ChevronDown size={12} className={`transition-transform ${statusGroupOpen === group ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Group Dropdown */}
                                {statusGroupOpen === group && (
                                    <div className="absolute top-full mt-2 left-0 z-50 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl min-w-[200px] space-y-1.5">
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 px-2 pb-1">{meta.label}</p>
                                        {groupStatuses.map(status => {
                                            const active = value.statuses.includes(status.key);
                                            return (
                                                <button
                                                    key={status.key}
                                                    onClick={() => { toggleStatus(status.key); }}
                                                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-[10px] font-black uppercase tracking-widest transition-all ${
                                                        active
                                                            ? `${status.color} ${status.textColor} border ${status.borderColor}`
                                                            : 'hover:bg-slate-50 text-slate-600'
                                                    }`}
                                                >
                                                    <span className={`w-2 h-2 rounded-full shrink-0 ${status.dotColor}`} />
                                                    {status.label}
                                                    {active && <X size={10} className="ml-auto shrink-0" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Clear All */}
                    {totalActive > 0 && (
                        <button
                            onClick={clearAll}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap bg-slate-950 text-white border border-slate-950 shrink-0 hover:bg-slate-800 transition-colors"
                        >
                            <X size={11} /> Clear ({totalActive})
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // ── PANEL VARIANT (full expanded filter panel) ─────────────────
    return (
        <div className={`bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm ${className}`}>
            {/* Header */}
            <button
                onClick={() => setPanelExpanded(!panelExpanded)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <SlidersHorizontal size={16} className="text-slate-500" />
                    <span className="text-sm font-black text-slate-950 uppercase tracking-widest">Filters</span>
                    {totalActive > 0 && (
                        <span className="w-5 h-5 bg-emerald-600 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                            {totalActive}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    {totalActive > 0 && (
                        <button onClick={e => { e.stopPropagation(); clearAll(); }} className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-950 transition-colors">
                            Clear All
                        </button>
                    )}
                    <ChevronDown size={16} className={`text-slate-400 transition-transform ${panelExpanded ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {panelExpanded && (
                <div className="border-t border-slate-100 px-6 py-5 space-y-7">
                    {/* Property Types */}
                    <div className="space-y-3">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Property Type</p>
                        <div className="grid grid-cols-2 gap-2.5">
                            {PROPERTY_TYPES.map(({ id, label, emoji, color, textColor, borderColor }) => {
                                const active = value.types.includes(id);
                                return (
                                    <button
                                        key={id}
                                        onClick={() => toggleType(id)}
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                                            active
                                                ? `${color} ${textColor} ${borderColor} shadow-sm`
                                                : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <span className="text-xl leading-none">{emoji}</span>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-0.5">{label}</p>
                                        </div>
                                        {active && (
                                            <span className="ml-auto w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Possession Status Groups */}
                    {(Object.keys(POSSESSION_GROUPS) as PossessionGroup[]).map(group => {
                        const statuses = getStatusesByGroup(group);
                        const meta = POSSESSION_GROUPS[group];
                        return (
                            <div key={group} className="space-y-3">
                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{meta.label}</p>
                                <div className="flex flex-wrap gap-2">
                                    {statuses.map(status => {
                                        const active = value.statuses.includes(status.key);
                                        return (
                                            <button
                                                key={status.key}
                                                onClick={() => toggleStatus(status.key)}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                                                    active
                                                        ? `${status.color} ${status.textColor} ${status.borderColor} shadow-sm`
                                                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'
                                                }`}
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? status.dotColor : 'bg-slate-300'}`} />
                                                {status.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PropertyFilters;
