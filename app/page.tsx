"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Wifi,
  Tv,
  Zap,
  Wallet,
  ShieldCheck,
  Clock,
  ArrowRight,
  Star,
  Gift,
  Plane,
  CheckCircle2,
  Sparkles,
  Trophy,
  Send,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const allTestimonials = [
  {
    name: "Adebayo O.",
    role: "Business Owner",
    location: "Lagos",
    body: "I manage airtime for my whole team through Wakasub. It's the fastest and most reliable VTU platform I've used in Nigeria by far.",
  },
  {
    name: "Chioma M.",
    role: "Student",
    location: "Abuja",
    body: "As a student relying on data for online classes, Wakasub has never let me down. Transactions go through even when others fail.",
  },
  {
    name: "Emeka K.",
    role: "Freelancer",
    location: "Port Harcourt",
    body: "The wallet system is seamless. I fund once and pay bills all month. The platform is clean, secure, and honest about what it offers.",
  },
  {
    name: "Tunde B.",
    role: "Teacher",
    location: "Ibadan",
    body: "I pay electricity bills for my school through Wakasub every month. Reliable, fast, and the transaction history makes accounting easy.",
  },
  {
    name: "Ngozi A.",
    role: "Market Trader",
    location: "Onitsha",
    body: "My customers used to wait while I looked for recharge cards. Now I top up on the spot. Wakasub has made my business faster.",
  },
  {
    name: "Seun D.",
    role: "Software Engineer",
    location: "Lagos",
    body: "The response times are genuinely fast. As an engineer I can tell when a platform actually delivers on its speed claims — this one does.",
  },
];

const row1 = [...allTestimonials, ...allTestimonials];
const row2 = [
  ...allTestimonials.slice(3),
  ...allTestimonials.slice(0, 3),
  ...allTestimonials.slice(3),
  ...allTestimonials.slice(0, 3),
];

const partners = [
  "MTN", "Airtel", "Glo", "9mobile",
  "DSTV", "GOtv", "Startimes",
  "EKEDC", "IKEDC", "AEDC",
];
const marqueePartners = [...partners, ...partners];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "4.9/5", label: "Avg. Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "<2s", label: "Avg. Delivery" },
];

/* ── Store badge icons — Simple Icons 24x24 paths ── */
function AppleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.46 2.208 3.09 3.792 3.029 1.52-.065 2.09-.987 3.925-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function GooglePlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" aria-hidden>
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l240.6-240.6L47 0zM425.2 225.6l-58.9-33.8-66.7 66.7 66.7 66.7 59.2-34c16.8-9.6 22.5-23.8 22.5-33.1 0-9.3-5.9-23.5-22.8-32.5zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

