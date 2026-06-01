export type RoomType = 'Single Room' | 'Double Sharing' | '1BHK' | '2BHK' | 'PG' | 'Flatmate';
export type Occupancy = 'Any' | 'Male' | 'Female' | 'Family';

export interface RoomListing {
    id: string;
    ownerName: string;
    phone: string;
    city: string;
    locality: string;
    propertyType: RoomType;
    rent: number;
    deposit?: number;
    isAvailable: boolean;
    availableFrom: string;
    photos: string[];
    description: string;
    coordinates: [number, number]; // [lat, lng]
    amenities: string[];
    occupancyPreference: Occupancy;
    createdAt: string;
}

export type RoomDekhoView = 'home' | 'map' | 'detail' | 'list' | 'city' | 'blog' | 'blog-post';
