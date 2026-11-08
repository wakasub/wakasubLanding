"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Links that mean "this visitor is starting a Wakasub account". */
const SIGNUP_URL_PATTERN = /app\.wakasub\.com\/register/i;

/**
 * Where the TikTok click ID is parked between landing and click-through. A
 * visitor often reads /reseller or scrolls the pricing table before hitting a
 * CTA, and ?ttclid= is gone from the URL by then, so it has to be kept.
 */
const TTCLID_STORAGE_KEY = "wakasub:ttclid";

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

/** sessionStorage throws in some privacy modes; tracking must never break the page. */
function safeSessionGet(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSessionSet(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    /* private mode — forwarding just degrades to same-pageview only */
  }
}

/** The _ttp cookie the pixel SDK sets; the Events API uses it for match quality. */
function readTtp(): string | null {
  const match = document.cookie.match(/(?:^|;\s*)_ttp=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Carry TikTok's attribution identifiers onto a cross-domain signup link.
 *
 * The ad lands on wakasub.com but the account is created on app.wakasub.com.
 * Cookies and the ?ttclid= param do not cross that host boundary, so without
 * this the app has no way to tell TikTok which ad produced the signup and the
 * conversion lands unattributed.
 */
function decorateSignupLink(link: Element) {
  const rawHref = link.getAttribute("href");
  if (!rawHref) return;

  const ttclid = safeSessionGet(TTCLID_STORAGE_KEY);
  const ttp = readTtp();
  if (!ttclid && !ttp) return;

  try {
    const url = new URL(rawHref, window.location.href);
    // Idempotent: the same link can be clicked, navigated back to, clicked again.
    if (ttclid && !url.searchParams.has("ttclid")) {
      url.searchParams.set("ttclid", ttclid);
    }
    if (ttp && !url.searchParams.has("ttp")) {
      url.searchParams.set("ttp", ttp);
    }
    link.setAttribute("href", url.toString());
  } catch {
    /* malformed href — leave it exactly as authored */
  }
}

/**
 * Client-side half of the TikTok Pixel. The base snippet itself is
 * server-rendered into <head> by app/layout.tsx so it fires before hydration;
 * this component only adds what needs React: page views on client-side
 * navigation, cross-domain attribution, and the signup-intent event.
 */
export function TikTokPixel() {
  const pathname = usePathname();
  // The inline snippet already fires ttq.page() on first load, so the effect
  // below must skip its first run or the landing view is counted twice.
  const isFirstRender = useRef(true);

  // Capture ?ttclid= as early as possible — TikTok appends it to the ad's
  // destination URL, and it is the only link back to the specific ad.
  useEffect(() => {
    const ttclid = new URLSearchParams(window.location.search).get("ttclid");
    if (ttclid) safeSessionSet(TTCLID_STORAGE_KEY, ttclid);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.ttq?.page();
  }, [pathname]);

  // Every "Get started" / "Create a Campaign" CTA points at
  // app.wakasub.com/register, a different origin and so outside this pixel's
  // reach. One delegated listener decorates the link and reports the click,
  // instead of threading an onClick through a dozen components.
  useEffect(() => {
    function onActivate(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href]");
      if (!link) return;
      if (!SIGNUP_URL_PATTERN.test(link.getAttribute("href") ?? "")) return;

      // Runs before the browser reads href to navigate, so the rewrite applies
      // to this very click.
      decorateSignupLink(link);

      // content_name is nested in `contents`, matching the snippet TikTok
      // generates from this pixel's own funnel configuration. No content_type:
      // TikTok only accepts product/product_group/destination/hotel/flight
      // there, and the SDK warns on anything else.
      ttqTrack("ClickButton", {
        contents: [
          {
            // `contents` is TikTok's product-array schema and it warns when an
            // entry has no content_id. There is one thing being clicked here,
            // so the id is a constant rather than anything per-link.
            content_id: "signup_cta",
            content_name: link.textContent?.trim().slice(0, 80) || "Get started",
          },
        ],
        description: "Signup CTA on wakasub.com",
      });
    }

    document.addEventListener("click", onActivate, true);
    // Middle-click / "open in new tab" raises auxclick, not click.
    document.addEventListener("auxclick", onActivate, true);
    return () => {
      document.removeEventListener("click", onActivate, true);
      document.removeEventListener("auxclick", onActivate, true);
    };
  }, []);

  return null;
}
