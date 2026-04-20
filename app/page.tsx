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
  TrendingUp,
  Users,
  Timer,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Smartphone,
    label: "Airtime",
    desc: "Top up any Nigerian network instantly — MTN, Airtel, Glo, 9mobile.",
    color: "bg-blue-500",
    live: true,
  },
  {
    icon: Wifi,
    label: "Data Bundles",
    desc: "Buy data plans for yourself or anyone. Always the best rates.",
    color: "bg-violet-500",
    live: true,
  },
  {
    icon: Tv,
    label: "Cable TV",
    desc: "Renew DSTV, GOtv, and Startimes subscriptions in seconds.",
    color: "bg-orange-500",
    live: true,
  },
  {
    icon: Zap,
    label: "Electricity",
    desc: "Pay your PHCN, EKEDC, or any distribution company bills instantly.",
    color: "bg-yellow-500",
    live: true,
  },
  {
    icon: Gift,
    label: "Gift Cards",
    desc: "Buy and redeem international gift cards for major global brands.",
    color: "bg-pink-500",
    live: false,
  },
  {
    icon: Plane,
    label: "Flight Booking",
    desc: "Book domestic and international flights at competitive prices.",
    color: "bg-teal-500",
    live: false,
  },
];

const steps = [
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
];

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
];

const stats = [
  { value: "50K+", label: "Active Users", icon: Users },
  { value: "4.9★", label: "Average Rating", icon: Star },
  { value: "99.9%", label: "Uptime", icon: TrendingUp },
  { value: "<2s", label: "Avg. Delivery", icon: Timer },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/8 blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-400/8 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Trusted by 50,000+ Nigerians
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl"
            >
              Nigeria&apos;s most reliable
              <br />
              <span className="text-primary">digital services</span> platform
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-13 w-full rounded-full px-8 text-base font-semibold sm:w-auto"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-16 border-t border-border/40 pt-10"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Powering payments across all networks
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale transition-all duration-500 hover:opacity-70 hover:grayscale-0">
                {["MTN", "Airtel", "Glo", "9mobile", "DSTV", "GOtv"].map(
                  (b) => (
                    <span
                      key={b}
                      className="text-xl font-extrabold tracking-wider"
                    >
                      {b}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
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
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                {!s.live && (
                  <span className="absolute right-5 top-5 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Coming soon
                  </span>
                )}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${s.color} shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <s.icon className="text-white" size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold">{s.label}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                {s.live && (
                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Use now <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Wakasub ── */}
      <section className="py-28 bg-secondary/30">
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
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Secure by design",
                desc: "End-to-end encryption on every transaction. Your wallet and personal data are protected at all times.",
              },
              {
                icon: Zap,
                title: "Instant delivery",
                desc: "No waiting, no failures. Airtime, data, and bill payments are processed the moment you confirm.",
              },
              {
                icon: Clock,
                title: "Always available",
                desc: "Our infrastructure runs 24/7. Pay bills at 2am on a Sunday — the system never sleeps.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl bg-background p-8 shadow-sm border border-border/50"
              >
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <t.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <s.icon className="text-primary" size={20} />
                </div>
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="mx-4 my-12 overflow-hidden rounded-3xl bg-foreground py-24 text-background md:rounded-[2.5rem]"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row md:gap-20">
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
              <p className="mb-12 text-lg text-background/60">
                Wakasub is designed to get out of your way. Fast onboarding,
                instant wallet funding, and seamless payments every time.
              </p>

              <div className="space-y-10">
                {steps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="flex gap-6"
                  >
                    <span className="mt-0.5 text-sm font-bold text-primary">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-bold">{s.title}</h4>
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-sm flex-1"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4 rounded-2xl bg-background p-6 text-foreground shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Wallet Balance
                    </span>
                    <Wallet size={16} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold">₦12,540.00</div>
                  <div className="h-px bg-border" />
                  <div className="space-y-3">
                    {[
                      { label: "MTN Airtime • 08030000000", amt: "−₦500" },
                      { label: "DSTV Compact • 8204910", amt: "−₦8,000" },
                      { label: "Wallet Top-up", amt: "+₦21,040" },
                    ].map((tx) => (
                      <div
                        key={tx.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground truncate max-w-[160px]">
                          {tx.label}
                        </span>
                        <span
                          className={`font-semibold ${tx.amt.startsWith("+") ? "text-green-600" : ""}`}
                        >
                          {tx.amt}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full rounded-xl" size="sm">
                    Make a Payment
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-28">
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
              Thousands of Nigerians rely on Wakasub every day. Here&apos;s what
              some of them have to say.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/30 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} &bull; {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
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
                  className="h-13 w-full rounded-full px-10 text-base font-bold sm:w-auto"
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
                <Link href="#features" className="hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="#how-it-works" className="hover:text-primary transition-colors">
                  How it works
                </Link>
                <Link href="https://app.wakasub.com/register" className="hover:text-primary transition-colors">
                  Sign up
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  Company
                </span>
                <Link href="/internship" className="hover:text-primary transition-colors">
                  Internship
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Status
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  Legal
                </span>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
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
