# iOS App Distribution Resources

## Knowledge — Apple, primary source

- [Register an App ID (Apple Developer Help)](https://developer.apple.com/help/account/identifiers/register-an-app-id)
  Official steps and rules for explicit vs. wildcard App IDs. **Use for**: confirming current App ID registration behavior — this page updates as App Store Connect's UI changes.
- [TN3125: Inside Code Signing — Provisioning Profiles](https://developer.apple.com/documentation/technotes/tn3125-inside-code-signing-provisioning-profiles)
  Apple's own deep technical note on what a provisioning profile contains and how it's used. **Use for**: the authoritative answer when a signing error needs root-causing.
- [TN3161: Inside Code Signing — Certificates](https://developer.apple.com/documentation/technotes/tn3161-inside-code-signing-certificates)
  Companion technote on certificates specifically (identity, key pairs, trust). **Use for**: understanding *why* a certificate can go invalid (revoked, expired, wrong machine).
- [TN3127: Inside Code Signing — Requirements](https://developer.apple.com/documentation/technotes/tn3127-inside-code-signing-requirements)
  Covers code signing requirements/entitlements matching. **Use for**: entitlement mismatch errors specifically.
- [TN3109: Resolving Common Archiving Issues](https://developer.apple.com/documentation/technotes/tn3109-resolving-common-archiving-issues)
  Apple's own troubleshooting note for `Product → Archive` failures. **Use for**: first stop when an archive won't build or won't validate.
- [Customizing the Xcode Archive Process](https://developer.apple.com/documentation/security/customizing-the-xcode-archive-process)
  How the archive step can be hooked/customized. **Use for**: understanding archive as a real, inspectable build phase rather than a black box.
- [Distributing your app for beta testing and releases](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)
  Apple's overview of what happens after archiving: export methods and where each one goes. **Use for**: the canonical list of distribution methods and when each applies.
- [TestFlight overview (App Store Connect Help)](https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/)
  Internal vs. external testers, build expiration (90 days), review requirements. **Use for**: the current TestFlight process — this is the user's active distribution channel.
- [Xcode Release Notes](https://developer.apple.com/documentation/xcode-release-notes)
  Apple's changelog per Xcode version. **Use for**: checking whether a specific UI detail (menu wording, Organizer layout) has moved before trusting an older tutorial.

## Knowledge — engineering write-ups (secondary, cross-checked)

- [XcodeGen (GitHub — yonaskolb/XcodeGen)](https://github.com/yonaskolb/XcodeGen)
  The tool's own README states its problem/solution directly: generate `.xcodeproj` from a YAML spec instead of committing the generated file. **Use for**: the ground-truth motivation, in the maintainers' own words.
- [How DoorDash uses XcodeGen to eliminate project merge conflicts (DoorDash Engineering)](https://careersatdoordash.com/blog/how-doordash-uses-xcodegen-to-eliminate-project-merge-conflicts/)
  A production team's account of the `.pbxproj` merge-conflict problem XcodeGen solves at scale. **Use for**: a concrete "why this matters on a real team" story.
- [Strategies to avoid merge conflicts in Xcode Projects (Tuist blog)](https://tuist.dev/blog/2025/03/21/git-conflicts)
  Written by the maintainers of Tuist, a XcodeGen alternative — covers the same problem plus how Tuist's approach differs. **Use for**: understanding this is a *category* of tool (generated-project pattern), not a single tool's quirk.
- [Appcircle — iOS Code Signing: Certificates, Provisioning Profiles & Secure CI/CD](https://appcircle.io/guides/ios/ios-code-signing)
  Written by a CI/CD vendor whose product has to automate exactly this chain correctly. **Use for**: a clear plain-language walk of the certificate/profile/device relationship, cross-checked against Apple's technotes above.
- [Capawesome — iOS Certificates and Provisioning Profiles Explained](https://capawesome.io/blog/ios-certificates-and-provisioning-profiles-explained/)
  Another independent explainer of the same chain. **Use for**: a second phrasing when the Appcircle explanation doesn't click.

## Knowledge — Expo/React Native delta (for the user's other project)

- [Expo — App credentials](https://docs.expo.dev/app-signing/app-credentials/)
  How EAS Build's managed credentials map onto Apple's certificates/profiles. **Use for**: translating what EAS is doing under the hood back into Apple's native vocabulary.
- [Expo — Apple Developer Program roles and permissions for EAS Build](https://docs.expo.dev/app-signing/apple-developer-program-roles-and-permissions/)
  Which Apple Developer account role EAS needs and why. **Use for**: understanding that EAS is a *client* of the same Apple systems, not a replacement for them.

## Wisdom (Communities)

- [Apple Developer Forums — Code Signing tag](https://developer.apple.com/forums/tags/code-signing-topic)
  Official Apple forum, monitored by Apple engineers on some threads. **Use for**: signing errors specific to a current Xcode version, where third-party blogs may be stale.
- [r/iOSProgramming](https://www.reddit.com/r/iOSProgramming/)
  General iOS dev community. **Use for**: "is this normal" sanity checks on build/distribution friction.
- [iOS Dev Weekly (Dave Verwer)](https://iosdevweekly.com/)
  Long-running, highly-regarded weekly newsletter curating iOS engineering articles. **Use for**: staying current on tooling changes (Xcode versions, App Store Connect changes) without hunting for them.

## Gaps (to fill later, only if the mission grows)

- No community specifically vetted yet for App Store *review* strategy (out of scope for now — mission is TestFlight, not public release).
- fastlane / Xcode Cloud (CI-driven signing automation) is mentioned only in passing in the lessons — not yet researched deeply, since the user is still doing this manually. Revisit if/when automation becomes the goal.
- macOS notarization has deliberately not been researched in depth — related trust system, different mission.
