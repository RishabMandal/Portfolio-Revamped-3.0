"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      setPage("contact");
    }, 1500);
  }, []);

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
    <div className="min-h-screen">
      {page === "work" || page === "skills" ? (
        <motion.div
          className="background duration-200 -z-[10] opacity-50"
          initial={{ x: "-50%", scale: 1.5 }}
          animate={{ x: 0, scale: 1 }}
          exit={{
            x: "-50%",
            scale: 1.5,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        ></motion.div>
      ) : (
        <motion.div className="background duration-200 -z-[10] opacity-50"></motion.div>
      )}
      {/* Temporary Animated Scroll Hint */}
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
      <div className="text-4xl fixed top-0 px-12 mt-5">
        <Link href="/" className="font-bold">
          RM
        </Link>
      </div>
      <div className="p-12 min-h-screen overflow-y-hidden mt-10 flex flex-col justify-center max-w-[50vw]">
        <div className="text-4xl font-bold pb-3 pt-10">Say Hello!</div>
        <div className="flex flex-row gap-3 items-center">
          <div className="bg-white w-[5rem] h-[1rem]"></div>
          <a
            href="mailto:rishab829@gmail.com?subject=Your%20Subject&body=Your%20message%20here"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-red-500 font-bold">Write an Email</div>
          </a>
        </div>
        <div className="py-5 flex flex-col">
          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            className="text-white border border-gradient text-xs p-2 mt-5 font-semibold rounded-md outline-none bg-black"
          />
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL*"
            className="text-white border border-gradient text-xs p-2 mt-5 font-semibold rounded-md outline-none bg-black"
          />
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="text-white border border-gradient text-xs p-2 mt-5 font-semibold rounded-md outline-none bg-black"
          />
        </div>
        <div className="flex flex-row justify-center gap-5 items-center font-bold">
          <div className="text-3xl">|</div>
          <div className="text-xl cursor-pointer">SUBMIT</div>
          <div className="text-3xl text-red-500">|</div>
        </div>

        {/* New Social Connections Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-8 border-gray-800"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold tracking-wide mb-4 text-white">
              Connect directly
            </h3>
            <div className=" w-[5rem] h-[0.5rem] bg-red-600"></div>
          </motion.div>
          <div className="flex flex-row flex-wrap gap-8 items-center">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rishabmandal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:text-blue-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-medium text-sm">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RishabMandal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:text-gray-100 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-medium text-sm">GitHub</span>
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@YOUR-MEDIUM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-6.698.39-1.052v-9.014z" />
              </svg>
              <span className="font-medium text-sm">Medium</span>
            </a>

            {/* Gmail */}
            <a
              href="mailto:rishab829@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:text-red-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819v-9.273L12 17.273 5.455 11.727v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 10.636 20.073 3.493C21.691 2.28 24 3.434 24 5.457z" />
              </svg>
              <span className="font-medium text-sm">Gmail</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
