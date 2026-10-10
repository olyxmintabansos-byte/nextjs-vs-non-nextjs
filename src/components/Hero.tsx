"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Flame, ShieldAlert, Sparkles, Terminal } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onAdvisorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAdvisorClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-emerald-400 font-semibold">LIVE PRODUCTION AUDIT</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Next.js vs Non-Next.js (SPA, MPA, WASM)</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15]">
            Kapan Lu Wajib Pakai{" "}
            <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent underline decoration-indigo-500/50 underline-offset-8">
              Next.js
            </span>
            , dan Kapan Lu{" "}
            <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-300 bg-clip-text text-transparent">
              Mendingan Jangan?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Bukan sekadar perbandingan teori. Kami bedah arsitektur nyata di balik website raksasa dunia: dari{" "}
            <span className="text-white font-semibold">TikTok, Notion, ChatGPT</span> (yang pakai Next.js) sampai{" "}
            <span className="text-white font-semibold">YouTube, GitHub, Figma, Linear</span> (yang sengaja menolak Next.js).
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Bedah Website Dunia Nyata</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onAdvisorClick}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center space-x-2 transition-all cursor-pointer"
            >
              <Terminal className="h-4 w-4 text-indigo-400" />
              <span>Kalkulator Keputusan Stack</span>
            </button>
          </div>

          {/* Two-Column Fast Verdict Card */}
          <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* When to use Next.js */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950 border border-indigo-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-[11px] font-mono rounded-bl-xl border-l border-b border-indigo-500/30">
                PRO-NEXT.JS
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Gunakan Next.js Kalau:</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-400 font-bold mt-0.5">✦</span>
                  <span><strong>SEO & Social Sharing adalah Nyawa Bisnis:</strong> E-commerce, portal berita, landing page publik butuh pre-rendered HTML + dynamic OpenGraph tags instan.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-400 font-bold mt-0.5">✦</span>
                  <span><strong>Skala Katalog Jutaan Halaman:</strong> Butuh Incremental Static Regeneration (ISR) untuk cache edge tanpa rebuild berjam-jam.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-400 font-bold mt-0.5">✦</span>
                  <span><strong>Fullstack Satu Bahasa:</strong> Satu repo TypeScript dari front-end UI, Server Components (RSC), sampai Edge Route Handlers.</span>
                </li>
              </ul>
            </div>

            {/* When NOT to use Next.js */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/40 via-slate-900/60 to-slate-950 border border-rose-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-rose-500/20 text-rose-300 text-[11px] font-mono rounded-bl-xl border-l border-b border-rose-500/30">
                NON-NEXT.JS BETTER
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">JANGAN Pakai Next.js Kalau:</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <span><strong>Heavy Canvas / WebGL Engine (Contoh: Figma):</strong> DOM tree dan SSR tidak berguna untuk 60 FPS graphics loop biner WebAssembly.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <span><strong>Local-First Instant App (Contoh: Linear):</strong> Semua data di-cache di client SQLite/IndexedDB, roundtrip server SSR justru bikin lag.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <span><strong>Massive High-Throughput Read Cache (Contoh: Wikipedia, GitHub):</strong> SSR Rails / PHP Varnish edge jauh lebih hemat resource daripada ribuan Node.js SSR runtime processes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
