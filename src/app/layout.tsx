import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CodeCursor } from "@/components/CodeCursor";
import { ownerData } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarkbharti.com"),
  title: `${ownerData.fullName} — ${ownerData.role}`,
  description: ownerData.tagline,
  keywords: [
    "Aark Bharti",
    "Full Stack Developer",
    "Product Engineer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "UpBuilt",
  ],
  authors: [{ name: ownerData.fullName }],
  creator: ownerData.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aarkbharti.com",
    title: `${ownerData.fullName} — ${ownerData.role}`,
    description: ownerData.tagline,
    siteName: ownerData.fullName,
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: ownerData.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ownerData.fullName} — ${ownerData.role}`,
    description: ownerData.tagline,
    images: ["/profile.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: ownerData.fullName,
  jobTitle: ownerData.role,
  url: "https://aarkbharti.com",
  image: "https://aarkbharti.com/profile.jpg",
  sameAs: [ownerData.github, ownerData.linkedin, ownerData.twitter],
  description: ownerData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-neutral-800 selection:text-white">
        <ThemeProvider>
          <CodeCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
