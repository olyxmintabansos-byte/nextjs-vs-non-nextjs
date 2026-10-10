"use client";

import React, { useState, useEffect } from "react";
import { 
  REAL_WORLD_SITES, 
  WebsiteCaseStudy 
} from "../data/comparisons";
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Cpu, 
  Sparkles,
  BarChart3,
  Layers,
  Info
} from "lucide-react";

export const ShowcaseDatabase: React.FC = () => {
  const [filterType, setFilterType] = useState<"all" | "nextjs" | "non-nextjs">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [selectedStudy, setSelectedStudy] = useState<WebsiteCaseStudy | null>(null);

  // Load bookmarks from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("arch_saved_bookmarks");
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter((item) => item !== id)
      : [...bookmarkedIds, id];
    setBookmarkedIds(updated);
    try {
      localStorage.setItem("arch_saved_bookmarks", JSON.stringify(updated));
    } catch {
      // Fallback
    }
  };

  const categories = [
    "all",
    "E-Commerce",
    "Social & Media",
    "Productivity & SaaS",
    "Developer & Tech",
    "Heavy Compute & Graphics",
  ];

  const filteredSites = REAL_WORLD_SITES.filter((site) => {
    if (filterType === "nextjs" && !site.usesNextJs) return false;
    if (filterType === "non-nextjs" && site.usesNextJs) return false;
    if (selectedCategory !== "all" && site.category !== selectedCategory) return false;
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchName = site.name.toLowerCase().includes(query);
      const matchStack = site.actualTechStack.some((tech) => tech.toLowerCase().includes(query));
      const matchArch = site.architectureType.toLowerCase().includes(query);
      const matchWhy = site.architecturalWhy.toLowerCase().includes(query);
      if (!matchName && !matchStack && !matchArch && !matchWhy) return false;
    }
    return true;
  });

  return (
    <section id="case-studies" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>Database Arsitektur Produksi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Studi Kasus Nyata: Siapa Pakai Apa & Mengapa?
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Audit langsung bagaimana tech giant memilih antara Next.js SSR vs Pure Client SPA vs Traditional MPA Rails/PHP vs WebAssembly.
          </p>
        </div>

        {/* Global Summary Counter */}
        <div className="flex items-center space-x-3 bg-slate-900/80 p-2 rounded-xl border border-slate-800 text-xs font-mono">
          <div className="flex items-center space-x-1.5 px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <CheckCircle className="h-3.5 w-3.5 text-indigo-400" />
            <span>Next.js: {REAL_WORLD_SITES.filter(s => s.usesNextJs).length}</span>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <XCircle className="h-3.5 w-3.5 text-amber-400" />
            <span>Non-Next.js: {REAL_WORLD_SITES.filter(s => !s.usesNextJs).length}</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Search & Filters */}
      <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari website, tech stack (misal: Rails, WASM, TikTok, RSC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Type Toggle Buttons */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterType === "all"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Semua ({REAL_WORLD_SITES.length})
            </button>
            <button
              onClick={() => setFilterType("nextjs")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                filterType === "nextjs"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <CheckCircle className="h-3 w-3 text-emerald-400" />
              <span>Pakai Next.js</span>
            </button>
            <button
              onClick={() => setFilterType("non-nextjs")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                filterType === "non-nextjs"
                  ? "bg-amber-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <XCircle className="h-3 w-3 text-rose-300" />
              <span>Tanpa Next.js</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-2 pt-1 pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-700 text-white font-medium"
                  : "bg-slate-950/60 text-slate-400 hover:text-slate-300 border border-slate-800/80"
              }`}
            >
              {cat === "all" ? "Semua Kategori" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSites.map((site) => {
          const isSaved = bookmarkedIds.includes(site.id);
          return (
            <div
              key={site.id}
              onClick={() => setSelectedStudy(site)}
              className={`group rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                site.usesNextJs
                  ? "bg-gradient-to-b from-indigo-950/20 via-slate-900/50 to-slate-950/80 border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
                  : "bg-gradient-to-b from-amber-950/20 via-slate-900/50 to-slate-950/80 border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/10"
              } hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                {/* Card Top: Badges & Bookmark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                        site.usesNextJs
                          ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                          : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      {site.usesNextJs ? (
                        <>
                          <CheckCircle className="h-3 w-3 text-emerald-400" />
                          <span>Pake Next.js</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3 w-3 text-rose-400" />
                          <span>Non-Next.js</span>
                        </>
                      )}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {site.category}
                    </span>
                  </div>

                  <button
                    onClick={(e) => toggleBookmark(site.id, e)}
                    className="text-slate-400 hover:text-indigo-400 transition-colors p-1"
                    title={isSaved ? "Hapus bookmark" : "Simpan bookmark"}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="h-4 w-4 text-indigo-400" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Site Name & Link */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {site.name}
                  </h3>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-white transition-colors ml-2 mt-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Traffic Scale */}
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  Scale: <span className="text-slate-200 font-semibold">{site.trafficScale}</span>
                </div>

                {/* Architecture Type */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs">
                  <div className="text-[10px] uppercase font-mono text-slate-500 font-bold mb-1">
                    Arsitektur Inti
                  </div>
                  <div className="font-semibold text-slate-200">
                    {site.architectureType}
                  </div>
                </div>

                {/* Architectural Reason Quote */}
                <p className="mt-4 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {site.architecturalWhy}
                </p>
              </div>

              {/* Bottom: Tech Stack Pills & Metrics */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {site.actualTechStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div>
                    SEO: <span className="text-white font-semibold">{site.metrics.seoCriticality}</span>
                  </div>
                  <div>
                    Score: <span className="text-emerald-400 font-bold">{site.metrics.initialLoadScore}/100</span>
                  </div>
                  <div className="text-indigo-400 font-semibold flex items-center space-x-1">
                    <span>Audit Teardown</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSites.length === 0 && (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
          <Info className="h-8 w-8 text-slate-500 mx-auto mb-2" />
          <h4 className="text-base font-bold text-white">Tidak ada website yang cocok dengan filter</h4>
          <p className="text-xs text-slate-400 mt-1">Coba reset filter atau ganti kata kunci pencarian.</p>
        </div>
      )}

      {/* Detail Modal */}
      {selectedStudy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedStudy(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${
                      selectedStudy.usesNextJs
                        ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {selectedStudy.usesNextJs ? "Uses Next.js" : "Non-Next.js Stack"}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedStudy.category} • {selectedStudy.trafficScale}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1.5 flex items-center space-x-2">
                  <span>{selectedStudy.name}</span>
                  <a
                    href={selectedStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h3>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="text-slate-400 hover:text-white text-lg font-mono p-1 rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 mt-6">
              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Komponen Tech Stack Aktual
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.actualTechStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why this architecture */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-1.5 flex items-center space-x-1.5">
                  <CheckCircle className="h-4 w-4" />
                  <span>Alasan Arsitektural Utama (The "Why")</span>
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedStudy.architecturalWhy}
                </p>
              </div>

              {/* Why NOT the opposite */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-rose-400 font-bold mb-1.5 flex items-center space-x-1.5">
                  <XCircle className="h-4 w-4" />
                  <span>Kenapa Bukan Arsitektur Sebaliknya?</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedStudy.whyNotOpposite}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Pilar Fitur Kunci
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedStudy.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-center space-x-2 p-2 rounded-lg bg-slate-800/50 border border-slate-800">
                      <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metric Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">SEO IMPACT</div>
                  <div className="text-white font-bold mt-1">{selectedStudy.metrics.seoCriticality}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">INITIAL LOAD</div>
                  <div className="text-emerald-400 font-bold mt-1">{selectedStudy.metrics.initialLoadScore}/100</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">INTERACTIVITY</div>
                  <div className="text-indigo-400 font-bold mt-1">{selectedStudy.metrics.interactivityDepth}/100</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">BUNDLE OVERHEAD</div>
                  <div className="text-amber-400 font-bold mt-1">{selectedStudy.metrics.bundleOverhead}</div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Tutup Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
