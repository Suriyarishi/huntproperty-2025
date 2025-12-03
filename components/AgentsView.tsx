import React from 'react';
import { Star, Phone, Mail, MapPin, Award } from 'lucide-react';

const AGENTS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Luxury Specialist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    location: 'Silicon Valley, CA',
    rating: 4.9,
    reviews: 124,
    listings: 15
  },
  {
    id: 2,
    name: 'Michael Ross',
    role: 'Commercial Real Estate',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'New York, NY',
    rating: 4.8,
    reviews: 89,
    listings: 8
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Residential Expert',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    location: 'Miami, FL',
    rating: 5.0,
    reviews: 210,
    listings: 23
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Investment Consultant',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    location: 'Seattle, WA',
    rating: 4.7,
    reviews: 65,
    listings: 11
  }
];

const AgentsView = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-xs bg-emerald-900/5 px-3 py-1 rounded-lg border border-primary/20">
               Our Network
            </span>
            <h1 className="text-4xl font-display font-bold mt-4 text-slate-900">Top Rated Agents</h1>
            <p className="text-slate-500 mt-4 text-lg">
                Connect with verified professionals who use AI-driven insights to help you buy, sell, or rent faster.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AGENTS.map(agent => (
                <div key={agent.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="relative mb-6 mx-auto w-32 h-32">
                        <img src={agent.image} alt={agent.name} className="w-full h-full rounded-full object-cover border-4 border-slate-50 shadow-md group-hover:border-primary transition-colors" />
                        <div className="absolute bottom-0 right-0 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-white">
                            <Star size={10} className="text-yellow-400 fill-current" /> {agent.rating}
                        </div>
                    </div>
                    
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-display font-bold text-slate-900">{agent.name}</h3>
                        <p className="text-primary font-bold text-xs uppercase tracking-wide mt-1">{agent.role}</p>
                        <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mt-2">
                             <MapPin size={12} /> {agent.location}
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-4 border-t border-slate-100 mb-4">
                        <div className="text-center flex-1 border-r border-slate-100">
                            <span className="block font-bold text-slate-900">{agent.listings}</span>
                            <span className="text-[10px] text-slate-400 uppercase font-bold">Active</span>
                        </div>
                        <div className="text-center flex-1">
                            <span className="block font-bold text-slate-900">{agent.reviews}</span>
                            <span className="text-[10px] text-slate-400 uppercase font-bold">Reviews</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex-1 py-2 rounded-xl bg-slate-900 text-white hover:bg-primary hover:text-slate-900 transition-colors flex items-center justify-center">
                            <Phone size={16} />
                        </button>
                        <button className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center">
                            <Mail size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsView;