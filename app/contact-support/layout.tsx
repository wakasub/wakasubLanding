import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Need help with Wakasub? Contact our support team about airtime, data, bill payments, giveaways or your account. We typically reply within a few hours.",
  alternates: {
    canonical: "https://wakasub.com/contact-support",
  },
};

export default function ContactSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
