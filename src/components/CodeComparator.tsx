"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, FileCode, Layers } from "lucide-react";

export const CodeComparator: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<number>(0);
  const [copiedSide, setCopiedSide] = useState<string | null>(null);

  const snippets = [
    {
      title: "Data Fetching & SEO Metadata",
      nextjs: `// app/products/[slug]/page.tsx (React Server Component)
import { db } from "@/lib/db";
import type { Metadata } from "next";

// 1. Dynamic SEO Metadata di server (Langsung dibaca Googlebot)
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await db.products.findUnique({ where: { slug: params.slug } });
  return {
    title: product.name,
    openGraph: { images: [product.ogImage] }
  };
}

// 2. Data Fetching murni di server (0 KB bundle JS terkirim ke client!)
export default async function ProductPage({ params }) {
  const product = await db.products.findUnique({ where: { slug: params.slug } });
  return (
    <article className="p-8">
      <h1>{product.name}</h1>
      <p>Harga: {product.price}</p>
    </article>
  );
}`,
      nonNext: `// src/pages/ProductDetail.tsx (Vite / React SPA)
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Sering telat di-crawl bot!

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Butuh fetch client-side: Bikin "White Screen" & Waterfall loading
  useEffect(() => {
    fetch(\`/api/products/\${slug}\`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Loading spinner...</div>;

  return (
    <article className="p-8">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h1>{product.name}</h1>
      <p>Harga: {product.price}</p>
    </article>
  );
}`,
    },
    {
      title: "Form Mutation & Server Execution",
      nextjs: `// app/actions/cart.ts (Next.js Server Actions)
"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Fungsi dieksekusi 100% di server tanpa bikin endpoint REST manual
export async function addToCart(formData: FormData) {
  const itemId = formData.get("itemId");
  await db.cart.create({ data: { itemId } });
  
  // Revalidasi cache instant tanpa reload browser
  revalidatePath("/cart");
}`,
      nonNext: `// src/services/cart.ts + backend Express terpisah (Pure SPA)
// 1. Client code:
export async function addToCart(itemId: string) {
  const response = await fetch("https://api.domain.com/v1/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemId }),
  });
  return response.json();
}

// 2. Lu harus maintain Express/NestJS server terpisah:
// app.post('/v1/cart', authenticate, async (req, res) => { ... });`,
    },
  ];

  const handleCopy = (code: string, side: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSide(side);
    setTimeout(() => setCopiedSide(null), 2000);
  };

  const current = snippets[activeSnippet];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Code2 className="h-4 w-4" />
          <span>Code Architecture Side-by-Side</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Perbedaan Kode: Next.js vs SPA Tradisional
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Lihat bagaimana mental model kode berubah: hilangnya boilerplate `useEffect`, hilangnya loading state client yang berlebihan, dan simplifikasi arsitektur data.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        {snippets.map((snip, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSnippet(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeSnippet === idx
                ? "bg-indigo-600 text-white font-bold"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {snip.title}
          </button>
        ))}
      </div>

      {/* Dual Code Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next.js Box */}
        <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 overflow-hidden shadow-xl">
          <div className="px-4 py-3 bg-slate-900 border-b border-indigo-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-indigo-500 inline-block" />
              <span className="text-xs font-mono font-bold text-white">Next.js App Router</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                Server-First
              </span>
            </div>
            <button
              onClick={() => handleCopy(current.nextjs, "nextjs")}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors text-xs flex items-center space-x-1"
            >
              {copiedSide === "nextjs" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-indigo-200 overflow-x-auto leading-relaxed max-h-96">
            <code>{current.nextjs}</code>
          </pre>
        </div>

        {/* Pure React Box */}
        <div className="rounded-2xl border border-amber-500/30 bg-slate-950 overflow-hidden shadow-xl">
          <div className="px-4 py-3 bg-slate-900 border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
              <span className="text-xs font-mono font-bold text-white">Pure React SPA (Vite)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                Client-First
              </span>
            </div>
            <button
              onClick={() => handleCopy(current.nonNext, "nonNext")}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors text-xs flex items-center space-x-1"
            >
              {copiedSide === "nonNext" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-amber-200/90 overflow-x-auto leading-relaxed max-h-96">
            <code>{current.nonNext}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
