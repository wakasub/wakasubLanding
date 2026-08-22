"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons/menu";
import { XIcon } from "@/components/icons/x";
import Image from "next/image";

/** Position of the sliding highlight behind the nav links. */
type CursorPos = { left: number; width: number; opacity: number };

/**
 * Desktop nav links with a single highlight that slides between them.
 *
 * One shared pill is animated rather than fading a background in on each
 * link, so moving along the row reads as one continuous motion. The pill is
 * square — the design system pins every radius to 0 — and uses `secondary`
 * rather than `accent` because only `secondary` is defined for both themes.
 */
function NavTabs() {
  const [cursor, setCursor] = useState<CursorPos>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setCursor((c) => ({ ...c, opacity: 0 }))}
      className="relative hidden items-center lg:flex"
    >
      {navLinks.map((item) => (
        <NavTab key={item.label} item={item} onHover={setCursor} />
      ))}

      <motion.li
        aria-hidden
        animate={cursor}
        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.6 }}
        className="absolute inset-y-0 z-0 bg-secondary"
      />
    </ul>
  );
}

function NavTab({
  item,
  onHover,
}: {
  item: (typeof navLinks)[number];
  onHover: (pos: CursorPos) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        const el = ref.current;
        if (!el) return;
        onHover({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
      }}
      className="relative z-10"
    >
      <Link
        href={item.href}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors hover:text-secondary-foreground"
      >
        {item.label}
        {item.badge && (
          <span className="bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
            {item.badge}
          </span>
        )}
      </Link>
    </li>
  );
}

const navLinks = [
  { label: "Rewards", href: "#rewards", badge: "New" },
  { label: "Who it's for", href: "#who" },
  { label: "Utilities", href: "#utilities" },
  { label: "Data prices", href: "#data-prices" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Internship", href: "/internship" },
  { label: "Contact", href: "/contact-support" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-4 z-[50] px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-auto flex max-w-7xl items-center justify-between border px-5 py-4 transition-all duration-300 md:px-6 ${
          mobileMenuOpen
            ? "border-border bg-background shadow-xl shadow-black/10"
            : isScrolled
              ? "border-border/70 bg-background/80 shadow-xl shadow-black/10 backdrop-blur-md"
              : "border-border/50 bg-background/60 shadow-lg shadow-black/5 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src="/waka 512.png" alt="WakaSub" width={32} height={32} />
          <span className="hidden text-xl font-bold tracking-tighter md:flex">
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
                {char}
              </motion.span>
            ))}
          </span>
        </Link>

        {/* Desktop nav */}
        <NavTabs />

        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="https://app.wakasub.com/login">Log in</Link>
          </Button>
          <Button size="sm" className="px-6" asChild>
            <Link href="https://app.wakasub.com/register">
              Create a Campaign
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="relative z-[60] p-2 lg:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
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
                <XIcon size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[45] bg-background/90 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-[56] h-screen w-[85%] max-w-sm border-l border-border bg-background p-8 pt-24 shadow-2xl lg:hidden"
            >
              <div className="flex w-full flex-col gap-2">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-lg font-semibold tracking-tight transition-colors hover:bg-secondary hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                      {item.badge && (
                        <span className="bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 flex flex-col gap-3"
                >
                  <Button
                    variant="outline"
                    className="h-14 w-full !bg-accent text-lg font-bold"
                    asChild
                  >
                    <Link
                      href="https://app.wakasub.com/login"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  </Button>
                  <Button
                    className="h-14 w-full text-lg font-bold shadow-lg shadow-primary/20"
                    asChild
                  >
                    <Link
                      href="https://app.wakasub.com/register"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Create a Campaign
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
