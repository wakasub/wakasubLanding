"use client";

import React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone, Wifi, Tv, Zap, Info, Users, Gift } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 border-b ${
        mobileMenuOpen
          ? "bg-background backdrop-blur-md py-3 border-border"
          : isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 border-border"
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/waka 512.png" alt="WakaSub" width={32} height={32} />
          <span className="text-xl font-bold tracking-tighter hidden md:flex">
            {"WakaSub".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "#features" },
            { label: "Giveaway", href: "#giveaway" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Internship", href: "/internship" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5"
            >
              {item.label}
              {item.label === "Giveaway" && (
                <span className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  New
                </span>
              )}
              {item.label === "Internship" && (
                <span className="text-[10px] bg-destructive/10 text-destructive px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Closed
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://app.wakasub.com/login">Log in</Link>
          </Button>
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="https://app.wakasub.com/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 z-[60] relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-[45] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background border-l border-border z-[56] md:hidden p-8 pt-24 shadow-2xl h-screen"
            >
              <div className="flex flex-col gap-6 w-full ">
                {[
                  { name: "Features", icon: Zap, href: "/#features" },
                  { name: "Giveaway", icon: Gift, href: "/#giveaway" },
                  { name: "How it works", icon: Info, href: "/#how-it-works" },
                  { name: "Internship", icon: Users, href: "/internship" },
                  { name: "Airtime", icon: Smartphone, href: "#" },
                  { name: "Data", icon: Wifi, href: "#" },
                  { name: "Cable TV", icon: Tv, href: "#" },
                  { name: "Electricity", icon: Zap, href: "#" },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center gap-4 text-xl font-bold tracking-tight hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                        {React.createElement(item.icon, {
                          size: 20,
                          className:
                            "group-hover:text-primary transition-colors",
                        })}
                      </div>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col gap-3"
                >
                  <Button
                    variant="outline"
                    className="w-full h-14 rounded-2xl text-lg font-bold bg-transparent"
                    asChild
                  >
                    <Link href="https://app.wakasub.com/login">Log in</Link>
                  </Button>
                  <Button
                    className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20"
                    asChild
                  >
                    <Link href="https://app.wakasub.com/register">
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
