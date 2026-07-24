# NOTES — teaching notes

## Language & audience
- English. Same user as `ios-distribution` (and other workspaces here) — a software engineer. Technical/professional-topic courses in this repo are in English (ios-distribution); personal-interest topics (ancient-greece, japanese-mythology) are in Japanese for this same user. This course follows the English/professional pattern since it was requested in English and spans real engineering tooling.
- Not assumed to have finance/business background — the business/economics half of the course should explain its own terms (valuation, burn rate, circular financing, etc.) rather than assume familiarity.

## Mission driver (established in intake, 2026-07-24)
- Asked the user why this matters and how to balance technical vs. business content. Answer: "all of the above" (builder fluency + business judgment + conversational competence, no single driving decision) and "both, roughly equal" (treat as one landscape, not two tracks). See MISSION.md.

## Sourcing — this is the load-bearing constraint for this course
- User explicitly flagged this as an "ever-changing, transient topic" requiring "real research," not recalled/parametric knowledge. Every lesson must be grounded in dated, cited sources — see RESOURCES.md. Moving figures (valuations, revenue, org changes) get an explicit "as of [date]" in the lesson text, not stated as timeless fact.
- Initial research pass (2026-07-24, via two parallel research agents) covered: major labs/players and positioning, funding/valuation landscape, big figures, what's come and gone (AutoGPT, prompt-engineer-as-title, DeepSeek moment, wrapper-startup wipeout, vibe coding's semantic drift, Swarm→Agents SDK, AutoGen→Microsoft Agent Framework), and the technical ecosystem (AI-DLC, Mastra, ontology's Palantir-driven redefinition, Hugging Face's current role, MCP, agent framework landscape, RAG vs. long-context vs. fine-tuning). Full findings distilled into L0001/L0002 and reference/state-of-play.html — treat that reference doc's date stamp as the freshness marker for the whole initial research pass.
- Given the decay rate, expect this course to need "what's changed since we last talked" refresh sessions rather than being a stable, finish-once course — flagged explicitly in MISSION.md constraints.

## Course shape
- Planned as a layer-by-layer syllabus (see reference/course-map.html) rather than a strict chronological "spine" like the mythology/ancient-greece courses — this topic doesn't have a single narrative timeline, it has parallel layers (who's building, who's paying, what tools exist, what's dated) that the user needs to be able to move between.
- L0001 covers the business/players layer (labs, infra, money, big figures) as the entry point, since it's the frame everything else hangs off. L0002 covers the technical-ecosystem terms the user named explicitly (MCP, Mastra, ontology, Hugging Face, RAG).
- Quiz design: mix free-recall and multiple-choice from the start (no evidence yet this user finds 3-option recognition quizzes too easy, unlike the mythology-course user, but default to the harder mix as a safe starting point until we see how it lands).
