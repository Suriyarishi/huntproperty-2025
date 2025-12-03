
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
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
import { Property, Testimonial, Insight } from './types';
import { Loader2 } from 'lucide-react';

// Mock Data - Properties
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
    description: "A masterpiece of modern architecture perched atop the city's tallest residential tower. Features full smart-glass windows, AI-controlled climate, and a private suspended infinity pool.",
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
    description: "Seamlessly blending nature and technology. This villa features a hydroponic vertical garden, solar roofing, and open-plan living spaces that dissolve the boundary between indoors and outdoors.",
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
    description: "For the creative soul. An industrial-chic loft with 20ft ceilings, polished concrete floors, and a modular layout adaptable to any lifestyle or workspace need.",
    category: "featured"
  },
   {
    id: '4',
    title: "Azure Coast Mansion",
    price: "$6,750,000",
    location: "Malibu, California",
    beds: 6,
    baths: 7,
    sqft: 5200,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tags: ["Waterfront", "Mansion"],
    description: "Breathtaking oceanfront estate with direct beach access. Features a home theater, wine cellar, and panoramic views from every room.",
    category: "luxury"
  }
];

// Mock Data - Testimonials
const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Elena Rodriguez',
        role: 'Tech Entrepreneur',
        location: 'San Francisco, CA',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
        text: 'HuntProperty\'s AI analysis saved me weeks of research. The investment predictions were spot on, and I found my dream smart home in days, not months.'
    },
    {
        id: 't2',
        name: 'Marcus Chen',
        role: 'Architect',
        location: 'Singapore',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: 'As an architect, I appreciate the visual fidelity of the platform. The virtual renovation tool helped me visualize potential before even visiting the site.'
    },
    {
        id: 't3',
        name: 'Sarah Jenkins',
        role: 'Real Estate Investor',
        location: 'London, UK',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'The market pulse feature is a game changer. Real-time data grounded by Google Search gave me the confidence to make a move in a volatile market.'
    }
];

