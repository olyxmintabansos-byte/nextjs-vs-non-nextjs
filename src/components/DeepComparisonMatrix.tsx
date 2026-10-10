"use client";

import React, { useState } from "react";
import { COMPARISON_DIMENSIONS } from "../data/comparisons";
import { Check, X, Shield, Cpu, Zap, HelpCircle } from "lucide-react";

export const DeepComparisonMatrix: React.FC = () => {
  const [selectedDimensionIdx, setSelectedDimensionIdx] = useState<number>(0);

  const current = COMPARISON_DIMENSIONS[selectedDimensionIdx];

  return (
    <section id="matrix" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Cpu className="h-4 w-4" />
          <span>Arsitektur & Trade-Off Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Head-to-Head: Next.js vs SPA vs MPA Tradisional
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Setiap pilihan arsitektur adalah barter (trade-off). Tidak ada framework yang unggul di semua sektor. Pilihlah berdasarkan constraint bisnis lu.
        </p>
      </div>

      {/* Dimension Selector Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none mb-6">
        {COMPARISON_DIMENSIONS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDimensionIdx(idx)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedDimensionIdx === idx
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {item.dimension}
          </button>
        ))}
      </div>

      {/* Comparison Grid 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Col 1: Next.js App Router */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-indigo-950/30 via-slate-900/60 to-slate-950 border border-indigo-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-indigo-500/20">
              <span className="font-bold text-white text-base">Next.js 15 (App Router)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                Hybrid SSR/RSC
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              {current.nextJsAppRouter.description}
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase font-mono text-emerald-400 font-bold block mb-2">
                  Kelebihan Arsitektur:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.nextJsAppRouter.pros.map((p, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase font-mono text-rose-400 font-bold block mb-2">
                  Kekurangan / Trade-off:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.nextJsAppRouter.cons.map((c, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <X className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="text-[10px] uppercase font-mono text-indigo-400 font-bold mb-1">
              Verdict Principal Architect:
            </div>
            <p className="text-xs font-medium text-slate-200">
              {current.nextJsAppRouter.verdict}
            </p>
          </div>
        </div>

        {/* Col 2: Pure Client SPA (Vite) */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-amber-950/20 via-slate-900/60 to-slate-950 border border-amber-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-amber-500/20">
              <span className="font-bold text-white text-base">Pure Client SPA (Vite)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                Client-Side Only
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              {current.pureClientSpa.description}
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase font-mono text-emerald-400 font-bold block mb-2">
                  Kelebihan Arsitektur:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.pureClientSpa.pros.map((p, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase font-mono text-rose-400 font-bold block mb-2">
                  Kekurangan / Trade-off:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.pureClientSpa.cons.map((c, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <X className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="text-[10px] uppercase font-mono text-amber-400 font-bold mb-1">
              Verdict Principal Architect:
            </div>
            <p className="text-xs font-medium text-slate-200">
              {current.pureClientSpa.verdict}
            </p>
          </div>
        </div>

        {/* Col 3: Traditional MPA (Rails/Laravel) */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-emerald-950/20 via-slate-900/60 to-slate-950 border border-emerald-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-500/20">
              <span className="font-bold text-white text-base">Traditional MPA</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                Rails / Laravel / PHP
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              {current.traditionalMpa.description}
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase font-mono text-emerald-400 font-bold block mb-2">
                  Kelebihan Arsitektur:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.traditionalMpa.pros.map((p, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase font-mono text-rose-400 font-bold block mb-2">
                  Kekurangan / Trade-off:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.traditionalMpa.cons.map((c, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <X className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="text-[10px] uppercase font-mono text-emerald-400 font-bold mb-1">
              Verdict Principal Architect:
            </div>
            <p className="text-xs font-medium text-slate-200">
              {current.traditionalMpa.verdict}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
