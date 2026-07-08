"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { RotatingWord } from "@/components/rotating-word";
import TestimonialsMarquee from "@/components/ui/community-testimonial";
import { PathsBackground } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { SmartphoneIcon } from "@/components/icons/smartphone";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { StarIcon } from "@/components/icons/star";
import { GiftIcon } from "@/components/icons/gift";
import { CheckCircle2Icon } from "@/components/icons/check-circle-2";
import { TrophyIcon } from "@/components/icons/trophy";
import { CoinsIcon } from "@/components/icons/coins";
import { BanknoteIcon } from "@/components/icons/banknote";
import { ListChecksIcon } from "@/components/icons/list-checks";
import { TicketIcon } from "@/components/icons/ticket";
import { MegaphoneIcon } from "@/components/icons/megaphone";
import { RadioIcon } from "@/components/icons/radio";
import { PartyPopperIcon } from "@/components/icons/party-popper";
import { Building2Icon } from "@/components/icons/building-2";
import { Share2Icon } from "@/components/icons/share-2";
import { BadgePercentIcon } from "@/components/icons/badge-percent";
import { WifiIcon } from "@/components/icons/wifi";
import { ZapIcon } from "@/components/icons/zap";
import { WalletIcon } from "@/components/icons/wallet";
import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { UsersIcon } from "@/components/icons/users";
import { SparklesIcon } from "@/components/icons/sparkles";
import { LockIcon } from "@/components/icons/lock";
import { MessageCircleIcon } from "@/components/icons/message-circle";
import { CheckIcon } from "@/components/icons/check";
import { MousePointerClickIcon } from "@/components/icons/mouse-pointer-click";

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
  { icon: SmartphoneIcon, label: "₦200 airtime → 50 winners" },
  { icon: BanknoteIcon, label: "Ada won ₦5,000 cash" },
  { icon: WifiIcon, label: "1GB data × 30 members" },
  { icon: GiftIcon, label: "Tobi's giveaway · LIVE" },
  { icon: SmartphoneIcon, label: "₦100 airtime claimed" },
  { icon: BanknoteIcon, label: "₦20,000 split 10 ways" },
];

const tickerBottom = [
  { icon: TrophyIcon, label: "Chidi rewarded the group chat" },
  { icon: WifiIcon, label: "2GB data won · just now" },
  { icon: SmartphoneIcon, label: "₦500 airtime · instant" },
  { icon: SparklesIcon, label: "Members-only reward" },
  { icon: BanknoteIcon, label: "Cash credited in seconds" },
  { icon: GiftIcon, label: "Match-day giveaway open" },
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
  { icon: SmartphoneIcon, label: "Airtime", desc: "Any network, any amount" },
  { icon: WifiIcon, label: "Data", desc: "Daily, weekly & monthly" },
  { icon: BanknoteIcon, label: "Cash", desc: "Spendable wallet credit" },
];

const campaignTypes = [
  { icon: GiftIcon, label: "Instant giveaways" },
  { icon: TicketIcon, label: "Random draws" },
  { icon: Share2Icon, label: "Referral-gated" },
  { icon: UsersIcon, label: "Community-only" },
  { icon: ListChecksIcon, label: "Quizzes & tasks" },
  { icon: MegaphoneIcon, label: "Sponsored" },
];

