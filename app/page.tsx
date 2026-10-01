"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle } from "lucide-react";
import BuilderStep1 from "@/components/BuilderStep1";
import BuilderStep2 from "@/components/BuilderStep2";
import LoveMeter from "@/components/LoveMeter";
import YesNoTrick from "@/components/YesNoTrick";
import BalloonPop from "@/components/BalloonPop";
import Certificate from "@/components/Certificate";
import { db } from "@/lib/firebase";
import { doc, setDoc, collection } from "firebase/firestore"; 

export default function Home() {
  const [step, setStep] = useState(1);
  const [previewStep, setPreviewStep] = useState(0); 
  const [formData, setFormData] = useState({
    userName: "", boyfriendName: "", 
    loveNote: `Happy Boyfriend's Day, my love ❤️! You are my peace, my best friend, and my biggest cheerleader. Life is so much softer and sweeter with you in it`,
  });
  const [utr, setUtr] = useState(""); // Ise rehne de taaki props mein error na aaye
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartPreview = () => {
    if (!formData.userName || !formData.boyfriendName) {
      alert("Please fill in both names to see the preview 💌"); return;
    }
    setStep(2); 
    setPreviewStep(0);
  };

  const handlePaymentVerify = async () => {
    setIsSaving(true);
    try {
      const uniqueId = Math.random().toString(36).substring(2, 8);
      
      await setDoc(doc(db, "gifts", uniqueId), { 
        ...formData, 
        paid: true, 
        createdAt: new Date() 
      });
      
      setGeneratedLink(`${window.location.origin}/gift/${uniqueId}`);
      setStep(4);
    } catch (e) { 
      alert("Error saving"); 
    } finally { 
      setIsSaving(false); 
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(generatedLink);
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = generatedLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-svh bg-pink-50 p-4 flex flex-col items-center justify-center relative w-full h-full bg-checkers">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border-[6px] border-white/50 relative z-10 min-h-125 flex flex-col justify-center">
        
        {step === 1 && <BuilderStep1 formData={formData} onChange={handleChange} onNext={handleStartPreview} />}

        {/* preview */}
        {step === 2 && (
          <div className="w-full flex flex-col items-center relative">
            <div className="absolute -top-10 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
              Preview Mode 👀
            </div>
            {previewStep === 0 && <LoveMeter boyfriendName={formData.boyfriendName} onComplete={() => setPreviewStep(1)} />}
            {previewStep === 1 && <YesNoTrick onYes={() => setPreviewStep(2)} />}
            {previewStep === 2 && <BalloonPop loveNote={formData.loveNote} onComplete={() => setPreviewStep(3)} />}
            {previewStep === 3 && (
              <div className="w-full flex flex-col items-center">
                <Certificate userName={formData.userName} boyfriendName={formData.boyfriendName} loveNote={formData.loveNote} />
                <button onClick={() => setStep(3)} className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-full shadow-lg text-lg animate-bounce">
                  Continue ✨
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">Click above to get your shareable link!</p>
              </div>
            )}
          </div>
        )}

        {step === 3 && <BuilderStep2 utr={utr} setUtr={setUtr} onBack={() => setStep(2)} onVerify={handlePaymentVerify} isSaving={isSaving} />}

        {step === 4 && (
          <div className="flex flex-col items-center text-center py-6 font-[Quicksand]">
            <img src="/go.gif" alt="Happy" className="w-24 h-24 mb-2" />
            <h2 className="text-3xl text-pink-500 font-[Caveat] mb-2 font-bold">Link is Ready!</h2>
            <p className="text-gray-500 text-sm mb-2">Send this link to {formData.boyfriendName} 💕</p>
            <p className="text-red-500 text-xs font-bold mb-6">(Activates in 5 mins after verification)</p>
            
            <div className="w-full flex items-center bg-gray-50 border border-pink-200 rounded-2xl p-2 mb-6 shadow-inner">
              <input type="text" readOnly value={generatedLink} className="flex-1 bg-transparent text-sm text-gray-800 px-2 outline-none font-medium" />
              <button onClick={copyToClipboard} className="bg-pink-100 text-pink-600 p-3 rounded-xl hover:bg-pink-200 transition">
                <Copy size={20} />
              </button>
            </div>
            {copied && <p className="text-pink-500 text-xs -mt-4 mb-4 font-bold">Copied to clipboard!</p>}
          </div>
        )}
      </motion.div>
    </div>
  );
}