# Repo orientation for Claude Code

This is a personal, static (no build step) collection of self-paced learning courses, deployed via GitHub Pages. Read `README.md` for the human-facing overview; this file is agent-facing.

## Structure

- Each top-level directory (e.g. `japanese-mythology/`, `ios-distribution/`) is one independent course.
- The root `index.html` is a card index linking to each course's own `<topic>/index.html`.
- `assets/` at the repo root holds the shared top-level site stylesheet only. Each course has its own `<topic>/assets/` for its lesson stylesheet and interactive components (quiz/recall widgets) — courses do not share a visual theme with each other by design.

## Adding or continuing a course

Courses are authored and maintained with the **`/teach`** skill. A course workspace follows that skill's format: `MISSION.md`, `RESOURCES.md`, `GLOSSARY.md`, `NOTES.md`, `lessons/`, `reference/`, `learning-records/`, `assets/`. Before working on an existing course, read its `MISSION.md` and `NOTES.md` first — they carry forward context (goals, prior learner state, teaching preferences) across sessions.

When a **new** course is added, also add a matching card to the root `index.html` (same pattern as the existing cards) so it's reachable from the site's front page.

## Deploying

After any content change, run:

```
.claude/push.sh "<commit message>"
```

This stages everything, commits, and pushes to `origin/master` in one step (see the script for exact behavior). GitHub Pages rebuilds automatically within a minute or two — no separate deploy step. Prefer this script over manual `git add`/`commit`/`push` for routine content pushes to keep the workflow consistent.
