"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollIndicator = () => {
  // Controls the visibility of the scroll hint
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    // 1. Hide the hint automatically after 5 seconds
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);

    // 2. Hide the hint immediately if the user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listeners and timers when the component unmounts
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none text-gray-400"
        >
          {/* Top Chevron */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>

          {/* Mouse Body */}
          <div className="w-[24px] h-[40px] border-2 border-current rounded-full flex justify-center pt-2">
            {/* Animated Scroll Wheel */}
            <motion.div
              animate={{ y: [0, 12], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "circOut" }}
              className="w-1 h-2.5 bg-current rounded-full"
            />
          </div>

          {/* Bottom Chevron (Animated bounce) */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;