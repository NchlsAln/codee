export function webTemplate(): string {
  return [
    "import jester",
    "routes:",
    "  get \"/health\":",
    "    resp \"ok\"",
    "  get \"/users\":",
    "    resp \"[]\""
  ].join("\n");
}
