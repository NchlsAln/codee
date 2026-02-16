export function concurrencyTemplate(): string {
  return [
    "ch = Channel(Int32).new",
    "spawn do",
    "  ch.send(1)",
    "end",
    "value = ch.receive",
    "thread = Thread.new { value }",
    "atom = Atomic(Int32).new(0)",
    "atom.compare_and_set(0, 1)",
    "value; thread.join"
  ].join("\n");
}
