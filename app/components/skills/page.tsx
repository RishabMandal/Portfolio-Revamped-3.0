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
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--TenQsTYv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd3omc5vp71r5k9z69b4.png"
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
