import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wakasub.com"),
  title: {
    default: "Wakasub — Buy Airtime, Data & Pay Bills in Nigeria",
    template: "%s | Wakasub",
  },
  description:
    "Wakasub is Nigeria's fastest VTU platform. Buy MTN, Airtel, Glo and 9mobile airtime & data bundles, pay DSTV, GOtv, electricity bills, and send automated airtime & data giveaways to your whole squad. Trusted by 50,000+ Nigerians.",
  keywords: [
    "VTU Nigeria",
    "buy airtime Nigeria",
    "buy data Nigeria",
    "MTN airtime",
    "Airtel data bundle",
    "Glo data Nigeria",
    "9mobile data",
    "DSTV subscription Nigeria",
    "GOtv subscription",
    "electricity bill payment Nigeria",
    "EKEDC payment",
    "IKEDC payment",
    "airtime giveaway Nigeria",
    "data giveaway Nigeria",
    "Wakasub",
    "bill payment Nigeria",
    "recharge card Nigeria",
    "virtual top up Nigeria",
    "cheapest data Nigeria",
    "bulk airtime Nigeria",
    "automated airtime distribution",
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
    title: "Wakasub — Buy Airtime, Data & Pay Bills in Nigeria",
    description:
      "Nigeria's fastest VTU platform. Buy airtime, data bundles, pay DSTV, GOtv, electricity bills and send automated airtime & data giveaways to your whole squad.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wakasub — Nigeria's Digital Services Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wakasub — Buy Airtime, Data & Pay Bills in Nigeria",
    description:
      "Nigeria's fastest VTU platform. Buy airtime, data, pay bills and send automated airtime & data giveaways to 100 people at once.",
    images: ["/og-image.png"],
    creator: "@wakasub",
  },
  alternates: {
    canonical: "https://wakasub.com",
  },
  manifest: "/manifest.json",
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
        "Nigeria's trusted VTU platform for airtime, data, cable TV subscriptions, electricity bills and automated airtime & data giveaways.",
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
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
