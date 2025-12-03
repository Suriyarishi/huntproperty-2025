import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Zap } from 'lucide-react';
import { getFastChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
      { role: 'model', text: 'Hi! I\'m your HuntProperty AI assistant. Ask me anything about the market or listings!', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
  }, [messages]);

  const handleSend = async () => {
      if (!input.trim()) return;
      const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
      setMessages(prev => [...prev, userMsg]);
      setInput('');
      setLoading(true);

      try {
          const responseText = await getFastChatResponse(input);
          setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
      } catch (e) {
          setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now.", timestamp: Date.now() }]);
      } finally {
          setLoading(false);
      }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
        {isOpen && (
            <div className="glass-panel bg-white/90 w-80 sm:w-96 h-[500px] rounded-[1.5rem] mb-4 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-white/50">
                {/* Header */}
                <div className="p-4 bg-slate-900 text-white flex justify-between items-center shadow-md">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary/20 p-1.5 rounded-lg">
                            <Sparkles className="text-primary" size={16} />
                        </div>
                        <div>
                            <p className="font-bold text-sm">AI Concierge</p>
                            <p className="text-[10px] text-slate-400 flex items-center gap-1"><Zap size={10}/> Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white bg-white/10 p-1.5 rounded-full transition-colors">
                        <X size={16} />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none flex gap-1 border border-slate-200 shadow-sm">
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-3 bg-white border-t border-slate-100">
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask anything..."
                            className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="p-2 bg-primary text-slate-900 rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 shadow-md shadow-primary/20"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        )}

        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-secondary text-primary shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 border-4 border-white/20 backdrop-blur-md"
        >
            {isOpen ? <X size={28} /> : <MessageSquare size={28} className="fill-current" />}
        </button>
    </div>
  );
};

export default ChatAssistant;