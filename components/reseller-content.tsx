"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { PathsBackground } from "@/components/ui/background-paths";
import { BadgePercentIcon } from "@/components/icons/badge-percent";
import { RepeatIcon } from "@/components/icons/repeat";
import { SmartphoneIcon } from "@/components/icons/smartphone";
import { TvIcon } from "@/components/icons/tv";
import { TicketIcon } from "@/components/icons/ticket";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { BanknoteIcon } from "@/components/icons/banknote";
import { ZapIcon } from "@/components/icons/zap";
import { LayersIcon } from "@/components/icons/layers";
import { CodeIcon } from "@/components/icons/code";
import { WalletIcon } from "@/components/icons/wallet";
import { HeadphonesIcon } from "@/components/icons/headphones";
import { WifiIcon } from "@/components/icons/wifi";
import { TrendingUpIcon } from "@/components/icons/trending-up";
import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { UserPlusIcon } from "@/components/icons/user-plus";
import { WhatsAppButton } from "./whatsapp-cta";

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

const features = [
  {
    icon: BadgePercentIcon,
    title: "Nigeria's best rates",
    desc: "Buy airtime, data and bills at discounted wholesale prices and keep the margin on every sale.",
  },
  {
    icon: ZapIcon,
    title: "Instant, automated delivery",
    desc: "Top-ups land the moment your customer pays — 24/7, with no manual processing.",
  },
  {
    icon: LayersIcon,
    title: "Every network & service",
    desc: "Airtime, data, cable TV, electricity and pins, all from a single wallet.",
  },
  {
    icon: CodeIcon,
    title: "Developer-ready API",
    desc: "Plug the Wakasub VTU API into your own app or website and automate everything.",
  },
  {
    icon: WalletIcon,
    title: "Easy wallet funding",
    desc: "Fund instantly via bank transfer or card and start selling in minutes.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 reseller support",
    desc: "Real humans on standby whenever you or your customers need a hand.",
  },
];

const services = [
  {
    icon: SmartphoneIcon,
    label: "Airtime",
    note: "MTN · Airtel · Glo · 9mobile",
  },
  { icon: WifiIcon, label: "Data bundles", note: "Daily · weekly · monthly" },
  { icon: TvIcon, label: "Cable TV", note: "DStv · GOtv · StarTimes" },
  { icon: ZapIcon, label: "Electricity", note: "Every disco, instant tokens" },
  {
    icon: TicketIcon,
    label: "Recharge & exam pins",
    note: "WAEC · NECO & more",
  },
];

const steps = [
  {
    icon: UserPlusIcon,
    n: "01",
    title: "Create your account",
    desc: "Sign up free in under a minute — no setup or activation fees.",
  },
  {
    icon: WalletIcon,
    n: "02",
    title: "Fund your wallet",
    desc: "Top up instantly via bank transfer or card, with whatever you want to sell.",
  },
  {
    icon: RepeatIcon,
    n: "03",
    title: "Sell airtime, data & bills",
    desc: "Serve customers from your dashboard, or automate it with the API.",
  },
  {
    icon: BanknoteIcon,
    n: "04",
    title: "Earn your margin",
    desc: "You buy at wholesale and sell at retail — the difference is yours.",
  },
];

const faqs = [
  {
    q: "What is a Wakasub reseller?",
    a: "A reseller buys airtime, data, cable TV and electricity at discounted wholesale rates and resells them to customers, keeping the margin on every transaction.",
  },
  {
    q: "How much does it cost to start?",
    a: "Signing up is completely free. You only fund your wallet with what you want to sell — there are no setup, activation or monthly fees.",
  },
  {
    q: "Which services can I resell?",
    a: "Airtime and data for MTN, Airtel, Glo and 9mobile, plus cable TV (DStv, GOtv, StarTimes), electricity for every disco, and recharge and exam pins.",
  },
  {
    q: "How fast are transactions delivered?",
    a: "Top-ups are delivered instantly and automatically, 24/7, across every Nigerian network — so your customers are served the moment they pay.",
  },
  {
    q: "Is there a reseller API?",
    a: "Yes. Developers can integrate the Wakasub VTU API to automate airtime, data, cable TV and electricity payments inside their own app, website or business.",
  },
  {
    q: "How do I fund my reseller wallet?",
    a: "Fund instantly with a bank transfer or debit card from your dashboard, and your balance is ready to sell right away.",
  },
];

