export function reportingTemplate(): string {
  return [
    "publish('report.m', 'pdf');"
  ].join("\n");
}
