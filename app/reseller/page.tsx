import type { Metadata } from "next";
import { ResellerContent } from "@/components/reseller-content";

export const metadata: Metadata = {
  title: "Become a VTU Reseller — Best Airtime & Data Rates in Nigeria",
  description:
    "Join the Wakasub VTU reseller program. Resell airtime, data, cable TV and electricity at Nigeria's best wholesale rates with instant delivery on every network, a developer API, and 24/7 support. Free to join.",
  keywords: [
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
  alternates: {
    canonical: "https://wakasub.com/reseller",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://wakasub.com/reseller",
    siteName: "Wakasub",
    title: "Become a VTU Reseller — Best Airtime & Data Rates in Nigeria",
    description:
      "Resell airtime, data, cable TV and electricity at Nigeria's best wholesale rates. Instant delivery, developer API, free to join.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a VTU Reseller — Best Rates in Nigeria | Wakasub",
    description:
      "Resell airtime, data and bills at Nigeria's best wholesale rates with instant delivery on every network.",
  },
};

const resellerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://wakasub.com/reseller#service",
      name: "Wakasub VTU Reseller Program",
      serviceType: "VTU airtime, data and bill payment reseller platform",
      url: "https://wakasub.com/reseller",
      provider: { "@id": "https://wakasub.com/#organization" },
      areaServed: { "@type": "Country", name: "Nigeria" },
      description:
        "Resell airtime, data, cable TV and electricity at Nigeria's best wholesale rates with instant, automated delivery on every network — plus a developer API to power your own VTU business.",
      offers: {
        "@type": "Offer",
        priceCurrency: "NGN",
        price: "0",
        description:
          "Free to join. Fund your wallet and resell at discounted wholesale rates.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://wakasub.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Become a reseller",
          item: "https://wakasub.com/reseller",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://wakasub.com/reseller#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Wakasub reseller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Wakasub reseller buys airtime, data, cable TV and electricity at discounted wholesale rates and resells them to customers, keeping the margin on every transaction.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to become a VTU reseller on Wakasub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Signing up is completely free. You only fund your wallet with the amount you want to start selling — there are no setup, activation or monthly fees.",
          },
        },
        {
          "@type": "Question",
          name: "Which services can I resell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Airtime and data for MTN, Airtel, Glo and 9mobile, plus cable TV (DStv, GOtv, StarTimes), electricity for every disco, and recharge and exam pins.",
          },
        },
        {
          "@type": "Question",
          name: "How fast are reseller transactions delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Top-ups are delivered instantly and automatically, 24/7, across every Nigerian network — so your customers are served the moment they pay.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a reseller API?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Developers can integrate the Wakasub VTU API to automate airtime, data, cable TV and electricity payments inside their own app, website or business.",
          },
        },
        {
          "@type": "Question",
          name: "How do I fund my reseller wallet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fund instantly with a bank transfer or debit card from your dashboard, and your balance is ready to sell right away.",
          },
        },
      ],
    },
  ],
};

export default function ResellerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resellerJsonLd) }}
      />
      <ResellerContent />
    </>
  );
}
