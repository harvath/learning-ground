# NOTES — teaching notes

## Language & audience
- English. Same user as `ai-economy`, `ios-distribution` (a software engineer). Technical/professional courses in this repo are in English; personal-interest ones (ancient-greece, japanese-mythology) are in Japanese for this same user. This one is English (professional, requested in English).
- Strong general engineer, **new to data engineering as a discipline** (confirmed at intake, 2026-07-25). Do not assume warehouse / ETL / embeddings / vector-DB fluency. Start from foundations.

## Mission drivers (established at intake, 2026-07-25, via 4-question fork)
1. **Concept vs. build →** "Balanced: concepts + a build spine." Concepts are primary; a single running example dataset threads through all lessons. Not a run-the-code tutorial.
2. **Baseline →** "Mostly new to all of this." Start from the ground.
3. **Grounding →** "Real intent, data shape still fuzzy." No specific org/dataset pinned yet → use a realistic composite org ("Meridian"). If the user later names their real org/data, revisit MISSION and re-anchor examples.
4. **Tooling →** "Concepts first, tools as current examples." Survey categories fairly; never frame one vendor (Mastra included) as the default. Same fairness rule as `ai-economy`.

## The running example — "Meridian" (composite org)
- A mid-size B2B SaaS company. Deliberately heterogeneous data so every data-shape shows up:
  - **Structured / systems of record:** a Postgres app DB (customers, subscriptions, orders/invoices), a CRM (accounts, deals), an HR system.
  - **Semi-structured:** support tickets (Zendesk-like), event/telemetry logs (JSON), API logs.
  - **Unstructured:** product docs & a wiki (Confluence-like), Slack history, PDFs of signed contracts, recorded sales calls (transcripts).
- Keep Meridian consistent across every lesson. Each spine stage is illustrated with the same data (e.g. "the signed-contract PDFs" recur from storage → classification → chunking → retrieval). Introduced in L0001.
- Meridian is fictional/composite by design (user has no specific org yet). Don't present it as real.

## Relationship to the sibling `ai-economy` course
- `ai-economy` is the **landscape/economy** survey (players, money, what's dated) and explicitly parks "hands-on data engineering / building with Mastra" as *a separate future course* — this is that course. Cross-link, don't duplicate:
  - ai-economy **B2** (0009) already surveys dbt/Fivetran, Great Expectations, OpenLineage/Marquez at a landscape level → this course goes a level deeper on lineage/contracts/quality; link back rather than re-explain the M&A.
  - ai-economy **B3** (0010) covers MCP, RAG vs. long-context vs. fine-tuning, GraphRAG, ontology intro → Unit D here re-teaches these *from foundations for a beginner* and applies them to Meridian; link across.
  - ai-economy **B4** (0011) surveys the agent-framework landscape (Mastra, LangGraph, goose…) → Unit E here goes into agent-vs-workflow mechanics and the governed-retrieval payoff; link across.
  - ai-economy **B5** (0012) covers OPA/Rego vs. Cedar and the ontology critique → Unit C here teaches policy-as-code from foundations; link across.

## Sourcing discipline (inherited from the same user's `ai-economy` course)
- Ground in real, dated, cited research — not parametric recall — especially for anything that moves (framework versions, adoption stats, acquisitions). Stable concepts don't need dating.
- Per lesson, where research turns one up, highlight one concrete "don't trust stale knowledge / here's a real number" fact to keep the sourcing discipline tangible. L0001 uses: **only 7% of enterprises say their data is completely ready for AI** (Cloudera + HBR Analytic Services, March 2026) and **OpenAI's internal data agent: 22 min → 1:22** once a full context stack was in place (Jan 2026).

## Teaching-style defaults carried over from the same user (from `ai-economy/NOTES.md`)
- **Forward-referenced jargon needs an inline gloss at first mention**, not a bare forward-link. This user flagged unglossed terms (AGI, App ID) as exactly what they came to have explained. Use `<span class="term">` + a nearby short definition on first use.
- **Prefer systematic/genealogical framing** — show how terms relate, which comes after which (category tables, timelines, the spine diagram) over flat lists of separate blurbs. This user reads for connective structure.
- **Survey categories, don't crown a vendor.** When a lesson covers a category with real competitors, place the obvious name within the field.
- **Include genuine critiques/skeptic takes** where a concept is contested (e.g. "context layer" / "semantic layer" as vendor marketing vs. substance), not just the vendor framing.
- Quiz design: mix free-recall (harder) and multiple-choice from the start; equal-length options with no formatting tells.

## Course shape (set at intake, 2026-07-25) — 5 units, ~17 lessons
See `reference/course-map.html`. Units follow the spine bottom-up:
- **A — Foundations:** the data engineering lifecycle; the shape of org data; where data lives.
- **B — Describing data:** metadata; catalog & semantic layer; lineage; contracts & quality.
- **C — Governing data:** classification; policy-as-code; governance for agents.
- **D — Reaching the model:** embeddings & vector search; chunking; RAG vs. long-context vs. fine-tuning; MCP & tools.
- **E — Agents & workflows:** agent vs. workflow; the framework landscape; the governed-retrieval payoff over Meridian.
- Only L0001 built so far. Rest are planned slots — adjust to the user's zone of proximal development as we go.
