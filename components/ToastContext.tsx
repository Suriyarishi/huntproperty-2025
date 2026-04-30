import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type ToastVariant = 'system' | 'property';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  variant: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const Toast = ({ 
  toast, 
  onRemove 
}: { 
  toast: ToastMessage; 
  onRemove: (id: string) => void;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);
  const duration = toast.duration || 6000;
  const startTimeRef = useRef<number>(Date.now());
  const remainingTimeRef = useRef<number>(duration);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newRemaining = remainingTimeRef.current - elapsed;
      
      if (newRemaining <= 0) {
        clearInterval(timer);
        onRemove(toast.id);
      } else {
        setProgress((newRemaining / duration) * 100);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isPaused, onRemove, toast.id, duration]);

  useEffect(() => {
    if (isPaused) {
      remainingTimeRef.current = remainingTimeRef.current - (Date.now() - startTimeRef.current);
    } else {
      startTimeRef.current = Date.now();
    }
  }, [isPaused]);

  return (
    <div 
      className="pointer-events-auto w-[360px] overflow-hidden bg-white/95 backdrop-blur-xl border border-gray-100/80 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transform transition-all duration-400 ease-out flex flex-col group animate-fade-in-up"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex p-5 gap-4 relative items-start">
        <button 
          onClick={() => onRemove(toast.id)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {toast.variant === 'property' && toast.imageUrl && (
          <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-50">
            <img 
              src={toast.imageUrl} 
              alt={toast.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {toast.variant === 'system' && !toast.imageUrl && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2FED9A]/20 to-[#2FED9A]/5 flex items-center justify-center text-teal-600 border border-[#2FED9A]/20 shadow-sm">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        )}

        <div className="flex-1 min-w-0 pr-6 pt-0.5">
          <p className="text-[15px] font-black text-[#1a1c21] tracking-tight leading-tight">
            {toast.title}
          </p>
          <p className="text-[13px] font-semibold text-gray-500 mt-1.5 leading-snug line-clamp-2">
            {toast.description}
          </p>
          {toast.ctaText && (
            <button 
              onClick={() => {
                if (toast.ctaLink) window.location.href = toast.ctaLink;
                onRemove(toast.id);
              }}
              className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-black text-teal-600 hover:text-[#1a1c21] transition-colors uppercase tracking-[0.15em] group/btn"
            >
              {toast.ctaText}
              <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-100 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2FED9A]/80 to-[#2FED9A] transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    setToasts(prev => [...prev, { ...toast, id: Math.random().toString(36).substr(2, 9) }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 pointer-events-none sm:top-6 sm:right-6">
        {toasts.map(toast => (
          <Toast key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
