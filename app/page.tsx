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
  CheckCircle2,
  Trophy,
  Send,
  Users,
  BarChart3,
  Play,
  TrendingUp,
  Lock,
  Activity,
  Globe,
  Layers,
  DollarSign,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const testimonials = [
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

const partners = ["MTN", "Airtel", "Glo", "9mobile", "DSTV", "GOtv", "Startimes", "EKEDC", "IKEDC", "AEDC"];
const marqueePartners = [...partners, ...partners];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "4.9★", label: "User Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "₦1B+", label: "Processed" },
];

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
        <p className="text-[10px] leading-none opacity-55">{isIos ? "Download on the" : "Get it on"}</p>
        <p className="mt-0.5 text-[15px] font-semibold leading-tight">{isIos ? "App Store" : "Google Play"}</p>
      </div>
    </a>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden pb-0 pt-28 md:pt-36">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-background/95 to-background" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left */}
            <motion.div initial="hidden" animate="show" variants={stagger} className="pb-4 lg:pb-16">

              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Trusted by 50,000+ Nigerians
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mb-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.5rem]"
              >
                Buy Data, Airtime
                <br />
                &amp; Pay Bills
                <br />
                <span className="text-primary">in Seconds.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Instant airtime, affordable data plans, electricity payments, cable TV subscriptions, and automated giveaways — all in one wallet.
              </motion.p>

              <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-13 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="https://app.wakasub.com/register">Get Started Free</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 rounded-full bg-transparent px-8 text-base font-medium gap-2.5"
                  asChild
                >
                  <Link href="#how-it-works">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10">
                      <Play size={9} className="fill-current ml-0.5" />
                    </div>
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-3">
                <AppStoreBadge store="android" className="flex-1 justify-center" />
                <AppStoreBadge store="ios" className="flex-1 justify-center" />
              </motion.div>
            </motion.div>

            {/* Right: Dashboard mock */}
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
                className="absolute -right-3 -top-5 z-10 flex items-center gap-2 rounded-2xl border border-green-100 bg-white px-3.5 py-2.5 shadow-xl shadow-black/10 dark:border-green-900/60 dark:bg-card md:-right-8"
              >
                <CheckCircle2 size={15} className="text-green-500" />
                <div>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400">MTN ₦500</p>
                  <p className="text-[10px] text-muted-foreground">Delivered instantly</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-3 -left-3 z-10 flex items-center gap-2 rounded-2xl border bg-white px-3.5 py-2.5 shadow-xl shadow-black/10 dark:bg-card md:-left-8"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950">
                  <Gift size={13} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Giveaway sent</p>
                  <p className="text-[10px] text-muted-foreground">12 recipients ✓</p>
                </div>
              </motion.div>

              <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl shadow-black/12 ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium opacity-70">Wallet Balance</p>
                      <p className="text-[2rem] font-bold tracking-tight">₦24,500.00</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Wallet size={18} />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">+ Add Money</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">History</span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Quick Actions</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: Smartphone, label: "Airtime", cls: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
                      { icon: Wifi, label: "Data", cls: "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400" },
                      { icon: Zap, label: "Electric", cls: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400" },
                      { icon: Gift, label: "Giveaway", cls: "bg-pink-50 text-pink-500 dark:bg-pink-950 dark:text-pink-400" },
                    ].map((a) => (
                      <div key={a.label} className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2 transition-colors hover:bg-secondary/70">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${a.cls}`}>
                          <a.icon size={15} />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">{a.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1 rounded-xl bg-secondary/40 p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Recent</p>
                    {[
                      { label: "MTN 1GB Data", amt: "−₦280", time: "Just now" },
                      { label: "DSTV Compact", amt: "−₦8,000", time: "2h ago" },
                      { label: "Giveaway • 12 people", amt: "−₦12,000", time: "Yesterday" },
                    ].map((tx) => (
                      <div key={tx.label} className="flex items-center justify-between rounded-lg px-1 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                            <CheckCircle2 size={10} className="text-green-600" />
                          </div>
                          <span className="text-xs text-muted-foreground">{tx.label}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold">{tx.amt}</p>
                          <p className="text-[9px] text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. SOCIAL PROOF STATS ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 divide-x divide-y divide-border/50 overflow-hidden rounded-2xl border border-border/50 bg-card md:grid-cols-4 md:divide-y-0"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center py-10 text-center">
                <div className="text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">{s.value}</div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. NETWORK PARTNERS ── */}
      <section className="relative overflow-hidden py-10">
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
          Powering payments across every network
        </p>
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee-slow flex shrink-0 items-center gap-12 pr-12">
            {marqueePartners.map((p, i) => (
              <span key={`${p}-${i}`} className="text-lg font-bold tracking-wider text-foreground/20 transition-colors hover:text-foreground/50">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CORE SERVICES ── */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Services</p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Everything you need,
              <br />
              nothing you don&apos;t.
            </h2>
            <p className="max-w-lg text-lg text-muted-foreground">
              Six services, one wallet. Pay bills, buy data, top up airtime, distribute giveaways, and run your reseller business.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Airtime — featured large */}
            <motion.div
              variants={fadeUp}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/25 sm:col-span-2"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Smartphone className="text-white" size={22} />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Airtime</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                Top up any Nigerian number in under 5 seconds. No failed transactions. No delays. Instant delivery every time.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MTN", "Airtel", "Glo", "9mobile"].map((n) => (
                  <span key={n} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold">{n}</span>
                ))}
              </div>
            </motion.div>

            {/* Data */}
            <motion.div variants={fadeUp} className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 transition-colors group-hover:bg-violet-500/15">
                <Wifi className="text-violet-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Data Bundles</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Get online instantly with daily, weekly, and monthly plans at the most competitive rates in Nigeria.
              </p>
            </motion.div>

            {/* Electricity */}
            <motion.div variants={fadeUp} className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 transition-colors group-hover:bg-amber-500/15">
                <Zap className="text-amber-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Electricity</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Never lose power. Pay EKEDC, IKEDC, AEDC and more — anytime, without leaving your seat.
              </p>
            </motion.div>

            {/* Cable TV */}
            <motion.div variants={fadeUp} className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 transition-colors group-hover:bg-orange-500/15">
                <Tv className="text-orange-500" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cable TV</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Keep your DSTV, GOtv, or Startimes running without the queue. Renew your subscription in seconds.
              </p>
            </motion.div>

            {/* Giveaway — featured dark */}
            <motion.div
              variants={fadeUp}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-2xl bg-foreground p-7 text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:col-span-2"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-400">
                <Trophy size={11} />
                Flagship Feature
              </div>
              <div className="mt-3 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                <Gift className="text-amber-400" size={22} />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Giveaway</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-background/60">
                Send airtime or data to 100 people at once — instantly. Perfect for community leaders, brand promotions, and group distributions.
              </p>
              <Link href="#giveaway" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300">
                See how it works <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Resellers */}
            <motion.div variants={fadeUp} className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition-colors group-hover:bg-green-500/15">
                <TrendingUp className="text-green-600 dark:text-green-400" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Reseller</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Earn from every top-up at better rates. Manage bulk transactions and track your business growth in real time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. GIVEAWAY SPOTLIGHT ── */}
      <section
        id="giveaway"
        className="relative mx-4 my-8 overflow-hidden rounded-3xl bg-foreground py-20 text-background md:rounded-[2.5rem] md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />

        <div className="container relative mx-auto px-6">
          <div className="flex flex-col items-start gap-16 md:flex-row md:items-center md:gap-20">

            {/* Left: Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/12 px-4 py-1.5 text-sm font-semibold text-amber-400">
                <Trophy size={14} />
                Flagship Feature
              </div>

              <h2 className="mb-6 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
                Send Airtime or Data
                <br />
                to <span className="text-amber-400">100 People</span>
                <br />
                in Seconds.
              </h2>

              <p className="mb-10 max-w-lg text-lg leading-relaxed text-background/55">
                Select your contacts, set the amount, pick the network — Wakasub distributes instantly across MTN, Airtel, Glo, and 9mobile. Track every delivery in real time.
              </p>

              <div className="mb-10 space-y-3">
                {[
                  "Select from contacts or enter numbers manually",
                  "MTN, Airtel, Glo & 9mobile in one batch",
                  "Up to 100 recipients per giveaway",
                  "Live delivery status tracking per recipient",
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
                  Try Giveaway Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Giveaway workflow card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[340px] flex-shrink-0 md:self-center"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20">
                    <Gift size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">New Giveaway</p>
                    <p className="text-[10px] text-background/45">by Adebayo O.</p>
                  </div>
                  <span className="ml-auto rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">LIVE</span>
                </div>

                <div className="space-y-4 p-5">
                  {/* Recipients */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-background/40">Recipients</p>
                      <span className="text-xs font-semibold text-background/55">12 selected</span>
                    </div>
                    <div className="flex items-center">
                      {[
                        { initial: "A", color: "#3b82f6" },
                        { initial: "C", color: "#8b5cf6" },
                        { initial: "F", color: "#f59e0b" },
                        { initial: "O", color: "#10b981" },
                        { initial: "T", color: "#ef4444" },
                      ].map((p, i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground text-[11px] font-semibold text-white"
                          style={{ backgroundColor: p.color, marginLeft: i > 0 ? "-8px" : "0", zIndex: 5 - i }}
                        >
                          {p.initial}
                        </div>
                      ))}
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground bg-white/10 text-[10px] font-semibold"
                        style={{ marginLeft: "-8px" }}
                      >
                        +7
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {["MTN", "Airtel", "Glo", "9mobile"].map((n) => (
                        <span key={n} className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold text-background/60">{n}</span>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="mb-1 text-[10px] text-background/40">Per person</p>
                      <p className="text-lg font-bold text-amber-400">₦1,000</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="mb-1 text-[10px] text-background/40">Total</p>
                      <p className="text-lg font-bold text-background/80">₦12,000</p>
                    </div>
                  </div>

                  {/* Delivery status */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-background/40">Delivery</p>
                      <span className="text-xs font-semibold text-amber-400">Sending...</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="animate-giveaway-progress h-full rounded-full bg-amber-500" />
                    </div>
                    <div className="mt-1 flex justify-between">
                      <p className="text-[10px] text-background/35">6 of 12 delivered</p>
                      <p className="text-[10px] text-green-400">50%</p>
                    </div>
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

      {/* ── 6. WHY CHOOSE WAKASUB ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Why Wakasub</p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Built for trust.
              <br />
              Designed for speed.
            </h2>
            <p className="mx-auto max-w-lg text-lg text-muted-foreground">
              We don&apos;t cut corners on what matters most — your money moves instantly and your data stays protected.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {[
              {
                icon: Lock,
                title: "Security",
                desc: "End-to-end encryption on every transaction. Your wallet and personal data are protected at all times.",
                iconCls: "text-green-600 dark:text-green-400 bg-green-500/10",
              },
              {
                icon: Zap,
                title: "Instant Delivery",
                desc: "No waiting. Airtime, data, and bill payments are processed the moment you confirm.",
                iconCls: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Pay at 2am on a Sunday. Our infrastructure never sleeps — ever.",
                iconCls: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
              },
              {
                icon: Activity,
                title: "Reliable Infrastructure",
                desc: "99.9% uptime backed by battle-tested payment rails across all Nigerian networks.",
                iconCls: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Transactions",
                desc: "No hidden fees. Every transaction shows exactly what you paid and what was delivered.",
                iconCls: "text-primary bg-primary/10",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${t.iconCls}`}>
                  <t.icon size={20} />
                </div>
                <h3 className="mb-2 font-semibold">{t.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. RESELLER SECTION ── */}
      <section id="resellers" className="bg-secondary/20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Left: Business dashboard mock */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="mb-0.5 text-xs text-muted-foreground">Reseller Dashboard</p>
                    <p className="text-lg font-bold">Business Overview</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Today's Revenue", value: "₦45,200", icon: DollarSign, cls: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950" },
                    { label: "Transactions", value: "87", icon: Activity, cls: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950" },
                    { label: "Active Clients", value: "23", icon: Users, cls: "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-950" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-secondary/50 p-3">
                      <div className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${m.cls}`}>
                        <m.icon size={13} />
                      </div>
                      <p className="text-sm font-bold">{m.value}</p>
                      <p className="text-[10px] leading-tight text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Weekly Sales</p>
                  <div className="flex h-14 items-end gap-1.5">
                    {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                        style={{ height: `${h}%`, transformOrigin: "bottom" }}
                        className={`flex-1 rounded-t-sm ${i === 5 ? "bg-primary" : "bg-primary/20"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-1 flex justify-between">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className={`flex-1 text-center text-[9px] ${i === 5 ? "font-bold text-primary" : "text-muted-foreground"}`}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">For Resellers</p>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Turn Airtime Sales
                <br />
                Into Extra Income.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Whether you&apos;re a roadside vendor or running a digital shop, Wakasub gives you competitive rates, powerful tools, and real-time reports to grow your business.
              </p>

              <div className="mb-10 space-y-4">
                {[
                  { icon: TrendingUp, title: "Better rates on every sale", desc: "Earn more per transaction with our dedicated reseller pricing." },
                  { icon: Layers, title: "Bulk transactions in seconds", desc: "Process hundreds of top-ups without the wait or the hassle." },
                  { icon: BarChart3, title: "Detailed sales reports", desc: "Track your earnings, clients, and performance in real time." },
                  { icon: Globe, title: "Business dashboard", desc: "Manage airtime, data, and clients from one clean interface." },
                ].map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <b.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-0.5 font-semibold">{b.title}</h4>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                <Link href="https://app.wakasub.com/register">
                  Start Reselling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="relative mx-4 my-12 overflow-hidden rounded-3xl bg-foreground py-24 text-background md:rounded-[2.5rem]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">How it works</p>
            <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Up and running in minutes</h2>
            <p className="mx-auto max-w-lg text-lg text-background/50">
              Four simple steps from zero to your first transaction.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { n: "01", icon: Users, title: "Create Account", desc: "Sign up with your email in under 60 seconds. No paperwork, no stress." },
              { n: "02", icon: Wallet, title: "Fund Wallet", desc: "Transfer to your dedicated virtual account — money reflects instantly." },
              { n: "03", icon: Smartphone, title: "Make Payment", desc: "Select your service, enter details, and confirm. Done in seconds." },
              { n: "04", icon: CheckCircle2, title: "Receive Instantly", desc: "Your airtime, data, or bill payment arrives before you close the app." },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-sm font-bold text-primary">
                    {s.n}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <s.icon size={16} className="text-background/60" />
                  </div>
                </div>
                <h4 className="mb-2 text-base font-bold">{s.title}</h4>
                <p className="text-sm leading-relaxed text-background/45">{s.desc}</p>
                {i < 3 && (
                  <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight size={16} className="text-background/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Button size="lg" className="rounded-full px-10 text-base font-semibold" asChild>
              <Link href="https://app.wakasub.com/register">Create Free Account</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Real people, real results</h2>
            <p className="mx-auto max-w-lg text-lg text-muted-foreground">
              Thousands of Nigerians rely on Wakasub every day.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.body}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-border/30 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="py-20 md:py-28">
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
                Using Wakasub Every Day
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/70">
                Sign up free. Fund your wallet in seconds. Start paying bills, buying data, and sending giveaways the smart way.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="h-14 rounded-full px-12 text-base font-bold shadow-xl"
                asChild
              >
                <Link href="https://app.wakasub.com/register">Create Free Account</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 11. FOOTER ── */}
      <footer className="border-t border-border py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="max-w-xs">
              <Link href="/" className="mb-3 flex items-center gap-2">
                <Image src="/waka 512.png" alt="WakaSub" width={28} height={28} />
                <span className="text-lg font-bold">WakaSub</span>
              </Link>
              <p className="mb-6 text-sm text-muted-foreground">
                Nigeria&apos;s easiest and most reliable platform for buying data, airtime, paying bills, and distributing giveaways.
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

            <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-muted-foreground">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">Platform</span>
                <Link href="#services" className="transition-colors hover:text-primary">Services</Link>
                <Link href="#giveaway" className="transition-colors hover:text-primary">Giveaway</Link>
                <Link href="#resellers" className="transition-colors hover:text-primary">Resellers</Link>
                <Link href="#how-it-works" className="transition-colors hover:text-primary">How it works</Link>
                <Link href="https://app.wakasub.com/register" className="transition-colors hover:text-primary">Sign up free</Link>
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

      {/* ── 12. STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="border-t border-border/50 bg-background/95 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-md">
          <Button size="lg" className="h-12 w-full rounded-full text-base font-semibold" asChild>
            <Link href="https://app.wakasub.com/register">Get Started Free</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
