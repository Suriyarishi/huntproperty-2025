import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import ProjectCard from './components/ProjectCard';
import PropertyDetail from './components/PropertyDetail';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import AddPropertyFlow from './components/AddPropertyFlow';
import ListingsView from './components/ListingsView';
import AgentsView from './components/AgentsView';
import SellView from './components/SellView';
import InsightsView from './components/InsightsView';
import InsightDetailView from './components/InsightDetailView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import AgentDashboardView from './components/AgentDashboardView';
import DeveloperDashboardView from './components/DeveloperDashboardView';
import ProjectListingFlow from './components/ProjectListingFlow';
import SpinModule from './components/SpinModule';
import HomeLoanView from './components/HomeLoanView';
import HomeLoanCalculatorView from './components/HomeLoanCalculatorView';
import ChannelPartnerView from './components/ChannelPartnerView';
import InvestorsRelationView from './components/InvestorsRelationView';
import CareerView from './components/CareerView';
import DashboardView from './components/DashboardView';
import AdPackagesView from './components/AdPackagesView';
import WorthCalculatorView from './components/WorthCalculatorView';
import PropertyCostCalulatorView from './components/PropertyCostCalulator';
import CustomerCareView from './components/CustomerCareView';
import AdvertiseWithUsView from './components/AdvertiseWithUsView';
import HomeServices from './components/HomeServices';
import InstagramFeed from './components/InstagramFeed';
import PostRequirementView from './components/PostRequirementView';
import VastuView from './components/VastuView';
import AboutUsView from './components/AboutUsView';
import TermsAndConditionsView from './components/TermsAndConditionsView';
import PrivacyPolicyView from './components/PrivacyPolicyView';
import RefundPolicyView from './components/RefundPolicyView';
import PackagePolicyView from './components/PackagePolicyView';
import SearchProjectView from './components/SearchProjectView';
import TestimonialsView from './components/TestimonialsView';
import SitemapView from './components/SitemapView';
import ProjectDetailView from './components/ProjectDetailView';
import PlotProjectDetailView from './components/PlotProjectDetailView';
import CommercialProjectDetailView from './components/CommercialProjectDetailView';
import AgriculturalProjectDetailView from './components/AgriculturalProjectDetailView';
import BuilderProjectCard from './components/BuilderProjectCard';
import BuilderProjectsView from './components/BuilderProjectsView';
import BuilderOverviewView from './components/BuilderOverviewView';
import CategorySelectionView from './components/CategorySelectionView';
import ProjectListingView from './components/ProjectListingView';
import UnitDetailView from './components/UnitDetailView';
import MinimalistProjectCard from './components/MinimalistProjectCard';
import FeaturedPropertyCard from './components/FeaturedPropertyCard';
import GodrejNoidaShowcase from './components/GodrejNoidaShowcase';
import { ReraView, LegalAdvisoryView, MasterPlanView, NewsGalleryView, MediaGalleryView, VideoGalleryView, ArticlesView, NRICenterView, CovidView } from './components/ToolsViews';
import BoostedSection from './components/BoostedSection';
import { Property, Testimonial, Insight, Project, Builder } from './types';
import { Loader2, ArrowRight, Sparkles, Home, Repeat, Key, Building2, MapPin, Zap, Layout } from 'lucide-react';

// Mock Data
const PROPERTIES: Property[] = [
    {
        id: '1',
        title: "Neon Horizon Penthouse",
        price: "$4,500,000",
        location: "Downtown District, Neo-Tokyo",
        beds: 3,
        baths: 3.5,
        sqft: 2800,
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        tags: ["Luxury", "Penthouse"],
        description: "A masterpiece of modern architecture perched atop the city's tallest residential tower.",
        category: "luxury",
        activeBoost: true,
        boostPackage: 'Platinum'
    },
    {
        id: '2',
        title: "Zenith Garden Villa",
        price: "$2,800,000",
        location: "Emerald Hills, California",
        beds: 4,
        baths: 4,
        sqft: 3500,
        imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
        tags: ["Eco-Smart", "Villa"],
        description: "Seamlessly blending nature and technology with sustainable infrastructure.",
        category: "smart"
    },
    {
        id: '3',
        title: "Glass Cube Loft",
        price: "$1,200,000",
        location: "Arts District, Berlin",
        beds: 2,
        baths: 2,
        sqft: 1800,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Loft", "Featured"],
        description: "Industrial-chic loft with 20ft ceilings and modular layout.",
        category: "featured"
    }
];

const RESALE_PROPERTIES: Property[] = [
    {
        id: 'r1',
        title: "Classic Urban Condo",
        price: "₹ 1.45 Cr",
        location: "Koramangala, Bengaluru",
        beds: 2,
        baths: 2,
        sqft: 1250,
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        tags: ["Resale", "Prime Location"],
        description: "Well-maintained unit in a established premium community.",
        activeBoost: true,
        boostPackage: 'Silver'
    },
    {
        id: 'r2',
        title: "Modern Skyline Flat",
        price: "₹ 95 L",
        location: "Sector 62, Noida",
        beds: 3,
        baths: 3,
        sqft: 1680,
        imageUrl: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop",
        tags: ["Resale", "High-Rise"],
        description: "Spectacular city views from the 18th floor.",
    },
    {
        id: 'r3',
        title: "Suburban Family House",
        price: "₹ 2.1 Cr",
        location: "Balanagar, Hyderabad",
        beds: 4,
        baths: 3,
        sqft: 2400,
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
        tags: ["Resale", "Independent"],
        description: "Spacious independent kothi with a private garden.",
    },
    {
        id: 'r4',
        title: "Greenwood Estate",
        price: "₹ 3.2 Cr",
        location: "Banjara Hills, Hyderabad",
        beds: 5,
        baths: 4.5,
        sqft: 4200,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Luxury", "Estate"],
        description: "Magnificent estate with automated features.",
    }
];

const RENTAL_PROPERTIES: Property[] = [
    {
        id: 'rt1',
        title: "Minimalist Studio",
        price: "₹ 25,000/mo",
        location: "Powai, Mumbai",
        beds: 1,
        baths: 1,
        sqft: 450,
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        tags: ["Rent", "Furnished"],
        description: "Perfect for working professionals in the heart of the IT hub.",
        activeBoost: true,
        boostPackage: 'Basic'
    },
    {
        id: 'rt2',
        title: "Corporate Suite",
        price: "₹ 65,000/mo",
        location: "Golf Course Rd, Gurugram",
        beds: 3,
        baths: 3,
        sqft: 1850,
        imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2076&auto=format&fit=crop",
        tags: ["Rent", "Luxury"],
        description: "High-end apartment with concierge services.",
    },
    {
        id: 'rt3',
        title: "Cozy Garden Flat",
        price: "₹ 35,000/mo",
        location: "Whitefield, Bengaluru",
        beds: 2,
        baths: 2,
        sqft: 1100,
        imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
        tags: ["Rent", "Pet Friendly"],
        description: "Quiet residential neighborhood near major tech parks.",
    },
    {
        id: 'rt4',
        title: "Sky View Terrace",
        price: "₹ 45,000/mo",
        location: "Gachibowli, Hyderabad",
        beds: 2,
        baths: 2,
        sqft: 1200,
        imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
        tags: ["Rent", "Terrace"],
        description: "Beautiful apartment with an open terrace view.",
    }
];

