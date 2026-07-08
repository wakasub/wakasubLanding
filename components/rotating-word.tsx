"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const WORDS = [
  { text: "people", color: "text-primary" },
  { text: "community", color: "text-blue-500" },
  { text: "followers", color: "text-violet-500" },
  { text: "friends", color: "text-rose-500" },
  { text: "customers", color: "text-amber-500" },
  { text: "fans", color: "text-emerald-500" },
];

export function RotatingWord({ interval = 2600 }: { interval?: number }) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const sizerRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      interval,
    );
    return () => clearInterval(id);
  }, [interval]);

  // Measure the current word so the container can ease its width smoothly
  // (and re-measure when the font size changes at breakpoints).
  const measure = useCallback(() => {
    if (sizerRef.current) setWidth(sizerRef.current.offsetWidth);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [index, measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const { text, color } = WORDS[index];

  // No vertical movement — a clean cross-dissolve in place.
  const variants = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, filter: "blur(12px)", scale: 0.92 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, filter: "blur(12px)", scale: 1.06 },
      };

  return (
    <motion.span
      className="relative inline-block text-left align-baseline"
      animate={width != null ? { width } : undefined}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Invisible in-flow sizer: locks the baseline and the natural width. */}
      <span ref={sizerRef} aria-hidden className="invisible whitespace-nowrap">
        {text}
      </span>

      {/* Visible word, overlaid so it never nudges the surrounding line.
          Default (sync) mode overlaps exit + enter for a gapless dissolve. */}
      <AnimatePresence initial={false}>
        <motion.span
          key={text}
          className={`absolute left-0 top-0 whitespace-nowrap will-change-transform ${color}`}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
