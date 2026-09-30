"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveMeter({ boyfriendName, onComplete }: { boyfriendName: string, onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  const handleTap = () => {
    if (progress < 100) setProgress(Math.min(progress + 20, 100));
  };

  const stage = progress < 40 ? 0 : progress < 70 ? 1 : progress < 100 ? 2 : 3;

  const content = [
    { text: "Just a little spark...", emoji: "😊", gif: "/little.gif" }, 
    { text: "Getting warmer, cutie...", emoji: "🥰", gif: "/warmer.gif" }, 
    { text: "Almost there! Don't stop...", emoji: "🥺", gif: "/love.gif" }, 
    { text: "OVERFLOWING!! I love you 💖", emoji: "❤️", gif: "/overflowing.gif" }, 
  ];

  const currentContent = content[stage];

  const radius = 80;
  const circumference = Math.PI * radius; 
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center w-full mt-2 font-[Quicksand]">
      
      <div className="relative w-full max-w-62.5 flex flex-col items-center justify-start mt-6">
        
        <div className="absolute top-21.25 w-full flex justify-between px-2 text-pink-300 text-xs font-bold">
          <span>0%</span>
          <span>100%</span>
        </div>

        <svg viewBox="0 0 200 120" className="w-full overflow-visible">
          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#fce7f3" strokeWidth="16" strokeLinecap="round" />
          
          <motion.path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#ec4899"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
          />
        </svg>
        
        <div className="absolute top-[40%] flex flex-col items-center">
          <motion.div 
            key={progress} 
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-pink-500 font-[Caveat]"
          >
            {progress}%
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={`text-${stage}`} 
          initial={{ y: 10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: -10, opacity: 0 }}
          className="flex flex-col items-center mt-2 mb-4 h-12"
        >
          <span className="text-2xl mb-1">{currentContent.emoji}</span>
          <p className="text-gray-500 font-bold text-sm">{currentContent.text}</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div 
          key={`gif-${stage}`} 
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }} 
          animate={{ scale: 1, rotate: stage % 2 === 0 ? 3 : -3, opacity: 1 }} 
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="bg-white p-3 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-sm border border-gray-100 mb-8 relative"
        >
          <img src={currentContent.gif} alt="Love gif" className="w-36 h-36 object-cover border border-gray-100 rounded-sm" />
          <div className="absolute bottom-2 left-0 w-full text-center text-pink-400 text-lg font-[Caveat] font-bold">
            {stage === 3 ? "Perfect!" : "Keep going..."}
          </div>
        </motion.div>
      </AnimatePresence>

      {progress < 100 ? (
        <motion.button 
          whileTap={{ scale: 0.9 }} 
          onClick={handleTap} 
          className="bg-pink-500 hover:bg-pink-600 w-[80%] max-w-75 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-pink-200 transition-colors z-10"
        >
          Tap to fill with love 💖
        </motion.button>
      ) : (
        <motion.button 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          onClick={onComplete} 
          className="bg-purple-600 w-[80%] max-w-75 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-200 animate-bounce z-10"
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
}