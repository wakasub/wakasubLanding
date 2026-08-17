import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
} from "my-v0-project";

export function PlanCard() {
  return (
    <Card className="w-[22rem]">
      <CardHeader>
        <CardTitle>MTN 10GB · 30 days</CardTitle>
        <CardDescription>Gigabyte bundle, delivered instantly</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight">₦3,500</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Reseller price ₦3,320 — save ₦180 on every purchase.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Buy this plan</Button>
      </CardFooter>
    </Card>
  );
}

export function WithBadge() {
  return (
    <Card className="w-[22rem]">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Reseller tier</CardTitle>
          <Badge variant="secondary">Most popular</Badge>
        </div>
        <CardDescription>
          Discounted rates across every network, with a dashboard to track sales.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Airtime, data, cable TV and electricity — one wallet, one balance.
      </CardContent>
    </Card>
  );
}

export function ContentOnly() {
  return (
    <Card className="w-[22rem]">
      <CardContent className="text-sm">
        A bare card is a plain bordered surface — square by design, carrying its
        structure in hairline borders rather than rounded corners.
      </CardContent>
    </Card>
  );
}
