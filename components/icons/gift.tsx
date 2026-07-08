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

export interface GiftIconHandle {
 startAnimation: () => void;
 stopAnimation: () => void;
}

interface GiftIconProps extends Omit<
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

const GiftIcon = forwardRef<GiftIconHandle, GiftIconProps>(
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
      className="lucide lucide-gift"
     >
      <m.rect key={0} x="3" y="8" width="18" height="4" rx="1" variants={drawVariants} />
      <m.path key={1} d="M12 8v13" variants={drawVariants} />
      <m.path key={2} d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" variants={drawVariants} />
      <m.path key={3} d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" variants={drawVariants} />
     </m.svg>
    </m.div>
   </LazyMotion>
  );
 },
);

GiftIcon.displayName = "GiftIcon";
export { GiftIcon };
