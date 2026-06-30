"use client";

import React from "react";
import { Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { upbuiltData } from "@/data/portfolio";

export const UpBuilt: React.FC = () => {
  return (
    <section id="upbuilt" aria-labelledby="upbuilt-heading" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-neutral-950/90 dark:bg-neutral-950/90 border border-neutral-800/80 rounded-3xl p-8 sm:p-14 md:p-20 text-center overflow-hidden shadow-2xl group"
      >
        {/* Subtle background radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo Icon */}
        <div className="relative bg-neutral-900/90 border border-neutral-800/90 p-4 rounded-2xl w-fit mx-auto mb-8 shadow-md transition-transform duration-500 group-hover:scale-105">
          <Compass className="w-7 h-7 text-indigo-400" aria-hidden="true" />
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
            <span aria-hidden="true">🚀</span>
            <span>{upbuiltData.role}</span>
          </span>

          <span className="bg-indigo-950/50 border border-indigo-800/60 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" aria-hidden="true" />
            <span>{upbuiltData.status}</span>
          </span>
        </div>

        {/* Title */}
        <h2 id="upbuilt-heading" className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {upbuiltData.title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
          {upbuiltData.description}
        </p>

        {/* Bottom indicator */}
        <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-md">
          <Sparkles className="w-4 h-4 text-indigo-400" aria-hidden="true" />
          <span>{upbuiltData.footerStatus}</span>
        </div>
      </motion.div>
    </section>
  );
};
