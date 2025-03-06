"use client";

// import { Alert, CircularProgress, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ecommerceProjectImage from "../../../../public/assets/ecommerceProjectImage.jpg";
import ProjectImage0 from "../../../../public/assets/projects/Screenshot 2025-01-24 172617.png";
import ProjectImage2 from "../../../../public/assets/projects/projectimage2.webp";
import ProjectImage3 from "../../../../public/assets/projects/projectimage3.webp";

import { TextComponent } from "@/components/eldoraui/featurefour";
import { cn } from "@/lib/utils";

const page: React.FC<{ params: any }> = ({ params }) => {
  const [projectID, setProjectID] = useState(params.projectId);

  const [toast, setToast] = useState(false);
  const [projects, setProjects] = useState([
    {
      name: "Border Surveillance System with AI driven thermal and night vision assistance",
      details:
        "A warm welcome to our comprehensive e-commerce platform, where you will discover a wide-range of products, encompassing clothing, smartphones, jewellery, and various cutting-edge electronic gadgets. We invite you to peruse our collection and find the ideal products to cater to your varied requirements.",
      technologies:
        "Technologies used : Next JS, JavaScript, Tailwind CSS, Framer-motion, React JS, Express JS, MongoDB, Firebase-Auth, Stripe",
      image:
        "/../../../../../public/assets/projects/Screenshot 2025-01-24 172617.png",
      backgroundImage: ProjectImage0,
    },
    {
      name: "Online Merchandise Platform",
      details:
        "A warm welcome to our comprehensive e-commerce platform, where you will discover a wide-range of products, encompassing clothing, smartphones, jewellery, and various cutting-edge electronic gadgets. We invite you to peruse our collection and find the ideal products to cater to your varied requirements.",
      technologies:
        "Technologies used : Next JS, JavaScript, Tailwind CSS, Framer-motion, React JS, Express JS, MongoDB, Firebase-Auth, Stripe",
      image: "/../../../../../public/assets/ecommerceProjectImage.jpg",
      backgroundImage: ecommerceProjectImage,
    },
    {
      name: "Personal Password Manager",
      details:
        "PersonalPass is a password manager that helps users securely store and manage their login credentials for various online accounts. It helps users manage their account security by providing alerts for potential security issues and offering suggestions for creating stronger passwords.",
      technologies:
        "Technologies used : JavaScript, Tailwind CSS, React JS, Framer Motion, Firebase",
      image: "/../../../../../public/assets/projects/projectimage2.webp",
      backgroundImage: ProjectImage2,
    },
    {
      name: "Hangman Game",
      details:
        "Designed a word game in which player has to guess a word that the other player has thought of, by guessing the letters in it. Every time they guess a wrong letter, part of a picture of a person being hanged is drawn, and if the picture is completed the person guessing has lost.",
      technologies: "Technologies used : JavaScript, Tailwind CSS, React JS",
      image: "/../../../../../public/assets/projects/projectimage3.webp",
      backgroundImage: ProjectImage3,
    },
  ]);

  //
  const data = [
    {
      title: "Project Description",
      content: projects[projectID]?.details,
      srcImage: projects[projectID]?.backgroundImage,
    },
    {
      title: "Tools and Frameworks used",
      content: projects[projectID]?.technologies,
      srcImage: projects[projectID]?.backgroundImage,
    },
    {
      title: "View Project",
      content: "View the deployed project.",
      srcImage: projects[projectID]?.backgroundImage,
    },
    {
      title: "View GitHub code",
      content: "View the project code uploaded on GitHub platform.",
      srcImage: projects[projectID]?.backgroundImage,
    },
  ];

  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div
      className="min-h-screen p-12"
      style={{
        backgroundImage: `url(${ecommerceProjectImage})`,
        // backgroundColor: 'gray',
        backgroundSize: "cover", // Optional: Adjust background size as needed
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-neutral-800 dark:text-neutral-300">
              {projects[projectID]?.name}
            </h2>
          </div>
          <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 bg-black">
            <div className="space-y-6 ">
              {data.map((item, index) => (
                <button
                  className="w-full"
                  key={item.title}
                  onClick={() => {
                    setFeatureOpen(index);
                    setTimer(0);
                  }}
                  type="button"
                >
                  <TextComponent
                    content={item.content}
                    isOpen={featureOpen === index}
                    loadingWidthPercent={
                      featureOpen === index ? timer / 100 : 0
                    }
                    number={index + 1}
                    title={item.title}
                  />
                </button>
              ))}
            </div>
            <div className="h-full">
              <div
                className={cn(
                  "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]"
                )}
              >
                {data.map((item, index) => (
                  <Image
                    alt={item.title}
                    className={cn(
                      "absolute h-[500px] w-full transform-gpu rounded-lg object-contain object-top transition-all duration-300",
                      featureOpen === index ? "scale-100" : "scale-70",
                      featureOpen > index ? "translate-y-full" : ""
                    )}
                    key={item.title}
                    src={item.srcImage}
                    style={{ zIndex: data.length - index }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/components/work"
        className="pt-10 flex flex-row gap-1 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="text-red-500 font-bold -mt-1">works</div>
      </Link>
    </div>
  );
};

export default page;
