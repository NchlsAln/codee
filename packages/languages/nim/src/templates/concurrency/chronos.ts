export function chronosTemplate(): string {
  return [
    "import chronos",
    "proc main() {.async.} =",
    "  await sleepAsync(10.milliseconds)",
    "  echo \"ok\"",
    "waitFor main()"
  ].join("\n");
}
