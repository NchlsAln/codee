export function reportingTemplate(): string {
  return [
    "sed -n '=' app.log | tail -n 1",
    "sed -n '1,5p' report.txt"
  ].join("\n");
}
