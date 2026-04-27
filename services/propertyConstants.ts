// ─────────────────────────────────────────────────────────────────
// HUNTPROPERTY — PROPERTY CLASSIFICATION SYSTEM
// Single source of truth for all property types and possession statuses
// ─────────────────────────────────────────────────────────────────

// ── TYPES ─────────────────────────────────────────────────────────

export type PrimaryPropertyType = 
    | 'Residential'
    | 'Commercial'
    | 'Residential Plot'
    | 'Agricultural';

export type ExtendedPropertySubtype =
    // Residential subtypes
    | 'Apartment'
    | 'Villa'
    | 'Independent House'
    | 'Studio Apartment'
    | 'Penthouse'
    | 'Builder Floor'
    // Commercial subtypes
    | 'Office Space'
    | 'Retail Shop'
    | 'Showroom'
    | 'Warehouse'
    | 'Food Court'
    // Special Land
    | 'Industrial Land'
    | 'Farm Land'
    | 'Agricultural Land';

export type PossessionStatusKey =
    // READY GROUP
    | 'ready_to_move'
    | 'immediate_possession'
    | 'completed'
    // UNDER CONSTRUCTION GROUP
    | 'under_construction'
    | 'near_possession'
    | 'mid_construction'
    | 'early_stage'
    // UPCOMING GROUP
    | 'pre_launch'
    | 'new_launch'
    | 'upcoming'
    // SPECIAL / RISK
    | 'delayed'
    | 'on_hold'
    | 'rera_pending';

export type PossessionGroup = 'ready' | 'construction' | 'upcoming' | 'special';

// ── PROPERTY TYPE DEFINITIONS ─────────────────────────────────────

export interface PropertyTypeConfig {
    id: PrimaryPropertyType;
    label: string;
    emoji: string;
    color: string;          // Tailwind BG
    textColor: string;      // Tailwind text
    borderColor: string;    // Tailwind border
    subtypes: ExtendedPropertySubtype[];
    description: string;
}

export const PROPERTY_TYPES: PropertyTypeConfig[] = [
    {
        id: 'Residential',
        label: 'Residential',
        emoji: '🏠',
        color: 'bg-blue-50',
        textColor: 'text-blue-700',
        borderColor: 'border-blue-200',
        subtypes: ['Apartment', 'Villa', 'Independent House', 'Studio Apartment', 'Penthouse', 'Builder Floor'],
        description: 'Homes, apartments & villas',
    },
    {
        id: 'Commercial',
        label: 'Commercial',
        emoji: '🏢',
        color: 'bg-violet-50',
        textColor: 'text-violet-700',
        borderColor: 'border-violet-200',
        subtypes: ['Office Space', 'Retail Shop', 'Showroom', 'Warehouse', 'Food Court'],
        description: 'Offices, shops & commercial spaces',
    },
    {
        id: 'Residential Plot',
        label: 'Plot',
        emoji: '📐',
        color: 'bg-amber-50',
        textColor: 'text-amber-700',
        borderColor: 'border-amber-200',
        subtypes: [],
        description: 'Residential & development plots',
    },
    {
        id: 'Agricultural',
        label: 'Agricultural',
        emoji: '🌾',
        color: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
        subtypes: ['Farm Land', 'Agricultural Land', 'Industrial Land'],
        description: 'Agricultural & farm land',
    },
];

// ── POSSESSION STATUS SYSTEM ──────────────────────────────────────

export interface PossessionStatusConfig {
    key: PossessionStatusKey;
    label: string;
    group: PossessionGroup;
    color: string;          // Tailwind BG
    textColor: string;      // Tailwind text
    borderColor: string;    // Tailwind border
    dotColor: string;       // Indicator dot
    priority: number;       // Sort order (lower = more ready)
    riskLevel: 'none' | 'low' | 'medium' | 'high';
}

