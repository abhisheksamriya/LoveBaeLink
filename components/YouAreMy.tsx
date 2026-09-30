"use client";
import { motion } from "framer-motion";

export default function YouAreMy({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-112.5 p-4 font-[Quicksand] relative">
      <h2 className="text-4xl font-[Caveat] text-pink-500 mb-10 text-center font-bold">You Are My...</h2>
      
      <div className="relative w-full h-62.5 flex items-center justify-center">
        <motion.img 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          src="https://media.tenor.com/Z5v938R2kG0AAAAi/peach-goma.gif" 
          alt="Cute" 
          className="w-32 h-32 absolute z-10"
        />

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="absolute top-0 left-2 text-pink-600 font-[Caveat] text-2xl">peace 🕊️</motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="absolute top-6 right-2 text-pink-600 font-[Caveat] text-2xl text-right">home 🏡</motion.div>
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="absolute bottom-20 left-0 text-pink-600 font-[Caveat] text-2xl">my lifeline ❤️</motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="absolute bottom-24 right-0 text-pink-600 font-[Caveat] text-xl text-right">partner in crime 🤪</motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute -bottom-8 left-4 text-pink-600 font-[Caveat] text-2xl">favourite person ✨</motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="absolute -bottom-2 right-4 text-pink-600 font-[Caveat] text-2xl">happy place 🌈</motion.div>
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        onClick={onComplete}
        className="mt-16 w-[80%] bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg"
      >
        Continue →
      </motion.button>
    </div>
  );
}