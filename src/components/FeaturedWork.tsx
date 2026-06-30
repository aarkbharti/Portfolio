"use client";

import React from "react";
import Image from "next/image";
import { Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolio";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <h2 id="projects-heading" className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Featured Work.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          A selection of technical projects and product designs I&apos;ve engineered from the ground up.
        </p>
      </motion.div>

      <div className="space-y-24 md:space-y-36">
        {projectsData.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start"
          >
            {/* Left Column: Project Thumbnail / Future Image */}
            <div className="lg:col-span-6 w-full">
              <div className="group relative w-full aspect-[4/3] rounded-3xl bg-neutral-900/90 dark:bg-neutral-900/90 border border-neutral-800/80 overflow-hidden flex flex-col items-center justify-center text-neutral-500 shadow-2xl transition-[border-color,box-shadow] duration-500 hover:border-neutral-700">
                {project.thumbnail || project.coverImage ? (
                  <Image
                    src={project.thumbnail || project.coverImage || ""}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-transparent to-neutral-800/20 opacity-60 pointer-events-none" />
                    <Code2 className="w-12 h-12 mb-3 text-neutral-600 group-hover:scale-110 group-hover:text-neutral-400 transition-[transform,color] duration-500" aria-hidden="true" />
                    <span className="text-xs font-semibold tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      {project.thumbnailPlaceholder || "PROJECT THUMBNAIL"}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Project Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider border ${
                    project.status === "COMPLETED"
                      ? "bg-indigo-950/40 border-indigo-800/60 text-indigo-300"
                      : "bg-blue-950/40 border-blue-800/60 text-blue-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                {project.title}
              </h3>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-900/80 dark:bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs font-mono px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Problem / Outcome Box */}
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 mb-8 space-y-4 shadow-sm">
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-indigo-400 uppercase mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                    THE PROBLEM
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <h4 className="text-xs font-bold tracking-wider text-indigo-400 uppercase mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                    THE OUTCOME
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="bg-white text-black hover:bg-neutral-200 font-medium px-5 py-2.5 rounded-full transition-[background-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center gap-1.5 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span>View Live</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}

                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${project.title} on GitHub`}
                  className="bg-neutral-900/90 dark:bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium px-5 py-2.5 rounded-full transition-[background-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span>Source Code</span>
                  <GithubIcon className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
