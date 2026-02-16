export function reportingTemplate(): string {
  return [
    "awk '{ counts[$1]++ } END { for (k in counts) print k, counts[k] }' input.txt",
    "awk 'END { printf \"Rows: %d\\n\", NR }' data.csv"
  ].join("\n");
}
