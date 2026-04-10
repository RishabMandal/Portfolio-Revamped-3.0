"use client";

import Loader from "@/components/Loader";
import { GlobalContext } from "@/context";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Home() {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      setPage("home");
    }, 500);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  // State to track if the logo is being hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* MOBILE FIX 1: Main container padding
          Desktop reverts exactly to your original `p-12`. Mobile uses `pl-20` to dodge nav.
      */}
      <main className={`pl-10 pr-6 py-12 md:p-12 min-h-screen overflow-hidden`}>
        <AnimatePresence mode="wait">
          {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
        </AnimatePresence>
        
        {page === "work" || page === "skills" ? (
          <motion.div
            className="background duration-200 -z-[10]"
            initial={{ x: "-50%", scale: 1.5 }}
            animate={{ x: 0, scale: 1 }}
            exit={{
              x: "-50%",
              scale: 1.5,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          ></motion.div>
        ) : (
          <motion.div className="background duration-200 -z-[10]"></motion.div>
        )}

        {/* MOBILE FIX 2: Header Top Margin & Text Size
            Desktop reverts to `text-4xl -mt-5`. Mobile scales down slightly to fit.
        */}
        <div className="text-3xl md:text-4xl -mt-2 md:-mt-5 flex flex-row justify-between items-center md:items-start">
          {/* Animated Expanding Logo */}
          <motion.div
            className={`font-bold flex cursor-default text-white ${orbitron.className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>R</span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap text-red-500"
            >
              ishab&nbsp;
            </motion.span>
            <span>M</span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap text-red-500"
            >
              andal
            </motion.span>
          </motion.div>
          
          <div className="flex flex-col justify-center text-[10px] md:text-xs font-bold">
            <Link
              href="/components/contact"
              className="text-red-500 text-right md:text-center"
            >
              Contact me
            </Link>
            <div className="hidden sm:block">
              @rishab829<p className="inline text-red-500">@</p>gmail.com
            </div>
            {/* Added a mobile-only stacked version of the email so it doesn't break layout */}
            <div className="block sm:hidden text-right text-gray-400">
              rishab829<span className="text-red-500">@</span>gmail.com
            </div>
          </div>
        </div>

        <div className="flex flex-row items-end min-h-[65vh] md:min-h-[70vh] w-full">
          {/* MOBILE FIX 3: Hero Typography
              Desktop reverts to `pt-32` and `text-9xl`. Mobile scales down to `pt-16` and `text-6xl`.
          */}
          <div className="flex-1 pt-16 md:pt-32">
            <div className="text-6xl sm:text-8xl md:text-9xl font-bold leading-tight md:leading-normal">
              <div className="text-[#1E1E1E]">I'am</div>
              <div>Rishab</div>
            </div>

            {/* Animated Call to Action */}
            <Link href="/components/work" className="inline-block pt-12 md:pt-16">
              <motion.div
                animate={{ x: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2 group cursor-pointer"
              >
                {/* Left Pipe */}
                <span className="text-red-600 text-xl md:text-2xl font-bold">|</span>

                {/* Main Text */}
                <span className="font-bold text-white group-hover:text-red-600 transition-colors duration-300 text-sm md:text-base uppercase tracking-wider md:tracking-normal md:normal-case">
                  My work
                </span>

                {/* Right Pipe */}
                <span className="text-red-600 text-xl md:text-2xl font-bold">|</span>

                {/* Trailing Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-red-600 transition-colors duration-300 -ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}