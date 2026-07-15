# Learning Ground

A personal collection of self-paced learning material — currently Japanese
mythology — built as static HTML/CSS/JS with no build step.

## Live site

Served via GitHub Pages: https://harvath.github.io/learning-ground/

## Structure

- `/` → top-level index (all topics)
- `japanese-mythology/` → lessons, reference pages, glossary, learning records
- `assets/` → shared site styles

## Updating content

1. Edit files, locally or via a remote Claude Code session (see below).
2. Commit and push to `master`.
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
