# iOS App Distribution Glossary

The canonical language for this workspace. All lessons and reference docs use these terms consistently — once a term is defined here, later definitions reuse it instead of re-explaining it.

## Accounts & Identity (L0002)

**Apple Developer Program**:
The paid membership (per Apple Account) that unlocks the ability to create signing certificates, register App IDs, and submit to App Store Connect. Without it, Xcode can still sign apps for your own devices using a free personal team, but nothing can leave your own hardware.
_Avoid_: developer account (ambiguous — could mean the free tier too)

**Team ID**:
A 10-character ID Apple assigns to your Apple Developer Program membership (an individual or an organization). Every certificate, App ID, and provisioning profile is scoped to one Team ID.
_Avoid_: developer ID

**Bundle ID**:
The reverse-DNS string (`com.yourcompany.yourapp`) set in Xcode's target settings that uniquely names your app on a device and in App Store Connect. Lives in your project; Apple never generates this for you.
_Avoid_: package name (that's Android's term)

**App ID**:
Apple's server-side registration of a Bundle ID on developer.apple.com, plus the list of capabilities (Push Notifications, iCloud, etc.) that Bundle ID is allowed to use. A provisioning profile cannot be issued until the matching App ID exists.
_Avoid_: application ID, app identifier

**Explicit App ID**:
An App ID registered for exactly one Bundle ID. Required for any app using capabilities like Push Notifications or In-App Purchase.
_Avoid_: single App ID

**Wildcard App ID**:
An App ID registered with a trailing `*` (e.g. `com.yourcompany.*`) that covers many Bundle IDs at once. Cannot use capabilities that require explicit identification.
_Avoid_: generic App ID

## Code Signing (L0002)

**Signing certificate**:
A file (public key + Apple's signature over it) proving a private key belongs to your Apple Developer Program membership. The matching private key lives only in your Mac's Keychain — Apple never has it. Comes in two flavors that matter here: **Development** (runs on your registered devices) and **Distribution** (required for TestFlight/App Store).
_Avoid_: signing identity (used interchangeably, but "certificate" is the concrete artifact)

**Provisioning profile**:
A file Apple generates that bundles together one App ID, one or more certificates authorized to sign it, the entitlements it may use, and — for Development/Ad Hoc profiles — the specific device UDIDs allowed to run it. This is the piece that actually authorizes *this app, signed by this certificate, to run on this device*.
_Avoid_: profile (ambiguous with user/Xcode profiles)

**Entitlements**:
The specific capabilities (Push Notifications, App Groups, HealthKit, etc.) a provisioning profile grants to a signed app. Must match what's declared in the App ID and in the app's own entitlements file, or code signing fails.
_Avoid_: capabilities (that's the Xcode UI tab name; entitlements is what actually ends up embedded)

**Registered device**:
A specific iPhone/iPad, identified by its UDID, added to your Apple Developer account so Development and Ad Hoc provisioning profiles can list it as allowed. Not required for TestFlight or the App Store, since Apple itself re-signs/distributes those builds.
_Avoid_: UDID (that's just the identifier, not the registration)

## The Xcode Project (L0003)

**`.xcodeproj`**:
The bundle (a folder that looks like a single file in Finder) describing targets, build settings, file references, and schemes for a project. The actual data lives inside it in `project.pbxproj`.
_Avoid_: Xcode project file (imprecise — the project *is* the bundle, `.pbxproj` is the file)

**`project.pbxproj`**:
The single large, mostly-generated text file inside `.xcodeproj` that Xcode's UI reads and rewrites on nearly every change (adding a file, changing a build setting). Its format is an old-style property list with internal object IDs, which is why two branches touching it independently tend to produce unresolvable merge conflicts.
_Avoid_: pbxproj file (fine as shorthand once defined)

**Workspace**:
A `.xcworkspace` that groups one or more `.xcodeproj`s (and/or Swift packages) together. CocoaPods and multi-project setups need one; a single-target app usually doesn't.
_Avoid_: project (workspace is the container *above* a project)

**Target**:
A single buildable product inside a project (the app itself, a widget extension, a unit test bundle). Each target has its own Bundle ID, signing settings, and build settings.
_Avoid_: module (Swift's own compilation-unit term — related, not identical)

**Scheme**:
A saved combination of *which target(s) to build*, *which build configuration to use*, and *what action to run* (Run, Test, Archive). Selecting a scheme in Xcode's toolbar is choosing which of these bundles to act on.
_Avoid_: build target (conflates scheme and target)

**Build configuration**:
A named set of build settings — Xcode ships with **Debug** and **Release** by default. Archives always build the Release configuration of the chosen scheme.
_Avoid_: build mode

**XcodeGen**:
A community tool that generates a `.xcodeproj` from a declarative `project.yml` spec, so the generated (conflict-prone) project file never has to be committed to git — only the YAML is. Tuist solves the same class of problem with a different spec format.
_Avoid_: project generator (accurate but loses the specific tool name once introduced)

## Build & Distribute (L0004, L0005)

**Archive**:
The action triggered by **Product → Archive** in Xcode: build the active scheme's Release configuration for a generic/real device (never the Simulator), code-sign the result, and package it as a `.xcarchive`.
_Avoid_: build (an archive is a specific *kind* of build, not a synonym for it)

**`.xcarchive`**:
The bundle produced by archiving: the signed `.app`, its `.dSYM` debug symbol files, and metadata (bundle ID, version, build number). Not yet distributable on its own — it still needs to be *exported*.
_Avoid_: build artifact (accurate but not the term Xcode uses)

**dSYM**:
A debug symbol file mapping the compiled binary's memory addresses back to source file/line, generated alongside the archive. Needed to turn a crash report's raw addresses into a readable stack trace.
_Avoid_: symbols (fine once dSYM is established)

**Export / distribution method**:
The step after archiving where Xcode's Organizer re-packages the `.xcarchive` for a specific destination — App Store Connect, Ad Hoc, Enterprise, or Development — each with its own signing/provisioning requirements.
_Avoid_: upload (upload is only one export method's outcome)

**Organizer**:
Xcode's window (**Window → Organizer**) listing archives and exposing the export/distribute actions after `Product → Archive` finishes.
_Avoid_: Archives window (colloquial, but Organizer is the actual window name)

**App Store Connect**:
Apple's web platform for managing an app's metadata, TestFlight builds, and App Store submissions. A distinct system from developer.apple.com's certificates/identifiers pages, though they share the same Apple Developer Program membership and Team ID.
_Avoid_: iTunes Connect (its old, retired name — still shows up in outdated tutorials)

**TestFlight**:
Apple's beta distribution system. A build uploaded to App Store Connect can be handed to **internal testers** (your team, no review, available in minutes) or **external testers** (up to 10,000 people, first build per version needs a short App Review). Builds expire 90 days after upload.
_Avoid_: beta app (TestFlight is the system; there's no separate "beta app" concept for your build)

**Build number**:
The `CFBundleVersion` — a value that must increase on every single upload to App Store Connect, distinct from the user-facing version string (`CFBundleShortVersionString`, e.g. "1.2.0") which only changes on real releases.
_Avoid_: version (conflates the two distinct numbers)
