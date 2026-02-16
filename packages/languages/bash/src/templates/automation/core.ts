export function automationTemplate(): string {
  return [
    "set -euo pipefail",
    "for file in *.log; do",
    "  [ -s \"$file\" ] && gzip -9 \"$file\"",
    "done"
  ].join("\n");
}
