import type React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wakasub.com"),
  title: {
    default: "Wakasub — The Rewards Hub of Nigeria",
    template: "%s | Wakasub",
  },
  description:
    "Wakasub is the rewards hub of Nigeria. Reward your audience with airtime, data and cash in seconds — create a campaign, share one link, and your winners claim instantly. Influencers, group admins, brands and friends reward their people on rails that power millions of top-ups. Utilities (airtime, data, bills) are one tap away too.",
  keywords: [
    "rewards Nigeria",
    "airtime giveaway Nigeria",
    "data giveaway Nigeria",
    "cash giveaway Nigeria",
    "reward campaign Nigeria",
    "influencer giveaway tool",
    "WhatsApp group rewards",
    "instant airtime giveaway",
    "buy airtime Nigeria",
    "buy data Nigeria",
    "MTN airtime",
    "Airtel data bundle",
    "Glo data Nigeria",
    "9mobile data",
    "DSTV subscription Nigeria",
    "GOtv subscription",
    "electricity bill payment Nigeria",
    "Wakasub",
    "VTU Nigeria",
    "virtual top up Nigeria",
    "automated airtime distribution",
    "reward your audience",
    "become a VTU reseller Nigeria",
    "VTU reseller platform Nigeria",
    "best VTU prices Nigeria",
    "cheap data reseller Nigeria",
    "airtime reseller business",
    "data reseller Nigeria",
    "airtime and data API Nigeria",
    "VTU API Nigeria",
    "bulk airtime Nigeria",
    "wholesale airtime and data",
    "cable TV subscription reseller",
    "electricity bill payment API",
    "start a data reselling business Nigeria",
  ],
  authors: [{ name: "Wakasub Technologies Ltd" }],
  creator: "Wakasub Technologies Ltd",
  publisher: "Wakasub Technologies Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://wakasub.com",
    siteName: "Wakasub",
    title: "Wakasub — The Rewards Hub of Nigeria",
    description:
      "Reward your people with airtime, data and cash in seconds, and resell airtime & data at Nigeria's best rates. Create a campaign, share one link, or fund a reseller wallet — delivery is instant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wakasub — The Rewards Hub of Nigeria",
    description:
      "Reward your audience with airtime, data and cash in seconds, and resell at Nigeria's best VTU rates. Instant delivery on every network.",
    creator: "@wakasub",
  },
  alternates: {
    canonical: "https://wakasub.com",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/waka 512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/waka 180.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Wakasub",
  },
  category: "finance",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1020" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wakasub.com/#organization",
      name: "Wakasub Technologies Ltd",
      url: "https://wakasub.com",
      logo: {
        "@type": "ImageObject",
        url: "https://wakasub.com/icon-192.png",
        width: 192,
        height: 192,
      },
      description:
        "The rewards hub of Nigeria — reward your audience with airtime, data and cash in seconds via shareable campaigns, with airtime, data, cable TV and electricity utilities one tap away.",
      areaServed: { "@type": "Country", name: "Nigeria" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://wakasub.com/#website",
      url: "https://wakasub.com",
      name: "Wakasub",
      publisher: { "@id": "https://wakasub.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Wakasub",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NGN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "50000",
        bestRating: "5",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD as a plain script so it is server-rendered into the static HTML for crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${bricolage.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
