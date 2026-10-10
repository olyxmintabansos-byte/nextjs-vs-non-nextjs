"use client";

import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  Wifi, 
  Globe, 
  Bot, 
  Code2, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  Activity
} from "lucide-react";

type StackMode = "nextjs" | "pure-spa" | "traditional-mpa";

export const InteractiveSimulator: React.FC = () => {
  const [selectedStack, setSelectedStack] = useState<StackMode>("nextjs");
  const [isThrottled, setIsThrottled] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Init, 1: TTFB, 2: First Paint, 3: Fully Interactive

  const stackConfigs = {
    nextjs: {
      name: "Next.js 15 (App Router - RSC & SSR)",
      badge: "Hybrid Server-Client",
      badgeColor: "border-indigo-500/40 bg-indigo-500/20 text-indigo-300",
      ttfb: isThrottled ? 420 : 120, // ms
      fcp: isThrottled ? 680 : 210,  // ms
      tti: isThrottled ? 1200 : 380, // ms
      initialHtmlSize: "38 KB (Full Semantic HTML + RSC Payload)",
      clientJsBundle: "74 KB (Selective Island Hydration)",
      botView: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>iPhone 16 Pro Max - Toko Resmi</title>
  <meta property="og:title" content="iPhone 16 Pro Max Promo Spesial">
  <meta property="og:image" content="https://cdn.store.com/og/iphone16.webp">
  <meta name="description" content="Beli iPhone 16 Pro Max garansi resmi iBox dengan diskon 15%.">
</head>
<body>
  <main id="app">
    <h1>iPhone 16 Pro Max (256 GB)</h1>
    <p class="price">Rp 24.999.000</p>
    <button class="buy-btn">Beli Sekarang</button>
  </main>
</body>
</html>`,
      botVerdict: "Bot langsung mengindeks seluruh konten teks, harga, dan gambar OpenGraph dalam waktu 0 milidetik.",
      botStatus: "success",
      timelineStages: [
        { label: "DNS & TLS Handshake", duration: "35ms", status: "ok" },
        { label: "Server Render & Edge Cache (RSC)", duration: isThrottled ? "280ms" : "80ms", status: "ok" },
        { label: "HTML Stream Arrives (FCP Rendered)", duration: isThrottled ? "360ms" : "95ms", status: "highlight" },
        { label: "Partial Hydration for Client Islands", duration: isThrottled ? "520ms" : "170ms", status: "ok" },
      ],
    },
    "pure-spa": {
      name: "Pure Client SPA (Vite / React SPA)",
      badge: "Client Side Rendered",
      badgeColor: "border-amber-500/40 bg-amber-500/20 text-amber-300",
      ttfb: isThrottled ? 350 : 90, // ms
      fcp: isThrottled ? 2400 : 850, // ms
      tti: isThrottled ? 3800 : 1450, // ms
      initialHtmlSize: "1.2 KB (Empty Shell Container)",
      clientJsBundle: "1,450 KB (Entire React + App Logic)",
      botView: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>Online Shop</title>
  <!-- No dynamic OpenGraph tags here! -->
</head>
<body>
  <!-- Search bot & WhatsApp scraper cuma dapet kontainer kosong ini! -->
  <div id="root">
    <div class="spinner">Memuat data aplikasi...</div>
  </div>
  <script src="/assets/index-B7f9x2.js"></script>
</body>
</html>`,
      botVerdict: "Search bot & Chat link preview (WA/TG) cuma dapet title kosong dan div spinner. Konten belum ada sebelum JS dieksekusi.",
      botStatus: "warning",
      timelineStages: [
        { label: "DNS & TLS Handshake", duration: "35ms", status: "ok" },
        { label: "Static HTML Shell Download (1KB)", duration: isThrottled ? "250ms" : "55ms", status: "ok" },
        { label: "Heavy 1.4MB JS Bundle Download & Parse", duration: isThrottled ? "1800ms" : "650ms", status: "alert" },
        { label: "Client fetch() API + DOM Reconstruction", duration: isThrottled ? "1700ms" : "660ms", status: "alert" },
      ],
    },
    "traditional-mpa": {
      name: "Traditional MPA (Laravel / Ruby on Rails / PHP)",
      badge: "Multi-Page Server Rendered",
      badgeColor: "border-emerald-500/40 bg-emerald-500/20 text-emerald-300",
      ttfb: isThrottled ? 490 : 160, // ms
      fcp: isThrottled ? 580 : 190,  // ms
      tti: isThrottled ? 600 : 200,  // ms
      initialHtmlSize: "45 KB (Complete Server HTML)",
      clientJsBundle: "12 KB (Vanilla Scripts / HTMX)",
      botView: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>iPhone 16 Pro Max - Toko Resmi</title>
  <meta property="og:title" content="iPhone 16 Pro Max Promo Spesial">
  <meta property="og:image" content="https://cdn.store.com/og/iphone16.webp">
</head>
<body>
  <div class="container">
    <h1>iPhone 16 Pro Max (256 GB)</h1>
    <p class="price">Rp 24.999.000</p>
    <form action="/cart" method="POST">
      <button type="submit">Beli Sekarang</button>
    </form>
  </div>
</body>
</html>`,
      botVerdict: "Bot SEO membaca 100% data tanpa perlu kompilasi Javascript di client. Respon langsung.",
      botStatus: "success",
      timelineStages: [
        { label: "DNS & TLS Handshake", duration: "35ms", status: "ok" },
        { label: "Backend DB Query & Template Compilation", duration: isThrottled ? "320ms" : "110ms", status: "ok" },
        { label: "Complete HTML Delivered & Painted", duration: isThrottled ? "180ms" : "45ms", status: "highlight" },
        { label: "Instant Interactive (Zero Hydration Cost)", duration: "0ms", status: "ok" },
      ],
    },
  };

  const current = stackConfigs[selectedStack];

  return (
    <section id="simulator" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Activity className="h-4 w-4" />
          <span>Interactive Architecture Simulator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Rendering Lab: Simulasi Waterfall & SEO Crawler
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Bandingkan langsung siklus hidup request browser: bagaimana Next.js menyeimbangkan kecepatan SSR tanpa mengorbankan interaktivitas client.
        </p>
      </div>

      {/* Simulator Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Left: Architecture Switcher */}
        <div className="lg:col-span-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400 font-bold uppercase">
              Pilih Arsitektur yang Diuji:
            </span>

            {/* Network throttle switch */}
            <button
              onClick={() => setIsThrottled(!isThrottled)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
                isThrottled
                  ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                  : "bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
            >
              <Wifi className={`h-3.5 w-3.5 ${isThrottled ? "text-rose-400 animate-pulse" : "text-slate-400"}`} />
              <span>Simulasi Slow 3G: {isThrottled ? "AKTIF (Throttled)" : "NORMAL (Fiber)"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedStack("nextjs")}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedStack === "nextjs"
                  ? "bg-indigo-950/60 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-indigo-400">NEXT.JS 15</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">RSC</span>
              </div>
              <div className="text-sm font-bold text-white">Hybrid SSR + RSC</div>
              <p className="text-[11px] text-slate-400 mt-1">Pre-render server + selective client hydration.</p>
            </button>

            <button
              onClick={() => setSelectedStack("pure-spa")}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedStack === "pure-spa"
                  ? "bg-amber-950/60 border-amber-500 text-white shadow-lg shadow-amber-500/20"
                  : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-amber-400">PURE SPA</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">Vite/CRA</span>
              </div>
              <div className="text-sm font-bold text-white">Client-Side Render</div>
              <p className="text-[11px] text-slate-400 mt-1">Empty shell + compile seluruh UI di browser client.</p>
            </button>

            <button
              onClick={() => setSelectedStack("traditional-mpa")}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedStack === "traditional-mpa"
                  ? "bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-400">CLASSIC MPA</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Rails/PHP</span>
              </div>
              <div className="text-sm font-bold text-white">Multi-Page Server</div>
              <p className="text-[11px] text-slate-400 mt-1">Full HTML server render + 0 KB framework JS.</p>
            </button>
          </div>
        </div>

        {/* Right: Quick Telemetry Cards */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase font-bold">
              Core Web Vitals Telemetry
            </span>
            <div className="mt-3 space-y-2.5 text-xs font-mono">
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-400">TTFB (Server):</span>
                <span className="text-white font-bold">{current.ttfb} ms</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-400">FCP (Visual Paint):</span>
                <span className={`font-bold ${current.fcp < 500 ? "text-emerald-400" : current.fcp < 1500 ? "text-amber-400" : "text-rose-400"}`}>
                  {current.fcp} ms
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-400">TTI (Interactivity):</span>
                <span className={`font-bold ${current.tti < 800 ? "text-emerald-400" : "text-amber-400"}`}>
                  {current.tti} ms
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[11px] text-slate-400 font-mono">
            JS Payload: <span className="text-indigo-300 font-semibold">{current.clientJsBundle}</span>
          </div>
        </div>
      </div>

      {/* Main Dual-Panel Comparison: Timeline & Bot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel: Request & Hydration Lifecycle Waterfall */}
        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-indigo-400" />
              <h3 className="font-bold text-white text-sm">
                Waterfall Siklus Hidup Eksekusi
              </h3>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono border ${current.badgeColor}`}>
              {current.badge}
            </span>
          </div>

          <div className="space-y-4">
            {current.timelineStages.map((stage, idx) => {
              return (
                <div key={idx} className="relative pl-6 pb-2 border-l-2 border-slate-800 last:border-l-transparent">
                  <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    stage.status === "alert" 
                      ? "bg-rose-500 text-white" 
                      : stage.status === "highlight" 
                      ? "bg-indigo-500 text-white" 
                      : "bg-slate-700 text-slate-300"
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">{stage.label}</span>
                    <span className="font-mono text-slate-400">{stage.duration}</span>
                  </div>
                  {stage.status === "alert" && (
                    <p className="text-[11px] text-rose-400 mt-1">
                      ⚠️ Bottleneck: Browser harus download & compile script sebelum user bisa lihat teks.
                    </p>
                  )}
                  {stage.status === "highlight" && (
                    <p className="text-[11px] text-emerald-400 mt-1">
                      ⚡ Keunggulan: HTML langsung muncul di layar tanpa menunggu bundle JavaScript selesai.
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Architecture insight box */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
            <span className="font-bold text-white font-mono uppercase text-[11px] block mb-1">
              Catatan Arsitek:
            </span>
            {selectedStack === "nextjs" && (
              <p>
                Next.js App Router memisahkan komponen Server (RSC) dan Komponen Client (`use client`). Komponen server dieksekusi sekali di Node/Edge, menghasilkan HTML streaming langsung ke browser dengan 0 KB JavaScript overhead.
              </p>
            )}
            {selectedStack === "pure-spa" && (
              <p>
                Client SPA memindahkan seluruh beban komputasi dan rendering ke CPU browser perangkat user. Akibatnya di smartphone murah atau jaringan 3G, user akan mengalami "white screen" beberapa detik sebelum halaman muncul.
              </p>
            )}
            {selectedStack === "traditional-mpa" && (
              <p>
                Traditional MPA sangat cepat pada paint pertama (FCP), namun setiap kali user klik link baru, browser melakukan full-page refresh dan re-evaluasi seluruh stylesheet dari awal.
              </p>
            )}
          </div>
        </div>

        {/* Right Panel: Googlebot & Social Crawler Inspector */}
        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4 text-emerald-400" />
                <h3 className="font-bold text-white text-sm">
                  Perspektif Crawler Bot (Google / WA / Twitter)
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">
                Initial GET Response Payload
              </span>
            </div>

            {/* Code View of Raw HTTP Response */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>GET /product/iphone-16 (Raw HTML)</span>
                <span>{current.initialHtmlSize}</span>
              </div>
              <pre className="p-4 text-[11px] font-mono text-emerald-300/90 overflow-x-auto max-h-56 scrollbar-none leading-relaxed">
                <code>{current.botView}</code>
              </pre>
            </div>
          </div>

          {/* Crawler Verdict Card */}
          <div className={`mt-4 p-4 rounded-xl border text-xs ${
            current.botStatus === "success"
              ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
              : "bg-amber-950/20 border-amber-500/30 text-amber-300"
          }`}>
            <div className="flex items-start space-x-2">
              {current.botStatus === "success" ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="font-bold block uppercase font-mono text-[11px] mb-0.5">
                  Hasil Analisis Crawler:
                </span>
                <p className="leading-relaxed">{current.botVerdict}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
