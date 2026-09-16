# NOTES — teaching notes

## Language & audience
- English. Same user as `ai-economy`/`ios-distribution` — a software engineer. Professional/technical-topic courses in this repo are in English.

## Mission driver (established in intake, 2026-09-16)
- User's stated request: "the history, prominent players, where we are at right now" for Software-Defined Vehicles (SDV). Asked why, and got: general industry literacy **and** a business/investment lens, "to get to know my client" — the client relationship itself is confidential and should not be probed. Depth balance: landscape-first (recommended option, confirmed) — technical architecture explained only as needed to understand business moves, not a deep engineering course. See MISSION.md.

## Sourcing — load-bearing constraint, same discipline as ai-economy
- This is a fast-moving, transient-facts topic (valuations, org structures, program cancellations). Every lesson must be grounded in dated, cited sources, not parametric recall — see RESOURCES.md.
- Initial research pass (2026-09-16, two parallel research agents): one covering history/technical evolution (CAN bus origins, ECU proliferation, Tesla's 2012 OTA inflection, domain→zonal architecture, AUTOSAR Classic vs Adaptive, the 2021 chip shortage, Cariad's full crisis timeline, subscription-economics flashpoints), one covering the current player landscape (legacy OEM SDV programs, EV-native and Chinese challengers, Tier-1/chip/platform suppliers, 2024–2026 deals and failures, regulatory bodies). Full findings are the basis for the syllabus in `reference/course-map.html` and should be treated as the freshness marker for the initial course build.
- Known gaps flagged by the research agents, worth remembering before teaching these as settled fact:
  - No clean citable origin for the term "software-defined vehicle" itself — TechCrunch (higher-trust) explicitly says no one is credited; the "Tesla coined it in 2012" story is folk history repeated across secondary/tertiary sources, not traced to a primary artifact. Teach as contested.
  - The oft-repeated "Cariad could generate €1.2 trillion by 2030" figure is very likely a garbled/misattributed industry-wide TAM statistic, not a real Cariad-specific target — do not repeat as fact without independent verification.
  - Cariad layoff figures are inconsistent across sources (1,600 vs 2,000; works council disputed VW's own number) — present as a contested range, not a hard number.
  - No credible contrarian source was found pushing back on the "China is ahead on SDV" consensus (Wards Intelligence, S&P Global Mobility, AlixPartners, Gartner all converge). Flag this one-sidedness explicitly to the user rather than presenting it as a settled, uncontested fact — it may just reflect a real one-sided reality, or a gap in the research pass.
  - Several McKinsey market-sizing figures ($238B 2020 → $469B 2030) were only confirmed via search-snippet aggregation, not a direct fetch of the McKinsey source (repeated timeouts) — re-verify before citing precisely.
  - Several supplier job-cut figures (Bosch, ZF) come from trade press, not primary company filings, and are not fully reconciled across articles — present as approximate ranges.

## Course shape — 3 units, 14 lessons, designed 2026-09-16
- **Unit A — Foundations: What SDV Means & How We Got Here** (A1–A6): definitions, the old distributed architecture and why it broke, Tesla's inflection, domain→zonal migration, the subscription business-model shift, Cariad as the industry's central cautionary tale.
- **Unit B — The Players, Today** (B1–B6): the analyst "who's ahead" scoreboard, legacy Western OEM programs, the China story, the Rivian–VW deal as a deep-dive case study, the supplier/chip/platform stack, standards & regulation.
- **Unit C — Reading the Industry Forward** (C1–C2): what's still unsettled (teaching the user to hold claims loosely, naming the specific contested points above), and staying current after the course ends.
- Rationale for ordering: history/definitions before players, so the user has a vocabulary and mental model before the name-dense player lessons — mirrors the ai-economy course's A-before-B structure, which worked well for this same user.

## A1 rewritten after sharp feedback (2026-09-16)
- First draft of A1 opened directly with a table comparing four formal definitions of SDV (McKinsey/Gartner/PwC/Bosch), used E/E architecture, OTA, and ECU without glossing any of them, and quizzed on "name the four framings" before the reader had any baseline grasp of what SDV even meant. User's reaction: "that makes me wonder if you really are trying to teach someone" — strong, deserved pushback.
- Fix applied: lesson now opens with a plain-language "30-second definition" paragraph (SDV = a car that gets better mainly through wireless software updates, not dealership part-swaps), glossing OTA/ECU/E-E architecture inline at first use within that opening. The formal-definitions comparison comes *second*, reframed as "two camps" (switch/binary — McKinsey, Gartner, Bosch — vs. dial/continuum — PwC) instead of four flat, uncategorized rows, which also fixed the "table isn't clear what's being compared" complaint. Checks reordered so recall of the plain definition comes before the quiz on framework distinctions.
- **Rule for this workspace, and generalized to memory**: never open a definitional lesson with a comparison of experts' formal definitions before establishing a rough working definition in plain language. Also never name a forward-referenced technical term (ECU, OTA, E/E architecture, and expect this to recur — zonal, AUTOSAR, ADAS, etc. in later lessons) without an inline gloss at first mention. This is now a hard default for every lesson in this course, not a case-by-case judgment call — see the global memory `feedback-inline-glosses-for-forward-referenced-terms` for the cross-course pattern (this is the third occurrence).

## Visual theme
- Distinct from ai-economy's "market terminal" dark-green look, per repo convention that courses don't share a visual theme. SDV theme: dashboard/instrument-cluster — near-black asphalt background, signal-blue accent (HUD blue), amber for warnings/cautions (a deliberate automotive "dash light" echo). Same reusable component classes and JS (quiz.js, recall.js) as ai-economy, since those are generic interaction components, not visual theme.
