"use client";

import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";
import {
 LazyMotion,
 domMin,
 m,
 useAnimation,
 useReducedMotion,
} from "framer-motion";
import {
 forwardRef,
 useCallback,
 useImperativeHandle,
 useRef,
 type HTMLAttributes,
} from "react";

export interface PartyPopperIconHandle {
 startAnimation: () => void;
 stopAnimation: () => void;
}

interface PartyPopperIconProps extends Omit<
 HTMLAttributes<HTMLDivElement>,
 | "color"
 | "onDrag"
 | "onDragStart"
 | "onDragEnd"
 | "onAnimationStart"
 | "onAnimationEnd"
 | "onAnimationIteration"
> {
 size?: number;
 duration?: number;
 isAnimated?: boolean;
 color?: string;
}

const PartyPopperIcon = forwardRef<PartyPopperIconHandle, PartyPopperIconProps>(
 (
  {
   onMouseEnter,
   onMouseLeave,
   className,
   size = 24,
   duration = 1,
   isAnimated = true,
   color,
   ...props
  },
  ref,
 ) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
   isControlled.current = true;
   return {
    startAnimation: () =>
     reduced ? controls.start("normal") : controls.start("animate"),
    stopAnimation: () => controls.start("normal"),
   };
  });

  const handleEnter = useCallback(
   (e?: React.MouseEvent<HTMLDivElement>) => {
    if (!isAnimated || reduced) return;
    if (!isControlled.current) controls.start("animate");
    else onMouseEnter?.(e as any);
   },
   [controls, reduced, isAnimated, onMouseEnter],
  );

  const handleLeave = useCallback(
   (e?: React.MouseEvent<HTMLDivElement>) => {
    if (!isControlled.current) controls.start("normal");
    else onMouseLeave?.(e as any);
   },
   [controls, onMouseLeave],
  );

  const iconVariants: Variants = {
   normal: { scale: 1, rotate: 0, x: 0 },
   animate: {
    scale: [1, 1.12, 1],
     rotate: [0, -6, 5, 0],
    transition: { duration: 0.55 * duration, ease: "easeOut" },
   },
  };
  const drawVariants: Variants = {
   normal: { pathLength: 1, opacity: 1 },
   animate: {
    pathLength: [0, 1],
    opacity: [0.35, 1],
    transition: { duration: 0.5 * duration, ease: "easeOut" },
   },
  };

  return (
   <LazyMotion features={domMin} strict>
    <m.div
     className={cn("inline-flex items-center justify-center", className)}
     onMouseEnter={handleEnter}
     onMouseLeave={handleLeave}
     variants={iconVariants}
     initial="normal"
     animate={controls}
     {...props}
     style={{ color, ...props.style }}
    >
     <m.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-party-popper"
     >
      <m.path key={0} d="M5.8 11.3 2 22l10.7-3.79" variants={drawVariants} />
      <m.path key={1} d="M4 3h.01" variants={drawVariants} />
      <m.path key={2} d="M22 8h.01" variants={drawVariants} />
      <m.path key={3} d="M15 2h.01" variants={drawVariants} />
      <m.path key={4} d="M22 20h.01" variants={drawVariants} />
      <m.path key={5} d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" variants={drawVariants} />
      <m.path key={6} d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" variants={drawVariants} />
      <m.path key={7} d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" variants={drawVariants} />
      <m.path key={8} d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" variants={drawVariants} />
     </m.svg>
    </m.div>
   </LazyMotion>
  );
 },
);

PartyPopperIcon.displayName = "PartyPopperIcon";
export { PartyPopperIcon };
