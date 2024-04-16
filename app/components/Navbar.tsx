"use client";

import { GlobalContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Navbar = () => {
  const currentRoute = usePathname();
  const { page, setPage } = useContext<any>(GlobalContext);
  return (
    <div
      className={`borde border-red-500 text-xs font-bold bg-black z-10 transition-transform ${
        page === "home" ? "translate-x-full hidden" : ""
      } duration-200`}
    >
      <div className="w-[6rem] h-full flex flex-col gap-5 justify-center items-center">
        <Link
          href="/"
          className={
            currentRoute === "/"
              ? "hover:text-red-700 items-center duration-200 cursor-pointer text-red-600 flex flex-row w-full justify-between px-2"
              : "hover:text-red-700 items-center duration-200 cursor-pointer flex flex-row w-full justify-between px-2"
          }
        >
          <div>Top level</div>
          <div
            className={`border-2 border-white w-3 h-3 rounded-full ${
              currentRoute === "/" && "bg-red-600"
            }`}
          ></div>
        </Link>
        <Link
          href="/components/work"
          className={
            currentRoute === "/components/work"
              ? "hover:text-red-700 items-center duration-200 cursor-pointer text-red-600 flex flex-row w-full justify-between px-2"
              : "hover:text-red-700 items-center duration-200 cursor-pointer flex flex-row w-full justify-between px-2"
          }
        >
          <div>Work</div>
          <div
            className={`w-3 h-3 border-2 border-white transform rotate-45 ${
              currentRoute === "/components/work" && "bg-red-600"
            }`}
          ></div>
        </Link>
        <Link
          href="/components/skills"
          className={
            currentRoute === "/components/skills"
              ? "hover:text-red-700 items-center duration-200 cursor-pointer text-red-600 flex flex-row w-full justify-between px-2"
              : "hover:text-red-700 items-center duration-200 cursor-pointer flex flex-row w-full justify-between px-2"
          }
        >
          <div>Skills</div>
          <div
            className={`w-3 h-3 border-2 border-white transform rotate-45 ${
              currentRoute === "/components/skills" && "bg-red-600"
            }`}
          ></div>
        </Link>
        <Link
          href="/components/about"
          className={
            currentRoute === "/components/about"
              ? "hover:text-red-700 items-center duration-200 cursor-pointer text-red-600 flex flex-row w-full justify-between px-2"
              : "hover:text-red-700 items-center duration-200 cursor-pointer flex flex-row w-full justify-between px-2"
          }
        >
          <div>About</div>
          <div
            className={`w-3 h-3 border-2 border-white transform rotate-45 ${
              currentRoute === "/components/about" && "bg-red-600"
            }`}
          ></div>
        </Link>
        <Link
          href="/components/contact"
          className={
            currentRoute === "/components/contact"
              ? "hover:text-red-700 items-center duration-200 cursor-pointer text-red-600 flex flex-row w-full justify-between px-2"
              : "hover:text-red-700 items-center duration-200 cursor-pointer flex flex-row w-full justify-between px-2"
          }
        >
          <div>Contact</div>
          <div
            className={`border-2 border-white w-3 h-3 rounded-full ${
              currentRoute === "/components/contact" && "bg-red-600"
            }`}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
