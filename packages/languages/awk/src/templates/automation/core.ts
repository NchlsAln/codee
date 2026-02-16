export function automationTemplate(): string {
  return [
    "awk '$3 > 100 { print $1 }' data.csv",
    "awk 'NR==1 { next } { sum += $2 } END { print sum }' data.csv"
  ].join("\n");
}
