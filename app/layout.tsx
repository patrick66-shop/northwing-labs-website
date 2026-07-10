import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

/*
 * Brand typography (docs/04_Typography_System.md):
 * Manrope — display: hero, H1–H3, eyebrows, metrics (weights 600–800)
 * Inter — functional: body, nav, buttons, forms, captions (weights 400–600)
 * Both are variable fonts, self-hosted by next/font: all approved weights
 * are available from a single file with no layout shift and size-adjusted
 * system fallbacks.
 */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Canonical domain: set NEXT_PUBLIC_SITE_URL in the deployment environment.
 * The fallback is a placeholder pending the confirmed production domain. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.northwinglabs.com";

/* Description uses approved hero supporting copy from docs/WEBSITE-CONTENT.md */
const siteDescription =
  "NorthWing Labs builds custom software, AI tools, and automations that help small businesses save time, reduce manual work, and operate more efficiently.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NorthWing Labs",
    template: "%s | NorthWing Labs",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: "NorthWing Labs",
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/images/social/northwing-social-share-default.png",
        width: 1536,
        height: 1024,
        alt: "NorthWing Labs — Software, AI, and Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthWing Labs",
    description: siteDescription,
    images: ["/images/social/northwing-social-share-default.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicons/favicon.ico", sizes: "any" },
      { url: "/brand/favicons/northwing-favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicons/northwing-favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicons/northwing-favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/favicons/northwing-favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/favicons/northwing-favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/brand/favicons/northwing-favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
