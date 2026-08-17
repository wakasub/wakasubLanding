import { Button } from "my-v0-project";
import { ArrowRightIcon, SparklesIcon } from "my-v0-project";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Buy data</Button>
      <Button variant="secondary">View plans</Button>
      <Button variant="outline">Become a reseller</Button>
      <Button variant="ghost">Learn more</Button>
      <Button variant="destructive">Cancel order</Button>
      <Button variant="link">Terms apply</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Continue">
        <ArrowRightIcon size={16} isAnimated={false} />
      </Button>
    </div>
  );
}

export function WithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="lg" className="px-9 text-base font-semibold shadow-lg shadow-primary/25">
        Start buying data
        <ArrowRightIcon size={18} isAnimated={false} />
      </Button>
      <Button size="lg" variant="outline" className="bg-transparent px-9 text-base font-medium">
        <SparklesIcon size={18} isAnimated={false} />
        See what&apos;s new
      </Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Processing…</Button>
      <Button variant="outline" disabled>
        Out of stock
      </Button>
    </div>
  );
}
