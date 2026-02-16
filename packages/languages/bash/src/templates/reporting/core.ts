export function reportingTemplate(): string {
  return [
    "count=$(grep -c \"ERROR\" app.log)",
    "printf \"Errors: %s\\n\" \"$count\"",
    "printf \"Report generated at %s\\n\" \"$(date -Iseconds)\""
  ].join("\n");
}
