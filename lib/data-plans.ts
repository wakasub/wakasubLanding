/**
 * Shared types + helpers for the public data-plan pricing feed.
 *
 * Source: `GET {DATA_PLANS_API_URL}` (the Wakasub app's public API). The feed is
 * proxied through `/api/data-plans` so the browser never talks to the app API
 * directly and so a bundled snapshot can stand in when the upstream is down.
 */

export type OfferTag = "NEW" | "BEST_SELLER" | null;

export type RawPlan = {
  id: string;
  name: string;
  size_mb: number | null;
  size_label: string | null;
  validity: string | null;
  price: number;
  offer_tag: OfferTag;
};

export type PlanTypeGroup = {
  type: string;
  slug: string;
  plans: RawPlan[];
};

export type NetworkGroup = {
  network: string;
  types: PlanTypeGroup[];
};

export type DataPlansPayload = {
  meta: {
    version: string;
    currency: string;
    generated_at: string;
    count: number;
  };
  networks: NetworkGroup[];
};

/** A plan flattened out of the network/type tree, ready for the table. */
export type Plan = RawPlan & {
  network: string;
  type: string;
  typeSlug: string;
  /** Naira per gigabyte, or null when the feed has no size for the plan. */
  pricePerGb: number | null;
};

/**
 * The upstream response nests the payload under `data`, but the snapshot and the
 * proxy both hand back the payload itself. Accept either shape.
 */
export function normalizePayload(input: unknown): DataPlansPayload | null {
  if (!input || typeof input !== "object") return null;
  const root = input as Record<string, unknown>;
  const body = (root.data && typeof root.data === "object" ? root.data : root) as Record<string, unknown>;
  const networks = body.networks;
  if (!Array.isArray(networks) || networks.length === 0) return null;
  const meta = (root.meta ?? body.meta ?? {}) as DataPlansPayload["meta"];
  return { meta, networks: networks as NetworkGroup[] };
}

export function flattenPlans(payload: DataPlansPayload): Plan[] {
  const out: Plan[] = [];
  for (const network of payload.networks) {
    for (const group of network.types ?? []) {
      for (const plan of group.plans ?? []) {
        out.push({
          ...plan,
          network: network.network,
          type: group.type,
          typeSlug: group.slug,
          pricePerGb: plan.size_mb ? Math.round(plan.price / (plan.size_mb / 1024)) : null,
        });
      }
    }
  }
  return out;
}

/**
 * Validity strings arrive inconsistently ("1day", "2 DAYS", "7days (1 week)",
 * "Monthly", null). Fold them into one readable form.
 */
export function formatValidity(validity: string | null): string {
  if (!validity) return "—";
  const value = validity.trim().toLowerCase();

  const match = value.match(/^(\d+)\s*(day|week|month|year)s?/);
  if (match) {
    const amount = Number(match[1]);
    const unit = match[2];
    return `${amount} ${unit}${amount === 1 ? "" : "s"}`;
  }

  if (value.startsWith("month")) return "1 month";
  if (value.startsWith("week")) return "7 days";
  if (value.startsWith("day")) return "1 day";

  return validity;
}

const naira = new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 });

export function formatNaira(amount: number): string {
  return `₦${naira.format(amount)}`;
}

/** "1.5GB", "750MB", "1.5TB" — tidied up from the feed's size label. */
export function formatSize(plan: Pick<RawPlan, "size_label" | "size_mb">): string {
  const label = plan.size_label?.trim();
  if (label) return label.replace(/\s+/g, "").toUpperCase();
  if (!plan.size_mb) return "—";
  return plan.size_mb >= 1024 ? `${+(plan.size_mb / 1024).toFixed(2)}GB` : `${plan.size_mb}MB`;
}

