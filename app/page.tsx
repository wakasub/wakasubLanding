"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Wifi,
  Tv,
  Zap,
  Wallet,
  ShieldCheck,
  Clock,
  ZapIcon,
  ArrowRight,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)] z-10" />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10" />
          <img
            src="/modern-smartphone-interface-connectivity-abstract-.jpg"
            alt="Connectivity background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
        </div> */}

        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 rounded-full px-4 py-1.5 bg-primary/10 text-primary border-none text-sm font-medium"
            >
              New: Infinite Wallet Funding{" "}
              <ArrowRight className="inline ml-1 w-3 h-3" />
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95]"
          >
            Super fast VTU <br />
            <span className="text-primary italic">for every Nigerian</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-pretty"
          >
            Buy airtime, data, pay cable TV and utility bills instantly.
            Reliable, secure, and built for the modern lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-lg font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="https://app.wakasub.com/register">
                Get Started for free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-lg font-semibold w-full sm:w-auto bg-transparent"
            >
              Learn more
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 pt-10 border-t border-border/50 max-w-5xl mx-auto"
          >
            <p className="text-sm font-medium text-muted-foreground mb-8">
              Trusted by over 50,000+ active users nationwide
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {["MTN", "Airtel", "Glo", "9mobile", "DSTV", "Gotv"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="text-2xl font-bold tracking-widest"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                desc: "Military-grade encryption for all your transactions and wallet.",
              },
              {
                icon: ZapIcon,
                title: "Instant Delivery",
                desc: "No delays. Your data and airtime arrive as soon as you hit pay.",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Automated systems that work even while you sleep. Anytime, anywhere.",
              },
            ].map((trust, i) => (
              <motion.div
                key={i}
                variants={item}
                className="p-6 border-b-2 border-border/30 pb-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <trust.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {trust.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {trust.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete platform for <br /> utility payments
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to stay connected and powered up in one single
              app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Smartphone,
                label: "Airtime",
                color: "bg-blue-500",
                size: "col-span-1 md:col-span-2",
              },
              {
                icon: Wifi,
                label: "Data Bundles",
                color: "bg-purple-500",
                size: "col-span-1",
              },
              {
                icon: Tv,
                label: "Cable TV",
                color: "bg-orange-500",
                size: "col-span-1",
              },
              {
                icon: Zap,
                label: "Electricity",
                color: "bg-yellow-500",
                size: "col-span-1",
              },
              {
                icon: Wallet,
                label: "Instant Funding",
                color: "bg-green-500",
                size: "col-span-1 md:col-span-2",
              },
              {
                icon: ArrowRight,
                label: "More Features",
                color: "bg-primary",
                size: "col-span-1",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[2.5rem] p-8 h-72 flex flex-col justify-end bg-background border border-border/60 hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 ${feature.size}`}
              >
                <div className="absolute top-8 right-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                <div
                  className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-auto shadow-lg transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <feature.icon className="text-white" size={28} />
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.label}
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Buy now <ArrowRight size={14} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="py-24 bg-foreground text-background rounded-[3rem] mx-4 my-12"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Fast iteration. <br /> More innovation.
              </h2>
              <p className="text-background/70 text-lg mb-12">
                Wakasub is built for speed. We've optimized every step of the
                payment flow to ensure you spend less time on screens and more
                time on what matters.
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Create Account",
                    desc: "Sign up in less than 60 seconds with just your email.",
                  },
                  {
                    step: "02",
                    title: "Fund Wallet",
                    desc: "Automated funding via dedicated virtual accounts.",
                  },
                  {
                    step: "03",
                    title: "Make Payments",
                    desc: "Select service, enter details and pay instantly.",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-primary font-bold text-xl">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                      <p className="text-background/50">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <motion.div
                initial={{ rotate: 10, y: 50, opacity: 0 }}
                whileInView={{ rotate: -5, y: 0, opacity: 1 }}
                className="bg-primary/20 p-8 rounded-[3rem] border border-primary/20 aspect-4/5 relative overflow-hidden"
              >
                {/* Mock UI Element */}
                <div className="bg-background rounded-3xl p-6 shadow-2xl space-y-4">
                  <div className="h-4 w-1/2 bg-muted rounded-full" />
                  <div className="h-10 w-full bg-primary/10 rounded-xl" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-muted rounded-xl" />
                    <div className="h-12 bg-muted rounded-xl" />
                  </div>
                  <div className="h-40 w-full bg-secondary rounded-2xl flex items-center justify-center">
                    <Zap className="text-primary/20 w-12 h-12" />
                  </div>
                  <Button className="w-full rounded-xl">Confirm Payment</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-16 rounded-[4rem] bg-primary text-primary-foreground relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Join the future <br /> of VTU payments
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to experience speed? Create your free Wakasub account today
              and start making payments like a pro.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-12 h-16 text-xl flex items-center justify-center font-bold hover:scale-105 transition-transform"
              asChild
            >
              <Link href="https://app.wakasub.com/register">
                Get Started for free
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md" />
            <span className="font-bold text-lg">WakaSub</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Status</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wakasub Technologies. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
