"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { ownerData } from "@/data/portfolio";

export const Hero: React.FC = () => {
  return (
    <section aria-label="Introduction" className="relative pt-32 pb-24 md:pt-40 md:pb-36 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/15 dark:bg-neutral-800/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Avatar & Status - Increased size by ~35% for person-first presence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-12 md:mb-14 flex flex-col items-center"
      >
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-neutral-800/80 shadow-2xl bg-neutral-900">
          <Image
            src="/profile.jpg"
            alt={ownerData.fullName}
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Status Pill Overlapping */}
        <div className="absolute -bottom-4 z-10 flex items-center gap-2 bg-neutral-950/90 border border-neutral-800/90 text-neutral-200 text-xs font-medium px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" aria-hidden="true" />
          <span>{ownerData.status}</span>
        </div>
      </motion.div>

      {/* Headline - Reduced ~10% for editorial balance & person-first composition */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-[52rem] mx-auto leading-[1.12] mt-2"
      >
        Building thoughtful software with clean code and modern design.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mt-6 leading-relaxed font-normal"
      >
        {ownerData.subHeadline}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="group bg-white text-black hover:bg-neutral-200 font-medium px-7 py-3.5 rounded-full transition-[background-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-2 text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>Explore Work</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>

        <a
          href={ownerData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-900/80 hover:bg-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-neutral-800 border border-neutral-800 text-foreground font-medium px-7 py-3.5 rounded-full transition-[background-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>Download Resume</span>
          <Download className="w-4 h-4 text-neutral-400" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
};
