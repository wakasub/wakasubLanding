"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  dedupePlans,
  flattenPlans,
  formatNaira,
  formatNetwork,
  formatSize,
  formatType,
  formatValidity,
  isPublicPlan,
  networkBrand,
  planQualifier,
  type DataPlansPayload,
  type DataPlansSource,
  type Plan,
} from "@/lib/data-plans";

const COLLAPSED_ROWS = 10;

const SORTS = [
  { id: "size", label: "Size" },
  { id: "price", label: "Price" },
  { id: "value", label: "Value" },
] as const;

type SortId = (typeof SORTS)[number]["id"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

type DataPricingProps = {
  /** Feed resolved on the server — see `lib/data-plans-server.ts`. */
  initialPlans: DataPlansPayload;
  source: DataPlansSource;
};

export function DataPricing({ initialPlans: payload, source }: DataPricingProps) {
  const [network, setNetwork] = useState(payload.networks[0]?.network ?? "MTN");
  const [typeSlug, setTypeSlug] = useState("all");
  const [sort, setSort] = useState<SortId>("size");
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  /* The switcher + filters stick under the floating navbar; the column header
     sticks beneath them, so it needs to know how tall the toolbar is. */
  useEffect(() => {
    const toolbar = toolbarRef.current;
    const panel = panelRef.current;
    if (!toolbar || !panel) return;
    const sync = () => panel.style.setProperty("--toolbar-h", `${toolbar.offsetHeight}px`);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(toolbar);
    return () => observer.disconnect();
  }, []);
  const isLive = source === "live";

  const allPlans = useMemo(
    () => dedupePlans(flattenPlans(payload).filter(isPublicPlan)),
    [payload],
  );

  /* Tab order follows the feed; counts come from the deduped list so the badge
     always matches the number of rows the tab actually renders. */
  const networks = useMemo(() => {
    const counts = new Map<string, number>();
    for (const plan of allPlans) counts.set(plan.network, (counts.get(plan.network) ?? 0) + 1);
    return payload.networks.map((n) => ({ network: n.network, count: counts.get(n.network) ?? 0 }));
  }, [payload, allPlans]);

  /* Live data may not carry the selected network — fall back to the first one. */
  const activeNetwork = networks.find((n) => n.network === network)?.network ?? networks[0]?.network ?? "";
  const brand = networkBrand(activeNetwork);

  const networkPlans = useMemo(
    () => allPlans.filter((plan) => plan.network === activeNetwork),
    [allPlans, activeNetwork],
  );

  const typeFilters = useMemo(() => {
    const groups = new Map<string, { slug: string; label: string; count: number }>();
    for (const plan of networkPlans) {
      const existing = groups.get(plan.typeSlug);
      if (existing) existing.count += 1;
      else groups.set(plan.typeSlug, { slug: plan.typeSlug, label: formatType(plan.type), count: 1 });
    }
    return [{ slug: "all", label: "All plans", count: networkPlans.length }, ...groups.values()];
  }, [networkPlans]);

  const plans = useMemo(() => {
    const filtered =
      typeSlug === "all" ? networkPlans : networkPlans.filter((p) => p.typeSlug === typeSlug);
    return [...filtered].sort(comparators[sort]);
  }, [networkPlans, typeSlug, sort]);

  const bestValueId = useMemo(() => {
    let best: Plan | null = null;
    for (const plan of plans) {
      if (plan.pricePerGb == null) continue;
      if (!best || plan.pricePerGb < best.pricePerGb!) best = plan;
    }
    return plans.length > 2 ? best?.id : undefined;
  }, [plans]);

  const visible = expanded ? plans : plans.slice(0, COLLAPSED_ROWS);
  const hidden = plans.length - visible.length;
  const totalPlans = allPlans.length;

  const collapse = useCallback(() => {
    setExpanded(false);
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const chooseNetwork = (name: string) => {
    setNetwork(name);
    setTypeSlug("all");
    setExpanded(false);
  };

  const chooseType = (slug: string) => {
    setTypeSlug(slug);
    setExpanded(false);
  };

  return (
    <section id="data-prices" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* ── header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Data pricing
            </p>
            <h2 className="title-glow max-w-xl text-4xl font-bold leading-[1.05] md:text-5xl">
              Every plan, every network. One price list.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {totalPlans} data plans across MTN, Airtel, Glo and 9mobile — the same rates you resell at.
              No hidden markup, no “contact us for pricing”.
            </p>
          </div>

          <dl className="shrink-0 border-t border-foreground/15 pt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground md:min-w-56 md:text-right">
            <div className="flex justify-between gap-8 md:block">
              <dt className="sr-only">Feed status</dt>
              <dd className="text-foreground">{isLive ? "Live prices" : "Updated daily"}</dd>
            </div>
            <div className="mt-2 flex justify-between gap-8 md:block">
              <dt className="sr-only">Currency</dt>
              <dd>All prices in naira</dd>
            </div>
          </dl>
        </motion.div>

        {/* ── panel ── */}
        <motion.div
          ref={panelRef}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ "--brand": brand.bg, "--brand-fg": brand.fg } as CSSProperties}
          className="scroll-mt-28 border border-border bg-background"
        >
          {/* carrier rule — the panel takes the colour of the selected network */}
          <div className="h-1 bg-[var(--brand)] transition-colors duration-300" />

          {/* sticky toolbar: network switcher + filters stay on screen while the table scrolls */}
          <div ref={toolbarRef} className="sticky top-[5.5rem] z-20 bg-background">
          {/* network switcher */}
          <div className="grid grid-cols-4 border-b border-border">
            {networks.map((n, index) => {
              const active = n.network === activeNetwork;
              const tint = networkBrand(n.network);
              return (
                <button
                  key={n.network}
                  type="button"
                  onClick={() => chooseNetwork(n.network)}
                  aria-pressed={active}
                  style={active ? { backgroundColor: tint.bg, color: tint.fg } : undefined}
                  className={`px-2 py-4 text-center transition-colors ${
                    index > 0 ? "border-l border-border" : ""
                  } ${active ? "" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"}`}
                >
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] sm:text-sm">
                    {formatNetwork(n.network)}
                  </span>
                  <span className="mt-1 block text-[10px] tabular-nums opacity-70">
                    {n.count} plans
                  </span>
                </button>
              );
            })}
          </div>

          {/* type filters + sort */}
          <div className="flex flex-col gap-3 border-b border-border px-4 py-3 lg:flex-row lg:py-4 lg:items-center lg:justify-between lg:px-6">
            <div className="no-scrollbar -mb-1 flex gap-6 overflow-x-auto pb-1">
              {typeFilters.map((filter) => {
                const active = filter.slug === typeSlug;
                return (
                  <button
                    key={filter.slug}
                    type="button"
                    onClick={() => chooseType(filter.slug)}
                    aria-pressed={active}
                    className={`shrink-0 border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "border-[var(--brand)] text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                    <span className="ml-1.5 font-normal tabular-nums opacity-50">{filter.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Sort</span>
              <div className="flex gap-4">
                {SORTS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSort(option.id)}
                    aria-pressed={sort === option.id}
                    className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                      sort === option.id
                        ? "border-[var(--brand)] text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          </div>

          {/* table */}
          <div className="relative">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6 sticky top-[calc(5.5rem+var(--toolbar-h,0px))] z-10 bg-background shadow-[inset_0_-1px_0_var(--border)]">
                    Plan
                  </th>
                  <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell sticky top-[calc(5.5rem+var(--toolbar-h,0px))] z-10 bg-background shadow-[inset_0_-1px_0_var(--border)]">
                    Validity
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-6 sticky top-[calc(5.5rem+var(--toolbar-h,0px))] z-10 bg-background shadow-[inset_0_-1px_0_var(--border)]">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {visible.map((plan, index) => {
                  const qualifier = planQualifier(plan);
                  const size = formatSize(plan);
                  const validity = formatValidity(plan.validity);
                  /* A few plans (unlimited / router bundles) carry no size at all —
                     promote their qualifier to the headline so no row reads "—". */
                  const headline = size === "—" ? (qualifier ?? formatType(plan.type)) : size;
                  const subline =
                    size === "—" ? formatType(plan.type) : (qualifier ?? formatType(plan.type));
                  const isBest = plan.id === bestValueId;
                  return (
                    <motion.tr
                      key={`${plan.network}-${plan.id}-${plan.price}`}
                      initial={index < COLLAPSED_ROWS ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min((index - COLLAPSED_ROWS) * 0.012, 0.35) }}
                      className="group border-b border-border/60 transition-colors last:border-b-0 hover:bg-secondary/40"
                    >
                      <td className="border-l-2 border-transparent px-4 py-3.5 group-hover:border-[var(--brand)] sm:px-6">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <span className="text-[15px] font-bold tabular-nums">{headline}</span>
                          {plan.offer_tag && (
                            <span className="border border-border px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                              {plan.offer_tag === "BEST_SELLER" ? "Popular" : "New"}
                            </span>
                          )}
                          {isBest && (
                            <span className="bg-[var(--brand)] px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--brand-fg)]">
                              Best value
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {subline}
                          {validity !== "—" && <span className="sm:hidden"> · {validity}</span>}
                        </p>
                      </td>
                      <td className="hidden px-4 py-3.5 text-sm text-muted-foreground sm:table-cell">
                        {validity}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[15px] font-bold tabular-nums sm:px-6">
                        {formatNaira(plan.price)}
                      </td>
                    </motion.tr>
                  );
                })}

                {visible.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-14 text-center text-sm text-muted-foreground">
                      No plans in this category right now.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* fade over the cut-off rows */}
            {!expanded && hidden > 0 && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/85 to-transparent" />
            )}
          </div>

          {/* expand / collapse */}
          {plans.length > COLLAPSED_ROWS && (
            <div className="flex justify-center border-t border-border px-6 py-6">
              <button
                type="button"
                onClick={() => (expanded ? collapse() : setExpanded(true))}
                aria-expanded={expanded}
                className="border border-foreground px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
              >
                {expanded
                  ? "Show fewer plans"
                  : `Show all ${plans.length} ${formatNetwork(activeNetwork)} plans`}
              </button>
            </div>
          )}

          {/* legend */}
          <div className="flex flex-col gap-1 border-t border-border px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>Prices are final — no card charges, no service fee</p>
            <p>Best value = lowest cost per gigabyte</p>
          </div>
        </motion.div>

        {/* ── reseller strip ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 bg-foreground p-8 text-background md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-background/50">
                For resellers
              </p>
              <h3 className="max-w-md text-2xl font-bold leading-tight md:text-3xl">
                Sell these plans at your own price.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-background/60">
                Buy at wholesale, set your margin, and let Wakasub deliver. The same instant network rails
                your customers already trust.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/reseller"
                  className="bg-primary px-8 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get reseller rates
                </Link>
                <Link
                  href="https://app.wakasub.com/register"
                  className="border border-background/30 px-8 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-background hover:text-foreground"
                >
                  Buy data now
                </Link>
              </div>
            </div>

            <dl className="self-end border-t border-background/15">
              {resellerPerks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex items-baseline justify-between gap-6 border-b border-background/15 py-4"
                >
                  <dt className="text-sm font-semibold">{perk.title}</dt>
                  <dd className="text-right text-xs text-background/55">{perk.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const resellerPerks = [
  { title: "Wholesale rates", desc: "Below every price above" },
  { title: "Developer API", desc: "Plug into your own app" },
  { title: "24/7 support", desc: "Real humans, any hour" },
];

/* Sizeless plans (unlimited/router bundles) sort last rather than leading the
   table with a ₦80,000 row. */
const sizeOf = (plan: Plan) => plan.size_mb ?? Number.MAX_SAFE_INTEGER;
const perGbOf = (plan: Plan) => plan.pricePerGb ?? Number.MAX_SAFE_INTEGER;

const comparators: Record<SortId, (a: Plan, b: Plan) => number> = {
  size: (a, b) => sizeOf(a) - sizeOf(b) || a.price - b.price,
  price: (a, b) => a.price - b.price || sizeOf(a) - sizeOf(b),
  value: (a, b) => perGbOf(a) - perGbOf(b) || a.price - b.price,
};
