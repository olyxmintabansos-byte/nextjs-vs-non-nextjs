"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  RotateCcw, 
  CheckCircle, 
  Layers, 
  AlertCircle, 
  ArrowRight,
  Terminal,
  Cpu
} from "lucide-react";

export const StackAdvisor: React.FC = () => {
  const [q1, setQ1] = useState<string>("critical"); // SEO
  const [q2, setQ2] = useState<string>("document"); // Interactivity
  const [q3, setQ3] = useState<string>("typescript"); // Backend
  const [q4, setQ4] = useState<string>("serverless"); // Hosting
  const [q5, setQ5] = useState<string>("critical"); // Low network

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const calculateRecommendation = () => {
    let nextScore = 0;
    let spaScore = 0;
    let mpaScore = 0;
    let wasmScore = 0;

    // Q1: SEO
    if (q1 === "critical") {
      nextScore += 40;
      mpaScore += 35;
      spaScore -= 30;
    } else if (q1 === "moderate") {
      nextScore += 20;
      spaScore += 10;
    } else {
      spaScore += 30;
      nextScore += 10;
    }

    // Q2: Graphics / Interactivity
    if (q2 === "canvas") {
      wasmScore += 60;
      spaScore += 30;
      nextScore -= 20;
    } else if (q2 === "localfirst") {
      spaScore += 40;
      nextScore += 10;
    } else {
      nextScore += 25;
      mpaScore += 20;
    }

    // Q3: Backend team
    if (q3 === "typescript") {
      nextScore += 30;
      spaScore += 15;
    } else if (q3 === "existing-api") {
      spaScore += 25;
      nextScore += 20;
    } else {
      mpaScore += 40;
    }

    // Q4: Hosting
    if (q4 === "static-free") {
      spaScore += 35;
      // Note: Next.js static export is possible, but full SSR needs compute
      nextScore += 10;
    } else {
      nextScore += 20;
    }

    setHasCalculated(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // Confetti fallback
    }
  };

  const resetForm = () => {
    setQ1("critical");
    setQ2("document");
    setQ3("typescript");
    setQ4("serverless");
    setQ5("critical");
    setHasCalculated(false);
  };

  // Derive final advice
  const isHeavyCanvas = q2 === "canvas";
  const isHighSeo = q1 === "critical";
  const isStaticOnly = q4 === "static-free";
  const isBackendMonolith = q3 === "monolith";

  let stackTitle = "Next.js 15 App Router (SSR + RSC)";
  let stackBadge = "RECOMMENDED ARCHITECTURE";
  let stackDescription = "Project lu butuh kombinasi indexing SEO maksimal, First Contentful Paint cepat di mobile, dan produktivitas full-stack TypeScript.";
  let stackColor = "border-indigo-500/40 bg-indigo-950/40 text-indigo-300";

  if (isHeavyCanvas) {
    stackTitle = "WASM + WebGL Canvas + Thin React Shell (Gaya Figma)";
    stackBadge = "GRAPHICS ENGINE ARCHITECTURE";
    stackDescription = "SSR atau DOM biasa bakal lambat untuk aplikasi manipulasi pixel/vektor 60 FPS. Lu butuh engine kompilasi C++/Rust via WebAssembly!";
    stackColor = "border-amber-500/40 bg-amber-950/40 text-amber-300";
  } else if (!isHighSeo && isStaticOnly) {
    stackTitle = "Pure Client SPA (Vite + React + TanStack Query)";
    stackBadge = "LEAN CLIENT ARCHITECTURE";
    stackDescription = "Aplikasi lu private di balik login dan lu mau hosting gratisan statis (S3 / Cloudflare Pages / GitHub Pages). Hindari kompleksitas server SSR.";
    stackColor = "border-emerald-500/40 bg-emerald-950/40 text-emerald-300";
  } else if (isBackendMonolith) {
    stackTitle = "Traditional MPA + Turbo / HTMX (Gaya GitHub & Basecamp)";
    stackBadge = "SERVER-CENTRIC ARCHITECTURE";
    stackDescription = "Maksimalkan kekuatan backend framework (Rails, Laravel, Django) dengan HTML-over-the-wire. Hemat resource dan hindari overhead maintenance dua ekosistem.";
    stackColor = "border-cyan-500/40 bg-cyan-950/40 text-cyan-300";
  }

  return (
    <section id="decision-engine" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Terminal className="h-4 w-4" />
          <span>Interactive Architectural Decision Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Stack Advisor: Haruskah Lu Pakai Next.js?
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Jawab 4 parameter kunci berikut untuk mendapatkan rekomendasi objektif dari sudut pandang Principal Systems Architect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Controls */}
        <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-6">
          {/* Question 1 */}
          <div>
            <label className="text-xs font-mono font-bold uppercase text-slate-300 block mb-2">
              1. Kebutuhan Public SEO & Social Link Preview (WhatsApp / Twitter)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setQ1("critical")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q1 === "critical"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Kritis (E-commerce / Blog)
              </button>
              <button
                type="button"
                onClick={() => setQ1("moderate")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q1 === "moderate"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Sebagian (Landing saja)
              </button>
              <button
                type="button"
                onClick={() => setQ1("none")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q1 === "none"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Gak Butuh (Private CRM)
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="text-xs font-mono font-bold uppercase text-slate-300 block mb-2">
              2. Tipe Beban Komputasi & Interaktivitas UI
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setQ2("document")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q2 === "document"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Konten / Toko / SaaS Dokumen
              </button>
              <button
                type="button"
                onClick={() => setQ2("localfirst")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q2 === "localfirst"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Local-First Instant (Gaya Linear)
              </button>
              <button
                type="button"
                onClick={() => setQ2("canvas")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q2 === "canvas"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Heavy Canvas 60fps (Gaya Figma)
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <label className="text-xs font-mono font-bold uppercase text-slate-300 block mb-2">
              3. Preferensi Backend & Skill Tim Engineering
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setQ3("typescript")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q3 === "typescript"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Fullstack TypeScript (1 Repo)
              </button>
              <button
                type="button"
                onClick={() => setQ3("existing-api")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q3 === "existing-api"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                REST / GraphQL Terpisah
              </button>
              <button
                type="button"
                onClick={() => setQ3("monolith")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q3 === "monolith"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Backend Rails / Laravel / Django
              </button>
            </div>
          </div>

          {/* Question 4 */}
          <div>
            <label className="text-xs font-mono font-bold uppercase text-slate-300 block mb-2">
              4. Target Infrastruktur & Anggaran Server
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setQ4("serverless")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q4 === "serverless"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Vercel / Cloudflare Edge
              </button>
              <button
                type="button"
                onClick={() => setQ4("static-free")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q4 === "static-free"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Hosting Statis Gratis (GH Pages/S3)
              </button>
              <button
                type="button"
                onClick={() => setQ4("vps")}
                className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  q4 === "vps"
                    ? "bg-indigo-600/20 border-indigo-500 text-white font-bold"
                    : "bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                VPS Docker Mandiri (Ubuntu)
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3 pt-2">
            <button
              type="button"
              onClick={calculateRecommendation}
              className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Hitung Rekomendasi Arsitektur</span>
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Verdict Display Panel */}
        <div className="lg:col-span-5 flex flex-col">
          <div className={`flex-1 rounded-2xl p-6 sm:p-8 border flex flex-col justify-between ${stackColor}`}>
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest font-bold">
                <Cpu className="h-4 w-4" />
                <span>{stackBadge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mt-2 leading-snug">
                {stackTitle}
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {stackDescription}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                  Checklist Keputusan Teknis:
                </span>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {q1 === "critical"
                        ? "Wajib pre-rendered HTML untuk crawling SEO bot."
                        : "SEO bukan prioritas, rendering browser bisa ditolerir."}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {q2 === "canvas"
                        ? "Hindari overhead DOM React; gunakan canvas WebAssembly."
                        : "Komponen UI standar sangat optimal dengan React Server Components."}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {q4 === "static-free"
                        ? "Gunakan 'output: export' di Next.js jika tetap ingin deploy gratis ke GitHub Pages."
                        : "Deployment serverless siap menampung dynamic SSR caching."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: <span className="text-emerald-400 font-bold">VERIFIED</span></span>
              <span>Model: Principal Spec v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
