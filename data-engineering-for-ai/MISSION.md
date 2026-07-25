# Mission: Data Engineering for AI — Store It, Describe It, Govern It, Retrieve It

## Why
The user wants to **thoroughly understand the concepts** of data engineering as it applies to AI systems — not just to ship one thing, but to build a durable mental model. The concrete driving scenario they described: take *all of an organization's data*, store it, attach **metadata** (what each thing is, where it came from) and **policy rules** (who/what may use it, for what), and then let **agents or frameworks** (they named Mastra) retrieve it or run **custom workflows** over it. That end-to-end path — raw org data → described → governed → reachable by a model → acted on by an agent — is the spine of the course. But the stated priority is understanding *why each layer exists and how they connect*, over any single build.

## Success looks like
- Can describe the **data engineering lifecycle** (generation → storage → ingestion → transformation → serving, plus its undercurrents) and explain how "data for AI" reframes each stage
- Can explain, and place relative to each other, the load-bearing concepts: structured vs. unstructured data; database vs. warehouse vs. lake vs. lakehouse; **metadata** (technical / business / operational / active); **catalog** and **semantic layer**; **lineage / provenance**; **data contracts** and **data quality**; **classification** and **policy-as-code**; **embeddings / vector search**; **chunking**; **RAG vs. long-context vs. fine-tuning**; **MCP**; agent vs. workflow
- Can reason about **governance for agents specifically** — the difference between "the agent can find the data" and "the agent is allowed to act on it"
- Can look at a real framework (Mastra, LlamaIndex, LangGraph, …) and place it in the stack — what problem it solves, what it assumes already exists beneath it
- By the end, has conceptually "built" one governed retrieval pipeline over a single running example dataset — enough to know what a real one would require

## Constraints
- **Foundations-first.** The user is a strong general software engineer but new to *data engineering as a discipline* — start from the ground and never assume warehouse/ETL/embedding fluency is already there. Difficulty is the enemy for knowledge acquisition; keep each lesson within working memory.
- **Concepts drive; a build spine grounds them.** Every lesson advances understanding first, but a single composite example organization (**"Meridian"**, a mid-size SaaS company with heterogeneous data) threads through the whole course so ideas land against something concrete. The user does not (yet) have a specific org/dataset pinned down — so the example is a realistic composite, not their real data.
- **Tool-agnostic, but grounded in current leaders.** Teach the durable concept; illustrate with whatever tools genuinely lead *right now*, surveyed fairly. Never frame one vendor's product (including Mastra) as "the" answer — survey the category and place the obvious name within it. (This mirrors the sibling `ai-economy` workspace's explicit fairness rule for the same user.)
- **Some layers move fast** (frameworks, vector DBs, policy engines). Moving facts (version numbers, adoption stats, who-acquired-whom) carry an explicit "as of [date]" and a source. Stable concepts (what a join is, what an embedding is) do not need dating.
- Short, tightly scoped lessons. One layer of the spine per lesson, one tangible win.

## Out of scope
- Deep ML/DL theory (how embeddings are *trained*, transformer internals) beyond the minimum to understand a term in context — the sibling `ai-economy` course covers the industry/landscape side
- Becoming a production data-platform operator (Kubernetes, Spark tuning, warehouse cost optimization at scale) — this is conceptual understanding with a light build spine, not an ops course
- Full working code for a specific stack as the primary deliverable — code appears as illustration, not as a tutorial to copy-run end to end
- Re-teaching the AI *economy* (who's funded, valuations, big figures) — that's the sibling course; here we cross-link rather than duplicate
