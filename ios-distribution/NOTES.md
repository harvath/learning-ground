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
- Course should be **short** — the user was explicit about not wanting a long course. Aiming for 5 tightly-scoped lessons rather than exhaustively covering every Apple Developer feature (enterprise distribution, notarization, CI automation are all explicitly out of scope per MISSION.md).
- Reused the mythology workspace's component pattern (`lesson.css`, `quiz.js`, `recall.js`) with a new visual theme suited to a technical/systems topic rather than copying the paper/mincho aesthetic verbatim.
