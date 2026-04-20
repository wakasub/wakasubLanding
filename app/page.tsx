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
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
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
  "MTN",
  "Airtel",
  "Glo",
  "9mobile",
  "DSTV",
  "GOtv",
  "Startimes",
  "EKEDC",
  "IKEDC",
  "AEDC",
];
const marqueePartners = [...partners, ...partners];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "4.9/5", label: "Avg. Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "<2s", label: "Delivery" },
];

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
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
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
      <section className="relative pb-0 pt-36 md:pt-52">
        {/* dot grid */}
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
        {/* gradient orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-400/8 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Trusted by 50,000+ Nigerians
            </motion.div>

            {/* Headline with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold leading-[1.07] tracking-tight md:text-7xl"
            >
              Nigeria&apos;s most reliable
              <br />
              <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                digital services
              </span>{" "}
              platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              Airtime, data, cable TV, electricity bills — and soon, gift cards
              and flight bookings. Everything handled in one secure place.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-13 w-full rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 sm:w-auto"
                asChild
              >
                <Link href="https://app.wakasub.com/register">
                  Get started free
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full rounded-full bg-transparent px-8 text-base font-semibold sm:w-auto"
                asChild
              >
                <Link href="https://app.wakasub.com/login">
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Product preview card */}
            <motion.div
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative mx-auto mt-16 max-w-2xl"
            >
              {/* Floating badge — success */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-3 -top-5 z-10 flex items-center gap-2 rounded-2xl border border-green-100 bg-white px-3.5 py-2.5 shadow-xl shadow-black/10 dark:border-green-900/60 dark:bg-card md:-right-10"
              >
                <CheckCircle2 size={15} className="text-green-500" />
                <div>
                  <p className="text-xs font-bold text-green-700 dark:text-green-400">
                    MTN ₦500
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Airtime sent
                  </p>
                </div>
              </motion.div>

              {/* Floating badge — wallet */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -bottom-5 -left-3 z-10 flex items-center gap-2 rounded-2xl border bg-white px-3.5 py-2.5 shadow-xl shadow-black/10 dark:bg-card md:-left-10"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <Wallet size={13} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold">+₦21,040</p>
                  <p className="text-[10px] text-muted-foreground">
                    Wallet funded
                  </p>
                </div>
              </motion.div>

              {/* App card */}
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/10 ring-1 ring-black/5 dark:ring-white/5">
                {/* Header */}
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-xs font-medium opacity-70">
                        Wallet Balance
                      </p>
                      <p className="text-3xl font-bold">₦24,500.00</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Wallet size={18} />
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="p-5">
                  <p className="mb-3 text-left text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Quick Actions
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {[
                      {
                        icon: Smartphone,
                        label: "Airtime",
                        cls: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
                      },
                      {
                        icon: Wifi,
                        label: "Data",
                        cls: "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
                      },
                      {
                        icon: Tv,
                        label: "Cable TV",
                        cls: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
                      },
                      {
                        icon: Zap,
                        label: "Electric",
                        cls: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
                      },
                      {
                        icon: Gift,
                        label: "Gift Cards",
                        cls: "bg-pink-50 text-pink-500 dark:bg-pink-950 dark:text-pink-400",
                      },
                      {
                        icon: Plane,
                        label: "Flights",
                        cls: "bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400",
                      },
                    ].map((a) => (
                      <div
                        key={a.label}
                        className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2.5 transition-colors hover:bg-secondary/70"
                      >
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${a.cls}`}
                        >
                          <a.icon size={16} />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {a.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Recent txns */}
                  <div className="mt-4 space-y-1 rounded-xl bg-secondary/40 p-3">
                    {[
                      { label: "MTN Airtime • 0803xxx", amt: "−₦500" },
                      { label: "DSTV Compact • 82049xx", amt: "−₦8,000" },
                    ].map((tx) => (
                      <div
                        key={tx.label}
                        className="flex items-center justify-between rounded-lg px-1 py-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                            <CheckCircle2 size={11} className="text-green-600" />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {tx.label}
                          </span>
                        </div>
                        <span className="text-xs font-semibold">{tx.amt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom fade into next section */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-background to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Partner marquee ── */}
      <section className="relative overflow-hidden py-14">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Powering payments across every network
        </p>
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee-slow flex shrink-0 items-center gap-12 pr-12">
            {marqueePartners.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="text-lg font-extrabold tracking-wider text-foreground/20 transition-colors hover:text-foreground/50"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-foreground text-background">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="container mx-auto grid grid-cols-2 divide-x divide-background/10 px-6 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center py-12 text-center"
            >
              <div className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-background/50">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Services Bento ── */}
      <section id="features" className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Services
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              One platform, every need
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
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
            {/* Airtime — 2-col hero card */}
            <motion.div
              variants={fadeUp}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:col-span-2"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl transition-colors duration-500 group-hover:bg-blue-500/10" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                <Smartphone className="text-white" size={22} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Airtime</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Top up any Nigerian network in seconds. Reliable delivery, competitive rates, and no failed transactions.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {["MTN", "Airtel", "Glo", "9mobile"].map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Buy airtime <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Data */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-violet-500/5 blur-2xl group-hover:bg-violet-500/10 transition-colors duration-500" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/30 transition-transform duration-300 group-hover:scale-110">
                <Wifi className="text-white" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold">Data Bundles</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Daily, weekly, and monthly data plans at the best rates.
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Buy data <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Cable TV */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-500/5 blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/30 transition-transform duration-300 group-hover:scale-110">
                <Tv className="text-white" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold">Cable TV</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Renew DSTV, GOtv, and Startimes subscriptions in seconds.
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Renew now <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Electricity */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 shadow-lg shadow-amber-500/30 transition-transform duration-300 group-hover:scale-110">
                <Zap className="text-white" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold">Electricity</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Pay EKEDC, IKEDC, AEDC and other distribution company bills.
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Pay bill <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Gift Cards — coming soon */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-border/80 bg-secondary/20 p-7"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                <Sparkles size={9} />
                Soon
              </span>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 dark:bg-pink-950">
                <Gift className="text-pink-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground/60">
                Gift Cards
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground/70">
                Buy and redeem international gift cards for major global brands.
              </p>
            </motion.div>

            {/* Flights — coming soon, 2-col */}
            <motion.div
              variants={fadeUp}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-2xl border border-dashed border-border/80 bg-secondary/20 p-7 sm:col-span-2"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                <Sparkles size={9} />
                Coming soon
              </span>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-950">
                <Plane className="text-teal-500" size={22} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground/60">
                Flight Booking
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground/70">
                Book domestic and international flights at competitive prices.
                Coming to Wakasub soon.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Wakasub ── */}
      <section className="bg-secondary/30 py-28">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Why us
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Built for trust and speed
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              We don&apos;t cut corners on what matters most — security,
              reliability, and getting your transactions through fast.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Secure by design",
                desc: "End-to-end encryption on every transaction. Your wallet and personal data are protected at all times.",
                accent:
                  "bg-green-500/10 text-green-600 dark:text-green-400",
              },
              {
                icon: Zap,
                title: "Instant delivery",
                desc: "No waiting, no failures. Airtime, data, and bill payments are processed the moment you confirm.",
                accent:
                  "bg-amber-500/10 text-amber-600 dark:text-amber-400",
              },
              {
                icon: Clock,
                title: "Always available",
                desc: "Our infrastructure runs 24/7. Pay bills at 2am on a Sunday — the system never sleeps.",
                accent:
                  "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-border/50 bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${t.accent}`}
                >
                  <t.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold">{t.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="relative mx-4 my-12 overflow-hidden rounded-3xl bg-foreground py-24 text-background md:rounded-[2.5rem]"
      >
        {/* subtle grid lines overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        {/* accent blobs */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="container relative mx-auto px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row md:gap-20">
            {/* Left: steps */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                How it works
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                From signup to payment
                <br />
                in three steps
              </h2>
              <p className="mb-12 text-lg text-background/55">
                Wakasub is designed to get out of your way. Fast onboarding,
                instant wallet funding, and seamless payments every time.
              </p>

              <div className="space-y-8">
                {[
                  {
                    n: "01",
                    title: "Create an account",
                    desc: "Sign up with just your email in under 60 seconds. No paperwork.",
                  },
                  {
                    n: "02",
                    title: "Fund your wallet",
                    desc: "Transfer money to your dedicated virtual account — it reflects instantly.",
                  },
                  {
                    n: "03",
                    title: "Pay anything",
                    desc: "Select your service, enter the details, and confirm. Done.",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.15,
                    }}
                    className="flex gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                      {s.n}
                    </div>
                    <div className="pt-1.5">
                      <h4 className="mb-1 text-base font-bold">{s.title}</h4>
                      <p className="text-sm leading-relaxed text-background/50">
                        {s.desc}
                      </p>
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
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base font-semibold"
                  asChild
                >
                  <Link href="https://app.wakasub.com/register">
                    Create free account
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: mock UI */}
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
                      {
                        label: "MTN Airtime • 0803xxx",
                        amt: "−₦500",
                        positive: false,
                      },
                      {
                        label: "DSTV Compact • 8204xxx",
                        amt: "−₦8,000",
                        positive: false,
                      },
                      {
                        label: "Wallet Top-up",
                        amt: "+₦21,040",
                        positive: true,
                      },
                    ].map((tx) => (
                      <div
                        key={tx.label}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 odd:bg-secondary/30"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                            <CheckCircle2
                              size={11}
                              className="text-green-600"
                            />
                          </div>
                          <span className="max-w-[150px] truncate text-xs text-muted-foreground">
                            {tx.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-bold ${tx.positive ? "text-green-600 dark:text-green-400" : ""}`}
                        >
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

      {/* ── Testimonials (dual marquee) ── */}
      <section id="testimonials" className="overflow-hidden py-28">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Real people, real results
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              Thousands of Nigerians rely on Wakasub every day.
            </p>
          </motion.div>
        </div>

        {/* Row 1 — scroll left */}
        <div className="relative mb-4 flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-stretch gap-4 pr-4">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee-reverse flex shrink-0 items-stretch gap-4 pr-4">
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} {...t} />
            ))}
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
            {/* Grid lines */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]" />
            </div>
            {/* Blobs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
                Get started today
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Join 50,000+ Nigerians
                <br />
                on Wakasub
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/75">
                Sign up free, fund your wallet in seconds, and start paying
                bills the smart way.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-13 w-full rounded-full px-10 text-base font-bold shadow-lg sm:w-auto"
                  asChild
                >
                  <Link href="https://app.wakasub.com/register">
                    Create free account
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-13 w-full rounded-full px-10 text-base font-bold text-primary-foreground hover:bg-white/10 sm:w-auto"
                  asChild
                >
                  <Link href="https://app.wakasub.com/login">Sign in</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div>
              <Link href="/" className="mb-3 flex items-center gap-2">
                <Image
                  src="/waka 512.png"
                  alt="WakaSub"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-bold">WakaSub</span>
              </Link>
              <p className="max-w-xs text-sm text-muted-foreground">
                Nigeria&apos;s all-in-one digital services platform. Fast,
                secure, and always on.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  Platform
                </span>
                <Link
                  href="#features"
                  className="transition-colors hover:text-primary"
                >
                  Services
                </Link>
                <Link
                  href="#how-it-works"
                  className="transition-colors hover:text-primary"
                >
                  How it works
                </Link>
                <Link
                  href="https://app.wakasub.com/register"
                  className="transition-colors hover:text-primary"
                >
                  Sign up
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  Company
                </span>
                <Link
                  href="/internship"
                  className="transition-colors hover:text-primary"
                >
                  Internship
                </Link>
                <Link
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Status
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  Legal
                </span>
                <Link
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground md:flex-row">
            <p>
              © {new Date().getFullYear()} Wakasub Technologies Ltd. All rights
              reserved.
            </p>
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
