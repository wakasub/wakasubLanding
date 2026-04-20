"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Users,
  Megaphone,
  Headset,
  Palette,
  Calendar,
  Zap,
  Layers,
  Briefcase,
  GraduationCap,
  Network,
  ArrowRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const departments = [
  {
    icon: Users,
    name: "Brand Ambassadors",
    desc: "Represent Wakasub in your university and community. Drive adoption and build local trust.",
    color: "bg-blue-500",
  },
  {
    icon: Megaphone,
    name: "Social Media",
    desc: "Create content, manage campaigns, and grow our digital presence across platforms.",
    color: "bg-violet-500",
  },
  {
    icon: Headset,
    name: "Customer Support",
    desc: "Help our users navigate the platform and resolve issues with care and clarity.",
    color: "bg-orange-500",
  },
  {
    icon: Palette,
    name: "Graphics Design",
    desc: "Design visual assets, marketing materials, and UI illustrations for the brand.",
    color: "bg-pink-500",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Real impact",
    desc: "You're not shadowing — you're contributing to a platform used by thousands of Nigerians every day.",
  },
  {
    icon: Layers,
    title: "Modern tooling",
    desc: "Work with Next.js, Tailwind CSS, and cloud-native tools inside a real production environment.",
  },
  {
    icon: Users,
    title: "Cross-team exposure",
    desc: "Collaborate across engineering, support, and marketing to see how a full-scale product operates.",
  },
  {
    icon: Briefcase,
    title: "Career acceleration",
    desc: "Get a certificate, a strong reference, and a portfolio piece from a leading Nigerian fintech.",
  },
  {
    icon: GraduationCap,
    title: "Direct mentorship",
    desc: "Learn from people who have actually built and scaled tech products from scratch.",
  },
  {
    icon: Network,
    title: "Professional network",
    desc: "Connect with driven peers and build relationships inside the Nigerian tech ecosystem.",
  },
];

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-52 md:pb-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/8 blur-[130px]" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/8 px-4 py-1.5 text-sm font-medium text-destructive"
          >
            <Lock size={12} />
            Applications closed — Batch A
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-7xl"
          >
            Launch your career
            <br />
            <span className="text-primary">with Wakasub</span>
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
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm">
              <Calendar size={14} className="text-primary" />
              Batch A deadline: Feb 22, 2026
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm">
              <Users size={14} className="text-primary" />4 open departments
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {departments.map((d) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border/50 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${d.color} shadow-md`}
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
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-border/50 bg-card p-7"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <b.icon className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Application Status ── */}
      <section id="apply" className="py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/50 bg-background shadow-xl md:rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left panel */}
              <div className="bg-primary p-10 text-primary-foreground md:p-12">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
                  Batch A • 2026
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight">
                  Internship
                  <br />
                  Program
                </h2>
                <p className="mb-10 text-sm leading-relaxed text-primary-foreground/75">
                  A hands-on, paid internship for Nigerian students. Real work,
                  real mentorship, and a launch pad into tech.
                </p>

                <div className="space-y-5">
                  {[
                    "Certificate of completion",
                    "Mentorship from industry experts",
                    "Cross-functional team experience",
                    "Professional reference on request",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-primary-foreground/60"
                      />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col items-center justify-center p-10 text-center md:p-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
                  <Lock className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Batch A is closed</h3>
                <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Thank you for your interest. Applications for the first cohort
                  are now closed. Follow us for updates on Batch B.
                </p>
                <Button
                  asChild
                  className="rounded-full px-8"
                  variant="outline"
                >
                  <Link href="/">
                    Back to home
                    <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
                <p className="mt-6 text-xs text-muted-foreground">
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
              © {new Date().getFullYear()} Wakasub Technologies Ltd. Internship Program Batch A.
            </p>
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:underline"
            >
              Return to main site
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
