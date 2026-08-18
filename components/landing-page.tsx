"use client";

import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { Navbar } from "@/components/navbar";
import { DataPricing } from "@/components/data-pricing";
import type { DataPlansPayload, DataPlansSource } from "@/lib/data-plans";
import { RotatingWord } from "@/components/rotating-word";
import TestimonialsMarquee from "@/components/ui/community-testimonial";
import { PathsBackground } from "@/components/ui/background-paths";
import {
  FloatingIconsLayer,
  type FloatingIconItem,
} from "@/components/ui/floating-icons-hero-section";
import { CinematicFooter } from "@/components/ui/motion-footer";
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

// hoverColor mirrors the hero's RotatingWord palette (emerald/violet/amber/rose)
const stats = [
  {
    prefix: "₦",
    target: 200,
    label: "First reward, free",
    hoverColor: "group-hover/stat:text-emerald-500",
  },
  {
    prefix: "< ",
    target: 5,
    suffix: "s",
    label: "To claim & receive",
    hoverColor: "group-hover/stat:text-violet-500",
  },
  {
    target: 4.9,
    decimals: 1,
    suffix: "★",
    label: "User rating",
    hoverColor: "group-hover/stat:text-amber-500",
  },
  {
    target: 50,
    suffix: "K+",
    label: "Nigerians onboard",
    hoverColor: "group-hover/stat:text-rose-500",
  },
];

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
    today:
      "Asking winners for their number in the DMs, buying airtime one by one.",
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

const trustPillars = [
  {
    icon: ZapIcon,
    title: "Rewards arrive instantly",
    desc: "The moment you win, your airtime, data or cash is paid out automatically — no waiting on anyone.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Protected from cheats",
    desc: "Every campaign is guarded against bots and double-claims, so real people win.",
  },
  {
    icon: LockIcon,
    title: "Your money is safe",
    desc: "Funds are held securely until they reach the right winners — and you see where every naira went.",
  },
  {
    icon: SmartphoneIcon,
    title: "Works on every network",
    desc: "Rewards reach any Nigerian line — MTN, Airtel, Glo, 9mobile — in seconds.",
  },
];

const howItWorks = [
  {
    n: "01",
    icon: WalletIcon,
    title: "Set it up",
    desc: "Pick airtime, data or cash, choose winners and rules. Under a minute.",
  },
  {
    n: "02",
    icon: Share2Icon,
    title: "Share your link",
    desc: "Drop it on WhatsApp, TikTok, X — one link does it all.",
  },
  {
    n: "03",
    icon: SparklesIcon,
    title: "People claim",
    desc: "Your people tap, claim in seconds, and receiving is always free.",
  },
  {
    n: "04",
    icon: TrophyIcon,
    title: "Winners get paid",
    desc: "Rewards land automatically while you watch the claims roll in.",
  },
];

