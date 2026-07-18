# Mission: iOS App Distribution — How It Actually Works

## Why
The user is actively building a native Swift/SwiftUI app and trying to get a build onto TestFlight right now. They already have a paid Apple Developer Program membership and have clicked through Xcode's Signing & Capabilities tab, but the terms (App ID, provisioning profile, archive, xcodeproj, xcodegen…) feel like disconnected trivia rather than one system. The goal is to replace "follow the steps and hope it works" with an actual mental model of what each step does and why it's required — so future signing errors, Archive failures, or App Store Connect states are diagnosable, not mysterious.

## Success looks like
- Can explain what an App ID / Bundle ID is, and why it must be registered on developer.apple.com *before* a build can be signed
- Can describe, in order, what Xcode actually does when you choose **Product → Archive** (compile, sign, bundle, produce dSYMs) and what happens next when you **export/distribute** that archive
- Can explain the code-signing trust chain (Apple Developer Program membership → certificate → App ID → provisioning profile → device/App Store) well enough to know *which link is broken* when signing fails
- Can explain what `.xcodeproj`/`.pbxproj` actually is, and what problem tools like XcodeGen solve that plain Xcode doesn't
- Can walk through the real end-to-end procedure from a working Xcode project to a build live on TestFlight for a tester, narrating each step
- Knows the two or three places where the Expo/EAS Build workflow (their other project) handles this differently, since they maintain both

## Constraints
- Material in English, grounded in real research (official Apple docs, WWDC/technotes, high-reputation engineering write-ups) — Apple's tooling and UI shift across Xcode versions, so claims should be checked, not recalled from memory, and cited
- Not a beginner: skip "how to install Xcode," teach at the level of someone who has already used Signing & Capabilities and wants the *why* underneath it
- Primary frame is the native Swift project. Expo/React Native (their other project) should appear only as short delta call-outs where the underlying Apple mechanics diverge — not a parallel curriculum
- Current distribution goal is **TestFlight beta**, not yet a public App Store release — the end-to-end walkthrough should terminate at "tester has the build," not at App Store review/marketing
- Keep the course short — a small number of tightly-scoped lessons that connect into one picture, not exhaustive coverage of every Apple Developer feature

## Out of scope
- Swift/SwiftUI programming itself
- App Store review guidelines, ASO, marketing/listing strategy
- macOS notarization (a related but separate trust system — worth one clarifying mention so it isn't confused with iOS code signing, not a full lesson)
- CI/CD automation (fastlane, Xcode Cloud, GitHub Actions signing) beyond a passing mention of what problem they solve
- Enterprise/Ad Hoc distribution mechanics in depth (their channel is TestFlight) — covered only as a comparison row, not a walkthrough
