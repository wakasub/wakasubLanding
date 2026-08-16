import "server-only";

import { DATA_PLANS_SNAPSHOT } from "./data-plans-snapshot";
import { normalizePayload, type DataPlansPayload, type DataPlansSource } from "./data-plans";

/**
 * Server-side read of the public data-plan feed.
 *
 * Called during render, so the pricing table ships in the HTML with real prices
 * — no snapshot flash, and crawlers see the live list. The result is cached for
 * REVALIDATE_SECONDS and tagged, so `/api/revalidate` can drop it the moment the
 * app's prices change instead of waiting out the window.
 *
 * Set `DATA_PLANS_API_URL` wherever the public API is deployed; the bundled
 * snapshot stands in whenever the upstream is unreachable or malformed.
 */

const UPSTREAM =
  process.env.DATA_PLANS_API_URL ?? "https://app.wakasub.com/api/public/v1/data-plans";

/** Matches the feed's own `s-maxage=300`, so we never serve staler than it does. */
const REVALIDATE_SECONDS = 300;

export const DATA_PLANS_TAG = "data-plans";

export type DataPlansResult = {
  payload: DataPlansPayload;
  source: DataPlansSource;
};

export async function getDataPlans(): Promise<DataPlansResult> {
  try {
    const res = await fetch(UPSTREAM, {
      headers: { accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS, tags: [DATA_PLANS_TAG] },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);

    const payload = normalizePayload(await res.json());
    if (!payload) throw new Error("unexpected upstream shape");

    return { payload, source: "live" };
  } catch {
    return { payload: DATA_PLANS_SNAPSHOT, source: "snapshot" };
  }
}
