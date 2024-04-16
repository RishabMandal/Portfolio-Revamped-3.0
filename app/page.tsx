"use client";

import { GlobalContext } from "@/context";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function Home() {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      setPage("home");
    }, 1500);
  }, []);
  return (
    <main className={`p-12 min-h-screen`}>
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
          <Link href="/components/contact" className="text-red-500 text-center">
            Contact me
          </Link>
          <div>
            @rishab829<p className="inline text-red-500">@</p>gmail.com
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end bordr border-blue-500 min-h-[70vh] w-full">
        <div className="flex-1 pt-32">
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
        </div>
      </div>
    </main>
  );
}
