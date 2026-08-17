import { CalendarIcon } from "my-v0-project";

/**
 * Animated line icon. Renders static here; it plays its draw-in animation on
 * hover, or on demand via the imperative `startAnimation()` ref handle.
 */
export function SizesAndTints() {
  return (
    <div className="flex flex-wrap items-center gap-7">
      <CalendarIcon size={16} isAnimated={false} />
      <CalendarIcon size={24} isAnimated={false} />
      <CalendarIcon size={32} isAnimated={false} />
      <CalendarIcon size={48} className="text-primary" isAnimated={false} />
      <CalendarIcon size={32} className="text-muted-foreground" isAnimated={false} />
      <span className="inline-flex bg-primary p-3 text-primary-foreground">
        <CalendarIcon size={32} isAnimated={false} />
      </span>
    </div>
  );
}
