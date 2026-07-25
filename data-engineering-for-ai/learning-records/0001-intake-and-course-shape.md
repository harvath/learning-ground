# 0001 — Intake and course shape

**Date:** 2026-07-25
**Status:** active

## Context
New course requested: data engineering "especially for AI context" — store all of an org's data, attach metadata + policy rules, then use agents/frameworks (user named Mastra) to retrieve it or run custom workflows. User stated the *real* goal is to **thoroughly understand the concepts**, with the build scenario as the motivating frame rather than the deliverable.

## Decisions (from a 4-question intake fork)
1. **Concept vs. build → balanced, concept-led with a build spine.** Concepts drive each lesson; a single running example org threads through so ideas land against something concrete. Not a run-the-code tutorial.
2. **Baseline → mostly new to data engineering.** Strong general software engineer, but DE as a discipline is new. Start from foundations; don't assume warehouse/ETL/embedding fluency.
3. **Grounding → real intent, data shape still fuzzy.** No specific org/dataset pinned → invented a realistic composite, **"Meridian"** (mid-size B2B SaaS, deliberately heterogeneous data). Re-anchor if the user later names their real org/data.
4. **Tooling → concepts first, tools as current examples.** Survey categories fairly; never crown one vendor (Mastra included). Same fairness rule the user set in the sibling `ai-economy` course.

## Course structure chosen
Five units following the spine bottom-up — **store → describe → govern → make reachable → act on** — ~17 lessons. See `reference/course-map.html`. Rationale: the user reads for connective structure (documented trait from `ai-economy`), so a single explicit spine metaphor beats a flat lesson list. Units B and C are framed as "the lifecycle's *undercurrents* (governance/security) made the main event," which is the conceptual hinge of "why AI raises the bar."

## Relationship to `ai-economy` (same user, same repo)
`ai-economy` is the landscape/economy survey and explicitly parks "hands-on DE / building with Mastra" as a future separate course — this is that course. Overlapping topics (MCP, RAG, agent frameworks, OPA/Cedar, dbt/lineage) are cross-linked, not re-explained at the same altitude; this course re-teaches them from foundations for a beginner and applies them to Meridian.

## Built this session
- Full workspace scaffold (MISSION, NOTES, RESOURCES, GLOSSARY, course-map, index, assets: new light "engineering blueprint" theme + copied quiz/recall widgets).
- **L0001 — "The Lifecycle, and Why AI Reframes It"**: the five-stage lifecycle + undercurrents; the "7% AI-ready" gap and OpenAI 22min→1:22 as dated showcase facts; introduces Meridian and the spine.

## Open threads / next
- **A2 — The Shape of Org Data** is the natural next lesson (zoom into stage 1 / structured vs. semi vs. unstructured, inventory Meridian).
- Watch for the same feedback the user gave in `ai-economy`: gloss forward-referenced jargon at first mention; include genuine skeptic takes on contested terms (e.g. is "AI-ready data"/"context layer" substance or vendor marketing — flagged as a good student question in L0001's ask-box, worth a real treatment when B2 covers the semantic/context layer).
- No feedback yet on this course's *difficulty calibration* or *quiz mix* — L0001 used the harder recall+MC mix as the default; adjust once the user reacts.
