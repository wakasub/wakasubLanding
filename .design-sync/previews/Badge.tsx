import { Badge } from "my-v0-project";
import { CheckCircle2Icon, ZapIcon } from "my-v0-project";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Instant</Badge>
      <Badge variant="secondary">Cohort updates</Badge>
      <Badge variant="outline">Coming soon</Badge>
      <Badge variant="destructive">Out of stock</Badge>
    </div>
  );
}

export function WithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>
        <ZapIcon size={12} isAnimated={false} />
        Instant delivery
      </Badge>
      <Badge variant="secondary">
        <CheckCircle2Icon size={12} isAnimated={false} />
        Verified reseller
      </Badge>
    </div>
  );
}

export function InContext() {
  return (
    <div className="flex w-80 items-center justify-between border border-border bg-card p-4">
      <div>
        <p className="text-sm font-semibold text-foreground">MTN 10GB</p>
        <p className="text-xs text-muted-foreground">30 days · ₦3,500</p>
      </div>
      <Badge variant="secondary">Most popular</Badge>
    </div>
  );
}
