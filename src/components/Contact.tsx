"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ownerData } from "@/data/portfolio";

export const Contact: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-28 md:py-40 px-6 text-center max-w-3xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="contact-heading" className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Let&apos;s build.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto mb-10 font-normal">
          I am currently open for collaborative opportunities. Whether you&apos;re building the next big thing or just want to connect, my inbox is always open.
        </p>

        <a
          href={`mailto:${ownerData.email}`}
          aria-label={`Send email to ${ownerData.email} to start a conversation`}
          className="group bg-white text-black hover:bg-neutral-200 font-medium px-8 py-4 rounded-full transition-[background-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2.5 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Mail className="w-4.5 h-4.5 text-neutral-600 transition-colors group-hover:text-black" aria-hidden="true" />
          <span>Start a conversation</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
};
