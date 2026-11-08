import type React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { TikTokPixel } from "@/components/tiktok-pixel";
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Wakasub — The Rewards Hub of Nigeria" }],
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
    images: ["/twitter-image"],
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

/**
 * TikTok Pixel ID. Overridable per-environment so a staging deploy can point at
 * a test pixel (or an empty string to disable) without a code change.
 */
const TIKTOK_PIXEL_ID =
  process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "DBO4B0BC77UENJ6BS4M0";

const tiktokPixelSnippet = `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

  ttq.load(${JSON.stringify(TIKTOK_PIXEL_ID)});
  ttq.page();
}(window, document, 'ttq');
`;

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

        {/* TikTok Pixel — server-rendered so it fires before hydration, which
            is what TikTok's own install instructions assume. Route changes and
            CTA events are handled by <TikTokPixel /> below. */}
        {TIKTOK_PIXEL_ID ? (
          <script dangerouslySetInnerHTML={{ __html: tiktokPixelSnippet }} />
        ) : null}
      </head>
      <body
        className={`${poppins.variable} ${bricolage.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
        <TikTokPixel />
      </body>
    </html>
  );
}
