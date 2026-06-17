"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Wifi,
  Zap,
  Wallet,
  ShieldCheck,
  ArrowRight,
  Star,
  Gift,
  CheckCircle2,
  Trophy,
  Users,
  Sparkles,
  Lock,
  Coins,
  Banknote,
  ListChecks,
  Ticket,
  Megaphone,
  MessageCircle,
  Radio,
  PartyPopper,
  Building2,
  Share2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* ── Data ── */

const tickerTop = [
  { icon: Smartphone, label: "₦200 airtime → 50 winners" },
  { icon: Banknote, label: "Ada won ₦5,000 cash" },
  { icon: Wifi, label: "1GB data × 30 members" },
  { icon: Gift, label: "Tobi's giveaway · LIVE" },
  { icon: Smartphone, label: "₦100 airtime claimed" },
  { icon: Banknote, label: "₦20,000 split 10 ways" },
];

const tickerBottom = [
  { icon: Trophy, label: "Chidi rewarded the group chat" },
  { icon: Wifi, label: "2GB data won · just now" },
  { icon: Smartphone, label: "₦500 airtime · instant" },
  { icon: Sparkles, label: "Members-only reward" },
  { icon: Banknote, label: "Cash credited in seconds" },
  { icon: Gift, label: "Match-day giveaway open" },
];

const stats = [
  { value: "₦200", label: "First reward, free" },
  { value: "< 5s", label: "To claim & receive" },
  { value: "4.9★", label: "User rating" },
  { value: "50K+", label: "Nigerians onboard" },
];

const partners = ["MTN", "Airtel", "Glo", "9mobile", "DSTV", "GOtv", "Startimes", "EKEDC", "IKEDC", "AEDC"];
const marqueePartners = [...partners, ...partners];

const rewardTypes = [
  { icon: Smartphone, label: "Airtime", desc: "Any network, any amount" },
  { icon: Wifi, label: "Data", desc: "Daily, weekly & monthly" },
  { icon: Banknote, label: "Cash", desc: "Spendable wallet credit" },
];

const campaignTypes = [
  { icon: Gift, label: "Instant giveaways" },
  { icon: Ticket, label: "Random draws" },
  { icon: Share2, label: "Referral-gated" },
  { icon: Users, label: "Community-only" },
  { icon: ListChecks, label: "Quizzes & tasks" },
  { icon: Megaphone, label: "Sponsored" },
];

const personas = [
  {
    icon: Sparkles,
    title: "Influencers & creators",
    today: "Asking winners for their number in the DMs, buying airtime one by one.",
    now: "Set it up once, share your link, everyone gets paid automatically.",
  },
  {
    icon: MessageCircle,
    title: "Group & channel admins",
    today: "Begging for engagement and rewarding members by hand.",
    now: "Reward your members in seconds — and keep it members-only.",
  },
  {
    icon: Radio,
    title: "Fan & football pages",
    today: "Tons of engagement, no easy way to thank your people.",
    now: "Run match-day giveaways that keep your audience coming back.",
  },
  {
    icon: Building2,
    title: "Brands & businesses",
    today: "Paying an agency for what should be a simple reward.",
    now: "Launch your own reward campaign in minutes — no agency.",
  },
  {
    icon: PartyPopper,
    title: "Friends & family",
    today: "Trying to “spray” cash online — always clumsy.",
    now: "Surprise a friend, celebrate a win, gift the group instantly.",
  },
  {
    icon: Gift,
    title: "People who love rewards",
    today: "Chasing giveaways across comments, rarely getting paid.",
    now: "Claim real airtime, data and cash — free to receive.",
  },
];

const scenarios = [
  {
    tag: "Creator",
    emoji: "📲",
    name: "Tobi celebrates a new video",
    body: "“₦200 airtime to 50 fans who follow and tag a friend.” He funds it once, drops the link in his bio, and wakes up to 50 fans already paid.",
    metric: "Set up once · 50 fans paid",
  },
  {
    tag: "Community",
    emoji: "💬",
    name: "Mrs. Bello boosts her group",
    body: "Poll turnout was low, so she runs a members-only reward: “₦100 data to 30 random parents who vote.” Suddenly everyone's voting.",
    metric: "Members only · 30 rewarded",
  },
  {
    tag: "Cash gift",
    emoji: "🎉",
    name: "Chidi spoils the group chat",
    body: "A friend graduated, so he splits ₦20,000 cash between 10 people. They get spendable balance instantly — no bank details, no waiting.",
    metric: "Cash · paid in seconds",
  },
  {
    tag: "Brand",
    emoji: "🏢",
    name: "A brand launches a product",
    body: "“Win ₦1,000 airtime — 500 winners.” Fans enter for a shot, and every winner is paid the moment the draw closes.",
    metric: "500 winners · one campaign",
  },
];

