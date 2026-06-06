"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Headset,
  Mail,
  Clock,
  ShieldCheck,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const highlights = [
  {
    icon: Clock,
    title: "Fast replies",
    desc: "Our support team typically responds within a few hours, every day of the week.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & private",
    desc: "Your details are only used to resolve your request — never shared or sold.",
  },
  {
    icon: Headset,
    title: "Real humans",
    desc: "Talk to people who actually understand the platform and can resolve your issue.",
  },
];

export default function ContactSupportPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data?.error || "Failed to send your message.");
        return;
      }

      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-400/8 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Headset size={13} />
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
            us a message and our team will get back to you.
          </motion.p>
        </div>
      </section>

      {/* ── Form + info ── */}
      <section className="pb-28 pt-6">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Left — highlights */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-5 lg:col-span-2"
            >
              <div className="rounded-3xl border border-border/50 bg-secondary/30 p-7">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Mail size={22} />
                </div>
                <h2 className="mb-2 text-xl font-bold">Reach our team</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Fill out the form and your message lands straight in our
                  support inbox. We&apos;ll reply to the email you provide.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex gap-4 rounded-2xl border border-border/50 bg-card p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <h.icon size={18} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold">{h.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl border border-border/50 bg-background p-7 shadow-xl shadow-black/5 ring-1 ring-black/5 dark:ring-white/5 md:p-9">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">Message sent</h3>
                    <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      Thanks for reaching out. Our support team will get back to
                      you at the email you provided.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => setSubmitted(false)}
                      >
                        Send another message
                      </Button>
                      <Button asChild className="rounded-full">
                        <Link href="/">
                          Back to home
                          <ArrowRight size={14} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={update("subject")}
                        required
                        maxLength={160}
                        disabled={submitting}
                      />
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
                      className="h-12 w-full rounded-xl text-base font-bold shadow-lg shadow-primary/20"
                    >
                      {submitting ? (
                        "Sending…"
                      ) : (
                        <>
                          Send message
                          <Send size={16} className="ml-2" />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
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
