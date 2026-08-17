import { Label, Textarea } from "my-v0-project";

export function WithLabel() {
  return (
    <div className="grid w-96 gap-1.5">
      <Label htmlFor="ds-textarea-msg">How can we help?</Label>
      <Textarea
        id="ds-textarea-msg"
        defaultValue="My 10GB MTN bundle hasn't landed yet — the wallet was debited at 09:41 this morning. Order reference WKS-48210."
      />
    </div>
  );
}

export function Placeholder() {
  return (
    <div className="grid w-96 gap-1.5">
      <Label htmlFor="ds-textarea-empty">Message</Label>
      <Textarea id="ds-textarea-empty" placeholder="Tell us what happened…" />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="grid w-96 gap-1.5">
      <Label htmlFor="ds-textarea-disabled">Message</Label>
      <Textarea
        id="ds-textarea-disabled"
        defaultValue="Ticket closed — reply to reopen."
        disabled
      />
    </div>
  );
}
