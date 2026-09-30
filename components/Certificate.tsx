"use client";
import { motion } from "framer-motion";

export default function Certificate({ userName, boyfriendName, loveNote }: { userName: string, boyfriendName: string, loveNote: string }) {
  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center w-full p-4 font-quicksand">
      <h2 className="text-3xl font-caveat text-pink-600 mb-6">Your Official Certificate</h2>
      
      <div className="w-full bg-white border-[6px] border-amber-200 p-6 text-center shadow-xl relative rounded-sm">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-400 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Love 🤍</div>
        
        <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mt-4 mb-2">Certificate of Love</h3>
        <p className="text-[10px] text-gray-400 mb-6">This certificate is proudly presented to</p>
        
        <div className="font-caveat text-5xl text-pink-600 mb-6 border-b border-pink-200 pb-2 inline-block min-w-50">
          {boyfriendName}
        </div>

        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          This is to certify that <span className="font-bold text-pink-500">{boyfriendName}</span> is officially the World's Best Boyfriend. The sweetest, funniest, and most wonderful person {userName} knows.
        </p>
        
        <div className="bg-pink-50/50 p-4 rounded-xl text-xs text-gray-600 italic mb-6 border border-pink-100">
          "{loveNote}"
        </div>

        <p className="font-caveat text-2xl text-pink-500">Yours, {userName} 💕</p>
      </div>
    </motion.div>
  );
}