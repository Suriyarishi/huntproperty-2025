import React from 'react';
import {
    getPossessionConfig,
    getPropertyTypeConfig,
    formatPossessionLabel,
    legacyStatusToKey,
    isHighRisk,
    type PossessionStatusKey,
    type PrimaryPropertyType,
} from '../services/propertyConstants';
import { AlertTriangle, Clock, CheckCircle2, Zap } from 'lucide-react';

// ─── POSSESSION STATUS BADGE ──────────────────────────────────────

interface PossessionBadgeProps {
    /** Structured key from the possession status system */
    statusKey?: PossessionStatusKey;
    /** Legacy raw string (e.g., from Project.status) — auto-mapped */
    legacyStatus?: string;
    /** Optional date to append (e.g., "Dec 2026") */
    date?: string;
    /** Visual variant */
    size?: 'sm' | 'md' | 'lg';
    /** Show the animated dot indicator */
    showDot?: boolean;
    /** Show a warning icon for high-risk statuses */
    showRiskIcon?: boolean;
}

export const PossessionBadge: React.FC<PossessionBadgeProps> = ({
    statusKey,
    legacyStatus,
    date,
    size = 'md',
    showDot = true,
    showRiskIcon = true,
}) => {
    const key = statusKey ?? legacyStatusToKey(legacyStatus ?? '');
    const config = getPossessionConfig(key);
    const label = formatPossessionLabel(key, date);
    const highRisk = isHighRisk(key) && showRiskIcon;

    const sizeClasses = {
        sm: 'px-2 py-1 text-[9px] gap-1',
        md: 'px-3 py-1.5 text-[10px] gap-1.5',
        lg: 'px-4 py-2 text-xs gap-2',
    };

    const dotSizes = {
        sm: 'w-1.5 h-1.5',
        md: 'w-2 h-2',
        lg: 'w-2.5 h-2.5',
    };

    return (
        <span className={`
            inline-flex items-center font-black uppercase tracking-widest rounded-full border
            whitespace-nowrap select-none
            ${config.color} ${config.textColor} ${config.borderColor}
            ${sizeClasses[size]}
        `}>
            {showDot && (
                <span className={`${dotSizes[size]} ${config.dotColor} rounded-full shrink-0 ${
                    config.group === 'ready' ? 'animate-pulse' : ''
                }`} />
            )}
            {highRisk ? (
                <AlertTriangle size={size === 'lg' ? 12 : 10} className="shrink-0" />
            ) : config.group === 'ready' ? (
                <CheckCircle2 size={size === 'lg' ? 12 : 10} className="shrink-0" />
            ) : null}
            {label}
        </span>
    );
};

// ─── PROPERTY TYPE BADGE ──────────────────────────────────────────

interface PropertyTypeBadgeProps {
    type: PrimaryPropertyType;
    subtype?: string;
    size?: 'sm' | 'md' | 'lg';
    showEmoji?: boolean;
}

export const PropertyTypeBadge: React.FC<PropertyTypeBadgeProps> = ({
    type,
    subtype,
    size = 'md',
    showEmoji = true,
}) => {
    const config = getPropertyTypeConfig(type);

    const sizeClasses = {
        sm: 'px-2 py-1 text-[9px] gap-1',
        md: 'px-3 py-1.5 text-[10px] gap-1.5',
        lg: 'px-4 py-2 text-xs gap-2',
    };

    return (
        <span className={`
            inline-flex items-center font-black uppercase tracking-widest rounded-full border
            whitespace-nowrap
            ${config.color} ${config.textColor} ${config.borderColor}
            ${sizeClasses[size]}
        `}>
            {showEmoji && <span className="text-base leading-none">{config.emoji}</span>}
            {subtype ?? config.label}
        </span>
    );
};

// ─── COMBINED BADGE ROW ───────────────────────────────────────────

interface PropertyBadgeRowProps {
    type: PrimaryPropertyType;
    subtype?: string;
    statusKey?: PossessionStatusKey;
    legacyStatus?: string;
    possessionDate?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const PropertyBadgeRow: React.FC<PropertyBadgeRowProps> = ({
    type, subtype, statusKey, legacyStatus, possessionDate, size = 'md'
}) => (
    <div className="flex flex-wrap items-center gap-2">
        <PropertyTypeBadge type={type} subtype={subtype} size={size} />
        <PossessionBadge statusKey={statusKey} legacyStatus={legacyStatus} date={possessionDate} size={size} />
    </div>
);

// ─── INLINE STATUS TEXT ───────────────────────────────────────────

/** Lightweight single-line status with colored text — no pill, no border */
interface StatusTextProps {
    statusKey?: PossessionStatusKey;
    legacyStatus?: string;
    date?: string;
    className?: string;
}

export const PossessionStatusText: React.FC<StatusTextProps> = ({
    statusKey, legacyStatus, date, className = ''
}) => {
    const key = statusKey ?? legacyStatusToKey(legacyStatus ?? '');
    const config = getPossessionConfig(key);
    const label = formatPossessionLabel(key, date);

    return (
        <span className={`text-xs font-bold inline-flex items-center gap-1.5 ${config.textColor} ${className}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} shrink-0`} />
            {label}
        </span>
    );
};

export default PossessionBadge;
