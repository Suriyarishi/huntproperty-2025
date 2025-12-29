
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
import ChannelPartnerView from './components/ChannelPartnerView';
import HomeServices from './components/HomeServices';
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

type ViewState = 'home' | 'property' | 'add-property' | 'buy' | 'rent' | 'sell' | 'agents' | 'insights' | 'insight-detail' | 'login' | 'register' | 'home-loans' | 'channel-partner' | 'employee-login';

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
        case 'insights':
            return <InsightsView insights={INSIGHTS} onInsightSelect={handleInsightSelect} />;
        case 'home-loans':
             return <HomeLoanView onBack={handleBackToHome} />;
        case 'home':
        default:
            return (
                <>
                    <Hero onSearch={handleScrollToProperties} onPostProperty={handleStartAddProperty} />

                    {/* 1. Projects Section */}
                    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
                        <div className="flex justify-between items-end mb-12">
                            <div className="space-y-3">
                                <span className="text-primary font-bold tracking-wider uppercase text-[10px] bg-emerald-900/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-2 w-fit">
                                    <Sparkles size={12} /> Upcoming Developments
                                </span>
                                <h2 className="text-4xl font-display font-bold text-slate-900">New & Trending <span className="text-emerald-600">Projects</span></h2>
                                <p className="text-slate-500 max-w-lg">Discover exclusive townships and high-rise luxury towers.</p>
                            </div>
                            <button onClick={() => handleNavigate('buy')} className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-primary hover:text-slate-900 transition-all shadow-xl hover:shadow-primary/20">
                                Explore Projects <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {PROJECTS.map(project => (
                                <ProjectCard 
                                    key={project.id} 
                                    project={project} 
                                    onClick={() => handleNavigate('buy')} 
                                />
                            ))}
                        </div>
                    </section>

                    {/* 2. POPULAR RESALE PROPERTIES */}
                    <section id="listings-start" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
                        <div className="flex justify-between items-end mb-12">
                            <div className="space-y-3">
                                <span className="text-primary font-bold tracking-wider uppercase text-[10px] bg-primary/5 px-3 py-1 rounded-lg border border-primary/20 flex items-center gap-2 w-fit">
                                    <Repeat size={12} /> Secondary Market
                                </span>
                                <h2 className="text-4xl font-display font-bold text-slate-900">Popular <span className="text-primary">Resale</span> Properties</h2>
                                <p className="text-slate-500 max-w-lg">Highly sought-after pre-owned residences in established neighborhoods.</p>
                            </div>
                            <button onClick={() => handleNavigate('buy')} className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold group">
                                See all Resale <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {RESALE_PROPERTIES.map(prop => (
                                <div key={prop.id} className="h-[500px]">
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
                    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
                        <div className="flex justify-between items-end mb-12">
                            <div className="space-y-3">
                                <span className="text-emerald-600 font-bold tracking-wider uppercase text-[10px] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-2 w-fit">
                                    <Key size={12} /> Flexible Living
                                </span>
                                <h2 className="text-4xl font-display font-bold text-slate-900">Property <span className="text-emerald-700">For Rent</span></h2>
                                <p className="text-slate-500 max-w-lg">Exclusive rental choices for every lifestyle, from studios to penthouses.</p>
                            </div>
                            <button onClick={() => handleNavigate('rent')} className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold group">
                                View Rental Map <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {RENTAL_PROPERTIES.map(prop => (
                                <div key={prop.id} className="h-[500px]">
                                    <PropertyCard 
                                        property={prop} 
                                        onClick={() => handlePropertySelect(prop)} 
                                        variant="emerald"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Hunt Property Services Section - Moved towards bottom */}
                    <HomeServices />

                    {/* Testimonials */}
                    <div className="bg-gradient-to-b from-white to-slate-50 border-y border-slate-100">
                        <Testimonials items={TESTIMONIALS} />
                    </div>

                    {/* Insights */}
                    <Insights items={INSIGHTS} onViewAll={() => handleNavigate('insights')} onInsightSelect={handleInsightSelect} />
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
      case 'buy': return 'Back to Home';
      case 'rent': return 'Back to Home';
      case 'sell': return 'Back to Home';
      case 'agents': return 'Back to Home';
      case 'home-loans': return 'Back to Home';
      case 'channel-partner': return 'Back to Home';
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

      {!isAuthView && <Footer />}

      <ChatAssistant />
    </div>
  );
}

export default App;
