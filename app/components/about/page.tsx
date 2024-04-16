"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      setPage("about");
    }, 1500);
  }, []);
  return (
    <div className="h-screen overflow-y-hidden">
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
      <div className="text-4xl fixed top-0 px-12 mt-5">
        <Link href="/" className="font-bold">
          RM
        </Link>
      </div>
      <div className="p-12 min-h-screen overflow-y-hidden mt-10 flex flex-col justify-center max-w-[50vw]">
        <div className="text-4xl font-bold pb-3">About me</div>
        <div className="flex flex-row gap-5 items-center">
          <div className="bg-white w-[5rem] h-[1rem]"></div>
          <div
            className="text-red-500 font-bold cursor-pointer"
            onClick={() => {
              window.location.href =
                "https://drive.google.com/file/d/111ITsTbq5Lo0_RaAlx-ZBMZMwSI8KJgt/view?usp=drivesdk";
            }}
          >
            Download CV
          </div>
        </div>
        <div className="py-5 font-semibold">
          Rishab Mandal, that's me. Born in India, I am a MERN-Stack Web
          Developer creating websites for people who know that prioritizing
          projects leads to profits. Because when you show up as your full self,
          you create space for your clients to do the same. And then everybody
          wins.
        </div>
        <Link
          href="/components/contact"
          className="text-red-500 text-sm bg-white rounded-md font-bold w-fit px-5 py-2"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default page;
