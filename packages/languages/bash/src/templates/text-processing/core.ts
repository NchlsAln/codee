export function textProcessingTemplate(): string {
  return [
    "grep -E \"ERROR|WARN\" app.log | sort | uniq -c",
    "cut -d, -f1,3 data.csv | head -n 5",
    "tr -s ' ' < input.txt"
  ].join("\n");
}
