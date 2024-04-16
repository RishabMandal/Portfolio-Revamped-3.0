"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "@/context";
import Image from "next/image";
import ecommerce from "../../../public/assets/ecommerceproject.png";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setPage("work");
  }, []);

  return (
    <div className="min-h-screen">
      {page !== "work" && page !== "skills" ? (
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
      ) : (
        <motion.div
          className="background -z-[10]"
          initial={{ x: "-50%", scale: 1.5, opacity: 0.5 }}
        ></motion.div>
      )}
      <div className="p-12">
        <div className="text-3xl font-bold pb-3">Latest Works</div>
        <div className="bg-white w-[5rem] h-[1rem]"></div>
        <div className="flex flex-row gap-10 my-10 justify-center">
          <div className="relative z-20 cursor-pointer">
            <Image
              src={ecommerce}
              alt="Project Image"
              className="w-[25vw] h-[15vw] hover:z-10 hover:opacity-40 hover:scale-110 duration-200 ease-in-out"
            />
            <div className="absolute -z-20 hover:z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={3}
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <div className="relative z-20 cursor-pointer">
            <Image
              src={ecommerce}
              alt="Project Image"
              className="w-[25vw] h-[15vw] hover:z-10 hover:opacity-40 hover:scale-110 duration-200 ease-in-out"
            />
            <div className="absolute -z-20 hover:z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={3}
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <div className="relative z-20 cursor-pointer">
            <Image
              src={ecommerce}
              alt="Project Image"
              className="w-[25vw] h-[15vw] hover:z-10 hover:opacity-40 hover:scale-110 duration-200 ease-in-out"
            />
            <div className="absolute -z-20 hover:z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={3}
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <div className="relative z-20 cursor-pointer">
            <Image
              src={ecommerce}
              alt="Project Image"
              className="w-[25vw] h-[15vw] hover:z-10 hover:opacity-40 hover:scale-110 duration-200 ease-in-out"
            />
            <div className="absolute -z-20 hover:z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={3}
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
