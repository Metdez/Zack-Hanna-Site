import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FluidBackground from "@/components/FluidBackground";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

const SITE_URL = "https://zackhanna.com";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE = "Zack Hanna — Builder, Founder, AI Strategist";
const SITE_DESCRIPTION =
  "Zack Hanna is a sophomore, builder, and AI strategist. Founder of Licom AI. Building software that solves real business problems — seeking a Summer 2026 AI strategy role.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Zack Hanna",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Zack Hanna Portfolio",
  authors: [{ name: "Zack Hanna", url: SITE_URL }],
  creator: "Zack Hanna",
  publisher: "Zack Hanna",
  keywords: [
    "Zack Hanna",
    "AI strategist",
    "AI strategy intern",
    "Summer 2026 internship",
    "Licom AI",
    "CST Logistics",
    "builder",
    "founder",
    "Next.js developer",
    "AI consulting",
    "full-stack developer",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Zack Hanna",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/zack.jpg",
        alt: "Zack Hanna — Builder, Founder, AI Strategist",
      },
    ],
    locale: "en_US",
    firstName: "Zack",
    lastName: "Hanna",
    username: "zackhanna",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/zack.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

// Build the JSON-LD @graph once at module load. Combines Person (primary entity),
// WebSite, ProfilePage (with section anchors as hasPart), and CreativeWork nodes
// for each project pulled from lib/projects.ts — keeps schema in sync with data.
// This is the AEO core: answer engines (ChatGPT, Perplexity, Google AI Overviews,
// Claude, Gemini) rely on structured data to decide whom to cite.
const PERSON_ID = `${SITE_URL}/#person`;

const projectNodes = projects.map((p) => ({
  "@type": "CreativeWork",
  name: p.name,
  description: p.description,
  creator: { "@id": PERSON_ID },
  url: p.link ? `https://${p.link.replace(/^https?:\/\//, "")}` : SITE_URL,
  ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
}));

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Zack Hanna",
      url: SITE_URL,
      image: `${SITE_URL}/zack.jpg`,
      jobTitle: "Founder & AI Strategist",
      description:
        "Builder, founder, and AI strategist. Founder of Licom AI. Seeking a Summer 2026 AI strategy role.",
      worksFor: {
        "@type": "Organization",
        name: "Licom AI",
        url: "https://licom.ai",
      },
      knowsAbout: [
        "AI strategy",
        "Software engineering",
        "Next.js",
        "Full-stack development",
        "Product design",
        "Business automation",
        "AI consulting",
      ],
      sameAs: ["https://github.com/Metdez", "https://licom.ai"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Zack Hanna",
      description:
        "Portfolio of Zack Hanna — builder, founder, AI strategist.",
      publisher: { "@id": PERSON_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en-US",
      hasPart: [
        { "@type": "WebPageElement", name: "What I Do", url: `${SITE_URL}/#what-i-do` },
        { "@type": "WebPageElement", name: "Projects", url: `${SITE_URL}/#built` },
        { "@type": "WebPageElement", name: "How I Work", url: `${SITE_URL}/#how-i-work` },
        { "@type": "WebPageElement", name: "Looking For", url: `${SITE_URL}/#looking-for` },
        { "@type": "WebPageElement", name: "About", url: `${SITE_URL}/#about` },
        { "@type": "WebPageElement", name: "Contact", url: `${SITE_URL}/#contact` },
      ],
    },
    ...projectNodes,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="text-pearl grain relative">
        <FluidBackground />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        {/* Google Analytics 4 — G-3E4H6MRC48 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3E4H6MRC48"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3E4H6MRC48');
            `,
          }}
        />
      </body>
    </html>
  );
}
