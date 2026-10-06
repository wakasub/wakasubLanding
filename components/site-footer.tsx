import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Wakasub",
    links: [
      { label: "Rewards", href: "/#rewards" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Utilities", href: "/#utilities" },
      { label: "Data prices", href: "/#data-prices" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Become a reseller", href: "/reseller" },
      { label: "Create a campaign", href: "https://app.wakasub.com/register" },
      { label: "Internship", href: "/internship" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "/contact-support" },
      { label: "Privacy policy", href: "https://app.wakasub.com/privacy-policy" },
    ],
  },
];

const stores = [
  {
    label: "App Store",
    hint: "Download on the",
    href: "https://apps.apple.com/ng/app/wakasub-data-bills-and-more/id6777371534",
  },
  {
    label: "Google Play",
    hint: "Get it on",
    href: "https://play.google.com/store/apps/details?id=com.wakasub.vtu",
  },
];

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr] md:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image src="/waka 512.png" alt="" width={36} height={36} />
              <span className="font-display text-xl font-bold tracking-tight">
                Wakasub
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The rewards hub of Nigeria. Send airtime, data and cash to your
              people with one link.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stores.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col border border-border px-4 py-2.5 leading-tight transition-colors hover:border-primary hover:bg-secondary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.hint}
                  </span>
                  <span className="text-sm font-semibold">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                  {col.title}
                </h2>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Wakasub Technologies Ltd. All rights reserved.</p>
          <p>Made in Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
