export interface WebsiteCaseStudy {
  id: string;
  name: string;
  url: string;
  usesNextJs: boolean;
  category: "E-Commerce" | "Social & Media" | "Productivity & SaaS" | "Developer & Tech" | "Heavy Compute & Graphics";
  architectureType: "Next.js App Router (SSR/ISR/RSC)" | "Next.js Pages Router" | "Traditional MPA (Rails/Django/PHP)" | "Client SPA (Vite/React/Vue)" | "WASM / Canvas Engine" | "Custom Internal Framework";
  actualTechStack: string[];
  trafficScale: string;
  architecturalWhy: string;
  whyNotOpposite: string;
  keyFeatures: string[];
  metrics: {
    seoCriticality: "Critical" | "High" | "Medium" | "Low";
    initialLoadScore: number; // 0-100
    interactivityDepth: number; // 0-100
    bundleOverhead: "Very Low" | "Low" | "Medium" | "High";
  };
}

export const REAL_WORLD_SITES: WebsiteCaseStudy[] = [
  // --- USING NEXT.JS ---
  {
    id: "tiktok-web",
    name: "TikTok (Web Version)",
    url: "https://www.tiktok.com",
    usesNextJs: true,
    category: "Social & Media",
    architectureType: "Next.js App Router (SSR/ISR/RSC)",
    actualTechStack: ["Next.js", "React", "Node.js SSR", "Custom CDN Edge"],
    trafficScale: "1B+ Monthly Active Users",
    architecturalWhy: "TikTok Web butuh Server-Side Rendering (SSR) super kencang supaya setiap video slug (`/@user/video/123`) punya OpenGraph metadata, title, dan thumbnail instan saat di-share ke WhatsApp, Twitter, atau Telegram.",
    whyNotOpposite: "Kalau pakai pure Client SPA (Vite), link video yang di-share gak bakal muncul preview thumbnail-nya di WhatsApp/iMessage karena bot scraper gak nge-execute Javascript.",
    keyFeatures: ["Dynamic OpenGraph SSR", "Edge Streaming", "Incremental Static Regeneration", "Sub-second TTFB"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 94,
      interactivityDepth: 88,
      bundleOverhead: "Medium",
    },
  },
  {
    id: "notion-marketing",
    name: "Notion (Public Web & Docs)",
    url: "https://www.notion.so",
    usesNextJs: true,
    category: "Productivity & SaaS",
    architectureType: "Next.js Pages Router",
    actualTechStack: ["Next.js", "React", "TypeScript", "Vercel Edge"],
    trafficScale: "100M+ Monthly Visits",
    architecturalWhy: "Halaman landing, template directory, dan help documentation Notion butuh Static Site Generation (SSG) + ISR dengan indexing SEO maksimal di Google Search tanpa beban render database per request.",
    whyNotOpposite: "Aplikasi internal Notion memang pakai custom client React, tapi seluruh public-facing pages mereka percayakan ke Next.js untuk indexability dan Core Web Vitals.",
    keyFeatures: ["SSG pre-rendered templates", "SEO indexing", "Edge caching", "Optimized Web Vitals"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 96,
      interactivityDepth: 75,
      bundleOverhead: "Low",
    },
  },
  {
    id: "twitch-mobile-web",
    name: "Twitch (Mobile Web & Landing)",
    url: "https://m.twitch.tv",
    usesNextJs: true,
    category: "Social & Media",
    architectureType: "Next.js App Router (SSR/ISR/RSC)",
    actualTechStack: ["Next.js", "React", "GraphQL", "Amazon IVS Player"],
    trafficScale: "500M+ Monthly Visits",
    architecturalWhy: "Memungkinkan low-bandwidth mobile users untuk langsung melihat stream title, streamer info, dan offline posters via HTML SSR sebelum JavaScript player berat di-download dan di-hydrate.",
    whyNotOpposite: "Pure SPA bikin blank white screen di koneksi 3G/4G lambat selama berdetik-detik sebelum bundle JS game streaming diunduh.",
    keyFeatures: ["Progressive hydration", "Fast First Contentful Paint", "SEO streamer bio", "Edge asset proxy"],
    metrics: {
      seoCriticality: "High",
      initialLoadScore: 90,
      interactivityDepth: 95,
      bundleOverhead: "Medium",
    },
  },
  {
    id: "nike-store",
    name: "Nike e-Commerce",
    url: "https://www.nike.com",
    usesNextJs: true,
    category: "E-Commerce",
    architectureType: "Next.js App Router (SSR/ISR/RSC)",
    actualTechStack: ["Next.js", "React", "Akamai CDN", "GraphQL Microservices"],
    trafficScale: "150M+ Monthly Visits",
    architecturalWhy: "E-Commerce raksasa dengan jutaan SKU produk. Katalog sneakers butuh crawlability Google 100%, high conversion rate, dan Next.js Image Optimization untuk kompresi WebP/AVIF otomatis.",
    whyNotOpposite: "Toko online yang lambat 1 detik kehilangan jutaan dolar revenue. Next.js memberikan SSR cacheable di Edge CDN dengan per-product metadata.",
    keyFeatures: ["Next.js Image Component", "E-commerce SEO schema", "Global CDN routing", "RSC zero-bundle components"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 92,
      interactivityDepth: 85,
      bundleOverhead: "Medium",
    },
  },
  {
    id: "chatgpt-ui",
    name: "ChatGPT / OpenAI Platform",
    url: "https://chatgpt.com",
    usesNextJs: true,
    category: "Productivity & SaaS",
    architectureType: "Next.js App Router (SSR/ISR/RSC)",
    actualTechStack: ["Next.js", "React", "Tailwind CSS", "Server-Sent Events (SSE)"],
    trafficScale: "2B+ Monthly Visits",
    architecturalWhy: "OpenAI memakai Next.js untuk seluruh interface ChatGPT dan web platform: streaming text response, clean routing, session management terintegrasi, dan initial authenticated layout caching.",
    whyNotOpposite: "Next.js menyediakan arsitektur fullstack terstruktur yang siap handle jutaan concurrent sessions dengan developer experience yang cepat.",
    keyFeatures: ["Streaming responses", "Dynamic session routing", "App Router layouts", "Fast client navigation"],
    metrics: {
      seoCriticality: "Medium",
      initialLoadScore: 95,
      interactivityDepth: 98,
      bundleOverhead: "Low",
    },
  },
  {
    id: "vercel-platform",
    name: "Vercel & Next.js Ecosystem",
    url: "https://vercel.com",
    usesNextJs: true,
    category: "Developer & Tech",
    architectureType: "Next.js App Router (SSR/ISR/RSC)",
    actualTechStack: ["Next.js 15", "React 19 Server Components", "Tailwind CSS", "Vercel Edge Network"],
    trafficScale: "50M+ Monthly Visits",
    architecturalWhy: "Showcase utama arsitektur Next.js: Server Components murni untuk render dashboard analytics tanpa kirim JS ke client, zero layout shift, dan instant page prefetching.",
    whyNotOpposite: "Sebagai creator Next.js, mereka membuktikan performa enterprise grade RSC & Edge Runtime di level global.",
    keyFeatures: ["React Server Components", "Server Actions", "Streaming Suspense", "Instant Prefetching"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 99,
      interactivityDepth: 92,
      bundleOverhead: "Very Low",
    },
  },

  // --- NOT USING NEXT.JS ---
  {
    id: "github-web",
    name: "GitHub.com",
    url: "https://github.com",
    usesNextJs: false,
    category: "Developer & Tech",
    architectureType: "Traditional MPA (Rails/Django/PHP)",
    actualTechStack: ["Ruby on Rails", "Turbo / Hotwire", "Vanilla Web Components", "Primer CSS"],
    trafficScale: "450M+ Monthly Visits",
    architecturalWhy: "GitHub dibangun di atas monolit Ruby on Rails berkekuatan tinggi dengan arsitektur HTML-over-the-wire (Turbo) dan Web Components. Mereka merender HTML di server Rails dan swap fragment DOM secara instan tanpa framework JS berat.",
    whyNotOpposite: "Mengapa BUKAN Next.js? Menghindari complexity ekosistem Node.js/React hydration overhead untuk jutaan baris diff kode, serta menjaga uptime dan arsitektur monolit Rails yang sudah mature selama belasan tahun.",
    keyFeatures: ["Zero React bundle overhead", "HTML server fragments", "Instant keyboard navigation", "Ultra-lightweight DOM"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 98,
      interactivityDepth: 86,
      bundleOverhead: "Very Low",
    },
  },
  {
    id: "youtube-web",
    name: "YouTube",
    url: "https://www.youtube.com",
    usesNextJs: false,
    category: "Social & Media",
    architectureType: "Custom Internal Framework",
    actualTechStack: ["Google Wiz & Polymer", "Custom Web Components", "Protobuf RPC", "Bespoke DOM Engine"],
    trafficScale: "30B+ Monthly Visits",
    architecturalWhy: "YouTube menggunakan framework internal Google bernama Wiz (yang kini berevolusi dengan Angular). Wiz dirancang khusus untuk video streaming super cepat: merender HTML awal di server, tapi TIDAK melakukan rehydration Javascript berat ke seluruh tree sampai elemen itu diklik.",
    whyNotOpposite: "Next.js/React tradisional melakukan hydration overhead yang terlalu berat untuk skala DOM ribuan video recommendation list di YouTube.",
    keyFeatures: ["Click-to-hydrate (resumability)", "Protobuf payload", "Engineered custom player", "Minimal memory footprint"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 93,
      interactivityDepth: 99,
      bundleOverhead: "Low",
    },
  },
  {
    id: "figma-web",
    name: "Figma (Web Canvas Editor)",
    url: "https://www.figma.com",
    usesNextJs: false,
    category: "Heavy Compute & Graphics",
    architectureType: "WASM / Canvas Engine",
    actualTechStack: ["WebAssembly (WASM)", "C++ / Rust Core", "WebGL / WebGPU", "Thin React UI Wrapper"],
    trafficScale: "80M+ Monthly Visits",
    architecturalWhy: "Figma bukan aplikasi dokumen web biasa! Seluruh kanvas desain adalah kompilasi C++ ke WebAssembly yang merender langsung ke WebGL Canvas 60 FPS, memproses jutaan vector node secara real-time di memori biner.",
    whyNotOpposite: "Next.js SSR atau DOM-based tree rendering sama sekali tidak berguna untuk kanvas rendering grafis 60fps. Next.js hanya cocok untuk web konten/dokumen, bukan canvas game-loop engine.",
    keyFeatures: ["WebAssembly 60 FPS Engine", "Multiplayer CRDT binary sync", "WebGL hardware acceleration", "Memory-mapped files"],
    metrics: {
      seoCriticality: "Low",
      initialLoadScore: 82,
      interactivityDepth: 100,
      bundleOverhead: "High",
    },
  },
  {
    id: "twitter-x",
    name: "X / Twitter",
    url: "https://x.com",
    usesNextJs: false,
    category: "Social & Media",
    architectureType: "Client SPA (Vite/React/Vue)",
    actualTechStack: ["React Native for Web", "Custom Express/Node SSR", "Redux Toolkit", "GraphQL API"],
    trafficScale: "4B+ Monthly Visits",
    architecturalWhy: "X memakai 'React Native for Web' (awalnya dibuat oleh Nicolas Gallagher). Ini memungkinkan tim engineering mereka berbagi 80%+ kode UI komponen antara iOS, Android, dan Web browser.",
    whyNotOpposite: "Next.js tidak natively dioptimalkan untuk cross-platform React Native code-sharing lintas native mobile OS seperti RN-Web stack khusus X.",
    keyFeatures: ["Cross-platform React Native Web", "Infinite virtualized feed list", "WebSocket real-time push", "Custom media pipeline"],
    metrics: {
      seoCriticality: "High",
      initialLoadScore: 89,
      interactivityDepth: 94,
      bundleOverhead: "Medium",
    },
  },
  {
    id: "linear-app",
    name: "Linear (Issue Tracker)",
    url: "https://linear.app",
    usesNextJs: false,
    category: "Productivity & SaaS",
    architectureType: "Client SPA (Vite/React/Vue)",
    actualTechStack: ["React", "Custom Local-First Sync Engine", "IndexedDB SQLite", "WebSocket Sync"],
    trafficScale: "15M+ Monthly Visits",
    architecturalWhy: "Linear adalah poster-child untuk arsitektur Local-First Client SPA. Seluruh database issue di-sync ke IndexedDB client saat login, sehingga search, navigasi, dan filter berjalan dalam 0 milidetik (sub-frame 16ms) offline tanpa request server sama sekali.",
    whyNotOpposite: "Arsitektur SSR Next.js yang bolak-balik request ke server justru menghambat filosofi 0ms instant-latency Linear.",
    keyFeatures: ["Local-First IndexedDB sync", "Sub-16ms instant UI", "Offline-first capability", "Custom delta synchronization"],
    metrics: {
      seoCriticality: "Low",
      initialLoadScore: 85,
      interactivityDepth: 100,
      bundleOverhead: "Medium",
    },
  },
  {
    id: "wikipedia-org",
    name: "Wikipedia",
    url: "https://www.wikipedia.org",
    usesNextJs: false,
    category: "Developer & Tech",
    architectureType: "Traditional MPA (Rails/Django/PHP)",
    actualTechStack: ["PHP (MediaWiki)", "Varnish Cache Cluster", "MariaDB", "Minimal Vanilla JS"],
    trafficScale: "15B+ Monthly Visits",
    architecturalWhy: "Wikipedia melayani miliaran manusia di seluruh penjuru dunia dengan koneksi 2G sekalipun. Mereka merender HTML murni dari server cluster MediaWiki dengan Varnish reverse-proxy cache agresif, nyaris 0 KB framework JavaScript.",
    whyNotOpposite: "Menambahkan Next.js dan React hydration ke Wikipedia akan memboroskan megawatt listrik server dan kuota bandwidth miliaran pengguna di negara berkembang.",
    keyFeatures: ["Near-zero JavaScript payload", "Massive Varnish edge cache", "Universal accessibility", "Sub-100ms global response"],
    metrics: {
      seoCriticality: "Critical",
      initialLoadScore: 99,
      interactivityDepth: 60,
      bundleOverhead: "Very Low",
    },
  },
];

