import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const read = (relativePath) =>
  readFileSync(join(root, relativePath), "utf8");

test("globals exposes dedicated fluid background tokens", () => {
  const css = read("app/globals.css");
  const requiredTokens = [
    "--fluid-base",
    "--fluid-depth",
    "--fluid-graphite",
    "--fluid-smoke",
    "--fluid-gloss",
    "--fluid-noise-opacity",
    "--fluid-vignette-strength",
  ];

  for (const token of requiredTokens) {
    assert.match(css, new RegExp(token), `missing ${token}`);
  }
});

test("fluid background supports reduced motion and array-driven masses", () => {
  const component = read("components/FluidBackground.tsx");

  assert.match(component, /useReducedMotion/, "expected reduced motion hook");
  assert.match(component, /backgroundMasses\.map/, "expected array-driven background layers");
});

test("layout and surfaces stop relying on flat ink fills", () => {
  const layout = read("app/layout.tsx");
  const nav = read("components/Nav.tsx");
  const hero = read("components/sections/Hero.tsx");
  const projectCard = read("components/sections/ProjectCard.tsx");

  assert.doesNotMatch(layout, /className="[^"]*\bbg-ink\b/, "body should not be pinned to flat bg-ink");
  assert.doesNotMatch(nav, /bg-ink\/60|bg-ink\/80/, "nav surfaces should be translucent fluid surfaces");
  assert.doesNotMatch(hero, /className="[^"]*\bbg-smoke\b/, "hero portrait shell should not use a flat smoke fill");
  assert.doesNotMatch(projectCard, /className="[^"]*\bbg-smoke\b/, "project media shells should not use a flat smoke fill");
});
