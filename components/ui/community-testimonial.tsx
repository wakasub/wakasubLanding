import { cn } from "@/lib/utils";

export interface Testimonial {
  name: string;
  role: string;
  location?: string;
  body: string;
}

export interface TestimonialRow {
  id: string;
  items: Testimonial[];
  /** CSS animation duration, e.g. "48s". Larger = slower. */
  duration?: string;
  /** Scroll right instead of left. */
  reverse?: boolean;
}

/* Static, filled stars — no per-icon motion so the marquee stays buttery. */
function Stars() {
  return (
    <div className="mb-3 flex gap-0.5 text-primary" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ name, role, location, body }: Testimonial) {
  const meta = location ? `${role} · ${location}` : role;
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:w-[22rem]">
      <Stars />
      <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{body}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border/40 pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {name.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-foreground">
            {name}
          </span>
          <span className="block truncate text-xs text-muted-foreground">{meta}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * A single edge-faded row that scrolls its cards horizontally, forever.
 * Reuses the project's `.animate-marquee(-reverse)` utilities (which already
 * respect `prefers-reduced-motion`); the duration is overridden per row.
 */
function ScrollerRow({ items, duration = "48s", reverse = false }: Omit<TestimonialRow, "id">) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className={cn(
          "flex shrink-0 gap-6 pr-6 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: duration }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee({ rows }: { rows: TestimonialRow[] }) {
  return (
    <div className="flex flex-col gap-6">
      {rows.map((row) => (
        <ScrollerRow
          key={row.id}
          items={row.items}
          duration={row.duration}
          reverse={row.reverse}
        />
      ))}
    </div>
  );
}