// Mock Data - Insights
const INSIGHTS: Insight[] = [
    {
        id: 'i1',
        title: 'The Rise of AI-Integrated Smart Cities in 2025',
        date: 'Oct 12, 2025',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        description: 'How generative AI is reshaping urban planning and residential infrastructure for the next decade of sustainable living.',
        author: { name: 'Dr. Aris Thorne', role: 'Urban Futurist', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
        content: `The urban landscape is undergoing a seismic shift. As we move deeper into 2025, the integration of Artificial Intelligence into the very fabric of our cities is no longer a futuristic concept—it's a reality. Smart cities are evolving into 'Cognitive Cities', where infrastructure doesn't just collect data but actively thinks, adapts, and responds to the needs of its inhabitants.

        From traffic lights that predict congestion before it happens to energy grids that balance loads with millisecond precision, AI is making urban living more efficient and sustainable. But the most profound changes are happening in residential real estate.
        
        "Buildings are becoming living organisms," says leading architect Maria Vos. "With embedded sensors and AI management systems, a high-rise can optimize its own energy consumption, request maintenance repairs automatically, and even adjust its internal climate based on the collective mood of its residents."

        This shift presents massive opportunities for investors. Properties integrated with these cognitive systems are seeing value appreciation rates nearly double that of traditional "dumb" buildings. As we look to the future, the question isn't whether you should invest in smart property, but can you afford not to?`
    },
    {
        id: 'i2',
        title: 'Investment Hotspots: Beyond the Metros',
        date: 'Oct 08, 2025',
        category: 'Market Trends',
        image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop',
        description: 'Discover the emerging tier-2 cities offering higher ROI and better quality of life for remote-first professionals.',
        author: { name: 'Sarah Jenkins', role: 'Senior Analyst', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
        content: `The remote work revolution didn't end with the pandemic; it matured. In 2025, the 'Digital Nomad' lifestyle has morphed into the 'De-urbanized Professional'. High-net-worth individuals are fleeing congested metros not for suburbs, but for emerging Tier-2 cities that offer world-class amenities at a fraction of the cost.

        Cities like Austin, Raleigh, and Boise have already had their boom. The new frontier lies in places like Chattanooga, Tennessee; Huntsville, Alabama; and specialized pockets in the Midwest. These areas are investing heavily in fiber-optic infrastructure and lifestyle amenities to attract tech talent.

        Our data indicates that property values in these "Zoom Towns" are projected to grow by 15-20% year-over-year, compared to the sluggish 2-4% in established hubs like New York or San Francisco. For the savvy investor, the strategy is clear: follow the fiber lines and the coffee shops.`
    },
    {
        id: 'i3',
        title: 'Sustainable Luxury: The New Standard',
        date: 'Sep 28, 2025',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
        description: 'Why net-zero energy homes are commanding premium prices and how developers are adapting to the green revolution.',
        author: { name: 'Marcus Chen', role: 'Eco-Architect', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        content: `Luxury is being redefined. It is no longer defined solely by marble floors and gold fixtures, but by carbon footprints and energy independence. The ultra-wealthy buyer of 2025 demands a home that is not just beautiful, but responsible.

        Net-Zero Energy homes—buildings that produce as much energy as they consume—have become the gold standard. Features like Tesla Solar Roofs, geothermal heating, and greywater recycling systems are now expected amenities in the $5M+ price bracket.

        "We're seeing a 'Green Premium' of nearly 30%," notes real estate broker Jameson Ford. "If a mansion isn't LEED Platinum certified or equivalent, it sits on the market twice as long." This trend is driving a massive retrofit economy, as owners of historic luxury estates scramble to modernize their sustainability credentials without compromising architectural integrity.`
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
    const element = document.getElementById('listings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If not on home, go to home then scroll
        setCurrentView('home');
        setTimeout(() => {
             document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
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
                // Filter out current property for "Similar Properties"
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
            return <ListingsView type="buy" properties={PROPERTIES} onPropertySelect={handlePropertySelect} />;
        case 'rent':
            return <ListingsView type="rent" properties={PROPERTIES} onPropertySelect={handlePropertySelect} />;
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

                    {/* Featured Listings Section */}
                    <section id="listings" className="max-w-7xl mx-auto px-6 py-20">
                        <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">Featured Collection</span>
                            <h2 className="text-4xl font-display font-bold mt-4 text-slate-900">Curated Residences</h2>
                        </div>
                        <button 
                            onClick={() => handleNavigate('buy')}
                            className="hidden md:block px-8 py-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-lg transition-all text-sm font-bold text-slate-700 bg-white"
                        >
                            View All Properties
                        </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROPERTIES.map(prop => (
                            <div key={prop.id} className="h-[500px]">
                                <PropertyCard 
                                    property={prop} 
                                    onClick={() => handlePropertySelect(prop)} 
                                />
                            </div>
                        ))}
                        </div>
                    </section>

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

  const isDetailView = ['property', 'insight-detail'].includes(currentView);
  const isAuthView = ['login', 'register', 'employee-login'].includes(currentView);
  
  let backLabel = 'Back';
  let onBack = handleBackToHome;

  if (currentView === 'insight-detail') {
      backLabel = 'Back to Insights';
      onBack = handleBackToInsights;
  } else if (currentView === 'property') {
      backLabel = 'Back to Listings';
      onBack = handleBackToHome;
  }

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-slate-900 bg-[#f8fafc]">
      {!isAuthView && (
        <Navbar 
            onNavigate={handleNavigate} 
            onPostProperty={handleStartAddProperty} 
            isDetailView={isDetailView}
            onBack={onBack}
            backLabel={backLabel}
        />
      )}
      
      {renderContent()}

      {!isAuthView && <Footer />}

      <ChatAssistant />
    </div>
  );
}

export default App;
