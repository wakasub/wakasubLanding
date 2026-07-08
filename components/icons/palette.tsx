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

export interface PaletteIconHandle {
 startAnimation: () => void;
 stopAnimation: () => void;
}

interface PaletteIconProps extends Omit<
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

const PaletteIcon = forwardRef<PaletteIconHandle, PaletteIconProps>(
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
      className="lucide lucide-palette"
     >
      <m.circle key={0} cx="13.5" cy="6.5" r=".5" fill="currentColor" variants={drawVariants} />
      <m.circle key={1} cx="17.5" cy="10.5" r=".5" fill="currentColor" variants={drawVariants} />
      <m.circle key={2} cx="8.5" cy="7.5" r=".5" fill="currentColor" variants={drawVariants} />
      <m.circle key={3} cx="6.5" cy="12.5" r=".5" fill="currentColor" variants={drawVariants} />
      <m.path key={4} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" variants={drawVariants} />
     </m.svg>
    </m.div>
   </LazyMotion>
  );
 },
);

PaletteIcon.displayName = "PaletteIcon";
export { PaletteIcon };
