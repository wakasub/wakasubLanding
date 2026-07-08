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

export interface TrophyIconHandle {
 startAnimation: () => void;
 stopAnimation: () => void;
}

interface TrophyIconProps extends Omit<
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

const TrophyIcon = forwardRef<TrophyIconHandle, TrophyIconProps>(
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
      className="lucide lucide-trophy"
     >
      <m.path key={0} d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" variants={drawVariants} />
      <m.path key={1} d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" variants={drawVariants} />
      <m.path key={2} d="M4 22h16" variants={drawVariants} />
      <m.path key={3} d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" variants={drawVariants} />
      <m.path key={4} d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" variants={drawVariants} />
      <m.path key={5} d="M18 2H6v7a6 6 0 0 0 12 0V2Z" variants={drawVariants} />
     </m.svg>
    </m.div>
   </LazyMotion>
  );
 },
);

TrophyIcon.displayName = "TrophyIcon";
export { TrophyIcon };
