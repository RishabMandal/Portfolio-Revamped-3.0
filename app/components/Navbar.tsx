"use client";

import { GlobalContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

// 1. Extracted navigation data for cleaner rendering
const navItems = [
  { name: "Top level", mobileName: "Home", path: "/", shape: "rounded-full" },
  { name: "Work", mobileName: "Works", path: "/components/work", shape: "transform rotate-45" },
  { name: "Experience", mobileName: "Experience", path: "/components/experience", shape: "transform rotate-45" },
  { name: "Skills", mobileName: "Skills", path: "/components/skills", shape: "transform rotate-45" },
  { name: "About", mobileName: "About", path: "/components/about", shape: "transform rotate-45" },
  { name: "Contact", mobileName: "Contacts", path: "/components/contact", shape: "rounded-full" },
];

const Navbar = () => {
  const currentRoute = usePathname();
  const { page, setPage } = useContext<any>(GlobalContext);

  return (
    <div
      className={`fixed top-1/2 z-50 text-xs font-bold transition-transform duration-500 ease-in-out -translate-y-1/2
        /* --- MOBILE SPECIFIC: Left side positioning --- */
        left-6 
        ${page === "home" ? "-translate-x-[200%]" : "translate-x-0"}
        
        /* --- DESKTOP SPECIFIC: Reverts to original right side styling --- */
        md:left-auto md:right-0 md:bg-black md:bg-opacity-30
        ${page === "home" ? "md:translate-x-full" : "md:translate-x-0"}
      `}
    >
      <div className="relative flex flex-col gap-8 md:gap-5 justify-center items-start md:items-center w-auto md:w-[6.5rem] h-full py-4 md:py-0">
        
        {/* THE TIMELINE LINE: Only visible on mobile */}
        <div className="absolute left-[0.4rem] top-6 bottom-6 w-[1px] bg-white/20 md:hidden z-0" />

        {navItems.map((item) => {
          const isActive = currentRoute === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`group flex items-center justify-between w-full duration-200 cursor-pointer relative z-10
                /* Mobile Spacing */ gap-6
                /* Desktop Spacing */ md:px-2 md:gap-0
                ${isActive ? "text-red-600 md:text-red-600" : "text-white/50 hover:text-white md:text-white md:hover:text-red-700"}
              `}
            >
              {/* TEXT SECTION */}
              <div className="order-2 md:order-1 uppercase tracking-widest text-[10px] font-medium md:text-xs md:normal-case md:tracking-normal md:font-bold">
                {/* Switch between image names (Home/Works) on mobile and original names on desktop */}
                <span className="md:hidden">{item.mobileName}</span>
                <span className="hidden md:inline">{item.name}</span>
              </div>

              {/* ICON SECTION */}
              <div className="order-1 md:order-2 flex items-center justify-center bg-[#0a0a0a] md:bg-transparent py-1">
                <div
                  className={`border-2 transition-colors duration-300 w-3 h-3
                    ${item.shape}
                    ${isActive 
                        ? "bg-red-600 border-red-600 md:bg-red-600 md:border-white" 
                        : "border-white/50 group-hover:border-white md:border-white md:group-hover:border-red-700"}
                  `}
                ></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;