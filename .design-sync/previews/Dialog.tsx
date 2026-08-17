import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from "my-v0-project";

/**
 * Rendered open so the card shows the real overlay + panel. In app code the
 * open state is driven by `<DialogTrigger>` or a controlled `open` prop.
 */
export function Open() {
  return (
    <Dialog open modal={false}>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Join the reseller programme</DialogTitle>
          <DialogDescription>
            Discounted rates on every network, and a dashboard to track your
            sales. We&apos;ll reach out within one business day.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="ds-dialog-name">Full name</Label>
            <Input id="ds-dialog-name" defaultValue="Amaka Obi" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ds-dialog-phone">Phone number</Label>
            <Input id="ds-dialog-phone" defaultValue="0803 000 0000" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Not now</Button>
          <Button>Send request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
