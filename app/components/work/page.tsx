"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "@/context";
import Image from "next/image";
import ecommerce from "../../../public/assets/ecommerceproject.png";
import ProjectImage0 from "../../../public/assets/projects/Screenshot 2025-01-24 172617.png";
import Link from "next/link";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LeetCodeDashboard from "@/components/LeetCodeDashboard";
import ScrollIndicator from "@/components/ScrollIndicator";

const page = () => {
  const { page, setPage } = useContext<any>(GlobalContext);
  useEffect(() => {
    setPage("work");
  }, []);

  // State to hold your fetched Medium articles
  const [articles, setArticles] = useState<any[]>([]);

  // Dummy data for your Medium stats dashboard.
  // 1. Set up state to hold the dynamic chart data
  const [chartData, setChartData] = useState<any[]>([]);

  // 2. Generate random data for the last 7 months on load
  useEffect(() => {
    const generateDynamicChartData = () => {
      const data = [];
      const currentDate = new Date();
      
      // Loop to generate the last 7 months
      for (let i = 6; i >= 0; i--) {
        // Calculate the past month based on the current date
        const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        
        // Format to MM/YY
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear()).slice(-2);
        
        // Generate random views between 500 and 1500
        const views = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        
        data.push({ date: `${month}/${year}`, views });
      }
      return data;
    };

    setChartData(generateDynamicChartData());
  }, []);

  // Fetch articles from Medium RSS feed
  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@360rishabsvjc",
        );
        const data = await response.json();

        if (data.items) {
          const formattedArticles = data.items
            .slice(0, 4)
            .map((item: any, index: number) => {
              // 1. Extract the first image URL from the article's HTML content
              const imgRegex = /<img[^>]+src="([^">]+)"/;
              // Medium sometimes puts content in item.content, sometimes in item.description
              const match = (item.content || item.description).match(imgRegex);
              const extractedThumbnail = match ? match[1] : "";

              // 2. Strip HTML tags from the description to get pure text for the preview
              const cleanDescription = item.description.replace(/<[^>]+>/g, "");

              return {
                id: index,
                title: item.title,
                date: new Date(item.pubDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
                readTime: "3 min read",
                description: cleanDescription.substring(0, 120) + "...",
                tags: item.categories ? item.categories.slice(0, 3) : [],
                link: item.link,
                thumbnail: extractedThumbnail, // <-- Use our extracted image URL here
              };
            });

          setArticles(formattedArticles);
        }
      } catch (error) {
        console.error("Failed to fetch Medium articles:", error);
      }
    };

    fetchMediumArticles();
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
        <ScrollIndicator />
        <section>
          <div className="text-3xl font-bold pb-3">Latest Works</div>
          <div className="bg-white w-[5rem] h-[1rem]"></div>
          <div className="flex flex-row gap-10 my-10 justify-center">
            <Link
              href="/components/work/0"
              className="relative z-20 cursor-pointer"
            >
              <Image
                src={ProjectImage0}
                alt="Project Image"
                className="w-[25vw] h-[15vw] hover:z-10 hover:opacity-40 hover:scale-110 duration-200 ease-in-out"
              />
              <div className="absolute -z-20 hover:z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href="/components/work/1"
              className="relative z-20 cursor-pointer"
            >
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex flex-row gap-10 justify-center">
            <Link
              href="/components/work/2"
              className="relative z-20 cursor-pointer"
            >
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href="/components/work/3"
              className="relative z-20 cursor-pointer"
            >
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 rounded-full bg-white stroke-red-500 p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        <section className="py-24 pr-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold pb-3">LeetCode Stats</h2>
            <div className="w-[5rem] h-[1rem] bg-white mb-4"></div>
            <p className="text-gray-400 font-medium">
              Data Structures & Algorithms, Competitive Programming.
            </p>
          </motion.div>
          <LeetCodeDashboard />
        </section>

        {/* LATEST ARTICLES SECTION */}
        <section className="pr-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold pb-3">Latest Articles</h2>
            <div className="w-[5rem] h-[1rem] bg-white mb-4"></div>
            <p className="text-gray-400 font-medium">
              Insights, tutorials, and thoughts on software engineering.
            </p>
          </motion.div>

          {/* Grid Layout for Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block group"
              >
                <div className="flex flex-col h-full bg-neutral-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 relative">
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Header/Banner Area with Thumbnail */}
                  <div className="h-48 w-full relative border-b border-gray-800 overflow-hidden bg-neutral-800">
                    {/* Display image if it exists, otherwise show fallback SVG */}
                    {article.thumbnail ? (
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-neutral-900 to-neutral-800">
                        <svg
                          className="w-12 h-12 text-gray-700 group-hover:text-gray-500 transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-6.698.39-1.052v-9.014z" />
                        </svg>
                      </div>
                    )}

                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-gray-200 font-medium text-xs px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                      {article.readTime}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-grow z-10">
                    <div className="text-xs text-gray-500 font-medium tracking-wide mb-3 uppercase">
                      {article.date}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {article.description}
                    </p>

                    {/* Glass-morphism Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {article.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="w-full text-center py-3 border border-gray-700 rounded-lg text-sm font-bold tracking-wide text-gray-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                      Read on Medium ↗
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* --- BLOG STATS DASHBOARD --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/30 border border-gray-800 rounded-2xl p-6 md:p-10 relative group my-10"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Dashboard Header */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Monthly Blog Views
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Growth trajectory of my Medium articles
              </p>
            </div>

            {/* The Interactive Chart */}
            <div className="h-[250px] md:h-[300px] w-full mb-12">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#333"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    stroke="#666"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#666"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#171717",
                      borderColor: "#333",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    itemStyle={{ color: "#ef4444", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#ef4444"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                {
                  label: "Total Views",
                  value: "2,100+",
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                },
                {
                  label: "Peak Month",
                  value: "697",
                  icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                },
                {
                  label: "Growth Rate",
                  value: "+562%",
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                },
                {
                  label: "Articles Written",
                  value: "15+",
                  icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-black/40 border border-gray-800 rounded-xl p-5 flex flex-col items-center text-center hover:border-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={stat.icon}
                    />
                  </svg>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="https://medium.com/@360rishabsvjc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors font-bold text-sm px-8 py-3 rounded-lg"
              >
                View All Articles on Medium
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;
