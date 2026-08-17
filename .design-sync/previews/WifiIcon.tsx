import { WifiIcon } from "my-v0-project";

/**
 * Animated line icon. Renders static here; it plays its draw-in animation on
 * hover, or on demand via the imperative `startAnimation()` ref handle.
 */
export function SizesAndTints() {
  return (
    <div className="flex flex-wrap items-center gap-7">
      <WifiIcon size={16} isAnimated={false} />
      <WifiIcon size={24} isAnimated={false} />
      <WifiIcon size={32} isAnimated={false} />
      <WifiIcon size={48} className="text-primary" isAnimated={false} />
      <WifiIcon size={32} className="text-muted-foreground" isAnimated={false} />
      <span className="inline-flex bg-primary p-3 text-primary-foreground">
        <WifiIcon size={32} isAnimated={false} />
      </span>
    </div>
  );
}