const personas = [
  {
    icon: SparklesIcon,
    title: "Influencers & creators",
    today: "Asking winners for their number in the DMs, buying airtime one by one.",
    now: "Set it up once, share your link, everyone gets paid automatically.",
  },
  {
    icon: MessageCircleIcon,
    title: "Group & channel admins",
    today: "Begging for engagement and rewarding members by hand.",
    now: "Reward your members in seconds — and keep it members-only.",
  },
  {
    icon: RadioIcon,
    title: "Fan & football pages",
    today: "Tons of engagement, no easy way to thank your people.",
    now: "Run match-day giveaways that keep your audience coming back.",
  },
  {
    icon: Building2Icon,
    title: "Brands & businesses",
    today: "Paying an agency for what should be a simple reward.",
    now: "Launch your own reward campaign in minutes — no agency.",
  },
  {
    icon: PartyPopperIcon,
    title: "Friends & family",
    today: "Trying to “spray” cash online — always clumsy.",
    now: "Surprise a friend, celebrate a win, gift the group instantly.",
  },
  {
    icon: GiftIcon,
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
  { icon: ZapIcon, title: "Rewards arrive instantly", desc: "The moment you win, your airtime, data or cash is paid out automatically — no waiting on anyone." },
  { icon: ShieldCheckIcon, title: "Protected from cheats", desc: "Every campaign is guarded against bots and double-claims, so real people win." },
  { icon: LockIcon, title: "Your money is safe", desc: "Funds are held securely until they reach the right winners — and you see where every naira went." },
  { icon: SmartphoneIcon, title: "Works on every network", desc: "Rewards reach any Nigerian line — MTN, Airtel, Glo, 9mobile — in seconds." },
];

const howItWorks = [
  { n: "01", icon: WalletIcon, title: "Set it up", desc: "Pick airtime, data or cash, choose winners and rules. Under a minute." },
  { n: "02", icon: Share2Icon, title: "Share your link", desc: "Drop it on WhatsApp, TikTok, X — one link does it all." },
  { n: "03", icon: SparklesIcon, title: "People claim", desc: "Your people tap, claim in seconds, and receiving is always free." },
  { n: "04", icon: TrophyIcon, title: "Winners get paid", desc: "Rewards land automatically while you watch the claims roll in." },
];

const winnerPerks = [
  { icon: GiftIcon, title: "Free to receive", desc: "Claiming never costs you a thing. What you win is yours, in full." },
  { icon: ZapIcon, title: "Paid in seconds", desc: "No “I'll send it later.” Your reward lands almost instantly." },
  { icon: TicketIcon, title: "Discover giveaways", desc: "Browse public campaigns and enter the ones you like." },
  { icon: BanknoteIcon, title: "Cash you can spend", desc: "Win cash and it's spendable wallet balance right away." },
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

/* ── Interactive hero: live claim demo ── */

const demoRewards = [
  { icon: SmartphoneIcon, amount: "₦200", kind: "airtime", network: "MTN", time: "2.4s" },
  { icon: WifiIcon, amount: "1GB", kind: "data", network: "Airtel", time: "3.1s" },
  { icon: BanknoteIcon, amount: "₦5,000", kind: "cash", network: "Wallet", time: "1.9s" },
];

const demoGivers = [
  { initial: "T", name: "Tobi", campaign: "Match-day giveaway", phone: "0803 ••• •• 42" },
  { initial: "A", name: "Ada", campaign: "10k followers drop", phone: "0701 ••• •• 18" },
  { initial: "C", name: "Chidi", campaign: "Group reward", phone: "0809 ••• •• 73" },
];

type DemoStep = "offer" | "sending" | "done";

function Confetti({ seed }: { seed: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * Math.PI * 2 + seed;
        const dist = 60 + ((i * 37 + seed * 13) % 70);
        return {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 20,
          rotate: (i * 57 + seed * 90) % 360,
          delay: (i % 5) * 0.02,
          tint: i % 3,
        };
      }),
    [seed],
  );
  const tints = ["bg-primary", "bg-primary/60", "bg-[oklch(0.72_0.14_250)]"];
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute h-2 w-2 rounded-[2px] ${tints[p.tint]}`}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 0.4, rotate: p.rotate }}
          transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function LiveClaimDemo() {
  const [round, setRound] = useState(0);
  const [step, setStep] = useState<DemoStep>("offer");

  const reward = demoRewards[round % demoRewards.length];
  const giver = demoGivers[round % demoGivers.length];

  useEffect(() => {
    const durations: Record<DemoStep, number> = { offer: 2600, sending: 1600, done: 2900 };
    const next: Record<DemoStep, DemoStep> = { offer: "sending", sending: "done", done: "offer" };
    const t = setTimeout(() => {
      if (step === "done") setRound((r) => r + 1);
      setStep(next[step]);
    }, durations[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="relative w-full max-w-sm">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-[1.7rem] bg-linear-to-b from-primary/30 to-transparent blur-md" />

      <div className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/80 p-1.5 shadow-2xl shadow-primary/10 backdrop-blur-xl">
        {/* header */}
        <div className="flex items-center gap-2.5 px-3.5 pb-3 pt-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
            {giver.initial}
          </span>
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-[13px] font-semibold leading-tight">{giver.name}</p>
            <p className="truncate text-[11px] leading-tight text-muted-foreground">{giver.campaign}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Live
          </span>
        </div>

        {/* body */}
        <div className="relative min-h-[208px] overflow-hidden rounded-[1.2rem] bg-background/60 p-5">
          <AnimatePresence mode="wait">
            {step === "offer" && (
              <motion.div
                key="offer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12">
                  <reward.icon size={26} className="text-primary" />
                </div>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  You&apos;ve been sent
                </p>
                <p className="text-2xl font-extrabold leading-tight">
                  {reward.amount} <span className="text-muted-foreground/80">{reward.kind}</span>
                </p>
                <div className="relative mt-4 w-full">
                  <div className="flex h-11 w-full items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                    Claim now
                  </div>
                  {/* auto-tapping cursor */}
                  <motion.div
                    className="absolute -bottom-1 right-7 text-foreground"
                    initial={{ x: 26, y: 22, opacity: 0 }}
                    animate={{ x: [26, 0, 0], y: [22, 0, 0], opacity: [0, 1, 1], scale: [1, 1, 0.82] }}
                    transition={{ duration: 1.2, delay: 1.1, times: [0, 0.7, 1], ease: "easeOut" }}
                  >
                    <MousePointerClickIcon size={20} className="drop-shadow" />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {step === "sending" && (
              <motion.div
                key="sending"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col items-center justify-center"
              >
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  <reward.icon size={22} className="text-primary" />
                </div>
                <p className="mt-4 text-sm font-semibold">Sending {reward.amount} {reward.kind}…</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  to {giver.phone} · {reward.network}
                </p>
                <div className="mt-4 h-1.5 w-44 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}

            {step === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative flex h-full flex-col items-center justify-center"
              >
                <Confetti seed={round} />
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                >
                  <CheckIcon size={28} />
                </motion.div>
                <p className="mt-3 text-base font-bold">{reward.amount} {reward.kind} delivered</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Landed in {reward.time} · no app switch
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* footer */}
        <div className="flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-medium text-muted-foreground">
          <LockIcon size={11} className="text-primary" />
          Secured by Wakasub · wakasub.com
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <Navbar />

      {/* ── 1. HERO (single, centered) ── */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-16 text-center md:pt-52">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-background/80 to-background" />
        <PathsBackground className="mask-[linear-gradient(to_bottom,black_5%,black_60%,transparent)]" />
        <div className="glow-primary pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15" />
        <div className="glow-primary pointer-events-none absolute right-[12%] top-[18%] -z-10 h-72 w-72 rounded-full opacity-10" />

        <motion.div initial="hidden" animate="show" variants={stagger} className="flex w-full max-w-4xl flex-col items-center">
          <motion.h1
            variants={fadeUp}
            className="text-balance text-6xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.5rem]"
          >
            Reward your <RotatingWord />
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
                <ArrowRightIcon className="ml-1 h-4 w-4" />
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
                  <StarIcon key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <span>Loved by 50,000+ Nigerians</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive live-claim demo */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-12 flex w-full justify-center"
        >
          <LiveClaimDemo />
        </motion.div>

        {/* Reward ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex w-full max-w-5xl flex-col gap-3"
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

      {/* ── 3.5 RESELLER HINT ── */}
      <section className="px-6 py-12 md:py-16">
        <div className="container mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Link
              href="/reseller"
              className="group relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="glow-primary pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-10" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BadgePercentIcon size={22} />
                </div>
                <div>
                  <span className="mb-1.5 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    For VTU resellers
                  </span>
                  <h2 className="text-xl font-bold leading-tight md:text-2xl">
                    Are you a reseller? Get Nigeria&apos;s best rates.
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                    Resell airtime, data, cable TV &amp; electricity at wholesale prices — instant delivery, an API, and 24/7 support.
                  </p>
                </div>
              </div>
              <span className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:translate-x-0.5">
                Explore reselling
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
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
              <div className="glow-primary pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <GiftIcon size={22} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Reward your people</h3>
              <p className="mb-6 text-sm leading-relaxed text-background/65">
                Pick a reward, share one link, and everyone who qualifies gets paid automatically.
              </p>
              <ul className="mb-8 space-y-2.5">
                {["Set up in under a minute", "One link works everywhere", "Winners paid automatically"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-background/75">
                    <CheckCircle2Icon size={15} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto w-fit rounded-full px-7 font-semibold" asChild>
                <Link href="https://app.wakasub.com/register">
                  Create a Campaign
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Win rewards — light */}
            <motion.div variants={fadeUp} className="relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="glow-primary pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <TrophyIcon size={22} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Claim your rewards</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Got a link? Tap it and the airtime, data or cash is yours in seconds. Or browse live giveaways.
              </p>
              <ul className="mb-8 space-y-2.5">
                {["Free to receive — always", "Lands on your phone in seconds", "Discover public giveaways"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2Icon size={15} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-auto w-fit rounded-full bg-transparent px-7 font-semibold" asChild>
                <Link href="#how-it-works">
                  How claiming works
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
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
                  <SparklesIcon size={15} className="mt-0.5 shrink-0 text-primary" />
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
                  <TrophyIcon size={14} />
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
        <div className="glow-primary pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full opacity-25" />
        <div className="glow-primary pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full opacity-15" />

        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-background/80">
              <TrophyIcon size={14} className="text-primary" /> Just here to win?
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
                  { icon: SmartphoneIcon, label: "Airtime", sub: "MTN · Airtel · Glo · 9mobile" },
                  { icon: WifiIcon, label: "Data", sub: "Daily, weekly & monthly" },
                  { icon: ZapIcon, label: "Electricity", sub: "EKEDC · IKEDC · AEDC" },
                  { icon: CoinsIcon, label: "Cable TV", sub: "DSTV · GOtv · Startimes" },
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
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
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
                      <WalletIcon size={18} />
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
                      { icon: SmartphoneIcon, label: "Airtime" },
                      { icon: WifiIcon, label: "Data" },
                      { icon: ZapIcon, label: "Electric" },
                      { icon: GiftIcon, label: "Reward" },
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
                            {tx.positive ? <GiftIcon size={10} className="text-primary" /> : <CheckCircle2Icon size={10} className="text-primary" />}
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
        <div className="glow-primary pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20" />
        <div className="glow-primary pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-15" />

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
                    <ArrowRightIcon size={16} className="text-background/20" />
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
      <section id="testimonials" className="overflow-hidden py-24 md:py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto mb-14 px-6 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="text-4xl font-bold md:text-5xl">Creators and winners.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <TestimonialsMarquee
            rows={[
              { id: "r1", items: testimonials.slice(0, 3), duration: "50s" },
              { id: "r2", items: testimonials.slice(3, 6), duration: "62s", reverse: true },
            ]}
          />
        </motion.div>
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
            <div className="glow-white pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-10" />
            <div className="glow-white pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full opacity-10" />

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
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12 md:gap-x-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-5 md:pr-8">
              <Link href="/" className="mb-4 flex items-center gap-2">
                <Image src="/waka 512.png" alt="WakaSub" width={30} height={30} />
                <span className="text-lg font-bold tracking-tight">WakaSub</span>
              </Link>
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                The rewards hub of Nigeria — reward your people with airtime, data and cash in seconds.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a href="https://apps.apple.com/ng/app/wakasub-data-bills-and-more/id6777371534" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-foreground/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
                  <AppleIcon size={16} />
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.wakasub.vtu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-foreground/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10">
                  <GooglePlayIcon size={16} />
                  Google Play
                </a>
              </div>
            </div>

            {/* Platform */}
            <div className="md:col-span-3">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-foreground">Platform</span>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#rewards" className="transition-colors hover:text-primary">Rewards</Link></li>
                <li><Link href="#who" className="transition-colors hover:text-primary">Who it&apos;s for</Link></li>
                <li><Link href="#utilities" className="transition-colors hover:text-primary">Utilities</Link></li>
                <li><Link href="/reseller" className="transition-colors hover:text-primary">Become a reseller</Link></li>
                <li><Link href="#how-it-works" className="transition-colors hover:text-primary">How it works</Link></li>
                <li><Link href="https://app.wakasub.com/register" className="transition-colors hover:text-primary">Create a campaign</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-foreground">Company</span>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/internship" className="transition-colors hover:text-primary">Internship</Link></li>
                <li><Link href="/contact-support" className="transition-colors hover:text-primary">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-2">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-foreground">Legal</span>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="https://app.wakasub.com/privacy-policy" className="transition-colors hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Wakasub Technologies Ltd. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
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
