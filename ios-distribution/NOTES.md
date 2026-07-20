# NOTES — teaching notes

## Language & audience
- English. Not a beginner — already enrolled in the Apple Developer Program and has used Signing & Capabilities in Xcode before. Don't re-teach "how to install Xcode" or "what is an IDE."
- The gap is *connective*: individual terms have been encountered, but don't form one system yet. Every lesson should explicitly wire new terms into terms already covered (like the mythology workspace's "spine").

## Project context
- Maintains **two** projects: a native Swift/SwiftUI app (the one currently being distributed — primary teaching frame) and a separate Expo/React Native app. Teach natively; add short delta call-out boxes for Expo/EAS Build only where the underlying Apple mechanics genuinely differ (credential *storage* location, mainly) — not a parallel curriculum.
- Immediate real goal: get a build onto **TestFlight** (beta), not yet public App Store release. The end-to-end walkthrough (L0005) should stop at "tester has the build," not continue into App Store review/marketing — that's a future mission extension, not this one.

## Sourcing
- User explicitly asked for research-backed material since Apple's tooling/UI changes over time (Xcode version, App Store Connect layout). Every non-obvious factual claim in a lesson should carry a citation, same convention as the mythology workspace's `sup.cite` footnotes. See RESOURCES.md — prefer Apple's own technotes (TN31xx series) as the ground truth when a secondary source and Apple's docs seem to disagree.
- Current Xcode generation as of writing (mid-2026) is the 26/27 line (WWDC 2026 announced Xcode 27). UI chrome (menu wording, Organizer layout) has stayed conceptually stable across recent versions, but avoid hard-coding version-specific screenshots/menu paths that could drift — describe the concept and link to Apple's release notes for exact current wording.

## Format preferences
- Course should be **short** — the user was explicit about not wanting a long course. Original target was 5 tightly-scoped lessons; grew to 6 (L0006 added) on explicit, high-value user request rather than scope creep — see below. Still bounded: enterprise distribution, notarization, CI automation remain explicitly out of scope per MISSION.md.
- Reused the mythology workspace's component pattern (`lesson.css`, `quiz.js`, `recall.js`) with a new visual theme suited to a technical/systems topic rather than copying the paper/mincho aesthetic verbatim.

## Concrete walkthroughs land better than assembled-from-concepts ones (L0006)
- After L0001–L0005 (each teaching one concept, with L0005 already being a checklist), the user still wanted a *sixth* lesson: the exact developer portal trail — literal screens, fields, button labels — narrated once from empty to a TestFlight build, using their **real app** (EbiHouse, Bundle ID `tokyo.harvath.ebihouse`, a push-notification app) as the running example rather than a placeholder like `com.you.app`.
- Their words: existing lessons "probably explain most of them" conceptually, but wanted it "explained again by following the developer's actual trail" — i.e., a synthesis/capstone lesson in **procedure mode** (concrete steps + why, interleaved) is a genuinely different artifact from lessons in **concept mode** (abstract mechanism + why), even when the underlying content overlaps heavily. Don't assume covering a concept once, abstractly, satisfies the need for a concrete run-through of it.
- Real values (their actual Bundle ID/app name) were used directly in the published lesson rather than genericized — matches this user's consistent preference for concreteness over abstraction throughout this course.
- If another capstone/walkthrough lesson gets requested later for a different real task (e.g. public App Store submission), default to this same shape: literal portal steps first, a "why" box under each step tying back to the specific earlier lesson it operationalizes, plus a closing table of "how often does this step recur."

## Forward-references need inline glosses (learned after L0001 feedback)
- Unlike the mythology workspace — where naming a kami in L0001 before explaining it in a later lesson works as a hook ("who is this, I'll find out later") — this user found the same pattern in L0001 (App ID, provisioning profile mentioned before being defined) genuinely disorienting, not intriguing. Said outright: terms "come out of the blue," and a definition-by-function only ("proves X is allowed to run here") wasn't enough to grasp a mechanism — wanted to know the actual data it holds and when/how it's read.
- Likely why the two topics differ: mythology is narrative/recreational, so unresolved mystery is part of the appeal. iOS distribution is a live, blocking task — the user needs an operable mental model *now*, not narrative anticipation.
- **Rule going forward**: any term used before its dedicated lesson needs, at minimum, a one-clause inline gloss (what it concretely is) plus an explicit pointer to where full detail lives — not just a `<span class="term">` tag and a forward link at the end of the lesson. For mechanism-type concepts (not just named entities), the gloss should include *what data it holds* and *when/by what it's read*, not only *what it proves/does* in the abstract.
- Applied retroactively to L0001's App ID and provisioning profile mentions.
- **Recurred at L0003** (CocoaPods, Tuist named with no anchor) — fixed the same way, plus proactively audited and fixed L0004 (`arm64`, `.ipa`) and L0005 (`EAS` unexpanded) for the identical pattern rather than waiting for it to be flagged a third time. Treat "every named tool/format/acronym gets a same-sentence gloss on first mention" as a hard default for this workspace now, not a case-by-case judgment call.
