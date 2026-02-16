export function visualizationTemplate(): string {
  return [
    "figure;",
    "scatter(x, y);",
    "xlabel('x'); ylabel('y');"
  ].join("\n");
}