export interface ArchitectureComparisonPoint {
  dimension: string;
  nextJsAppRouter: {
    description: string;
    pros: string[];
    cons: string[];
    verdict: string;
  };
  pureClientSpa: {
    description: string;
    pros: string[];
    cons: string[];
    verdict: string;
  };
  traditionalMpa: {
    description: string;
    pros: string[];
    cons: string[];
    verdict: string;
  };
}

export const COMPARISON_DIMENSIONS: ArchitectureComparisonPoint[] = [
  {
    dimension: "Search Engine Optimization (SEO) & Social Sharing",
    nextJsAppRouter: {
      description: "HTML dan OpenGraph tags di-render di server/edge sebelum dikirim ke client. Search bot dan chat preview bots (WhatsApp, Twitter, FB) langsung baca tag lengkap.",
      pros: ["100% crawlable oleh bot tanpa Javascript execution", "Dynamic OpenGraph preview gambar per halaman", "Sitemap & metadata built-in"],
      cons: ["Butuh compute server/edge (Vercel/Node/Docker)"],
      verdict: "Kemenangan mutlak untuk e-commerce, portal berita, dan website publik.",
    },
    pureClientSpa: {
      description: "Server cuma kirim satu file HTML kosong `div id='root' /div` + bundle JS besar. Browser client baru fetch data dan render DOM setelah JS selesai dieksekusi.",
      pros: ["Bisa di-host gratis di object storage statis (S3, Cloudflare Pages, GitHub Pages)"],
      cons: ["Bot chat (WA/Telegram) gak dapet preview OG", "Googlebot butuh antrean 'second wave indexing' untuk eksekusi JS"],
      verdict: "Bencana untuk public content marketing; oke hanya untuk dashboard private di balik login.",
    },
    traditionalMpa: {
      description: "Server (Laravel, Rails, Django, Go) merender full HTML per URL request dari database secara langsung.",
      pros: ["SEO sempurna secara native", "Nol overhead framework JS client"],
      cons: ["Navigasi antar halaman memicu reload browser penuh (full-page flash/reload) kecuali pakai Turbo/HTMX"],
      verdict: "Sangat solid untuk konten & dokumentasi.",
    },
  },
  {
    dimension: "First Contentful Paint (FCP) & Time to Interactive (TTI)",
    nextJsAppRouter: {
      description: "Streaming SSR + React Server Components (RSC). Komponen server tidak mengirim JavaScript ke browser sama sekali, hanya HTML terkompresi.",
      pros: ["FCP instan dengan server streaming HTML", "Client bundle JS jauh lebih kecil dari SPA biasa"],
      cons: ["Adanya fase 'Hydration' di mana tombol client belum interaktif selama 100-300ms pertama"],
      verdict: "Performa seimbang antara render visual cepat dan interaktivitas modern.",
    },
    pureClientSpa: {
      description: "User melihat layar putih (white screen) atau spinner loading sampai seluruh bundle bundle.js (bisa 2MB - 10MB) terunduh dan terurai di browser.",
      pros: ["Begitu JS selesai dimuat, transisi antar halaman internal instan"],
      cons: ["FCP sangat buruk di koneksi lambat atau HP spek kentang", "CPU client dipaksa kerja keras render DOM"],
      verdict: "Cocok untuk tool internal yang dibuka sekali lalu dipakai seharian.",
    },
    traditionalMpa: {
      description: "FCP sangat cepat karena browser langsung menerima HTML dan CSS murni.",
      pros: ["Zero TTI latency, link langsung bisa diklik instan"],
      cons: ["Latency network terasa di setiap klik karena request roundtrip baru ke server"],
      verdict: "Paling hemat konsumsi RAM di perangkat pengguna.",
    },
  },
  {
    dimension: "Developer Experience & Full-Stack Capabilities",
    nextJsAppRouter: {
      description: "File-system routing (`app/route/page.tsx`), Server Actions untuk form handling tanpa bikin API manual, built-in Image/Font optimization.",
      pros: ["Satu repo TypeScript dari frontend sampai edge API", "Zero-config bundler Turbopack"],
      cons: ["Learning curve RSC ('use client' vs 'use server') cukup curam", "Vercel vendor-lockin traps jika tidak hati-hati"],
      verdict: "Standar industri de-facto untuk modern web engineering.",
    },
    pureClientSpa: {
      description: "Setup super simpel dengan Vite (`npm create vite@latest`). Pure client logic, router via `react-router-dom`.",
      pros: ["Mental model sederhana: semua kode jalan di browser", "Mudah dipelajari pemula"],
      cons: ["Harus bikin backend API terpisah (Express/NestJS/FastAPI)", "Tantangan security env variables"],
      verdict: "Pilihan tercepat untuk prototipe hackathon atau utility tool murni.",
    },
    traditionalMpa: {
      description: "Ekosistem matang dengan ORM bawaan (Eloquent, ActiveRecord, Django ORM) dan tooling migrasi database 15+ tahun.",
      pros: ["Struktur arsitektur sangat baku dan stabil", "Batteries-included authentication & admin panel"],
      cons: ["Sulit membuat micro-interaction UI yang super mulus tanpa hybrid library (Alpine/React)"],
      verdict: "Sangat produktif untuk tim backend-heavy.",
    },
  },
];
