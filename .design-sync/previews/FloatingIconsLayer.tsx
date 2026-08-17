import {
  BanknoteIcon,
  FloatingIconsLayer,
  GiftIcon,
  SmartphoneIcon,
  TvIcon,
  WifiIcon,
  ZapIcon,
} from "my-v0-project";

/**
 * Ports the landing page's own hero icon set. The layer is absolute and
 * pointer-transparent, so it needs a `relative` parent with real height.
 */
const heroIcons = [
  { id: 1, icon: GiftIcon, tint: "text-rose-500", className: "top-[15%] left-[7%]" },
  { id: 2, icon: SmartphoneIcon, className: "top-[13%] right-[8%]" },
  { id: 3, icon: BanknoteIcon, tint: "text-emerald-500", className: "top-[42%] left-[4%]" },
  { id: 4, icon: WifiIcon, tint: "text-violet-500", className: "top-[38%] right-[5%]" },
  { id: 5, icon: TvIcon, tint: "text-primary", className: "bottom-[16%] left-[14%]" },
  { id: 6, icon: ZapIcon, tint: "text-amber-500", className: "bottom-[12%] right-[15%]" },
];

export function AroundHeroContent() {
  return (
    <div className="relative h-80 w-full overflow-hidden bg-background">
      <FloatingIconsLayer icons={heroIcons} />
      <div className="relative flex h-full items-center justify-center px-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Everything you top up, in one place
        </h2>
      </div>
    </div>
  );
}
