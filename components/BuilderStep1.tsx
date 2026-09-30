"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface BuilderStep1Props {
  formData: { userName: string; boyfriendName: string; loveNote: string; };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
}

export default function BuilderStep1({ formData, onChange, onNext }: BuilderStep1Props) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 9, 3).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          m: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full items-center font-[Quicksand] relative z-10">
      
      <h1 className="text-3xl text-pink-500 font-[Caveat] text-center mb-1 font-bold">
        Happy Boyfriend's Day
      </h1>
      <p className="text-center text-gray-500 text-sm mb-2">
        Let's make a cute love card for him 💌
      </p>

      {/* countdown */}
      <div className="w-full bg-pink-50/80 border border-pink-100 rounded-2xl p-3.5 mb-2 shadow-sm">
        <h3 className="text-center text-pink-600 font-bold text-sm mb-3 flex items-center justify-center gap-2">
          🎀 Boyfriend's Day · 3rd October 🎀
        </h3>
        <div className="flex justify-between gap-2">
          {[
            { label: 'days', value: timeLeft.d },
            { label: 'hrs', value: timeLeft.h },
            { label: 'min', value: timeLeft.m },
            { label: 'sec', value: timeLeft.s }
          ].map((time, i) => (
            <div key={i} className="flex flex-col items-center bg-white w-15 py-2 rounded-xl shadow-sm border border-pink-50">
              <span className="text-lg font-bold text-pink-500">{time.value.toString().padStart(2, '0')}</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{time.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <input type="text" name="userName" placeholder="Your Name (e.g. Diya)" value={formData.userName} onChange={onChange}
          className="w-full border-2 border-pink-100 rounded-2xl px-3 py-2 focus:outline-none focus:border-pink-400 bg-pink-50/50 text-gray-800 font-semibold"
        />
      </div>

      <div className="w-full">
        <input type="text" name="boyfriendName" placeholder="His Name (e.g. Aman)" value={formData.boyfriendName} onChange={onChange}
          className="w-full border-2 border-pink-100 rounded-2xl px-3 py-2 focus:outline-none focus:border-pink-400 bg-pink-50/50 text-gray-800 font-semibold"
        />
      </div>

      <div className="w-full">
        <textarea name="loveNote" rows={5} placeholder="Your love note..."  value={formData.loveNote} onChange={onChange}
          className="w-full border-2 border-pink-100 rounded-2xl p-4 focus:outline-none focus:border-pink-400 bg-pink-50/50 text-gray-800 text-sm font-medium"
        />
      </div>

      <button onClick={onNext} className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 px-3 rounded-full mt-2 shadow-xl shadow-pink-200 transition-transform active:scale-95 flex justify-center items-center gap-2 text-lg">
        Create Card <Heart size={20} className="fill-white" />
      </button>
    </div>
  );
}