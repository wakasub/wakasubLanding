"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { PathsBackground } from "@/components/ui/background-paths";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ClockIcon } from "@/components/icons/clock";
import { MessageSquareIcon } from "@/components/icons/message-square";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { CheckCircle2Icon } from "@/components/icons/check-circle-2";
import { HeadsetIcon } from "@/components/icons/headset";
import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { SendIcon } from "@/components/icons/send";
import { MailIcon } from "@/components/icons/mail";
import { WhatsAppButton } from "@/components/whatsapp-cta";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const topics = [
  "Transactions",
  "Account",
  "Giveaways",
  "Reseller",
  "General",
] as const;

const promises = [
  {
    icon: ClockIcon,
    title: "Fast response",
    desc: "We typically reply within a few hours, every day.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & private",
    desc: "Your details are only used to resolve your request.",
  },
  {
    icon: HeadsetIcon,
    title: "Real humans",
    desc: "Talk to people who actually understand the platform.",
  },
];

export default function ContactSupportPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    topic: "Transactions" as (typeof topics)[number],
    message: "",
  });

  const update =
    (key: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.topic,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data?.error || "Failed to send your message.");
        return;
      }

      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({
        name: "",
        email: "",
        topic: "Transactions",
        message: "",
      });
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />

      {/* <section> */}
      <WhatsAppButton href="https://wa.link/kg38li" className="fixed bottom-16 right-8 z-1000">
        contact us
      </WhatsAppButton>
      {/* </section> */}

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
        <PathsBackground className="mask-[linear-gradient(to_bottom,black_5%,black_70%,transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/4 bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 bg-blue-400/8 blur-[100px]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 pb-14 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <HeadsetIcon size={13} />
            Contact Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
          >
            How can we{" "}
            <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              help you?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto max-w-xl text-lg text-muted-foreground"
          >
            Have a question, hit a snag, or need a hand with a transaction? Send
            us a message and our team will get right back to you.
          </motion.p>
        </div>
      </section>

      {/* ── Unified card ── */}
      <section className="pb-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto max-w-5xl overflow-hidden border border-border/50 bg-background shadow-2xl shadow-black/5 ring-1 ring-black/5 dark:ring-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left — brand panel */}
              <div className="relative overflow-hidden bg-primary p-9 text-primary-foreground md:p-11 lg:col-span-2">
                <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[28px_28px]" />
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 bg-white/10 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-white/15 backdrop-blur-sm">
                    <MessageSquareIcon size={22} />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-tight">
                    Let&apos;s sort it out
                  </h2>
                  <p className="mb-9 text-sm leading-relaxed text-primary-foreground/70">
                    Tell us what&apos;s going on. Your message lands straight in
                    our support inbox and we&apos;ll reply to the email you give
                    us.
                  </p>

                  <div className="space-y-5">
                    {promises.map((p) => (
                      <div key={p.title} className="flex gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-white/15">
                          <p.icon size={16} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">{p.title}</h3>
                          <p className="text-xs leading-relaxed text-primary-foreground/65">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-9">
                    <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/60">
                      <MailIcon size={13} />
                      Prefer email? We read every message that comes through.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — form / success */}
              <div className="p-8 md:p-11 lg:col-span-3">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                      <CheckCircle2Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">Message sent</h3>
                    <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      Thanks for reaching out. Our support team will get back to
                      you at the email you provided.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <Button
                        variant="outline"
                        className=""
                        onClick={() => setSubmitted(false)}
                      >
                        Send another message
                      </Button>
                      <Button asChild className="">
                        <Link href="/">
                          Back to home
                          <ArrowRightIcon size={14} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Topic */}
                    <div className="flex flex-col gap-3">
                      <Label>What do you need help with?</Label>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((t) => {
                          const active = form.topic === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({ ...prev, topic: t }))
                              }
                              className={` border px-4 py-1.5 text-sm font-medium transition-all ${
                                active
                                  ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Ada Obi"
                          value={form.name}
                          onChange={update("name")}
                          required
                          maxLength={120}
                          disabled={submitting}
                          className="h-11"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={update("email")}
                          required
                          maxLength={200}
                          disabled={submitting}
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us what's going on, and include any transaction details if relevant…"
                        value={form.message}
                        onChange={update("message")}
                        required
                        maxLength={5000}
                        rows={6}
                        disabled={submitting}
                        className="min-h-[150px] resize-y"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="h-12 w-full text-base font-bold shadow-lg shadow-primary/20"
                    >
                      {submitting ? (
                        "Sending…"
                      ) : (
                        <>
                          Send message
                          <SendIcon size={16} className="ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to be contacted at the email
                      address provided.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
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
