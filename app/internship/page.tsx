"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { PathsBackground } from "@/components/ui/background-paths";
import { MegaphoneIcon } from "@/components/icons/megaphone";
import { PaletteIcon } from "@/components/icons/palette";
import { CalendarIcon } from "@/components/icons/calendar";
import { BriefcaseIcon } from "@/components/icons/briefcase";
import { GraduationCapIcon } from "@/components/icons/graduation-cap";
import { NetworkIcon } from "@/components/icons/network";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { CheckCircle2Icon } from "@/components/icons/check-circle-2";
import { UsersIcon } from "@/components/icons/users";
import { HeadsetIcon } from "@/components/icons/headset";
import { ZapIcon } from "@/components/icons/zap";
import { LayersIcon } from "@/components/icons/layers";
import { LockIcon } from "@/components/icons/lock";

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

const departments = [
  {
    icon: UsersIcon,
    name: "Brand Ambassadors",
    desc: "Represent Wakasub in your university and community. Drive adoption and build local trust.",
    color: "bg-blue-500",
    glow: "shadow-blue-500/30",
  },
  {
    icon: MegaphoneIcon,
    name: "Social Media",
    desc: "Create content, manage campaigns, and grow our digital presence across platforms.",
    color: "bg-violet-500",
    glow: "shadow-violet-500/30",
  },
  {
    icon: HeadsetIcon,
    name: "Customer Support",
    desc: "Help our users navigate the platform and resolve issues with care and clarity.",
    color: "bg-orange-500",
    glow: "shadow-orange-500/30",
  },
  {
    icon: PaletteIcon,
    name: "Graphics Design",
    desc: "Design visual assets, marketing materials, and UI illustrations for the brand.",
    color: "bg-pink-500",
    glow: "shadow-pink-500/30",
  },
];

const benefits = [
  {
    icon: ZapIcon,
    title: "Real impact",
    desc: "You're not shadowing — you're contributing to a platform used by thousands of Nigerians every day.",
    accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: LayersIcon,
    title: "Modern tooling",
    desc: "Work with Next.js, Tailwind CSS, and cloud-native tools inside a real production environment.",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: UsersIcon,
    title: "Cross-team exposure",
    desc: "Collaborate across engineering, support, and marketing to see how a full-scale product operates.",
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: BriefcaseIcon,
    title: "Career acceleration",
    desc: "Get a certificate, a strong reference, and a portfolio piece from a leading Nigerian fintech.",
    accent: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: GraduationCapIcon,
    title: "Direct mentorship",
    desc: "Learn from people who have actually built and scaled tech products from scratch.",
    accent: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: NetworkIcon,
    title: "Professional network",
    desc: "Connect with driven peers and build relationships inside the Nigerian tech ecosystem.",
    accent: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
];

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-0 pt-36 md:pt-52">
        {/* dot grid bg */}
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
        <PathsBackground className="mask-[linear-gradient(to_bottom,black_5%,black_60%,transparent)]" />
        {/* orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-400/8 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 pb-24 text-center">
          {/* Closed badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/8 px-4 py-1.5 text-sm font-medium text-destructive"
          >
            <LockIcon size={12} />
            Applications closed — Batch A
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-7xl"
          >
            Launch your career
            <br />
            <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              with Wakasub
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground"
          >
            Join our internship program and gain real experience building one of
            Nigeria&apos;s fastest-growing fintech platforms from the inside.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm">
              <CalendarIcon size={14} className="text-primary" />
              Batch A deadline: Feb 22, 2026
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm">
              <UsersIcon size={14} className="text-primary" />4 open departments
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Departments ── */}
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
              Departments
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Find your role
            </h2>
            <p className="mx-auto max-w-md text-muted-foreground">
              We&apos;re looking for driven students across four departments.
              Pick the one that fits your skills.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {departments.map((d) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-border/50 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${d.color} shadow-lg ${d.glow} transition-transform duration-300 group-hover:scale-110`}
                >
                  <d.icon className="text-white" size={22} />
                </div>
                <h3 className="mb-2 text-base font-bold">{d.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Why join
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              What you&apos;ll gain
            </h2>
            <p className="mx-auto max-w-md text-muted-foreground">
              This isn&apos;t a passive internship. You&apos;ll do real work,
              learn real skills, and leave with something tangible.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-border/50 bg-card p-7 transition-shadow hover:shadow-md"
              >
                <div
                  className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${b.accent}`}
                >
                  <b.icon size={20} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-bold">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Application status ── */}
      <section
        id="apply"
        className="relative overflow-hidden bg-secondary/30 py-28"
      >
        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="bg-dot-grid absolute inset-0 opacity-40" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/50 bg-background shadow-2xl shadow-black/5 ring-1 ring-black/5 dark:ring-white/5 md:rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left — brand panel */}
              <div className="relative overflow-hidden bg-primary p-10 text-primary-foreground md:p-12">
                {/* inner grid lines */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[28px_28px]" />
                </div>
                <div className="relative">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/50">
                    Batch A &bull; 2026
                  </p>
                  <h2 className="mb-5 text-3xl font-bold leading-tight">
                    Internship
                    <br />
                    Program
                  </h2>
                  <p className="mb-10 text-sm leading-relaxed text-primary-foreground/70">
                    A hands-on internship for Nigerian students. Real work, real
                    mentorship, and a launch pad into tech.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Certificate of completion",
                      "Mentorship from industry experts",
                      "Cross-functional team experience",
                      "Professional reference on request",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2Icon
                          size={15}
                          className="shrink-0 text-primary-foreground/50"
                        />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — closed state */}
              <div className="flex flex-col items-center justify-center p-10 text-center md:p-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/8">
                  <LockIcon size={28} className="text-destructive" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Batch A is closed</h3>
                <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Thank you for your interest. Applications for the first cohort
                  are now closed. Follow us for updates on Batch B.
                </p>

                {/* Timeline */}
                <div className="mb-8 w-full rounded-xl border border-border/50 bg-secondary/40 p-4 text-left">
                  <div className="space-y-3">
                    {[
                      { label: "Batch A", status: "Closed", done: true },
                      { label: "Batch B", status: "Coming soon", done: false },
                    ].map((b) => (
                      <div key={b.label} className="flex items-center gap-3">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${b.done ? "bg-destructive" : "bg-primary animate-pulse"}`}
                        />
                        <span className="flex-1 text-sm font-medium">
                          {b.label}
                        </span>
                        <span
                          className={`text-xs font-semibold ${b.done ? "text-muted-foreground" : "text-primary"}`}
                        >
                          {b.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full rounded-full" variant="outline">
                  <Link href="/">
                    Back to home
                    <ArrowRightIcon size={14} className="ml-2" />
                  </Link>
                </Button>
                <p className="mt-5 text-xs text-muted-foreground">
                  Questions? Reach us via our social media channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/waka 512.png"
                alt="WakaSub"
                width={24}
                height={24}
              />
              <span className="font-bold">WakaSub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Wakasub Technologies Ltd. Internship
              Program Batch A.
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
