// Loaded first by ds-entry.tsx so it runs before any bundled module body.
//
// Components in this design system import next/link and next/image, whose
// module scope reads process.env.__NEXT_* at import time. Design previews run
// as plain browser pages with no bundler-injected `process`, so those reads
// throw ReferenceError before a single component mounts. Give them an empty
// env to read instead — the flags are all opt-in, so undefined is the correct
// value for every one of them.
const g = globalThis as unknown as {
  process?: { env: Record<string, string | undefined> };
};

if (typeof g.process === "undefined") {
  g.process = { env: {} };
}

export {};
