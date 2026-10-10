"use client";

import React from "react";
import { Cpu, ExternalLink, Github, Layers, Zap } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "case-studies", label: "Real-World Sites" },
    { id: "simulator", label: "Rendering Lab" },
    { id: "matrix", label: "Deep Comparison" },
    { id: "decision-engine", label: "Stack Advisor" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-base tracking-tight font-mono">
                ARCHITECT<span className="text-indigo-400">.</span>SPEC
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Next.js vs Non-Next.js
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Interactive Web Architecture & Case Studies Engine
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* GitHub & Live Profile Action */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/olyxmintabansos-byte/nextjs-vs-non-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-mono transition-colors shadow-sm"
          >
            <Github className="h-4 w-4 text-slate-300" />
            <span className="font-semibold text-indigo-300">olyx</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Mobile nav pills */}
      <div className="md:hidden flex overflow-x-auto px-4 py-2 space-x-2 border-t border-slate-800/50 bg-slate-950/40">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium transition-all ${
              activeTab === item.id
                ? "bg-indigo-600 text-white"
                : "text-slate-400 bg-slate-900/50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
