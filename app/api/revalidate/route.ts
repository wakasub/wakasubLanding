import { revalidateTag } from "next/cache";
import { DATA_PLANS_TAG } from "@/lib/data-plans-server";

/**
 * POST /api/revalidate?tag=data-plans
 *
 * Lets the Wakasub app push a cache drop instead of waiting out the 5-minute
 * window: call this whenever plan prices change and the next request re-renders
 * the landing page against the fresh feed.
 *
 * Auth: `x-revalidate-secret` header (or `secret` query param) must match
 * REVALIDATE_SECRET. Without that env var set the route refuses everything,
 * so a missing secret can't silently become an open endpoint.
 */

const ALLOWED_TAGS = new Set([DATA_PLANS_TAG]);

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return Response.json({ revalidated: false, error: "not configured" }, { status: 503 });
  }

  const url = new URL(request.url);
  const provided = request.headers.get("x-revalidate-secret") ?? url.searchParams.get("secret");
  if (provided !== secret) {
    return Response.json({ revalidated: false, error: "unauthorized" }, { status: 401 });
  }

  const tag = url.searchParams.get("tag") ?? DATA_PLANS_TAG;
  if (!ALLOWED_TAGS.has(tag)) {
    return Response.json({ revalidated: false, error: "unknown tag" }, { status: 400 });
  }

  /* "max" expires every entry carrying the tag, whatever its own cache life. */
  revalidateTag(tag, "max");

  return Response.json({ revalidated: true, tag, now: Date.now() });
}
