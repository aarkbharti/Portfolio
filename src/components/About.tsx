"use client";

import React from "react";
import { Code, PenTool, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/portfolio";

const iconMap = {
  code: Code,
  penTool: PenTool,
  graduation: GraduationCap,
  award: Award,
};

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="about-heading" className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
          {aboutData.heading}
        </h2>

        <div className="space-y-6 text-base sm:text-lg md:text-xl text-muted leading-relaxed font-normal">
          {aboutData.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
        {aboutData.pillars.map((pillar, idx) => {
          const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || Code;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group bg-card border border-border rounded-2xl p-6 md:p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-700/80 h-full">
                <div className="bg-neutral-800/70 dark:bg-neutral-800/80 border border-neutral-700/50 p-3 rounded-xl w-fit mb-6 text-neutral-200 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
