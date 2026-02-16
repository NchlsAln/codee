export function dataExtractionTemplate(): string {
  return [
    "awk -F, 'NR>1 { print $1, $3 }' data.csv",
    "jq -r '.items[] | [.id,.name] | @tsv' data.json",
    "grep -E \"user=|status=\" app.log"
  ].join("\n");
}
