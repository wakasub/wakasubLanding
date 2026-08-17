# design-sync notes — wakasubLanding

Repo-specific gotchas for future syncs. Config lives in `config.json`; the
design-agent-facing conventions live in `conventions.md`.

## This repo is an app, not a package

There is no published component library here — no `dist/`, no Storybook, no
library build. Three committed files make it syncable, and none of them affect
the Next app:

- **`ds-entry.tsx`** — the barrel that *defines the synced surface*. Adding or
  removing a component from the design system means editing this file. It uses
  relative imports (`./components/...`) on purpose: the emitted `.d.ts` keeps
  whatever specifier the source used, and ts-morph (which reads the declaration
  tree with no `paths` config) cannot resolve `@/`. Switch it back to `@/` and
  component discovery silently returns zero.
- **`ds-shim.ts`** — imported first by `ds-entry.tsx`. Components pull in
  `next/link` / `next/image`, whose module scope reads `process.env.__NEXT_*` at
  import time. Design previews are plain browser pages with no `process`, so
  without this every card dies with `ReferenceError: process is not defined`
  before React mounts. It must stay the **first import** in the barrel.
- **`tsconfig.ds.json`** — declaration-only build into `dist/types/`, which is
  where `findTypesRoot` looks. `package.json` gained a `types` field pointing at
  `dist/types/ds-entry.d.ts`; without it, component discovery finds nothing.

`dist/` is generated and gitignored. Re-run `buildCmd` (in config.json) before
the converter on every sync.

## Tailwind: the app's stylesheet is not enough

`app/globals.css` compiles to only the utilities *this repo happens to use* —
Tailwind v4 generates from a content scan. That is wrong for a design system:
the design agent writes `grid-cols-3`, `w-1/2`, `max-w-4xl` and so on, and any
class missing from the shipped CSS renders as nothing.

So the sync compiles **`.design-sync/ds-styles.css`** instead, which imports the
app's real theme and then safelists the common utility surface via
`@source inline(...)`. It also `@source`s `./previews` — Tailwind's automatic
detection skips dot-directories, so without that line the authored preview
files' classes (e.g. `w-[22rem]`) never compile and cards render at the wrong
size. Compiled output is ~370 KB, which is fine.

**If a class the agent uses doesn't work, add it to the safelist there.**

## Fonts

Poppins and Bricolage Grotesque come from `next/font/google`, which only exists
inside a Next build. The woff2 files next/font self-hosted were copied out of
`.next/static/media/` into `.design-sync/fonts/` and are committed, so a
re-sync never depends on `.next/` existing. `ds-styles.css` declares the
`@font-face` rules and restates `--font-poppins` / `--font-display` (normally
injected by `layout.tsx`), plus a `body` font-family rule since previews have no
app layout wrapper. One file per weight — the `-s.p.` variants are the latin
subset; the other two per weight are latin-ext etc. and were not shipped.

## Grouping

`srcDir` is pinned to `components` because `lib/` would otherwise win the
`src | lib | components` heuristic and match nothing. Even then the dir-derived
group is useless here (`ui` is a generic dir name; icon files are `zap.tsx` but
export `ZapIcon`, so fuzzy src-matching misses). Groups therefore come from
frontmatter-only stubs in `.design-sync/docs/<Name>.md`, discovered via
`docsDir`. An empty doc body is deliberate: `category` still applies, and the
converter falls back to its synthesized prompt, so the stubs cost nothing.
**Adding a component means adding its stub**, or it lands in `general`.

## Known render warns

- `[FONT_MISSING] "Cambria"` — a generic serif fallback inside a Tailwind
  default font stack, not a brand font. Nothing to ship. Expected on every run.
- 17 components ship the **floor card** ("preview not yet authored"): the Card
  and Dialog sub-parts, plus `Navbar`, `DataPricing`, `InternshipModal`. This
  was the agreed scope — they are fully functional and typed, just without a
  hand-authored preview. The sub-parts are composed inside their parent's
  preview, which is the only render that's true anyway.

## Capture timing vs. entrance animations

`package-capture` / `package-validate` screenshot at `networkidle`, which lands
inside some components' entrance animations. This is a **grading-medium
limitation, not a defect** — the product renders these cards live, so users see
the finished state.

- `FloatingIconsLayer` — icons fade+scale in on a `0.4s + index*0.08s` stagger.
  The still frame catches only the heading. Verified correct with a manual 2.5s
  screenshot.
- `PathsBackground` / `BackgroundPaths` — SVG paths draw in over ~20s and the
  strokes are `opacity-30` hairlines, so they also vanish at contact-sheet
  thumbnail scale. Verified correct at full size.

If a card looks empty, screenshot it directly with a delay before assuming it's
broken.

## PathsBackground needs a background-free ancestor

It's `position:absolute; z-index:-10`. Negative-z-index descendants paint
*before* every block box background in the same stacking context, so ANY
ancestor with a `bg-*` class hides it completely. Its preview deliberately has
no background anywhere in the tree. Same applies in app code.

## Re-sync risks

- **Component set drift.** `ds-entry.tsx`, `.design-sync/docs/*.md` stubs and
  `.design-sync/previews/*.tsx` are three parallel lists. Add a component to the
  barrel without a docs stub and it silently lands in `general`.
- **Fonts are a point-in-time copy.** If `layout.tsx` changes weights or
  families, `.design-sync/fonts/` and the `@font-face` block in `ds-styles.css`
  go stale silently — nothing checks them against `layout.tsx`.
- **The safelist is a guess at what the agent will need.** It was not derived
  from usage data. Expect to extend it.
- **Icon previews are template-generated** (one `SizesAndTints` export each,
  same shape for all 47) and were graded from the render-check contact sheets
  rather than 47 individual review sheets. If an icon's card ever looks wrong,
  regrade that one from its own sheet.
- **`lib/data-plans-server.ts` has a pre-existing type error** (`next` fetch
  option not in `RequestInit` because `tsconfig.ds.json` excludes `app/`). It
  does not block declaration emit. Ignore it, or exclude the file if it ever
  does.
- **Preview scope was deliberately partial.** Authoring previews for the 17
  floor-card components is the obvious next increment; authored files and grades
  carry forward, so it's cheap to do later.
