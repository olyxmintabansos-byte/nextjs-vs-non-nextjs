"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShowcaseDatabase } from "@/components/ShowcaseDatabase";
import { InteractiveSimulator } from "@/components/InteractiveSimulator";
import { DeepComparisonMatrix } from "@/components/DeepComparisonMatrix";
import { CodeComparator } from "@/components/CodeComparator";
import { StackAdvisor } from "@/components/StackAdvisor";
import { Layers, Github, ExternalLink, Terminal, Heart } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("case-studies");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 relative">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={scrollToSection} 
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero 
          onExploreClick={() => scrollToSection("case-studies")} 
          onAdvisorClick={() => scrollToSection("decision-engine")} 
        />

        {/* Real-World Case Studies Database */}
        <ShowcaseDatabase />

        {/* Interactive Rendering Lab & Crawler Simulator */}
        <InteractiveSimulator />

        {/* Head-to-Head Comparison Matrix */}
        <DeepComparisonMatrix />

        {/* Side-by-Side Code Architecture */}
        <CodeComparator />

        {/* Stack Advisor Decision Engine */}
        <StackAdvisor />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Layers className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-white font-mono text-sm">
                ARCHITECT.SPEC // NEXT.JS vs OTHERS
              </span>
              <p className="text-xs text-slate-400">
                Production-grade analysis for modern web engineers.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400 font-mono">
            <span>
              Engineered with <span className="text-indigo-400 font-bold">Next.js 15</span> & <span className="text-emerald-400 font-bold">Tailwind CSS v4</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href="https://github.com/olyxmintabansos-byte/nextjs-vs-non-nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
            >
              <Github className="h-3.5 w-3.5" />
              <span>olyxmintabansos-byte / nextjs-vs-non-nextjs</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
