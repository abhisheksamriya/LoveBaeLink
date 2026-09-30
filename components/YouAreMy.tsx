"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function YouAreMy({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-125 p-4 font-[Quicksand] relative">
      <h2 className="text-4xl font-[Caveat] text-pink-500 mb-8 text-center font-bold">You Are My...</h2>
      
      <div className="relative w-full h-80 flex items-center justify-center max-w-85 mx-auto">
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="absolute z-10 w-36 h-36 bg-pink-50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)] border-4 border-white"
        >
          <Image 
            src="/my.gif" 
            alt="Cute" 
            width={120}
            height={120}
            unoptimized
            priority
            className="object-cover rounded-full"
          />
        </motion.div>

        
        {/* 1. Top Left */}
        <motion.div 
          initial={{ opacity: 0, x: -20, y: 10 }} 
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }} 
          transition={{ delay: 0.3, y: { repeat: Infinity, duration: 3.2, ease: "easeInOut" } }} 
          className="absolute top-8 left-0 text-pink-600 font-[Caveat] text-2xl bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm z-20"
        >
          peace 🕊️
        </motion.div>
        
        {/* 2. Top Right */}
        <motion.div 
          initial={{ opacity: 0, x: 20, y: 10 }} 
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }} 
          transition={{ delay: 0.5, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }} 
          className="absolute top-24 right-0 text-pink-600 font-[Caveat] text-2xl text-right bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm z-20"
        >
          home 🏡
        </motion.div>
        
        {/* 3. Middle Left */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0, y: [0, 5, 0] }} 
          transition={{ delay: 0.7, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }} 
          className="absolute top-[40%] -left-4 text-pink-600 font-[Caveat] text-2xl bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm z-20"
        >
          my lifeline ❤️
        </motion.div>
        
        {/* 4. Middle Right */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0, y: [0, 4, 0] }} 
          transition={{ delay: 0.9, y: { repeat: Infinity, duration: 3.8, ease: "easeInOut" } }} 
          className="absolute top-[60%] -right-4 text-pink-600 font-[Caveat] text-xl text-right bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm z-20"
        >
          partner in crime 🤪
        </motion.div>
        
        {/* 5. Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: [0, -5, 0] }} 
          transition={{ delay: 1.1, y: { repeat: Infinity, duration: 3.4, ease: "easeInOut" } }} 
          className="absolute bottom-8 left-0 text-pink-600 font-[Caveat] text-2xl bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm z-20"
        >
          favourite person ✨
        </motion.div>
        
        {/* 6. Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: [0, -6, 0] }} 
          transition={{ delay: 1.3, y: { repeat: Infinity, duration: 3.6, ease: "easeInOut" } }} 
          className="absolute -bottom-2 right-2 text-pink-600 font-[Caveat] text-2xl bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm z-20"
        >
          happy place 🌈
        </motion.div>
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 2 }}
        onClick={onComplete}
        className="mt-14 w-[80%] max-w-70 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-pink-200 transition-colors z-30"
      >
        Continue →
      </motion.button>
    </div>
  );
}