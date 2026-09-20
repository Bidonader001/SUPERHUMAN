import { siteUrl } from "@/lib/url";
import type { Metadata, Viewport } from "next";
import { CookieNotice, Floating, Footer, Header } from "@/components/Chrome";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Superhuman Program | Built for War | Omar Zoromba",
    template: "%s | Superhuman Program",
  },
  description:
    "Elite hybrid training by Omar Zoromba. Strength, endurance, HYROX, swimming, calisthenics, and online coaching from New Cairo, Egypt — available worldwide.",
  keywords: [
    "Online fitness coach Egypt",
    "Hybrid training program Egypt",
    "HYROX coach Egypt",
    "HYROX training program",
    "Running coach Egypt",
    "Swimming strength coach",
    "Finswimming coach",
    "Online personal trainer Egypt",
    "Hybrid athlete program",
    "Calisthenics and running program",
    "Women’s glute training program",
    "Sport-specific strength and conditioning",
    "Omar Zoromba",
    "Superhuman Program",
    "Superhuman Built for War",
  ],
  openGraph: {
    title: "Superhuman Program — Become more than fit.",
    description: "A complete performance system by Omar Zoromba. Built for War.",
    images: ["/images/logo-navy.jpg"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.fullName,
      slogan: site.tagline,
      email: site.email,
      address: { "@type": "PostalAddress", addressLocality: "New Cairo", addressCountry: "EG" },
    },
    {
      "@type": "Person",
      name: site.founder,
      jobTitle: "Founder and Head Coach",
      affiliation: site.fullName,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Oswald:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Floating />
        <CookieNotice />
      </body>
    </html>
  );
}
