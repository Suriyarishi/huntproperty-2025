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
import { ReraView, LegalAdvisoryView, MasterPlanView, NewsGalleryView, MediaGalleryView, VideoGalleryView, ArticlesView, NRICenterView, CovidView } from './components/ToolsViews';
import { Property, Testimonial, Insight } from './types';
import { Loader2, ArrowRight, Sparkles, Home, Repeat, Key } from 'lucide-react';

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
    category: "luxury"
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

const PROJECTS = [
  {
    id: 'p1',
    title: "The Helix Gardens",
    developer: "Vortex Realty Group",
    location: "Neo-West Side, Vancouver",
    priceRange: "₹ 1.2 Cr - 3.5 Cr",
    units: 450,
    status: 'Under Construction' as const,
    completionDate: "Dec 2026",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'p2',
    title: "Azure Sky Towers",
    developer: "Horizon Developments",
    location: "Sector 150, Noida",
    priceRange: "₹ 85 L - 1.8 Cr",
    units: 1200,
    status: 'Launching Soon' as const,
    completionDate: "Aug 2027",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'p3',
    title: "Prism City Center",
    developer: "Aero Assets",
    location: "Downtown Hub, Bengaluru",
    priceRange: "₹ 2.5 Cr - 6.0 Cr",
    units: 120,
    status: 'Ready to Move' as const,
    completionDate: "Mar 2025",
    imageUrl: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2020&auto=format&fit=crop"
  },
  {
    id: 'p4',
    title: "Infinity Plaza",
    developer: "Zenith Builders",
    location: "Electronic City, Bengaluru",
    priceRange: "₹ 1.5 Cr - 4.2 Cr",
    units: 300,
    status: 'Launching Soon' as const,
    completionDate: "Jan 2028",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop"
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

type ViewState = 'home' | 'property' | 'add-property' | 'buy' | 'rent' | 'sell' | 'agents' | 'insights' | 'insight-detail' | 'login' | 'register' | 'home-loans' | 'home-loan-calculator' | 'channel-partner' | 'employee-login' | 'rera' | 'legal-advisory' | 'master-plans' | 'news-gallery' | 'media-gallery' | 'video-gallery' | 'articles' | 'nri-center' | 'covid' | 'career' | 'post-requirement' | 'vastu' | 'investors' | 'dashboard' | 'ad-packages' | 'worth-calculator' | 'PropertyCostCalulator' | 'customer-care' | 'advertise';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('property');
    window.scrollTo(0,0);
  };

  const handleInsightSelect = (insight: Insight) => {
      setSelectedInsight(insight);
      setCurrentView('insight-detail');
      window.scrollTo(0,0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProperty(null);
    setSelectedInsight(null);
  };

  const handleBackToInsights = () => {
      setCurrentView('insights');
      setSelectedInsight(null);
  }

  const handleStartAddProperty = () => {
      setCurrentView('add-property');
      window.scrollTo(0,0);
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
        case 'vastu': return <VastuView />;
        case 'dashboard': return <DashboardView onNavigate={handleNavigate} />;
        case 'ad-packages': return <AdPackagesView onNavigate={handleNavigate} />;
        case 'worth-calculator': return <WorthCalculatorView onNavigate={handleNavigate} />;
        case 'PropertyCostCalulator': return <PropertyCostCalulatorView onNavigate={handleNavigate} />;
        case 'customer-care': return <CustomerCareView />;
        case 'advertise': return <AdvertiseWithUsView onNavigate={handleNavigate} />;
        case 'login':
        case 'employee-login':
            return <LoginView onNavigate={handleNavigate} onLogin={handleBackToHome} />;
        case 'register':
            return <RegisterView onNavigate={handleNavigate} onRegister={handleBackToHome} />;
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

                    {/* 1. Projects Section */}
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
                                <div key={project.id} className="min-w-[280px] md:min-w-[400px] snap-start">
                                    <ProjectCard 
                                        project={project} 
                                        onClick={() => handleNavigate('buy')} 
                                    />
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
      case 'property': return 'Back to Listings';
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
    </div>
  );
}

export default App;