export const POSSESSION_STATUSES: PossessionStatusConfig[] = [
    // ── READY GROUP ──────────────────────────────────────────
    {
        key: 'ready_to_move',
        label: 'Ready to Move',
        group: 'ready',
        color: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
        dotColor: 'bg-emerald-500',
        priority: 1,
        riskLevel: 'none',
    },
    {
        key: 'immediate_possession',
        label: 'Immediate Possession',
        group: 'ready',
        color: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
        dotColor: 'bg-emerald-500',
        priority: 2,
        riskLevel: 'none',
    },
    {
        key: 'completed',
        label: 'Completed',
        group: 'ready',
        color: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
        dotColor: 'bg-emerald-400',
        priority: 3,
        riskLevel: 'none',
    },
    // ── UNDER CONSTRUCTION GROUP ──────────────────────────────
    {
        key: 'near_possession',
        label: 'Near Possession',
        group: 'construction',
        color: 'bg-yellow-50',
        textColor: 'text-yellow-700',
        borderColor: 'border-yellow-200',
        dotColor: 'bg-yellow-500',
        priority: 4,
        riskLevel: 'low',
    },
    {
        key: 'under_construction',
        label: 'Under Construction',
        group: 'construction',
        color: 'bg-orange-50',
        textColor: 'text-orange-700',
        borderColor: 'border-orange-200',
        dotColor: 'bg-orange-500',
        priority: 5,
        riskLevel: 'low',
    },
    {
        key: 'mid_construction',
        label: 'Mid Construction',
        group: 'construction',
        color: 'bg-orange-50',
        textColor: 'text-orange-700',
        borderColor: 'border-orange-200',
        dotColor: 'bg-orange-400',
        priority: 6,
        riskLevel: 'low',
    },
    {
        key: 'early_stage',
        label: 'Early Stage',
        group: 'construction',
        color: 'bg-orange-50',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        dotColor: 'bg-orange-400',
        priority: 7,
        riskLevel: 'medium',
    },
    // ── UPCOMING GROUP ─────────────────────────────────────────
    {
        key: 'new_launch',
        label: 'New Launch',
        group: 'upcoming',
        color: 'bg-sky-50',
        textColor: 'text-sky-700',
        borderColor: 'border-sky-200',
        dotColor: 'bg-sky-500',
        priority: 8,
        riskLevel: 'medium',
    },
    {
        key: 'pre_launch',
        label: 'Pre-Launch',
        group: 'upcoming',
        color: 'bg-sky-50',
        textColor: 'text-sky-700',
        borderColor: 'border-sky-200',
        dotColor: 'bg-sky-400',
        priority: 9,
        riskLevel: 'medium',
    },
    {
        key: 'upcoming',
        label: 'Upcoming',
        group: 'upcoming',
        color: 'bg-sky-50',
        textColor: 'text-sky-600',
        borderColor: 'border-sky-200',
        dotColor: 'bg-sky-400',
        priority: 10,
        riskLevel: 'medium',
    },
    // ── SPECIAL / RISK GROUP ──────────────────────────────────
    {
        key: 'delayed',
        label: 'Delayed',
        group: 'special',
        color: 'bg-red-50',
        textColor: 'text-red-700',
        borderColor: 'border-red-200',
        dotColor: 'bg-red-500',
        priority: 11,
        riskLevel: 'high',
    },
    {
        key: 'on_hold',
        label: 'On Hold',
        group: 'special',
        color: 'bg-red-50',
        textColor: 'text-red-700',
        borderColor: 'border-red-200',
        dotColor: 'bg-red-400',
        priority: 12,
        riskLevel: 'high',
    },
    {
        key: 'rera_pending',
        label: 'RERA Pending',
        group: 'special',
        color: 'bg-slate-100',
        textColor: 'text-slate-600',
        borderColor: 'border-slate-300',
        dotColor: 'bg-slate-400',
        priority: 13,
        riskLevel: 'high',
    },
];

// ── POSSESSION GROUP META ─────────────────────────────────────────

export const POSSESSION_GROUPS: Record<PossessionGroup, { label: string; color: string; textColor: string }> = {
    ready:        { label: 'Ready',            color: 'bg-emerald-50',  textColor: 'text-emerald-700' },
    construction: { label: 'Under Construction', color: 'bg-orange-50', textColor: 'text-orange-700'  },
    upcoming:     { label: 'Upcoming',         color: 'bg-sky-50',      textColor: 'text-sky-700'     },
    special:      { label: 'Special Cases',    color: 'bg-red-50',      textColor: 'text-red-700'     },
};

// ── HELPER FUNCTIONS ──────────────────────────────────────────────

/** Get the config for a single possession status key */
export function getPossessionConfig(key: PossessionStatusKey): PossessionStatusConfig {
    return POSSESSION_STATUSES.find(s => s.key === key) ?? POSSESSION_STATUSES[4]; // default: under_construction
}

/** Get property type config */
export function getPropertyTypeConfig(type: PrimaryPropertyType): PropertyTypeConfig {
    return PROPERTY_TYPES.find(t => t.id === type) ?? PROPERTY_TYPES[0];
}

/**
 * Format possession label with optional date.
 * 
 * Examples:
 *   formatPossessionLabel('ready_to_move')           → "Ready to Move"
 *   formatPossessionLabel('under_construction', 'Dec 2026') → "Under Construction – Dec 2026"
 *   formatPossessionLabel('pre_launch', '2028')      → "Pre-Launch – Possession by 2028"
 */
export function formatPossessionLabel(key: PossessionStatusKey, date?: string): string {
    const config = getPossessionConfig(key);
    if (!date) return config.label;

    // Plot-specific: if the date itself IS the status label, use it directly
    if (date === 'Ready to Registry') return 'Ready to Registry';

    if (key === 'ready_to_move' || key === 'immediate_possession' || key === 'completed') {
        return `${config.label} – Available Now`;
    }
    if (key === 'pre_launch' || key === 'upcoming') {
        return `${config.label} – Possession by ${date}`;
    }
    return `${config.label} – ${date}`;
}

/** Map legacy Project.status strings to possession keys */
export function legacyStatusToKey(status: string): PossessionStatusKey {
    const map: Record<string, PossessionStatusKey> = {
        'Ready to Move':     'ready_to_move',
        'Ready to Registry': 'ready_to_move',   // Plot equivalent of Ready to Move
        'Launching Soon':    'pre_launch',
        'Under Construction':'under_construction',
        'New Launch':        'new_launch',
        'Pre-launch':        'pre_launch',
        'Completed':         'completed',
        'Delayed':           'delayed',
        'On Hold':           'on_hold',
    };
    return map[status] ?? 'under_construction';
}

/** Get statuses for a given group, sorted by priority */
export function getStatusesByGroup(group: PossessionGroup): PossessionStatusConfig[] {
    return POSSESSION_STATUSES.filter(s => s.group === group).sort((a, b) => a.priority - b.priority);
}

/** Check if a project is high risk */
export function isHighRisk(key: PossessionStatusKey): boolean {
    return getPossessionConfig(key).riskLevel === 'high';
}