const trustPillars = [
  { icon: Zap, title: "Rewards arrive instantly", desc: "The moment you win, your airtime, data or cash is paid out automatically — no waiting on anyone." },
  { icon: ShieldCheck, title: "Protected from cheats", desc: "Every campaign is guarded against bots and double-claims, so real people win." },
  { icon: Lock, title: "Your money is safe", desc: "Funds are held securely until they reach the right winners — and you see where every naira went." },
  { icon: Smartphone, title: "Works on every network", desc: "Rewards reach any Nigerian line — MTN, Airtel, Glo, 9mobile — in seconds." },
];

const howItWorks = [
  { n: "01", icon: Wallet, title: "Set it up", desc: "Pick airtime, data or cash, choose winners and rules. Under a minute." },
  { n: "02", icon: Share2, title: "Share your link", desc: "Drop it on WhatsApp, TikTok, X — one link does it all." },
  { n: "03", icon: Sparkles, title: "People claim", desc: "Your people tap, claim in seconds, and receiving is always free." },
  { n: "04", icon: Trophy, title: "Winners get paid", desc: "Rewards land automatically while you watch the claims roll in." },
];

const winnerPerks = [
  { icon: Gift, title: "Free to receive", desc: "Claiming never costs you a thing. What you win is yours, in full." },
  { icon: Zap, title: "Paid in seconds", desc: "No “I'll send it later.” Your reward lands almost instantly." },
  { icon: Ticket, title: "Discover giveaways", desc: "Browse public campaigns and enter the ones you like." },
  { icon: Banknote, title: "Cash you can spend", desc: "Win cash and it's spendable wallet balance right away." },
];

const testimonials = [
  {
    name: "Tobi A.",
    role: "Content creator",
    location: "Lagos",
    body: "I used to DM winners one by one and buy airtime by hand. Now I set up a campaign, share the link, and everyone gets paid for me. My community looks forward to my giveaways now.",
  },
  {
    name: "Mrs. Bello",
    role: "Group admin",
    location: "Abuja",
    body: "A members-only data reward took our poll turnout from sleepy to packed. Only my people could enter, and Wakasub handled the whole thing.",
  },
  {
    name: "Amaka N.",
    role: "Market vendor",
    location: "Onitsha",
    body: "I won ₦200 airtime and it landed on my phone in seconds. A week later I ran my own little reward for my market group — it's that easy.",
  },
  {
    name: "Chidi E.",
    role: "Freelancer",
    location: "Port Harcourt",
    body: "I split ₦20,000 cash between friends when one of us graduated. They got spendable balance instantly — way better than trying to spray money online.",
  },
  {
    name: "Seun D.",
    role: "Software engineer",
    location: "Lagos",
    body: "I'm picky about apps that promise to be fast. Rewards genuinely land before I close the app, and a claim never quietly fails. It just works.",
  },
  {
    name: "Ngozi A.",
    role: "Fan page owner",
    location: "Ibadan",
    body: "Match-day giveaways keep my audience coming back every week. For the first time I can actually reward the people who show up.",
  },
];

/* ── Store badges (monochrome) ── */

function AppleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.46 2.208 3.09 3.792 3.029 1.52-.065 2.09-.987 3.925-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function GooglePlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.487 1.487 0 0 0-.946-.138l11.04 10.932zm0 2.067l-11 10.933c.298.064.612.019.906-.138l13.306-7.522-3.212-3.273z" />
    </svg>
  );
}