export function ResellerContent() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <WhatsAppButton href="https://chat.whatsapp.com/GiurYkD9QJe7BCXH1Kegn3" className="fixed bottom-16 right-8 z-1000">
        Join resellers group
      </WhatsAppButton>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-background/80 to-background" />
        <PathsBackground className="mask-[linear-gradient(to_bottom,black_5%,black_60%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 bg-primary/15 blur-[150px]" />

        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary"
              >
                <BadgePercentIcon size={13} />
                VTU Reseller Program
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl"
              >
                Resell airtime &amp; data at{" "}
                <span className="text-gradient">Nigeria&apos;s best rates</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-lg text-muted-foreground"
              >
                Buy airtime, data, cable TV and electricity at discounted
                wholesale prices, delivered instantly on every network. Fund
                your wallet, sell to your customers, and keep the margin on
                every transaction.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="h-13 px-9 text-base font-semibold shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="https://app.wakasub.com/register">
                    Become a reseller
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 bg-transparent px-9 text-base font-medium"
                  asChild
                >
                  <Link href="/contact-support">Talk to our team</Link>
                </Button>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
              >
                <span className="inline-flex items-center gap-1.5">
                  <ZapIcon size={15} className="text-primary" /> Instant
                  delivery
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <RepeatIcon size={15} className="text-primary" /> Free to join
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheckIcon size={15} className="text-primary" /> Secure
                  wallet
                </span>
              </motion.div>
            </motion.div>

            {/* Rate card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-4 -z-10 bg-primary/10 blur-3xl" />
              <div className="overflow-hidden border border-border/60 bg-card shadow-2xl shadow-black/12 ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium opacity-70">
                        Reseller pricing
                      </p>
                      <p className="text-[1.6rem] font-bold tracking-tight">
                        Wholesale rates
                      </p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center bg-white/20 backdrop-blur-sm">
                      <TrendingUpIcon size={18} />
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-white/15 px-3 py-1 text-[11px] font-medium">
                      Instant delivery
                    </span>
                    <span className="bg-white/15 px-3 py-1 text-[11px] font-medium">
                      Best discounts
                    </span>
                    <span className="bg-white/15 px-3 py-1 text-[11px] font-medium">
                      One wallet
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    What you can resell
                  </p>
                  <ul className="space-y-1">
                    {services.map((s) => (
                      <li
                        key={s.label}
                        className="flex items-center justify-between px-2 py-2.5 transition-colors hover:bg-secondary/60"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center bg-primary/10 text-primary">
                            <s.icon size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold leading-tight">
                              {s.label}
                            </p>
                            <p className="text-[11px] leading-tight text-muted-foreground">
                              {s.note}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          <BadgePercentIcon size={11} /> Discounted
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-3 w-full font-semibold" asChild>
                    <Link href="https://app.wakasub.com/register">
                      Start reselling
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Why resell with Wakasub
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Everything you need to run a VTU business
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="border border-border/50 bg-card p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary">
                  <f.icon size={20} />
                </div>
                <h3 className="mb-1.5 text-base font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Start earning in four steps
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="relative border border-border/50 bg-card p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <s.icon size={18} />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground/50">
                    {s.n}
                  </span>
                </div>
                <h3 className="mb-1.5 text-base font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Reseller FAQ
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Questions, answered
            </h2>
          </motion.div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="border border-border/50 bg-card p-6">
                <h3 className="mb-2 text-base font-semibold">{item.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 md:pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto max-w-4xl overflow-hidden bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              Start reselling today
            </h2>
            <p className="mx-auto mb-9 max-w-lg text-lg text-primary-foreground/75">
              Join thousands of resellers earning on airtime, data and bills at
              Nigeria&apos;s best rates.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-13 px-9 text-base font-bold shadow-xl"
                asChild
              >
                <Link href="https://app.wakasub.com/register">
                  Become a reseller
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 border-white/40 bg-transparent px-9 text-base font-medium text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="/contact-support">Talk to our team</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/waka 512.png" alt="WakaSub" width={24} height={24} />
              <span className="font-bold">WakaSub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Wakasub Technologies Ltd. All rights
              reserved.
            </p>
            <Link
              href="/"
              className="text-sm font-medium text-primary transition-colors hover:underline"
            >
              Return to main site
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
