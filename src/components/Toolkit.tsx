"use client";

import React from "react";
import { Layout, Database, Terminal, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { toolkitData } from "@/data/portfolio";

const iconMap = {
  layout: Layout,
  database: Database,
  terminal: Terminal,
  wrench: Wrench,
};

export const Toolkit: React.FC = () => {
  return (
    <section aria-labelledby="toolkit-heading" className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <h2 id="toolkit-heading" className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Engineering Toolkit.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          A curated stack of modern technologies carefully chosen for performance, scalability, and exceptional developer experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolkitData.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-neutral-700/80 hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300 shadow-sm hover:shadow-lg h-full">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="bg-neutral-800/70 dark:bg-neutral-800/80 border border-neutral-700/50 p-2.5 rounded-xl text-neutral-200">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-neutral-900/90 dark:bg-neutral-900/90 border border-neutral-800/90 text-neutral-300 text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full hover:border-neutral-600 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
