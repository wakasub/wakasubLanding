## Building with the Wakasub design system

### No provider, no wrapper

Components mount directly — there is no ThemeProvider, no context root, nothing to wrap. Import and render.

Dark mode is class-based: put `.dark` on any ancestor (usually `<html>` or `<body>`) and every token below flips. Without it you get the light palette.

Give `<body>` the `font-sans` class (or leave it — the shipped stylesheet already sets the body font). Everything else inherits.

### The styling idiom: Tailwind v4 utilities over semantic tokens

Style with Tailwind utility classes, and reach for **semantic color names, never raw palette colors**. `bg-primary` is correct; `bg-blue-600` is not — it hardcodes a value that dark mode and future rebrands cannot touch.

The full semantic set, usable with any color-taking prefix (`bg-`, `text-`, `border-`, `ring-`, `fill-`, `stroke-`, `divide-`, `from-`/`via-`/`to-`):

| Token | Use |
|---|---|
| `background` / `foreground` | page surface and its body text |
| `card` / `card-foreground` | raised panel surface and its text |
| `popover` / `popover-foreground` | overlay surface and its text |
| `primary` / `primary-foreground` | Wakasub blue and text placed on it |
| `secondary` / `secondary-foreground` | tinted blue surface, quieter than primary |
| `muted` / `muted-foreground` | subdued surface; `muted-foreground` is the standard secondary-text color |
| `accent` / `accent-foreground` | hover/selected surface |
| `destructive` | errors and destructive actions |
| `border` / `input` / `ring` | hairline borders, form control borders, focus rings |
| `chart-1` … `chart-5` | data-visualization series |
| `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-accent`, `sidebar-border` | sidebar chrome |

Opacity modifiers work throughout: `bg-primary/10`, `border-border/60`, `text-foreground/80`.

### Square by design

The whole radius scale is pinned to `0rem`. `rounded-lg`, `rounded-full` and friends all resolve to `border-radius: var(--radius)` — which is zero. This is deliberate: the UI carries its structure in hairline borders, not rounded corners. Do not reintroduce corner radius with arbitrary values like `rounded-[8px]`; it will read as off-brand.

### Type

- `font-sans` → **Poppins** (body, default)
- `font-display` → **Bricolage Grotesque** (headings and hero type)

Both ship as woff2 in `fonts/`. Headings on this site are heavy and tight: `text-4xl font-bold tracking-tight` is the house pattern.

### House utilities beyond stock Tailwind

`animate-marquee`, `animate-marquee-slow`, `animate-marquee-reverse` (infinite horizontal scrollers, already reduced-motion aware), `animate-float`, `animate-slide-up`, `bg-dot-grid` and `bg-grid-lines` (background textures).

**Buttons carry their own hover behaviour — do not re-implement it.** Every `Button` grows a hard 3px offset shadow in the foreground colour on hover; that rule is global CSS keyed off `[data-slot="button"]`, so it applies automatically and needs no class. Put `className="btn-icon"` on an icon inside a button (nothing else — no size or margin classes) and it stays collapsed to zero width until the button is hovered or keyboard-focused, then animates in. Use it for trailing affordance icons like an arrow; never on an icon-only button, whose icon must stay visible at rest. On a non-button element that should get the same offset shadow from a parent's hover, mark the parent `group` and the element `btn-neu`.

### One caveat that matters

The shipped stylesheet is a **compiled, finite set of utilities** — not Tailwind's full generated space. Common layout, spacing, sizing, typography, color and effect utilities are included (including `sm:`/`md:`/`lg:` variants of the layout-critical ones), but exotic or arbitrary-value classes may not resolve. When a class appears to do nothing, check it against the stylesheet rather than assuming it applied.

### Where the truth lives

- `_ds/<folder>/styles.css` — the entry; it `@import`s `fonts/fonts.css` and `_ds_bundle.css`, where every real rule and token value lives. Read it before inventing a class.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage and props.
- `components/<group>/<Name>/<Name>.d.ts` — the typed API contract.

### Icons

All `*Icon` components take `size` (number, px) and `className` for color, plus `isAnimated` (default `true`) which enables a draw-in animation on hover. They also expose an imperative handle (`startAnimation()` / `stopAnimation()`) via ref. Color them with `text-*` on the icon itself.

### An idiomatic example

```jsx
<Card className="w-[22rem]">
  <CardHeader>
    <div className="flex items-center justify-between gap-3">
      <CardTitle>MTN 10GB · 30 days</CardTitle>
      <Badge variant="secondary">Most popular</Badge>
    </div>
    <CardDescription>Gigabyte bundle, delivered instantly</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-semibold tracking-tight">₦3,500</p>
    <p className="mt-1 text-sm text-muted-foreground">
      Reseller price ₦3,320 — save ₦180 on every purchase.
    </p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">
      Buy this plan
      <ArrowRightIcon size={16} />
    </Button>
  </CardFooter>
</Card>
```

Library components carry the control; Tailwind utilities over semantic tokens carry your own layout glue.
