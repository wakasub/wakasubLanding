import { BanknoteIcon } from "my-v0-project";

/**
 * Animated line icon. Renders static here; it plays its draw-in animation on
 * hover, or on demand via the imperative `startAnimation()` ref handle.
 */
export function SizesAndTints() {
  return (
    <div className="flex flex-wrap items-center gap-7">
      <BanknoteIcon size={16} isAnimated={false} />
      <BanknoteIcon size={24} isAnimated={false} />
      <BanknoteIcon size={32} isAnimated={false} />
      <BanknoteIcon size={48} className="text-primary" isAnimated={false} />
      <BanknoteIcon size={32} className="text-muted-foreground" isAnimated={false} />
      <span className="inline-flex bg-primary p-3 text-primary-foreground">
        <BanknoteIcon size={32} isAnimated={false} />
      </span>
    </div>
  );
}