/* Reward ticker pill */
function TickerRow({ items, reverse = false }: { items: typeof tickerTop; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex shrink-0 items-center gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((p, i) => (
          <span
            key={`${p.label}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <p.icon size={11} className="text-primary" />
            </span>
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <Navbar />

      {/* ── 1. HERO (single, centered) ── */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16 text-center">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-background/80 to-background" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
        <div className="pointer-events-none absolute right-[12%] top-[18%] -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <motion.div initial="hidden" animate="show" variants={stagger} className="flex w-full max-w-4xl flex-col items-center">
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/70 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            The rewards hub of Nigeria
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-6xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.5rem]"
          >
            Reward your people
            <br />
            <span className="text-gradient">in seconds.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
            Share one link. Airtime, data and cash land instantly.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-13 rounded-full px-9 text-base font-semibold shadow-lg shadow-primary/25" asChild>
              <Link href="https://app.wakasub.com/register">
                Create a Campaign
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-13 rounded-full bg-transparent px-9 text-base font-medium" asChild>
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["A", "C", "T", "N"].map((c) => (
                <span key={c} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-primary/15 text-[11px] font-bold text-primary">
                  {c}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <span>Loved by 50,000+ Nigerians</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Reward ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex w-full max-w-5xl flex-col gap-3"
        >
          <TickerRow items={tickerTop} />
          <TickerRow items={tickerBottom} reverse />
        </motion.div>
      </section>

      {/* ── 2. STATS ── */}
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

      {/* ── 3. PARTNERS ── */}
      <section className="relative overflow-hidden py-10">
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
          Rewards delivered across every Nigerian network
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

      {/* ── 4. TWO WAYS ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Two ways in</p>
            <h2 className="text-4xl font-bold leading-[1.05] md:text-5xl">Give rewards, or win them.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {/* Reward your people — dark */}
            <motion.div variants={fadeUp} className="relative flex flex-col overflow-hidden rounded-3xl bg-foreground p-8 text-background md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Gift size={22} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Reward your people</h3>
              <p className="mb-6 text-sm leading-relaxed text-background/65">
                Pick a reward, share one link, and everyone who qualifies gets paid automatically.
              </p>
              <ul className="mb-8 space-y-2.5">
                {["Set up in under a minute", "One link works everywhere", "Winners paid automatically"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-background/75">
                    <CheckCircle2 size={15} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto w-fit rounded-full px-7 font-semibold" asChild>
                <Link href="https://app.wakasub.com/register">
                  Create a Campaign
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Win rewards — light */}
            <motion.div variants={fadeUp} className="relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Trophy size={22} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Claim your rewards</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Got a link? Tap it and the airtime, data or cash is yours in seconds. Or browse live giveaways.
              </p>
              <ul className="mb-8 space-y-2.5">
                {["Free to receive — always", "Lands on your phone in seconds", "Discover public giveaways"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-auto w-fit rounded-full bg-transparent px-7 font-semibold" asChild>
                <Link href="#how-it-works">
                  How claiming works
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. REWARDS ── */}
      <section id="rewards" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">What you can give & win</p>
            <h2 className="text-4xl font-bold md:text-5xl">Three rewards. Endless ways.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {rewardTypes.map((r) => (
              <motion.div
                key={r.label}
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{r.label}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5 rounded-3xl border border-border/50 bg-secondary/30 p-7 md:flex-row md:items-center md:justify-between"
          >
            <div className="shrink-0">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Campaign types</p>
              <p className="text-lg font-semibold">Pick the mechanic that fits</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {campaignTypes.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  <c.icon size={14} className="text-primary" />
                  {c.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. WHO IT'S FOR ── */}
      <section id="who" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Who it&apos;s for</p>
            <h2 className="text-4xl font-bold md:text-5xl">Made for the way you reward.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {personas.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon size={20} />
                </div>
                <h3 className="mb-3 font-semibold">{p.title}</h3>
                <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{p.today}</p>
                <p className="mt-auto flex gap-1.5 text-sm leading-relaxed text-foreground">
                  <Sparkles size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{p.now}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. SCENARIOS ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">In the wild</p>
            <h2 className="text-4xl font-bold md:text-5xl">Real moments, real rewards.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {scenarios.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.emoji}</span>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">{s.tag}</span>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="flex items-center gap-2 border-t border-border/40 pt-4 text-sm font-semibold text-primary">
                  <Trophy size={14} />
                  {s.metric}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. JUST HERE TO WIN ── */}
      <section
        id="win"
        className="relative mx-4 my-8 overflow-hidden rounded-3xl bg-foreground py-20 text-background md:rounded-[2.5rem] md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/25 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary/15 blur-[140px]" />

        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-background/80">
              <Trophy size={14} className="text-primary" /> Just here to win?
            </div>
            <h2 className="text-4xl font-bold leading-[1.05] md:text-5xl">Free airtime, data &amp; cash.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {winnerPerks.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary">
                  <p.icon size={18} />
                </div>
                <h4 className="mb-2 text-base font-bold">{p.title}</h4>
                <p className="text-sm leading-relaxed text-background/45">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button size="lg" className="rounded-full px-10 text-base font-semibold" asChild>
              <Link href="https://app.wakasub.com/register">Start claiming rewards</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 9. TRUST ── */}
      <section id="why" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Why Wakasub</p>
            <h2 className="text-4xl font-bold md:text-5xl">Built so everyone gets paid.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustPillars.map((t) => (
              <motion.div key={t.title} variants={fadeUp} className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <t.icon size={20} />
                </div>
                <h3 className="mb-2 font-semibold">{t.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. UTILITIES ── */}
      <section id="utilities" className="bg-secondary/20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Everyday too</p>
              <h2 className="mb-5 text-4xl font-bold md:text-5xl">Top up. Pay bills. Spend your wins.</h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                The same wallet that powers every reward handles your airtime, data, electricity and cable — all one tap away.
              </p>

              <div className="mb-10 grid grid-cols-2 gap-3">
                {[
                  { icon: Smartphone, label: "Airtime", sub: "MTN · Airtel · Glo · 9mobile" },
                  { icon: Wifi, label: "Data", sub: "Daily, weekly & monthly" },
                  { icon: Zap, label: "Electricity", sub: "EKEDC · IKEDC · AEDC" },
                  { icon: Coins, label: "Cable TV", sub: "DSTV · GOtv · Startimes" },
                ].map((u) => (
                  <div key={u.label} className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <u.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{u.label}</p>
                      <p className="text-[11px] text-muted-foreground">{u.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                <Link href="https://app.wakasub.com/register">
                  Open Wakasub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Wallet mock */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl shadow-black/12 ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium opacity-70">Wallet balance</p>
                      <p className="text-[2rem] font-bold tracking-tight">₦24,500.00</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Wallet size={18} />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">+ Add money</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">🎁 Won ₦2,000</span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Quick actions</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: Smartphone, label: "Airtime" },
                      { icon: Wifi, label: "Data" },
                      { icon: Zap, label: "Electric" },
                      { icon: Gift, label: "Reward" },
                    ].map((a) => (
                      <div key={a.label} className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2 transition-colors hover:bg-secondary/70">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <a.icon size={15} />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">{a.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1 rounded-xl bg-secondary/40 p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Recent</p>
                    {[
                      { label: "Won ₦200 · Tobi's giveaway", amt: "+₦200", time: "Just now", positive: true },
                      { label: "MTN 1GB Data", amt: "−₦280", time: "2h ago" },
                      { label: "Funded: Market group", amt: "−₦5,000", time: "Yesterday" },
                    ].map((tx) => (
                      <div key={tx.label} className="flex items-center justify-between rounded-lg px-1 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            {tx.positive ? <Gift size={10} className="text-primary" /> : <CheckCircle2 size={10} className="text-primary" />}
                          </div>
                          <span className="text-xs text-muted-foreground">{tx.label}</span>
                        </div>
                        <div className="text-right">
                          <p className={`text-xs font-semibold ${tx.positive ? "text-primary" : ""}`}>{tx.amt}</p>
                          <p className="text-[9px] text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 11. HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="relative mx-4 my-12 overflow-hidden rounded-3xl bg-foreground py-24 text-background md:rounded-[2.5rem]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />

        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">How it works</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">From idea to paid winners.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {howItWorks.map((s, i) => (
              <motion.div key={s.n} variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
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
                {i < howItWorks.length - 1 && (
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
              <Link href="https://app.wakasub.com/register">Create your first campaign</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 12. TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
            <h2 className="text-4xl font-bold md:text-5xl">Creators and winners.</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-md">
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

      {/* ── 13. FINAL CTA ── */}
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
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Reward your people.
                <br />
                Or get rewarded.
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-lg text-primary-foreground/70">
                Create a campaign in under a minute, or claim your first reward in seconds.
              </p>
              <Button size="lg" variant="secondary" className="h-14 rounded-full px-12 text-base font-bold shadow-xl" asChild>
                <Link href="https://app.wakasub.com/register">Create a Campaign</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 14. FOOTER ── */}
      <footer className="border-t border-border py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="max-w-xs">
              <Link href="/" className="mb-3 flex items-center gap-2">
                <Image src="/waka 512.png" alt="WakaSub" width={28} height={28} />
                <span className="text-lg font-bold">WakaSub</span>
              </Link>
              <p className="mb-6 text-sm text-muted-foreground">
                The rewards hub of Nigeria — reward your people with airtime, data and cash in seconds.
              </p>
              <div className="flex flex-col gap-2">
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-foreground/5 px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-foreground/10">
                  <AppleIcon size={15} />
                  App Store
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-foreground/5 px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-foreground/10">
                  <GooglePlayIcon size={15} />
                  Google Play
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-muted-foreground">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">Platform</span>
                <Link href="#rewards" className="transition-colors hover:text-primary">Rewards</Link>
                <Link href="#who" className="transition-colors hover:text-primary">Who it&apos;s for</Link>
                <Link href="#utilities" className="transition-colors hover:text-primary">Utilities</Link>
                <Link href="#how-it-works" className="transition-colors hover:text-primary">How it works</Link>
                <Link href="https://app.wakasub.com/register" className="transition-colors hover:text-primary">Create a campaign</Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">Company</span>
                <Link href="/internship" className="transition-colors hover:text-primary">Internship</Link>
                <Link href="/contact-support" className="transition-colors hover:text-primary">Contact</Link>
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
              <CheckCircle2 size={13} className="text-primary" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── 15. STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="border-t border-border/50 bg-background/95 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-md">
          <Button size="lg" className="h-12 w-full rounded-full text-base font-semibold" asChild>
            <Link href="https://app.wakasub.com/register">Create a Campaign</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
