export function jesterTemplate(): string {
  return [
    "import jester",
    "routes:",
    "  get \"/health\":",
    "    resp \"ok\""
  ].join("\n");
}
