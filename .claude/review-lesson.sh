#!/usr/bin/env bash
# review-lesson.sh — automated pre-push sanity checks for /teach lesson HTML files.
# Checks: HTML tag balance (div/p/span), inline-citation vs sources-footer
# consistency, and lists recall/quiz question numbering for a quick visual check.
#
# Usage: .claude/review-lesson.sh <lesson.html> [more.html ...]

set -euo pipefail

if [ "$#" -eq 0 ]; then
  echo "usage: review-lesson.sh <lesson.html> [more.html ...]" >&2
  exit 1
fi

status=0

for file in "$@"; do
  if [ ! -f "$file" ]; then
    echo "!! File not found: $file" >&2
    status=1
    continue
  fi

  echo "=== $file ==="

  echo "-- tag balance --"
  for tag in div p span; do
    opens=$(grep -oE "<${tag}(\s|>)" "$file" | wc -l | tr -d ' ')
    closes=$(grep -oE "</${tag}>" "$file" | wc -l | tr -d ' ')
    if [ "$opens" != "$closes" ]; then
      echo "   MISMATCH $tag: open=$opens close=$closes"
      status=1
    else
      echo "   ok $tag: $opens"
    fi
  done

  echo "-- citations: inline vs footer --"
  inline=$(grep -oP '(?<=class="cite"><a href=")[^"]*(?="[^>]*>\[\d+\])' "$file" | sort -u || true)
  footer=$(grep -oP '\[\d+\]\s*<a href="\K[^"]+' "$file" | sort -u || true)
  if [ "$inline" == "$footer" ]; then
    echo "   ok: $(echo "$footer" | grep -c . || echo 0) sources, inline set == footer set"
  else
    echo "   MISMATCH between inline citations and sources footer:"
    diff <(echo "$inline") <(echo "$footer") | sed 's/^/     /' || true
    status=1
  fi

  echo "-- recall/quiz numbering (eyeball the sequence) --"
  grep -n 'recall-q\|quiz-q' "$file" | sed -E 's/^([0-9]+):.*>([①②③④⑤⑥⑦⑧⑨⑩]).*/  line \1: \2/' || echo "   (none found)"

  echo ""
done

exit $status
