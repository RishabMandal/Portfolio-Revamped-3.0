"use client";

import ScrollIndicator from "@/components/ScrollIndicator";
import { GlobalContext } from "@/context";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Analyst",
      company: "Deloitte USI",
      duration: "Sep 2025 - Present",
      description:
        "Architect and customize enterprise-grade Model-Driven Apps (MDA) to streamline business data management. Develop custom backend business logic using C# Plugins and implement advanced client-side scripting using JavaScript Web Resources. Automate critical backend workflows using Power Automate, and utilize advanced tooling like Ribbon Workbench and SQL 4 CDS for complex data querying and UI customization.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "BabySteps",
      duration: "Mar 2024",
      description:
        "Engineered a responsive HealthTech web platform utilizing Next.js and TypeScript, designed specifically to support maternal healthcare and wellness. Developed comprehensive user-centric features, including interactive cycle and symptom tracking. Built a seamless networking interface to facilitate secure connections between users and healthcare professionals while ensuring high performance and strict type safety.",
    },
    {
      id: 3,
      role: "React Developer",
      company: "Jio Platforms Limited (JPL)",
      duration: "May 2023 - Jul 2023",
      description:
        "Led the migration of major legacy JavaScript websites to React.js for the Network Assurance team, resulting in a performance improvement of over 75%. Designed and implemented visually appealing, user-friendly interfaces utilizing Material UI and AG Grid. Integrated RESTful APIs using Axios to enable seamless, real-time data retrieval and user interaction.",
    },
  ];

  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setPage("skills");
  }, []);

  return (
    <div className="min-h-screen ">
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
      <div className="min-h-screen text-white flex flex-col justify-center p-8 md:p-24 lg:pl-48">
        <ScrollIndicator />
        {/* Header matching the image style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
            Experience
          </h2>
          <div className="bg-white w-[5rem] h-[1rem]"></div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l bg-black bg-opacity-50 border-gray-700 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] md:-left-[57px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black border-2 border-red-600 group-hover:bg-red-600 transition-colors duration-300"></span>

              {/* Content Box */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm md:text-base text-red-500 font-medium tracking-wide">
                  | {exp.company}
                </span>
              </div>

              <time className="block mb-4 text-sm font-bold leading-none text-gray-500">
                {exp.duration}
              </time>

              <p className="text-base font-normal text-gray-400 max-w-3xl leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
