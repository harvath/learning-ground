# Tools & Concepts Resources

Grouped by set. Every entry is "good as of the date it was checked". The AI-related material in particular moves month to month.

---

# Set 01 — Lean (research pass: 2026-11-25)

## Start here — official and learning
- [lean-lang.org](https://lean-lang.org/) — home page, install, docs, news.
- [live.lean-lang.org](https://live.lean-lang.org/) — Lean in the browser, nothing to install. **Use for**: trying the lesson examples.
- [Theorem Proving in Lean 4](https://lean-lang.org/theorem_proving_in_lean4/) — the standard free book on the proving side. The [Dependent Type Theory chapter](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html) states Lean's foundation (Calculus of Constructions with inductive types and a universe hierarchy).
- [The Lean Language Reference](https://lean-lang.org/doc/reference/latest/) — authoritative; the [Elaboration and Compilation](https://lean-lang.org/doc/reference/latest/Elaboration-and-Compilation/) page describes the kernel and names the independent re-implementations (Rust: nanoda_lib; Lean: lean4lean).
- [Loogle](https://loogle.lean-lang.org/) — search mathlib by statement shape. Also [LeanSearch](https://leansearch.net/). (Moogle's TLS certificate was expired on 2026-11-25.)

## Concept
- [Propositions as Types — Philip Wadler](https://homepages.inf.ed.ac.uk/wadler/papers/propositions-as-types/propositions-as-types.pdf) (2014; later CACM). Curry 1934, Howard 1969 (published 1980). **Use for**: the readable account of Curry–Howard. Note: Geuvers dates Howard's manuscript 1968.
- [Proof Assistants: history, ideas and future — Herman Geuvers](https://www.cs.ru.nl/~herman/PUBS/proofassistants.pdf) (Sadhana, 2009). Automath (1967), the de Bruijn criterion (name coined by Barendregt), the LCF lineage. **Use for**: pre-Lean history and the small-kernel principle. Does not say Automath was *the* first — say "one of the first".

## History before Lean
- [Early history of Coq — Rocq reference manual](https://rocq-prover.org/doc/V9.0.0/refman/history.html) — implementation begun 1984, version 4.10 released 1989. [Rocq 9.0 release](https://rocq-prover.org/releases/9.0.0) (Mar 12, 2025) completes the Coq→Rocq rename.
- [Formal verification of a realistic compiler — Leroy, CACM 2009](https://xavierleroy.org/publi/compcert-CACM.pdf) — CompCert: 42,000 lines of Coq, ~3 person-years.
- [Comprehensive Formal Verification of an OS Microkernel — Klein et al., TOCS 2014](https://sel4.systems/Research/pdfs/comprehensive-formal-verification-os-microkernel.pdf) — seL4: 2.2 person-years to build, ~20 for the proof.
- [A Machine-Checked Proof of the Odd Order Theorem — Gonthier et al.](https://www.cs.unibo.it/~asperti/PAPERS/odd_order.pdf) — six-year effort, 15 authors, >150,000 lines.
- [A formal proof of the Kepler conjecture — Hales et al.](https://arxiv.org/abs/1501.02155) — HOL Light + Isabelle.
- [Building the Mathematical Library of the Future — Quanta, Oct 1, 2020](https://www.quantamagazine.org/building-the-mathematical-library-of-the-future-20201001/) — the best single article on why mathlib's unified design matters; Mahboubi's "Coq is an old man now"; de Moura's "We built Lean because we care about software development"; mathlib size in Oct 2020.
- [Where is the fashionable mathematics? — Kevin Buzzard, Feb 9, 2020](https://xenaproject.wordpress.com/2020/02/09/where-is-the-fashionable-mathematics/) — a mathematician's complaint about the pre-Lean state of things.
- [Proof Assistant Makes Jump to Big-League Math — Quanta, Jul 28, 2021](https://www.quantamagazine.org/proof-assistant-makes-jump-to-big-league-math-20210728/)

## Lean itself
- [About the Lean FRO](https://lean-lang.org/fro/about/) — includes the project timeline (first commit Jul 2013; Lean 3 Jan 2017; mathlib Jul 2017; Lean 4 work begins Apr 2018; FRO Jul 2023; Lean 4.0 Sep 2023). [Supporters](https://lean-lang.org/fro/), [team](https://lean-lang.org/fro/team/), [roadmaps](https://lean-lang.org/fro/roadmap/).
- [The Lean 4 Theorem Prover and Programming Language — de Moura & Ullrich, CADE-28 2021](https://lean-lang.org/papers/lean4.pdf) — the primary source for "what's new in Lean 4": self-hosting, full extensibility, hygienic macros, compiles to C, functional-but-in-place.
- [Lean 4.0.0 release notes](https://lean-lang.org/doc/reference/latest/releases/v4.0.0/) — 2023-09-08; milestone releases from 2021-01-04.
- [Leonardo de Moura — about](https://leodemoura.github.io/about/) and his [blog](https://leodemoura.github.io/blog/) — Z3 background, move to AWS in 2023; the blog is the primary source for 2026 kernel postmortems and his AI-verification essays. Advocacy, but precise.
- [mathlib.org](https://mathlib.org/) and [statistics](https://mathlib.org/mathlib_stats.html) — 296,355 theorems / 142,131 definitions / 772 contributors on 2026-11-25. Re-read before quoting.
- [Growing Mathlib — arXiv 2508.21593](https://arxiv.org/abs/2508.21593) — the Lean 3→4 port (≈1M lines in ~10 months), library-size comparisons.
- [ACM SIGPLAN Programming Languages Software Award](https://www.sigplan.org/Awards/Software/) — 2025, Lean; "de facto choice for AI-based systems of mathematical reasoning".
- [Lean FRO and Mathlib receive $10M — Renaissance Philanthropy, Jul 24, 2025](https://www.renaissancephilanthropy.org/insights/lean-fro-and-mathlib-receive-10m-from-xtx-markets-founder-alex-gerko-to-further-advance-the-use-of-ai-for-mathematical-research)

## Neighbouring tools (lesson 5 — research pass 2026-11-25)

Design modelling and model checking
- [TLA+ home](https://lamport.azurewebsites.net/tla/tla.html) and [A High-Level View of TLA+](https://lamport.azurewebsites.net/tla/high-level-view.html) — Lamport's own pages. [Tools](https://lamport.azurewebsites.net/tla/tools.html): TLC (explicit-state model checker), [Apalache](https://apalache-mc.org/) (symbolic, uses Z3), [TLAPS](https://proofs.tlapl.us/doc/web/content/Home.html) (proof checker), PlusCal. [Industrial use](https://lamport.azurewebsites.net/tla/industrial-use.html): Intel, Xbox 360, Cosmos DB, Elastic, Kafka.
- [Use of Formal Methods at Amazon Web Services — Newcombe et al., 2014](https://lamport.azurewebsites.net/tla/formal-methods-amazon.pdf) — the table of S3/DynamoDB/EBS bugs. CACM version (Apr 2015) not fetched directly; [Lamport's excerpt](https://lamport.azurewebsites.net/tla/amazon-excerpt.html) has the 35-step trace line.
- [TLA+ Foundation launch — Linux Foundation, Apr 21, 2023](https://www.linuxfoundation.org/press/linux-foundation-launches-tlafoundation); [GenAI-accelerated TLA+ challenge](https://foundation.tlapl.us/challenge/index.html) (2025; winner Specula). [SysMoBench — arXiv 2509.23130](https://arxiv.org/abs/2509.23130): LLM-written TLA+ on real systems.
- [Conformance checking at MongoDB — Jun 2, 2025](https://www.mongodb.com/company/blog/engineering/conformance-checking-at-mongodb-testing-our-code-matches-our-tla-specs) — an honest account of how hard it is to tie a TLA+ spec to real code.
- [P](https://p-org.github.io/P/) and its [case studies](https://p-org.github.io/P/casestudies/) (S3 strong consistency); [Alloy](https://alloytools.org/).
- Hillel Wayne: [Why Don't People Use Formal Methods? (2019)](https://www.hillelwayne.com/post/why-dont-people-use-formal-methods/) and [The Business Case for Formal Methods (2020)](https://www.hillelwayne.com/post/business-case-formal-methods/) — the best practitioner writing on design-level vs code-level verification. [Marc Brooker — Formal Methods: Just Good Engineering Practice?](http://brooker.co.za/blog/2024/04/17/formal/) groups spec languages / deterministic simulation / verification-aware languages.
- ["Lean vs TLA+" thread, tlaplus list, Mar 2020](https://groups.google.com/g/tlaplus/c/R8FAk9tjRoc)

Solvers and Lean's automation
- [Z3](https://www.microsoft.com/en-us/research/project/z3-3/), [cvc5](https://cvc5.github.io/).
- [The grind tactic](https://lean-lang.org/doc/reference/latest/The--grind--tactic/) and the [tactic reference](https://lean-lang.org/doc/reference/latest/Tactic-Proofs/Tactic-Reference/) (`bv_decide`, `lia`, `decide`). Bridges to external provers: [lean-smt](https://github.com/ufmg-smite/lean-smt), [Lean-auto](https://github.com/leanprover-community/lean-auto), [LeanHammer](https://github.com/JOSHCLUNE/LeanHammer).

Code verifiers
- [Dafny](https://dafny.org/); [Formally verified cloud-scale authorization (AWS, ICSE 2025)](https://www.amazon.science/publications/formally-verified-cloud-scale-authorization); [How we built Cedar (Dafny era, May 2023)](https://www.amazon.science/blog/how-we-built-cedar-with-automated-reasoning-and-differential-testing).
- Rust: [Verus](https://github.com/verus-lang/verus), [Kani](https://github.com/model-checking/kani), [Prusti](https://github.com/viperproject/prusti-dev), [Creusot](https://github.com/creusot-rs/creusot); [verify-rust-std](https://github.com/model-checking/verify-rust-std) and the [Rust Foundation announcement, Nov 20, 2024](http://rustfoundation.org/news/rust-foundation-collaborates-with-aws-initiative-to-verify-rust-standard-libraries). Into Lean: [Aeneas](https://github.com/AeneasVerif/aeneas), [hax](https://github.com/cryspen/hax).
- [F*](https://fstar-lang.org/) and [HACL*](https://hacl-star.github.io/); [Liquid Haskell](https://ucsd-progsys.github.io/liquidhaskell/); [Why3](https://www.why3.org/); [Frama-C](https://frama-c.com/); SPARK/Ada.

Other provers and languages
- [Agda](https://en.wikipedia.org/wiki/Agda_(programming_language)), [Idris](https://www.idris-lang.org/); Mizar, [Metamath](https://us.metamath.org/).

AI across these tools
- [A benchmark for vericoding — arXiv 2509.22908, Sep 26, 2025](https://arxiv.org/abs/2509.22908) — Dafny 82% / Verus 44% / Lean 27% for off-the-shelf LLMs. Will date fast. Also [DafnyBench](https://arxiv.org/abs/2406.08467), [AutoVerus](https://arxiv.org/abs/2409.13082), [Verina](https://arxiv.org/abs/2505.23135), [CLEVER](https://arxiv.org/abs/2505.13938).

Lightweight end
- [QuickCheck](https://www.cse.chalmers.se/~rjmh/QuickCheck/), [OSS-Fuzz](https://google.github.io/oss-fuzz/), deterministic simulation: [FoundationDB](https://apple.github.io/foundationdb/testing.html), [Antithesis](https://antithesis.com/docs/resources/deterministic_simulation_testing/), [TigerBeetle](https://docs.tigerbeetle.com/concepts/safety/).

## Mathematics milestones
- Liquid Tensor Experiment: [Scholze's challenge, Dec 5, 2020](https://xenaproject.wordpress.com/2020/12/05/liquid-tensor-experiment/); [half-year report, Jun 5, 2021](https://xenaproject.wordpress.com/2021/06/05/half-a-year-of-the-liquid-tensor-experiment-amazing-developments/); [completion, Jul 15, 2022](https://leanprover-community.github.io/blog/posts/lte-final/).
- PFR: [paper, Nov 9, 2023](https://arxiv.org/abs/2311.05762); [Tao's Blueprint tour](https://terrytao.wordpress.com/2023/11/18/formalizing-the-proof-of-pfr-in-lean4-using-blueprint-a-short-tour/); [completion thread, Dec 5, 2023](https://leanprover-community.github.io/archive/stream/412902-Polynomial-Freiman-Ruzsa-conjecture/topic/Project.20completed!.20.20Thoughts.20and.20reflections.3F.html).
- [Tao interview — Scientific American, Jun 8, 2024](https://www.scientificamerican.com/article/ai-will-become-mathematicians-co-pilot/) — collaboration-without-trust quote.
- [Equational Theories Project — arXiv 2512.07087](https://arxiv.org/abs/2512.07087) — 22,028,942 implications, 34 authors.
- [Xena Project blog (Kevin Buzzard)](https://xenaproject.wordpress.com/) — **the one blog to follow** for an informed, sceptical insider's view. FLT project repo: [ImperialCollegeLondon/FLT](https://github.com/ImperialCollegeLondon/FLT).
- [Sphere packing in dimension 8 — arXiv 2604.23468](https://arxiv.org/abs/2604.23468); [Math, Inc.'s account](https://www.math.inc/sphere-packing); [IEEE Spectrum, Mar 2, 2026](https://spectrum.ieee.org/ai-proof-verification).

## AI + Lean
- [AlphaProof at IMO 2024 — Google DeepMind, Jul 25, 2024](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/). Nature paper Nov 12, 2025, DOI 10.1038/s41586-025-09833-y (paywalled; not fetched directly).
- IMO 2025: [OpenAI (via Simon Willison)](https://simonwillison.net/2025/Jul/19/openai-gold-medal-math-olympiad/); [Gemini Deep Think](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/); [Harmonic Aristotle](https://harmonic.fun/news/imo-ios); [ByteDance Seed-Prover](https://arxiv.org/abs/2507.23726).
- [DeepMind formal proof search on open problems — arXiv 2605.22763, May 21, 2026](https://arxiv.org/abs/2605.22763) — 9/353 Erdős problems, 44/492 OEIS conjectures.
- [Formalizing Fermat's Last Theorem — Anthropic, Sep 4, 2026](https://www.anthropic.com/research/formalizing-fermats-last-theorem) and [Buzzard's same-day response](https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/). Both fetched directly and confirmed.
- [Harmonic news index](https://harmonic.fun/news) — Series C ($120M at $1.45B, Nov 25, 2025); moves into C/Verilog/Rust verification in autumn 2026.
- [Prediction: AI will make formal verification go mainstream — Martin Kleppmann, Dec 8, 2025](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)
- [When AI Writes the World's Software, Who Verifies It? — de Moura, Feb 28, 2026](https://leodemoura.github.io/blog/2026-2-28-when-ai-writes-the-worlds-software-who-verifies-it)
- [Cedar use case — lean-lang.org](https://lean-lang.org/use-cases/cedar/). Note: Cedar's models were originally in Dafny ([Amazon Science, May 2023](https://www.amazon.science/blog/how-we-built-cedar-with-automated-reasoning-and-differential-testing)) and moved to Lean later.
- [De Moura's ETAPS Industry Day slides, Apr 15, 2026](https://leodemoura.github.io/static/etaps-industry-2026/) — catalogue of industrial uses (AWS SampCert/Strata, Microsoft SymCrypt via Aeneas, Google, Galois, Nethermind). Not yet used in a lesson; the source for a possible "verified software" follow-up.
- Benchmarks, for reference: [miniF2F](https://github.com/openai/miniF2F), [PutnamBench](https://github.com/trishullab/PutnamBench), [LeanDojo](https://leandojo.org/).

## Limits and scepticism
- [Postmortem for kernel soundness bug #14576 — de Moura, Aug 1, 2026](https://leodemoura.github.io/blog/2026-8-1-postmortem-for-kernel-soundness-bug-14576) (fetched directly) and [the bug-hunt postmortem, Aug 24, 2026](https://leodemoura.github.io/blog/2026-8-24-postmortem-for-the-kernel-soundness-bug-hunt); [verified kernels, Oct 15, 2026](https://leodemoura.github.io/blog/2026-10-15-lean-now-ships-with-verified-kernels).
- […and the proof is checked in Lean — Buzzard, Nov 12, 2026](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) — the statement-vs-intent problem, with numbers.
- [Navier-Stokes lost in translation — arXiv 2610.08144, Oct 6, 2026](https://arxiv.org/abs/2610.08144)
- [Proof assistants in the age of AI — de Moura, Feb 18, 2026](https://leodemoura.github.io/blog/2026-2-18-proof-assistants-in-the-age-of-ai) — "The formal statement is the trust anchor."
- [How AI Tore Through a Mathematical Community — Quanta, Aug 3, 2026](https://www.quantamagazine.org/how-ai-tore-through-a-mathematical-community-20260803/)
- [OpenAI's math solutions aren't meeting the field's standards yet — TechCrunch, Oct 8, 2026](https://techcrunch.com/2026/10/08/openais-math-solutions-arent-meeting-the-fields-standards-yet/)
- [Math, Inc. and Gauss discussion — Lean Zulip, Sep 2025](https://leanprover-community.github.io/archive/stream/219941-Machine-Learning-for-Theorem-Proving/topic/Math.2C.20Inc.2C.20and.20Gauss.20discussion.html) — community reaction to AI-written Lean.
- [mathlib contribution guide](https://leanprover-community.github.io/contribute/) — AI-disclosure requirement.

## Known gaps
See the "Sourcing caveats" list in NOTES.md.
