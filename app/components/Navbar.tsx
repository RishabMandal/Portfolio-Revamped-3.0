"use client";

import { GlobalContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

// 1. Extracted navigation data for cleaner rendering
const navItems = [
  { name: "Top level", mobileName: "Home", path: "/", shape: "rounded-full" },
  { name: "Work", mobileName: "Works", path: "/components/work", shape: "transform rotate-45" },
  { name: "Experience", mobileName: "Experience", path: "/components/experience", shape: "transform rotate-45" },
  { name: "Skills", mobileName: "Skills", path: "/components/skills", shape: "transform rotate-45" },
  { name: "About", mobileName: "About", path: "/components/about", shape: "transform rotate-45" },
  { name: "Contact", mobileName: "Contacts", path: "/components/contact", shape: "rounded-full" },
];

const Navbar = () => {
  const currentRoute = usePathname();
  const { page, setPage } = useContext<any>(GlobalContext);
  
  // State for mobile sidebar expansion
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-1/2 z-50 text-xs font-bold transition-all duration-500 ease-in-out -translate-y-1/2
        /* --- MOBILE SPECIFIC: Left side positioning & Expandable Glass Background --- */
        left-6 
        ${isOpen ? "bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] p-5 -ml-5" : ""}
        ${page === "home" ? "-translate-x-[200%]" : "translate-x-0"}
        
        /* --- DESKTOP SPECIFIC: Reverts entirely to original right side styling --- */
        md:left-auto md:right-0 md:bg-black md:bg-opacity-30 md:border-none md:rounded-none md:shadow-none md:p-0 md:m-0
        ${page === "home" ? "md:translate-x-full" : "md:translate-x-0"}
      `}
    >
      <div className="relative flex flex-col gap-8 md:gap-5 justify-center items-start md:items-center w-auto md:w-[6.5rem] h-full py-4 md:py-0">
        
        {/* --- MOBILE TOGGLE BUTTON (Placed at the top of the timeline) --- */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          // Attention Animation: Drops in, then periodically nudges to the right
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: isOpen ? 0 : [0, 4, 0, 4, 0] // Only nudge if closed
          }}
          transition={{ 
            y: { duration: 0.5, ease: "easeOut" },
            x: { delay: 2, duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
          }}
          className="md:hidden relative z-20 w-8 h-8 -ml-[10px] flex items-center justify-center bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:text-red-500 hover:border-red-500/50 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>

        {/* THE TIMELINE LINE: Adjusted top to start precisely below the new button */}
        <div className="absolute left-[5.5px] top-[3.5rem] bottom-6 w-[1px] bg-white/20 md:hidden z-0" />

        {navItems.map((item) => {
          const isActive = currentRoute === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)} // Auto-close menu when a link is clicked
              className={`group flex items-center w-full duration-200 cursor-pointer relative z-10
                /* Mobile Spacing */ justify-start gap-5
                /* Desktop Spacing */ md:justify-between md:px-2 md:gap-0
                ${isActive ? "text-red-600 md:text-red-600" : "text-white/50 hover:text-white md:text-white md:hover:text-red-700"}
              `}
            >
              {/* TEXT SECTION */}
              <div className={`order-2 md:order-1 uppercase tracking-widest text-[10px] font-medium md:text-xs md:normal-case md:tracking-normal md:font-bold
                /* MOBILE EXPAND LOGIC */
                transition-all duration-300 overflow-hidden whitespace-nowrap
                ${isOpen ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"}
                /* DESKTOP LOGIC (Reset) */
                md:max-w-none md:opacity-100
              `}>
                <span className="md:hidden">{item.mobileName}</span>
                <span className="hidden md:inline">{item.name}</span>
              </div>

              {/* ICON SECTION */}
              <div className="order-1 md:order-2 flex items-center justify-center bg-[#0a0a0a] md:bg-transparent py-1">
                <div
                  className={`border-2 transition-colors duration-300 w-3 h-3
                    ${item.shape}
                    ${isActive 
                        ? "bg-red-600 border-red-600 md:bg-red-600 md:border-white" 
                        : "border-white/50 group-hover:border-white md:border-white md:group-hover:border-red-700"}
                  `}
                ></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;