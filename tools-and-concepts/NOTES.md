# NOTES — teaching notes

## What this course is (established 2026-11-25)
- An **umbrella course** for tools and concepts that don't deserve a top-level course of their own. User's words: "I don't really want a whole new course on Lean (I don't think it belongs in the same level as 'japanese myths' or 'SDVs'). I want a set of lessons within this new course."
- Unit of organization is the **set**: one tool/concept, ~3–7 short lessons, in `lessons/<set-slug>/NNNN-title.html`. Lesson numbering restarts per set. Sets are independent. The course index (`index.html`) lists every set with its lessons; there is no separate course-map page because there is no fixed syllabus.
- Asset paths from a lesson are `../../assets/…` (one level deeper than other courses in this repo).
- When adding a set: add a section to `index.html`, a section to RESOURCES.md and GLOSSARY.md, a "Set" section below, and update the lesson count on the root `index.html` card.

## Language & audience
- English. Same user as `ai-economy` / `software-defined-vehicles` — a software engineer. Analogies to programming (type checkers, CI, monorepos, test suites, package managers) land well and are used throughout.

## What the user wants from each set
- From the Lean request: "the Lean lang and the concept behind it, what's new about it, why people are talking about it, and the change in ecosystem that lead to it." Treat those four questions (what + concept / what's new / why the buzz / what changed in the ecosystem) as the default template for any set, plus an honest-limits lesson.

## Standing rules carried over from other courses in this repo
- Plain-language working definition first ("The 30-second version"); formal definitions and comparisons only after.
- Gloss every technical term inline at first use (`<span class="term">`), including forward-referenced ones. See the SDV course's NOTES for the incident that made this a hard rule.
- Every claim about the world is cited and dated; fast-decaying numbers get an `.asof` badge.
- One lesson, one win.

## Visual theme
- "Engineer's field notebook": warm paper with a faint graph grid, ink-navy text, serif headings, vermilion accent, teal for code/recall. Deliberately light — the other technical courses (ai-economy, SDV) are dark. Adds `pre.code` (dark code block with `.c` comment / `.k` keyword / `.o` output spans), `.caption`, `.set-head` / `.set-tag` / `.set-blurb` for the index. quiz.js and recall.js are the repo's generic components, copied unchanged.

## Set 01 — Lean (built 2026-11-25, all 7 lessons in one pass)
- Shape: 1 what it is → 2 propositions-as-types + kernel → 3 pre-Lean history → 4 what Lean did differently → 5 mathematicians (LTE, PFR, collaboration) → 6 AI (AlphaProof → IMO 2025 → FLT Sep 2026, verified code) → 7 limits. Lessons 3–4 answer "the change in ecosystem"; 4 answers "what's new"; 5–6 answer "why people are talking"; 7 is the discount.
- Learner state: nothing confirmed yet. The user has not reported reading any lesson. Lesson 2 is the conceptual crux and the most likely to need a second pass with more examples.
- Research: two parallel research agents on 2026-11-25 (history/ecosystem; current buzz/AI/industry/caveats), plus a direct spot-check fetch of the three most surprising 2026 claims (Anthropic FLT post, Buzzard's response, de Moura's kernel postmortem) — all three confirmed.
- **Lean is not installed on this machine** (`lean`/`lake`/`elan` absent), so the code samples in lessons 1–2 were not compiled. They are deliberately minimal (`def double`, `#eval`, `unfold` + `omega`, `and_swap` with anonymous constructor). If a hands-on lesson is added, first paste them into live.lean-lang.org or install Lean and verify.
- Sourcing caveats worth remembering before repeating as settled fact:
  - Lesson 3's colour details — Odd Order paper being 255 pages from 1963, the Four Color proof's 1976 computer reliance, Kepler's 1998 proof / uncertain referees / Hales leading a 20-plus-person formalization — are from general knowledge, not from the research pass. Isabelle's 1986 date and Four Color's 2005 date are Wikipedia-only. Low risk, but not primary-verified.
  - "About three weeks" for PFR comes from a participant's remark in the Zulip thread, not from Tao's blog.
  - Buzzard's FLT project start (~Oct 2024) is inferred; the lesson says only "2024".
  - mathlib line counts disagree across sources (1.6M / 1.9M / 2.2M), so lesson 4 quotes theorem/definition/contributor counts from the stats page instead.
  - De Moura's AWS title varies by page; lessons avoid stating a title.
  - Quotes from fetched pages came through a summarizing fetch tool; the ones checked directly matched, the rest are short fragments and were not individually re-verified.
  - Not used because search-snippet only: "AlphaProof Nexus" name, PutnamBench 672/672 claims, leanVM, Harmonic's total raised, Axiom's valuation, the Riemann-zeta/Anthropic and "Lean-verified Riemann Hypothesis" items seen on lean-lang.org's news list (unverified — do not teach without opening the underlying announcement).
- This set will decay quickly (lesson 6 especially). Freshness marker: 2026-11-25.
- Natural follow-ups if the user asks: a hands-on lesson (install, write and prove things); verified software rather than mathematics (Cedar, Aeneas/Rust, AWS projects); how AI provers actually work.
