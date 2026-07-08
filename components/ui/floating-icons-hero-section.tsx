"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Any icon component that accepts size/className (works with components/icons/*). */
type FloatingIconComponent = React.ComponentType<{ size?: number; className?: string }>;

export interface FloatingIconItem {
  id: number;
  icon: FloatingIconComponent;
  /** Positioning + responsive visibility, e.g. "top-[15%] left-[7%] hidden lg:block". */
  className: string;
  /** Text color class for the glyph, e.g. "text-emerald-500". Defaults to primary. */
  tint?: string;
}

/* A single floating chip: gentle bob loop + cursor-repel spring physics. */
function Icon({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: FloatingIconItem;
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    if (reduced) return;
    const handleMouseMove = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distance = Math.hypot(mouseX.current - cx, mouseY.current - cy);

      if (distance < 150) {
        const angle = Math.atan2(mouseY.current - cy, mouseX.current - cx);
        const force = (1 - distance / 150) * 50;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY, reduced]);

  const bobDuration = 6 + (iconData.id % 4) * 1.3;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("absolute", iconData.className)}
    >
      <motion.div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-current/30 bg-card/80 shadow-lg shadow-black/5 backdrop-blur-md md:h-16 md:w-16 md:rounded-[1.25rem]",
          "text-primary",
          iconData.tint,
        )}
        animate={
          reduced
            ? undefined
            : { y: [0, -8, 0, 8, 0], x: [0, 6, 0, -6, 0], rotate: [0, 5, 0, -5, 0] }
        }
        transition={{
          duration: bobDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <iconData.icon size={22} className="md:[&_svg]:size-7" />
      </motion.div>
    </motion.div>
  );
}

/**
 * Drop-in decorative layer: floating icon chips scattered over a hero.
 * The parent section must be `relative`; the layer never captures pointer events.
 */
export function FloatingIconsLayer({
  icons,
  className,
}: {
  icons: FloatingIconItem[];
  className?: string;
}) {
  const mouseX = React.useRef(-9999);
  const mouseY = React.useRef(-9999);

  React.useEffect(() => {
    const track = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };
    window.addEventListener("mousemove", track, { passive: true });
    return () => window.removeEventListener("mousemove", track);
  }, []);

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      {icons.map((iconData, index) => (
        <Icon key={iconData.id} mouseX={mouseX} mouseY={mouseY} iconData={iconData} index={index} />
      ))}
    </div>
  );
}
