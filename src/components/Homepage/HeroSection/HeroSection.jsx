"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import SocialLinks from "./components/SocialLinks";
import ImageSection from "./components/ImageSection";
import { words } from "@/data/heroSectionData";
import { FaReact, FaPaintBrush, FaSearch } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";

// ── Floating 3D blobs / shapes (hero decoration) ───────────────────────────────
const FloatingShapes = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    {/* Large purple blob */}
    <div
      style={{
        position: "absolute",
        top: "22%",
        right: "13%",
        width: 420,
        height: 420,
        borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
        background:
          "linear-gradient(135deg, #6C63FF 0%, #a78bfa 50%, #FF6584 100%)",
        opacity: 0.18,
        filter: "blur(1px)",
        animation: "blobFloat 8s ease-in-out infinite",
      }}
    />
    {/* Teal accent blob */}
    <div
      style={{
        position: "absolute",
        top: "30%",
        right: "15%",
        width: 200,
        height: 200,
        borderRadius: "40% 60% 70% 30% / 60% 30% 70% 40%",
        background: "linear-gradient(135deg, #00d2d3, #54a0ff)",
        opacity: 0.22,
        filter: "blur(1px)",
        animation: "blobFloat 6s ease-in-out infinite reverse",
      }}
    />
    {/* Pink heart-like shape */}
    <div
      style={{
        position: "absolute",
        top: "18%",
        right: "22%",
        width: 160,
        height: 160,
        borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
        background: "linear-gradient(135deg, #FF6584, #ff9ff3)",
        opacity: 0.3,
        transform: "rotate(-15deg)",
        animation: "blobFloat 7s ease-in-out infinite 1s",
      }}
    />
    {/* Globe-like circle */}
    <div
      style={{
        position: "absolute",
        top: "42%",
        right: "28%",
        width: 120,
        height: 120,
        borderRadius: "50%",
        background:
          "conic-gradient(from 0deg, #6C63FF, #00d2d3, #FF6584, #6C63FF)",
        opacity: 0.25,
        animation: "spin 12s linear infinite",
      }}
    />
    {/* Small sparkle dots */}
    {[
      { top: "12%", right: "38%", size: 12, color: "#6C63FF" },
      { top: "55%", right: "10%", size: 16, color: "#FF6584" },
      { top: "25%", right: "42%", size: 10, color: "#00d2d3" },
      { top: "68%", right: "32%", size: 8, color: "#a78bfa" },
    ].map((dot, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: dot.top,
          right: dot.right,
          width: dot.size,
          height: dot.size,
          borderRadius: "50%",
          background: dot.color,
          opacity: 0.6,
          animation: `blobFloat ${4 + i}s ease-in-out infinite ${i * 0.5}s`,
        }}
      />
    ))}
    <style>{`
      @keyframes blobFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-18px) rotate(3deg); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const HeroSection = () => {
  const experiences = [
    {
      name: "React.js Development",
      position: "right-[25rem] top-4 max-md:right-0 max-[1134px]:right-[20rem]",
      icon: <FaReact className=" text-black dark:text-gray-300" size={24} />,
    },
    {
      name: "Next.js & TypeScript",
      position:
        "top-12 right-[-1rem] max-md:right-0 max-md:top-12 max-[1024px]:top-3",
      icon: (
        <MdDeveloperMode className=" text-black dark:text-gray-300" size={24} />
      ),
    },
    {
      name: "UI/UX & Tailwind CSS",
      position:
        "right-[-3rem] bottom-[-11rem] max-md:right-0 max-md:bottom-[-9rem] max-[1354px]:right-0  max-[1354px]:bottom-[-15rem]",
      icon: (
        <FaPaintBrush className=" text-black dark:text-gray-300" size={24} />
      ),
    },
    {
      name: "JavaScript & ES6+",
      position:
        "top-[4rem] right-[23rem] max-md:right-0 max-md:top-[2rem] max-[1134px]:right-[17rem]",
      icon: <BiCodeAlt className=" text-black dark:text-gray-300" size={24} />,
    },
    {
      name: "On Page Optimization",
      position:
        "right-[28rem] bottom-[-10rem] max-md:right-0 max-md:bottom-[-8rem] max-[1134px]:right-[20rem]",
      icon: <FaSearch className=" text-black dark:text-gray-300" size={24} />,
    },
  ];

  return (
    <div className="flex max-[1024px]:flex-col min-[1024px]:flex-row items-center justify-between py-16 px-6 max-[1024px]:items-start max-md:pt-[7rem]">
      {/* Hero Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Greeting */}
        <div className="bg-indigo-100 dark:bg-indigo-500 text-indigo-700 dark:text-indigo-100 inline-block px-4 py-2 rounded-full relative">
          <div className="w-3 h-3 bg-indigo-200 rounded-full absolute animate-ping left-[4px]"></div>
          Hi everyone 👋 I'm Pavan
        </div>

        {/* Main Heading */}
        <div className="space-y-1 w-[90%] max-[768px]:hidden">
          <FlipWords words={words} /> <br />
        </div>

        <div className="space-y-1 font-bold text-[2.2rem] [text-shadow:0.02rem_0.01rem_0.02rem_black] w-[90%] min-[768px]:hidden">
          <h1>Frontend Developer</h1>
        </div>

        {/* Description */}
        <div className="rounded-lg max-w-md dark:text-gray-400">
          As a Frontend Developer, I specialize in building responsive,
          user-centric, and high-performance web applications.
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Image Section */}
      <ImageSection experiences={experiences} />
    </div>
  );
};

export { HeroSection, FloatingShapes };
