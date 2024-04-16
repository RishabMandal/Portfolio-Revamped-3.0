"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "@/context";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setPage("work");
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        className="background -z-[10]"
        initial={{ x: 0, scale: 1 }}
        animate={{ x: "-50%", scale: 1.5, opacity: 0.5 }}
        exit={{
          x: "-50%",
          scale: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      ></motion.div>
      <div className="p-12">
        <div className="text-3xl font-bold pb-3">Latest Works</div>
        <div className="bg-white w-[5rem] h-[1rem]"></div>
        <div className="flex flex-row gap-10 my-10 justify-center">
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
