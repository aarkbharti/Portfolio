import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Toolkit } from "@/components/Toolkit";
import { FeaturedWork } from "@/components/FeaturedWork";
import { UpBuilt } from "@/components/UpBuilt";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background bg-grid-pattern overflow-hidden">
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Toolkit />
        <FeaturedWork />
        <UpBuilt />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
