"use client";

import React, { useState, useEffect } from "react";
import { Sun, Monitor, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { ownerData } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "UpBuilt", href: "#upbuilt" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountRaf = requestAnimationFrame(() => setMounted(true));

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const isScrolled = window.scrollY > 20;
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

        const sections = navLinks.map((link) => link.href.substring(1));
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      cancelAnimationFrame(mountRaf);
    };
  }, []);

  // Guarantee deterministic hydration match between SSR and initial client hydration
  const activeTheme = mounted ? theme : "auto";

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-6 py-3 rounded-full transition-[background-color,border-color,box-shadow] duration-300 max-w-3xl w-full ${
          scrolled
            ? "bg-neutral-900/85 dark:bg-neutral-900/85 text-white backdrop-blur-2xl border border-neutral-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-neutral-900/70 dark:bg-neutral-900/70 text-white backdrop-blur-xl border border-neutral-800/60 shadow-xl"
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          aria-label={`${ownerData.fullName} home`}
          className="font-semibold text-base md:text-lg tracking-tight text-white hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        >
          {ownerData.name}
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                    isActive ? "text-white font-semibold" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Theme Switcher */}
        <div
          role="group"
          aria-label="Theme switcher"
          className="flex items-center gap-0.5 bg-neutral-950/80 border border-neutral-800/80 rounded-full p-1"
        >
          <button
            onClick={() => setTheme("light")}
            aria-label="Switch to light mode"
            className={`p-1.5 rounded-full transition-[background-color,color,transform] duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
              activeTheme === "light"
                ? "bg-neutral-800 text-white shadow-sm scale-105"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Sun className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <button
            onClick={() => setTheme("auto")}
            aria-label="Switch to system auto theme"
            className={`p-1.5 rounded-full transition-[background-color,color,transform] duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
              activeTheme === "auto"
                ? "bg-neutral-800 text-white shadow-sm scale-105"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            aria-label="Switch to dark mode"
            className={`p-1.5 rounded-full transition-[background-color,color,transform] duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
              activeTheme === "dark"
                ? "bg-neutral-800 text-white shadow-sm scale-105"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Moon className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};
