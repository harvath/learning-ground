# GLOSSARY — Data Engineering for AI

Canonical definitions. Every lesson adheres to these. Add terms as lessons introduce them; keep definitions short and consistent. Mark which lesson first defines each.

## The spine (the course's organizing metaphor)
The path a piece of org data travels in this course: **store → describe → govern → make reachable → act on**. Each unit owns one segment. (L0001)

## Foundations (Unit A)
- **Data engineering** — the discipline of building the systems that move data from where it's produced to where it's used, reliably and at the right quality. Distinct from data *science* (analysis/modelling) and data *analysis* (interpretation). (L0001)
- **Data engineering lifecycle** — Reis & Housley's five-stage model: **generation → storage → ingestion → transformation → serving**, supported by cross-cutting **undercurrents** (security, data management, DataOps, data architecture, orchestration, software engineering). (L0001)
- **Undercurrents** — concerns that run across *every* lifecycle stage rather than sitting at one (e.g. security, governance, orchestration). Most of this course's "describe / govern" units are undercurrents made explicit. (L0001)
- **System of record** — the authoritative source for a given piece of data (e.g. the billing DB is the system of record for invoices). Contrast with derived/duplicated copies. (L0001)
- **Structured / semi-structured / unstructured data** — structured = fixed schema, rows & columns (a SQL table); semi-structured = self-describing but irregular (JSON logs, tickets); unstructured = no schema (PDFs, chat, audio). AI work leans heavily on the unstructured pile most analytics ignored. (L0001, expanded L0002)
- **AI-ready data** — data that has been described and governed well enough that a model/agent can retrieve the *right* slice and be trusted to act on it. The gap this course closes. (L0001)

## Describing data (Unit B) — *defined when reached*
- **Metadata** — data about data; typically split into technical, business, operational, and (newer) active metadata. *(Unit B)*
- **Data catalog**, **semantic layer**, **lineage / provenance**, **data contract**, **data quality** — *(Unit B)*

## Governing data (Unit C) — *defined when reached*
- **Classification**, **PII/PHI**, **policy-as-code**, **RBAC / ABAC**, **OPA/Rego**, **Cedar** — *(Unit C; cross-ref ai-economy B5)*

## Reaching the model (Unit D) — *defined when reached*
- **Embedding**, **vector search**, **chunking**, **RAG**, **long-context**, **fine-tuning**, **MCP** — *(Unit D; cross-ref ai-economy B3)*

## Agents & workflows (Unit E) — *defined when reached*
- **Agent** vs. **workflow**, **framework** (Mastra, LlamaIndex, LangGraph, …) — *(Unit E; cross-ref ai-economy B4)*

---
*Convention: when a term is first defined in a lesson, it gets an inline `<span class="term">` gloss there too (per this user's stated preference for glossing forward-referenced jargon at first mention).*
