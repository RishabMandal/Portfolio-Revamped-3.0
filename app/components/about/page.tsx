"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function About() {
  const { page, setPage } = useContext<any>(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setPage("about");
    }, 1500);
  }, [setPage]);

  // I added a placeholder for your Education based on your hackathon history.
  // Feel free to update the degree and description!
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      institution: "Thadomal Shahani Engineering College",
      duration: "2021 - 2025",
      description:
        "Focused on Software Engineering, Web Technologies, and Artificial Intelligence. Active participant in technical symposiums and hackathons.",
    },
    {
      id: 2,
      degree: "12th Boards Science",
      institution: " Swami Vivekanand Junior College",
      duration: "2019 - 2021",
      description:
        "Focused on exploring new Programming Languages, Software Engineering, Web Technologies, and Core Concepts.",
    },
  ];

  const awards = [
    {
      id: 1,
      title: "1st prize in U'LECTRO'25 National Level Project Expo",
      issuer: "IETE-SF MPSTME, NMIMS",
      date: "Mar 2025",
      description:
        "Won the first prize for the AI-ML category in the Project Expo.",
    },
    {
      id: 2,
      title: "First Runner Up in RUBIX'24 Hackathon",
      issuer: "Thadomal Shahani Engineering College",
      date: "Jan 2024",
      description:
        "Secured the first runner-up position in a highly competitive coding hackathon.",
    },
    {
      id: 3,
      title: "Top 10 in RUBIX '23 Hackathon",
      issuer: "Thadomal Shahani Engineering College",
      date: "Jan 2023",
      description:
        "Secured a place in the Top-10 in the intensive 48-hour RUBIX '23 hackathon.",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
      issuer: "Coursera",
      date: "Oct 2025",
      skills: "Microsoft Dynamics CRM, Dataverse",
      credentialId: "",
    },
    {
      id: 2,
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "Apr 2025",
      skills: "Deep Learning",
      credentialId: "I5HQ19QFTO5U",
    },
    {
      id: 3,
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "Coursera",
      date: "Sep 2024",
      skills: "Machine Learning",
      credentialId: "",
    },
    {
      id: 4,
      title: "Software Engineering Virtual Experience",
      issuer: "JPMorganChase",
      date: "Jun 2023",
      skills: "React.js",
      credentialId: "HEioqW9v77T2Wo5nA",
    },
    {
      id: 5,
      title: "React JS Front-End Development",
      issuer: "Coursera",
      date: "Jun 2023",
      skills: "React.js",
      credentialId: "",
    },
    {
      id: 6,
      title: "JavaScript Essentials",
      issuer: "Coursera",
      date: "Jun 2023",
      skills: "React.js",
      credentialId: "",
    },
  ];

  return (
    <div className="min-h-screen text-white relative">
      {/* Background locked in place while content scrolls */}
      <div className="fixed inset-0 -z-[10]">
        {page === "work" || page === "skills" ? (
          <motion.div
            className="background duration-200 opacity-50 w-full h-full"
            initial={{ x: "-50%", scale: 1.5 }}
            animate={{ x: 0, scale: 1 }}
            exit={{
              x: "-50%",
              scale: 1.5,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          ></motion.div>
        ) : (
          <motion.div className="background duration-200 opacity-50 w-full h-full"></motion.div>
        )}
      </div>
      <ScrollIndicator />
      {/* Logo */}
      <div className="text-4xl fixed top-0 px-8 md:px-12 mt-5 z-20">
        <Link href="/" className="font-bold">
          RM
        </Link>
      </div>

      {/* Main Scrolling Content */}
      <div className="px-8 md:px-12 lg:pl-48 pt-32 pb-24 max-w-5xl flex flex-col gap-24">
        {/* BIO SECTION */}
        <section>
          <div className="text-4xl md:text-5xl font-bold pb-3">About me</div>
          <div className="flex flex-row gap-5 items-center mb-8">
            <div className="bg-white w-[5rem] h-[1rem]"></div>
            <div
              className="text-red-500 font-bold cursor-pointer hover:text-red-400 transition-colors"
              onClick={() => {
                // Changed this to open in a new tab so they don't leave your site!
                window.open(
                  "https://drive.google.com/file/d/111ITsTbq5Lo0_RaAlx-ZBMZMwSI8KJgt/view?usp=drivesdk",
                  "_blank",
                );
              }}
            >
              Download CV
            </div>
          </div>
          <div className="text-gray-300 text-lg leading-relaxed font-medium mb-8 md:max-w-[70%]">
            Rishab Mandal, that's me. Born in India, I am a MERN-Stack Web
            Developer creating websites for people who know that prioritizing
            projects leads to profits. Because when you show up as your full
            self, you create space for your clients to do the same. And then
            everybody wins.
          </div>
          <Link
            href="/components/contact"
            className="text-red-500 text-sm bg-white hover:bg-gray-200 transition-colors rounded-md font-bold w-fit px-6 py-3 inline-block"
          >
            Contact me
          </Link>
        </section>

        {/* EDUCATION SECTION */}
        <section className="bg-black bg-opacity-50 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold tracking-wide mb-4 text-white">
              Education
            </h3>
            <div className=" w-[5rem] h-[0.5rem] bg-red-500"></div>
          </motion.div>

          <div className="relative border-l border-gray-700 ml-3 md:ml-0">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 ml-8 relative group"
              >
                <span className="absolute -left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black border-2 border-red-500"></span>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {edu.degree}
                </h4>
                <span className="block text-red-400 font-medium mb-1 tracking-wide">
                  {edu.institution}
                </span>
                <time className="block mb-3 text-sm font-normal text-gray-500">
                  {edu.duration}
                </time>
                <p className="text-gray-400 leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HONORS & AWARDS SECTION */}
        <section className="bg-black bg-opacity-50 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold tracking-wide mb-4 text-white">
              Honors & Awards
            </h3>
            <div className=" w-[5rem] h-[0.5rem] bg-red-600"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-gray-800 bg-neutral-900/40 hover:border-gray-600 hover:bg-black/80 transition-all rounded-lg relative overflow-hidden group hover:scale-110"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <svg
                      className="w-8 h-8 text-red-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      ></path>
                    </svg>
                    <span className="text-xs font-medium text-gray-400 border border-gray-700 bg-black/50 px-2 py-1 rounded">
                      {award.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {award.title}
                  </h4>
                  <p className="text-sm font-medium text-red-600 mb-3">
                    {award.issuer}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-auto">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="bg-black bg-opacity-50 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold tracking-wide mb-4 text-white">
              Certifications
            </h3>
            <div className=" w-[5rem] h-[0.5rem] bg-red-600"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-gray-800 bg-neutral-900/40 hover:border-gray-600 hover:bg-neutral-900/80 transition-all rounded-lg relative overflow-hidden group flex flex-col"
              >
                {/* Emerald gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    {/* Certificate Badge Icon */}
                    <svg
                      className="w-8 h-8 text-red-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span className="text-xs font-medium text-gray-400 border border-gray-700 bg-black/50 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm font-medium text-red-600 mb-4">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto">
                    <p className="text-xs text-gray-400 leading-relaxed mb-2">
                      <strong className="text-gray-300">Skills:</strong>{" "}
                      {cert.skills}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 font-mono break-all">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
