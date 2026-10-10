import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js vs Non-Next.js | Production Architecture & Teardown",
  description: "Comprehensive architectural comparison of websites using Next.js vs Non-Next.js (SPA, MPA, WASM). Real-world case studies, rendering simulation, and stack decision advisor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
