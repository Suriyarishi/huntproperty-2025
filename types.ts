
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  tags: string[];
  description: string;
  category?: string;
  postedDate?: string;
  ownershipType?: string;
  locality?: string;
  isOwner?: boolean;
  // Boost & Analytics Fields
  views?: number;
  saves?: number;
  inquiries?: number;
  activeBoost?: boolean;
  boostPackage?: 'Basic' | 'Silver' | 'Platinum';
  boostExpiryDate?: string;
  boostDaysLeft?: number;
}

export interface Builder {
    id: string;
    brandLogo: string;
    name: string;
    activeProjects: number;
    citiesCovered: number;
}

export interface Project {
    id: string;
    title: string;
    developer: string;
    location: string;
    priceRange: string;
    units: number;
    status: 'Launching Soon' | 'Under Construction' | 'Ready to Move';
    imageUrl: string;
    galleryImages?: string[];
    completionDate: string;
    type: 'Commercial' | 'Residential' | 'Plot' | 'Agricultural';
    details?: CommercialProjectDetails | ResidentialProjectDetails | PlotProjectDetails | AgriculturalProjectDetails;
    isFeatured?: boolean;
    views?: number;
    saves?: number;
}

export interface CommercialProjectDetails {
    reraId: string;
    expectedPossession: string;
    builderWebsite: string;
    aboutProject: string;
    totalTowers: number;
    floorSizes: string;
    unitSizes: string;
    spaceTypes: {
        type: 'Office Space' | 'Shop' | 'Showroom' | 'Food Court';
        isLockable: boolean;
        minSize: string;
    }[];
    bsp: string;
    assuredReturn: string;
    paymentPlans: {
        clp: string;
        spp: string;
        fpp: string;
        dpp: string;
    };
    otherCosts: {
        parking: string;
        clubMembership: string;
        efc_ffc: string;
    };
    technicalGallery: {
        floorPlans: string[];
        clusterPlans: string[];
        sitePlans: string[];
    };
    infrastructure: string[]; 
    visuals: {
        constructionPhotos: string[];
        sampleGallery: string[];
    };
}

export interface ResidentialProjectDetails {
    builderSignatory: string;
    reraNumber: string;
    plotSize: string;
    aboutBuilder: string;
    projectProfile: string;
    towerAnalytics: {
        names: string[];
        totalFloors: number;
        flatsPerFloor: number;
    };
    accommodation: {
        type: string; 
        size: string;
        sizeSqft?: number;
        tower?: string;
        price?: string;
        status?: string;
        floorPlanUrl: string;
    }[];
    expectedPossession?: string;
    highlights?: string[];
    bsp: string;
    pricingBreakdown?: {
        basePrice: string;
        stampDuty: string;
        totalCost: string;
        paymentPlanBadge: string;
    };
    paymentPlans: {
        clp: string;
        spp: string;
        fpp: string;
        dpp: string;
    };
    surcharges: {
        leaseRent: string;
        clubMembership: string;
        plc: string; 
    };
    amenities: string[]; 
    locationAdvantage: {
        destination: string;
        time: string;
    }[];
    specifications?: {
        title: string;
        desc: string;
        icon?: string;
    }[];
    media: {
        progressPhotos: string[];
        sampleFlatGallery: string[];
    };
}

export interface PlotProjectDetails {
    builderRera: string;
    projectRera: string;
    expectedPossession: string;
    layout: {
        blockName: string;
        plotsPerBlock: number;
        dimensions: string;
    }[];
    plans: {
        blockPlans: string[];
        clusterPlans: string[];
    };
    pricePerUnit: string; 
    dlp: string; 
    developmentCharges: {
        idc: string;
        edc: string;
    };
    plcOptions: string[]; 
    communityFeatures: string[]; 
    visuals: {
        siteLayoutPhotos: string[];
    };
}

export interface AgriculturalProjectDetails {
    landType: 'Farm House' | 'Agriculture Land' | 'Farm Land';
    totalSize: string; 
    possessionStatus: string;
    geographic: {
        khasaraNumber: string;
        village: string;
        tehsil: string;
        state: string;
    };
    legal: {
        category: 'General' | 'SC/ST' | 'Patta Bhoomi';
        ownersCount: number;
        mutationStatus: string;
        documents: string[]; 
    };
    siteCondition: {
        fencing: 'Wired' | 'RCC' | 'Bricks' | 'None';
        cropStatus: string;
        existingStructures: string;
    };
    proximityFlags: {
        waterBodies: boolean;
        highTensionWires: boolean;
        factories: boolean;
        religiousStructures: boolean;
    };
    connectivity: {
        mainRoad: string;
        school: string;
        hospital: string;
        policeStation: string;
    };
    pricing: {
        pricePerUnit: string;
        totalDemand: string;
        bankLoanAvailable: boolean;
    };
    technical: {
        sitePlanUrl: string;
        googleLocation: string;
    };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface AIImageResponse {
  imageUrl?: string;
  text?: string;
}

export type AspectRatio = "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "9:16" | "16:9";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  text: string;
}

export interface Insight {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  content?: string; 
  author?: {
      name: string;
      avatar: string;
      role: string;
  }
}
