"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "@/context";
import Image from "next/image";
import ReactImage from "../../../public/assets/react.png";
import HTML from "../../../public/assets/html.png";
import CSS from "../../../public/assets/css.png";
import Node from "../../../public/assets/node.png";
import JavaScript from "../../../public/assets/javascript.png";
import GitHub from "../../../public/assets/github.png";
import Tailwind from "../../../public/assets/tailwind.png";
import Mongo from "../../../public/assets/mongo.png";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setPage("skills");
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
        <div className="text-3xl font-bold pb-3">Soft Skills</div>
        <div className="bg-white w-[5rem] h-[1rem]"></div>
        <div className="container w-full grid grid-cols-2 mt-10 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={ReactImage} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">REACT JS</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-cover mx-auto"
              src="data:image/png;base64,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"
              alt="HTML icon"
            />
            <p className="my-4 font-Ubuntu">NEXT JS</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-cover mx-auto"
              src="data:image/jpeg;base64,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"
              alt="HTML icon"
            />
            <p className="my-4 font-Ubuntu">MATERIAL UI</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">GITHUB</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">MONGO DB</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">TAILWIND</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">NODE JS</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">JAVASCRIPT</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">HTML</p>
          </div>
          <div className="  hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 font-Ubuntu">CSS</p>
          </div>
        </div>
        {/* <div className="flex flex-row gap-10 my-10 justify-center">
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
          <div className="border border-pink-500 w-[25vw] h-[15vw] hover:scale-110 duration-200 ease-in-out"></div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