function AppStoreBadge({
  store,
  className = "",
  inverted = false,
}: {
  store: "ios" | "android";
  className?: string;
  inverted?: boolean;
}) {
  const isIos = store === "ios";
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      aria-label={isIos ? "Download on the App Store" : "Get it on Google Play"}
      className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition-all duration-200 active:scale-[0.98] hover:opacity-85 ${
        inverted
          ? "border border-white/20 bg-white/10 text-white"
          : "border border-foreground bg-foreground text-background"
      } ${className}`}
    >
      {isIos ? <AppleIcon /> : <GooglePlayIcon />}
      <div className="text-left">
        <p className="text-[10px] leading-none opacity-55">
          {isIos ? "Download on the" : "Get it on"}
        </p>
        <p className="mt-0.5 text-[15px] font-semibold leading-tight">
          {isIos ? "App Store" : "Google Play"}
        </p>
      </div>
    </a>
  );
}

function TestimonialCard({
  name,
  role,
  location,
  body,
}: {
  name: string;
  role: string;
  location: string;
  body: string;
}) {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl border border-border/50 bg-card p-6">
      <div className="mb-3 flex gap-0.5">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={12} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{body}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-border/30 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-muted-foreground">
            {role} &bull; {location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-0 pt-32 md:pt-44">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        {/* Large ₦ art element */}
        <div className="pointer-events-none absolute -right-8 top-0 -z-10 select-none text-[320px] font-extrabold leading-none text-primary/[0.04] md:-right-12 md:text-[500px]">
          ₦
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-background/95 to-background" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Left */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="pb-4 lg:pb-24"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Trusted by 50,000+ Nigerians
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]"
              >
                Pay every bill.
                <br />
                <span className="text-primary">Top up</span> any network.
                <br />
                Drop giveaways.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
              >
                Airtime, data, cable TV, electricity — and now automated airtime
                &amp; data giveaways for your whole squad. One wallet, every
                service.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mb-8 flex gap-3"
              >
                <AppStoreBadge store="android" className="flex-1 justify-center" />
                <AppStoreBadge store="ios" className="flex-1 justify-center" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="h-13 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link href="https://app.wakasub.com/register">
                    Get started free
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 rounded-full bg-transparent px-8 text-base font-medium"
                  asChild
                >
                  <Link href="https://app.wakasub.com/login">
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: App card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative pb-10 lg:pb-0"
            >
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-3 -top-5 z-10 flex items-center gap-2 rounded-2xl border border-green-100 bg-white px-3.5 py-2.5 shadow-xl shadow-black/10 dark:border-green-900/60 dark:bg-card md:-right-10"
              >
                <CheckCircle2 size={15} className="text-green-500" />
                <div>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400">
                    MTN ₦500
                  </p>
                  <p className="text-[10px] text-muted-foreground">Airtime sent</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -bottom-3 -left-3 z-10 flex items-center gap-2 rounded-2xl border bg-white px-3.5 py-2.5 shadow-xl shadow-black/10 dark:bg-card md:-left-10"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <Wallet size={13} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold">+₦21,040</p>
                  <p className="text-[10px] text-muted-foreground">Wallet funded</p>
                </div>
              </motion.div>

              <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl shadow-black/12 ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-primary px-6 py-6 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium opacity-70">Wallet Balance</p>
                      <p className="text-4xl font-bold tracking-tight">₦24,500.00</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Wallet size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 text-left text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    Quick Actions
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {[
                      { icon: Smartphone, label: "Airtime", cls: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
                      { icon: Wifi, label: "Data", cls: "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400" },
                      { icon: Tv, label: "Cable", cls: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400" },
                      { icon: Zap, label: "Electric", cls: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400" },
                      { icon: Gift, label: "Giveaway", cls: "bg-pink-50 text-pink-500 dark:bg-pink-950 dark:text-pink-400" },
                      { icon: Plane, label: "Flights", cls: "bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400" },
                    ].map((a) => (
                      <div key={a.label} className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2.5 transition-colors hover:bg-secondary/70">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${a.cls}`}>
                          <a.icon size={16} />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">{a.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1 rounded-xl bg-secondary/40 p-3">
                    {[
                      { label: "MTN Airtime • 0803xxx", amt: "−₦500" },
                      { label: "DSTV Compact • 82049xx", amt: "−₦8,000" },
                      { label: "Giveaway • 12 recipients", amt: "−₦12,000" },
                    ].map((tx) => (
                      <div key={tx.label} className="flex items-center justify-between rounded-lg px-1 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                            <CheckCircle2 size={11} className="text-green-600" />
                          </div>
                          <span className="text-xs text-muted-foreground">{tx.label}</span>
                        </div>
                        <span className="text-xs font-semibold">{tx.amt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Partner marquee ── */}
      <section className="relative overflow-hidden py-14">
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
          Powering payments across every network
        </p>
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee-slow flex shrink-0 items-center gap-12 pr-12">
            {marqueePartners.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="text-lg font-bold tracking-wider text-foreground/15 transition-colors hover:text-foreground/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats — editorial, clean card ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 divide-x divide-y divide-border/50 overflow-hidden rounded-2xl border border-border/50 bg-card md:grid-cols-4 md:divide-y-0"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center py-10 text-center"
              >
                <div className="text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="features" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Services
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              One platform,
              <br />
              every need.
            </h2>
            <p className="max-w-lg text-lg text-muted-foreground">
              We&apos;re building the most complete digital services hub for
              Nigerians — starting with VTU and expanding fast.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Airtime — featured hero card */}
            <motion.div
              variants={fadeUp}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-2xl bg-blue-500 p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25 sm:col-span-2"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Smartphone className="text-white" size={22} />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Airtime</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/70">
                Top up any Nigerian network in seconds. Reliable delivery,
                competitive rates, and no failed transactions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MTN", "Airtel", "Glo", "9mobile"].map((n) => (
                  <span key={n} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold">
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data */}
            <motion.div
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 transition-colors group-hover:bg-violet-500/15">
                <Wifi className="text-violet-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Data Bundles</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Daily, weekly, and monthly data plans at the best rates.
              </p>
            </motion.div>

            {/* Cable TV */}
            <motion.div
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 transition-colors group-hover:bg-orange-500/15">
                <Tv className="text-orange-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cable TV</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Renew DSTV, GOtv, and Startimes subscriptions in seconds.
              </p>
            </motion.div>

            {/* Electricity */}
            <motion.div
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 transition-colors group-hover:bg-amber-500/15">
                <Zap className="text-amber-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Electricity</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Pay EKEDC, IKEDC, AEDC and other distribution company bills.
              </p>
            </motion.div>

            {/* Gift Cards — coming soon */}
            <motion.div
              variants={fadeUp}
              className="relative flex flex-col rounded-2xl border border-dashed border-border/70 bg-secondary/20 p-7"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                <Sparkles size={9} />
                Soon
              </span>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 dark:bg-pink-950">
                <Gift className="text-pink-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground/55">Gift Cards</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground/70">
                Buy and redeem international gift cards for major global brands.
              </p>
            </motion.div>

            {/* Flights — coming soon */}
            <motion.div
              variants={fadeUp}
              className="group relative col-span-1 flex flex-col rounded-2xl border border-dashed border-border/70 bg-secondary/20 p-7 sm:col-span-2"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                <Sparkles size={9} />
                Coming soon
              </span>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-950">
                <Plane className="text-teal-500" size={22} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground/55">Flight Booking</h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground/70">
                Book domestic and international flights at competitive prices.
                Coming to Wakasub soon.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Giveaway Feature Spotlight ── */}
      <section
        id="giveaway"
        className="relative mx-4 my-8 overflow-hidden rounded-3xl bg-foreground py-20 text-background md:rounded-[2.5rem] md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />

        <div className="container relative mx-auto px-6">
          <div className="flex flex-col items-start gap-16 md:flex-row md:items-center md:gap-20">

            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/12 px-4 py-1.5 text-sm font-semibold text-amber-400">
                <Trophy size={14} />
                New Feature
              </div>

              <h2 className="mb-6 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
                Send airtime to
                <br />
                your{" "}
                <span className="text-amber-400">whole squad.</span>
                <br />
                Automatically.
              </h2>

              <p className="mb-10 max-w-lg text-lg leading-relaxed text-background/55">
                Create a giveaway pool, add your contacts, set the airtime or
                data amount — Wakasub distributes to everyone instantly. Perfect
                for group leaders, brand promotions, and generous friends.
              </p>

              <div className="mb-10 space-y-3">
                {[
                  "MTN, Airtel, Glo & 9mobile supported",
                  "Up to 100 recipients per giveaway",
                  "Automated instant distribution",
                  "Track delivery status in real-time",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                      <CheckCircle2 size={13} className="text-amber-400" />
                    </div>
                    <span className="text-sm text-background/65">{f}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="rounded-full bg-amber-500 px-8 text-base font-semibold text-black shadow-lg shadow-amber-500/25 hover:bg-amber-400"
                asChild
              >
                <Link href="https://app.wakasub.com/register">
                  Try Giveaway
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Giveaway card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[340px] flex-shrink-0 md:self-center"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                    <Gift size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Giveaway Pool</p>
                    <p className="text-xs text-background/45">by Adebayo O.</p>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-background/40">Pool Name</p>
                    <p className="text-lg font-semibold">Christmas Recharge 🎄</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="mb-1 text-[11px] text-background/40">Amount</p>
                      <p className="text-lg font-bold text-amber-400">₦1,000</p>
                      <p className="text-[10px] text-background/40">per person</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="mb-1 text-[11px] text-background/40">Service</p>
                      <p className="text-sm font-semibold">MTN Airtime</p>
                      <div className="mt-1 inline-flex rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        MTN
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-background/40">Recipients</p>
                      <span className="text-xs font-semibold text-background/55">12 people</span>
                    </div>
                    <div className="flex items-center">
                      {["A", "C", "F", "O", "T"].map((initial, i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground text-[11px] font-semibold"
                          style={{
                            backgroundColor: ["#3b82f6","#8b5cf6","#f59e0b","#10b981","#ef4444"][i],
                            marginLeft: i > 0 ? "-8px" : "0",
                            color: "#fff",
                            zIndex: 5 - i,
                          }}
                        >
                          {initial}
                        </div>
                      ))}
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground bg-white/10 text-[10px] font-semibold"
                        style={{ marginLeft: "-8px" }}
                      >
                        +7
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-background/40">Status</p>
                      <span className="text-xs font-semibold text-amber-400">Sending...</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="animate-giveaway-progress h-full rounded-full bg-amber-500" />
                    </div>
                    <p className="mt-1 text-[10px] text-background/35">6 of 12 delivered</p>
                  </div>

                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-400">
                    <Send size={14} />
                    Send Giveaway
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Wakasub ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Why Wakasub
              </p>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Built for trust
                <br />
                and speed.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We don&apos;t cut corners on what matters most — security,
                reliability, and getting your transactions through fast.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure by design",
                  desc: "End-to-end encryption on every transaction. Your wallet and personal data are protected at all times.",
                  iconCls: "text-green-600 dark:text-green-400 bg-green-500/10",
                },
                {
                  icon: Zap,
                  title: "Instant delivery",
                  desc: "No waiting, no failures. Airtime, data, and bill payments are processed the moment you confirm.",
                  iconCls: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
                },
                {
                  icon: Clock,
                  title: "Always available",
                  desc: "Our infrastructure runs 24/7. Pay bills at 2 am on a Sunday — the system never sleeps.",
                  iconCls: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${t.iconCls}`}>
                    <t.icon size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{t.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="relative mx-4 my-12 overflow-hidden rounded-3xl bg-foreground py-24 text-background md:rounded-[2.5rem]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="container relative mx-auto px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row md:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                How it works
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                From signup to payment
                <br />
                in three steps
              </h2>
              <p className="mb-12 text-lg text-background/50">
                Wakasub is designed to get out of your way. Fast onboarding,
                instant wallet funding, and seamless payments every time.
              </p>

              <div className="space-y-8">
                {[
                  { n: "01", title: "Create an account", desc: "Sign up with just your email in under 60 seconds. No paperwork." },
                  { n: "02", title: "Fund your wallet", desc: "Transfer money to your dedicated virtual account — it reflects instantly." },
                  { n: "03", title: "Pay anything", desc: "Select your service, enter the details, and confirm. Done." },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="flex gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {s.n}
                    </div>
                    <div className="pt-1.5">
                      <h4 className="mb-1 text-base font-semibold">{s.title}</h4>
                      <p className="text-sm leading-relaxed text-background/45">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <Button size="lg" className="rounded-full px-8 text-base font-semibold" asChild>
                  <Link href="https://app.wakasub.com/register">Create free account</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[340px] flex-1"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-1.5 px-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="overflow-hidden rounded-2xl bg-background text-foreground shadow-2xl">
                  <div className="bg-primary px-5 py-4 text-primary-foreground">
                    <p className="text-xs opacity-70">Wallet Balance</p>
                    <p className="text-2xl font-bold">₦12,540.00</p>
                  </div>
                  <div className="space-y-1.5 p-4">
                    {[
                      { label: "MTN Airtime • 0803xxx", amt: "−₦500", positive: false },
                      { label: "DSTV Compact • 8204xxx", amt: "−₦8,000", positive: false },
                      { label: "Wallet Top-up", amt: "+₦21,040", positive: true },
                    ].map((tx) => (
                      <div key={tx.label} className="flex items-center justify-between rounded-xl px-3 py-2.5 odd:bg-secondary/30">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                            <CheckCircle2 size={11} className="text-green-600" />
                          </div>
                          <span className="max-w-[150px] truncate text-xs text-muted-foreground">{tx.label}</span>
                        </div>
                        <span className={`text-xs font-semibold ${tx.positive ? "text-green-600 dark:text-green-400" : ""}`}>
                          {tx.amt}
                        </span>
                      </div>
                    ))}
                    <Button className="mt-2 w-full rounded-xl" size="sm">
                      Make a Payment
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="overflow-hidden py-28">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Real people, real results
            </h2>
            <p className="max-w-lg text-lg text-muted-foreground">
              Thousands of Nigerians rely on Wakasub every day.
            </p>
          </motion.div>
        </div>

        <div className="relative mb-4 flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-stretch gap-4 pr-4">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} {...t} />
            ))}
          </div>
        </div>
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee-reverse flex shrink-0 items-stretch gap-4 pr-4">
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── App Download ── */}
      <section id="download" className="bg-secondary/30 py-24 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Get the app
              </p>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Wakasub in
                <br />
                your pocket
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                Download the app and manage all your bills, top-ups, and
                giveaways on the go. Available on iOS and Android.
              </p>

              <div className="flex gap-3">
                <AppStoreBadge store="android" className="flex-1 justify-center" />
                <AppStoreBadge store="ios" className="flex-1 justify-center" />
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Apps coming soon &mdash; web platform available now at{" "}
                <Link href="https://app.wakasub.com" className="font-medium text-primary hover:underline">
                  app.wakasub.com
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground md:px-16 md:rounded-[2.5rem]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]" />
            </div>
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/55">
                Get started today
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Join 50,000+ Nigerians
                <br />
                on Wakasub
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/70">
                Sign up free, fund your wallet in seconds, and start paying
                bills the smart way.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" className="h-13 w-full rounded-full px-10 text-base font-semibold shadow-lg sm:w-auto" asChild>
                  <Link href="https://app.wakasub.com/register">Create free account</Link>
                </Button>
                <Button size="lg" variant="ghost" className="h-13 w-full rounded-full px-10 text-base font-medium text-primary-foreground hover:bg-white/10 sm:w-auto" asChild>
                  <Link href="https://app.wakasub.com/login">Sign in</Link>
                </Button>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <AppStoreBadge store="ios" inverted className="flex-1 max-w-[200px] justify-center" />
                <AppStoreBadge store="android" inverted className="flex-1 max-w-[200px] justify-center" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="max-w-xs">
              <Link href="/" className="mb-3 flex items-center gap-2">
                <Image src="/waka 512.png" alt="WakaSub" width={28} height={28} />
                <span className="text-lg font-bold">WakaSub</span>
              </Link>
              <p className="mb-6 text-sm text-muted-foreground">
                Nigeria&apos;s all-in-one digital services platform. Fast,
                secure, and always on.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-foreground/5 px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-foreground/10"
                >
                  <AppleIcon size={15} />
                  App Store
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-foreground/5 px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-foreground/10"
                >
                  <GooglePlayIcon size={15} />
                  Google Play
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">Platform</span>
                <Link href="#features" className="transition-colors hover:text-primary">Services</Link>
                <Link href="#giveaway" className="transition-colors hover:text-primary">Giveaway</Link>
                <Link href="#how-it-works" className="transition-colors hover:text-primary">How it works</Link>
                <Link href="https://app.wakasub.com/register" className="transition-colors hover:text-primary">Sign up</Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">Company</span>
                <Link href="/internship" className="transition-colors hover:text-primary">Internship</Link>
                <Link href="#" className="transition-colors hover:text-primary">Contact</Link>
                <Link href="#" className="transition-colors hover:text-primary">Status</Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">Legal</span>
                <Link href="#" className="transition-colors hover:text-primary">Terms</Link>
                <Link href="#" className="transition-colors hover:text-primary">Privacy</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Wakasub Technologies Ltd. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-green-500" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
