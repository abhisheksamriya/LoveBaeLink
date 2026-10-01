"use client";
interface BuilderStep2Props {
  utr: string; setUtr: (val: string) => void; onBack: () => void; onVerify: () => void; isSaving: boolean;
}

export default function BuilderStep2({ utr, setUtr, onBack, onVerify, isSaving }: BuilderStep2Props) {
const upiLink = "upi://pay?pa=BHARATPE2N0W0C8L1S29734@unitype&pn=LoveCard&am=1.00&cu=INR&tn=Boyfriend Day Card";

  return (
    <div className="flex flex-col items-center text-center py-2 w-full font-[Quicksand]">
      <img src="/money.gif" alt="Pay" className="w-24 h-24 mb-2" />
      <h2 className="text-3xl text-pink-500 font-[Caveat] mb-2 font-bold">Unlock Your Card</h2>
      <p className="text-gray-500 text-sm mb-6 px-4">Your card is ready! Just one tiny step to get the shareable link 💌</p>
      
      <div className="w-full bg-linear-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl p-5 mb-6 text-left shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-600 font-medium">Digital Love Card</span>
          <span className="font-bold text-gray-800">₹99</span>
        </div>
        <div className="h-0.5 bg-pink-200/50 w-full my-3 border-dashed"></div>
        <div className="flex justify-between items-center font-black text-xl text-pink-600">
          <span>Total</span>
          <span>₹99</span>
        </div>
      </div>

      <a href={upiLink} className="w-full bg-purple-600 text-white font-bold py-4 px-4 rounded-full shadow-xl shadow-purple-200 transition-transform active:scale-95 block mb-8 text-lg animate-pulse">
        Pay ₹99 via UPI Apps
      </a>

      <div className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100">
        <p className="text-[10px] text-gray-500 mb-2 font-black uppercase tracking-widest text-left ml-1">
          Enter 12-Digit UTR / Ref No.
        </p>
        <input type="number" value={utr} onChange={(e) => setUtr(e.target.value)} placeholder="e.g. 123456789012" 
          className="w-full border-2 border-gray-200 rounded-xl p-4 text-center mb-4 focus:outline-none focus:border-purple-400 text-gray-900 font-bold tracking-widest text-lg bg-white" 
        />
        <button onClick={onVerify} disabled={isSaving} className={`w-full text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-transform active:scale-95 ${isSaving ? 'bg-pink-300' : 'bg-pink-500'}`}>
          {isSaving ? "Verifying..." : "Verify & Get Link ✨"}
        </button>
      </div>
      
      <button onClick={onBack} disabled={isSaving} className="mt-6 text-gray-400 text-sm font-bold hover:text-pink-500">
        ← Show Preview Again
      </button>
    </div>
  );
}