import { WhatsAppButton } from "my-v0-project";

export function Solid() {
  return (
    <WhatsAppButton href="https://chat.whatsapp.com/GiurYkD9QJe7BCXH1Kegn3">
      Join the reseller group
    </WhatsAppButton>
  );
}

export function Outline() {
  return (
    <WhatsAppButton href="https://wa.me/2347067902081" variant="outline">
      Chat with support
    </WhatsAppButton>
  );
}

/** Both entry points side by side, the way the site pairs them in a footer CTA. */
export function BothOnDarkSurface() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-foreground p-8">
      <WhatsAppButton href="https://chat.whatsapp.com/GiurYkD9QJe7BCXH1Kegn3">
        Join the group
      </WhatsAppButton>
      <WhatsAppButton href="https://wa.me/2347067902081" variant="outline">
        Chat with support
      </WhatsAppButton>
    </div>
  );
}