/**
 * Plan names in the feed repeat the size, price, validity and network ("MTN
 * N4,500 10GB + 10mins - 30 days"). Strip everything the table already shows in
 * its own columns, and keep only what's left — the bit that actually tells two
 * same-size plans apart ("+10mins", "Youtube & Social", "5G Router", "Night").
 * Original casing is preserved so acronyms survive.
 */
export function planQualifier(plan: Plan): string | null {
  const cleaned = plan.name
    .replace(/\b\d+(\.\d+)?\s?(mb|gb|tb)\b/gi, " ") // sizes
    .replace(/\b[₦n]\s?[\d,]+(\.\d+)?/gi, " ") // N1,500 / ₦900
    .replace(/\b[\d,]+\s*naira\b/gi, " ") // 1,500 Naira
    .replace(/\b\d+\s*[-–]?\s*(day|week|month|year)s?\b/gi, " ") // 30 days / 2-Day
    .replace(/\b(daily|weekly|monthly|one\s?off|validity|bundle)\b/gi, " ")
    .replace(/\b(mtn|airtel|glo|9mobile|etisalat)\b/gi, " ")
    .replace(new RegExp(`\\b${escapeRegExp(plan.type)}\\b`, "gi"), " ")
    .replace(/\bdata\b/gi, " ")
    .replace(/\bplans?\b/gi, " ")
    .replace(/[()]/g, " ")
    .replace(/\s*[-–,]\s*/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/^[^A-Za-z0-9+]+/, "")
    .replace(/[^A-Za-z0-9%)]+$/, "")
    .trim();

  if (cleaned.length < 3) return null;
  return cleaned;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const TYPE_LABELS: Record<string, string> = {
  COPERATE: "Corporate",
  SME: "SME",
};

/** Feed plan-type names, tidied for display ("COPERATE" → "Corporate"). */
export function formatType(type: string): string {
  const known = TYPE_LABELS[type.toUpperCase()];
  if (known) return known;
  return type
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Carrier brand colours. The pricing table is the one place on the site that
 * steps outside the black/blue palette — a Nigerian reseller reads MTN yellow
 * and Airtel red faster than any label.
 */
export type NetworkBrand = { bg: string; fg: string };

const NETWORK_BRANDS: Record<string, NetworkBrand> = {
  MTN: { bg: "#FFC403", fg: "#101010" },
  AIRTEL: { bg: "#E4002B", fg: "#FFFFFF" },
  GLO: { bg: "#009A44", fg: "#FFFFFF" },
  "9MOBILE": { bg: "#006F51", fg: "#FFFFFF" },
};

const FALLBACK_BRAND: NetworkBrand = { bg: "#101010", fg: "#FFFFFF" };

export function networkBrand(network: string): NetworkBrand {
  return NETWORK_BRANDS[network.toUpperCase()] ?? FALLBACK_BRAND;
}

const NETWORK_LABELS: Record<string, string> = {
  MTN: "MTN",
  AIRTEL: "Airtel",
  GLO: "Glo",
  "9MOBILE": "9mobile",
};

/** Display name for a network as it appears in the feed. */
export function formatNetwork(network: string): string {
  const upper = network.toUpperCase();
  return NETWORK_LABELS[upper] ?? upper.charAt(0) + upper.slice(1).toLowerCase();
}

/**
 * The feed occasionally carries internal test entries ("23GB-TESTING"). Keep
 * them off a public price list.
 */
export function isPublicPlan(plan: Plan): boolean {
  return !/\btest(ing)?\b/i.test(plan.name);
}

/**
 * The feed carries a handful of plans twice under different ids (same size,
 * validity and price). They'd read as a rendering bug in the table, so collapse
 * anything that would display identically.
 */
export function dedupePlans(plans: Plan[]): Plan[] {
  const seen = new Set<string>();
  const out: Plan[] = [];
  for (const plan of plans) {
    const key = [
      plan.network,
      formatSize(plan),
      formatValidity(plan.validity),
      plan.price,
      planQualifier(plan) ?? plan.type,
    ].join("|");
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(plan);
  }
  return out;
}
