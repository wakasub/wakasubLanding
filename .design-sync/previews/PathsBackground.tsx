import { PathsBackground } from "my-v0-project";

/**
 * PathsBackground is an absolutely-positioned decorative layer at `-z-10`, so
 * its `relative` host must not paint a background — and neither may any
 * ancestor, because a negative z-index layer paints beneath every block
 * background. The hero and reseller sections both rely on that. The paths also
 * draw themselves in over ~20s, so a still frame catches them mid-stroke.
 */
export function BehindHeroContent() {
  return (
    <div className="relative h-80 w-full overflow-hidden">
      <PathsBackground />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          Data, airtime and bills — instantly
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          The flowing path field sits behind the content, never in front of it.
        </p>
      </div>
    </div>
  );
}

export function WithFadeMask() {
  return (
    <div className="relative h-80 w-full overflow-hidden">
      <PathsBackground className="mask-[linear-gradient(to_bottom,black_5%,black_60%,transparent)]" />
    </div>
  );
}
