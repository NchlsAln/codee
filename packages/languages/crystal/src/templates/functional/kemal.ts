export function kemalTemplate(): string {
  return [
    "require \"kemal\"",
    "get \"/health\" do",
    "  \"ok\"",
    "end",
    "Kemal.run"
  ].join("\n");
}
