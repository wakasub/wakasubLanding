"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

/**
 * WhatsApp entry points — the reseller community group and the support line.
 *
 * Both live here so the number, the invite link and the brand green are stated
 * once. WhatsApp green is the one colour outside the site palette that earns its
 * place: people scan for it, and a blue "WhatsApp" button reads as a mistake.
 */

/** Reseller community invite. */
export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/GiurYkD9QJe7BCXH1Kegn3";

/** Support line in international format, as wa.me requires. */
export const WHATSAPP_SUPPORT_NUMBER = "2347067902081";
export const WHATSAPP_SUPPORT_DISPLAY = "0706 790 2081";

export function whatsappChatUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

type WhatsAppButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  /** "solid" is WhatsApp green; "outline" borrows the surface it sits on. */
  variant?: "solid" | "outline";
};

export function WhatsAppButton({
  href,
  children,
  className,
  variant = "solid",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-neu group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] transition-all",
        variant === "solid"
          ? "bg-[#25D366] text-[#0B141A] hover:bg-[#1FBF5B]"
          : "border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#0B141A]",
        className,
      )}
    >
      <WhatsAppIcon size={18} className="shrink-0" />
      {children}
    </Link>
  );
}
