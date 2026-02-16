export function asyncTemplate(): string {
  return [
    "ch = Channel(Int32).new",
    "spawn do",
    "  ch.send(42)",
    "end",
    "puts ch.receive"
  ].join("\n");
}
