"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Links that mean "this visitor is starting a Wakasub account". */
const SIGNUP_URL_PATTERN = /app\.wakasub\.com\/register/i;

type TtqParams = Record<string, unknown>;

interface Ttq {
  page: () => void;
  track: (event: string, params?: TtqParams, options?: TtqParams) => void;
  identify: (params: TtqParams) => void;
}

declare global {
  interface Window {
    ttq?: Ttq;
  }
}

/**
 * Fire a TikTok standard event. Safe to call before the pixel SDK has finished
 * loading — the inline stub queues calls — and a no-op during SSR or if the
 * script was blocked by an ad blocker.
 */
export function ttqTrack(event: string, params?: TtqParams) {
  if (typeof window === "undefined") return;
  window.ttq?.track(event, params);
}

/**
 * Client-side half of the TikTok Pixel. The base snippet itself is
 * server-rendered into <head> by app/layout.tsx so it fires before hydration;
 * this component only adds what needs React: page views on client-side
 * navigation, and a conversion signal on signup clicks.
 */
export function TikTokPixel() {
  const pathname = usePathname();
  // The inline snippet already fires ttq.page() on first load, so the effect
  // below must skip its first run or the landing view is counted twice.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.ttq?.page();
  }, [pathname]);

  // Every "Get started" / "Create a campaign" CTA on the site points at
  // app.wakasub.com/register, a different origin and so outside this pixel's
  // reach. One delegated listener reports the click as a conversion signal
  // here, instead of threading an onClick through a dozen components.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href]");
      if (!link) return;
      if (!SIGNUP_URL_PATTERN.test(link.getAttribute("href") ?? "")) return;
      // No content_type: TikTok only accepts product/product_group/
      // destination/hotel/flight there, and the SDK warns on anything else.
      ttqTrack("ClickButton", {
        content_name: link.textContent?.trim().slice(0, 80) || "Get started",
        description: "Signup CTA on wakasub.com",
      });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
