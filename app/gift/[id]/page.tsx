"use client";

import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import LoveMeter from "@/components/LoveMeter";
import YesNoTrick from "@/components/YesNoTrick";
import BalloonPop from "@/components/BalloonPop";
import Certificate from "@/components/Certificate";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import FloatingHearts from "@/components/FloatingHearts";
import YouAreMy from "@/components/YouAreMy";

export default function GiftPage(props: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(props.params);
  const giftId = resolvedParams.id;

  const [data, setData] = useState<any>(null);
  const [step, setStep] = useState(0); 

  useEffect(() => {
    if (!giftId) return;
    const unsub = onSnapshot(doc(db, "gifts", giftId), (docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    });

    return () => unsub(); 
  }, [giftId]);

  // loading State
  if (!data) {
    return (
      <div className="min-h-svh bg-pink-50 flex items-center justify-center">
         <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="text-4xl">🤍</motion.div>
      </div>
    );
  }

  // waiting for payment verification
if (data.paid === false) {
    return (
      <div className="min-h-svh w-full flex flex-col items-center justify-center p-4 relative bg-checkers">
        <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm min-h-137.5 rounded-3xl shadow-2xl border-8 border-white/60 relative overflow-hidden flex flex-col items-center py-6">
          <div className="flex flex-col items-center justify-center h-full text-center p-6 mt-12 font-[Quicksand]">
            <img 
              src="/waiting.gif" 
              alt="Waiting" 
              className="w-32 h-32 mb-6"
            />
            <h2 className="text-3xl text-pink-500 font-[Caveat] mb-2 font-bold">Surprise is Loading...</h2>
            <p className="text-gray-600 font-bold mb-2">Payment Verification Pending</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 px-4">
              Your special card will unlock automatically in a few minutes once the payment is verified. Stay on this page! ✨
            </p>
            <div className="flex gap-2">
               <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
               <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
               <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // main app
  return (
    <div className="min-h-svh w-full flex flex-col items-center justify-center p-4 relative bg-checkers">
      <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm min-h-137.5 rounded-3xl shadow-2xl border-8 border-white/60 relative overflow-hidden flex flex-col items-center py-6 z-10">
      <FloatingHearts />
        
        {step === 0 && <LoveMeter boyfriendName={data.boyfriendName} onComplete={() => setStep(1)} />}
        {step === 1 && <YesNoTrick onYes={() => setStep(2)} />}
            {step === 2 && <YouAreMy onComplete={() => setStep(3)} />}
        {step === 3 && <BalloonPop loveNote={data.loveNote} onComplete={() => setStep(4)} />}
        {step === 4  && <Certificate userName={data.userName} boyfriendName={data.boyfriendName} loveNote={data.loveNote} />}
      
      </div>
    </div>
  );
}