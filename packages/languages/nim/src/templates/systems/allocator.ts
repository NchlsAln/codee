export function allocatorTemplate(): string {
  return [
    "import system",
    "var p = allocShared0(64)",
    "defer: deallocShared(p)"
  ].join("\n");
}
