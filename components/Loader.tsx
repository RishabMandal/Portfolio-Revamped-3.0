// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Loader({
//   finishLoading,
// }: {
//   finishLoading: () => void;
// }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(finishLoading, 500); // Small buffer before reveal
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 20);
//     return () => clearInterval(interval);
//   }, [finishLoading]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ y: "-100vh" }}
//       transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
//     >
//       <div className="overflow-hidden">
//         <motion.h1
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           className="text-6xl font-black italic tracking-tighter"
//         >
//           {progress}%
//         </motion.h1>
//       </div>
//       <div className="w-48 h-[2px] bg-white/10 mt-4 relative overflow-hidden">
//         <motion.div
//           className="absolute inset-0 bg-red-600"
//           initial={{ x: "-100%" }}
//           animate={{ x: `${progress - 100}%` }}
//         />
//       </div>
//     </motion.div>
//   );
// }

"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Innovation", "Precision", "Design", "Code", "Rishab"];

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(finishLoading, 1000);
      return;
    }
    const timeout = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
    return () => clearTimeout(timeout);
  }, [index, finishLoading]);

  // SVG path variants with explicit TypeScript typing
  const curve: Variants = {
    initial: {
      d: "M0 0 L100 0 L100 100 L0 100 Z",
    },
    exit: {
      d: "M0 0 L100 0 L100 0 Q50 100 0 0 Z",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.3 
      }
    }
  };

  return (
    <motion.div 
      initial={{ top: 0 }}
      exit={{ top: "-120vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
    >
      {/* The Word Cycler */}
      <div className="relative z-10 flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={words[index]} 
          className="text-white text-4xl md:text-6xl font-black italic tracking-tighter"
        >
          {words[index]}
        </motion.p>
      </div>

      {/* Aesthetic SVG Background Overlay
          The viewBox="0 0 100 100" is CRITICAL to make the path (M0 0 L100...) 
          scale correctly regardless of screen size.
      */}
      <svg 
        className="absolute top-0 w-full h-[calc(100%+300px)] fill-[#0a0a0a] -z-10"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <motion.path 
          variants={curve} 
          initial="initial" 
          exit="exit" 
        />
      </svg>
    </motion.div>
  );
}