"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LeetCodeDashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Swapped to a faster, Vercel-hosted API wrapper
        const response = await fetch(
          "https://leetcode-api-faisalshohag.vercel.app/Rishab_Mandal"
        );
        const data = await response.json();

        // This API doesn't nest it in a "status: success" object, 
        // it just returns the data directly or returns an error object
        if (!data.errors) {
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading || !stats) {
    return (
      <div className="animate-pulse bg-neutral-900/30 border border-gray-800 rounded-2xl p-10 w-full h-[300px] flex items-center justify-center">
        <div className="text-gray-500 font-medium tracking-widest uppercase text-sm">
          Loading LeetCode Stats...
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-neutral-900/30 border border-gray-800 rounded-2xl p-6 md:p-10 relative group w-full"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="flex items-center gap-3">
          {/* LeetCode Logo SVG */}
          <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.835-1.452l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
          </svg>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide">LeetCode Progress</h3>
            <p className="text-gray-400 text-sm font-medium">@Rishab_Mandal</p>
          </div>
        </div>
        
        {/* Global Ranking Badge */}
        <div className="bg-black/50 border border-gray-700 px-4 py-2 rounded-lg flex flex-col items-center">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Global Rank</span>
          <span className="text-lg font-bold text-white">{stats.ranking.toLocaleString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side: Big Circle or Total Number */}
        <div className="flex flex-col items-center justify-center p-6 bg-black/40 border border-gray-800 rounded-xl">
          <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Total Solved</div>
          <div className="text-6xl font-black text-white mb-2">{stats.totalSolved}</div>
          <div className="text-gray-500 text-sm">Out of {stats.totalQuestions}</div>
          
          <div className="mt-6 w-full flex justify-between text-xs font-bold px-4 py-2 bg-neutral-900 rounded-lg border border-gray-800">
            <span className="text-gray-400">Acceptance Rate</span>
            <span className="text-white">{stats.acceptanceRate}%</span>
          </div>
        </div>

        {/* Right Side: Difficulty Breakdown Bars */}
        <div className="flex flex-col justify-center gap-6 p-6 bg-black/40 border border-gray-800 rounded-xl">
          
          {/* Easy */}
          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-emerald-500">Easy</span>
              <span className="text-white">{stats.easySolved} <span className="text-gray-600 font-medium">/ {stats.totalEasy}</span></span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${(stats.easySolved / stats.totalEasy) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Medium */}
          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-yellow-500">Medium</span>
              <span className="text-white">{stats.mediumSolved} <span className="text-gray-600 font-medium">/ {stats.totalMedium}</span></span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${(stats.mediumSolved / stats.totalMedium) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Hard */}
          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-red-500">Hard</span>
              <span className="text-white">{stats.hardSolved} <span className="text-gray-600 font-medium">/ {stats.totalHard}</span></span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${(stats.hardSolved / stats.totalHard) * 100}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://leetcode.com/u/Rishab_Mandal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors font-bold text-sm px-8 py-3 rounded-lg"
        >
          View Profile on LeetCode
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default LeetCodeDashboard;