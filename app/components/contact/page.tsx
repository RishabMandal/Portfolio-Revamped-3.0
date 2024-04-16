"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      setPage("contact");
    }, 1500);
  }, []);
  return (
    <div className="h-screen overflow-y-hidden">
      {page === "work" ? (
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
      <div className="text-4xl fixed top-0 px-12 mt-5">
        <Link href="/" className="font-bold">
          RM
        </Link>
      </div>
      <div className="p-12 min-h-screen overflow-y-hidden mt-10 flex flex-col justify-center max-w-[50vw]">
        <div className="text-4xl font-bold pb-3">Say Hello!</div>
        <div className="flex flex-row gap-5 items-center">
          <div className="bg-white w-[5rem] h-[1rem]"></div>
          <div className="text-red-500 font-bold">Write an Email</div>
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
        {/* <Link
          href="/components/contact"
          className="text-red-500 text-sm bg-white rounded-md font-bold w-fit px-5 py-2"
        >
          Contact me
        </Link> */}
        <div className="flex flex-row justify-center gap-5 items-center font-bold">
          <div className="text-3xl">|</div>
          <div className="text-xl cursor-pointer">SUBMIT</div>
          <div className="text-3xl text-red-500">|</div>
        </div>
      </div>
    </div>
  );
};

export default page;
