"use client";

import Loader from "@/components/Loader";
import { GlobalContext } from "@/context";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      setPage("home");
    }, 500);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      <main className={`p-12 min-h-screen`}>
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
        <div className="text-4xl -mt-5 flex flex-row justify-between">
          <div className="font-bold">RM</div>
          <div className="flex flex-col justify-center text-xs font-bold">
            <Link
              href="/components/contact"
              className="text-red-500 text-center"
            >
              Contact me
            </Link>
            <div>
              @rishab829<p className="inline text-red-500">@</p>gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end min-h-[70vh] w-full">
          {/* <div className="flex-1 pt-32">
          <div className="text-9xl font-bold">
            <div className="text-[#1E1E1E]">I'am</div>
            <div>Rishab</div>
          </div>
          <Link
            href="/components/work"
            className="block font-bold cursor-pointer pt-12"
          >
            | My work |
          </Link>
        </div> */}
          <div className="flex-1 pt-32">
            <div className="text-9xl font-bold">
              <div className="text-[#1E1E1E]">I'am</div>
              <div>Rishab</div>
            </div>

            {/* Animated Call to Action */}
            <Link href="/components/work" className="inline-block pt-16">
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
                <span className="text-red-600 text-2xl font-bold">|</span>

                {/* Main Text */}
                <span className="font-bold text-white group-hover:text-red-600 transition-colors duration-300">
                  My work
                </span>

                {/* Right Pipe */}
                <span className="text-red-600 text-2xl font-bold">|</span>

                {/* Trailing Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white group-hover:text-red-600 transition-colors duration-300 -ml-1"
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
