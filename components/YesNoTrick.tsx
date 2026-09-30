"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function YesNoTrick({ onYes }: { onYes: () => void }) {
  const [showAngry, setShowAngry] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 font-caveat p-4 text-center min-h-100">
      <AnimatePresence mode="wait">
        {!showAngry ? (
          <motion.div key="ask" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
            <h2 className="text-4xl text-pink-600 mb-6">I have made something for you</h2>
            <div className="text-7xl mb-8">🎁</div>
            <p className="text-2xl text-gray-700 mb-8">Do you wanna see it?</p>
            <div className="flex gap-4">
              <button onClick={onYes} className="bg-pink-500 hover:bg-pink-600 transition-colors text-white text-xl py-2 px-10 rounded-full shadow-lg">Yes</button>
              <button onClick={() => setShowAngry(true)} className="bg-white text-gray-500 border-2 border-gray-200 hover:bg-gray-50 transition-colors text-xl py-2 px-10 rounded-full">No</button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="angry" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
            <h2 className="text-4xl text-red-500 font-bold mb-4 uppercase">How Dare You!?</h2>
            <div className="text-7xl mb-6">😠</div>
            <p className="text-lg text-gray-600 mb-8 font-quicksand">Okay okay, don't cry... let's try that again 🙄</p>
            <button onClick={() => setShowAngry(false)} className="bg-pink-500 hover:bg-pink-600 text-white font-quicksand font-bold py-3 px-8 rounded-full shadow-lg">Try Again</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}