const winnerPerks = [
  {
    icon: GiftIcon,
    title: "Free to receive",
    desc: "Claiming never costs you a thing. What you win is yours, in full.",
  },
  {
    icon: ZapIcon,
    title: "Paid in seconds",
    desc: "No “I'll send it later.” Your reward lands almost instantly.",
  },
  {
    icon: TicketIcon,
    title: "Discover giveaways",
    desc: "Browse public campaigns and enter the ones you like.",
  },
  {
    icon: BanknoteIcon,
    title: "Cash you can spend",
    desc: "Win cash and it's spendable wallet balance right away.",
  },
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

/* Reward ticker pill */
function TickerRow({
  items,
  reverse = false,
}: {
  items: typeof tickerTop;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((p, i) => (
          <span
            key={`${p.label}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center bg-primary/10">
              <p.icon size={11} className="text-primary" />
            </span>
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hero floating icons: the rewards story (give → win), tinted like the rotating word ── */

const heroFloatingIcons: FloatingIconItem[] = [
  {
    id: 1,
    icon: GiftIcon,
    tint: "text-rose-500",
    className: "top-[15%] left-[7%]",
  },
  { id: 2, icon: SmartphoneIcon, className: "top-[13%] right-[8%]" },
  {
    id: 3,
    icon: BanknoteIcon,
    tint: "text-emerald-500",
    className: "top-[36%] left-[4%]",
  },
  {
    id: 4,
    icon: WifiIcon,
    tint: "text-violet-500",
    className: "top-[33%] right-[5%]",
  },
  {
    id: 5,
    icon: TrophyIcon,
    tint: "text-amber-500",
    className: "top-[55%] left-[9%] hidden md:block",
  },
  {
    id: 6,
    icon: CoinsIcon,
    tint: "text-blue-500",
    className: "top-[53%] right-[10%] hidden md:block",
  },
  { id: 7, icon: WalletIcon, className: "top-[5%] left-[24%] hidden lg:block" },
  {
    id: 8,
    icon: TicketIcon,
    tint: "text-violet-500",
    className: "top-[6%] right-[26%] hidden lg:block",
  },
  {
    id: 9,
    icon: PartyPopperIcon,
    tint: "text-rose-500",
    className: "top-[68%] left-[17%] hidden lg:block",
  },
  {
    id: 10,
    icon: ZapIcon,
    tint: "text-amber-500",
    className: "top-[66%] right-[19%] hidden lg:block",
  },
];

/* ── Magical stats band: count-up numbers, cursor spotlight, shimmer sweep ── */

function StatValue({
  prefix = "",
  target,
  suffix = "",
  decimals = 0,
}: {
  prefix?: string;
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduced ? target : 0));
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(target);
      setSettled(true);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
      onComplete: () => setSettled(true),
    });
    return () => controls.stop();
  }, [inView, target, reduced]);

  return (
    <motion.span
      ref={ref}
      className="inline-block tabular-nums"
      animate={settled && !reduced ? { scale: [1, 1.08, 1] } : undefined}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}

function MagicStats() {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const reduced = useReducedMotion();
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)`;

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-400);
        my.set(-400);
      }}
      className="group relative grid grid-cols-2 divide-x divide-y divide-border/50 overflow-hidden border border-border/50 bg-card md:grid-cols-4 md:divide-y-0"
    >
      {/* cursor-following spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      {/* periodic shimmer sweep */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-primary/10 to-transparent"
          initial={{ x: "-130%" }}
          animate={{ x: ["-130%", "530%"] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: "easeInOut",
          }}
        />
      )}

      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          className="group/stat relative flex flex-col items-center py-10 text-center"
        >
          <div
            className={`text-4xl font-extrabold text-primary transition-colors duration-300 md:text-5xl lg:text-6xl ${s.hoverColor}`}
          >
            <StatValue
              prefix={s.prefix}
              target={s.target}
              suffix={s.suffix}
              decimals={s.decimals}
            />
          </div>
          <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Interactive hero: live claim demo ── */

const demoRewards = [
  {
    icon: SmartphoneIcon,
    amount: "₦200",
    kind: "airtime",
    network: "MTN",
    time: "2.4s",
  },
  {
    icon: WifiIcon,
    amount: "1GB",
    kind: "data",
    network: "Airtel",
    time: "3.1s",
  },
  {
    icon: BanknoteIcon,
    amount: "₦5,000",
    kind: "cash",
    network: "Wallet",
    time: "1.9s",
  },
];

const demoGivers = [
  {
    initial: "T",
    name: "Tobi",
    campaign: "Match-day giveaway",
    phone: "0803 ••• •• 42",
  },
  {
    initial: "A",
    name: "Ada",
    campaign: "10k followers drop",
    phone: "0701 ••• •• 18",
  },
  {
    initial: "C",
    name: "Chidi",
    campaign: "Group reward",
    phone: "0809 ••• •• 73",
  },
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
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute h-2 w-2 ${tints[p.tint]}`}
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
    const durations: Record<DemoStep, number> = {
      offer: 2600,
      sending: 1600,
      done: 2900,
    };
    const next: Record<DemoStep, DemoStep> = {
      offer: "sending",
      sending: "done",
      done: "offer",
    };
    const t = setTimeout(() => {
      if (step === "done") setRound((r) => r + 1);
      setStep(next[step]);
    }, durations[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="relative w-full max-w-sm">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-px -z-10 bg-linear-to-b from-primary/30 to-transparent blur-md" />

      <div className="relative overflow-hidden border border-border/70 bg-card/80 p-1.5 shadow-2xl shadow-primary/10 backdrop-blur-xl">
        {/* header */}
        <div className="flex items-center gap-2.5 px-3.5 pb-3 pt-2.5">
          <span className="flex h-8 w-8 items-center justify-center bg-primary/15 text-xs font-bold text-primary">
            {giver.initial}
          </span>
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-[13px] font-semibold leading-tight">
              {giver.name}
            </p>
            <p className="truncate text-[11px] leading-tight text-muted-foreground">
              {giver.campaign}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-primary" />
            </span>
            Live
          </span>
        </div>

        {/* body */}
        <div className="relative min-h-[208px] overflow-hidden bg-background/60 p-5">
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
                <div className="flex h-14 w-14 items-center justify-center bg-primary/12">
                  <reward.icon size={26} className="text-primary" />
                </div>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  You&apos;ve been sent
                </p>
                <p className="text-2xl font-extrabold leading-tight">
                  {reward.amount}{" "}
                  <span className="text-muted-foreground/80">
                    {reward.kind}
                  </span>
                </p>
                <div className="relative mt-4 w-full">
                  <div className="flex h-11 w-full items-center justify-center bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                    Claim now
                  </div>
                  {/* auto-tapping cursor */}
                  <motion.div
                    className="absolute -bottom-1 right-7 text-foreground"
                    initial={{ x: 26, y: 22, opacity: 0 }}
                    animate={{
                      x: [26, 0, 0],
                      y: [22, 0, 0],
                      opacity: [0, 1, 1],
                      scale: [1, 1, 0.82],
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 1.1,
                      times: [0, 0.7, 1],
                      ease: "easeOut",
                    }}
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
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full">
                  <motion.span
                    className="absolute inset-0 border-2 border-primary/20 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <reward.icon size={22} className="text-primary" />
                </div>
                <p className="mt-4 text-sm font-semibold">
                  Sending {reward.amount} {reward.kind}…
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  to {giver.phone} · {reward.network}
                </p>
                <div className="mt-4 h-1.5 w-44 overflow-hidden bg-border">
                  <motion.div
                    className="h-full bg-primary"
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
                  className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground rounded-full"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                >
                  <CheckIcon size={28} />
                </motion.div>
                <p className="mt-3 text-base font-bold">
                  {reward.amount} {reward.kind} delivered
                </p>
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

type LandingPageProps = {
  /** Price feed resolved on the server so the table ships with real prices. */
  initialPlans: DataPlansPayload;
  plansSource: DataPlansSource;
};

export function LandingPage({ initialPlans, plansSource }: LandingPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <Navbar />

      {/* ── 1. HERO (single, centered) ── */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-16 text-center md:pt-52">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-background/80 to-background" />
        <PathsBackground className="mask-[linear-gradient(to_bottom,black_5%,black_60%,transparent)]" />
        <div className="glow-primary pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />
        <div className="glow-primary pointer-events-none absolute right-[12%] top-[18%] -z-10 h-72 w-72 opacity-5" />

        <FloatingIconsLayer icons={heroFloatingIcons} />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex w-full max-w-4xl flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance text-6xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.5rem]"
          >
            <span className="title-glow">
              Reward <br className="md:hidden" />
              your
            </span>
            <br />
            <RotatingWord />
            <br />
            <span className="text-gradient">in seconds.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Share one link. Airtime, data and cash land instantly.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-13 px-9 text-base font-semibold shadow-lg shadow-primary/25"
              asChild
            >
              <Link href="https://app.wakasub.com/register">
                Create a Campaign
                <ArrowRightIcon className="btn-icon" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 bg-transparent px-9 text-base font-medium"
              asChild
            >
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {["A", "C", "T", "N"].map((c) => (
                <span
                  key={c}
                  className="flex h-7 w-7 items-center justify-center border-2 border-background bg-primary/15 text-[11px] font-bold text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={12}
                    className="fill-primary text-primary"
                  />
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
        <div className="mx-auto w-full max-w-7xl px-6">
          <MagicStats />
        </div>
      </section>

      {/* ── 3.5 RESELLER HINT ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Link
              href="/reseller"
              className="group relative flex flex-col items-start gap-5 overflow-hidden border border-border/60 bg-card p-6 transition-colors hover:border-primary/40 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="glow-primary pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-10" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                  <BadgePercentIcon size={22} />
                </div>
                <div>
                  <span className="mb-1.5 inline-block bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    For VTU resellers
                  </span>
                  <h2 className="text-xl font-bold leading-tight md:text-2xl">
                    Are you a reseller? Get Nigeria&apos;s best rates.
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                    Resell airtime, data, cable TV &amp; electricity at
                    wholesale prices — instant delivery, an API, and 24/7
                    support.
                  </p>
                </div>
              </div>
              <span className="relative inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 btn-neu transition-all">
                Explore reselling
                <ArrowRightIcon className="btn-icon" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <DataPricing initialPlans={initialPlans} source={plansSource} />

      {/* ── 4. TWO WAYS ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Two ways in
            </p>
            <h2 className="title-glow text-4xl font-bold leading-[1.05] md:text-5xl">
              Give rewards, or win them.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {/* Reward your people — dark */}
            <motion.div
              variants={fadeUp}
              className="relative flex flex-col overflow-hidden bg-foreground p-8 text-background md:p-10"
            >
              <div className="glow-primary pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-25" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/20">
                <GiftIcon size={22} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Reward your people</h3>
              <p className="mb-6 text-sm leading-relaxed text-background/65">
                Pick a reward, share one link, and everyone who qualifies gets
                paid automatically.
              </p>
              <ul className="mb-8 space-y-2.5">
                {[
                  "Set up in under a minute",
                  "One link works everywhere",
                  "Winners paid automatically",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-background/75"
                  >
                    <CheckCircle2Icon
                      size={15}
                      className="shrink-0 text-primary"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto w-fit px-7 font-semibold" asChild>
                <Link href="https://app.wakasub.com/register">
                  Create a Campaign
                  <ArrowRightIcon className="btn-icon" />
                </Link>
              </Button>
            </motion.div>

            {/* Win rewards — light */}
            <motion.div
              variants={fadeUp}
              className="relative flex flex-col overflow-hidden border border-border/50 bg-card p-8 md:p-10"
            >
              <div className="glow-primary pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-10" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10">
                <TrophyIcon size={22} className="text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Claim your rewards</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Got a link? Tap it and the airtime, data or cash is yours in
                seconds. Or browse live giveaways.
              </p>
              <ul className="mb-8 space-y-2.5">
                {[
                  "Free to receive — always",
                  "Lands on your phone in seconds",
                  "Discover public giveaways",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2Icon
                      size={15}
                      className="shrink-0 text-primary"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-auto w-fit bg-transparent px-7 font-semibold"
                asChild
              >
                <Link href="#how-it-works">
                  How claiming works
                  <ArrowRightIcon className="btn-icon" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. REWARDS ── */}
      <section id="rewards" className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              What you can give & win
            </p>
            <h2 className="title-glow text-4xl font-bold md:text-5xl">
              Three rewards. Endless ways.
            </h2>
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
                className="group flex items-center gap-4 border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
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
            className="flex flex-col gap-5 border border-border/50 bg-secondary/30 p-7 md:flex-row md:items-center md:justify-between"
          >
            <div className="shrink-0">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Campaign types
              </p>
              <p className="text-lg font-semibold">
                Pick the mechanic that fits
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {campaignTypes.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-sm font-medium"
                >
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
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Who it&apos;s for
            </p>
            <h2 className="title-glow text-4xl font-bold md:text-5xl">
              Made for the way you reward.
            </h2>
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
                className="group flex flex-col border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary">
                  <p.icon size={20} />
                </div>
                <h3 className="mb-3 font-semibold">{p.title}</h3>
                <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                  {p.today}
                </p>
                <p className="mt-auto flex gap-1.5 text-sm leading-relaxed text-foreground">
                  <SparklesIcon
                    size={15}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{p.now}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. JUST HERE TO WIN ── */}
      <section
        id="win"
        className="relative mx-4 my-8 overflow-hidden bg-foreground py-20 text-background md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="glow-primary pointer-events-none absolute -left-40 top-0 h-96 w-96 opacity-25" />
        <div className="glow-primary pointer-events-none absolute -bottom-40 right-0 h-96 w-96 opacity-15" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-background/80">
              <TrophyIcon size={14} className="text-primary" /> Just here to
              win?
            </div>
            <h2 className="title-glow text-4xl font-bold leading-[1.05] md:text-5xl">
              Free airtime, data &amp; cash.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {winnerPerks.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/15 text-primary">
                  <p.icon size={18} />
                </div>
                <h4 className="mb-2 text-base font-bold">{p.title}</h4>
                <p className="text-sm leading-relaxed text-background/45">
                  {p.desc}
                </p>
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
            <Button size="lg" className="px-10 text-base font-semibold" asChild>
              <Link href="https://app.wakasub.com/register">
                Start claiming rewards
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 9. TRUST ── */}
      <section id="why" className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Why Wakasub
            </p>
            <h2 className="title-glow text-4xl font-bold md:text-5xl">
              Built so everyone gets paid.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustPillars.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                className="flex flex-col border border-border/50 bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary">
                  <t.icon size={20} />
                </div>
                <h3 className="mb-2 font-semibold">{t.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. UTILITIES ── */}
      <section id="utilities" className="bg-secondary/20 py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Everyday too
              </p>
              <h2 className="title-glow mb-5 text-4xl font-bold md:text-5xl">
                Top up. Pay bills. Spend your wins.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                The same wallet that powers every reward handles your airtime,
                data, electricity and cable — all one tap away.
              </p>

              <div className="mb-10 grid grid-cols-2 gap-3">
                {[
                  {
                    icon: SmartphoneIcon,
                    label: "Airtime",
                    sub: "MTN · Airtel · Glo · 9mobile",
                  },
                  {
                    icon: WifiIcon,
                    label: "Data",
                    sub: "Daily, weekly & monthly",
                  },
                  {
                    icon: ZapIcon,
                    label: "Electricity",
                    sub: "EKEDC · IKEDC · AEDC",
                  },
                  {
                    icon: CoinsIcon,
                    label: "Cable TV",
                    sub: "DSTV · GOtv · Startimes",
                  },
                ].map((u) => (
                  <div
                    key={u.label}
                    className="flex items-center gap-3 border border-border/50 bg-card p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10 text-primary">
                      <u.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{u.label}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {u.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="px-8 text-base font-semibold shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="https://app.wakasub.com/register">
                  Open Wakasub
                  <ArrowRightIcon className="btn-icon" />
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
              <div className="overflow-hidden border border-border/60 bg-card shadow-2xl shadow-black/12 ring-1 ring-black/5 dark:ring-white/5">
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium opacity-70">
                        Wallet balance
                      </p>
                      <p className="text-[2rem] font-bold tracking-tight">
                        ₦24,500.00
                      </p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center bg-white/20 backdrop-blur-sm">
                      <WalletIcon size={18} />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="bg-white/15 px-3 py-1 text-[11px] font-medium">
                      + Add money
                    </span>
                    <span className="bg-white/15 px-3 py-1 text-[11px] font-medium">
                      🎁 Won ₦2,000
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Quick actions
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: SmartphoneIcon, label: "Airtime" },
                      { icon: WifiIcon, label: "Data" },
                      { icon: ZapIcon, label: "Electric" },
                      { icon: GiftIcon, label: "Reward" },
                    ].map((a) => (
                      <div
                        key={a.label}
                        className="flex cursor-pointer flex-col items-center gap-1.5 p-2 transition-colors hover:bg-secondary/70"
                      >
                        <div className="flex h-9 w-9 items-center justify-center bg-primary/10 text-primary">
                          <a.icon size={15} />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {a.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1 bg-secondary/40 p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Recent
                    </p>
                    {[
                      {
                        label: "Won ₦200 · Tobi's giveaway",
                        amt: "+₦200",
                        time: "Just now",
                        positive: true,
                      },
                      { label: "MTN 1GB Data", amt: "−₦280", time: "2h ago" },
                      {
                        label: "Funded: Market group",
                        amt: "−₦5,000",
                        time: "Yesterday",
                      },
                    ].map((tx) => (
                      <div
                        key={tx.label}
                        className="flex items-center justify-between px-1 py-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center bg-primary/10">
                            {tx.positive ? (
                              <GiftIcon size={10} className="text-primary" />
                            ) : (
                              <CheckCircle2Icon
                                size={10}
                                className="text-primary"
                              />
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {tx.label}
                          </span>
                        </div>
                        <div className="text-right">
                          <p
                            className={`text-xs font-semibold ${tx.positive ? "text-primary" : ""}`}
                          >
                            {tx.amt}
                          </p>
                          <p className="text-[9px] text-muted-foreground">
                            {tx.time}
                          </p>
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
        className="relative mx-4 my-12 overflow-hidden bg-foreground py-24 text-background"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="glow-primary pointer-events-none absolute -right-32 -top-32 h-96 w-96 opacity-20" />
        <div className="glow-primary pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 opacity-15" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="title-glow text-4xl font-bold leading-tight md:text-5xl">
              From idea to paid winners.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {howItWorks.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="relative border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/15 text-sm font-bold text-primary">
                    {s.n}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center bg-white/10">
                    <s.icon size={16} className="text-background/60" />
                  </div>
                </div>
                <h4 className="mb-2 text-base font-bold">{s.title}</h4>
                <p className="text-sm leading-relaxed text-background/45">
                  {s.desc}
                </p>
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
            <Button size="lg" className="px-10 text-base font-semibold" asChild>
              <Link href="https://app.wakasub.com/register">
                Create your first campaign
              </Link>
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
          className="mx-auto mb-14 w-full max-w-7xl px-6 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="title-glow text-4xl font-bold md:text-5xl">
            Creators and winners.
          </h2>
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
              {
                id: "r2",
                items: testimonials.slice(3, 6),
                duration: "62s",
                reverse: true,
              },
            ]}
          />
        </motion.div>
      </section>

      {/* ── 13. FINAL CTA ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto max-w-4xl overflow-hidden bg-primary px-8 py-20 text-center text-primary-foreground md:px-16"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]" />
            </div>
            <div className="glow-white pointer-events-none absolute -left-20 -top-20 h-72 w-72 opacity-10" />
            <div className="glow-white pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 opacity-10" />

            <div className="relative">
              <h2 className="title-glow mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Reward your people.
                <br />
                Or get rewarded.
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-lg text-primary-foreground/70">
                Create a campaign in under a minute, or claim your first reward
                in seconds.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-12 text-base font-bold shadow-xl"
                asChild
              >
                <Link href="https://app.wakasub.com/register">
                  Create a Campaign
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 14. FOOTER ── */}
      <CinematicFooter />

      {/* ── 15. STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="border-t border-border/50 bg-background/95 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-md">
          <Button
            size="lg"
            className="h-12 w-full text-base font-semibold"
            asChild
          >
            <Link href="https://app.wakasub.com/register">
              Create a Campaign
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
