import { DATA_PLANS_SNAPSHOT } from "@/lib/data-plans-snapshot";
import { normalizePayload } from "@/lib/data-plans";

/**
 * Proxy for the Wakasub app's public data-plan feed.
 *
 * Keeps the upstream host out of the browser, adds a shared cache in front of it,
 * and falls back to the bundled snapshot so the pricing table on the landing page
 * can never render empty.
 *
 * Point `DATA_PLANS_API_URL` at the local app API during development
 * (http://localhost:3000/api/public/v1/data-plans).
 */

const UPSTREAM =
  process.env.DATA_PLANS_API_URL ?? "https://app.wakasub.com/api/public/v1/data-plans";

const ONE_HOUR = 3600;

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(UPSTREAM, {
      headers: { accept: "application/json" },
      next: { revalidate: ONE_HOUR },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);

    const payload = normalizePayload(await res.json());
    if (!payload) throw new Error("unexpected upstream shape");

    return json({ ...payload, source: "live" as const });
  } catch {
    return json({ ...DATA_PLANS_SNAPSHOT, source: "snapshot" as const }, 200);
  }
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "cache-control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=86400`,
    },
  });
}
