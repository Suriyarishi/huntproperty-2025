import React, { useState } from 'react';
import { Search, MapPin, User, Phone, Mail, Building2, Calendar, X, ChevronDown, CheckSquare } from 'lucide-react';

const CITIES = ["Delhi", "Noida", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "All"];

const AGENTS_DATA = [
  {
    id: 1,
    name: 'Agent',
    address: 'D-24, Uttam Nagar',
    operatingSince: '2016',
    dealingIn: 'Delhi',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    city: 'Delhi'
  },
  {
    id: 2,
    name: 'Manish Kadyan',
    address: 'Adhyapak Nagar, Delhi, Delhi',
    operatingSince: '2015',
    dealingIn: 'Delhi',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    city: 'Delhi'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    address: 'Sector 62, Noida',
    operatingSince: '2018',
    dealingIn: 'Noida',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    city: 'Noida'
  },
  {
    id: 4,
    name: 'Rahul Verma',
    address: 'Whitefield, Bangalore',
    operatingSince: '2017',
    dealingIn: 'Bangalore',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    city: 'Bangalore'
  },
  {
    id: 5,
    name: 'Priya Sharma',
    address: 'Banjara Hills, Hyderabad',
    operatingSince: '2019',
    dealingIn: 'Hyderabad',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    city: 'Hyderabad'
  },
  {
    id: 6,
    name: 'Amit Patel',
    address: 'Viman Nagar, Pune',
    operatingSince: '2016',
    dealingIn: 'Pune',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    city: 'Pune'
  },
  {
    id: 7,
    name: 'Suresh Reddy',
    address: 'T. Nagar, Chennai',
    operatingSince: '2014',
    dealingIn: 'Chennai',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    city: 'Chennai'
  },
  {
    id: 8,
    name: 'Anjali Das',
    address: 'Salt Lake, Kolkata',
    operatingSince: '2020',
    dealingIn: 'Kolkata',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    city: 'Kolkata'
  }
];

