import React, { useState } from 'react';
import { RoomDekhoView, RoomListing } from './types';
import RoomDekhoNavbar from './RoomDekhoNavbar';
import RoomDekhoHome from './RoomDekhoHome';
import RoomDekhoMap from './RoomDekhoMap';
import RoomDekhoDetail from './RoomDekhoDetail';
import RoomDekhoListForm from './RoomDekhoListForm';
import RoomDekhoCity from './RoomDekhoCity';
import RoomDekhoBlog from './RoomDekhoBlog';
import RoomDekhoBlogPost from './RoomDekhoBlogPost';

// Mock Data
const INITIAL_ROOMS: RoomListing[] = [
    // Mumbai
    {
        id: 'r1',
        ownerName: 'Amit Sharma',
        phone: '9876543210',
        city: 'Mumbai',
        locality: 'Andheri West',
        propertyType: 'Single Room',
        rent: 15000,
        deposit: 30000,
        isAvailable: true,
        availableFrom: 'Immediately',
        photos: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2076&auto=format&fit=crop'
        ],
        description: 'Spacious single room in a 3BHK flat. Fully furnished with AC, bed, and wardrobe. Maid and cook available.',
        coordinates: [19.1363, 72.8277],
        amenities: ['AC', 'WiFi', 'Attached Washroom', 'Washing Machine'],
        occupancyPreference: 'Male',
        createdAt: '2023-10-01'
    },
    {
        id: 'r2',
        ownerName: 'Priya Desai',
        phone: '9876543211',
        city: 'Mumbai',
        locality: 'Bandra',
        propertyType: '1BHK',
        rent: 35000,
        deposit: 100000,
        isAvailable: true,
        availableFrom: 'Next Week',
        photos: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Cozy 1BHK in the heart of Bandra. Sea view, walking distance to cafes and transport.',
        coordinates: [19.0596, 72.8295],
        amenities: ['Sea View', 'Lift', 'Parking', 'Security'],
        occupancyPreference: 'Any',
        createdAt: '2023-10-15'
    },
    // Bangalore
    {
        id: 'r3',
        ownerName: 'Neha Reddy',
        phone: '9123456780',
        city: 'Bangalore',
        locality: 'Koramangala',
        propertyType: 'PG',
        rent: 12000,
        deposit: 12000,
        isAvailable: true,
        availableFrom: 'Next Month',
        photos: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
        ],
        description: 'Premium Girls PG with food included. Daily housekeeping, high-speed WiFi, and secure biometric entry.',
        coordinates: [12.9279, 77.6271],
        amenities: ['Food Included', 'WiFi', 'CCTV', 'Power Backup'],
        occupancyPreference: 'Female',
        createdAt: '2023-10-05'
    },
    {
        id: 'r4',
        ownerName: 'Vikram Singh',
        phone: '9123456781',
        city: 'Bangalore',
        locality: 'HSR Layout',
        propertyType: 'Double Sharing',
        rent: 8500,
        deposit: 15000,
        isAvailable: true,
        availableFrom: 'Immediately',
        photos: [
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop'
        ],
        description: 'Double sharing room in a luxury 4BHK apartment. Pool, Gym, and Club House access.',
        coordinates: [12.9121, 77.6446],
        amenities: ['Gym', 'Pool', 'Club House', 'AC'],
        occupancyPreference: 'Male',
        createdAt: '2023-10-12'
    },
    // Delhi
    {
        id: 'r5',
        ownerName: 'Rahul Verma',
        phone: '9988776655',
        city: 'Delhi',
        locality: 'Hauz Khas',
        propertyType: '1BHK',
        rent: 22000,
        deposit: 44000,
        isAvailable: true,
        availableFrom: 'Immediately',
        photos: [
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Independent 1BHK near Hauz Khas village. Ideal for couples or working professionals.',
        coordinates: [28.5494, 77.2001],
        amenities: ['Semi-furnished', 'Balcony', 'Parking'],
        occupancyPreference: 'Any',
        createdAt: '2023-10-10'
    },
    {
        id: 'r6',
        ownerName: 'Sanjay Gupta',
        phone: '9988776656',
        city: 'Delhi',
        locality: 'Vasant Kunj',
        propertyType: 'Flatmate',
        rent: 14000,
        deposit: 28000,
        isAvailable: true,
        availableFrom: 'Next Week',
        photos: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Looking for a flatmate in a fully furnished 3BHK. Modern kitchen, spacious living room, near malls.',
        coordinates: [28.5293, 77.1531],
        amenities: ['Fully Furnished', 'Modular Kitchen', 'Park Facing'],
        occupancyPreference: 'Any',
        createdAt: '2023-10-18'
    },
    // Pune
    {
        id: 'r7',
        ownerName: 'Rohan Patil',
        phone: '7766554433',
        city: 'Pune',
        locality: 'Kalyani Nagar',
        propertyType: 'Single Room',
        rent: 11000,
        deposit: 25000,
        isAvailable: true,
        availableFrom: 'Immediately',
        photos: [
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Peaceful single room in a vibrant neighborhood. Lots of greenery, close to IT parks.',
        coordinates: [18.5483, 73.9033],
        amenities: ['Balcony', 'WiFi', 'Maid', 'Parking'],
        occupancyPreference: 'Any',
        createdAt: '2023-10-02'
    },
    {
        id: 'r8',
        ownerName: 'Aditi Joshi',
        phone: '7766554434',
        city: 'Pune',
        locality: 'Baner',
        propertyType: '2BHK',
        rent: 26000,
        deposit: 60000,
        isAvailable: false,
        availableFrom: 'Rented out',
        photos: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
        ],
        description: 'Premium 2BHK flat in a gated society with full amenities.',
        coordinates: [18.5590, 73.7868],
        amenities: ['Gym', 'Pool', 'Security', 'Power Backup'],
        occupancyPreference: 'Family',
        createdAt: '2023-09-25'
    },
    // Gurugram
    {
        id: 'r9',
        ownerName: 'Nitin Yadav',
        phone: '8899001122',
        city: 'Gurugram',
        locality: 'Sector 56',
        propertyType: 'PG',
        rent: 14000,
        deposit: 14000,
        isAvailable: true,
        availableFrom: 'Immediately',
        photos: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'
        ],
        description: 'Luxury Boys PG with premium food and cleaning. Near rapid metro.',
        coordinates: [28.4239, 77.0984],
        amenities: ['AC', 'Food Included', 'WiFi', 'Laundry'],
        occupancyPreference: 'Male',
        createdAt: '2023-10-10'
    },
    // Hyderabad
    {
        id: 'r10',
        ownerName: 'Sneha Reddy',
        phone: '9900112233',
        city: 'Hyderabad',
        locality: 'Gachibowli',
        propertyType: 'Double Sharing',
        rent: 7500,
        deposit: 15000,
        isAvailable: true,
        availableFrom: 'Tomorrow',
        photos: [
            'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop'
        ],
        description: 'Looking for a female flatmate to share a master bedroom in Gachibowli. 5 mins from Wipro circle.',
        coordinates: [17.4401, 78.3489],
        amenities: ['Geyser', 'Washing Machine', 'Fridge', 'Cook'],
        occupancyPreference: 'Female',
        createdAt: '2023-10-20'
    }
];

