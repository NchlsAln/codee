export function reportingTemplate(): string {
  return [
    "using Weave",
    "weave(\"report.jmd\")"
  ].join("\n");
}
