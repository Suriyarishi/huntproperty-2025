
import React from 'react';
import { Calendar, Tag, Clock } from 'lucide-react';
import { Insight } from '../types';

interface InsightDetailViewProps {
  insight: Insight;
  onBack: () => void;
}

const InsightDetailView: React.FC<InsightDetailViewProps> = ({ insight, onBack }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
          <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white">
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-primary/20 flex items-center gap-2">
                      <Tag size={12} /> {insight.category}
                  </span>
                  <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                      <Calendar size={14} /> {insight.date}
                  </span>
                  <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                      <Clock size={14} /> 5 min read
                  </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                  {insight.title}
              </h1>

              {/* Author */}
              {insight.author && (
                  <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
                      <img src={insight.author.avatar} alt={insight.author.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                      <div>
                          <p className="font-bold text-slate-900 text-sm">{insight.author.name}</p>
                          <p className="text-primary font-bold text-xs uppercase tracking-wide">{insight.author.role}</p>
                      </div>
                  </div>
              )}

              {/* Article Body */}
              <div className="prose prose-lg prose-slate max-w-none">
                  <p className="lead text-xl text-slate-600 font-medium mb-8">
                      {insight.description}
                  </p>
                  
                  {/* Render content paragraphs */}
                  {insight.content ? (
                      <div className="space-y-6 text-slate-700 leading-relaxed">
                          {insight.content.split('\n\n').map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                          ))}
                      </div>
                  ) : (
                      <div className="space-y-6 text-slate-700 leading-relaxed">
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Future of Living</h3>
                          <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <blockquote className="border-l-4 border-primary pl-6 italic text-slate-600 my-8">
                              "Innovation in real estate isn't just about technology, it's about improving the quality of life for everyone."
                          </blockquote>
                          <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                          </p>
                      </div>
                  )}
              </div>

              {/* Tags / Footer */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                  {['Real Estate', 'Technology', 'Future', 'Innovation'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer">
                          #{tag}
                      </span>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default InsightDetailView;
