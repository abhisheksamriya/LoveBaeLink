"use client";
import { motion } from "framer-motion";

const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 21s-6.716-3.773-9.428-7.37C.29 11.06 1.11 7.9 3.7 6.44c1.79-1.02 4.08-.77 5.6.61L12 9.62l2.7-2.57c1.52-1.38 3.81-1.63 5.6-.61 2.59 1.46 3.41 4.62 1.12 7.19C18.716 17.227 12 21 12 21z" />
  </svg>
);

export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 16}px`,
          }}
          animate={{ y: [0, -50], opacity: [1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
         <HeartIcon className="w-5 h-5" />
        </motion.span>
      ))}
    </div>
  );
}