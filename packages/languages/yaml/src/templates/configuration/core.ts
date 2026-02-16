export function configurationTemplate(): string {
  return [
    "env: prod",
    "features:",
    "  beta: false"
  ].join("\n");
}
