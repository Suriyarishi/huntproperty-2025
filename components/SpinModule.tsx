import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, ChevronRight, Crown, Gift, Zap, Shield, TrendingUp, Users, List } from 'lucide-react';

interface SpinModuleProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: (reward: string) => void;
}

type Step = 'spin' | 'result' | 'details';

const SpinModule: React.FC<SpinModuleProps> = ({ isOpen, onClose, onComplete }) => {
    const [step, setStep] = useState<Step>('spin');
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [reward, setReward] = useState<string | null>(null);

    const rewards = [
        "Platinum Life Time",
        "1 Month Gold",
        "2 Months Gold",
        "3 Months Gold",
        "6 Months Gold",
        "1 Year Gold",
        "50% Discount",
        "Free Top Slot"
    ];

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        // Spin multiple times and land on a random segment
        const extraDegrees = Math.floor(Math.random() * 360);
        const spinRounds = 5 + Math.floor(Math.random() * 5);
        const totalRotation = rotation + (spinRounds * 360) + extraDegrees;

        setRotation(totalRotation);

        setTimeout(() => {
            setIsSpinning(false);
            // Calculate landed reward (assuming segments are equal)
            const normalizedDegree = (totalRotation % 360);
            const segmentSize = 360 / rewards.length;
            // The wheel spins clockwise, so we subtract from 360 and adjust for pointer at top
            const rewardIndex = Math.floor(((360 - normalizedDegree + (segmentSize / 2)) % 360) / segmentSize);

            // For the sake of "Congratulations!" shown in the image, we'll favor Platinum for this demo
            setReward("Platinum Plan Activated");
            setStep('result');
        }, 4000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md animate-in fade-in duration-500" onClick={onClose} />

            <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-white/20">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                >
                    <X size={20} className="text-slate-400" />
                </button>

                {step === 'spin' && (
                    <div className="p-8 flex flex-col items-center text-center space-y-8 py-12">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-display font-bold text-[#1A1A1A]">Spin to Unlock Your Reward</h2>
                            <p className="text-slate-500 text-sm font-medium">Exclusive reward for new users</p>
                        </div>

                        {/* Wheel Container */}
                        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
                            {/* Pointer */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-[#1A1A1A]" />
                            </div>

                            {/* Outer Glow */}
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />

                            {/* The Wheel */}
                            <div
                                className="w-full h-full rounded-full border-[8px] border-white shadow-2xl relative overflow-hidden transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1)"
                                style={{ transform: `rotate(${rotation}deg)` }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    {rewards.map((r, i) => {
                                        const angle = (360 / rewards.length) * i;
                                        const x1 = 50 + 50 * Math.cos((Math.PI * (angle - 90)) / 180);
                                        const y1 = 50 + 50 * Math.sin((Math.PI * (angle - 90)) / 180);
                                        const x2 = 50 + 50 * Math.cos((Math.PI * (angle + (360 / rewards.length) - 90)) / 180);
                                        const y2 = 50 + 50 * Math.sin((Math.PI * (angle + (360 / rewards.length) - 90)) / 180);

                                        return (
                                            <g key={i}>
                                                <path
                                                    d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                                                    fill={i % 2 === 0 ? '#FFD700' : '#FFF'}
                                                    stroke="#F8FAFC"
                                                    strokeWidth="0.5"
                                                />
                                                <text
                                                    x="50"
                                                    y="15"
                                                    transform={`rotate(${angle + (180 / rewards.length)}, 50, 50)`}
                                                    textAnchor="middle"
                                                    fontSize="3.5"
                                                    fontWeight="bold"
                                                    fill="#1A1A1A"
                                                    className="select-none"
                                                >
                                                    {r}
                                                </text>
                                            </g>
                                        );
                                    })}
                                    <circle cx="50" cy="50" r="10" fill="white" stroke="#F1F5F9" strokeWidth="2" />
                                    <g transform="translate(42.5, 42.5) scale(0.6)">
                                        <path d="M12 3l1.912 5.886L20 10.8l-5.886 1.912L12 21l-1.912-5.886L4 13.2l5.886-1.912z" fill="#2FED9A" />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <button
                            onClick={handleSpin}
                            disabled={isSpinning}
                            className={`w-full py-5 bg-primary text-[#1A1A1A] font-bold rounded-2xl shadow-xl shadow-primary/30 transition-all active:scale-95 text-lg flex items-center justify-center gap-3 ${isSpinning ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-105'}`}
                        >
                            {isSpinning ? <Zap size={20} className="animate-pulse" /> : <Sparkles size={20} />}
                            {isSpinning ? 'Spinning...' : 'Spin Now'}
                        </button>

                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Terms & Conditions Apply</p>
                    </div>
                )}

                {step === 'result' && (
                    <div className="p-8 flex flex-col items-center text-center space-y-8 py-14 animate-in fade-in zoom-in-95 duration-500">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse" />
                            <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-primary/20">
                                <Crown size={40} className="text-primary" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-3xl font-display font-black text-[#1A1A1A] flex items-center justify-center gap-3">
                                <Sparkles className="text-primary" size={24} />
                                Congratulations!
                                <Sparkles className="text-primary" size={24} />
                            </h2>

                            <div className="bg-[#1A1A1A] p-6 rounded-3xl space-y-2 border border-white/10 shadow-2xl">
                                <span className="text-primary font-bold text-[10px] uppercase tracking-wider">Benefit Unlocked</span>
                                <h3 className="text-white text-xl font-bold">{reward}</h3>
                                <p className="text-slate-400 text-xs">Life Access - Absolutely Free</p>
                                <div className="pt-2 flex items-center justify-center gap-2 text-primary">
                                    <Check size={14} className="bg-primary/20 rounded-full p-0.5" />
                                    <span className="text-[10px] font-bold uppercase tracking-wide">Verified Badge - Top Priority</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-3">
                            <button
                                onClick={() => onComplete(reward || '')}
                                className="w-full py-4 bg-primary text-[#1A1A1A] font-bold rounded-2xl shadow-xl shadow-primary/20 hover:brightness-105 transition-all text-sm"
                            >
                                Start Listing Properties
                            </button>
                            <button
                                onClick={() => setStep('details')}
                                className="w-full py-4 bg-[#1A1A1A] text-white font-bold rounded-2xl hover:bg-slate-900 transition-all text-sm"
                            >
                                Get Plan Information
                            </button>
                        </div>
                    </div>
                )}

                {step === 'details' && (
                    <div className="p-8 flex flex-col space-y-8 animate-in fade-in slide-in-from-right-10 duration-500">
                        <div className="bg-gradient-to-br from-[#1A1A1A] to-slate-800 p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Crown size={120} />
                            </div>

                            <div className="relative z-10 flex items-start justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                                            <Crown size={16} className="text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Platinum Plan Activated</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm">Lifetime — Free</p>
                                </div>
                                <div className="px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                                    <span className="text-[10px] font-black tracking-widest text-primary uppercase">Free</span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                {[
                                    { icon: List, text: "9 Listing", color: "text-blue-400" },
                                    { icon: Sparkles, text: "All Gold Features", color: "text-yellow-400" },
                                    { icon: TrendingUp, text: "Top Search Rank", color: "text-green-400" },
                                    { icon: Shield, text: "Dedicated Relationship Manager", color: "text-red-400" },
                                    { icon: Users, text: "Social Media Promotion", color: "text-purple-400" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                                        <div className={`p-2 rounded-xl bg-white/5 border border-white/5 transition-all group-hover:scale-110 ${item.color}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-200">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={() => onComplete(reward || '')}
                                className="w-full py-4 bg-[#1A1A1A] text-white font-bold rounded-2xl hover:bg-slate-900 transition-all text-sm flex items-center justify-center gap-2"
                            >
                                Start Listing Properties <ChevronRight size={16} />
                            </button>
                            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">Terms & Conditions</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};



export default SpinModule;
