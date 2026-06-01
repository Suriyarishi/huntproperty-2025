import React from 'react';
import { RoomDekhoView } from './types';
import { ArrowRight, Clock, User } from 'lucide-react';

interface RoomDekhoBlogProps {
    onNavigate: (view: RoomDekhoView, params?: { postId?: string }) => void;
}

export const BLOG_POSTS = [
    {
        id: 'post-1',
        title: 'How to find the perfect PG in Bangalore',
        excerpt: 'Navigating Bangalore\'s rental market can be tricky. Here are 5 tips to find a great PG in Koramangala or Indiranagar without paying hefty brokerages.',
        category: 'Tips & Guides',
        author: 'Rahul S.',
        date: 'Oct 12, 2023',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'post-2',
        title: 'Living with Flatmates: The Ultimate Survival Guide',
        excerpt: 'Sharing a flat can be fun but also challenging. Learn how to divide chores, manage expenses, and keep the peace.',
        category: 'Lifestyle',
        author: 'Priya K.',
        date: 'Sep 28, 2023',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'post-3',
        title: 'Rental Agreements in India: What You Must Know',
        excerpt: 'Before signing your next leave and license agreement, make sure you understand these crucial clauses.',
        category: 'Legal',
        author: 'Adv. Sharma',
        date: 'Sep 15, 2023',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=2070&auto=format&fit=crop'
    }
];

const RoomDekhoBlog: React.FC<RoomDekhoBlogProps> = ({ onNavigate }) => {
    return (
        <div className="pb-24">
            {/* Header */}
            <div className="bg-slate-900 pt-20 pb-16 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    RoomSpot Blog
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Guides, tips, and insights for navigating the Indian rental landscape.
                </p>
            </div>

            {/* Featured Post */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div 
                    onClick={() => onNavigate('blog-post', { postId: BLOG_POSTS[0].id })}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row cursor-pointer group"
                >
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img src={BLOG_POSTS[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wider">
                            Featured
                        </span>
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-violet-600 transition-colors">
                            {BLOG_POSTS[0].title}
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            {BLOG_POSTS[0].excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500 font-medium mt-auto">
                            <span className="flex items-center gap-1.5"><User size={16} /> {BLOG_POSTS[0].author}</span>
                            <span className="flex items-center gap-1.5"><Clock size={16} /> {BLOG_POSTS[0].readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.slice(1).map(post => (
                        <div 
                            key={post.id}
                            onClick={() => onNavigate('blog-post', { postId: post.id })}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group flex flex-col"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-violet-600 text-xs font-bold uppercase tracking-wider mb-2">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                        <span>{post.date}</span>
                                    </div>
                                    <span className="text-violet-600 font-semibold text-sm flex items-center gap-1">
                                        Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomDekhoBlog;