const PROJECTS: Project[] = [
    // --- RESIDENTIAL PROJECTS ---
    {
        id: 'p1',
        title: "Godrej Tropical Isle",
        developer: "Godrej Builder",
        location: "Sector 146, Noida",
        priceRange: "₹ 2.4 Cr - 5.8 Cr",
        units: 600,
        status: 'Under Construction',
        completionDate: "Dec 2028",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
        ],
        type: 'Residential',
        details: {
            builderSignatory: "Mr. Rajesh Godrej",
            reraNumber: "UPRERAPRJ146146",
            plotSize: "12 Acres",
            aboutBuilder: "Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry.",
            projectProfile: "Tropical Isle is an island-themed luxury residential project along the Noida–Greater Noida Expressway, featuring unique beach-entry pools and tropical landscaping.",
            towerAnalytics: {
                names: ["Island Tower A", "Island Tower B", "Azure Wing"],
                totalFloors: 32,
                flatsPerFloor: 4
            },
            accommodation: [
                { 
                    type: "3 BHK Luxury", 
                    size: "1850 Sqft", 
                    sizeSqft: 1850,
                    tower: "Island Tower A",
                    price: "₹ 2.4 Cr",
                    status: "Spacious Flat",
                    floorPlanUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                },
                { 
                    type: "4 BHK Ultra-Luxury", 
                    size: "3250 Sqft", 
                    sizeSqft: 3250,
                    tower: "Island Tower B",
                    price: "₹ 5.8 Cr",
                    status: "Luxury Flat",
                    floorPlanUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
                }
            ],
            bsp: "₹ 14,500/Sqft",
            highlights: ["Fast Selling", "Fully Furnished", "Gated Community", "Resort-Themed"],
            pricingBreakdown: {
                basePrice: "₹ 2,40,00,000",
                stampDuty: "₹ 16,80,000",
                totalCost: "₹ 2,56,80,000",
                paymentPlanBadge: "Construction-Linked Plan (20:80)"
            },
            paymentPlans: {
                clp: "10% on Booking, Construction linked slabs till possession.",
                spp: "25:75 Payment Plan with No EMI till Top-out.",
                fpp: "95% within 45 days with 10% cash discount.",
                dpp: "50% now, 50% on OC application."
            },
            surcharges: {
                leaseRent: "₹ 650/Sqft",
                clubMembership: "₹ 5,00,000",
                plc: "Corner: ₹ 500/Sqft, Beach View: ₹ 800/Sqft"
            },
            amenities: ["Beach Entry Swimming Pool", "Tropical Forest Trail", "Smart Home Automation", "7-Tier Security", "Digital Sports Suite"],
            locationAdvantage: [
                { destination: "Expressway", time: "1 Min" },
                { destination: "Sector 146 Metro", time: "0 Min (Walkable)" },
                { destination: "Knowledge Park V", time: "10 Mins" },
                { destination: "Noida Airport (Jewar)", time: "25 Mins" },
                { destination: "Mall of India", time: "15 Mins" }
            ],
            specifications: [
                { title: "Flooring", desc: "Imported Italian Marble in foyer, living, dining and formal lounge areas. Premium Vitrified tiles in bedrooms." },
                { title: "Kitchen", desc: "Modular kitchen with branded appliances, quartz countertop and piped gas connection." },
                { title: "Doors/Windows", desc: "8ft high teak wood main door. UPVC windows with toughened glass and mosquito mesh." },
                { title: "Smart Home", desc: "Fully automated lighting, climate control, and digital door locks accessible via smartphone." }
            ],
            media: {
                progressPhotos: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"],
                sampleFlatGallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"]
            }
        },
        isFeatured: true,
        views: 28400,
        saves: 2150
    },
    {
        id: 'p1_nest',
        title: "Godrej Nest",
        developer: "Godrej Builder",
        location: "Sector 150, Noida",
        priceRange: "₹ 5.50 Cr",
        units: 450,
        status: 'Ready to Move',
        completionDate: "Ready/Handover",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        ],
        type: 'Residential',
        details: {
            builderSignatory: "Mr. Rajesh Godrej",
            reraNumber: "UPRERAPRJ150150",
            plotSize: "9 Acres",
            aboutBuilder: "A legacy of trust. Godrej Nest is designed for the modern family looking for security and wellness.",
            projectProfile: "Godrej Nest in Sector 150, Noida is a signature residential project offering high-end safety features and luxury lifestyle amenities in a low-density sector.",
            towerAnalytics: {
                names: ["Tower 1", "Tower 2", "Tower 3"],
                totalFloors: 28,
                flatsPerFloor: 4
            },
            accommodation: [
                { 
                    type: "3 BHK Flat", 
                    size: "1850 Sqft", 
                    sizeSqft: 1850,
                    tower: "Tower A",
                    price: "₹ 1.8 Cr",
                    status: "Spacious Flat",
                    floorPlanUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                },
                { 
                    type: "4 BHK Flat", 
                    size: "2650 Sqft", 
                    sizeSqft: 2650,
                    tower: "Tower B",
                    price: "₹ 3.5 Cr",
                    status: "Luxury Flat",
                    floorPlanUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" 
                }
            ],
            bsp: "₹ 11,200/Sqft",
            highlights: ["Best Selling", "Fully Furnished", "Gated Community", "7-Tier Security"],
            pricingBreakdown: {
                basePrice: "₹ 5,10,00,000",
                stampDuty: "₹ 40,00,000",
                totalCost: "₹ 5,50,00,000",
                paymentPlanBadge: "Construction-Linked Plan (20:80)"
            },
            paymentPlans: {
                clp: "N/A (Ready for Possession)",
                spp: "Ready-to-move special: 20:80 scheme.",
                fpp: "Full payment within 30 days for 5% cashback.",
                dpp: "Milestone based handover plan."
            },
            surcharges: {
                leaseRent: "Included",
                clubMembership: "₹ 3,50,000",
                plc: "Golf Course Facing: ₹ 600/Sqft"
            },
            amenities: ["Concierge Services", "Wellness Center", "Cricket Field", "Oxygen Enclave", "EV Charging Station"],
            locationAdvantage: [
                { destination: "Western Express Highway", time: "5 Mins Drive" },
                { destination: "High Street Phoenix Mall", time: "10 Mins Drive" },
                { destination: "Hinduja Hospital", time: "12 Mins Drive" },
                { destination: "International Airport", time: "25 Mins Drive" },
                { destination: "Bandra-Worli Sea Link", time: "15 Mins Drive" }
            ],
            specifications: [
                { title: "Structure", desc: "Seismic zone compliant RCC frame structure with high-grade steel and concrete." },
                { title: "Paint", desc: "Acrylic emulsion paint for all interior walls. Textured weatherproof exterior finish." },
                { title: "Fitments", desc: "Branded CP and Sanitary fittings by Kohler or equivalent premium series." },
                { title: "Power", desc: "100% power backup for all apartments and common areas with super-silent gensets." }
            ],
            media: {
                progressPhotos: [],
                sampleFlatGallery: ["https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop"]
            }
        },
        views: 31200,
        saves: 2400
    },
    {
        id: 'p_godrej_plot_noida',
        title: "Godrej Parkview Plots",
        developer: "Godrej Builder",
        location: "Sector 89, Noida",
        priceRange: "₹ 1.20 Cr - 3.50 Cr",
        units: 320,
        status: 'Ready to Move',
        completionDate: "Ready/Handover",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        ],
        type: 'Plot',
        details: {
            builderRera: "UPRERAB89001",
            projectRera: "UPRERAPRJ89002",
            expectedPossession: "Ready to Registry",
            layout: [
                { blockName: "Parkview Alpha", plotsPerBlock: 120, dimensions: "12×18 Mtr (216 Sqmt)" },
                { blockName: "Parkview Beta", plotsPerBlock: 150, dimensions: "15×22 Mtr (330 Sqmt)" },
                { blockName: "Parkview Grand", plotsPerBlock: 50, dimensions: "20×30 Mtr (600 Sqmt)" }
            ],
            plans: {
                blockPlans: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop"],
                clusterPlans: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"]
            },
            pricePerUnit: "₹ 55,000 per Sqmt",
            dlp: "Development Linked Plan 30:20:20:15:15",
            developmentCharges: {
                idc: "₹ 800/Sqmt",
                edc: "₹ 1,500/Sqmt"
            },
            plcOptions: [
                "Corner Plot (+12%)",
                "Park Facing (+18%)",
                "Wide Road (24m+) Facing (+8%)",
                "North-East Facing (+5%)"
            ],
            communityFeatures: [
                "24×7 Gated Security with CCTV",
                "Landscaped Central Park (3 Acres)",
                "Underground Utility Ducting",
                "LED Solar Street Lighting",
                "Rainwater Harvesting System",
                "Grand Entrance Plaza",
                "Kids Play Zone & Amphitheatre",
                "Dedicated Cycling & Jogging Track"
            ],
            visuals: {
                siteLayoutPhotos: [
                    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
                ]
            }
        },
        isFeatured: true,
        views: 14500,
        saves: 980
    },
    {
        id: 'p2',
        title: "Chandak High-Rise",
        developer: "Chandak Builder",
        location: "Kandivali, Mumbai",
        priceRange: "₹ 1.2 Cr - 2.8 Cr",
        units: 320,
        status: 'Launching Soon',
        completionDate: "June 2027",
        imageUrl: "https://images.unsplash.com/photo-1628592102751-ba83b03bc42e?q=80&w=2070&auto=format&fit=crop",
        type: 'Residential',
        details: {
            builderSignatory: "Mr. Abhay Chandak",
            reraNumber: "P51800012345",
            plotSize: "5 Acres",
            aboutBuilder: "Chandak Group has a history of 35+ years and 4 million+ sqft developed, focusing on space efficiency and prime locations.",
            projectProfile: "Modern urban living with maximal natural light and ventilation in the heart of the suburbs.",
            towerAnalytics: {
                names: ["Wing A", "Wing B"],
                totalFloors: 40,
                flatsPerFloor: 6
            },
            accommodation: [
                { type: "1 BHK", size: "450 Sqft", floorPlanUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" },
                { type: "2 BHK", size: "750 Sqft", floorPlanUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" }
            ],
            bsp: "₹ 18,000/Sqft",
            paymentPlans: {
                clp: "10% Booking, 10 slabs of 9% each.",
                spp: "Pay 25% now, 75% on possession.",
                fpp: "Full down payment with 10% discount.",
                dpp: "Semi-upfront 50:50 plan."
            },
            surcharges: {
                leaseRent: "N/A",
                clubMembership: "₹ 2,00,000",
                plc: "Floor Rise: ₹ 50/Sqft/Floor"
            },
            amenities: ["Sky Lounge", "Crossfit Gym", "Electric Charging Points", "Automated Car Parking", "Co-working Hub"],
            locationAdvantage: [
                { destination: "Link Road", time: "1 Min" },
                { destination: "Railway Station", time: "8 Mins" },
                { destination: "Growel's Mall", time: "5 Mins" }
            ],
            media: {
                progressPhotos: [],
                sampleFlatGallery: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"]
            }
        }
    },
    {
        id: 'p3',
        title: "Veena Smart City",
        developer: "Veena Builder",
        location: "Wagholi, Pune",
        priceRange: "₹ 45 L - 95 L",
        units: 1200,
        status: 'Under Construction',
        completionDate: "Dec 2025",
        imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop",
        type: 'Residential',
        details: {
            builderSignatory: "Mr. Haresh Veena",
            reraNumber: "P52100054321",
            plotSize: "60 Acres",
            aboutBuilder: "Veena Group focuses on creating self-sustained townships with affordable luxury.",
            projectProfile: "A massive integrated township with its own school, hospital, and retail zone.",
            towerAnalytics: {
                names: ["Cluster 1", "Cluster 2", "Cluster 3"],
                totalFloors: 22,
                flatsPerFloor: 8
            },
            accommodation: [
                { type: "1 BHK", size: "550 Sqft", floorPlanUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop" },
                { type: "2 BHK", size: "850 Sqft", floorPlanUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" }
            ],
            bsp: "₹ 5,200/Sqft",
            paymentPlans: {
                clp: "Government standard 10-tier CLP.",
                spp: "Bank Subvention available.",
                fpp: "Lump sum payment discount 5%.",
                dpp: "Milestone based partial payments."
            },
            surcharges: {
                leaseRent: "₹ 150/Sqft",
                clubMembership: "₹ 50,000",
                plc: "Internal Road Facing: ₹ 50/Sqft"
            },
            amenities: ["Cricket Ground", "School within Campus", "Organic Vegetable Market", "Yoga Pavilion", "Jogging Track"],
            locationAdvantage: [
                { destination: "IT Park", time: "15 Mins" },
                { destination: "Airport", time: "25 Mins" },
                { destination: "EON Free Zone", time: "12 Mins" }
            ],
            media: {
                progressPhotos: [],
                sampleFlatGallery: []
            }
        }
    },

    // --- COMMERCIAL PROJECTS ---
    {
        id: 'p4',
        title: "Kanakia Wall Street",
        developer: "Kanakia Builder",
        location: "Andheri East, Mumbai",
        priceRange: "₹ 2.5 Cr - 15 Cr",
        units: 180,
        status: 'Ready to Move',
        completionDate: "Ready",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        type: 'Commercial',
        details: {
            reraId: "P5180005467",
            expectedPossession: "Immediate",
            builderWebsite: "https://kanakia.com",
            aboutProject: "A prestigious business address inspired by the American stock exchange, designed for financial giants.",
            totalTowers: 1,
            floorSizes: "45,000 Sqft",
            unitSizes: "1,200 - 8,500 Sqft",
            spaceTypes: [
                { type: 'Office Space', isLockable: true, minSize: '1200 Sqft' },
                { type: 'Showroom', isLockable: true, minSize: '2500 Sqft' }
            ],
            bsp: "₹ 25,000/Sqft",
            assuredReturn: "8% Rental Yield Assured",
            paymentPlans: {
                clp: "N/A (Ready Property)",
                spp: "25:75 Ready-to-move plan.",
                fpp: "Immediate payment with 5% discount.",
                dpp: "6 Month delayed payment plan."
            },
            otherCosts: {
                parking: "₹ 10,00,000 per slot",
                clubMembership: "₹ 5,00,000",
                efc_ffc: "Included"
            },
            technicalGallery: {
                floorPlans: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"],
                clusterPlans: [],
                sitePlans: []
            },
            infrastructure: ["Double Glazed Glass Facade", "Centralised Air-conditioning", "12 High-speed Elevators", "Grand Reception Lobby"],
            visuals: {
                constructionPhotos: [],
                sampleGallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"]
            }
        },
        isFeatured: true
    },
    {
        id: 'p5',
        title: "Godrej Business Hub",
        developer: "Godrej Builder",
        location: "Vikhroli, Mumbai",
        priceRange: "₹ 85 L - 4.5 Cr",
        units: 240,
        status: 'Under Construction',
        completionDate: "Aug 2026",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        type: 'Commercial',
        details: {
            reraId: "P5190008888",
            expectedPossession: "August 2026",
            builderWebsite: "https://godrej.properties",
            aboutProject: "A vibrant mix of boutique offices and high-street retail in Mumbai's fastest growing hub.",
            totalTowers: 2,
            floorSizes: "22,000 Sqft",
            unitSizes: "500 - 1,500 Sqft",
            spaceTypes: [
                { type: 'Office Space', isLockable: true, minSize: '500 Sqft' },
                { type: 'Shop', isLockable: true, minSize: '300 Sqft' },
                { type: 'Food Court', isLockable: false, minSize: '250 Sqft' }
            ],
            bsp: "₹ 16,500/Sqft",
            assuredReturn: "10% Assured Return till Possession",
            paymentPlans: {
                clp: "Standard Commercial CLP.",
                spp: "50:50 Milestone Plan.",
                fpp: "Down payment with 12% annual discount.",
                dpp: "Interest-free 2 year payment plan."
            },
            otherCosts: {
                parking: "₹ 6,00,000",
                clubMembership: "₹ 2,00,000",
                efc_ffc: "₹ 250/Sqft"
            },
            technicalGallery: {
                floorPlans: [],
                clusterPlans: [],
                sitePlans: []
            },
            infrastructure: ["Solar Power Integration", "LEED Gold Certified", "BMS Controlled HVAC", "Executive Lounge"],
            visuals: {
                constructionPhotos: [],
                sampleGallery: []
            }
        }
    },
    {
        id: 'p6',
        title: "Chandak Tech Park",
        developer: "Chandak Builder",
        location: "Whitefield, Bengaluru",
        priceRange: "₹ 1.5 Cr - 8 Cr",
        units: 120,
        status: 'Under Construction',
        completionDate: "March 2027",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        type: 'Commercial',
        details: {
            reraId: "PRM/KA/RERA/1251",
            expectedPossession: "March 2027",
            builderWebsite: "https://chandak.com",
            aboutProject: "Next-generation workspace for startups and tech giants with open-plan layouts.",
            totalTowers: 3,
            floorSizes: "35,000 Sqft",
            unitSizes: "2,500 - 15,000 Sqft",
            spaceTypes: [
                { type: 'Office Space', isLockable: true, minSize: '2500 Sqft' }
            ],
            bsp: "₹ 11,500/Sqft",
            assuredReturn: "7.5% Yield with long-term lease guarantee.",
            paymentPlans: {
                clp: "10% booking, 5% every 4 months.",
                spp: "60:40 Structured plan.",
                fpp: "Full payment with 15% discount.",
                dpp: "Lease-back linked payment plan."
            },
            otherCosts: {
                parking: "₹ 5,00,000",
                clubMembership: "N/A",
                efc_ffc: "₹ 150/Sqft"
            },
            technicalGallery: {
                floorPlans: [],
                clusterPlans: [],
                sitePlans: []
            },
            infrastructure: ["100% Power Backup", "Dedicated Data Centers", "Pod-style Meeting Rooms", "Creche and Cafe"],
            visuals: {
                constructionPhotos: [],
                sampleGallery: []
            }
        }
    },

    // --- PLOT PROJECTS ---
    {
        id: 'p7',
        title: "Emerald Estate Plots",
        developer: "Veena Builder",
        location: "Yamuna Expressway, Greater Noida",
        priceRange: "₹ 85 L - 1.8 Cr",
        units: 250,
        status: 'Ready to Move',
        completionDate: "Ready",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
        type: 'Plot',
        details: {
            builderRera: "UPRERAB8899",
            projectRera: "UPRERAP7766",
            expectedPossession: "Immediate",
            layout: [
                { blockName: "Emerald A", plotsPerBlock: 80, dimensions: "12x20 Mtr" },
                { blockName: "Emerald B", plotsPerBlock: 120, dimensions: "10x15 Mtr" }
            ],
            plans: {
                blockPlans: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"],
                clusterPlans: []
            },
            pricePerUnit: "₹ 45,000 per Sqyds",
            dlp: "Development Linked Plan 40:20:20:20",
            developmentCharges: {
                idc: "₹ 500/Sqyds",
                edc: "₹ 1,200/Sqyds"
            },
            plcOptions: ["Corner (+10%)", "Wide Road (+5%)", "Park Facing (+15%)"],
            communityFeatures: ["Gated Perimeter", "LED Street Lighting", "Underground Electricity Cables", "Grand Entrance Portal"],
            visuals: {
                siteLayoutPhotos: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"]
            }
        }
    },
    {
        id: 'p8',
        title: "Kanakia Urban Plots",
        developer: "Kanakia Builder",
        location: "Electronic City, Bengaluru",
        priceRange: "₹ 1.2 Cr - 3.5 Cr",
        units: 140,
        status: 'Launching Soon',
        completionDate: "Aug 2027",
        imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop",
        type: 'Plot',
        details: {
            builderRera: "PRM/KA/1122",
            projectRera: "PRM/KA/5566",
            expectedPossession: "August 2027",
            layout: [
                { blockName: "Alpha", plotsPerBlock: 50, dimensions: "30x40 Ft" },
                { blockName: "Beta", plotsPerBlock: 90, dimensions: "40x60 Ft" }
            ],
            plans: {
                blockPlans: [],
                clusterPlans: []
            },
            pricePerUnit: "₹ 8,500 per Sqft",
            dlp: "Standard 24-month payment plan.",
            developmentCharges: {
                idc: "₹ 200/Sqft",
                edc: "Included"
            },
            plcOptions: ["North Facing", "Boulevard Facing"],
            communityFeatures: ["Automated Gate", "CCTV Surveillance", "Organic Orchard", "Cycle Track"],
            visuals: {
                siteLayoutPhotos: []
            }
        }
    },
    {
        id: 'p9',
        title: "Godrej Agri-Estates",
        developer: "Godrej Builder",
        location: "Khadakwasla, Pune",
        priceRange: "₹ 2.4 Cr - 6.5 Cr",
        units: 45,
        status: 'Under Construction',
        completionDate: "Jan 2026",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
        type: 'Plot',
        details: {
            builderRera: "P5210007788",
            projectRera: "P5210009900",
            expectedPossession: "January 2026",
            layout: [
                { blockName: "Riverside", plotsPerBlock: 20, dimensions: "Half Acre" },
                { blockName: "Hilltop", plotsPerBlock: 25, dimensions: "Quarter Acre" }
            ],
            plans: {
                blockPlans: [],
                clusterPlans: []
            },
            pricePerUnit: "₹ 1,500 per Sqft",
            dlp: "50% Booking, 50% on Registry.",
            developmentCharges: {
                idc: "₹ 1,50,000 fixed",
                edc: "₹ 3,00,000 fixed"
            },
            plcOptions: ["River View (+20%)", "Sunrise Point (+10%)"],
            communityFeatures: ["Clubhouse with Spa", "Horse Riding Track", "Private Boat Jetty", "Star Gazing Deck"],
            visuals: {
                siteLayoutPhotos: []
            }
        }
    },

    // --- AGRICULTURAL PROJECTS ---
    {
        id: 'p10',
        title: "Green Valley Farms",
        developer: "Kanakia Builder",
        location: "Karjat, Maharashtra",
        priceRange: "₹ 1.5 Cr - 3.8 Cr",
        units: 25,
        status: 'Ready to Move',
        completionDate: "Ready",
        imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop",
        type: 'Agricultural',
        details: {
            landType: 'Farm House',
            totalSize: "1.5 Acres",
            possessionStatus: "Immediate",
            geographic: {
                khasaraNumber: "112/4-A",
                village: "Milhe",
                tehsil: "Karjat",
                state: "Maharashtra"
            },
            legal: {
                category: 'General',
                ownersCount: 1,
                mutationStatus: "7/11 Extract Available",
                documents: ["Stamp Duty Receipt", "Zone Certificate", "Boundary Map"]
            },
            siteCondition: {
                fencing: 'RCC',
                cropStatus: "Mango & Teak Plantation",
                existingStructures: "1 Luxury Cottage, 1 Borewell"
            },
            proximityFlags: {
                waterBodies: true,
                highTensionWires: false,
                factories: false,
                religiousStructures: false
            },
            connectivity: {
                mainRoad: "2 KM",
                school: "10 KM",
                hospital: "12 KM",
                policeStation: "8 KM"
            },
            pricing: {
                pricePerUnit: "₹ 1.2 Cr per Acre",
                totalDemand: "₹ 1.8 Cr",
                bankLoanAvailable: false
            },
            technical: {
                sitePlanUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
                googleLocation: "https://maps.google.com"
            }
        }
    },
    {
        id: 'p11',
        title: "Chandak Agri-Orchard",
        developer: "Chandak Builder",
        location: "Nashik, Maharashtra",
        priceRange: "₹ 45 L - 1.2 Cr",
        units: 60,
        status: 'Ready to Move',
        completionDate: "Ready",
        imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop",
        type: 'Agricultural',
        details: {
            landType: 'Agriculture Land',
            totalSize: "5 Acres per unit",
            possessionStatus: "Ready for cultivation",
            geographic: {
                khasaraNumber: "88/B",
                village: "Trimbak",
                tehsil: "Nashik",
                state: "Maharashtra"
            },
            legal: {
                category: 'General',
                ownersCount: 2,
                mutationStatus: "Verified",
                documents: ["Registry Copy", "NA Certificate (Potential)"]
            },
            siteCondition: {
                fencing: 'Wired',
                cropStatus: "Grapevine ready",
                existingStructures: "Storage Shed"
            },
            proximityFlags: {
                waterBodies: false,
                highTensionWires: false,
                factories: false,
                religiousStructures: true
            },
            connectivity: {
                mainRoad: "0.5 KM",
                school: "5 KM",
                hospital: "15 KM",
                policeStation: "5 KM"
            },
            pricing: {
                pricePerUnit: "₹ 15 L per Acre",
                totalDemand: "₹ 75 L",
                bankLoanAvailable: true
            },
            technical: {
                sitePlanUrl: "",
                googleLocation: "https://maps.google.com"
            }
        }
    },
    {
        id: 'p12',
        title: "Veena Nature Retreat",
        developer: "Veena Builder",
        location: "Mulshi, Pune",
        priceRange: "₹ 2.5 Cr - 5 Cr",
        units: 15,
        status: 'Under Construction',
        completionDate: "Nov 2025",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
        type: 'Agricultural',
        details: {
            landType: 'Farm Land',
            totalSize: "2 Acres",
            possessionStatus: "Booking Open",
            geographic: {
                khasaraNumber: "55/1",
                village: "Tamhini",
                tehsil: "Mulshi",
                state: "Maharashtra"
            },
            legal: {
                category: 'General',
                ownersCount: 1,
                mutationStatus: "Clear Title",
                documents: ["Full Chain Documents"]
            },
            siteCondition: {
                fencing: 'Bricks',
                cropStatus: "Uncultivated",
                existingStructures: "Clubhouse under construction"
            },
            proximityFlags: {
                waterBodies: true,
                highTensionWires: false,
                factories: false,
                religiousStructures: false
            },
            connectivity: {
                mainRoad: "5 KM",
                school: "20 KM",
                hospital: "25 KM",
                policeStation: "15 KM"
            },
            pricing: {
                pricePerUnit: "₹ 1.5 Cr per unit",
                totalDemand: "₹ 3 Cr",
                bankLoanAvailable: false
            },
            technical: {
                sitePlanUrl: "",
                googleLocation: "https://maps.google.com"
            }
        }
    }
];

const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Elena Rodriguez',
        role: 'Tech Entrepreneur',
        location: 'San Francisco, CA',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
        text: 'HuntProperty\'s AI analysis saved me weeks of research. The investment predictions were spot on.'
    },
    {
        id: 't2',
        name: 'Marcus Chen',
        role: 'Architect',
        location: 'Singapore',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: 'As an architect, I appreciate the visual fidelity of the platform. The virtual renovation tool is incredible.'
    }
];

const INSIGHTS: Insight[] = [
    {
        id: 'i1',
        title: 'The Rise of AI-Integrated Smart Cities in 2025',
        date: 'Oct 12, 2025',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        description: 'How generative AI is reshaping urban planning and residential infrastructure.',
        author: { name: 'Dr. Aris Thorne', role: 'Urban Futurist', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
        content: `The urban landscape is undergoing a seismic shift...`
    }
];

const BUILDERS: Builder[] = [
    { id: 'b1', name: 'Godrej Builder', activeProjects: 195, citiesCovered: 6, brandLogo: 'https://images.livemint.com/img/2023/02/03/600x338/Godrej_Properties_1675402545331_1675402545524_1675402545524.jpg' },
    { id: 'b2', name: 'Chandak Builder', activeProjects: 195, citiesCovered: 6, brandLogo: 'https://yt3.googleusercontent.com/ytc/AIdro_n_Y_W9xM_y_K-jS_P_R_H_6_9_L_O_Y_H_H_H_=s900-c-k-c0x00ffffff-no-rj' },
    { id: 'b3', name: 'Veena Builder', activeProjects: 195, citiesCovered: 6, brandLogo: 'https://veenasmartcity.com/wp-content/uploads/2021/04/Veena-Group-Logo.png' },
    { id: 'b4', name: 'Kanakia Builder', activeProjects: 195, citiesCovered: 6, brandLogo: 'https://www.kanakia.com/wp-content/uploads/2021/05/logo.png' },
];

type ViewState = 'home' | 'property' | 'project-detail' | 'builder-projects' | 'add-property' | 'buy' | 'rent' | 'sell' | 'agents' | 'insights' | 'insight-detail' | 'login' | 'register' | 'home-loans' | 'home-loan-calculator' | 'channel-partner' | 'employee-login' | 'rera' | 'legal-advisory' | 'master-plans' | 'news-gallery' | 'media-gallery' | 'video-gallery' | 'articles' | 'nri-center' | 'covid' | 'career' | 'post-requirement' | 'vastu' | 'investors' | 'dashboard' | 'ad-packages' | 'worth-calculator' | 'PropertyCostCalulator' | 'customer-care' | 'advertise' | 'about-us' | 'terms' | 'privacy' | 'refund-policy' | 'package-policy' | 'search-projects' | 'testimonials' | 'sitemap' | 'agent-dashboard' | 'developer-dashboard' | 'project-listing' | 'builder-overview' | 'location-categories' | 'project-listings' | 'unit-detail';

function App() {
    const [currentView, setCurrentView] = useState<ViewState>('home');
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedBuilder, setSelectedBuilder] = useState<Builder | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedUnit, setSelectedUnit] = useState<any | null>(null);
    const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
    const [userRole, setUserRole] = useState<'Owner' | 'Agent' | 'Developer' | null>(null);
    const [showSpinModal, setShowSpinModal] = useState(false);

    const handleNavigate = (view: ViewState) => {
        setCurrentView(view);
        window.scrollTo(0, 0);
    };

    const handleLogin = (role: 'Owner' | 'Agent' | 'Developer') => {
        setUserRole(role);
        if (role === 'Agent') {
            setCurrentView('agent-dashboard');
        } else if (role === 'Developer') {
            setCurrentView('developer-dashboard');
        } else {
            handleBackToHome();
        }
        // Simulate a toast
        setTimeout(() => {
            alert(`Logged in successfully as ${role}!`);
        }, 100);
    };

    const handlePropertySelect = (property: Property) => {
        setSelectedProperty(property);
        setCurrentView('property');
        window.scrollTo(0, 0);
    };

    const handleBuilderSelect = (builder: Builder) => {
        setSelectedBuilder(builder);
        setCurrentView('builder-overview');
        window.scrollTo(0, 0);
    };

    const handleLocationSelect = (location: string) => {
        setSelectedLocation(location);
        setCurrentView('location-categories');
        window.scrollTo(0, 0);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setCurrentView('project-listings');
        window.scrollTo(0, 0);
    };

    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
        setCurrentView('project-detail');
        window.scrollTo(0, 0);
    };

    const handleUnitSelect = (unit: any) => {
        setSelectedUnit(unit);
        setCurrentView('unit-detail');
        window.scrollTo(0, 0);
    };


    const handleInsightSelect = (insight: Insight) => {
        setSelectedInsight(insight);
        setCurrentView('insight-detail');
        window.scrollTo(0, 0);
    };

    const handleBackToHome = () => {
        setCurrentView('home');
        setSelectedProperty(null);
        setSelectedProject(null);
        setSelectedBuilder(null);
        setSelectedLocation(null);
        setSelectedCategory(null);
        setSelectedUnit(null);
        setSelectedInsight(null);
    };

    const handleBackToInsights = () => {
        setCurrentView('insights');
        setSelectedInsight(null);
    }

    const handleStartAddProperty = () => {
        setShowSpinModal(true);
    };

    const handleSpinComplete = (reward: string) => {
        setShowSpinModal(false);
        setCurrentView('add-property');
        window.scrollTo(0, 0);
    };

    const handlePostRequirement = () => {
        setCurrentView('post-requirement');
        window.scrollTo(0, 0);
    };

    const handleScrollToProperties = () => {
        const element = document.getElementById('listings-start');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            setCurrentView('home');
            setTimeout(() => {
                document.getElementById('listings-start')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const renderContent = () => {
        switch (currentView) {
            case 'sitemap': return <SitemapView onNavigate={handleNavigate} />;
            case 'testimonials': return <TestimonialsView />;
            case 'terms': return <TermsAndConditionsView />;
            case 'privacy': return <PrivacyPolicyView />;
            case 'refund-policy': return <RefundPolicyView />;
            case 'package-policy': return <PackagePolicyView />;
            case 'search-projects': return <SearchProjectView />;
            case 'about-us': return <AboutUsView />;
            case 'vastu': return <VastuView />;
            case 'dashboard': return <DashboardView onNavigate={handleNavigate} />;
            case 'ad-packages': return <AdPackagesView onNavigate={handleNavigate} />;
            case 'worth-calculator': return <WorthCalculatorView onNavigate={handleNavigate} />;
            case 'PropertyCostCalulator': return <PropertyCostCalulatorView onNavigate={handleNavigate} />;
            case 'customer-care': return <CustomerCareView />;
            case 'advertise': return <AdvertiseWithUsView onNavigate={handleNavigate} />;
            case 'login':
            case 'employee-login':
                return <LoginView onNavigate={handleNavigate} onLogin={handleLogin} />;
            case 'register':
                return <RegisterView onNavigate={handleNavigate} onRegister={handleBackToHome} />;
            case 'agent-dashboard':
                return <AgentDashboardView onNavigate={handleNavigate} />;
            case 'developer-dashboard':
                return <DeveloperDashboardView onNavigate={handleNavigate} image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" />;
            case 'add-property':
                return (
                    <AddPropertyFlow
                        onCancel={handleBackToHome}
                        onComplete={() => {
                            alert("Property submitted successfully!");
                            handleBackToHome();
                        }}
                    />
                );
            case 'project-listing':
                return (
                    <ProjectListingFlow
                        onCancel={() => handleNavigate('agent-dashboard')}
                        onComplete={() => {
                            alert("Project submitted successfully!");
                            handleNavigate('agent-dashboard');
                        }}
                    />
                );
            case 'post-requirement':
                return (
                    <PostRequirementView onComplete={handleBackToHome} />
                );
            case 'property':
                if (selectedProperty) {
                    const similar = PROPERTIES.filter(p => p.id !== selectedProperty.id).slice(0, 3);
                    return (
                        <PropertyDetail
                            property={selectedProperty}
                            onBack={handleBackToHome}
                            similarProperties={similar}
                            onPropertySelect={handlePropertySelect}
                        />
                    );
                }
                return null;
            case 'builder-overview':
                return selectedBuilder ? (
                    <BuilderOverviewView 
                        builder={selectedBuilder} 
                        projects={PROJECTS.filter(p => p.developer === selectedBuilder.name)}
                        onBack={() => setCurrentView('home')}
                        onLocationSelect={handleLocationSelect}
                    />
                ) : null;
            case 'location-categories':
                return selectedBuilder && selectedLocation ? (
                    <CategorySelectionView 
                        builder={selectedBuilder}
                        location={selectedLocation}
                        projects={PROJECTS.filter(p => p.developer === selectedBuilder.name && p.location.includes(selectedLocation))}
                        onBack={() => setCurrentView('builder-overview')}
                        onCategorySelect={handleCategorySelect}
                    />
                ) : null;
            case 'project-listings':
                return selectedBuilder && selectedLocation && selectedCategory ? (
                    <ProjectListingView 
                        builder={selectedBuilder}
                        location={selectedLocation}
                        category={selectedCategory}
                        projects={PROJECTS.filter(p => p.developer === selectedBuilder.name && p.location.includes(selectedLocation) && p.type === selectedCategory)}
                        onBack={() => setCurrentView('location-categories')}
                        onProjectSelect={handleProjectSelect}
                    />
                ) : null;
            case 'project-detail':
                return selectedProject ? (
                    (() => {
                        const handleDetailBack = () => {
                            if (selectedCategory) {
                                setCurrentView('project-listings');
                            } else if (selectedBuilder) {
                                setCurrentView('builder-projects');
                            } else {
                                handleBackToHome();
                            }
                        };
                        if (selectedProject.type === 'Commercial') {
                            return (
                                <CommercialProjectDetailView
                                    project={selectedProject}
                                    onBack={handleDetailBack}
                                />
                            );
                        }
                        if (selectedProject.type === 'Plot') {
                            return (
                                <PlotProjectDetailView
                                    project={selectedProject}
                                    onBack={handleDetailBack}
                                />
                            );
                        }
                        if (selectedProject.type === 'Agricultural') {
                            return (
                                <AgriculturalProjectDetailView
                                    project={selectedProject}
                                    onBack={handleDetailBack}
                                />
                            );
                        }
                        return (
                            <ProjectDetailView
                                project={selectedProject}
                                onBack={handleDetailBack}
                                onUnitSelect={handleUnitSelect}
                            />
                        );
                    })()
                ) : null;
            case 'unit-detail':
                return selectedUnit && selectedProject ? (
                    <UnitDetailView 
                        unit={selectedUnit}
                        project={selectedProject}
                        onBack={() => setCurrentView('project-detail')}
                    />
                ) : null;
            case 'builder-projects':
                if (selectedBuilder) {
                    const builderProjects = PROJECTS.filter(p => p.developer === selectedBuilder.name);
                    return (
                        <BuilderProjectsView 
                            builder={selectedBuilder} 
                            projects={builderProjects}
                            onBack={handleBackToHome}
                            onProjectSelect={handleProjectSelect}
                        />
                    );
                }
                return null;
            case 'insight-detail':
                if (selectedInsight) {
                    return <InsightDetailView insight={selectedInsight} onBack={handleBackToInsights} />;
                }
                return null;
            case 'buy':
                return <ListingsView type="buy" properties={[...PROPERTIES, ...RESALE_PROPERTIES]} onPropertySelect={handlePropertySelect} />;
            case 'rent':
                return <ListingsView type="rent" properties={RENTAL_PROPERTIES} onPropertySelect={handlePropertySelect} />;
            case 'sell':
                return <SellView onPostProperty={handleStartAddProperty} />;
            case 'agents':
                return <AgentsView />;
            case 'channel-partner':
                return <ChannelPartnerView />;
            case 'investors':
                return <InvestorsRelationView />;
            case 'career':
                return <CareerView />;
            case 'insights':
                return <InsightsView insights={INSIGHTS} onInsightSelect={handleInsightSelect} />;
            case 'home-loans':
                return <HomeLoanView onBack={handleBackToHome} />;
            case 'home-loan-calculator':
                return <HomeLoanCalculatorView />;
            case 'rera': return <ReraView />;
            case 'legal-advisory': return <LegalAdvisoryView />;
            case 'master-plans': return <MasterPlanView />;
            case 'news-gallery': return <NewsGalleryView />;
            case 'media-gallery': return <MediaGalleryView />;
            case 'video-gallery': return <VideoGalleryView />;
            case 'articles': return <ArticlesView />;
            case 'nri-center': return <NRICenterView />;
            case 'covid': return <CovidView />;
            case 'home':
            default:
                return (
                    <>
                        <Hero
                            onSearch={handleScrollToProperties}
                            onPostProperty={handleStartAddProperty}
                            onPostRequirement={handlePostRequirement}
                        />

                        <section className="max-w-7xl mx-auto px-4 md:px-6 py-32 border-t border-slate-100">
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
                                <div className="space-y-6">
                                    <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight">
                                        Builders <span className="text-[#20F29E]">Projects</span>
                                    </h2>
                                    <p className="text-slate-400 max-w-xl text-xl font-medium leading-relaxed">
                                        Direct access to the countries most reputable builders and their high-growth project portfolios.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => handleNavigate('search-projects')}
                                    className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-primary hover:text-slate-950 transition-all shadow-2xl shadow-slate-950/20"
                                >
                                    Explore Projects <ArrowRight size={18} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {BUILDERS.map(builder => (
                                    <BuilderProjectCard 
                                        key={builder.id} 
                                        builder={builder} 
                                        onClick={() => handleBuilderSelect(builder)} 
                                    />
                                ))}
                            </div>
                        </section>

                        {/* STEP 2: Boosted Premium Property Ads */}
                        <BoostedSection 
                            properties={[...PROPERTIES, ...RESALE_PROPERTIES, ...RENTAL_PROPERTIES].filter(p => p.activeBoost).slice(0, 3)}
                            onPropertySelect={handlePropertySelect}
                            onViewAll={() => handleNavigate('buy')}
                        />

                        {/* Exclusive Godrej Noida Showcase */}
                        <GodrejNoidaShowcase 
                            projects={PROJECTS} 
                            onProjectSelect={handleProjectSelect} 
                        />

                        {/* 1. Projects Section - Replaced by Builder Showcase for specific discovery, but keeping as Trending for now */}
                        <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 border-t border-slate-100 overflow-hidden">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                                <div className="space-y-3">
                                    <span className="text-primary font-bold tracking-wider uppercase text-[10px] bg-emerald-900/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-2 w-fit">
                                        <Sparkles size={12} /> Upcoming Developments
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">New & Trending <span className="text-emerald-600">Projects</span></h2>
                                    <p className="text-slate-500 max-w-lg text-sm md:text-base">Discover exclusive townships and high-rise luxury towers.</p>
                                </div>
                                <button onClick={() => handleNavigate('buy')} className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-950 text-white font-bold hover:bg-primary hover:text-slate-950 transition-all shadow-xl hover:shadow-primary/20">
                                    Explore Projects <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Horizontal Scroll Container */}
                            <div className="flex overflow-x-auto no-scrollbar -mx-4 md:-mx-6 px-4 md:px-6 pb-8 gap-4 md:gap-6 snap-x snap-mandatory">
                                {PROJECTS.map(project => (
                                    <div key={project.id} className="min-w-[280px] md:min-w-[420px] snap-start">
                                        {project.isFeatured ? (
                                            <FeaturedPropertyCard
                                                project={project}
                                                onClick={() => handleProjectSelect(project)}
                                            />
                                        ) : (
                                            <ProjectCard
                                                project={project}
                                                onClick={() => handleProjectSelect(project)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. POPULAR RESALE PROPERTIES */}
                        <section id="listings-start" className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-slate-100 overflow-hidden">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                                <div className="space-y-3">
                                    <span className="text-primary font-bold tracking-wider uppercase text-[10px] bg-primary/5 px-3 py-1 rounded-lg border border-primary/20 flex items-center gap-2 w-fit">
                                        <Repeat size={12} /> Secondary Market
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Popular <span className="text-primary">Resale</span> Properties</h2>
                                    <p className="text-slate-500 max-w-lg text-sm md:text-base">Highly sought-after pre-owned residences in established neighborhoods.</p>
                                </div>
                                <button onClick={() => handleNavigate('buy')} className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold group">
                                    See all Resale <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            {/* Horizontal Scroll Container */}
                            <div className="flex overflow-x-auto no-scrollbar -mx-4 md:-mx-6 px-4 md:px-6 pb-8 gap-4 md:gap-6 snap-x snap-mandatory">
                                {RESALE_PROPERTIES.map(prop => (
                                    <div key={prop.id} className="min-w-[260px] md:min-w-[360px] h-[420px] snap-start">
                                        <PropertyCard
                                            property={prop}
                                            onClick={() => handlePropertySelect(prop)}
                                            variant="primary"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. PROPERTY FOR RENT */}
                        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-slate-100 overflow-hidden">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                                <div className="space-y-3">
                                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-[10px] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-2 w-fit">
                                        <Key size={12} /> Flexible Living
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Property <span className="text-emerald-700">For Rent</span></h2>
                                    <p className="text-slate-500 max-w-lg text-sm md:text-base">Exclusive rental choices for every lifestyle, from studios to penthouses.</p>
                                </div>
                                <button onClick={() => handleNavigate('rent')} className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold group">
                                    View Rental Map <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            {/* Horizontal Scroll Container */}
                            <div className="flex overflow-x-auto no-scrollbar -mx-4 md:-mx-6 px-4 md:px-6 pb-8 gap-4 md:gap-6 snap-x snap-mandatory">
                                {RENTAL_PROPERTIES.map(prop => (
                                    <div key={prop.id} className="min-w-[260px] md:min-w-[360px] h-[420px] snap-start">
                                        <PropertyCard
                                            property={prop}
                                            onClick={() => handlePropertySelect(prop)}
                                            variant="emerald"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Hunt Property Services Section */}
                        <HomeServices onNavigate={handleNavigate} />

                        {/* Testimonials */}
                        <div className="bg-gradient-to-b from-white to-slate-50 border-y border-slate-100">
                            <Testimonials items={TESTIMONIALS} />
                        </div>

                        {/* Insights */}
                        <Insights items={INSIGHTS} onViewAll={() => handleNavigate('insights')} onInsightSelect={handleInsightSelect} />

                        {/* Instagram Feed - New Section */}
                        <InstagramFeed />
                    </>
                );
        }
    };

    const isAuthView = ['login', 'register', 'employee-login'].includes(currentView);
    const showBackButton = currentView !== 'home';

    const getBackLabel = () => {
        switch (currentView) {
            case 'sitemap': return 'Back to Home';
            case 'property': return 'Back to Listings';
            case 'project-detail': return 'Back to Projects';
            case 'insight-detail': return 'Back to Insights';
            case 'insights': return 'Back to Home';
            case 'add-property': return 'Cancel Listing';
            case 'post-requirement': return 'Cancel Requirement';
            case 'buy': return 'Back to Home';
            case 'rent': return 'Back to Home';
            case 'sell': return 'Back to Home';
            case 'agents': return 'Back to Home';
            case 'home-loans': return 'Back to Home';
            case 'home-loan-calculator': return 'Back to Home';
            case 'channel-partner': return 'Back to Home';
            case 'vastu': return 'Back to Home';
            case 'investors': return 'Back to Home';
            case 'career': return 'Back to Home';
            case 'dashboard': return 'Back to Home';
            case 'ad-packages': return 'Back to Home';
            case 'worth-calculator': return 'Back to Home';
            case 'PropertyCostCalulator': return 'Back to Home';
            case 'customer-care': return 'Back to Home';
            case 'advertise': return 'Back to Home';
            case 'about-us': return 'Back to Home';
            case 'terms': return 'Back to Home';
            case 'privacy': return 'Back to Home';
            case 'refund-policy': return 'Back to Home';
            case 'package-policy': return 'Back to Home';
            case 'search-projects': return 'Back to Home';
            case 'testimonials': return 'Back to Home';
            case 'rera':
            case 'legal-advisory':
            case 'master-plans':
            case 'news-gallery':
            case 'media-gallery':
            case 'video-gallery':
            case 'articles':
            case 'nri-center':
            case 'covid': return 'Back to Home';
            default: return 'Back';
        }
    };

    const handleBack = () => {
        if (currentView === 'insight-detail') {
            handleBackToInsights();
        } else {
            handleBackToHome();
        }
    };

    return (
        <div className="min-h-screen font-sans selection:bg-primary selection:text-slate-900 bg-[#f8fafc]">
            {!isAuthView && (
                <Navbar
                    onNavigate={handleNavigate}
                    onPostProperty={handleStartAddProperty}
                    isDetailView={showBackButton}
                    onBack={handleBack}
                    backLabel={getBackLabel()}
                />
            )}

            {renderContent()}

            {!isAuthView && <Footer onNavigate={handleNavigate} />}

            <ChatAssistant />
            
            <SpinModule 
                isOpen={showSpinModal} 
                onClose={() => setShowSpinModal(false)} 
                onComplete={handleSpinComplete} 
            />
        </div>
    );
}

export default App;