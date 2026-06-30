"use client";

import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { ownerData } from "@/data/portfolio";

export const Footer: React.FC = () => {
  return (
    <footer aria-label="Site Footer" className="pb-16 pt-8 px-6 max-w-5xl mx-auto text-center">
      {/* Intention statement */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Crafted with intention.
        </h3>
        <p className="text-xs tracking-[0.2em] uppercase text-muted font-semibold">
          Engineering exactly what you need.
        </p>
      </div>

      {/* Subtle divider */}
      <div className="w-8 h-px bg-border mx-auto mb-16" aria-hidden="true" />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-muted">
        <p>© 2026 {ownerData.fullName}. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href={ownerData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aark Bharti's GitHub profile"
            className="p-2.5 rounded-full bg-neutral-900/80 dark:bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/80 text-neutral-400 hover:text-white transition-[background-color,color] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={ownerData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aark Bharti's LinkedIn profile"
            className="p-2.5 rounded-full bg-neutral-900/80 dark:bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/80 text-neutral-400 hover:text-white transition-[background-color,color] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={ownerData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aark Bharti's Twitter/X profile"
            className="p-2.5 rounded-full bg-neutral-900/80 dark:bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/80 text-neutral-400 hover:text-white transition-[background-color,color] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
