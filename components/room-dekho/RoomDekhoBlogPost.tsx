import React from 'react';
import { RoomDekhoView } from './types';
import { ArrowLeft, User, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS } from './RoomDekhoBlog';

interface RoomDekhoBlogPostProps {
    postId: string | null;
    onNavigate: (view: RoomDekhoView) => void;
}

const RoomDekhoBlogPost: React.FC<RoomDekhoBlogPostProps> = ({ postId, onNavigate }) => {
    const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Hero Image */}
            <div className="w-full h-[40vh] md:h-[60vh] relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-10">
                    <button 
                        onClick={() => onNavigate('blog')}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full font-medium transition-colors border border-white/20 shadow-sm"
                    >
                        <ArrowLeft size={18} /> Back to Blog
                    </button>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
                    <div className="mb-6">
                        <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-500 font-medium pb-8 border-b border-slate-100">
                            <span className="flex items-center gap-2 text-slate-700">
                                <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-1.5"><Clock size={16} /> {post.readTime}</span>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                        <p className="lead text-xl text-slate-700 font-medium mb-8">
                            {post.excerpt}
                        </p>
                        
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Understanding the basics</h2>
                        <p className="mb-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <blockquote className="border-l-4 border-violet-500 pl-6 my-8 italic text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-xl">
                            "The best way to find a good room is to directly communicate with the owner and visit the locality during the evening."
                        </blockquote>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Key Takeaways</h3>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>Always check water and electricity availability.</li>
                            <li>Discuss deposit refund policies upfront.</li>
                            <li>Understand any restrictions (like curfew times).</li>
                            <li>Check mobile network connectivity in the room.</li>
                        </ul>

                        <p className="mb-6">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                        <p className="font-bold text-slate-900">Share this article</p>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center transition-colors">f</button>
                            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center transition-colors">t</button>
                            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center transition-colors">in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDekhoBlogPost;
