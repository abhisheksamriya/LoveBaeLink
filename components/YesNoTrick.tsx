"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function YesNoTrick({ onYes }: { onYes: () => void }) {
  const [showAngry, setShowAngry] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-112.5 p-4 font-[Quicksand] text-center">
      <AnimatePresence mode="wait">
        {!showAngry ? (
          <motion.div 
            key="ask" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="flex flex-col items-center w-full"
          >
            <h2 className="text-3xl text-pink-600 font-[Caveat] font-bold mb-6">
              I have made something for you
            </h2>
            
            {/* Cute Polaroid Frame */}
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 3 }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "easeInOut" }}
              className="bg-white p-3 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-sm border border-gray-100 mb-6 relative"
            >
            <Image 
                src="/surprise.gif" 
                alt="Gift" 
                width={160} 
                height={160} 
                priority 
                unoptimized 
                className="w-40 h-40 object-cover border border-gray-50 rounded-sm" 
              />
              <p className="absolute bottom-2 left-0 w-full text-center text-pink-400 font-[Caveat] font-bold text-xl">
                Surprise! 🎁
              </p>
            </motion.div>

            <p className="text-lg text-gray-700 font-bold mb-6">Do you wanna see it?</p>
            
            <div className="flex gap-4 w-full max-w-62.5 justify-center">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={onYes} 
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full shadow-lg shadow-pink-200 transition-colors"
              >
                Yes
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowAngry(true)} 
                className="flex-1 bg-white text-gray-500 border-2 border-pink-100 hover:bg-pink-50 font-bold py-3 rounded-full transition-colors"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="angry" 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ type: "spring", bounce: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="text-4xl text-red-500 font-[Caveat] font-bold mb-6 uppercase tracking-wider">
              How Dare You!?
            </h2>
            
            <motion.div 
              animate={{ x: [-5, 5, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
              className="bg-white p-3 pb-10 shadow-[0_8px_30px_rgb(239,68,68,0.2)] rounded-sm border border-gray-100 mb-6 relative -rotate-3"
            >
            <Image 
                src="/bully.gif" 
                alt="Angry" 
                width={160} 
                height={160} 
                priority // Preload in background automatically!
                unoptimized // Let the original GIF play
                className="w-40 h-40 object-cover border border-gray-50 rounded-sm" 
              />
              <p className="absolute bottom-2 left-0 w-full text-center text-red-400 font-[Caveat] font-bold text-xl">
                Apologize! 😤
              </p>
            </motion.div>

            <p className="text-sm text-gray-500 font-bold mb-8">
              Okay okay, don't cry... let's try that again 🙄
            </p>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAngry(false)} 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-pink-200"
            >
              Try Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}