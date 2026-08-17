import { Input, Label } from "my-v0-project";

export function Default() {
  return (
    <div className="grid w-80 gap-1.5">
      <Label htmlFor="ds-label-network">Network</Label>
      <Input id="ds-label-network" defaultValue="MTN" />
    </div>
  );
}

export function Standalone() {
  return (
    <div className="flex flex-col gap-3">
      <Label>Wallet balance</Label>
      <Label>Delivery status</Label>
      <Label>Order reference</Label>
    </div>
  );
}
