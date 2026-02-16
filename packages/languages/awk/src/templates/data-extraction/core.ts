export function dataExtractionTemplate(): string {
  return [
    "awk -F, 'NR>1 { print $1, $3 }' data.csv",
    "awk -F\"[=: ]+\" '/status/ { print $2 }' app.log"
  ].join("\n");
}
