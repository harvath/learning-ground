# RESOURCES — Data Engineering for AI

Grounding sources for this course. Prefer these over parametric recall. Anything that moves (versions, adoption stats, acquisitions) gets an "as of [date]" in the lesson.

## Primary / foundational (stable concepts)
- **Fundamentals of Data Engineering** — Joe Reis & Matt Housley, O'Reilly, June 2022. The source of the **data engineering lifecycle** framing (generation → storage → ingestion → transformation → serving, plus undercurrents: security, data management, DataOps, data architecture, orchestration, software engineering). The course's structural backbone. https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/
  - Free author-adjacent summary of the lifecycle: https://xebia.com/blog/fundamentals-of-data-engineering/
- **The Data Engineering Lifecycle (author talks / O'Reilly video)** — https://www.oreilly.com/library/view/introduction-to-the/0636920921646/

## Data-for-AI reframe (fast-moving — date everything)
- **Atlan — "Context Layer for AI Agents: Enterprise Guide 2026."** Defines the context layer and its five components (semantic layer, ontology/identity, operational playbooks, lineage/provenance, active metadata). Source of the OpenAI internal-agent latency figure (22 min → 1:22, OpenAI eng, Jan 2026) and the 7%-AI-ready stat (Cloudera + HBR Analytic Services, March 2026). Vendor content — read for the framing, treat stats as cited-but-vendor-selected. https://atlan.com/know/context-layer-for-ai-agents/
- **Atlan — "What Is a Semantic Layer for AI Agents? (2026)."** https://atlan.com/know/ai-agent/semantic-layer-for-ai-agents/
- **Coalesce — "2026 Enterprise Data AI Readiness Framework"** (PDF). https://coalesce.io/wp-content/uploads/2025/12/2026-Enterprise-Data-AI-Readiness-Framework.pdf
- **OvalEdge — "Enterprise Context Layer for AI Governance."** A less vendor-locked framing of the same idea. https://www.ovaledge.com/blog/enterprise-context-layer-ai-governance

## Frameworks / retrieval (fast-moving — date everything)
- **Mastra** — TypeScript AI agent framework. v1.0 shipped Jan 2026; ~300K weekly npm downloads (as of early 2026); built by the team behind Gatsby. Agents, workflows, memory, RAG primitives (chunk/embed/retrieve/ground), observability. https://mastra.ai/
  - "Mastra in 2026: What It Is, When to Use It, How It Compares" (independent) — https://dev.to/gabrielanhaia/mastra-in-2026-what-it-is-when-to-use-it-and-how-it-compares-2go1
  - "Where It Fits and Where It Does Not" (balanced/critical) — https://www.developersdigest.tech/blog/mastra-durable-typescript-agents

## Cross-references into the sibling `ai-economy` course (same repo)
- ai-economy B2 `lessons/0009` — dbt/Fivetran, Great Expectations, OpenLineage/Marquez (landscape-level; this course goes deeper on the concepts).
- ai-economy B3 `lessons/0010` — MCP, RAG vs. long-context vs. fine-tuning, GraphRAG, ontology intro.
- ai-economy B4 `lessons/0011` — agent-framework landscape (Mastra, LangGraph, goose, LlamaIndex).
- ai-economy B5 `lessons/0012` — OPA/Rego vs. Cedar, the ontology critique.

## Communities (for wisdom — real-world testing)
- **r/dataengineering** — the main practitioner subreddit; strong "is this concept real or hype" signal. https://www.reddit.com/r/dataengineering/
- **dbt Community Slack** — analytics-engineering practice, semantic-layer discussion. https://www.getdbt.com/community/join-the-community
- **Locally Optimistic** (Slack) — data-team practice and governance discussion. https://locallyoptimistic.com/community/
- **MLOps Community** — retrieval/RAG/agent-in-production discussion. https://mlops.community/

## To find later (gaps to fill as the course grows)
- A high-trust, non-vendor primer on embeddings & vector search (candidate: Pinecone/Weaviate learn hubs — but survey, don't crown).
- A neutral reference on data contracts (candidate: PayPal's original data-contracts write-up; Andrew Jones' work).
- OpenLineage spec docs for the lineage lesson (LF AI & Data Foundation).