interface RoomDekhoAppProps {
    onExit: () => void;
}

const RoomDekhoApp: React.FC<RoomDekhoAppProps> = ({ onExit }) => {
    const [currentView, setCurrentView] = useState<RoomDekhoView>('home');
    const [rooms, setRooms] = useState<RoomListing[]>(INITIAL_ROOMS);
    
    // View State
    const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

    const navigate = (view: RoomDekhoView, params?: { roomId?: string, city?: string, postId?: string }) => {
        if (params?.roomId) setSelectedRoomId(params.roomId);
        if (params?.city) setSelectedCity(params.city);
        if (params?.postId) setSelectedPostId(params.postId);
        setCurrentView(view);
        window.scrollTo(0, 0);
    };

    const handleAddRoom = (newRoom: RoomListing) => {
        setRooms([newRoom, ...rooms]);
        navigate('map', { city: newRoom.city });
    };

    const renderContent = () => {
        switch (currentView) {
            case 'home':
                return <RoomDekhoHome onNavigate={navigate} />;
            case 'map':
                return <RoomDekhoMap rooms={rooms} initialCity={selectedCity} onNavigate={navigate} />;
            case 'detail':
                const room = rooms.find(r => r.id === selectedRoomId);
                return <RoomDekhoDetail room={room} onNavigate={navigate} />;
            case 'list':
                return <RoomDekhoListForm onAddRoom={handleAddRoom} onNavigate={navigate} />;
            case 'city':
                return <RoomDekhoCity city={selectedCity} rooms={rooms} onNavigate={navigate} />;
            case 'blog':
                return <RoomDekhoBlog onNavigate={navigate} />;
            case 'blog-post':
                return <RoomDekhoBlogPost postId={selectedPostId} onNavigate={navigate} />;
            default:
                return <RoomDekhoHome onNavigate={navigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-violet-200">
            <RoomDekhoNavbar onNavigate={navigate} onExit={onExit} currentView={currentView} />
            <main>
                {renderContent()}
            </main>
        </div>
    );
};

export default RoomDekhoApp;
