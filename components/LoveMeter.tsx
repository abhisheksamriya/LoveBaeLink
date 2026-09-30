"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoveMeter({ boyfriendName, onComplete }: { boyfriendName: string, onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  const handleTap = () => {
    if (progress < 100) setProgress(Math.min(progress + 25, 100));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center w-full mt-4 p-4 font-quicksand">
      <h2 className="text-2xl text-pink-600 font-caveat mb-6 text-center">
        Hey {boyfriendName}, tap the button to fill my heart up 🥰
      </h2>
      
      <div className="text-5xl font-bold text-pink-500 mb-2">{progress}%</div>
      <div className="w-full h-4 bg-pink-100 rounded-full mb-6 overflow-hidden relative">
        <motion.div 
          className="h-full bg-pink-500 absolute left-0 top-0" 
          animate={{ width: `${progress}%` }} 
          transition={{ type: "spring", bounce: 0.5 }}
        />
      </div>

      <p className="text-gray-500 font-bold mb-8 h-6 text-center">
        {progress === 0 && "Just a little spark..."}
        {progress > 0 && progress < 100 && "Getting warmer, cutie..."}
        {progress === 100 && "OVERFLOWING!! I love you 💖"}
      </p>

      {progress < 100 ? (
        <motion.button 
          whileTap={{ scale: 0.9 }} 
          onClick={handleTap} 
          className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        >
          Tap to fill with love
        </motion.button>
      ) : (
        <motion.button 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          onClick={onComplete} 
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
}