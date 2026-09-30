"use client";
import { motion } from "framer-motion";

export default function Certificate({ userName, boyfriendName, loveNote }: { userName: string, boyfriendName: string, loveNote: string }) {
  // Aaj ki date nikalne ke liye taaki certificate ekdum real lage
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center w-full p-2 font-[Quicksand]">
      
      <h2 className="text-3xl font-[Caveat] font-bold text-pink-500 mb-6 text-center">
        Your Official Certificate ✨
      </h2>
      
      <div className="w-full max-w-sm bg-linear-to-br from-amber-200 via-pink-300 to-purple-300 p-2 rounded-xl shadow-2xl relative">
        
        {/* Top Ribbon / Seal */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-[10px] font-black px-6 py-2 rounded-t-none rounded-b-xl uppercase tracking-[0.3em] shadow-lg z-10 flex flex-col items-center">
          <span>CERTIFIED</span>
          <span className="text-xs">🤍 LOVE 🤍</span>
        </div>

        <div className="bg-white/95 backdrop-blur-sm p-6 pt-10 text-center rounded-lg border-2 border-dashed border-pink-300 relative h-full flex flex-col justify-between">
          
          <h3 className="text-[10px] font-black tracking-[0.3em] text-pink-400 uppercase mb-2">
            Certificate of Love
          </h3>
          <p className="text-[11px] text-gray-500 mb-4 font-semibold uppercase tracking-wider">
            This is proudly presented to
          </p>
          
          <div className="font-[Caveat] text-5xl text-pink-600 mb-4 font-bold tracking-wide relative inline-block w-full">
            {boyfriendName}
            <div className="absolute -bottom-2 left-[10%] w-[80%] h-px bg-linear-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed mb-6 px-2 font-medium">
            This is to certify that <span className="font-bold text-pink-500">{boyfriendName}</span> is officially the World's Best Boyfriend. The sweetest, funniest, and most wonderful person <span className="font-bold text-pink-500">{userName}</span> knows.
          </p>
          
          <div className="relative bg-pink-50 p-4 rounded-xl text-xs text-gray-700 font-medium italic mb-6 border border-pink-100 shadow-inner">
            <span className="absolute -top-3 -left-2 text-4xl text-pink-300 font-serif opacity-70">"</span>
            {loveNote}
            <span className="absolute -bottom-5 -right-2 text-4xl text-pink-300 font-serif opacity-70">"</span>
          </div>

          <div className="flex justify-between items-end mt-2 px-2 border-t border-gray-100 pt-4">
            
            <div className="flex flex-col items-center">
              <span className="text-pink-500 text-sm font-bold">{date}</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest border-t border-gray-300 mt-1 pt-1 w-16 text-center">Date</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-[Caveat] text-2xl text-pink-600 leading-none">{userName}</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest border-t border-gray-300 mt-1 pt-1 w-20 text-center">Signature</span>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}