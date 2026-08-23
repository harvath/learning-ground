# Learning Ground

A personal collection of self-paced learning courses, built as static
HTML/CSS/JS with no build step. Each course is authored with the `/teach`
Claude Code skill and has its own visual theme.

## Live site

Served via GitHub Pages: https://harvath.github.io/learning-ground/

## Courses

- `japanese-mythology/` — 記紀神話 (Kojiki/Nihon Shoki), for creative reuse and critical reading
- `ios-distribution/` — App IDs, code signing, Xcode's project file, TestFlight
- `ancient-greece/` — history/politics backbone for reading Plato
- `ai-economy/` — the current AI industry: players, money, tooling, what's dated
- `data-engineering-for-ai/` — storing, describing, governing, and serving org data to agents
- `sales-management/` — sales management domain knowledge mapped onto Twenty CRM's data model

## Structure

- `/` → top-level index (card linking to each course's own `index.html`)
- `<course>/` → lessons, reference pages, glossary, learning records, own `assets/`
- `assets/` → shared top-level site styles only (courses don't share a visual theme by design)

## Updating content

1. Edit files, locally or via a remote Claude Code session (see below).
2. Commit and push to `master` — `.claude/push.sh "<message>"` stages, commits,
   and pushes in one step.
3. GitHub Pages rebuilds automatically — changes are live within a minute or two.

No server to manage, no build step.

## Editing remotely (mobile-friendly)

This repo is set up so a remote Claude Code session can edit and push directly:

- `.claude/settings.local.json` (gitignored, machine-local) grants standing
  permission for `git add` / `commit` / `push` in this repo, so pushes don't
  need a permission prompt each time.
- Once pushed, GitHub Pages picks up the change automatically.

## Self-hosting (alternative)

If you'd rather run this on your own box instead of GitHub Pages, see
[`deploy/README.md`](deploy/README.md) for an nginx-based setup.
