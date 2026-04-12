import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FluidBackground from "@/components/FluidBackground";
import Nav from "@/components/Nav";
import { projects } from "@/lib/projects";

const SITE_URL = "https://www.zackhanna.com";
const PERSON_ID = `${SITE_URL}/#person`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_PAGE_ID = `${SITE_URL}/#profilepage`;
const PROFILE_CREATED_AT = "2026-04-11";
const PROFILE_UPDATED_AT = "2026-04-12";

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

const projectId = (name: string) =>
  `${SITE_URL}/#project-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

// Build the JSON-LD @graph once at module load. Combines Person (primary entity),
// Organization, WebSite, ProfilePage, and CreativeWork nodes so metadata stays in
// sync with the visible homepage content while giving crawlers cleaner entity links.
const projectNodes = projects.map((p) => ({
  "@id": projectId(p.name),
  "@type": "CreativeWork",
  name: p.name,
  description: p.description,
  creator: { "@id": PERSON_ID },
  isPartOf: { "@id": PROFILE_PAGE_ID },
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
      givenName: "Zack",
      familyName: "Hanna",
      jobTitle: "Founder & AI Strategist",
      description:
        "Builder, founder, and AI strategist. Founder of Licom AI. Seeking a Summer 2026 AI strategy role.",
      mainEntityOfPage: { "@id": `${SITE_URL}/#profilepage` },
      worksFor: { "@id": ORGANIZATION_ID },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Hobart and William Smith",
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
      sameAs: [
        "https://github.com/Metdez",
        "https://www.linkedin.com/in/zackary-hanna-515138331/",
      ],
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Licom AI",
      url: "https://licom.ai",
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Zack Hanna",
      description:
        "Portfolio of Zack Hanna — builder, founder, AI strategist.",
      publisher: { "@id": PERSON_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_PAGE_ID,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      mainEntity: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en-US",
      dateCreated: PROFILE_CREATED_AT,
      dateModified: PROFILE_UPDATED_AT,
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
