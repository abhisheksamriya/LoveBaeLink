"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BalloonPop({ loveNote, onComplete }: { loveNote?: string, onComplete: () => void }) {
  const [popped, setPopped] = useState<number[]>([]);
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const balloons = [
    { 
      id: 1, 
      color: "bg-pink-400", 
      heading: "Hi, my favourite boy 🥰",
      gif: "/dance.gif",
      text: "Some people wait a lifetime to find their person, and I got so lucky. Your smile is my favourite view in the whole world." 
    },
    { 
      id: 2, 
      color: "bg-purple-400", 
      heading: "Little things I love ✨",
      gif: "/hug.gif",
      text: "Your goofy jokes, your warm hugs, and how you make me feel safe. Every little thing about you is my favourite thing." 
    },
    { 
      id: 3, 
      color: "bg-rose-400", 
      heading: "My happy place 🏡",
      gif: "/cumfort.gif",
      text: "No matter how hard my day is, talking to you makes everything better. You are my ultimate comfort zone." 
    },
    { 
      id: 4, 
      color: "bg-amber-400", 
      heading: "Just a reminder 💖",
      gif: "/love-more.gif",
      text: "I love you more than words can say. Thank you for being the best boyfriend ever. Now go claim your certificate!" 
    }
  ];

  const handlePop = (id: number) => {
    if (!popped.includes(id)) {
      setPopped([...popped, id]);
      setActiveNote(id);
    }
  };

  const activeBalloonData = balloons.find(b => b.id === activeNote);

  return (
    <div className="flex flex-col items-center w-full p-4 font-[Quicksand] relative min-h-125">
      
      <div className="hidden">
        {balloons.map((b) => (
          <Image key={`preload-${b.id}`} src={b.gif} alt="preload" width={1} height={1} priority unoptimized />
        ))}
      </div>

      <h2 className="text-4xl text-pink-600 font-[Caveat] mb-2 font-bold">Pop the balloons!</h2>
      <p className="text-gray-500 text-sm mb-12 font-bold">Each balloon has a secret love note 🎈</p>

      <div className="flex gap-5 mb-16 h-28 items-end">
        {balloons.map((b, i) => (
          <AnimatePresence key={b.id}>
            {!popped.includes(b.id) && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                exit={{ scale: 0, opacity: 0 }} // Popping effect
                transition={{ y: { duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" } }}
                onClick={() => handlePop(b.id)}
                className={`w-14 h-16 rounded-t-[50%] rounded-b-[45%] cursor-pointer ${b.color} relative shadow-md flex items-center justify-center hover:brightness-110 active:scale-90`}
              >
                <span className="absolute top-2 left-2 w-3 h-4 bg-white/30 rounded-full rotate-45"></span>
                <div className="absolute -bottom-2 w-3 h-2 bg-inherit rounded-sm clip-triangle"></div>
                <div className="absolute top-[110%] w-px h-16 bg-gray-300 origin-top animate-swing"></div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      <div className="w-full mt-auto bg-white/50 p-4 rounded-2xl border border-pink-50">
        <div className="flex justify-between text-xs text-pink-400 font-bold mb-2 uppercase tracking-widest">
          <span>Love Progress</span>
          <span>{popped.length} / 4 popped</span>
        </div>
        <div className="w-full h-3 bg-pink-100 rounded-full mb-6 overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-pink-500 rounded-full" 
            animate={{ width: `${(popped.length / 4) * 100}%` }} 
            transition={{ type: "spring", bounce: 0.2 }}
          />
        </div>
        <button 
          disabled={popped.length < 4}
          onClick={onComplete}
          className={`w-full font-bold py-4 px-8 rounded-full shadow-lg transition-all ${popped.length === 4 ? 'bg-pink-500 hover:bg-pink-600 text-white animate-bounce' : 'bg-gray-200 text-gray-400'}`}
        >
          {popped.length === 4 ? "Get My Certificate 🎓" : "Pop all balloons first!"}
        </button>
      </div>

      <AnimatePresence>
        {activeNote && activeBalloonData && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-pink-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 rounded-3xl"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="bg-white p-5 rounded-2xl w-full max-w-[320px] text-center shadow-2xl border-4 border-pink-100 relative"
            >
              <span className="text-[10px] text-pink-400 font-black tracking-widest uppercase block mb-2">
                Love Note #{activeNote} of 4
              </span>
              
              <h3 className="text-3xl text-pink-500 font-[Caveat] font-bold mb-4">
                {activeBalloonData.heading}
              </h3>
              
              <div className="w-full bg-pink-50 rounded-xl p-2 mb-4 border border-pink-100 shadow-inner flex justify-center">
                <Image 
                  src={activeBalloonData.gif} 
                  alt="Cute GIF" 
                  width={180} 
                  height={180} 
                  unoptimized 
                  className="rounded-lg object-cover mix-blend-multiply"
                />
              </div>

              <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 px-2">
                {activeBalloonData.text}
              </p>
              
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveNote(null)} 
                className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-10 rounded-full font-bold shadow-lg shadow-pink-200"
              >
                Okay 💖
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}