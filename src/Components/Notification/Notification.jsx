import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, X } from 'lucide-react';

const Notification = () => {
    const initialTime = 13;
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // Agar yashiringan, to'xtatilgan yoki vaqt tugagan bo'lsa, taymerni ishlatmaymiz
        if (!isVisible || isPaused || timeLeft <= 0) {
            if (timeLeft <= 0) setIsVisible(false);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isVisible, isPaused, timeLeft]);

    if (!isVisible) return null;

    // Progress bar kengligini hisoblash (%)
    const progressWidth = (timeLeft / initialTime) * 100;

    return (
        <div className="flex flex-col w-[340px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden font-sans fixed right-0 top-20">
            {/* Yuqori qism (Sarlavha va tugmalar) */}
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#22c55e] w-6 h-6 stroke-[2.5]" />
                    <span className="font-bold text-gray-900 text-[17px]">Changes saved</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <button className="hover:bg-gray-100 transition-colors p-1 rounded-lg">
                        <ChevronDown className="w-5 h-5 stroke-[2]" />
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="hover:bg-gray-100 transition-colors p-1 rounded-lg"
                    >
                        <X className="w-5 h-5 stroke-[2]" />
                    </button>
                </div>
            </div>

            {/* Pastki qism (Xabar, Taymer va Progress Bar) */}
            <div className="bg-[#f8f9fa] flex flex-col relative border-t border-gray-50">
                <div
                    className="px-4 py-3 text-[14px] text-gray-500 cursor-pointer select-none"
                    onClick={() => setIsPaused(!isPaused)}
                >
                    This message will close in <span className="font-bold text-gray-700">{timeLeft}</span> seconds.{' '}
                    <span className="font-semibold text-gray-900 cursor-pointer">
                        {isPaused ? "Click to resume." : "Click to stop."}
                    </span>
                </div>

                {/* Progress bar qismi */}
                <div className="h-1.5 w-full bg-gray-200/50">
                    <div
                        className="h-full bg-[#22c55e] transition-all duration-1000 ease-linear"
                        style={{ width: `${progressWidth}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Notification;