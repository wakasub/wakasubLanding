import { Input, Label } from "my-v0-project";

export function WithLabel() {
  return (
    <div className="grid w-80 gap-1.5">
      <Label htmlFor="ds-input-phone">Phone number</Label>
      <Input id="ds-input-phone" type="tel" defaultValue="0803 000 0000" />
    </div>
  );
}

export function Placeholder() {
  return (
    <div className="grid w-80 gap-1.5">
      <Label htmlFor="ds-input-email">Email address</Label>
      <Input id="ds-input-email" type="email" placeholder="you@example.com" />
    </div>
  );
}

export function States() {
  return (
    <div className="grid w-80 gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="ds-input-amount">Amount</Label>
        <Input id="ds-input-amount" defaultValue="₦3,500" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="ds-input-locked">Wallet (locked)</Label>
        <Input id="ds-input-locked" defaultValue="₦12,480.00" disabled />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="ds-input-search">Search plans</Label>
        <Input id="ds-input-search" type="search" placeholder="MTN, 10GB…" />
      </div>
    </div>
  );
}
