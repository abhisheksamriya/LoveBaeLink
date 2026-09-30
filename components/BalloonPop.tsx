"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BalloonPop({ loveNote, onComplete }: { loveNote: string, onComplete: () => void }) {
  const [popped, setPopped] = useState<number[]>([]);
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const balloons = [
    { id: 1, color: "bg-pink-400", note: "You make everything better 💕" },
    { id: 2, color: "bg-purple-400", note: "I love your smile 😊" },
    { id: 3, color: "bg-rose-400", note: "You are my favorite notification 📱" },
    { id: 4, color: "bg-amber-400", note: loveNote }
  ];

  const handlePop = (id: number) => {
    if (!popped.includes(id)) {
      setPopped([...popped, id]);
      setActiveNote(id);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4 font-quicksand relative min-h-112.5">
      <h2 className="text-3xl text-pink-600 font-caveat mb-2">Each balloon has a love note</h2>
      <p className="text-gray-500 text-sm mb-12">Pop them one by one, my love 🎈</p>

      <div className="flex gap-4 mb-16 h-24">
        {balloons.map((b, i) => (
          <AnimatePresence key={b.id}>
            {!popped.includes(b.id) && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ y: { duration: 2, repeat: Infinity, delay: i * 0.2 } }}
                onClick={() => handlePop(b.id)}
                className={`w-14 h-20 rounded-[50%] cursor-pointer ${b.color} relative shadow-md flex items-center justify-center`}
              >
                <span className="text-white/60 text-xs">🤍</span>
                <div className="absolute top-full w-px h-12 bg-gray-300"></div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      <div className="w-full mt-auto">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Love</span>
          <span>{popped.length} / 4 popped</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <motion.div className="h-full bg-pink-500 rounded-full" animate={{ width: `${(popped.length / 4) * 100}%` }} />
        </div>
        <button 
          disabled={popped.length < 4}
          onClick={onComplete}
          className={`w-full font-bold py-3 px-8 rounded-full shadow-lg transition ${popped.length === 4 ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-500'}`}
        >
          Continue →
        </button>
      </div>

      <AnimatePresence>
        {activeNote && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-6 rounded-3xl">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white p-6 rounded-2xl w-full text-center shadow-2xl border-4 border-pink-100">
              <span className="text-xs text-gray-400 tracking-widest uppercase block mb-4">Love Note #{activeNote}</span>
              <p className="text-lg text-gray-700 font-medium mb-6">
                {balloons.find(b => b.id === activeNote)?.note}
              </p>
              <button onClick={() => setActiveNote(null)} className="bg-pink-500 text-white py-2 px-8 rounded-full font-bold">Okay</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}