const AgentsView = () => {
  const [activeCity, setActiveCity] = useState('Delhi');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<any | null>(null);

  const filteredAgents = AGENTS_DATA.filter(agent => {
    if (activeCity === 'All') return true;
    return agent.city === activeCity;
  }).filter(agent => {
      if(!searchLocation) return true;
      return agent.address.toLowerCase().includes(searchLocation.toLowerCase()) || 
             agent.dealingIn.toLowerCase().includes(searchLocation.toLowerCase());
  });

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate form submission
      const btn = (e.target as HTMLFormElement).querySelector('button');
      if (btn) {
          const originalText = btn.innerText;
          btn.innerText = 'Sending...';
          btn.disabled = true;
          setTimeout(() => {
              btn.innerText = 'Request Sent!';
              setTimeout(() => {
                  setSelectedAgent(null);
                  btn.innerText = originalText;
                  btn.disabled = false;
              }, 1000);
          }, 1500);
      }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-32 font-sans selection:bg-red-100 selection:text-red-900">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="mb-16 space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-black text-slate-950 uppercase tracking-tighter">AGENTS</h1>
            <div className="w-24 h-2 bg-red-600 rounded-full"></div>
            <p className="text-slate-500 font-medium text-lg max-w-2xl">Connect with certified property experts in your city.</p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-slate-100 mb-20 flex flex-col xl:flex-row items-center justify-between gap-8 animate-fade-in-up delay-100">
            {/* City Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {CITIES.map(city => (
                    <button
                        key={city}
                        onClick={() => setActiveCity(city)}
                        className={`px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeCity === city ? 'bg-slate-950 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md'}`}
                    >
                        {city}
                    </button>
                ))}
            </div>

            {/* Search Input */}
            <div className="flex w-full xl:w-auto bg-slate-50 rounded-2xl border border-slate-200 p-2 shadow-inner group focus-within:border-red-600/30 focus-within:bg-white transition-all">
                <input 
                    type="text" 
                    placeholder="Search by location..." 
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="bg-transparent px-6 py-3 outline-none text-sm font-bold text-slate-700 placeholder-slate-400 w-full xl:w-72"
                />
                <button className="px-10 py-4 bg-red-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg active:scale-95 flex items-center gap-2">
                    <Search size={16} strokeWidth={3} />
                    Search
                </button>
            </div>
        </div>

        {/* Results Header */}
        <div className="mb-10 flex items-center gap-4 animate-fade-in-up delay-200">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <h3 className="text-2xl font-black text-slate-700 uppercase tracking-tight">AGENTS: <span className="text-slate-900">{activeCity === 'All' ? 'All Locations' : activeCity}</span></h3>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 animate-fade-in-up delay-300">
            {filteredAgents.map(agent => (
                <div key={agent.id} className="bg-white rounded-[3rem] border border-slate-100 p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-center flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-24 bg-slate-50/50 -z-0"></div>
                    
                    <div className="w-32 h-32 rounded-full bg-white border-[6px] border-white shadow-xl mb-8 overflow-hidden relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <img src={agent.image} alt={agent.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{agent.name}</h4>
                    <p className="text-xs text-slate-500 font-bold mb-8 px-4 min-h-[40px] leading-relaxed">{agent.address}</p>

                    <div className="w-full space-y-4 border-t border-slate-100 pt-8 mb-8">
                        <div className="flex justify-between text-xs items-center">
                            <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Operating Since</span>
                            <span className="text-slate-900 font-black bg-slate-100 px-3 py-1 rounded-lg">{agent.operatingSince}</span>
                        </div>
                        <div className="flex justify-between text-xs items-center">
                            <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Dealing In</span>
                            <span className="text-slate-900 font-black bg-slate-100 px-3 py-1 rounded-lg">{agent.dealingIn}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => setSelectedAgent(agent)}
                        className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl active:scale-95 mt-auto group-hover:shadow-red-600/30"
                    >
                        Contact Agent
                    </button>
                </div>
            ))}
        </div>

        {filteredAgents.length === 0 && (
            <div className="text-center py-32 opacity-40 border-2 border-dashed border-slate-200 rounded-[3rem] bg-slate-50">
                <p className="text-2xl font-black text-slate-400 uppercase tracking-widest">No Agents Found in this Sector</p>
            </div>
        )}

      </div>

      {/* Contact Agent Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 relative border border-slate-200">
                {/* Header */}
                <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Contact Agent</h3>
                    <button 
                        onClick={() => setSelectedAgent(null)} 
                        className="p-2 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors group"
                    >
                        <X size={20} className="text-slate-400 group-hover:text-red-600" />
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-8 space-y-6">
                    <p className="text-sm font-medium text-slate-500">Please share your details to contact the Dealer <span className="font-bold text-slate-900">{selectedAgent.name}</span>.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <input type="text" required placeholder="Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-red-600 transition-all placeholder:text-slate-400" />
                            <input type="email" required placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-red-600 transition-all placeholder:text-slate-400" />
                            <input type="tel" required placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-red-600 transition-all placeholder:text-slate-400" />
                            
                            <div className="relative">
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-500 outline-none focus:border-red-600 appearance-none cursor-pointer focus:text-slate-900">
                                    <option>Interested In (Optional)</option>
                                    <option>Buying Property</option>
                                    <option>Renting Property</option>
                                    <option>Selling Property</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-2 pb-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">You are:</span>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input type="radio" name="userType" className="peer sr-only" defaultChecked />
                                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-red-600 peer-checked:bg-red-600 transition-all"></div>
                                </div>
                                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">Individual</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input type="radio" name="userType" className="peer sr-only" />
                                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-red-600 peer-checked:bg-red-600 transition-all"></div>
                                </div>
                                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">Dealer</span>
                            </label>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="relative flex items-center justify-center mt-0.5">
                                <input type="checkbox" className="peer sr-only" defaultChecked />
                                <div className="w-4 h-4 rounded border-2 border-slate-300 peer-checked:bg-red-600 peer-checked:border-red-600 transition-all flex items-center justify-center text-white">
                                    <CheckSquare size={10} className="stroke-[4]" />
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                                I agree to be contacted by HuntProperty & others for similar properties or related service
                            </p>
                        </div>

                        <button className="w-full py-4 bg-red-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl shadow-red-600/20 active:scale-95 mt-2">
                            Get Dealer Details
                        </button>
                    </form>
                    
                    <p className="text-[10px] text-center text-slate-400 font-medium">
                        By submitting I accept Huntproperty's <button className="text-red-600 hover:underline font-bold">Terms & Condition</button>
                    </p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default AgentsView;